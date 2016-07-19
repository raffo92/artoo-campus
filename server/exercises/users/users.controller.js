module.exports= function(){
    
    var User= require("./users.model");
    
    function query (req,res){
      User.find().exec()
      .then((users)=>{
          res.status(200).json(users);
      })
      .catch((err)=>{
          res.status(500).send('Cannot read users from db.');
      })
    }
    
    
    function create (req, res){
        var newUser = new User (req.body);
        newUser.save()
        .then(()=>{
            res.status(201).send('User successfully created');
        })
        .catch(err => res.status(500).send('Cannot insert User'));
    }
    
    
    function remove(req, res){
        User.findByIdAndRemove(req.params.id)
        .then(()=> res.status(200).send('Users successfully removed'));
        // .catch(er)
    }
    
    function update (req, res){
         User.findByIdAndUpdate(req.params.id , req.body)
        .then(()=> res.status(200).send('Users successfully update')); 
    }
    
    
    //API PUBLIC
    return {
        query:query,
        create:create,
        remove:remove,
    };
    
    
    
    
}