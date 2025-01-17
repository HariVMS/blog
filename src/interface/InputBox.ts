export interface InputProperties {
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'url'
    | 'tel'
    | 'search'
    | 'radio'
    | 'checkbox';
  name?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}
