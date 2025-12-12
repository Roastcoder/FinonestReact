"use client"

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Car, Calculator, FileText, CheckCircle, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const carBrands = [
  "Maruti Suzuki", "Hyundai", "Tata", "Mahindra", "Honda", "Toyota", 
  "Ford", "Volkswagen", "Skoda", "Renault", "Nissan", "BMW", "Mercedes-Benz", "Audi"
]

export default function CarValuationPage() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    variant: "",
    fuelType: "",
    kmDriven: "",
    city: ""
  })
  const [valuation, setValuation] = useState<number | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleCalculate = async () => {
    setIsCalculating(true)
    // Simulate API call
    setTimeout(() => {
      const baseValue = 500000
      const yearFactor = (2024 - parseInt(formData.year)) * 0.1
      const kmFactor = parseInt(formData.kmDriven) / 100000 * 0.2
      const calculatedValue = baseValue * (1 - yearFactor - kmFactor)
      setValuation(Math.max(calculatedValue, 100000))
      setIsCalculating(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/products" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
              ← Back to Products
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Car Valuation Tool</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Valuation Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="w-6 h-6 text-blue-600" />
                  Get Your Car's Current Market Value
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Brand</label>
                    <Select value={formData.brand} onValueChange={(value) => setFormData({...formData, brand: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Brand" />
                      </SelectTrigger>
                      <SelectContent>
                        {carBrands.map(brand => (
                          <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Model</label>
                    <Input 
                      placeholder="e.g., Swift, i20, Nexon"
                      value={formData.model}
                      onChange={(e) => setFormData({...formData, model: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Year</label>
                    <Select value={formData.year} onValueChange={(value) => setFormData({...formData, year: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({length: 20}, (_, i) => 2024 - i).map(year => (
                          <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Fuel Type</label>
                    <Select value={formData.fuelType} onValueChange={(value) => setFormData({...formData, fuelType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Fuel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="petrol">Petrol</SelectItem>
                        <SelectItem value="diesel">Diesel</SelectItem>
                        <SelectItem value="cng">CNG</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">KM Driven</label>
                    <Input 
                      placeholder="e.g., 50000"
                      value={formData.kmDriven}
                      onChange={(e) => setFormData({...formData, kmDriven: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">City</label>
                    <Input 
                      placeholder="e.g., Mumbai, Delhi"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleCalculate}
                  disabled={isCalculating || !formData.brand || !formData.model || !formData.year}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {isCalculating ? (
                    <>
                      <Calculator className="w-4 h-4 mr-2 animate-spin" />
                      Calculating...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Get Valuation
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {valuation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Estimated Value</h3>
                      <div className="text-4xl font-bold text-green-600 mb-4">
                        ₹{valuation.toLocaleString('en-IN')}
                      </div>
                      <p className="text-gray-600 mb-6">
                        This is an estimated market value based on current market trends
                      </p>
                      <Link href="/contact">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Get Loan Against This Car
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>

          {/* Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Why Use Our Car Valuation Tool?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Accurate market-based valuations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Instant results in seconds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Free and unlimited valuations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Use for loan applications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Factors Affecting Car Value</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• Age and manufacturing year</li>
                  <li>• Kilometers driven</li>
                  <li>• Brand and model popularity</li>
                  <li>• Fuel type and efficiency</li>
                  <li>• Overall condition</li>
                  <li>• Market demand in your city</li>
                  <li>• Service history</li>
                  <li>• Accident history</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <h3 className="font-bold text-blue-900 mb-2">Need a Loan Against Your Car?</h3>
                <p className="text-blue-800 text-sm mb-4">
                  Get up to 80% of your car's value as a loan with minimal documentation
                </p>
                <Link href="/products/vehicle-loans">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    Explore Vehicle Loans
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}