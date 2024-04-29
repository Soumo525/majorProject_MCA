import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../Auth/AuthProvider";
import { useNavigate } from 'react-router';
import { storage } from "../../appwrite/appwrite";
import conf from "../Conf/Conf";
import { ReactToPrint } from "react-to-print"; // Import ReactToPrint

const Qr = () => {
  const navigate = useNavigate();
  const { user, datanew, getData, userImage, getuserImage } = useAuth();
  const [last, setLast] = useState(null); // State to store the calculated value
  const componentRef = useRef(); // Reference to the component to be printed

  useEffect(() => {
    getData();
    getuserImage();
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/loginFrom');
    }
  }, [user, navigate]);

  useEffect(() => {
    // Calculate 'last' value when 'datanew' changes
    datanew.map((data, index) => {
      if (user.$id === data.userId) {
        setLast(data.roll % 100); // Update the 'last' state
      }
    });
  }, [datanew]);

  return (
    <div className="bg-white rounded-lg shadow-md p-8 mx-auto my-5 border border-gray-300" style={{ width: "21cm", minHeight: "29.7cm", padding: "2cm" }}>
      <h2 className="text-2xl font-bold mb-4">Hall Ticket</h2>
      {datanew &&
        datanew.map((data, indx) => {
          if (user.$id === data.userId) {
            return (
              <div key={indx} className="grid grid-cols-2 gap-8">
                {/* Left Side Details */}
                <div>
                  <h2 className="text-sm font-bold mb-2">Enrollment Number: {data.unique_Id + last}</h2>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                      <p className="font-semibold">Student Name:</p>
                      <p>{data.name}</p>
                    </div>
                    <div className="w-1/2">
                      <p className="font-semibold">Exam Date:</p>
                      <p>08/07/2024</p>
                    </div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                      <p className="font-semibold">Exam Time:</p>
                      <p>14:30</p>
                    </div>

                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                      <p className="font-semibold"> Stream </p>
                      <p>{data.stream}</p>
                    </div>
                    <div className="w-1/2">
                      <p className="font-semibold">Roll Number:</p>
                      <p>{data.roll}</p>
                    </div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                      <p className="font-semibold"> Subject  </p>
                      <p>{data.sub}</p>
                    </div>
                   
                
                  </div>
                  <div className="flex justify-between mb-4">
                  <div className="w-1/2">
                      <p className="font-semibold"> Email  </p>
                      <p>{data.email}</p>
                    </div>
                   
                
                  </div>
                  <div>
                    <p className="font-semibold">Exam Venue:</p>
                    <p>Kolkata</p>
                  </div>
                </div>

                {/* Right Side Pictures */}
                <div className="relative top-5 right-0 mt-4 mr-4">
                  <div className="flex justify-between">
                    <img src={"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + data.unique_Id+data.name} alt="Image 1" className="w-20 mr-2" />
                    <img src={storage.getFilePreview(conf.appwriteBucketId_1, data.pic_Id)} alt="Image 2" className="w-20 ml-2" />
                  </div>
                </div>
              </div>
            )
          }
          return null; // Return null if user ID doesn't match
        })}
      <ReactToPrint
        trigger={() => <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Print</button>}
        content={() => componentRef.current}
      />
    <div style={{ display: "none" }}>
  <div ref={componentRef}>
    {/* Component to be printed */}
    {datanew &&
      datanew.map((data, indx) => {
        if (user.$id === data.userId) {
          return (
            <div key={indx} className="grid grid-cols-2 gap-8">
              {/* Left Side Details */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Hall Ticket</h2>
                  <h2 className="text-sm font-bold mb-2">Enrollment Number: {data.unique_Id + last}</h2>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                      <p className="font-semibold">Student Name:</p>
                      <p>{data.name}</p>
                    </div>
                    <div className="w-1/2">
                      <p className="font-semibold">Exam Date:</p>
                      <p>08/07/2024</p>
                    </div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                      <p className="font-semibold">Exam Time:</p>
                      <p>14:30</p>
                    </div>

                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                      <p className="font-semibold"> Stream </p>
                      <p>{data.stream}</p>
                    </div>
                    <div className="w-1/2">
                      <p className="font-semibold">Roll Number:</p>
                      <p>{data.roll}</p>
                    </div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                      <p className="font-semibold"> Subject  </p>
                      <p>{data.sub}</p>
                    </div>
                   
                
                  </div>
                  <div className="flex justify-between mb-4">
                  <div className="w-1/2">
                      <p className="font-semibold"> Email  </p>
                      <p>{data.email}</p>
                    </div>
                   
                
                  </div>
                  <div>
                    <p className="font-semibold">Exam Venue:</p>
                    <p>Kolkata</p>
                  </div>
                </div>

              {/* Right Side Pictures */}
              <div className="relative top-5 right-0 mt-4 mr-4">
                <div className="flex justify-between">
                  <img src={"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + data.unique_Id+data.name} alt="Image 1" className="w-20 mr-2" />
                  <img src={storage.getFilePreview(conf.appwriteBucketId_1, data.pic_Id)} alt="Image 2" className="w-20 ml-2" />
                </div>
              </div>
            </div>
          )
        }
        return null; // Return null if user ID doesn't match
      })}
    <style>
      {`
        @media print {
          body {
            margin-top: 30px;
            margin-left: 40px;
          }
        }
      `}
    </style>
  </div>
</div>

    </div>
  );
};

export default Qr;
