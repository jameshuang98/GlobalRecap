import { Tag } from "@/models/enums/tag";
import NewsCard from "./components/news-card";

import { NewsCategory } from "@/models/enums/news-category";

export default function Home() {

  
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <NewsCard
        category={NewsCategory.Politics}
        title="Florida man eats alligator!"
        summary="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta neiciendis voluptatibus maiores alias."
        articleUrl=""
        tags={[Tag.Neutral, Tag.Biased]} />
    </div>
  );
}
