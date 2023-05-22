function getPages(length: number, start: number = 1) {
  return Array.from({ length }, (_, i) => start + i);
}

export function usePagination({
  currentPage,
  totalItems,
  itemsPerPage,
  breakLabel,
}: {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  breakLabel: string;
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages <= 8) {
    return getPages(totalPages);
  }

  const lastTwoPages = getPages(2, totalPages - 1);
  if (currentPage <= 4) {
    return [...getPages(5), breakLabel, ...lastTwoPages];
  }

  if (currentPage < totalPages - 2) {
    return [
      1,
      breakLabel,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      breakLabel,
      ...lastTwoPages,
    ];
  }

  return [1, breakLabel, ...getPages(6, totalPages - 5)];
}
