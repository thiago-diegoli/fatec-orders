"use client";

import CustomTable from "@/components/UI/organisms/CustomTable";
import Layout from "@/components/UI/organisms/Layout";
import { Box } from "@mui/material";
import { withDataFetching } from "@/components/HOCS/withDataFetching";
import { env } from "@/config/env";

interface OrderProps {
  data: any;
}

const Orders: React.FC<OrderProps> = ({ data }) => {
  const rows = data?.pedidos.map((order: any) => ({
    id: order.id,
    date: order.data,
    cpf: order.cpf,
    paymethod: order.forma_pagamento,
    items_quantity: order.quantidade_itens,
    total_value: order.valor_total,
  })) || [];

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
      <Box> Lista de Pedidos </Box>
      <CustomTable rows={rows} headCells={headCells} editPath={'/orders/edit'} />
    </Layout>
  );
};

export default withDataFetching(`${env.apiBaseUrl}/pedido`)(Orders);
