# cse216project

## Installation

1.  install nodejs
2.  install angular cli

        npm install -g @angular/cli

## Database

    1. create a user named 'c##nahian' with password 'nahian'
    2. execute the sql file named 'C##NAHIAN.sql' given in the root directory

## Backend

1.  Go to 'oracle2design' folder
2.  create a '.env' file in root directory of backend(oracle2design) and copy these contents to the created file

        DB_USER=c##nahian
        DB_PASSWORD=nahian
        SECRET=lalalandkeysecret
        PRODUCT_MAIN_IMAGE_PATH=./images/productMainImages
        PRODUCT_TUTORIAL_VIDEO_PATH=./videos/productTutorialVideos
        OFFER_MAIN_IMAGE_PATH=./images/offerMainImages
        MANUFACTURER_IMAGE_PATH= ./images/manufacturerImages

3.  Run

        npm install

4.  Run

        npm start

## Frontend

1.  go to frontend folder
2.  Run

        npm install

3.  Run

        ng serve --o

    it will serve the app and automatically open it in a browser
    
## Website
### Logging in as a Client
Simply go to sign up, create a new user and log in.
### Logging in as an Admin
        There is a default admin already exists.
        username: "admin"
        password: "Admin@123"

### To create new admin, delivery man or assembler

        log in as admin
        username: "admin"
        password: "Admin@123"

        After login, you can find a tab to add new employee (admin,deliveryman or assembler)
     
### Caution

    make sure the localhost port 3001 and 4200 is free before serving frontend and backend
