import { Tag } from "@/models/enums/tag";

export const tagColors: Record<Tag, string> = {
    [Tag.Positive]: "bg-green-600",
    [Tag.Neutral]: "bg-gray-500",
    [Tag.Negative]: "bg-red-500",
    [Tag["Left-leaning"]]: "bg-pink-700",
    [Tag["Right-leaning"]]: "bg-slate-600",
    [Tag.Biased]: "bg-rose-500",
    [Tag["Slightly-biased"]]: "bg-orange-500"
  };