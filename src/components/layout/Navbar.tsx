
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { User, Home, Menu, X } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogTrigger, 
} from "@/components/ui/dialog";
import LoginForm from '../auth/LoginForm';
import RegisterForm from '../auth/RegisterForm';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleAuthOpen = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-rental-600" />
          <span className="text-xl font-bold text-rental-600">RentEase</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-rental-600">Home</Link>
          <Link to="/properties" className="text-gray-700 hover:text-rental-600">Rentals</Link>
          <Link to="/about" className="text-gray-700 hover:text-rental-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-rental-600">Contact</Link>
        </nav>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            onClick={() => handleAuthOpen('login')}
            className="text-gray-700 hover:text-rental-600 hover:bg-rental-50"
          >
            Log in
          </Button>
          <Button 
            onClick={() => handleAuthOpen('register')}
            className="bg-rental-600 hover:bg-rental-700 text-white"
          >
            Sign up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-rental-600"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-rental-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className="text-gray-700 hover:text-rental-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Rentals
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-rental-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-rental-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Button 
                variant="outline" 
                onClick={() => {
                  handleAuthOpen('login');
                  setIsMenuOpen(false);
                }}
                className="w-full justify-center"
              >
                Log in
              </Button>
              <Button 
                className="w-full justify-center bg-rental-600 hover:bg-rental-700"
                onClick={() => {
                  handleAuthOpen('register');
                  setIsMenuOpen(false);
                }}
              >
                Sign up
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Authentication Dialog */}
      <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
        <DialogContent className="sm:max-w-md">
          {authMode === 'login' ? (
            <LoginForm onRegisterClick={() => setAuthMode('register')} />
          ) : (
            <RegisterForm onLoginClick={() => setAuthMode('login')} />
          )}
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Navbar;
