
# Logbook

Developed an online social space where people can share their journals & articles with the world and read others articles as well.

## Features

- People can publish their articles on the common feed.

![Screenshot (110)](https://user-images.githubusercontent.com/63312394/205640109-956e9fdc-9b20-4078-a189-71ffdf4b7772.png)


- Compose section with a title and content

![Screenshot (111)](https://user-images.githubusercontent.com/63312394/205640129-6fec2e23-8931-48e5-a699-ae16a6fb0568.png)


- Users are authenticated with login and password

![Screenshot (109)](https://user-images.githubusercontent.com/63312394/205640165-430f616f-6588-45d5-ac49-cd9b7979d344.png)

- View a specific article in full page
- About us page to know more about developer

![Screenshot (112)](https://user-images.githubusercontent.com/63312394/205640151-f5d954c4-bd23-4ece-9a94-e0d26f8e9580.png)



## Tech Stack

**Client:** HTML, CSS, JAVASCRIPT and EJS

**Server:** Node, Express, MongoDB and Passport


## Installation

### 1. Clone repo

```
$ git clone https://github.com/AKavenger/Logbook.git
$ cd LogBook 
```

### 2. Create .env File

- create a new .env and add below given environment variables.

### 3. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - In .env file update MONGODB_URL=mongodb://localhost/DocHelp
- OR Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - In .env file update MONGODB_URL=mongodb+srv://your-db-connection

### 4. Run Server

```
$ npm install
$ node app.js
```
Run `localhost:3000` on any web browser to load the website.
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URL`

`SECRET_KEY=shareyourthoughtswithworld`


## Demo

- 👉 Cyclic : [https://courageous-pink-ant.cyclic.app/](https://courageous-pink-ant.cyclic.app)


## Support

- Contact me: [Avinash](mailto:avinash.btech.iet@gmail.com)
