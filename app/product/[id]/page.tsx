import Container from "@/app/components/Container";
import ProductList from "@/app/components/ProductList";
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

async function getProducts() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw new Error("No se pudo obtener los productos");
  }
}

type Params = Promise<{ id: string }>;
async function page(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;
  const product = await getProduct(id);
  const products = await getProducts();

  return (
    <div className="bg-gray-100">
      <Container>
        <SingleProduct product={product!}/>

        <div className="mt-10">
          <ProductList products={products} singleCarousel={true} />
        </div>
      </Container>
    </div>
  );
}

export default page;
