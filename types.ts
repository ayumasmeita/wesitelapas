
export interface NavLink {
  name: string;
  path: string;
  icon: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
}

export interface ComplaintData {
  name: string;
  email: string;
  category: string;
  message: string;
}
