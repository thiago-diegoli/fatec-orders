"use client";

import { withDataFetching } from "@/components/HOCS/withDataFetching";
import EditTemplate from "@/components/templates/orders/EditTemplate";
import { env } from "@/config/env";
import { IOrder } from "@/interfaces/IOrder";
import { useEffect, useState } from "react";

interface OrderEditProps {
  params: { slug: string };
  data: any;
}

const OrderEdit: React.FC<OrderEditProps> = ({ params, data }) => {
  const [order, setOrder] = useState<IOrder>();

  useEffect(() => {
    if (!data) return;
    const {
      id,
      data: date,
      cpf: cpf,
      forma_pagamento: paymentMethod,
      quantidade_itens: itemsQuantity,
      valor_total: totalValue,
    } = data.pedido;

    setOrder({
      id,
      date,
      cpf,
      paymentMethod,
      itemsQuantity,
      totalValue,
    });
  }, [data]);

  return <EditTemplate order={order} />;
};

export default withDataFetching(`${env.apiBaseUrl}/pedido`)(OrderEdit);
