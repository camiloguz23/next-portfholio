export interface Company {
  name: string;
  rol: string;
  description: string;
}

export type Experience = Record<string, Company>;
