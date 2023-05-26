"use client";
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string().nonempty("O título é obrigatório"),
  description: z.string().nonempty("A descrição é obrigatória"),
  price: z.number().min(0, "O preço deve ser maior ou igual a 0"),
  category: z.string().nonempty("A categoria é obrigatória"),
  image: z.string().url("A URL da imagem é inválida"),
});

type ProductFormInputs = z.infer<typeof schema>;

export default function Cadastro() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProductFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: ProductFormInputs) => {
    console.log(data);
    // Aqui você pode fazer a lógica de envio dos dados para o servidor ou qualquer outra ação necessária
  };
  return (
    <Container>
      <Center>
        <Box
          bg={"gray.100"}
          p={10}
          borderRadius={"md"}
          w={"full"}
          maxW="6xl"
          mx="auto"
          mt={8}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.title}>
              <FormLabel>Título</FormLabel>
              <Input type="text" {...register("title")} />
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.description} mt={4}>
              <FormLabel>Descrição</FormLabel>
              <Textarea {...register("description")} />
              <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.price} mt={4}>
              <FormLabel>Preço</FormLabel>
              <Input type="number" {...register("price")} />
              <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.category} mt={4}>
              <FormLabel>Categoria</FormLabel>
              <Input type="text" {...register("category")} />
              <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.image} mt={4}>
              <FormLabel>URL da imagem</FormLabel>
              <Input type="text" {...register("image")} />
              <FormErrorMessage>{errors.image?.message}</FormErrorMessage>
            </FormControl>

            <Button type="submit" mt={4} colorScheme="orange">
              Cadastrar
            </Button>
          </form>
        </Box>
      </Center>
    </Container>
  );
}
