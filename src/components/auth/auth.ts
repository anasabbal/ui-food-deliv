import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


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
    }
}