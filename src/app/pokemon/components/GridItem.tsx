import Image from 'next/image';
import { PokemonData } from '../types';

type GridItemProps = {
  data: PokemonData;
};

export default function GridItem({ data }: GridItemProps) {
  return (
    <div className="flex flex-col w-40 p-4 pt-8 text-black bg-white h-28 min-h-fit rounded-2xl">
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
        {data.types.map((type) => (
          <span
            key={type}
            className="px-2 py-0.5 font-bold bg-black rounded-md"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}