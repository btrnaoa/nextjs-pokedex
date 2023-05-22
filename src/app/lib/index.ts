type PokemonData = {
  id: number;
  name: string;
  sprites: {
    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
};

async function getPokemonUrls({
  offset,
  limit,
}: {
  offset: number;
  limit: number;
}) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
  );
  const data: { results: { url: string }[] } = await res.json();
  return data.results.map((result) => result.url);
}

export async function getPokemonData({
  offset,
  limit,
}: {
  offset: number;
  limit: number;
}) {
  const urls = await getPokemonUrls({ offset, limit });
  const requests = urls.map((url) => fetch(url));

  const responses = await Promise.all(requests);
  const data: PokemonData[] = await Promise.all(
    responses.map((res) => res.json()),
  );

  return data.map((pokemon) => {
    const types = pokemon.types.map((type) => type.type.name);
    const sprite =
      pokemon.sprites.versions['generation-v']['black-white'].animated
        .front_default;
    return {
      id: pokemon.id,
      name: pokemon.name,
      types,
      sprite,
    };
  });
}
