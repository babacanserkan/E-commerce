import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../../redux/slices/productSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket } from "../../redux/slices/basketSlice";

const ProductDetails = () => {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const { price, image, title, description } = selectedProduct;
    const dispatch = useDispatch();

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    useEffect(() => {
        getProductByID();
    }, [id, products]);

    const getProductByID = () => {
        products?.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        });
    };

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count,
        };
        dispatch(addToBasket(payload));
    };

    return (
        <div className="mt-5 py-10 flex gap-20">
            <div className="w-[50%]">
                <img src={image} alt="" />
            </div>
            <div className="flex justify-center flex-col">
                <h1 className="text-2xl font-extrabold">ÜRÜN BİLGİLERİ</h1>
                <h2> {title} </h2>
                <p className="text-gray-500"> {description} </p>
                <p className="text-orange-500 mt-3 text-5xl"> {price} ₺ </p>
                <div className="flex gap-2 items-center mt-5">
                    <CiCirclePlus
                        onClick={increment}
                        cursor="pointer"
                        size={50}
                    />
                    <span className="text-[50px]"> {count} </span>
                    <CiCircleMinus
                        onClick={decrement}
                        cursor="pointer"
                        size={50}
                    />
                </div>
                <button
                    onClick={addBasket}
                    type="button"
                    className="border rounded-md px-7 bg-orange-400 hover:bg-orange-500 p-2 text-white w-fit">
                    Sepete ekle
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
