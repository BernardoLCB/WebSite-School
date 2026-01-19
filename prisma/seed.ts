import { db } from "../src/server/db";


async function main() {
    const pessoa = await db.user.create({
        data:{
            id: "asadae123131asdas@#!#asda",
            name: "Bernardo",
            email: "bernardoleinig@gmai.com",

    },
}) 
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });