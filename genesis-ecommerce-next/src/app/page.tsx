"use client";
import ProductCard from "@/components/ProductCard";
import { Center, Container, Heading, Wrap, WrapItem } from "@chakra-ui/react";

export default function Home() {
  return (
    <Center px={20} py={10}>
      <Wrap spacing={10} align={"center"} m="auto">
        <WrapItem>
          <ProductCard />
        </WrapItem>
        <WrapItem>
          <ProductCard />
        </WrapItem>
        <WrapItem>
          <ProductCard />
        </WrapItem>
      </Wrap>
    </Center>
  );
}
