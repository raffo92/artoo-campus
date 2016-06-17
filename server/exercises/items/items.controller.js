module.exports = () => {
  function query(req, res) {
    console.log(req.timeRequest);
    res.status(200).send([{name: 'Ascia bipenna',description: 'ascia molto bella'}]);
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