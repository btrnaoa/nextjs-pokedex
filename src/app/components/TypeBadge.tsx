const colors: { [key: string]: string } = {
  normal: '#a8a77a',
  fire: '#ee8130',
  water: '#6390f0',
  electric: '#f7d02c',
  grass: '#7ac74c',
  ice: '#96d9d6',
  fighting: '#c22e28',
  poison: '#a33ea1',
  ground: '#e2bf65',
  flying: '#a98ff3',
  psychic: '#f95587',
  bug: '#a6b91a',
  rock: '#b6a136',
  ghost: '#735797',
  dragon: '#6f35fc',
  dark: '#705746',
  steel: '#b7b7ce',
  fairy: '#d685ad',
};

type TypeBadgeProps = {
  type: string;
};

export default function TypeBadge({ type }: TypeBadgeProps) {
  return (
    <span
      className="px-2 py-0.5 font-bold rounded-md"
      style={{ backgroundColor: colors[type] }}
    >
      {type}
    </span>
  );
}
