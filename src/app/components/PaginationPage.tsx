import { PokemonData } from '../pokemon/types';
import GridList from './GridList';
import Pagination from './Pagination';

type PaginationPageProps = {
  items: PokemonData[];
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
};

export default function PaginationPage({
  items,
  currentPage,
  totalItems,
  itemsPerPage,
}: PaginationPageProps) {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <GridList items={items} />
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        breakLabel="..."
        basePath="/pokemon"
      />
    </main>
  );
}
