### Installing Node
Install node with [node version manager (NVM)](https://github.com/creationix/nvm#installation). NVM was created by the community and not the Nodejs foundation. However, it is the recommended approach. After installing nvm, use nvm to install the lates version of Nodejs.
```bash
nvm install node # node is an alias for the latest version
nvm alias default node
```
If this fails, or you want to install nodejs from nodejs source, [then go here](https://nodejs.org/en/)

Important: After installing node, please run `npm install i` or `npm install` to install the dependencies located in the `package.json` file.

## Install dependencies
Once you have installed node, you can now add any dependencies you needed for your project. You can go to the [npm registry](https://www.npmjs.com/) and search for the dependency that you needed.

```bash
npm install express --save
```

## Example Project
Create a simple RESTful API that will be able to create, update, edit, and delete a user.

# Requirements
- Create a HTTP server
- Implement GET, POST, PUT & DELETE methods
- Provide response payloads on each requests

# Dependencies
- expressjs - web server handler
- level - for storing data

# Running the app
```bash
node index.js
```