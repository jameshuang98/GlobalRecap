"use client";
import React, { useState, useEffect, use } from "react";

import NewsCard from "./components/news-card";
import { Article } from "@/models/article";
import DateSelector from "./components/date-selector";


export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const fetchArticles = async () => {
      const formattedDate = date.toISOString().split("T")[0];
      const res = await fetch(`/api/articles?date=${formattedDate}`);
      const data = await res.json();
      setArticles(data);
    }
    fetchArticles();
  }, [date]);

  return (
    <>
      <div className="mx-4 mb-4">
        <DateSelector date={date} setDate={setDate} />
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        {articles.length > 0 ?
          (articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          )))
          :
          <div className="text-center text-lg font-semibold mt-6">
            No articles available for the selected date.
          </div>
        }
      </div>
    </>
  );
}
