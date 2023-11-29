import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const TableId = React.lazy(() => import("pages/TableId"));
const TableList = React.lazy(() => import("pages/TableList"));
const AddTable = React.lazy(() => import("pages/AddTable"));
const Categories = React.lazy(() => import("pages/Categories"));
const MenuList = React.lazy(() => import("pages/MenuList"));
const AddMenu = React.lazy(() => import("pages/AddMenu"));
const Analytics = React.lazy(() => import("pages/Analytics"));
const Review = React.lazy(() => import("pages/Review"));
const Customer = React.lazy(() => import("pages/Customer"));
const OrderId = React.lazy(() => import("pages/OrderId"));
const OrderList = React.lazy(() => import("pages/OrderList"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/orderid" element={<OrderId />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/review" element={<Review />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/addmenu" element={<AddMenu />} />
          <Route path="/menulist" element={<MenuList />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/addtable" element={<AddTable />} />
          <Route path="/tablelist" element={<TableList />} />
          <Route path="/tableid" element={<TableId />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
