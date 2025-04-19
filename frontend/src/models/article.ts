import { NewsCategory } from "./enums/news-category";
import { Tag } from "./enums/tag";

export interface Article {
    id: number;
    title: string;
    source: string;
    event_date: string;
    summary: string;
    content: string;
    url: string;
    category: NewsCategory;
    tags: Tag[];
}