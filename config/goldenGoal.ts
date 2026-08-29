/**
 * Golden Goal — Gold Saving Scheme content (single source of truth for /schemes).
 *
 * IMPORTANT — Terms & Conditions:
 * The exact approved poster / terms sheet was NOT supplied, so the entries
 * below are written ONLY from the details provided in the brief. Several
 * clauses reference an original wording that must be pasted in verbatim before
 * publishing. Each of those is flagged with a `NEEDS EXACT WORDING` comment.
 * Do not invent or alter the legal meaning — replace the placeholder text with
 * the approved clause when available.
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
  terms: SchemeTerm[];
  joinMessage: string;
}

export const GOLDEN_GOAL: GoldenGoal = {
  name: "Golden Goal",
  subtitle: "Gold Saving Scheme",
  malayalamTagline: "പണം മാറ്റട്ടെ... പരിശുദ്ധ സ്വർണ്ണമായി...!",
  intro:
    "An 11-month Gold Advance Booking Scheme to help you save towards your next gold jewellery purchase.",

  pills: ["11 Months", "₹500 Minimum", "Home Service", "50% Diamond Discount"],

  steps: [
    {
      number: "01",
      title: "Save",
      body: "Start your scheme with ₹500, or in multiples of ₹500.",
    },
    {
      number: "02",
      title: "Build Gold",
      body: "Your payment is converted into the corresponding gold weight according to the applicable gold rate on the payment date, and recorded in your passbook.",
    },
    {
      number: "03",
      title: "Redeem",
      body: "Complete the 11-month scheme and use your accumulated gold value towards eligible jewellery purchases.",
    },
  ],

  benefits: [
    {
      title: "Gold Rate Protection",
      body: "Your gold weight is recorded according to the applicable gold rate on each payment date.",
      icon: "shield",
    },
    {
      title: "Home Service",
      body: "Convenient payment collection through Iskan Jewellers executives.",
      icon: "home",
    },
    {
      title: "Multiple Payment Options",
      body: "Start with ₹500 and pay in multiples of ₹500, according to the scheme conditions.",
      icon: "coins",
    },
    {
      title: "Diamond Benefit",
      body: "Get 50% discount on making charges on eligible diamond jewellery purchases.",
      icon: "diamond",
    },
  ],

  importantToKnow: [
    "The scheme period is 11 months.",
    "Instalments must be paid correctly according to the scheme conditions to receive the applicable benefits.",
    "Payments and the corresponding gold weight should be checked and properly recorded in the passbook.",
    "The scheme amount is not returned as cash.",
  ],

  terms: [
    {
      title: "Scheme Duration & Payment",
      body: [
        "The scheme runs for a period of 11 months.",
        "The minimum instalment is ₹500.",
        "Payments must be made in multiples of ₹500.",
        // NEEDS EXACT WORDING: the specific payment restriction concerning the
        // first five months and subsequent payments (paste approved clause).
        "Instalments follow the payment structure set out in the scheme conditions, including the applicable rule for the first five months and subsequent payments.",
      ],
    },
    {
      title: "Gold Weight & Gold Rate",
      body: "Each payment is converted into the corresponding gold weight based on the applicable gold rate on the date of that payment, and the weight is recorded in your passbook.",
    },
    {
      // NEEDS EXACT WORDING: complete conditions for the gold jewellery
      // making-charge benefit (paste approved clause).
      title: "Scheme Benefits",
      body: "On completion of the scheme, the accumulated gold value may be used towards eligible gold jewellery purchases, subject to the making-charge benefit set out in the scheme conditions.",
    },
    {
      title: "Diamond Jewellery",
      body: "Scheme members receive a 50% discount on making charges on eligible diamond jewellery purchases, subject to the scheme conditions.",
    },
    {
      title: "Payment & Home Service",
      body: "Payments may be made at the showroom or collected through Iskan Jewellers executives as part of the home service, according to the scheme conditions.",
    },
    {
      title: "Passbook & Corrections",
      body: "Please ensure every payment and its corresponding gold weight is correctly entered in your passbook, and report any discrepancy to Iskan Jewellers promptly.",
    },
    {
      // NEEDS EXACT WORDING: original condition regarding applicable statutory
      // taxes (paste approved clause).
      title: "Taxes",
      body: "Applicable statutory taxes, if any, are charged as per prevailing regulations.",
    },
    {
      // NEEDS EXACT WORDING: full maturity conditions — required documents,
      // identification and collection by the registered member.
      title: "Maturity & Jewellery Collection",
      body: "On maturity, jewellery may be collected by the registered member on presentation of the passbook and valid identification, as per the scheme conditions.",
    },
    {
      // NEEDS EXACT WORDING: original conditions regarding transfer and
      // nomination (paste approved clause).
      title: "Transfer & Nominee",
      body: "Transfer of the scheme and nomination are subject to the scheme conditions.",
    },
    {
      // NEEDS EXACT WORDING: original condition regarding missed / incorrect
      // instalments and loss of scheme benefits (paste approved clause).
      title: "Missed Instalments",
      body: "Missed or incorrect instalments may result in the loss of the applicable scheme benefits, as per the scheme conditions.",
    },
    {
      title: "Cash Refund",
      body: "The scheme amount will not be returned as cash.",
    },
    {
      // NEEDS EXACT WORDING: original condition regarding additional benefits
      // available to scheme members (paste approved clause).
      title: "Other Purchase Benefits",
      body: "Additional benefits available to scheme members are as specified in the scheme conditions.",
    },
    {
      title: "Final Condition",
      body: "In all matters relating to the scheme, the decision of Iskan Jewellers management shall be final.",
    },
  ],

  joinMessage:
    "Hello Iskan Jewellers, I'd like to join the Golden Goal Gold Saving Scheme.",
};
