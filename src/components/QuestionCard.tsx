import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { Question } from '../types/privacy';
import ProgressBar from './ProgressBar';

interface QuestionCardProps {
  question: Question;
  currentNumber: number;
  totalQuestions: number;
  onAnswer: (answer: boolean) => void;
}

export default function QuestionCard({ 
  question, 
  currentNumber, 
  totalQuestions, 
  onAnswer 
}: QuestionCardProps) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent opacity-50" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Privacy Assessment</h2>
          <span className="px-3 py-1 bg-purple-50 text-primary rounded-full text-sm font-medium">
            {currentNumber} of {totalQuestions}
          </span>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">{question.text}</h3>
          <p className="text-gray-600 mb-4">{question.description}</p>
          
          {question.examples && (
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 mb-4">
              <p className="font-medium mb-2 text-gray-800">Examples:</p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {question.examples.map((example, index) => (
                  <li key={index} className="flex items-center text-gray-600 before:content-['•'] before:mr-2 before:text-primary">
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex gap-4 mb-4">
          <button
            onClick={() => onAnswer(true)}
            className="flex-1 px-6 py-2 bg-gray-50 text-gray-700 rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-lg hover:shadow-primary/25"
          >
            Yes
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
          <button
            onClick={() => onAnswer(false)}
            className="flex-1 px-6 py-2 bg-white text-gray-700 rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center border-2 border-gray-100 hover:border-primary"
          >
            No
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        <ProgressBar current={currentNumber} total={totalQuestions} />
      </div>
    </div>
  );
}