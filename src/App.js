import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import SecuredPage from "./pages/RatePage";
import PrivateRoute from "./helpers/PrivateRoute";
import Feed from "./pages/Feed";

function App() {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                <Route
                    path="/rate"
                    element={
                        <PrivateRoute>
                            <SecuredPage/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/feed"
                    element={
                        <PrivateRoute>
                            <Feed/>
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
