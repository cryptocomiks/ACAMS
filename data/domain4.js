window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "D4-001",
    domain: 4,
    topic: "Rules-based vs. behavioral monitoring",
    hy: false,
    q: "A retail bank's rules-based transaction monitoring system applies the same fixed dollar thresholds to all customers. Management wants to detect activity that departs from a customer's own historical pattern and from similar customers. Which approach BEST meets this objective?",
    options: [
      "Lowering every fixed threshold by 50% across all customer types",
      "Adding more static rules based on round-dollar amounts",
      "Behavioral profiling that compares activity to the customer's history and to a segmented peer group",
      "Replacing monitoring with manual review of the largest transactions each month"
    ],
    answer: [2],
    explanation: "Behavioral (profiling/anomaly) monitoring establishes a baseline for each customer and for a peer segment and flags deviations from it, which fixed rules cannot do. Lowering all thresholds across the board mainly increases false positives without making detection customer-specific. More static rules and manual review of large items still ignore individual and peer baselines.",
    source: [
      { label: "FinCEN CDD Rule FAQs (consolidated May 2026), F.2 – customer information is used to develop a baseline against which customer activity is assessed", url: "https://www.fincen.gov/system/files/2026-05/CDD-Rule-Consolidated-FAQs.pdf" },
      { label: "31 CFR 1020.320(a)(2)(iii) – activity \"not the sort in which the particular customer would normally be expected to engage\"", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.320" }
    ]
  },
  {
    id: "D4-002",
    domain: 4,
    topic: "Alert tuning: below-the-line testing",
    hy: false,
    q: "During a tuning exercise, a monitoring team takes a sample of transactions that fell just BELOW the current rule threshold, and therefore did not alert, and reviews them to see whether any would have warranted investigation. What is this technique called?",
    options: [
      "Above-the-line testing",
      "Below-the-line testing",
      "Back-testing of sanctions lists",
      "Parallel run of a replacement system"
    ],
    answer: [1],
    explanation: "Below-the-line testing reviews activity under the current threshold to check whether the threshold is set too high and productive (suspicious) activity is being missed, i.e., to detect false negatives. Above-the-line testing reviews alerts just above the threshold to see whether the threshold could be raised without losing productive alerts. A parallel run compares an old and new system and is not a threshold test.",
    source: [
      { label: "FinCEN Assessment No. 2018-01 (U.S. Bank), fn. 8 – below-threshold testing: sampling activity just below alert thresholds to see whether suspicious activity is being missed", url: "https://fincen.gov/sites/default/files/enforcement_action/2023-04-05/FinCEN_U.S_Bank_Assesment_FinCEN_review_2.14.18_Final.pdf" }
    ]
  },
  {
    id: "D4-003",
    domain: 4,
    topic: "Alert tuning governance",
    hy: false,
    q: "A BSA/AML officer is under pressure to cut a large alert backlog. An analyst proposes doubling the threshold on the cash-structuring scenario, which would remove 70% of its alerts. What should the officer do FIRST?",
    options: [
      "Require a documented, data-driven analysis (including below-the-line testing) and approval through the institution's change-management governance before any change",
      "Implement the change immediately and review its effect at the next annual audit",
      "Turn off the scenario temporarily until the backlog is cleared",
      "Implement the change only for low-risk customers without documentation"
    ],
    answer: [0],
    explanation: "Threshold changes should be justified by quantitative and qualitative analysis (e.g., above- and below-the-line testing and alert-to-SAR conversion rates), documented, and approved and controlled through governance. NYDFS Part 504, for example, requires documented thresholds, ongoing analysis of their relevance, and change procedures ensuring changes are \"defined, managed, controlled, reported, and audited\". Tuning driven by backlog or staffing creates monitoring gaps: FinCEN's 2018 penalty against U.S. Bank cited alert caps set by staffing levels and kept even after below-threshold testing showed missed suspicious activity. Switching a scenario off, or making undocumented changes even for low-risk segments, cannot be defended to auditors or regulators.",
    source: [
      { label: "3 NYCRR 504.3(a)(6), (a)(8), (c)(4) – documented thresholds, ongoing analysis, controlled and audited changes", url: "https://www.law.cornell.edu/regulations/new-york/3-NYCRR-504.3" },
      { label: "FinCEN Assessment No. 2018-01 (U.S. Bank) – alert caps based on staffing levels despite below-threshold testing", url: "https://fincen.gov/sites/default/files/enforcement_action/2023-04-05/FinCEN_U.S_Bank_Assesment_FinCEN_review_2.14.18_Final.pdf" }
    ]
  },
  {
    id: "D4-004",
    domain: 4,
    topic: "Model validation components",
    hy: false,
    q: "Under the interagency Revised Guidance on Model Risk Management issued in April 2026 (Federal Reserve SR 26-2 / OCC Bulletin 2026-13, which replaced SR 11-7 / OCC 2011-12), which of the following are components of validating a statistical or machine-learning transaction monitoring model? (Choose three.)",
    options: [
      "Evaluation of conceptual soundness",
      "Confirmation by the model developer that the model works as designed",
      "Ongoing monitoring",
      "Outcomes analysis",
      "Adopting a peer bank's published alert volumes as the model's performance target"
    ],
    answer: [0, 2, 3],
    explanation: "The 2026 guidance lists three components of model validation: conceptual soundness (assessing design, assumptions, data selection and developmental testing), outcomes analysis (comparing outputs with real-world outcomes, e.g., back-testing) and ongoing model monitoring (whether the model still performs as expected as products, clients and data change). These are the same three core elements SR 11-7 used. A developer's own testing is part of model development, while validation relies on effective challenge by objective experts with sufficient independence. Another bank's alert volumes say nothing about whether the model fits this institution's risk profile. Note that the 2026 definition of \"model\" excludes deterministic rule-based processes, so a purely rules-based scenario engine may fall outside it.",
    source: [
      { label: "SR 26-2 attachment (Apr. 17, 2026), Sec. V – Components of Model Validation: conceptual soundness, outcomes analysis, ongoing model monitoring", url: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf" },
      { label: "Federal Reserve SR 26-2 – supersedes SR 11-7 and SR 21-8", url: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm" }
    ]
  },
  {
    id: "D4-005",
    domain: 4,
    topic: "Vendor model validation",
    hy: false,
    q: "A large bank licenses a vendor's machine-learning transaction monitoring model, customizes its parameters, and relies solely on the vendor's generic validation report. The bank's internal audit function challenges this approach. Under the interagency model risk management guidance, what is the MOST likely concern?",
    options: [
      "Vendor models fall outside model risk management principles",
      "Only the vendor may validate its own proprietary model, so the bank has no role",
      "Validation is expected only for models the bank builds in-house",
      "The bank should understand and validate the vendor model as it uses it, including ongoing monitoring and outcomes analysis on its own data and evaluation of its customizations"
    ],
    answer: [3],
    explanation: "The April 2026 interagency guidance (SR 26-2 / OCC Bulletin 2026-13) states that model risk management principles remain applicable to vendor products even when code or data are proprietary. Sound practice is to validate vendor products (using internal or outside parties), understand the vendor model's conceptual soundness, design, development data and performance, conduct ongoing monitoring and outcomes analysis to confirm it remains fit for purpose, and document, justify and evaluate customizations as part of validation. A generic vendor report does not test the bank's own configuration and data, and outsourcing a tool does not transfer the bank's compliance responsibility. The 2026 guidance replaced SR 11-7 and the 2021 interagency statement on model risk management for BSA/AML systems.",
    source: [
      { label: "SR 26-2 attachment (Apr. 17, 2026), Sec. VII – Vendor and Other Third-Party Products", url: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf" },
      { label: "OCC Bulletin 2026-13 – revised model risk guidance; rescinds OCC 2011-12 and OCC 2021-19 (BSA/AML model risk statement)", url: "https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-13.html" }
    ]
  },
  {
    id: "D4-006",
    domain: 4,
    topic: "Screening: fuzzy matching",
    hy: true,
    q: "A payments firm's sanctions screening tool uses exact name matching only. A test reveals it failed to flag \"Mohamad Al Rahman\" when the list entry was \"Muhammad Al-Rahman\". What is the BEST remediation?",
    options: [
      "Screen only the customer's surname to widen coverage",
      "Implement fuzzy matching (e.g., phonetic and edit-distance algorithms) with a calibrated, tested match threshold",
      "Ask customers to spell their names exactly as they appear on sanctions lists",
      "Replace automated screening with manual review of high-value payments"
    ],
    answer: [1],
    explanation: "Fuzzy matching algorithms (e.g., phonetic methods like Soundex and edit-distance methods like Levenshtein) catch transliteration, spelling, spacing and punctuation variants that exact matching misses; the threshold must be calibrated and tested. Screening only surnames would generate unmanageable false positives while still missing variants. Relying on customer spelling or manual review of only high-value payments leaves obvious gaps.",
    source: [
      { label: "OFAC FAQ 249 – Sanctions List Search uses edit distance plus Jaro-Winkler and Soundex (phonetic) matching", url: "https://ofac.treasury.gov/faqs/249" },
      { label: "3 NYCRR 504.3(b) – filtering program based on name-matching technology with tested, analyzed threshold settings", url: "https://www.law.cornell.edu/regulations/new-york/3-NYCRR-504.3" }
    ]
  },
  {
    id: "D4-007",
    domain: 4,
    topic: "Screening: match threshold",
    hy: false,
    q: "A screening team raises its fuzzy match threshold from 80% to 95% similarity. Which outcome is MOST likely?",
    options: [
      "More alerts and more false positives",
      "No change in alert volume because the list is unchanged",
      "Fewer alerts, but a higher risk of false negatives (missed true matches)",
      "Elimination of both false positives and false negatives"
    ],
    answer: [2],
    explanation: "A higher similarity threshold requires names to be closer before an alert is generated, reducing false positives but increasing the risk that genuine name variants are missed (false negatives). A lower threshold has the opposite effect. No threshold eliminates both error types, so the setting must be justified by testing against the institution's risk appetite.",
    source: [
      { label: "OFAC FAQ 248 – a lower minimum name score returns a broader result set; 100 returns only exact matches", url: "https://ofac.treasury.gov/faqs/248" },
      { label: "OFAC FAQ 250 – users set their own match threshold based on internal risk assessment", url: "https://ofac.treasury.gov/faqs/250" }
    ]
  },
  {
    id: "D4-008",
    domain: 4,
    topic: "Screening alert disposition",
    hy: true,
    q: "A screening alert shows a customer's name is a strong match to a person on the OFAC SDN List. However, the customer's date of birth, nationality and place of birth all differ from the listed person's identifiers. What should the analyst do?",
    options: [
      "Compare the available identifiers, discount the alert as a false positive if they clearly differ, and document the rationale",
      "Block the account immediately because the name match is strong",
      "Report the alert to OFAC as a blocked property within 10 business days",
      "Contact the customer and explain that their name matches a sanctioned person"
    ],
    answer: [0],
    explanation: "Name similarity alone is not a true match; analysts compare secondary identifiers (DOB, nationality, address, ID numbers) and, when they clearly differ, close the alert as a false positive with documented reasoning. Blocking and reporting to OFAC are required only for a confirmed true match. Telling the customer about screening results is unnecessary and inappropriate.",
    source: [
      { label: "OFAC FAQ 5 – steps to verify or disqualify a potential match (compare DOB, nationality, ID numbers)", url: "https://ofac.treasury.gov/faqs/5" }
    ]
  },
  {
    id: "D4-009",
    domain: 4,
    topic: "Screening and ownership data (OFAC 50% rule)",
    hy: true,
    q: "A company that is not named on any sanctions list is owned 30% by one SDN and 25% by another SDN. The bank's name-screening tool produced no alert. How should the company be treated under OFAC rules?",
    options: [
      "It is not blocked because it does not appear on the SDN List",
      "It is blocked only if one SDN individually owns 50% or more",
      "It is blocked only once OFAC issues a separate designation of the company",
      "It is blocked because blocked persons own 50% or more in the aggregate"
    ],
    answer: [3],
    explanation: "Under OFAC's 50% rule, an entity owned 50% or more, directly or indirectly, individually or in the aggregate, by one or more blocked persons is itself blocked, even if not listed (here 30% + 25% = 55%). Ownership need not be held by a single SDN, and no separate designation is required. The case shows why name screening must be supplemented by beneficial ownership data.",
    source: [
      { label: "OFAC FAQ 399 – ownership stakes of blocked persons are aggregated under the 50 Percent Rule", url: "https://ofac.treasury.gov/faqs/399" }
    ]
  },
  {
    id: "D4-010",
    domain: 4,
    topic: "AI/ML explainability",
    hy: false,
    q: "A bank has deployed a machine-learning model to score transactions for suspicious activity. An examiner asks why a specific customer was flagged, and the investigator cannot explain it. What is the BEST way to address this issue?",
    options: [
      "Tell the examiner that ML models are proprietary and cannot be explained",
      "Retire the ML model and return to a purely manual review",
      "Accept the score as sufficient justification for filing a SAR",
      "Apply explainability techniques (e.g., feature-importance or reason codes) and document the drivers of each alert"
    ],
    answer: [3],
    explanation: "The banking agencies have identified lack of explainability as a key AI risk because it hinders understanding of a model's conceptual soundness, independent review and compliance, and the 2026 interagency model risk guidance, which covers non-generative AI models, points to interpretability measures as one way to assess conceptual soundness. Explainability tools (such as SHAP-style feature importance or reason codes) show which factors drove an alert so investigators can assess and document it. A model score alone is not a basis for a SAR, which requires the institution's own judgment and a narrative. Abandoning the model or claiming it is unexplainable does not address the governance issue.",
    source: [
      { label: "Interagency RFI on financial institutions' use of AI, 86 FR 16837 (Mar. 31, 2021) – explainability risks", url: "https://www.govinfo.gov/content/pkg/FR-2021-03-31/html/2021-06607.htm" },
      { label: "SR 26-2 attachment (2026) – scope covers non-generative AI models; interpretability measures in conceptual soundness", url: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf" }
    ]
  },
  {
    id: "D4-011",
    domain: 4,
    topic: "AI/ML risks",
    hy: false,
    q: "Which of the following are key risks an institution must manage when using machine learning for AML detection? (Choose two.)",
    options: [
      "Bias or gaps inherited from historical training data",
      "ML eliminates the need for human review of alerts",
      "Model drift as customer behavior and typologies change",
      "ML models do not need validation because they retrain automatically",
      "ML cannot process structured transaction data"
    ],
    answer: [0, 2],
    explanation: "ML models learn from historical data, so gaps or bias in past alert and SAR decisions can be reproduced, and models that learn or are retrained over time can drift as behavior and typologies change; the banking agencies' 2021 AI request for information highlights biased or incomplete training data and drift from dynamic updating. ML does not remove the need for human investigation, and the 2026 interagency model risk guidance applies to non-generative AI models, including validation and ongoing monitoring. Structured transaction data is in fact the primary input for most AML ML models.",
    source: [
      { label: "Interagency RFI on financial institutions' use of AI, 86 FR 16837 (Mar. 31, 2021) – biased training data, dynamic updating and drift", url: "https://www.govinfo.gov/content/pkg/FR-2021-03-31/html/2021-06607.htm" },
      { label: "SR 26-2 attachment (2026) – principles apply to non-generative AI models; ongoing model monitoring", url: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf" }
    ]
  },
  {
    id: "D4-012",
    domain: 4,
    topic: "Perpetual KYC (pKYC)",
    hy: false,
    q: "A bank is moving from fixed-cycle KYC refreshes (e.g., every 1, 3 or 5 years by risk rating) to perpetual KYC. Which statement BEST describes this change?",
    options: [
      "Customer profiles and risk ratings are updated continuously when trigger events occur, such as adverse media, ownership changes or unusual activity",
      "Customers are reviewed only once, at onboarding, and never again",
      "All customers are reviewed daily in full regardless of risk",
      "Customer due diligence is outsourced entirely to a data vendor"
    ],
    answer: [0],
    explanation: "Perpetual KYC uses automated data feeds and trigger events (e.g., registry changes, adverse media, sanctions/PEP status changes, unusual transactions) to update customer risk continuously rather than waiting for a scheduled review. This fits the US CDD rule, under which updating customer information is risk-based and happens as a result of normal monitoring rather than on a mandatory fixed schedule. It does not remove reviews or require full daily reviews of every customer. Using external data sources does not transfer the institution's CDD responsibility.",
    source: [
      { label: "FinCEN CDD Rule FAQs (consolidated May 2026), F.6 – updating is risk-based and event-driven, no categorical periodic schedule", url: "https://www.fincen.gov/system/files/2026-05/CDD-Rule-Consolidated-FAQs.pdf" },
      { label: "31 CFR 1020.210(a)(2)(v)(B) – ongoing monitoring to maintain and update customer information on a risk basis", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-B/section-1020.210" }
    ]
  },
  {
    id: "D4-013",
    domain: 4,
    topic: "RegTech and outsourcing",
    hy: false,
    q: "A fintech bank adopts a RegTech vendor's automated identity verification and KYC platform. If the platform fails to verify customers properly, who bears regulatory responsibility?",
    options: [
      "The RegTech vendor, because it performs the verification",
      "The regulator that approved the vendor's technology",
      "The bank, which remains accountable for its compliance obligations",
      "Responsibility is shared equally by contract, so neither party is fully liable"
    ],
    answer: [2],
    explanation: "An institution can outsource tasks but not accountability. Under the interagency third-party risk management guidance, a bank's use of a third party does not diminish its responsibility to operate safely and comply with applicable laws to the same extent as if the activity were performed in-house, so it must perform due diligence on the vendor, oversee performance and test the controls. Neither a regulator nor a contractual allocation of liability between the bank and the vendor shifts the bank's regulatory obligations.",
    source: [
      { label: "Interagency Guidance on Third-Party Relationships: Risk Management, 88 FR 37920 (June 9, 2023) – use of third parties does not diminish the bank's responsibility", url: "https://www.govinfo.gov/content/pkg/FR-2023-06-09/html/2023-12340.htm" }
    ]
  },
  {
    id: "D4-014",
    domain: 4,
    topic: "Blockchain analytics: clustering",
    hy: false,
    q: "Blockchain analytics providers group Bitcoin addresses into clusters believed to be controlled by a single entity. Which heuristic assumes that all addresses used as inputs to the same transaction are controlled by the same entity?",
    options: [
      "Travel Rule heuristic",
      "Round-amount heuristic",
      "Peel chain heuristic",
      "Common-input-ownership (co-spend) heuristic"
    ],
    answer: [3],
    explanation: "The common-input-ownership (co-spend) heuristic assumes that inputs signed together in one transaction belong to the same wallet owner, allowing addresses to be clustered and attributed (e.g., to an exchange or darknet market). A peel chain is a laundering pattern in which small amounts are peeled off a large balance through successive transactions. The Travel Rule (FATF R.16) is an information-sharing requirement, not an analytics heuristic.",
    source: [
      { label: "Bitcoin white paper, Sec. 10 – multi-input transactions reveal that their inputs were owned by the same owner", url: "https://bitcoin.org/bitcoin.pdf" },
      { label: "US DOJ, Bitfinex hack laundering statement of facts (2022), fn. 16 – peel chain defined", url: "https://www.justice.gov/opa/press-release/file/1470186/download" }
    ]
  },
  {
    id: "D4-015",
    domain: 4,
    topic: "Blockchain analytics: exposure",
    hy: false,
    q: "A virtual asset service provider's blockchain analytics tool shows that a customer's recent deposits came directly from a known mixing service and indirectly from a darknet marketplace. What should the VASP do NEXT?",
    options: [
      "Ignore the result because blockchain transactions are anonymous and cannot be attributed",
      "Investigate the customer's activity and source of funds, apply enhanced due diligence and consider filing a suspicious activity report",
      "Publicly post the wallet addresses to warn other exchanges",
      "Refund the deposits to the originating addresses without further review"
    ],
    answer: [1],
    explanation: "Direct exposure to a mixer and indirect exposure to a darknet marketplace are recognized red flags (FinCEN's virtual currency advisories FIN-2019-A003 and FIN-2021-A004, and FATF's 2020 virtual asset red flag indicators); they call for investigation, EDD and a SAR/STR decision. Public blockchains are pseudonymous, not anonymous, which is why analytics tools can trace flows. Publicizing addresses risks tipping off, and returning funds without review may help move illicit proceeds.",
    source: [
      { label: "FinCEN Advisory FIN-2019-A003 – darknet marketplace linkages and mixing as indicators of illicit CVC activity; SAR reminders", url: "https://www.fincen.gov/system/files/advisory/2019-05-10/FinCEN%20Advisory%20CVC%20FINAL%20508.pdf" },
      { label: "FinCEN Advisory FIN-2021-A004 – red flag: customer initiates a transfer of funds involving a mixing service", url: "https://www.fincen.gov/system/files/2021-11/FinCEN%20Ransomware%20Advisory_FINAL_508_.pdf" }
    ]
  },
  {
    id: "D4-016",
    domain: 4,
    topic: "Link / network analysis",
    hy: true,
    q: "An investigator suspects a funnel-account scheme in which many seemingly unrelated accounts in different states receive cash deposits that are quickly wired to the same few beneficiaries. Which tool would BEST reveal the hidden connections among these accounts?",
    options: [
      "A currency transaction report aggregation query",
      "A customer risk-rating questionnaire",
      "Link (network) analysis of shared attributes such as addresses, phone numbers, IP addresses, devices and counterparties",
      "A sanctions list screening run"
    ],
    answer: [2],
    explanation: "Link or network analysis visualizes relationships between entities (shared identifiers, devices and counterparties) and is well suited to exposing funnel accounts, mule networks and nested structures. CTR aggregation only identifies large cash totals by person or business day. Risk questionnaires and sanctions screening do not map the relationships among accounts.",
    source: [
      { label: "FinCEN Advisory FIN-2014-A005 – funnel accounts: out-of-state cash deposits, rapid withdrawals, multiple funnel accounts feeding consolidated accounts", url: "https://www.fincen.gov/resources/advisories/fincen-advisory-fin-2014-a005" },
      { label: "FinCEN Section 314(b) Fact Sheet (June 2026) – IP addresses, device IDs and multiple accounts with similar identifying information as shareable indicators", url: "https://www.fincen.gov/system/files/shared/314bfactsheet.pdf" }
    ]
  },
  {
    id: "D4-017",
    domain: 4,
    topic: "OSINT best practices",
    hy: false,
    q: "An AML investigator is using open-source intelligence to research the subject of an ongoing investigation. Which practice is MOST appropriate?",
    options: [
      "Using non-attributable research methods, corroborating findings with multiple reliable sources, and recording the source and date of each item",
      "Sending a friend request to the subject's social media account to see private posts",
      "Relying on a single blog post as proof of criminal conduct",
      "Emailing the subject's business partners to ask whether the subject is involved in crime"
    ],
    answer: [0],
    explanation: "Good OSINT practice includes protecting the investigation (non-attributable browsing), assessing source reliability, corroborating information and documenting sources with dates, since web content can change or disappear. Using a friend request or false identity to reach restricted content takes the work outside open-source research and can breach ethics and law. Contacting the subject or associates risks tipping off and may breach policy and privacy rules. A single unverified source is not a reliable basis for conclusions.",
    source: [
      { label: "Berkeley Protocol on Digital Open Source Investigations (OHCHR/UC Berkeley) – non-attribution, no virtual identities to access restricted content, verification, dated capture", url: "https://www.ohchr.org/sites/default/files/2024-01/OHCHR_BerkeleyProtocol.pdf" }
    ]
  },
  {
    id: "D4-018",
    domain: 4,
    topic: "Data quality: monitoring gaps",
    hy: false,
    q: "Following a core banking migration, a bank discovers that a new wire transaction code was never mapped to its transaction monitoring system, so those wires were not monitored for eight months. What is the BEST course of action?",
    options: [
      "Fix the mapping going forward and take no further action because past wires cannot be reviewed",
      "Wait for the next independent audit to confirm the finding before acting",
      "Keep the gap confidential from senior management to avoid regulatory scrutiny",
      "Escalate to management, correct the mapping, and perform a lookback review of the unmonitored transactions"
    ],
    answer: [3],
    explanation: "A data feed gap is a significant control failure: it should be escalated through governance, remediated, and followed by a lookback so that suspicious activity in the unmonitored period can be identified and reported. Fixing the mapping only going forward leaves potentially reportable activity unreviewed. Delaying action or concealing the issue from management conflicts with the program's governance and oversight responsibilities.",
    source: [
      { label: "FinCEN Assessment No. 2018-01 (U.S. Bank) – transfers left out of monitoring; look-back analyses led to late-filed SARs", url: "https://fincen.gov/sites/default/files/enforcement_action/2023-04-05/FinCEN_U.S_Bank_Assesment_FinCEN_review_2.14.18_Final.pdf" },
      { label: "3 NYCRR 504.3(c)(3), (d) – complete data transfer to monitoring systems; documented remediation of identified gaps", url: "https://www.law.cornell.edu/regulations/new-york/3-NYCRR-504.3" }
    ]
  },
  {
    id: "D4-019",
    domain: 4,
    topic: "Data quality controls",
    hy: false,
    q: "Which controls BEST help ensure the completeness and integrity of the data feeding a transaction monitoring system? (Choose two.)",
    options: [
      "Suppressing alerts for transactions with missing fields",
      "Regular reconciliation of record counts and values between source systems and the monitoring system",
      "Relying on the vendor to confirm that all data is received",
      "Documented data lineage and mapping from source systems to monitoring fields",
      "Reducing the number of active scenarios"
    ],
    answer: [1, 3],
    explanation: "Reconciliations confirm that all transactions from source systems actually arrive in the monitoring system, and documented data lineage/mapping shows how each source field feeds each scenario, which validators and examiners review. Suppressing alerts with missing data hides the problem instead of fixing it. Vendor assurance and fewer scenarios do not verify the institution's own data flows.",
    source: [
      { label: "3 NYCRR 504.3(a)(5), (c)(1)-(3) – data mapping testing, identification of data sources, data integrity validation, complete data transfer", url: "https://www.law.cornell.edu/regulations/new-york/3-NYCRR-504.3" }
    ]
  },
  {
    id: "D4-020",
    domain: 4,
    topic: "Investigation workflow",
    hy: true,
    q: "Which sequence BEST reflects a typical suspicious activity investigation workflow at a financial institution?",
    options: [
      "SAR filing, alert generation, case investigation, escalation",
      "Alert generation and triage, case investigation, escalation for decision, SAR filing (or a decision not to file)",
      "Case investigation, alert generation, SAR filing, escalation",
      "Escalation, alert generation, SAR filing, case investigation"
    ],
    answer: [1],
    explanation: "Monitoring or referrals generate alerts that are triaged; alerts that cannot be cleared become cases that are investigated; cases are escalated to a decision-maker (often the BSA/AML officer or a committee) who decides whether to file a SAR. The other sequences place filing before the analysis that supports it. Rules such as NYDFS Part 504 require written protocols for how alerts are investigated, who decides on filing and how the process is documented. The October 2025 FinCEN/agency SAR FAQs confirm there is no BSA requirement to document a decision not to file, although institutions may do so under their own procedures.",
    source: [
      { label: "3 NYCRR 504.3(a)(7) – protocols for alert investigation, filing decisions and documentation", url: "https://www.law.cornell.edu/regulations/new-york/3-NYCRR-504.3" },
      { label: "FinCEN/agencies SAR FAQs (Oct. 9, 2025), Q4 – no requirement to document a no-SAR decision", url: "https://www.fincen.gov/system/files/2025-10/SAR-FAQs-October-2025.pdf" }
    ]
  },
  {
    id: "D4-021",
    domain: 4,
    topic: "SAR timing from investigation",
    hy: true,
    q: "A monitoring alert on a known customer was generated on 5 January. After a prompt review, the investigator concluded on 10 February that the activity was suspicious. Under US rules, by when must the bank file the SAR?",
    options: [
      "Within 30 calendar days after 10 February, the date of initial detection of facts constituting a basis for filing",
      "Within 30 calendar days after 5 January, the date the alert was generated",
      "Within 60 calendar days after 5 January, because an investigation was needed",
      "Within 14 days after 10 February"
    ],
    answer: [0],
    explanation: "Under 31 CFR 1020.320(b)(3), a SAR is due no later than 30 calendar days after initial detection of facts that may constitute a basis for filing. FinCEN guidance explains that initial detection is not the moment an alert is generated: the clock starts when the institution, after a review that is begun promptly and completed within a reasonable time, determines that the activity is suspicious. The extra 30 days (60 in total) apply only when no suspect has been identified, which is not the case here. The 14-day period relates to 314(a) responses, not SARs.",
    source: [
      { label: "31 CFR 1020.320(b)(3) – SAR due 30 calendar days after initial detection (up to 60 if no suspect identified)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.320" },
      { label: "FinCEN SAR Activity Review, Issue 10 (May 2006), pp. 44-46 – \"initial detection\" is not the moment a transaction is flagged for review", url: "https://www.fincen.gov/system/files/shared/sar_tti_10.pdf" }
    ]
  },
  {
    id: "D4-022",
    domain: 4,
    topic: "Case documentation: no-file decisions",
    hy: true,
    q: "After investigating an alert, a US bank's BSA/AML officer concludes that the activity has a reasonable explanation and decides not to file a SAR. According to the SAR FAQs issued in October 2025 by FinCEN with the federal banking agencies, which statement about documenting this decision is correct?",
    options: [
      "The BSA regulations require a detailed written memorandum for every no-file decision, retained for five years",
      "The bank must notify FinCEN of the no-file decision within 30 calendar days",
      "There is no BSA requirement or expectation to document it; if the bank's own procedures call for documentation, a short, concise statement will usually suffice, with more detail for complex cases",
      "The bank should file a SAR anyway, because a no-file decision cannot otherwise be defended"
    ],
    answer: [2],
    explanation: "In Question 4 of the FAQs issued on 9 October 2025 by FinCEN jointly with the Federal Reserve, FDIC, NCUA and OCC, the agencies state that there is no requirement or expectation under the BSA or its regulations to document a decision not to file a SAR; FinCEN had previously encouraged, but not required, such documentation. If an institution chooses to document the decision under its risk-based policies, a short, concise statement will likely suffice in most cases, with more documentation for complex investigations. There is no notification to FinCEN of no-file decisions, and filing a SAR without a basis for suspicion is not what the rules require.",
    source: [
      { label: "FinCEN/Federal Reserve/FDIC/NCUA/OCC SAR FAQs (Oct. 9, 2025), Question 4 – No SAR documentation", url: "https://www.fincen.gov/system/files/2025-10/SAR-FAQs-October-2025.pdf" }
    ]
  },
  {
    id: "D4-023",
    domain: 4,
    topic: "Interviewing: sequence of interviews",
    hy: false,
    q: "An institution is investigating suspected embezzlement by an employee. In what order should interviews GENERALLY be conducted?",
    options: [
      "The suspect first, to obtain an early confession",
      "All witnesses and the suspect together in one meeting",
      "Only the suspect, since other witnesses may be biased",
      "Neutral third-party witnesses first, then parties suspected of complicity (least to most culpable), and the primary suspect last"
    ],
    answer: [3],
    explanation: "Standard fraud-examination practice is to start at the periphery and move toward those most involved: neutral third-party witnesses first, then parties suspected of complicity from least to most culpable, with the primary suspect interviewed last, once facts have been gathered and verified. Interviewing the suspect first can alert them and allow evidence tampering. Group interviews and suspect-only interviews undermine the independence and completeness of the evidence.",
    source: [
      { label: "ACFE Fraud Examiners Manual (2022), 3.106-3.107 – usual order of interviews (professional body, not a regulator)", url: "https://www.acfe.com/-/media/images/acfe/products/publication/fraud-examiners-manual/2022_fem_sample_chapter.ashx" }
    ]
  },
  {
    id: "D4-024",
    domain: 4,
    topic: "Interviewing and tipping-off",
    hy: true,
    q: "A relationship manager is asked to speak with a customer about a series of unusual international wires while the compliance team decides whether to file a SAR. What guidance should compliance give?",
    options: [
      "Tell the customer that a SAR will be filed unless documents are provided",
      "Ask open-ended questions about the purpose and source of funds, but do not disclose that a SAR is being considered or filed",
      "Avoid any contact with the customer because all questions constitute tipping-off",
      "Inform the customer that law enforcement has been notified so they will cooperate"
    ],
    answer: [1],
    explanation: "Institutions may request information from customers about unusual transactions as part of due diligence, using neutral, open-ended questions, but must not disclose that a SAR has been or may be filed (31 USC 5318(g)(2); FATF R.21 on tipping-off). Warning the customer about a SAR or law enforcement involvement is prohibited disclosure. Asking legitimate questions about a transaction is not in itself tipping-off.",
    source: [
      { label: "31 USC 5318(g)(2)(A)(i) – may not notify any person involved that the transaction has been reported", url: "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title31-section5318&num=0&edition=prelim" },
      { label: "FATF Recommendation 21(b) – prohibition on tipping-off that an STR is being filed", url: "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html" }
    ]
  },
  {
    id: "D4-025",
    domain: 4,
    topic: "Evidence handling",
    hy: false,
    q: "An investigator collects documents and electronic records that may later be used in legal proceedings. Which practices BEST preserve the integrity of this evidence? (Choose two.)",
    options: [
      "Maintaining a chain-of-custody record showing who handled each item, when and why",
      "Annotating the original documents with the investigator's conclusions",
      "Preserving originals and working from verified copies (e.g., forensic images with hash values for electronic data)",
      "Storing evidence in a shared folder accessible to all staff",
      "Summarizing evidence and disposing of the originals to save space"
    ],
    answer: [0, 2],
    explanation: "A chain of custody demonstrates that evidence has not been altered or tampered with, and preserving originals while using verified copies (such as hashed forensic images) protects authenticity. Writing on originals alters the evidence, and wide access undermines both custody and confidentiality. Disposing of originals may make the evidence inadmissible and can breach record-retention requirements.",
    source: [
      { label: "NIST SP 800-86, Secs. 3.1.2, 4.2.2 and 4.5 – chain of custody log, secure storage, examine copies not originals, message-digest (hash) verification", url: "https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-86.pdf" },
      { label: "31 CFR 1020.320(d) – retain original or business record equivalent of SAR supporting documentation for five years", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.320" }
    ]
  },
  {
    id: "D4-026",
    domain: 4,
    topic: "Subpoenas and law enforcement inquiries",
    hy: false,
    q: "A bank receives a grand jury subpoena requesting records for a long-standing business customer. What is the MOST appropriate response?",
    options: [
      "Close the customer's accounts immediately and notify the customer of the reason",
      "File a SAR automatically because a subpoena was received",
      "Produce the requested records as legally required, avoid notifying the customer, and review the relationship to determine whether a SAR or other risk action is warranted",
      "Ignore the subpoena unless it is accompanied by a court judgment"
    ],
    answer: [2],
    explanation: "A subpoena must be answered in accordance with law, and for a grand jury subpoena connected with an investigation of specified crimes (such as crimes against a financial institution, money laundering or BSA offenses), 12 USC 3420(b) prohibits notifying any person named in it. FinCEN guidance states that receipt of a grand jury subpoena does not by itself require a SAR, but should prompt a risk assessment of the customer and a review of account activity. Notifying the customer could obstruct the investigation and constitute prohibited disclosure.",
    source: [
      { label: "FinCEN SAR Activity Review, Issue 10 (May 2006), pp. 42-44 – Grand Jury Subpoenas and Suspicious Activity Reporting", url: "https://www.fincen.gov/system/files/shared/sar_tti_10.pdf" },
      { label: "12 USC 3420(b) – no notification of persons named in certain grand jury subpoenas", url: "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title12-section3420&num=0&edition=prelim" }
    ]
  },
  {
    id: "D4-027",
    domain: 4,
    topic: "SAR supporting documentation requests",
    hy: true,
    q: "An FBI agent contacts a bank and asks for the supporting documentation for a SAR the bank filed last year. Under US regulations, how should the bank respond?",
    options: [
      "Provide the supporting documentation after verifying the requester's identity, without requiring a subpoena",
      "Refuse unless the agent produces a grand jury subpoena",
      "Provide the documentation only with the customer's written consent",
      "Refuse because SAR supporting documentation is destroyed after one year"
    ],
    answer: [0],
    explanation: "Under 31 CFR 1020.320(d), supporting documentation is deemed filed with the SAR and must be made available upon request to FinCEN, appropriate law enforcement and supervisory agencies without a subpoena; banks should verify the requester's identity and authority. Seeking customer consent would amount to tipping-off. SARs and supporting documentation must be retained for five years from the filing date.",
    source: [
      { label: "31 CFR 1020.320(d) – supporting documentation deemed filed with the SAR; provided upon request; five-year retention", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.320" },
      { label: "FinCEN Guidance FIN-2007-G003 – no legal process required; verify the requester's identity", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/suspicious-activity-report-supporting-documentation" }
    ]
  },
  {
    id: "D4-028",
    domain: 4,
    topic: "Keep-open requests",
    hy: true,
    q: "A law enforcement agency asks a bank to keep open an account it would otherwise close so the agency can continue monitoring the activity. According to FinCEN guidance, which statement is correct?",
    options: [
      "The bank must keep the account open indefinitely once asked",
      "An oral request from any agent is sufficient and need not be recorded",
      "The bank must close the account because it has filed a SAR",
      "The request should be in writing from an appropriate official, the decision remains the bank's, and the request should be retained for five years after it expires"
    ],
    answer: [3],
    explanation: "FinCEN guidance on keep-open requests (FIN-2007-G002) states that the request should be in writing (e.g., from a supervisory agent or prosecutor), should indicate its duration (not more than six months), and should be retained for at least five years after it expires; the institution is not obligated to comply and the final decision is its own. Since the AML Act of 2020, 31 USC 5333 also protects a bank from BSA liability for keeping an account open in line with a written keep-open request made after notice to FinCEN, which must state a termination date. Filing a SAR does not require account closure, and institutions must continue monitoring and filing SARs as appropriate while the account stays open.",
    source: [
      { label: "FinCEN Guidance FIN-2007-G002 – Requests by Law Enforcement for Financial Institutions to Maintain Accounts", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/requests-law-enforcement-financial-institutions-maintain" },
      { label: "31 USC 5333 – safe harbor for keep-open requests; termination date required; SAR duties continue", url: "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title31-section5333&num=0&edition=prelim" }
    ]
  },
  {
    id: "D4-029",
    domain: 4,
    topic: "314(a) requests",
    hy: true,
    q: "A bank receives a FinCEN 314(a) request listing several subjects. Which actions are REQUIRED of the bank? (Choose two.)",
    options: [
      "File a SAR on every subject that matches",
      "Search the specified records and report any positive matches to FinCEN within 14 days",
      "Close all accounts of matched subjects immediately",
      "Keep the request confidential and not disclose it to the subjects or other parties",
      "Report a \"no match\" confirmation to FinCEN for each subject"
    ],
    answer: [1, 3],
    explanation: "Under 31 CFR 1010.520(b)(3), institutions must search specified records (current accounts, accounts maintained in the preceding 12 months and transactions in the preceding 6 months), report positive matches in the manner and time frame FinCEN specifies (two weeks, i.e., 14 days, from posting under FinCEN's 314(a) process), and must not disclose the request to anyone other than FinCEN or the requesting agency. FinCEN instructs institutions not to reply when there is no match. The rule states that a request does not require any action on the account, so a match does not automatically require a SAR or account closure, although it should inform the institution's risk review.",
    source: [
      { label: "31 CFR 1010.520(b)(3) – record search scope, reporting, non-disclosure, no other action required", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-E/section-1010.520" },
      { label: "FinCEN 314(a) Fact Sheet – two weeks to report positive matches; do not reply if no match", url: "https://www.fincen.gov/system/files/shared/314afactsheet.pdf" }
    ]
  },
  {
    id: "D4-030",
    domain: 4,
    topic: "314(b) information sharing",
    hy: true,
    q: "A bank investigator wants to exchange information with another bank about a customer suspected of moving laundered funds between the two institutions. What is required for the exchange to be protected by the USA PATRIOT Act section 314(b) safe harbor?",
    options: [
      "A subpoena from law enforcement authorizing the exchange",
      "Both institutions must have filed a current 314(b) notice with FinCEN, and the information must be used for identifying and reporting possible money laundering or terrorist financing",
      "The customer's written consent to share information",
      "Prior approval from FinCEN for each individual exchange"
    ],
    answer: [1],
    explanation: "Under 31 CFR 1010.540, section 314(b) permits voluntary information sharing among financial institutions that have filed a notice (registration) with FinCEN, effective for one year, and before sharing an institution must take reasonable steps to verify that the other institution has also registered. The safe harbor applies when the shared information is used only for permitted purposes (identifying and, where appropriate, reporting possible money laundering or terrorist activity, deciding whether to open or maintain an account or engage in a transaction, or BSA compliance) and is kept secure and confidential. No subpoena, customer consent or case-by-case FinCEN approval is required, but 314(b) does not permit sharing a SAR or revealing its existence.",
    source: [
      { label: "31 CFR 1010.540(b)(2)-(5) – notice, verification, use and security conditions for the safe harbor", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-E/section-1010.540" },
      { label: "FinCEN Section 314(b) Fact Sheet (June 2026)", url: "https://www.fincen.gov/system/files/shared/314bfactsheet.pdf" }
    ]
  }
]);
