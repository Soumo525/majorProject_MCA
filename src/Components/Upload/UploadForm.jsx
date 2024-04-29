import React, { useEffect,useState,useRef } from "react";
import { useAuth } from "../../Auth/AuthProvider";
import { useNavigate } from 'react-router';
import { ID } from "appwrite";
import { nanoid } from 'nanoid'
function UploadForm() {
  const navigate = useNavigate();
  const { user,addToDatabase,uploadImage,uploadSig} = useAuth();


  useEffect(() => {
    if (!user) {
      navigate('/loginFrom');
    }
  }, [user, navigate]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [stream, setStream] = useState('')
  const [roll, setRoll] = useState('');
  const [sub, setSub] = useState('');
  const [unique, setUnique] = useState('');
  useEffect(() => {
    setUnique(nanoid(10));
  }, []);
  

  const img = useRef(null)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const fileInput = img.current.querySelector('input[type="file"]');
    const file = fileInput.files[0];

    if (user) {
     try{
       const fileId = await uploadImage(file);
       console.log("File ID: ", fileId);
       
       await addToDatabase({ name,email,stream,roll, sub, pic_Id: fileId, unique_Id: unique});
     }
    catch(error) {
     console.error(error);
    }
    setName('')
    setEmail('')
    setStream('')
    setRoll('')
    setSub('')

   }
 }
  return (
    <>
      <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white shadow-md rounded-md p-6">
            <img
              className="mx-auto h-12 w-auto"
              src="https://www.svgrepo.com/show/499664/user-happy.svg"
              alt=""
            />

            <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
              Upload Your Document
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit} ref={img} >
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Full Name
                </label>
                <div className="mt-1">
                  <input onChange={(e) => setName(e.target.value)}
                    name="name"
                    type="text"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="stream"
                  className="block text-sm font-medium text-gray-700"
                >
                  Stream
                </label>
                <div className="mt-1">
                  <input onChange={(e) => setStream(e.target.value)}
                    name="stream"
                    type="text"
                    autoComplete="stream"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="university-roll"
                  className="block text-sm font-medium text-gray-700"
                >
                  University Roll
                </label>
                <div className="mt-1">
                  <input onChange={(e) => setRoll(e.target.value)}
                    name="university-roll"
                    type="text"
                    autoComplete="university-roll"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject (Math, Computer)
                </label>
                <div className="mt-1">
                  <input onChange={(e) => setSub(e.target.value)}
                    name="subject"
                    type="text"
                    autoComplete="subject"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="file_input_picture"
                >
                  Your Picture
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input_picture"
                  type="file"
                />
              </div>

              {/* <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="file_input_signature"
                >
                  Your Signature
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input_signature"
                  type="file"
                />
              </div> */}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadForm;
