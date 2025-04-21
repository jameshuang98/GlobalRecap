import { Tag } from "@/models/enums/tag";

export const tagDisplayNameMap: Record<Tag, string> = {
  [Tag.Positive]: "Positive",
  [Tag.Neutral]: "Neutral",
  [Tag.Negative]: "Negative",
  [Tag.LeftLeaning]: "Left leaning",
  [Tag.RightLeaning]: "Right leaning",
  [Tag.Biased]: "Biased",
  [Tag.SlightlyBiased]: "Slightly biased"
};

export const convertToTag = (value: string): Tag | undefined => {
  return Object.values(Tag).includes(value as Tag) ? value as Tag : undefined;
}

export const tagColorMap: Record<Tag, string> = {
    [Tag.Positive]: "bg-green-600",
    [Tag.Neutral]: "bg-gray-500",
    [Tag.Negative]: "bg-red-500",
    [Tag.LeftLeaning]: "bg-pink-700",
    [Tag.RightLeaning]: "bg-slate-600",
    [Tag.Biased]: "bg-rose-500",
    [Tag.SlightlyBiased]: "bg-orange-500"
  };