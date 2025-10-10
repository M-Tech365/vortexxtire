"use client"

import { useState } from "react"
import { Building2, Mail, Phone, MapPin, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface DealerFormDialogProps {
  children: React.ReactNode
}

export function DealerFormDialog({ children }: DealerFormDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Add your form submission logic here
    // For now, just simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      // Reset form state when dialog closes
      setTimeout(() => {
        setIsSubmitted(false)
      }, 300)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="py-12 text-center">
            <div className="w-20 h-20 bg-[#188296]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-[#188296]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <DialogTitle className="text-3xl font-bold text-gray-900 mb-4">
              Application Received!
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-600">
              Thank you for your interest in becoming a Vortexx dealer. We'll review your application and get back to you within 2-3 business days.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="inline-flex items-center gap-2 bg-[#E9D342]/10 text-[#E9D342] px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                Partner With Us
              </div>
              <DialogTitle className="text-3xl font-bold text-gray-900">
                Become a <span className="text-[#188296]">Vortexx Dealer</span>
              </DialogTitle>
              <DialogDescription className="text-base text-gray-600">
                Join our network of authorized dealers and bring industry-leading irrigation tire technology to your customers.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Business Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-[#188296]" />
                  Business Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="text-sm font-semibold text-gray-700">
                      Company Name *
                    </label>
                    <Input
                      id="companyName"
                      name="companyName"
                      required
                      placeholder="Your Company LLC"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="businessType" className="text-sm font-semibold text-gray-700">
                      Business Type *
                    </label>
                    <Select name="businessType" required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="distributor">Distributor</SelectItem>
                        <SelectItem value="retailer">Retailer</SelectItem>
                        <SelectItem value="service-center">Service Center</SelectItem>
                        <SelectItem value="agricultural-supplier">Agricultural Supplier</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="yearsInBusiness" className="text-sm font-semibold text-gray-700">
                      Years in Business *
                    </label>
                    <Input
                      id="yearsInBusiness"
                      name="yearsInBusiness"
                      type="number"
                      required
                      placeholder="5"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="taxId" className="text-sm font-semibold text-gray-700">
                      Tax ID / EIN
                    </label>
                    <Input
                      id="taxId"
                      name="taxId"
                      placeholder="XX-XXXXXXX"
                      className="h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 pt-6 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <User className="h-6 w-6 text-[#188296]" />
                  Primary Contact
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contactName" className="text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <Input
                      id="contactName"
                      name="contactName"
                      required
                      placeholder="John Smith"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-semibold text-gray-700">
                      Title *
                    </label>
                    <Input
                      id="title"
                      name="title"
                      required
                      placeholder="Sales Manager"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="h-12 pl-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(555) 123-4567"
                        className="h-12 pl-12"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-semibold text-gray-700">
                    Business Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <Textarea
                      id="address"
                      name="address"
                      required
                      placeholder="123 Main Street, City, State, ZIP"
                      className="min-h-[80px] pl-12"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E9D342] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#d4c03a] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  * Required fields
                </p>
              </div>
            </form>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
