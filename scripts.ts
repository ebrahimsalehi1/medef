import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here

  //const allUsers = await prisma.user.findMany()
  //await prisma..create({

  //})
  //prisma.config.
  //console.log(allUsers)

//   prisma.config.create({
//     key: 'key1',
//     value:'value1',
//     configType:'configType1'
//   });

}
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
