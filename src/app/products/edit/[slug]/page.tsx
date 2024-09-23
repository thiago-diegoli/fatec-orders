import Layout from "@/components/UI/organisms/Layout";
import { TextField, Select, MenuItem, Button } from "@mui/material";

interface ProductEditProps {
  params: { slug: string };
}

const ProductEdit: React.FC<ProductEditProps> = ({ params }) => {
  //<div>{params.slug}</div>;
  return (
    <Layout>
      <TextField name="description" label="Descrição" fullWidth />
      <TextField name="brand" label="Marca" fullWidth />
      <TextField name="value" label="Valor" fullWidth />
      <TextField name="weight" label="Peso (gr.)" fullWidth />
      <Select name="flavor" label="Sabor" fullWidth>
        <MenuItem value="morango">Morango</MenuItem>
        <MenuItem value="abacaxi">Abacaxi</MenuItem>
        <MenuItem value="chocolate">Chocolate</MenuItem>
        <MenuItem value="">-- Não Informado --</MenuItem>
      </Select>
      <Button variant="outlined" color="secondary">
        Cancelar
      </Button>
      <Button variant="contained" color="primary">
        Atualizar
      </Button>
    </Layout>
  );
};

export default ProductEdit;
