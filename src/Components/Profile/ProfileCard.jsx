import React, { useEffect, useState } from "react";
import { useAuth } from "../../Auth/AuthProvider";
import { useNavigate } from 'react-router';
import { storage } from "../../appwrite/appwrite";
import conf from "../Conf/Conf";

function ProfileCard() {
    const navigate = useNavigate();
    const { user, datanew, getData, userImage, getuserImage } = useAuth();
    useEffect(() => {
        getData();
        getuserImage();
      }, []);
    
      useEffect(() => {
        if (!user) {
          navigate('/loginFrom');
        }
      }, [user, navigate]);
  return (
    <>
{
    datanew && datanew.map((data,index) => {
        if (user.$id === data.userId) {
            return (
                <div  key={index}class="flex items-center h-screen w-full justify-center">

<div class="w-1/5">
    <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src={storage.getFilePreview(conf.appwriteBucketId_1, data.pic_Id)} alt="John Doe"/>
        </div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{data.name}</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>Student</p>
            </div>
            <table class="text-xs my-3">
                <tbody><tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Stream</td>
                    <td class="px-2 py-2">{data.stream}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Roll</td>
                    <td class="px-2 py-2">{data.roll}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td class="px-2 py-2">{data.email}</td>
                </tr>
            </tbody></table>

            {/* <div class="text-center my-3">
                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
            </div> */}

        </div>
    </div>
</div>

</div>
            )
        }
    })
}

    </>
  )
}

export default ProfileCard