import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../contrainers/Login";
import MapView from "../contrainers/react-leaflet";

import NotFound from "../contrainers/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Mapa" element={<MapView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
