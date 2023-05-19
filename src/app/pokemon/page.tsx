import GridList from './components/GridList';
import { PokemonData } from './types';

async function getPokemonData() {
  const req = Array.from(Array(21)).map((_, i) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`),
  );

  const pokemons = await Promise.all(req).then((res) =>
    Promise.all(res.map((data) => data.json())),
  );

  const data = pokemons.map((pokemon) => {
    const types = pokemon.types.map(
      (type: { type: { name: string } }) => type.type.name,
    );
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`;
    return {
      id: pokemon.id,
      name: pokemon.name,
      types,
      sprite,
    };
  });

  return data;
}

export default async function Pokemon() {
  const data: PokemonData[] = await getPokemonData();
  return (
    <main className="flex flex-col items-center">
      <GridList items={data} />
    </main>
  );
}
