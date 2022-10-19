import { Component } from "react";


type Props = {};

type State = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
};

export default class Auth extends Component{
    constructor(props: Props){
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password : ""
        };
    }
    handleRegister(formValue: {firstName: string, lastName: string, email: string, password: string}){
        const {firstName, lastName, email, password} = formValue;

        this.setState({
            message: "",
            successful: false
        });
    }
}