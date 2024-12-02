import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateLogin } from '../../utils/validation';
import Image from '../../assets/img1.jpg';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateLogin(form);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            await dispatch(login(form)).unwrap();
            navigate('/')
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

            <div className="flex items-center justify-center bg-white col-span-1 sm:col-span-2 lg:col-span-1 h-full p-3 lg:p-4 border rounded-md shadow-lg">
                <div className="w-full max-w-xl">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
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

                        <div className="mb-4">
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

                        <button type="submit" className="w-full bg-[#023421] transition-all duration-300 hover:bg-[#ff8907] text-white py-2 rounded">
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm">
                        Don’t have an account?{' '}
                        <Link to="/signup" className="text-[#ff8907] transition-all duration-300 hover:underline">
                            Sign up for free
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

