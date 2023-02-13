const express = require('express')
const router = express.Router()
const { getAllScores , postScore } = require("../controllers/scoreController")

router.get('/', getAllScores)
router.post('/', postScore)


module.exports = router