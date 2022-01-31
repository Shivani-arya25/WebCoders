const express = require('express');
const asyncHandler = require('express-async-handler'); 
const User = require('../models/User');

const usersRoute = express.Router();

//Register
usersRoute.post(
    '/register',
asyncHandler(async (req, res) => {
const {name, email, password} = req.body;

const userExists = await User.findOne({ email: email});
if (userExists) {
    throw new Error('User Exist');
}
const userCreated = await User.create({ email, name, password});

res.send(userCreated);
})
);

//Login
usersRoute.post('/login',
 asyncHandler(async (req, res) => {
   const { email, password } = req.body;

   const user = await User.findOne({ email });

   if (user) {
     //set status code
     res.status(200);
     
     res.json({
         _id: user._id,
         name: user.name,
         password: user.password,
         email: user.password,
     });
   } else {
       res.status(401);
       throw new Error('Invalid credentials');
   }
 })
);
//update user
usersRoute.put('/update', (req, res) => {
    res.send('Update route');
});

//Delete user
usersRoute.delete('/:id', (req, res) => {
    res.send('Delete route');
});

//fetch users
usersRoute.get('/', (req, res) => {
    res.send('Fetch users');
});
module.exports = usersRoute;
