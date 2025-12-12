import express, { Response } from 'express';
import Application from '../models/Application';
import { authenticate, AuthRequest } from '../middleware/auth';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// Submit application
router.post('/applications', authenticate, [
  body('productId').notEmpty().withMessage('Product ID is required'),
  body('personalInfo.fullName').notEmpty().withMessage('Full name is required'),
  body('personalInfo.email').isEmail().withMessage('Valid email is required'),
  body('personalInfo.phone').notEmpty().withMessage('Phone is required'),
  body('financialInfo.monthlyIncome').isNumeric().withMessage('Monthly income must be a number'),
  body('financialInfo.loanAmount').isNumeric().withMessage('Loan amount must be a number'),
], async (req: AuthRequest, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const application = new Application({
      userId: req.user!._id,
      ...req.body
    });

    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's applications
router.get('/applications', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const applications = await Application.find({ userId: req.user!._id })
      .populate('reviewedBy', 'name')
      .sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get specific application
router.get('/applications/:id', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const application = await Application.findOne({
      _id: req.params.id,
      userId: req.user!._id
    }).populate('reviewedBy', 'name');
    
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;