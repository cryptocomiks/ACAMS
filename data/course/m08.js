window.CAMS_COURSE = (window.CAMS_COURSE || []).concat([{
  id: "m08",
  order: 8,
  domain: 2,
  title: "Sanctions compliance",
  icon: "🚫",
  minutes: 15,
  summary: "Learn how sanctions work and how firms comply: the four types of sanctions, OFAC's SDN List and 50 Percent Rule, blocking versus rejecting and the reporting clock, OFAC enforcement and its 2019 Framework, the EU, UK and UN regimes, screening design, evasion red flags and the BIS Entity List.",
  mostTested: [
    "OFAC **50 Percent Rule**: an entity owned **50% or more**, directly or indirectly, **in the aggregate** by blocked persons is blocked even if unlisted. The test is **ownership, not control**",
    "**Block** when a blocked person has an interest; **reject** when the deal is prohibited but nothing is blockable. Report either to OFAC within **10 business days**; annual report of blocked property held on **30 June** due **30 September**",
    "OFAC civil liability is **strict liability**; records are kept **10 years** and the statute of limitations is **10 years**; a **voluntary self-disclosure** cuts a non-egregious base penalty to **half** the transaction value",
    "OFAC **2019 Framework**, five components: **management commitment, risk assessment, internal controls, testing and auditing, training**",
    "Ownership tests: US and EU **50% or more** with aggregation; UK **more than 50%** without aggregation. OFSI civil penalties are **strict liability**",
    "Screening: **fuzzy matching** and threshold trade-offs, clearing **false positives** on secondary identifiers, and shipping red flags such as **AIS** gaps and **ship-to-ship transfers**",
    "An **Entity List** hit is not an SDN hit: it means an export license requirement, not blocking. Banks breach **GP 10** only with knowledge of an EAR violation"
  ],
  sections: [
    {
      h: "Types of sanctions and who must comply",
      p: [
        "Sanctions **coerce**, **constrain** or **signal** disapproval by cutting access to funds, goods and services. They are **prohibitions**: a risk-based approach shapes screening, not whether a ban applies.",
        "The **UN Security Council** imposes sanctions under **Chapter VII**; member states implement them, and the US, EU and UK add their own."
      ],
      table: {
        head: ["Type", "How it works", "Example"],
        rows: [
          ["**Comprehensive**", "Region-wide ban on most trade and services", "US: **Cuba**, **Iran**, **North Korea**, Crimea, DNR, LNR; no longer Syria (changed July 2025)"],
          ["**List-based**", "Named persons' assets frozen", "OFAC **SDN List**; UK, EU and UN lists"],
          ["**Sectoral**", "Set activities banned (e.g. new debt); **no blocking**", "US **SSI** directives: debt over **14 days** (financial) or **60 days** (energy), tightened by CAATSA (2017)"],
          ["**Secondary**", "Hits **non-US persons** that deal with targets, even in local currency", "**E.O. 14114**: foreign banks serving Russia's military-industrial base risk blocking or losing US correspondent accounts"]
        ]
      },
      list: [
        "**US persons** (citizens, permanent residents, US entities and their **foreign branches**, anyone in the US) comply worldwide and may not **facilitate** foreign deals barred to them. Cuba and Iran rules also bind US-owned or controlled foreign subsidiaries.",
        "Freeze UN designations **without delay** (ideally within hours), without prior notice. FATF **R.6** adds national designations (**UNSCR 1373**); **R.7** covers UN designations only: DPRK **1718**, Iran **1737** (re-applied by snapback in September 2025; changed September 2025). R.7 freezing is never risk-based; PF risk can be assessed within the sanctions programme."
      ],
      tip: "Exam tip: an SSI entity is not an SDN: refuse the restricted debt, but do not block."
    },
    {
      h: "OFAC, the SDN List and the 50 Percent Rule",
      p: [
        "**OFAC** (US Treasury) administers US sanctions, mainly under **IEEPA** and **TWEA**. Its **SDN List** holds over **19,000** names; their property is blocked and US persons may not deal with them anywhere.",
        "**50 Percent Rule**: an entity owned **50% or more**, directly or indirectly, individually or **in the aggregate**, by blocked persons is blocked, listed or not."
      ],
      list: [
        "**Aggregation**: SDN A 30% + SDN B 20% = 50%: blocked, even across different programmes.",
        "**Indirect**: SDN X owns 50% of A, so A is blocked and its **whole** stake counts. A owns 40% of B and X owns 10%: 50%, so B is blocked. Never multiply.",
        "**Unblocked link**: if X owns only 25% of A, A's stakes count for nothing.",
        "**Control is not ownership**: control alone does not block, but be cautious and never sign a contract an SDN signs.",
        "A genuine **divestment** below 50% frees **future** dealings only; already-blocked property stays blocked until OFAC licenses or delists.",
        "**Intermediary banks**: the wire is still blocked property, but OFAC does not expect research on unlisted **non-account parties**; customers need ownership due diligence."
      ],
      tip: "Exam tip: name screening misses unlisted 50%-owned entities; ownership data must feed screening.",
      remember: "50% or more, aggregated, ownership not control; a blocked parent's stake counts in full."
    },
    {
      h: "Block or reject: reports, records and licenses",
      table: {
        head: ["", "Block", "Reject"],
        rows: [
          ["When", "A blocked person has an **interest**: SDN, 50%-owned entity, blocked government or Iranian bank", "Prohibited but **no blockable interest** (e.g. exports to an unlisted Iranian company)"],
          ["Action", "Freeze in a **blocked interest-bearing account**; only OFAC-authorised debits", "Do not process; return to the originator"],
          ["Report to OFAC", "Within **10 business days**", "Within **10 business days**"]
        ]
      },
      list: [
        "**Annual report**: blocked property held on **30 June**, due **30 September**. Unblocking or transfer: report within **10 business days**; loans are reported as **$0.00**.",
        "**Records**: **10 years** (since March 2025). Crypto from an SDN address is blocked too: deny all access, never send it back.",
        "FinCEN treats a blocking report on a terrorism or narcotics SDN match as the SAR for that match; anything more needs a SAR.",
        "**General license**: public, **self-executing**, conditions (e.g. reports) apply. **Specific license**: non-public, issued to a named applicant; not granted where a general license applies.",
        "Valid match? Check licenses and exemptions **before** blocking or rejecting (OFAC FAQ 5)."
      ],
      tip: "Exam tip: never return blocked funds to the originator; reject only when nothing is blockable."
    },
    {
      h: "OFAC enforcement and the 2019 Framework",
      p: [
        "OFAC civil liability is **strict liability**: even an unknowing ransomware payment to a designated group can breach sanctions. IEEPA civil maximum: the greater of **$377,700** or **twice** the transaction value per violation; wilful breaches: up to **$1 million** and **20 years**. The **statute of limitations** is **10 years** (April 2024)."
      ],
      list: [
        "**Egregious?** Judged on the General Factors, with particular emphasis on **wilful or reckless** conduct and **awareness**.",
        "**Base penalty**: non-egregious with **voluntary self-disclosure (VSD)**, half the transaction value (cap **$188,850**); without VSD, the schedule amount. Egregious: half the statutory maximum with VSD, the maximum without.",
        "No VSD if a third party (e.g. a bank that blocked or rejected the payment) had to report and did. **Cooperation** still cuts **25-40%**; a **first violation** up to 25%.",
        "**2019 Framework**: **management commitment**, **risk assessment**, **internal controls**, **testing and auditing**, **training**. Binance (2023): commitment starts on 'Day One'.",
        "Root causes include **filter faults**, weak ownership due diligence, **facilitation** by non-US subsidiaries, decentralised compliance and **individual liability**."
      ],
      tip: "Exam tip: CTRs and SARs are BSA duties, not Framework components.",
      remember: "OFAC: strict liability, 10 business days to report, 10 years to keep records and to enforce."
    },
    {
      h: "EU and UK regimes",
      p: [
        "The EU Council adopts a CFSP decision **unanimously**, then an **Art. 215 TFEU** regulation that applies directly; Member States enforce and penalise. UK regimes rest on **SAMLA 2018**: the **FCDO** designates, **OFSI** (HM Treasury) enforces financial sanctions, **OTSI** (Business and Trade) trade sanctions."
      ],
      table: {
        head: ["Point", "EU", "UK"],
        rows: [
          ["Ownership", "**50% or more**; holdings **aggregated**", "**More than 50%** of shares or votes; **no aggregation** without a joint arrangement"],
          ["Control", "Board appointment, dominant influence; watch share transfers near designation, buybacks, front persons", "Board appointment rights, or running affairs as the person wishes"],
          ["Reporting", "To the national authority within **two weeks**", "Relevant firms to OFSI **as soon as practicable**; Russia regime: yearly report by **30 November**"],
          ["Liability", "Only with knowledge or **reasonable cause to suspect**", "Civil penalties: **strict liability** since **15 June 2022**; maximum the greater of **£1 million** or **50%**"]
        ]
      },
      list: [
        "EU **Art. 8a**: **best efforts** so non-EU entities an EU operator owns or controls do not undermine the Russia sanctions.",
        "EU **Art. 12g**: exporters of sensitive goods, including **common high priority items**, to non-partner countries must contractually ban **re-export to Russia**.",
        "OFSI discounts: up to **30%** (voluntary disclosure and cooperation), **20%** (Early Account Scheme) and **20%** (settlement), added together (changed February 2026).",
        "OFSI licences permit but never **compel**; credits to frozen accounts must stay frozen and be reported **without delay**."
      ],
      tip: "Exam tip: exactly 50% is not UK 'ownership', but appointing most of the board is 'control'."
    },
    {
      h: "Designing the screening programme",
      p: [
        "Screen customers at **onboarding** and whenever **lists change**, and payments before processing (cross-border ones in real time). In trade finance, also screen **vessels and IMO numbers**, shipping companies, **ports** and **transhipment points**."
      ],
      list: [
        "**Lists**: OFAC, UN, EU and UK; the **UK Sanctions List** is the sole UK source since **28 January 2026** (changed January 2026). Load new names fast and **test completeness**: Starling screened only part of the list for years (FCA fine **£29 million**, 2024).",
        "**Fuzzy matching** (edit distance, Jaro-Winkler, Soundex) catches spelling and transliteration variants. A **higher threshold** cuts false positives but adds **false negatives**; OFAC sets no score.",
        "**Weak AKAs** need not be screened, only used to confirm hits; suppression ('good guys') rules need documented governance.",
        "**Disposition**: compare date of birth, nationality, ID numbers and address; clear real mismatches as **false positives** and record why. OFAC does not confirm matches.",
        "Beyond names: **IP addresses** showing customers in sanctioned countries (Standard Chartered, 2019) and listed crypto addresses, with a **look-back** after new listings."
      ],
      tip: "Exam tip: raising the match threshold cuts false positives but raises the risk of missing true matches."
    },
    {
      h: "Evasion red flags: payments, shipping and the price cap",
      list: [
        "**Wire stripping**: deleting sanctioned names or countries and using opaque **cover payments** (HSBC, 2012). **Satellite banks** hiding Sudanese parties (BNP Paribas, 2014: over **$8.9 billion**).",
        "**Deceptive shipping**: disabling or **spoofing AIS**, painting over names or **IMO numbers**, false papers, **ship-to-ship transfers**, voyage irregularities, **flag hopping**, complex ownership.",
        "**Shadow fleet**: older tankers with opaque owners, used only for sanctioned oil, often with unknown or fraudulent insurance.",
        "**Oil price cap**: coalition firms may ship, insure or finance Russian oil only if bought at or below **$60** per barrel (US) or **$44.10** (EU and UK; changed February 2026). The EU froze its six-monthly reset (15% below market) until **14 July 2027** (changed July 2026).",
        "**Safe harbour**: **Tier 1** traders keep price documents; **Tier 2** banks request them where practicable, otherwise **attestations**; **Tier 3** insurers and shipowners take attestations. Lost if you **knew or had reason to know**.",
        "Refusal to itemise freight and insurance, or AIS spoofing at Russian ports: **reject** and report to OFAC."
      ],
      tip: "Exam tip: an attestation protects good-faith reliance only; red flags require investigation."
    },
    {
      h: "Export controls: the BIS Entity List",
      p: [
        "**BIS** (Commerce Department) administers the **Export Administration Regulations (EAR)** for dual-use items. Its **Entity List** imposes **license requirements** on exports to listed parties but blocks nothing, so a hit means no blocking and no OFAC report.",
        "Banks risk **General Prohibition 10 (GP 10)**: financing or servicing an item with **knowledge** of an EAR violation, including awareness of a **high probability**."
      ],
      list: [
        "BIS (October 2024): check customers against BIS lists at onboarding and periodically, review payments for red flags **after** processing, and **refrain** from further dealings if one stays unresolved; real-time screening only in narrow cases (e.g. the Denied Persons List).",
        "Red flags: little or no web presence, routing via **transhipment points**, refusal to give end-user details, an address shared with an Entity List party. SAR key terms: **FIN-2022-RUSSIABIS**, **FIN-2023-GLOBALEXPORT**.",
        "The **Affiliates Rule** (September 2025) extends Entity List restrictions to firms **50% or more** owned by listed parties; it is suspended until **9 November 2026** (changed November 2025).",
        "**Foreign direct product rules** can put foreign-made items built with US technology under the EAR."
      ],
      tip: "Exam tip: Entity List = export license requirement. SDN List = blocking."
    }
  ],
  cards: [
    { front: "OFAC 50 Percent Rule", back: "An entity owned 50% or more, directly or indirectly, individually or in the aggregate, by blocked persons is blocked, even if unlisted." },
    { front: "SDN A owns 30% and SDN B owns 20% of a company. Blocked?", back: "Yes. Blocked persons own 50% in the aggregate, even if A and B are designated under different programmes." },
    { front: "SDN X owns 50% of A; A owns 40% of B; X owns 10% of B. Is B blocked?", back: "Yes. A is blocked, so its full 40% counts: 40% + 10% = 50%. Do not multiply through a blocked entity." },
    { front: "Does an SDN's control (without 50% ownership) block an entity under OFAC rules?", back: "No, the rule covers ownership only. But be cautious: OFAC may designate it, and you may not deal with the SDN acting for it." },
    { front: "Block vs reject", back: "Block when a blocked person has an interest (freeze in an interest-bearing blocked account). Reject when prohibited but nothing is blockable. Both: report within 10 business days." },
    { front: "OFAC annual report of blocked property", back: "Covers blocked property held on 30 June; due by 30 September. It comes on top of the 10-business-day initial report." },
    { front: "OFAC recordkeeping period and statute of limitations", back: "Both 10 years: recordkeeping since March 2025, statute of limitations for IEEPA and TWEA since April 2024." },
    { front: "General vs specific OFAC license", back: "General: public, self-executing for a category of transactions, conditions apply. Specific: non-public, issued to a named applicant for a particular transaction." },
    { front: "Five components of OFAC's 2019 Framework", back: "Management commitment, risk assessment, internal controls, testing and auditing, and training." },
    { front: "When does a disclosure to OFAC NOT count as a voluntary self-disclosure?", back: "E.g. when a third party (a bank that blocked or rejected the payment) had to report it and did, whenever OFAC received it." },
    { front: "EU vs UK ownership test", back: "EU: 50% or more, with designated persons' holdings aggregated. UK: more than 50% of shares or votes, no aggregation without a joint arrangement." },
    { front: "OFSI civil monetary penalties", back: "Strict liability since 15 June 2022; maximum is the greater of £1 million or 50% of the breach value." },
    { front: "EU Article 8a vs Article 12g (Russia)", back: "8a: best efforts so non-EU entities you own or control do not undermine sanctions. 12g: contractual no re-export to Russia clause for sensitive goods." },
    { front: "Effect of raising the fuzzy-match threshold from 80% to 95%", back: "Fewer alerts and false positives, but more false negatives (missed true matches)." },
    { front: "Strong name match, but DOB and nationality differ. Next step?", back: "Compare all identifiers; if they clearly differ, clear the alert as a false positive and document the rationale. Do not block or tip off." },
    { front: "A payment beneficiary matches the BIS Entity List only. Block it?", back: "No. Entity List means export license requirements, not blocking. Assess any EAR violation (GP 10) and refrain if red flags stay unresolved." },
    { front: "Which price cap tier is a bank, and what must it hold?", back: "Tier 2: price documents where practicable, otherwise customer attestations. No safe harbour if it knew or had reason to know." },
    { front: "Classic deceptive shipping practices", back: "AIS disabling or spoofing, altered vessel IDs, falsified documents, ship-to-ship transfers, voyage irregularities, flag hopping, complex ownership." }
  ],
  numbers: [
    { q: "Deadline to report a blocked or rejected transaction to OFAC", a: "10 business days", wrong: ["5 business days", "30 calendar days", "15 business days"] },
    { q: "OFAC annual report of blocked property", a: "Holdings as of 30 June, due 30 September", wrong: ["Holdings as of 31 December, due 31 March", "Holdings as of 30 September, due 30 November", "Holdings as of 30 June, due 31 December"] },
    { q: "OFAC recordkeeping period (since March 2025)", a: "10 years", wrong: ["5 years", "7 years", "3 years"] },
    { q: "Statute of limitations for civil IEEPA and TWEA violations", a: "10 years", wrong: ["5 years", "7 years", "20 years"] },
    { q: "OFAC 50 Percent Rule ownership threshold", a: "50% or more, in the aggregate", wrong: ["More than 50%, by a single SDN", "25% or more, in the aggregate", "More than 50%, in the aggregate"] },
    { q: "UK ownership threshold for designated persons", a: "More than 50%", wrong: ["50% or more", "25% or more", "33% or more"] },
    { q: "Maximum OFSI civil monetary penalty", a: "Greater of £1 million or 50% of the value", wrong: ["Greater of £500,000 or 25% of the value", "Greater of £1 million or 100% of the value", "Lesser of £1 million or 50% of the value"] },
    { q: "IEEPA maximum civil penalty per violation", a: "Greater of $377,700 or twice the transaction value", wrong: ["Greater of $250,000 or the transaction value", "Greater of $100,000 or three times the transaction value", "Lesser of $377,700 or twice the transaction value"] },
    { q: "OFAC base penalty, non-egregious case with voluntary self-disclosure", a: "One-half of the transaction value", wrong: ["The full transaction value", "One-half of the statutory maximum", "Twice the transaction value"] },
    { q: "EU deadline to report frozen funds to the national competent authority (Reg. 269/2014)", a: "Within two weeks", wrong: ["Within 10 business days", "Within 30 days", "Within 24 hours"] }
  ],
  questionIds: [
    "D1-031", "D1-032", "D1-041",
    "D2-010", "D2-020", "D2-021",
    "D3-023", "D3-024", "D3-025", "D3-026",
    "D4-006", "D4-007", "D4-008", "D4-009",
    "EU-009", "EU-010", "EU-011", "EU-021", "EU-022",
    "CASE-005", "CASE-006", "CASE-013", "CASE-014", "CASE-035",
    "TRAP-012", "TRAP-024", "TRAP-028", "TRAP-029", "TRAP-034",
    "GLOB-027", "GLOB-028",
    "INV-005", "INV-030", "INV-031",
    "SANC-001", "SANC-002", "SANC-003", "SANC-004", "SANC-005", "SANC-006", "SANC-007", "SANC-008", "SANC-009", "SANC-010",
    "SANC-011", "SANC-012", "SANC-013", "SANC-014", "SANC-015", "SANC-016", "SANC-017", "SANC-018", "SANC-019", "SANC-020",
    "SANC-021", "SANC-022", "SANC-023", "SANC-024", "SANC-025", "SANC-026", "SANC-027", "SANC-028", "SANC-029", "SANC-030",
    "SANC-031", "SANC-032", "SANC-034", "SANC-035"
  ],
  sources: [
    { label: "OFAC FAQ 401: indirect ownership under the 50 Percent Rule (with FAQs 398-402 on control, aggregation and divestment)", url: "https://ofac.treasury.gov/faqs/401" },
    { label: "OFAC FAQ 5 (updated September 2026): assessing potential matches; block, reject or process; 10-business-day reporting", url: "https://ofac.treasury.gov/faqs/5" },
    { label: "31 CFR Part 501: reports of blocked and rejected transactions (501.603-604), 10-year recordkeeping (501.601), Enforcement Guidelines (Appendix A)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-V/part-501" },
    { label: "OFAC: A Framework for OFAC Compliance Commitments (May 2019)", url: "https://ofac.treasury.gov/media/16331/download?inline=" },
    { label: "OFAC Guidance on Implementation of the Price Cap Policy (revised December 2023): tiers, attestations and safe harbour", url: "https://ofac.treasury.gov/media/931036/download?inline" },
    { label: "Council of the EU: Best Practices for the effective implementation of restrictive measures (11623/24, July 2024): ownership and control", url: "https://data.consilium.europa.eu/doc/document/ST-11623-2024-INIT/en/pdf" },
    { label: "Regulation (EU) No 833/2014, consolidated text of 24 July 2026: Art. 8a best efforts, Art. 12g no re-export to Russia, Annex XXVIII price cap", url: "https://publications.europa.eu/resource/celex/02014R0833-20260724" },
    { label: "OFSI: UK financial sanctions general guidance (updated May 2026): ownership and control, reporting, licensing", url: "https://www.gov.uk/government/publications/financial-sanctions-general-guidance/uk-financial-sanctions-general-guidance" },
    { label: "OFSI: Financial sanctions enforcement and monetary penalties guidance (updated 9 February 2026)", url: "https://www.gov.uk/government/publications/financial-sanctions-enforcement-and-monetary-penalties-guidance/financial-sanctions-enforcement-and-monetary-penalties-guidance" },
    { label: "BIS: Guidance to financial institutions on best practices for compliance with the EAR (October 2024)", url: "https://www.bis.gov/media/documents/guidance-financial-institutions-best-practices-compliance-export-administration.pdf" }
  ]
}]);
