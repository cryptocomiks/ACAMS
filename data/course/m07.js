window.CAMS_COURSE = (window.CAMS_COURSE || []).concat([{
  id: "m07",
  order: 7,
  domain: 2,
  title: "European Union and United Kingdom frameworks",
  icon: "🇪🇺",
  minutes: 14,
  summary: "Master the EU regime, from the first AML directive to the 2024 package (AMLR, AMLD6, AMLA), and the UK regime: POCA offences and the DAML clock, the MLRs and their supervisors, the failure-to-prevent offences and UK sanctions.",
  mostTested: [
    "2024 EU package: **AMLR** (regulation, applies **10 July 2027**), **AMLD6** (directive, transposed), **AMLA** (**Frankfurt**, direct supervision of about **40** groups from **2028**)",
    "AMLR rules: **EUR 10,000** cash limit (linked payments count), beneficial owner at **25% or more**, reviews at least every **1 year** (higher risk) or **5 years**",
    "Which directive did what: 3AMLD risk-based approach and TF, 4AMLD BO registers, 5AMLD crypto exchanges, **2018/1673** self-laundering and 22 predicates",
    "POCA: ss.327-329 principal offences (**14 years**), s.330 objective test in the regulated sector, s.333A **tipping off**",
    "DAML clock: **7 working days** notice, **31-day** moratorium, extensions up to **186 days**; **£3,000** threshold amount",
    "UK failure-to-prevent offences: bribery (**adequate** procedures), tax evasion facilitation and fraud (**reasonable** procedures)",
    "Sanctions ownership: UK **more than 50%**, no aggregation; EU **50% or more**, aggregation considered; OFSI penalties are **strict liability**"
  ],
  sections: [
    {
      h: "EU directives: 1AMLD to the criminal-law directive",
      p: [
        "Before 2024 the EU harmonised AML rules through **directives**, which each Member State had to **transpose** into national law. The exam likes to ask which directive introduced which measure."
      ],
      table: {
        head: ["Directive", "Year", "What it added"],
        rows: [
          ["**1AMLD** (91/308/EEC)", "1991", "Drug-trafficking proceeds (Vienna definition); banks identify customers from **ECU 15,000**; records kept **5 years**"],
          ["**2AMLD** (2001/97/EC)", "2001", "All **serious crime**; lawyers, notaries, accountants, estate agents, casinos and **high-value dealers** covered"],
          ["**3AMLD** (2005/60/EC)", "2005", "**Terrorist financing**; **risk-based** SDD and EDD; beneficial owner above **25%**; PEPs"],
          ["**4AMLD** (2015/849)", "2015", "**Central BO registers**; EU risk assessment; domestic PEPs; traders in goods from **EUR 10,000** cash"],
          ["**5AMLD** (2018/843)", "2018", "**Virtual currency exchanges** and **custodian wallet providers**; public access to company BO registers"],
          ["**Directive 2018/1673**", "2018", "Criminal law: **22** predicate categories (incl. **cybercrime**, **environmental** and tax crime), **self-laundering**, maximum penalty of at least **4 years**, **legal person** liability"]
        ]
      },
      tip: "Exam tip: '6AMLD' can mean two texts. Directive **2018/1673** harmonises the criminal offence and needs **no prior conviction** for the predicate; Directive **2024/1640** is the preventive directive of the 2024 package.",
      remember: "3AMLD brought the risk-based approach, 4AMLD the BO registers, 5AMLD the crypto exchanges."
    },
    {
      h: "The 2024 package: AMLR, AMLD6 and AMLA",
      p: [
        "The 2024 package creates a **single rulebook**. A **regulation** applies directly in every Member State; a **directive** must be transposed."
      ],
      table: {
        head: ["Instrument", "Nature", "Key dates and facts"],
        rows: [
          ["**AMLR**, Reg. (EU) 2024/1624", "Directly applicable rules for obliged entities", "Applies from **10 July 2027**; football clubs and agents from **2029**"],
          ["**AMLD6**, Dir. (EU) 2024/1640", "National systems: supervisors, **FIUs**, registers", "Transpose by **10 July 2027**; BO register access rules by **10 July 2026**"],
          ["**AMLA**, Reg. (EU) 2024/1620", "EU authority in **Frankfurt**", "Most tasks from **1 July 2025**; first selection in **2027**; **direct supervision from 2028**"],
          ["**TFR**, Reg. (EU) 2023/1113", "Travel rule for funds and **crypto-assets**", "Applies since **30 December 2024**"]
        ]
      },
      list: [
        "AMLA will directly supervise about **40** credit and financial institutions or groups with **high residual risk** in at least **six Member States**; selection repeats every **three years**.",
        "AMLA coordinates supervisors and supports **FIUs**. It does not replace national FIUs or prosecute launderers.",
        "Under AMLD6, FIUs can **suspend** a suspicious transaction for up to **10 working days**."
      ],
      tip: "Exam tip: in 2026 the AMLR is adopted but not yet applicable. Until 10 July 2027, national laws transposing the earlier directives govern."
    },
    {
      h: "Core AMLR rules",
      list: [
        "**Cash limit (Art. 80)**: traders in goods or services may accept or make cash payments only up to **EUR 10,000**, including operations that **appear to be linked**. Member States may set lower limits. Payments between private individuals and deposits at bank premises fall outside it.",
        "**CDD triggers (Art. 19)**: occasional transactions of **EUR 10,000** or more; identification for occasional cash transactions from **EUR 3,000**; CASPs from **EUR 1,000**.",
        "**Beneficial owner (Art. 52)**: **25% or more** of shares, votes or other ownership interest. Indirect stakes are **multiplied** down the chain and then added up; control also counts.",
        "**Customer updates (Art. 26)**: at least every **1 year** for higher-risk (EDD) customers and **5 years** for others.",
        "**Former PEPs (Art. 45)**: enhanced measures for at least **12 months** after leaving office.",
        "**Anonymity (Art. 79)**: no anonymous accounts, including accounts using **anonymity-enhancing coins**.",
        "FIU requests answered within **5 working days**; records kept **5 years**."
      ],
      tip: "Exam tip: splitting a EUR 14,000 car purchase into two EUR 7,000 cash instalments still breaches the limit, because linked payments count.",
      remember: "AMLR: EUR 10,000 cash cap, 25% or more for BO, reviews every 1 or 5 years."
    },
    {
      h: "Registers, high-risk countries and crypto",
      p: [
        "In **WM and Sovim** (22 November 2022) the Court of Justice held **invalid** the 5AMLD rule giving **any member of the general public** access to company BO registers, because it breached privacy and data protection rights. Authorities and obliged entities kept access. **AMLD6 Art. 12** now grants access to people with a **legitimate interest**, such as journalists, civil society and prospective counterparties.",
        "The Commission lists **high-risk third countries**, and obliged entities must apply **EDD** to business involving them. The AMLR has three tiers: **significant strategic deficiencies** (EDD plus **countermeasures**), **compliance weaknesses** (targeted EDD, based on the FATF grey list) and a **specific and serious threat**. The EU list can go beyond the FATF lists: **Russia** was added because its FATF membership is suspended (changed January 2026)."
      ],
      list: [
        "**Crypto travel rule (TFR)**: every crypto transfer carries originator and beneficiary data, **whatever the amount**. Above **EUR 1,000** to or from a **self-hosted address**, the CASP assesses whether its customer owns or controls it.",
        "**MiCA**: CASPs need **authorisation**; the transitional period for nationally registered firms ended by **1 July 2026** at the latest."
      ],
      tip: "Exam tip: a listed high-risk country triggers mandatory EDD, not a ban on the business."
    },
    {
      h: "UK: POCA money laundering offences",
      p: [
        "Part 7 of the **Proceeds of Crime Act 2002 (POCA)** takes an **all-crimes** approach: criminal property is the benefit from any conduct that is an offence in the UK, or would be if committed there. The offender must **know or suspect** that it is criminal property."
      ],
      table: {
        head: ["Section", "Offence", "Key point"],
        rows: [
          ["**s.327**", "Concealing, disguising, converting, transferring or removing criminal property", "Max **14 years**"],
          ["**s.328**", "Entering into an **arrangement** that facilitates another's acquisition, retention, use or control of it", "Max **14 years**"],
          ["**s.329**", "Acquiring, using or possessing it", "Defence of **adequate consideration**; max **14 years**"],
          ["**s.330**", "Failure to disclose in the **regulated sector**", "**Objective** test: reasonable grounds to know or suspect; max **5 years**"],
          ["**s.331/332**", "Failure to disclose by a **nominated officer**", "Max **5 years**"],
          ["**s.333A**", "**Tipping off** in the regulated sector", "Revealing a SAR or investigation in a way likely to prejudice it; max **2 years**"]
        ]
      },
      list: [
        "Defence to ss.327-329: an **authorised disclosure** (SAR) and, before acting, **appropriate consent**, known as a **DAML**.",
        "**s.333B** allows disclosures within the same undertaking and between credit or financial institutions of the same **group** in the UK, the EEA or an equivalent country."
      ],
      tip: "Exam tip: 'I never actually suspected' fails under s.330 if the red flags gave reasonable grounds. Courts must consider whether staff followed Treasury-approved guidance such as **JMLSG**."
    },
    {
      h: "UK SARs and the DAML clock",
      p: [
        "SARs go to the **UK Financial Intelligence Unit (UKFIU)**, part of the **National Crime Agency (NCA)**. A DAML request is a SAR that also seeks a defence before a prohibited act, such as releasing funds."
      ],
      table: {
        head: ["Stage", "Length", "Effect"],
        rows: [
          ["**Notice period**", "**7 working days**, starting the first working day after the SAR", "No refusal: the reporter has a defence and may proceed"],
          ["**Moratorium**", "**31 calendar days** from a refusal", "The reporter may proceed when it ends, unless extended"],
          ["**Court extension** (s.336A)", "Up to **31 days** each time, **186 days** in total", "Sought by a senior law enforcement officer"]
        ]
      },
      list: [
        "**Threshold amount £3,000** (raised from £1,000, changed July 2025): below it, banks operating an account, and regulated firms that have done CDD and are **exiting** a customer, need no DAML. A SAR is still due if there is suspicion.",
        "A scam victim's savings are **not yet criminal property**, so no DAML can be given for an APP or romance-scam payment; use fraud-prevention processes.",
        "**s.339ZB** (Criminal Finances Act 2017) lets regulated firms share information on a suspicion, then file a **joint disclosure report** within **84 days**."
      ],
      remember: "7 working days to answer, 31 days to act, 186 days of extensions at most."
    },
    {
      h: "UK regulations, guidance and supervisors",
      p: [
        "The **Money Laundering Regulations 2017 (MLRs)**, made under the **Sanctions and Anti-Money Laundering Act 2018 (SAMLA)**, set risk assessment, CDD, EDD, PEP and record-keeping duties. **SI 2026/621** amended them, mostly from **30 June 2026** (changed June 2026)."
      ],
      list: [
        "Mandatory country-based EDD now covers only **FATF call-for-action** countries; EDD applies to **unusually** complex or large transactions.",
        "Thresholds are now in sterling: occasional-transaction CDD from **£12,000**, high value dealer cash from **£10,000**, casinos from **£2,000**, transfers of funds above **£800**.",
        "**Domestic PEPs** start from a lower risk than foreign PEPs. PEP measures last at least **12 months** after leaving office, but stop for family and close associates once the PEP leaves.",
        "**JMLSG** guidance comes from financial trade associations and is **approved by HM Treasury**: not binding, but courts must consider it.",
        "FCA firms appoint an **MLRO** with enough authority, independence and resources (**SYSC 6.3.9R**)."
      ],
      table: {
        head: ["Supervisor", "Covers"],
        rows: [
          ["**FCA**", "Banks, financial institutions, cryptoasset businesses; first criminal MLR prosecution (**NatWest**, 2021)"],
          ["**HMRC**", "High value dealers, estate agents, art market participants, MSBs and TCSPs with no other supervisor"],
          ["**Gambling Commission**", "Casinos"],
          ["**22 professional body supervisors**", "Lawyers and accountants, overseen by **OPBAS** (within the FCA, since **2018**)"]
        ]
      },
      tip: "Exam tip: in October 2025 the government decided the FCA will take over AML supervision of legal, accountancy and TCSP firms, and OPBAS will close. The reform is not yet in force (changed October 2025)."
    },
    {
      h: "UK corporate offences and the ECCTA",
      table: {
        head: ["Offence", "Liable when", "Defence"],
        rows: [
          ["**Bribery Act 2010 s.7** (from 1 July 2011)", "An associated person bribes to win business or an advantage for the organisation", "**Adequate procedures**"],
          ["**Criminal Finances Act 2017 ss.45-46** (from 30 September 2017)", "An associated person criminally facilitates **UK** or **foreign** tax evasion", "**Reasonable prevention procedures**"],
          ["**ECCTA 2023 s.199** (from **1 September 2025**)", "An associated person commits fraud intending to benefit the organisation or its clients; **large** organisations only", "**Reasonable prevention procedures**"]
        ]
      },
      list: [
        "The Bribery Act also covers **private-sector** bribery, has **no facilitation payments** exception (unlike the FCPA) and carries up to **10 years** for individuals.",
        "ECCTA 'large' means 2 of 3: over **250** employees, **£36 million** turnover, **£18 million** balance sheet. No offence where the organisation is the **victim**.",
        "**Unexplained wealth orders** (CFA 2017): the High Court can require a **PEP**, or someone linked to **serious crime**, to explain property worth over **£50,000**; no conviction needed.",
        "ECCTA also brought Companies House **identity verification** for directors and PSCs from **18 November 2025** (no substitute for a bank's CDD) and **s.188** protection for firms sharing customer information.",
        "Since **29 June 2026**, a company commits any offence its **senior manager** commits within their authority (Crime and Policing Act 2026; changed June 2026)."
      ],
      tip: "Exam tip: no failure-to-prevent offence needs senior management knowledge. The Bribery Act defence says **adequate**; the tax and fraud offences say **reasonable**."
    },
    {
      h: "Sanctions: EU and UK",
      p: [
        "EU sanctions are adopted by the **Council** acting **unanimously** through a CFSP decision (**Art. 29 TEU**), with economic measures in a regulation under **Art. 215 TFEU**. **Member States** enforce them. Directive **(EU) 2024/1226** makes breaches crimes, with maximum company fines of at least **5% of worldwide turnover** or **EUR 40 million**.",
        "UK sanctions rest on **SAMLA 2018**. The **FCDO** designates and publishes the **UK Sanctions List**; **OFSI** (HM Treasury) enforces **financial** sanctions and **OTSI** (Department for Business and Trade) **trade** sanctions."
      ],
      table: {
        head: ["Point", "EU", "UK"],
        rows: [
          ["Ownership test", "**50% or more**, or control", "**More than 50%** of shares or votes, or control (e.g. appointing most of the board)"],
          ["Several listed owners", "Aggregated holdings taken into account", "**Not aggregated** without a joint arrangement"],
          ["Civil penalties", "Set by each Member State", "OFSI: **strict liability** since 15 June 2022; up to the greater of **£1 million** or **50%** of the value"]
        ]
      },
      list: [
        "UK relevant firms report designated persons' funds and suspected breaches to **OFSI as soon as practicable**; a SAR does not replace this.",
        "EU Russia rules: parents use **best efforts** so non-EU subsidiaries do not undermine sanctions (**Art. 8a**); exporters of sensitive items need a **no re-export to Russia** clause (**Art. 12g**)."
      ],
      tip: "Exam tip: exactly 50% held by one designated person is not UK 'ownership', but a right to appoint most of the board is 'control'."
    }
  ],
  cards: [
    { front: "AMLR vs AMLD6: what is the legal difference?", back: "The AMLR (2024/1624) is a regulation, directly applicable from 10 July 2027. AMLD6 (2024/1640) is a directive that Member States must transpose." },
    { front: "Where is AMLA and what will it supervise directly?", back: "Frankfurt. From 2028, about 40 credit and financial institutions or groups with high residual risk operating in at least six Member States." },
    { front: "AMLR cash payment limit", back: "EUR 10,000 for traders in goods or services, including linked operations. Lower national limits may apply; payments between private individuals are excluded." },
    { front: "AMLR beneficial ownership threshold", back: "25% or more of shares, voting rights or other ownership interest, direct or indirect, or control by other means." },
    { front: "What did the CJEU decide in WM and Sovim (2022)?", back: "Unrestricted public access to company BO registers (5AMLD) was invalid. AMLD6 now grants access to those with a legitimate interest." },
    { front: "Which directive first covered virtual currency exchanges?", back: "5AMLD (2018/843): exchanges between virtual and fiat currencies and custodian wallet providers." },
    { front: "Key features of Directive 2018/1673 (criminal law)", back: "22 predicate categories, self-laundering, no prior conviction for the predicate, maximum penalty of at least 4 years, liability of legal persons." },
    { front: "EU crypto travel rule: minimum amount?", back: "None: all crypto transfers carry originator and beneficiary data. Above EUR 1,000 with a self-hosted address, assess ownership or control." },
    { front: "POCA s.330: what is the test?", back: "Knowledge, suspicion or reasonable grounds for either, from regulated-sector business, with no disclosure as soon as practicable. Objective, negligence-based test." },
    { front: "DAML timings under POCA", back: "7 working-day notice period; after a refusal, a 31-day moratorium, which courts can extend by up to 186 days in total." },
    { front: "What does the £3,000 threshold amount do?", back: "No DAML needed below it when banks operate an account or regulated firms exit a customer. A SAR is still required on suspicion." },
    { front: "Can a UK bank tell its German group bank about a SAR?", back: "Yes. s.333B permits disclosures between credit or financial institutions of the same group in the UK, EEA or equivalent countries." },
    { front: "Which countries trigger mandatory EDD under the amended MLRs (June 2026)?", back: "Only FATF call-for-action countries. Grey-list exposure is handled through the firm's own risk assessment." },
    { front: "ECCTA failure to prevent fraud: scope and defence", back: "Large organisations, since 1 September 2025. Fraud by an associated person intended to benefit the organisation. Defence: reasonable prevention procedures." },
    { front: "Bribery Act s.7 vs FCPA", back: "s.7 covers private and public bribery, has no facilitation payments exception, and offers an adequate procedures defence." },
    { front: "Unexplained wealth order requirements", back: "Property over £50,000; income insufficient or unlawful origin suspected; respondent a PEP or linked to serious crime. No conviction needed." },
    { front: "OFSI civil penalties", back: "Strict liability since 15 June 2022; maximum is the greater of £1 million or 50% of the breach's estimated value." },
    { front: "UK vs EU ownership test for sanctions", back: "UK: more than 50%, holdings of different designated persons not aggregated. EU: 50% or more, aggregated holdings taken into account." }
  ],
  numbers: [
    { q: "AMLR limit on cash payments for goods or services", a: "EUR 10,000", wrong: ["EUR 3,000", "EUR 5,000", "EUR 15,000"] },
    { q: "AMLR maximum interval between updates for higher-risk customers", a: "1 year", wrong: ["2 years", "3 years", "5 years"] },
    { q: "Minimum maximum prison term required by Directive 2018/1673", a: "4 years", wrong: ["2 years", "6 years", "10 years"] },
    { q: "POCA DAML notice period", a: "7 working days", wrong: ["5 working days", "10 working days", "31 calendar days"] },
    { q: "POCA moratorium after a DAML refusal", a: "31 calendar days", wrong: ["7 calendar days", "14 calendar days", "60 calendar days"] },
    { q: "Maximum total court extension of the POCA moratorium", a: "186 days", wrong: ["31 days", "62 days", "365 days"] },
    { q: "POCA threshold amount since July 2025", a: "£3,000", wrong: ["£250", "£1,000", "£10,000"] },
    { q: "Maximum prison term for POCA ss.327-329", a: "14 years", wrong: ["2 years", "5 years", "10 years"] },
    { q: "Property value needed for a UK unexplained wealth order", a: "More than £50,000", wrong: ["More than £10,000", "More than £100,000", "More than £1 million"] },
    { q: "Employee test for a 'large organisation' under ECCTA s.201", a: "More than 250", wrong: ["More than 50", "More than 500", "More than 1,000"] }
  ],
  questionIds: [
    "D2-011", "D2-022", "D2-024",
    "EU-001", "EU-002", "EU-003", "EU-004", "EU-005", "EU-006", "EU-007", "EU-008", "EU-009", "EU-010",
    "EU-011", "EU-013", "EU-014", "EU-015", "EU-016", "EU-017", "EU-018", "EU-019", "EU-020", "EU-021",
    "EU-022", "EU-023", "EU-024", "EU-025", "EU-026", "EU-027", "EU-028", "EU-029", "EU-030",
    "TRAP-014", "TRAP-015", "TRAP-016",
    "INV-022", "CASE-007",
    "SANC-004", "SANC-005", "SANC-029", "SANC-032"
  ],
  sources: [
    { label: "Regulation (EU) 2024/1624 (AMLR): Arts 19, 26, 29-31, 45, 52, 69, 77, 79, 80 and 90", url: "https://publications.europa.eu/resource/celex/32024R1624" },
    { label: "Directive (EU) 2024/1640 (AMLD6): Art. 12 legitimate interest, Art. 24 FIU suspension, Art. 78 transposition", url: "https://publications.europa.eu/resource/celex/32024L1640" },
    { label: "Regulation (EU) 2024/1620 (AMLA): seat in Frankfurt, selection of directly supervised entities, direct supervision from 2028", url: "https://publications.europa.eu/resource/celex/32024R1620" },
    { label: "Directive (EU) 2018/1673 on combating money laundering by criminal law", url: "https://publications.europa.eu/resource/celex/32018L1673" },
    { label: "CJEU Joined Cases C-37/20 and C-601/20, WM and Sovim (22 November 2022)", url: "https://publications.europa.eu/resource/celex/62020CJ0037" },
    { label: "Proceeds of Crime Act 2002, Part 7 (money laundering), legislation.gov.uk", url: "https://www.legislation.gov.uk/ukpga/2002/29/part/7" },
    { label: "UKFIU (NCA): Chapter 3, Understanding DAMLs and DATFs (notice and moratorium periods, £3,000 exemptions)", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/776-ukfiu-chapter-3-understanding-damls-and-datfs/file" },
    { label: "Explanatory Memorandum to the Money Laundering and Terrorist Financing (Amendment) Regulations 2026 (SI 2026/621)", url: "https://www.legislation.gov.uk/uksi/2026/621/pdfs/uksiem_20260621_en_001.pdf" },
    { label: "Economic Crime and Corporate Transparency Act 2023, s.199 failure to prevent fraud (in force 1 September 2025)", url: "https://www.legislation.gov.uk/ukpga/2023/56/section/199" },
    { label: "OFSI: UK financial sanctions general guidance (ownership and control, reporting, OTSI)", url: "https://www.gov.uk/government/publications/financial-sanctions-general-guidance/uk-financial-sanctions-general-guidance" }
  ]
}]);
