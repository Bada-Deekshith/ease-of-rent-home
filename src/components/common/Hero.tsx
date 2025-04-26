
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/properties?location=${encodeURIComponent(searchQuery)}`);
    }
  };
  
  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight">
          Find Your Perfect Home with <span className="text-gradient bg-white">RentEase</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
          Discover thousands of rental properties in your area. Simplifying your housing search with advanced filters and virtual tours.
        </p>
        
        {/* Search form */}
        <form onSubmit={handleSearch} className="w-full max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by city, neighborhood, or zip code"
              className="pl-12 h-14 rounded-full text-base pr-32 shadow-lg border-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              className="absolute right-1 top-1 h-12 rounded-full bg-rental-600 hover:bg-rental-700 px-6"
            >
              Search
            </Button>
          </div>
        </form>
        
        {/* Quick filters */}
        <div className="flex flex-wrap gap-3 mt-8 justify-center">
          <Button
            variant="outline"
            className="bg-white/90 hover:bg-white border-0"
            onClick={() => navigate('/properties?type=apartment')}
          >
            Apartments
          </Button>
          <Button
            variant="outline"
            className="bg-white/90 hover:bg-white border-0"
            onClick={() => navigate('/properties?type=house')}
          >
            Houses
          </Button>
          <Button
            variant="outline"
            className="bg-white/90 hover:bg-white border-0"
            onClick={() => navigate('/properties?type=condo')}
          >
            Condos
          </Button>
          <Button
            variant="outline"
            className="bg-white/90 hover:bg-white border-0"
            onClick={() => navigate('/properties?type=studio')}
          >
            Studios
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
