export type NewsItem = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  publishedAt: string;
  category: string;
};

export type Category = {
  id: string;
  name: string;
  image: string;
};
