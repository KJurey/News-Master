export interface FeedItem {
  title: string;
  url: string;
  link: string;
  content: string;
  pubDate: string;
  summary?: string;
  description?: string;
  guid?: string;
  author?: string;
  media?: {
    thumbnail: {
      url?: string;
    };
  };
  enclosures?: {
    url?: string;
  };
}

export interface FeedData {
  title: string;
  homeUrl: string;
  description?: string;
  image: string;
  items: FeedItem[];
}
