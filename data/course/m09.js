window.CAMS_COURSE = (window.CAMS_COURSE || []).concat([{
  id: "m09",
  order: 9,
  domain: 3,
  title: "Building the AFC program: governance and risk",
  icon: "🏛️",
  minutes: 14,
  summary: "Learn how an anti-financial crime program is built and governed: the risk-based approach, the enterprise-wide risk assessment and risk appetite, the program pillars, the board and the three lines of defense, the BSA/AML officer, training, independent testing, exams and remediation, third parties and de-risking.",
  mostTested: [
    "**Inherent risk** (before controls) weighed against **control effectiveness** gives **residual risk**, which must sit within the **board-approved risk appetite**. Risk factors: **customers, products and services, geographies, delivery channels**",
    "US program pillars (**31 CFR 1020.210**): **internal controls**, **independent testing**, **BSA/AML officer**, **training**, plus **risk-based CDD** (fifth pillar, 2016 CDD Rule); written and **board-approved**",
    "Three lines of defense: the **business owns** the risk, **compliance oversees and challenges**, **internal audit** gives independent assurance; the **board** sits above the lines and stays accountable",
    "BSA/AML officer: **authority, independence and resources**, with a reporting line up to the board; no business-line veto over SARs or exits",
    "**FIN-2014-A007** culture of compliance: engaged leadership, compliance **not compromised by revenue**, information sharing, adequate resources, **independent and competent testing**, knowing how BSA reports are used",
    "New products are risk-assessed **before launch** (**R.15**); outsourcing or reliance (**R.17**) never transfers responsibility",
    "**De-risking** (indiscriminate exits of whole customer categories) contradicts the RBA; manage risk **case by case**"
  ],
  sections: [
    {
      h: "The risk-based approach (FATF R.1)",
      p: [
        "The **risk-based approach (RBA)** means identifying, assessing and understanding ML/TF risk, then applying **proportionate** measures. **R.1** requires institutions to **identify, assess and take effective risk-based action** to mitigate their **ML, TF and PF** risks."
      ],
      list: [
        "**Higher risk**: enhanced measures. **Lower risk**: countries should **allow and encourage** simplified measures (changed February 2025), but **never** where ML/TF is suspected.",
        "Institutions **document** their assessments, keep them **up to date** and have policies, controls and procedures **approved by senior management** (INR.1).",
        "Countries keep the **national risk assessment** current and share its results with institutions.",
        "**PF risk** may be assessed within the existing sanctions or compliance program."
      ],
      tip: "Exam tip: identical CDD for every customer fails the RBA, as does EDD for everyone. The RBA is not a 'zero failure' standard either (FATF banking guidance, 2014)."
    },
    {
      h: "Enterprise-wide risk assessment and risk appetite",
      p: [
        "The **enterprise-wide risk assessment (EWRA)** drives the program: CDD levels, monitoring, staffing, training and audit scope. For US banks it is **not a specific legal requirement**, yet examiners scope exams from it and build their own if it is inadequate (FFIEC)."
      ],
      table: {
        head: ["Phase", "Meaning"],
        rows: [
          ["1. **Inherent risk**", "Exposure **before** controls, by **customers, products and services, geographies** and **delivery channels**"],
          ["2. **Controls**", "**Design and operating** effectiveness of governance, CDD/EDD, monitoring, training and testing"],
          ["3. **Residual risk**", "What **remains** after controls, compared with the **risk appetite**"]
        ]
      },
      list: [
        "**Risk appetite**: the **board-approved** level and types of risk the institution will accept to meet its objectives; residual risk above it calls for stronger controls, restrictions or exit.",
        "Update on triggers such as new products, customer types, markets or **mergers and acquisitions**; the FFIEC sets no fixed frequency.",
        "Ratings drive controls: **HSBC USA** rated Mexico 'standard', its lowest risk, so over **$670 billion** of HSBC Mexico wires went unmonitored (2012). Map every high risk to monitoring; never downgrade a risk to fit the controls."
      ],
      tip: "Exam tip: inherent risk ignores controls; residual risk includes them. 'What remains after EDD and monitoring?' is residual risk."
    },
    {
      h: "The program pillars: US, FATF and OFAC",
      p: [
        "**31 CFR 1020.210** requires a bank AML program with **five pillars**; the statute (**31 U.S.C. 5318(h)**) names the first four. The program must be **written** and **board-approved**, with the approval minuted."
      ],
      table: {
        head: ["Pillar", "Key point"],
        rows: [
          ["1. **Internal controls**", "Policies, procedures and processes built on the risk assessment"],
          ["2. **Independent testing**", "By bank staff or an outside party **not involved** in the function tested"],
          ["3. **BSA/AML officer**", "Coordinates and monitors **day-to-day** compliance"],
          ["4. **Training**", "For appropriate personnel, tailored to their roles"],
          ["5. **Risk-based CDD**", "Added by the **2016 CDD Rule**: understand the **nature and purpose** of relationships and conduct **ongoing monitoring**"]
        ]
      },
      list: [
        "FATF **INR.18**: internal controls with a **compliance officer at management level**, ongoing **training**, and an **independent audit function**.",
        "OFAC's 2019 Framework has **five components**: **management commitment**, **risk assessment**, internal controls, **testing and auditing**, training; commitment starts on **Day One** (Binance, 2023)."
      ],
      tip: "Exam tip: no rule mandates a technology such as machine learning, and currency transaction reporting is a BSA duty, not an OFAC component.",
      remember: "Five US pillars: internal controls, independent testing, BSA/AML officer, training, risk-based CDD."
    },
    {
      h: "Governance: the board and the three lines of defense",
      p: [
        "The **board** approves the program and risk appetite, sets the **tone at the top**, ensures adequate **resources** and holds management accountable; it can delegate tasks but stays **ultimately responsible**. **Senior management** runs the program day to day."
      ],
      table: {
        head: ["Line", "Who", "Role"],
        rows: [
          ["**First**", "Business units, relationship managers", "**Own** and manage the risk: KYC, escalation"],
          ["**Second**", "Chief AML/CFT (BSA) officer, compliance", "Set policy, monitor, **challenge**; report suspicious transactions"],
          ["**Third**", "**Internal audit**", "**Independent assurance** to the audit committee"]
        ]
      },
      list: [
        "Business-line conflicts with the AML officer go to the **highest level**, the board or its risk committee (Basel Committee 'Sound management' guidelines).",
        "The board, or a designated committee, is notified of **SAR filings**. If a director or executive officer is the suspect, only the **non-suspect** directors are told (12 CFR 21.11(h)).",
        "**R.18**: group-wide programs reach foreign branches and majority-owned subsidiaries and share information with group compliance; if host law blocks this, apply **additional measures** and **inform the home supervisor**."
      ],
      tip: "Exam tip: if the CEO overrules compliance on a risk-appetite breach, escalate to the board; a SAR (no suspicion) or going to the regulator first is wrong.",
      remember: "First line owns the risk, second oversees it, third tests it; the board is not a line but answers for all three."
    },
    {
      h: "The BSA/AML officer and a culture of compliance",
      p: [
        "The board designates a qualified **BSA/AML officer** with the **authority, independence and access to resources** to run the program, and a reporting line up to the board; the title matters less (FFIEC). Basel adds: no business-line duties and no internal audit role. UK firms appoint an **MLRO** with the same attributes (FCA SYSC 6.3.9R).",
        "FinCEN's **FIN-2014-A007** (August 2014) sets out **six** principles of a culture of compliance:"
      ],
      list: [
        "**Leadership** is engaged and visibly supports compliance.",
        "Compliance is **not compromised by revenue interests**: no business veto over SARs or exits.",
        "Relevant information (fraud, legal, subpoenas) is **shared** with compliance.",
        "**Adequate human and technological resources**; understaffing causes **alert backlogs** and late SARs.",
        "The program is tested by an **independent and competent** party.",
        "Leadership and staff **understand how BSA reports are used**."
      ],
      tip: "Exam tip: TD Bank held AML spending to a 'flat cost paradigm' while risk grew and did not escalate resource needs in time (FinCEN penalty **$1.3 billion**, 2024). Resources must follow risk.",
      remember: "Authority, independence, resources: an officer without all three cannot run an effective program."
    },
    {
      h: "Training and independent testing",
      p: [
        "**Training** is **role-based**: tellers learn cash red flags, lenders loan schemes, and the **board** gets foundational training. Keep materials, dates and **attendance records**, follow up missed training and update content for new rules, products and typologies (FFIEC)."
      ],
      list: [
        "**Who tests**: internal audit, outside auditors or consultants, or qualified staff **not involved** in the function tested, its policies or its training; never the BSA officer.",
        "**Reports to** the board or an audit committee of mostly **outside directors**.",
        "**How often**: no US banking rule fixes it; risk-based, for example every **12-18 months** and after major changes. **FINRA Rule 3310**: broker-dealers test **every calendar year** (every **two** years if they hold no customer accounts).",
        "**Scope**: risk assessment, policies versus risk profile, transaction testing (CIP, CDD, SARs, CTRs), data integrity, training and **follow-up** of earlier findings, **tracked to closure**."
      ],
      tip: "Exam tip: auditors who complete the overdue reviews they criticized lose their independence; the answer is a resourced corrective action plan with owners and dates."
    },
    {
      h: "Exams, MRAs, enforcement and remediation",
      p: [
        "US BSA exams are **risk-focused**, scoped from the bank's risk assessment, independent testing and past findings; FATF **R.26** also sets supervisory intensity by risk profile. An **MRA** must be fixed within a set timeframe; an **MRIA** (significant, urgent or **repeat** issues) immediately. The board responds in writing (SR 13-13)."
      ],
      list: [
        "OCC and FDIC MRAs (changed September 2026, effective **2 November 2026**) require possible **material financial harm** or an **actual violation** of banking-related law (AML/CFT included); lesser weaknesses become **supervisory observations**. The Fed applies similar principles.",
        "Failing to correct a **previously reported** BSA program problem triggers a **mandatory cease-and-desist order** (12 U.S.C. 1818(s)).",
        "Remediation: **root cause**, accountable owners, deadlines, resources, **board oversight** and **validation** before closure. Fix the methodology, not only the sampled accounts.",
        "Orders may add a consultant's **SAR look-back**: the examiner sets the scope, and the bank must disclose SARs it declined to file against the consultant's advice (TD Bank, OCC 2024).",
        "Individuals who **willfully** violate the BSA face civil penalties (**31 U.S.C. 5321**); U.S. Bank's former risk officer was fined **$450,000** (2020) over staffing-based alert caps. **R.35** also targets **directors and senior management**."
      ],
      tip: "Exam tip: USAA FSB (2022, $140 million) let regulator-cited deficiencies linger while growing: 'growth and compliance must be paired'."
    },
    {
      h: "New products, third parties and fintech partners",
      p: [
        "**R.15**: assess the ML/TF risk of new products, business practices, **delivery mechanisms** and technologies **before launch**, then mitigate it. **Commonwealth Bank of Australia** launched intelligent deposit machines in 2012 without that assessment and paid **A$700 million** (2018)."
      ],
      table: {
        head: ["Arrangement", "What it is", "Responsibility"],
        rows: [
          ["**Outsourcing / agency**", "Provider applies **your** procedures under your control", "Stays with you; R.17 does **not** apply"],
          ["**Reliance (R.17)**", "Regulated third party applies **its own** CDD to a customer it already serves", "**Ultimately** yours: get CDD information **immediately**, copies **without delay** on request"],
          ["**US CIP reliance**", "Another institution sharing the customer performs CIP steps", "No liability for its lapses if reliance is reasonable and it is AML-regulated, federally supervised and certifies annually"]
        ]
      },
      list: [
        "Using a third party **does not diminish** the bank's responsibility (2023 interagency guidance): due diligence, contract terms, ongoing monitoring, exit plans.",
        "**Banking-as-a-service**: an unregulated fintech cannot be relied on for CIP; the bank oversees its partners' onboarding and monitoring (Fed action against **Evolve**, 2024).",
        "The duty to run a US AML program stays with **persons in the United States** (31 U.S.C. 5318(h)(5))."
      ],
      tip: "Exam tip: 'the vendor contractually assumed the function' is always wrong. You can outsource tasks, never accountability.",
      remember: "Assess before launch (R.15); outsource tasks, not responsibility (R.17)."
    },
    {
      h: "De-risking vs the risk-based approach",
      p: [
        "**De-risking** is ending or restricting relationships **indiscriminately with broad categories** of customers instead of managing each customer's risk (US Treasury, 2023). It is **inconsistent with the RBA**, pushes activity into less transparent channels and excludes legitimate customers."
      ],
      list: [
        "US agencies (July 2022): **no customer type** carries a single, uniform level of risk; manage relationships rather than decline whole categories.",
        "MSBs: the minimum is **CIP**, FinCEN **registration**, state **licensing**, agent status and a basic risk assessment; banks are **not de facto regulators** of MSBs (2005 guidance).",
        "EU (**EBA/GL/2023/04**): no blanket refusal of higher-risk categories; try **mitigating measures** first (tighter monitoring, product limits) and **document** every refusal or exit.",
        "US (changed August 2025): **Executive Order 14331** requires **individualized, objective, risk-based** banking decisions, not political or religious ones; OCC and FDIC supervision dropped **reputation risk** (April 2026)."
      ],
      tip: "Exam tip: 'exit every MSB, NPO or respondent bank in a region to avoid scrutiny' is textbook de-risking, and wrong.",
      remember: "Manage risk customer by customer; exit only when a specific customer's risk cannot be mitigated."
    }
  ],
  cards: [
    { front: "Inherent risk vs residual risk", back: "Inherent: exposure before controls. Residual: what remains after controls, compared with the board-approved risk appetite." },
    { front: "Core risk categories in an enterprise-wide risk assessment", back: "Customers, products and services, geographies and delivery channels (Wolfsberg adds other qualitative factors)." },
    { front: "What is risk appetite?", back: "The board-approved level and types of risk an institution is willing to accept to achieve its objectives." },
    { front: "When should the EWRA be updated?", back: "Whenever risk changes significantly: new products, services, customer types or markets, and mergers or acquisitions. The FFIEC sets no fixed frequency." },
    { front: "What did the February 2025 revision of R.1 change?", back: "Where risks are lower, countries should allow and encourage simplified measures. Never where ML/TF is suspected." },
    { front: "The five pillars of a US bank AML program", back: "Internal controls, independent testing, a BSA/AML officer, training, and risk-based CDD (added by the 2016 CDD Rule)." },
    { front: "OFAC's five sanctions compliance components (2019)", back: "Management commitment, risk assessment, internal controls, testing and auditing, training." },
    { front: "Who does what in the three lines of defense?", back: "First: business owns the risk. Second: AML officer and compliance oversee and challenge. Third: internal audit gives independent assurance." },
    { front: "What must a BSA/AML officer have?", back: "Authority, independence and access to resources, with a reporting line up to the board (FFIEC)." },
    { front: "FIN-2014-A007: the six culture of compliance principles", back: "Engaged leadership; no revenue override; information sharing; adequate resources; independent, competent testing; understanding how BSA reports are used." },
    { front: "Who may perform independent testing?", back: "Internal audit, outside auditors or consultants, or qualified staff not involved in the function tested; results go to the board." },
    { front: "MRA vs MRIA", back: "MRA: fix within a set timeframe. MRIA: significant, urgent or repeat issue, address immediately. The board responds in writing." },
    { front: "Consequence of not correcting a previously reported BSA program problem?", back: "The banking agency must issue a cease-and-desist order (12 U.S.C. 1818(s))." },
    { front: "Board SAR notice when a director is the suspect", back: "Notify all directors who are not suspects; never notify the suspect (12 CFR 21.11(h))." },
    { front: "Reliance (R.17) vs outsourcing", back: "Reliance: regulated third party uses its own CDD. Outsourcing: provider follows your procedures. Responsibility stays with you in both." },
    { front: "When must a new product be risk-assessed (R.15)?", back: "Before launch, including new delivery mechanisms and technologies, followed by measures to manage and mitigate the risk." },
    { front: "What is de-risking?", back: "Indiscriminately ending or restricting relationships with broad customer categories instead of managing each customer's risk; inconsistent with the RBA." },
    { front: "When may OCC and FDIC examiners issue an MRA (from November 2026)?", back: "Only for practices that could materially harm the bank's finances, or actual violations of banking-related law, including AML/CFT. Lesser issues: supervisory observations." }
  ],
  numbers: [
    { q: "Month and year the FATF revised R.1 to 'allow and encourage' simplified measures", a: "February 2025", wrong: ["June 2025", "October 2023", "February 2012"] },
    { q: "Regulation setting the AML program pillars for US banks", a: "31 CFR 1020.210", wrong: ["31 CFR 1010.230", "31 CFR 1020.220", "31 CFR 1020.320"] },
    { q: "Year of FinCEN's CDD Rule, which added the fifth pillar", a: "2016", wrong: ["2001", "2012", "2020"] },
    { q: "Number of principles in FinCEN's culture of compliance advisory (FIN-2014-A007)", a: "6", wrong: ["4", "5", "8"] },
    { q: "Essential components of a sanctions compliance program in OFAC's 2019 Framework", a: "5", wrong: ["3", "4", "7"] },
    { q: "FATF Recommendation requiring a risk assessment before launching new products and technologies", a: "R.15", wrong: ["R.10", "R.17", "R.18"] },
    { q: "FATF Recommendation on reliance on third parties", a: "R.17", wrong: ["R.13", "R.15", "R.18"] },
    { q: "FINRA Rule 3310 independent testing frequency for broker-dealers with customer accounts", a: "Every calendar year", wrong: ["Every 2 years", "Every 3 years", "Every 5 years"] },
    { q: "Example independent testing interval in the FFIEC manual (no fixed rule)", a: "12-18 months", wrong: ["3-6 months", "24-36 months", "48-60 months"] },
    { q: "Statute requiring a cease-and-desist order for uncorrected BSA program problems", a: "12 U.S.C. 1818(s)", wrong: ["31 U.S.C. 5318(g)", "31 U.S.C. 5321", "12 U.S.C. 3414"] }
  ],
  questionIds: [
    "D2-005", "D2-006", "D2-027", "D2-028",
    "D3-001", "D3-002", "D3-003", "D3-004", "D3-005", "D3-006", "D3-007", "D3-023", "D3-027", "D3-028",
    "D3-038", "D3-039", "D3-040", "D3-041", "D3-042", "D3-043", "D3-044",
    "D4-013", "EU-012", "EU-029",
    "TRAP-011", "TRAP-017", "TRAP-023", "TRAP-026", "TRAP-027",
    "CASE-001", "CASE-006", "CASE-010", "CASE-011", "CASE-020", "CASE-030", "CASE-032",
    "SECT-009", "SECT-016",
    "KYC-012", "KYC-014", "KYC-015", "KYC-016", "KYC-025", "KYC-027", "KYC-028",
    "INV-023", "INV-024", "SANC-025"
  ],
  sources: [
    { label: "FATF Recommendations (updated June 2026): R.1, INR.1, R.15, R.17, R.18 and the February 2025 amendment, official text hosted by the Eurasian Group (EAG)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
    { label: "eCFR 31 CFR 1020.210: AML program requirements for banks", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-B/section-1020.210" },
    { label: "FFIEC BSA/AML Examination Manual (April 2020 update): risk assessment, internal controls, independent testing, BSA compliance officer, training (NCUA copy)", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" },
    { label: "FinCEN Advisory FIN-2014-A007: Promoting a culture of compliance (August 2014)", url: "https://www.fincen.gov/system/files/advisory/FIN-2014-A007.pdf" },
    { label: "Basel Committee: Sound management of risks related to ML and FT (rev. July 2020): board, chief AML/CFT officer, three lines of defence", url: "https://www.bis.org/publications/202007-guidelines-sound-management-risks-related-money-laundering-and-financing-terrorism-revisions-supervisory.pdf" },
    { label: "Wolfsberg FAQs on Risk Assessments (2015): inherent risk, controls, residual risk", url: "https://db.wolfsberg-group.org/assets/3deb66d7-6aca-490c-bcd9-c1a3d34a807b/17.%20Wolfsberg-Risk-Assessment-FAQs-2015.pdf" },
    { label: "OFAC: A Framework for OFAC Compliance Commitments (2019)", url: "https://ofac.treasury.gov/media/16331/download?inline=" },
    { label: "Interagency Guidance on Third-Party Relationships: Risk Management (June 2023, SR 23-4 attachment)", url: "https://www.federalreserve.gov/supervisionreg/srletters/SR2304a1.pdf" },
    { label: "OCC and FDIC final rule: Unsafe or Unsound Practices, Matters Requiring Attention (91 FR 56004, 1 September 2026)", url: "https://www.govinfo.gov/content/pkg/FR-2026-09-01/pdf/2026-17823.pdf" },
    { label: "US Treasury: The Department of the Treasury's De-risking Strategy (April 2023)", url: "https://home.treasury.gov/system/files/136/Treasury_AMLA_23_508.pdf" }
  ]
}]);
