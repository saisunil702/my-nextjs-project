'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Shield, 
  Eye, 
  Lock,
  Phone,
  Mail,
  FileText,
  Calculator,
  TrendingUp,
  Users,
  CheckCircle,
  Clock,
  Award
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-6 px-4 py-2 bg-blue-50 text-blue-700 border-blue-200">
                  <Award className="w-4 h-4 mr-2" />
                  AY 2025-26 Ready
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Stop Tax Worries!{' '}
                  <span className="text-blue-700">Raj Kumar</span>{' '}
                  makes ITR Filing Easy.
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Plan smart. File right. Stay compliant.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg px-8 py-4 bg-emerald-600 hover:bg-emerald-700">
                    <Link href="/contact">
                      Reach out early to avoid last-minute rush!
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-200 text-blue-700 hover:bg-blue-50">
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <FileText className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Professional Tax Filing</h3>
                      <p className="text-gray-600 text-sm">Qualified Auditor</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                      100% Accurate Filing
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                      Timely Submission
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                      Complete Documentation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/70">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Filing returns with accuracy, compliance & clarity.
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Experience professional tax filing services with complete peace of mind.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Shield className="w-8 h-8 text-blue-700" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Trusted</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-gray-600">
                  Years of experience in tax filing with a proven track record of satisfied clients and accurate submissions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                  <Eye className="w-8 h-8 text-emerald-700" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Transparent</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-gray-600">
                  Clear communication throughout the process with no hidden charges and complete visibility into your filing status.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <Lock className="w-8 h-8 text-amber-700" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Confidential</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-gray-600">
                  Your financial information is handled with utmost confidentiality and security, ensuring complete privacy.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Tax Filing Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional services tailored for every taxpayer category
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: 'Salaried',
                description: 'Complete ITR filing for salaried professionals with all deductions and exemptions.',
                color: 'text-blue-600 bg-blue-50'
              },
              {
                icon: TrendingUp,
                title: 'Business',
                description: 'Comprehensive business tax filing with profit & loss statements and compliance.',
                color: 'text-emerald-600 bg-emerald-50'
              },
              {
                icon: Calculator,
                title: 'Capital Gains',
                description: 'Expert handling of capital gains tax calculations and filing requirements.',
                color: 'text-purple-600 bg-purple-50'
              },
              {
                icon: FileText,
                title: 'Freelancers',
                description: 'Specialized tax filing for freelancers and independent contractors.',
                color: 'text-orange-600 bg-orange-50'
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Promises */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Core Promises
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center space-x-4">
              <Clock className="w-12 h-12 text-blue-200" />
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">Timely Submission</h3>
                <p className="text-blue-100">Never miss a deadline with our efficient filing process</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <FileText className="w-12 h-12 text-blue-200" />
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">Proper Documentation</h3>
                <p className="text-blue-100">Complete and accurate documentation for all filings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to File Your ITR?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't wait until the last minute. Start your tax filing process today with a qualified professional.
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