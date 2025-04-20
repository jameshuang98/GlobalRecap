"use client"
import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';
import { convertToTag, tagColorMap, tagDisplayNameMap } from '@/app/utils/tagUtils';
import { cn } from '@/lib/utils';
import { Article } from '@/models/article';

type ArticleCardProps = {
  article: Article;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { title, source, event_date, summary, content, url, category, tags } = article;
  console.log("Article:", article);
  return (
    <div className='max-w-[800px] w-full'>
      <hr />
      <div className='flex flex-row justify-between my-2 py-1 px-2'>
        <div className='flex flex-col w-[85%]'>
          <Badge variant='outline' className='text-md font-normal text-black'>
            {category}
          </Badge>
          <span className='text-md font-medium my-2 px-1'>{title}</span>
          <span className='text-sm px-1'>{summary}</span>
        </div>
        <div className='flex flex-col justify-between'>
          <div className='space-x-1'>
            {tags && tags.map((tag, index) => (
              <Badge key={index} className={cn('text-xs font-normal my-1 pb-1 rounded-xl', tagColorMap[convertToTag(tag)])} >
                {tagDisplayNameMap[convertToTag(tag)]} 
              </Badge>
            ))}
          </div>
          <Button variant='outline' className='text-xs font-normal px-2 self-end cursor-pointer hover:bg-gray-200' onClick={() => window.open(url, '_blank')}>
            Read more
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
