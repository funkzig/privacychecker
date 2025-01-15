import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Header';
import PrivacyChecker from './components/PrivacyChecker';
import FAQ from './components/FAQ';

function Home({ isStarted, onStart, onReset, privacyCheckerRef }: {
  isStarted: boolean;
  onStart: () => void;
  onReset: () => void;
  privacyCheckerRef: React.RefObject<{ setIsStarted: (value: boolean) => void }>;
}) {
  return (
    <>
      {!isStarted && <Header onStartAssessment={onStart} showStartButton={!isStarted} />}
      <PrivacyChecker ref={privacyCheckerRef} onReset={onReset} />
    </>
  );
}

function AppContent() {
  const [isStarted, setIsStarted] = useState(false);
  const privacyCheckerRef = React.useRef<{ setIsStarted: (value: boolean) => void }>();
  
  const handleStartAssessment = () => {
    setIsStarted(true);
    if (privacyCheckerRef.current) {
      privacyCheckerRef.current.setIsStarted(true);
    }
  };

  const handleReset = () => {
    setIsStarted(false);
    if (privacyCheckerRef.current) {
      privacyCheckerRef.current.setIsStarted(false);
    }
  };

  return (
    <Layout onLogoClick={handleReset}>
      <Routes>
        <Route path="/" element={
          <Home 
            isStarted={isStarted}
            onStart={handleStartAssessment}
            onReset={handleReset}
            privacyCheckerRef={privacyCheckerRef}
          />
        } />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;