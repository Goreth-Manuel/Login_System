import { JSX, useContext } from "react"
import { AuthContext } from "./AuthContext";
import { Login } from "../../pages/Login";

export const RequireAuths = ({children}: {children: JSX.Element}) => {
    const auth = useContext(AuthContext)

    if(!auth.user) {
        return <Login/>
    }
    return children;
}                       