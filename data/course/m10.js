window.CAMS_COURSE = (window.CAMS_COURSE || []).concat([{
  id: "m10",
  order: 10,
  domain: 3,
  title: "Customer due diligence, beneficial ownership and PEPs",
  icon: "🪪",
  minutes: 15,
  summary: "Master the customer lifecycle: CIP and the four CDD measures, risk rating, EDD and SDD, periodic and event-driven reviews, beneficial ownership (US 25% and control prongs, the FATF cascade, R.24 and R.25), PEPs, correspondent banking, third-party reliance and MSB customers.",
  mostTested: [
    "**R.10** CDD: identify and verify the customer, identify the **beneficial owner** (reasonable measures), understand the **purpose and intended nature**, conduct **ongoing due diligence**. If CDD cannot be completed: do not open or terminate, and **consider an STR**",
    "US **CIP** minimum before opening: **name, date of birth, address, ID number** (TIN for US persons); identifying records kept **5 years after the account closes**",
    "US beneficial owners: each individual with **25% or more** plus **one control person**; a trust's stake points to the **trustee**; identified at the **first account opening** (FIN-2026-R001, changed February 2026)",
    "FATF cascade: **controlling ownership interest**, then **control through other means**, then the **senior managing official**; R.24 caps any threshold at **25%**; R.25 covers **trusts**",
    "**R.12** PEPs: foreign PEPs always get **senior management approval**, **source of wealth and funds** and **enhanced ongoing monitoring**; domestic and international organisation PEPs only if higher risk; same for **family and close associates**",
    "**R.13** correspondent banking: assess the respondent and its controls, **senior management approval**, CDD on **payable-through** users, **no shell banks**, watch for **nested** banks; US **s.312** EDD and **s.313** certifications",
    "**R.17** reliance: CDD information obtained **immediately**, copies **without delay**, **ultimate responsibility** stays with the relying institution; outsourcing is not reliance"
  ],
  sections: [
    {
      h: "CDD under FATF Recommendation 10",
      p: [
        "**R.10** bans **anonymous accounts** and requires **customer due diligence (CDD)** for new business relations, **occasional transactions above USD/EUR 15,000** (or payments covered by INR.16), any **suspicion** of ML/TF, and **doubts** about earlier identification data."
      ],
      list: [
        "**(a) Customer**: identify and verify with reliable, **independent** documents, data or information.",
        "**(b) Beneficial owner**: identify, take **reasonable measures** (proportionate to risk) to verify, and understand the **ownership and control structure**.",
        "**(c)** Understand the **purpose and intended nature** of the relationship.",
        "**(d) Ongoing due diligence**: check that transactions fit the customer's profile.",
        "Verify **before or during** onboarding, or soon after where risk is managed and delay would disrupt business. If CDD cannot be completed: **do not open** or **terminate**, and **consider an STR**."
      ],
      tip: "Exam tip: if CDD would **tip off** a customer you already suspect, INR.10 lets you stop the CDD process and **file an STR**."
    },
    {
      h: "US CIP and the fifth pillar",
      p: [
        "The **Customer Identification Program** (31 CFR 1020.220; PATRIOT Act **s.326**) must let the bank form a **reasonable belief** that it knows each customer's true identity."
      ],
      list: [
        "Obtained **before opening**: **name**, **date of birth**, **address** (residential or business street address) and an **ID number**: a **TIN** for US persons; a TIN, passport or other government photo ID number for non-US persons.",
        "Verify **within a reasonable time** after opening, by documents, non-documentary methods or both.",
        "Procedures for failure: when **not to open**, limits while verifying, when to **close**, when to **file a SAR**.",
        "Records (CIP and beneficial ownership): identifying data **5 years after the account closes**; verification records **5 years after they are made**.",
        "The 2016 CDD Rule added the **fifth pillar**: understand the **nature and purpose** of relationships to build a **customer risk profile** (the baseline for judging actual activity), then **monitor** to report suspicious activity and, on a risk basis, **update** customer information."
      ],
      tip: "Exam tip: occupation, source of wealth and expected activity are CDD or EDD data, not CIP minimums."
    },
    {
      h: "Customer risk rating, EDD and SDD",
      p: [
        "A **customer risk rating** blends **customer, geography, product/service and channel** factors and sets the depth of CDD."
      ],
      list: [
        "US: a risk profile **may, but need not**, use ratings; no customer type (MSBs, charities, PEPs) is **automatically high risk**. Exiting whole categories to avoid risk is **de-risking**.",
        "Ratings drive controls: HSBC USA rated Mexico **'standard'**, its lowest category, and left **$670 billion** of wires unmonitored (2012)."
      ],
      table: {
        head: ["", "Enhanced due diligence (EDD)", "Simplified due diligence (SDD)"],
        rows: [
          ["When", "Higher risk, e.g. non-resident customers, cash-intensive businesses, **nominee** shareholders or **bearer shares**, unusually **complex ownership**, private banking, unmitigated non-face-to-face business", "Lower risk shown by an **adequate risk analysis**, e.g. regulated FIs, **listed companies** with disclosure duties, public administrations, limited **financial inclusion** products"],
          ["Measures", "More customer data, **source of funds and wealth**, reasons for transactions, **senior management approval**, **enhanced monitoring**", "Verify later, update less often, lighter monitoring, infer the purpose from the product"]
        ]
      },
      tip: "Exam tip: SDD is **never** acceptable when ML/TF is suspected. Low risk for identification does not mean low risk for **ongoing monitoring**."
    },
    {
      h: "Ongoing monitoring: periodic and event-driven reviews",
      p: [
        "Ongoing due diligence keeps CDD data **up to date**, especially for higher-risk customers, through **periodic reviews** (frequency set by the risk rating) and **event-driven reviews**."
      ],
      list: [
        "Triggers: activity that does not fit the profile, **adverse media**, a possible change of **beneficial ownership**.",
        "US: **no fixed schedule** is required; updates are risk-based and flow from normal monitoring. A periodic review is **not by itself a trigger** to recollect beneficial ownership.",
        "**Perpetual KYC** updates profiles continuously from trigger events.",
        "EU AMLR (from **10 July 2027**): update at least every **1 year** for higher-risk customers and **5 years** for others, plus on triggers."
      ],
      remember: "Review when risk changes, not only when the calendar says so."
    },
    {
      h: "Beneficial ownership: the US CDD Rule",
      p: [
        "31 CFR 1010.230 requires banks to identify and verify the beneficial owners of each **legal entity customer** (corporation, LLC, partnership or similar foreign entity)."
      ],
      list: [
        "**Ownership prong**: each individual who directly or indirectly owns **25% or more** of the equity (zero to four people; exactly 25% counts).",
        "**Control prong**: **one** individual with significant responsibility to control, manage or direct (e.g. the CEO). It always applies, so there are **one to five** beneficial owners.",
        "**Indirect stakes**: multiply along each chain and add the chains (50% of a holding that owns 60% = 30%); the EU AMLR uses the same method and 25% test.",
        "**Trusts**: if a trust owns 25% or more, the owner for that prong is the **trustee** (one is enough; a corporate trustee gets CIP-type checks).",
        "Exclusions include regulated FIs and **SEC-registered issuers**; nonprofits need the **control prong only**.",
        "The bank may rely on the customer's **certification** unless it knows facts that **call it into question**, and records how each **discrepancy** was resolved.",
        "**When**: banks may limit this to the **first account opening**, then act only if the data is called into question or risk-based CDD requires it (FIN-2026-R001, changed February 2026)."
      ],
      tip: "Exam tip: FinCEN's BOI rule exempts **US companies** from Corporate Transparency Act reporting (changed August 2026); banks must still identify the beneficial owners of new legal entity customers."
    },
    {
      h: "FATF beneficial ownership: the cascade, R.24 and R.25",
      p: [
        "Only a **natural person** can be a beneficial owner; a **nominee** never is. For legal persons, INR.10 sets **cascading** steps, each used only if the previous one finds nobody:"
      ],
      list: [
        "1. Natural persons with a **controlling ownership interest** (e.g. more than 25%).",
        "2. Natural persons with **control through other means**, e.g. whoever instructs a nominee director.",
        "3. The **senior managing official**, as a last resort.",
        "Trusts: the **trustee holds legal title**. For a **class** of beneficiaries, obtain enough to identify each one at **payout** or when vested rights are exercised."
      ],
      table: {
        head: ["", "**R.24** legal persons (revised March 2022)", "**R.25** legal arrangements (revised February 2023)"],
        rows: [
          ["Who holds BO data", "The company plus a **public body** (e.g. a **register**) or alternative mechanism: a **multi-pronged** approach", "**Trustees** resident in or administering trusts in the country; they must **disclose their status** to FIs"],
          ["Key rules", "Any ownership threshold **25% maximum**; no new **bearer shares** (existing ones converted or immobilised); **nominees** disclosed, licensed or banned", "Identify **settlor, trustee(s), protector, beneficiaries or class** and anyone with **ultimate effective control**, plus the owners of corporate parties"]
        ]
      },
      remember: "R.24 = companies, R.25 = trusts. The senior managing official is the last resort."
    },
    {
      h: "Politically exposed persons (R.12)",
      list: [
        "**Prominent public functions**: e.g. heads of state or government, senior politicians, senior government, judicial or military officials, senior executives of **state-owned corporations**; not **middle-ranking** staff.",
        "**Family members** are related by blood or marriage; **close associates** are socially or professionally close.",
        "**Source of wealth** = origin of the PEP's entire wealth; **source of funds** = origin of the money in this relationship.",
        "US: rules do not define PEPs and the agencies exclude **US officials**. Private banking accounts of **senior foreign political figures** get enhanced scrutiny for **proceeds of foreign corruption**."
      ],
      table: {
        head: ["PEP type", "What R.12 requires"],
        rows: [
          ["**Foreign**", "**Always**: risk systems to identify, **senior management approval**, reasonable measures on **source of wealth and funds**, **enhanced ongoing monitoring**"],
          ["**Domestic**", "Reasonable measures to identify; the three enhanced measures only if **higher risk**"],
          ["**International organisation** (directors, deputy directors, board members)", "As for domestic PEPs"],
          ["**Family and close associates**", "Same treatment as the PEP"],
          ["**Former** PEPs", "FATF: by risk (lasting influence, links to the old role), **no fixed time limit**. UK MLRs and EU AMLR: at least **12 months**; in the UK, family and associates drop out once the PEP leaves office"]
        ]
      },
      tip: "Exam tip: PEP status alone is no reason to **refuse** a customer or **file an STR**. Riggs Bank (2004): PEP relationships need independent oversight, not just the relationship manager."
    },
    {
      h: "Correspondent banking: R.13, nesting and US sections 312 and 313",
      p: [
        "**R.13** (cross-border correspondent banking) adds to normal CDD: understand the respondent's business, **reputation** and **quality of supervision**; assess its **AML/CFT controls**; obtain **senior management approval**; clearly understand each side's **responsibilities**."
      ],
      list: [
        "**Payable-through account**: the respondent's **customers** transact directly; be satisfied the respondent did CDD on them and can provide it **on request**.",
        "**Nested** (downstream): other **banks** use the account through the respondent; red flags include flows with jurisdictions where it has no known business.",
        "**Shell banks** (no physical presence, unaffiliated with a supervised group) are banned, even indirectly through a respondent.",
        "No CDD is required on each of the respondent's customers (no 'KYCC'): monitor the respondent and send **RFIs**."
      ],
      table: {
        head: ["US rule", "Key requirement"],
        rows: [
          ["**s.312** due diligence (31 CFR 1010.610)", "Risk-based program for every foreign FI correspondent account, **affiliates included** (HSBC, 2012)"],
          ["**s.312** EDD", "**Offshore licence**, or licence from a country designated non-cooperative (e.g. by the FATF) or under **s.311**: AML program review, monitoring, **PTA** users, **nested banks**, owners of **10%+** of unlisted banks"],
          ["**s.313** (1010.630)", "No **shell bank** accounts; certification of owners and a US **agent for service of process** within **30 days**, renewed every **3 years**"],
          ["**Private banking** (1010.620)", "Minimum **$1,000,000**, non-US owner, assigned liaison: identify owners, **source of funds**, senior foreign political figures"]
        ]
      },
      tip: "Exam tip: the Wolfsberg **CBDDQ** (v1.4) is a starting point, not proof: test answers against activity (Danske Bank Estonia's assurances to a US correspondent proved false)."
    },
    {
      h: "Reliance, outsourcing and MSB customers",
      list: [
        "**R.17 reliance** on a regulated, supervised third party: obtain the CDD information (customer, beneficial owner, purpose) **immediately**, ensure copies come **without delay** on request, weigh country risk. **Ultimate responsibility** stays with the relying institution.",
        "R.17 does **not** cover **outsourcing or agency**, where a vendor applies your procedures under your control; you stay accountable.",
        "US CIP reliance: only on an FI **subject to an AML program rule and a federal functional regulator**, by contract with **annual certification**. An unregulated fintech partner does not qualify.",
        "**MSB** customers (2005 interagency guidance): apply **CIP**, confirm **FinCEN registration**, **state licensing** and **agent status**, and do a **basic risk assessment**; go further only if risk is higher. Banks are not its regulator, but should file a SAR if it operates unregistered.",
        "The MSB itself can be a SAR subject: Capital One (FinCEN, 2021) reported the check cashers' customers, not the check cashers."
      ],
      remember: "You can delegate the CDD work, never the responsibility."
    }
  ],
  cards: [
    { front: "What are the four CDD measures in FATF R.10?", back: "Identify and verify the customer; identify the beneficial owner (reasonable measures to verify); understand purpose and intended nature; conduct ongoing due diligence." },
    { front: "CDD cannot be completed. What does R.10 require?", back: "Do not open the account, start the relationship or perform the transaction (or terminate it), and consider filing an STR." },
    { front: "Minimum CIP information for an individual (31 CFR 1020.220)", back: "Name, date of birth, address (residential or business street address) and an ID number, such as a TIN for US persons, obtained before opening." },
    { front: "Does a scheduled periodic review require new beneficial ownership information (US)?", back: "No. Updates are triggered by risk-relevant information from normal monitoring, such as a possible ownership change, not by the review cycle." },
    { front: "Who are the beneficial owners under the US CDD Rule?", back: "Each individual owning 25% or more, directly or indirectly (up to four), plus one individual with significant control, such as the CEO." },
    { front: "A trust owns 40% of a US legal entity customer. Who is identified under the ownership prong?", back: "The trustee (at least one), even if the trustee is a company. The beneficiaries are not substituted." },
    { front: "What did FinCEN order FIN-2026-R001 (February 2026) change?", back: "Banks may identify beneficial owners at the customer's first account opening only, then again if information is questioned or risk-based CDD requires it." },
    { front: "Does FinCEN's August 2026 BOI rule end banks' beneficial ownership checks?", back: "No. It exempts US companies from CTA reporting to FinCEN; the CDD Rule duty to identify and verify beneficial owners remains." },
    { front: "FATF cascade for identifying the beneficial owner of a company", back: "1. Controlling ownership interest. 2. Control through other means. 3. Senior managing official, only if no one is found at steps 1 and 2." },
    { front: "Which parties to a trust must be identified (R.10 and R.25)?", back: "Settlor, trustee(s), protector (if any), beneficiaries or class of beneficiaries, and any other natural person with ultimate effective control." },
    { front: "R.12: foreign PEP vs domestic or international organisation PEP", back: "Foreign: enhanced measures always. Domestic and international organisation PEPs: reasonable measures to identify, enhanced measures only for higher-risk relationships." },
    { front: "Source of wealth vs source of funds", back: "Source of wealth: origin of the customer's entire body of wealth. Source of funds: origin of the specific funds used in the relationship." },
    { front: "How long does a former PEP remain a PEP?", back: "FATF: based on risk (continuing influence, links to the old role), not a fixed period. UK MLRs and EU AMLR: at least 12 months." },
    { front: "Nested account vs payable-through account", back: "Nested: other foreign banks use the correspondent account through the respondent. Payable-through: the respondent's own customers transact directly on it." },
    { front: "Which foreign banks trigger US section 312 enhanced due diligence?", back: "Banks with an offshore licence, or licensed by a country designated non-cooperative by an intergovernmental group such as the FATF, or under section 311." },
    { front: "What does US section 313 require?", back: "No correspondent accounts for foreign shell banks, and a certification of owners and a US agent for service of process, renewed every three years." },
    { front: "R.17: what must a relying institution do?", back: "Immediately obtain the CDD information, ensure copies are available without delay, check the third party is regulated. Ultimate responsibility stays with the relying institution." },
    { front: "Minimum due diligence on an MSB customer (US 2005 guidance)", back: "Apply CIP, confirm FinCEN registration, state licensing and agent status, and conduct a basic risk assessment to decide if more diligence is needed." }
  ],
  numbers: [
    { q: "US CDD Rule ownership prong threshold (31 CFR 1010.230)", a: "25% or more", wrong: ["10% or more", "20% or more", "50% or more"] },
    { q: "Individuals identified under the US control prong", a: "One", wrong: ["Two", "Three", "Four"] },
    { q: "Retention of CIP identifying information", a: "5 years after the account closes", wrong: ["5 years after account opening", "3 years after the account closes", "10 years after the account closes"] },
    { q: "Minimum aggregate deposits for a US private banking account (31 CFR 1010.605)", a: "$1,000,000", wrong: ["$250,000", "$500,000", "$5,000,000"] },
    { q: "Ownership that makes someone an 'owner' for s.312 EDD on an unlisted foreign bank", a: "10% or more", wrong: ["5% or more", "20% or more", "50% or more"] },
    { q: "Renewal of the s.313 foreign bank certification", a: "Every 3 years", wrong: ["Every year", "Every 2 years", "Every 5 years"] },
    { q: "Minimum period of PEP measures after a PEP leaves office (UK MLRs, EU AMLR)", a: "12 months", wrong: ["6 months", "18 months", "24 months"] },
    { q: "EU AMLR maximum interval between updates for higher-risk customers", a: "1 year", wrong: ["6 months", "2 years", "3 years"] },
    { q: "FATF Recommendation on beneficial ownership of trusts (legal arrangements)", a: "R.25", wrong: ["R.24", "R.12", "R.17"] },
    { q: "USA PATRIOT Act section banning correspondent accounts for foreign shell banks", a: "Section 313", wrong: ["Section 311", "Section 312", "Section 326"] }
  ],
  questionIds: [
    "D1-009", "D1-010", "D1-017", "D1-037",
    "D2-007", "D2-012", "D2-014", "D2-015", "D2-019", "D2-029",
    "D3-006", "D3-008", "D3-009", "D3-010", "D3-011", "D3-012", "D3-013", "D3-014", "D3-015", "D3-016",
    "D3-017", "D3-018", "D3-019", "D3-020", "D3-021", "D3-022", "D3-042", "D3-043",
    "D4-012", "D4-013",
    "KYC-001", "KYC-002", "KYC-003", "KYC-004", "KYC-005", "KYC-006", "KYC-007", "KYC-008", "KYC-009", "KYC-010",
    "KYC-011", "KYC-012", "KYC-013", "KYC-014", "KYC-015", "KYC-029", "KYC-030",
    "TRAP-016", "TRAP-021", "TRAP-022", "TRAP-025", "TRAP-026",
    "CASE-009", "CASE-011", "CASE-012", "CASE-016", "CASE-017", "CASE-029",
    "SECT-016", "GLOB-004", "EU-004", "EU-013"
  ],
  sources: [
    { label: "FATF Recommendations (updated June 2026): R.10, R.12, R.13, R.17, R.24, R.25, INR.10 and Glossary, official text hosted by the Eurasian Group (EAG)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
    { label: "eCFR 31 CFR 1020.220: Customer Identification Program requirements for banks (minimum data, verification, records, reliance)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-B/section-1020.220" },
    { label: "eCFR 31 CFR Part 1010: 1010.230 beneficial ownership; 1010.605 to 1010.630 correspondent and private banking due diligence (s.312) and shell banks (s.313)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010" },
    { label: "FinCEN Order FIN-2026-R001 (13 February 2026): exceptive relief from identifying beneficial owners at each account opening", url: "https://www.fincen.gov/system/files/2026-02/FinCEN-Order-CCDExceptiveRelief.pdf" },
    { label: "FinCEN CDD Rule FAQs, consolidated and updated 6 May 2026 (one to five beneficial owners, trustees, periodic reviews, risk profiles)", url: "https://www.fincen.gov/system/files/2026-05/CDD-Rule-Consolidated-FAQs.pdf" },
    { label: "FinCEN press release (11 August 2026): final rule removes BOI reporting for US companies", url: "https://www.fincen.gov/news/news-releases/fincen-permanently-ends-beneficial-ownership-reporting-requirements-millions" },
    { label: "FATF Guidance: Politically Exposed Persons (R.12 and R.22), June 2013, EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/FATF_Guidances/Guidance_PEP_Rec12_22.pdf" },
    { label: "Interagency Joint Statement on Bank Secrecy Act due diligence requirements for PEPs (August 2020)", url: "https://www.fincen.gov/system/files/shared/PEP%20Interagency%20Statement_FINAL%20508.pdf" },
    { label: "FATF Guidance on Correspondent Banking Services (October 2016): no KYCC requirement, nested relationships, de-risking, EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/FATF_Guidances/Guidance-Correspondent-Banking-Services.pdf" },
    { label: "Interagency Interpretive Guidance on Providing Banking Services to Money Services Businesses (April 2005)", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/interagency-interpretive-guidance-providing-banking" }
  ]
}]);
