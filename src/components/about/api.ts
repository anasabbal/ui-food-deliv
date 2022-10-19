import { API } from "../../core/api";
import ApiRoutes from "../../core/api/ApiRoute";


export const getAbout = () => API.get(ApiRoutes.about);

export const getAboutById = (id: {id: string}) => 
    API.get(`${ApiRoutes.about}/${id}`);