import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/slices/productSlice";
import Product from "./Product";

const ProductList = () => {
    const { products } = useSelector((store) => store.product);

    const distpatch = useDispatch();
    useEffect(() => {
        distpatch(getAllProducts());
    }, []);

    return (
        <div className="flex flex-row flex-wrap gap-4 mt-10">
            {products?.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
