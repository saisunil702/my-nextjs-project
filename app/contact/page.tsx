'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  Calculator,
  Award,
  Clock,
  Shield,
  CheckCircle,
  Send,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! Raj Kumar will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Raj Kumar</span>
                <p className="text-xs text-gray-600">ITR Tax Filing Services</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">Services</Link>
              <Link href="/contact" className="text-blue-700 font-medium">Contact</Link>
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-emerald-50 text-emerald-700 border-emerald-200">
            <Award className="w-4 h-4 mr-2" />
            Qualified Professional (Auditor)
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Connect with Raj Kumar
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get professional tax filing assistance from a qualified auditor. Reach out early to avoid the last-minute rush!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900 text-lg">Phone</h3>
                        <p className="text-blue-800 text-xl font-medium">+91 96428 55090</p>
                        <p className="text-blue-700 text-sm">Available for consultations</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-emerald-900 text-lg">Email Inquiries</h3>
                        <p className="text-emerald-800">Use the contact form</p>
                        <p className="text-emerald-700 text-sm">Quick response guaranteed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Professional Credentials */}
              <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-amber-700" />
                    <div>
                      <CardTitle className="text-amber-900">Professional Credentials</CardTitle>
                      <CardDescription className="text-amber-800">Qualified Professional (Auditor)</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3" />
                      <span className="text-amber-900">Certified Tax Professional</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3" />
                      <span className="text-amber-900">Years of Filing Experience</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3" />
                      <span className="text-amber-900">100% Compliance Record</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send Your Inquiry</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and Raj Kumar will get back to you promptly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service" className="text-sm font-medium text-gray-700">Service Required *</Label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option value="salaried">Salaried ITR Filing</option>
                        <option value="business">Business ITR Filing</option>
                        <option value="capital-gains">Capital Gains Filing</option>
                        <option value="freelancer">Freelancer ITR Filing</option>
                        <option value="consultation">Tax Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Please provide details about your tax filing requirements..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 py-3">
                      <Send className="w-5 h-5 mr-2" />
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Early */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Contact Early?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Avoid the last-minute rush and ensure accurate filing
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">More Time for Review</h3>
              <p className="text-blue-100 text-sm">
                Thorough review of documents and calculations
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Better Planning</h3>
              <p className="text-blue-100 text-sm">
                Strategic tax planning and optimization opportunities
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Stress-Free Filing</h3>
              <p className="text-blue-100 text-sm">
                No deadline pressure, complete peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">Raj Kumar</span>
                  <p className="text-sm text-gray-400">ITR Tax Filing Services</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Professional tax filing services with accuracy, compliance, and complete confidentiality.
              </p>
              <Badge variant="secondary" className="bg-blue-900 text-blue-200">
                Qualified Professional (Auditor)
              </Badge>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+91 96428 55090</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>Available for inquiries</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Raj Kumar ITR Tax Filing Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}