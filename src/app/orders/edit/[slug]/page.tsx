"use client";
import EditTemplate from "@/components/templates/orders/EditTemplate";

interface OrderEditProps {
  params: { slug: string };
}

const OrderEdit: React.FC<OrderEditProps> = ({ params }) => {
  return <EditTemplate />;
};

export default OrderEdit;
