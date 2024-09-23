"use client";

import CustomTable from "@/components/UI/organisms/CustomTable";
import Layout from "@/components/UI/organisms/Layout";
import { env } from "@/config/env";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Orders = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get(`${env.apiBaseUrl}/pedido`);

      const Orders = response.data.pedidos.map((order: any) => ({
        id: order.id,
        date: order.data,
        cpf: order.cpf,
        paymethod: order.forma_pagamento,
        items_quantity: order.quantidade_itens,
        total_value: order.valor_total,
      }));

      setRows(Orders);
    };

    fetchOrders();
  }, []);

  const headCells = [
    {
      id: "date",
      numeric: false,
      disablePadding: false,
      label: "Data",
    },
    {
      id: "cpf",
      numeric: true,
      disablePadding: false,
      label: "CPF",
    },
    {
      id: "paymethod",
      numeric: false,
      disablePadding: false,
      label: "Método de Pagamento",
    },
    {
      id: "items_quantity",
      numeric: true,
      disablePadding: false,
      label: "Quantidade de Itens",
    },
    {
      id: "total_value",
      numeric: true,
      disablePadding: false,
      label: "Valor Total",
    },
  ];

  return (
    <Layout>
      <Box> Lista de Produtos </Box>
      <CustomTable rows={rows} headCells={headCells} />
    </Layout>
  );
};

export default Orders;
