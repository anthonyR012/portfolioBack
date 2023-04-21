const config = require('../config');


//router
const {message_api} = require('./routes/routers');
config.app.use('/api',message_api);

//starting the server
config.app.listen(config.port, ()=>{
    console.log('listening on port '+config.port);
});