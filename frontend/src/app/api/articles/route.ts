import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    if (!date) {
        return NextResponse.json({ error: "Date parameter is required" }, { status: 400 });
    }

    try {
        const result = await pool.query("SELECT * FROM articles WHERE event_date = $1", [date]);
        const articles = result.rows;

        return NextResponse.json(articles, { status: 200 });
    } catch (error) {
        console.error("Error fetching articles:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}