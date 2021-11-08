export interface MenuProps {
  listMap: Record<string, MenuRow[]>
}

export interface MenuRow {
  menu: string;
  category: string;
  title: string;
  price: number;
  description: string;
}