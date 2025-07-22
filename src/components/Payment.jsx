import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payment from "./pages/Payment";

const App = () => (
  <Router>
    <div className="app">
      <h1>Book turf right now</h1>
      <Routes>
        {/* ...existing routes... */}
        <Route path="/payment" element={<Payment />} />
        {/* ...existing routes... */}
      </Routes>
    </div>
  </Router>
);

export default App;