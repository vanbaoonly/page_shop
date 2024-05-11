import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from "react";
import { ROUTERS } from "./Router/router";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import ForgotPass from "./Components/Login/ForgotPass";
import NotFound from "./Components/NotFound/NotFound";
import Page1 from "./Pages/user/Page1/Page1";

import LayoutUser from "./Pages/user/LayoutUser/LayoutUser";
import Home from "./Pages/user/Home/Home";
import Products from "./Pages/user/Products/Products";
import About from "./Pages/user/About/About";
import Contact from "./Pages/user/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import Profile from "./Pages/user/Profile/Profile";


import LayoutAdmin from "./Pages/admin/LayoutAdmin/LayoutAdmin";
import Dashboard from "./Pages/admin/Dashboard/Dashboard";
import ProductsAd from "./Pages/admin/Products/Products";
import Detail_product from "./Pages/user/Products/Detail_product";
import ImageUpload from "./Components/update/ImageUpload";
import Feedback from "./Pages/user/Feedback/Feedback";



function App() {
  let Nav = useNavigate();
  const status = localStorage.getItem("status_login");
  const isLogin = status ? JSON.parse(status) : false;

  const Actions = [
    { path: ROUTERS.ACTIONS.LOGIN, component: <Login /> },
    { path: ROUTERS.ACTIONS.REGISTER, component: <Register /> },
    { path: ROUTERS.ACTIONS.FORGOTPASSWPRD, component: <ForgotPass /> },

  ];
  const Users = [
    { path: ROUTERS.USER.HOME, component: <Home /> },
    { path: "upload", component: <ImageUpload /> },
    { path: ROUTERS.USER.PRODUCTS, component: <Products /> },
    { path: ROUTERS.USER.PRODUCTID, component: <Detail_product /> },
    { path: ROUTERS.USER.CONTACT, component: <Contact /> },
    { path: ROUTERS.USER.POSTS, component: <About /> },
    { path: ROUTERS.USER.CART, component: <Cart /> },
    { path: ROUTERS.USER.PROFILE, component: <Profile /> },
    { path: ROUTERS.USER.FEEDBACK, component: <Feedback /> }

  ];

  const Admin = [
    { path: ROUTERS.ADMIN.DASHBOARD, component: <Dashboard /> },
    { path: ROUTERS.ADMIN.PRODUCTS, component: <ProductsAd /> },

  ];
  useEffect(() => {
    try {
      if (!isLogin) {
        return Nav(ROUTERS.ACTIONS.LOGIN)

      }
      return;
    } catch (er) {
      alert("lỗi:", er)
    }
  }, []);

  return (
    <>

      <Routes>
        {
          Actions.map((item, key) => (
            <Route key={key + 1} path={item.path} element={item.component} />
          ))
        }

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

    </>
  );
}

export default App;




