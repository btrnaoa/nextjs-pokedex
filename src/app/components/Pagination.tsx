import Link from 'next/link';
import { usePagination } from '../hooks';

type PaginationProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  breakLabel: string;
  basePath: string;
};

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  breakLabel,
  basePath,
}: PaginationProps) {
  const pages = usePagination({
    currentPage,
    totalItems,
    itemsPerPage,
    breakLabel,
  });
  const lastPage = pages[pages.length - 1] as number;
  return (
    <div className="mb-12 btn-group">
      {currentPage > 1 ? (
        <Link className="btn" href={`${basePath}/${currentPage - 1}`}>
          Prev
        </Link>
      ) : (
        <button className="btn" type="button" disabled>
          Prev
        </button>
      )}
      {pages.map((page, i) =>
        page === breakLabel ? (
          <button key={i} type="button" className="w-12 btn" disabled>
            {page}
          </button>
        ) : (
          <Link
            key={i}
            href={`${basePath}/${page}`}
            className={`w-12 btn${page === currentPage ? ' btn-active' : ''}`}
          >
            {page}
          </Link>
        ),
      )}
      {currentPage < lastPage ? (
        <Link className="btn" href={`${basePath}/${currentPage + 1}`}>
          Next
        </Link>
      ) : (
        <button className="btn" type="button" disabled>
          Next
        </button>
      )}
    </div>
  );
}
