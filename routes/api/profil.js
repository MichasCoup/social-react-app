const express =require('express');
const router = express.Router();

// @route   GET api/profil/test
// @desc    Tests profil route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "Profil works"}));

module.exports = router;
