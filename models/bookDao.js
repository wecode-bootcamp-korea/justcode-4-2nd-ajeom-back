const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const postBook = async (title,user_id,bookcover_url,description,postIdList) => {
    await prisma.$queryRaw`
  INSERT INTO books (title,user_id,bookcover_url,description) VALUES
(${title},${user_id},${bookcover_url},${description});`;
const [book_id] = await prisma.$queryRaw`
SELECT *
FROM books
ORDER BY id DESC
LIMIT 1`;
console.log(book_id.id)
for(i=0;i<postIdList.length;i++){
    await prisma.$queryRaw`
    INSERT INTO book_posts (post_id,book_id,sequence) VALUES
  (${postIdList[i]},${book_id.id},${i+1});`;
}
  return ;
};


module.exports = {
    postBook
};
