window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "INVT-001", domain: 4, topic: "Following the money: net worth method (calculation)", hy: false, difficulty: "hard",
    q: "Tomasz Brenner, a self-employed driving instructor, banks with Harrow & Vale Bank and declares an annual income of GBP 38,000. An investigator builds a net worth analysis for 2025. On 1 January 2025 his known assets were GBP 210,000 and his liabilities (a mortgage) GBP 150,000. On 31 December 2025 his assets were GBP 395,000, including a GBP 90,000 boat, and his mortgage balance was GBP 140,000. Card and cash spending on living expenses in 2025 was GBP 42,000. During the year he received a documented inheritance of GBP 20,000. His car is a 2019 hatchback and he has two children. Using the net worth method described in the FATF's financial investigations guidance, how much of his 2025 funds is unexplained?",
    options: [
      "GBP 137,000",
      "GBP 199,000",
      "GBP 179,000",
      "GBP 169,000"
    ],
    answer: [2],
    explanation: "Net worth rose from GBP 60,000 (210,000 - 150,000) to GBP 255,000 (395,000 - 140,000), a change of GBP 195,000. Adding living expenses of GBP 42,000 gives GBP 237,000 of funds used. Subtracting known sources (income of 38,000 plus the non-income inheritance of 20,000) leaves GBP 179,000 unexplained. The FATF guidance describes exactly these steps: compute the change in net worth, adjust for living expenses and legal sources, and attribute the unexplained balance to illegal sources. GBP 137,000 omits living expenses, GBP 199,000 ignores the inheritance, and GBP 169,000 uses the change in assets and overlooks the GBP 10,000 reduction in the mortgage.",
    source: [{ label: "FATF, Operational Issues - Financial Investigations Guidance (2012), Annex on the net worth method (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/FATF_Guidances/Operational_Issues_Financial_investigations_Guidance.pdf" }]
  },
  {
    id: "INVT-002", domain: 4, topic: "Indirect methods of proof: testing the subject's explanation", hy: false, difficulty: "hard",
    q: "Over 14 months, Rosalind Achebe's personal account at Calder Mutual received GBP 410,000 in cash deposits and transfers, against a declared salary of GBP 46,000 as a hospital administrator. A source-and-application analysis by the investigator, Ivo Petrak, shows a large gap. When the branch asked routine questions, Ms Achebe said the money came from an inheritance from an aunt in Portugal and from selling a vintage car. The investigator has not yet formed a suspicion. Ms Achebe recently changed her address and opened a second savings account at the same bank. What should Ivo do NEXT?",
    options: [
      "Test the explanation: seek the probate documents, the car sale contract and the payment trail, and treat proven sources as non-income funds",
      "Disregard the explanation, because an indirect analysis is complete once total spending exceeds declared income",
      "Accept the explanation and close the case, because an inheritance and a car sale are plausible reasons for the funds",
      "Ask the police to check the inheritance with the Portuguese authorities before the bank does any more work on the case"
    ],
    answer: [0],
    explanation: "The FATF financial investigations guidance warns that indirect methods rest on circumstantial evidence. Investigators must account for all sources of funds, such as inheritances, loans and transfers, and must investigate any reasonable defence the subject raises to see whether it has merit. Ignoring the explanation, the runner-up, would overstate unexplained funds and weaken any conclusion. Accepting it without evidence is the opposite error. Asking the police to do the bank's checking is not their role, and contacting them before any suspicion has formed is premature.",
    source: [{ label: "FATF, Operational Issues - Financial Investigations Guidance (2012), para. 89 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/FATF_Guidances/Operational_Issues_Financial_investigations_Guidance.pdf" }]
  },
  {
    id: "INVT-003", domain: 4, topic: "Beneficial ownership registers after the CJEU WM and Sovim ruling: obliged-entity access", hy: true, difficulty: "hard",
    changed: "AMLD6 Arts 11-13 on register access, transposition due 10 July 2026",
    q: "In October 2026, Aoife Brennan, an investigator at Liffey Commercial Bank in Ireland, reviews unusual payments by a customer, Kestrel Holdings SARL, a Luxembourg company. She tries the Luxembourg beneficial ownership register's public search, as she did in 2021, but cannot see the beneficial owners. The company's own declaration names one owner, while a 2024 news article names two. A colleague says that since the 2022 Court of Justice ruling, banks have no way to use EU registers, so she should rely on the customer's declaration. Another suggests asking a journalist friend to run the search. Which approach is BEST?",
    options: [
      "Rely on the customer's declaration, because after the ruling the registers are no longer available to obliged entities",
      "Request access as an obliged entity performing CDD, use the register to check consistency rather than as the main proof, and pursue the discrepancy",
      "Ask the journalist to search the register, because journalists connected with fighting money laundering have a legitimate interest",
      "Treat the closed public search as a red flag about Kestrel itself and exit the relationship without further review"
    ],
    answer: [1],
    explanation: "In Joined Cases C-37/20 and C-601/20 (22 November 2022), the CJEU invalidated only the rule giving every member of the general public access to BO information. AMLD6 (Directive 2024/1640) Art. 11(3) requires timely access for obliged entities performing CDD, and Art. 12 gives access to others with a legitimate interest. Member States had to transpose Arts. 11-13 by 10 July 2026. AMLD6 treats discrepancy reporting as a way to check the accuracy of register data and says discrepancies should be reported swiftly, so the register is a cross-check rather than proof on its own. The runner-up misuses a journalist's access, which exists for journalism, not to do a bank's CDD. Relying on the declaration ignores the conflicting article.",
    source: [
      { label: "CJEU, Joined Cases C-37/20 and C-601/20, WM and Sovim (22 Nov 2022)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:62020CJ0037" },
      { label: "Directive (EU) 2024/1640 (AMLD6), recital on discrepancies and Arts. 11-13", url: "https://eur-lex.europa.eu/eli/dir/2024/1640/oj" }
    ]
  },
  {
    id: "INVT-004", domain: 4, topic: "Corporate Transparency Act after the August 2026 final rule: what BOI exists", hy: true, difficulty: "hard",
    changed: "FinCEN BOI final rule, Aug 2026: US companies and US persons exempt",
    q: "In September 2026, Marcus Odell, an investigator at a US bank, is tracing funds between two customers. Bluewater Logistics LLC was formed in Delaware in 2023 and filed a BOI report in 2024 naming two US citizens as owners. Pelican Trade Ltd is a Cayman Islands company registered to do business in Florida; its owners are a Brazilian national and a US citizen. Marcus's manager suggests that law enforcement could simply pull 'both companies' complete BOI files' from FinCEN. Under FinCEN's August 2026 final rule, which statement is MOST accurate?",
    options: [
      "Both companies must keep reporting, because the final rule only extended the deadline for companies formed before 2024",
      "Bluewater must keep reporting, but Pelican is exempt because foreign companies fall outside the Corporate Transparency Act",
      "Neither company has reporting duties, and FinCEN will keep all previously filed reports for law enforcement to search",
      "Bluewater no longer reports and its US owners' data is being deleted; Pelican still reports, but only its foreign owner"
    ],
    answer: [3],
    explanation: "FinCEN's final rule of 11 August 2026 permanently removed the duty for US companies and US persons to report beneficial ownership information. FinCEN also said it will delete previously reported information on now-exempt US persons. Foreign entities that are reporting companies must still report BOI for foreign individuals, so Pelican reports its Brazilian owner but not its US owner. The runner-up wrongly assumes FinCEN keeps the old reports. The manager's 'complete files' idea fails for both companies, and the bank's own CDD records remain the main source.",
    source: [{ label: "FinCEN press release (11 Aug 2026): FinCEN Permanently Ends Beneficial Ownership Reporting Requirements for Millions of Small Business Owners", url: "https://www.fincen.gov/news/news-releases/fincen-permanently-ends-beneficial-ownership-reporting-requirements-millions" }]
  },
  {
    id: "INVT-005", domain: 4, topic: "Adverse media triage: false positive vs immaterial vs material hits", hy: true, difficulty: "hard",
    q: "Negative news screening on Elena Marchetti, born 1984, a private banking client of Alder Bank, returns five hits. Policy distinguishes 'false positives' (not the client) from 'immaterial' hits (the client, or possibly the client, but not a risk-relevant item) and 'material' hits that must be escalated. Which TWO hits can be discounted as IMMATERIAL under the Wolfsberg Group's Negative News Screening FAQs? (Choose two.)",
    options: [
      "A national newspaper reports that Ms Marchetti's company won a fraud lawsuit she brought, as plaintiff, against a former supplier",
      "A regional paper reports that an Elena Marchetti born in 1961, a retired nurse in another country, was convicted of benefits fraud",
      "A national newspaper reports that Ms Marchetti, named with her company and city, has been charged with evading import VAT",
      "An anonymous blog with no sources claims Ms Marchetti 'launders money for politicians', and no other outlet repeats the claim",
      "A reputable news agency reports that prosecutors are investigating Ms Marchetti's company for paying bribes to a port official"
    ],
    answer: [0, 3],
    explanation: "The Wolfsberg FAQs list discounting on the basis of 'immateriality' where the customer is not the subject (for example, the customer is a plaintiff) or the source is not credible (for example, blogs and tabloids). The 1961 nurse is discounted too, but as a false positive because key identifiers such as date of birth differ; it is not an immaterial hit about the client. The VAT charge and the bribery investigation are reported by credible sources and match the client, so they are material and need escalation. Investigators must record the rationale for every decision, including discounted hits.",
    source: [{ label: "Wolfsberg Group, Negative News Screening FAQs (2022), FAQ 24", url: "https://db.wolfsberg-group.org/assets/b3a010d9-7b32-4580-92d7-db9a7e78cbaf/Negative%20News%20Screening%20FAQs%20(2022).pdf" }]
  },
  {
    id: "INVT-006", domain: 4, topic: "OSINT limits: an empty internet search is not a clean result", hy: false, difficulty: "medium",
    q: "Junior analyst Pavel Hruby must complete EDD on Ortwin Kessler, a new high-net-worth client who made his money in construction in a country where the names of people being prosecuted are not normally published and data protection law lets individuals have unfavourable content removed. Pavel runs ten English-language search engine queries, finds nothing negative, and drafts 'no adverse media - low reputational risk'. His reviewer reruns the same queries from her laptop and gets different results in a different order. Which response is MOST consistent with the Wolfsberg Group's guidance?",
    options: [
      "Accept the draft, because ten searches without negative results are enough evidence that the client has a clean history",
      "Reject the client, because a lack of published information in that country means the bank can never assess his reputation",
      "Record the limits of internet searching, then add credible structured or local-language sources and source-of-wealth checks",
      "Ask the client to sign a declaration that he has never been prosecuted and treat it as a substitute for screening"
    ],
    answer: [2],
    explanation: "The Wolfsberg FAQs warn that search engines are not built to assess financial crime risk, that their results vary by user and over time, and that content can be purged or altered. In many jurisdictions the names of people being prosecuted are not public, and local data protection rules allow removal of unfavourable information, so internet searches have limited value there. The right response is to document these limits and use other sources, such as structured databases, local-language searches and source-of-wealth checks. Accepting the clean result overstates its value, the runner-up treats a data gap as grounds for rejection, and a self-declaration is no substitute for screening.",
    source: [{ label: "Wolfsberg Group, Negative News Screening FAQs (2022), FAQs 12, 18 and 20", url: "https://db.wolfsberg-group.org/assets/b3a010d9-7b32-4580-92d7-db9a7e78cbaf/Negative%20News%20Screening%20FAQs%20(2022).pdf" }]
  },
  {
    id: "INVT-007", domain: 4, topic: "Blockchain clustering: CoinJoin breaks the common-input heuristic", hy: false, difficulty: "hard",
    q: "An exchange's analytics tool flags customer Lena Vogt because her withdrawal address sits in a cluster of 4,200 addresses labelled 'Darknet vendor - inferred'. Investigator Sami Rahal finds that the cluster grew suddenly after a transaction in which Lena's coins were batched with coins from dozens of other users through a coordinated mixing service. The tool links all inputs of a transaction as one owner. Lena has been a customer for six years, trades weekly, and also uses a hardware wallet. What is the BEST conclusion about the 'darknet vendor' label?",
    options: [
      "Treat the label as unreliable for Lena, because a mixing transaction joins many owners' inputs; report the mixer use and review the risk on its own merits",
      "Accept the label, because the tool's cluster attribution is drawn from the public blockchain and so is objective evidence of who controls the addresses",
      "Ignore the alert, because mixing is a privacy feature, so the use of a coordinated mixing service tells the exchange nothing about the customer's risk",
      "Close the account at once and report Lena as the darknet vendor, because she is a member of the cluster that the analytics tool has labelled"
    ],
    answer: [0],
    explanation: "Clustering works because a user often groups their own addresses as inputs to one transaction, as a 2020 DOJ forfeiture complaint explains. A coordinated mixing service such as Samourai's Whirlpool instead 'coordinated batches of Bitcoin exchanges between groups of users' to obscure where coins came from, so its inputs belong to many owners and the one-owner assumption fails. An 'inferred' label built on that link should not be treated as proof that Lena is the vendor. Mixer use is still a risk indicator that needs review, which is why ignoring the alert, the runner-up, is also wrong.",
    source: [
      { label: "DOJ, Verified Complaint for Forfeiture, US v. 113 Virtual Currency Accounts (D.D.C., 2 Mar 2020), paras. 12-15", url: "https://www.justice.gov/opa/press-release/file/1253491/download" },
      { label: "IRS-CI press release (July 2025): Founders of Samourai Wallet cryptocurrency mixing service plead guilty", url: "https://www.irs.gov/compliance/criminal-investigation/founders-of-samourai-wallet-cryptocurrency-mixing-service-plead-guilty" }
    ]
  },
  {
    id: "INVT-008", domain: 4, topic: "Internal whistleblowing: EU Directive 2019/1937 deadlines (calculation)", hy: false, difficulty: "hard",
    q: "On Monday 5 October 2026, a dealer at Brabant Securities, an EU investment firm with 900 staff, reports through the internal hotline that the head of the equities desk is helping a client move funds through accounts of unrelated third parties. The compliance department, designated to follow up, sends an acknowledgement of receipt on Friday 9 October and starts an investigation. The desk head is on holiday until 19 October. Under the EU Whistleblower Directive, what are the latest deadlines for the acknowledgement and for feedback to the reporting person?",
    options: [
      "Acknowledgement by 9 October; feedback by 5 November 2026",
      "Acknowledgement by 12 October; feedback by 9 January 2027",
      "Acknowledgement by 19 October; feedback by 19 January 2027",
      "Acknowledgement by 14 October; feedback by 5 April 2027"
    ],
    answer: [1],
    explanation: "Article 9(1)(b) of Directive 2019/1937 requires acknowledgement of receipt within seven days of receipt, so by 12 October, and the firm's acknowledgement on 9 October was in time. Article 9(1)(f) requires feedback within a reasonable time not exceeding three months from the acknowledgement, which gives 9 January 2027. Only if no acknowledgement is sent does the three months run from the end of the seven-day period. The desk head's holiday does not change either deadline. The Directive covers breaches of Union law on preventing money laundering, and Article 8 requires internal channels in firms with 50 or more workers.",
    source: [{ label: "Directive (EU) 2019/1937 (Whistleblower Directive), Arts. 2, 8 and 9", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L1937" }]
  },
  {
    id: "INVT-009", domain: 4, topic: "Internal investigations: protecting the whistleblower's identity", hy: false, difficulty: "hard",
    q: "During the internal investigation at Brabant Securities, the desk head under review, Henrik Dahl, tells the investigator he has a right to know who 'made these accusations' so he can defend himself. The head of HR asks for the reporter's name as well, saying the reporter should have raised concerns with Henrik first and may face disciplinary action. The reporter has not consented to any disclosure. The investigator, Mira Coen, wants to handle this correctly. Under the EU Whistleblower Directive, what should she do?",
    options: [
      "Give Henrik the name, because the person under investigation always has a right to know who reported him",
      "Give HR the name but not Henrik, because HR is part of the firm's management and is bound by confidentiality",
      "Disclose the name only after the investigation ends, when the risk of retaliation against the reporter has gone",
      "Keep the identity to authorised follow-up staff and refuse both requests; retaliation such as discipline is prohibited"
    ],
    answer: [3],
    explanation: "Article 16 of Directive 2019/1937 says the reporter's identity, and any information from which it could be deduced, must not be disclosed beyond the authorised staff who receive or follow up reports without the reporter's explicit consent. The only exception is a necessary and proportionate legal obligation in investigations by national authorities or judicial proceedings, and the reporter is normally told first. Article 19 prohibits retaliation, including disciplinary measures. HR is not authorised follow-up staff, so the runner-up fails. Henrik's defence rights are protected through the fairness of the investigation, not by naming the reporter, and confidentiality does not end when the investigation closes.",
    source: [{ label: "Directive (EU) 2019/1937 (Whistleblower Directive), Arts. 16 and 19", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L1937" }]
  },
  {
    id: "INVT-010", domain: 4, topic: "Evidence preservation: legal hold and chain of custody (POCA s.342)", hy: true, difficulty: "hard",
    q: "Fenmoor Bank, a UK bank, is served with a production order in a National Crime Agency money laundering investigation into its customer Garrick Imports. The bank's own review suggests relationship manager Oliver Kent may have helped the customer split cash deposits. Fenmoor's email system automatically deletes mailbox items older than 90 days, and the next purge runs in two days. Oliver is on leave this week, and his manager suggests waiting to interview him first. What should the investigations team do FIRST?",
    options: [
      "Suspend the purge for relevant mailboxes and records, and make forensic copies with hash values and a chain-of-custody log",
      "Interview Oliver as soon as he returns, so that his explanation can be compared with the emails before they are removed",
      "Let the purge run as normal, because the production order covers only Garrick Imports' account records, not staff emails",
      "Ask Oliver to forward any relevant emails to the investigations mailbox from home before the scheduled purge runs"
    ],
    answer: [0],
    explanation: "Under POCA s.342(2)(b), a person who knows or suspects that a money laundering investigation is under way commits an offence if they destroy or dispose of relevant documents, or cause or permit that to happen. Letting a known purge run risks that offence, so the first step is a legal hold, followed by forensic copies with hash values and a chain-of-custody record so the evidence stays reliable. Interviewing Oliver first, the runner-up, puts the evidence at risk and could alert a possible insider. Asking the suspected employee to pick and forward emails lets him select or change the evidence.",
    source: [{ label: "Proceeds of Crime Act 2002, s.342 (offences of prejudicing investigation)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/342" }]
  },
  {
    id: "INVT-011", domain: 4, topic: "UK production orders: deadline and not prejudicing the investigation (calculation)", hy: true, difficulty: "hard",
    q: "On Wednesday 4 March 2026, a Crown Court judge makes a production order under POCA s.345 requiring Severn Building Society to produce the account opening file and 2025 statements of its customer Dorian Pike to an investigator. The order does not set a special period. Two days later Mr Pike calls the branch asking why 'the police have been sniffing around' and whether his account is being looked at. Branch staff ask compliance how to respond and when the material must be produced. What is the correct guidance?",
    options: [
      "Produce the material by 11 March, and tell Mr Pike about the order, because a customer has a right to know about it",
      "Produce the material by 12 March (seven working days), and confirm to Mr Pike only that an order exists, without detail",
      "Produce the material by 10 March, and do not tell Mr Pike about the order or any investigation, giving a neutral answer",
      "Produce the material by 1 April (28 days), and ask the investigator for written permission before saying anything to Mr Pike"
    ],
    answer: [2],
    explanation: "Under POCA s.345(5), the period in a production order is seven days beginning with the day the order is made, unless the judge sets a longer or shorter period. Counting 4 March as day one gives 10 March. Under s.342(2)(a), a person who knows or suspects that a money laundering investigation is under way commits an offence if they make a disclosure likely to prejudice it, so staff must not reveal the order. The 11 March option counts seven days after the order instead of from the day it was made. The working-day and 28-day periods have no basis in s.345.",
    source: [
      { label: "Proceeds of Crime Act 2002, s.345 (production orders)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/345" },
      { label: "Proceeds of Crime Act 2002, s.342 (offences of prejudicing investigation)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/342" }
    ]
  },
  {
    id: "INVT-012", domain: 4, topic: "UK account monitoring orders: 90-day limit (calculation)", hy: false, difficulty: "hard",
    q: "On 1 February 2026, a judge makes an account monitoring order under POCA s.370 requiring Tamar Bank to give an investigator weekly account information on its customer Selwyn Aske for the longest period the Act allows. Tamar complies each week. On 15 May 2026, the investigator emails the bank to say the case is 'at a critical stage' and asks it to keep sending weekly statements 'under the same order' until the end of June. The bank's investigations team also has its own concerns about Mr Aske. What is the correct response?",
    options: [
      "Keep sending statements until the end of June, because an account monitoring order lasts six months unless the judge says otherwise",
      "Stop under the order, which ended after 90 days (on 1 May); further monitoring needs a new order or another lawful basis",
      "Keep sending statements, because an investigator may extend an account monitoring order by written notice to the bank",
      "Stop sending statements and close Mr Aske's account, because the end of the order means the investigation is now over"
    ],
    answer: [1],
    explanation: "POCA s.370(7) says the period in an account monitoring order must not exceed 90 days beginning with the day the order is made. From 1 February 2026, day 90 is 1 May 2026 (28 days in February, 31 in March, 30 in April, plus 1 May). Nothing in s.370 lets the investigator extend the order by email, so further monitoring needs a fresh order or another lawful basis. The bank's own concerns are handled separately through its internal suspicious activity reporting. Closing the account would not follow from the order's expiry, and the investigation may well continue.",
    source: [{ label: "Proceeds of Crime Act 2002, ss.370-371 (account monitoring orders)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/370" }]
  },
  {
    id: "INVT-013", domain: 4, topic: "UK further information orders after a SAR (POCA s.339ZH)", hy: true, difficulty: "hard",
    q: "Wye Payments, a UK e-money institution, submitted a SAR on its customer Kalinda Rowe in July 2026. In September the UK Financial Intelligence Unit (UKFIU) asks for her device data and three years of transactions. Wye's data protection officer says the firm should decline because no court order has been made and the information would expose the firm to legal risk. The MLRO wants to understand what happens next. Which statement is MOST accurate?",
    options: [
      "The UKFIU can only ask; with no SAR-related power to compel, it must send the case to police for a production order",
      "Wye must hand over everything the UKFIU asks for at once, because any refusal of an informal request is itself an offence",
      "Wye may decline only if Ms Rowe refuses consent, because customer consent is required before any disclosure to the UKFIU",
      "The NCA can apply to a magistrates' court for an information order; Wye could then be ordered to pay up to GBP 5,000 for non-compliance"
    ],
    answer: [3],
    explanation: "POCA s.339ZH lets an authorised NCA officer apply to a magistrates' court for an information order requiring a regulated business to provide information relating to a matter arising from a disclosure it made. The order is made where the information would help investigate possible money laundering and it is reasonable to provide it. Failure to comply can lead to an order to pay up to GBP 5,000. Under s.339ZI, a statement given in response generally cannot be used in evidence against the person in criminal proceedings. The runner-up wrongly says there is no compelling power, refusing an informal request is not itself an offence, and seeking the customer's consent would risk tipping off.",
    source: [
      { label: "Proceeds of Crime Act 2002, s.339ZH (information orders)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/339ZH" },
      { label: "Proceeds of Crime Act 2002, s.339ZI (statements)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/339ZI" }
    ]
  },
  {
    id: "INVT-014", domain: 4, topic: "UK public-private partnerships: JMLIT and the s.7 CCA 2013 gateway", hy: false, difficulty: "medium",
    q: "A bank's new head of financial intelligence is preparing to join the UK's Joint Money Laundering Intelligence Taskforce (JMLIT). Which statement BEST describes JMLIT and the legal basis for most of its information sharing?",
    options: [
      "An NCA-led partnership piloted in 2015, sharing mainly under s.7 of the Crime and Courts Act 2013, which lets anyone disclose information to the NCA for its functions",
      "An FCA-run supervisory forum created by the Money Laundering Regulations, under which members must share all their high-risk customer files every month",
      "A private-to-private sharing scheme set up under the Economic Crime and Corporate Transparency Act 2023 that excludes law enforcement agencies",
      "A statutory body under Part 7 of POCA whose requests replace the SAR regime, so members no longer need to submit SARs on JMLIT cases"
    ],
    answer: [0],
    explanation: "The NCA says JMLIT was piloted in 2015, co-developed with the Home Office, City of London Police, UK Finance and banks, and has grown to over 200 partners. A March 2026 Home Office call for evidence says s.7 of the Crime and Courts Act 2013 forms the legal basis for most AML public-private sharing through JMLIT's cells. Section 7(1) allows any person to disclose information to the NCA for the exercise of any NCA function, and s.7(8) says such a disclosure does not breach confidence. The same paper describes the SAR as a separate required disclosure under POCA ss.330-331, and ECCTA 2023 sharing as a separate private-to-private route.",
    source: [
      { label: "Home Office, Economic crime information sharing: call for evidence (9 Mar 2026)", url: "https://www.gov.uk/government/calls-for-evidence/economic-crime-information-sharing/economic-crime-information-sharing-accessible" },
      { label: "NCA: 10 year anniversary of the UK's public-private partnerships", url: "https://www.nationalcrimeagency.gov.uk/news/10-year-anniversary-of-the-uks-public-private-partnerships" }
    ]
  },
  {
    id: "INVT-015", domain: 4, topic: "FinCEN Exchange: limits on using shared information", hy: true, difficulty: "hard",
    q: "Prairie Federal Bank is invited to a FinCEN Exchange event in August 2026 on cartel money laundering. Its BSA officer, Dana Whitfield, receives typologies and a list of trade-based schemes to look for. Afterwards, the head of small-business lending asks for the materials so the bank can stop marketing loans to the industries mentioned. A junior analyst asks whether she may record the next session on her phone. A board member asks whether attending means the bank now has extra recordkeeping duties. Which response is correct?",
    options: [
      "Share the materials with lending, because information from FinCEN may be used for any lawful purpose that reduces the bank's risk",
      "Record the next session, since a recording helps the bank keep the evidence that attending the event creates a new recordkeeping duty",
      "Use the information only to identify and report possible financial crime; attending creates no new duties, and recording is not allowed",
      "Treat the materials as non-confidential, because FinCEN Exchange is a public outreach programme open to anyone who registers online"
    ],
    answer: [2],
    explanation: "FinCEN says information that financial institutions receive at a FinCEN Exchange event may not be used for any purpose other than identifying and reporting activities that may involve terrorist financing, money laundering, proliferation financing or other financial crimes (31 U.S.C. 310(d), added by AML Act s.6103). Participation does not change an entity's regulatory obligations or create extra recordkeeping requirements. FinCEN generally prohibits audio or visual recording devices and requires confidentiality. The programme is confidential, event-based and invitation-only, so the 'public outreach' option is wrong. Using the list for marketing decisions, the runner-up, is a use outside the permitted purpose.",
    source: [{ label: "FinCEN: FinCEN Exchange (program page)", url: "https://www.fincen.gov/resources/fincen-exchange" }]
  },
  {
    id: "INVT-016", domain: 4, topic: "Foreign FIU contacting a bank directly (Egmont Principles)", hy: false, difficulty: "hard",
    q: "Karoo Commercial Bank's MLRO receives an email from an analyst at the FIU of another country. It asks for the KYC file and two years of statements of a Karoo customer, Vantage Mining Ltd, within five days for an analysis of suspected bribery proceeds. The email is genuine and both FIUs are Egmont Group members. Karoo has never filed a report on Vantage, though a recent alert on the account is still under review. The relationship manager suggests asking Vantage's finance director to send the statements himself. What should the MLRO do?",
    options: [
      "Send the file directly, because Egmont membership gives the foreign FIU a right to obtain records from any bank",
      "Refer the request to the bank's own national FIU, which can query domestic banks on the foreign FIU's behalf",
      "Ask Vantage's finance director to provide the statements, so that the bank does not have to disclose anything",
      "Delete the email and take no further action, because a foreign FIU has no role in matters involving a domestic bank"
    ],
    answer: [1],
    explanation: "The Egmont Principles for Information Exchange govern cooperation between FIUs. Principle 18 says FIUs should be able to run domestic queries on behalf of foreign FIUs and exchange the results. The proper route is therefore FIU to FIU, through the bank's own national FIU, rather than direct disclosure, which Egmont membership does not authorise. Contacting Vantage would risk tipping off the customer. Ignoring the request is also wrong: the bank should consult its FIU and finish its own alert review, which may lead to a suspicious transaction report.",
    source: [{ label: "Egmont Group, Principles for Information Exchange between FIUs (revised July 2025), Principles 11-18", url: "https://egmontgroup.org/wp-content/uploads/2022/07/EG-Principles-for-Information-Exchange-Revised-July-2025.pdf" }]
  },
  {
    id: "INVT-017", domain: 4, topic: "Data protection in investigations: criminal-offence and special-category data (AMLR Art. 76)", hy: false, difficulty: "hard",
    q: "In September 2027, after the EU AMLR has started to apply, investigator Joana Ferreira at an EU bank is building a file on customer Viktor Lenz. It holds press reports that he is under investigation for VAT fraud, a court record of a 2019 conviction for dangerous driving, and social media posts revealing his religion and a chronic illness. Her team leader wants to keep everything, 'just in case'. Which statements about processing this data under Article 76 of the AMLR are correct? (Choose two.)",
    options: [
      "Data on the 2019 dangerous-driving conviction may be kept, because the AMLR allows processing of all criminal records once a customer is under investigation",
      "Data on criminal offences may be processed only if it relates to ML, its predicate offences or TF, with procedures that distinguish allegations, investigations, proceedings and convictions",
      "Data on religion and health may be processed for AML purposes only with Mr Lenz's explicit written consent, obtained before the investigation begins",
      "Personal data processed for AML purposes under the AMLR may also be used to target Mr Lenz with suitable investment products, provided he is informed",
      "Special-category data may be processed only where strictly necessary, from reliable and accurate sources, with high security and without biased outcomes"
    ],
    answer: [1, 4],
    explanation: "AMLR Art. 76(1) lets obliged entities process special-category data and criminal-offence data only to the extent strictly necessary to prevent ML/TF. Art. 76(2) requires customers to be told, data from reliable and accurate sources, no biased or discriminatory decisions, and a high level of security. Art. 76(3) limits criminal-offence data to ML, its predicate offences or TF, with procedures that distinguish allegations, investigations, proceedings and convictions. A dangerous-driving conviction is not an AML-relevant offence, and the AMLR basis does not depend on the customer's consent. Art. 76(4) prohibits processing for commercial purposes.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR), Art. 76", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }]
  },
  {
    id: "INVT-018", domain: 4, topic: "Informal police requests and the UK GDPR crime exemption (DPA 2018 Sch. 2 para. 2)", hy: true, difficulty: "hard",
    q: "A detective constable telephones Ouse Valley Bank's fraud team. She says a bank customer, Nadia Corrigan, is suspected of a rental-deposit fraud against 30 victims, and asks for Ms Corrigan's address history and last three months of statements to help trace her. She has no production order but follows up with a signed request on police letterhead explaining why the data is needed. The bank has not filed a SAR on Ms Corrigan. Under UK data protection law, what is the BEST approach?",
    options: [
      "Refuse, because UK GDPR forbids a bank to disclose customer data to police without a court order",
      "Disclose everything requested at once, because a police request overrides data protection obligations",
      "Ask Ms Corrigan for her consent first, because a lawful disclosure to the police requires the data subject's consent",
      "Decide case by case: verify the request and, if the crime exemption applies, disclose only what is needed and record why"
    ],
    answer: [3],
    explanation: "Schedule 2, paragraph 2 of the Data Protection Act 2018 disapplies the listed UK GDPR provisions for processing for the prevention or detection of crime or the apprehension or prosecution of offenders, to the extent that applying them would be likely to prejudice those purposes. The ICO says the exemption must be applied case by case, not in a blanket way, and the reasons for relying on it should be documented. Its guidance gives the example of a bank voluntarily disclosing information to law enforcement. The exemption permits disclosure but does not compel it, so the 'refuse' and 'disclose everything' options both misstate the law. Asking Ms Corrigan for consent could alert a suspected fraudster.",
    source: [
      { label: "Data Protection Act 2018, Sch. 2 para. 2 (crime and taxation: general)", url: "https://www.legislation.gov.uk/ukpga/2018/12/schedule/2/paragraph/2" },
      { label: "ICO: A guide to the data protection exemptions", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/exemptions/a-guide-to-the-data-protection-exemptions/" }
    ]
  },
  {
    id: "INVT-019", domain: 4, topic: "Documenting no-report decisions: EU AMLR Art. 77 vs FinCEN SAR FAQs", hy: true, difficulty: "hard",
    changed: "FinCEN SAR FAQs, Oct 2025: no requirement to document no-SAR decisions",
    q: "In August 2027, Hollis Group, a bank with a branch in Frankfurt and a branch in New York, harmonises its alert procedures. In both branches investigators close many alerts after concluding that the activity has a reasonable explanation. To cut costs, the head of investigations proposes that neither branch keep any record of why an alert was closed without a report, citing 'FinCEN's 2025 guidance'. Compliance must advise on what each branch's rules require. Which advice is correct?",
    options: [
      "Frankfurt must keep a record of each assessment, even with no report, while New York is not required to but may do so",
      "Neither branch needs records, because both the AMLR and FinCEN now treat no-report decisions as undocumented by default",
      "New York must document every no-SAR decision in detail, while Frankfurt may choose whether to keep any such records",
      "Both branches must keep a full written analysis of every closed alert for ten years from the date of the closure"
    ],
    answer: [0],
    explanation: "From 10 July 2027, AMLR Art. 77(1)(b) requires obliged entities to keep a record of the assessment under Art. 69(2), including the information and circumstances considered and the result, whether or not a suspicious transaction report is made. Art. 77(3) sets a five-year retention period. FinCEN's October 2025 SAR FAQs say there is no requirement or expectation under the BSA to document a decision not to file a SAR, though institutions may choose to do so. The proposal therefore fails for Frankfurt. The option requiring detailed US records reverses the two regimes, and the ten-year period has no basis in either.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Art. 77", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" },
      { label: "FinCEN, Frequently Asked Questions Regarding Suspicious Activity Reporting Requirements (Oct 2025), Q4", url: "https://www.fincen.gov/system/files/2025-10/SAR-FAQs-October-2025.pdf" }
    ]
  },
  {
    id: "INVT-020", domain: 4, topic: "UK POCA Part 8 investigation orders: production, customer information and account monitoring", hy: false, difficulty: "medium",
    q: "A UK bank's law enforcement liaison team is updating its procedures for orders under Part 8 of the Proceeds of Crime Act 2002 (England and Wales). Which statements are correct? (Choose two.)",
    options: [
      "A customer information order can cover all financial institutions, or a description of them, and requires each to provide customer information on the named person when given written notice",
      "An account monitoring order may require a bank to provide account information about the named person for up to 12 months from the date the order is made",
      "Unless the judge sets another period, a production order must be complied with within seven days beginning with the day it is made",
      "A senior NCA officer may make a production order without going to a judge where the investigation is urgent and involves large sums",
      "A bank may refuse to comply with a customer information order notice unless the customer has given written consent to the disclosure"
    ],
    answer: [0, 2],
    explanation: "Under POCA s.363(4)-(5), an application for a customer information order may specify all financial institutions, particular descriptions of them, or particular institutions, and each must provide the customer information it holds on the named person when given written notice. A bank may ask for evidence of the officer's authority (s.363(7)), but customer consent plays no part. Under s.345(5), the default period for a production order is seven days beginning with the day it is made. Account monitoring orders are limited to 90 days (s.370(7)), and production orders are made by a judge (s.345(1)).",
    source: [
      { label: "Proceeds of Crime Act 2002, s.363 (customer information orders)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/363" },
      { label: "Proceeds of Crime Act 2002, s.345 (production orders)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/345" }
    ]
  },
  {
    id: "INVT-021", domain: 1, topic: "Crypto laundering typology: peel chains (DPRK exchange hack lesson)", hy: true, difficulty: "medium",
    q: "Corvid Exchange's investigator, Ana Lindqvist, traces a large deposit of hacked bitcoin. The coins left one address holding about 100 BTC and moved through more than 200 transactions. In each, a slightly smaller balance went to a brand-new address, while a small, irregular amount split off, often to deposit addresses at different exchanges, Corvid among them. The hackers had also tried to open exchange accounts with photos whose metadata showed they had been edited. Which laundering technique do the 200 transactions MOST clearly show?",
    options: [
      "Chain-hopping, which means swapping the coins into other assets on different blockchains",
      "CoinJoin mixing, which means pooling the coins with other users' coins in batched transactions",
      "A peel chain, which means peeling small amounts off a large balance through many new addresses",
      "Nested exchange use, which means trading through another exchange's account at a host exchange"
    ],
    answer: [2],
    explanation: "A 2020 DOJ forfeiture complaint about the laundering of funds stolen by North Korean actors defines a peel chain. A large amount at one address is sent through a series of transactions, each moving a slightly smaller amount to a new address while some coins peel off, often to exchanges. It notes that sophisticated criminals use chains of hundreds of transactions. The same complaint describes doctored KYC photos, but that is an onboarding fraud red flag, not the technique shown by the transaction pattern. The coins stay on one blockchain, so this is not chain-hopping, and nothing indicates coins pooled with other users.",
    source: [{ label: "DOJ, Verified Complaint for Forfeiture, US v. 113 Virtual Currency Accounts (D.D.C., 2 Mar 2020)", url: "https://www.justice.gov/opa/press-release/file/1253491/download" }]
  },
  {
    id: "INVT-022", domain: 1, topic: "Crypto cash-out typology: professional OTC traders for hack proceeds", hy: false, difficulty: "hard",
    q: "Investigator Ruth Okafor at a US exchange reviews 'snowfinch', a customer whose account had no deposits for two months. Less than a week after a major foreign exchange was hacked, the account began receiving bitcoin that her analytics trace to the hack. Snowfinch sells the coins for fiat and wires the proceeds, for a fee, to nine bank accounts in another country. His peer-to-peer trading advert says 'no ID needed', and in thousands of small trades he sells bitcoin for prepaid gift cards. He also posts trading tips on social media and recently changed his phone number. Which typology does this MOST likely show?",
    options: [
      "A romance scam victim being told by a scammer to move his savings through gift cards",
      "A professional OTC broker cashing out hack proceeds for a fee, including through gift cards",
      "A crypto miner selling newly mined bitcoin through informal peer-to-peer marketplaces",
      "An account takeover, in which criminals use stolen credentials to empty a dormant account"
    ],
    answer: [1],
    explanation: "This mirrors the 2020 DOJ forfeiture complaint on North Korea's exchange hacks. Two Chinese OTC traders converted virtual currency traceable to the hack into fiat for a fee and sent it to customers through many linked bank accounts. One had made no deposits for about two months before the hack, advertised that no ID was necessary, and sold bitcoin for prepaid Apple iTunes gift cards, which the complaint calls 'a known method of money laundering'. The account receives traced hack proceeds rather than losing funds, which rules out a victim or a takeover. Mining income would not trace to a hack. The social media tips and phone change are distractors.",
    source: [{ label: "DOJ, Verified Complaint for Forfeiture, US v. 113 Virtual Currency Accounts (D.D.C., 2 Mar 2020), paras. 59-72", url: "https://www.justice.gov/opa/press-release/file/1253491/download" }]
  },
  {
    id: "INVT-023", domain: 1, topic: "Crypto obfuscation: coordinated mixing vs added hops (Samourai Wallet lesson)", hy: false, difficulty: "hard",
    q: "A VASP's investigations team reviews two customers. Customer Ilse Moreau's deposits came out of a transaction that batched her coins with coins from many other wallet users at the same time, coordinated by her wallet software. Customer Tariq Bose's deposits came from his own wallet, but the wallet added four unnecessary intermediate transactions between his sending address and the VASP. Both use the same mobile wallet app, popular with privacy enthusiasts, and both have stable salaries. Which statement BEST describes what each feature is designed to do?",
    options: [
      "Both features are ordinary network fees, so neither one changes how traceable the funds are to the VASP's tools",
      "Ilse's feature only splits her coins between her own addresses, while Tariq's is a mixer pooling many users' coins",
      "Both features are travel rule tools that send the originator's details to the VASP along with each transaction",
      "Ilse's feature obscures the coins' source by mixing; Tariq's adds hops so screening struggles to link the funds"
    ],
    answer: [3],
    explanation: "In the Samourai Wallet case (guilty pleas July 2025), 'Whirlpool' coordinated batches of bitcoin exchanges between groups of users, obscuring the original source of holdings. 'Ricochet' let users add unnecessary intermediate transactions, or 'hops', making it much harder for monitoring entities to connect transfers to illicit activity. More than 80,000 BTC, worth over $2 billion, passed through these services. The runner-up reverses the two features. Neither feature is a fee or a travel rule tool, and the customers' stable salaries do not explain why they used them.",
    source: [{ label: "IRS-CI press release (July 2025): Founders of Samourai Wallet cryptocurrency mixing service plead guilty", url: "https://www.irs.gov/compliance/criminal-investigation/founders-of-samourai-wallet-cryptocurrency-mixing-service-plead-guilty" }]
  },
  {
    id: "INVT-024", domain: 1, topic: "Foreign bribery concealed through commissions and intermediaries (Trafigura lesson)", hy: false, difficulty: "hard",
    q: "Investigator Leon Faure reviews Meridia Advisory Ltd, a two-person consultancy with a bank account in Geneva. It receives monthly 'commission' payments from a commodity trader, each equal to 18 cents per barrel on oil cargoes bought from a state-owned oil company. Within days, Meridia forwards almost all of each payment to shell companies in two offshore centres. Those companies then pay individuals who withdraw cash in the oil company's home country. Meridia's website lists no staff, and its director also owns a yacht charter business. Which typology does this MOST likely show?",
    options: [
      "Bribery of foreign officials, with per-barrel payments passed through shell companies and intermediaries and paid out in cash",
      "Trade-based money laundering through over-invoicing of oil cargoes to move value out of the state oil company's country",
      "Sanctions evasion through a front company that hides a designated oil buyer behind an advisory firm's commission contract",
      "Tax evasion by the director, who diverts his yacht business revenue into an advisory company to reduce his personal taxes"
    ],
    answer: [0],
    explanation: "In March 2024, Trafigura pleaded guilty to conspiring to violate the FCPA and agreed to pay over $126 million. It had agreed to pay bribes of up to 20 cents per barrel on oil products traded with Petrobras, hiding them through shell companies and intermediaries who used offshore accounts to deliver cash to officials in Brazil. Meridia's per-barrel commissions, quick onward payments to shells and cash withdrawals in the officials' country fit this pattern. Over-invoicing (the runner-up) would show in cargo prices, not a consultancy's commissions. Nothing points to a sanctioned party, and the yacht business is a decoy.",
    source: [{ label: "DOJ press release (28 Mar 2024): Swiss Commodities Trading Company Pleads Guilty to Foreign Bribery Scheme", url: "https://www.justice.gov/archives/opa/pr/swiss-commodities-trading-company-pleads-guilty-foreign-bribery-scheme" }]
  },
  {
    id: "INVT-025", domain: 1, topic: "Bribery red flags in a customer's use of an intermediary (Wolfsberg ABC Guidance)", hy: false, difficulty: "medium",
    q: "Corporate customer Ostrava Build Ltd wins a EUR 60 million road contract from a transport ministry. Its bank's investigator reviews payments to Dravo Consult, a local agent hired to 'manage permits'. Dravo has 20 years of experience with permits in the region, invoices Ostrava monthly in line with project milestones, and is audited by a well-known firm. Ostrava's emails show that the ministry's procurement director recommended Dravo. Days after the award, Dravo asked for 60% of its total fee to be paid to a company in a third country where neither Dravo nor the project is located. Which TWO facts are the strongest bribery red flags? (Choose two.)",
    options: [
      "Dravo has 20 years of experience with permits in the region",
      "Dravo invoices monthly in line with the project's milestones",
      "The ministry's procurement director recommended hiring Dravo",
      "60% of the fee was requested after the award, to a third country",
      "Dravo's accounts are audited by a well-known accounting firm"
    ],
    answer: [2, 3],
    explanation: "Appendix A of the Wolfsberg ABC Guidance lists as red flags an intermediary suggested by a public official connected to the matter, and requests for payment of a commission, or a large part of it, before or immediately on award of the contract. It also lists payment to an entity in a country that is not the intermediary's principal place of business or where the services are performed. Relevant experience, milestone-based invoicing and an external audit point the other way. The guide lists lack of experience and deviation from progress payment models as red flags.",
    source: [{ label: "Wolfsberg Group, Anti-Bribery and Corruption Compliance Programme Guidance (2023), Appendix A", url: "https://db.wolfsberg-group.org/assets/8cbe37e5-9286-4315-81f7-21e9ac70d8d2/Wolfsberg%20ABC%20Guidance%202023.pdf" }]
  }
]);
