import { useQuery } from "@tanstack/react-query";
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useUrl } from "../../../Hooks/useUrl";
import Spinner from "../../Shared/Spinner/Spinner";
export const AddDoc = () => {
    const baseUrl = useUrl();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [image, setImage] = useState("");
    // console.log(image);

    console.log(process.env.REACT_APP_imgbb_key);
    const { data: specialities = [], isLoading } = useQuery({
        queryKey: ['speciality'],
        queryFn: () => fetch(`${baseUrl}/appointmentSpeciality`).then(res => res.json())
    })
    // dependency????

    if (isLoading) return <Spinner />

    const handleAddDoc = (data) => {
        // console.log(data);
        // console.log(data.image[0]);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_imgbb_key}`;
        fetch(url, {
            method: "post",
            body: formData
        }).then(res => res.json())
            .then(imagedata => {
                // console.log(imagedata.data);
                console.log(imagedata.data.display_url);
                const image = imagedata.data.display_url
                console.log(image);
                // if (imagedata.data.display_url) {
                //     console.log("INSDIDER oi");
                //     // setImage(imagedata?.data?.display_url);


                // }
                // create obj
                const doctorInfo = {
                    name: data.fullname,
                    email: data.email,
                    speciality: data.speciality,
                    image: image
                }
                console.log(doctorInfo);


                // save to db
                fetch(`${baseUrl}/doctors`, {
                    method: "POST",
                    headers: {
                        'content-type': "application/json",
                        authorization: `Bearer ${localStorage.getItem('doctors-token')}`
                    },
                    body: JSON.stringify(doctorInfo)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        toast.success(`${doctorInfo.name} added successfull`);
                        navigate('/dashboard/managedoctors')
                    })

            })



    }
    return (
        <div>
            <h1>Add a doctor </h1>
            <form onSubmit={handleSubmit(handleAddDoc)} >
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
                    <label className="label"> <span className="label-text">Speciallity</span></label>
                    <select className="select select-bordered w-full max-w-xs"
                        {...register("speciality")}
                    >
                        {/* <option disabled selected>Choose Speciallity </option> */}
                        {
                            specialities.map(sp => <option key={sp._id} value={sp.name}>{sp.name}</option>)
                        }
                    </select>
                </div>
                {/* <div className="form-control w-full flex">
                    <label className="label"> <span className="label-text">Male</span></label>
                    <input type="radio" name="radio-1" className="radio" checked {...register("Male")} />
                    <label className="label"> <span className="label-text">Female</span></label>
                    <input type="radio" name="radio-1" className="radio" {...register("Female")} />
                </div> */}
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input className={`file-input file-input-bordered w-full max-w-xs `}
                        placeholder="choose a photo" type="file"
                        {...register("image", {
                            required: true, message: "photo is required"
                        })}
                    />
                </div>

                <input type="submit" className="btn mt-8 w-sm" value="ADD" />

            </form>
        </div>
    )
}

/*
3 places to store images
1. third party image hosting server.
2. file sysytem of your server.
3. mongodb


api=1a2e82136acdb306f6d28efa16158ddc

*/