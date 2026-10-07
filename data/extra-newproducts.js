// Batch 7: New products, technologies and change (NPAP). 22 x Domain 3, 3 x Domain 4.
// Every keyed answer checked against the primary source listed in `source` (October 2026).
window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "NPAP-001", domain: 3, topic: "FATF R.15: new technology for a pre-existing product (tokenised deposits)", hy: true, difficulty: "hard",
    q: "Corvina Bank, a mid-size commercial bank, plans to let 40 of its corporate treasury clients hold and move their existing demand deposits as tokens on a permissioned blockchain run by a bank consortium. Transfers would settle 24/7 between participating banks' clients. The product owner, Elise Haugen, notes that the tokens remain bank deposits on the balance sheet, are covered by the same terms and conditions, and are offered only to clients already onboarded with full CDD. She argues that the existing deposit-account risk assessment already covers the product. The consortium operator is licensed, and the launch date has been announced to clients. Under FATF Recommendation 15, what should the compliance officer insist on?",
    options: [
      "Treat the tokens as virtual assets and register Corvina as a VASP before any client can use them",
      "Rely on the existing deposit risk assessment, because only the delivery format of an existing product changes",
      "Assess the ML/TF risks of using the new technology before launch and take measures to manage them",
      "Launch as planned and assess the product during the first post-launch review, once real data exists"
    ],
    answer: [2],
    explanation: "FATF R.15 requires financial institutions to identify and assess ML/TF risks arising from the use of new or developing technologies for both new and pre-existing products, and to do so before launch, then take measures to manage and mitigate them. That the tokens are still deposits held by already-onboarded clients does not remove the duty: 24/7 on-chain settlement is new technology applied to an existing product, so relying on the old deposit assessment is the runner-up but wrong. Registering as a VASP misreads the product, and a post-launch assessment comes too late under R.15.",
    source: [{ label: "FATF Recommendations (2026), R.15 New technologies", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }]
  },
  {
    id: "NPAP-002", domain: 3, topic: "Launch readiness: resources must be in place before launch (EBA/GL/2022/05)", hy: true, difficulty: "hard",
    q: "Lumivia Pay, an e-money institution in Ireland, will launch a buy-now-pay-later wallet with instant top-ups on 1 March. The business-wide risk assessment, signed off in January, rates the product's residual risk 'medium' on the condition that four additional alert analysts handle the expected 3,000 extra alerts a month. Recruitment is running late, and HR says the analysts will start in May. The marketing campaign is booked and the board's product committee has approved the launch date. The chief product officer suggests launching on time and letting the alerts queue until May. What should the AML/CFT compliance officer advise the management body?",
    options: [
      "Do not start the launch until the resources to manage its risks are available and in place",
      "Launch on time but record the alert backlog as an accepted risk in the risk register",
      "Launch on time and tell the supervisor that a temporary alert backlog is expected",
      "Launch on time and raise alert thresholds until the new analysts start in May"
    ],
    answer: [0],
    explanation: "The EBA Guidelines on the AML/CFT compliance officer (para 40) state that the launch of a new product or service should not be initiated until adequate resources to understand and manage the associated risks are available and effectively implemented. The residual-risk rating depended on the analysts, so launching without them means the product operates outside its assessed risk. Recording the backlog as accepted risk is the runner-up, but it accepts a known control failure rather than fixing it; notifying the supervisor or raising thresholds does not provide the missing capacity.",
    source: [{ label: "EBA/GL/2022/05 Guidelines on the AML/CFT compliance officer, para 40", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-05%20GLs%20on%20AML%20compliance%20officers/1035126/Guidelines%20on%20AMLCFT%20compliance%20officers.pdf" }]
  },
  {
    id: "NPAP-003", domain: 3, topic: "Pilot design: exposure limits and predefined exit triggers (OCC Bulletin 2017-43)", hy: false, difficulty: "hard",
    q: "Ridgeway National Bank will pilot real-time payments for retail customers in two states. Its pre-launch risk assessment flags fraud-mule risk because payments are irrevocable and settle in seconds. The head of payments, Marcus Bell, wants the pilot to give 'realistic data' and the board wants a decision on a national rollout in nine months. Which TWO pilot design features BEST reflect OCC risk management principles for new activities? (Choose two.)",
    options: [
      "Open the pilot to all customers in the two states so that the data is representative",
      "Set limits on exposure, such as per-payment and daily caps and a restricted eligible population",
      "Exclude pilot payments from transaction monitoring so that baseline behaviour is not distorted",
      "Define in advance the metrics, such as fraud and mule-alert rates, that will trigger suspension or exit",
      "Rely on the nine-month board review as the only checkpoint for deciding whether to continue"
    ],
    answer: [1, 3],
    explanation: "OCC Bulletin 2017-43 expects performance and monitoring systems for new activities to include limits on the size of risk exposure that management and the board will accept, and objectives and performance criteria, with an exit strategy that limits adverse effects if the activity fails; the business plan should include metrics that trigger an exit. Opening the pilot to everyone removes the exposure limit, and switching off monitoring leaves irrevocable payments unwatched. Waiting nine months for one board review ignores the bulletin's call for periodic comparison of results with projections.",
    source: [{ label: "OCC Bulletin 2017-43, New, Modified, or Expanded Bank Products and Services", url: "https://www.occ.gov/news-issuances/bulletins/2017/bulletin-2017-43.html" }]
  },
  {
    id: "NPAP-004", domain: 3, topic: "Post-launch review: comparing actual results with projections", hy: false, difficulty: "medium",
    q: "Six months after Ashgrove Bank launched an online small-business account, 18,000 accounts have been opened against a forecast of 4,000. Sixty percent of them list the same two registered-agent addresses, and monitoring alerts per account are three times the level assumed in the pre-launch risk assessment. The product team reports that customer satisfaction is high and that revenue is well ahead of plan. What should the BSA officer do as part of the post-launch review?",
    options: [
      "Close the review as successful, because revenue and customer satisfaction are ahead of plan",
      "Wait for the next annual enterprise risk assessment before reconsidering the product's risk",
      "Ask the product team to slow marketing, while keeping the pre-launch risk assessment unchanged",
      "Compare actual results with the projections, update the risk assessment and adjust controls or limits"
    ],
    answer: [3],
    explanation: "OCC Bulletin 2017-43 says performance monitoring for new activities should periodically compare actual results with projections, use benchmarks to catch adverse trends early, and trigger changes in the business plan based on results. Volumes, address concentration and alert rates far above the assumptions mean the pre-launch risk assessment no longer reflects reality and must be revisited, with controls or limits adjusted. Revenue success is not a risk measure, and waiting for the annual cycle or slowing marketing without reassessing leaves the gap open.",
    source: [{ label: "OCC Bulletin 2017-43, Performance and Monitoring", url: "https://www.occ.gov/news-issuances/bulletins/2017/bulletin-2017-43.html" }]
  },
  {
    id: "NPAP-005", domain: 3, topic: "Embedded finance: contingency provisions if the fintech partner fails (2024 joint statement)", hy: true, difficulty: "hard",
    q: "Brookhollow Bank is negotiating a deposit program with Penny Nest, a fintech whose app will offer savings accounts to 250,000 users. Penny Nest will market the accounts, run the app and keep the end-user ledger through its own middleware, while the bank holds the pooled funds in one custodial account. Brookhollow's CIP and monitoring procedures for the program are drafted, and Penny Nest has a clean SOC 2 report. Penny Nest is loss-making and funded by a venture round that ends next year. The draft contract says nothing about what happens to the records if Penny Nest stops operating. Recalling the 2024 Synapse collapse, which contract provision should the bank's risk and compliance teams treat as MOST important to add?",
    options: [
      "A clause requiring Penny Nest to buy cyber insurance with the bank named as beneficiary",
      "A clause allowing the transfer of accounts, end-user data and activities to another party if Penny Nest fails",
      "A clause making Penny Nest liable for any civil money penalty related to the program",
      "A clause giving the bank a seat on Penny Nest's board to monitor its financial condition"
    ],
    answer: [1],
    explanation: "The July 2024 joint statement of the Federal Reserve, FDIC and OCC on bank-third party deposit arrangements notes that end users' access to funds may depend on the third party and points to contingency planning, including contract provisions to transfer the relevant accounts, data or activities to another entity if the third party goes bankrupt or fails. Without the ledger, the bank cannot reconcile balances or meet its own recordkeeping and AML obligations. Shifting penalties by contract is the runner-up, but use of a third party does not reduce the bank's responsibility; insurance and a board seat do not secure the records.",
    source: [
      { label: "Fed/FDIC/OCC Joint Statement on Banks' Arrangements with Third Parties to Deliver Deposit Products (July 2024)", url: "https://www.federalreserve.gov/newsevents/pressreleases/files/bcreg20240725c1.pdf" },
      { label: "Federal Reserve press release (June 2024) – Evolve Bank & Trust enforcement action", url: "https://www.federalreserve.gov/newsevents/pressreleases/enforcement20240614a.htm" }
    ]
  },
  {
    id: "NPAP-006", domain: 3, topic: "Crypto custody launch at a national bank (OCC IL 1183 and IL 1184)", hy: false, difficulty: "hard",
    q: "In 2026, Harlan National Bank, an OCC-supervised bank, plans to offer crypto-asset custody to its wealth clients and to buy and sell crypto-assets at their direction. It will use Coldvault Trust, a state-chartered trust company, as sub-custodian and an outside trading venue for execution. The head of digital assets, Priya Menon, tells the new product committee that since the OCC dropped its prior non-objection process in 2025, 'no extra AML or vendor work is needed, because the regulator has already said this is allowed'. Which response by the BSA officer is MOST accurate?",
    options: [
      "Supervisory non-objection is still required, so the launch must wait for a written OCC response",
      "The activities are not permitted for national banks, so the bank must use a non-bank affiliate",
      "No prior non-objection is needed, but the bank must run the activity safely, with third-party risk management over Coldvault and full BSA/AML controls",
      "No prior non-objection is needed, and Coldvault's own trust charter means the bank need not perform due diligence on it"
    ],
    answer: [2],
    explanation: "OCC Interpretive Letter 1183 (March 2025) removed the requirement to obtain supervisory non-objection before engaging in crypto activities, but the OCC said it expects the same strong risk management for novel activities. Interpretive Letter 1184 (May 2025) confirmed that banks may buy and sell crypto-assets held in custody at the customer's direction and may outsource these activities, subject to appropriate third-party risk management, and that custody, including through a sub-custodian, must be safe, sound and lawful. The runner-up wrongly treats the sub-custodian's charter as a substitute for the bank's own due diligence.",
    source: [
      { label: "OCC News Release 2025-16 – Interpretive Letter 1183", url: "https://www.occ.gov/news-issuances/news-releases/2025/nr-occ-2025-16.html" },
      { label: "OCC News Release 2025-42 – Interpretive Letter 1184", url: "https://www.occ.gov/news-issuances/news-releases/2025/nr-occ-2025-42.html" }
    ]
  },
  {
    id: "NPAP-007", domain: 4, topic: "Stablecoin issuance: building freeze/block capability and secondary-market controls", hy: true, difficulty: "hard",
    changed: "GENIUS Act (July 2025); FinCEN/OFAC PPSI AML/sanctions NPRM (April 2026); FATF stablecoin report (March 2026)",
    q: "Tallbridge Bank's subsidiary, Tallbridge Digital, plans in 2027 to issue a dollar payment stablecoin under the GENIUS Act. It will onboard only institutional clients to mint and redeem, after full CDD. The engineering lead proposes an immutable smart contract with no admin functions, 'so users trust that nobody can interfere with their coins', and says secondary-market transfers between unhosted wallets are 'outside our perimeter'. The compliance team notes that most illicit stablecoin activity takes place in the secondary market. Which TWO capabilities should compliance require before launch? (Choose two.)",
    options: [
      "Smart-contract functions that let the issuer block, freeze and reject specific transactions and comply with lawful orders",
      "Travel-rule messaging for every peer-to-peer transfer between unhosted wallets",
      "Full CDD on every holder of the stablecoin, including secondary-market holders using unhosted wallets",
      "A rule that redemptions are processed only after a 30-day holding period for all clients",
      "On-chain analytics on the token's secondary-market activity, feeding deny-listing and risk decisions"
    ],
    answer: [0, 4],
    explanation: "The GENIUS Act, as FinCEN's April 2026 proposal implements it, requires a permitted payment stablecoin issuer to maintain technical capabilities, policies and procedures to block, freeze and reject impermissible transactions and to comply with lawful orders, so an immutable contract with no admin functions would not do. The FATF's March 2026 report finds that most illicit stablecoin activity occurs in the secondary market and describes issuers using smart-contract controls, such as freezing and deny-listing, informed by their visibility of on-chain activity. Issuers apply CDD to primary-market customers, not to every unhosted-wallet holder, and travel-rule messaging does not apply to peer-to-peer unhosted transfers.",
    source: [
      { label: "FinCEN/OFAC NPRM (April 2026) – PPSI AML/CFT and sanctions program requirements", url: "https://www.fincen.gov/system/files/2026-04/PPSI-AMLCFT-NPRM.pdf" },
      { label: "FATF Targeted Report on Stablecoins and Unhosted Wallets (March 2026)", url: "https://fiaumalta.org/app/uploads/2026/03/Mar-2026-Targeted-Report-on-Stablecoins-and-Unhosted-Wallets-Peer-to-Peer-Transactions.pdf" }
    ]
  },
  {
    id: "NPAP-008", domain: 3, topic: "Open banking: who is the PISP's customer at an online checkout (EBA Guideline 18)", hy: false, difficulty: "hard",
    q: "Klarvik Pay, a payment initiation service provider (PISP) authorised in Denmark, launches a 'pay by bank' button for online merchants. Its first merchant, Nordhavn Furniture ApS, signs a contract with Klarvik. Shoppers click the button at checkout, log in to their own bank, and authorise a one-off payment to Nordhavn; they do not register with Klarvik. Klarvik never holds the funds, and the shoppers' banks have already applied CDD to them. The product manager, Jonas Lind, asks whom Klarvik must treat as its customer for CDD purposes. What is the BEST answer under the EBA ML/TF Risk Factors Guidelines?",
    options: [
      "Nordhavn Furniture, because Klarvik has the business relationship with the payee, not the one-off payers",
      "Each shopper, because the shopper holds the payment account from which the payment is initiated",
      "Both Nordhavn and every shopper, because a PISP is in the payment chain for each transaction",
      "Nobody, because a PISP does not hold funds and so is not an obliged entity under EU AML law"
    ],
    answer: [0],
    explanation: "EBA Guideline 18.8 says a PISP's customer is normally the account holder who requests the payment initiation, but where the PISP has a business relationship with the payee for offering payment initiation services, and not with the payer, and the payer uses it for a single or one-off transaction to that payee, the PISP's customer is the payee. The account-holder rule is the runner-up but does not apply in this merchant set-up. PISPs are obliged entities, although Guideline 18.2 notes that their inherent risk is limited because they do not execute payments or hold funds.",
    source: [{ label: "EBA/GL/2021/02 ML/TF Risk Factors Guidelines, Guideline 18 (PISPs and AISPs)", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }]
  },
  {
    id: "NPAP-009", domain: 3, topic: "Account information services: factors that increase risk (EBA Guideline 18)", hy: false, difficulty: "medium",
    q: "Fennick Insights, an account information service provider (AISP) in the Netherlands, launches a budgeting app that aggregates users' payment accounts. Its analyst, Sanne de Vries, reviews four users flagged by a new rule set. Which user presents the factor that the EBA Risk Factors Guidelines list as potentially increasing ML/TF risk for an AISP?",
    options: [
      "A user who connects two payment accounts, both held with banks in the EEA",
      "A user whose salary, received monthly from one employer, is spread across savings goals",
      "A user who connects one current account and checks balances several times a day",
      "A user who connects payment accounts held in the names of several different people in more than one jurisdiction"
    ],
    answer: [3],
    explanation: "EBA Guideline 18.6(b) lists, as a factor that may increase risk for AISPs, a customer who connects payment accounts held in the name of multiple persons in more than one jurisdiction, as well as funds moving to or from higher-risk jurisdictions. By contrast, Guideline 18.7(b) treats accounts held in an EEA member country as a factor that may decrease risk. Frequent balance checks and ordinary salary budgeting are normal uses of the service.",
    source: [{ label: "EBA/GL/2021/02 ML/TF Risk Factors Guidelines, Guidelines 18.6-18.7", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }]
  },
  {
    id: "NPAP-010", domain: 3, topic: "Onboarding an AML tooling vendor: key contract provisions (interagency TPRM guidance)", hy: true, difficulty: "hard",
    q: "Westbury Bank is moving its sanctions and PEP screening to Clearlist, a cloud vendor. Procurement has negotiated a 30% price discount by agreeing to the vendor's standard terms. Those terms give the bank only an annual marketing summary of Clearlist's controls, let Clearlist delete the bank's data 10 days after termination, and charge a large early-exit fee. The vendor's demo showed strong matching performance, and its software is used by 40 other banks. Which TWO provisions should the BSA officer insist on before signing? (Choose two.)",
    options: [
      "A clause stating that Clearlist, rather than the bank, is responsible for any missed sanctions match",
      "A most-favoured-customer clause guaranteeing the bank the lowest price Clearlist offers to any bank",
      "A right to audit, or to receive independent reports such as SOC reports, and to require remediation",
      "A clause requiring Clearlist to use the same list-matching algorithm as the other 40 banks",
      "Termination terms that allow an orderly transition and the timely return of the bank's data"
    ],
    answer: [2, 4],
    explanation: "The 2023 Interagency Guidance on Third-Party Relationships says contracts often set a right to audit and require remediation, including the types and frequency of audit reports such as SOC reports, and should provide termination with reasonable timeframes for an orderly transition and for the timely return or destruction of the bank's data. A marketing summary and a 10-day deletion window fall short of both. Shifting responsibility for missed matches to the vendor does not work, because the use of third parties does not diminish the bank's responsibility; price terms and identical algorithms do not address the risk.",
    source: [{ label: "Interagency Guidance on Third-Party Relationships: Risk Management (88 FR 37920, June 2023)", url: "https://www.govinfo.gov/content/pkg/FR-2023-06-09/pdf/2023-12340.pdf" }]
  },
  {
    id: "NPAP-011", domain: 3, topic: "Regulatory change management: the compliance officer's impact assessment", hy: false, difficulty: "medium",
    q: "Ostrava Credit, a Czech bank, learns that national amendments to its AML law will take effect in seven months. They change the CDD threshold for occasional transactions and add new record-keeping fields. The head of operations wants to wait until the supervisor publishes its guidance before doing anything. Under the EBA Guidelines on the AML/CFT compliance officer, what should the compliance officer, Tomas Novak, do FIRST?",
    options: [
      "Wait for the supervisor's guidance, because acting earlier risks rework if the interpretation changes",
      "Assess the possible impact of the changes on the bank's activities and AML/CFT framework and advise the management body on the measures needed",
      "Ask the IT department to change the onboarding system now, before policies and procedures are updated",
      "Ask internal audit to test compliance with the new rules once they have been in force for a year"
    ],
    answer: [1],
    explanation: "EBA/GL/2022/05 (para 47) says the AML/CFT compliance officer should advise the management body on the measures needed to ensure compliance and provide an assessment of the possible impact of any changes in the legal or regulatory environment on the institution's activities and compliance framework. A timely gap analysis and plan is the first step; waiting for guidance can leave too little time to implement, changing systems before policies are set reverses the order, and audit testing comes after implementation.",
    source: [{ label: "EBA/GL/2022/05 Guidelines on the AML/CFT compliance officer, para 47", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-05%20GLs%20on%20AML%20compliance%20officers/1035126/Guidelines%20on%20AMLCFT%20compliance%20officers.pdf" }]
  },
  {
    id: "NPAP-012", domain: 3, topic: "UK MLRs reg. 40: retention periods, the 10-year cap and deletion", hy: true, difficulty: "hard",
    q: "Helmsdale Bank, a UK bank, is building a retention schedule for a new digital archive. Its test case is Quayside Marine Ltd, a customer from 2009 until the relationship ended on 30 June 2026. The file holds CDD documents from 2009 and 2021 and transaction records going back to 2009. Quayside was never subject to a SAR, a court order or legal proceedings, and it has not consented to longer retention. Which retention rule for this file BEST matches regulation 40 of the Money Laundering Regulations 2017?",
    options: [
      "Keep CDD and transaction records for five years from each document's date, then delete them",
      "Keep all records, including those from 2009, until 30 June 2031, and then keep them for as long as the bank considers useful",
      "Keep CDD records until 30 June 2031; transaction records need not be kept beyond 10 years; then delete the personal data",
      "Keep all records for 10 years after the relationship ends, because it lasted longer than five years"
    ],
    answer: [2],
    explanation: "Under MLR reg. 40(3)(b), CDD records and records of transactions within a business relationship must be kept for five years from when the relationship ends, here to 30 June 2031; reg. 40(4) says transaction records within a relationship need not be kept for more than 10 years, and reg. 40(5) requires deletion of personal data once the period expires unless an enactment, court proceedings, consent or expected legal proceedings justify keeping it. Keeping everything indefinitely is the runner-up error, because the MLRs impose a deletion duty. Counting from each document's date or applying a flat 10-year rule misreads the regulation.",
    source: [{ label: "Money Laundering Regulations 2017, reg. 40 (legislation.gov.uk)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/40" }]
  },
  {
    id: "NPAP-013", domain: 4, topic: "Decommissioning a legacy system: what the archive must preserve (FATF R.11)", hy: false, difficulty: "hard",
    q: "Pelham Savings is switching off its 15-year-old monitoring and case management system after migrating to a new platform. To save storage costs, the IT team proposes an archive that keeps, for each past transaction, only the date, amount and account number, plus scanned CDD documents. Counterparty names, currency codes and the investigators' notes on closed alerts and unusual-activity reviews would be discarded. The archive would be searchable only by account number, with requests taking up to six weeks. Which feature of the proposal MOST conflicts with FATF Recommendation 11?",
    options: [
      "Using scanned copies of the CDD documents instead of the original paper documents",
      "Dropping transaction details and analysis records that are needed to reconstruct transactions and respond swiftly to authorities",
      "Moving the records off the live platform into an archive that the monitoring system cannot access",
      "Keeping the archived records for longer than five years after each business relationship has ended"
    ],
    answer: [1],
    explanation: "FATF R.11 requires transaction records sufficient to reconstruct individual transactions, including amounts and currency types, so they can serve as evidence, and requires keeping CDD records, account files and correspondence, including the results of any analysis undertaken, for at least five years. Records must allow the institution to comply swiftly with requests from competent authorities. Discarding counterparty and currency data and investigators' analysis, with six-week retrieval, defeats these aims. Copies of CDD documents and an off-line archive are acceptable, and five years is a minimum, not a maximum.",
    source: [{ label: "FATF Recommendations (2026), R.11 Record-keeping", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }]
  },
  {
    id: "NPAP-014", domain: 4, topic: "Monitoring system migration: cutover controls (NYDFS Part 504)", hy: true, difficulty: "hard",
    q: "Hudson Crest Bank, a New York-chartered bank, will move its transaction monitoring from a legacy engine to a new vendor platform over one weekend. The new platform maps 140 transaction codes from three core systems. The vendor certifies that its 22 scenarios work as designed, using its own sample data. The project manager plans to switch off the legacy engine at cutover to avoid duplicate alerts, and to test with live data only after go-live. Which TWO controls should the BSA officer require before cutover? (Choose two.)",
    options: [
      "Rely on the vendor's scenario certification, since it was produced by the system's designer",
      "Reconcile record counts and values from each source system to the new platform to confirm a complete and accurate data transfer",
      "Run end-to-end pre-implementation testing with the bank's own data, covering data mapping, transaction coding and scenario logic",
      "Switch off the legacy engine at cutover, because parallel alerts would double the investigators' workload",
      "Limit pre-go-live testing to the scenarios with the highest alert volumes in the legacy engine"
    ],
    answer: [1, 2],
    explanation: "NYDFS Part 504.3(c) requires data extraction and loading processes that ensure a complete and accurate transfer of data from source systems to automated monitoring systems, and validation of data integrity, which reconciliation at cutover provides. Part 504.3(a)(5) requires end-to-end pre- and post-implementation testing, including data mapping, transaction coding and detection scenario logic. A vendor certification on sample data cannot show that the bank's 140 codes are mapped, and switching off the old engine before the new one is proven, or testing only high-volume scenarios, risks undetected coverage gaps.",
    source: [
      { label: "3 NYCRR Part 504.3 (text via Cornell LII)", url: "https://www.law.cornell.edu/regulations/new-york/3-NYCRR-504.3" },
      { label: "NYDFS press release (June 2016) – Final transaction monitoring and filtering regulation", url: "https://www.dfs.ny.gov/reports_and_publications/press_releases/pr1606301" }
    ]
  },
  {
    id: "NPAP-015", domain: 3, topic: "Singapore MAS Notice 626: assess before launch or use, whichever comes first", hy: false, difficulty: "hard",
    q: "Merlion Crest Bank in Singapore is building a voice-assistant feature that lets customers send PayNow transfers by speaking to a smart speaker. The public launch is set for March. In January, the bank plans an 'internal friends-and-family' phase in which 300 staff will use the feature on their own live accounts to send real payments of up to S$1,000 a day. The digital team says the ML/TF risk assessment can be finished in February, before the public launch. Under MAS Notice 626, when must the risk assessment be completed?",
    options: [
      "Before the public launch in March, because staff are not external customers",
      "Within the first review cycle after the public launch, once usage data is available",
      "Before March only if the feature is offered to customers rated high risk",
      "Before the January internal phase, because the bank will already be using the technology with live payments"
    ],
    answer: [3],
    explanation: "MAS Notice 626 paragraphs 5.1 and 5.2 require a bank to identify and assess the ML/TF risks of new products, practices and new or developing technologies, and to undertake the assessment prior to the launch or use of those products, practices and technologies, taking measures to manage and mitigate the risks. Staff sending real payments in January is use of the new technology, so waiting for the March public launch is the runner-up but too late. Assessing after launch, or only for high-risk customers, does not meet the notice.",
    source: [{ label: "MAS Notice 626 (last revised 30 June 2025), paras 5.1-5.3", url: "https://www.mas.gov.sg/-/media/amld-amendments---30-june-2025/mas-notice-626.pdf" }]
  },
  {
    id: "NPAP-016", domain: 3, topic: "Cross-border QR wallet transfers funded by card: which R.16 rules apply (2025 revision)", hy: true, difficulty: "hard",
    changed: "FATF R.16 and INR.16 revised June 2025 (card payments for goods or services vs other card-funded transfers)",
    q: "Sunda Bank is launching a cross-border QR feature with a partner bank in a neighbouring country. Customers can scan a QR code to pay merchants that the partner bank has onboarded as card acceptors, or scan a friend's personal QR code to send money abroad, in both cases funded by their Sunda debit card. Average transfers are USD 1,400. To speed up the launch, the product team proposes sending only the card number with every transaction, 'because card payments are exempt'. Under FATF R.16 as revised in 2025, what is the CORRECT position?",
    options: [
      "Card number alone may accompany only the merchant purchases; the person-to-person transfers need the full cross-border originator and beneficiary information",
      "Card number alone is enough for both features, because both are funded by a debit card",
      "Card number alone is enough for both features, provided each transfer stays below USD 5,000",
      "Full originator and beneficiary information is needed for both features, because QR codes are not cards"
    ],
    answer: [0],
    explanation: "Under the revised INR.16, transfers that flow from using a credit, debit or prepaid card to purchase goods or services from parties onboarded to accept card payments carry the card number, with issuer and acquirer details available on request. But when a card is used for other types of transfer, such as person-to-person, the normal domestic or cross-border requirements apply. The P2P transfers here are cross-border and above the USD/EUR 1,000 de minimis threshold, so the full information is required. Treating both features alike, either way, ignores this distinction.",
    source: [{ label: "FATF Recommendations (2026), INR.16 paras 16-17 (card payments)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }]
  },
  {
    id: "NPAP-017", domain: 3, topic: "Adding a crypto feature to a P2P app: lessons from NYDFS v Block (2025)", hy: false, difficulty: "hard",
    q: "Pocketline, a New York-licensed money transmitter with a popular peer-to-peer payments app, plans to let users buy, sell and send bitcoin inside the app. Its existing controls were built for low-value P2P transfers between friends: light-touch onboarding with phone and card verification, and monitoring tuned to small dollar payments. The product team proposes using the same onboarding and monitoring for bitcoin 'to keep the experience seamless'. The chief compliance officer recalls the April 2025 NYDFS action against Block, Inc. over Cash App. What is the BEST lesson to apply?",
    options: [
      "Delay the feature until Pocketline obtains a separate federal banking charter for virtual currency",
      "Apply the existing P2P controls, but cap bitcoin purchases at USD 10,000 a day per user",
      "Assess the bitcoin feature's own risks and apply risk-based CDD and monitoring to it, rather than reusing low-risk P2P controls",
      "Outsource bitcoin monitoring to the liquidity provider, which takes responsibility for any suspicious activity"
    ],
    answer: [2],
    explanation: "NYDFS fined Block USD 40 million in April 2025 and required an independent monitor, finding inadequate CDD, ineffective and untimely monitoring with a large alert backlog, and lax treatment of high-risk bitcoin transactions that let largely anonymous activity pass unchecked; the Superintendent stressed that compliance must keep pace with growth and expansion. The lesson is to assess the new feature's distinct risks and build matching controls. A transaction cap is the runner-up but leaves the CDD and monitoring gaps in place; outsourcing does not move responsibility, and no federal charter is required.",
    source: [{ label: "NYDFS press release (10 April 2025) – Block, Inc. USD 40 million penalty", url: "https://www.dfs.ny.gov/reports_and_publications/press_releases/pr202504101" }]
  },
  {
    id: "NPAP-018", domain: 3, topic: "UK MLRs reg. 19(4)(c): assessing risk in preparation for and during adoption", hy: false, difficulty: "hard",
    q: "Thamesbridge Bank, a UK bank, completed a risk assessment in May before rolling out a new remote video-identification tool for account opening. The rollout is staged over six months. In August, with 40% of branches live, the fraud team notices that accounts opened through the tool receive third-party payments and pass funds on twice as often as branch-opened accounts. The project board says the risk assessment is 'closed' and the next review is due next May. Under the Money Laundering Regulations 2017, what should the MLRO do?",
    options: [
      "Leave the assessment closed until May, because it was properly completed before the rollout began",
      "Reassess the tool's risks now and adjust mitigating measures, because assessment must continue during adoption",
      "Stop the rollout permanently, because the tool has proved unsuitable for remote onboarding",
      "File a SAR on every account opened through the tool and then continue the rollout"
    ],
    answer: [1],
    explanation: "MLR reg. 19(4)(c) requires policies, controls and procedures ensuring that, when new products, business practices or technology are adopted, appropriate measures are taken in preparation for, and during, the adoption to assess and if necessary mitigate the ML/TF risks. Evidence of mule-like activity during a staged rollout must feed back into the assessment and controls now, so leaving it closed until May is wrong. Abandoning the tool is not required by the evidence, and SARs must be based on suspicion about specific activity, not filed for every account.",
    source: [{ label: "Money Laundering Regulations 2017, reg. 19 (legislation.gov.uk)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/19" }]
  },
  {
    id: "NPAP-019", domain: 3, topic: "Change management for new activities (OCC Bulletin 2017-43)", hy: false, difficulty: "medium",
    q: "According to OCC Bulletin 2017-43 on new, modified or expanded bank products and services, which element belongs in a bank's change management process for implementing a new activity?",
    options: [
      "An exit strategy that identifies and limits the adverse effect on the bank and its customers if the implementation fails",
      "A requirement to obtain written OCC approval before any new product is offered to customers",
      "A rule that new activities are reviewed only by the business line that will run them",
      "A commitment to skip testing for products bought from vendors that other banks already use"
    ],
    answer: [0],
    explanation: "OCC Bulletin 2017-43 says change management for new activities should include reviews by risk management and senior managers before implementation, proper testing of new systems and processes, approved risk parameters and exception reporting, training, and an exit strategy that identifies and limits the adverse effect on the bank and its customers if the implementation fails. The bulletin does not require OCC approval for every new product, and it calls for review beyond the business line and testing of new technology whatever its source.",
    source: [{ label: "OCC Bulletin 2017-43, Change Management", url: "https://www.occ.gov/news-issuances/bulletins/2017/bulletin-2017-43.html" }]
  },
  {
    id: "NPAP-020", domain: 3, topic: "Cash-like products: additional measures for products that favour anonymity (MLR reg. 19(4)(b))", hy: false, difficulty: "hard",
    q: "Carrow Money, a UK e-money issuer, designs a 'digital cash voucher' that customers can buy with cash at 2,000 convenience stores in amounts up to GBP 250. Each voucher is a QR code that anyone holding it can redeem into any Carrow wallet, and vouchers can be passed between people by forwarding the image. Store staff are not trained to ask questions. The product sponsor, Gemma Ross, says the low value per voucher makes the product low risk. In the pre-launch review, which point should the MLRO stress MOST?",
    options: [
      "The product should be rated low risk automatically, because each voucher is below GBP 250",
      "The stores, not Carrow, are responsible for AML controls because they collect the cash",
      "The product favours anonymity, so Carrow must take additional measures to prevent its misuse before launch",
      "The product is acceptable without change, provided a SAR is filed whenever a voucher is redeemed"
    ],
    answer: [2],
    explanation: "MLR reg. 19(4)(b) requires policies, controls and procedures that specify additional measures, where appropriate, to prevent the use for ML/TF of products and transactions that might favour anonymity, and reg. 19(4)(c) requires the risks of a new product to be assessed in preparation for its adoption. Cash funding, bearer-style transferability and untrained distribution points create anonymity regardless of the per-voucher value, so a low rating based only on value is the main error. Carrow remains responsible for its product, and blanket SARs are not a control.",
    source: [{ label: "Money Laundering Regulations 2017, reg. 19(4) (legislation.gov.uk)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/19" }]
  },
  {
    id: "NPAP-021", domain: 3, topic: "AML vendor onboarding: subcontractors in the supply chain (interagency TPRM guidance)", hy: false, difficulty: "hard",
    q: "Granite Falls Bank is onboarding Verilink, a vendor whose platform screens new customers against sanctions and PEP lists. During due diligence, the bank learns that Verilink buys its list data from Datafeed Ltd, a small subcontractor abroad that updates lists by hand once a day, and that Verilink's contract with Datafeed has no service levels. Verilink's own security certifications are current, and its pricing is competitive. The vendor manager wants to sign because 'our contract is with Verilink, not Datafeed'. What should the BSA officer recommend?",
    options: [
      "Sign now, because the bank's due diligence is limited to the party it contracts with directly",
      "Sign now, and add a clause making Verilink responsible for any sanctions violation caused by Datafeed",
      "Contract directly with Datafeed and stop using Verilink's list data in the screening platform",
      "Assess how Verilink oversees Datafeed and ensure the contract covers subcontractor performance, audits and update timeliness"
    ],
    answer: [3],
    explanation: "The 2023 Interagency Guidance on Third-Party Relationships expects due diligence and ongoing monitoring to consider a third party's reliance on subcontractors, and contracts commonly provide for audits of the third party and its relevant subcontractors; the use of third parties does not diminish the bank's own responsibility. List data updated by hand once a day without service levels is a direct sanctions-screening risk. Shifting liability by contract is the runner-up but does not remove the bank's exposure, and contracting with Datafeed directly is not required.",
    source: [{ label: "Interagency Guidance on Third-Party Relationships: Risk Management (88 FR 37920, June 2023)", url: "https://www.govinfo.gov/content/pkg/FR-2023-06-09/pdf/2023-12340.pdf" }]
  },
  {
    id: "NPAP-022", domain: 3, topic: "Data conversion error: customer risk ratings mis-mapped in a core migration", hy: true, difficulty: "hard",
    q: "Three weeks after Lakemont Bank, a New York-chartered bank, converted to a new core banking system, a data-quality check shows that a mapping error placed 3,100 customers rated 'high' in the old five-tier model into the 'medium' tier of the new three-tier model. Since then, the new system has skipped their enhanced monitoring scenarios and scheduled their next reviews 24 months out instead of 12. The vendor says the field mapping matched the bank's signed specification. The conversion project is due to close next week. What should the BSA officer do FIRST?",
    options: [
      "Identify the affected customers, restore their high-risk treatment and document the issue and the remediation plan",
      "Ask the vendor to correct the mapping in its next scheduled software release",
      "Close the project as planned and include the issue in the next annual risk assessment",
      "Re-run every customer through the onboarding process to refresh all risk ratings"
    ],
    answer: [0],
    explanation: "NYDFS Part 504.3(c) requires validation of the integrity, accuracy and quality of data so that complete and accurate data flows through monitoring, and Part 504.3(d) requires an institution to document areas needing material improvement and the remedial efforts planned and underway. The immediate priority is to put the 3,100 customers back under high-risk controls and record the remediation, after which the bank can assess whether a look-back over the three weeks is needed. Waiting for a vendor release or the annual assessment leaves the gap open, and re-onboarding everyone is disproportionate.",
    source: [{ label: "3 NYCRR Part 504.3(c)-(d) (text via Cornell LII)", url: "https://www.law.cornell.edu/regulations/new-york/3-NYCRR-504.3" }]
  },
  {
    id: "NPAP-023", domain: 3, topic: "AMLR: new products as a potentially higher-risk factor and pre-launch assessment", hy: false, difficulty: "medium",
    q: "An EU bank is preparing its procedures for the Anti-Money Laundering Regulation (EU) 2024/1624, which applies from 10 July 2027. Which statement about new products and technologies under the AMLR is CORRECT?",
    options: [
      "New products are exempt from the business-wide risk assessment for their first 12 months",
      "Every customer of a new product must automatically receive enhanced due diligence",
      "Obliged entities must assess ML/TF risks before launching new products or new technologies, and new products are a factor of potentially higher risk",
      "Only crypto-asset service providers must assess risks before using new technologies"
    ],
    answer: [2],
    explanation: "AMLR Article 10(1) requires obliged entities, prior to the launch of new products, services or business practices, including new delivery channels and new or developing technologies, to identify and assess the related ML/TF risks and take measures to manage and mitigate them. Annex III lists new products and business practices, new delivery mechanisms and new technologies among the factors of potentially higher risk, which feed into the risk assessment rather than triggering automatic EDD. The duty applies to all obliged entities, not only CASPs, and there is no grace period.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR), Art. 10(1) and Annex III", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }]
  },
  {
    id: "NPAP-024", domain: 3, topic: "Open banking: proportionate CDD for payment initiation and account information services", hy: false, difficulty: "medium",
    q: "Brightpath, a newly authorised AISP and PISP in Portugal, is drafting its CDD procedures. Its new compliance manager, Rui Matos, proposes collecting source-of-funds evidence and a video interview from every user before they can link an account, 'because open banking is a new technology'. The CEO worries this will kill the product. Which approach BEST reflects the EBA Risk Factors Guidelines?",
    options: [
      "Apply no CDD at all, because AISPs and PISPs never hold customers' funds",
      "Set CDD on a risk-sensitive basis, where simplified measures will usually be the norm, and monitor for unusual activity using the data available",
      "Apply enhanced due diligence to all users for the first year, then review the approach",
      "Rely entirely on the CDD performed by the users' account-servicing banks"
    ],
    answer: [1],
    explanation: "EBA Guideline 18.10 says AISPs and PISPs should determine the extent of CDD on a risk-sensitive basis and that, given the low inherent risk of these business models, simplified due diligence will be the norm in most cases; Guideline 18.11 requires their systems to alert them to unusual or suspicious activity using the data available to them with the user's consent. Blanket EDD is disproportionate, while doing no CDD ignores that they are obliged entities. Relying wholly on the account-servicing banks is not what the guideline provides.",
    source: [{ label: "EBA/GL/2021/02 ML/TF Risk Factors Guidelines, Guidelines 18.10-18.11", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }]
  },
  {
    id: "NPAP-025", domain: 3, topic: "Stablecoin issuer subsidiary of a bank: enterprise-wide AML program (FinCEN proposal, 2026)", hy: false, difficulty: "medium",
    changed: "FinCEN/OFAC PPSI AML/CFT and sanctions NPRM (April 2026) implementing the GENIUS Act",
    q: "Larchmont Bank, an insured depository institution, is setting up a subsidiary to become a permitted payment stablecoin issuer (PPSI). Its BSA officer wants to extend the bank's existing AML/CFT program to the subsidiary rather than build a separate one. According to FinCEN's April 2026 proposed rule implementing the GENIUS Act, which statement is MOST accurate?",
    options: [
      "A PPSI must always have a stand-alone program, with no shared policies, staff or systems",
      "Extending the bank's program is allowed, and the PPSI is then exempt from its own sanctions program",
      "A PPSI subsidiary is exempt from the BSA as long as its parent bank is examined for BSA compliance",
      "Extending one enterprise program is possible, but it must cover PPSI-specific duties such as the ability to block, freeze and reject transactions"
    ],
    answer: [3],
    explanation: "FinCEN's April 2026 proposal recognises enterprise-wide compliance and anticipates that a bank may extend a single AML/CFT program to a PPSI subsidiary, but says such programs must account for obligations unique to the PPSI, such as the statutory requirement to maintain technical capabilities, policies and procedures to block, freeze and reject impermissible transactions. The GENIUS Act treats PPSIs as financial institutions under the BSA, and OFAC's parallel proposal requires PPSIs to maintain an effective sanctions compliance program. Under the proposal, the rules would take effect 12 months after final rules are issued.",
    source: [{ label: "FinCEN/OFAC NPRM (April 2026) – PPSI AML/CFT and sanctions program requirements", url: "https://www.fincen.gov/system/files/2026-04/PPSI-AMLCFT-NPRM.pdf" }]
  }
]);
