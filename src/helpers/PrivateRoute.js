import {Navigate} from 'react-router-dom';
import userService from "../services/UserService";

const PrivateRoute = ({children}) => {
    return userService.isLoggedIn ?
        children :
        <Navigate to="/" replace/>;
};

export default PrivateRoute;
