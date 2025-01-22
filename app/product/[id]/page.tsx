import Container from "@/app/components/Container";
import SingleProduct from "@/app/components/SingleProduct";
import axios from "axios";

type Params = { id: string };

async function getProduct(id: string) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    throw new Error("No se pudo obtener el producto");
  }
}

async function page({ params }: { params: Params }) {
  const { id } = params;
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
