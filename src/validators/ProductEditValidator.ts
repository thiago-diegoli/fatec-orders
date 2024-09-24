import * as Yup from "yup";

export const ProductEditValidator = Yup.object().shape({
  description: Yup.string()
    .required("A descrição é um campo obrigatório")
    .min(3, "A descrição deve ter no mínimo ${min} caracteres")
    .max(100, "A descrição deve ter no máximo ${max} caracteres"),
  brand: Yup.string()
    .required("A marca é um campo obrigatório")
    .max(80, "A marca deve ter no máximo ${max} caracteres"),
  value: Yup.number()
    .required("O valor é um campo obrigatório")
    .min(0.01, "O valor deve ser no mínimo ${min}"),
  weight: Yup.number().min(0.01, "O peso deve ser no mínimo ${min}"),
  flavor: Yup.string(),
});
