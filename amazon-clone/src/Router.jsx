import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Result from "../src/Pages/Results/Results";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/category/:catagoryName" element={<Result />} />
    </Routes>
  );
};

export default Router;
