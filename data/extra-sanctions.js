window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  // ---------------- OFAC 50 Percent Rule: calculations and limits ----------------
  {
    id: "SANC-001", difficulty: "hard", domain: 2, topic: "OFAC 50 percent rule – multi-layer ownership", hy: true,
    q: "A US bank is onboarding Target Co. Its ownership is: Holding A owns 40%, SDN Y (designated under a counter-narcotics program) owns 10%, and unrelated private investors own the remaining 50%. Holding A is not on any list, but 60% of it is owned by SDN X, who is designated under a Russia-related program. Target Co. has a long audited history, and its CEO is a well-known industry figure. How should the bank treat Target Co. under OFAC's 50 Percent Rule?",
    options: [
      "Blocked, because Holding A is itself blocked, and its 40% plus Y's 10% equals 50% in the aggregate",
      "Not blocked, because X's indirect stake is only 24% (60% of 40%), which with Y's 10% totals 34%",
      "Not blocked, because the stakes of persons designated under different OFAC programs are not aggregated",
      "Blocked only if OFAC confirms in writing that Holding A's 40% stake should be attributed to X"
    ],
    answer: [0],
    explanation: "Under OFAC FAQ 401, an entity owned 50% or more by a blocked person is itself blocked, and its whole stake in a lower-tier entity counts as a blocked person's stake. Holding A (60% owned by X) is blocked, so its full 40% counts, and with Y's 10% the blocked persons own 50% of Target Co. The runner-up multiplies percentages through the chain (60% x 40% = 24%), but OFAC does not dilute ownership held through an entity that is itself blocked. FAQ 399 confirms that stakes of persons blocked under different programs are aggregated, and no OFAC confirmation is needed because the rule operates automatically.",
    source: [
      { label: "OFAC FAQ 401 – indirect ownership examples under the 50 Percent Rule", url: "https://ofac.treasury.gov/faqs/401" },
      { label: "OFAC FAQ 399 – aggregation, including across different sanctions programs", url: "https://ofac.treasury.gov/faqs/399" }
    ]
  },
  {
    id: "SANC-002", difficulty: "hard", domain: 4, topic: "Ownership analysis – indirect stakes through non-blocked entities", hy: false,
    q: "A sanctions analyst maps a customer's ownership chain. SDN X owns 50% of Entity A and 25% of Entity B. Entity A and Entity B each own 25% of Entity C, the bank's prospective customer. The other 50% of C is held by an unrelated pension fund. No other owner is sanctioned. Which conclusions are correct under OFAC's 50 Percent Rule? (Choose two.)",
    options: [
      "Entity A is blocked, because SDN X owns 50% of it",
      "Entity C is blocked, because its two corporate shareholders together own 50% of it",
      "Entity B is blocked, because SDN X holds a significant 25% stake in it",
      "Entity C is not blocked, but the bank should proceed with caution given the SDN-linked stakes",
      "Entity C is blocked, because SDN X's direct and indirect interests in C add up to 50%"
    ],
    answer: [0, 3],
    explanation: "This mirrors Example 4 in OFAC FAQ 401. Entity A is blocked (50% owned by X), so its 25% stake in C counts. Entity B is only 25% owned by X, so it is not blocked, and X is not treated as owning any part of C through B. Blocked ownership of C is therefore 25%, below the threshold. The tempting error is adding A's and B's stakes, but only stakes held by blocked persons are aggregated. OFAC FAQ 398 urges caution with entities in which blocked persons hold significant stakes below 50%.",
    source: [
      { label: "OFAC FAQ 401 – Example 4: stake held through a non-blocked entity does not count", url: "https://ofac.treasury.gov/faqs/401" },
      { label: "OFAC FAQ 398 – caution with significant ownership below 50%", url: "https://ofac.treasury.gov/faqs/398" }
    ]
  },
  {
    id: "SANC-003", difficulty: "hard", domain: 2, topic: "OFAC 50 percent rule – control is not ownership", hy: true,
    q: "A US manufacturer wants to sign a supply contract with Company Z, a foreign company. An SDN owns 20% of Z, chairs its board and serves as its CEO. The remaining 80% is widely held by non-sanctioned investors. Z's draft contract is to be signed on its behalf by the SDN. Z is not on the SDN List. Which statement BEST reflects OFAC guidance?",
    options: [
      "Z is blocked, because an SDN who chairs the board and runs the company controls it",
      "Z is not blocked, but the US company may not enter a contract that the SDN signs for Z",
      "Z is not blocked, and the contract may be signed by any authorized Z officer, including the SDN",
      "Z is blocked only for contracts above the applicable schedule amount in OFAC's guidelines"
    ],
    answer: [1],
    explanation: "OFAC FAQ 398 states that the 50 Percent Rule covers ownership, not control: an entity controlled by, but not 50% or more owned by, blocked persons is not automatically blocked. OFAC may still designate it. FAQ 400 adds that dealings involving a blocked person are prohibited even when that person acts for a non-blocked entity, so US persons may not, for example, sign contracts signed by the SDN. The runner-up (treating Z as blocked because of control) reflects the EU and UK control tests, not OFAC's rule.",
    source: [
      { label: "OFAC FAQ 398 – the 50 Percent Rule covers ownership, not control", url: "https://ofac.treasury.gov/faqs/398" },
      { label: "OFAC FAQ 400 – no contracts signed by a blocked individual", url: "https://ofac.treasury.gov/faqs/400" }
    ]
  },
  {
    id: "SANC-004", difficulty: "hard", domain: 2, topic: "US, EU and UK ownership tests – aggregation", hy: true,
    q: "A global bank's customer, Company K, is owned 30% by Person A and 25% by Person B. A and B are both designated by the US (SDN List), the EU and the UK. They are unrelated, and there is no joint arrangement or other link between their holdings. Neither A nor B has board appointment rights or other means of control. Which statement BEST describes K's status in September 2026?",
    options: [
      "K is caught in all three jurisdictions, because each one aggregates the stakes of designated persons",
      "K is caught only in the UK and EU, because OFAC counts only a single SDN holding 50% or more",
      "K is caught under OFAC rules and the EU guidance, but the UK test would not aggregate the two stakes",
      "K is not caught anywhere, because no single designated person holds 50% or more of K"
    ],
    answer: [2],
    explanation: "OFAC FAQ 399 aggregates stakes of blocked persons, so 55% makes K blocked. The EU Council's July 2024 Best Practices use a 50%-or-more test and state that aggregated ownership should be taken into account (30% + 25% example). OFSI's general guidance says it would not aggregate different designated persons' holdings unless there is a joint arrangement or one controls the other's rights. The runner-up assumes the UK has aligned with the US and EU: OFSI's February 2026 call for evidence explored this, but its guidance (updated May 2026) still describes the non-aggregation approach.",
    source: [
      { label: "OFSI – UK financial sanctions general guidance, ch. 4 Ownership and control (no aggregation)", url: "https://www.gov.uk/government/publications/financial-sanctions-general-guidance/uk-financial-sanctions-general-guidance" },
      { label: "Council of the EU – Best Practices for the effective implementation of restrictive measures (11623/24), paras 63-64", url: "https://data.consilium.europa.eu/doc/document/ST-11623-2024-INIT/en/pdf" }
    ]
  },
  {
    id: "SANC-005", difficulty: "hard", domain: 2, topic: "UK ownership and control – the 'more than 50%' threshold", hy: false,
    q: "A UK bank finds that a corporate customer is owned exactly 50% by a person designated under the UK's Russia regime. The other 50% is owned by an unrelated, non-designated investor. The designated person's shareholder agreement gives him the right to appoint three of the company's five directors. What is the correct analysis under the UK regulations?",
    options: [
      "Not owned or controlled, because a 50% stake is below the UK's 'more than 50%' ownership threshold",
      "Owned, because the UK treats a stake of 50% or more as ownership, as OFAC does",
      "Not owned or controlled, provided the other investor is not a designated person",
      "Controlled, because the ownership limb is not met but the person can appoint a board majority"
    ],
    answer: [3],
    explanation: "Regulation 7 of the Russia (Sanctions) (EU Exit) Regulations 2019, as explained in OFSI's guidance, treats an entity as owned or controlled if a designated person holds more than 50% of the shares or voting rights, or has the right to appoint or remove a majority of the board, or it is reasonable to expect that they could ensure the entity's affairs are run according to their wishes. Exactly 50% does not meet the ownership limb, which is where UK and US rules differ, but the board-appointment right satisfies the control limb. Stopping at the ownership limb is the runner-up error.",
    source: [
      { label: "Russia (Sanctions) (EU Exit) Regulations 2019, reg. 7 – meaning of owned or controlled", url: "https://www.legislation.gov.uk/uksi/2019/855/regulation/7" },
      { label: "OFSI – UK financial sanctions general guidance, ch. 4 (more than 50%; board appointment; control)", url: "https://www.gov.uk/government/publications/financial-sanctions-general-guidance/uk-financial-sanctions-general-guidance" }
    ]
  },

  // ---------------- OFAC licensing ----------------
  {
    id: "SANC-006", difficulty: "hard", domain: 2, topic: "OFAC general vs. specific licenses", hy: true,
    q: "A US company plans a transaction that falls squarely within an OFAC general license published on OFAC's website. The general license requires users to file a report with OFAC within a set period. The company's counsel suggests also applying for a specific license \"to be safe\", and the operations team asks whether it can skip the report because the activity is already authorized. What is the BEST advice?",
    options: [
      "Apply for a specific license first, because a general license only takes effect once OFAC confirms eligibility",
      "Rely on the general license without applying, and file the required report, because failure may nullify the authorization",
      "Rely on the general license and skip the report, because general licenses are self-executing and public",
      "Apply for a specific license, because OFAC grants one on request to any person relying on a general license"
    ],
    answer: [1],
    explanation: "OFAC FAQ 74 describes general licenses as public and self-executing: persons whose transactions meet the terms need no further authorization. Under 31 CFR 501.801(a), OFAC's policy is not to grant specific licenses for transactions covered by a general license, and failure to file reports that a general license requires may nullify the authorization and lead to apparent violations. The runner-up is right that no application is needed, but wrong that reporting conditions can be ignored. Specific licenses are non-public and issued to a particular person in response to an application.",
    source: [
      { label: "OFAC FAQ 74 – general licenses (public, self-executing) vs. specific licenses", url: "https://ofac.treasury.gov/faqs/74" },
      { label: "31 CFR 501.801 – licensing; no specific licenses where a general license applies; unfiled reports may nullify authorization", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-V/part-501/subpart-E/section-501.801" }
    ]
  },

  // ---------------- Sectoral sanctions (SSI) ----------------
  {
    id: "SANC-007", difficulty: "hard", domain: 2, topic: "Sectoral sanctions – SSI directives", hy: false,
    q: "A US bank deals with a Russian energy company that is subject only to Directive 2 under E.O. 13662 (listed on the SSI List). It is not on the SDN List and is not subject to any other sanctions. Which activities are permissible for the bank? (Choose two.)",
    options: [
      "Confirming a new 90-day letter of credit on which the company is the applicant",
      "Buying a 120-day note issued by the company in 2026",
      "Maintaining a correspondent account and clearing USD payments for the company that involve no prohibited debt",
      "Acting as advising bank on a letter of credit on which the company is the beneficiary",
      "Blocking the company's funds and filing a blocking report within 10 business days"
    ],
    answer: [2, 3],
    explanation: "Directive 2 (31 CFR 589.203) prohibits dealing in new debt of the listed energy companies with a maturity longer than 60 days if issued on or after 28 November 2017. A 90-day letter of credit where the SSI entity is the applicant, or a 120-day note, is an extension of such credit (FAQ 395). FAQ 371 allows correspondent accounts and USD clearing that do not involve prohibited debt. FAQ 395 allows dealing in letters of credit where the SSI entity is the beneficiary, because that is not credit to it. SSI directives are not blocking sanctions, so the company's property is not blocked.",
    source: [
      { label: "OFAC FAQ 371 – SSI debt/equity scope; correspondent accounts and USD clearing permitted", url: "https://ofac.treasury.gov/faqs/371" },
      { label: "OFAC FAQ 395 – letters of credit involving SSI entities (applicant vs. beneficiary)", url: "https://ofac.treasury.gov/faqs/395" }
    ]
  },

  // ---------------- Secondary sanctions: E.O. 14114 ----------------
  {
    id: "SANC-008", difficulty: "medium", domain: 1, topic: "Secondary sanctions risk for foreign banks (E.O. 14114)", hy: true,
    q: "A bank in a Central Asian country, with no US branches, processes local-currency payments for a trading company. The company ships CNC machine tools and bearings to buyers in Russia that operate in the manufacturing sector. None of the parties is on a sanctions list. The bank's CEO believes US sanctions cannot reach the bank because no US dollars or US persons are involved. What is the MOST significant risk the CEO is overlooking?",
    options: [
      "A FinCEN penalty for failing to file CTRs on the trading company's transactions",
      "A requirement to block the trading company's funds under OFAC's 50 Percent Rule",
      "Automatic criminal liability for the bank's directors under the EU's Article 8a best-efforts duty",
      "OFAC may block the bank or cut off its US correspondent access for facilitating trade with Russia's military-industrial base"
    ],
    answer: [3],
    explanation: "E.O. 14114 (December 2023) amended E.O. 14024 to allow sanctions on foreign financial institutions that conduct or facilitate significant transactions involving Russia's military-industrial base. This includes sectors such as manufacturing, and the supply of critical items such as machine tools and bearings. OFAC may then block the FFI or prohibit or restrict its US correspondent or payable-through accounts (FAQs 1147-1149). Secondary sanctions risk does not require a USD nexus. None of the parties is blocked, so the 50 Percent Rule does not apply, and CTRs and the EU Article 8a duty are irrelevant to this bank.",
    source: [
      { label: "OFAC FAQ 1147 – E.O. 14114 amends E.O. 14024: sanctions on FFIs", url: "https://ofac.treasury.gov/faqs/1147" },
      { label: "OFAC FAQ 1148 – activities exposing FFIs to sanctions (critical items such as machine tools, bearings)", url: "https://ofac.treasury.gov/faqs/1148" }
    ]
  },
  {
    id: "SANC-009", difficulty: "hard", domain: 3, topic: "E.O. 14024 section 11 – correspondent account prohibitions vs. blocking", hy: false,
    q: "A US bank maintains a correspondent account for a foreign bank. OFAC imposes sanctions on the foreign bank under subsection 11(b)(i) of E.O. 14024, which prohibits the opening or maintaining of US correspondent or payable-through accounts for it. It does not block the bank. The relationship manager says the respondent has a clean compliance record and wants time to appeal. What should the US bank do?",
    options: [
      "Block all funds in the correspondent account and report them to OFAC within 10 business days",
      "Close the correspondent account, using the general license that authorizes wind-down closure within 10 days",
      "Keep the account open but restrict it to outgoing payments until the respondent's appeal is decided",
      "Reject each incoming payment and file a rejected transaction report, while leaving the account open"
    ],
    answer: [1],
    explanation: "OFAC FAQ 1149 explains that for FFIs sanctioned under subsection 11(b)(i), US financial institutions must close any correspondent or payable-through account held for them. Russia-related General License 84 authorizes the closure within 10 days, subject to conditions. Blocking and reporting apply only when the FFI is sanctioned under subsection 11(b)(ii), so the runner-up confuses the two types of measure. An appeal does not suspend the prohibition, and the account may not stay open.",
    source: [
      { label: "OFAC FAQ 1149 – consequences of E.O. 14024 s.11 sanctions; GL 84 closure within 10 days", url: "https://ofac.treasury.gov/faqs/1149" }
    ]
  },

  // ---------------- OFAC Enforcement Guidelines ----------------
  {
    id: "SANC-010", difficulty: "hard", domain: 2, topic: "OFAC Enforcement Guidelines – base penalty matrix", hy: true,
    q: "A US company finds that its foreign sales office accepted one $80,000 payment for a customer later confirmed to be an SDN. It promptly makes a voluntary self-disclosure to OFAC. OFAC concludes that the case is not egregious, and the IEEPA statutory maximum applies. Under OFAC's Economic Sanctions Enforcement Guidelines, what is the base penalty amount before adjustment for General Factors?",
    options: [
      "$40,000, one-half of the transaction value",
      "$100,000, the applicable schedule amount",
      "$188,850, the maximum base amount per violation",
      "$377,700, the IEEPA statutory maximum"
    ],
    answer: [0],
    explanation: "Appendix A to 31 CFR Part 501 sets a base penalty matrix. For a non-egregious case with voluntary self-disclosure, the base is one-half of the transaction value, capped at $188,850 per violation, so $40,000 here. The runner-up, $100,000, is the applicable schedule amount for a $50,000-$100,000 transaction, which applies only to a non-egregious case without VSD. Egregious cases start at one-half of the statutory maximum (with VSD) or the full statutory maximum (without VSD). The dollar caps are adjusted for inflation.",
    source: [
      { label: "31 CFR Part 501, App. A – Economic Sanctions Enforcement Guidelines (base category calculation; schedule amounts)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-V/part-501/appendix-Appendix%20A%20to%20Part%20501" }
    ]
  },
  {
    id: "SANC-011", difficulty: "hard", domain: 3, topic: "OFAC voluntary self-disclosure – when it does not count", hy: false,
    q: "In March, Bank B blocked and reported to OFAC a payment that Company C tried to send to an SDN. C did not know about the blocking report. In May, after an internal audit, C's senior management authorized a detailed disclosure to OFAC covering that payment and six similar payments that had gone through other banks. C then gave OFAC extensive additional documents. How is OFAC MOST likely to treat C's disclosure under its Enforcement Guidelines?",
    options: [
      "As a voluntary self-disclosure, because C did not know about Bank B's report when it disclosed",
      "As a voluntary self-disclosure, because it was authorized by senior management and was complete",
      "As not a voluntary self-disclosure, and with no credit for cooperation, because a third party reported first",
      "As not a voluntary self-disclosure, but C may still earn a cooperation reduction of 25 to 40 percent"
    ],
    answer: [3],
    explanation: "Under Appendix A to 31 CFR Part 501, a notification is not a voluntary self-disclosure if a third party was required to notify OFAC, and did so, because it blocked or rejected the transaction or a substantially similar one. This applies regardless of when OFAC received the notice and whether the subject knew about it, which defeats the runner-up. The Guidelines still provide that substantial cooperation without VSD, including where a third party reported but the subject provides substantial additional information, generally reduces the base penalty by 25-40%.",
    source: [
      { label: "31 CFR Part 501, App. A – definition of voluntary self-disclosure; cooperation adjustment (25-40%)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-V/part-501/appendix-Appendix%20A%20to%20Part%20501" }
    ]
  },
  {
    id: "SANC-012", difficulty: "hard", domain: 2, topic: "OFAC Enforcement Guidelines – egregiousness determination", hy: false,
    q: "OFAC is deciding whether a bank's apparent violations should be treated as an \"egregious case\" for penalty purposes. Under the Enforcement Guidelines, which two General Factors receive PARTICULAR emphasis in that determination? (Choose two.)",
    options: [
      "Harm to sanctions program objectives",
      "Willful or reckless violation of law",
      "Remedial response after discovery",
      "Awareness of the conduct at issue",
      "Cooperation with OFAC's investigation"
    ],
    answer: [1, 3],
    explanation: "Appendix A to 31 CFR Part 501 says that, in deciding whether a case is egregious, OFAC generally gives substantial weight to General Factors A (willful or reckless violation), B (awareness of conduct), C (harm to sanctions program objectives) and D (individual characteristics), with particular emphasis on A and B. Harm to program objectives is the tempting runner-up: it carries substantial weight but not the particular emphasis. Remedial response and cooperation are General Factors that mainly affect penalty adjustment, not the egregiousness call.",
    source: [
      { label: "31 CFR Part 501, App. A, section V.B.1 – egregious case determination", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-V/part-501/appendix-Appendix%20A%20to%20Part%20501" }
    ]
  },
  {
    id: "SANC-013", difficulty: "hard", domain: 2, topic: "Statute of limitations for IEEPA/TWEA violations (10 years)", hy: true,
    q: "In September 2026, OFAC is investigating three separate apparent violations of IEEPA-based sanctions by the same company. Violation A was completed on 3 February 2017, Violation B on 10 March 2019 and Violation C on 15 June 2019. None of them is a continuing violation, and OFAC has not yet issued a pre-penalty notice or a finding of violation. Which of these violations may OFAC still pursue through a civil enforcement action?",
    options: [
      "Only Violation C, because only it was not yet time-barred when the 10-year limit took effect",
      "The March 2019 and June 2019 violations, as both fall within 10 years of September 2026",
      "None, because the five-year limitations period has expired for all three violations",
      "All three, because the 10-year limit applies retroactively to every past violation"
    ],
    answer: [0],
    explanation: "The 21st Century Peace through Strength Act, signed on 24 April 2024, extended the limitations period for civil and criminal IEEPA and TWEA violations from five to 10 years. OFAC's July 2024 guidance says the new period applies only to violations not already time-barred at enactment, so OFAC may act on violations whose latest date was after 24 April 2019. Violation B had been time-barred since March 2024 under the old five-year rule and is not revived, which defeats the runner-up. A pre-penalty notice or finding of violation counts as starting an action.",
    source: [
      { label: "OFAC Guidance on Extension of Statute of Limitations (July 22, 2024)", url: "https://ofac.treasury.gov/media/933056/download?inline=" }
    ]
  },

  // ---------------- Blocked property: reporting and handling ----------------
  {
    id: "SANC-014", difficulty: "hard", domain: 3, topic: "Blocked property reports – loans and unblocking", hy: false,
    q: "A US bank's long-standing customer is designated as an SDN. The customer has a deposit account with $40,000 and an outstanding loan with a balance owed to the bank of $250,000. Months later, OFAC issues a specific license authorizing release of part of the deposit to pay legal fees, and the bank makes the payment. Which statements about the bank's reporting obligations are correct? (Choose two.)",
    options: [
      "The loan is reported in the initial blocking report as -$250,000 to reflect the negative balance",
      "No report is needed for the release, because OFAC itself issued the license authorizing it",
      "The loan is reported as $0.00, with the amount owed shown in a narrative description",
      "A report of the unblocking must be filed within 10 business days after the funds are released",
      "Blocked accounts need only be listed in the annual report, as long as it is filed by 30 September"
    ],
    answer: [2, 3],
    explanation: "Under 31 CFR 501.603(b)(1), property with a negative balance, such as an outstanding loan, is reported as $0.00, with the amount owed described in the narrative. Section 501.603(b)(3) requires a report within 10 business days of blocked property being unblocked or transferred, including under a license, with narrow exceptions such as normal service charges. Initial blocking reports are due within 10 business days of blocking, and the annual report (holdings as of 30 June, due 30 September) is in addition, not instead. Both reports must be filed through the OFAC Reporting System.",
    source: [
      { label: "31 CFR 501.603 – initial, annual and unblocking reports; negative-balance property reported as $0.00", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-V/part-501/subpart-C/section-501.603" }
    ]
  },
  {
    id: "SANC-015", difficulty: "medium", domain: 3, topic: "Blocked funds – interest-bearing blocked accounts", hy: false,
    q: "A US bank blocks $1.2 million belonging to a North Korea-related SDN and moves it into a non-interest-bearing suspense account. The treasury department proposes instead to invest the funds in a two-year certificate of deposit paying a market rate. Which approach meets OFAC's requirements?",
    options: [
      "Keep the funds in the suspense account, because blocked funds must not earn income for a sanctioned person",
      "Invest the funds in the two-year certificate of deposit, as long as the rate is a market rate",
      "Transfer the funds to OFAC's Treasury account until the SDN is removed from the list",
      "Hold them in a blocked interest-bearing account at a commercially reasonable rate, with maturities of 180 days or less"
    ],
    answer: [3],
    explanation: "Program regulations such as 31 CFR 510.203 require US persons holding blocked funds to place them in a blocked interest-bearing account in the United States. The account must earn a commercially reasonable rate, meaning the rate offered to other depositors on deposits of comparable size and maturity, and blocked funds may not be invested in instruments maturing in more than 180 days. The interest stays blocked, so a non-interest suspense account is not allowed, and a two-year CD breaches the maturity limit. Blocked funds are not transferred to OFAC.",
    source: [
      { label: "31 CFR 510.203 – holding blocked funds in interest-bearing accounts (North Korea Sanctions Regulations)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-V/part-510/subpart-B/section-510.203" }
    ]
  },

  // ---------------- Facilitation and US-owned foreign subsidiaries ----------------
  {
    id: "SANC-016", difficulty: "hard", domain: 2, topic: "Facilitation and US-owned foreign subsidiaries (Iran)", hy: true,
    q: "A US-headquartered engineering group owns 100% of a German subsidiary. The subsidiary has been offered a contract to supply pumps to a privately owned Iranian company, which is not on the SDN List. The German managing director asks the group's US-based general counsel to approve the deal, noting that no US-origin goods or US dollars are involved. What is the correct analysis under the Iranian Transactions and Sanctions Regulations?",
    options: [
      "The deal is permitted if US personnel recuse themselves, because the subsidiary is a non-US person",
      "The subsidiary itself is barred, and the US counsel's approval would also be prohibited facilitation",
      "The deal is permitted because it involves no US-origin goods, no US dollars and no SDN",
      "The subsidiary may proceed, but it must report the transaction to OFAC within 10 business days"
    ],
    answer: [1],
    explanation: "Under 31 CFR 560.215, an entity owned or controlled by a US person (for example, 50% or more of the equity) and established outside the United States may not knowingly engage in transactions with Iran that would be prohibited for a US person. Separately, 31 CFR 560.208 bars any US person, wherever located, from approving or facilitating a foreign person's transaction that would be prohibited if done by a US person. Recusal is the tempting runner-up, but for Iran the US-owned subsidiary is itself covered by the prohibitions, so recusal cannot make the deal lawful. No reporting route authorizes the deal.",
    source: [
      { label: "31 CFR 560.215 – prohibitions on foreign entities owned or controlled by US persons", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-V/part-560/subpart-B/section-560.215" },
      { label: "31 CFR 560.208 – prohibited facilitation by US persons", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-V/part-560/subpart-B/section-560.208" }
    ]
  },
  {
    id: "SANC-017", difficulty: "medium", domain: 3, topic: "OFAC compliance framework – root causes of violations", hy: false,
    q: "After a sanctions breach, a multinational's compliance review finds two issues. Staff at a regional office screened payments against a list version that was months out of date, and the filter missed \"Kuba\" and \"Soudan\" spellings. Separately, US headquarters staff had approved deals that the group's overseas subsidiaries negotiated with parties in sanctioned countries. Which root causes identified in OFAC's 2019 Framework for OFAC Compliance Commitments do these findings match? (Choose two.)",
    options: [
      "Sanctions screening software or filter faults",
      "Inadequate currency transaction reporting controls",
      "Facilitating transactions by non-US persons, including overseas subsidiaries",
      "Excessive reliance on de-risking of correspondent relationships",
      "Failure to file suspicious activity reports within 30 days"
    ],
    answer: [0, 2],
    explanation: "The Framework's appendix lists root causes of violations. They include sanctions screening software or filter faults, such as failing to update screening for SDN or SSI List changes, missing BIC codes, or ignoring alternative spellings like \"Kuba\" or \"Soudan\". They also include facilitating transactions by non-US persons, such as US staff approving or signing off on deals by non-US subsidiaries. CTR, SAR and de-risking issues are BSA or strategy matters and are not among the listed root causes.",
    source: [
      { label: "OFAC – A Framework for OFAC Compliance Commitments (May 2019), Appendix: root causes III and VI", url: "https://ofac.treasury.gov/media/16331/download?inline=" }
    ]
  },

  // ---------------- Russian oil price cap and shadow fleet ----------------
  {
    id: "SANC-018", difficulty: "hard", domain: 1, topic: "Price cap evasion – shadow fleet red flags", hy: true,
    q: "A US bank finances a trader's purchase of a Russian crude cargo loaded at an eastern Russian port. The trader has provided a signed attestation that the oil was bought at or below the price cap. Maritime intelligence shows that the tanker's AIS signal placed it off another country while it was actually calling at Kozmino. The seller refuses to itemize freight and insurance, which are bundled into a single price that is above the cap. The trader has been a client for 12 years and recently moved offices. What should the bank do?",
    options: [
      "Rely on the attestation, since the price cap guidance gives safe harbor to any service provider that holds one",
      "Ask for an updated attestation and continue financing, since bundled costs are common in oil trading",
      "Treat these as price cap evasion red flags, decline to take part unless resolved, and report to OFAC",
      "Continue the financing, but file a SAR with FinCEN instead of reporting the matter to OFAC"
    ],
    answer: [2],
    explanation: "OFAC's price cap guidance protects service providers who rely in good faith on attestations, unless they knew or had reason to know that the documents were false or the oil was bought above the cap. OFAC's alert names AIS spoofing that hides calls at Kozmino and refusal to itemize shipping, freight and insurance costs as evasion red flags. It says US service providers must reject evasive transactions and report them to OFAC. The runner-up treats the attestation as absolute protection, which it is not once red flags appear. The client's long history is irrelevant.",
    source: [
      { label: "OFAC Alert – Possible Evasion of the Russian Oil Price Cap (AIS spoofing, opaque shipping costs; reject and report)", url: "https://ofac.treasury.gov/media/931641/download" },
      { label: "OFAC Guidance on Implementation of the Price Cap Policy – safe harbor unless knew or had reason to know", url: "https://ofac.treasury.gov/media/931036/download?inline=" }
    ]
  },
  {
    id: "SANC-019", difficulty: "medium", domain: 3, topic: "Price cap – attestation tiers for financial institutions", hy: false,
    q: "A US bank provides transaction-specific trade finance for maritime shipments of Russian petroleum products that its customers say are priced below the cap. Under OFAC's price cap guidance, what must the bank do to qualify for the safe harbor?",
    options: [
      "As a Tier 3 actor, obtain a customer attestation only, since banks have no access to pricing",
      "As a Tier 1 actor, obtain OFAC's written confirmation of the price for each cargo it finances",
      "As a Tier 2 actor, request and retain price documents where practicable, or otherwise an attestation",
      "Nothing, because financial services are excluded from the covered services under the price cap"
    ],
    answer: [2],
    explanation: "OFAC's price cap guidance classifies financial institutions as Tier 2 actors, which sometimes can obtain price information. To obtain the safe harbor, they must request and retain documents showing that the purchase was at or below the cap, including itemized ancillary costs, where practicable, and otherwise obtain and retain customer attestations. Banks providing transaction-specific trade finance routinely collect trade documents and are expected to use them. Tier 3 (attestation-only) covers insurers, P&I clubs, shipowners and flag registries, and Tier 1 covers traders and brokers. Financing is a covered service.",
    source: [
      { label: "OFAC Guidance on Implementation of the Price Cap Policy – Tier 1/2/3 actors; financial institutions", url: "https://ofac.treasury.gov/media/931036/download?inline=" }
    ]
  },

  // ---------------- Export controls ----------------
  {
    id: "SANC-020", difficulty: "hard", domain: 4, topic: "BIS Entity List vs. SDN List – screening hits", hy: true,
    q: "A US bank's screening tool flags an outgoing wire for software consulting fees. The beneficiary is an exact match to a company on the BIS Entity List, and it is not on any OFAC list. The bank's customer is a US consulting firm, and the invoice and contract show no export, reexport or transfer of any item. The alert queue is backlogged, and the customer has asked for same-day processing. What should the analyst do?",
    options: [
      "Block the funds and report them to OFAC within 10 business days, as for an SDN match",
      "Reject the wire and file a rejected transaction report with OFAC within 10 business days",
      "Do not block, and assess through due diligence whether the payment is connected to an EAR violation",
      "Release the wire without review, because BIS lists never apply to financial institutions"
    ],
    answer: [2],
    explanation: "BIS's Entity List FAQs state that the Entity List is not the SDN List and that the EAR do not, per se, prohibit wire transfers involving listed parties absent a connection to an unlawful transaction. The Entity List imposes export license requirements; it does not block property, so OFAC blocking or rejection reporting does not apply. However, General Prohibition 10 makes it a violation to finance or service an item with knowledge of an EAR violation. The bank should therefore apply due diligence rather than ignore the hit. Blocking is the tempting runner-up because it treats every list hit as an SDN match.",
    source: [
      { label: "BIS Entity List FAQs (updated Sept. 29, 2025) – Q.26 wire transfers; Q.37 Entity List vs. SDN List", url: "https://www.bis.gov/media/documents/entity-list-faqs.pdf" }
    ]
  },
  {
    id: "SANC-021", difficulty: "hard", domain: 4, topic: "BIS Affiliates Rule – status and screening impact", hy: false, changed: "BIS Affiliates Rule (Sept 2025) suspended 10 Nov 2025 – 9 Nov 2026",
    q: "In September 2026, a US bank's trade-finance team is updating its export-control screening. A team member says the BIS \"Affiliates Rule\", which extends Entity List restrictions to unlisted foreign companies that are 50% or more owned by listed parties, \"was scrapped last year\", so ownership checks against the Entity List are unnecessary. Which statement is MOST accurate?",
    options: [
      "The rule was suspended for one year from 10 November 2025 and is scheduled to return on 10 November 2026",
      "The rule was permanently withdrawn in November 2025, so the Entity List again covers only named parties",
      "The rule has applied without interruption since September 2025, and affiliates are blocked like SDNs",
      "The rule never took effect, because BIS only proposed it for comment in September 2025"
    ],
    answer: [0],
    explanation: "BIS published the Affiliates Rule as an interim final rule on 30 September 2025. By a final rule effective 10 November 2025, BIS suspended it for one year, until 9 November 2026. The same rule provides that the Affiliates Rule provisions return to the EAR on 10 November 2026 unless BIS acts otherwise, so the bank should prepare 50% ownership checks now. Even when in force, the rule imposes license requirements, not asset blocking.",
    source: [
      { label: "Federal Register (Nov. 12, 2025) – One Year Suspension of Expansion of End-User Controls for Affiliates of Certain Listed Entities", url: "https://www.federalregister.gov/documents/2025/11/12/2025-19846/one-year-suspension-of-expansion-of-end-user-controls-for-affiliates-of-certain-listed-entities" },
      { label: "BIS Entity List FAQs – Affiliates Rule (50% owned affiliates) and license requirements", url: "https://www.bis.gov/media/documents/entity-list-faqs.pdf" }
    ]
  },
  {
    id: "SANC-022", difficulty: "medium", domain: 1, topic: "Export controls – foreign direct product rules", hy: false,
    q: "A bank customer in Malaysia exports advanced chips to a buyer in Russia. The chips are made in Asia and contain no US-origin components. However, they are produced on equipment that is itself built from controlled US-origin technology. The customer insists that US export controls cannot apply to its goods. Why might the customer be wrong?",
    options: [
      "Any item paid for through a US correspondent account automatically becomes subject to the EAR",
      "OFAC's 50 Percent Rule extends US jurisdiction to goods made by non-US companies",
      "US de minimis rules capture all foreign-made items, whatever their US-origin content",
      "Foreign direct product rules can make foreign-made items subject to the EAR if they derive from US technology"
    ],
    answer: [3],
    explanation: "Under 15 CFR 734.9, the foreign direct product (FDP) rules make foreign-produced items subject to the EAR when they are the direct product of specified US-origin technology or software, or are produced by a plant or major component of a plant that is itself such a direct product. A Russia/Belarus-specific FDP rule may apply to such shipments. De minimis rules depend on controlled US-origin content, which these chips lack. The 50 Percent Rule concerns ownership by blocked persons, not the origin of goods, and a USD payment does not by itself make an item subject to the EAR.",
    source: [
      { label: "15 CFR 734.9 – Foreign-Direct Product (FDP) Rules, incl. Russia/Belarus FDP rule", url: "https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-734/section-734.9" }
    ]
  },

  // ---------------- FATF and UN: R.6, R.7, PF risk ----------------
  {
    id: "SANC-023", difficulty: "hard", domain: 2, topic: "FATF R.6 vs. R.7 – designation mechanisms", hy: true,
    q: "A country is drafting its targeted financial sanctions law. The draft allows the finance minister to designate, on the country's own motion, persons suspected of financing terrorism, and also persons suspected of financing North Korea's weapons programs. The FATF assessors are reviewing the draft. Which statement correctly reflects the FATF Standards?",
    options: [
      "R.6 and R.7 both require a national designation mechanism based on reasonable grounds",
      "R.7 requires national PF designations, while R.6 covers only UN Security Council designations",
      "R.6 requires national designations under UNSCR 1373, while R.7 covers only UN Security Council designations",
      "Neither recommendation permits national designations; only UN committees may designate"
    ],
    answer: [2],
    explanation: "Under INR.6, UNSCR 1373 designations are made at the national or supranational level, on the country's own motion or at another country's request, on reasonable grounds. R.7 requires freezing of persons designated by, or under the authority of, the UN Security Council under PF-related resolutions (1718 and successors, and the Iran resolutions). INR.7 says countries 'could consider' mechanisms to propose names to the UN committees, but it contains no 1373-style national designation obligation. The runner-up reverses the two recommendations. A country may still adopt autonomous PF sanctions domestically, but R.7 does not require them.",
    source: [
      { label: "FATF Recommendations (2026 ed., EAG copy) – INR.6 para 5 (1373 national designations); R.7 and INR.7 paras 1-5", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "SANC-024", difficulty: "hard", domain: 2, topic: "FATF R.1 – proliferation financing risk definition and exemptions", hy: true,
    q: "A small country's supervisor finds that its currency exchange sector has very low proliferation financing (PF) risk. It proposes to (1) exempt currency exchangers from the requirement to identify, assess and mitigate PF risks and (2) exempt them from screening against UN proliferation-related designations. Which response is consistent with the FATF Standards?",
    options: [
      "The PF risk assessment exemption may be allowed on an assessed low risk, but R.7 freezing obligations still apply in full",
      "Both exemptions are allowed, because R.1 permits simplified measures wherever PF risk is assessed as low",
      "Neither exemption is allowed, because the FATF gives no flexibility on PF risk assessment obligations",
      "The screening exemption is allowed, but a documented PF risk assessment is always required"
    ],
    answer: [0],
    explanation: "Under R.1 and INR.1, PF risk means strictly and only the potential breach, non-implementation or evasion of the targeted financial sanctions in R.7. Countries may exempt a type of institution from the PF risk assessment and mitigation requirement where PF risk is assessed as low, but full implementation of R.7 targeted financial sanctions is mandatory in all cases, because R.7 obligations are not risk-based. Allowing both exemptions is the runner-up: it applies ordinary risk-based logic to R.7 obligations that are strict.",
    source: [
      { label: "FATF Recommendations (2026 ed., EAG copy) – R.1 and INR.1 paras 3-4 and footnotes 3-4 (PF risk; exemption; R.7 mandatory)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "SANC-025", difficulty: "medium", domain: 3, topic: "PF risk assessment by financial institutions", hy: false,
    q: "A mid-sized bank's board asks the CCO whether it must build a separate, stand-alone proliferation financing (PF) compliance program to meet the FATF-based requirements adopted in its country. What is the BEST answer?",
    options: [
      "Yes, because the FATF requires a separate PF program with its own officer and independent audit",
      "No, because PF risk is covered by the bank's anti-money laundering risk assessment and needs no separate consideration",
      "No, because PF obligations apply only to exporters of dual-use goods, not to banks",
      "No, PF risks can be assessed and mitigated within the existing sanctions and compliance program, but must be documented"
    ],
    answer: [3],
    explanation: "INR.1 requires financial institutions to identify, assess and mitigate their PF risks, and states that this may be done within their existing targeted financial sanctions and/or compliance programmes. The assessment should be documented, kept up to date and appropriate to the nature and size of the business, and policies must be approved by senior management. The FATF does not require a separate stand-alone program, but PF must be specifically considered, not assumed to be covered by an AML assessment, and it applies to banks, not only exporters.",
    source: [
      { label: "FATF Recommendations (2026 ed., EAG copy) – INR.1 paras 17-18 (assessing and mitigating PF risk)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "SANC-026", difficulty: "hard", domain: 2, topic: "UN Iran sanctions snapback (2025) and FATF R.7", hy: true, changed: "UN Iran sanctions re-applied 27 Sept 2025; INR.7 updated Oct 2025",
    q: "A bank's sanctions policy, last updated in 2024, states that UN proliferation-related targeted financial sanctions on Iran would lapse permanently with the end of resolution 2231 in October 2025, leaving only the DPRK regime under FATF R.7. The bank's head of screening wants to remove the UN Iran list from the screening tool. What should the compliance officer advise?",
    options: [
      "Remove it, because the UN Iran measures lapsed on resolution 2231's termination day in October 2025",
      "Keep it only for Iranian banks, because UN Iran sanctions now target the financial sector alone",
      "Keep it, since the UN Iran measures were re-applied in September 2025 and R.7 again covers them",
      "Remove it, but retain Iran as a high-risk country for enhanced due diligence under FATF R.19"
    ],
    answer: [2],
    explanation: "France, Germany and the UK triggered the resolution 2231 'snapback'. When the Security Council did not adopt a resolution continuing the relief, the earlier UN measures on Iran were re-applied on 27 September 2025, and the 1737 Committee and its sanctions list were restored. The FATF's October 2025 update of INR.7 lists resolutions 1737, 1747, 1803 and 1929 as the Iran-related TFS resolutions under R.7, so designated persons must be frozen without delay. Russia and China dispute the legality of the snapback, but the FATF Standards reflect the restored measures. Enhanced due diligence under R.19 does not replace TFS.",
    source: [
      { label: "UN News (Dec 2025) – Security Council remains divided over Iran; sanctions stay in place after snapback", url: "https://news.un.org/en/story/2025/12/1166660" },
      { label: "FATF Recommendations (2026 ed., EAG copy) – INR.7 footnote 23 (Iran resolutions 1737, 1747, 1803, 1929; Oct 2025)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "SANC-027", difficulty: "hard", domain: 3, topic: "UN 1718 (DPRK) designations – freezing 'without delay'", hy: false,
    q: "At 10:00 New York time, the UN 1718 Sanctions Committee designates a DPRK front company. A bank in a FATF member country holds an account for that company. The country's domestic law gives effect to UN designations only after a national gazette notice, which usually takes 10-15 business days. The bank's policy follows the gazette timetable. Which practice BEST meets FATF R.7?",
    options: [
      "Freeze the account only once the gazette notice is published, since that is when the domestic legal duty arises",
      "Notify the company and give it five days to show it is not the listed entity before freezing",
      "File a suspicious transaction report now, and freeze only if the FIU instructs the bank to",
      "Freeze without delay and without prior notice, ideally within hours, as R.7 expects national law to allow"
    ],
    answer: [3],
    explanation: "INR.7 requires countries to make all natural and legal persons freeze the funds of UN-designated persons without delay and without prior notice. The FATF Glossary defines 'without delay' as, ideally, within a matter of hours of a UN designation, including by the 1718 Committee. Waiting weeks for domestic transposition is the tempting runner-up, since it matches the bank's legal trigger, but it is the kind of gap the FATF criticizes. Tipping off the designee or deferring to the FIU defeats the purpose of preventing asset flight.",
    source: [
      { label: "FATF Recommendations (2026 ed., EAG copy) – INR.7 para 6(a) and Glossary 'without delay'", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },

  // ---------------- UK: OFSI and OTSI ----------------
  {
    id: "SANC-028", difficulty: "hard", domain: 2, topic: "OFSI enforcement framework (2026) – penalty discounts", hy: true, changed: "OFSI enforcement and monetary penalties guidance, Feb 2026",
    q: "OFSI sets a baseline penalty of £500,000 for a company's breach of UK financial sanctions. The company voluntarily disclosed the breach promptly and in full and cooperated throughout, qualifying for the full Voluntary Disclosure and Co-operation discount. It also provided an accepted early account under the Early Account Scheme (full discount) and agreed to settle. Under OFSI's February 2026 enforcement guidance, what is the resulting penalty?",
    options: [
      "£150,000, because the 30%, 20% and 20% discounts are added together before being applied",
      "£224,000, because the 30%, 20% and 20% discounts are applied one after another",
      "£250,000, because voluntary disclosure can reduce a serious-case penalty by at most 50%",
      "£350,000, because only the voluntary disclosure discount of 30% can be granted"
    ],
    answer: [0],
    explanation: "OFSI's enforcement guidance, updated on 9 February 2026, provides three discounts to the baseline penalty: Voluntary Disclosure and Co-operation (up to 30%), the Early Account Scheme (up to 20%) and Settlement (20%). Where two or more apply, OFSI adds them together before applying them, so 70% off £500,000 leaves £150,000. Applying them one after another is the runner-up error. The 50% option reflects OFSI's earlier guidance (up to 50% for voluntary disclosure in serious cases), which the 2026 framework replaced.",
    source: [
      { label: "OFSI – Financial sanctions enforcement and monetary penalties guidance (updated 9 Feb 2026), section 6.3 discounts", url: "https://www.gov.uk/government/publications/financial-sanctions-enforcement-and-monetary-penalties-guidance/financial-sanctions-enforcement-and-monetary-penalties-guidance" }
    ]
  },
  {
    id: "SANC-029", difficulty: "medium", domain: 2, topic: "UK sanctions enforcement bodies – OFSI, OTSI, HMRC", hy: false,
    q: "A UK-based commodities broker arranges, from its London office, the sale of restricted industrial goods from a supplier in China to a buyer in Russia. The goods never enter the UK. Which UK body is responsible for civil enforcement of this suspected breach of trade sanctions?",
    options: [
      "The Office of Financial Sanctions Implementation (OFSI), which enforces all UK sanctions",
      "The Office of Trade Sanctions Implementation (OTSI), within the Department for Business and Trade",
      "HM Revenue & Customs, because the case concerns cross-border movement of goods",
      "The Financial Conduct Authority, because the broker is a UK-regulated firm"
    ],
    answer: [1],
    explanation: "OFSI's general guidance explains that the Department for Business and Trade, through the Office of Trade Sanctions Implementation (OTSI), is responsible for civil enforcement of trade sanctions breaches involving services and the movement of goods between third countries. HMRC enforces customs-related trade sanctions, such as goods moving into or out of the UK. OFSI covers financial sanctions, not all sanctions. The FCA supervises firms' systems and controls but is not the trade sanctions enforcement authority.",
    source: [
      { label: "OFSI – UK financial sanctions general guidance, glossary of UK sanctions bodies (OTSI, HMRC)", url: "https://www.gov.uk/government/publications/financial-sanctions-general-guidance/uk-financial-sanctions-general-guidance" }
    ]
  },
  {
    id: "SANC-030", difficulty: "hard", domain: 3, topic: "OFSI licensing – general vs. specific licences", hy: false,
    q: "A UK bank holds frozen funds for a designated person. The person's lawyers apply to OFSI for a specific licence to pay routine legal fees, although a published OFSI general licence already covers the same activity. Separately, another client holding a valid OFSI specific licence insists that the bank must process a licensed payment immediately. Which statements are correct? (Choose two.)",
    options: [
      "OFSI expects the general licence to be used and will not normally issue a specific licence for the same activity",
      "OFSI will issue the specific licence as a matter of course, because a specific licence gives more legal certainty",
      "A licence permits the act but does not compel the bank or other payment-chain firms to process it",
      "A valid OFSI licence obliges every bank in the payment chain to execute the payment without delay",
      "The bank must apply to OFSI for its own general licence before it can act under the published one"
    ],
    answer: [0, 2],
    explanation: "OFSI's general guidance states that where a general licence permits an activity, OFSI expects it to be used. A specific licence will not be issued for the same activity unless the applicant shows it cannot use the general licence or that it is deficient, and OFSI does not accept applications for general licences. It also states that a licence is written permission that does not compel any party, including financial institutions in the payment route, to take any action. The bank may therefore apply its own risk assessment to the licensed payment.",
    source: [
      { label: "OFSI – UK financial sanctions general guidance, ch. 6 Exceptions and licensing", url: "https://www.gov.uk/government/publications/financial-sanctions-general-guidance/uk-financial-sanctions-general-guidance" }
    ]
  },
  {
    id: "SANC-031", difficulty: "hard", domain: 3, topic: "UK asset freezes – crediting frozen accounts", hy: false,
    q: "A UK bank holds a frozen account for a person designated under a UK regime. A payment arrives from a non-designated third party, the person's former employer, paying final salary under a contract signed long before the designation. The payment operations team wants to return the funds to the employer to \"keep the account clean\". What is the BEST course of action?",
    options: [
      "Return the funds to the employer, since incoming payments to a frozen account are prohibited",
      "Credit the account and freeze the funds, then inform OFSI of the transaction without delay",
      "Credit the account and release the funds to the designated person, since the salary pre-dates designation",
      "Hold the funds in a suspense account outside the frozen account until OFSI grants a specific licence"
    ],
    answer: [1],
    explanation: "OFSI's guidance explains that asset-freezing legislation permits, without a licence, a relevant institution to credit a frozen account with payments from third parties or payments discharging obligations that arose before designation, provided the incoming funds are also frozen. For third-party payments, the institution must inform OFSI of the transaction without delay. Returning the funds is the tempting runner-up, but the exception exists so that such payments can be received. The funds must stay frozen, and no specific licence is needed to credit them.",
    source: [
      { label: "OFSI – UK financial sanctions general guidance, 6.1 Crediting frozen accounts", url: "https://www.gov.uk/government/publications/financial-sanctions-general-guidance/uk-financial-sanctions-general-guidance" }
    ]
  },

  // ---------------- Evasion typologies ----------------
  {
    id: "SANC-032", difficulty: "hard", domain: 1, topic: "Sanctions evasion – share transfers and retained control (EU)", hy: true,
    q: "Two days before an EU designation, a businessman transfers his 60% stake in an EU-based holding company to his adult daughter, a university student with no business experience. The transfer agreement lets him buy the shares back at a nominal price at any time. He still chairs the company's weekly strategy calls. Other shareholders are pension funds with small stakes. The company's EU bank sees that the ownership register now shows no designated shareholder. How should the bank view this under the EU Best Practices?",
    options: [
      "As strong indicators of continued control needing urgent analysis and likely freezing",
      "As outside the asset freeze, since the designated person now holds no shares",
      "As caught only if the daughter is designated in her own right by a Council decision",
      "As caught only if the transfer can be proven to be a criminal sham in court"
    ],
    answer: [0],
    explanation: "The EU Council's Best Practices say control, not only ownership, brings an entity within the asset freeze. De facto dominant influence, including through front persons, is a control criterion. They give illustrative indicators of control, including a transfer of shares close to the designation date and a buyback option on favourable terms. A register that shows no designated shareholder is the tempting runner-up, but relying on it ignores these classic evasion signals. No court finding or separate designation of the daughter is needed.",
    source: [
      { label: "Council of the EU – Best Practices for the effective implementation of restrictive measures (11623/24), paras 64-67", url: "https://data.consilium.europa.eu/doc/document/ST-11623-2024-INIT/en/pdf" }
    ]
  },
  {
    id: "SANC-033", difficulty: "medium", domain: 1, topic: "DPRK IT workers – revenue generation for WMD programs", hy: false,
    q: "A payments platform notices that one freelance developer account logs in from IP addresses in several countries within an hour. The account uses remote desktop port configurations and receives high ratings from a client account that withdraws funds to the same payment account. Earnings are quickly moved to PRC-based bank accounts through intermediary companies. What does this pattern MOST likely indicate?",
    options: [
      "DPRK IT workers generating revenue for weapons programs under false identities",
      "Account takeover of a legitimate developer by a romance scam network",
      "Tax evasion by a freelancer who under-reports foreign platform income",
      "Trade-based money laundering through over-invoiced software licences"
    ],
    answer: [0],
    explanation: "The May 2022 State-Treasury-FBI advisory on DPRK IT workers lists these red flags for freelance and payment platforms: multiple logins from IP addresses in different countries within a short time, remote desktop configurations such as port 3389, fraudulent client accounts rating developers and sharing the same payment account, and frequent transfers to PRC-based bank accounts routed through companies. The advisory explains that most DPRK IT workers work for entities involved in the WMD and ballistic missile programs, so their earnings raise sanctions and proliferation financing concerns. The other options do not explain the combined pattern.",
    source: [
      { label: "State/Treasury/FBI Advisory on DPRK Information Technology Workers (May 16, 2022) – red flag indicators", url: "https://ofac.treasury.gov/media/923126/download?inline=" }
    ]
  },
  {
    id: "SANC-034", difficulty: "medium", domain: 2, topic: "CAATSA and Russia sectoral sanctions", hy: false,
    q: "A compliance trainer explains how the Countering America's Adversaries Through Sanctions Act of 2017 (CAATSA) changed the US Russia sectoral sanctions under E.O. 13662. Which statement is accurate?",
    options: [
      "CAATSA converted all Russian sectoral directives into full blocking sanctions under the SDN List",
      "CAATSA shortened permitted debt tenors and requires congressional review before E.O. 13662 sanctions end",
      "CAATSA removed the 50 Percent Rule from the sectoral directives so only named entities were covered",
      "CAATSA transferred administration of the sectoral sanctions from OFAC to the State Department"
    ],
    answer: [1],
    explanation: "Under CAATSA section 223, OFAC amended Directive 1 (to 14 days) and Directive 2 (to 60 days) for new debt issued from 28 November 2017, and expanded Directive 4 (FAQ 370; 31 CFR 589.203). Note 2 to 31 CFR 589.203 records that CAATSA section 216 requires congressional review before sanctions under E.O. 13662 are terminated. FAQ 373 confirms that the 50 Percent Rule still applies to the directives, which remain non-blocking and are administered by OFAC.",
    source: [
      { label: "OFAC FAQ 370 – Directives amended under CAATSA s.223; debt tenors", url: "https://ofac.treasury.gov/faqs/370" },
      { label: "31 CFR 589.203 – Directive 2 (60 days); Note 2: CAATSA s.216 congressional review", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-V/part-589/subpart-B/section-589.203" }
    ]
  },
  {
    id: "SANC-035", difficulty: "hard", domain: 4, topic: "OFAC 50 percent rule – wire transfers and intermediary banks", hy: false,
    q: "A US bank acts only as an intermediary on a USD wire between two foreign banks. The beneficiary, a non-account party not named on the SDN List, is 55% owned by an SDN, but nothing in the payment message or the bank's records shows this. Two weeks later, an open-source article reveals the ownership, and the bank's investigator realizes the wire was processed. Which statement BEST reflects OFAC guidance?",
    options: [
      "The wire was not blocked property, because the bank had no relationship with the beneficiary",
      "The wire was blocked property, but OFAC would not expect the bank to have researched unlisted non-account parties",
      "The bank faces a likely enforcement action because it did not research the ownership of every party",
      "The bank must now recover the funds from the beneficiary bank and place them in a blocked account"
    ],
    answer: [1],
    explanation: "OFAC FAQ 116 states that a wire in which an entity 50% or more owned by a blocked person has an interest is blocked property, even when it passes through a US bank acting only as an intermediary with no relationship to that party. However, where the bank is only an intermediary, the entity is a non-account party, and the bank does not know or have reason to know its blocked status, OFAC does not expect research on unlisted non-account parties and would not pursue enforcement. The runner-up wrongly says the wire was not blocked property. OFAC expects full ownership due diligence on the bank's own direct customers, and if the bank knows or has reason to know, it must block.",
    source: [
      { label: "OFAC FAQ 116 – 50 Percent Rule and wire transfers through intermediary banks", url: "https://ofac.treasury.gov/faqs/116" }
    ]
  }
]);
