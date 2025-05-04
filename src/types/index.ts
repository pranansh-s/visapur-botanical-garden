export interface INamedLink {
  name: string;
  href: string;
}

export interface IExpandGroup {
  name: string;
  color: string;
  text: string;
  pdfLink: string;
  images: string[];
}

export interface ICarouselItem {
  imgSrc?: string;
  src: string;
  title?: string;
  stars?: number;
  subText?: string;
}

export interface ILanguageOption {
  name: string;
  code: string;
}

export interface ICurvedCarouselInfo {
  text: string;
  latinName: string;
  descrp: string;
  src: string;
}

export interface ILocation {
  name: string;
  value: string | number;
  direction: boolean;
  color?: string;
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
  link?: string;
}

export interface IAmenity {
  name: string;
  icon: string;
}

export interface IVideoLink {
  src: string;
}

export interface IWideCarouselItem {
  imageSrc: string;
  title: string;
  date?: string;
  description: string;
}

export interface IVisitLocation {
  imageSrc: string;
  name: string;
  bgColor: string;
  text: string;
  left: number;
}

export interface IHiddenAnswer {
  name?: string;
  textNode: React.ReactElement;
  text: string;
}

export interface IVideoImage extends IImageCard {
  video: string;
}
