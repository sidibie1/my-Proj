const Details = require('../tables/detailsTable');

const addNewDetailsFunc = (req,res) => {

    Details.create({
  
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    date: Date.now(),
    designation: req.body.designation    
  
    },function(err,results){
         res.send(results);
     });
};

const getDetailsFunc = (req,res)=>{

   Details.find({name: req.params.name},(err,results) => {
     
        if(err) throw err;
        res.send(results);
    }); // get todo ends here
};

const getAllDataFunc = (req,res) =>{
    
    Details.find({}, function(err, result) {

        console.log('This is error : ' + err);
        res.send(result);
    });
};

const deleteDataFunc = (req,res) =>{
    
    Details.findByIdAndRemove(req.body.id, function(err) {
        console.log('This is error : ' + err);
        res.send('Success');
    });
};


  module.exports = {
      addNewDetailsFunc,
      getDetailsFunc,
      getAllDataFunc,
      deleteDataFunc
    };