module.exports= function(){
    function query (req,res){
        res.send([{name: 'Raffo', email:'raffo.a@live.it'}]);
    }
    return {
        query:query,
    };
}