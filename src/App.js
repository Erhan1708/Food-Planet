import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import "./App.css";
import Content from "./pages/content/Content";
import Header from "./components/Header/Header";
import Basket from "./pages/Basket/Basket";
import NotFound from "./pages/NotFound/NotFound";
import Delivery from "./pages/Delivery/Delivery";
import Contacts from "./pages/Contacts/Contacts";
import Menu from "./pages/Menu/Menu";

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Header />} >
               <Route index element={<Content />} />
               <Route path="/menu" element={<Menu />} />
               <Route path="/basket" element={<Basket />} />
               <Route path="/delivery" element={<Delivery />} />
               <Route path="/contacts" element={<Contacts/>}/>
            </Route>
            <Route path="*" element={<NotFound />} />
         </Routes>
         <Toaster/>
      </BrowserRouter>
   );
};

export default App;
