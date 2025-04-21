"use client"
import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';
import { Article } from '@/models/article';
import ArticleTags from '../article-tags';

type ArticleCardProps = {
  article: Article;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { title, source, event_date, summary, content, url, category, tags } = article;

  return (
    <div className='max-w-[800px] w-full'>
      <hr />
      <div className='flex flex-col my-2 py-1 px-2'>
        <div className='flex flex-row justify-between'>
          <Badge variant='outline' className='text-md font-normal text-black'>
            {category}
          </Badge>
          <ArticleTags tags={tags} />
        </div>
        <div className='flex flex-col w-full'>
          <span className='text-md font-medium my-2 px-1'>{title}</span>
          <span className='text-sm px-1'>{summary}</span>
        </div>
        <Button variant='outline' className='text-xs font-normal px-2 mt-1 self-end cursor-pointer hover:bg-gray-200' onClick={() => window.open(url, '_blank')}>
          Read more
        </Button>
      </div>
    </div>
  )
}

export default ArticleCard
