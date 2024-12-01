import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/slices/authSlice';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.auth.user);

    const handleLogout = async() => {
        await dispatch(logout()).unwrap();
        navigate('/login');
    };

    return (
        <div className="w-full h-screen flex items-center justify-center sm:bg-gray-100">
            <div className="max-w-md w-full sm:bg-white p-6 rounded sm:shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Welcome, {userInfo?.data?.fullName || 'User'}!</h2>
                <p className="mb-4">Here is your information:</p>
                <ul className="list-disc list-inside mb-6">
                    <li><strong>Email:</strong> {userInfo?.data?.email || 'N/A'}</li>
                    <li><strong>Phone:</strong> +{userInfo?.data?.phone || 'N/A'}</li>
                    <li><strong>Date of Birth:</strong> {userInfo?.data?.dob || 'N/A'}</li>
                </ul>
                <button
                    onClick={handleLogout}
                    className="w-full bg-[#ff8907]/80 text-white py-2 rounded hover:bg-[#ff8907] transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
