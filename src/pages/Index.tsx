import React from 'react';
import Hero from '@/components/common/Hero';
import PropertyCard from '@/components/properties/PropertyCard';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Heart, Shield, Home, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample data for featured properties
const featuredProperties = [
  {
    id: 1,
    title: "Modern Apartment in Banjara Hills",
    address: "123 Banjara Hills Road, Hyderabad, Telangana 500034",
    price: 35000,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 650,
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Spacious 2BR with City Views",
    address: "456 Jubilee Hills, Hyderabad, Telangana 500033",
    price: 45000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 950,
    imageUrl: "https://images.unsplash.com/photo-1594540992254-9d8a5b5d52e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Luxury Loft in Gachibowli",
    address: "789 Financial District, Hyderabad, Telangana 500032",
    price: 40000,
    bedrooms: 1,
    bathrooms: 1.5,
    squareFeet: 820,
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Spacious Family Home in Manikonda",
    address: "321 Manikonda Main Road, Hyderabad, Telangana 500089",
    price: 55000,
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 1850,
    imageUrl: "https://images.unsplash.com/photo-1605146768851-eda79da39897?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Studio in HITEC City",
    address: "555 HITEC City, Hyderabad, Telangana 500081",
    price: 25000,
    bedrooms: 0,
    bathrooms: 1,
    squareFeet: 550,
    imageUrl: "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Charming 2BR in Kondapur",
    address: "888 Kondapur Main Road, Hyderabad, Telangana 500084",
    price: 38000,
    bedrooms: 2,
    bathrooms: 1.5,
    squareFeet: 1050,
    imageUrl: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const features = [
  {
    icon: <Home className="h-8 w-8 text-rental-600" />,
    title: "Extensive Property Listings",
    description: "Browse thousands of verified rental properties in your desired area, with detailed descriptions and high-quality images."
  },
  {
    icon: <Heart className="h-8 w-8 text-rental-600" />,
    title: "Personalized Experience",
    description: "Save your favorite properties, set custom alerts for new listings that match your criteria, and track your viewing history."
  },
  {
    icon: <Shield className="h-8 w-8 text-rental-600" />,
    title: "Trusted by Thousands",
    description: "Join our community of satisfied renters and property owners who trust RentEase for their housing needs."
  },
  {
    icon: <Star className="h-8 w-8 text-rental-600" />,
    title: "Premium Features",
    description: "Enjoy virtual tours, neighborhood insights, sustainability ratings, and flexible lease terms with our platform."
  }
];

const Index = () => {
  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Properties */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Featured Properties</h2>
                <p className="text-gray-600 mt-2">Discover handpicked properties available for rent</p>
              </div>
              <Button 
                asChild 
                variant="outline" 
                className="mt-4 md:mt-0"
              >
                <Link to="/properties">View All Properties</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">Why Choose RentEase</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Our platform offers a seamless rental experience with powerful features that make finding your next home easier than ever
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-rental-50 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 gradient-bg text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Find Your Perfect Home?</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Start your search today and discover the perfect rental property that fits all your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-rental-600 hover:bg-gray-100"
              >
                <Link to="/properties">Browse Properties</Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/list-property">List Your Property</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">What Our Users Say</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Hear from renters and property owners who've had success with RentEase
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600">Renter in San Francisco</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "I found my dream apartment in less than a week using RentEase. The filters helped me narrow down exactly what I was looking for, and the virtual tour feature saved me so much time!"
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Michael Rodriguez</h4>
                    <p className="text-sm text-gray-600">Property Owner in Chicago</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "As a landlord with multiple properties, RentEase makes it easy to manage all my listings in one place. I get quality applicants quickly, and the platform handles most of the paperwork!"
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Jennifer Lee</h4>
                    <p className="text-sm text-gray-600">Renter in New York</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The neighborhood insights on RentEase helped me choose between similar apartments by showing me which area would be best for my lifestyle. I couldn't be happier with my choice!"
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
