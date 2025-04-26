
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface RegisterFormProps {
  onLoginClick: () => void;
}

const RegisterForm = ({ onLoginClick }: RegisterFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('renter');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validate password length
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created!",
        description: `Welcome to RentEase. You've registered as a ${userType}.`,
      });
    }, 1000);
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold text-center">Create your account</DialogTitle>
        <DialogDescription className="text-center">
          Join RentEase to find your perfect rental or list your property
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="space-y-4 pt-4">
        {error && (
          <div className="bg-red-50 p-3 rounded-md flex items-start text-sm">
            <AlertCircle className="h-4 w-4 text-red-400 mt-0.5 mr-2" />
            <span className="text-red-800">{error}</span>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input 
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="register-email">Email</Label>
          <Input 
            id="register-email"
            type="email" 
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="register-password">Password</Label>
          <Input 
            id="register-password"
            type="password" 
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="text-xs text-gray-500">Must be at least 8 characters</p>
        </div>

        <div className="space-y-3">
          <Label>I am a:</Label>
          <RadioGroup
            value={userType}
            onValueChange={setUserType}
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="renter" value="renter" />
              <Label htmlFor="renter" className="cursor-pointer">Renter looking for a property</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="owner" value="owner" />
              <Label htmlFor="owner" className="cursor-pointer">Property owner or manager</Label>
            </div>
          </RadioGroup>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-rental-600 hover:bg-rental-700"
          disabled={isLoading}
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          By creating an account, you agree to our{' '}
          <a href="/terms" className="text-rental-600 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-rental-600 hover:underline">
            Privacy Policy
          </a>
        </p>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onLoginClick}
          className="text-rental-600 hover:underline font-medium"
        >
          Log in
        </button>
      </div>
    </>
  );
};

export default RegisterForm;
