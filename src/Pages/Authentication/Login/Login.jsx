import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useLocation } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useToken } from '../../../Hooks/useToken';
const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [loginErr, setLoginErr] = useState("");
    const [loginEmail, setLoginEmail] = useState('')
    const [token] = useToken(loginEmail)


    // routing part
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"

    // jodi pai taile navigate korbo
    if (token) navigate(from, { replace: true })


    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = (data) => {
        console.log(data);
        setLoginErr("")
        const { email, password } = data;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success("Login successfull")
                console.log(user);
                // setLoginEmail(user.email);
                setLoginEmail(email);

            })
            .catch(err => {
                console.log(err);
                setLoginErr(err.message)
            })
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="max-h-[550px] w-96 border-2 py-14 px-10 rounded-lg border-gray-300 ">
                <h1 className="text-xl">Login</h1>
                <form onSubmit={handleSubmit(handleLogin)} >
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input className={`input input-bordered w-full max-w-xl ${errors.email && "input-error"}`}
                            {...register("email", { required: "email is required" })} placeholder="email address" type="email" />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input className={`input input-bordered w-full max-w-xl ${errors.password && "input-error"}`}
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 8, message: "password must be at least 8 characters" },
                                maxLength: { value: 10, message: "password must be at most 10 characters" },



                            })} placeholder="password" type="password" />
                    </div>
                    {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                    <p>forget password?</p>

                    {loginErr && <p className="text-red-600">{loginErr}</p>}


                    <input type="submit" className="btn mt-8 w-full" value="LOGIN" />
                    <Link to="/register">  <p className="text-primary my-3">create new account</p></Link>
                    <div className="divider">OR</div>
                    <> <button className="btn btn-outline w-full">continue with google</button></>
                </form>
            </div>
        </div >
    )
}

export default Login