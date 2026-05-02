// Import Prisma Client
import { PrismaClient } from '@prisma/client'

// Create instance
const prisma = new PrismaClient()

async function main() {
    // Create User
    /* 
    const user = await prisma.user.create({
        data: {
            name: "test2",
            email: "test2@gmail.com",
        },
    })
    console.log("Success! User created:", user);
    */


    // Read User
    /*
    const allUsers = await prisma.user.findMany()
    // Display article with user
    // const allUsers = await prisma.user.findMany({
    //     include: {
    //         articles: true
    //     }
    // })
    console.log("All users:", allUsers);
    */


    // Update data
    /*
    const user = await prisma.user.update({
        where: {
            id: 3
        },
        data: {
            name: "John"
        }
    })
    console.log(user);
    */


    // Create an article
    /*
    const article = await prisma.article.create({
        data: {
            title: "Sample Article",
            body: "Sample Article using prisma",
            author: {
                // Connecting article to user with id 2
                connect: {
                    id: 2
                }
            }
        }
    })
    console.log(article);
    */


    // Read all articles
    /*
    const allArticles = await prisma.article.findMany()
    console.log("All Articles:", allArticles);
    */


    // Delete Article, User can't deleted if has articles
    /*
    const deletedArticle = await prisma.article.delete({
        where: {
            id: 1
        },
    })
    console.log(deletedArticle);
    */


    // Loop over specific article
    /*
    const allUsers = await prisma.user.findMany({
        include: {
            articles: true
        }
    })

    allUsers.forEach((user) => {
        console.log(`User: ${user.name}, Email: ${user.email}`);
        console.log("Articles:");
        user.articles.forEach((article) => {
            console.log(`Title: ${article.title}, Body: ${article.body}`);
        })
        console.log("\n");
    })
    */

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect()
        process.exit(1)
    })