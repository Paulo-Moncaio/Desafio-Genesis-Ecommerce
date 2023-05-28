"use client";
import { CartContext } from "@/app/context/cartContext";
import {
  Box,
  Flex,
  Link,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image,
  Badge,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useContext, useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function Header() {
  const [itemCount, setItemCount] = useState(0);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    let totalCount = 0;

    cartItems.forEach((element) => {
      if (element.quantity > 1) {
        totalCount += element.quantity;
      } else {
        totalCount += 1;
      }
    });

    setItemCount(totalCount);
  }, [cartItems]);

  return (
    <Box bg="#121214" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex justify={"center"} align={"center"}>
          <Image
            boxSize="60px"
            mr={4}
            src="https://static.wixstatic.com/media/2ca6cd_b4b8bf8e6c22412ca73586bc7f9360af~mv2.png/v1/fill/w_328,h_328,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2ca6cd_b4b8bf8e6c22412ca73586bc7f9360af~mv2.png"
          />
          <NextLink href="/">
            <Link
              display={"flex"}
              flexDirection={"row"}
              _hover={{
                textDecoration: "none",
              }}
            >
              <Heading as="h1" size="lg" color="#ee4214">
                Genesis Shop
              </Heading>
            </Link>
          </NextLink>
        </Flex>
        <Flex>
          <NextLink href="/carrinho">
            <Link position={"relative"}>
              <IconButton
                aria-label="Carrinho de Compras"
                icon={<HiOutlineShoppingCart />}
                variant="ghost"
                color={"white"}
                colorScheme="white"
                boxSize={14}
                fontSize={32}
              />
              {itemCount > 0 && (
                <Badge
                  borderRadius="full"
                  variant={"subtle"}
                  colorScheme="white"
                  color={"white"}
                  position="absolute"
                  top="-28px"
                  right="-4px"
                  fontSize={24}
                >
                  {itemCount}
                </Badge>
              )}
              {/* <IconButton
                variant="unstyled"
                aria-label="exclude product"
                fontSize="20px"
                size={"sm"}
                borderRadius={"full"}
                colorScheme="white"
                color={"white"}
                icon={<HiOutlineShoppingCart />}
              /> */}
            </Link>
          </NextLink>

          <Menu>
            <MenuButton color={"white"}>Menu</MenuButton>
            <MenuList>
              <MenuItem>
                <NextLink href="/cadastro">
                  <Link>Cadastrar produto</Link>
                </NextLink>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
