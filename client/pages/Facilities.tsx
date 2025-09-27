import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getSchoolImage } from "@/lib/imageUtils";
import { 
  BookOpen, 
  Microscope, 
  Computer, 
  Dumbbell, 
  Music, 
  Palette, 
  Users, 
  Wifi,
  Shield,
  Car,
  Utensils,
  Heart
} from "lucide-react";

export default function Facilities() {
  const { t } = useI18n();

  const facilities = [
    {
      icon: BookOpen,
      title: "Library",
      description: "Well-stocked library with over 5000 books, reference materials, and digital resources",
      image: getSchoolImage(5),
      features: ["Reading Room", "Digital Resources", "Reference Section", "Children's Corner"]
    },
    {
      icon: Microscope,
      title: "Science Laboratories",
      description: "Fully equipped Physics, Chemistry, and Biology labs for hands-on learning",
      image: getSchoolImage(6),
      features: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Computer Lab"]
    },
    {
      icon: Computer,
      title: "Computer Lab",
      description: "Modern computer laboratory with high-speed internet and latest software",
      image: getSchoolImage(7),
      features: ["40+ Computers", "High-Speed Internet", "Educational Software", "Digital Learning"]
    },
    {
      icon: Dumbbell,
      title: "Sports Facilities",
      description: "Comprehensive sports infrastructure for physical development and fitness",
      image: getSchoolImage(8),
      features: ["Playground", "Indoor Games", "Sports Equipment", "Coaching Staff"]
    },
    {
      icon: Music,
      title: "Music & Arts Room",
      description: "Dedicated spaces for music, dance, and art activities",
      image: getSchoolImage(9),
      features: ["Music Instruments", "Dance Studio", "Art Supplies", "Performance Stage"]
    },
    {
      icon: Users,
      title: "Smart Classrooms",
      description: "Technology-enabled classrooms with interactive whiteboards and multimedia",
      image: getSchoolImage(10),
      features: ["Interactive Boards", "Projectors", "Audio Systems", "Digital Content"]
    }
  ];

  const additionalFacilities = [
    {
      icon: Wifi,
      title: "WiFi Campus",
      description: "High-speed internet connectivity throughout the campus"
    },
    {
      icon: Shield,
      title: "Security",
      description: "24/7 security with CCTV surveillance and trained guards"
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Safe and reliable school bus service covering all major areas"
    },
    {
      icon: Utensils,
      title: "Cafeteria",
      description: "Healthy and hygienic meals prepared in our modern kitchen"
    },
    {
      icon: Heart,
      title: "Medical Room",
      description: "First-aid facility with trained nurse and basic medical equipment"
    },
    {
      icon: Users,
      title: "Counseling",
      description: "Student counseling services for academic and emotional support"
    }
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">World-Class Facilities</h1>
        <p className="text-xl text-gray-600 mb-6">Supporting excellence in education</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Our modern infrastructure and state-of-the-art facilities provide an ideal environment 
          for learning, creativity, and holistic development. Every facility is designed to 
          enhance the educational experience of our students.
        </p>
      </section>

      {/* Main Facilities */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">Core Facilities</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="p-2 rounded-full bg-brand-blue/90">
                    <facility.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-brand-blue">{facility.title}</CardTitle>
                <p className="text-gray-600">{facility.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {facility.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary">{feature}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">Additional Amenities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFacilities.map((facility, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-brand-orange/10">
                    <facility.icon className="h-6 w-6 text-brand-orange" />
                  </div>
                </div>
                <CardTitle className="text-lg">{facility.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">Infrastructure Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">40+</div>
                <div className="text-sm text-gray-600">Well-ventilated Classrooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">5000+</div>
                <div className="text-sm text-gray-600">Books in Library</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">100%</div>
                <div className="text-sm text-gray-600">Digital Classrooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">5</div>
                <div className="text-sm text-gray-600">Science Laboratories</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Campus Tour */}
      <section className="mb-12">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img 
            src={getSchoolImage(11)} 
            alt="School Campus Aerial View" 
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Explore Our Campus</h2>
            <p className="text-sm opacity-90">Modern infrastructure designed for 21st-century learning</p>
          </div>
          <div className="absolute top-6 right-6">
            <button className="bg-white/90 text-brand-blue px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors">
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
