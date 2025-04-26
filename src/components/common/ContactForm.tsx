
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

interface ContactFormProps {
  propertyId: number;
  propertyTitle: string;
}

const ContactForm = ({ propertyId, propertyTitle }: ContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const defaultMessage = `I am interested in this property "${propertyTitle}". Please contact me with more information.`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call with timeout
    setTimeout(() => {
      toast({
        title: "Inquiry sent!",
        description: "The property owner will contact you soon.",
      });
      setIsLoading(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage(defaultMessage);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Enter your message"
          value={message || defaultMessage}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          required
          className="resize-none"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-rental-600 hover:bg-rental-700"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our <a href="/privacy" className="text-rental-600 hover:underline">Privacy Policy</a>.
      </p>
    </form>
  );
};

export default ContactForm;
