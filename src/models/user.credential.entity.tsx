import * as yup from 'yup'

export class UserCredentialsEntity{
    username?:string;
    email?:string;
    password?:string;

    static UserSignUpSchema(){
        return yup.object({
            username:yup.string().required("username required"),
            email:yup.string().email("email must be valid").required("email required"),
            password:yup.string().min(6,"must be at least 4 character").required("password required")
        })
    }

    static UserLoginSchema(){
        return yup.object({
            identifier:yup.string().required("must be valid user name"),
            password:yup.string().min(6,"at least 6 characters").required("password required")
        })
    }

}