const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');

router.post('/login', adminController.login);
router.post('/seed', adminController.seedAdmin); // Optional: to create initial admin

// Protected routes
router.post('/jobs', auth, adminController.createJob);
router.get('/jobs', auth, adminController.getAdminJobs);
router.get('/jobs/:id', auth, adminController.getJobById);
router.put('/jobs/:id', auth, adminController.updateJob);
router.delete('/jobs/:id', auth, adminController.deleteJob);
router.get('/applications/:jobId', auth, adminController.getJobApplications);

module.exports = router;
