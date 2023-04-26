import { Link } from "react-router-dom"

function LogInPage({propFunc, propFuncTwo}){

    return (
        <div className="flex-auto justify-content-center">
            <div>
                <form>
                    <label>Username</label>
                    <input type="text"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <button onClick={(e) => {
                        e.preventDefault()
                        propFunc()
                        }}>Sign In</button>
                </form>
                <Link to="/signup" onClick={() => propFuncTwo()}>Sign Up</Link>
            </div>
        </div>
    )
}

export default LogInPage