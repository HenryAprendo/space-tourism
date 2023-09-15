import { Images } from '../models/images.model';

export interface Crew {
  name: string;
  images: Images;
  role: string;
  bio: string;
}
