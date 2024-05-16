import {Client, ID, Databases, Storage, Query} from "appwrite"
import config from "../config/config"

export class Service {
    client = new Client()
    databases
    bucket
    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId); // Correct method name
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return this.databases.createDocument(
                config.appwriteDatabaseId, // Use database ID here
                config.appwriteCollectionId,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log("There is Error while Create POST ::", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
            
        } catch (error) {
            console.log("There is an Error while Updating the POST ::", error );
        }
    }

    async deletePost(slug){
        try {
             this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("There is Problem While Deleting the Post ::", error);
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,

            )
        } catch (error) {
            console.log("There is error while getting POST ::", error);
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )  
        } catch (error) {
            console.log("There is error while getting all POST :: ", error);
        }
    }

    async uploadFile(file) {
        try {
            return this.bucket.createFile( // Return the result of createFile
                config.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("There is Error while uploading the File ::", error);
            return false;
        }
    }


    async deleteFile(fileId){
        try {
            this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("There is an error while deleting the File ::", error);
        }
    }

    async getFilePreview(fileId) {
        try {
             return this.bucket.getFilePreview(
                config.appwriteBucketId,
                fileId,
             )
        } catch (error) {
            console.log("There is an error while previewing the File ::", error);
        }
    }


};

const service = new Service();

export default service