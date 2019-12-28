
# anywhr-backend
Find your travel destinations, from famous movie spot

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



### I have added some dummy data as well to check if pagination was properly working or not which shows wrong locations

` Please have a look at this url this is the actual data that I got from the url provided in the assignment`
` http://3.1.20.178:3000/movie?title=180 `
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


