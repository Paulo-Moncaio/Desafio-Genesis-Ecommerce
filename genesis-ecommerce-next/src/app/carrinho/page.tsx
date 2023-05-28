"use client";
import ProductCartCard from "@/components/ProductCartCard";
import {
  Box,
  Heading,
  Divider,
  VStack,
  Button,
  Text,
  Container,
  Center,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { HiOutlineTrash } from "react-icons/hi";

export default function Carrinho() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartItems, clearCart } = useContext(CartContext);

  // Função para calcular o total do carrinho
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleRemove = async () => {
    clearCart();
    onClose();
  };

  return (
    <Container>
      <Center>
        <Box
          bg={"white"}
          p={10}
          borderRadius={"md"}
          w={"full"}
          maxW="8xl"
          mx="auto"
          mt={8}
        >
          <Flex justify={"space-between"} align={"center"}>
            <Heading as="h1" fontSize={"2xl"} mb={4}>
              Meu Carrinho
            </Heading>
            <IconButton
              variant="unstyled"
              aria-label="limpar carrinho"
              fontSize="30px"
              colorScheme="gray"
              icon={<HiOutlineTrash />}
              onClick={onOpen}
            />
          </Flex>
          {cartItems.map((item) => (
            <ProductCartCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              quantity={item.quantity}
            />
          ))}

          <Divider bg={"blackAlpha.900"} my={4} />
          <Heading as="h2" fontSize={"2xl"} mb={4}>
            Order Info
          </Heading>
          <VStack align="flex-end">
            <Text fontWeight="bold">
              Total: R${calculateTotal().toFixed(2)}
            </Text>
            <Button colorScheme="orange">Finalizar Compra</Button>
          </VStack>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirmação de exclusão</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Tem certeza que deseja remover todos itens do seu carrinho?
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
      </Center>
    </Container>
  );
}
