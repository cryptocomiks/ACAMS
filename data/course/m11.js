window.CAMS_COURSE = (window.CAMS_COURSE || []).concat([{
  id: "m11",
  order: 11,
  domain: 3,
  title: "Monitoring, SARs/STRs and record keeping",
  icon: "📑",
  minutes: 14,
  summary: "Follow suspicious activity from alert to report: how monitoring and tuning work, when unusual becomes suspicious, the US SAR thresholds and deadlines, confidentiality and safe harbor, CTRs and their exemptions, the $3,000 recordkeeping rules, five-year retention, keep-open requests and the UK DAML contrast.",
  mostTested: [
    "US SAR thresholds: **insider abuse at any amount**, **$5,000** (suspect identified, or ML/BSA evasion), **$25,000** with no suspect; MSBs **$2,000**",
    "SAR deadline: **30 days** from **initial detection** (the conclusion of a review, not the alert), up to **60** if no suspect; ongoing violations: **phone law enforcement** at once",
    "October 2025 FAQs: no SAR for activity **near $10,000** alone, continuing-activity reviews **optional** (if used, file within **120 days** of the last SAR), no-SAR decisions need **no documentation**",
    "**Tipping-off** (R.21, 31 USC 5318(g)(2)): never reveal a SAR, **decline subpoenas** and notify FinCEN; **safe harbor** for reporting; the underlying facts may be shared",
    "CTR: cash of **more than $10,000** per business day, **aggregated** across branches, filed within **15 days**; **Phase I/II** exemptions never remove SAR duties",
    "**$3,000** triggers the monetary instrument log (cash, $3,000-$10,000) and funds transfer records and **travel rule**; SARs and BSA records are kept **5 years**",
    "Keep-open requests: **written**, with a **termination date**, the bank decides, SAR duties continue. UK contrast: **DAML**, **7 working days** notice, **31-day** moratorium"
  ],
  sections: [
    {
      h: "Transaction monitoring: rules, behaviour and coverage",
      p: [
        "Monitoring finds **unusual activity** after transactions are executed. Alerts come from automated systems, **front-line referrals**, law enforcement inquiries and negative news. Coverage must follow the **risk assessment** and reach every higher-risk product, customer type and typology."
      ],
      table: {
        head: ["", "Rules-based scenarios", "Behavioural analytics"],
        rows: [
          ["Alerts when", "Activity crosses a fixed **threshold** or pattern (e.g. cash over a set amount in a set number of days)", "Activity departs from the customer's **own history** or **peer group**"],
          ["Strength", "Transparent; maps to **red flags and typologies**", "Customer-specific; finds patterns no rule describes"],
          ["Watch out", "One threshold for all customers: false positives in some segments, blind spots in others", "Needs the **CDD profile** (expected activity) as its **baseline**; statistical methods are **models** (SR 26-2)"]
        ]
      },
      list: [
        "**Segment** customers by known attributes plus statistical **clustering**; document each segment's thresholds and review them regularly.",
        "**Coverage assessment**: map each identified risk to the scenarios that detect it and close the gaps. Never downgrade a risk to fit the monitoring.",
        "**Data integrity**: map every transaction code, reconcile record counts with source systems, document data lineage. After a gap, fix it, escalate and run a **lookback**. At NatWest (FCA, 2021), the system read some cash deposits as **cheques**, and staff red flags went unheeded.",
        "**NYDFS Part 504**: documented scenarios and thresholds, **end-to-end testing** before and after launch, controlled changes."
      ],
      tip: "Exam tip: coverage must keep matching risk during a system migration. TD Bank (2024) froze scenario changes during upgrades, and trillions of dollars of transactions a year went unmonitored."
    },
    {
      h: "Alerts, backlogs and tuning",
      p: [
        "Workflow: **alert** and **triage**, **case investigation**, **escalated decision**, then a **SAR or a decision not to file**. Written protocols say who investigates, who decides and how decisions are recorded."
      ],
      list: [
        "**Backlogs**: escalate to senior management, prioritise by risk and add qualified staff; never bulk-close or suppress alerts. Coinbase (NYDFS, 2023) had over **100,000** unreviewed alerts and filed SARs months late.",
        "**Above-the-line (ATL)** testing raises a threshold to check that productive alerts are not lost; **below-the-line (BTL)** testing samples activity under it to find **false negatives**.",
        "**Tuning governance**: changes need data-driven analysis, documentation and approval. U.S. Bank (FinCEN, 2018) capped alerts to fit staffing and dropped below-threshold testing that showed missed SARs.",
        "**Metrics**: alert-to-SAR ratios measure quantity, not usefulness. Wolfsberg (2024) adds **feedback** from authorities and **false-negative** reviews, such as SARs from staff referrals.",
        "An unproductive scenario may be **retired** after documented, approved analysis; keep testing the de-scoped area.",
        "**SR 26-2** replaced SR 11-7 and SR 21-8: deterministic rules with no statistical theory are **not models**, but they must still be tested as controls (changed April 2026)."
      ],
      remember: "Tune with data and governance, never to fit staffing."
    },
    {
      h: "From unusual to suspicious: the SAR/STR decision",
      p: [
        "**Unusual** activity does not fit the customer's profile and often has an innocent explanation. It becomes **suspicious** when, after review, the institution knows, suspects or has reason to suspect criminal funds, **evasion of BSA reporting**, or **no business or apparent lawful purpose** with no reasonable explanation.",
        "**FATF R.20**: a **direct, mandatory** legal duty to report suspected criminal proceeds or TF **promptly** to the **FIU**. Under INR.20, all suspicious transactions, **including attempted** ones, are reported **regardless of amount**."
      ],
      list: [
        "**Not enough on its own** for a SAR: a **grand jury subpoena**, **negative news**, or cash **near $10,000** with no sign of evasion (changed October 2025). Each may warrant a review, not an automatic SAR.",
        "**No-SAR decisions** need no documentation under the BSA; if procedures require it, a short statement usually suffices (changed October 2025).",
        "No number of SARs obliges a bank to **close** an account.",
        "**INR.10**: if CDD would tip off a suspected customer, the institution may stop it and **file an STR**.",
        "**Cyber-events**: blocked attempts to move **$5,000** or more still need a SAR, with IP addresses and device identifiers."
      ],
      tip: "Exam tip: an alert is not a suspicion. The reporting clock starts when the review concludes the activity may be reportable."
    },
    {
      h: "US SARs: thresholds, deadlines and narrative",
      table: {
        head: ["Who or what", "Mandatory SAR from"],
        rows: [
          ["Bank **insider abuse** (director, officer, employee, agent)", "**Any amount**"],
          ["Bank: federal crime, **suspect identified**", "**$5,000**"],
          ["Bank: federal crime, **no suspect** identified", "**$25,000**"],
          ["Bank: possible money laundering or **BSA evasion**", "**$5,000**"],
          ["**MSBs**", "**$2,000** ($5,000 for issuers reviewing money order or traveler's check clearance records)"],
          ["Casinos, broker-dealers, insurers", "**$5,000**"]
        ]
      },
      list: [
        "**Deadline**: **30 calendar days** after **initial detection**; with no suspect, up to **30 more** to identify one, never beyond **60 days**.",
        "**Initial detection**: when a promptly started review concludes the facts may require a SAR, not when the alert fires.",
        "**Urgent** cases (e.g. ongoing laundering or TF): **telephone law enforcement** immediately, and still file on time.",
        "**Continuing activity**: separate post-SAR reviews are **optional** (changed October 2025). If the guidance is followed: a **90-day** review period and filing within **120 days** of the previous SAR (day 30, then day 150).",
        "**Board**: promptly told of SARs filed; if a director or executive officer is the suspect, notify only the **other** directors.",
        "**Narrative**: **who, what, when, where, why** and **how**, in chronological order, with individual dates and amounts, prior SARs and an internal case number. No tables, no 'see attached'."
      ],
      tip: "Exam tip: thresholds decide when a SAR is mandatory, not whether activity is suspicious. Possible TF of $3,000 can be reported **voluntarily**, with an immediate call to law enforcement."
    },
    {
      h: "Confidentiality, tipping-off and safe harbor",
      p: [
        "**FATF R.21** shields good-faith reporters from criminal and civil liability for breaching confidentiality, even if they did not know the underlying crime, and bans **tipping-off**. In the US, **31 USC 5318(g)(2)** bars telling anyone involved that a transaction was reported, and the **safe harbor** in **5318(g)(3)** removes liability to any person, even under a contract, for the report or for not telling the subject."
      ],
      list: [
        "**Subpoena for a SAR** (e.g. civil litigation): **decline** to produce it or confirm it exists, and **notify FinCEN**; banks also tell their primary regulator.",
        "**Permitted**: FinCEN, law enforcement and BSA supervisors; the **head office or controlling company**, domestic or foreign, under confidentiality protections; the **underlying facts, transactions and documents**.",
        "Cross-border, underlying records, alerts, adverse media research and IP data may be shared; analysis opining on suspicion, a SAR copy or a statement that **no SAR** was filed may not (changed September 2025).",
        "**Neutral questions** about a transaction are fine; never mention a SAR. Front-line staff escalate through an **internal referral**."
      ],
      tip: "Exam tip: a court subpoena does not override SAR confidentiality, and customer consent never permits disclosure; asking for it would tip off the customer.",
      remember: "The facts can be shared; the SAR, and whether one exists, cannot."
    },
    {
      h: "CTRs, exemptions and structuring",
      p: [
        "Banks file a **CTR** for each transaction in **currency** of **more than $10,000**, within **15 days**. Cash in, or cash out, by or for the same person is **aggregated** over one **business day**, across branches, when the bank knows of it. The CTR names the person conducting the transaction: TD Bank (2024) failed to name a launderer, who gave staff gift cards, on over **500** CTRs."
      ],
      table: {
        head: ["Exemption", "Who qualifies", "Key conditions"],
        rows: [
          ["**Phase I**", "Banks, government bodies, companies listed on the **NYSE**, American Stock Exchange or **NASDAQ** (not Capital Market) and their **51%**-owned US subsidiaries", "Banks and government: no filing. Listed companies and subsidiaries: **FinCEN Form 110** within **30 days**, **annual** review"],
          ["**Phase II**", "**Non-listed businesses** and **payroll customers**", "Account open **2 months** (less after a documented risk-based assessment), **5 or more** reportable cash transactions a year, US-registered; Form 110, annual review"],
          ["**Ineligible**", "E.g. financial institutions, **gaming**, vehicle, vessel and aircraft dealers, lawyers, accountants, doctors, real estate brokers, pawnbrokers", "No Phase II exemption if over **50%** of gross revenue comes from these"]
        ]
      },
      list: [
        "Exemptions remove the CTR, never **SAR** duties; Phase II accounts must still be monitored.",
        "**Structuring** (31 USC 5324) is a crime even with legitimate funds: cash **in any amount**, at one or more institutions, on one or more days.",
        "Casinos aggregate by **gaming day** and are deemed to know what their own logs and systems record."
      ],
      tip: "Exam tip: $6,000 in cash at one branch and $4,500 at another on the same business day means one CTR for $10,500."
    },
    {
      h: "Recordkeeping: the $3,000 rules and five-year retention",
      table: {
        head: ["Record", "Trigger", "Keep for"],
        rows: [
          ["**Monetary instrument log** (bank checks, cashier's checks, money orders, traveler's checks)", "Sold for **cash**, **$3,000 to $10,000** inclusive; contemporaneous purchases of $3,000 or more count as one", "**5 years**"],
          ["**Funds transfers**: records and **travel rule**", "**$3,000 or more**: the originator's bank records and sends name, account, address, amount, date and beneficiary bank; intermediaries pass it on", "**5 years**"],
          ["**SARs** with supporting documents, **CTRs**, exemption records", "Each filing", "**5 years** (SARs: from filing)"],
          ["**CIP and beneficial ownership**", "Identification data; verification records", "**5 years** after the account **closes**; after the record is **made**"],
          ["**OFAC** sanctions records", "Transactions and blocked property", "**10 years** (since March 2025)"]
        ]
      },
      list: [
        "**FATF R.11**: transaction and CDD records kept **at least 5 years** after the transaction or the end of the relationship, enough to **reconstruct** transactions and available swiftly to authorities.",
        "FATF **R.16** allows a de minimis threshold of at most **USD/EUR 1,000**; the US travel rule starts at **$3,000**, crypto transfers by money transmitters included.",
        "Repeated instrument purchases, or several senders' transfers, each just under **$3,000** suggest structuring to avoid these records."
      ],
      remember: "$3,000: instrument log and wire records. Over $10,000 in cash: CTR. BSA records: 5 years."
    },
    {
      h: "Law enforcement: keep-open and document requests",
      p: [
        "Law enforcement may ask a bank to **keep open** an account it would otherwise close. The bank is **not obliged** to agree: the decision is its own."
      ],
      list: [
        "**FinCEN guidance (2007)**: a **written** request from a supervisory agent or prosecutor, stating purpose and duration (**up to 6 months**, renewable); keep it **5 years** after it expires.",
        "**31 USC 5333** (AML Act 2020): no BSA liability for keeping the account open as requested, if the agency notified **FinCEN** first (state or local: with FinCEN's concurrence). A **termination date** is required; no protection before the request or after that date.",
        "**SAR duties continue** throughout.",
        "If a subpoena, **314(a)** request or National Security Letter reveals an investigation, **notify law enforcement before** closing the account.",
        "**Supporting documentation** goes to FinCEN, law enforcement or supervisors **on request, without a subpoena**, after verifying the requester; it can include records the narrative does not name."
      ],
      tip: "Exam tip: an agent's oral promise of a renewal does not extend the safe harbor; only the written request and its termination date count."
    },
    {
      h: "UK contrast: SARs and the DAML regime",
      table: {
        head: ["", "United States", "United Kingdom"],
        rows: [
          ["Report to", "**FinCEN**", "**UKFIU**, part of the **National Crime Agency**"],
          ["Threshold", "**$5,000** for banks, **$2,000** for MSBs; insider abuse at any amount", "**None**: any knowledge or suspicion"],
          ["Timing", "**30 days** from initial detection (**60** at most)", "**As soon as practicable**, via the **nominated officer** (MLRO)"],
          ["Before acting", "No consent regime; the bank decides", "**DAML**: **7 working days** notice (silence gives a defence); if refused, a **31-day** moratorium, extendable by up to **186 days** in total"],
          ["Staff who suspect", "Refer internally under the bank's procedures", "Must disclose: **s.330** offence in the regulated sector, **objective** test (reasonable grounds to know or suspect)"],
          ["Tipping-off", "**31 USC 5318(g)(2)**", "**s.333A** (up to **2 years**); s.333B permits disclosures within the **group**"]
        ]
      },
      list: [
        "**Threshold amount £3,000** (from £1,000, changed July 2025): banks operating an account, and regulated firms exiting a customer after CDD, need **no DAML** below it, but a **SAR** is still due.",
        "A granted DAML is a **defence**, not a clean bill of health; keep managing the risk."
      ],
      tip: "Exam tip: a US SAR neither freezes nor authorises anything; a UK DAML gives a defence before a specific act, such as releasing funds."
    }
  ],
  cards: [
    { front: "Unusual vs suspicious activity?", back: "Unusual: does not fit the customer's profile. Suspicious: after review, no reasonable explanation remains and crime, evasion or no lawful purpose is suspected." },
    { front: "Rules-based vs behavioural monitoring", back: "Rules flag activity crossing fixed thresholds or patterns. Behavioural analytics flag departures from the customer's own history or peer segment." },
    { front: "Above-the-line vs below-the-line testing", back: "ATL raises thresholds to check productive alerts are not lost. BTL samples activity below the threshold to find missed suspicious activity (false negatives)." },
    { front: "Best response to a large alert backlog?", back: "Escalate to senior management and the board, prioritise by risk, add qualified staff. Never bulk-close, suppress or cap alerts to fit staffing." },
    { front: "When does the 30-day SAR clock start?", back: "At initial detection: when a promptly started review concludes the facts may require a SAR, not when the alert is generated." },
    { front: "US bank SAR thresholds", back: "Insider abuse: any amount. $5,000 with a suspect identified or for ML/BSA evasion. $25,000 regardless of suspect. MSBs: $2,000." },
    { front: "SAR deadlines and urgent cases", back: "30 calendar days from initial detection; up to 60 if no suspect is identified. Ongoing violations: telephone law enforcement immediately, then file." },
    { front: "Continuing activity SARs since October 2025", back: "Separate post-SAR reviews are optional. If the guidance is followed: review a 90-day period and file within 120 days of the previous SAR." },
    { front: "Must a no-SAR decision be documented?", back: "No BSA requirement (October 2025 FAQs). If internal procedures require it, a short statement usually suffices." },
    { front: "Does a grand jury subpoena require a SAR?", back: "Not by itself. It should prompt a review of the customer and the activity; file only if the facts support suspicion." },
    { front: "A civil-case subpoena asks for a SAR. Response?", back: "Decline to produce it or confirm it exists, and notify FinCEN (and the bank's primary regulator)." },
    { front: "Who may see a US SAR, and what may be shared more widely?", back: "FinCEN, law enforcement, supervisors and the head office or controlling company. The underlying facts and documents may be shared more widely." },
    { front: "What does the US SAR safe harbor cover?", back: "31 USC 5318(g)(3): no liability to any person, under any law or contract, for the report or for not notifying the subject." },
    { front: "When must a bank aggregate cash for a CTR?", back: "Cash in or cash out by or for the same person totalling more than $10,000 in one business day, across branches, if the bank knows." },
    { front: "Phase I vs Phase II CTR exemptions", back: "Phase I: banks, government, listed companies and 51%-owned subsidiaries. Phase II: non-listed businesses and payroll customers (5+ reportable transactions a year)." },
    { front: "Which records does $3,000 trigger?", back: "Cash sales of monetary instruments ($3,000 to $10,000 inclusive) and funds transfers of $3,000 or more (recordkeeping and travel rule)." },
    { front: "Keep-open request: what protects the bank?", back: "A written request with a termination date (31 USC 5333). The decision stays with the bank, SAR filing continues, no protection after that date." },
    { front: "US SAR vs UK SAR in one line", back: "US: thresholds, 30/60-day clock, no consent. UK: no threshold, report as soon as practicable, DAML defence before acting." }
  ],
  numbers: [
    { q: "US bank SAR threshold when a suspect can be identified", a: "$5,000", wrong: ["$2,000", "$10,000", "$25,000"] },
    { q: "US bank SAR threshold when no suspect can be identified", a: "$25,000", wrong: ["$5,000", "$10,000", "$50,000"] },
    { q: "SAR threshold for money services businesses (MSBs)", a: "$2,000", wrong: ["$1,000", "$3,000", "$5,000"] },
    { q: "Standard SAR filing deadline after initial detection", a: "30 calendar days", wrong: ["10 calendar days", "15 calendar days", "90 calendar days"] },
    { q: "Latest SAR filing date when no suspect is identified", a: "60 days after initial detection", wrong: ["45 days after initial detection", "90 days after initial detection", "120 days after initial detection"] },
    { q: "Continuing activity SAR due date (if following FinCEN guidance)", a: "120 days after the previous SAR", wrong: ["30 days after the previous SAR", "90 days after the previous SAR", "180 days after the previous SAR"] },
    { q: "US CTR threshold (cash, per business day)", a: "More than $10,000", wrong: ["$3,000 or more", "More than $5,000", "More than $15,000"] },
    { q: "Deadline to file a US CTR", a: "15 days after the transaction", wrong: ["5 days after the transaction", "30 days after the transaction", "60 days after the transaction"] },
    { q: "US funds transfer recordkeeping and travel rule threshold", a: "$3,000 or more", wrong: ["$1,000 or more", "$5,000 or more", "More than $10,000"] },
    { q: "Cash purchases of monetary instruments that must be logged", a: "$3,000 to $10,000 inclusive", wrong: ["$1,000 to $3,000 inclusive", "$2,000 to $5,000 inclusive", "$5,000 to $15,000 inclusive"] }
  ],
  questionIds: [
    "D1-004", "D1-042",
    "D2-022", "D2-023",
    "D3-020", "D3-027", "D3-028", "D3-029", "D3-030", "D3-031", "D3-032", "D3-033", "D3-034", "D3-035", "D3-036", "D3-037", "D3-045",
    "D4-001", "D4-002", "D4-003", "D4-018", "D4-019", "D4-020", "D4-021", "D4-022", "D4-024", "D4-026", "D4-027", "D4-028",
    "EU-017", "EU-018", "EU-019",
    "CASE-002", "CASE-003", "CASE-007", "CASE-031",
    "TRAP-019", "TRAP-020", "TRAP-025", "TRAP-027", "TRAP-028", "TRAP-032",
    "SECT-003", "SECT-005", "SECT-020",
    "GLOB-004", "GLOB-006",
    "KYC-029",
    "INV-002", "INV-013", "INV-015", "INV-016", "INV-018", "INV-019", "INV-027", "INV-028", "INV-029", "INV-035"
  ],
  sources: [
    { label: "31 CFR 1020.320: bank SARs ($5,000 threshold, 30/60-day deadline, 5-year retention, confidentiality, safe harbor), eCFR", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.320" },
    { label: "12 CFR 21.11 (OCC): insider abuse at any amount, $5,000 and $25,000 thresholds, board notification, eCFR", url: "https://www.ecfr.gov/current/title-12/chapter-I/part-21/subpart-B/section-21.11" },
    { label: "FinCEN with the Federal Reserve, FDIC, NCUA and OCC: SAR FAQs (9 October 2025)", url: "https://www.fincen.gov/system/files/2025-10/SAR-FAQs-October-2025.pdf" },
    { label: "FinCEN and the federal banking agencies: SAR FAQs (19 January 2021): keep-open requests, subpoenas, negative news", url: "https://www.fincen.gov/system/files/2021-01/Joint%20SAR%20FAQs%20Final%20508.pdf" },
    { label: "31 USC 5333: safe harbor with respect to keep open directives (official US Code, govinfo)", url: "https://www.govinfo.gov/content/pkg/USCODE-2024-title31/pdf/USCODE-2024-title31-subtitleIV-chap53-subchapII-sec5333.pdf" },
    { label: "FinCEN FIN-2012-G003: Guidance on determining eligibility for exemption from CTR requirements (Phase I and Phase II, 31 CFR 1020.315)", url: "https://www.fincen.gov/system/files/shared/FIN-2012-G003.pdf" },
    { label: "31 CFR part 1010, subpart D: funds transfer records and travel rule (1010.410), monetary instrument records (1010.415), five-year retention (1010.430), eCFR", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-D" },
    { label: "FATF Recommendations (updated June 2026): R.11, R.20, R.21, INR.10 and INR.20, official text hosted by the Eurasian Group (EAG)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
    { label: "FinCEN FIN-2025-G001: Cross-border information sharing and SAR confidentiality (September 2025)", url: "https://www.fincen.gov/system/files/2025-09/Crossborderguidance-508C.pdf" },
    { label: "Wolfsberg Group: Statement on Effective Monitoring for Suspicious Activity, Part I (2024)", url: "https://db.wolfsberg-group.org/assets/e3d83d2f-fad9-46d2-b5a9-3cf4e932f53f/Wolfsberg%20Group%20MSA%20Statement%20Part%20I.pdf" }
  ]
}]);
