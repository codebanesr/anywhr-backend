
# anywhr-backend
Find your travel destinations, from famous movie spot

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



Furthur improvements
```
Add a slack integration  for global exception
Move service code to another file
Add AJV schema for request and response validation or hapy joi
To add a pagination service to all get requests that return a list
In get movies route also add an order for movies, asc or desc
Create a different service file, currently it doesnot make any sense to add it since all queries are single line
Add logger for cloudwatch logging

 `Add a movie table`
 ` Add another route called user, where the user can save his favourite movie shot locations, and can revisit it. Kind of like a cart to store shopping items. ` 
 ` Allow him to rate these locations from 1 to 5 `
```