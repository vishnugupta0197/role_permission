To Run the application:

1. Please checkout code using following github repository- 

2. Run the command npm install --save

3.. Now go to util/db.js and add the database configuration
  see for the mysql database name and put your user name, password.

My database name is nodeapp, you can keep as per your wish.
	
	const Sequelize = require('sequelize').Sequelize;

	const sequelize = new Sequelize('nodeapp','root','root',{
  		host:'localhost',
 		dialect:'mysql'
	})

	//return a promised connection pool
	module.exports = sequelize;


4. Run the command node app.js to start the server at localhost:3000

5. Go to db-scripts folder and import all the csv as per table in mySql database.

I have provided all the scripts, so that you don’t have to put data manually.




API Test-

I tested all 3 endpoints on the Postman app.

Please consume all 3 endpoints on postman, refer  routes/user.route.js

router.get('/home/:userId',user.home)
router.get('/community/:userId',user.community)
router.get('/shop/:userId',user.shop)


 



