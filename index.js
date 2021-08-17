import {} from 'dotenv/config'

import app from './configs/app.js'
import './configs/passport.config.js'
import './configs/db.config.js'

app.listen(app.get('port'), () => {
    console.log('Conectado!')
})