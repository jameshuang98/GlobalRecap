"use client";
import React, { useState, useEffect } from "react";

import { useDateQuery } from "./hooks/useDateQuery";
import ArticleCard from "./components/article-card";
import { Article } from "@/models/article";
import DateSelector from "./components/date-selector";
import { formatDate, isValidDate, parseDate } from "./utils/dateUtils";


export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const {date, setDate} = useDateQuery();

  useEffect(() => {
    const fetchArticles = async () => {
      const formattedDate = formatDate(date);
      const res = await fetch(`/api/articles?date=${formattedDate}`);
      const data = await res.json();
      console.log("Fetched articles:", data);
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
            <ArticleCard key={article.id} article={article} />
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
