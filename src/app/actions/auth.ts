"use server"

import { PrismaClient } from "generated/prisma"


const prisma = new PrismaClient();


export async function getUser(email:string):Promise<boolean>{

    let isExist:boolean = true; 

    // this is verification if the login user have been already created,
    const checkUser = await prisma.user.findUnique({
        where:{email:email}
    })

    // console.log(checkUser)
    // return checkUser;

    if (!checkUser){
        isExist = false;
        return isExist
    }
    else{
        return isExist
    }
}


export async function setUser(email:string,password:string):Promise<void>{
    
    const user = await prisma.user.create({
        data:{
            email:email,
            password: password,
        }
    })

}