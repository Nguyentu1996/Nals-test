export interface Article {
  id: number;
  title: string;
  content: string;
  image: Image;
  created_at?: Date;
  updated_at?: Date;
}
export interface Image {
  url: string;
}
export interface Pagination {
  count: number;
  page: number;
  items: number;
  pages: number;
  last: number;
  in: number;
  from: number;
  to: number;
  prev?: any;
  next: number;
}
export interface ArticleResponse {
  data: Article[];
  pagy: Pagination;
}
