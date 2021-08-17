import mongoose from 'mongoose'
import chalk from 'chalk'

mongoose
.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(connection => {
    console.log(chalk.green.inverse.bold('Connected to Mongo!'))
})
.catch(e => {
    console.error(chalk.red.inverse.bold('Error connecting to Mongo: ', e))
})