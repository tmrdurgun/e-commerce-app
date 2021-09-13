Here is my assignment challenge so far:

To run this application follow these steps:

1. run this cmd inside .csv file directory to create DB: mongoimport --type csv -d shoparize -c products --headerline --drop products.csv
1. run "npm i" inside api dir.
2. run "npm i" inside shoparui dir.
3. run "npm run start" inside api dir.
4. run "npm run start" inside shoparui dir.

Node Api will listen on http://localhost:3002 and react app will start on a new tab as http://localhost:3000

To start with docker

1. Add products.csv inside resources folder (I couldn't upload it to my repo because of github file size limit)
2. Edit mongodb config in App.js file, change url as process.env.DB_URL_DOCKER
3. run these commands inside where docker-compose.yml file exist
    - docker-compose build --no-cache
    - docker-compose up -d (After build successful)

To test api route change mongo url config as process.env.DB_URL_TEST

What I would fix? (Now I'm off 4 hours time limit)

1. add .eslint file and beautify my code,
2. Fix front end tests
3. Better structre products component (seperate options & columns into another file)
4. Create Controller & service layers for api (As i usually do in my company project but i wanted to be quick here)
5. Auto generate documantation using with swagger library (I'm using it in my cur. company)
6. I'd use next.js for SEO on the react app.
