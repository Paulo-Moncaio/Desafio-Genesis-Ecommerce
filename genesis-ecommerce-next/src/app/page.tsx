"use client";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import { client } from "@/config/graphqlClient";
import {
  useGetCategoriesQuery,
  useGetProductsFilterQuery,
} from "@/generated/graphql";
import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Wrap,
  WrapItem,
  Flex,
  HStack,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  category: z.string(),
});

type FilterFormInputs = z.infer<typeof schema>;

export default function Home() {
  const [nameSearch, setNameSearch] = useState(".");
  const [categoryFilter, setCategoryFilter] = useState(".");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FilterFormInputs>({
    resolver: zodResolver(schema),
  });

  const {
    data: dataProducts,
    isLoading: isProductsLoading,
    isError: isProductsError,
  } = useGetProductsFilterQuery(client, {
    offset: (currentPage - 1) * 10 + 1 - 1,
    name_filter: nameSearch,
    category_filter: categoryFilter,
  });

  const {
    data: dataCategories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useGetCategoriesQuery(client);

  const onSubmit = async (data: FilterFormInputs) => {
    console.log(data);
    setNameSearch(data.name);
    setCategoryFilter(data.category);
    // reset();
  };

  return (
    <Center px={20} py={10}>
      <Flex direction={"column"} justify={"center"} align={"center"}>
        <Stack
          direction={["column", "column", "row"]}
          justify={"center"}
          align={"flex-end"}
          bg="white"
          borderRadius={"md"}
          p={6}
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          mb={10}
        >
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Nome do produto</FormLabel>
            <Input type="text" {...register("name")} />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
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
          <Button
            w={["100%", "100%", "fit-content"]}
            px={6}
            type="submit"
            colorScheme="orange"
          >
            Filtrar
          </Button>
        </Stack>
        {isProductsLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="orange.500"
            size="xl"
          />
        ) : dataProducts?.products.length ? (
          <>
            <Wrap spacing={10} align={"flex-start"} justify={"center"} m="auto">
              {dataProducts?.products.map((product) => (
                <WrapItem key={product.id}>
                  <ProductCard
                    id={product.id}
                    imageUrl={product.image}
                    title={product.name}
                    description={product.description}
                    price={product.price}
                    category={product.category}
                  />
                </WrapItem>
              ))}
            </Wrap>
            <Pagination
              currentPage={currentPage}
              registersPerPage={10}
              totalCountOfRegisters={
                dataProducts?.products_aggregate.aggregate?.count || 0
              }
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <Heading fontWeight={"light"} color={"white"}>
            Nenhum produto encontrado
          </Heading>
        )}
      </Flex>
    </Center>
  );
}
