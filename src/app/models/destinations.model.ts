import { Images } from '../models/images.model';

export interface Destination {
  name: string;
  images: Images;
  description: string;
  distance: string;
  travel: string;
}
