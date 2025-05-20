import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  MapPin, 
  MessageSquare,
  Heart
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import ProfessionalModal from "./professional-modal";
import { ProfessionalCardProps } from "@/types/Professional/ProfessionalCardProps";

export function ProfessionalCard({
  id,
  name,
  profession,
  description,
  location,
  imageUrl,
  featured = false,
  verified = false,
}: ProfessionalCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-[#9A3B72]">
              <img src={imageUrl || "/placeholder.svg"} alt={name} className="object-cover h-full w-full" />
            </div>
            {verified && <CheckCircle className="absolute -bottom-1 -right-1 h-5 w-5 text-green-600 fill-white" />}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg flex items-center gap-1">
                  {name}
                  {featured && <Badge className="ml-1 bg-[#F9B000] text-[#3A0F2D]">Destaque</Badge>}
                </CardTitle>
                <CardDescription>{profession}</CardDescription>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Adicionar aos favoritos</span>
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{description}</p>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span>{location}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <ProfessionalModal 
          id={id}
          name={name}
          profession={profession}
          description={description}
          location={location}
          imageUrl={imageUrl}
          featured={featured}
          verified={verified}
        />
        <Button size="sm" className="gap-1 bg-primary">
          <MessageSquare className="h-4 w-4" />
          Contatar
        </Button>
      </CardFooter>
    </Card>
  );
}