export interface IOrder {
    id?: number;
    date: string;
    cpf: string;
    paymentMethod: string;
    itemsQuantity: number;
    totalValue: number;
}