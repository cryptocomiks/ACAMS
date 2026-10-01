window.CAMS_COURSE = (window.CAMS_COURSE || []).concat([{
  id: "m12",
  order: 12,
  domain: 4,
  title: "Investigations, tools and technology",
  icon: "🔬",
  minutes: 14,
  summary: "Follow a case from alert to SAR decision and master the tools behind it: evidence, interviews and OSINT, link and blockchain analysis, monitoring tuning, SR 26-2 model risk and AI, screening and data quality, plus how to answer law enforcement and share information under 314(a), 314(b) and Egmont.",
  mostTested: [
    "SAR clock: **30 days** from the decision that activity is suspicious, not from the alert (**60** if no suspect); no BSA duty to document a no-SAR decision (changed October 2025)",
    "**Below-the-line** testing finds false negatives, **above-the-line** testing cuts false positives; tuning is documented and approved, never set by staffing levels",
    "**SR 26-2** (changed April 2026) replaced SR 11-7 and SR 21-8: deterministic rule-based scenarios are not models but still need testing; validation = **conceptual soundness, outcomes analysis, ongoing monitoring**",
    "AI/ML risks: **explainability**, **bias** in training data, **overfitting** and **drift**; vendor and ML models still need validation",
    "**314(a)**: search accounts (past **12 months**) and transactions (past **6 months**), report matches within **14 days**, keep it confidential, no action required",
    "**314(b)**: voluntary, annual notice to FinCEN, verify the counterparty, share the facts but **never a SAR**",
    "Grand jury subpoenas and NSLs: comply and **do not notify** the customer; SAR supporting documentation goes to law enforcement **without a subpoena**"
  ],
  sections: [
    {
      h: "The investigation lifecycle: from alert to decision",
      p: [
        "Alerts come from **transaction monitoring**, **screening**, **staff referrals**, **adverse media** and **law enforcement** requests. NYDFS **Part 504** requires written protocols for investigating alerts, deciding on filing and documenting both."
      ],
      table: {
        head: ["Stage", "What happens", "Key rule"],
        rows: [
          ["**Triage**", "Start promptly; clear false positives with a short rationale", "An alert is not 'initial detection'"],
          ["**Investigation**", "KYC file, transactions, counterparties, OSINT, customer questions", "Never reveal a SAR"],
          ["**Decision**", "BSA/AML officer or committee decides", "The SAR clock starts once activity is judged **suspicious**"],
          ["**Filing**", "SAR within **30 days** (**60** if no suspect); ongoing violations: also **phone law enforcement**", "Narrative: who, what, when, where, why, how; individual dates and amounts, no pasted tables"],
          ["**Documentation**", "Supporting documents identified and kept **5 years**", "No BSA duty to document a no-SAR decision (changed October 2025)"]
        ]
      },
      tip: "Exam tip: count the 30 days from the conclusion of a prompt, reasonable review, never from the alert date."
    },
    {
      h: "Evidence, interviews and open-source research",
      list: [
        "**Chain of custody**: log who handled each item, what they did and when; store it securely; analyse **hash-verified copies** and preserve originals.",
        "**Supporting documentation** is every record that helped the decision, even if the narrative does not name it. It goes to FinCEN or law enforcement on request, **without a subpoena**.",
        "**Interview order**: neutral third-party witnesses, then suspected accomplices from least to most culpable, and the **primary suspect last**.",
        "**OSINT**: research non-attributably, never use a false identity to reach closed content, corroborate, and record URL, date and hash. A **reverse image search** can expose GenAI ID photos.",
        "**Adverse media**: news agencies with editorial oversight outweigh anonymous blogs; treat state-controlled media with caution. Set the **risk stage** that alerts (allegation to conviction); screening is not zero-tolerance."
      ],
      tip: "Exam tip: asking about a transaction's purpose is due diligence; saying a SAR is or may be filed is tipping-off."
    },
    {
      h: "Entity resolution, link analysis and blockchain analytics",
      p: [
        "**Entity resolution** links records of the same real-world person, such as 'M. Kareemi' and 'Mohamed Karimi' with one date of birth, so their activity can be aggregated. **Link analysis** then maps connections between different entities through shared addresses, phones, **IP addresses**, **device IDs** and counterparties, exposing mule networks."
      ],
      list: [
        "Blockchains are public but **pseudonymous**. Analytics cluster addresses (**common-input-ownership** heuristic: inputs signed together share an owner) and score **direct** and **indirect exposure**; mixer or darknet exposure calls for EDD and a SAR decision.",
        "OFAC: block funds tied to **SDN-listed addresses** (report within **10 business days**; no return without OFAC authorization) and run a **historic look-back** after a new listing, including linked unlisted addresses.",
        "Cross-chain moves do not break the trail: after the **Bybit** hack (February 2025) the FBI asked exchanges and bridges to block funds derived from the addresses it listed."
      ],
      tip: "Exam tip: one person spread over three records is an entity resolution problem; many people sharing one device is a link analysis finding."
    },
    {
      h: "Tuning transaction monitoring and measuring effectiveness",
      p: [
        "**Behavioural** monitoring compares a customer with its own history and a **peer segment**, which fixed rules cannot. Map each assessed risk to a scenario (**coverage assessment**) and segment customers (e.g. **k-means** clustering) so thresholds fit each group."
      ],
      table: {
        head: ["Test", "Method", "Purpose"],
        rows: [
          ["**Above-the-line (ATL)**", "Raise the parameter; review alerts just above the threshold", "Cut **false positives** without losing productive alerts"],
          ["**Below-the-line (BTL)**", "Sample activity just below the threshold", "Find **false negatives** (missed suspicious activity)"]
        ]
      },
      list: [
        "Tune only on documented, approved analysis. FinCEN penalised **U.S. Bank** (2018) for capping alerts to fit **staffing** and halting BTL tests that showed missed SARs.",
        "**Alert-to-SAR conversion** measures quantity, not usefulness, and rises when thresholds go up; add **law enforcement feedback** and **false-negative** review (Wolfsberg).",
        "Retire scenarios only on documented analysis, and keep testing de-scoped routines.",
        "Escalate and resource a backlog; never close alerts unreviewed. **Coinbase** (NYDFS, 2023) had over **100,000** unreviewed alerts and filed SARs months late."
      ],
      tip: "Exam tip: BTL tests effectiveness (missed activity); ATL tests efficiency (noise)."
    },
    {
      h: "Model risk and AI: SR 26-2",
      p: [
        "**SR 26-2**, from the Federal Reserve, OCC and FDIC, replaced **SR 11-7** and **SR 21-8**, the 2021 BSA/AML model risk statement (changed April 2026). It is non-binding and aimed mainly at banks with over **$30 billion** in assets."
      ],
      list: [
        "A **model** applies statistical, economic or financial theory. **Deterministic rule-based processes** are not models, but a rules engine is still an AML control that needs testing.",
        "**Generative and agentic AI** are out of scope; other AI/ML models are in.",
        "Validation covers **conceptual soundness**, **outcomes analysis** and **ongoing monitoring**, with **effective challenge**; internal audit checks the framework instead of revalidating.",
        "An urgent need can justify use before validation, with limits and closer monitoring. **Vendor models** and their customisations are still validated.",
        "AI risks (2021 interagency RFI): weak **explainability** (use **post-hoc** methods), **biased or incomplete training data**, **overfitting**, **data poisoning** and **drift**.",
        "ML can **boost** rule alerts or be the **primary** detector; chasing 100% recall ('no SAR left behind') makes it ineffective."
      ],
      tip: "Exam tip: drift between validations (new product, falling SAR conversion) is addressed now, not at the next scheduled validation.",
      remember: "Validation = conceptual soundness + outcomes analysis + ongoing monitoring."
    },
    {
      h: "Screening technology, perpetual KYC and RegTech",
      list: [
        "**Fuzzy matching** catches spelling and transliteration variants; OFAC's search tool uses **edit distance**, **Jaro-Winkler** and **Soundex** (phonetic).",
        "A higher match threshold gives fewer alerts but more **false negatives**. OFAC sets no score; calibrate by risk and test.",
        "**Transliteration** gives a similar-sounding script; **transcription** follows a conversion system and yields variants (Piotr Czajkowski, Pyotr Tchaikovsky); **translation** renders meaning.",
        "Identifiers (date of birth, nationality) clear or confirm alerts and need not be screened, nor do **weak AKAs**; suppression rules need documented rationale.",
        "Names miss unlisted entities owned **50% or more** in aggregate by blocked persons (OFAC **50% rule**), so screening needs ownership data.",
        "Load designations at once and reconcile lists: **Starling** (FCA, 2024) had screened against only a fraction of the sanctions list since 2017.",
        "**Perpetual KYC** refreshes profiles on triggers (adverse media, ownership change, unusual activity); US rules require risk-based updating, not a fixed schedule.",
        "**RegTech**: you can outsource the task, never the accountability."
      ],
      tip: "Exam tip: a strong name match with a different date of birth and nationality is a false positive; document why."
    },
    {
      h: "Data quality, NYDFS Part 504 and look-backs",
      p: [
        "Monitoring is only as good as its data. Identify every **data source**, **reconcile** counts and values from source to system, document **data mapping and lineage**, and revalidate after system changes."
      ],
      table: {
        head: ["Part 504", "Requirement"],
        rows: [
          ["Scope", "NY-chartered banks, NY branches of foreign banks, licensed **check cashers** and **money transmitters**"],
          ["Monitoring", "Risk-based scenarios and thresholds; documented assumptions; **end-to-end pre- and post-implementation testing**; ongoing analysis"],
          ["Filtering", "Tested name-matching technology for **OFAC** interdiction"],
          ["Both", "Data integrity; controlled, audited changes; vendor selection; qualified staff"],
          ["Certification", "Board resolution or senior officer finding by **15 April**; records kept **5 years**"]
        ]
      },
      list: [
        "**TD Bank** (FinCEN, 2024) froze scenario changes for four years during a migration and left checks unmonitored; **NatWest** (FCA, 2021) monitored some cash deposits as cheques.",
        "**Look-backs** follow a data gap, missed typology or enforcement order. In TD Bank's 2024 OCC order, an independent consultant reviews unreported activity, weak no-file decisions and past SARs; the examiner sets the scope and gets the report directly."
      ],
      tip: "Exam tip: for a data feed gap, escalate, fix the mapping and look back; fixing it only going forward is wrong."
    },
    {
      h: "Responding to law enforcement",
      table: {
        head: ["Request", "Action", "Watch out"],
        rows: [
          ["**Grand jury subpoena**", "Produce records; review the customer; SAR only if suspicious on its own facts", "Do not notify the person named (**12 USC 3420(b)**)"],
          ["**National Security Letter**", "Comply on written FBI certification; no court order needed", "Tell only the staff needed and counsel"],
          ["**314(a) request**", "Search accounts (past **12 months**) and transactions (past **6 months**); report matches within **14 days**; no reply if no match", "Confidential; no closure or SAR required"],
          ["**SAR supporting documents**", "Provide **without a subpoena**", "Verify the requester first"],
          ["**Subpoena for a SAR**", "Decline to produce or confirm it", "Notify **FinCEN**"],
          ["**Keep-open request**", "Written, up to **6 months** (FinCEN 2007), kept **5 years** after expiry; the bank decides", "Safe harbor (31 USC 5333) needs FinCEN notice and a **termination date**; SAR duties continue"]
        ]
      },
      list: [
        "314(a) gives **lead information only**; documents need legal process. Scope questions on a foreign (EU) agency's request go to the U.S. attaché named.",
        "A 314(a) subject may be discussed under 314(b) without revealing the request. FinCEN recommends telling law enforcement before closing an account under investigation."
      ],
      tip: "Exam tip: never seek the customer's consent before producing records; that is tipping-off."
    },
    {
      h: "Information sharing: 314(b), cross-border and FIU channels",
      p: [
        "**314(b)** lets institutions with an AML program rule share information on suspected ML/TF under a **safe harbor**. Each files a **notice** with FinCEN (valid **one year**), verifies the counterparty's notice, uses information only for permitted purposes and keeps it secure."
      ],
      list: [
        "Fact sheet (changed June 2026): sharing may be **real time** and cover **fraud**, IP addresses, device IDs, alerts and non-customers.",
        "Passing it to a **foreign affiliate** is allowed for permitted purposes, normally outside the safe harbor. **Joint SARs** are allowed, but 314(b) never authorizes sharing a SAR or revealing one.",
        "FIN-2025-G001 (changed September 2025): cross-border sharing of **underlying facts, transactions and documents**, alerts and adverse media is not barred; a SAR, a 'no SAR' statement or analysis opining on suspicion is.",
        "**Egmont** (FIU to FIU): interim reply within **30 business days**; fiscal matters are no ground to refuse; onward use needs **prior authorization**.",
        "Also in the outline: **EU AMLR Art. 75** partnerships (from **10 July 2027**; supervisors notified first) and Singapore's **COSMIC** (since **April 2024**; six banks share on misuse of legal persons, trade finance misuse and proliferation financing)."
      ],
      tip: "Exam tip: 314(a) is government-to-bank and mandatory; 314(b) is bank-to-bank and voluntary.",
      remember: "Share the facts, never the SAR."
    }
  ],
  cards: [
    { front: "When does the 30-day SAR clock start?", back: "When a prompt review concludes that activity is suspicious, not when the alert fires. Up to 60 days if no suspect is identified." },
    { front: "Must a US bank document a decision not to file a SAR?", back: "No BSA requirement or expectation (SAR FAQs, October 2025). If its own policy requires it, a short statement usually suffices." },
    { front: "Usual order of interviews in an internal investigation?", back: "Neutral third-party witnesses, then suspected accomplices from least to most culpable, and the primary suspect last." },
    { front: "What does a chain of custody record?", back: "Who handled each item, what they did and when, plus secure storage; analysis runs on hash-verified copies while originals are preserved." },
    { front: "Entity resolution vs link analysis", back: "Entity resolution merges records of the same real-world person or company. Link analysis maps connections between different entities." },
    { front: "Above-the-line vs below-the-line testing", back: "ATL: test above the threshold to cut false positives. BTL: sample activity below it to find missed suspicious activity (false negatives)." },
    { front: "Why is the alert-to-SAR conversion rate a weak sole metric?", back: "It measures quantity, not usefulness, and rises when thresholds go up. Add law enforcement feedback and false-negative reviews." },
    { front: "What did SR 26-2 (April 2026) replace?", back: "SR 11-7, the 2011 model risk guidance, and SR 21-8, the 2021 interagency statement on BSA/AML model risk." },
    { front: "Is a fixed-threshold rules engine a model under SR 26-2?", back: "No: deterministic rule-based processes are excluded. It still needs testing as part of the AML program's internal controls." },
    { front: "Three components of model validation (SR 26-2)", back: "Conceptual soundness, outcomes analysis (e.g. back-testing) and ongoing monitoring." },
    { front: "Key AI/ML risks in AML detection", back: "Lack of explainability, biased or incomplete training data, overfitting, data poisoning and drift as behaviour or the model changes." },
    { front: "Effect of raising a fuzzy-match threshold", back: "Fewer alerts and false positives, but more false negatives (missed true matches). OFAC recommends no particular score." },
    { front: "Transliteration vs transcription (Wolfsberg)", back: "Transliteration: a similar-sounding script. Transcription: a conversion system that can give several spellings, e.g. Piotr Czajkowski or Pyotr Tchaikovsky." },
    { front: "What must a bank do with a 314(a) request?", back: "Search accounts (past 12 months) and transactions (past 6 months), report matches within 14 days, keep it confidential; no reply if no match." },
    { front: "Conditions for the 314(b) safe harbor", back: "Annual notice to FinCEN, verify the counterparty's notice, use the information only for permitted purposes and keep it secure. Never share a SAR." },
    { front: "Does a grand jury subpoena require a SAR?", back: "Not by itself. Review the customer and activity and file only if suspicious. Never tell the customer about the subpoena." },
    { front: "Law enforcement keep-open request: key points", back: "In writing with a termination date; the bank decides; SAR duties continue. The safe harbor covers only the request's period." },
    { front: "NYDFS Part 504 annual certification", back: "Board resolution or senior officer compliance finding filed by 15 April each year; supporting records kept for 5 years." }
  ],
  numbers: [
    { q: "314(a): deadline to report positive matches to FinCEN", a: "14 days", wrong: ["7 days", "30 days", "60 days"] },
    { q: "314(a): search period for accounts held by the named subject", a: "Preceding 12 months", wrong: ["Preceding 6 months", "Preceding 24 months", "Preceding 5 years"] },
    { q: "314(a): search period for transactions such as funds transfers", a: "Preceding 6 months", wrong: ["Preceding 30 days", "Preceding 12 months", "Preceding 5 years"] },
    { q: "Validity of a 314(b) notice filed with FinCEN", a: "1 year", wrong: ["6 months", "2 years", "5 years"] },
    { q: "US SAR deadline after initial detection (suspect identified)", a: "30 calendar days", wrong: ["15 calendar days", "45 calendar days", "90 calendar days"] },
    { q: "Latest SAR deadline when no suspect is identified", a: "60 calendar days", wrong: ["45 calendar days", "90 calendar days", "120 calendar days"] },
    { q: "Retention of a SAR and its supporting documentation", a: "5 years from filing", wrong: ["3 years from filing", "7 years from filing", "10 years from filing"] },
    { q: "Maximum duration of a keep-open request under FinCEN's 2007 guidance", a: "6 months", wrong: ["30 days", "90 days", "12 months"] },
    { q: "SR 26-2 is expected to be most relevant to banks with total assets over", a: "$30 billion", wrong: ["$10 billion", "$50 billion", "$100 billion"] },
    { q: "Annual deadline for the NYDFS Part 504 certification", a: "15 April", wrong: ["31 January", "31 March", "30 June"] }
  ],
  questionIds: [
    "D4-001", "D4-002", "D4-003", "D4-004", "D4-005", "D4-006", "D4-007", "D4-008", "D4-009", "D4-010",
    "D4-011", "D4-012", "D4-013", "D4-014", "D4-015", "D4-016", "D4-017", "D4-018", "D4-019", "D4-020",
    "D4-021", "D4-022", "D4-023", "D4-024", "D4-025", "D4-026", "D4-027", "D4-028", "D4-029", "D4-030",
    "INV-001", "INV-002", "INV-003", "INV-004", "INV-005", "INV-007", "INV-008", "INV-009", "INV-010", "INV-011",
    "INV-012", "INV-013", "INV-014", "INV-015", "INV-016", "INV-017", "INV-018", "INV-019", "INV-020", "INV-021",
    "INV-023", "INV-024", "INV-026", "INV-027", "INV-028", "INV-029", "INV-030", "INV-031", "INV-032", "INV-033",
    "INV-034", "INV-035",
    "D2-017", "D3-010", "D3-027", "D3-028", "D3-029", "D3-030", "D3-031", "D3-034", "D3-035", "D3-043",
    "TRAP-029", "TRAP-031", "TRAP-035",
    "CASE-002", "CASE-007", "CASE-031", "CASE-035",
    "KYC-013", "GLOB-019"
  ],
  sources: [
    { label: "Federal Reserve, OCC and FDIC: SR 26-2 Supervisory Guidance on Model Risk Management (April 2026), attachment", url: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf" },
    { label: "FinCEN, Federal Reserve, FDIC, NCUA and OCC: SAR FAQs (9 October 2025)", url: "https://www.fincen.gov/system/files/2025-10/SAR-FAQs-October-2025.pdf" },
    { label: "31 CFR 1010.520: 314(a) information requests (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-E/section-1010.520" },
    { label: "FinCEN Section 314(b) Fact Sheet (12 June 2026)", url: "https://www.fincen.gov/system/files/shared/314bfactsheet.pdf" },
    { label: "FinCEN FIN-2025-G001: Cross-Border Information Sharing and SAR Confidentiality (September 2025)", url: "https://www.fincen.gov/system/files/2025-09/Crossborderguidance-508C.pdf" },
    { label: "FinCEN SAR Activity Review, Issue 10 (May 2006): grand jury subpoenas and when the 30-day SAR clock starts", url: "https://www.fincen.gov/system/files/shared/sar_tti_10.pdf" },
    { label: "FinCEN FIN-2007-G002: Requests by law enforcement to maintain accounts", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/requests-law-enforcement-financial-institutions-maintain" },
    { label: "NYDFS: Transaction Monitoring Certification (3 NYCRR Part 504)", url: "https://www.dfs.ny.gov/industry_guidance/transaction_monitoring" },
    { label: "Wolfsberg Group: Statement on Effective Monitoring for Suspicious Activity, Part I (2024), incl. ATL/BTL and entity resolution", url: "https://db.wolfsberg-group.org/assets/e3d83d2f-fad9-46d2-b5a9-3cf4e932f53f/Wolfsberg%20Group%20MSA%20Statement%20Part%20I.pdf" },
    { label: "Interagency RFI on financial institutions' use of AI, 86 FR 16837 (March 2021): explainability, training data, overfitting, drift", url: "https://www.govinfo.gov/content/pkg/FR-2021-03-31/html/2021-06607.htm" }
  ]
}]);
