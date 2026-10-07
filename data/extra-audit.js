window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "AUDIT-001", domain: 3, topic: "Independent testing: sampling the SAR decision process", hy: true, difficulty: "hard",
    q: "Priya Nair, an internal auditor at Harrow Valley Bank, is testing the suspicious activity reporting process for the annual BSA/AML independent test. Last year the bank generated 6,200 monitoring alerts. Analysts closed 5,900 without escalation, 300 became cases, and 45 SARs were filed. Priya picks a random sample of 25 of the 45 SARs, finds that all were filed on time with complete narratives, and drafts a 'satisfactory' rating. The bank also changed its case-management vendor in March, and the audit committee chair has asked for the report two weeks early. Which change to Priya's testing would MOST improve the reliability of her conclusion?",
    options: [
      "Test all 45 filed SARs instead of 25, so that the conclusion covers every filing made during the year",
      "Rely on second-line quality assurance results for closed alerts and limit audit work to filed SARs",
      "Add risk-based samples of alerts closed without escalation and cases closed without a SAR",
      "Postpone the review until the new case-management system has run for a full year"
    ],
    answer: [2],
    explanation: "The FFIEC Manual expects independent testing to evaluate the whole suspicious activity process, including the alert process, alert management, research and SAR decision-making, not only the SARs that were filed. A sample drawn only from filed SARs can show that filings are timely and complete, but it cannot detect suspicious activity that was wrongly closed. Testing all 45 SARs is the runner-up, but it gives fuller coverage of the wrong population. Relying only on second-line QA weakens independent testing, and a system change is a reason to test sooner, not later.",
    source: [{ label: "FFIEC BSA/AML Examination Manual (2020) – Independent Testing and examination procedures 5-6 (NCUA copy)", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" }]
  },
  {
    id: "AUDIT-002", domain: 3, topic: "Independent testing: validating the sample population", hy: true, difficulty: "hard",
    q: "Internal audit at Northgate Bank plans to test enhanced due diligence on high-risk customers. The first line provides a population report, filtered on 'risk rating = high', listing 2,140 customers. The auditors select 60 files, find only two minor exceptions, and plan a 'satisfactory' rating. A data analyst on the team then notices that 11,900 customers have a blank risk-rating field, so the filter excluded them. Many of these customers were migrated from a payments subsidiary two years ago. The audit is due to the audit committee next week. What should the audit team do FIRST?",
    options: [
      "Report the 60-file result now and recommend that the first line fill in the blank ratings",
      "Get the population straight from the source system, including blank ratings, and resolve the gap before relying on the sample",
      "Increase the sample from 60 to 150 files drawn from the same 2,140-customer report",
      "Ask the first line to certify in writing that the 2,140 customers are the complete high-risk population"
    ],
    answer: [1],
    explanation: "The FFIEC Manual expects independent testing to assess whether the information technology sources, systems and processes that support the program are complete and accurate. A sample only supports a conclusion about the population it was drawn from. Here the population left out about 11,900 customers whose risk was never rated, and that gap is itself a significant finding. A larger sample from the same incomplete report is the runner-up, but it does not fix the population. A first-line certification is not independent evidence. The FCA's 2024 fine on Metro Bank shows the cost of such data gaps: an error in how data was fed into its system left more than 60 million transactions unmonitored for over four years.",
    source: [
      { label: "FFIEC BSA/AML Examination Manual (2020) – Independent Testing: IT sources complete and accurate (NCUA copy)", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" },
      { label: "FCA press release (Nov 2024) – Metro Bank fined £16.7m for financial crime failings", url: "https://www.fca.org.uk/news/press-releases/fca-fines-metro-bank-16m-financial-crime-failings" }
    ]
  },
  {
    id: "AUDIT-003", domain: 3, topic: "Audit findings: management pressure to downgrade a rating", hy: false, difficulty: "hard",
    q: "Internal audit at Castlebrook Bank rates a finding 'high': 1,400 reviews of high-risk customers are more than six months overdue, and the backlog has doubled since the last audit. The head of retail banking, who owns the reviews, says a new hiring plan will clear the backlog by year-end. She asks the chief audit executive to rate the finding 'medium' and leave it out of the audit committee pack, because the board is 'already aware of resourcing issues'. The chief compliance officer agrees with the 'high' rating. What should the chief audit executive do?",
    options: [
      "Downgrade the finding to medium, because the business owns the risk and has a credible plan to fix it",
      "Keep the high rating but hold the finding back until the hiring plan has been tested next year",
      "Ask the chief compliance officer to set the final rating, because compliance is the second line",
      "Keep the high rating, record management's response and target date, and report it to the audit committee"
    ],
    answer: [3],
    explanation: "Under the Basel Committee guidelines, internal audit is the third line of defence: it independently evaluates controls, reports to the audit committee and follows up its findings. The FFIEC Manual expects deficiencies to be reported to the board or a board committee promptly and tracked until they are corrected. Management's hiring plan belongs in its response and target date; it does not lower the severity of a doubling backlog. Holding the finding back until next year is the runner-up, but it defeats timely reporting. Audit ratings are not delegated to the second line.",
    source: [
      { label: "BCBS, Sound management of risks related to ML/FT (rev. July 2020), para 26 – internal audit", url: "https://www.bis.org/publications/202007-guidelines-sound-management-risks-related-money-laundering-and-financing-terrorism-revisions-supervisory.pdf" },
      { label: "FFIEC BSA/AML Examination Manual (2020) – Independent Testing: reporting and tracking deficiencies (NCUA copy)", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" }
    ]
  },
  {
    id: "AUDIT-004", domain: 3, topic: "Sanctions testing: responding to a confirmed negative test result", hy: true, difficulty: "hard",
    q: "During quarterly sanctions testing, Fernhill Bank's testing team runs 500 test names through the payment screening system. It confirms that a configuration change seven weeks ago raised the fuzzy-matching threshold so high that transliterated variants of listed names no longer generate alerts. The vendor says a permanent fix and a root-cause analysis will take about six weeks. The bank processes about 9,000 international payments a day, and the head of operations is worried about alert volumes. What should the sanctions compliance officer do FIRST?",
    options: [
      "Put compensating controls in place now, such as restoring the old setting or adding manual review",
      "Wait for the vendor's root-cause analysis, so that the fix addresses the real underlying problem",
      "File a voluntary self-disclosure with OFAC before taking any other step on the screening system",
      "Retrain payment operations staff on name variations and transliteration of listed names"
    ],
    answer: [0],
    explanation: "OFAC's Framework for Compliance Commitments says that when an organisation learns of a confirmed negative testing result or audit finding, it should take immediate and effective action to identify and implement compensating controls until the root cause is found and fixed. Waiting six weeks for the vendor is the runner-up, but it keeps a known gap open across about 9,000 payments a day. The bank should also look back over the seven weeks of payments and then decide whether any apparent violation needs disclosure. Training does not fix a system setting.",
    source: [{ label: "OFAC, A Framework for OFAC Compliance Commitments (2019) – Testing and Auditing, commitment III", url: "https://ofac.treasury.gov/media/16331/download?inline" }]
  },
  {
    id: "AUDIT-005", domain: 3, topic: "Three lines of defence in practice: who does what", hy: true, difficulty: "medium",
    q: "A bank is mapping its AML/CFT activities to the three lines of defence in the Basel Committee's guidelines on the sound management of ML/FT risks. Which allocations are consistent with those guidelines? (Choose two.)",
    options: [
      "Relationship managers and their supervisors identify, assess and control the ML/FT risks of the customers they bring in",
      "Internal audit designs the new transaction monitoring scenarios and then audits how effective they are",
      "The chief AML/CFT officer reports to the head of corporate banking, whose unit produces most of the alerts",
      "The chief AML/CFT officer's team carries out sample testing of compliance and reviews exception reports",
      "Relationship managers make the final decision on whether a suspicious transaction is reported to the FIU"
    ],
    answer: [0, 3],
    explanation: "Basel places the business units in the first line, in charge of identifying, assessing and controlling the risks of their business (para 19). In the second line, the chief AML/CFT officer monitors compliance with AML/CFT duties, which includes sample testing and reviewing exception reports (para 22), and is responsible for reporting suspicious transactions (para 25). The officer should be free of business-line influence and have a direct line to senior management or the board (paras 23-24). Internal audit, the third line, must evaluate controls independently (para 26), so it cannot design the scenarios it later audits.",
    source: [{ label: "BCBS, Sound management of risks related to ML/FT (rev. July 2020), paras 19-26", url: "https://www.bis.org/publications/202007-guidelines-sound-management-risks-related-money-laundering-and-financing-terrorism-revisions-supervisory.pdf" }]
  },
  {
    id: "AUDIT-006", domain: 3, topic: "Board oversight: direct access to audit and supervisory findings (EBA/GL/2022/05)", hy: false, difficulty: "medium",
    q: "The supervisory board of Valdora Bank, an EU credit institution, meets quarterly. This year, the national supervisor sent a letter with six AML/CFT findings, internal audit issued a critical AML report, and the AML/CFT compliance officer finished the annual activity report. The CEO proposes that the management board send the supervisory board a two-page summary of all three documents instead of the originals, so that the meeting can 'focus on solutions'. Under the EBA Guidelines on the role of AML/CFT compliance officers (EBA/GL/2022/05), what is the BEST response?",
    options: [
      "Accept the proposal, because the management board is responsible for implementing AML/CFT policies",
      "Give the supervisory board timely, direct access to the original reports and findings, with any summary added",
      "Send only the internal audit report, because the supervisor's letter is reserved for the management board",
      "Have the AML/CFT compliance officer present the summary, because that protects the officer's independence"
    ],
    answer: [1],
    explanation: "Paragraph 15 of EBA/GL/2022/05 says the management body in its supervisory function should, at a minimum, have timely and direct access to the AML/CFT compliance officer's activity report, the internal audit report, external auditors' findings and the competent authority's findings and measures. Paragraph 13 also requires it to review the activity report at least once a year and to assess the compliance function, taking audit conclusions into account. A summary can help, but replacing the originals lets management filter what the overseers see. Nothing reserves supervisory findings to the management board.",
    source: [{ label: "EBA/GL/2022/05 – Guidelines on the role of AML/CFT compliance officers, paras 12-15", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-05%20GLs%20on%20AML%20compliance%20officers/1035126/Guidelines%20on%20AMLCFT%20compliance%20officers.pdf" }]
  },
  {
    id: "AUDIT-007", domain: 3, topic: "Resourcing decisions: escalating a refused request (EBA/GL/2022/05, AMLR Art. 11)", hy: false, difficulty: "hard",
    q: "Nine months after Lumen Bank, an EU credit institution, launched instant payments, its unreviewed alerts have risen from 900 to 7,400. The AML/CFT compliance officer asks for eight more analysts and a case-management upgrade. The CFO rejects the request because of a group-wide hiring freeze. The management board member responsible for AML/CFT says the freeze 'applies to everyone'. The bank's profits rose 18% last year, and its marketing budget was increased. Under the EBA Guidelines on the role of AML/CFT compliance officers, what should happen NEXT?",
    options: [
      "The compliance officer raises alert thresholds until the volume of alerts fits the analysts already in place",
      "The compliance officer accepts the freeze and records the backlog in next year's annual activity report",
      "The compliance officer asks the national supervisor to approve the extra analysts the bank needs",
      "The management body decides on the request and must justify and record any refusal of the officer's advice"
    ],
    answer: [3],
    explanation: "Under EBA/GL/2022/05, the management board member responsible for AML/CFT must make sure the compliance officer has enough human and technical resources (para 22(f)). If the officer's concerns cannot be resolved, the management body must consider them, and any decision not to follow the officer's advice must be justified and recorded. In a significant incident, the officer has direct access to the supervisory function (para 23). From 10 July 2027, AMLR Article 11(3) and 11(5) make adequate resources and direct reporting a legal requirement. Recording the backlog in next year's report is the runner-up, but it leaves a known, growing gap unescalated. Thresholds must reflect risk, not staffing, and supervisors do not approve headcount.",
    source: [
      { label: "EBA/GL/2022/05 – Guidelines on the role of AML/CFT compliance officers, paras 22-23", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-05%20GLs%20on%20AML%20compliance%20officers/1035126/Guidelines%20on%20AMLCFT%20compliance%20officers.pdf" },
      { label: "Regulation (EU) 2024/1624 (AMLR), Art. 11 – compliance functions", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng" }
    ]
  },
  {
    id: "AUDIT-008", domain: 3, topic: "Regulatory examinations: leveraging the independent test", hy: false, difficulty: "medium",
    q: "Before a BSA/AML examination, Ridgeway Bank's outside audit firm sends examiners its independent testing report. The report concludes that the program is 'adequate' and that it covered all high-risk business lines. The firm will not share its scope memo or workpapers, calling them proprietary. The bank's CEO hopes the clean report will shorten the examination. Under the FFIEC BSA/AML Examination Manual, what is the MOST likely result?",
    options: [
      "Examiners cannot leverage the report without its scope and workpapers, so they will likely do more of their own testing",
      "Examiners will rely on the report, because a test performed by an outside firm is presumed to be independent",
      "Examiners will cite a violation, because outside auditors must file their workpapers with FinCEN each year",
      "Examiners will accept the report once the audit committee confirms in writing that it agrees with the conclusion"
    ],
    answer: [0],
    explanation: "The FFIEC Manual says that examiners may use the findings of adequate independent testing to reduce the examination areas they cover and the testing they do. To leverage those findings, however, examiners must have access to the scope and supporting workpapers, so they can judge whether the testing was independent and covered the bank's risks. Without that access, examiners plan more of their own work. Outside firms are not presumed independent: they must not be involved in other BSA functions. No rule requires workpapers to be filed with FinCEN.",
    source: [{ label: "FFIEC BSA/AML Examination Manual (2020) – Scoping and Planning: Independent Testing (NCUA copy)", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" }]
  },
  {
    id: "AUDIT-009", domain: 3, topic: "M&A due diligence: issues found before closing", hy: true, difficulty: "hard",
    q: "Ashford Bancorp has signed an agreement to buy Kestrel Pay, a money transmitter with 600 agent locations, and plans to close in ten weeks. Ashford's compliance due diligence finds that Kestrel's monitoring of agent cash activity was switched off for 14 months during a system upgrade, and that Kestrel filed no SARs on agent activity during that period. Kestrel's management calls the issue 'historical' and says the purchase price already reflects it. The deal team wants to close on time and leave compliance to the integration phase. Kestrel's brand is popular with Ashford's retail customers. What should Ashford's chief compliance officer do?",
    options: [
      "Agree to close on schedule, because the acquired firm's issues can be handled through standard integration work",
      "Recommend that the deal be terminated, because any unfiled-SAR issue makes an acquisition target unacceptable",
      "Escalate so that a lookback, remediation and deal protections are agreed before closing, and the findings shape the risk assessment",
      "Rely on the seller's warranties of BSA compliance, because they transfer the regulatory liability back to the seller"
    ],
    answer: [2],
    explanation: "OFAC's Framework says compliance should take part in M&A due diligence so that issues are found, escalated to senior levels, dealt with before the transaction closes and built into the risk assessment. The DOJ's Evaluation of Corporate Compliance Programs adds that pre-acquisition due diligence lets the buyer negotiate who bears the cost of misconduct, while weak due diligence lets misconduct continue after the deal. Closing on time and fixing it later is the runner-up, but the acquirer would then inherit an open gap in monitoring and reporting. Warranties shift money between the parties, not regulatory obligations. Automatic termination ignores the risk-based option of fixing the problem first.",
    source: [
      { label: "OFAC, A Framework for OFAC Compliance Commitments (2019) – Risk Assessment: mergers and acquisitions", url: "https://ofac.treasury.gov/media/16331/download?inline" },
      { label: "DOJ Criminal Division, Evaluation of Corporate Compliance Programs (Sept 2024) – Mergers and Acquisitions", url: "https://www.justice.gov/criminal/criminal-fraud/page/file/937501/dl" }
    ]
  },
  {
    id: "AUDIT-010", domain: 3, topic: "Integrating an acquired portfolio", hy: false, difficulty: "hard",
    q: "Westmoor Bank has bought a portfolio of 38,000 small-business customers from a competitor. The seller rated 96% of them low risk, using a model that ignored cash intensity and cross-border activity. Westmoor's integration plan moves all the accounts over in one weekend, keeps the seller's risk ratings, and schedules periodic reviews on Westmoor's usual 1-, 3- and 5-year cycle. The accounts would join Westmoor's transaction monitoring only after the next system release, four months after migration. The seller's relationship managers are joining Westmoor with the portfolio. Which change to the plan is MOST important?",
    options: [
      "Ask the seller to re-certify its risk ratings in writing before the accounts are migrated",
      "Re-rate the customers with Westmoor's own model, refresh CDD on higher-risk ones first, and monitor all accounts from day one",
      "Keep the seller's ratings but bring all 38,000 periodic reviews forward into the first year",
      "Delay migration until a full CDD refresh has been completed on every single account"
    ],
    answer: [1],
    explanation: "The DOJ's Evaluation of Corporate Compliance Programs asks how an acquired business is brought into the buyer's risk assessment and compliance oversight, and whether post-acquisition audits are done. Basel notes that a buyer may not have the systems or staff to monitor unfamiliar customer types, and says monitoring should cover all customer accounts and transactions. Re-rating with the bank's own model puts risk-based priorities on a sound footing, and monitoring from day one closes a four-month blind spot. Bringing all reviews forward is the runner-up, but it is not risk-based, still relies on flawed ratings and leaves the monitoring gap. A seller certification adds nothing new, and a full refresh before migration is out of proportion.",
    source: [
      { label: "DOJ Criminal Division, Evaluation of Corporate Compliance Programs (Sept 2024) – M&A: post-transaction compliance", url: "https://www.justice.gov/criminal/criminal-fraud/page/file/937501/dl" },
      { label: "BCBS, Sound management of risks related to ML/FT (rev. July 2020), para 28 and Annex 5 – merger example", url: "https://www.bis.org/publications/202007-guidelines-sound-management-risks-related-money-laundering-and-financing-terrorism-revisions-supervisory.pdf" }
    ]
  },
  {
    id: "AUDIT-011", domain: 2, topic: "DOJ M&A safe harbor: when 180 days is too long (JM 9-28.900)", hy: false, difficulty: "hard",
    q: "Calloway Industries, a US company, closed its purchase of a European logistics group on 1 March 2026. Thirty days later, Calloway's post-acquisition compliance review finds that the target's freight unit has been routing US-origin dual-use parts to a sanctioned Russian end user through a third-country intermediary. More shipments are already scheduled. Calloway's general counsel notes that the DOJ's merger and acquisition safe harbor allows 180 days after closing to self-disclose, and he wants time to finish an internal investigation. Under the Justice Manual (JM 9-28.900), what is the BEST course?",
    options: [
      "Use the full 180-day window to complete the internal investigation before contacting the DOJ at all",
      "Stop the shipments and wait for full remediation, because disclosure is due only one year after closing",
      "Take no action with the DOJ, because the conduct began before Calloway acquired the logistics group",
      "Stop the shipments and disclose quickly, because misconduct that endangers national security should not wait for the 180-day window"
    ],
    answer: [3],
    explanation: "JM 9-28.900 gives an acquirer a presumption of declination if it generally self-discloses misconduct found in due diligence within 180 days of closing, fully remediates within one year, and pays any disgorgement, forfeiture or restitution. However, the Department expects misconduct that endangers national security or presents ongoing or imminent harm to be disclosed expeditiously, and the presumption does not apply if such disclosure is not made promptly. Ongoing shipments to a sanctioned end user fall into that category. Using the full 180 days is the runner-up, but it is wrong here. One year is the remediation deadline, not the disclosure deadline, and the safe harbor exists precisely for misconduct that began before the acquisition.",
    source: [{ label: "DOJ Justice Manual 9-28.900 – voluntary disclosure; M&A presumption of declination", url: "https://www.justice.gov/jm/jm-9-28000-principles-federal-prosecution-business-organizations" }]
  },
  {
    id: "AUDIT-012", domain: 3, topic: "BaaS partner oversight: growth, incentives and concentration", hy: false, difficulty: "hard",
    q: "SwiftNest, the largest fintech partner of Pinecrest Bank, provides 35% of the bank's deposits and pays the bank a fee for each active account. SwiftNest plans a marketing campaign to triple its users within six months. Under contract, SwiftNest performs first-level alert review, but its alert backlog already exceeds the agreed service level. Pinecrest's own BaaS oversight team has two staff. SwiftNest's CEO calls the campaign 'the bank's best revenue opportunity this year'. What should Pinecrest's BSA officer recommend to senior management?",
    options: [
      "Allow growth only within limits tied to proven control capacity at SwiftNest and the bank, with concentration limits and an exit plan",
      "Approve the campaign, because SwiftNest is contractually responsible for reviewing the alerts its users generate",
      "Terminate the relationship immediately, because the backlog already exceeds the contract's service level",
      "Approve the campaign but require SwiftNest to certify each year that its AML program is effective"
    ],
    answer: [0],
    explanation: "The July 2024 joint statement of the Federal Reserve, FDIC and OCC warns that partners may have incentives to grow in ways that do not match the bank's regulatory obligations. It also warns that operations can fail to keep pace with rapid growth, and that heavy deposit concentration can make a bank reluctant to end an arrangement. It lists concentration limits and exit strategies as effective practices, and it says the bank remains responsible for AML/CFT compliance when third parties do the work. An annual certification is the runner-up, but it does nothing about current capacity. Abrupt termination is not a planned exit.",
    source: [{ label: "Fed/FDIC/OCC Joint Statement on Banks' Arrangements with Third Parties to Deliver Deposit Products (25 July 2024)", url: "https://www.federalreserve.gov/newsevents/pressreleases/files/bcreg20240725c1.pdf" }]
  },
  {
    id: "AUDIT-013", domain: 3, topic: "AMLR Art. 18: outsourcing steps before a provider starts", hy: true, difficulty: "hard",
    q: "In October 2026, Aurelia Payments, an e-money institution in Portugal, plans to outsource the collection of customer identity documents and first-level alert review to a provider in Spain from September 2027, when the EU Anti-Money Laundering Regulation (AMLR) will apply. Which steps does AMLR Article 18 require? (Choose two.)",
    options: [
      "Obtain the supervisor's prior approval of the outsourcing contract before it is signed",
      "Notify the supervisor of the outsourcing before the provider starts carrying out the tasks",
      "Let the provider set customers' risk profiles, because it is the party reviewing their documents",
      "Add a contract clause that transfers liability for the provider's errors to the provider",
      "Run regular controls on the provider, at a frequency based on how critical the outsourced tasks are"
    ],
    answer: [1, 4],
    explanation: "AMLR Article 18(1) lets obliged entities outsource tasks, but they must notify the supervisor before the provider starts. That is a notification, not a prior approval. Article 18(4) requires a written agreement, application of the entity's own policies, and regular controls whose frequency depends on how critical the tasks are. Article 18(2) keeps the obliged entity fully liable for the provider's acts and omissions, so a contract clause cannot transfer regulatory liability. Article 18(3) forbids outsourcing the decision on a customer's risk profile.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR), Art. 18 – outsourcing", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng" }]
  },
  {
    id: "AUDIT-014", domain: 2, topic: "AMLR Art. 9: who approves policies vs procedures and controls", hy: false, difficulty: "medium",
    q: "Under the EU Anti-Money Laundering Regulation (EU) 2024/1624, which applies from 10 July 2027, who must approve an obliged entity's internal AML/CFT policies, and who must approve its internal procedures and controls?",
    options: [
      "Policies are approved by the compliance officer, and procedures and controls by the head of internal audit",
      "Policies and procedures must both be approved by the national supervisor before the entity may use them",
      "Policies are approved by the management body in its management function; procedures and controls at least by the compliance manager",
      "Policies are approved by the supervisory board, and procedures and controls by the business lines that apply them"
    ],
    answer: [2],
    explanation: "Article 9(2) of the AMLR requires internal policies, procedures and controls to be recorded in writing. Policies are approved by the management body in its management function, and procedures and controls are approved at least at the level of the compliance manager, the executive board member made responsible for AML/CFT compliance under Article 11(1). Article 9(2)(b) also requires an independent audit function to test them, or an external expert where there is no such function. Supervisors do not pre-approve these documents, and internal audit tests the controls rather than approving them.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR), Arts. 9 and 11", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng" }]
  },
  {
    id: "AUDIT-015", domain: 2, topic: "UK SM&CR: SMF17 MLRO and the financial crime prescribed responsibility", hy: true, difficulty: "hard",
    q: "Brookfield Bank, a UK SM&CR banking firm, appoints Daniel Osei as its MLRO, approved for the money laundering reporting function (SMF17). The board allocates the prescribed responsibility for the firm's policies and procedures for countering financial crime to the chief operations officer, Sara Lind (SMF24), not to Daniel. The chief risk officer then suggests giving the SYSC 6.3.8R overall responsibility for AML systems and controls to a manager approved only for the 'other overall responsibility' function (SMF18). Which statement is correct?",
    options: [
      "The prescribed responsibility must always be allocated to the MLRO, so the allocation to Sara is invalid",
      "Because the prescribed responsibility is not given to the MLRO, Sara's responsibility includes supervising Daniel",
      "The SYSC 6.3.8R responsibility may go to the SMF18 holder, because any senior manager is eligible to hold it",
      "Once Daniel is approved as SMF17, the board no longer has any responsibility for AML systems and controls"
    ],
    answer: [1],
    explanation: "SYSC 24.2 says the prescribed responsibility for financial crime includes the SYSC 6.3.8R function. A firm may allocate it to the MLRO but does not have to. If it is not allocated to the MLRO, it includes responsibility for supervising the MLRO, so Sara oversees Daniel. SYSC 6.3.8R(2) forbids giving the overall AML responsibility to a person approved to perform the other overall responsibility function (SMF18). The SMF18 suggestion is therefore the trap. The board keeps its oversight role, and SYSC 6.3.7G expects at least an annual MLRO report to senior management.",
    source: [
      { label: "FCA Handbook SYSC 24.2 – prescribed responsibilities (financial crime)", url: "https://www.handbook.fca.org.uk/handbook/SYSC/24/2.html" },
      { label: "FCA Handbook SYSC 6.3.7G-6.3.9R – AML responsibility and the MLRO", url: "https://www.handbook.fca.org.uk/handbook/SYSC/6/3.html" }
    ]
  },
  {
    id: "AUDIT-016", domain: 2, topic: "UK SM&CR: the duty of responsibility (FSMA s.66A(5))", hy: false, difficulty: "hard",
    q: "The FCA finds that Harlow Bank breached Principle 3 and SYSC 6.3 by failing to keep customer due diligence up to date over three years. Megan Fry, the senior manager (SMF) responsible for retail onboarding, received internal audit reports every quarter showing the backlog growing. She asked for status updates but never escalated the issue, sought more resources or changed priorities. She says the FCA cannot act against her because she did not take part in the breaches and was not knowingly concerned in them. Under section 66A of the Financial Services and Markets Act 2000, is she right?",
    options: [
      "No; a senior manager responsible for the area commits misconduct if she did not take the steps reasonably expected of someone in her position",
      "Yes; the FCA can act against her only if it proves that she was knowingly concerned in the firm's breach",
      "Yes; only the firm, not individuals, can be sanctioned when a firm breaches the FCA's systems and controls rules",
      "No; senior managers are strictly liable for every breach in their area, whatever steps they actually took"
    ],
    answer: [0],
    explanation: "Section 66A(5) of FSMA (Condition C, the duty of responsibility) applies where a firm breaches a relevant requirement while a senior manager is responsible for the activities concerned, and the senior manager did not take the steps that a person in that position could reasonably be expected to take to avoid the breach occurring or continuing. Being knowingly concerned is a separate route (Condition B), not a precondition. The duty is not strict liability: reasonable steps are a full answer. Receiving audit reports every quarter without escalating them is the kind of failure Condition C targets.",
    source: [{ label: "Financial Services and Markets Act 2000, s.66A – misconduct (Condition C)", url: "https://www.legislation.gov.uk/ukpga/2000/8/section/66A" }]
  },
  {
    id: "AUDIT-017", domain: 3, topic: "Whistleblowing: handling a report against a senior manager (FCA SYSC 18)", hy: false, difficulty: "hard",
    q: "An analyst at Oakridge Bank, a UK SM&CR banking firm, uses the bank's anonymous whistleblowing line to report that the head of trade finance tells his team to clear sanctions alerts on a key client without reviewing them. The whistleblowing team plans to send the report to the head of trade finance's line manager, the head of corporate banking, for investigation. A week later, the head of trade finance asks colleagues who 'went behind his back'. The bank's whistleblowers' champion is a non-executive director. What is the BEST course of action?",
    options: [
      "Let the head of corporate banking investigate, because the line manager understands the business best",
      "Close the report, because a concern raised anonymously cannot be properly verified or followed up",
      "Ask the analyst to reveal their identity, so that the bank can give feedback and check the facts",
      "Investigate independently of trade finance, protect the analyst's confidentiality and act on the attempt to identify them"
    ],
    answer: [3],
    explanation: "SYSC 18.3.1R requires arrangements that can handle anonymous and confidential disclosures and assess and escalate them effectively, including to the FCA or PRA where appropriate. They must include reasonable measures to prevent victimisation, keep records of outcomes, and report to the governing body at least once a year. Under SYSC 18.4.4R, the whistleblowers' champion oversees the integrity, independence and effectiveness of these arrangements, and SYSC 18.3.9G treats detriment to a whistleblower as a serious matter. Investigation by the line manager is the runner-up, but it puts the review within the reporting line of the person accused. Anonymity is no reason to close or unmask a report.",
    source: [
      { label: "FCA Handbook SYSC 18.3 – whistleblowing internal arrangements", url: "https://www.handbook.fca.org.uk/handbook/SYSC/18/3.html" },
      { label: "FCA Handbook SYSC 18.4 – the whistleblowers' champion", url: "https://www.handbook.fca.org.uk/handbook/SYSC/18/4.html" }
    ]
  },
  {
    id: "AUDIT-018", domain: 3, topic: "Speak-up culture: reading hotline data (DOJ ECCP)", hy: false, difficulty: "medium",
    q: "Tavira Group's global head of compliance reviews the year's hotline data. Its UK, German and Spanish units each received 30-45 reports per 1,000 employees. Its Gulf subsidiary, which carries the group's highest corruption and sanctions risk, received none, and the few investigations there took an average of 140 days, compared with 45 days elsewhere. The subsidiary's CEO says that zero reports prove the unit is 'clean'. Under the DOJ's Evaluation of Corporate Compliance Programs (September 2024), which steps should the head of compliance take? (Choose two.)",
    options: [
      "Accept the CEO's view and reduce compliance testing at the subsidiary for the coming year",
      "Replace the hotline at the subsidiary with a reporting route through local line managers",
      "Test whether employees at the subsidiary know about the hotline and feel safe using it",
      "Carry out a root cause analysis of the under-reporting and of the slow investigations",
      "Publish the names of employees who used the hotline to show staff that it works"
    ],
    answer: [2, 3],
    explanation: "The ECCP asks whether a company tests that employees know about the hotline and feel comfortable using it, and whether it avoids practices that discourage reporting. It also asks whether the company has analysed the root cause where conduct is over- or under-reported compared with other units, and how long investigations take. Zero reports from the highest-risk unit is a warning sign, not reassurance. Routing reports through local managers and naming reporters would discourage reporting and breach the confidentiality the ECCP expects.",
    source: [{ label: "DOJ Criminal Division, Evaluation of Corporate Compliance Programs (Sept 2024) – confidential reporting; consequence management effectiveness", url: "https://www.justice.gov/criminal/criminal-fraud/page/file/937501/dl" }]
  },
  {
    id: "AUDIT-019", domain: 3, topic: "Compliance culture: consequence management and clawback (DOJ ECCP)", hy: false, difficulty: "medium",
    q: "An internal investigation at Corvane Bank finds that Luca Brandt, a senior relationship manager and the bank's top earner, told clients to split cash deposits to avoid currency transaction reports. He also pressured an analyst to close the related alerts. Last year he received a large bonus, part of it deferred. The bank's compensation policy allows deferred awards to be cancelled and paid bonuses to be recovered for misconduct. The business head proposes only a written warning, because Luca's clients might leave with him. Under the DOJ's Evaluation of Corporate Compliance Programs, which response BEST shows effective consequence management?",
    options: [
      "Issue the written warning only, since stronger action would put the bank's revenue at risk",
      "Discipline only the analyst who closed the alerts, because she made the final alert decision",
      "Apply the policy consistently: discipline that fits the misconduct, cancel or recover the bonus, and review supervisors' accountability",
      "Move Luca to another branch quietly, without telling staff why the transfer was made"
    ],
    answer: [2],
    explanation: "The ECCP asks whether discipline is applied fairly and consistently at all levels, and whether bonus and deferred pay can be cancelled or recovered when misconduct is found, with examples of this actually happening. It also asks whether managers are held accountable for misconduct under their supervision and whether the company is transparent about the reasons for discipline. Letting a top earner off because of revenue tells staff that results matter more than compliance. Separately, the bank must consider filing a SAR on the structuring.",
    source: [{ label: "DOJ Criminal Division, Evaluation of Corporate Compliance Programs (Sept 2024) – compensation structures and consequence management; remediation", url: "https://www.justice.gov/criminal/criminal-fraud/page/file/937501/dl" }]
  },
  {
    id: "AUDIT-020", domain: 2, topic: "Monitorships: when the DOJ imposes a monitor (May 2025 memo)", hy: false, difficulty: "hard",
    q: "In 2026 the DOJ's Criminal Division is negotiating a deferred prosecution agreement with Belmont Trust Bank over AML failures that ended in 2023 under a previous management team. Since then the bank has replaced its CEO and BSA officer and disciplined the staff involved. It has rebuilt its monitoring system, and an outside firm has tested the new controls over 18 months with documented results. Its federal banking regulator oversees the remediation under a consent order. Under the Criminal Division's May 2025 memorandum on the selection of monitors, which conclusion is MOST likely?",
    options: [
      "A monitor will be imposed, because monitors are a standard term in every bank AML resolution",
      "A monitor is likely unnecessary, because regulator oversight, new leadership and tested controls lower the risk of recurrence",
      "A monitor will be imposed as an extra penalty, because the AML failures lasted for several years",
      "A monitor is likely unnecessary, but only if the bank agrees to pay a higher fine in its place"
    ],
    answer: [1],
    explanation: "The May 2025 memorandum says a monitor should never be imposed as a punishment. Prosecutors must weigh the risk of recurrence, whether another government body (such as the primary regulator) can provide enough oversight, the effectiveness of the compliance program and culture at the time of resolution (including changes in leadership), and how mature and well tested the controls are. If the regulator can provide sufficient oversight, no monitor is needed. Imposing a monitor because the failures lasted for years is the runner-up, but the memo rules out punitive monitors. Monitors are not standard, and a fine is not a substitute for one.",
    source: [{ label: "DOJ Criminal Division, Memorandum on Selection of Monitors in Criminal Division Matters (12 May 2025)", url: "https://www.justice.gov/criminal/media/1400036/dl" }]
  },
  {
    id: "AUDIT-021", domain: 3, topic: "Breach of a regulatory restriction during remediation (Monzo lesson)", hy: true, difficulty: "hard",
    q: "After years of rapid growth, Brightwell Bank, a UK digital bank, agreed with the FCA not to open accounts for high-risk customers while a skilled person reviews its financial crime controls. Four months later, quality assurance finds that 2,300 customers rated high risk were onboarded through a new business-account journey that the product team launched. The journey was never connected to the automated restriction check. The product team points out that the accounts are performing well and have caused no fraud losses. What should the MLRO do FIRST?",
    options: [
      "Stop high-risk onboarding through the journey, identify all customers onboarded in breach, and tell the FCA promptly",
      "Wait for the skilled person's final report, which will review every onboarding journey in any case",
      "Keep the accounts open without informing the FCA, because they have caused no fraud losses so far",
      "Ask the product team to add the restriction check to the journey in the next quarterly release"
    ],
    answer: [0],
    explanation: "In July 2025 the FCA fined Monzo £21.1 million. Its controls had not kept pace with its almost tenfold growth, and it repeatedly breached a requirement not to open accounts for high-risk customers, onboarding more than 34,000 of them between 2020 and 2022. A breach of an agreed restriction has to be stopped at once, its scope established, and the regulator told: Principle 11 requires firms to disclose anything the FCA would reasonably expect notice of. A fix in the next quarterly release is the runner-up, but it keeps the breach running for months. The lack of fraud losses is irrelevant to the restriction.",
    source: [
      { label: "FCA press release (July 2025) – Monzo fined £21m for failings in financial crime controls", url: "https://www.fca.org.uk/news/press-releases/fca-fines-monzo-21m-failings-financial-crime-controls" },
      { label: "FCA Handbook PRIN 2.1 – Principle 11, relations with regulators", url: "https://www.handbook.fca.org.uk/handbook/PRIN/2/1.html" }
    ]
  },
  {
    id: "AUDIT-022", domain: 3, topic: "AML/CFT compliance officer based outside the Member State", hy: false, difficulty: "hard",
    q: "A US-owned asset management group sets up a small investment firm in an EU Member State, with eight staff and a low-risk client base of institutional pension funds. The group wants its London-based group MLRO to also act as the EU firm's AML/CFT compliance officer, to save costs. National law allows the compliance officer to work from another jurisdiction. The group MLRO already oversees five other entities. Under the EBA Guidelines on the role of AML/CFT compliance officers, what is the BEST assessment?",
    options: [
      "It is not allowed, because the compliance officer must always live and work in the Member State concerned",
      "It is allowed with no further conditions, because the group MLRO is more senior than a local officer would be",
      "It is allowed only if the group MLRO first gives up the role at the group level and at the other five entities",
      "It can work given the low risk, if the officer has full access to information, enough time, and can meet the local FIU and supervisor without delay"
    ],
    answer: [3],
    explanation: "The EBA Guidelines say the compliance officer should normally work in the country where the institution is established (para 28). Where this matches the ML/TF risk and national law allows it, the officer may be based in another jurisdiction, provided the institution ensures full access to information and systems and availability to the local FIU and competent authority without delay, and can prove this to its supervisor (para 29). Because the officer already covers five other entities, the management body must check time and conflicts of interest (para 27). From July 2027, AMLR Article 11(2) also allows a small, low-risk group entity to appoint an officer who performs the role in another group entity.",
    source: [
      { label: "EBA/GL/2022/05 – Guidelines on the role of AML/CFT compliance officers, paras 26-29", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-05%20GLs%20on%20AML%20compliance%20officers/1035126/Guidelines%20on%20AMLCFT%20compliance%20officers.pdf" },
      { label: "Regulation (EU) 2024/1624 (AMLR), Art. 11(2)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng" }
    ]
  },
  {
    id: "AUDIT-023", domain: 3, topic: "Regulatory change management: preparing for the AMLR", hy: false, difficulty: "medium",
    q: "In October 2026, the AML/CFT compliance officer of Norvik Pay, a payment institution in Lithuania, is planning for the EU Anti-Money Laundering Regulation (AMLR), which applies from 10 July 2027. Several AMLA technical standards and guidelines that will supplement it are still being finalised. The CEO suggests waiting until all of them are adopted before changing anything, to avoid rework. The legal team proposes copying the parent group's policy manual, written for a large bank. What is the BEST approach?",
    options: [
      "Wait until every AMLA technical standard and guideline has been adopted before making any changes",
      "Copy the parent group's policy manual now, since it was written to a higher standard for a larger bank",
      "Run a gap analysis now, assign owners and deadlines before July 2027, report progress to management, and update as AMLA texts are finalised",
      "Make no changes until the supervisor's first AMLR inspection has identified what needs to be fixed"
    ],
    answer: [2],
    explanation: "The AMLR applies from 10 July 2027 (Art. 90). Article 9 requires policies, procedures and controls that are proportionate to the entity's own business, risks and size, kept up to date and approved by the management body. A tracked gap analysis with owners, deadlines and reports to management meets the date and leaves room to adjust as AMLA's texts are finalised. Waiting for every text is the runner-up, but it risks missing a fixed application date. A copied bank manual is not proportionate to a payment institution. Waiting for an inspection means being out of compliance on purpose.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR), Arts. 9 and 90", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng" }]
  },
  {
    id: "AUDIT-024", domain: 3, topic: "BSA officer: authority and independence in practice (FFIEC)", hy: true, difficulty: "medium",
    q: "The board of Lakeshore Community Bank appointed an experienced BSA officer, Tom Reyes, two years ago. In the past year, management launched a real-time payments service and replaced the core banking system, and Tom learned of both only after they went live. His requests to attend the management risk committee were refused, and the chief lending officer, to whom he reports, edits his quarterly board reports first. Tom knows the BSA well and his team is fully staffed. Under the FFIEC BSA/AML Examination Manual, which conclusion are examiners MOST likely to reach?",
    options: [
      "Tom lacks appropriate authority and independence, even though he is competent and his team is fully staffed",
      "The program is adequate, because the board appointed a qualified and experienced BSA officer to run it",
      "The only weakness is training, because Tom should have found out about the new products on his own",
      "The only weakness is resources, because Tom will need more staff to cover the new payments service"
    ],
    answer: [0],
    explanation: "The FFIEC Manual says appointing a BSA officer is not, by itself, enough to meet the program requirement. The board must give the officer appropriate authority, independence and access to resources. Signs of authority include senior management seeking the officer's input on new products and on system changes that affect BSA compliance. Signs of independence include reporting lines to the board that are not compromised and freedom from undue influence by business lines. Both are missing here. Competence and staffing are adequate, so training and resources are not the issue.",
    source: [{ label: "FFIEC BSA/AML Examination Manual (2020) – BSA Compliance Officer (NCUA copy)", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" }]
  },
  {
    id: "AUDIT-025", domain: 3, topic: "Remediation programmes: validating closure before telling the regulator", hy: false, difficulty: "hard",
    q: "Under a regulator's consent order, Granite National Bank must fix weaknesses in its customer risk rating and alert investigations. Eighteen months in, the remediation office reports 46 of 50 action items 'complete'. Most were closed once new procedures were approved and staff trained. Internal audit sampled three closed items. It found that the new risk-rating model went live only six weeks ago and that alert files still lack documented reasons for decisions. The CEO wants to tell the regulator that remediation is substantially complete. What should the board require FIRST?",
    options: [
      "Tell the regulator remediation is complete, attaching internal audit's concerns as an appendix to the letter",
      "Close the remaining four action items quickly so that the whole programme can be declared finished",
      "Hire a second consultant to review and re-approve the procedures that have already been issued",
      "Independent validation that the new controls have worked over a sufficient period, reopening items that fail testing"
    ],
    answer: [3],
    explanation: "The FFIEC Manual notes that more frequent independent testing may be used to verify or validate remedial actions, and that the board should track deficiencies and document progress. The DOJ's May 2025 monitor memorandum likewise asks whether new controls have been in place long enough to show that they work and whether the company measures their effectiveness. Approved procedures and training show design, not operating effectiveness. Reporting completion with audit's concerns attached is the runner-up, but it presents unvalidated work as finished. Re-approving procedures adds paperwork, not evidence.",
    source: [
      { label: "FFIEC BSA/AML Examination Manual (2020) – Independent Testing: validating remedial actions (NCUA copy)", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" },
      { label: "DOJ Criminal Division, Memorandum on Selection of Monitors (12 May 2025) – maturity and testing of controls", url: "https://www.justice.gov/criminal/media/1400036/dl" }
    ]
  }
]);
