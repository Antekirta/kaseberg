export interface IClientProduct {
  title: string;
  urlAlias: string;
  subtitle: string;
  description: string;
  ideas: string;
  reviews: string[];
  images: string[];
  coverPrimary: string;
  coverSecondary: string;
  price: number;
  dateCreate: Date;
  dateReady: Date;
  dateExpiration: Date;
  isPopular: boolean;
  category: string;
  relatedGoods: IClientProduct[];
}
