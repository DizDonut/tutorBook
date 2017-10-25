# Teammates, Please Read

1. Install nodemon globally; this will help us run back end server code while react app is running in development; will allow us to make changes to the back end, and restart react app automatically. 
    a. https://www.npmjs.com/package/nodemon
        i. npm install -g nodemon
    b. no need to run 'nodemon' command from bash, we'll actually throw it in the package.json. 

2. install front and backend dependencies. While in the root directory, run the following commands:

```
yarn install
cd client
yarn install
cd ..
``

3. After both installations complete, run the following command in your terminal:

```
yarn start
```

4. Express server should intercept any AJAX requests from the client (our react app).