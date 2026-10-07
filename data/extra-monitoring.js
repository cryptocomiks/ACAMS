// Practical cases: transaction monitoring and screening systems (batch 6, TMON). Written and source-checked October 2026.
(function () {
  var WMSA = { label: "Wolfsberg Group, Statement on Effective Monitoring for Suspicious Activity, Part I (2024)", url: "https://db.wolfsberg-group.org/assets/e3d83d2f-fad9-46d2-b5a9-3cf4e932f53f/Wolfsberg%20Group%20MSA%20Statement%20Part%20I.pdf" };
  var WSSG = { label: "Wolfsberg Guidance on Sanctions Screening (2019), sections 4.3 and 6.1", url: "https://db.wolfsberg-group.org/assets/4b6c2db6-696d-492e-bdd5-c51552708597/Wolfsberg%20Guidance%20on%20Sanctions%20Screening.pdf" };
  var WAI = { label: "Wolfsberg Principles for Using Artificial Intelligence and Machine Learning in Financial Crime Compliance (2022)", url: "https://db.wolfsberg-group.org/assets/ae8ec2d1-da45-4cef-b6c6-166e2cf17c03/Wolfsberg%20Principles%20for%20Using%20Artificial%20Intelligence%20and%20Machine%20Learning%20in%20Financial%20Crime%20Compliance.pdf" };
  var SR = { label: "Federal Reserve/OCC/FDIC, SR 26-2 attachment: Supervisory Guidance on Model Risk Management (17 April 2026)", url: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf" };
  var SRL = { label: "Federal Reserve, SR 26-2 cover letter (supersedes SR 11-7 and SR 21-8)", url: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm" };
  var FATF21 = { label: "FATF (July 2021), Opportunities and Challenges of New Technologies for AML/CFT (copy hosted by the Bank of Russia)", url: "https://www.cbr.ru/Content/Document/File/126302/OCNT.pdf" };
  var JS18 = { label: "Fed, FDIC, FinCEN, NCUA and OCC, Joint Statement on Innovative Efforts to Combat Money Laundering and Terrorist Financing (3 December 2018)", url: "https://www.fincen.gov/sites/default/files/2018-12/Joint%20Statement%20on%20Innovation%20Statement%20%28Final%2011-30-18%29_508.pdf" };
  var AIACT = { label: "Regulation (EU) 2024/1689 (AI Act), Art. 5(1)(d), recital 42 and Annex III point 5(b) (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32024R1689" };
  var FCAAI = { label: "FCA, AI Update (2024), paras 2.3 and 3.40-3.41", url: "https://www.fca.org.uk/publication/corporate/ai-update.pdf" };
  var N504 = { label: "NYDFS 3 NYCRR 504.3 – Transaction monitoring and filtering program requirements (Cornell LII)", url: "https://www.law.cornell.edu/regulations/new-york/3-NYCRR-504.3" };
  var FCTR = { label: "FCA Handbook FCTR 4.3 – Automated AML transaction monitoring systems: good practice", url: "https://handbook.fca.org.uk/handbook/FCTR/4/3.html" };

  window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "TMON-001", domain: 4, topic: "Below-the-line testing: why small threshold drops find little", hy: false, difficulty: "hard",
    q: "Harbourline Bank must run false-negative testing on its 'rapid movement of funds' scenario. The scenario alerts when at least 80% of an account's credits leave within 48 hours and monthly credits exceed EUR 25,000. Analyst Priya Nair proposes the usual method: lower both parameters by 10% (to 72% and EUR 22,500), sample the extra alerts, and report whether any are suspicious. Last year the bank's STRs on money mule networks came mostly from fraud referrals and law enforcement requests, not from this scenario. The scenario runs on the bank's new cloud data platform, and the bank launches a student account in January. According to the Wolfsberg Group's 2024 Statement on Effective Monitoring for Suspicious Activity, what is the MAIN weakness of Priya's plan?",
    options: [
      "Below-the-line testing should raise the parameters, not lower them, to find where false positives start to rise",
      "Testing should wait until the student account has launched, so that the sample reflects the new customer base",
      "Small drops in existing parameters rarely reveal much; below-the-line work can also test new challenger approaches",
      "False-negative testing is not needed while the scenario's alert-to-STR conversion rate is above the bank's target"
    ],
    answer: [2],
    explanation: "Wolfsberg notes that false-negative testing usually just drops the existing thresholds a little (for example 10% below the current value), and that such minor changes are unlikely to produce meaningful results. It says below-the-line reviews can instead test entirely new challenger models. The mule STRs that came from other sources point to a design gap that a 10% drop is unlikely to expose. Raising parameters is above-the-line testing, which finds where false positives grow. The runner-up, waiting for the student launch, only delays a test the existing risk already calls for, and a good conversion rate says nothing about missed activity.",
    source: [WMSA]
  },
  {
    id: "TMON-002", domain: 4, topic: "Below-the-line test finds suspicious activity: what to do first", hy: true, difficulty: "hard",
    q: "Copperfield Bank, a New York state-chartered bank, runs a cash-structuring scenario that alerts when a customer makes three or more cash deposits between USD 8,000 and USD 9,999 within 10 days. In a below-the-line test, analyst Marcus Lee reviews a sample of 60 customers who made only two such deposits, or three deposits between USD 7,000 and USD 7,999. He finds that 4 of them show clear structuring, including a used-car dealer who split USD 31,000 across four branches in two days. The scenario owner is on leave for three weeks, and the tuning committee next meets in December. What should Marcus do FIRST?",
    options: [
      "Refer the 4 customers for investigation and a SAR decision now, and document the result for the committee to recalibrate",
      "Lower the scenario threshold today so that similar activity alerts from tomorrow, and record the change afterwards",
      "Extend the sample to 300 customers to confirm the result is statistically significant before taking any action",
      "Record the 4 cases in the tuning report and leave them for the tuning committee to decide on in December"
    ],
    answer: [0],
    explanation: "Below-the-line testing exists to find activity the system may be missing (false negatives); once real suspicious activity is found, it goes through the normal investigation and reporting process without waiting for tuning governance. The threshold change itself should then follow documented, controlled change management, as NYDFS Part 504.3(c)(4) requires. The runner-up, changing the threshold at once, skips that governance and still leaves the 4 known cases unhandled. Extending the sample or waiting for December delays a possible SAR.",
    source: [WMSA, N504]
  },
  {
    id: "TMON-003", domain: 4, topic: "False negatives: learning from an STR that monitoring missed", hy: true, difficulty: "hard",
    q: "In March 2026 a teller at Ostrava Savings Bank reported that Kamil Novak, a retired customer, was withdrawing large amounts of cash and seemed to be coached by a man waiting outside. The investigation found that over seven months Kamil's account had received EUR 410,000 from 38 unrelated people and had sent most of it by instant payment to two crypto exchanges. The bank filed an STR. None of its automated scenarios had alerted on the account. The head of monitoring notes that no single payment exceeded any scenario threshold, and that the bank migrated to a new core system last year. What is the BEST next step for the monitoring team?",
    options: [
      "Lower every scenario threshold by 20% so that accounts with similar volumes alert in future",
      "Treat the case as a one-off, since the teller's referral shows the bank's controls worked as intended",
      "Ask the core system vendor to confirm the migration was complete before reviewing any scenarios",
      "Analyse why monitoring missed it, checking both data and scenario logic, and assess automated coverage"
    ],
    answer: [3],
    explanation: "Wolfsberg recommends assessing false negatives by analysing STRs that came from other sources, such as front-line referrals, with the aim of covering them through automated monitoring where possible. FCA guidance (FCTR 4.3) adds that monitoring supplements but does not replace staff awareness, and that firms should use analytical tools to find suspicious activity the system did not detect. The root cause could be data (the migration) or logic (no many-senders pattern), so both must be checked. Checking the migration alone, the runner-up, covers only half the question, and a blanket 20% cut adds alerts without targeting the gap.",
    source: [WMSA, FCTR]
  },
  {
    id: "TMON-004", domain: 4, topic: "Segmentation: static onboarding segments distorting percentile thresholds", hy: false, difficulty: "hard",
    q: "Lindqvist Bank sets its monitoring thresholds for each customer segment at the 95th percentile of that segment's monthly activity. Segments are fixed at onboarding from the customer type and stated occupation. A review finds that 1,200 accounts in the 'students' segment now behave like small businesses, receiving dozens of card-terminal and online marketplace payouts each month. Their activity has pushed the segment's 95th percentile for monthly credits from SEK 18,000 to SEK 64,000, so few student accounts now alert. The bank refreshes KYC for low-risk retail customers every five years, and the segment thresholds were last approved 14 months ago. Which change BEST addresses the root cause?",
    options: [
      "Set the student threshold back to SEK 18,000 and keep the onboarding-based segments unchanged",
      "Add behaviour-based segmentation that regularly re-clusters customers, then recalculate thresholds",
      "Bring forward the KYC refresh of all student accounts so that stated occupations can be updated",
      "Replace segment thresholds with one bank-wide threshold so that no segment can drift in this way"
    ],
    answer: [1],
    explanation: "Wolfsberg notes that static segments rely on outdated onboarding information and do not capture the activity customers actually share; it recommends combining known attributes with dynamic statistical clustering so segments stay current. Here misclassified business-like accounts distorted the segment's percentile threshold, and those accounts may also need a CDD review. The runner-up, resetting the threshold to SEK 18,000, leaves the business-like accounts in the student segment, where they would swamp it with alerts, and the drift would recur. A KYC refresh is slow and partial, and a single threshold for everyone is a step backwards.",
    source: [WMSA]
  },
  {
    id: "TMON-005", domain: 4, topic: "Data integrity: sudden fall in value-based alerts after a platform upgrade", hy: false, difficulty: "hard",
    q: "On 2 September 2026 Meridian Trust Bank upgraded its payments platform. In the next two weeks, alerts from its value-based scenarios fell by 92%, while its velocity scenarios, which count transactions, were unchanged. The daily reconciliation, which compares record counts between the payments platform and the monitoring system, shows no breaks. A business manager says the drop reflects the success of a recent customer exit programme. The monitoring vendor also released a new user interface that week. What should the monitoring team do FIRST?",
    options: [
      "Report the fall in alerts to the board as evidence that the customer exit programme reduced risk",
      "Ask the vendor to roll back its new user interface, which was released in the same week as the drop",
      "Reconcile transaction amounts, not just record counts, from source to the monitoring system",
      "Lower the thresholds of the value-based scenarios until alert volumes return to previous levels"
    ],
    answer: [2],
    explanation: "Only value-based scenarios dropped and the record counts match, which points to a defect in how amounts are loaded (for example decimal places or currency units). NYDFS Part 504.3(c) requires validation of data integrity and accuracy and complete, accurate transfer from source, and FCA guidance stresses understanding the data entering the system and analysing performance rule by rule. Lowering thresholds would hide the defect, and an exit programme would not affect only value-based rules. The runner-up, rolling back the user interface, targets a screen change that does not feed detection logic.",
    source: [N504, FCTR]
  },
  {
    id: "TMON-006", domain: 4, topic: "SR 26-2: using a validated fraud model for a new AML purpose", hy: true, difficulty: "hard",
    changed: "SR 26-2 replaced SR 11-7 and SR 21-8, April 2026",
    q: "Bayview National Bank ($85 billion in assets) has a validated machine-learning model that scores card transactions for fraud. To cut its AML alert backlog, the operations team wants to use the same fraud score to close transaction monitoring alerts automatically for customers scoring below 0.2. The model was trained on confirmed card fraud losses and performs well against that objective. The vendor says no further review is needed because the code will not change. Internal audit reviewed the bank's model risk management last year and rated it satisfactory. Under the interagency model risk guidance issued in April 2026 (SR 26-2), what is the BEST response?",
    options: [
      "Treat it as a new use: analyse whether the score is valid for closing AML alerts and review controls first",
      "Approve the change, because the model is already validated and its code and data will stay the same",
      "Ask internal audit to validate the new use, since it reviewed model risk management only last year",
      "Approve the change once the vendor confirms in writing that the model meets industry standards"
    ],
    answer: [0],
    explanation: "SR 26-2 says using a model beyond its intended purpose adds uncertainty and risk, and that sound practice is extra analysis of the new use and its limits plus a review of controls; even a sound model can carry high model risk if misapplied. A score trained on card fraud losses is not evidence that an AML alert is unsuspicious. The runner-up relies on the old validation, which covered a different purpose. Internal audit should assess model risk management, not perform validations. SR 26-2 (17 April 2026) superseded SR 11-7 and SR 21-8.",
    source: [SR, SRL]
  },
  {
    id: "TMON-007", domain: 4, topic: "ML 'booster' alert scoring: prioritising instead of blind auto-closure", hy: true, difficulty: "hard",
    q: "Fenwick Bank's rules generate about 30,000 alerts a month, of which 1% are escalated, and a backlog of 22,000 alerts has built up. The bank builds a machine-learning 'booster' model that scores each rule alert. The project sponsor proposes closing every alert scored below 0.15 automatically, with no human review or later checks, which would remove 65% of alerts. In back-testing on 18 months of data, those low-scored alerts included 11 cases that had led to SARs, mostly involving trade-related payments. The model uses transaction data only. Which approach is MOST consistent with FATF and Wolfsberg guidance?",
    options: [
      "Retire the rules and let the model generate alerts directly, since it is more accurate than the rules",
      "Approve auto-closure as proposed, since 11 missed SARs among many thousands of alerts is acceptable",
      "Reject the model and clear the backlog only by hiring enough investigators to review every alert",
      "Use the score to prioritise alerts, with human review of higher risk and tested samples of low scores"
    ],
    answer: [3],
    explanation: "Wolfsberg describes ML used as a booster to augment rules, and FATF (2021) says monitoring technology should be integrated with wider systems that keep human analysis for higher-risk alerts, with explainability and auditability. Sampling the low-scored population and fixing the trade-related blind spot keeps the model under control. The runner-up, blanket auto-closure, misreads Wolfsberg: it accepts that chasing 100% recall is ineffective, but not an unmonitored cut-off that misses a whole cluster of SARs. Retiring the rules goes beyond what the evidence supports, and rejecting the model ignores a useful prioritisation tool.",
    source: [FATF21, WMSA]
  },
  {
    id: "TMON-008", domain: 4, topic: "Unsupervised vs supervised ML for customer grouping", hy: false, difficulty: "medium",
    q: "A payment institution has no reliable history of confirmed suspicious cases to label its data. It wants a machine-learning technique that groups customers into cohesive groups based on their actual behaviour, so that it can set monitoring thresholds for each group. According to the FATF's 2021 report on new technologies for AML/CFT, which technique fits this purpose?",
    options: [
      "Supervised learning trained on the institution's past STRs as positive labels",
      "Unsupervised learning that clusters customers by their observed behaviour",
      "Natural language processing applied to the customers' payment references",
      "Robotic process automation that copies customer data into the monitoring tool"
    ],
    answer: [1],
    explanation: "FATF (2021, Box 8) says unsupervised ML algorithms can group customers into cohesive groupings based on behaviour, so that controls such as transaction thresholds can be set on a risk basis. Supervised learning needs labelled historical outcomes, which this institution lacks. NLP analyses text, and RPA automates repetitive tasks without learning from data.",
    source: [FATF21, WMSA]
  },
  {
    id: "TMON-009", domain: 4, topic: "Case management: reviewing alerts at customer level, not one by one", hy: false, difficulty: "medium",
    q: "Over four months, three analysts at Alder Street Bank each closed one alert on Rosa Imbert, a self-employed florist. The first, a spike in cash deposits, was closed as 'seasonal (Valentine's Day)'. The second, incoming wires from a Panamanian company, was closed as a 'supplier refund', and the third, rapid transfers to a new personal account abroad, as 'family support'. Each analyst saw only the alert in front of them, because the case management system shows alerts one at a time and does not link earlier alerts on the same customer. The QA team sampled the third alert and rated it a pass. What is the BEST improvement?",
    options: [
      "Raise the thresholds of the three scenarios, since the customer's explanations were accepted each time",
      "Require written evidence from the customer for every alert before any analyst may close it",
      "Link alerts at customer level so analysts review the full alert history and profile together",
      "Add a second analyst review to every closed alert so that two people agree on each decision"
    ],
    answer: [2],
    explanation: "Alerts that each look explainable can together show a suspicious pattern, which only a customer-level view reveals. Wolfsberg encourages monitoring platforms that link customer, account and transaction data (entity resolution) to give a contextual view of the customer and support analysis of their overall behaviour. A second reviewer would still see each alert in isolation, at double the cost. Raising thresholds and demanding documents for every alert do not fix the missing context.",
    source: [WMSA, FCTR]
  },
  {
    id: "TMON-010", domain: 4, topic: "Network analytics for laundromat-type risk invisible at customer level", hy: false, difficulty: "hard",
    q: "Vesna Bank has 4,000 small corporate trading companies, each with modest, steady activity that rarely alerts. After reading about past 'laundromat' schemes, the head of financial crime asks how the bank would know if hundreds of these companies were part of one scheme. A sample review shows that many use the same two company formation agents, are registered at a handful of addresses, and trade mostly with each other through accounts at the bank. Each company's activity, on its own, fits its declared profile. The bank's annual risk assessment rates the segment as medium risk. Which approach does the Wolfsberg Group's 2024 monitoring statement support?",
    options: [
      "An enterprise-wide exercise using entity resolution and network analytics to find anomalies across relationships",
      "Lower each customer's scenario thresholds until more of the trading companies begin to generate alerts",
      "Apply EDD at each company's next periodic review and rely on reviewers to notice the shared agents",
      "Re-rate the segment as high risk and exit every company introduced by the two formation agents"
    ],
    answer: [0],
    explanation: "Wolfsberg says FIs should run holistic risk identification across the business to find idiosyncratic, large-scale risks such as laundromats, mirror trading and mule networks, including 'stress tests' for anomalies that monitoring of individual relationships cannot see. It also highlights entity resolution and graph networks. The runner-up, EDD at periodic reviews, still looks at one company at a time and may take years. Lowering thresholds adds noise without the network view, and blanket exits are de-risking without analysis.",
    source: [WMSA]
  },
  {
    id: "TMON-011", domain: 4, topic: "Instant payments: real-time scoring vs overnight batch monitoring", hy: true, difficulty: "hard",
    q: "Since Kestrel Bank joined its country's 24/7 instant payment scheme, mule accounts have been receiving fraud proceeds and passing them on within minutes. The bank's transaction monitoring runs as an overnight batch, so mule alerts arrive the next morning, after the money has gone. The bank already screens each payment's parties against sanctions lists in real time. Last quarter, 70% of confirmed mule accounts had moved over 90% of the funds they received within an hour. Which change would BEST address this weakness?",
    options: [
      "Run the overnight batch twice a day, so that mule alerts reach investigators by early afternoon",
      "Add real-time scoring that can hold high-risk outbound instant payments, keeping batch monitoring",
      "Add known mule names to the real-time sanctions filter so that it also stops mule payments",
      "Withdraw instant payments from retail customers until the batch system has been replaced"
    ],
    answer: [1],
    explanation: "FATF (2021) notes that AI/ML tools can help separate suspicious from normal activity in real time, and Wolfsberg says legacy tools struggle with faster payments and that some detective controls can be made preventive. Pre-execution scoring of outbound payments can stop funds before they leave, while batch monitoring still finds wider patterns. The runner-up, running the batch twice a day, still acts after execution, when most funds are gone within an hour. A sanctions filter catches only names already known, and withdrawing the product is disproportionate.",
    source: [FATF21, WMSA]
  },
  {
    id: "TMON-012", domain: 4, topic: "US 2018 joint statement on innovative AML efforts", hy: true, difficulty: "medium",
    q: "The board of a US community bank asks its BSA officer what the December 2018 Joint Statement on Innovative Efforts to Combat Money Laundering and Terrorist Financing, issued by the federal banking agencies and FinCEN, means for the bank. Which statements accurately reflect the joint statement? (Choose two.)",
    options: [
      "Banks must adopt AI-based transaction monitoring by a deadline that each agency will set",
      "Banks with effective, risk-based programs will not be penalized for choosing not to innovate",
      "A bank running an innovation pilot is exempt from filing SARs on activity the pilot identifies",
      "Implementing an innovative approach will bring additional regulatory expectations for the bank",
      "FinCEN will consider exceptive relief to help test new technologies if programs stay effective"
    ],
    answer: [1, 4],
    explanation: "The agencies said they will not penalize or criticize banks that keep effective BSA/AML programs but choose not to innovate, and that FinCEN will consider exceptive relief under 31 CFR 1010.970 to facilitate testing, provided overall program effectiveness is maintained. The statement says innovative approaches will NOT result in additional regulatory expectations, and that banks must keep meeting their BSA obligations, including SAR filing, during pilots. No technology is mandated.",
    source: [JS18]
  },
  {
    id: "TMON-013", domain: 4, topic: "EU AI Act and AML monitoring models", hy: true, difficulty: "hard",
    q: "Aurelia Bank, based in Italy, uses an in-house machine-learning model that scores customers' transactions and raises alerts for human investigators, who decide whether to file a suspicious transaction report. Its data protection officer asks how the EU Artificial Intelligence Act (Regulation (EU) 2024/1689) affects this model. The bank also uses a separate AI model to set credit scores for consumer loans, and its marketing team uses a chatbot. Which statement about the AML monitoring model is MOST accurate?",
    options: [
      "It is a prohibited practice, because it predicts the risk that a natural person will commit an offence",
      "It is automatically high-risk, because Annex III covers every AI system a bank uses to assess persons",
      "It is not banned: the crime-prediction ban excludes transaction-based analytics that support humans",
      "It is outside the Act entirely, because the Act does not apply to AI used by credit institutions"
    ],
    answer: [2],
    explanation: "Article 5(1)(d) bans AI risk assessments that predict a person's offending based solely on profiling or personality traits, but not AI that supports human assessment based on objective, verifiable facts; recital 42 adds that the ban does not touch risk analytics such as assessing the likelihood of financial fraud from suspicious transactions. The runner-up confuses this model with credit scoring: Annex III point 5(b) makes creditworthiness and credit-scoring AI high-risk (except fraud detection), so it is the loan model, not the AML model, that is listed. The Act does apply to banks as deployers, for example its AI literacy duty in Article 4.",
    source: [AIACT]
  },
  {
    id: "TMON-014", domain: 4, topic: "UK: FCA approach to AI in financial crime systems", hy: false, difficulty: "medium",
    q: "Thameside Bank, a UK bank under the Senior Managers and Certification Regime (SM&CR), plans to replace its transaction monitoring rules with a machine-learning model. A board member says the bank must first wait for the FCA to publish AI-specific rules, and must create a new senior manager function dedicated to AI. According to the FCA's 2024 AI Update, which response is MOST accurate?",
    options: [
      "The FCA has issued AI-specific rules that require every bank to appoint a dedicated AI senior manager",
      "The FCA does not supervise firms' use of AI, which is left to the Information Commissioner's Office",
      "Machine learning cannot be used in monitoring until the FCA has approved each model before go-live",
      "The FCA is technology-agnostic: existing rules such as SYSC and SM&CR apply, and an SMF owns the use"
    ],
    answer: [3],
    explanation: "The FCA describes itself as a technology-agnostic, principles-based and outcomes-focused regulator. It notes that respondents considered existing governance and the SM&CR sufficient to address AI risks, so no dedicated AI senior manager is required, and that any use of AI in an activity or function falls within an existing SMF manager's responsibilities. The FCA does not pre-approve models, and it does supervise firms' AI use alongside other regulators.",
    source: [FCAAI]
  },
  {
    id: "TMON-015", domain: 4, topic: "FATF 2021: obstacles to adopting new AML/CFT technology", hy: false, difficulty: "medium",
    q: "According to the FATF's July 2021 report 'Opportunities and Challenges of New Technologies for AML/CFT', which are key obstacles to adopting new technologies for AML/CFT? (Choose two.)",
    options: [
      "The complexity and cost of replacing or updating legacy AML/CFT systems",
      "A FATF Standard that prohibits machine learning in customer due diligence",
      "Difficulties with the explainability and interpretability of digital solutions",
      "The absence of any technology able to analyse transactions closer to real time",
      "A FATF requirement to remove human review once AI-based tools are in use"
    ],
    answer: [0, 2],
    explanation: "The report's executive summary names the complexity and cost of replacing or updating legacy systems, and difficulties with explainability and interpretability, as key challenges, along with cost-benefit doubts and limited expertise. It says technology can help manage risks closer to real time, and that manual review and human input remain very important. No FATF Standard prohibits machine learning.",
    source: [FATF21]
  },
  {
    id: "TMON-016", domain: 4, topic: "Sanctions list update delays: look-back over the gap", hy: true, difficulty: "hard",
    q: "At 16:00 on Thursday a sanctions authority adds Norvik Marine Services to its list. Halden Bank's screening vendor delivers list updates every 24 hours, and the bank loads them into its filter after an overnight test, so the new name goes live at 09:00 on Saturday. On Friday the bank processed two outgoing payments to Norvik Marine Services. It also opened an account for a new customer who names Norvik as his employer. The bank rescreens its whole customer database against the full list once a month. What is the BEST response?",
    options: [
      "Take no further action, because the bank applied the vendor update within its normal service level",
      "Rescreen the customer database at the next monthly run, when the new name will already be included",
      "Review payments and new relationships since the listing, act on matches, and cut the load delay",
      "Ask the sanctions authority whether a general licence covers the two Friday payments before checking"
    ],
    answer: [2],
    explanation: "Wolfsberg says FIs should manage delays between regulatory list updates and vendor updates, and that the key priority when new designations are published is to get the names into screening as quickly and accurately as possible; screening should also be repeated when list information changes. Payments processed after the listing need a look-back so the bank can freeze, reject or report as the rules require, and the root cause (the delay) must be fixed. The runner-up, waiting for the monthly rescreen, leaves the Friday payments unexamined, and naming Norvik as an employer is a lead to assess, not a match in itself.",
    source: [WSSG]
  },
  {
    id: "TMON-017", domain: 4, topic: "Coverage gap: an over-broad exclusion of internal transfer codes", hy: false, difficulty: "hard",
    q: "When Granite Peak Bank, a New York-chartered bank, configured its monitoring system in 2021, it excluded 'internal book transfers' (transaction code BT) from all scenarios to stop alerts on customers moving money between their own accounts. A 2026 review finds that code BT is also used for transfers between different customers, which now make up 18% of retail payment value since the launch of a mobile 'pay a friend' feature. A law enforcement request shows that a fraud ring moved money between 40 of the bank's customers this way. The exclusion was approved by the head of IT, and the data feed reconciles fully. What should the bank do?",
    options: [
      "Limit the exclusion to same-owner transfers, monitor transfers between customers, and look back",
      "Keep the exclusion, since the data feed reconciles and the change was formally approved at the time",
      "Remove the exclusion completely, so that transfers between a customer's own accounts also alert",
      "Investigate the 40 customers named and revisit the exclusion at the next annual scenario review"
    ],
    answer: [0],
    explanation: "NYDFS Part 504.3 requires monitoring to be based on the risk assessment and to match risks to products, to cover all data sources with relevant data, and to govern changes so they are defined, controlled and audited; an IT-only approval of a scope exclusion falls short. A feed that reconciles proves data arrived, not that scenarios look at it. The runner-up handles the known 40 customers but leaves the gap open for up to a year, and dropping the exclusion entirely would flood analysts with alerts on own-account moves.",
    source: [N504]
  },
  {
    id: "TMON-018", domain: 4, topic: "Linking CDD and monitoring: de-prioritising, not auto-closing, alerts", hy: false, difficulty: "hard",
    q: "In August 2026 Saltmarsh Bank completes a full periodic CDD review of Okafor Logistics Ltd, confirming its owners, an expected turnover of about GBP 2 million a year, and its main suppliers in Nigeria and the Netherlands. In September a scenario alerts on GBP 240,000 of incoming payments from three UAE companies, none of which appear in the CDD file. An operations manager proposes a rule that automatically closes any alert on a customer whose CDD review was completed in the last 90 days, because 'we already know them'. Which approach is MOST consistent with the Wolfsberg Group's 2024 monitoring statement?",
    options: [
      "Adopt the auto-closure rule, since a recent CDD review confirms the customer's activity is legitimate",
      "Use a recent CDD review as one factor in prioritising alerts, but review activity the file does not explain",
      "Ignore CDD reviews when handling alerts, since monitoring and due diligence must be kept separate",
      "Close this alert, and add the UAE companies to the customer's file at the next periodic review"
    ],
    answer: [1],
    explanation: "Wolfsberg encourages data exchange between periodic or perpetual CDD and monitoring: a recent CDD review might be a consideration in de-prioritising an alert, and an alert investigation could be a reason to postpone a periodic review. De-prioritising is not closing: these payments come from counterparties the fresh profile does not explain. The runner-up, keeping CDD and monitoring apart, throws away the context Wolfsberg says should be shared, and auto-closure would hide exactly this kind of change.",
    source: [WMSA]
  },
  {
    id: "TMON-019", domain: 4, topic: "Tuning by value of output, not conversion rate: national priority scenario", hy: false, difficulty: "hard",
    q: "Kingsbridge Bank's tuning team reviews a scenario for 'cash deposits followed by payments to online adult-services platforms', built after the national FIU named human trafficking a priority. In 12 months it produced 900 alerts and only 6 STRs, a 0.7% conversion rate against a bank-wide average of 4%. The FIU and police told the bank directly that 4 of the 6 STRs helped identify trafficking victims. A cash-structuring scenario with a 9% conversion rate has never received any feedback. The team proposes retiring the trafficking scenario to free capacity. What is the BEST decision?",
    options: [
      "Retire it, since its conversion rate is far below the bank's average and capacity is limited",
      "Retire it but keep the six customers under enhanced monitoring for another twelve months",
      "Keep it unchanged and add more scenarios for the same typology to increase red-flag coverage",
      "Keep it, since feedback shows high-value output on a national priority, and tune out false positives"
    ],
    answer: [3],
    explanation: "Wolfsberg says conversion ratios measure the quantity, not the usefulness, of information, that direct feedback from authorities is the best indicator of STR value, and that monitoring should align with national priorities; decisions to keep or stop routines should weigh productivity data and the demonstrated value of STRs. Here the value is proven, so the right response is to tune for precision rather than retire. The runner-up, adding more scenarios, repeats the coverage-for-its-own-sake approach Wolfsberg criticises, and retiring the scenario discards proven value.",
    source: [WMSA]
  },
  {
    id: "TMON-020", domain: 4, topic: "Champion-challenger testing: designing a fair comparison", hy: true, difficulty: "hard",
    q: "Westbrook Bank wants to test a retrained machine-learning model (the challenger) against its production model (the champion) for detecting money mule accounts. Which design choices will make the comparison MOST reliable and defensible? (Choose two.)",
    options: [
      "Test the challenger on a different six-month period from the champion, so each is judged on fresh data",
      "Judge the winner mainly by which model produces fewer alerts, since fewer alerts means lower cost",
      "Run both models on the same population and period, and compare them with the same confirmed outcomes",
      "Ignore alerts raised only by the challenger, since the champion stays the model of record during testing",
      "Agree success criteria in advance, including recall, precision and the value of outputs beyond STR counts"
    ],
    answer: [2, 4],
    explanation: "Champion-challenger testing runs models side by side (Wolfsberg glossary), and SR 26-2 describes outcomes analysis as comparing model outputs with real-world outcomes, which is only fair when both models see the same data. Wolfsberg also stresses choosing the right success criteria and high-value outcomes beyond STR counts. Different periods make the results incomparable, alert volume alone ignores missed cases, and challenger-only alerts may reveal real suspicious activity that must be worked.",
    source: [WMSA, SR]
  },
  {
    id: "TMON-021", domain: 4, topic: "Model testing: overfitting exposed by out-of-sample testing", hy: false, difficulty: "medium",
    q: "A vendor shows Rowan Bank a machine-learning monitoring model that correctly flagged 99% of past suspicious cases in the data it was trained on. The bank's validators then run it on a 30% holdout sample from the same period, which was set aside and not used in training. On the holdout sample it catches only 41% of the confirmed cases. Which problem does this MOST likely show, and which test exposed it?",
    options: [
      "Overfitting, exposed by out-of-sample testing on held-out data",
      "Model drift, exposed by the vendor's in-sample accuracy report",
      "Automation bias, exposed by investigators' reviews of the alerts",
      "A data lineage failure, exposed by reconciling record counts"
    ],
    answer: [0],
    explanation: "Wolfsberg defines overfitting as a model memorising its training data too well and performing poorly on new data; SR 26-2 lists out-of-sample and out-of-time testing among model development tests. Drift means performance decaying over time as conditions change, but here the holdout comes from the same period. Automation bias concerns human reviewers, and nothing here suggests missing records.",
    source: [WMSA, SR]
  },
  {
    id: "TMON-022", domain: 4, topic: "AI transparency without enabling evasion (Wolfsberg AI/ML principles)", hy: false, difficulty: "hard",
    q: "Bellmont Bank uses a machine-learning model to monitor accounts. After an alert, it asked its customer Daniel Reyes to explain several large transfers; he provided invoices and no report was filed. Daniel now writes asking for 'the exact rules, features and score thresholds that flagged me', so that he can 'avoid triggering the system again'. The bank's website says nothing about its use of AI in financial crime controls. Separately, a journalist asks whether the bank uses AI to detect money laundering. Which response is MOST consistent with the Wolfsberg Principles for Using AI and Machine Learning in Financial Crime Compliance?",
    options: [
      "Give Daniel the model's features and thresholds, since the principles require full transparency",
      "Refuse to confirm to anyone, including the journalist, that the bank uses AI in these controls",
      "Be open in general terms about using AI/ML, without disclosing logic that could help evasion",
      "Tell Daniel the alert was an error and that his account is no longer monitored automatically"
    ],
    answer: [2],
    explanation: "Wolfsberg's 'openness and transparency' principle says FIs should be open about their use of AI/ML, consistent with law and regulation, but must ensure that transparency does not help evasion or breach reporting confidentiality or data protection duties; it also suggests educating customers. Disclosing exact features and thresholds would show Daniel how to avoid detection. The runner-up, refusing to confirm any AI use at all, goes too far the other way and ignores the openness the principle asks for. Telling Daniel he is no longer monitored would be untrue.",
    source: [WAI]
  },
  {
    id: "TMON-023", domain: 3, topic: "Risk assessment to scenario coverage: closing a newly identified gap", hy: false, difficulty: "hard",
    q: "The 2026 business-wide risk assessment of Northfield Bank, a New York-chartered bank, adds a new high inherent risk: trade-based money laundering through its growing book of 300 import-export customers, most of whom use open-account trade rather than letters of credit. The compliance officer, Amara Osei, finds that no monitoring scenario was designed for this risk; the cash and wire scenarios cover these customers only generically. The board approved the assessment in June, and the bank will choose a new monitoring vendor next year. Trade finance staff check documents for letters of credit, which make up 10% of the book. What should Amara do FIRST?",
    options: [
      "Wait for the new vendor, whose standard scenario library will include trade-based scenarios",
      "Map the risk to current controls, record the gap, and agree interim and lasting fixes with owners",
      "Lower the generic wire thresholds for all customers until trade customers start to generate alerts",
      "Lower the risk to medium in the assessment, since documents are already checked for letters of credit"
    ],
    answer: [1],
    explanation: "NYDFS Part 504.3 requires a monitoring program based on the risk assessment that matches risks to the bank's businesses, products and customers, and requires documented remedial plans where areas need material improvement. Amara should first establish what currently covers the risk, record the gap, and set interim measures (such as targeted reviews) and permanent ones with accountable owners. The runner-up, lowering wire thresholds across the board, creates noise without targeting trade patterns. Waiting a year leaves the risk uncovered, and downgrading the rating to fit the controls reverses the logic of the assessment.",
    source: [N504, WMSA]
  },
  {
    id: "TMON-024", domain: 3, topic: "QA of alert closures: acting on an analyst's failed sample", hy: false, difficulty: "medium",
    q: "Brightwater Bank's financial crime QA team re-reviews a random 5% sample of the alerts closed each month. In September it finds that one analyst, Tom, closed 3 of his 12 sampled alerts with the note 'activity consistent with profile', although each showed payments to high-risk jurisdictions that his notes did not address. One involved EUR 95,000 sent to a newly incorporated company abroad. Tom joined the team four months ago and has the highest closure rate in the team. The team's overall QA pass rate this month is 96%, above target. What should the QA lead do?",
    options: [
      "Take no action, since the team's overall pass rate of 96% is above the agreed target",
      "Give Tom feedback on the three alerts and apply the normal 5% sample to him next month",
      "Reopen only the EUR 95,000 alert, since the other two failed alerts involved smaller amounts",
      "Reopen the failed alerts, widen the review to Tom's other closures, and fix training and causes"
    ],
    answer: [3],
    explanation: "FCA guidance expects staff who review alerts to have the right skills and to be subject to effective operational control and quality assurance. A 25% failure rate in one analyst's sample, plus an unusually high closure rate, suggests his unsampled closures may also be wrong, so the failed alerts must be reopened, his other work reviewed and the cause fixed. Feedback alone, the runner-up, leaves possibly suspicious activity unreported, and the team average hides the individual problem.",
    source: [FCTR]
  },
  {
    id: "TMON-025", domain: 3, topic: "Turning a detective control into a preventive one", hy: false, difficulty: "hard",
    q: "Riverton Bank's analysis of two years of STRs shows that, according to police feedback, its most valuable reports involved outgoing payments to shell companies registered in two particular offshore jurisdictions. These payments were typically sent by newly onboarded corporate customers within 60 days of account opening. The scenario that detects this pattern works well, but alerts are reviewed up to 10 days after payment, when the funds are usually gone. Many of the bank's long-standing corporate customers trade legitimately with established companies in those jurisdictions. Which programme change is BEST supported by the Wolfsberg Group's 2024 monitoring statement?",
    options: [
      "Add a preventive control that holds payments matching this pattern until reviewed and found legitimate",
      "Exit every customer that sends payments to the two jurisdictions, however long the relationship",
      "Keep the current scenario and add staff so that its alerts are reviewed within five days, not ten",
      "Lower the scenario thresholds so that it alerts on all payments to the two jurisdictions"
    ],
    answer: [0],
    explanation: "Wolfsberg says that understanding the risks behind high-value outputs can let FIs turn some detective controls into preventive ones, giving the example of blocking transactions involving shell companies registered in specific jurisdictions until they are reviewed and considered legitimate. A control aimed at this specific pattern avoids catching legitimate long-standing traders. The runner-up, faster review, still acts after the money has left, and exiting customers wholesale is de-risking.",
    source: [WMSA]
  }
  ]);
})();
