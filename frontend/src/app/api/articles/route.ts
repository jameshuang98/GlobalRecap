import { NextRequest, NextResponse } from "next/server";
import { getPool } from "@/lib/db";

export async function GET(request: NextRequest) {
    try {
        const pool = getPool();

        const { searchParams } = new URL(request.url);
        const date = searchParams.get("date");

        if (!date) {
            return NextResponse.json({ error: "Missing date query parameter" }, { status: 400 });
        }

        const selectQuery = `
            SELECT 
                articles.*, 
                array_to_json(array_agg(article_tags.tag)) AS tags
            FROM articles
            JOIN article_tags ON articles.id = article_tags.article_id
            WHERE articles.event_date = $1
            GROUP BY articles.id
        `;
        const result = await pool.query(selectQuery, [date]);
        const articles = result.rows;

        return NextResponse.json(articles, { status: 200 });

    } catch (error) {
        console.error("Error fetching articles:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}