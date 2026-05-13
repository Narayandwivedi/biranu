const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const upload = require('../utils/upload');

router.get('/', jobController.getAllJobs);
router.post('/apply', upload.single('resume'), jobController.applyJob);

module.exports = router;
