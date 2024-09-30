import * as Yup from "yup";

export const OrderEditValidator = Yup.object().shape({
  date: Yup.string()
    .required("A data é um campo obrigatório")
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "A data deve estar no formato AAAA-MM-DD"
    ),
  cpf: Yup.string()
    .required("O CPF é um campo obrigatório")
    .matches(
      /^\d{11}$/,
      "O CPF deve conter 11 dígitos numéricos"
    ),
  paymentMethod: Yup.string()
    .required("A forma de pagamento é um campo obrigatório")
    .oneOf(
      ["prazo", "à vista", "cartão de crédito", "boleto", "cartão de débito"],
      "Forma de pagamento inválida"
    ),
  itemsQuantity: Yup.number()
    .required("A quantidade de itens é um campo obrigatório")
    .min(1, "A quantidade de itens deve ser no mínimo ${min}"),
  totalValue: Yup.number()
    .required("O valor total é um campo obrigatório")
    .min(0.01, "O valor total deve ser no mínimo ${min}"),
});
