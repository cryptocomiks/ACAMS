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
    explanation: "Behavioral (profiling/anomaly) monitoring establishes a baseline for each customer and for a peer segment and flags deviations from it, which fixed rules cannot do. Lowering all thresholds across the board mainly increases false positives without making detection customer-specific. More static rules and manual review of large items still ignore individual and peer baselines."
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
    explanation: "Below-the-line testing reviews activity under the current threshold to check whether the threshold is set too high and productive (suspicious) activity is being missed, i.e., to detect false negatives. Above-the-line testing reviews alerts just above the threshold to see whether the threshold could be raised without losing productive alerts. A parallel run compares an old and new system and is not a threshold test."
  },
  {
    id: "D4-003",
    domain: 4,
    topic: "Alert tuning governance",
    hy: false,
    q: "A BSA/AML officer is under pressure to cut a large alert backlog. An analyst proposes doubling the threshold on the cash-structuring scenario, which would remove 70% of its alerts. What should the officer do FIRST?",
    options: [
      "Require a documented, data-driven analysis (including below-the-line testing) and obtain approval through the model governance process before any change",
      "Implement the change immediately and review its effect at the next annual audit",
      "Turn off the scenario temporarily until the backlog is cleared",
      "Implement the change only for low-risk customers without documentation"
    ],
    answer: [0],
    explanation: "Threshold changes must be justified by quantitative and qualitative analysis (e.g., above- and below-the-line testing and SAR conversion rates), documented, and approved under the institution's model risk governance. Tuning driven only by backlog or staffing pressure, or switching scenarios off, creates a monitoring gap that examiners routinely criticize. Undocumented changes, even for low-risk segments, cannot be defended to auditors or regulators."
  },
  {
    id: "D4-004",
    domain: 4,
    topic: "Model validation components",
    hy: false,
    q: "Under US supervisory model risk management guidance (Federal Reserve SR 11-7 / OCC 2011-12), which of the following are core elements of an effective validation of a transaction monitoring model? (Choose three.)",
    options: [
      "Evaluation of conceptual soundness",
      "Confirmation by the model developer that the model works as designed",
      "Ongoing monitoring",
      "Outcomes analysis",
      "Comparison of alert volumes with a peer bank's published figures"
    ],
    answer: [0, 2, 3],
    explanation: "SR 11-7/OCC 2011-12 identify three core elements of validation: evaluation of conceptual soundness, ongoing monitoring (including process verification and benchmarking), and outcomes analysis (e.g., back-testing). Validation must be performed by staff independent of model development, so the developer's own confirmation does not qualify. Peer banks' alert volumes are not a reliable measure of whether a model fits the institution's own risk profile."
  },
  {
    id: "D4-005",
    domain: 4,
    topic: "Vendor model validation",
    hy: false,
    q: "A community bank licenses a vendor transaction monitoring system and relies on the vendor's generic validation report. Examiners criticize the validation. What is the MOST likely reason?",
    options: [
      "Vendor systems are exempt from model risk management expectations",
      "Only the vendor may validate its own proprietary model, so the bank had no obligation",
      "Validation is required only when a model is built in-house",
      "The bank remains responsible for validating how the model performs with its own data, configuration and risk profile"
    ],
    answer: [3],
    explanation: "Supervisory guidance (SR 11-7 and the 2021 interagency statement on model risk management for BSA/AML compliance) states that vendor models are subject to the same principles and that the institution must understand and validate the model as implemented with its own data, settings and customer base. A generic vendor report does not test the bank's specific configuration. Outsourcing a tool never transfers the compliance responsibility."
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
    explanation: "Fuzzy matching algorithms (e.g., phonetic methods like Soundex and edit-distance methods like Levenshtein) catch transliteration, spelling, spacing and punctuation variants that exact matching misses; the threshold must be calibrated and tested. Screening only surnames would generate unmanageable false positives while still missing variants. Relying on customer spelling or manual review of only high-value payments leaves obvious gaps."
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
    explanation: "A higher similarity threshold requires names to be closer before an alert is generated, reducing false positives but increasing the risk that genuine name variants are missed (false negatives). A lower threshold has the opposite effect. No threshold eliminates both error types, so the setting must be justified by testing against the institution's risk appetite."
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
    explanation: "Name similarity alone is not a true match; analysts compare secondary identifiers (DOB, nationality, address, ID numbers) and, when they clearly differ, close the alert as a false positive with documented reasoning. Blocking and reporting to OFAC are required only for a confirmed true match. Telling the customer about screening results is unnecessary and inappropriate."
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
    explanation: "Under OFAC's 50% rule, an entity owned 50% or more, directly or indirectly, individually or in the aggregate, by one or more blocked persons is itself blocked, even if not listed (here 30% + 25% = 55%). Ownership need not be held by a single SDN, and no separate designation is required. The case shows why name screening must be supplemented by beneficial ownership data."
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
    explanation: "Regulators expect AI/ML models to be transparent enough that the institution can explain outputs; explainability tools (such as SHAP-style feature importance or reason codes) show which factors drove an alert so investigators can assess and document it. A model score alone is not a basis for a SAR, which requires a human judgment and narrative. Abandoning the model or claiming it is unexplainable does not satisfy governance expectations."
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
      "ML models are exempt from independent validation",
      "ML cannot process structured transaction data"
    ],
    answer: [0, 2],
    explanation: "ML models learn from historical data, so gaps or bias in past alert and SAR decisions can be reproduced, and performance can degrade (drift) as behavior and typologies change, requiring ongoing monitoring and retraining. ML does not remove the need for human investigation, and ML models are subject to the same validation and governance expectations as other models. Structured transaction data is in fact the primary input for most AML ML models."
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
    explanation: "Perpetual KYC uses automated data feeds and trigger events (e.g., registry changes, adverse media, sanctions/PEP status changes, unusual transactions) to update customer risk continuously rather than waiting for a scheduled review. It does not remove reviews or require full daily reviews of every customer. Using external data sources does not transfer the institution's CDD responsibility."
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
    explanation: "An institution can outsource tasks but not accountability: it must perform due diligence on the vendor, oversee performance and test the controls. Regulators generally do not certify or approve specific vendor products. Contractual allocations of liability between the bank and vendor do not change the bank's regulatory obligations."
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
    explanation: "The common-input-ownership (co-spend) heuristic assumes that inputs signed together in one transaction belong to the same wallet owner, allowing addresses to be clustered and attributed (e.g., to an exchange or darknet market). A peel chain is a laundering pattern in which small amounts are peeled off a large balance through successive transactions. The Travel Rule (FATF R.16) is an information-sharing requirement, not an analytics heuristic."
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
    explanation: "Direct exposure to mixers and indirect exposure to darknet markets are recognized red flags (FATF virtual asset red flag indicators); they call for investigation, EDD and a SAR/STR decision. Public blockchains are pseudonymous, not anonymous, which is why analytics tools can trace flows. Publicizing addresses risks tipping off, and returning funds without review may help move illicit proceeds."
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
    explanation: "Link or network analysis visualizes relationships between entities (shared identifiers, devices and counterparties) and is well suited to exposing funnel accounts, mule networks and nested structures. CTR aggregation only identifies large cash totals by person or business day. Risk questionnaires and sanctions screening do not map the relationships among accounts."
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
    explanation: "Good OSINT practice includes protecting the investigation (non-attributable browsing), assessing source reliability, corroborating information and documenting sources with dates, since web content can change or disappear. Contacting the subject or associates risks tipping off and may breach policy and privacy rules. A single unverified source is not a reliable basis for conclusions."
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
    explanation: "A data feed gap is a significant control failure: it should be escalated through governance, remediated, and followed by a lookback so that suspicious activity in the unmonitored period can be identified and reported. Fixing the mapping only going forward leaves potentially reportable activity unreviewed. Delaying action or concealing the issue from management conflicts with the program's governance and oversight responsibilities."
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
    explanation: "Reconciliations confirm that all transactions from source systems actually arrive in the monitoring system, and documented data lineage/mapping shows how each source field feeds each scenario, which validators and examiners review. Suppressing alerts with missing data hides the problem instead of fixing it. Vendor assurance and fewer scenarios do not verify the institution's own data flows."
  },
  {
    id: "D4-020",
    domain: 4,
    topic: "Investigation workflow",
    hy: true,
    q: "Which sequence BEST reflects a typical suspicious activity investigation workflow at a financial institution?",
    options: [
      "SAR filing, alert generation, case investigation, escalation",
      "Alert generation and triage, case investigation, escalation for decision, SAR filing (or documented no-file decision)",
      "Case investigation, alert generation, SAR filing, escalation",
      "Escalation, alert generation, SAR filing, case investigation"
    ],
    answer: [1],
    explanation: "Monitoring or referrals generate alerts that are triaged; alerts that cannot be cleared become cases that are investigated; cases are escalated to a decision-maker (often the BSA/AML officer or a committee) who decides whether to file a SAR or document why no filing is required. The other sequences place filing before the analysis that supports it. Each step should be documented to support the audit trail."
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
    explanation: "Under 31 CFR 1020.320, a SAR is due within 30 calendar days of initial detection of facts that may constitute a basis for filing; FinCEN guidance says the clock starts when the institution determines, after a review conducted without undue delay, that the activity is suspicious, not when the alert is generated. The extension to 60 days applies only when no suspect has been identified, which is not the case here. The 14-day period relates to 314(a) responses, not SARs."
  },
  {
    id: "D4-022",
    domain: 4,
    topic: "Case documentation: no-file decisions",
    hy: true,
    q: "After investigating a case, the BSA/AML officer concludes that the activity has a reasonable explanation and decides not to file a SAR. What should be done with the case?",
    options: [
      "Delete the case file because no SAR was filed",
      "Keep only the original alert and discard the investigative notes",
      "Document the investigation, supporting evidence and rationale for the no-file decision, and retain the file",
      "File a SAR anyway to avoid any regulatory criticism"
    ],
    answer: [2],
    explanation: "Examiners expect institutions to document both SAR and no-SAR decisions, including the analysis performed, evidence reviewed and rationale, so the decision can be reviewed and defended. Deleting or thinning the file destroys the audit trail. Defensive filing without a basis for suspicion degrades SAR quality and is not what the rules require."
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
      "Neutral third-party witnesses first, then corroborating witnesses, and the suspect last"
    ],
    answer: [3],
    explanation: "Investigative practice is to move from the least involved to the most involved: neutral witnesses and corroborating witnesses first, so facts are gathered and verified before the subject is interviewed last. Interviewing the suspect first can alert them and allow evidence tampering. Group interviews and suspect-only interviews undermine independence and completeness of evidence."
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
    explanation: "Institutions may request information from customers about unusual transactions as part of due diligence, using neutral, open-ended questions, but must not disclose that a SAR has been or may be filed (31 USC 5318(g)(2); FATF R.21 on tipping-off). Warning the customer about a SAR or law enforcement involvement is prohibited disclosure. Asking legitimate questions about a transaction is not in itself tipping-off."
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
    explanation: "A chain of custody demonstrates that evidence has not been altered or tampered with, and preserving originals while using verified copies (such as hashed forensic images) protects authenticity. Writing on originals alters the evidence, and wide access undermines both custody and confidentiality. Disposing of originals may make the evidence inadmissible and can breach record-retention requirements."
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
    explanation: "A subpoena must be answered in accordance with law, and for grand jury subpoenas disclosure to the customer is restricted (e.g., 12 USC 3420(b)). Regulators expect receipt of a subpoena to prompt a risk review of the relationship, but it does not by itself require a SAR or account closure. Notifying the customer could obstruct the investigation and constitute prohibited disclosure."
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
    explanation: "Under 31 CFR 1020.320(d), supporting documentation is deemed filed with the SAR and must be made available upon request to FinCEN, appropriate law enforcement and supervisory agencies without a subpoena; banks should verify the requester's identity and authority. Seeking customer consent would amount to tipping-off. SARs and supporting documentation must be retained for five years from the filing date."
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
    explanation: "FinCEN guidance on keep-open requests states that the request should be in writing (e.g., from a supervisory agent or prosecutor), should indicate its duration, and should be retained for five years after it expires; the institution is not obligated to comply and the final decision is its own. Filing a SAR does not require account closure. Institutions should continue monitoring and filing SARs as appropriate while the account stays open."
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
    explanation: "Under 31 CFR 1010.520, institutions must search specified records (generally accounts maintained in the preceding 12 months and transactions in the preceding 6 months) and report positive matches within 14 days, and must not disclose the request. No response is required when there is no match. A match does not automatically require a SAR or account closure, although it should inform the institution's risk review."
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
    explanation: "Section 314(b) permits voluntary information sharing among participating financial institutions that have filed a notice with FinCEN (renewed annually), and provides a safe harbor when information is shared and used for identifying and reporting possible money laundering or terrorist activity and kept secure. No subpoena, customer consent or case-by-case FinCEN approval is required. Institutions should confirm that the counterparty is registered before sharing."
  }
]);
