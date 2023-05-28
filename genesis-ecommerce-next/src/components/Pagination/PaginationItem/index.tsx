import { Button, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

type PaginationItemProps = {
  icon?: "next" | "previous";
  lastPage: number;
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
};

export default function PaginationItem({
  isCurrent,
  number,
  onPageChange,
  icon,
  lastPage,
}: PaginationItemProps): ReactElement {
  if (icon && icon === "next") {
    return (
      <>
        <Button
          my={0}
          mx={2}
          h={6}
          borderRadius={"md"}
          colorScheme="orange"
          color={"white"}
          p={1}
          display={["none", "none", "none", "none", "flex"]}
          onClick={() => (!isCurrent ? onPageChange(number) : null)}
        >
          <HiArrowSmRight width="13px" height="13px" />
        </Button>
      </>
    );
  }

  if (icon && icon === "previous") {
    return (
      <>
        <Button
          my={0}
          mx={2}
          h={6}
          borderRadius={"md"}
          colorScheme="orange"
          p={1}
          display={["none", "none", "flex", "flex", "flex"]}
          onClick={() => (!isCurrent ? onPageChange(number) : null)}
        >
          <HiArrowSmLeft width="13px" height="13px" />
        </Button>
      </>
    );
  }

  return (
    <Button
      my={0}
      mx={2}
      h={6}
      borderRadius={"md"}
      colorScheme={`${isCurrent ? "white" : "orange"}`}
      disabled={!isCurrent}
      _hover={{
        cursor: `${isCurrent ? "default" : "pointer"}`,
      }}
      p={1}
      onClick={() => (!isCurrent ? onPageChange(number) : null)}
    >
      {" "}
      <Text fontWeight={400} fontSize="14px">
        {number}
      </Text>
    </Button>
  );
}
