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
  title: "Luxury Apartment in Banjara Hills",
  description: "Experience luxury living in this beautifully designed apartment located in the heart of Banjara Hills. This modern 3-bedroom apartment features premium finishes, spacious rooms, and a private balcony with stunning city views. The complex offers amenities including a fitness center, swimming pool, and 24/7 security.\n\nThe apartment is situated in an upscale neighborhood, close to premium restaurants, shopping centers, and international schools. Perfect for families looking for a sophisticated urban lifestyle in Hyderabad's most prestigious locality.",
  address: "8-2-293/82/A/1107",
  city: "Hyderabad",
  state: "Telangana",
  zipCode: "500034",
  price: 55000,
  bedrooms: 3,
  bathrooms: 3,
  squareFeet: 2100,
  propertyType: "Apartment",
  images: [
    "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  ],
  availableFrom: "2025-05-15",
  amenities: [
    { id: "1", name: "Power Backup" },
    { id: "2", name: "Air Conditioning" },
    { id: "3", name: "Modular Kitchen" },
    { id: "4", name: "Marble Flooring" },
    { id: "5", name: "Private Balcony" },
    { id: "6", name: "Premium Fixtures" },
    { id: "7", name: "Walk-in Wardrobe" },
    { id: "8", name: "High-speed Internet" }
  ],
  features: [
    "Swimming Pool Access",
    "Clubhouse",
    "Visitor Parking",
    "24/7 Security",
    "Pet-friendly",
    "Reserved Parking",
    "Children's Play Area"
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
