import "./App.css";
import PageContainer from "./theme/container/PageContainer";
import Header from "./theme/components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./theme/components/Loading";
import { Drawer } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "./redux/slices/basketSlice";

function App() {
    const { basketProducts, drawer } = useSelector((store) => store.basket);
    const dispatch = useDispatch();
    return (
        <div className="p-4">
            <PageContainer>
                <Loading />
                <Header />
                <Drawer
                    anchor="right"
                    open={drawer}
                    onClose={() => dispatch(setDrawer())}>
                    {basketProducts?.map((product) => (
                        <div
                            className="p-5 border-b border-gray-200 flex gap-2"
                            key={product.id}>
                            <img width={50} src={product.image} alt="image" />
                            <div className="flex flex-col">
                                <p className="text-sm font-bold">
                                    {product.title}
                                </p>
                                <p className="text-sm">
                                    Ürün adeti: {product.count}
                                </p>
                                <p className="text-orange-500">
                                    {product.price * product.count} ₺
                                </p>
                            </div>
                        </div>
                    ))}
                </Drawer>
                <RouterConfig />
            </PageContainer>
        </div>
    );
}

export default App;
