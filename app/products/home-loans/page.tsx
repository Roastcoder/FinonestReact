"use client"



"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Home, Calculator, FileText, CheckCircle, ArrowRight, Phone, Mail, Shield, Clock, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EMICalculator } from "@/components/emi-calculator"
import Link from "next/link"

export default function HomeLoansPage() {
  const [loanAmount, setLoanAmount] = useState(2500000)
  const [tenure, setTenure] = useState(240)
  const [emi, setEmi] = useState(0)

  const calculateEMI = () => {
    const rate = 8.5 / 100 / 12
    const emiValue = (loanAmount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1)
    setEmi(Math.round(emiValue))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-teal-50 to-cyan-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/products" className="text-blue-600 hover:text-teal-600 flex items-center gap-2">
              ← Back to Products
            </Link>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Home Loans</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: -15 }} 
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Home className="w-6 h-6 text-blue-600" />
                  Home Loans - Make Your Dream Home Reality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Affordable home loans with the longest tenure and lowest interest rates. 
                  Turn your dream of owning a home into reality with our flexible financing options.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <motion.div 
                    className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center"
                    initial={{ opacity: 0, y: 20, rotateX: -15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.05, rotateZ: 2 }}
                  >
                    <div className="text-2xl font-bold text-blue-600">8.5%</div>
                    <div className="text-sm text-gray-600">Interest Rate (p.a.)</div>
                  </motion.div>
                  <motion.div 
                    className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg text-center"
                    initial={{ opacity: 0, y: 20, rotateX: -15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.05, rotateZ: -2 }}
                  >
                    <div className="text-2xl font-bold text-teal-600">₹5Cr</div>
                    <div className="text-sm text-gray-600">Max Amount</div>
                  </motion.div>
                  <motion.div 
                    className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 rounded-lg text-center"
                    initial={{ opacity: 0, y: 20, rotateX: -15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ scale: 1.05, rotateZ: 2 }}
                  >
                    <div className="text-2xl font-bold text-cyan-600">30yrs</div>
                    <div className="text-sm text-gray-600">Max Tenure</div>
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Key Features:</h3>
                  <ul className="space-y-2">
                    <motion.li 
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <motion.div
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </motion.div>
                      <span className="text-sm font-medium">Lowest interest rates in market</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-teal-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Shield className="w-5 h-5 text-teal-600" />
                      </motion.div>
                      <span className="text-sm font-medium">Up to 90% financing</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-cyan-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5 text-cyan-600" />
                      </motion.div>
                      <span className="text-sm font-medium">Balance transfer facility</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <motion.div
                        animate={{ rotateZ: [0, 15, -15, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <Award className="w-5 h-5 text-blue-600" />
                      </motion.div>
                      <span className="text-sm font-medium">Tax benefits under Section 80C</span>
                    </motion.li>
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
                    <span className="text-sm">Age: 23-65 years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-sm">Minimum income: ₹40,000/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    <span className="text-sm">Employment: 2+ years experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm">Property: Within city limits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 15 }} 
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-6"
          >
            <EMICalculator 
              productType="Home Loan"
              defaultAmount={2500000}
              defaultTenure={240}
              defaultRate={8.5}
              maxAmount={50000000}
              maxTenure={360}
            />

            <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200">
              <CardContent className="pt-6">
                <h3 className="font-bold text-blue-900 mb-4 text-center text-xl">Ready to Apply?</h3>
                <div className="space-y-3">
                  <Link href="/eligibility">
                    <motion.div
                      whileHover={{ scale: 1.02, rotateZ: 1 }}
                      whileTap={{ scale: 0.98, rotateZ: -1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3">
                        <motion.div
                          animate={{ rotateZ: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <FileText className="w-4 h-4 mr-2" />
                        </motion.div>
                        Apply Online Now
                      </Button>
                    </motion.div>
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}