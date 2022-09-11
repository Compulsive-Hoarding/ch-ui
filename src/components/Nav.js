import React from "react";
import {Link, useNavigate} from "react-router-dom";
import userService from "../services/UserService";

const Nav = () => {
    let navigate = useNavigate();

    const login = () => userService.doLogin()
        .then(navigate("/rate"));
    const logout = () => userService.doLogout()
        .then(navigate("/"));

    return (
        <nav>
            <div className="logo">Hoarding</div>
            {!userService.isLoggedIn() && (
                <button onClick={login}>Login</button>
            )}

            {userService.isLoggedIn() && (
                <div>
                    <Link to="rate">Rate</Link>
                    <Link to="feed">Feed</Link>
                </div>
            )}

            {userService.isLoggedIn() && (
                <button onClick={logout}>
                    Logout ({userService.getUsername()})
                </button>
            )}
        </nav>
    );
};

export default Nav;
