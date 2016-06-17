module.exports=(function(req,res,next){
  console.log('Middleware runs');
  req.timeRequest=new Date();
  next();
})