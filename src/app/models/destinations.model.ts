interface Images {
  png: string;
  webp: string;
}

export interface Destination {
  name: string;
  images: Images;
  description: string;
  distance: string;
  travel: string;
}
