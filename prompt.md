```
Initialize your project: Create a new folder and run npm init -y to create your package.json file (7:06).

Install dependencies: Install the necessary development dependencies:

npm install -D typescript ts-node @types/node (7:20)
npx tsc --init to generate a tsconfig.json (7:37)
Install and Initialize Prisma:

Install Prisma CLI: npm install prisma (7:59)
Initialize Prisma: npx prisma init (8:07). This creates a prisma folder with a schema.prisma file and a .env file (8:53).
Define your Schema: Edit the schema.prisma file (9:38). Ensure your generator uses provider = "prisma-client-js" and define your datasource (like SQLite) (9:51).

Define your models (e.g., User and Article) with fields, primary keys, and relations (10:36-13:49).
Run Migrations: To create your database tables based on your schema, run (14:13):
npx prisma migrate dev --name init

Generate Client: Always run npx prisma generate to create the type-safe Prisma client that you will use in your application (15:45).

Use Prisma Client: Create an index.ts file, import the PrismaClient, and start building your queries (15:45). You can use functions like create, findMany, update, and delete to interact with your data (18:00-33:00).
```








import { PrismaClient } from '@prisma/client'



const prisma = new PrismaClient()



async function main() {

    // Prisma Queries

    // Create user

    const user = await prisma.user.create({

        data: {

            name: "test1",

            email: "test1@gmail.com",

        }

    })

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

Error: Module '"@prisma/client"' has no exported member 'PrismaClient'.





// This is your Prisma schema file,

// learn more about it in the docs: https://pris.ly/d/prisma-schema



// Get a free hosted Postgres database in seconds: `npx create-db`



generator client {

  provider = "prisma-client"

  output   = "../generated/prisma"

}



datasource db {

  provider = "sqlite"

}



model User {

  id Int @id @default(autoincrement())

  email String @unique

  name String?

  articles Article[]

}



model Article {

  id Int @id @default(autoincrement())

  title String

  body String?

  author User @relation(fields: [authorID], references: [id])

  authorID Int

}



{

  // Visit https://aka.ms/tsconfig to read more about this file

  "compilerOptions": {

    // File Layout

    // "rootDir": "./src",

    // "outDir": "./dist",

    // Environment Settings

    // See also https://aka.ms/tsconfig/module

    "module": "nodenext",

    "target": "esnext",

    // "types": [],

    // For nodejs:

    // "lib": ["esnext"],

    "types": [

      "node"

    ],

    // and npm install -D @types/node

    // Other Outputs

    "sourceMap": true,

    "declaration": true,

    "declarationMap": true,

    // Stricter Typechecking Options

    "noUncheckedIndexedAccess": true,

    "exactOptionalPropertyTypes": true,

    // Style Options

    // "noImplicitReturns": true,

    // "noImplicitOverride": true,

    // "noUnusedLocals": true,

    // "noUnusedParameters": true,

    // "noFallthroughCasesInSwitch": true,

    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options

    "strict": true,

    "jsx": "react-jsx",

    "verbatimModuleSyntax": true,

    "isolatedModules": true,

    "noUncheckedSideEffectImports": true,

    "moduleDetection": "force",

    "skipLibCheck": true,

  }

}



give me full guidance to work on prisma. I have now deleted "prisma" & "generated" folders so that I can understand the working flow. Solve the error & tell me the authentic  vs code  extensions for prisma suggestions and smooth workflow, currently using sqlite.