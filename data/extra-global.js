window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "GLOB-001", domain: 4, topic: "Canada: STR timing (FINTRAC)", hy: true,
    q: "An investigator at a Canadian bank finishes reviewing a series of wires on a Tuesday afternoon. Her assessment establishes reasonable grounds to suspect that they are related to a money laundering offence. The total is CAD 4,200. Under FINTRAC guidance, when must the bank submit the Suspicious Transaction Report?",
    options: [
      "Within 30 calendar days of the date the first wire was detected by monitoring",
      "Within 15 calendar days, because the total is below the CAD 10,000 threshold",
      "As soon as practicable after the measures that established reasonable grounds to suspect",
      "Within 3 business days, or within 24 hours if terrorist financing is suspected"
    ],
    answer: [2],
    explanation: "FINTRAC requires an STR to be submitted 'as soon as practicable' after the entity has completed the measures that enable it to establish reasonable grounds to suspect, and it treats STRs as a priority over other tasks. There is no monetary threshold for an STR. The 30-day clock is the US SAR rule, 15 calendar days is Canada's deadline for a Large Cash Transaction Report, and 3 business days or 24 hours is Australia's suspicious matter report timing.",
    source: [
      { label: "FINTRAC – Reporting suspicious transactions to FINTRAC ('as soon as practicable'; no monetary threshold)", url: "https://fintrac-canafe.canada.ca/guidance-directives/transaction-operation/str-dod/str-dod-eng" }
    ]
  },
  {
    id: "GLOB-002", domain: 3, topic: "Canada: LCTR and the 24-hour rule", hy: true,
    q: "At 10:00 on Monday, a customer of a Canadian bank deposits CAD 6,000 in cash at one branch. At 08:00 on Tuesday, the same person deposits CAD 5,000 in cash into the same account at another branch. Nothing else about the activity is unusual. What does the bank have to do?",
    options: [
      "Nothing, because each deposit is below CAD 10,000 and they were made on different calendar days",
      "File an LCTR within 15 calendar days, because the deposits total CAD 10,000 or more within a consecutive 24-hour window",
      "File an STR instead of an LCTR, because splitting cash across branches is automatically suspicious",
      "File an LCTR within 5 working days, combining all of the customer's cash deposits for that week"
    ],
    answer: [1],
    explanation: "Under FINTRAC's 24-hour rule, transactions of the same type that total CAD 10,000 or more within a consecutive 24-hour window, and share the same aggregation type (here, the same conductor), must be aggregated and reported. An LCTR is due within 15 calendar days after the day the cash is received. Calendar days do not break the window. Splitting deposits can be a red flag, but it is not automatically suspicious, and an STR would be filed in addition to the LCTR, not instead of it. The 5-working-day deadline applies to EFT and large virtual currency reports.",
    source: [
      { label: "FINTRAC – Reporting transactions: the 24-hour rule (consecutive 24-hour window, same aggregation type)", url: "https://fintrac-canafe.canada.ca/guidance-directives/transaction-operation/24hour/1-eng" },
      { label: "FINTRAC – Reporting large cash transactions (CAD 10,000; within 15 calendar days)", url: "https://fintrac-canafe.canada.ca/guidance-directives/transaction-operation/lctr-doie/lctr-doie-eng" }
    ]
  },
  {
    id: "GLOB-003", domain: 2, topic: "Canada: Electronic Funds Transfer Reports", hy: false,
    q: "A compliance officer moving from the US to a Canadian bank is updating the reporting matrix. Which statement correctly describes a Canadian financial entity's Electronic Funds Transfer Report (EFTR) obligation?",
    options: [
      "Report every EFT of CAD 3,000 or more, domestic or international, within 30 days of the transfer",
      "Report international EFTs of CAD 10,000 or more within 15 calendar days after the day of initiation",
      "Report only outgoing international EFTs of CAD 1,000 or more, by the 15th of the following month",
      "Report international EFTs of CAD 10,000 or more that it initiates or finally receives, within 5 business days"
    ],
    answer: [3],
    explanation: "FINTRAC requires financial entities to submit an EFTR when they initiate, at a client's request, or finally receive an international EFT of CAD 10,000 or more (the 24-hour rule also applies). The report is due within 5 business days after the day of initiation or final receipt. The obligation covers both incoming and outgoing international transfers, not domestic ones. The 15-calendar-day deadline belongs to the LCTR, and the CAD 3,000 figure echoes the US funds-transfer recordkeeping rule.",
    source: [
      { label: "FINTRAC – Reporting electronic funds transfers (international EFT of $10,000 or more; within 5 business days)", url: "https://fintrac-canafe.canada.ca/guidance-directives/transaction-operation/eft-dt/eft-dt-eng" }
    ]
  },
  {
    id: "GLOB-004", domain: 3, topic: "Singapore: MAS Notice 626 – CDD and tipping-off", hy: true,
    q: "During a periodic review, a Singapore bank comes to suspect that a corporate customer is laundering money. The relationship manager is about to ask the customer for detailed source-of-wealth documents. Compliance reasonably believes this request would tip off the customer. What does MAS Notice 626 allow the bank to do?",
    options: [
      "Stop performing those CDD measures, document the basis for its assessment and file an STR with STRO",
      "Complete all CDD measures first, because an STR can be filed only after CDD has been completed",
      "Exit the relationship at once and tell the customer that the exit is for regulatory reasons",
      "Obtain MAS approval before stopping CDD, and then file the STR with MAS rather than STRO"
    ],
    answer: [0],
    explanation: "Paragraph 14.4 of MAS Notice 626 says that where a bank forms a suspicion of ML/TF and reasonably believes that performing CDD measures will tip off the customer, it may stop performing those measures, but must document the basis for its assessment and file an STR. STRs go to the Suspicious Transaction Reporting Office (STRO), with a copy to MAS on request (paragraph 14.2), and tipping-off is an offence under section 57 of the CDSA. No MAS approval is required, and telling the customer why the account is being exited risks tipping-off.",
    source: [
      { label: "MAS Notice 626 (last revised 30 June 2025) – paras 14.2-14.4: STRs to STRO; stopping CDD where it would tip off", url: "https://www.mas.gov.sg/-/media/amld-amendments---30-june-2025/mas-notice-626.pdf" }
    ]
  },
  {
    id: "GLOB-005", domain: 3, topic: "Singapore: MAS Notice 626 – CDD triggers for walk-in customers", hy: false,
    q: "A walk-in customer with no account at a Singapore bank asks the bank to send a cross-border wire of S$1,800. He also wants to buy a cashier's order for S$15,000. Nothing about him appears suspicious. Under MAS Notice 626, which statement is correct?",
    options: [
      "Neither needs CDD, because the S$20,000 occasional-transaction threshold also covers wire transfers",
      "CDD is needed for the wire, which exceeds S$1,500; the S$15,000 purchase is below the S$20,000 trigger",
      "Both need CDD, because MAS Notice 626 requires it for any transaction over S$5,000",
      "Only the S$15,000 purchase needs CDD, because wires are covered by the travel rule instead"
    ],
    answer: [1],
    explanation: "Paragraph 6.3 of MAS Notice 626 requires CDD for a customer without business relations when the bank undertakes a transaction exceeding S$20,000 (paragraph 6.3(b)), or effects or receives funds by domestic wire transfer or by cross-border wire transfer exceeding S$1,500 (paragraph 6.3(d)). The wire therefore triggers CDD, but the S$15,000 purchase alone does not. CDD would still be required at any amount if there were a suspicion of ML/TF (paragraph 6.3(f)). The travel rule in paragraph 11 applies in addition to CDD, not instead of it.",
    source: [
      { label: "MAS Notice 626 (last revised 30 June 2025) – para 6.3: when CDD is required (S$20,000; wires over S$1,500)", url: "https://www.mas.gov.sg/-/media/amld-amendments---30-june-2025/mas-notice-626.pdf" }
    ]
  },
  {
    id: "GLOB-006", domain: 3, topic: "Hong Kong: JFIU consent after an STR", hy: true,
    q: "A Hong Kong bank files an STR with the JFIU before executing a customer's HK$3 million outbound transfer, and the JFIU replies with consent. The relationship manager says the consent shows the account is clean and asks compliance to remove it from the watchlist. What is the BEST response?",
    options: [
      "Treat the consent as a defence for the disclosed acts only, and still review and manage the relationship risk",
      "Remove the watchlist flag, because JFIU consent confirms that the account poses no ML risk",
      "Tell the customer the JFIU has cleared the transfer so that the customer is reassured",
      "Close the account at once, because the JFIU gives consent only when police plan to restrain it"
    ],
    answer: [0],
    explanation: "The HKMA AML/CFT Guideline (paras 7.24-7.27) explains that the JFIU usually gives consent under section 25A(2) of the DTROP and OSCO, and section 12(2B) of the UNATMO, when no imminent action such as a restraint order is needed. That consent gives a statutory defence for the disclosed acts. It does not remove the legal, reputational or regulatory risk, and it is not a 'clean bill of health', so the bank must still review the relationship after filing. Mentioning the STR or the JFIU to the customer risks the tipping-off offence.",
    source: [
      { label: "HKMA Guideline on AML/CFT for Authorized Institutions (2023) – paras 7.24-7.27: consent, statutory defence, post-STR review", url: "https://brdr.hkma.gov.hk/eng/doc-ldg/docId/getPdf/20230525-4-EN/AML-2.pdf" },
      { label: "JFIU – STR reporting (report knowledge or suspicion to the JFIU as soon as practicable; STREAMS 2)", url: "https://www.jfiu.gov.hk/en/str.html" }
    ]
  },
  {
    id: "GLOB-007", domain: 2, topic: "Hong Kong: statutory defence under s.25A DTROP/OSCO", hy: false,
    q: "Under Hong Kong's DTROP and OSCO (and the corresponding UNATMO provisions), filing an STR with the JFIU can give an institution a statutory defence to a money laundering offence for the acts it disclosed. In which circumstances does that defence apply? (Choose two.)",
    options: [
      "The report is made before the disclosed acts, and the acts are then carried out with the JFIU's consent",
      "The report is made after the disclosed acts, on the institution's own initiative and as soon as reasonable",
      "The report is made after the disclosed acts, but only once the police have asked for information",
      "The report is made within 30 days after the acts, whether or not it was the institution's own initiative",
      "The report is made to the HKMA instead of the JFIU, provided it is made before the acts"
    ],
    answer: [0, 1],
    explanation: "Paragraph 7.25 of the HKMA Guideline, reflecting section 25A(2) of the DTROP and OSCO and section 12(2) of the UNATMO, says the defence applies if the report is made before the acts and the acts are carried out with the JFIU's consent, or if it is made after the acts on the institution's own initiative and as soon as it is reasonable to do so. A report prompted only by a police request is not on the institution's own initiative, and there is no fixed 30-day window. Disclosures must go to an authorized officer, which in practice means the JFIU, not the supervisor.",
    source: [
      { label: "HKMA Guideline on AML/CFT for Authorized Institutions (2023) – para 7.25: conditions of the statutory defence", url: "https://brdr.hkma.gov.hk/eng/doc-ldg/docId/getPdf/20230525-4-EN/AML-2.pdf" }
    ]
  },
  {
    id: "GLOB-008", domain: 2, topic: "Australia: AML/CTF Amendment Act 2024 ('tranche 2') timing", hy: true,
    changed: "AML/CTF Amendment Act 2024: tranche 2 obligations from 1 July 2026",
    q: "In early 2026, an Australian law firm that also runs a real estate agency asks when the AML/CTF obligations introduced by the AML/CTF Amendment Act 2024 first apply to its designated services. What is the correct answer?",
    options: [
      "From 31 March 2025, when the revised tipping-off offence came into effect",
      "From 31 March 2026, the date new program and CDD rules began for existing reporting entities",
      "From 1 July 2026, although tranche 2 entities could enrol with AUSTRAC from 31 March 2026",
      "Only from 1 July 2029, after a three-year transition period for all professional services"
    ],
    answer: [2],
    explanation: "The 2024 amendments extend the AML/CTF Act to 'tranche 2' entities: lawyers, accountants, trust and company service providers, real estate professionals, and dealers in precious metals and stones. Their obligations apply from 1 July 2026, and they can enrol with AUSTRAC from 31 March 2026. The reformed tipping-off offence started on 31 March 2025, and 31 March 2026 is when the changed AML/CTF program and due diligence requirements began for existing reporting entities (subject to transitional rules). No 2029 date applies.",
    source: [
      { label: "AUSTRAC – About the AML/CTF reforms (1 July 2026 for tranche 2; 31 March 2026 and 31 March 2025 changes)", url: "https://www.austrac.gov.au/industry-and-business/about-amlctf-reforms/about-reforms" },
      { label: "Attorney-General's Department – Overview of the AML/CTF Amendment Act (enrolment from 31 March 2026; obligations from 1 July 2026)", url: "https://www.ag.gov.au/crime/anti-money-laundering-and-counter-terrorism-financing/anti-money-laundering-and-counter-terrorism-financing-amendment-act/overview-amlctf-amendment-act" }
    ]
  },
  {
    id: "GLOB-009", domain: 4, topic: "Australia: suspicious matter report timing", hy: false,
    q: "At 10:00 on a Monday, an investigator at an Australian bank concludes that a customer's small, repeated transfers to a contact abroad may be related to financing of terrorism. By when must the bank give AUSTRAC a suspicious matter report (SMR)?",
    options: [
      "Within 24 hours of forming the suspicion",
      "Within 3 business days of forming the suspicion",
      "Within 10 business days, the same deadline as a threshold transaction report",
      "As soon as practicable, since Australian law sets no fixed deadline"
    ],
    answer: [0],
    explanation: "AUSTRAC requires an SMR within 24 hours of forming the suspicion if it relates to terrorism financing, and within 3 business days for other suspicions. Threshold transaction reports, for physical cash of AUD 10,000 or more, are due within 10 business days. 'As soon as practicable' is Canada's STR standard, not Australia's.",
    source: [
      { label: "AUSTRAC – Suspicious matter reports (24 hours for terrorism financing; 3 business days otherwise)", url: "https://www.austrac.gov.au/industry-and-business/obligations-and-guidance/your-amlctf-program/reporting-us/suspicious-matter-reports" }
    ]
  },
  {
    id: "GLOB-010", domain: 2, topic: "UAE: AML/CFT law, goAML and FATF status", hy: false,
    changed: "UAE Federal Decree-Law No. 10 of 2025 replaced Decree-Law No. 20 of 2018 (Oct 2025)",
    q: "A bank is refreshing its country-risk memo on the United Arab Emirates in 2026. Which statement is accurate?",
    options: [
      "Federal Decree-Law No. 10 of 2025 replaced Decree-Law No. 20 of 2018, and STRs go to the UAE FIU through goAML",
      "Federal Decree-Law No. 20 of 2018 is still the main AML law, and STRs are emailed to the central bank",
      "The UAE is still on the FATF list of jurisdictions under increased monitoring, where it was placed in 2022",
      "The 2025 law applies only to VASPs, while banks stay under the 2018 law and file STRs on paper"
    ],
    answer: [0],
    explanation: "The UAE FIU lists Federal Decree-Law No. 10 of 2025 (with Cabinet Decision No. 134 of 2025) as the current AML/CFT law. It replaced Federal Decree-Law No. 20 of 2018 and took effect in October 2025. STRs must be filed electronically with the UAE FIU through goAML, which has been its reporting platform since June 2019. The FATF placed the UAE under increased monitoring in March 2022 but removed it in February 2024.",
    source: [
      { label: "UAE FIU – Understanding the Law (Federal Decree-Law No. 10 of 2025; history of Decree-Law 20/2018)", url: "https://www.uaefiu.gov.ae/en/policies-guidance/understanding-the-law/" },
      { label: "FATF – Jurisdictions under Increased Monitoring, 23 February 2024 (UAE no longer subject to increased monitoring)", url: "https://www.fatf-gafi.org/content/fatf-gafi/en/publications/High-risk-and-other-monitored-jurisdictions/Increased-monitoring-february-2024.html" }
    ]
  },
  {
    id: "GLOB-011", domain: 3, topic: "Switzerland: terminating a relationship after an MROS report (AMLA Art. 9b)", hy: false,
    q: "A Swiss bank reported a client to MROS under Art. 9 AMLA. Forty-five working days have passed since the date of receipt on MROS's acknowledgement, and MROS has not said that it has passed the report to a prosecutor. The bank wants to end the relationship. What should it do?",
    options: [
      "Keep the relationship open until MROS gives written permission to terminate it",
      "Terminate it and pay out the balance in cash, since the MROS waiting period has passed",
      "Freeze the assets for another five working days, then close the account without telling MROS",
      "Terminate it, allowing large withdrawals only in a traceable form, and notify MROS without delay"
    ],
    answer: [3],
    explanation: "Since 1 January 2023, Art. 9b AMLA has allowed a financial intermediary to terminate a reported relationship once 40 working days have passed since the receipt date on the acknowledgement, unless MROS has said the report was forwarded to a law enforcement authority. Significant assets may be withdrawn only in a form that lets the authorities follow the paper trail, and the termination must be reported to MROS without delay (via a goAML termination notice). MROS approval is not needed, and a cash payout would break the trail.",
    source: [
      { label: "fedpol / MROS – Entering and submitting reports: terminating a business relationship after 40 working days (Art. 9b AMLA)", url: "https://www.fedpol.admin.ch/en/entering-and-submitting" }
    ]
  },
  {
    id: "GLOB-012", domain: 3, topic: "India: STR and CTR timing (PML Rules)", hy: false,
    q: "On 3 March, the Principal Officer of an Indian bank becomes satisfied that a customer's transactions are suspicious. The bank's reporting calendar also shows its monthly cash transaction reports. By when must the STR reach FIU-IND?",
    options: [
      "Within seven working days of the Principal Officer being satisfied it is suspicious",
      "By the 15th day of the following month, together with the cash transaction reports",
      "Within 30 days of the date on which the first suspicious transaction took place",
      "Within 24 hours, because every STR in India must be filed by the next working day"
    ],
    answer: [0],
    explanation: "FIU-IND guidance, reflecting the Prevention of Money-Laundering (Maintenance of Records) Rules, 2005, requires the Principal Officer to report suspicious transactions promptly, and not later than seven working days after being satisfied that a transaction is suspicious. The 15th-of-the-following-month deadline applies to monthly reports such as cash transaction reports (cash over INR 10 lakh, or integrally connected series above that amount), cross-border wire reports and NPO receipt reports, not to STRs.",
    source: [
      { label: "FIU-IND – FAQs (STRs within seven working days; monthly reports by the 15th of the succeeding month)", url: "https://fiuindia.gov.in/files/FAQs/faqs.html" }
    ]
  },
  {
    id: "GLOB-013", domain: 2, topic: "Financial intelligence units by jurisdiction", hy: false,
    q: "A global bank's SAR/STR routing table lists the financial intelligence unit that receives suspicious transaction reports in each country. Which pairings are correct? (Choose two.)",
    options: [
      "STRO – Hong Kong",
      "FINTRAC – Canada",
      "JFIU – Singapore",
      "MROS – Switzerland",
      "AUSTRAC – United Arab Emirates"
    ],
    answer: [1, 3],
    explanation: "FINTRAC receives STRs in Canada, and MROS (the Money Laundering Reporting Office Switzerland, within fedpol) receives reports under Art. 9 AMLA, through goAML. STRO, the Suspicious Transaction Reporting Office, is Singapore's FIU (MAS Notice 626). The JFIU (Joint Financial Intelligence Unit) is Hong Kong's. AUSTRAC is Australia's FIU and AML/CTF regulator. The UAE's FIU is the UAE Financial Intelligence Unit, which uses goAML.",
    source: [
      { label: "FINTRAC – Reporting suspicious transactions to FINTRAC", url: "https://fintrac-canafe.canada.ca/guidance-directives/transaction-operation/str-dod/str-dod-eng" },
      { label: "fedpol / MROS – Entering and submitting STRs/SARs via goAML", url: "https://www.fedpol.admin.ch/en/entering-and-submitting" }
    ]
  },
  {
    id: "GLOB-014", domain: 3, topic: "UK APP fraud reimbursement: vulnerable customers", hy: true,
    q: "In 2026, an 82-year-old UK customer is diagnosed with a cognitive impairment that the bank knows about. Because of it, he cannot see through a caller posing as the bank's fraud team, and he sends £12,000 by Faster Payments despite an on-screen warning. He claims two months later. The fraud team wants to refuse for gross negligence, or at least deduct the £100 excess. What should the bank do?",
    options: [
      "Refuse the claim, because ignoring an on-screen warning always counts as gross negligence",
      "Reimburse in full, since neither the gross-negligence exception nor the excess applies to him",
      "Reimburse half the amount, and tell the customer to claim the other half from the receiving bank",
      "Refuse the claim, because APP claims must be made within 30 days of the payment date"
    ],
    answer: [1],
    explanation: "Under the PSR's APP scams reimbursement requirement, in force since 7 October 2024, the consumer-standard-of-caution exception (gross negligence, a high bar) does not apply to vulnerable consumers. The optional excess of up to £100 also cannot be applied to them. The sending firm reimburses the customer, and the cost is shared 50:50 with the receiving firm between the firms, so the customer does not claim half from the receiving bank. Claims can be made up to 13 months after the payment.",
    source: [
      { label: "PSR – APP fraud reimbursement protections (gross negligence exception and £100 excess do not apply to vulnerable consumers; 13 months)", url: "https://www.psr.org.uk/information-for-consumers/app-fraud-reimbursement-protections/" },
      { label: "PSR – APP scams (costs split 50:50 between sending and receiving firms; five business days)", url: "https://www.psr.org.uk/our-work/app-scams/" }
    ]
  },
  {
    id: "GLOB-015", domain: 2, topic: "UK APP fraud reimbursement: key features", hy: false,
    q: "A payments compliance lead is training staff on the UK's mandatory reimbursement regime for authorised push payment (APP) fraud, which started on 7 October 2024. Which statements are correct? (Choose two.)",
    options: [
      "The maximum mandatory reimbursement is £85,000 per claim",
      "It covers card payments and cash withdrawals as well as bank transfers",
      "The sending and receiving payment firms split the cost of reimbursement 50:50",
      "Customers can claim up to six years after making the fraudulent payment",
      "Every claim must be reimbursed within 24 hours, with no possible extension"
    ],
    answer: [0, 2],
    explanation: "The PSR set the maximum reimbursement at £85,000 per claim, and firms may choose to pay more. Sending and receiving firms share the cost 50:50. The regime covers UK Faster Payments and CHAPS transfers, not card, cash or cheque payments, which have their own protections. Claims must be made within 13 months. Most victims should be reimbursed within 5 business days, and firms can take up to 35 business days where they need more time to investigate.",
    source: [
      { label: "PSR – APP fraud reimbursement protections (£85,000 cap; Faster Payments and CHAPS; 13 months; 5 and 35 business days)", url: "https://www.psr.org.uk/information-for-consumers/app-fraud-reimbursement-protections/" },
      { label: "PSR – APP scams (sending and receiving firms split costs 50:50)", url: "https://www.psr.org.uk/our-work/app-scams/" }
    ]
  },
  {
    id: "GLOB-016", domain: 1, topic: "Pig butchering (FinCEN FIN-2023-Alert005)", hy: true,
    q: "A 67-year-old customer who has never used virtual currency tells her banker about a 'friend' who texted her by mistake months ago and has since coached her on a crypto trading app that shows large profits. Which of her recent activities are red flags that FinCEN has identified for this kind of scam? (Choose two.)",
    options: [
      "Paying a cashier's check to a home-renovation contractor she has used for years",
      "Taking out a home equity line of credit and wiring the proceeds to a virtual asset service provider",
      "Moving funds from a matured certificate of deposit into checking to pay a planned tax bill",
      "Wiring funds to a VASP that she says are needed to pay 'taxes' before her profits can be released",
      "Logging in to online banking from the same home computer and IP address as always"
    ],
    answer: [1, 3],
    explanation: "FinCEN's September 2023 alert on pig butchering lists these financial red flags: taking out a HELOC, home equity loan or second mortgage and sending the proceeds to a VASP, and sending funds to a VASP described as 'taxes', 'fees' or 'penalties' (which scammers demand when a victim tries to withdraw). The alert also flags CDs liquidated before maturity, but not a matured CD used for an expected expense. Longstanding payees and consistent device and IP data are normal activity. SARs should use the key term FIN-2023-PIGBUTCHERING.",
    source: [
      { label: "FinCEN Alert FIN-2023-Alert005 on 'Pig Butchering' (Sept. 8, 2023) – behavioral, financial and technical red flags", url: "https://www.fincen.gov/sites/default/files/shared/FinCEN_Alert_Pig_Butchering_FINAL_508c.pdf" }
    ]
  },
  {
    id: "GLOB-017", domain: 4, topic: "Pig butchering: reading the transaction pattern", hy: false,
    q: "A VASP analyst reviews a new customer's account. The customer sent USD 5,000 of stablecoin to an outside address, then received a deposit of USD 5,300 from that address. Over the next two weeks, the customer sent USD 60,000 and then USD 140,000 to the same address. What is the MOST likely explanation?",
    options: [
      "The customer is structuring deposits to stay under the Currency Transaction Report threshold",
      "The customer is an experienced arbitrage trader moving funds between exchanges for profit",
      "The customer is a money mule using chain-hopping to layer funds across several blockchains",
      "A scammer let the victim make a small 'withdrawal' to build trust before demanding much larger sums"
    ],
    answer: [3],
    explanation: "FinCEN's pig butchering alert describes scammers who let victims withdraw a small amount to build confidence before urging them to invest more. It lists as a red flag a deposit at or slightly above the amount previously sent out, followed by much larger outgoing transfers. CTRs concern physical currency, so they are not relevant here. Nothing suggests trading between exchanges or hops across different chains: the funds go repeatedly to one address.",
    source: [
      { label: "FinCEN Alert FIN-2023-Alert005 – 'The Promise of Greater Returns' and financial red flags", url: "https://www.fincen.gov/sites/default/files/shared/FinCEN_Alert_Pig_Butchering_FINAL_508c.pdf" }
    ]
  },
  {
    id: "GLOB-018", domain: 4, topic: "Deepfakes in remote onboarding (FIN-2024-Alert004)", hy: true,
    q: "During a bank's remote onboarding, the verification tool reports that an applicant is using a third-party webcam plugin for the live selfie check. The applicant then cites repeated 'technical glitches', asks to send a recorded video by email instead, and declines to set up multifactor authentication. What is the BEST course of action?",
    options: [
      "Accept the emailed video, since glitches are common and the ID document passed automated checks",
      "Open the account with low limits and plan an enhanced review after 90 days of activity",
      "Hold the account opening until identity is verified another way, and consider a SAR on the attempt",
      "Reject the application and take no further action, since no transaction took place"
    ],
    answer: [2],
    explanation: "FinCEN's November 2024 deepfake alert lists these red flags: using a third-party webcam plugin during live verification, trying to change communication method because of suspicious glitches, and declining multifactor authentication. It recommends live verification checks and MFA as best practices. The activity should not be accepted or opened on trust. A SAR can cover an attempted transaction, including an attempted account opening, and FinCEN asks filers to use the key term FIN-2024-DEEPFAKEFRAUD.",
    source: [
      { label: "FinCEN Alert FIN-2024-Alert004 on Fraud Schemes Involving Deepfake Media (Nov. 13, 2024) – red flags and best practices", url: "https://www.fincen.gov/sites/default/files/shared/FinCEN-Alert-DeepFakes-Alert508FINAL.pdf" }
    ]
  },
  {
    id: "GLOB-019", domain: 4, topic: "Investigating suspected GenAI identity documents", hy: false,
    q: "A bank sees that a group of accounts opened six months ago now show rapid transactions, heavy payments to gambling sites and digital asset exchanges, and frequent chargebacks. It suspects the accounts were opened with GenAI-altered ID documents. Which investigative step does FinCEN say institutions have often used to detect this?",
    options: [
      "Rely on the original onboarding result, since the documents passed automated verification",
      "Send a 314(a) request to FinCEN asking whether the ID photos are genuine",
      "Re-review the account-opening documents, including a reverse image search of the ID photos",
      "Ask each customer to post the original ID documents for handwriting analysis"
    ],
    answer: [2],
    explanation: "FinCEN's analysis of BSA data found that institutions often detect GenAI and synthetic content by re-reviewing account-opening documents. Reverse image searches and other open-source research can show that an ID photo matches an online gallery of GenAI-generated faces. A 314(a) request is a request from law enforcement through FinCEN to institutions, not a tool institutions can use to query FinCEN. The account behaviour described matches FinCEN's own red flags for deepfake-enabled accounts.",
    source: [
      { label: "FinCEN Alert FIN-2024-Alert004 – 'Detecting and Mitigating Deepfake Identity Documents'", url: "https://www.fincen.gov/sites/default/files/shared/FinCEN-Alert-DeepFakes-Alert508FINAL.pdf" }
    ]
  },
  {
    id: "GLOB-020", domain: 1, topic: "Synthetic identity fraud: the bust-out", hy: false,
    q: "Two years ago, a card issuer approved an applicant with a thin credit file. The account made small purchases, paid on time and had its limit raised three times. Last week, the account and two other cards with the same identity were maxed out within days. No payments followed, the phone number is disconnected, and nobody has reported identity theft. What is the MOST likely typology?",
    options: [
      "Account takeover of a real customer's existing credit card",
      "Check kiting between two accounts to exploit the float",
      "A synthetic identity 'bust-out' after credit was built up",
      "First-party chargeback abuse by a genuine cardholder"
    ],
    answer: [2],
    explanation: "The Federal Reserve defines synthetic identity fraud as using a combination of PII to fabricate a person or entity for dishonest gain. Its toolkit explains that synthetics build payment histories and higher credit lines, often with small purchases and payments, and may show no suspicious signs until the fraudster maxes out the credit with no intention of repaying. Because the identity is fabricated, there is often no real victim to report identity theft. Account takeover would involve an existing genuine customer who usually complains.",
    source: [
      { label: "FedPayments Improvement – Synthetic identity fraud defined", url: "https://fedpaymentsimprovement.org/strategic-initiatives/payments-security/synthetic-identity-payments-fraud/synthetic-identity-fraud-defined/" },
      { label: "Federal Reserve Synthetic Identity Fraud Mitigation Toolkit – Identifying synthetics (building credit, then maxing out)", url: "https://fedpaymentsimprovement.org/resources/synthetic-identity-fraud-mitigation-toolkit/identifying-synthetics/" }
    ]
  },
  {
    id: "GLOB-021", domain: 3, topic: "Elder financial exploitation: FINRA Rule 2165 temporary holds", hy: false,
    q: "A US broker-dealer reasonably believes that the son of a 78-year-old client is financially exploiting her. The son holds her power of attorney and is also her listed trusted contact person. He asks for a large disbursement to an account in his name. The firm places a temporary hold under FINRA Rule 2165. What must it do next?",
    options: [
      "Within two business days, notify the son of the hold, since he is the trusted contact",
      "Keep the hold in place indefinitely until the client proves that no exploitation is occurring",
      "Release the funds, since FINRA allows holds only with a court order already in place",
      "Within two business days, notify other authorized parties but not the son, and begin an internal review at once"
    ],
    answer: [3],
    explanation: "Rule 2165 lets a member hold a disbursement from a Specified Adult's account (age 65 or older, or impaired) if it reasonably believes financial exploitation is occurring. It must notify, within two business days, the parties authorized on the account and the trusted contact person, except anyone it reasonably believes is involved in the exploitation. It must also immediately start an internal review. The hold expires after 15 business days unless extended under the rule (by up to 10 more, and then 30 more after reporting to a state regulator or agency, or a court), or by a regulator or court. It is not indefinite, and no court order is needed to start it.",
    source: [
      { label: "FINRA Rule 2165 – Financial Exploitation of Specified Adults (notification within two business days; 15-business-day hold and extensions)", url: "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2165" }
    ]
  },
  {
    id: "GLOB-022", domain: 1, topic: "Mail theft-related check fraud (FIN-2023-Alert003)", hy: false,
    q: "A customer says that a check she mailed to a utility company never arrived. Her statement shows it was paid for ten times the amount to a person she does not know. Under magnification, the paid check shows faded handwriting beneath darker writing in the payee and amount fields. Which typology is MOST likely?",
    options: [
      "Check washing of a check stolen from the mail",
      "Counterfeit cashier's check used in an overpayment scam",
      "Duplicate presentment of one check through remote deposit capture",
      "Check kiting between accounts to exploit the float period"
    ],
    answer: [0],
    explanation: "FinCEN's February 2023 alert, issued with the US Postal Inspection Service, describes criminals who steal checks from the mail and 'wash' them with chemicals to replace the payee and often the amount. Its red flags include a customer complaining that a mailed check never reached the payee and faded handwriting under darker handwriting. Institutions should use the key term FIN-2023-MAILTHEFT, select SAR field 34(d) (check fraud), and refer victims to USPIS. Kiting, cashier's-check overpayment scams and duplicate presentment do not involve altering a customer's own mailed check.",
    source: [
      { label: "FinCEN Alert FIN-2023-Alert003 on Mail Theft-Related Check Fraud (Feb. 27, 2023) – check washing and red flags", url: "https://www.fincen.gov/sites/default/files/shared/FinCEN%20Alert%20Mail%20Theft-Related%20Check%20Fraud%20FINAL%20508.pdf" }
    ]
  },
  {
    id: "GLOB-023", domain: 2, topic: "Fentanyl: FinCEN section 2313a orders (2025)", hy: true,
    changed: "FinCEN FEND Off Fentanyl Act s.2313a orders, effective 20 Oct 2025",
    q: "In June 2025, FinCEN acted against three Mexico-based financial institutions: CIBanco, Intercam and Vector Casa de Bolsa. Which statement correctly describes the action?",
    options: [
      "Section 311 special measures requiring US banks to close correspondent accounts within 30 days",
      "OFAC designations adding the three institutions to the SDN List and blocking their US property",
      "An advisory that listed red flags but did not require covered institutions to take any action",
      "Orders under section 2313a of the FEND Off Fentanyl Act, prohibiting transmittals of funds to or from them"
    ],
    answer: [3],
    explanation: "FinCEN found each institution to be of primary money laundering concern in connection with illicit opioid trafficking. These were the first orders under section 2313a of the FEND Off Fentanyl Act. They prohibit covered financial institutions from transmittals of funds to or from the three institutions, including to or from accounts or CVC addresses they administer. After extensions, the compliance date became 20 October 2025. The actions were not section 311 findings, not OFAC designations and not voluntary advisories.",
    source: [
      { label: "FinCEN press release (June 25, 2025) – orders under the FEND Off Fentanyl Act s.2313a against CIBanco, Intercam and Vector", url: "https://www.fincen.gov/news/news-releases/treasury-issues-unprecedented-orders-under-powerful-new-authority-counter" },
      { label: "FinCEN press release – Treasury extends effective dates (until October 20, 2025)", url: "https://www.fincen.gov/news/news-releases/treasury-extends-effective-dates-orders-issued-under-new-authority-counter-0" }
    ]
  },
  {
    id: "GLOB-024", domain: 1, topic: "Fentanyl precursor procurement (FIN-2024-A002)", hy: false,
    q: "A US bank's customer is a Mexican importing company with almost no online presence. It sends many low-dollar wires to chemical companies in the PRC and Hong Kong, and it transacts with no suppliers anywhere else. Two other, apparently unrelated Mexican importers that bank elsewhere share its phone number and pay the same PRC suppliers. What is the MOST likely concern?",
    options: [
      "Procurement of fentanyl precursor chemicals or pill-press equipment for Mexico-based cartels",
      "Proliferation financing to buy missile components for a sanctioned state program",
      "Black Market Peso Exchange trade to repatriate cartel dollars into pesos",
      "A missing-trader VAT carousel fraud run through linked import companies"
    ],
    answer: [0],
    explanation: "FinCEN's June 2024 supplemental advisory lists these red flags for the illicit procurement of fentanyl precursors and manufacturing equipment: Mexican importers with little online presence, unrelated importers sharing phone numbers or addresses and paying the same PRC chemical suppliers, importers dealing mainly with PRC or Hong Kong chemical firms for no clear reason, and low-dollar payments to those industries. SARs should use the key term 'FENTANYL FIN-2024-A002'. Nothing here points to dual-use missile goods, pesos or VAT.",
    source: [
      { label: "FinCEN Supplemental Advisory FIN-2024-A002 on fentanyl precursor chemicals and manufacturing equipment (June 20, 2024) – red flags", url: "https://www.fincen.gov/system/files/advisory/2024-06-20/FinCEN-Supplemental-Advisory-on-Fentanyl-508C.pdf" }
    ]
  },
  {
    id: "GLOB-025", domain: 1, topic: "Financially motivated sextortion (FIN-2025-NTC2)", hy: true,
    changed: "FinCEN Notice on financially motivated sextortion, FIN-2025-NTC2, Sept 2025",
    q: "A 16-year-old has a checking account co-signed by a parent. Between 23:00 and 02:00 one night, the account sends seven peer-to-peer payments of USD 25 to USD 50 to a new recipient in Côte d'Ivoire. The payment memos read 'please stop' and 'delete them'. What is the MOST likely explanation?",
    options: [
      "In-game purchases for an online game, charged through a P2P platform",
      "Financially motivated sextortion of a minor",
      "The teenager has been recruited as a money mule through a job scam",
      "An investment scam in which the teenager is building a crypto position"
    ],
    answer: [1],
    explanation: "FinCEN's September 2025 notice describes perpetrators who coerce victims, often minors, into sending explicit images and then demand payment. Its red flags include a series of low, round-dollar P2P payments, including from minors' co-signed accounts, to a recipient in a jurisdiction of concern such as Côte d'Ivoire, Nigeria or the Philippines. Other flags are memos such as 'delete the pictures' or 'please stop' and payments late at night. A mule would receive and pass on funds rather than only send them. SARs should use the key term FIN-2025-SEXTORTION.",
    source: [
      { label: "FinCEN Notice FIN-2025-NTC2 on Financially Motivated Sextortion (Sept. 8, 2025) – victim red flags", url: "https://www.fincen.gov/system/files/2025-09/FinCEN-Notice-FMS-508C.pdf" }
    ]
  },
  {
    id: "GLOB-026", domain: 1, topic: "Sextortion: money mule account indicators", hy: false,
    changed: "FinCEN Notice on financially motivated sextortion, FIN-2025-NTC2, Sept 2025",
    q: "A bank is building separate detection scenarios for victims and for money mules in financially motivated sextortion. Which activities does FinCEN list as red flags for MONEY MULE accounts? (Choose two.)",
    options: [
      "Receiving several P2P payments from unrelated accounts, then quickly sending the funds by P2P to other unrelated accounts",
      "Sending low, round-dollar P2P payments late at night with memos such as 'delete the pictures'",
      "Receiving many small P2P deposits in a short period that are quickly withdrawn in cash",
      "Making several unusual purchases of prepaid access cards that are redeemed in another jurisdiction",
      "Buying virtual currency on a P2P platform and sending it to an unhosted wallet with no prior link"
    ],
    answer: [0, 2],
    explanation: "FinCEN's notice gives separate red flag lists. For money mule accounts, it lists receiving multiple P2P payments from unrelated accounts and rapidly passing them on, and receiving many small P2P deposits that are quickly withdrawn in cash or transferred with no apparent lawful purpose. Late-night payments with extortion memos, unusual prepaid card purchases, and buying CVC to send to an unconnected unhosted wallet are listed as victim indicators.",
    source: [
      { label: "FinCEN Notice FIN-2025-NTC2 – red flags for victims and for money mule accounts", url: "https://www.fincen.gov/system/files/2025-09/FinCEN-Notice-FMS-508C.pdf" }
    ]
  },
  {
    id: "GLOB-027", domain: 4, topic: "Export controls: acting on red flags found after payment (BIS GP 10)", hy: true,
    q: "In a post-transaction review, a US bank finds that a customer's overseas buyer of electronics is located at the same address as a company on the BIS Entity List. The customer will not give end-user details, and the bank cannot resolve the red flag. The customer now asks for another payment from the same buyer. According to BIS's October 2024 guidance, what should the bank do?",
    options: [
      "Process the payment, since BIS does not expect banks to screen transactions in real time",
      "Process the payment, since General Prohibition 10 applies to exporters and not to banks",
      "Ask BIS to confirm whether the customer holds an export license before the bank decides",
      "Refrain from further transactions with these parties and consider a SAR on possible export control evasion"
    ],
    answer: [3],
    explanation: "BIS's October 2024 guidance says that GP 10 bars any person, including a financial institution, from financing or servicing an item with knowledge that an EAR violation has occurred or is intended. 'Knowledge' includes awareness of a high probability. Being co-located with an Entity List party and refusing to give end-user details are red flags that show a high probability of evasion. If a bank cannot resolve them after a transaction, BIS recommends it refrain from future transactions with those parties. BIS does not confirm licenses to third parties. SARs can use the key term FIN-2023-GLOBALEXPORT (or FIN-2022-RUSSIABIS for Russia and Belarus).",
    source: [
      { label: "BIS – Guidance to Financial Institutions on Best Practices for Compliance with the EAR (Oct. 9, 2024)", url: "https://www.bis.gov/media/documents/guidance-financial-institutions-best-practices-compliance-export-administration.pdf" }
    ]
  },
  {
    id: "GLOB-028", domain: 3, topic: "Export controls: which BIS lists to screen in real time", hy: false,
    q: "A US bank is designing its payment screening for export-control risk. For cross-border payments likely to be linked to US exports, which approach matches BIS's October 2024 best-practice guidance?",
    options: [
      "Screen every domestic and cross-border payment in real time against the full Consolidated Screening List",
      "Screen in real time against the Denied Persons List, certain military-intelligence end users and certain Entity List parties",
      "Do no real-time screening against BIS lists at all, because BIS expects only post-transaction reviews",
      "Screen in real time only against the Unverified List, which BIS treats as its highest-risk list"
    ],
    answer: [1],
    explanation: "BIS says it generally does not expect real-time screening to prevent GP 10 violations and relies instead on customer due diligence and ongoing review for red flags. However, for cross-border payments likely associated with US exports, it recommends real-time screening of names and addresses against the Denied Persons List, the military-intelligence end users in 15 CFR 744.22(f)(2), and Entity List parties subject to the foreign direct product rules (footnotes 3 and 4), among others. The Unverified List and the wider CSL are recommended for customer due diligence, not blanket real-time screening.",
    source: [
      { label: "BIS – Guidance to Financial Institutions on Best Practices for Compliance with the EAR (Oct. 9, 2024) – real-time screening", url: "https://www.bis.gov/media/documents/guidance-financial-institutions-best-practices-compliance-export-administration.pdf" }
    ]
  },
  {
    id: "GLOB-029", domain: 1, topic: "Environmental crime: illegal mining (FIN-2021-NTC4)", hy: false,
    q: "A US precious-metals refiner that banks with you has started buying gold doré from several newly formed exporters in a South American mining region. Payments are made to shell companies in third countries. According to FinCEN's environmental crimes notice, what makes illegal mining a particular money laundering concern?",
    options: [
      "Its proceeds are almost always held in cash and rarely enter the international financial system",
      "It is linked mainly to terrorist groups rather than to transnational criminal organizations",
      "It generates illicit proceeds and also provides a way to launder the proceeds of other crimes",
      "It is not treated as an environmental crime, so it is a sanctions issue only, not an AML one"
    ],
    answer: [2],
    explanation: "FinCEN's November 2021 notice (FIN-2021-NTC4) says illegal mining is unique because it gives illicit actors both a source of proceeds and a means to launder proceeds of other crimes. The trade is often mixed with legal trade through corporate structures and shell companies, and it is increasingly linked to TCOs. The notice says most of the proceeds are thought to end up in the international financial system, and it names illegal mining as one of five environmental crime categories.",
    source: [
      { label: "FinCEN Notice FIN-2021-NTC4 on Environmental Crimes (Nov. 18, 2021) – illegal mining", url: "https://www.fincen.gov/system/files/2021-11/FinCEN%20Environmental%20Crimes%20Notice%20508%20FINAL.pdf" }
    ]
  },
  {
    id: "GLOB-030", domain: 1, topic: "Ransomware: DFIR firms and payment facilitation", hy: false,
    q: "A bank's customer is a digital forensics and incident response (DFIR) firm. It receives USD 480,000 from a regional hospital and, within hours, sends almost the same amount to a virtual currency exchange. The firm is not registered with FinCEN as an MSB. Apart from OFAC risk, what is the MOST significant AML concern?",
    options: [
      "The hospital may be structuring cash to avoid Currency Transaction Reports",
      "The firm may be conducting unregistered money transmission to pay a ransom",
      "There is no AML concern, because DFIR firms are exempt from BSA requirements",
      "The only issue is that the bank must file a CTR on the outgoing wire transfer"
    ],
    answer: [1],
    explanation: "FinCEN's 2021 ransomware advisory notes that some DFIR firms and cyber insurers take a victim's fiat funds, exchange them for CVC and send it to criminals. Depending on the facts, this can be money transmission, which requires MSB registration and BSA compliance. Its red flags include an irregular payment from a high-risk sector (such as healthcare) to a DFIR firm, and a DFIR customer that quickly sends equivalent amounts to a CVC exchange. SARs should use the key term 'CYBER FIN-2021-A004' and SAR field 42. CTRs apply only to physical currency.",
    source: [
      { label: "FinCEN Advisory FIN-2021-A004 on Ransomware (Nov. 8, 2021) – DFIR/CIC facilitation and red flags", url: "https://www.fincen.gov/system/files/2021-11/FinCEN%20Ransomware%20Advisory_FINAL_508_.pdf" }
    ]
  }
]);
