import { nanoid } from 'nanoid';

const items = [
  { id: nanoid(), text: 'home', link: '/' },
  { id: nanoid(), text: 'movie', link: '/movie' },
];

export default items;
