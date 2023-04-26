import { Link } from "react-router-dom"
import logo from "../logo.jpg"
import { useState } from "react"

function NavBar(){

    const [dropdown, setDropdown] = useState(true)

    return (
        <div className="inline-flex pl-5 pt-5">
            <img src={logo} alt="flatroad-logo" className="object-fit h-20 w-20"/>
            <div className="p-10 inline-flex gap-20">
                <h1>flatroad</h1>
                <Link className="bg-green-300 p-2.5 hover:bg-red-500 rounded-lg" to="/">Home</Link>
                <Link className="bg-green-300 p-2.5 hover:bg-red-500 rounded-lg" to="/page1">User Account</Link>
                <Link className="bg-green-300 p-2.5 hover:bg-red-500 rounded-lg" to="/page2">Orders</Link>
                <button onClick={()=>setDropdown(!dropdown)}type="button" className="inline-flex justify-center hover:bg-red-300" >Account</button>
                {dropdown ? null : <div className="bg-green-300 p-2.5 h-20 w-20">
                        <Link to="/page1">Sign In</Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default NavBar