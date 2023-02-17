export interface Company {
  name: string;
  rol: string;
  description: string;
}

export interface Experience {
  [id: string]: Company;
}
