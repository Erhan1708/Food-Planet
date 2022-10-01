import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import "./App.css";
import Content from "./pages/content/Content";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Delivery from "./pages/Delivery/Delivery";
import Contacts from "./pages/Contacts/Contacts";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import Admin from "./pages/admin/Admin";

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Header />} >
               <Route index element={<Content />} />
               <Route path="/menu" element={<Menu />} />
               <Route path="/basket" element={<Cart />} />
               <Route path="/delivery" element={<Delivery />} />
               <Route path="/contacts" element={<Contacts/>}/>
            </Route>
            <Route path="/admin" element={<Admin />}>
               
            </Route>
            <Route path="*" element={<NotFound />} />
         </Routes>
         <Toaster/>
      </BrowserRouter>
   );
};

export default App;
