"use client";
import React, { useState, useEffect, use } from "react";

import NewsCard from "./components/news-card";
import { Article } from "@/models/article";


export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const today = new Date().toISOString().split("T")[0];
      const res = await fetch(`/api/articles?date=${today}`);
      const data = await res.json();
      setArticles(data);
    }
    fetchArticles();
  }, []);

  return (
    <>
      <h1>Articles for Today</h1>
      <div className="flex flex-col w-full justify-center items-center">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}
