import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { validateSignup } from '../../utils/validation';

import Image from '../../assets/img2.jpg'

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css'

import { register } from '../../store/slices/authSlice';
import { useDispatch } from 'react-redux';

const Register = () => {

    const dispatch = useDispatch();
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        dob: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handlePhoneChange = (value) => {
        setForm((prevForm) => ({
            ...prevForm,
            phone: `+${value}`,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateSignup(form);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const res = await dispatch(register(form)).unwrap();
            console.log(res);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 h-screen p-4 mx-auto gap-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
            <div className="hidden md:block col-span-1 sm:col-span-3 lg:col-span-2">
                <img
                    src={Image}
                    alt="Background"
                    className="w-full h-full object-fill rounded-md"
                />
            </div>

            <div className="flex justify-center items-center h-full bg-white col-span-1 sm:col-span-2 lg:col-span-1 rounded-md shadow-xl">
                <div className="w-full max-w-xl p-3 lg:p-4">
                    <div className="m-auto">
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold">Create an Account</h2>
                            <p className="text-sm">Enter your details below to create an account and get started.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                            <div className="mb-0">
                                <label className="block font-medium mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    className="w-full border outline-[#ff8907] rounded px-3 py-2"
                                />
                                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                            </div>

                            <div className="mb-0">
                                <label className="block font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full border outline-[#ff8907] rounded px-3 py-2"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>

                            <div className="mb-0">
                                <label className="block font-medium mb-1">Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={form.dob}
                                    onChange={handleChange}
                                    className="w-full border outline-[#ff8907] rounded px-3 py-2"
                                />
                                {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
                            </div>

                            <div className="mb-0">
                                <label className="block font-medium mb-1">Phone Number</label>
                                <PhoneInput
                                    country={'in'}
                                    value={form.phone}
                                    onChange={handlePhoneChange}
                                    inputStyle={{
                                        width: '100%',
                                        height: '45px',
                                    }}
                                    containerStyle={{
                                        marginTop: '5px',
                                        marginBottom: '5px',
                                    }}
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                            </div>

                            <div className="mb-0">
                                <label className="block font-medium mb-1">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className="w-full border outline-[#ff8907] rounded px-3 py-2"
                                />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                            </div>

                            <div className="mb-0">
                                <label className="block font-medium mb-1">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full border outline-[#ff8907] rounded px-3 py-2"
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                            </div>

                            <button type="submit" className="w-full bg-[#023421] transition-all duration-300 hover:bg-[#ff8907] text-white py-2 rounded">
                                Create Account
                            </button>
                            <p className="my-auto text-sm">
                                Already have an account?{' '}
                                <Link to="/login" className="text-[#ff8907] transition-all duration-300 hover:underline">
                                    Login
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;
