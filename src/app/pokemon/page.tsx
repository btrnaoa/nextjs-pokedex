import PaginationPage from '../components/PaginationPage';
import { getPokemonData } from '../lib';

export const TOTAL_ITEMS = 493;
export const ITEMS_PER_PAGE = 18;

export default async function Pokemon() {
  const data = await getPokemonData({ offset: 0, limit: ITEMS_PER_PAGE });
  return (
    <PaginationPage
      items={data}
      currentPage={1}
      totalItems={TOTAL_ITEMS}
      itemsPerPage={ITEMS_PER_PAGE}
    />
  );
}
