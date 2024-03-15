import { Route, Routes, json, useNavigate } from "react-router-dom";
import LayoutUser from "./Pages/user/LayoutUser/LayoutUser";
import Login from "./Components/Login/Login";
import Page1 from "./Pages/user/Page1/Page1";
import NotFound from "./Components/NotFound/NotFound";
import Products from "./Pages/admin/Products/Products";
import LayoutAdmin from "./Pages/admin/LayoutAdmin/LayoutAdmin";
import Register from "./Components/Login/Register";
import ForgotPass from "./Components/Login/ForgotPass";
import Home from "./Pages/user/Home/Home";
import { createContext, useEffect, useState } from "react";

export const Data = createContext();

function App() {
  const [data, setdata] = useState([]);
  const status = localStorage.getItem("status_login");
  const isLogin = status ? JSON.parse(status) : false;

  let Navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      Navigate("/login")
    } else {
      return;
    }
  }, [isLogin, data]);

  return (
    <Data.Provider value={data}>
      <Routes>
        <Route path="/login" element={<Login setdata={setdata} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/user" element={<LayoutUser />}>
          <Route path="home" element={<Home />} />
          <Route path="product" element={<Page1 />} />
          <Route path="product/:id" element={<Page1 />} />
        </Route>

        <Route path="/admin/dashboard" element={<LayoutAdmin />} >
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Page1 />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Data.Provider>
  );
}

export default App;




