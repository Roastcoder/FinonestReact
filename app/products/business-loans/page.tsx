"use client"

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Calculator, FileText, CheckCircle, ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function BusinessLoansPage() {
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [tenure, setTenure] = useState(60)
  const [emi, setEmi] = useState(0)

  const calculateEMI = () => {
    const rate = 12 / 100 / 12
    const emiValue = (loanAmount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1)
    setEmi(Math.round(emiValue))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/products" className="text-teal-600 hover:text-teal-800 flex items-center gap-2">
              ← Back to Products
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Business Loans</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-teal-600" />
                  Business Loans - Fuel Your Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Flexible business loans to help you expand operations, manage working capital, 
                  or invest in new equipment. Grow your business with our competitive rates.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600">12%</div>
                    <div className="text-sm text-gray-600">Interest Rate (p.a.)</div>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600">₹50L</div>
                    <div className="text-sm text-gray-600">Max Amount</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Key Features:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      <span className="text-sm">Quick disbursement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      <span className="text-sm">Collateral-free up to ₹25L</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      <span className="text-sm">Overdraft facility available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      <span className="text-sm">Working capital financing</span>
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
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-sm">Business age: 2+ years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-sm">Annual turnover: ₹10L+</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-sm">ITR for last 2 years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-sm">GST registration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-teal-600" />
                  EMI Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Loan Amount</label>
                  <Input 
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    placeholder="Enter loan amount"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tenure (months)</label>
                  <Input 
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    placeholder="Enter tenure in months"
                  />
                </div>
                <Button onClick={calculateEMI} className="w-full bg-teal-600 hover:bg-teal-700">
                  Calculate EMI
                </Button>
                {emi > 0 && (
                  <div className="bg-teal-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-teal-600">₹{emi.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Monthly EMI</div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-teal-50 border-teal-200">
              <CardContent className="pt-6">
                <h3 className="font-bold text-teal-900 mb-4 text-center">Ready to Apply?</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <FileText className="w-4 h-4 mr-2" />
                    Apply Online Now
                  </Button>
                  <div className="text-center text-sm text-gray-600">Or contact us directly</div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}