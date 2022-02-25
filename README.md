# cse216project

## Installation

1.  install nodejs
2.  install angular cli

        npm install -g @angular/cli

## Databse

    1. create a user named 'c##nahian' with password 'nahian'
    2. execute the dumpfile named 'C##NAHIAN.sql'

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

        npm serve --o

    it will serve the app and automatically open it in a browser

### Caution

    make sure the localhost port 3001 and 4200 is free before serving frontend and backend
