interface Item {
  author: string;
  title: string;
  descriptions: string;
  img: string;
}
interface UserContextType {
  data: Item[];
  setData: React.Dispatch<React.SetStateAction<Item[]>>;
  setCss: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  css: { [key: string]: string };
}

interface UserContextType {
  data: Item[];
  css: { [key: string]: string };
}
