import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationButtonsProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  showNext: boolean;
}

export default function NavigationButtons({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  showNext
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between mt-6">
      {currentQuestion > 0 ? (
        <button
          onClick={onPrevious}
          className="flex items-center px-4 py-2 text-primary hover:bg-purple-50 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous Question
        </button>
      ) : <div />}
      
      {showNext && (
        <button
          onClick={onNext}
          className="flex items-center px-4 py-2 text-primary hover:bg-purple-50 rounded-lg transition-colors ml-auto"
        >
          Next Question
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      )}
    </div>
  );
}