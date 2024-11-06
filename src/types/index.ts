export interface INamedLink {
  name: string;
  href: string;
}

export interface IExpandGroup {
  name: string;
  color: string;
  text: string;
  images: string[];
}

export interface ICarouselItem {
  src: string;
  title?: string;
}

export interface ILanguageOption {
  name: string;
  code: string;
}

export interface IButterflyInfo {
  text: string;
  latinName: string;
  descrp: string;
  src: string;
}

export interface ILocation {
  name: string;
  left: number;
  top: number;
}

export interface IImportant {
  icon: string;
  text: string;
  body: string;
}

export interface IImageCard {
  name: string;
  src: string;
}
