"use client"

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Calculator, FileText, CheckCircle, ArrowRight, Phone, Mail, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EMICalculator } from "@/components/emi-calculator"
import Link from "next/link"

export default function PersonalLoansPage() {
  const [loanAmount, setLoanAmount] = useState(500000)
  const [tenure, setTenure] = useState(36)
  const [emi, setEmi] = useState(0)

  const calculateEMI = () => {
    const rate = 10.5 / 100 / 12
    const emiValue = (loanAmount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1)
    setEmi(Math.round(emiValue))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/products" className="text-blue-600 hover:text-teal-600 flex items-center gap-2">
              ← Back to Products
            </Link>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Personal Loans</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <User className="w-6 h-6 text-blue-600" />
                  Personal Loans - For All Your Needs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Get quick personal loans with minimal documentation. Whether it's for a wedding, 
                  medical emergency, or travel, we've got you covered with competitive rates and 
                  flexible repayment options.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">10.5%</div>
                    <div className="text-sm text-gray-600">Interest Rate (p.a.)</div>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-teal-600">₹25L</div>
                    <div className="text-sm text-gray-600">Max Amount</div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-cyan-600">24hrs</div>
                    <div className="text-sm text-gray-600">Quick Approval</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Key Features:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium">Instant approval in 24 hours</span>
                    </li>
                    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-teal-50 transition-colors">
                      <FileText className="w-5 h-5 text-teal-600" />
                      <span className="text-sm font-medium">Minimal documentation required</span>
                    </li>
                    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-cyan-50 transition-colors">
                      <Shield className="w-5 h-5 text-cyan-600" />
                      <span className="text-sm font-medium">No collateral needed</span>
                    </li>
                    <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <Award className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium">Flexible EMI options</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm">Age: 21-60 years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm">Minimum income: ₹25,000/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm">Employment: Salaried or Self-employed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm">Credit score: 650+</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* EMI Calculator & Application */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <EMICalculator 
              productType="Personal Loan"
              defaultAmount={500000}
              defaultTenure={36}
              defaultRate={10.5}
              maxAmount={2500000}
              maxTenure={84}
            />

            <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200">
              <CardContent className="pt-6">
                <h3 className="font-bold text-blue-900 mb-4 text-center text-xl">Ready to Apply?</h3>
                <div className="space-y-3">
                  <Link href="/eligibility">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3">
                      <FileText className="w-4 h-4 mr-2" />
                      Apply Online Now
                    </Button>
                  </Link>
                  <div className="text-center text-sm text-gray-600">Or contact us directly</div>
                  <div className="flex gap-2">
                    <Link href="tel:+911234567890" className="flex-1">
                      <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </Link>
                    <Link href="mailto:support@finonest.com" className="flex-1">
                      <Button variant="outline" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Identity Proof (Aadhaar/PAN/Passport)</li>
                  <li>• Address Proof (Utility Bill/Rent Agreement)</li>
                  <li>• Income Proof (Salary Slips/ITR)</li>
                  <li>• Bank Statements (3 months)</li>
                  <li>• Employment Proof</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}