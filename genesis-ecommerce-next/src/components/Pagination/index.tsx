import { Flex, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import PaginationItem from "./PaginationItem";

type PaginationProps = {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
};

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);
}
export default function Pagination({
  totalCountOfRegisters,
  registersPerPage = 12,
  currentPage = 1,
  onPageChange,
}: PaginationProps): ReactElement {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Flex
      margin="10px 15px 10px 15px"
      fontWeight="800"
      fontSize="14px"
      lineHeight="20px"
      color="white"
      className="pagination"
    >
      {previousPages.length > 0 &&
        previousPages.map((page) => (
          <PaginationItem
            onPageChange={onPageChange}
            key={page}
            number={page}
            icon="previous"
            lastPage={lastPage}
          />
        ))}
      {currentPage > 1 + siblingsCount && (
        <PaginationItem
          onPageChange={onPageChange}
          number={1}
          lastPage={lastPage}
        />
      )}

      {previousPages.length > 0 &&
        previousPages.map((page) => (
          <PaginationItem
            onPageChange={onPageChange}
            key={page}
            number={page}
            lastPage={lastPage}
          />
        ))}
      <PaginationItem
        onPageChange={onPageChange}
        number={currentPage}
        isCurrent
        lastPage={lastPage}
      />
      {nextPages.length > 0 &&
        nextPages.map((page) => (
          <PaginationItem
            onPageChange={onPageChange}
            key={page}
            number={page}
            lastPage={lastPage}
          />
        ))}
      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 > 0 + siblingsCount && (
            <Text color="white">...</Text>
          )}
          <PaginationItem
            onPageChange={onPageChange}
            number={lastPage}
            lastPage={lastPage}
          />
        </>
      )}
      {nextPages.length > 0 &&
        nextPages.map((page) => (
          <PaginationItem
            icon="next"
            onPageChange={onPageChange}
            key={page}
            number={page}
            lastPage={lastPage}
          />
        ))}
    </Flex>
  );
}
