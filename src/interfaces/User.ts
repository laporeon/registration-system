export interface User {
  name: string;
  email: string;
  age: string;
  height: string;
  data?: string[]; // Since users can add new questions, we need this optional attribute to handle them
}
