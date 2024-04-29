
import {Account, Client, Databases, Storage } from 'appwrite'
import conf from '../Components/Conf/Conf';

const client = new Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);
export {account,database,storage};
export default client