export type CategorySummary = {
  id: string;
  title: string;
  handle: string;
  image?: { url: string; altText: string | null };
};