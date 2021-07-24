export interface IClientCategory {
  title: string;
  description: string;
  cover: string;
  urlAlias: string;
  products?: IClientCategory[]
}
