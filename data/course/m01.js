window.CAMS_COURSE = (window.CAMS_COURSE || []).concat([{
  id: "m01",
  order: 1,
  domain: 1,
  title: "Money laundering: stages, methods and sectors",
  icon: "🌀",
  minutes: 14,
  summary: "Master the three stages of money laundering, the classic cash, trade and correspondent banking techniques, and the red flags the exam expects you to spot in each sector.",
  mostTested: [
    "Matching a scenario to placement, layering or integration (structuring and smurfing are techniques, not stages)",
    "Structuring is a crime even with legitimate funds; US CTR is for cash of more than $10,000 per business day",
    "TBML: over-invoicing moves value to the exporter, under-invoicing to the importer; phantom shipments, multiple invoicing and the BMPE",
    "Nested (downstream) accounts vs payable-through accounts, and the ban on correspondent accounts for shell banks (FATF R.13)",
    "Front vs shell companies, trusts and gatekeepers used to hide beneficial ownership",
    "Sector red flags: casino minimal gaming and chip walking, insurance early surrender with third-party refunds, pump-and-dump and mirror trading",
    "Funnel accounts and money mules (witting or unwitting) as layering channels"
  ],
  sections: [
    {
      h: "The offence and the three stages",
      p: [
        "FATF **Recommendation 3** requires countries to criminalise money laundering on the basis of the **Vienna Convention (1988)** and the **Palermo Convention (2000)**, covering the widest range of predicate offences.",
        "The Palermo definition covers the **conversion or transfer** of known proceeds of crime, the **concealment or disguise** of their nature, source, location, movement or ownership, and their **acquisition, possession or use**. Knowledge may be **inferred from objective factual circumstances**, and no conviction for the predicate offence is needed."
      ],
      table: {
        head: ["Stage", "Goal", "Typical examples"],
        rows: [
          ["**Placement**", "Move proceeds away from the crime and into the financial system", "Structured deposits, commingling in a cash business, buying chips or money orders"],
          ["**Layering**", "Hide the audit trail", "Wires via shell companies with false 'consulting fees', rapid cross-border transfers"],
          ["**Integration**", "Return funds as apparently legitimate wealth", "Loan-backs, property and luxury purchases"]
        ]
      },
      tip: "Exam tip: structuring, smurfing and commingling are techniques, not stages. UNODC notes that stages can be combined, repeated or skipped, so choose the stage the facts MOST directly show.",
      remember: "Placement = entry, layering = distance, integration = apparent legitimacy."
    },
    {
      h: "Cash techniques: structuring, smurfing, funnel accounts and fronts",
      p: [
        "US financial institutions file a CTR for cash of **more than $10,000** per business day, aggregating transactions by or for one person. **Structuring** is breaking up cash, in any amount, at one or more institutions, on one or more days, to evade that reporting. Under **31 U.S.C. 5324** it is a crime even if the money is **legitimate** (up to **5 years** in prison, 10 if aggravated)."
      ],
      list: [
        "**Smurfing**: teams of people (smurfs) structure deposits on behalf of someone else. **Cuckoo smurfing**: criminal funds pass through the accounts of innocent third parties expecting a genuine transfer.",
        "**Funnel account** (FinCEN FIN-2014-A005): an account in one area receives many cash deposits, often below the reporting threshold, and the funds are withdrawn in a **different geographic area** soon afterwards.",
        "**Front company**: a real, often **cash-intensive** business that mixes illicit cash with its takings; revenue beyond its capacity is the red flag. **Shell company**: no independent operations, significant assets or employees, and the most common vehicle for hiding beneficial ownership.",
        "**Pass-through**: funds leave in the same or nearly the same amounts as they arrived."
      ],
      tip: "Exam tip: activity near $10,000 alone does not require a SAR; one is required only if you suspect it is designed to evade reporting, per FinCEN's SAR FAQs (changed October 2025). A customer asking how to avoid the 'paperwork' is the classic red flag."
    },
    {
      h: "Trade-based money laundering (TBML) and the BMPE",
      p: [
        "FATF defines TBML as disguising proceeds of crime and moving value through **trade transactions** by misrepresenting the **price, quantity or quality** of imports or exports. Detection is hard because most world trade is on **open account** terms: unless it finances the deal, the bank sees only a clean payment, not the trade documents. Banks deal in documents, not goods, and cannot judge most unit prices, but a **manifestly unusual** price should prompt enquiries and escalation."
      ],
      table: {
        head: ["Technique", "What happens", "Effect"],
        rows: [
          ["**Over-invoicing**", "Price above fair market value", "Value moves from importer to **exporter**"],
          ["**Under-invoicing**", "Price below fair market value", "Value moves from exporter to **importer**"],
          ["Over/under-shipment", "Quantity misstated; in a **phantom shipment** no goods move at all", "Payment with little or no goods behind it"],
          ["**Multiple invoicing**", "The same shipment is invoiced or financed more than once, often at several banks", "Several payments for one shipment"],
          ["Falsely described goods", "Quality or type misrepresented", "Value hidden in the goods description"]
        ]
      },
      list: [
        "Red flags (FIN-2010-A001): **third-party payments** from parties unrelated to the trade; goods descriptions differing between the **bill of lading** and invoice; **amended letters of credit** without good reason; high-value goods routed through **free-trade zones**.",
        "**Black Market Peso Exchange (BMPE)**: a peso broker takes a cartel's US drug dollars and uses them to pay US exporters for goods bought by Colombian importers, who pay the broker in pesos. The cartel receives pesos in Colombia without moving cash across the border.",
        "**Chinese money laundering networks** (FIN-2025-A003, August 2025): they buy cartel dollars in the US, pay the cartel pesos via **mirror transactions**, and sell the dollars to Chinese nationals evading the roughly **$50,000** annual currency limit, often using **students** as mules."
      ],
      tip: "Exam tip: market-level prices but payment by unrelated third parties or cash instruments bought in several states points to the BMPE, not invoice fraud."
    },
    {
      h: "MSBs, hawala and informal value transfer systems",
      p: [
        "FATF **R.14** requires money or value transfer services (MVTS) to be **licensed or registered**, and providers to include their **agents** in their AML/CFT programmes and monitor them. In the US, check cashers and currency dealers are MSBs only above **$1,000** per person per day, but money transmission has **no dollar threshold**."
      ],
      list: [
        "US MSBs register with FinCEN within **180 days** of being established, renew every **two** calendar years, and re-register after a more than **10%** ownership transfer or a more than **50%** rise in agents. The principal keeps an agent list and monitors its agents.",
        "Key US numbers: funds transfer records at **$3,000** or more; MSB SAR threshold **$2,000**. MSB SARs also cover transactions designed to evade **any** BSA requirement, so structuring below $3,000 is reportable.",
        "**Hawala**: hawaladars move value through trust networks and **settle later** through trade, cash or long-term net settlement, with minimal records.",
        "Red flags: several senders sharing an address or phone paying one beneficiary; amounts just below recordkeeping levels."
      ],
      remember: "Money transmission has no dollar threshold: a $50 remittance app is an MSB."
    },
    {
      h: "Correspondent banking: nested accounts, PTAs and shell banks",
      p: [
        "Correspondent banking is one bank (the correspondent) serving another (the respondent), so the correspondent processes payments for customers it never sees. Beyond normal CDD, FATF **R.13** requires: information on the respondent's business, reputation and supervision; an assessment of its AML/CFT controls; **senior management approval**; and clearly understood responsibilities."
      ],
      table: {
        head: ["Structure", "Who uses the account", "Key control"],
        rows: [
          ["**Nested (downstream)**", "Other foreign banks, through the respondent", "Find out whether the respondent serves other foreign banks through the account and obtain information on them (31 CFR 1010.610)"],
          ["**Payable-through account**", "The respondent's own customers, directly", "Respondent must have done CDD on them and provide it on request (R.13)"],
          ["**Shell bank**", "A bank with no physical presence and no regulated group", "**Prohibited**: no correspondent account, and respondents must not serve shell banks (R.13; USA PATRIOT Act s.313)"]
        ]
      },
      tip: "Exam tip: a respondent refusing to name its downstream banks is not cured by a new questionnaire. Apply your procedures for when due diligence fails: refuse, suspend, close or file a SAR."
    },
    {
      h: "Hiding ownership: private banking, trusts and gatekeepers",
      p: [
        "Private banking combines wealthy clients, confidentiality and **private investment companies**. Under USA PATRIOT Act **s.312**, a private banking account requires at least **$1,000,000**, is for **non-US persons** and has a bank **liaison**. The bank must identify nominal and beneficial owners, check for **senior foreign political figures** and establish the **source of funds**."
      ],
      list: [
        "**Trusts**: the **trustee** holds legal title and beneficiaries hold the beneficial interest. Identify the settlor, trustee(s), protector, beneficiaries or class of beneficiaries, and anyone with ultimate effective control (INR.10).",
        "**Gatekeepers** (lawyers, notaries, accountants, trust and company service providers) fall under FATF **R.22 and R.23** for real estate, client money, company formation and similar work. A **client account** can lend legitimacy to funds with no real transaction behind them.",
        "Red flags: layered companies, nominees, an aborted deal with the refund requested to someone other than the **original sender**, back-to-back property sales at rising prices."
      ],
      remember: "Front company = real business with dirty cash; shell company = no real business; trust = legal and beneficial ownership split."
    },
    {
      h: "Real estate, casinos and insurance",
      list: [
        "**Real estate**: all-cash purchases through LLCs or trusts, lawyers' client accounts, loan-back mortgages, rapid resales (2024 NMLRA). FinCEN's Residential Real Estate Rule (non-financed transfers to entities and trusts) was **vacated** by a Texas federal court on **19 March 2026**; no reports are due while the order stands, and FinCEN has appealed (changed March 2026).",
        "**Casinos and card clubs**: covered by the BSA above **$1 million** gross annual gaming revenue. Cash is aggregated over **$10,000** per **gaming day** for the CTRC, and the casino is deemed to know what its player-rating records show. SAR threshold **$5,000**; FATF CDD threshold **USD/EUR 3,000**.",
        "Casino red flags: buying chips with cash, **minimal gaming**, then cashing out by casino check or wire; leaving with the chips (**chip walking**); paying markers with several instruments each under **$3,000**; junkets and transfers between a group's foreign and US properties.",
        "**Insurance**: US AML rules cover **permanent life** and **annuities** (not group contracts) and other **cash value or investment** products; term life and property and casualty are out. Insurers must integrate their **agents and brokers**.",
        "Insurance red flags: early surrender or **free-look** cancellation at a cost, refund to an **unrelated third party**, little interest in performance but keen interest in cancellation terms."
      ],
      tip: "Exam tip: casino aggregation runs per **gaming day**, not calendar day. Purchases on different gaming days never make one CTRC, but the pattern can still support a SAR."
    },
    {
      h: "Securities, money mules and high-value goods",
      list: [
        "**Pump-and-dump**: a new customer deposits a large block of thinly traded, low-priced shares, the price spikes, the shares are sold and the proceeds are wired out at once.",
        "**Mirror trading**: connected clients buy and sell the same securities in the same volume in two places to convert and move currency (Deutsche Bank: over **$6 billion** out of Russia, FCA 2017).",
        "**Conduit** accounts: excessive journals between unrelated accounts, little trading, wires abroad. Foreign financial institutions' omnibus accounts are **correspondent accounts** needing due diligence.",
        "**Money mules** receive and forward criminal funds, **wittingly or unwittingly**, and are often recruited through fake jobs or romance scams; students are targeted. Forwarding fraud proceeds is layering whatever the mule believes.",
        "**Precious metals and stones**: FATF CDD applies to cash transactions of **USD/EUR 15,000** or more. **Art**: advisers, shell companies and trusts let buyers stay anonymous."
      ],
      remember: "For any typology question, ask where the value goes and who really controls it."
    }
  ],
  cards: [
    { front: "The three stages of money laundering", back: "Placement (entry into the system), layering (hiding the trail), integration (return as apparently legitimate wealth)." },
    { front: "Loan-back scheme: which stage?", back: "Integration: the criminal's own illicit funds come back as an apparently legitimate loan." },
    { front: "Is structuring a crime if the cash is legitimate?", back: "Yes. Under 31 U.S.C. 5324 breaking up cash to evade CTR reporting is an offence whatever the source." },
    { front: "Smurfing vs cuckoo smurfing", back: "Smurfing: many people make small deposits for someone. Cuckoo smurfing: criminal funds pass through innocent third parties' accounts." },
    { front: "Funnel account", back: "Account receiving many cash deposits in one area, often below threshold, withdrawn quickly in a different area (FIN-2014-A005)." },
    { front: "Front company vs shell company", back: "Front: real, often cash-intensive business mixing in illicit cash. Shell: no real operations, assets or employees." },
    { front: "Over-invoicing moves value in which direction?", back: "From the importer to the exporter. Under-invoicing moves value from the exporter to the importer." },
    { front: "Phantom shipment vs multiple invoicing", back: "Phantom: no goods ship at all. Multiple invoicing: one real shipment invoiced or financed several times." },
    { front: "How does the Black Market Peso Exchange work?", back: "A broker uses cartel US dollars to pay US exporters for Colombian importers, who pay the broker in pesos; the cartel gets pesos." },
    { front: "Why is hawala hard to trace?", back: "Hawaladars settle later through trade, cash or net settlement, with minimal records and no direct funds transfer." },
    { front: "Nested account vs payable-through account", back: "Nested: other foreign banks use the respondent's account. PTA: the respondent's own customers use the account directly." },
    { front: "Can a bank keep a correspondent account for a shell bank?", back: "No. FATF R.13 and USA PATRIOT Act s.313 prohibit it, and respondents must not serve shell banks." },
    { front: "Who holds legal title in an express trust?", back: "The trustee. Beneficiaries hold the beneficial interest." },
    { front: "Casino red flag: chip walking", back: "Buying chips with cash, playing minimally and leaving with the chips unredeemed." },
    { front: "Classic insurance laundering red flag", back: "Early surrender or free-look cancellation at a cost, with the refund sent to an unrelated third party." },
    { front: "Mirror trading", back: "Connected clients buy and sell the same securities in two markets to convert and move currency, e.g. roubles to dollars." },
    { front: "Is an unwitting money mule still laundering funds?", back: "The account is still used to layer criminal proceeds; the bank must assess it (for example for a SAR) on that basis." },
    { front: "Activity near $10,000: is a SAR automatically required?", back: "No. Only if the institution suspects it is designed to evade reporting (FinCEN SAR FAQs, October 2025)." }
  ],
  numbers: [
    { q: "US CTR threshold (cash, per business day)", a: "More than $10,000", wrong: ["$5,000 or more", "$3,000 or more", "More than $15,000"] },
    { q: "US casino SAR threshold", a: "$5,000", wrong: ["$2,000", "$3,000", "$10,000"] },
    { q: "US MSB SAR threshold", a: "$2,000", wrong: ["$5,000", "$3,000", "$1,000"] },
    { q: "US funds transfer recordkeeping threshold", a: "$3,000 or more", wrong: ["$10,000 or more", "$1,000 or more", "$5,000 or more"] },
    { q: "Minimum aggregate deposit for a s.312 private banking account", a: "$1,000,000", wrong: ["$250,000", "$500,000", "$5,000,000"] },
    { q: "Gross annual gaming revenue that brings a US casino or card club under the BSA", a: "More than $1 million", wrong: ["More than $500,000", "More than $5 million", "More than $10 million"] },
    { q: "FATF CDD threshold for casino customers", a: "USD/EUR 3,000", wrong: ["USD/EUR 1,000", "USD/EUR 10,000", "USD/EUR 15,000"] },
    { q: "FATF CDD threshold for cash transactions with dealers in precious metals and stones", a: "USD/EUR 15,000", wrong: ["USD/EUR 3,000", "USD/EUR 10,000", "USD/EUR 50,000"] },
    { q: "FATF Recommendation on correspondent banking", a: "R.13", wrong: ["R.12", "R.14", "R.16"] },
    { q: "Deadline for a new US MSB to register with FinCEN", a: "Within 180 days of being established", wrong: ["Within 30 days of being established", "Within 90 days of being established", "Within 365 days of being established"] }
  ],
  questionIds: [
    "D1-001", "D1-002", "D1-003", "D1-004", "D1-005", "D1-006", "D1-007", "D1-008", "D1-009", "D1-010",
    "D1-011", "D1-012", "D1-013", "D1-014", "D1-015", "D1-016", "D1-017", "D1-018", "D1-036", "D1-042",
    "D2-012", "D2-014", "D2-015", "D3-015", "D3-021",
    "TRAP-001", "TRAP-002", "TRAP-003", "TRAP-005", "TRAP-008", "TRAP-010", "TRAP-018", "TRAP-020", "TRAP-022",
    "CASE-034", "INV-025",
    "SECT-001", "SECT-002", "SECT-003", "SECT-004", "SECT-005", "SECT-006", "SECT-007", "SECT-008",
    "SECT-010", "SECT-011", "SECT-013", "SECT-014", "SECT-015", "SECT-022", "SECT-025",
    "SECT-026", "SECT-027", "SECT-030"
  ],
  sources: [
    { label: "UNODC – Money-laundering overview: the three stages", url: "https://www.unodc.org/unodc/en/money-laundering/overview.html" },
    { label: "FATF Recommendations (2026) – R.3, R.13, R.14, R.22-23 and INR.10 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
    { label: "eCFR 31 CFR 1010.100 – definitions of structuring, casino, card club and MSB", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-A/section-1010.100" },
    { label: "eCFR 31 CFR 1010.610 – correspondent accounts: EDD, nesting and payable-through accounts", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-F/section-1010.610" },
    { label: "FinCEN Advisory FIN-2010-A001 – TBML and BMPE red flags", url: "https://www.fincen.gov/sites/default/files/advisory/fin-2010-a001.pdf" },
    { label: "FATF (2006) Trade Based Money Laundering – invoicing techniques and direction of value (EAG copy)", url: "https://eurasiangroup.org/files/FATF_docs/Trade_Based_Money_Laundering.pdf" },
    { label: "FATF–Egmont (2018) Concealment of Beneficial Ownership – shell, front companies and smurfing (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF-Egmont-Concealment-beneficial-ownership_eng.pdf" },
    { label: "FinCEN SAR FAQs (October 2025) – Question 1 on activity near the CTR threshold", url: "https://www.fincen.gov/system/files/2025-10/SAR-FAQs-October-2025.pdf" },
    { label: "FinCEN Residential Real Estate FAQs – March 2026 vacatur of the RRE Rule", url: "https://www.fincen.gov/rre-faqs" },
    { label: "FinCEN FIN-2008-G007 – Red flags for casinos and card clubs", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/recognizing-suspicious-activity-red-flags-casinos-and-card" }
  ]
}]);
