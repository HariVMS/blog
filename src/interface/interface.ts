interface Item {
  author: string;
  email: string;
  phone: string;
  gender: string;
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
interface InputProperties {
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "url"
    | "tel"
    | "search"
    | "radio"
    | "checkbox";
  boxName?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
