import React from 'react';
import { Shield } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  onLogoClick?: () => void;
  onNavClick?: () => void;
}

export default function Layout({ children, onLogoClick }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onLogoClick?.(); // Reset assessment if needed
    navigate('/'); // Always navigate to home
  };
  
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50" />
      
      <div className="absolute top-20 right-10 w-20 h-20 bg-purple-200 rounded-full blur-xl opacity-50 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-300 rounded-full blur-xl opacity-30 animate-pulse" />
      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-purple-100 rounded-full blur-lg opacity-40" />
      
      <div className="relative py-4 px-4 sm:px-6 lg:px-8">
        <nav className="relative max-w-7xl mx-auto flex items-center justify-between py-2 mb-4">
          <a href="/" onClick={handleLogoClick} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">PrivacyCheck</span>
          </a>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/faq" 
              className={`text-sm font-medium ${
                location.pathname === '/faq' 
                  ? 'text-primary' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Privacy Concepts
            </Link>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
        <footer className="text-center mt-8 pb-4">
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            Disclaimer: This tool provides general guidance only and should not be considered legal advice. The assessment results are based on the information provided and may not cover all applicable privacy regulations. Users should consult with legal professionals for specific privacy compliance requirements.
          </p>
        </footer>
      </div>
    </div>
  );
}