
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Filter, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

interface PropertyFiltersProps {
  onFilterChange?: (filters: any) => void;
}

const PropertyFilters = ({ onFilterChange }: PropertyFiltersProps) => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filters = {
      location,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      bedrooms,
      bathrooms,
      propertyType,
    };
    
    if (onFilterChange) {
      onFilterChange(filters);
    }
    
    if (isFiltersOpen) {
      setIsFiltersOpen(false);
    }
  };

  const handleReset = () => {
    setLocation('');
    setPriceRange([0, 5000]);
    setBedrooms('');
    setBathrooms('');
    setPropertyType('');
    
    if (onFilterChange) {
      onFilterChange({});
    }
  };

  const formatPrice = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  const FiltersForm = () => (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Label htmlFor="location" className="text-sm font-medium">
          Location
        </Label>
        <div className="relative mt-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            id="location"
            placeholder="City, neighborhood, or zip"
            className="pl-9"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <Label className="text-sm font-medium">Monthly Rent</Label>
          <div className="text-sm text-gray-500">
            {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
          </div>
        </div>
        <Slider
          defaultValue={[0, 5000]}
          min={0}
          max={10000}
          step={100}
          value={priceRange}
          onValueChange={setPriceRange}
          className="my-4"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="bedrooms" className="text-sm font-medium">
            Bedrooms
          </Label>
          <Select value={bedrooms} onValueChange={setBedrooms}>
            <SelectTrigger id="bedrooms" className="mt-1">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="bathrooms" className="text-sm font-medium">
            Bathrooms
          </Label>
          <Select value={bathrooms} onValueChange={setBathrooms}>
            <SelectTrigger id="bathrooms" className="mt-1">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div>
        <Label htmlFor="propertyType" className="text-sm font-medium">
          Property Type
        </Label>
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger id="propertyType" className="mt-1">
            <SelectValue placeholder="All property types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All property types</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
            <SelectItem value="studio">Studio</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-center justify-between pt-2">
        <Button
          type="button"
          variant="ghost"
          onClick={handleReset}
          className="text-gray-500 hover:text-gray-700"
        >
          Reset all
        </Button>
        <Button type="submit" className="bg-rental-600 hover:bg-rental-700">
          Apply Filters
        </Button>
      </div>
    </form>
  );

  return (
    <div className="bg-white shadow-sm border rounded-lg">
      {/* Desktop View */}
      <div className="hidden md:block p-4">
        <FiltersForm />
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden p-3">
        <div className="flex items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search location"
              className="pl-9"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <Sheet open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="ml-2 flex items-center">
                <Filter className="h-4 w-4 mr-1" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[85vh]">
              <SheetHeader className="mb-5">
                <SheetTitle className="text-center">Filters</SheetTitle>
              </SheetHeader>
              <FiltersForm />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
