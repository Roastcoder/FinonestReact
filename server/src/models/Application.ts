import mongoose, { Document, Schema } from 'mongoose';

export interface IApplication extends Document {
  userId: mongoose.Types.ObjectId;
  productId: string;
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    dateOfBirth: Date;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  financialInfo: {
    monthlyIncome: number;
    employmentType: string;
    companyName?: string;
    workExperience?: number;
    loanAmount: number;
  };
  documents: {
    name: string;
    url: string;
    type: string;
  }[];
  status: 'pending' | 'under_review' | 'approved' | 'rejected';
  reviewedBy?: mongoose.Types.ObjectId;
  reviewNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const applicationSchema = new Schema<IApplication>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: String, required: true },
  personalInfo: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true }
  },
  financialInfo: {
    monthlyIncome: { type: Number, required: true },
    employmentType: { type: String, required: true },
    companyName: { type: String },
    workExperience: { type: Number },
    loanAmount: { type: Number, required: true }
  },
  documents: [{
    name: { type: String, required: true },
    url: { type: String, required: true },
    type: { type: String, required: true }
  }],
  status: { type: String, enum: ['pending', 'under_review', 'approved', 'rejected'], default: 'pending' },
  reviewedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  reviewNotes: { type: String }
}, { timestamps: true });

export default mongoose.model<IApplication>('Application', applicationSchema);