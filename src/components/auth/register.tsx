import { Component } from "react";
import * as Yup from "yup";
import authService from "../../service/auth-service";


type Props = {};

type State = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    successful: boolean,
    message: string
};

export default class Register extends Component<Props, State>{

    constructor(props: Props){
        super(props);
        this.handleRegister = this.handleRegister.bind(this);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password : "",
            successful: false,
            message: ""
        };
    }
    validation(){
        return Yup.object().shape({
            firstName : Yup.string().test(
                "len",
                "The firstname must be between 3 and 20 characters.",
                (val: any) =>
                    val &&
                    val.toString().length >= 3 &&
                    val.toString().length <= 20
            ).required("This field is required!"),
            lastName: Yup.string().test(
                "len",
                "The firstname must be between 3 and 20 characters.",
                (val: any) =>
                    val &&
                    val.toString().length >= 3 &&
                    val.toString().length <= 20
            ).required("This field is required!"),
            email: Yup.string()
                .email("This is not a valid email.")
                .required("This field is required!"),
            password: Yup.string()
                .test(
                    "len",
                    "The password must be between 6 and 40 characters.",
                    (val: any) =>
                        val &&
                        val.toString().length >= 6 &&
                        val.toString().length <= 40
                    )
                    .required("This field is required!"),
        });
    }
    handleRegister(formValue: {firstName: string, lastName: string, email: string, password: string}){
        const {firstName, lastName, email, password} = formValue;

        this.setState({
            message: "",
            successful: false
        });
        authService.register(
            email,
            password,
            firstName,
            lastName
        ).then(
            response => {
                this.setState({
                    message : response.data.message,
                    successful: true
                });
            },
            error => {
                const resMessage = 
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            
                    this.setState({
                    successful: false,
                    message: resMessage
                    });
            }
        );
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