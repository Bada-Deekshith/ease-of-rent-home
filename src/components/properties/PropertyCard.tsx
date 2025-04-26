
import { Heart, Bed, Bath, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    imageUrl: string;
  };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorited(!isFavorited);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="overflow-hidden card-hover-effect border border-gray-200">
      <Link to={`/property/${property.id}`} className="block">
        <div className="relative">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full property-card-image rounded-t-lg object-cover"
          />
          <button
            className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-md"
            onClick={handleFavoriteClick}
            aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart
              className={`h-5 w-5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
            />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white p-3">
            <p className="font-bold text-xl">{formatPrice(property.price)}<span className="text-sm font-normal">/mo</span></p>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg line-clamp-1 mb-1">{property.title}</h3>
          
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span className="line-clamp-1">{property.address}</span>
          </div>
          
          <div className="flex items-center justify-between border-t pt-3 text-sm">
            <div className="flex space-x-3">
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1 text-gray-500" />
                <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1 text-gray-500" />
                <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
              </div>
              <div className="hidden sm:flex items-center">
                <span>{property.squareFeet} sq ft</span>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-rental-600 hover:bg-rental-50 p-0 flex items-center"
            >
              Details <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default PropertyCard;
