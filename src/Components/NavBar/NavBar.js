import { Link } from "react-router-dom"
import logo from "../../logo.jpg"
import DropDown from "./DropDown"

function NavBar(){

    return (
        <div className="inline-flex pl-5 pt-5">
            <img src={logo} alt="flatroad-logo" className="object-fit h-20 w-20"/>
            <div className="p-10 inline-flex gap-20">
                <h1>flatroad</h1>
                <Link className="inline-flex w-full bg-green-300 p-2.5 hover:bg-red-500 rounded-lg" to="/">Home</Link>
                <Link className="inline-flex w-full bg-green-300 p-2.5 hover:bg-red-500 rounded-lg" to="/page2">Orders</Link>
                <DropDown />
            </div>
        </div>
    )
}

export default NavBar