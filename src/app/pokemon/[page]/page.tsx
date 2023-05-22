import PaginationPage from '@/app/components/PaginationPage';
import { getPokemonData } from '@/app/lib';
import { notFound, redirect } from 'next/navigation';
import { ITEMS_PER_PAGE, TOTAL_ITEMS } from '../page';

export async function generateStaticParams() {
  const numPages = 5;
  return Array.from({ length: numPages }, (_, i) => ({
    page: `${i + 1}`,
  }));
}

export default async function Page({ params }: { params: { page: string } }) {
  const currentPage = Number(params.page) || 1;
  if (currentPage === 1) {
    redirect('/pokemon');
  }

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const limit = Math.min(TOTAL_ITEMS - offset, ITEMS_PER_PAGE);
  const data = await getPokemonData({ offset, limit });
  if (!data.length) {
    notFound();
  }

  return (
    <PaginationPage
      items={data}
      currentPage={currentPage}
      totalItems={TOTAL_ITEMS}
      itemsPerPage={ITEMS_PER_PAGE}
    />
  );
}
