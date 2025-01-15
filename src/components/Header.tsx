import React from 'react';
import { ArrowRight, Shield, CheckCircle, BookOpen, ClipboardCheck, FileCheck } from 'lucide-react';

interface HeaderProps {
  onStartAssessment?: () => void;
  showStartButton?: boolean;
}

export default function Header({ onStartAssessment, showStartButton = true }: HeaderProps) {
  return (
    <div className="text-center mb-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
        Identify Personal & Sensitive Data
        <span className="block text-primary">With Confidence</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Make informed decisions about data handling with our intelligent assessment tool. 
        Used by privacy professionals worldwide to quickly evaluate data sensitivity.
      </p>

      {showStartButton && (
        <button
          onClick={onStartAssessment}
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 text-lg font-medium mb-12"
        >
          Start Free Assessment
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      )}

      {showStartButton && (
        <div className="max-w-3xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-100 via-primary/30 to-purple-100" />
            
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-4 relative z-10 transition-transform hover:scale-105">
                  <BookOpen className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Step 1</h3>
                <p className="text-gray-600">Review Privacy Concepts</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-4 relative z-10 transition-transform hover:scale-105">
                  <ClipboardCheck className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Step 2</h3>
                <p className="text-gray-600">Complete Assessment</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-4 relative z-10 transition-transform hover:scale-105">
                  <FileCheck className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Step 3</h3>
                <p className="text-gray-600">Get Your Evaluation</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Visual break with gradient line and heading */}
      <div className="relative py-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gradient-to-r from-purple-50 via-white to-purple-50 px-8 text-lg font-semibold text-gray-900">
            Why Choose Our Tool
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
        <div className="flex flex-col items-center p-4">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Formally Aligned</h3>
          <p className="text-sm text-gray-600">Built following global privacy best practices</p>
        </div>

        <div className="flex flex-col items-center p-4">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
            <CheckCircle className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Quick & Accurate</h3>
          <p className="text-sm text-gray-600">Get results in under 2 minutes with detailed explanations</p>
        </div>

        <div className="flex flex-col items-center p-4">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Expert-Backed</h3>
          <p className="text-sm text-gray-600">Developed with privacy professionals and legal experts</p>
        </div>
      </div>
    </div>
  );
}