import { convertToTag, tagColorMap, tagDisplayNameMap } from '@/app/utils/tagUtils';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import React from 'react'

type ArticleTagsProps = {
    tags: string[];
}

const ArticleTags: React.FC<ArticleTagsProps> = ({ tags }) => {
    let tagArr = [];
    for (let t of tags) {
        const tag = convertToTag(t);
        if (tag) {
            tagArr.push(tag);
        }
    }

    return (
        <div className='space-x-1'>
            {tagArr && tagArr.map((tag, index) => (
                <Badge key={index} className={cn('text-xs font-normal my-1 pb-1 rounded-xl', tagColorMap[tag])} >
                    {tagDisplayNameMap[tag]}
                </Badge>
            ))}
        </div>
    )
}

export default ArticleTags