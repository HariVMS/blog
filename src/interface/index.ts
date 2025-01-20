export interface Item {
  id: string;
  author: string;
  email: string;
  phone: string;
  gender: string;
  title: string;
  descriptions: string;
  img: string;
}
export interface UserContextType {
  data: Item[];
  setData: React.Dispatch<React.SetStateAction<Item[]>>;
  setCss: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  css: { [key: string]: string };
}

export interface UserContextDataCssType {
  data: Item[];
  css: { [key: string]: string };
}
