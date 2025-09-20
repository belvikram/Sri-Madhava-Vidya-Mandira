import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "en" | "kn"; // English, Kannada

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const STORAGE_KEY = "smvm_lang";

const dictionary: Record<Lang, Record<string, string>> = {
  en: {
    school_name: "Sri Madhava Vidya Mandira",
    school_name_full: "Sri Madhava Vidya Mandira, Sira – 572137, Tumkur District, Karnataka",
    tagline: "Values – Education – Culture",
    admissions: "Admissions",
    academics: "Academics",
    contact: "Contact",
    about: "About Us",
    facilities: "Facilities",
    gallery: "Gallery",
    news: "News & Events",
    achievements: "Achievements",
    language: "Language",
    kannada: "Kannada",
    english: "English",
    announcements: "Announcements",
    quick_links: "Quick Links",
    read_more: "Read more",
    principal_message: "Principal's Message",
    address_label: "Address",
    address_value: "Bhumisinganahalli, Sira – 572137, Tumkur District, Karnataka",
    phone_label: "Phone",
    email_label: "Email",
    contact_us: "Contact Us",
    admissions_cta: "Apply Now",
    academics_cta: "View Curriculum",
    contact_cta: "Get in Touch",
    footer_motto: "Values – Education – Culture",
    footer_quick_links: "Quick Links",
    footer_contact: "Contact",
    copyright: "All rights reserved.",
    hero_tagline_prefix: "Rooted in",
    hero_tagline_suffix: "for every child",
    about_snippet: "A nurturing, value-centric school offering holistic education from early years onward. We blend strong academics with culture, sports, and arts.",
    ticker_1: "Admissions open for the new academic year.",
    ticker_2: "Congratulations to our students for district-level sports achievements!",
    ticker_3: "Science Fair on 12th September – Parents are welcome.",
    activities_title: "Activities",
    gallery_title: "Gallery",
    activity_sports: "Sports & Games",
    activity_sports_desc: "Cricket, athletics, kho-kho, kabaddi and more with trained coaches.",
    activity_labs: "Science Labs",
    activity_labs_desc: "Well-equipped labs for hands-on learning and experiments.",
    activity_library: "Library",
    activity_library_desc: "Quiet reading spaces with a rich collection of books.",
    activity_cultural: "Cultural Activities",
    activity_cultural_desc: "Music, dance, theatre and festivals that celebrate our heritage.",
    activity_yoga: "Yoga & Wellness",
    activity_yoga_desc: "Regular yoga and mindfulness for a healthy body and mind.",
    activity_clubs: "Student Clubs",
    activity_clubs_desc: "Literary, eco, and science clubs to nurture curiosity.",
    results: "Results",
    results_title: "Examination Results",
    results_subtitle: "Access all examination results and academic achievements",
    academic_year: "Academic Year",
    latest_results: "Latest Results Available",
    sslc_results: "SSLC Results (Class 10)",
    sslc_description: "Secondary School Leaving Certificate examination results for Class 10",
    class_6_9_results: "Class 6-9 Results",
    class_6_9_description: "Examination results for Classes 6, 7, 8, and 9",
    class_1_5_results: "Class 1-5 Results",
    class_1_5_description: "Examination results for Classes 1, 2, 3, 4, and 5",
    special_exams: "Special Examinations",
    special_exams_description: "Scholarship tests, Olympiads, and special assessments",
    overall_results: "Overall Results",
    subject_wise_results: "Subject-wise Results",
    merit_list: "Merit List",
    grade_analysis: "Grade Analysis",
    combined_results: "Combined Results",
    subject_analysis: "Subject-wise Analysis",
    progress_report: "Progress Report",
    scholarship_results: "Scholarship Results",
    olympiad_results: "Olympiad Results",
    merit_certificate: "Merit Certificate List",
    annual_exam: "Annual Examination",
    half_yearly_exam: "Half-yearly Examination",
    quarterly_exam: "Quarterly Examination",
    scholarship_test: "Scholarship Test",
    science_olympiad: "Science Olympiad",
    published: "Published",
    download: "Download",
    important_info: "Important Information",
    result_access: "Result Access",
    academic_support: "Academic Support",
    result_access_1: "Results are published within 30 days of examination",
    result_access_2: "All results are available in PDF format",
    result_access_3: "Download links are valid for 1 year",
    result_access_4: "Results available for Classes 1-10",
    result_access_5: "For any queries, contact the examination office",
    academic_support_1: "Re-evaluation applications available online",
    academic_support_2: "Duplicate certificates can be requested",
    academic_support_3: "Academic counseling for result analysis",
    academic_support_4: "Progress tracking for all classes",
    academic_support_5: "Parent-teacher meeting schedules",
  },
  kn: {
    school_name: "ಶ್ರೀ ಮಾಧವ ವಿದ್ಯಾಮಂದಿರ",
    school_name_full: "ಶ್ರೀ ಮಾಧವ ವಿದ್ಯಾಮಂದಿರ, ಸಿರಾ – 572137, ತುಮಕೂರು ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ",
    tagline: "ಸಂಸ್ಕಾರ – ಶಿಕ್ಷಣ – ಸಂಸ್ಕೃತಿ",
    admissions: "ಪ್ರವೇಶ",
    academics: "ವಿದ್ಯಾಭ್ಯಾಸ",
    contact: "ಸಂಪರ್ಕ",
    about: "ನಮ್ಮ ಬಗ್ಗೆ",
    facilities: "ಸೌಲಭ್ಯಗಳು",
    gallery: "ಚಿತ್ರಶಾಲೆ",
    news: "ಸುದ್ದಿ ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳು",
    achievements: "ಸಾಧನೆಗಳು",
    language: "ಭಾಷೆ",
    kannada: "ಕನ್ನಡ",
    english: "English",
    announcements: "ಪ್ರಕಟಣೆಗಳು",
    quick_links: "ತ್ವರಿತ ಕೊಂಡಿಗಳು",
    read_more: "ಇನ್ನಷ್ಟು ನೋಡಿ",
    principal_message: "ಪ್ರಾಂಶುಪಾಲರ ಸಂದೇಶ",
    address_label: "ವಿಳಾಸ",
    address_value: "ಭೂಮಿಸಿಂಗನಹಳ್ಳಿ, ಸಿರಾ – 572137, ತುಮಕೂರು ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ",
    phone_label: "ದೂರವಾಣಿ",
    email_label: "ಇಮೇಲ್",
    contact_us: "ಸಂಪರ್ಕಿಸಿ",
    admissions_cta: "ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
    academics_cta: "ಪಾಠ್ಯಕ್ರಮ ನೋಡಿ",
    contact_cta: "ಸಂಪರ್ಕಿಸಿ",
    footer_motto: "ಸಂಸ್ಕಾರ – ಶಿಕ್ಷಣ – ಸಂಸ್ಕೃತಿ",
    footer_quick_links: "ತ್ವರಿತ ಕೊಂಡಿಗಳು",
    footer_contact: "ಸಂಪರ್ಕ",
    copyright: "ಎಲ್ಲ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    hero_tagline_prefix: "ಮೂಲ್ಯಗಳು, ಶಿಕ್ಷಣ ಮತ್ತು ಸಂಸ್ಕೃತಿ",
    hero_tagline_suffix: "ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿಗಾಗಿ",
    about_snippet: "ಮೂಲ್ಯಾಧಾರಿತ, ಸಮಗ್ರ ಶಿಕ್ಷಣವನ್ನು ನೀಡುವ ಪೋಷಕ ವಾತಾವರಣ. ಅಧ್ಯಯನದ ಜೊತೆಗೆ ಸಂಸ್ಕೃತಿ, ಕ್ರೀಡೆ, ಕಲೆಗಳಿಗೆ ಸಮಾನ ಮಹತ್ವ.",
    ticker_1: "ಹೊಸ ಶೈಕ್ಷಣಿಕ ವರ್ಷದ ಪ್ರವೇಶಗಳು ಪ್ರಾರಂಭ.",
    ticker_2: "ಜಿಲ್ಲಾಸ್ಥರ ಕ್ರೀಡೆಯಲ್ಲಿ ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅಭಿನಂದನೆಗಳು!",
    ticker_3: "ಸೆಪ್ಟೆಂಬರ್ 12ರಂದು ವಿಜ್ಞಾನ ಮೇಳ – ಪೋಷಕರು ಸ್ವಾಗತ.",
    activities_title: "ಚಟುವಟಿಕೆಗಳು",
    gallery_title: "ಚಿತ್ರಶಾಲೆ",
    activity_sports: "ಕ್ರೀಡೆ ಮತ್ತು ಆಟಗಳು",
    activity_sports_desc: "ಕ್ರಿಕೆಟ್, ಅಥ್ಲೆಟಿಕ್ಸ್, ಖೋ-ಖೋ, ಕಬಡ್ಡಿ ಇತ್ಯಾದಿ ತರಬೇತುದಾರರೊಂದಿಗೆ.",
    activity_labs: "ವಿಜ್ಞಾನ ಪ್ರಯೋಗಾಲಯಗಳು",
    activity_labs_desc: "ಪ್ರಾಯೋಗಿಕ ಅಧ್ಯಯನಕ್ಕೆ ಸೂಕ್ತವಾದ ಸಜ್ಜಿತ ಲ್ಯಾಬ್‌ಗಳು.",
    activity_library: "ಗ್ರಂಥಾಲಯ",
    activity_library_desc: "ಸಮೃದ್ಧ ಪುಸ್ತಕ ಸಂಗ್ರಹದೊಂದಿಗೆ ಶಾಂತ ಓದು ಸ್ಥಳಗಳು.",
    activity_cultural: "ಸಾಂಸ್ಕೃತಿಕ ಚಟುವಟಿಕೆಗಳು",
    activity_cultural_desc: "ಸಂಗೀತ, ನೃತ್ಯ, ನಾಟಕ ಮತ್ತು ಹಬ್ಬಗಳ ಸಂಭ್ರಮ.",
    activity_yoga: "ಯೋಗ ಮತ್ತು ಕ್ಷೇಮ",
    activity_yoga_desc: "ಆರೋಗ್ಯಕರ ದೇಹ-ಮನಸ್ಸಿಗಾಗಿ ನಿಯಮಿತ ಯೋಗ ಮತ್ತು ಮೈಂಡ್‌ಫುಲ್‌ನೆಸ್.",
    activity_clubs: "ವಿದ್ಯಾರ್ಥಿ ಕ್ಲಬ್‌ಗಳು",
    activity_clubs_desc: "ಸಾಹಿತ್ಯ, ಪರಿಸರ ಮತ್ತು ವಿಜ್ಞಾನ ಕ್ಲಬ್‌ಗಳು ಕುತೂಹಲ ಬೆಳೆಸಲು.",
    results: "ಫಲಿತಾಂಶಗಳು",
    results_title: "ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶಗಳು",
    results_subtitle: "ಎಲ್ಲಾ ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶಗಳು ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಸಾಧನೆಗಳನ್ನು ಪ್ರವೇಶಿಸಿ",
    academic_year: "ಶೈಕ್ಷಣಿಕ ವರ್ಷ",
    latest_results: "ಇತ್ತೀಚಿನ ಫಲಿತಾಂಶಗಳು ಲಭ್ಯ",
    sslc_results: "ಎಸ್‌ಎಸ್‌ಎಲ್‌ಸಿ ಫಲಿತಾಂಶಗಳು (10ನೇ ತರಗತಿ)",
    sslc_description: "10ನೇ ತರಗತಿಗೆ ಮಾಧ್ಯಮಿಕ ಶಾಲಾ ಸೇರುವಿಕೆ ಪ್ರಮಾಣಪತ್ರ ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶಗಳು",
    class_6_9_results: "6-9ನೇ ತರಗತಿ ಫಲಿತಾಂಶಗಳು",
    class_6_9_description: "6, 7, 8, ಮತ್ತು 9ನೇ ತರಗತಿಗಳ ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶಗಳು",
    class_1_5_results: "1-5ನೇ ತರಗತಿ ಫಲಿತಾಂಶಗಳು",
    class_1_5_description: "1, 2, 3, 4, ಮತ್ತು 5ನೇ ತರಗತಿಗಳ ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶಗಳು",
    special_exams: "ವಿಶೇಷ ಪರೀಕ್ಷೆಗಳು",
    special_exams_description: "ವಿದ್ಯಾರ್ಥಿವೇತನ ಪರೀಕ್ಷೆಗಳು, ಒಲಿಂಪಿಯಾಡ್‌ಗಳು ಮತ್ತು ವಿಶೇಷ ಮೌಲ್ಯಮಾಪನಗಳು",
    overall_results: "ಒಟ್ಟಾರೆ ಫಲಿತಾಂಶಗಳು",
    subject_wise_results: "ವಿಷಯಾನುಸಾರ ಫಲಿತಾಂಶಗಳು",
    merit_list: "ಗೌರವ ಪಟ್ಟಿ",
    grade_analysis: "ಗ್ರೇಡ್ ವಿಶ್ಲೇಷಣೆ",
    combined_results: "ಸಂಯುಕ್ತ ಫಲಿತಾಂಶಗಳು",
    subject_analysis: "ವಿಷಯಾನುಸಾರ ವಿಶ್ಲೇಷಣೆ",
    progress_report: "ಪ್ರಗತಿ ವರದಿ",
    scholarship_results: "ವಿದ್ಯಾರ್ಥಿವೇತನ ಫಲಿತಾಂಶಗಳು",
    olympiad_results: "ಒಲಿಂಪಿಯಾಡ್ ಫಲಿತಾಂಶಗಳು",
    merit_certificate: "ಗೌರವ ಪ್ರಮಾಣಪತ್ರ ಪಟ್ಟಿ",
    annual_exam: "ವಾರ್ಷಿಕ ಪರೀಕ್ಷೆ",
    half_yearly_exam: "ಅರ್ಧವಾರ್ಷಿಕ ಪರೀಕ್ಷೆ",
    quarterly_exam: "ತ್ರೈಮಾಸಿಕ ಪರೀಕ್ಷೆ",
    scholarship_test: "ವಿದ್ಯಾರ್ಥಿವೇತನ ಪರೀಕ್ಷೆ",
    science_olympiad: "ವಿಜ್ಞಾನ ಒಲಿಂಪಿಯಾಡ್",
    published: "ಪ್ರಕಟಿಸಲಾಗಿದೆ",
    download: "ಡೌನ್‌ಲೋಡ್",
    important_info: "ಮುಖ್ಯ ಮಾಹಿತಿ",
    result_access: "ಫಲಿತಾಂಶ ಪ್ರವೇಶ",
    academic_support: "ಶೈಕ್ಷಣಿಕ ಬೆಂಬಲ",
    result_access_1: "ಪರೀಕ್ಷೆಯ 30 ದಿನಗಳೊಳಗೆ ಫಲಿತಾಂಶಗಳು ಪ್ರಕಟವಾಗುತ್ತವೆ",
    result_access_2: "ಎಲ್ಲಾ ಫಲಿತಾಂಶಗಳು PDF ಸ್ವರೂಪದಲ್ಲಿ ಲಭ್ಯವಿವೆ",
    result_access_3: "ಡೌನ್‌ಲೋಡ್ ಕೊಂಡಿಗಳು 1 ವರ್ಷ ಮಾನ್ಯವಾಗಿರುತ್ತವೆ",
    result_access_4: "1-10ನೇ ತರಗತಿಗಳಿಗೆ ಫಲಿತಾಂಶಗಳು ಲಭ್ಯವಿವೆ",
    result_access_5: "ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿಗೆ, ಪರೀಕ್ಷಾ ಕಛೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ",
    academic_support_1: "ಮರುಮೌಲ್ಯಮಾಪನ ಅರ್ಜಿಗಳು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಲಭ್ಯವಿವೆ",
    academic_support_2: "ನಕಲಿ ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ವಿನಂತಿಸಬಹುದು",
    academic_support_3: "ಫಲಿತಾಂಶ ವಿಶ್ಲೇಷಣೆಗೆ ಶೈಕ್ಷಣಿಕ ಸಲಹೆ",
    academic_support_4: "ಎಲ್ಲಾ ತರಗತಿಗಳಿಗೆ ಪ್ರಗತಿ ಟ್ರ್ಯಾಕಿಂಗ್",
    academic_support_5: "ಪೋಷಕ-ಶಿಕ್ಷಕ ಸಭೆಗಳ ವೇಳಾಪಟ್ಟಿ",
  },
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    return stored ?? "kn";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "kn" ? "kn" : "en";
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const t = useCallback(
    (key: string) => {
      const table = dictionary[lang];
      return table[key] ?? key;
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}