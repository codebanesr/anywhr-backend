
# anywhr-backend
Find your travel destinations, from famous movie spot

### Notes to the reviewer [Handling memory leaks in postgres]
> For one line postgres statements that dont require a transaction block we can simply use pg pools 
> that way we dont have to deal with closing the database queries
> More on it here
> https://node-postgres.com/api/pool

