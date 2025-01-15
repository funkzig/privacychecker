import React from 'react';
import { HelpCircle, Shield, AlertTriangle, Info } from 'lucide-react';

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900">Privacy Concepts Explained</h2>
        <p className="text-gray-600 mt-2">Understanding personal information and data privacy</p>
      </div>

      <div className="space-y-8">
        {/* Personal Information Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What is Personal Information?</h3>
              <p className="text-gray-600 mb-4">
                Personal information is any data that can be used to identify an individual, either directly or indirectly. 
                This includes obvious identifiers like names and email addresses, but also extends to information that could 
                be combined with other data to identify someone.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Basic Details</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Name</li>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Mailing address</li>
                    <li>ZIP code</li>
                    <li>Email address</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">ID Numbers</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Account numbers</li>
                    <li>Passport number</li>
                    <li>Driver's license number</li>
                    <li>Insurance policy number</li>
                    <li>Buyer's club number</li>
                    <li>Social Security numbers</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Computer and Technical</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>IP address</li>
                    <li>MAC address</li>
                    <li>Username</li>
                    <li>Password</li>
                    <li>Browsing history</li>
                    <li>Cookie IDs</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Other Examples</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Location-based information</li>
                    <li>Voice commands</li>
                    <li>Info from connected devices</li>
                    <li>Health information</li>
                    <li>Education</li>
                    <li>Employment records</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sensitive Personal Information Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What is Sensitive Personal Information?</h3>
              <p className="text-gray-600 mb-4">
                Sensitive personal information is a subset of Personal Information that requires special handling and protection.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                <li>Political opinions</li>
                <li>Membership of political associations</li>
                <li>Religious beliefs or affiliations</li>
                <li>Philosophical beliefs</li>
                <li>Membership of a professional or trade association</li>
                <li>Sexual orientation or practices</li>
                <li>Criminal record</li>
                <li>Health information</li>
                <li>Genetic information</li>
                <li>Biometric information or templates</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                <p className="text-gray-800 font-medium mb-2">Potential Risks of Data Breach:</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Discrimination</li>
                  <li>Harassment</li>
                  <li>Identity theft</li>
                  <li>Other types of permanent harm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* What Is Not Personal Information Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What Is Not Personal Information?</h3>
              <p className="text-gray-600 mb-6">
                Publicly available data includes anything reasonably believed to have been made available to the public 
                from government records or widely distributed media, often including social media.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-gray-800 mb-4">Key Points to Remember:</h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Context Matters:</span>
                    <span>A phone number alone is not personal information, but when combined with a person's name, it becomes personal information.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Email Addresses:</span>
                    <span>Generic email addresses (e.g., info@companyx.com) are not personal information, but individual employee emails are.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Linkability:</span>
                    <span>Data must be tied or linkable to a person to be considered personal information.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}