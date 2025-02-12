"use client";

import CustomTable from "@/components/UI/organisms/CustomTable";
import Layout from "@/components/UI/organisms/Layout";
import { env } from "@/config/env";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { withDataFetching } from "@/components/HOCS/withDataFetching";

const Products = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${env.apiBaseUrl}/produto`);

      const products = response.data.produtos.map((product: any) => ({
        id: product.id,
        description: product.descricao,
        brand: product.marca,
        value: product.valor,
        weight: product.peso_gramas,
        flavor: product.sabor,
      }));

      setRows(products);
    };

    fetchProducts();
  }, []);

  const headCells = [
    {
      id: "description",
      numeric: false,
      disablePadding: false,
      label: "Descrição",
    },
    {
      id: "brand",
      numeric: false,
      disablePadding: false,
      label: "Marca",
    },
    {
      id: "value",
      numeric: true,
      disablePadding: false,
      label: "Valor",
    },
    {
      id: "weight",
      numeric: true,
      disablePadding: false,
      label: "Peso",
    },
    {
      id: "flavor",
      numeric: false,
      disablePadding: false,
      label: "Sabor",
    },
  ];

  return (
    <Layout>
      <Box data-testid="productList"> Lista de Produtos </Box>
      <CustomTable
        rows={rows}
        headCells={headCells}
        editPath="/products/edit"
      />
    </Layout>
  );
};

export default withDataFetching(`${env.apiBaseUrl}/produto`)(Products);
