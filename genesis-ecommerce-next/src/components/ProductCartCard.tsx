"use client";
import { CartContext } from "@/app/context/cartContext";
import {
  Flex,
  Text,
  Image,
  IconButton,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { HiMinusSm, HiPlusSm, HiOutlineTrash } from "react-icons/hi";

interface ICartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string | null | undefined;
  quantity: number;
}

export default function ProductCartCard({
  id,
  name,
  price,
  imageUrl,
  quantity,
}: ICartItem) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartItems, addToCart, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const handleRemove = async () => {
    removeFromCart(id);
    onClose();
  };
  return (
    <Flex direction={["column", "row"]} my={8} w={"100%"}>
      <Image
        borderRadius={"lg"}
        mx={["auto", "unset"]}
        maxH={200}
        maxW={200}
        objectFit="cover"
        src={imageUrl || ""}
        onError={(e) => {
          e.currentTarget.src =
            "https://mahadevfastfoodvns.websites.co.in/twenty-seventeen/img/product-placeholder.png";
        }}
      />
      <Flex w="100%" p={2} direction={"column"} justify={"space-between"}>
        <Flex direction={"column"}>
          <Text fontSize={"2xl"}>{name}</Text>
          <Text color={"gray"} fontSize={"md"} fontWeight={"semibold"}>
            ${price}
          </Text>
        </Flex>
        <Flex w={"full"} justify={"space-between"}>
          <Flex align={"center"}>
            <IconButton
              variant="outline"
              aria-label="decrease product quantity"
              fontSize="20px"
              size={"sm"}
              borderRadius={"full"}
              colorScheme="orange"
              icon={<HiMinusSm />}
              onClick={() => {
                if (quantity === 1) {
                  onOpen();
                } else {
                  decreaseQuantity(id);
                }
              }}
            />
            <Text px={6}>{quantity}</Text>
            <IconButton
              variant="outline"
              aria-label="increment product quantity"
              fontSize="20px"
              size={"sm"}
              borderRadius={"full"}
              colorScheme="orange"
              icon={<HiPlusSm />}
              onClick={() => addToCart({ id, name, imageUrl, price })}
            />
          </Flex>
          <IconButton
            variant="outline"
            aria-label="exclude product"
            fontSize="20px"
            size={"sm"}
            borderRadius={"full"}
            colorScheme="gray"
            icon={<HiOutlineTrash />}
            onClick={onOpen}
          />
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Confirmação de exclusão</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Tem certeza que deseja remover este item do carrinho?
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose} mr={3}>
                  Cancelar
                </Button>
                <Button colorScheme="red" onClick={handleRemove}>
                  Confirmar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
    </Flex>
  );
}
