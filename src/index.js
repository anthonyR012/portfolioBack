const config = require('../config');
const app = config.api.app;
const port = config.api.port;
//router
const {user_api} = require('./routes/routers');
app.use('/api',user_api);


//starting the server
app.listen(port, ()=>{
    console.log('listening on port '+port);
});