import config from "../config/config";
import { Client, ID, Account } from "appwrite";
export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)
        this.account = new Account(this.client);
    }
    async createAccount ({email, password, name}) {
         try {
            const userAccount = await this.account.create(ID.unique(),email, password, name)
         if (userAccount) {
            // return  Another Method
            return this.login({email, password})
         }
         else {
            return userAccount;
         }
            
         } catch (error) {
            console.log("There is ERROR WHILE REGISTRING THE USER:: ", error);
         }
    }
    async login ({email, password}){
          try {
           const loggedUser = await this.account.createEmailPasswordSession(email, password);
           return loggedUser;
          } catch (error) {
            console.log("There is ERROR WHILE LOGIN :: ", error);
          }
    }

    async getCurrentUser () {
     try {
         const currentUser =  await this.account.get()
         return currentUser;
     } catch (error) {
        console.log("There is ERROR WHILE FETCHING CURRENT USER :: ", error);
     }
    }
    async logOut() {
       try {
         await this.account.deleteSessions()
       } catch (error) {
        console.log("There is ERROR WHILE LOGGINIG OUT :: ", error);
       }
    }
}

const authService = new AuthService()

export default authService