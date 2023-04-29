function checkAuth(req, res, next){
    const {password, username} = req.body;
    if(password === '1234' && username ==='raul'){
        next();
    }else {
      res.jason({iserror:true}); 
    }
}

module.exports = {checkAuth};