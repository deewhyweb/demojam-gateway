const express = require('express')
  , router = express.Router()
  , cors = require('cors');
const quotes = [
    'All that glitters is not gold',
    'Fair is foul, and foul is fair: Hover through the fog and filthy air.',
    'Brevity is the soul of wit.',
    'To thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man.',
    'The course of true love never did run smooth.',
    'If music be the food of love, play on.',
    'What\'s in a name? That which we call a rose by any other name would smell as sweet.',
    'Love all, trust a few, do wrong to none.',
    'The lady doth protest too much, methinks.',
]

  router.use(cors());
router.get('/games/start', (req, res) => {
    console.log('Creating game');
    res.json({success: true})
});
router.get('/games/rounds/start', (req, res) => {
    console.log('Starting round');
    const max = 8;
    const min = 0;
    const selector = Math.floor(Math.random() * (+max - +min)) + +min; 
    res.json({success: true, quote: quotes[selector]})
});

module.exports = router;