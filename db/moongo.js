const mongoose = require('mongoose')

try {
  mongoose.connect(process.env.MONGO_DB_URI)
    .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((error) => console.error({ error }))
} catch (error) {
  console.log({ error })
} 
