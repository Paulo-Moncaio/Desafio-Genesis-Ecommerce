"use client";
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Textarea,
  Select,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
} from "@/generated/graphql";
import { client } from "@/config/graphqlClient";

const schema = z.object({
  title: z.string().nonempty("O título é obrigatório"),
  description: z.string().nonempty("A descrição é obrigatória"),
  price: z.string().min(0, "O preço deve ser maior ou igual a 0"),
  category: z.string().nonempty("A categoria é obrigatória"),
  image: z.string().url("A URL da imagem é inválida"),
});

type ProductFormInputs = z.infer<typeof schema>;

export default function Cadastro() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<ProductFormInputs>({
    resolver: zodResolver(schema),
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [urlImage, setUrlImage] = useState("");
  const toast = useToast();

  const {
    data: dataCategories,
    isLoading,
    isError,
  } = useGetCategoriesQuery(client);
  const { mutateAsync: mutateProduct } = useCreateProductMutation(client);
  // const { mutate, isLoading } = useMutation("createItem", (data: FormData) => {
  //   // Faça a chamada GraphQL para criar o item
  //   return fetch("https://seu-backend-graphql.com/v1/graphql", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       query: `
  //         mutation CreateItem($data: CreateItemInput!) {
  //           createItem(data: $data) {
  //             success
  //             message
  //           }
  //         }
  //       `,
  //       variables: {
  //         data,
  //       },
  //     }),
  //   }).then((response) => response.json());
  // });

  const onSubmit = async (data: ProductFormInputs) => {
    console.log(data);

    try {
      await mutateProduct({
        name: data.title,
        description: data.description,
        price: data.price,
        category: data.category,
        image: data.image,
      });
      toast({
        title: "Produto criado com sucesso.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      reset();
      setUrlImage("");
    } catch (error) {
      toast({
        title: "Ocorreu um erro ao cadastrar o produto",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }

    // Aqui você pode fazer a lógica de envio dos dados para o servidor ou qualquer outra ação necessária
  };

  return (
    <Container>
      <Center>
        <Box
          bg={"white"}
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
              {/* <Input type="text" {...register("category")} /> */}
              <Select placeholder="Select option" {...register("category")}>
                {dataCategories?.categories.map((item, index) => (
                  <option key={index} value={item.category}>
                    {item.category}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.image} mt={4}>
              <FormLabel>URL da imagem</FormLabel>
              <Input
                type="text"
                {...register("image")}
                onChange={(e) => setUrlImage(e.target.value)}
              />
              <FormErrorMessage>{errors.image?.message}</FormErrorMessage>
            </FormControl>

            {urlImage && (
              <Image
                justifySelf={"center"}
                src={urlImage}
                alt="Imagem do produto"
                mt={4}
                mx={"auto"}
                maxH={200}
                objectFit="cover"
              />
            )}

            {/* <FormControl>
              <FormLabel htmlFor="image">Imagem</FormLabel>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <Button
                as="label"
                htmlFor="image"
                variant="outline"
                cursor="pointer"
              >
                Selecionar Imagem
              </Button>
            </FormControl> */}

            {/* {selectedImage && (
              <Box mt={4}>
                <Image
                  src={selectedImage}
                  alt="Imagem selecionada"
                  mx={"auto"}
                  maxH={200}
                  objectFit="cover"
                />
              </Box>
            )} */}

            <Button type="submit" mt={4} colorScheme="orange">
              Cadastrar
            </Button>
          </form>
        </Box>
      </Center>
    </Container>
  );
}
