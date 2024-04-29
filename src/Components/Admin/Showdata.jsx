import React, { useEffect, useState } from "react";
import { useAuth } from "../../Auth/AuthProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router';

function Showdata() {
    const { user, datanew, getData, deleteOneItem, userLogOut } = useAuth();
    const [newData, setNewData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (datanew) {
            setNewData(datanew);
        }
    }, [datanew]);

    const deleteHandler = async (itemID) => {
        console.log("deleteHandler", itemID);
        await deleteOneItem(itemID);
        setNewData(newData.filter(data => data.$id !== itemID));
    };

    if (!datanew) {
        return <div>Loading...</div>; // or some other loading state
    }

    const handleSignOut = () => {
        userLogOut();
        navigate("/");
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-9">
            <div className="flex justify-between items-center mb-4 mx-5">
                <p className='text-md font-bold text-gray-700 uppercase'> User Data </p>
                <button
                    type="button"
                    onClick={handleSignOut}
                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                    Sign Out
                </button>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Stream</th>
                        <th scope="col" className="px-6 py-3">Roll</th>
                        <th scope="col" className="px-6 py-3">Unique</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {newData && newData.filter(data => user.$id !== data.userId).map((data, i) => (
                        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{data.name}</td>
                            <td className="px-6 py-4">{data.stream}</td>
                            <td className="px-6 py-4">{data.roll}</td>
                            <td className="px-6 py-4">{data.unique_Id}</td>
                            <td className="px-6 py-4">
                                <RiDeleteBin6Line
                                    onClick={() => deleteHandler(data.$id)}
                                    size={20}
                                    className="cursor-pointer"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Showdata;
