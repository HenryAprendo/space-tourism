
interface ItemsNavigation {
  id:string;
  name:string;
  path?:string;
}

export const itemsNavigation:ItemsNavigation[] = [
  {
    id: '00',
    name: 'home',
    path:'home'
  },
  {
    id: '01',
    name: 'destination',
    path:'destination'
  },
  {
    id: '02',
    name: 'crew',
    path:'crew'
  },
  {
    id: '03',
    name: 'technology',
    path:'technology'
  },
];
