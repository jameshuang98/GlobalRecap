import { Tag } from "@/models/enums/tag";

export const tagColors: Record<Tag, string> = {
    [Tag.Positive]: "green",
    [Tag.Neutral]: "grey",
    [Tag.Negative]: "red",
    [Tag["Left-leaning"]]: "blue",
    [Tag["Right-leaning"]]: "red",
    [Tag.Biased]: "purple",
    [Tag["Slightly-biased"]]: "orange"
  };