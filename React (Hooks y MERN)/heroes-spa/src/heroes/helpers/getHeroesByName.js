import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {
  name = name.toLowerCase().trim();
  // No me regreso ningun heroe
  if (name.length === 0) return [];
  // Busco en el arreglo de heroes si existe el que recibo en el nombre
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
