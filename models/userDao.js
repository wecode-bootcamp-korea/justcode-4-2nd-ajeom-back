const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();


 const getUserImpormetion = async (kakao_id)=>{
     return await prisma.$queryRaw`
         SELECT kakao_id FROM users WHERE kakao_id = ${kakao_id};
     `
 }
 const createUser = async (kakao_id,nickname,profile_img_url)=>{
     return await prisma.$queryRaw`
         INSERT INTO users (kakao_id,nickname,profile_img_url) VALUES (${kakao_id}, ${nickname}, ${profile_img_url})
   `
 }

 module.exports = { getUserImpormetion,createUser}