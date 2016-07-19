module.exports = () => {
  function query(req, res) {
    
    var typology=req.query.typology;
    
    var result = (typology ==='first') ? {} : [];
    
    req.checkQuery('typology').notEmpty().isInt();
    var errors = req.validationErrors();
    
    if (errors){
      console.info(errors);
      return res.status(400).send ('Bad Request');
    }
    //console.log(req.timeRequest);
    res.status(200).send(result);
  }
  
  function save(req, res){
    req.body.id=11;
    res.status(201).send(req.body);
  }
  
  
  return {
    query: query,
    save: save,
  };
}