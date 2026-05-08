const express = require('express')
const router = express.Router();
const MenuItem = require('./../models/MenuItem')
// Menuitem ke lliye post or get
router.post('/', async (req, res) => {
  try {
    const data = req.body
    const newMenuItem = new MenuItem(data);
    const response = await newMenuItem.save();
    console.log('Data Saved Menuitems'); 
    res.status(200).json(response);
  }
  catch(err) {
    console.log(err);
    res.status(500).json({err: 'Internal server error MI'});
  }
})
router.get('/' , async (req, res)=>{
  try{
    const data = await MenuItem.find();
    console.log('Data Fetched MI');
    res.status(200).json(data);
    
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})
module.exports = router;