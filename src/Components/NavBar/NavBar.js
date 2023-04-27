import { Link } from "react-router-dom"
import logo from "../../logo.jpg"
import DropDown from "./DropDown"

function NavBar({propFunc}){

    return (
        <div className="inline-flex pl-5 pt-5">
            <img src={logo} alt="flatroad-logo" className="object-fit h-20 w-20"/>
            <div className="p-10 inline-flex gap-20">
                <h1>flatroad</h1>
                <Link className="inline-flex w-full justify-center rounded-xl p-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-green-300 hover:bg-gray-50" to="/">Home</Link>
                <Link className="inline-flex w-full justify-center rounded-xl p-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-green-300 hover:bg-gray-50" to="/page2">Orders</Link>
                <DropDown propFunc={propFunc}/>
            </div>
        </div>
    )
}

export default NavBar