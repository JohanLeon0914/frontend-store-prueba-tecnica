import Container from "@/app/components/Container";
import SingleProduct from "@/app/components/SingleProduct";
import axios from "axios";

async function getProduct(id: string) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    throw new Error("No se pudo obtener el producto");
  }
}

type Params = Promise<{ id: string }>;
async function page(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;
  const product = await getProduct(id);

  return (
    <div>
      <Container>
        <SingleProduct product={product!}/>
      </Container>
    </div>
  );
}

export default page;
