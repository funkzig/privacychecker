import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { privacyQuestions } from '../data/privacyQuestions';
import type { Assessment } from '../types/privacy';
import QuestionCard from './QuestionCard';
import AssessmentResult from './AssessmentResult';
import NavigationButtons from './NavigationButtons';

interface PrivacyCheckerRef {
  setIsStarted: (value: boolean) => void;
}

interface PrivacyCheckerProps {
  onReset?: () => void;
}

const PrivacyChecker = forwardRef<PrivacyCheckerRef, PrivacyCheckerProps>(({ onReset }, ref) => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [assessment, setAssessment] = useState<Assessment | null>(null);

  useImperativeHandle(ref, () => ({
    setIsStarted: (value) => {
      setIsStarted(value);
      if (!value) {
        setCurrentQuestion(0);
        setAnswers({});
        setAssessment(null);
      }
    }
  }));

  const handleAnswer = (answer: boolean) => {
    const questionId = privacyQuestions[currentQuestion].id;
    setAnswers(prev => ({ ...prev, [questionId]: answer }));

    if (currentQuestion < privacyQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      assessData();
    }
  };

  const handlePrevious = () => {
    setCurrentQuestion(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    if (currentQuestion < privacyQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const assessData = () => {
    const reasons: string[] = [];
    let isPersonalData = false;
    let isSensitive = false;

    if (answers.identifiable) {
      reasons.push('Contains direct identifiers');
      isPersonalData = true;
    }

    if (answers.contactInfo) {
      reasons.push('Contains contact information');
      isPersonalData = true;
    }

    if (answers.demographic) {
      reasons.push('Contains demographic information');
      isPersonalData = true;
    }

    if (answers.sensitive) {
      reasons.push('Contains sensitive personal information');
      isPersonalData = true;
      isSensitive = true;
    }

    if (answers.behavioral) {
      reasons.push('Contains behavioral or preference information');
      isPersonalData = true;
    }

    setAssessment({ isPersonalData, isSensitive, reasons });
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setAssessment(null);
    setIsStarted(false);
    onReset?.();
  };

  if (!isStarted) {
    return null;
  }

  const currentQuestionId = privacyQuestions[currentQuestion].id;

  if (assessment) {
    return (
      <AssessmentResult assessment={assessment} onReset={resetAssessment} />
    );
  }

  return (
    <>
      <QuestionCard
        question={privacyQuestions[currentQuestion]}
        currentNumber={currentQuestion + 1}
        totalQuestions={privacyQuestions.length}
        onAnswer={handleAnswer}
      />
      <NavigationButtons
        currentQuestion={currentQuestion}
        totalQuestions={privacyQuestions.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        showNext={currentQuestionId in answers && currentQuestion < privacyQuestions.length - 1}
      />
    </>
  );
});

PrivacyChecker.displayName = 'PrivacyChecker';

export default PrivacyChecker;