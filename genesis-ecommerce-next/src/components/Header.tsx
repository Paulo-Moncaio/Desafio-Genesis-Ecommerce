"use-client";
import {
  Box,
  Flex,
  Link,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Image,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Header() {
  return (
    <Box bg="gray.200" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex justify={"center"} align={"center"}>
          <Image
            boxSize="60px"
            mr={4}
            src="https://static.wixstatic.com/media/2ca6cd_b4b8bf8e6c22412ca73586bc7f9360af~mv2.png/v1/fill/w_328,h_328,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2ca6cd_b4b8bf8e6c22412ca73586bc7f9360af~mv2.png"
          />
          <NextLink href="/">
            <Link display={"flex"} flexDirection={"row"}>
              <Heading as="h1" size="lg">
                Genesis Shop
              </Heading>
            </Link>
          </NextLink>
        </Flex>
        <Menu>
          <MenuButton as={Link}>Menu</MenuButton>
          <MenuList>
            <MenuItem>
              <NextLink href="/about">
                <Link>About</Link>
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href="/products">
                <Link>Products</Link>
              </NextLink>
            </MenuItem>
            {/* Adicione mais itens de menu conforme necessário */}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
