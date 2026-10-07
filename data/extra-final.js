window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  { id: "MIXB-001", domain: 1, topic: "Private equity funds: why a long lock-up does not make illicit money low risk (Treasury IA Risk Assessment 2024)", hy: false, difficulty: "hard",
    q: "Calloway Private Bank holds custody assets for Northgate Capital Partners Fund III, a private equity fund advised by an exempt reporting adviser. A new limited partner commits USD 25 million through Orrin Custody Services, a custodian in a small offshore centre. Orrin is named as the investor of record and declines to name its underlying client, citing a confidentiality agreement. The fund has a ten-year term and allows no withdrawals before exit events. The fund recently moved offices and changed auditors. The relationship manager argues that the money laundering risk is low, because the capital will be locked up for a decade and Calloway screens every wire it receives for the fund. According to Treasury's 2024 Investment Adviser Risk Assessment, which assessment is MOST accurate?",
    options: [
      "The risk is low, because private equity funds allow no early withdrawals and so give launderers no way to get value back out",
      "The risk sits mainly at the eventual distribution, so enhanced review can wait until the fund makes its first exit payment",
      "The lock-up deters only criminals who need quick access; the nominee custodian hiding the real investor is the key risk for long-horizon illicit actors",
      "The risk is covered, because the custodian bank's wire screening gives it full knowledge of each limited partner behind the fund"
    ],
    answer: [2],
    explanation: "Treasury's 2024 Investment Adviser Risk Assessment says that lock-ups and no-withdrawal terms in private equity and venture funds may deter criminals who need immediate access to their proceeds, but are unlikely to deter illicit actors who seek stable returns over a medium- to long-term horizon. It names nominee arrangements, where an intermediary such as an overseas custodian is the nominal investor and shields the real one, as a key vulnerability. The runner-up, low risk because of the lock-up, is exactly the reasoning Treasury rejects. Treasury also notes that custodians and other intermediaries usually act on instructions and lack independent knowledge of the underlying investors, so wire screening does not reveal who the limited partner really is. The office move and auditor change are decoys.",
    source: [{ label: "US Treasury – 2024 Investment Adviser Risk Assessment (Feb 2024), section 3", url: "https://home.treasury.gov/system/files/136/US-Sectoral-Illicit-Finance-Risk-Assessment-Investment-Advisers.pdf" }] },

  { id: "MIXB-002", domain: 3, topic: "US CDD Rule: pooled investment vehicles, nonprofits and general partners (31 CFR 1010.230(d)-(e))", hy: true, difficulty: "hard",
    q: "In October 2026, Tidewater Bank opens accounts for three new legal entity clients. Larkspur Credit Opportunities LP is a private fund advised by an SEC-registered investment adviser, and one individual investor holds 32% of its limited partnership interests. Brightwater Food Pantry Inc. is a nonprofit corporation whose organizational documents are filed with the state. Kestrel Marine LP is an operating partnership with no partner holding 25% or more. Its general partner is Kestrel GP LLC, which is run by its managing member, Ines Varga. Which statements about the US beneficial ownership requirements are CORRECT? (Choose two.)",
    options: [
      "Larkspur needs no beneficial owner identification under the rule, because a pooled vehicle advised by an SEC-registered adviser is excluded",
      "Larkspur must identify its 32% investor, because a limited partnership is created by filing a public document with a state",
      "Brightwater must identify every director as a beneficial owner, because a nonprofit has no equity owners to identify",
      "Kestrel must identify one individual, such as Ines Varga, under the control prong even though no partner reaches 25%",
      "Kestrel may list Kestrel GP LLC itself as its control person, because the rule names a general partner as an example"
    ],
    answer: [0, 3],
    explanation: "Under 31 CFR 1010.230(e)(2)(xi), a pooled investment vehicle operated or advised by an excluded financial institution, such as an SEC-registered investment adviser (e)(2)(v), is not a legal entity customer, so Larkspur's 32% investor need not be identified under the rule. The bank may still collect this information on a risk basis. The control prong in (d)(2) always requires a single individual with significant responsibility to control, manage or direct the entity. The examples include a 'General Partner' or 'Managing Member', but the person named must be an individual, so Ines Varga qualifies and the GP LLC itself does not. A nonprofit corporation is subject only to the control prong under (e)(3)(ii), so one individual is identified, not every director.",
    source: [{ label: "eCFR – 31 CFR 1010.230: beneficial ownership requirements for legal entity customers", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-B/section-1010.230" }] },

  { id: "MIXB-003", domain: 3, topic: "Unfiled CTRs discovered: FinCEN backfiling determination and confirmation letter", hy: false, difficulty: "hard",
    q: "During its 2026 independent test, Ridgefield Savings Bank finds that a core-system upgrade in June 2025 mis-coded cash-in totals for business accounts. As a result, no CTRs were filed for 14 months on about 310 reportable cash deposits by Marlow Grocers, a long-standing customer that would qualify for a Phase II exemption. The deposits match the grocer's known business, and nothing suggests the activity is suspicious. The bank fixed the coding on 2 September 2026, and the board has been informed. The BSA officer must now decide how to deal with the missing reports. Which course of action follows FinCEN's instructions?",
    options: [
      "File a Designation of Exempt Person for Marlow Grocers today, which retroactively covers the 14 months of unfiled CTRs",
      "Request a FinCEN backfiling determination, file as FinCEN directs, then send FinCEN a confirming letter copied to the bank's examiners",
      "File SARs instead of CTRs on the missed deposits, because a CTR can no longer be filed once its 15-day deadline has passed",
      "File all missed CTRs at once as ordinary initial reports, and simply mention the gap to examiners at the next examination"
    ],
    answer: [1],
    explanation: "FinCEN's instructions for backfiling and amending CTRs (updated March 2018) set out a process run through a FinCEN determination. Reports are filed within 60 calendar days of receiving FinCEN's determination, flagged as 'FinCEN directed Backfiling'. The bank then sends FinCEN a letter, copied to its federal and state examiners, listing the BSA IDs, dates and amounts and explaining the error and the corrective action taken. The runner-up, filing the reports as ordinary initial CTRs and telling examiners later, skips the determination, the backfiling flag and the confirming letter. A DOEP can be filed in place of backfiling only if FinCEN grants that relief, and a SAR does not replace a CTR, particularly when nothing is suspicious.",
    source: [
      { label: "FinCEN – Instructions for Backfiling and Amending Currency Transaction Reports (updated 5 March 2018)", url: "https://www.fincen.gov/system/files/shared/BackfilingandAmendingCTRs.pdf" },
      { label: "FinCEN – Filing information (link to the backfile/amend CTR instructions)", url: "https://www.fincen.gov/resources/filing-information" }
    ] },

  { id: "MIXB-004", domain: 3, topic: "CIP: who is the 'customer' for accounts opened for a minor or an unincorporated club (31 CFR 1020.100(b))", hy: false, difficulty: "hard",
    q: "On 14 September 2026, Agnes Holloway opens a savings account at Pinecrest Community Bank for her nine-year-old grandson, Theo. Agnes has held a checking account there since 2011, and the bank verified her identity when she opened it. That afternoon, Rafael Ortega, newly elected as volunteer treasurer, opens an account for the Elm Street Youth Soccer Club. The club is an unincorporated association with no legal personality and about 60 member families. The club's previous treasurer, a long-time bank customer, is moving abroad, and Theo's father lives in another state and will make occasional deposits. Under the US CIP rule, whose identity MUST the bank verify for these two new accounts?",
    options: [
      "Theo and the soccer club, because they are the persons for whose benefit the two accounts are opened",
      "Agnes and Rafael, because each individual who opens an account for a minor or a non-legal-person entity is the customer",
      "Theo's father, Rafael and each member family, because they are the people who will fund the two accounts",
      "Only Rafael, because Agnes is an existing customer whose identity the bank reasonably believes it knows"
    ],
    answer: [3],
    explanation: "Under 31 CFR 1020.100(b)(1)(ii), the CIP customer is the individual who opens a new account for someone who lacks legal capacity, such as a minor, or for an entity that is not a legal person, such as a civic club. That makes Agnes and Rafael the customers, not Theo or the club. However, 1020.100(b)(2)(iii) excludes a person who already has an account with the bank, provided the bank reasonably believes it knows that person's true identity. Agnes was verified in 2011, so only Rafael needs CIP verification. The runner-up names the right two people but misses the existing-customer exclusion. The people who fund the accounts and the former treasurer are decoys.",
    source: [{ label: "eCFR – 31 CFR 1020.100: definitions (CIP 'customer')", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-A/section-1020.100" }] },

  { id: "MIXB-005", domain: 4, topic: "SAR after a National Security Letter: no reference to the NSL anywhere in the report", hy: true, difficulty: "hard",
    q: "In August 2026, Harbourline Bank receives a Right to Financial Privacy Act National Security Letter, signed by an FBI Special Agent in Charge, seeking records on its customer Selim Kova. Investigator Dana Price gathers the records and reviews them. Over five weeks, Kova made 14 cash deposits of USD 8,500 to 9,800 at four branches and sent USD 118,000 in wires to a trading company in a third country that has no apparent link to his catering business. His account was opened online, and his address changed last year. Price's draft SAR narrative begins: 'Following receipt of an FBI National Security Letter dated 4 August 2026, a review identified...'. What should the BSA officer do?",
    options: [
      "File the SAR on the deposits and wires, but remove every reference to the National Security Letter, including from the narrative",
      "File the SAR as drafted, because citing the National Security Letter helps law enforcement link the report to its own case",
      "Do not file a SAR, because the FBI already holds the records and a SAR would only duplicate what it knows",
      "File SARs on every customer named in a National Security Letter, because receipt of the letter alone requires a report"
    ],
    answer: [0],
    explanation: "FinCEN's guidance in SAR Activity Review Issue 8 says that receiving a National Security Letter does not by itself require a SAR. The bank must assess the totality of its information, and here the structured cash deposits and the unexplained wires meet the SAR criteria on their own. If a SAR is filed, it must make no reference to the receipt or existence of the NSL in any part of the report, including the narrative, and should describe only the underlying facts and activity. NSLs are highly confidential, and 12 U.S.C. 3414 bars disclosing them. The runner-up, citing the letter to help law enforcement, is exactly what the guidance prohibits. Law enforcement's existing knowledge does not remove the bank's own SAR obligation.",
    source: [{ label: "FinCEN – SAR Activity Review, Issue 8 (April 2005), pp. 35-37: National Security Letters and Suspicious Activity Reporting", url: "https://www.fincen.gov/system/files/shared/sar_tti_08.pdf" }] }
]);
