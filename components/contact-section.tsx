"use client"

import { useState } from "react"
import { Mail, Phone, User, MessageSquare, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ContactFormDialogProps {
  children: React.ReactNode
}

export function ContactFormDialog({ children }: ContactFormDialogProps) {
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
              Message Sent!
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-600">
              We&apos;ll get back to you as soon as possible.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="inline-flex items-center gap-2 bg-[#188296]/10 text-[#188296] px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                Get in Touch
              </div>
              <DialogTitle className="text-3xl font-bold text-gray-900">
                Contact <span className="text-[#188296]">Vortexx</span>
              </DialogTitle>
              <DialogDescription className="text-base text-gray-600">
                Have questions about our irrigation tires? Our team is here to help you find the perfect solution for your needs.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6">
            <div className="max-w-2xl mx-auto">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-[#188296]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-[#188296]"
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="John Smith"
                          className="h-12 pl-12"
                        />
                      </div>
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
                          placeholder="john@example.com"
                          className="h-12 pl-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="h-12 pl-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                        <Textarea
                          id="message"
                          name="message"
                          required
                          placeholder="Tell us how we can help you..."
                          className="min-h-[150px] pl-12"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#E9D342] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#d4c03a] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="h-5 w-5" />
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      * Required fields
                    </p>
                  </form>
              )}
            </div>
          </div>
        </>
      )}
      </DialogContent>
    </Dialog>
  )
}
