const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();


 const getUserImpormetion = async (kakao_id)=>{
     return await prisma.$queryRaw`
         SELECT id FROM users WHERE kakao_id = ${kakao_id};
     `
 }
 const createUser = async (kakao_id,nickname,profile_img_url)=>{
     return await prisma.$queryRaw`
         INSERT INTO users (kakao_id,nickname,profile_img_url) VALUES (${kakao_id}, ${nickname}, ${profile_img_url})
   `
 }
 const getUserProfile = async (userId) =>{
     return await prisma.$queryRaw`
        SELECT id, nickname, is_author, description, profile_img_url FROM users WHERE id = ${userId};
    `
 }

 module.exports = { getUserImpormetion,createUser,getUserProfile}