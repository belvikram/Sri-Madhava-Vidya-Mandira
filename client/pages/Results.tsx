import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { ExternalLink } from "lucide-react";

export default function Results() {
  const { t } = useI18n();
  const karResultsUrl = "https://karresults.nic.in/";

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">{t("results_title")}</h1>
        <p className="text-xl text-gray-600 mb-6">{t("results_subtitle")}</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {t("results_10th_description")}
        </p>
      </section>

      {/* Results Card */}
      <section className="mb-12">
        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden border-2 border-brand-blue shadow-lg">
            <CardHeader className="bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white">
              <CardTitle className="text-2xl text-brand-blue">
                {t("results_title")}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="bg-blue-50 border-2 border-brand-blue rounded-lg p-6">
                  <p className="text-base font-bold text-brand-blue mb-6">
                    {t("results_10th_class")}
                  </p>
                  <Button
                    asChild
                    className="bg-brand-blue hover:bg-brand-blue/90 text-white"
                  >
                    <a
                      href={karResultsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      {t("results_view_results")}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("results_10th_note")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
