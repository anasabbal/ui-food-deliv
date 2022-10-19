import axios from "axios";
import ApiRoutes from "../core/api/ApiRoute";


const API_URL = "http://localhost:8080/api" + ApiRoutes.auth;

class AuthService{
    login(email: string, password:string){
        return axios.post(
            API_URL + "/login", {email, password}
        ).then(response => {
            if(response.data.accessToken){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }
    register(email: string, password:string, firstName: string, lastName: string ){
        return axios.post(API_URL+ "/register", {email, password, firstName, lastName});
    }
    logout(){
        localStorage.removeItem("user");
    }
}
export default new AuthService();