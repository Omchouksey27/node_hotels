const express = require('express')
const router = express.Router();
const Person = require('./../models/Person')

         /*Person ke liye POST AND GET METHOD*/
router.post('/', async (req,res)=>{

  try {
    const data = req.body
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log('Data Saved');
    res.status(200).json(response);
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json({error: 'Internal server Error'});
  }
})



// Get  method to get the person
router.get('/',  async (req,res)=>{
  try{
    const data = await Person.find();
    console.log('Data Fetched ');
    res.status(200).json(data);

  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server Error'});
    
  }
})




router.get('/:worktype', async (req,res)=>{
  try{
    const worktype = req.params.worktype;
      if(worktype =='chef' || worktype =='manager' || worktype == 'waiter')
      {
        const response = await Person.find({work: worktype});
        console.log('Response Fetched');
        res.status(200).json(response);
      }
      else{
        res.status(400).json({error:"Invalid Work Type"});
      }
  }
  catch(err)
  {
    console.log(err); 
    res.status(500).json({error: 'Internal server error'});
  }
})

router.put('/:id', async (req,res)=>{
  try{
    const personId = req.params.id; // Extrct id rom URL PArameter
    const updatedPersonData = req.body; // Update data for the person
    
    const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
          new: true,  // return Updated Document
          runValidators: true, // Run Mongoose Validation
    })
    if(!response){
      return res.status(404).json({error: 'Person not Found'});
    }
    console.log("Data UpdateD");
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'InternaL Server ErroR'});
  }
})
router.delete('/:id', async (req,res)=>{
  try{
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    if(!response){
      return res.status(404).json({error:'person Not Found'});
    }
    console.log('data delete');
    res.status(200).json({message: 'person deletd successfully'});
  }catch(err){
    console.log(err);
    res.status(500).json({error:'InternL sERVER Error'})
  }
})


module.exports = router;