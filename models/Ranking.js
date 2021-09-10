const mongoose = require('mongoose')
  
  const rankingSchema = new mongoose.Schema({
        emoji:{type:String},
        userId:{type:mongoose.Types.ObjectId, ref: 'user'},
  })
  
  const Ranking = mongoose.model('ranking', rankingSchema)
  
module.exports = Ranking