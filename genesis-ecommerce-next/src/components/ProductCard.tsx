"use client";
import { CartContext } from "@/app/context/cartContext";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
export interface IProductCard {
  id: number;
  imageUrl: string | null | undefined;
  title: string;
  description: string | null | undefined;
  price: number;
  category: string;
}

export default function ProductCard({
  id,
  imageUrl,
  title,
  description,
  price,
  category,
}: IProductCard) {
  const [filterCategory, setFilterCategory] = useState<string>(".");
  const [filterTitle, setFilterTitle] = useState<string>(".");
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  const cartItem = cartItems.find((item) => item.id === id);

  return (
    <Card height="500px" maxW="2xs">
      <CardBody>
        {imageUrl ? (
          <Image
            src={imageUrl}
            onError={(e) => {
              e.currentTarget.src =
                "https://mahadevfastfoodvns.websites.co.in/twenty-seventeen/img/product-placeholder.png";
            }}
            alt={title}
            borderRadius="lg"
            height={200}
            objectFit="cover"
          />
        ) : (
          <Text color={"red"}>Imagem inválida</Text>
        )}

        <Stack mt="6" spacing="3">
          <Heading noOfLines={2} size="md">
            {title}
          </Heading>
          <Text noOfLines={2}>{description}</Text>
          <Text color="orange.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex w="100%" direction={"row"} align={"center"}>
          <Button
            variant="ghost"
            colorScheme="orange"
            onClick={() => addToCart({ id, name: title, imageUrl, price })}
          >
            Add to cart
          </Button>
          {cartItem && cartItem.quantity && cartItem.quantity >= 1 && (
            <HStack>
              <Text fontSize={"sm"}>Quantidade: </Text>
              <Text fontWeight={"semibold"} fontSize={"lg"}>
                {cartItem?.quantity}
              </Text>
            </HStack>
          )}
        </Flex>
      </CardFooter>
    </Card>
  );
}
