
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PropertyDetails from '@/components/properties/PropertyDetails';

interface Amenity {
  id: string;
  name: string;
}

interface Property {
  id: number;
  title: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  propertyType: string;
  images: string[];
  availableFrom: string;
  amenities: Amenity[];
  features: string[];
}

// Sample property data
const sampleProperty: Property = {
  id: 1,
  title: "Modern Downtown Apartment with City Views",
  description: "Beautiful and spacious downtown apartment with stunning city views. This modern 1-bedroom apartment features hardwood floors, stainless steel appliances, and a private balcony. The building offers a fitness center, rooftop lounge, and 24/7 security.\n\nThe apartment is located in the heart of the downtown area, within walking distance to restaurants, shops, and public transportation. Perfect for young professionals or couples looking for a comfortable urban living experience.",
  address: "123 Main Street, Apt 501",
  city: "San Francisco",
  state: "CA",
  zipCode: "94103",
  price: 2400,
  bedrooms: 1,
  bathrooms: 1,
  squareFeet: 650,
  propertyType: "Apartment",
  images: [
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1594540992254-9d8a5b5d52e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  ],
  availableFrom: "2025-05-15",
  amenities: [
    { id: "1", name: "In-unit washer/dryer" },
    { id: "2", name: "Central air conditioning" },
    { id: "3", name: "Dishwasher" },
    { id: "4", name: "Hardwood floors" },
    { id: "5", name: "Balcony" },
    { id: "6", name: "Stainless steel appliances" },
    { id: "7", name: "Walk-in closet" },
    { id: "8", name: "High-speed internet ready" }
  ],
  features: [
    "Fitness center access",
    "Rooftop lounge",
    "Package receiving service",
    "24/7 security",
    "Pet-friendly (with restrictions)",
    "Bike storage",
    "On-site management"
  ]
};

const PropertyPage = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch with a timeout
    const fetchProperty = async () => {
      setIsLoading(true);
      try {
        // In a real app, you would fetch the property data from your API
        // For now, we'll use the sample data after a short delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setProperty(sampleProperty);
      } catch (error) {
        console.error('Error fetching property:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProperty();
    }
  }, [id]);

  return (
    <>
      <Navbar />
      
      <main className="py-8 px-4">
        <div className="container mx-auto">
          <div className="mb-6">
            <Button
              asChild
              variant="ghost"
              className="mb-4 pl-0 hover:bg-transparent"
            >
              <Link to="/" className="flex items-center text-gray-600 hover:text-rental-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to search results
              </Link>
            </Button>
            
            {isLoading ? (
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ) : property ? (
              <PropertyDetails property={property} />
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-2">Property Not Found</h2>
                <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
                <Button asChild>
                  <Link to="/">Return to Home</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PropertyPage;
