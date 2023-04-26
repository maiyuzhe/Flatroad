import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

function App() {

  const [marketplace, setMarketplace] = useState([])

  const [exchangeRate, setRate] = useState([{"price":1}])

  const pageLoc = useLocation().pathname

  useEffect(() => {
    fetch('http://localhost:3001/marketplace')
    .then(res=>res.json())
    .then(data => setMarketplace(data))
  }, [])

  useEffect(() => {
    fetch('https://data.binance.com/api/v3/ticker/price')
    .then(res=> res.json())
    .then(data => setRate(data.filter(datum => datum.symbol === "XMRUSDT")))
  }, [])

  return (
    <div>
      <NavBar/>
      <Routes location={pageLoc}>
          <Route path="/" element={<Home prop={marketplace} propTwo={exchangeRate}/>}/>
          <Route path="/page1" element={<Page1/>}/>
          <Route path="/page2" element={<Page2/>}/>
      </Routes>
    </div>
  );
}

export default App;
