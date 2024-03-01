
interface Docs {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  __v: number;
}

export interface GLobalInitialState<T> {
  pending: boolean;
  success: boolean;
  error: any[] | null;
  datas: null | T[];
  data: null | T;
}

export interface User{
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

export interface UserRegistrationData {
  name: string;
  email: string;
  password: string;
}

export interface UserLoginData {
  email: string;
  password: string;
}

export interface File extends Docs {
  url: string,
  public_url: string
}
export interface Category extends Docs{
  title: string;
  author: string | User;
  icon: File;
  project_count: number;
}

export interface File extends Docs {
  url: string;
  public_id: string;
}

export interface Project extends Docs {
  title: string;
  description: string;
  short_description: string;
  status: string;
  author: string | User;
  category: string | Category;
  files: string | File[];
  images: string | File[];
}

export interface ProjectPopulated extends Project {
  category: Category;
  files: File[];
  images: File[];
  author: User;
}

export interface Price extends Docs {
  bdt: number;
  usd: number;
}

export interface PackageOption extends Docs {
  title?: string;
  description?: string;
  delivery_time?: string;
  revision?: number | "unlimited";
  features?: string[];
  price?: string | Price;
}

export interface Package extends Docs {
  basic: string | PackageOption;
  standard: string | PackageOption;
  premium: string | PackageOption;
}

export interface PackagePopulated extends Package {
  basic: PackageOption;
  standard: PackageOption;
  premium: PackageOption;
}

export interface Service extends Docs {
  title: string;
  description?: string;
  short_description?: string;
  status: "active" | "inactive";
  icon?: string | File;
  packages: string | PackagePopulated;
  category: string | Category;
  author: string | User;   
}

export interface ServicePopulated extends Service {
  icon: File,
  packages: PackagePopulated,
  category: Category,
  author: User
}

export interface ApiResponse {
  status: string;
  data: any;
  message: string;
  success: boolean;
}
export interface ApiResponseArray<T> extends ApiResponse{
  data:T[];
}
export interface ApiResponseSingle<T> extends ApiResponse {
  data:T;
}