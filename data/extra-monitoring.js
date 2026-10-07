// Practical cases: transaction monitoring and screening systems (batch 6, TMON). Written and source-checked October 2026.
(function () {
  var WMSA = { label: "Wolfsberg Group, Statement on Effective Monitoring for Suspicious Activity, Part I (2024)", url: "https://db.wolfsberg-group.org/assets/e3d83d2f-fad9-46d2-b5a9-3cf4e932f53f/Wolfsberg%20Group%20MSA%20Statement%20Part%20I.pdf" };
  var WSSG = { label: "Wolfsberg Guidance on Sanctions Screening (2019), sections 4.3 and 6.1", url: "https://db.wolfsberg-group.org/assets/4b6c2db6-696d-492e-bdd5-c51552708597/Wolfsberg%20Guidance%20on%20Sanctions%20Screening.pdf" };
  var WAI = { label: "Wolfsberg Principles for Using Artificial Intelligence and Machine Learning in Financial Crime Compliance (2022)", url: "https://db.wolfsberg-group.org/assets/ae8ec2d1-da45-4cef-b6c6-166e2cf17c03/Wolfsberg%20Principles%20for%20Using%20Artificial%20Intelligence%20and%20Machine%20Learning%20in%20Financial%20Crime%20Compliance.pdf" };
  var SR = { label: "Federal Reserve/OCC/FDIC, SR 26-2 attachment: Supervisory Guidance on Model Risk Management (17 April 2026)", url: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf" };
  var SRL = { label: "Federal Reserve, SR 26-2 cover letter (supersedes SR 11-7 and SR 21-8)", url: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm" };
  var FATF21 = { label: "FATF (July 2021), Opportunities and Challenges of New Technologies for AML/CFT (executive summary paras 6-7, para. 15 and Box 8)", url: "https://www.fatf-gafi.org/en/publications/Digitaltransformation/Opportunities-challenges-new-technologies-for-aml-cft.html" };
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
    explanation: "Below-the-line testing exists to find activity the system may be missing (false negatives); once real suspicious activity is found, it goes through the normal investigation and reporting process without waiting for tuning governance. Under 31 CFR 1020.320(b)(3) a bank must file a SAR within 30 calendar days of initially detecting facts that may be a basis for filing, so the clock does not wait for a committee. The threshold change itself should then follow documented, controlled change management, as NYDFS Part 504.3(c)(4) requires. The runner-up, changing the threshold at once, skips that governance and still leaves the 4 known cases unhandled. Extending the sample or waiting for December delays a possible SAR.",
    source: [WMSA, N504, { label: "31 CFR 1020.320 – Reports by banks of suspicious transactions (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.320" }]
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
    id: "TMON-004", domain: 4, topic: "Feeding investigation and SAR findings back into monitoring", hy: false, difficulty: "hard",
    q: "Investigators at Lindqvist Bank write detailed case narratives. A review of last year's 140 STRs finds that 23 of them name the same three overseas payment agents and the same handful of mobile phone numbers, but this information sits only in closed case files. The monitoring system uses only transaction data and customer static data, so customers who later deal with those agents or use those numbers are treated like any other customer. The head of monitoring wants the next investment to make better use of what investigators have already found. Which approach does the Wolfsberg Group's 2024 monitoring statement support?",
    options: [
      "Extract entities and patterns from case narratives and STRs into monitoring, to raise risk scores and find links",
      "Write one new rule for each of last year's STRs, so that no pattern from a past STR can be missed again",
      "Wait for formal FIU feedback on the 23 STRs before using any of the information they contain in monitoring",
      "Leave the information in the case files and rely on the annual risk assessment to pick up the trend"
    ],
    answer: [0],
    explanation: "Wolfsberg says FIs should consider feeding information from case investigations and SAR/STR filings back into monitoring platforms, for example by using technology to extract information from case narratives to identify emerging risk patterns. That information can inform future detection, raise the risk score of suspicious entities and reveal previously unknown relationships. The runner-up, one rule per past STR, is the 'no SAR/STR left behind' approach that Wolfsberg says leads to over-alerting and ineffective programmes. Authority feedback is valuable, but the bank does not need it before using its own investigative findings, and an annual risk assessment is too slow and too general to act on specific agents and numbers.",
    source: [WMSA]
  },
  {
    id: "TMON-005", domain: 4, topic: "UK: automated monitoring does not replace staff suspicion reporting", hy: false, difficulty: "hard",
    q: "Meridian Trust Bank, a UK bank, goes live with a new automated transaction monitoring system in September 2026. To fund the project, the operations director proposes three savings: stopping AML training for branch and contact-centre staff, withdrawing the internal form that staff use to report suspicions to the nominated officer, and moving the two-person internal-referral team to alert review. He argues that the new system 'sees every transaction' and that last year's high share of SARs from staff referrals (30%) only reflected the weakness of the old system. Which response is MOST consistent with FCA guidance and UK law?",
    options: [
      "Approve all three savings, since the automated system now reviews every transaction the bank processes",
      "Keep staff training and the referral route resourced, since monitoring supplements but does not replace staff",
      "Withdraw the internal form but keep the training, since staff can still mention suspicions to their line manager",
      "Approve the savings for one year, then compare SAR numbers with last year before deciding whether to reverse them"
    ],
    answer: [1],
    explanation: "FCA guidance (FCTR 4.3.2) lists as good practice the continued allocation of sufficient resources to make manual internal suspicion reporting effective, because transaction monitoring can supplement, but not replace, human awareness in day-to-day business. The law points the same way: the MLRs 2017 (reg. 24) require relevant employees to be regularly trained to recognise and deal with possible money laundering, and POCA s.330 makes it an offence for regulated-sector staff not to disclose knowledge or suspicion to the nominated officer or the NCA, so staff need a clear route to the nominated officer. The runner-up, keeping training but dropping the form, leaves suspicions with line managers, who are not the nominated officer. A one-year trial removes controls that a 30% share of SARs shows are working.",
    source: [FCTR, { label: "Proceeds of Crime Act 2002, s.330 – failure to disclose: regulated sector (legislation.gov.uk)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/330" }, { label: "Money Laundering Regulations 2017, reg. 24 – training (legislation.gov.uk)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/24" }]
  },
  {
    id: "TMON-006", domain: 4, topic: "SR 26-2: using a validated fraud model for a new AML purpose", hy: true, difficulty: "hard",
    changed: "SR 26-2 replaced SR 11-7 and SR 21-8, April 2026",
    q: "Bayview National Bank ($85 billion in assets) has a validated machine-learning model that scores card transactions for fraud. To cut its AML alert backlog, the operations team wants to use the same fraud score to close transaction monitoring alerts automatically for customers scoring below 0.2. The model was trained on confirmed card fraud losses and performs well against that objective. The model's vendor says no further review is needed because the code will not change. Internal audit reviewed the bank's model risk management last year and rated it satisfactory. Under the interagency model risk guidance issued in April 2026 (SR 26-2), what is the BEST response?",
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
    id: "TMON-007", domain: 4, topic: "ML models and typology coverage: evidencing performance against crystallised risk", hy: true, difficulty: "hard",
    q: "Fenwick Bank has replaced most of its monitoring rules with a machine-learning model that scores customers on about 200 behavioural features. Internal audit asks for the bank's usual 'typology coverage map', which links each red flag in published guidance to the rule that detects it. The model team explains that no single feature corresponds to one red flag. The head of compliance proposes rebuilding a rule for every published red flag and running those rules beside the model, mainly so that the map can be completed. Which approach does the Wolfsberg Group's 2024 monitoring statement support?",
    options: [
      "Rebuild a rule for each published red flag beside the model, so that the coverage map is complete again",
      "Document the model and test it against crystallised risk, such as SARs, confirmed cases and police requests",
      "Tell internal audit that ML models need no coverage evidence, because they learn new typologies by themselves",
      "Restrict the model to typologies that already have written rules, so that the old coverage map still applies"
    ],
    answer: [1],
    explanation: "Wolfsberg notes that, unlike rules, ML models cannot simply be mapped to red flags and typologies because they make predictions across large data sets covering many risks, so FIs need to document clearly and analyse ML models against the crystallised outcomes of detection to show how they continue to mitigate risk. It also suggests training on crystallised risk from several sources, including manually raised cases and law enforcement production orders. The runner-up, a rule per red flag, is the 'expanding red flag and typology coverage' that Wolfsberg calls ineffective when the data shows such rules produce little or nothing; published red flags are also generalised and known to criminals. ML still needs evidence, and restricting it to old typologies throws away its value.",
    source: [WMSA]
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
      "A bank must obtain its regulator's written approval before it starts any innovation pilot",
      "Implementing an innovative approach will bring additional regulatory expectations for the bank",
      "FinCEN will consider exceptive relief to help test new technologies if programs stay effective"
    ],
    answer: [1, 4],
    explanation: "The agencies said they will not penalize or criticize banks that keep effective BSA/AML programs but choose not to innovate, and that FinCEN will consider exceptive relief under 31 CFR 1010.970 to facilitate testing, provided overall program effectiveness is maintained. The statement says innovative approaches will NOT result in additional regulatory expectations. It invites early engagement with the agencies on pilots, but it does not require prior approval to start one. The agencies also say they will not advocate any particular method or technology, so nothing is mandated.",
    source: [JS18]
  },
  {
    id: "TMON-013", domain: 4, topic: "EU AI Act and AML monitoring models", hy: true, difficulty: "hard",
    changed: "AI Act amended by the Digital Omnibus on AI, Regulation (EU) 2026/1744 (in force 27 July 2026); Art. 5(1)(d) and Annex III point 5(b) unchanged, Art. 4 AI literacy recast",
    q: "Aurelia Bank, based in Italy, uses an in-house machine-learning model that scores customers' transactions and raises alerts for human investigators, who decide whether to file a suspicious transaction report. Its data protection officer asks how the EU Artificial Intelligence Act (Regulation (EU) 2024/1689) affects this model. The bank also uses a separate AI model to set credit scores for consumer loans, and its marketing team uses a chatbot. Which statement about the AML monitoring model is MOST accurate?",
    options: [
      "It is a prohibited practice, because it predicts the risk that a natural person will commit an offence",
      "It is automatically high-risk, because Annex III covers every AI system a bank uses to assess persons",
      "It is not banned: the crime-prediction ban excludes transaction-based analytics that support humans",
      "It is outside the Act entirely, because the Act does not apply to AI used by credit institutions"
    ],
    answer: [2],
    explanation: "Article 5(1)(d) bans AI risk assessments that predict a person's offending based solely on profiling or personality traits, but not AI that supports human assessment based on objective, verifiable facts; recital 42 adds that the ban does not touch risk analytics such as assessing the likelihood of financial fraud from suspicious transactions. The runner-up confuses this model with credit scoring: Annex III point 5(b) makes creditworthiness and credit-scoring AI high-risk (except fraud detection), so it is the loan model, not the AML model, that is listed. The Act does apply to banks as deployers: for example, Article 4, as recast by the July 2026 Digital Omnibus (Regulation (EU) 2026/1744), still requires deployers to take measures to support their staff's AI literacy. The Omnibus did not change Article 5(1)(d) or Annex III point 5(b).",
    source: [AIACT, { label: "Regulation (EU) 2026/1744 (Digital Omnibus on AI) amending the AI Act (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202601744" }]
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
    id: "TMON-019", domain: 4, topic: "Aligning monitoring with national priorities when none are formally published", hy: false, difficulty: "hard",
    q: "Kingsbridge Bank operates in a country whose government has never published a formal list of national AML/CFT priorities. The tuning team must decide where to focus new monitoring development in 2027. It has the country's latest national risk assessment, which rates human trafficking and drug-related laundering as the highest threats, and a recent FIU advisory on cash-intensive businesses used by organised crime groups. The bank has almost no exposure to US dollar clearing. The head of monitoring proposes adopting FinCEN's AML/CFT National Priorities instead, because 'that is the only official priority list available'. Which approach does the Wolfsberg Group's 2024 monitoring statement support?",
    options: [
      "Discern priorities from the national risk assessment and the FIU advisory, and focus development on those threats",
      "Adopt FinCEN's National Priorities, since they are the most detailed official list of priorities available",
      "Spread development evenly across all published typologies until the government issues formal priorities",
      "Focus development on the scenarios with the highest alert-to-STR conversion rates, whatever their typology"
    ],
    answer: [0],
    explanation: "Wolfsberg says FIs need to understand and align with national priorities however they are communicated: some jurisdictions publish specifically defined priorities, while others rely on more general communications, such as advisories or national risk assessments, from which priorities can be discerned. The runner-up, borrowing FinCEN's list, sets priorities for another country's threats and authorities, and this bank has little US nexus. Spreading effort across every typology is the coverage-for-its-own-sake approach Wolfsberg calls ineffective, and conversion ratios measure the quantity, not the usefulness, of the information reported.",
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
