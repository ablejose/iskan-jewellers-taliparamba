/**
 * Golden Goal — Gold Saving Scheme content (single source of truth for /schemes).
 * Section headings, card titles and buttons stay in English; the descriptive
 * body copy (steps, benefits, important-to-know, terms) is in Malayalam per the
 * approved wording supplied by Iskan Jewellers.
 */

export interface SchemeStep {
  number: string;
  title: string;
  body: string;
}

export interface SchemeBenefit {
  title: string;
  body: string;
  icon: "shield" | "home" | "coins" | "diamond";
}

export interface SchemeTerm {
  title: string;
  /** A single paragraph, or a list of points rendered as bullets. */
  body: string | string[];
}

export interface GoldenGoal {
  name: string;
  subtitle: string;
  malayalamTagline: string;
  intro: string;
  pills: string[];
  steps: SchemeStep[];
  benefits: SchemeBenefit[];
  importantToKnow: string[];
  disclaimer: string;
  terms: SchemeTerm[];
  joinMessage: string;
}

export const GOLDEN_GOAL: GoldenGoal = {
  name: "Golden Goal",
  subtitle: "Gold Saving Scheme",
  malayalamTagline: "പണം മാറ്റട്ടെ... പരിശുദ്ധ സ്വർണ്ണമായി...!",
  intro: "An 11-month Gold Advance Booking Scheme to save towards your next gold purchase.",

  pills: ["11 Months", "Start with only ₹500", "Home Service", "50% off on diamond charges", "16% off on gold charges"],

  steps: [
    {
      number: "01",
      title: "Save",
      body: "₹500 അല്ലെങ്കിൽ ₹500-ന്റെ ഗുണിതങ്ങൾ അടച്ച് സ്കീമിൽ പങ്കാളിയാകാം.",
    },
    {
      number: "02",
      title: "Build Gold",
      body: "നിങ്ങൾ അടയ്ക്കുന്ന തുക അന്നത്തെ സ്വർണ്ണവില അനുസരിച്ച് സ്വർണ്ണത്തിന്റെ തൂക്കമായി പാസ്ബുക്കിൽ രേഖപ്പെടുത്തുന്നു.",
    },
    {
      number: "03",
      title: "Redeem",
      body: "11 മാസത്തെ സ്കീം പൂർത്തിയാക്കി, സമ്പാദിച്ച സ്വർണ്ണത്തിന്റെ മൂല്യത്തിന് അനുയോജ്യമായ ആഭരണങ്ങൾ തിരഞ്ഞെടുക്കാം.",
    },
  ],

  benefits: [
    {
      title: "Gold Rate Protection",
      body: "ഓരോ തവണ പണമടയ്ക്കുമ്പോഴും അന്നത്തെ വിപണി നിരക്ക് അനുസരിച്ചാണ് സ്വർണ്ണത്തിന്റെ തൂക്കം കണക്കാക്കുന്നത്.",
      icon: "shield",
    },
    {
      title: "Home Service",
      body: "ഇസ്കാൻ ജ്വല്ലേഴ്സ് പ്രതിനിധികൾ വഴി വീടുകളിൽ നിന്ന് തന്നെ പണമടയ്ക്കാനുള്ള സൗകര്യം.",
      icon: "home",
    },
    {
      title: "Multiple Payment Options",
      body: "സ്കീം വ്യവസ്ഥകൾക്ക് വിധേയമായി ₹500 മുതൽ അതിൻ്റെ ഗുണിതങ്ങളായി തവണകൾ അടയ്ക്കാം.",
      icon: "coins",
    },
    {
      title: "Gold & Diamond Benefits",
      body: "സ്കീം പൂർത്തിയാക്കുമ്പോൾ 16% വരെയുള്ള സ്വർണ്ണാഭരണങ്ങൾ പണികൂലിയില്ലാതെയും, തിരഞ്ഞെടുക്കപ്പെട്ട ഡയമണ്ട് ആഭരണങ്ങളുടെ പണികൂലിയിൽ 50% ഇളവും സ്വന്തമാക്കാം.",
      icon: "diamond",
    },
  ],

  importantToKnow: [
    "സ്കീമിന്റെ കാലാവധി 11 മാസമാണ്.",
    "സ്കീമിന്റെ ആനുകൂല്യങ്ങൾ ലഭിക്കുന്നതിന് തവണകൾ കൃത്യമായി അടയ്ക്കേണ്ടതുണ്ട്.",
    "അടച്ച തുകയും അതിന് ലഭിച്ച സ്വർണ്ണത്തിന്റെ തൂക്കവും പാസ്ബുക്കിൽ കൃത്യമായി രേഖപ്പെടുത്തിയിട്ടുണ്ടെന്ന് ഉറപ്പുവരുത്തുക.",
    "സ്കീമിൽ അടച്ച തുക പണമായി തിരികെ നൽകുന്നതല്ല.",
  ],

  disclaimer: "എല്ലാ ആനുകൂല്യങ്ങളും സ്കീമിന്റെ നിബന്ധനകൾക്കും വ്യവസ്ഥകൾക്കും വിധേയമാണ്.",

  terms: [
    {
      title: "Scheme Duration & Payment",
      body: "ഈ പദ്ധതി 11 മാസക്കാലളവിലേക്കുള്ളതാണ്. ഇതിന്റെ ഏറ്റവും കുറഞ്ഞ ഗഡു തുക ₹500 ആണ്. തുടർന്ന് ₹500-ന്റെ ഗുണിതങ്ങളായി വേണം തുക അടയ്ക്കുവാൻ. ആദ്യ 5 മാസങ്ങളിൽ നിങ്ങൾ നിക്ഷേപിക്കുന്ന തുകയുടെ ആനുപാതിക ശരാശരി തുക മാത്രമേ തുടർന്നുള്ള മാസങ്ങളിൽ അടയ്ക്കാൻ സാധിക്കുകയുള്ളൂ.",
    },
    {
      title: "Gold Weight & Gold Rate",
      body: "ഓരോ തവണ പണമടയ്ക്കുമ്പോഴും നിങ്ങൾ അടയ്ക്കുന്ന തുകയ്ക്ക് സമാനമായി, അന്നത്തെ സ്വർണ്ണവില അനുസരിച്ച് ലഭിക്കുന്ന സ്വർണ്ണത്തിന്റെ തൂക്കം നിങ്ങളുടെ പാസ്ബുക്കിൽ കൃത്യമായി രേഖപ്പെടുത്തുന്നതാണ്.",
    },
    {
      title: "Scheme Benefits",
      body: "തവണ സംഖ്യ കൃത്യമായി അടച്ച് 11 മാസത്തെ കാലാവധി പൂർത്തിയാക്കുന്ന അംഗങ്ങൾക്ക് 16% വരെയുള്ള സ്വർണ്ണാഭരണങ്ങൾ പണികൂലി ഇല്ലാതെ സ്വന്തമാക്കാവുന്നതാണ്.",
    },
    {
      title: "Diamond Jewellery",
      body: "പദ്ധതിയിലെ അംഗങ്ങൾ ഡയമണ്ട് ആഭരണങ്ങൾ വാങ്ങുമ്പോൾ പണികൂലിയിൽ 50% ഇളവ് ലഭിക്കുന്നതാണ്.",
    },
    {
      title: "Payment & Home Service",
      body: "തവണകൾ ഇസ്കാൻ ജ്വല്ലറി ഷോറൂമിൽ നേരിട്ടോ, അല്ലെങ്കിൽ എക്സിക്യൂട്ടീവ് മുഖേനയോ അടയ്ക്കാവുന്നതാണ്. അടയ്ക്കുന്ന തുക പാസ്ബുക്കിൽ രേഖപ്പെടുത്തി എന്ന് ഉറപ്പുവരുത്തുക.",
    },
    {
      title: "Passbook & Corrections",
      body: "പാസ്ബുക്കിലെ രേഖപ്പെടുത്തലിൽ എന്തെങ്കിലും പിഴവ് ശ്രദ്ധയിൽപ്പെട്ടാൽ ഉടൻ തന്നെ ഷോറൂം മാനേജറുമായി ബന്ധപ്പെട്ട് തിരുത്തേണ്ടതാണ്. പിന്നീട് ലഭിക്കുന്ന പരാതികൾ സ്വീകരിക്കുന്നതല്ല.",
    },
    {
      title: "Taxes",
      body: "നിയമപ്രകാരമുള്ള എല്ലാ സർക്കാർ നികുതികളും (ജി.എസ്.ടി ഉൾപ്പെടെ) ഈ പദ്ധതിക്ക് ബാധകമാണ്.",
    },
    {
      title: "Maturity & Jewellery Collection",
      body: "പദ്ധതിയുടെ കാലാവധി പൂർത്തിയാകുമ്പോൾ, പദ്ധതി രേഖകളും സ്വന്തം തിരിച്ചറിയൽ കാർഡുമായി അംഗം നേരിട്ടെത്തി സ്വർണ്ണാഭരണങ്ങൾ കൈപ്പറ്റേണ്ടതാണ്.",
    },
    {
      title: "Transfer & Nominee",
      body: "ഇസ്കാൻ ജ്വല്ലേഴ്സ് മാനേജ്‌മെന്റിന്റെ അറിവോട് കൂടിയല്ലാതെ പദ്ധതി മറ്റൊരാളിലേക്ക് കൈമാറ്റം ചെയ്യാൻ പാടുള്ളതല്ല. അംഗങ്ങൾക്ക് അവരുടെ നോമിനിയെ നിശ്ചയിക്കാവുന്നതാണ്.",
    },
    {
      title: "Missed Instalments",
      body: "എല്ലാ മാസവും തവണകൾ കൃത്യമായി അടയ്ക്കാത്തവർക്ക് പദ്ധതിയുടെ ആനുകൂല്യങ്ങൾ ലഭിക്കുന്നതല്ല.",
    },
    {
      title: "Cash Refund",
      body: "സ്കീമിൽ അടച്ച തുക യാതൊരു കാരണവശാലും പണമായി തിരികെ നൽകുന്നതല്ല.",
    },
    {
      title: "Other Purchase Benefits",
      body: "ഈ പദ്ധതിയിലെ അംഗങ്ങൾക്ക് മറ്റ് പർച്ചേസുകളിൽ ആകർഷകമായ അധിക ആനുകൂല്യങ്ങൾ ലഭിക്കുന്നതാണ്.",
    },
    {
      title: "Final Condition",
      body: "പദ്ധതിയുമായി ബന്ധപ്പെട്ട എല്ലാ കാര്യങ്ങളിലും ഇസ്കാൻ ജ്വല്ലേഴ്സ് മാനേജ്‌മെന്റിന്റെ തീരുമാനം അന്തിമമായിരിക്കും.",
    },
  ],

  joinMessage: "Hello Iskan Jewellers, I'd like to join the Golden Goal Gold Saving Scheme.",
};
