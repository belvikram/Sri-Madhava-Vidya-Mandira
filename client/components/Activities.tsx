import { useI18n } from "@/lib/i18n";
import { Dumbbell, FlaskConical, Library, Drama, Volleyball, BookOpenCheck } from "lucide-react";

type Item = { key: string; icon: React.ElementType; color: string };

export default function Activities() {
  const { t } = useI18n();
  const items: Item[] = [
    { key: "activity_sports", icon: Volleyball, color: "from-brand-blue to-blue-500" },
    { key: "activity_labs", icon: FlaskConical, color: "from-brand-orange to-amber-400" },
    { key: "activity_library", icon: Library, color: "from-blue-600 to-brand-orange" },
    { key: "activity_cultural", icon: Drama, color: "from-indigo-500 to-brand-blue" },
    { key: "activity_yoga", icon: Dumbbell, color: "from-emerald-500 to-teal-500" },
    { key: "activity_clubs", icon: BookOpenCheck, color: "from-fuchsia-500 to-pink-500" },
  ];

  return (
    <section className="container mx-auto py-10">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-brand-blue">{t("activities_title")}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(({ key, icon: Icon, color }) => (
          <div key={key} className={`group overflow-hidden rounded-xl border bg-white shadow-sm`}>
            <div className={`h-1 w-full bg-gradient-to-r ${color}`} />
            <div className="p-5 flex items-start gap-4">
              <div className={`grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br ${color} text-white shadow`}> 
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{t(key)}</h3>
                <p className="mt-1 text-sm text-gray-600">{t(`${key}_desc`)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
