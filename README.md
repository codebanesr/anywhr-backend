
# anywhr-backend
Find your travel destinations, from famous movie spot

# Documentation Coverage for frontend 
http://3.1.20.178:3000/documentation

#### Entry point
` app.js is the entry point of the application, however when running in production run bin/www`

#### Features
>Implemented real time search functionality using rxjs's debounce, distinct until changed operator
>on angular form's input element, which exposes an event that is fired everytime value of input box 
>changes
>![Alt text](./git_images/Screenshot&#32;2019-12-29&#32;at&#32;2.37.47&#32;AM.png?raw=true "Real Time Search")

> Movie Location and definition from wiki pages
> On clicking any one of the locations, the app will look for that title on wikipedia and populate
> results on the grey area
>![Alt text](./git_images/Screenshot&#32;2019-12-29&#32;at&#32;2.38.18&#32;AM.png "Movie Location Scroller")

>Pagination implementation in angular
>![Alt text](./git_images/Screenshot&#32;2019-12-29&#32;at&#32;2.38.31&#32;AM.png?raw=true "Pagination")



Example
` http://3.1.20.178:3000/movie?title=180 `

### Running locally
`git clone https://github.com/shanurrahman/anywhr-backend.git`
`cd anywhr-backend`
`npm install`
`browse localhost:3000`

### To improve upon the frontend
`cd ..`
`git clone https://github.com/shanurrahman/anywhr-frontend.git`
`npm run compodoc`
`ng build --prod`

Now run your backend server
`cd ../anywhr-backend && npm start`
goto : localhost:3000

Note:
* For this process to run both anywhr-frontend and backend should be in the same folder

### Using Docker
From the root directory
`docker build --tag="anywhr:anywhr" ./`
docker image ls => find the id of your image and do a `docker run -d ${imageid}`

>![Alt text](./git_images/Screenshot&#32;2019-12-29&#32;at&#32;2.38.18&#32;AM.png "Dockerdoc")

>![Alt text](./git_images/docker/Screenshot&#32;2019-12-29&#32;at&#32;3.05.49&#32;PM.png "Dockerdoc")

>![Alt text](./git_images/docker/Screenshot&#32;2019-12-29&#32;at&#32;3.04.58&#32;PM.png "Dockerdoc")

>![Alt text](./git_images/docker/Screenshot&#32;2019-12-29&#32;at&#32;3.05.49&#32;PM.png "Dockerdoc")




### Production build instructions
update the .env file, your db credentials, put NODE_ENV=development to enable full logging

##### npm install

##### Install pm2 globally
```
$ pm2 stop     <app_name|namespace|id|'all'|json_conf>
$ pm2 restart  <app_name|namespace|id|'all'|json_conf>
$ pm2 delete   <app_name|namespace|id|'all'|json_conf>
```
`$ sudo pm2 start bin/www`

##### Install pm2 logrotate, prevents memory leak issues on the server
`pm2 install pm2-logrotate`


### Notes to the reviewer [Handling memory leaks in postgres]
> For one line postgres statements that dont require a transaction block we can simply use pg pools 
> that way we dont have to deal with closing the database queries
> More on it here
> https://node-postgres.com/api/pool



#### Database tables
```
create table movie
(
	title varchar(256) not null
		constraint movie_pkey
			primary key,
	release_year varchar(128),
	fun_facts varchar(339),
	production_company varchar(256) default 'N/A'::character varying,
	distributor varchar(256),
	director varchar(79),
	writer varchar(49),
	actor_1 varchar,
	actor_2 varchar,
	actor_3 varchar
);
```


```
create table movie_location
(
	title varchar(45) not null,
	locations varchar(110)
);

```


