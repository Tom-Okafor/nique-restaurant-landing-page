import { Routes, Route } from "react-router-dom";
import Classes from "../classes";
import Menu from "../menu";
import Reservation from "../reservation";
import Restaurant from "../restaurant";
import HomePage from "../homepage/HomePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/restaurant" element={<Restaurant />} />
    </Routes>
  );
}
