import Link from 'next/link';
import { usePagination } from '../hooks';

type PaginationProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  breakLabel: string;
  basePath: string;
};

type PaginationButtonProps = {
  href: string;
  disabled: boolean;
  active?: boolean;
  children: React.ReactNode;
};

function PaginationButton({
  href,
  disabled,
  active,
  children,
}: PaginationButtonProps) {
  const classes = `w-12 min-w-min btn${active ? ' btn-active' : ''}`;
  if (disabled) {
    return (
      <button className={classes} type="button" disabled>
        {children}
      </button>
    );
  }
  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}

PaginationButton.defaultProps = {
  active: false,
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
    <div className="mb-12 btn-group no-animation">
      <PaginationButton
        href={`${basePath}/${currentPage - 1}`}
        disabled={currentPage <= 1}
      >
        Prev
      </PaginationButton>
      {pages.map((page, i) => (
        <PaginationButton
          key={i}
          href={`${basePath}/${page}`}
          disabled={page === breakLabel}
          active={page === currentPage}
        >
          {page}
        </PaginationButton>
      ))}
      <PaginationButton
        href={`${basePath}/${currentPage + 1}`}
        disabled={currentPage >= lastPage}
      >
        Next
      </PaginationButton>
    </div>
  );
}
