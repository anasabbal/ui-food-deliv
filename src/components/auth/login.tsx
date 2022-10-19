import { Component } from "react";
import * as Yup from "yup";
import Register from "./register";

type Props = {};

type State = {
    email: string,
    password: string,
    successful: boolean,
    message: string
}


class Login extends Register{
    constructor(props: Props){
        super(props);
    }
    /**
     * 
     * UI
    render (){
        return (
            // Add UI
        );
    }
     */
}