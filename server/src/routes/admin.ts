import express from 'express';
import User from '../models/User';
import Product from '../models/Product';
import Application from '../models/Application';
import { authenticate, authorize, AuthRequest } from '../middleware/auth';

const router = express.Router();

// Admin dashboard stats
router.get('/stats', authenticate, authorize('admin', 'manager'), async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalProducts = await Product.countDocuments({ isActive: true });
    const totalApplications = await Application.countDocuments();
    const pendingApplications = await Application.countDocuments({ status: 'pending' });
    const approvedApplications = await Application.countDocuments({ status: 'approved' });

    res.json({
      totalUsers,
      totalProducts,
      totalApplications,
      pendingApplications,
      approvedApplications
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all users
router.get('/users', authenticate, authorize('admin'), async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user role
router.put('/users/:id/role', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all applications
router.get('/applications', authenticate, authorize('admin', 'manager', 'employee'), async (req, res) => {
  try {
    const applications = await Application.find()
      .populate('userId', 'name email')
      .populate('reviewedBy', 'name')
      .sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update application status
router.put('/applications/:id/status', authenticate, authorize('admin', 'manager', 'employee'), async (req: AuthRequest, res) => {
  try {
    const { status, reviewNotes } = req.body;
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { 
        status, 
        reviewNotes,
        reviewedBy: req.user!._id
      },
      { new: true }
    ).populate('userId', 'name email');
    
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;