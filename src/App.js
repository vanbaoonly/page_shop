import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutUser from "./Pages/user/LayoutUser/LayoutUser";
import Login from "./Components/Login/Login";
import Page1 from "./Pages/user/Page1/Page1";
import NotFound from "./Components/NotFound/NotFound";
import Products from "./Pages/admin/Products/Products";
import LayoutAdmin from "./Pages/admin/LayoutAdmin/LayoutAdmin";
import Register from "./Components/Login/Register";
import ForgotPass from "./Components/Login/ForgotPass";
import Home from "./Pages/user/Home/Home";
import About from "./Pages/user/About/About";
import Contact from "./Pages/user/Contact/Contact";
import { createContext, useEffect, useState } from "react";
import { ROUTERS } from "./Router/router";

export const Data = createContext();

function App() {

  let Nav = useNavigate();
  const sttdata = localStorage.getItem("data");
  const data = sttdata ? JSON.parse(sttdata) : false;
  const status = localStorage.getItem("status_login");
  const isLogin = status ? JSON.parse(status) : false;


  useEffect(() => {
    try {
      console.log("data:", data)
      if (!isLogin) {
        Nav(ROUTERS.ACTIONS.LOGIN)

      } else {
        return;
      }
    } catch (er) {
      alert("lỗi:", er)
    }
  }, [isLogin, data, data.type]);

  return (
    <Data.Provider value={{ data }}>
      <Routes>
        {/* <Route path={ROUTERS.ACTIONS.LOGIN} element={<Login />} />
        <Route path={ROUTERS.ACTIONS.REGISTER} element={<Register />} />
        <Route path={ROUTERS.ACTIONS.FORGOTPASSWPRD} element={<ForgotPass />} /> */}

        {/* <Route path={ROUTERS.USER.HOME} element={!isLogin ? <Navigate to={ROUTERS.ACTIONS.FORGOTPASSWPRD} /> : <LayoutUser />}> */}
        <Route path={ROUTERS.USER.HOME} element={<LayoutUser />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<Page1 />} />
          <Route path="product/:id" element={<Page1 />} />
        </Route>


        {/* <Route path={ROUTERS.ADMIN.HOME} element={!isLogin ? <Navigate to={ROUTERS.ACTIONS.LOGIN} /> : <LayoutAdmin />} > */}
        <Route path={ROUTERS.ADMIN.HOME} element={<LayoutAdmin />} >
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Page1 />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      >

      </ToastContainer>


    </Data.Provider >
  );
}

export default App;




