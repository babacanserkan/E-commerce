import { useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../../redux/slices/basketSlice";

const Header = () => {
    const [theme, setTheme] = useState(false);
    const { basketProducts } = useSelector((store) => store.basket);
    const basketCount = basketProducts.length;

    const dispatch = useDispatch();

    const changeTheme = () => {
        const root = document.getElementById("root");

        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }
        setTheme(!theme);
    };

    return (
        <>
            <div className="flex justify-between border-b-2">
                <Link to={"/"}>
                    <img
                        className="w-[60px]"
                        src="../src/assets/images/logo.png"
                    />
                </Link>

                <div className="flex items-center gap-2">
                    <input
                        className="p-3 border border-b-gray-300 outline-none"
                        type="text"
                        placeholder="Birşeyler ara..."
                    />
                    <div className="flex items-center gap-3">
                        {theme ? (
                            <CiLight
                                className="cursor-pointer"
                                onClick={changeTheme}
                                size={24}
                            />
                        ) : (
                            <FaMoon
                                className="cursor-pointer"
                                onClick={changeTheme}
                                size={24}
                            />
                        )}
                        <Badge badgeContent={basketCount} color="primary">
                            <CiShoppingBasket
                                onClick={() => dispatch(setDrawer())}
                                cursor="pointer"
                                size={30}
                            />
                        </Badge>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
