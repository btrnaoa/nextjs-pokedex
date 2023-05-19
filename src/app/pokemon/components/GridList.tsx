import { PokemonData } from '../types';
import GridItem from './GridItem';

type GridListProps = {
  items: PokemonData[];
};

export default function GridList({ items }: GridListProps) {
  return (
    <ul className="inline-grid grid-cols-1 gap-16 mx-4 my-12 justify-items-center md:grid-cols-3">
      {items.map((item) => (
        <GridItem key={item.id} data={item} />
      ))}
    </ul>
  );
}
