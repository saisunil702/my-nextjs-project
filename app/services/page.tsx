'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Calculator, 
  FileText,
  CheckCircle,
  Clock,
  Shield,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: Users,
      title: 'Salaried',
      description: 'Complete ITR filing for salaried professionals',
      features: [
        'Form 16 processing',
        'Salary income calculation',
        'Standard deduction optimization',
        'HRA and LTA exemptions',
        'Investment deductions (80C, 80D)',
        'Tax refund processing'
      ],
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      icon: TrendingUp,
      title: 'Business',
      description: 'Comprehensive business tax filing and compliance',
      features: [
        'Profit & Loss statement preparation',
        'Business income calculation',
        'Expense deduction optimization',
        'GST compliance support',
        'Advance tax planning',
        'Audit support if required'
      ],
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    {
      icon: Calculator,
      title: 'Capital Gains',
      description: 'Expert handling of capital gains tax calculations',
      features: [
        'Short-term capital gains',
        'Long-term capital gains',
        'Indexation benefit calculation',
        'Securities transaction tax',
        'Mutual fund gains',
        'Property sale transactions'
      ],
      color: 'text-purple-600 bg-purple-50 border-purple-200'
    },
    {
      icon: FileText,
      title: 'Freelancers',
      description: 'Specialized tax filing for independent contractors',
      features: [
        'Professional income reporting',
        'Business expense deductions',
        'TDS credit optimization',
        'Quarterly advance tax',
        'Multiple income source handling',
        'Digital receipt management'
      ],
      color: 'text-orange-600 bg-orange-50 border-orange-200'
    }
  ];

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
              <Link href="/services" className="text-blue-700 font-medium">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">Contact</Link>
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
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-blue-50 text-blue-700 border-blue-200">
            <Shield className="w-4 h-4 mr-2" />
            Professional Tax Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive ITR Filing Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional tax filing services tailored for every taxpayer category with guaranteed accuracy and compliance.
          </p>
        </div>
      </section>

      {/* Core Promises */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/70">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                <CardTitle className="text-2xl text-blue-900">Timely Submission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-blue-800">
                  Never miss a deadline with our efficient filing process. We ensure all returns are submitted well before due dates.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100">
              <CardHeader className="text-center">
                <FileText className="w-12 h-12 text-emerald-700 mx-auto mb-4" />
                <CardTitle className="text-2xl text-emerald-900">Proper Documentation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-emerald-800">
                  Complete and accurate documentation for all filings with proper record keeping and compliance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 ${service.color}`}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                      <CardDescription className="text-base text-gray-600">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button asChild className="w-full bg-gray-900 hover:bg-gray-800">
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-blue-100">
              Professional expertise with personalized attention
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Qualified Professional</h3>
              <p className="text-blue-100">
                Certified auditor with years of experience in tax filing and compliance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Accuracy</h3>
              <p className="text-blue-100">
                Meticulous attention to detail ensuring error-free tax returns every time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Turnaround</h3>
              <p className="text-blue-100">
                Fast processing with timely submission to avoid any last-minute rush.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to File Your ITR?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't wait until the last minute. Connect with Raj Kumar today for professional tax filing services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4">
              <Link href="/contact">
                Connect with Raj Kumar
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-emerald-200 text-emerald-700 hover:bg-emerald-100 px-8 py-4">
              <Phone className="mr-2 w-5 h-5" />
              +91 96428 55090
            </Button>
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