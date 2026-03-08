import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getSchoolImage } from "@/lib/imageUtils";
import { FileText, Users, DollarSign, CheckCircle, MapPin, Phone } from "lucide-react";

export default function Admissions() {
  const { t } = useI18n();

  const admissionProcess = [
    {
      step: 1,
      title: "Application Submission",
      description: "Submit the completed application form with required documents",
      icon: FileText
    },
    {
      step: 2,
      title: "Document Verification",
      description: "Verification of birth certificate, previous school records, and other documents",
      icon: CheckCircle
    },
    {
      step: 3,
      title: "Interaction Session",
      description: "Brief interaction with child and parents to understand needs and expectations",
      icon: Users
    },
    {
      step: 4,
      title: "Fee Payment",
      description: "Payment of admission fee and first term fees to confirm admission",
      icon: DollarSign
    }
  ];

  const requiredDocuments = [
    "Birth Certificate (Original + 2 Photocopies)",
    "Previous School Transfer Certificate (if applicable)",
    "Previous Academic Records (Report Cards)",
    "Aadhaar Card (Student & Parents)",
    "Child's Bank Account Details (Passbook Copy)",
    "Passport Size Photographs (4 copies)",
    "Caste Certificate (if applicable)",
    "Income Certificate (for fee concession)",
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">Admissions Open</h1>
        <p className="text-xl text-gray-600 mb-6">Academic Year 2025-26</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Join Sri Madhava Vidya Mandira and give your child the gift of quality education
          rooted in values and culture. We welcome applications for all classes from Nursery to Class X.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button className="btn-primary">Download Application Form</Button>
          <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
            Schedule Visit
          </Button>
        </div>
      </section>

      {/* Admission Process */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">Admission Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionProcess.map((process, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center text-lg font-bold">
                      {process.step}
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center">
                      <process.icon className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg">{process.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{process.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Required Documents */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-brand-blue">Required Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-brand-blue">Admission Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Age criteria as per State guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Previous academic performance (for higher classes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Behavioral assessment during interaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Parental commitment to school values</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fee Concession Banner */}
      <section className="mb-12">
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-6 py-4 text-center">
          <p className="text-sm md:text-base font-medium text-blue-900">
            Free tuition for the third child is available when the first two children are studying at SMVM.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">Why Choose Sri Madhava Vidya Mandira?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">Values-Based Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                We integrate moral values and cultural heritage into our curriculum,
                ensuring character development alongside academic excellence.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">Experienced Faculty</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Our dedicated teachers are well-qualified and experienced,
                committed to providing quality education and individual attention.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">Holistic Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                We focus on all-round development through academics, sports,
                arts, and cultural activities, nurturing every aspect of a child's growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* School Image */}
      <section className="mb-12">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src={getSchoolImage(4)}
            alt="Students at School"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Join Our Family</h2>
            <p className="text-sm opacity-90">Where every child's potential is nurtured and celebrated</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">For More Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-brand-blue" />
                <div>
                  <p className="font-medium">Visit Our Campus</p>
                  <p className="text-sm text-gray-600">{t("address_value")}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-blue" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-sm text-gray-600">+91-00000 00000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-brand-blue" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-sm text-gray-600">admissions@smvm.edu.in</p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button className="btn-primary mr-4">Apply Now</Button>
              <Button variant="outline">Download Brochure</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
