const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId_1: String(import.meta.env.VITE_APPWRITE_BUCKET_ID_1),
    appwriteBucketId_2: String(import.meta.env.VITE_APPWRITE_BUCKET_ID_2),
   
}

export default conf