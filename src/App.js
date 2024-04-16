import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutUser from "./Pages/user/LayoutUser/LayoutUser";
import Login from "./Components/Login/Login";
import Page1 from "./Pages/user/Page1/Page1";
import NotFound from "./Components/NotFound/NotFound";

import Products from "./Pages/user/Products/Products";

import LayoutAdmin from "./Pages/admin/LayoutAdmin/LayoutAdmin";
import Register from "./Components/Login/Register";
import ForgotPass from "./Components/Login/ForgotPass";
import Home from "./Pages/user/Home/Home";
import About from "./Pages/user/About/About";
import Contact from "./Pages/user/Contact/Contact";
import { createContext, useEffect, useState } from "react";
import { ROUTERS } from "./Router/router";
import Dashboard from "./Pages/admin/Dashboard/Dashboard";
import Detail_product from "./Pages/user/Products/Detail_product";
import Cart from "./Components/Cart/Cart";

export const Data = createContext();

function App() {

  let Nav = useNavigate();
  const sttdata = localStorage.getItem("data");
  const data = sttdata ? JSON.parse(sttdata) : false;
  const status = localStorage.getItem("status_login");
  const isLogin = status ? JSON.parse(status) : false;


  const Actions = [
    { path: ROUTERS.ACTIONS.LOGIN, component: <Login /> },
    { path: ROUTERS.ACTIONS.REGISTER, component: <Register /> },
    { path: ROUTERS.ACTIONS.FORGOTPASSWPRD, component: <ForgotPass /> },

  ];
  const Users = [
    { path: ROUTERS.USER.HOME, component: <Home /> },
    { path: ROUTERS.USER.PRODUCTS, component: <Products /> },
    { path: ROUTERS.USER.PRODUCTID, component: <Detail_product /> },
    { path: ROUTERS.USER.CONTACT, component: <Contact /> },
    { path: ROUTERS.USER.POSTS, component: <About /> },
    { path: ROUTERS.USER.CART, component: <Cart /> },

  ];

  const Admin = [
    { path: ROUTERS.ADMIN.DASHBOARD, component: <Dashboard /> },
    { path: ROUTERS.ADMIN.PRODUCTS, component: <Page1 /> },

  ];
  useEffect(() => {
    try {
      // console.log("data:", data)

      if (!isLogin) {
        return Nav(ROUTERS.ACTIONS.LOGIN)

      }
      return;
    } catch (er) {
      alert("lỗi:", er)
    }
  }, []);

  return (
    <Data.Provider value={{ data }}>
      <Routes>
        <Route path={ROUTERS.ACTIONS.LOGIN} element={<Login />} />
        <Route path={ROUTERS.ACTIONS.REGISTER} element={<Register />} />
        <Route path={ROUTERS.ACTIONS.FORGOTPASSWPRD} element={<ForgotPass />} />

        <Route path={ROUTERS.USER.HOME} element={<LayoutUser />}>
          {
            Users.map((item, key) => (
              <Route key={key + 1} path={item.path} element={item.component} />
            ))
          }
        </Route>

        <Route path={ROUTERS.ADMIN.HOME} element={<LayoutAdmin />} >
          {
            Admin.map((item, key) => (
              <Route key={key + 1} path={item.path} element={item.component} />
            ))
          }
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




