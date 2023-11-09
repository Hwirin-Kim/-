import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Board from "../pages/Board";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
