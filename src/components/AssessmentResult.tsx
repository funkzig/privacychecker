import React from 'react';
import { Shield, AlertTriangle, CheckCircle, RotateCcw } from 'lucide-react';
import type { Assessment } from '../types/privacy';

interface AssessmentResultProps {
  assessment: Assessment;
  onReset: () => void;
}

export default function AssessmentResult({ assessment, onReset }: AssessmentResultProps) {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-100">
      <div className="text-center mb-8">
        {assessment.isSensitive ? (
          <AlertTriangle className="w-16 h-16 mx-auto text-red-500 mb-4" />
        ) : assessment.isPersonalData ? (
          <Shield className="w-16 h-16 mx-auto text-primary mb-4" />
        ) : (
          <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
        )}
        
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Assessment Results</h2>
        
        <div className="mb-6">
          <p className="text-lg mb-2 text-gray-700">
            This data is classified as:
            <span className={`font-bold ${
              assessment.isSensitive ? 'text-red-500' :
              assessment.isPersonalData ? 'text-primary' : 'text-green-500'
            }`}>
              {assessment.isSensitive ? ' Sensitive Personal Information' :
               assessment.isPersonalData ? ' Personal Information' : ' Non-Personal Information'}
            </span>
          </p>
        </div>

        {assessment.reasons.length > 0 && (
          <div className="text-left mb-6">
            <h3 className="font-semibold mb-2 text-gray-700">Reasons:</h3>
            <ul className="list-disc pl-5">
              {assessment.reasons.map((reason, index) => (
                <li key={index} className="text-gray-600">{reason}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={onReset}
        className="flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Start New Assessment
      </button>
    </div>
  );
}