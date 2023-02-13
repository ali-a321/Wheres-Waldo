const asyncHandler = require('express-async-handler')
const Score = require('../models/scoreModel')

// Get ALL scores, GET /waldo/scores
const getAllScores = asyncHandler(async (req,res) => {
    const scores = await Score.find().sort({timeCompleted: 1}).limit(5)
    res.status(200).json(scores)
})


// publish score, POST /waldo/scores
const postScore = asyncHandler(async (req,res) => {
    if (!req.body.username){
        res.status(400)
        throw new Error("Please ensure you have entered a username")
    }
    const score = await Score.create({
        username: req.body.username,
        timeCompleted: req.body.timeCompleted,
        timePosted: Date.now()
    })

    res.status(200).json(score)
})


module.exports = {getAllScores, postScore, }