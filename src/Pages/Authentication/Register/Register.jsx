import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignup = (data) => {
        console.log(data);
        const { email, password, fullname } = data;
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                const userInfo = {
                    displayName: fullname
                }
                console.log("SUER INFO", userInfo);
                updateUser(userInfo)
                    .then(() => { navigate("/") })
                    .catch(err => console.error(err.message))
            })

            .catch(err => {
                console.error(err.message);
            })

    }


    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="max-h-[550px] w-96 border-2 py-14 px-10 rounded-lg border-gray-300 ">
                <h1 className="text-xl">Sign up</h1>
                <form onSubmit={handleSubmit(handleSignup)} >
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Full Name</span></label>
                        <input className={`input input-bordered w-full max-w-xl `}
                            placeholder="Full name" type="text"
                            {...register("fullname")}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input className={`input input-bordered w-full max-w-xl `}
                            placeholder="email" type="email"
                            {...register("email", {
                                required: true
                            })}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input className={`input input-bordered w-full max-w-xl ${errors.password && 'input-error'}`}
                            placeholder="password" type="password"
                            {...register("password", {
                                required: "password is required",
                                minLength: { value: 8, message: "min length should be 8" },
                                pattern: /(?=.*\d)/, message: "password should contain at least one digit!",
                                pattern2: /(?=.*[A-Z])/, message2: "password should contain at least one Uppercase!",
                            })}
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        {errors.password && <p className="text-red-500">{errors.password.message2}</p>}
                    </div>

                    <input type="submit" className="btn mt-8 w-full" value="LOGIN" />
                    <Link to="/login">   <p className="text-primary my-3">login if already have an account</p></Link>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full">continue with google</button>
                </form>
            </div>
        </div >
    )
}
