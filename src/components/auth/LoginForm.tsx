
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface LoginFormProps {
  onRegisterClick: () => void;
}

const LoginForm = ({ onRegisterClick }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // For demo purposes - show success toast for specific credentials
      if (email === 'demo@example.com' && password === 'password') {
        toast({
          title: "Success!",
          description: "Welcome back to RentEase",
        });
      } else {
        setError('Invalid email or password. Try demo@example.com / password');
      }
    }, 1000);
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold text-center">Log in to RentEase</DialogTitle>
        <DialogDescription className="text-center">
          Enter your credentials to access your account
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
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email"
            type="email" 
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="text-xs text-rental-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <Input 
            id="password"
            type="password" 
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-rental-600 hover:bg-rental-700"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Log in'}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={onRegisterClick}
          className="text-rental-600 hover:underline font-medium"
        >
          Sign up
        </button>
      </div>
    </>
  );
};

export default LoginForm;
