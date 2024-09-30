"use client";
import Layout from "@/components/UI/organisms/Layout";
import { IOrder } from "@/interfaces/IOrder";
import { OrderEditValidator } from "@/validators/OrderEditValidator";
import { TextField, Select, MenuItem, Button, Box } from "@mui/material";
import { useFormik } from "formik";

const EditOrderTemplate: React.FC = () => {
  const formik = useFormik<IOrder>({
    initialValues: {
      date: "",
      cpf: "",
      paymentMethod: "",
      itemsQuantity: 0,
      totalValue: 0,
    },
    validationSchema: OrderEditValidator,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  
  const { handleSubmit, handleChange, values, setFieldValue, errors } = formik;

  return (
    <Layout>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          name="date"
          label="Data"
          fullWidth
          value={values.date}
          onChange={handleChange}
          error={!!errors.date}
          helperText={errors.date}
        />
        <TextField
          name="cpf"
          label="CPF"
          fullWidth
          value={values.cpf}
          onChange={handleChange}
          error={!!errors.cpf}
          helperText={errors.cpf}
        />
        <Select
          name="paymentMethod"
          label="Forma de Pagamento"
          value={values.paymentMethod}
          error={!!errors.paymentMethod}
          onChange={(e) => setFieldValue("paymentMethod", e.target.value)}
          fullWidth
        >
          <MenuItem value="prazo">Prazo</MenuItem>
          <MenuItem value="à vista">À Vista</MenuItem>
          <MenuItem value="cartão de crédito">Cartão de Crédito</MenuItem>
          <MenuItem value="cartão de débito">Cartão de Débito</MenuItem>
          <MenuItem value="boleto">Boleto</MenuItem>
        </Select>
        <TextField
          name="itemsQuantity"
          label="Quantidade de Itens"
          fullWidth
          value={values.itemsQuantity}
          onChange={handleChange}
          error={!!errors.itemsQuantity}
          helperText={errors.itemsQuantity}
        />
        <TextField
          name="totalValue"
          label="Valor Total"
          fullWidth
          value={values.totalValue}
          onChange={handleChange}
          error={!!errors.totalValue}
          helperText={errors.totalValue}
        />
        <Button variant="outlined" color="secondary">
          Cancelar
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Atualizar
        </Button>
      </Box>
    </Layout>
  );
};

export default EditOrderTemplate;
