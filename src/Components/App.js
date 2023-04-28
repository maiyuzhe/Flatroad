import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import NavBar from "./NavBar/NavBar";
import { useEffect, useState } from "react";
import LogInPage from "./LogInPage";
import SignUp from "./SignUp";
import Wallet from "./Wallet";
import YourStore from "./YourStore";

function App() {

  const [currentUser, setCurrentUser] = useState(["dev", 10])

  const [marketplace, setMarketplace] = useState([])

  const [exchangeRate, setRate] = useState([{"price":1}])

  const [userOrders, setOrders] = useState([])

  const [loggedIn, setLogin] = useState(true)

  const [account, setAccount] = useState(true)

  const [signUp , setStatus] = useState(true)

  const [users, setUsers] = useState([])

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

  useEffect(()=>{
    fetch('http://localhost:3001/users')
    .then(res=>res.json())
    .then(data => setUsers([...data]))
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
      price: arg1.price,
      seller: arg1.seller,
      buyer: currentUser[0]
    }
    fetch('http://localhost:3001/orders', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newOrder)
    })
  }

  function handleLogin(arg1){
    const newUser = users.filter(user => arg1.username === user.username)
    .filter(user => arg1.password === user.password)

    if(newUser.length === 1 ){
      setLogin(!loggedIn)
      setCurrentUser([arg1.username, arg1.wallet])
      setAccount(!account)
    }
    else{alert("Username or Password Incorrect")}
  }

  function newAccount(arg1){
    if(arg1===undefined){setStatus(!signUp)}
    else{
      setStatus(!signUp)
      setUsers([...users, arg1])
    }
  }

  const userStore = marketplace.filter(item => item.seller === currentUser[0])

  const myOrders = userOrders.filter(item => item.buyer === currentUser[0])

  return (
      <div>
        <div className={!signUp || !account ? "hidden" : ""}>
          <LogInPage propFunc={handleLogin} propFuncTwo={newAccount}/>
        </div>
        <div className={signUp ? "hidden" : ""}>
          <Routes>
            <Route path="/signup" element={<SignUp propFuncTwo={newAccount}/>} />
          </Routes>
        </div>
        <div className={account ? "hidden" : ""}>
          <NavBar propFunc={handleLogin}/>
          <Routes location={pageLoc}>
              <Route path="/" element={<Home prop={marketplace} propTwo={exchangeRate} propThree={currentUser} propFunc={handleBuyItem}/>}/>
              <Route path="/page1" element={<Page1 propFunc={updateMarketplace} prop={currentUser}/>}/>
              <Route path="/page2" element={<Page2 prop={myOrders} propTwo={exchangeRate}/>}/>
              <Route path="/wallet" element={<Wallet prop={currentUser}/>} />
              <Route path="/user-store" element={<YourStore prop={userStore} propTwo={exchangeRate} propThree={currentUser}/>} />
          </Routes>
        </div>
      </div>);
}

export default App;
