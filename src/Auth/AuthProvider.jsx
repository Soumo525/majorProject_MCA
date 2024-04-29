import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { ID } from 'appwrite';
import conf from '../Components/Conf/Conf';
import { account, storage,database } from '../appwrite/appwrite';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        checkUser();
    }, []);

    const userLog = async (userInfoDetails) => {
        try {
            let response = await account.createEmailPasswordSession(
                userInfoDetails.email,
                userInfoDetails.password
            );
            let accountDet = await account.get();
            setUser(accountDet);
            navigate("/");
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    const checkUser = async () => {
        try {
            let check = await account.get();
            setUser(check);
        } catch (error) {
            //console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const userLogOut = async () => {
        try {
            await account.deleteSession('current');
            setUser(null);
            navigate("/");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    const createUser = async(userData) => {
        console.log("name",userData.name)
        console.log("email",userData.email);
        console.log("pass",userData.password);
        try {
            let res = await account.create(
                ID.unique(),
                userData.email,
                userData.password,
                userData.name,
                
                
            );
            console.log(res);
            let response = await account.createEmailPasswordSession(
                userData.email,
                userData.password
            );
            console.log(response);
            let accountDet = await account.get();
            setUser(accountDet);
            navigate("/");
            
        } catch (error) {
            console.error(error);
        }
    }


const addToDatabase = async ({ name,email,stream,roll,sub,pic_Id,unique_Id }) => {
    try {
        const userId = user.$id;
        const data = {
            name,email,stream,roll,sub,pic_Id,unique_Id,userId
        };
        const newData = await database.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            ID.unique(),
            data
        );

    } catch (error) {
        console.error(error);
    }
};

      const uploadImage = async(file) => {
        setLoading(true);
        try {
            const response = await storage.createFile(
                conf.appwriteBucketId_1,
                ID.unique(),
                file
            );
            setLoading(false)
            return response.$id;
        } catch (error) {
            console.error(error);
        }
      }
      const uploadSig = async (file2) => {
        setLoading(true);
        try {
            const response = await storage.createFile(
                conf.appwriteBucketId_2,
                ID.unique(),
                file2
            );
            setLoading(false)
            return response.$id;
        } catch (error) {
            console.error(error);
        }
    }

    const [datanew, setDatanew] = useState([])

    const getData = async() => {
        try {
            const ship = await database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId
            )
            setDatanew(ship.documents)
            //console.log(setShipping(ship.documents));
        } catch (error) {
            console.error(error);
        }
    }
    const [userImage, setUserImage] = useState([])
    const getuserImage = async() =>{
        try {
            const img = await storage.listFiles(
                conf.appwriteBucketId_2
            )
            setUserImage(img.files)
            console.log(img.files);
           } catch (error) {
            console.error(error);
           }
            

    }

    const  deleteOneItem = async (itemID)=>{
        try {
           await database.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
             itemID
           )
        } catch (error) {
            console.error(error);
        }
    }

    const data = {
        user,
        userLog,
        userLogOut,
        uploadImage,
        createUser,
        addToDatabase,
        uploadSig,
        datanew,
        getData,
        userImage,
        getuserImage,
        deleteOneItem
    };

    return (
        <AuthContext.Provider value={data}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthContext;
