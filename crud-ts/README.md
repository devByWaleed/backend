# TypeScript Project Setup

## Frontend Setup

### Command to create a React in Typescript project
```bash
npm create vite@latest client -- --template react-ts
```

```bash

```









## Backend Setup

### 1) Initialize `package.json`
```bash
npm init -y
```

### 2) Command to setup TypeScript for backend
```bash
npm install typescript ts-node @types/express @types/node @types/mongoose @types/cors --save-dev
```

### 3) Initialize `tsconfig.json`
```bash
npx tsc --init 
```

### 4) `tsconfig.json` configuration

Inside `"compilerOptions"`, these should be enabled

```json
"rootDir": "./src",
"outDir": "./dist",
"types": [
  "node"
],
"strict": true,
"module": "nodenext",
"target": "esnext",
```

And right after it, add these
```json
"include": [
  "src/**/*"
],
"exclude": [
  "node_modules",
  "dist"
]
```

### 5) Install necessary packages (for JS version)
```bash
npm install express mongoose cors nodemon
```

### 6) Setup Folder Structure
1. Create `src` & `dist` folder in `server` folder.
2. Create `config`, `controllers`, `models` & `routes`. This may be more
3. Your final structure will for backend `server` folder be like this
```text
├── dist/                 # Compiled files
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── ...
│   └── server.js
├── node_modules/
├── src/                   # Source files
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── ...
│   └── server.ts
├── tsconfig.json
├── .tsbuildinfo
├── package.json
├── package-lock.json
```

### 6) Setup `scripts` in `package.json`

```json
"scripts": {
  "build": "tsc",
  "watch": "tsc --watch",
  "dev": "nodemon dist/server.js",
  "start": "node dist/server.js"
},
```
> Nodemon must be installed for continuous running.

Now we need 3 terminals, work as below

```bash
# For Frontend app
npm run dev

# For Backend server
npm run dev

# For TS -> JS conversion
npm run watch
```
> Whenever we change `TS` files, it's respective `JS` version will be created in `dist` folder.