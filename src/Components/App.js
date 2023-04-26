import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import NavBar from "./NavBar/NavBar";
import { useEffect, useState } from "react";
import LogInPage from "./LogInPage";
import SignUp from "./SignUp";

function App() {

  const [marketplace, setMarketplace] = useState([])

  const [exchangeRate, setRate] = useState([{"price":1}])

  const [userOrders, setOrders] = useState([])

  const [loggedIn, setLogin] = useState(true)

  const [account, setAccount] = useState(true)

  const [signUp , setStatus] = useState(true)

  const pageLoc = useLocation().pathname

  useEffect(() => {
    fetch('http://localhost:3001/marketplace')
    .then(res=>res.json())
    .then(data => setMarketplace(data))
  }, [])

  useEffect(()=> {
    fetch('http://localhost:3001/orders')
    .then(res=> res.json())
    .then(data=> setOrders(data))
  }, [])

  useEffect(() => {
    fetch('https://data.binance.com/api/v3/ticker/price')
    .then(res=> res.json())
    .then(data => setRate(data.filter(datum => datum.symbol === "XMRUSDT")))
  }, [])

  function updateMarketplace(arg1){
    setMarketplace([...marketplace, arg1])
  }

  function handleBuyItem(arg1){
    const newItems = marketplace.filter(item=> item.id !== arg1.id)
    setMarketplace([arg1,...newItems])
    setOrders([arg1, ...userOrders])
    const newOrder = {
      image: arg1.image,
      name: arg1.name,
      description: arg1.description,
      price: arg1.price
    }
    fetch('http://localhost:3001/orders', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newOrder)
    })
  }

  function handleLogin(){
    setLogin(!loggedIn)
    setAccount(!account)
  }

  function newAccount(){
    setStatus(!signUp)
  }

  return (
      <div>
        <div className={!signUp || !account ? "invisible" : ""}>
          <LogInPage propFunc={handleLogin} propFuncTwo={newAccount}/>
        </div>
        <div className={signUp ? "invisible" : ""}>
          <Routes>
            <Route path="/signup" element={<SignUp propFuncTwo={newAccount}/>} />
          </Routes>
        </div>
        <div className={account ? "invisible" : ""}>
          <NavBar/>
          <Routes location={pageLoc}>
              <Route path="/" element={<Home prop={marketplace} propTwo={exchangeRate} propFunc={handleBuyItem}/>}/>
              <Route path="/page1" element={<Page1 propFunc={updateMarketplace} />}/>
              <Route path="/page2" element={<Page2 prop={userOrders} propTwo={exchangeRate}/>}/>
              
          </Routes>
        </div>
      </div>);
}

export default App;
