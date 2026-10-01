window.CAMS_COURSE = (window.CAMS_COURSE || []).concat([{
  id: "m05",
  order: 5,
  domain: 2,
  title: "Global standards: FATF and international bodies",
  icon: "🌐",
  minutes: 14,
  summary: "Know who writes the global AML/CFT rules and how countries are held to them: the FATF's 40 Recommendations and the numbers that matter, mutual evaluations and ratings, the grey and black lists, and the roles of the FSRBs, Egmont, Basel, Wolfsberg, the UN and the OECD.",
  mostTested: [
    "Grey list (**Jurisdictions under Increased Monitoring**: action plan within agreed timeframes, no FATF call for EDD) vs black list (**Call for Action**: EDD, and **countermeasures** on Iran and the DPRK)",
    "Key Recommendation numbers: **R.1** risk-based approach, **R.10** CDD, **R.12** PEPs, **R.13** correspondent banking, **R.15** VASPs, **R.16** wire transfers, **R.20** STRs, **R.21** tipping-off, **R.24/R.25** beneficial ownership, **R.29** FIUs",
    "Mutual evaluations rate **technical compliance** (C, LC, PC, NC) and **effectiveness** on **11 Immediate Outcomes** (High, Substantial, Moderate, Low)",
    "Who does what: **FSRBs** evaluate their regions, **Egmont** links FIUs, the **Basel Committee** covers banks, **Wolfsberg** is a private group of banks (the **CBDDQ**)",
    "UN conventions: **Vienna 1988** (drugs, first ML offence), **1999** TF Convention, **Palermo 2000** (all serious crime), **UNCAC 2003** (asset recovery)",
    "**UNSCR 1267** (UN committees designate) vs **1373** (countries designate); freeze **without delay**, ideally within hours",
    "FATF thresholds: **USD/EUR 15,000** for occasional CDD, **1,000** for wire and virtual asset transfers, **3,000** for casinos; records kept **5 years**"
  ],
  sections: [
    {
      h: "The FATF: mandate, members and method",
      p: [
        "The **Financial Action Task Force (FATF)** is an inter-governmental body created by the **G7 in 1989**. Its mandate is to set standards against **money laundering, terrorist financing and proliferation financing** and to promote their effective implementation. It has **40 members**: 38 jurisdictions plus the **European Commission** and the **Gulf Co-operation Council**.",
        "The FATF does not supervise or fine banks. Countries turn its standards into national law."
      ],
      list: [
        "**1990**: the first 40 Recommendations, aimed at drug money; revised in **1996** and **2003**.",
        "**October 2001**: Special Recommendations on TF (eight, later nine). **2008**: mandate extended to proliferation financing.",
        "**February 2012**: one integrated set of 40 Recommendations, amended since.",
        "The **Plenary** meets three times a year (**February, June, October**) and updates the public lists at each one.",
        "Russia's membership has been **suspended since February 2023**, a first in FATF history."
      ],
      tip: "Exam tip: the FATF sets standards and assesses countries. National supervisors, not the FATF, examine and penalise institutions.",
      remember: "FATF Standards = Recommendations + Interpretive Notes + Glossary. Guidance is not binding."
    },
    {
      h: "Policies, offences, TF and PF: R.1 to R.8",
      table: {
        head: ["Rec.", "Subject", "What to remember"],
        rows: [
          ["**R.1**", "Risk-based approach", "Countries, FIs and DNFBPs identify, assess and mitigate ML/TF/PF risk; the national assessment is kept up to date and its results shared. Where risks are lower, countries should **allow and encourage** simplified measures (changed February 2025)"],
          ["**R.3**", "ML offence", "Based on **Vienna** and **Palermo**, covering the **widest range of predicate offences**"],
          ["**R.5**", "TF offence", "Based on the **1999 TF Convention**; covers funding terrorist organisations and individual terrorists even with **no link to a specific act**"],
          ["**R.6**", "Terrorism sanctions", "Freeze **without delay** for UNSCR **1267** (UN designations) and **1373** (national designations). UN humanitarian exemption (UNSCR 2664) added (changed June 2026)"],
          ["**R.7**", "Proliferation sanctions", "UN designations only: DPRK (**1718**) and Iran (**1737** and successors, updated after the UN snapback; changed October 2025)"],
          ["**R.8**", "NPOs", "Focused, proportionate, **risk-based** measures that do not disrupt legitimate NPOs"]
        ]
      },
      tip: "Exam tip: under R.1, 'proliferation financing risk' means only the risk of breaching, not implementing or evading the **R.7** targeted financial sanctions.",
      remember: "R.6 lets countries designate terrorists themselves (1373). R.7 covers only UN designations."
    },
    {
      h: "Preventive measures: R.10 to R.21",
      table: {
        head: ["Rec.", "Subject", "Key requirement"],
        rows: [
          ["**R.10**", "CDD", "No anonymous accounts. CDD for new relationships, occasional transactions above **USD/EUR 15,000**, suspicion, or doubts about earlier data. If CDD fails: do not open or terminate; consider an **STR**"],
          ["**R.11**", "Record keeping", "Transaction and CDD records kept for at least **5 years**"],
          ["**R.12**", "PEPs", "Foreign PEPs: **senior management approval**, **source of wealth and funds**, **enhanced ongoing monitoring**. Domestic and international organisation PEPs: same if higher risk. Covers family and close associates"],
          ["**R.13**", "Correspondent banking", "Understand the respondent, assess its controls, **senior management approval**, clear responsibilities, CDD on **payable-through** users. **No shell banks**"],
          ["**R.15**", "New technologies, **VASPs**", "Assess risk **before** launch; VASPs licensed or registered and supervised; VA occasional threshold **USD/EUR 1,000**"],
          ["**R.16**", "Payment transparency", "Originator and beneficiary data travel with the payment; de minimis threshold no higher than **USD/EUR 1,000**"],
          ["**R.19**", "Higher-risk countries", "**EDD** when the FATF calls for it; countermeasures when called upon"],
          ["**R.20**", "STRs", "Report suspicion **promptly** to the FIU"],
          ["**R.21**", "Tipping-off", "**Safe harbour** for good-faith reports; ban on disclosing that an STR is being filed"]
        ]
      },
      list: [
        "R.16 revision (changed June 2025): above the threshold, cross-border payments add the natural-person originator's **date of birth** and, for legal persons, the **BIC, LEI** or official identifier. Beneficiary banks must detect **misdirected payments** (name and account not aligned).",
        "A domestic payment may carry only an account number if the ordering bank can supply full data within **3 business days** of a request."
      ],
      tip: "Exam tip: R.20 obliges the institution to report; R.29 creates the FIU that receives the report."
    },
    {
      h: "Beneficial ownership, supervision, FIUs and cooperation",
      table: {
        head: ["Rec.", "Subject", "Key requirement"],
        rows: [
          ["**R.24**", "Legal persons (companies)", "Adequate, accurate, up-to-date BO data via a **register** or alternative mechanism; no new **bearer shares**; control **nominees**; any ownership threshold **25% maximum**"],
          ["**R.25**", "Legal arrangements (trusts)", "Information on **settlor, trustees, protector and beneficiaries**"],
          ["**R.26**", "Supervising FIs", "Risk-based supervision; keep criminals out of ownership and management; **no shell banks**"],
          ["**R.29**", "FIUs", "National centre that receives and analyses **STRs** and disseminates results; **operationally independent**; should apply to join **Egmont**"],
          ["**R.36**", "International instruments", "Join and implement **Vienna, Palermo, UNCAC** and the **TF Convention**"],
          ["**R.40**", "Other cooperation", "Widest range of cooperation, **spontaneously** and on request"]
        ]
      },
      remember: "R.24 = companies (legal persons). R.25 = trusts (legal arrangements)."
    },
    {
      h: "Mutual evaluations: technical compliance and effectiveness",
      p: [
        "Every country is peer-reviewed in a **mutual evaluation** by the FATF, its FSRB, or the IMF or World Bank, all using one **Methodology**. The FATF began its **fifth round** in 2024. The country must demonstrate that its system works."
      ],
      table: {
        head: ["", "Technical compliance", "Effectiveness"],
        rows: [
          ["Question", "Are the laws and powers in place?", "Does the system actually work?"],
          ["Assessed against", "Each of the **40 Recommendations**", "**11 Immediate Outcomes** (IO.1 risk to IO.11 PF sanctions)"],
          ["Ratings", "**C** (no shortcomings), **LC** (minor), **PC** (moderate), **NC** (major)", "**High**, **Substantial**, **Moderate**, **Low**"]
        ]
      },
      list: [
        "Fifth round: **IO.3** covers supervision and preventive measures for FIs and **VASPs**; **IO.4** the same for **DNFBPs**; **IO.5** beneficial ownership; **IO.6** financial intelligence.",
        "**Enhanced follow-up** if any of these apply: **5+ PC**, any **NC**, PC on R.3, 5, 6, 10, 11 or 20, Moderate on 6+ IOs, or Low on any IO.",
        "**ICRG** referral if: **15+** NC/PC ratings, NC/PC on **3+** of R.3, 5, 6, 10, 11 and 20, Low or Moderate on 9+ IOs (at least 2 Low), or Low on 6+ IOs. For prioritised countries, a post-observation period report follows **one year** after the MER."
      ],
      tip: "Exam tip: good laws with no results still earn low effectiveness ratings. Statistics are evidence, not the whole test."
    },
    {
      h: "Grey list vs black list",
      table: {
        head: ["", "Grey list", "Black list"],
        rows: [
          ["Official name", "**Jurisdictions under Increased Monitoring**", "**High-Risk Jurisdictions subject to a Call for Action**"],
          ["Meaning", "Strategic deficiencies; country **committed to an action plan** within **agreed timeframes**", "**Significant** strategic deficiencies"],
          ["FATF asks", "No call for EDD; consider it in your **risk analysis**", "**EDD**; in the most serious cases, **countermeasures**"],
          ["June 2026", "**22** jurisdictions; Bosnia and Herzegovina and Iraq added, Algeria and Namibia removed", "**DPRK** and **Iran** (countermeasures), **Myanmar** (EDD only)"]
        ]
      },
      list: [
        "R.19: EDD must be **effective and proportionate**; countries may also impose countermeasures on their own.",
        "UK: mandatory EDD now applies only to call-for-action countries, from **30 June 2026** (changed June 2026). Grey-list status feeds the risk assessment.",
        "A listing is not a sanctions programme or a legal ban; sanctions screening is a separate duty."
      ],
      tip: "Exam tip: 'action plan within agreed timeframes' points to the grey list. 'Countermeasures' points to the black list."
    },
    {
      h: "FSRBs, the Egmont Group and FIUs",
      p: [
        "**FATF-style regional bodies (FSRBs)** promote the standards and run **mutual evaluations** of their members. There are **nine**: APG, CFATF, EAG, ESAAMLG, GABAC, GAFILAT, GIABA, MENAFATF and MONEYVAL.",
        "The **Egmont Group** (created **1995**) links **182 FIUs** for fast, secure **FIU-to-FIU** exchange, mainly through the **Egmont Secure Web**. It does not investigate. A mutual legal assistance (MLA) request is the slower, formal route for court evidence."
      ],
      list: [
        "Four FIU models: **administrative**, **law enforcement**, **judicial** and **hybrid**. Examples: FinCEN (US), FINTRAC (Canada), AUSTRAC (Australia), STRO (Singapore), JFIU (Hong Kong), MROS (Switzerland).",
        "Egmont Principles: give at least an interim, partial or negative reply within **30 business days**; do not refuse because a request involves **fiscal** matters.",
        "Information may go to the authorities named in the request; any other use needs the sending FIU's **prior authorization**."
      ],
      tip: "Exam tip: an FIU needing foreign intelligence fast uses the Egmont channel, not an MLA request or a call to the foreign bank."
    },
    {
      h: "Basel, Wolfsberg, IOSCO, IAIS and the OECD",
      table: {
        head: ["Body", "Who", "Key AML output"],
        rows: [
          ["**Basel Committee** (BCBS)", "Bank supervisors, hosted by the **BIS**", "**Core Principle 29** (abuse of financial services); **Sound management** guidelines (2014, revised 2020): group-wide risk management, **three lines of defence**"],
          ["**Wolfsberg Group**", "Association of **12 global banks**, first met in **2000**", "Private banking principles, Correspondent Banking Principles, the **CBDDQ**; voluntary"],
          ["**IOSCO**", "Securities regulators", "Objectives and Principles of Securities Regulation"],
          ["**IAIS**", "Insurance supervisors", "**ICP 22**: insurers and intermediaries must combat ML/TF"],
          ["**OECD**", "Economic policy organisation", "**Anti-Bribery Convention (1997)**: criminalise bribing **foreign public officials** (supply side); **Working Group on Bribery** peer reviews"]
        ]
      },
      list: [
        "Basel lines: business units first; the **chief AML/CFT officer** and compliance second; **internal audit** third."
      ],
      tip: "Exam tip: Wolfsberg is private sector and voluntary. The FATF and Basel are public standard setters, but neither fines banks."
    },
    {
      h: "UN conventions and Security Council resolutions",
      table: {
        head: ["Instrument", "Year", "Key point"],
        rows: [
          ["**Vienna Convention**", "**1988**", "First to require an ML offence, for **drug trafficking** proceeds; bank secrecy is no ground to refuse access to records"],
          ["**TF Convention**", "**1999**", "Criminalises providing or collecting funds for terrorism; the funds need **not actually be used**"],
          ["**Palermo Convention** (UNTOC)", "**2000**", "ML offence for all **serious crime** (maximum penalty **4+ years**); organised group = **3 or more** persons"],
          ["**UNCAC** (Merida)", "**2003**", "Corruption; **asset recovery** is a fundamental principle (**Art. 51**)"]
        ]
      },
      list: [
        "**UNSCR 1267 (1999)** and successors: the **1267 Committee** designates for Al-Qaida and the **1988 Committee** for the Taliban.",
        "**UNSCR 1373 (2001)**: criminalise TF and freeze; **countries** designate, on their own motion or at another country's request.",
        "PF: **1718 (2006)** for the DPRK; **1737 (2006)** for Iran, re-applied in **September 2025** after the snapback.",
        "**Without delay** means, ideally, **within hours** of a UN designation, and **without prior notice** to the designee."
      ],
      tip: "Exam tip: first instrument to criminalise ML is Vienna 1988; asset recovery as a fundamental principle is UNCAC.",
      remember: "Vienna = drugs (1988). TF Convention (1999). Palermo = organised crime (2000). UNCAC = corruption (2003)."
    }
  ],
  cards: [
    { front: "What does the FATF grey list mean?", back: "Jurisdictions under Increased Monitoring: strategic deficiencies, committed to an action plan within agreed timeframes. No FATF call for EDD; factor it into risk analysis." },
    { front: "Who is on the FATF black list (June 2026), and what applies?", back: "DPRK and Iran (countermeasures) and Myanmar (EDD only). The FATF calls for EDD and, in the most serious cases, countermeasures." },
    { front: "What did the February 2025 revision of R.1 add?", back: "Proportionality: where risks are lower, countries should allow and encourage simplified measures." },
    { front: "When is CDD required under R.10?", back: "New relationships; occasional transactions above USD/EUR 15,000 (or covered wire transfers); suspected ML/TF; doubts about earlier identification data." },
    { front: "R.12: extra measures for a foreign PEP?", back: "Risk-management systems to identify PEPs, senior management approval, source of wealth and funds, enhanced ongoing monitoring." },
    { front: "R.13: what must a correspondent do?", back: "Understand the respondent, assess its AML/CFT controls, get senior management approval, agree responsibilities, check CDD for payable-through users. No shell banks." },
    { front: "What does R.16 (revised June 2025) add above the threshold?", back: "The originator's date of birth (natural persons), BIC, LEI or official ID (legal persons), and checks by beneficiary banks for misdirected payments." },
    { front: "R.20 vs R.21", back: "R.20: report suspicion promptly to the FIU. R.21: safe harbour for good-faith reporting and a ban on tipping-off." },
    { front: "R.24 vs R.25", back: "R.24: beneficial ownership of legal persons (companies), 25% maximum threshold, no new bearer shares. R.25: legal arrangements (trusts)." },
    { front: "Technical compliance vs effectiveness ratings", back: "Technical compliance: C, LC, PC, NC per Recommendation. Effectiveness: High, Substantial, Moderate, Low per Immediate Outcome (11)." },
    { front: "What puts a country in enhanced follow-up?", back: "Any of: 5+ PC, any NC, PC on R.3, 5, 6, 10, 11 or 20, Moderate on 6+ IOs, or Low on any IO." },
    { front: "What do FSRBs do? Name two.", back: "Promote the FATF standards and run mutual evaluations in their region. Examples: MONEYVAL, GAFILAT, APG (nine in total)." },
    { front: "What is the Egmont Group?", back: "A network of 182 FIUs, created in 1995, for secure FIU-to-FIU exchange of financial intelligence through the Egmont Secure Web." },
    { front: "Which body issued 'Sound management of risks related to ML and FT'?", back: "The Basel Committee on Banking Supervision: group-wide ML/TF risk management and three lines of defence for banks." },
    { front: "Who created the CBDDQ?", back: "The Wolfsberg Group, an association of 12 global banks that issues voluntary guidance, including correspondent banking principles." },
    { front: "Vienna 1988 vs Palermo 2000", back: "Vienna: first ML offence, drug proceeds only. Palermo: ML offence extended to all serious crime (maximum penalty of 4+ years)." },
    { front: "UNSCR 1267 vs 1373", back: "1267 and successors: UN committees designate (Al-Qaida, Taliban). 1373: countries make their own terrorist designations." },
    { front: "What is the OECD Anti-Bribery Convention's focus?", back: "Criminalising the bribery of foreign public officials (supply side), monitored by peer review in the Working Group on Bribery." }
  ],
  numbers: [
    { q: "FATF threshold for CDD on occasional transactions (R.10)", a: "USD/EUR 15,000", wrong: ["USD/EUR 10,000", "USD/EUR 5,000", "USD/EUR 25,000"] },
    { q: "Maximum de minimis threshold for wire transfers under R.16", a: "USD/EUR 1,000", wrong: ["USD/EUR 3,000", "USD/EUR 10,000", "USD/EUR 15,000"] },
    { q: "FATF CDD threshold for casino transactions (INR.22)", a: "USD/EUR 3,000", wrong: ["USD/EUR 1,000", "USD/EUR 10,000", "USD/EUR 15,000"] },
    { q: "Minimum record retention period under R.11", a: "5 years", wrong: ["3 years", "7 years", "10 years"] },
    { q: "Maximum beneficial ownership threshold under INR.24", a: "25%", wrong: ["10%", "30%", "50%"] },
    { q: "Number of Immediate Outcomes in the FATF effectiveness assessment", a: "11", wrong: ["9", "13", "40"] },
    { q: "Year the G7 created the FATF", a: "1989", wrong: ["1979", "1995", "2001"] },
    { q: "Egmont target for at least an interim reply to an FIU request", a: "30 business days", wrong: ["5 business days", "60 business days", "90 business days"] },
    { q: "Palermo Convention: 'serious crime' carries a maximum penalty of at least", a: "4 years", wrong: ["1 year", "2 years", "10 years"] },
    { q: "NC/PC ratings that trigger ICRG referral on their own", a: "15 or more", wrong: ["5 or more", "10 or more", "20 or more"] }
  ],
  questionIds: [
    "D2-001", "D2-002", "D2-003", "D2-004", "D2-005", "D2-006", "D2-007", "D2-008", "D2-009", "D2-010",
    "D2-012", "D2-019", "D2-023", "D2-026", "D2-029", "D2-030",
    "TRAP-013", "TRAP-017",
    "KYC-003", "KYC-018", "KYC-019", "KYC-021", "KYC-022", "KYC-023", "KYC-024", "KYC-025", "KYC-027",
    "INV-020", "INV-021", "GLOB-013", "EU-020",
    "SANC-023", "SANC-026", "SANC-027"
  ],
  sources: [
    { label: "FATF Recommendations (updated June 2026), official text hosted by the Eurasian Group (EAG)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
    { label: "FATF Methodology for assessing technical compliance and effectiveness (updated June 2026), EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Methodology_2026_eng.pdf" },
    { label: "HM Treasury Money Laundering Advisory Notice, June 2026: FATF lists, FATF membership and Plenary schedule", url: "https://www.gov.uk/government/publications/money-laundering-advisory-notice-high-risk-third-countries--2/money-laundering-advisory-notice-high-risk-third-countries--2" },
    { label: "APG Global Fifth Round Mutual Evaluation Procedures (March 2026): follow-up and ICRG criteria", url: "https://www.apgml.org/sites/default/files/2026-03/APG%20Global%205th%20Round%20ME%20Procedures%20(March%202026)_0.pdf" },
    { label: "Egmont Group: Principles for Information Exchange between FIUs (revised July 2025)", url: "https://egmontgroup.org/wp-content/uploads/2022/07/EG-Principles-for-Information-Exchange-Revised-July-2025.pdf" },
    { label: "Basel Committee: Sound management of risks related to money laundering and financing of terrorism (rev. July 2020)", url: "https://www.bis.org/bcbs/publ/d505.htm" },
    { label: "Wolfsberg Group: About us (12 member banks, history since 2000)", url: "https://wolfsberg-group.org/about" },
    { label: "UN Convention against Transnational Organized Crime (Palermo, 2000)", url: "https://www.unodc.org/documents/treaties/UNTOC/Publications/TOC%20Convention/TOCebook-e.pdf" },
    { label: "UN Convention against Corruption (2003): Chapter V, asset recovery", url: "https://www.unodc.org/documents/brussels/UN_Convention_Against_Corruption.pdf" },
    { label: "OECD Convention on Combating Bribery of Foreign Public Officials (1997)", url: "https://legalinstruments.oecd.org/public/doc/205/205.en.pdf" }
  ]
}]);
