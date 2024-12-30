import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const { id, title, price, image } = product;

    const navigate = useNavigate();

    return (
        <div className="w-[32.4%] h-auto flex flex-col items-center gap-10 px-3 rounded-xl shadow-xl hover:shadow-2xl cursor-pointer">
            <img
                className="bg-cover object-center w-[200px] h-[240px]"
                src={image}
                alt=""
            />
            <div className="flex flex-col pb-3 gap-10">
                <h3 className="h-5">{title}</h3>
                <p className="text-orange-500"> {price} TL </p>
                <button
                    onClick={() => navigate("/product-details/" + id)}
                    className="bg-orange-300 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded pb-2"
                    type="button">
                    Detayına git
                </button>
            </div>
        </div>
    );
};

export default Product;
