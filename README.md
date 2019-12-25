
# anywhr-backend
Find your travel destinations, from famous movie spot

### Notes to the reviewer [Handling memory leaks in postgres]
> For one line postgres statements that dont require a transaction block we can simply use pg pools 
> that way we dont have to deal with closing the database queries
> More on it here
> https://node-postgres.com/api/pool



Furthur improvements
~ Add a global exception handler to catch uncaught exceptions
~ Add a slack integration  for that exception
~ Move service code to another file
~ To add a pagination service to all get requests that return a list
~ Create a different service file, currently it doesnot make any sense to add it since all queries are single line


~ `Add a movie table`
~ ` Add another route called user, where the user can save his favourite movie shot locations, and can revisit it. Kind of like a cart to store shopping items. ` 
~ ` Allow him to rate these locations from 1 to 5 `