import Image from 'next/image';
import { PokemonData } from '../pokemon/types';
import TypeBadge from './TypeBadge';

type GridItemProps = {
  data: PokemonData;
};

export default function GridItem({ data }: GridItemProps) {
  return (
    <div className="flex flex-col h-32 p-4 pt-8 text-black bg-white w-44 rounded-2xl">
      <div className="relative self-center w-20">
        <div className="absolute bottom-0">
          <Image
            className="object-scale-down w-20 h-20"
            src={data.sprite}
            width={80}
            height={80}
            alt={data.name}
          />
        </div>
      </div>
      <p className="text-sm">#{data.id}</p>
      <p className="font-bold capitalize">{data.name}</p>
      <div className="space-x-2 text-xs text-white uppercase">
        {data.types.map((type, i) => (
          <TypeBadge key={i} type={type} />
        ))}
      </div>
    </div>
  );
}
