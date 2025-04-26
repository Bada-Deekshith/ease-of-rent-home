
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Home, Bed, Bath, Ruler, Calendar, Heart, Share } from "lucide-react";
import PropertyGallery from "./PropertyGallery";
import ContactForm from "../common/ContactForm";

interface Amenity {
  id: string;
  name: string;
}

interface PropertyDetailsProps {
  property: {
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
  };
}

const PropertyDetails = ({ property }: PropertyDetailsProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-IN', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric' 
    }).format(date);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-4 md:p-6">
        {/* Property Gallery */}
        <PropertyGallery images={property.images} title={property.title} />

        <div className="mt-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="text-rental-600 bg-rental-50 hover:bg-rental-100 border-rental-100">
                  {property.propertyType}
                </Badge>
                <Badge variant="outline" className="text-green-600 bg-green-50 hover:bg-green-100 border-green-100">
                  Available Now
                </Badge>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold">{property.title}</h1>
              
              <div className="flex items-center mt-2 text-gray-600">
                <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                <span>{property.address}, {property.city}, {property.state} {property.zipCode}</span>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0">
              <div className="text-3xl font-bold text-rental-600">
                {formatPrice(property.price)}
                <span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
            </div>
          </div>
          
          {/* Property details */}
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex items-center">
              <Bed className="h-5 w-5 mr-2 text-gray-500" />
              <div>
                <span className="font-semibold">{property.bedrooms}</span>
                <span className="text-gray-600"> {property.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <Bath className="h-5 w-5 mr-2 text-gray-500" />
              <div>
                <span className="font-semibold">{property.bathrooms}</span>
                <span className="text-gray-600"> {property.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <Ruler className="h-5 w-5 mr-2 text-gray-500" />
              <div>
                <span className="font-semibold">{property.squareFeet}</span>
                <span className="text-gray-600"> sq ft</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <Home className="h-5 w-5 mr-2 text-gray-500" />
              <div>
                <span className="text-gray-600">Property Type: </span>
                <span className="font-semibold">{property.propertyType}</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-gray-500" />
              <div>
                <span className="text-gray-600">Available From: </span>
                <span className="font-semibold">{formatDate(property.availableFrom)}</span>
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-3">About this home</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {property.description}
            </p>
          </div>
          
          <Separator className="my-6" />
          
          {/* Amenities and Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Amenities</h2>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {property.amenities.map((amenity) => (
                  <li key={amenity.id} className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-rental-600 mr-2" />
                    <span>{amenity.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3">Property Features</h2>
              <ul className="grid grid-cols-1 gap-y-2">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-rental-600 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Interested in this property?</h2>
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
              <ContactForm propertyId={property.id} propertyTitle={property.title} />
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-6">
            <Button variant="outline" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Save
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Share className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
