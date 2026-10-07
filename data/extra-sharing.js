// Practical cases: information sharing and its legal limits (PPPS-001 to PPPS-025)
window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "PPPS-001", domain: 2, topic: "ECCTA 2023 s.188: the request condition (no safeguarding action needed)", hy: true, difficulty: "hard",
    q: "Harlow & Dene Bank, a UK bank, is onboarding Corvin Lusk, who wants a business account for a new import company. Its onboarding team learns that Lusk held a personal account at Easterby Bank until March 2026, when he closed it himself to move to a cheaper provider. Easterby took no action against him. However, Harlow's analyst has reason to believe that Easterby holds notes on several unexplained cash deposits Lusk made in 2025. Harlow emails Easterby asking for any information relevant to its CDD decision. Easterby's lawyer says it cannot answer without risking a breach-of-confidence claim, because it never decided to exit or restrict Lusk. Under section 188 of the Economic Crime and Corporate Transparency Act 2023, what is the BEST response?",
    options: [
      "Easterby is not protected, because section 188 applies only where the disclosing firm has itself decided to take safeguarding action",
      "Easterby is protected only if it first files a SAR and obtains the NCA's consent to disclose the deposit notes to Harlow",
      "Easterby can rely on the request condition: Harlow asked, had reason to believe Easterby held useful information, and sharing may assist Harlow's CDD",
      "Easterby is not protected, because Lusk is a former customer and section 188 covers only customers with an open relationship"
    ],
    answer: [2],
    explanation: "Section 188 protects a direct disclosure between regulated-sector businesses about a customer or former customer when either the request condition or the warning condition is met, and the discloser is satisfied the information will or may assist the recipient's 'relevant actions', which include deciding what CDD to apply to a proposed customer (s.191). The request condition (s.188(4)) is met here: Harlow asked, and had reason to believe that Easterby held relevant information. The runner-up confuses the two conditions: a decision to exit, refuse or restrict is needed only for the warning condition (s.188(5)-(6)). No SAR or NCA consent is required, former customers are expressly covered, and data protection law still applies (s.188(11)).",
    source: [
      { label: "Economic Crime and Corporate Transparency Act 2023 – s.188 (direct disclosures)", url: "https://www.legislation.gov.uk/ukpga/2023/56/section/188" },
      { label: "ECCTA 2023 – s.191 (meaning of 'relevant actions')", url: "https://www.legislation.gov.uk/ukpga/2023/56/section/191" }
    ]
  },
  {
    id: "PPPS-002", domain: 2, topic: "ECCTA 2023 s.189: indirect sharing through an intermediary needs a safeguarding decision", hy: false, difficulty: "hard",
    q: "Brightwater Pay, a UK electronic money institution with 300 staff, belongs to an industry fraud-prevention database run by a not-for-profit intermediary. Under their agreement, the intermediary may process personal data only where the UK GDPR applies. In August 2026 Brightwater's monitoring flags customer Talia Morwen for receiving 14 small payments from unrelated people and forwarding them within hours to a crypto exchange. After review, Brightwater decides to keep the account open under enhanced monitoring and to submit a SAR. A fraud manager wants to upload Morwen's details to the database the same day, to warn other members. What is the MOST accurate assessment of the protection under section 189 of the Economic Crime and Corporate Transparency Act 2023 for that upload?",
    options: [
      "It is not protected yet, because section 189 requires Brightwater to have decided to end, refuse or restrict the relationship for economic crime reasons",
      "It is protected, because an e-money institution is in scope and the intermediary's agreement requires UK GDPR-compliant processing",
      "It is protected only after the NCA grants a defence against money laundering for the continued operation of the account",
      "It is not protected, because section 189 applies only to deposit-taking bodies and not to electronic money institutions"
    ],
    answer: [0],
    explanation: "Section 189 protects indirect disclosures, made through an intermediary such as a fraud database, only if the disclosing firm has decided, because of economic crime concerns, to terminate the relationship, refuse a product or service, or restrict access (s.189(1)(c)). Brightwater has chosen to keep the account open, so that condition is not met. The runner-up is wrong for that reason: an EMI is in scope (s.189(3)(a)(ii)) and the UK GDPR agreement condition (s.189(1)(f)) is satisfied, but every condition must be met. A DAML is unrelated, and any upload must not reveal the SAR.",
    source: [
      { label: "Economic Crime and Corporate Transparency Act 2023 – s.189 (indirect disclosures)", url: "https://www.legislation.gov.uk/ukpga/2023/56/section/189" }
    ]
  },
  {
    id: "PPPS-003", domain: 2, topic: "ECCTA 2023: which firms can use s.189 indirect sharing", hy: false, difficulty: "medium",
    q: "Two UK firms are exiting the same customer over suspected investment-fraud proceeds: Kestrel Wealth, an FCA-authorised discretionary investment manager, and Northgate Crypto, a registered cryptoasset exchange provider. Both want to send the customer's details to a shared industry database run by an intermediary, under an agreement that meets the UK GDPR condition. Kestrel also knows which UK bank holds the customer's main account. Which statement BEST describes their options under sections 188 and 189 of the Economic Crime and Corporate Transparency Act 2023?",
    options: [
      "Both may use section 189 indirect sharing, because any business in the regulated sector can share through an intermediary",
      "Neither may share at all until the NCA has confirmed that a warning would not prejudice an investigation",
      "Only Kestrel may use section 189, because investment managers are expressly listed and crypto firms are excluded",
      "Northgate may use section 189; Kestrel cannot, but may still warn the bank directly under section 188's warning condition"
    ],
    answer: [3],
    explanation: "Indirect sharing under s.189 is open only to deposit-taking bodies, electronic money institutions, payment institutions, cryptoasset exchange providers and custodian wallet providers, plus larger audit, insolvency, accountancy, tax and legal firms (s.189(3)). A cryptoasset exchange is in scope, but an investment manager is not. Direct sharing under s.188 is broader: it covers businesses in the regulated sector, and Kestrel's decision to exit meets the warning condition. No NCA clearance is required.",
    source: [
      { label: "ECCTA 2023 – s.189(3) (businesses that may make indirect disclosures)", url: "https://www.legislation.gov.uk/ukpga/2023/56/section/189" },
      { label: "ECCTA 2023 – s.188 (direct disclosures)", url: "https://www.legislation.gov.uk/ukpga/2023/56/section/188" }
    ]
  },
  {
    id: "PPPS-004", domain: 2, topic: "ECCTA 2023 s.188: limits (data protection, privileged disclosures, civil liability only)", hy: true, difficulty: "hard",
    q: "Fenwick Bank's head of financial crime is drafting a UK policy on warning other regulated firms under section 188 of the Economic Crime and Corporate Transparency Act 2023. The bank's DPO reviews the draft, as does Hollins LLP, the law firm that advises the bank and is itself in the regulated sector. Hollins mentions that a client told it, while seeking legal advice, about a shared customer's offshore structure. Which statements should the final policy include? (Choose two.)",
    options: [
      "A section 188 disclosure also protects the bank from criminal liability for tipping off if the warning reveals that a SAR was made",
      "Section 188 does not authorise a disclosure that would breach data protection legislation, so UK GDPR requirements still apply",
      "The receiving firm may use the information for any lawful purpose, including cross-selling, once it has been received in good faith",
      "Protection applies only if the customer is told about the disclosure within 30 days, so that the customer can challenge it",
      "A disclosure by Hollins of information it received in privileged circumstances, such as from a client seeking legal advice, is not protected"
    ],
    answer: [1, 4],
    explanation: "Section 188 gives only civil protections: no breach of confidence and no civil liability to the person concerned (s.188(2)). Nothing in it authorises a disclosure that would breach data protection legislation (s.188(11)), and privileged disclosures are excluded (s.188(1)(f) and s.190). Criminal tipping-off provisions still apply, so a warning must not reveal a SAR. The recipient is protected only when it uses the information for its 'relevant actions' (CDD and exit decisions), not for cross-selling, and the Act requires no notice to the customer.",
    source: [
      { label: "ECCTA 2023 – s.188 (direct disclosures)", url: "https://www.legislation.gov.uk/ukpga/2023/56/section/188" },
      { label: "ECCTA 2023 – s.190 (meaning of 'privileged disclosure')", url: "https://www.legislation.gov.uk/ukpga/2023/56/section/190" }
    ]
  },
  {
    id: "PPPS-005", domain: 2, topic: "UK GDPR recognised legitimate interest: the crime condition (DUAA 2025)", hy: true, difficulty: "hard",
    changed: "Data (Use and Access) Act 2025: UK GDPR Art. 6(1)(ea) and Annex 1 in force from 5 Feb 2026",
    q: "In March 2026, Ashcombe Building Society's fraud team wants to send Pellar Bank the name and account details of Rhys Delane, a suspected money mule whose account at Pellar is receiving scam payments from Ashcombe's members. Delane is not an Ashcombe customer, Pellar has not asked for the information, and Ashcombe has filed no SAR about him. Ashcombe's DPO says the sharing needs a lawful basis under Article 6 of the UK GDPR. She insists on a full legitimate interests assessment, weighing Delane's rights, before anything is sent. Which response BEST reflects UK data protection law as amended by the Data (Use and Access) Act 2025?",
    options: [
      "Ashcombe must obtain Delane's consent, because no other lawful basis allows a firm to share data about a non-customer",
      "Ashcombe may rely on the recognised legitimate interest crime condition, without a balancing test, if sharing is necessary and other UK GDPR rules are met",
      "Ashcombe may share under section 188 of the ECCTA 2023, which overrides the UK GDPR for warnings between regulated firms",
      "Ashcombe must complete the balancing test, because recognised legitimate interests are available only to public authorities"
    ],
    answer: [1],
    explanation: "Since 5 February 2026, Article 6(1)(ea) and Annex 1 of the UK GDPR provide a 'recognised legitimate interest' basis, including a crime condition covering detecting, investigating or preventing crime. The ICO says no balancing test is needed because the law has already done it. The firm must still show that the sharing is necessary and comply with the other UK GDPR rules, such as transparency, the right to object, and a DPA 2018 condition for criminal offence data. The runner-up is wrong because the basis is not limited to public authorities, and a full legitimate interests assessment under Art. 6(1)(f) is optional, not required. Section 188 does not apply: Delane is not Ashcombe's customer, and s.188 does not override data protection law.",
    source: [
      { label: "UK GDPR Annex 1 – recognised legitimate interests (crime condition), inserted 5.2.2026", url: "https://www.legislation.gov.uk/eur/2016/679/annex/1" },
      { label: "ICO – Recognised legitimate interest (no balancing test; crime condition)", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/a-guide-to-lawful-basis/recognised-legitimate-interest/" }
    ]
  },
  {
    id: "PPPS-006", domain: 2, topic: "AMLR Art. 75(4)(k): sharing STR information in a partnership needs FIU agreement", hy: true, difficulty: "hard",
    q: "In November 2027 Vellmar Bank, a member of a German partnership for information sharing under Article 75 of the EU AMLR, submits a suspicious transaction report to the German FIU on customer Odile Brack. Her account received EUR 410,000 from 37 suspected investment-fraud victims. Two other partnership members hold accounts that received onward transfers from Brack. Vellmar's investigator wants to post a summary on the partnership platform saying that an STR was filed and setting out its key findings. The platform is secure and pseudonymises customer names. Which condition MUST be met before the STR information is shared?",
    options: [
      "None: once banks join a partnership, the prohibition of disclosure no longer applies between members",
      "Brack must first be told that her information will be shared, as part of the bank's GDPR transparency duties",
      "Each receiving bank must first file its own STR on Brack, so that the information is not new to it",
      "The German FIU, to which the STR was submitted, must agree to the disclosure"
    ],
    answer: [3],
    explanation: "Article 75(3)(g) allows partnership members to exchange information on suspicions reported under Article 69, but Article 75(4)(k) allows this only where the FIU that received the STR has agreed to the disclosure. The runner-up, that membership lifts the disclosure ban, is wrong: Article 73's prohibition still applies, and (k) is the condition that allows this specific exchange. Telling Brack would tip her off. Pseudonymisation is a required security measure (Art. 75(4)(e)), but it does not replace FIU agreement.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR) – Arts. 73 and 75", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "PPPS-007", domain: 2, topic: "AMLR Art. 75(4)(f): which customers a partnership may share data on", hy: true, difficulty: "hard",
    q: "Four Dutch banks plan an AMLR Article 75 partnership from 2028 to detect money mule networks. Their data science lead proposes that each bank upload transaction data on its entire retail customer base, about 9 million people, every night, so that a network model can find links no single bank can see. The data would be pseudonymised, encrypted and held on a platform audited every year. The banks have notified their supervisors and drafted a data protection impact assessment. Which feature of the proposal is MOST likely to breach Article 75?",
    options: [
      "Sharing data on all retail customers, rather than only those linked to higher risk or needing more information to assess risk",
      "Pseudonymising the data, because the AMLR requires partners to see customers' full names and identity details",
      "Using a network model, because the AMLR prohibits analytics that combine data from more than one obliged entity",
      "Holding the data on a shared platform, because each bank must keep partnership information only on its own systems"
    ],
    answer: [0],
    explanation: "Article 75(4)(f) limits sharing to customers whose behaviour or transactions are associated with higher ML/TF risk under the EU and national risk assessments, customers in the enhanced-measures situations of Articles 29-31 and 36-46, or customers about whom more information is needed to decide whether they are higher risk. Article 75(3) also allows information to be exchanged only to the extent necessary for the partnership's activities. Bulk upload of a whole customer base fails both tests. Pseudonymisation is encouraged (Art. 75(4)(e)), and the AMLR bans neither joint analytics nor shared platforms.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR) – Art. 75(3)-(4)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "PPPS-008", domain: 2, topic: "AMLR Art. 75(4)(g): sharing AI-generated information needs human oversight", hy: false, difficulty: "hard",
    q: "Sundal Bank, a member of an EU partnership for information sharing in 2028, uses a machine-learning model that gives every customer a nightly 'mule likelihood' score. A developer proposes an automated feed that would post every customer scoring above 0.9 to the partnership platform, with the score and the transactions behind it, without analyst review, so that partners can act faster. Last quarter the model flagged 1,200 customers, and analysts later cleared 70% of them. All flagged customers fall within higher-risk situations in the bank's risk assessment. What is the BEST course of action under Article 75 of the AMLR?",
    options: [
      "Approve the feed, because a customer being in a higher-risk situation is the only condition for sharing in a partnership",
      "Reject any sharing of model output, because the AMLR bans sharing information produced by AI or machine learning",
      "Share model-generated information only once the process has adequate human oversight, such as analyst review before posting",
      "Approve the feed, but tell each customer that their score has been shared so that they can challenge it"
    ],
    answer: [2],
    explanation: "Article 75(4)(g) allows information generated by AI, machine learning or algorithms to be shared only where those processes were subject to adequate human oversight. The 70% clearance rate shows why unreviewed scores should not go to partners. The runner-up is wrong because the higher-risk test in Article 75(4)(f) is only one of several cumulative conditions. The AMLR does not ban AI outputs outright, and telling customers that an ML/TF analysis may be under way would breach the Article 73 prohibition of disclosure.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR) – Arts. 73 and 75(4)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "PPPS-009", domain: 2, topic: "AMLR Art. 75(5): onward transmission of partnership information", hy: false, difficulty: "hard",
    q: "Through an EU partnership for information sharing, Albrecht Bank in Austria receives details from a partner bank about a network of shell companies used to launder procurement-fraud proceeds. One of the companies is Albrecht's customer. In 2028 several requests for that information arrive. Under Article 75(5) of the AMLR, which onward transmissions are permitted? (Choose two.)",
    options: [
      "Including the information in a suspicious transaction report that Albrecht submits to the Austrian FIU",
      "Forwarding it to a credit reference agency so that other lenders can price the companies' loans",
      "Giving it to a lawyer for one of the companies who asks for it in a civil claim about an account restriction",
      "Providing it to the public prosecutor on request, subject to any prior judicial authorisation required by national law",
      "Passing it informally to a non-member Austrian bank that the customer also uses, to warn it about the network"
    ],
    answer: [0, 3],
    explanation: "Article 75(5) bans further transmission of partnership information except: to another obliged entity under the Article 49(1) reliance rules; in a report to the FIU or a response to an FIU request; to AMLA under Article 93 of the AMLA Regulation; or on request of law enforcement or judicial authorities, subject to any prior authorisations or procedural guarantees under national law. Credit reference agencies, civil litigants and informal warnings to non-member banks fall outside these exceptions. Using the information for credit pricing would also breach the purpose limits of Article 76(4).",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR) – Art. 75(5) and Art. 76(4)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "PPPS-010", domain: 2, topic: "AMLR Art. 75: records of sharing and policies before joining", hy: false, difficulty: "medium",
    q: "In March 2028 Castellan Bank's internal audit reviews the bank's first six months in an EU partnership for information sharing. Investigators have exchanged information about 85 customers, mostly through posts on a secure platform, but also in about 20 phone calls between investigators that were not logged. The bank's internal policies on partnership sharing were finalised in January 2028, two months after it started participating. The supervisor has not asked for an independent audit of the partnership. Which finding should audit rate as the MOST serious breach of Article 75?",
    options: [
      "The supervisor has not required an independent audit of how the partnership is functioning",
      "Not every instance of sharing was recorded, and the policies were finalised only after participation began",
      "Investigators used phone calls, since Article 75 requires all sharing to go through a secure electronic platform",
      "Customers were not personally notified before their data were exchanged within the partnership"
    ],
    answer: [1],
    explanation: "Article 75(4)(a) requires obliged entities to record all instances of information sharing within the partnership. Article 75(6) requires the internal policies and procedures, covering the extent of sharing, roles and responsibilities, and the risk assessments used, to be drawn up before participation begins. An independent audit is needed only where supervisors deem it necessary (Art. 75(7)). Article 75 does not prescribe a channel, and it does not require customers to be notified individually, which could in any case conflict with the Article 73 prohibition of disclosure.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR) – Art. 75(4), (6) and (7)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "PPPS-011", domain: 2, topic: "Reusing CDD data for marketing: UK MLR reg. 41 vs AMLR Art. 76(4)", hy: false, difficulty: "hard",
    q: "Marlowe Group owns a UK bank and an Irish bank. In 2028 its marketing director wants to reuse the source-of-wealth and income data that both banks collected during customer due diligence, to pick customers for a new premium investment service. She proposes asking the customers for explicit consent first. The group DPO is asked whether this plan works in both countries. Which answer is MOST accurate?",
    options: [
      "It works in both, because explicit consent under data protection law overrides any restriction in AML legislation",
      "It works in neither, because AML data in both the UK and the EU may never be used for any purpose except preventing ML/TF",
      "It can work in the UK with customer consent under MLR regulation 41, but the AMLR prohibits commercial use of the Irish data",
      "It can work in Ireland under the AMLR's consent exception, but the UK MLRs prohibit all commercial reuse of CDD data"
    ],
    answer: [2],
    explanation: "Under regulation 41 of the UK Money Laundering Regulations 2017, personal data obtained for the Regulations may be processed only to prevent ML, TF or PF, unless another enactment permits other use or the data subject consents to it (reg. 41(3)(b)). Article 76(4) of the EU AMLR, which applies from 10 July 2027, states that processing personal data on the basis of the Regulation for commercial purposes is prohibited, and it contains no consent exception. The runner-up overlooks the UK consent route. The idea that consent overrides AML law is wrong in the EU.",
    source: [
      { label: "UK Money Laundering Regulations 2017 – reg. 41 (data protection)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/41" },
      { label: "Regulation (EU) 2024/1624 (AMLR) – Art. 76(4)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "PPPS-012", domain: 2, topic: "AMLA and EDPB joint guidelines on partnerships for information sharing (2026)", hy: false, difficulty: "medium",
    changed: "AMLA–EDPB announcement of joint guidelines on partnerships for information sharing, 1 Jul 2026",
    q: "A compliance officer at an EU bank that is preparing to join a partnership for information sharing reads that AMLA and the European Data Protection Board (EDPB) announced joint work on such partnerships in July 2026. Which statement accurately describes that development?",
    options: [
      "AMLA and the EDPB issued binding joint guidelines that replace the supervisor notification and verification step in Article 75",
      "The EDPB opened a consultation on suspending partnerships for information sharing until the GDPR is amended",
      "AMLA will authorise each partnership centrally, after the EDPB issues an opinion on the partnership's data protection impact assessment",
      "They will develop joint guidelines on building partnerships that also protect personal data, with a public consultation planned for 2027"
    ],
    answer: [3],
    explanation: "On 1 July 2026 AMLA and the EDPB announced that a joint drafting team will prepare Joint Guidelines on partnerships for information sharing. The guidelines will explain in practical terms how partnerships can combine effective sharing with personal data protection, for obliged entities, supervisors, FIUs and data protection authorities. An event later in 2026 will gather early views, and a public consultation on the draft is planned for the first half of 2027. Article 75 applies from 10 July 2027, and its supervisor notification and verification step (Art. 75(2)) is unchanged.",
    source: [
      { label: "AMLA press release (1 Jul 2026) – AMLA and EDPB develop joint guidelines on partnerships for information sharing", url: "https://www.amla.europa.eu/press-release-amla-and-edpb-develop-joint-guidelines-partnerships-information-sharing_en" },
      { label: "Regulation (EU) 2024/1624 (AMLR) – Art. 75(2)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "PPPS-013", domain: 2, topic: "AMLR Art. 73(5): disclosure between institutions involved in the same transaction", hy: true, difficulty: "hard",
    q: "In 2028 Lisbon-based Banco Atalaia receives an instruction from its customer, Teodor Vass, to transfer EUR 260,000 to an account at Kranz Bank in Munich as payment for 'consulting'. Atalaia's review finds that the funds arrived the previous day from a company recently named in fraud reports, and it submits an STR to the Portuguese FIU. Atalaia's investigator wants to tell Kranz Bank, the beneficiary's bank for this same transfer, that the transaction has been reported, so that Kranz can assess its own customer. Both banks are subject to professional secrecy and data protection requirements. Under Article 73 of the AMLR, which statement is CORRECT?",
    options: [
      "Disclosure is permitted, because it concerns the same transaction involving two EU credit institutions bound by secrecy and data protection rules",
      "Disclosure is prohibited, because the AMLR's exceptions to the disclosure ban cover only entities in the same group",
      "Disclosure is permitted only if both banks are members of the same partnership for information sharing",
      "Disclosure is permitted only after the 3-working-day period for the Portuguese FIU to postpone the transaction has passed"
    ],
    answer: [0],
    explanation: "Article 73(1) prohibits disclosing that information has been or will be reported to the FIU. Article 73(5) allows disclosure between credit institutions, financial institutions and certain professionals, in cases relating to the same transaction involving two or more of them, if they are in the EU (or an equivalent third country) and subject to professional secrecy and personal data protection requirements. The runner-up ignores this exception: the group exception in Article 73(3) is only one of several. Partnership membership is a separate route under Article 75 and is not required. The 3-working-day period in Article 71 concerns carrying out the transaction, not disclosure.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR) – Arts. 71 and 73", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "PPPS-014", domain: 2, topic: "FATF 2022 data-sharing recommendations: metrics to show continued necessity", hy: false, difficulty: "medium",
    q: "Three banks in Country K have run a private-sector pilot for 12 months that shares data on suspected mule accounts. The data protection authority, which was consulted at the design stage, asks the banks to show that the sharing is still justified. So far the banks have tracked only the number of records uploaded (1.4 million) and the platform's availability (99.9%). According to the FATF's 2022 report Partnering in the Fight Against Financial Crime, what should the banks do NEXT?",
    options: [
      "Report the volume and availability figures, since a high volume of shared records shows the initiative is proportionate",
      "Set performance indicators showing whether the sharing achieves its purpose and remains necessary and proportionate",
      "End contact with the authority, since the FATF advises consulting data protection authorities only at the design stage",
      "Widen the sharing to all customers, since more data will make any later assessment of the initiative's value more reliable"
    ],
    answer: [1],
    explanation: "The FATF recommends that private-sector initiatives identify metrics to measure success: clear performance indicators let participants judge whether the initiative achieves its purpose and whether the sharing remains necessary, reasonable and proportionate under data protection rules. Volume and availability measure activity, not outcomes. The FATF also calls for engagement with data protection authorities from the design phase and on an ongoing basis. Widening the scope without evidence works against proportionality.",
    source: [
      { label: "FATF (2022) Partnering in the Fight Against Financial Crime – key recommendations (copy hosted by Saudi SAFIU)", url: "https://www.aml.gov.sa/en-us/GuidanceReports/Partnering%20in%20the%20Fight%20against%20Financial%20Crime%20-%20handout.pdf" }
    ]
  },
  {
    id: "PPPS-015", domain: 2, topic: "FATF 2022: privacy-enhancing technology is no silver bullet; harmonised data", hy: false, difficulty: "hard",
    q: "A consortium of five banks in Country L is designing a collaborative analytics platform to detect trade-based money laundering. Each bank formats counterparty names, addresses and invoice fields differently. One vendor claims that its homomorphic-encryption product 'removes all data protection issues'. A bank's data protection officer asks which design choices are in line with the FATF's 2022 recommendations for private-sector information sharing. Which choices should the consortium adopt? (Choose two.)",
    options: [
      "Rely on the encryption product to settle data protection compliance, so that no impact assessment is needed",
      "Wait to contact the data protection authority until the platform has produced its first results",
      "Agree common data standards and formats, for example using structured payment message fields, before analytics begin",
      "Ask every customer for consent before their data are processed, since consent is the only safe legal basis",
      "Use privacy-enhancing technology as one support for compliance, alongside a DPIA and data-sharing agreements"
    ],
    answer: [2, 4],
    explanation: "The FATF's 2022 recommendations to the private sector say privacy-enhancing technologies can support data protection compliance but are not a 'silver bullet'. Initiatives should pursue data protection by design, using a DPIA, data-sharing agreements and, where relevant, a legitimate interest assessment. They should also harmonise data through common standards and formats, such as SWIFT data fields. The FATF calls for engagement with data protection authorities from the design phase, not after launch, and it does not present customer consent as the required basis; it points instead to legitimate interest assessments.",
    source: [
      { label: "FATF (2022) Partnering in the Fight Against Financial Crime – key recommendations (copy hosted by Saudi SAFIU)", url: "https://www.aml.gov.sa/en-us/GuidanceReports/Partnering%20in%20the%20Fight%20against%20Financial%20Crime%20-%20handout.pdf" }
    ]
  },
  {
    id: "PPPS-016", domain: 2, topic: "FATF 2022: the public sector's role in enabling private-sector sharing", hy: false, difficulty: "medium",
    q: "Country M's finance ministry wants to encourage banks to share information on fraud and money laundering with each other. The banks say they are unsure what the data protection authority will accept, and each one has received different informal advice from different agencies. Which public-sector action does the FATF's 2022 report Partnering in the Fight Against Financial Crime recommend to address this?",
    options: [
      "Name a lead agency or contact point on private-sector sharing that keeps up dialogue with the data protection authority and gives consistent advice",
      "Exempt AML information sharing from data protection law, so that banks no longer need a legal basis to share",
      "Require all banks to send their full customer databases to the FIU, which would then pass the data on to other banks",
      "Leave the question to the courts, since guidance from public authorities could create legal uncertainty for the banks"
    ],
    answer: [0],
    explanation: "The FATF recommends that the public sector take an active facilitation role. That includes identifying a lead agency or contact point that maintains dialogue with data protection and other authorities and gives consistent advice, updating legal or supervisory instruments where needed to give a clear legal basis in line with data protection, issuing guidance or checklists, and using sandboxes and pilots. It also calls for regular dialogue between AML/CFT and data protection authorities. Removing data protection safeguards or forcing bulk transfers is not among its recommendations.",
    source: [
      { label: "FATF (2022) Partnering in the Fight Against Financial Crime – recommendations for the public sector (copy hosted by Saudi SAFIU)", url: "https://www.aml.gov.sa/en-us/GuidanceReports/Partnering%20in%20the%20Fight%20against%20Financial%20Crime%20-%20handout.pdf" }
    ]
  },
  {
    id: "PPPS-017", domain: 2, topic: "FATF INR.18: two-way group information flows on a need-to-know basis", hy: true, difficulty: "hard",
    q: "Ostrava Banking Group has its head office in Country H and 30 subsidiaries worldwide. Its subsidiary in Country R files an STR on Delmar Shipping after unusual payments linked to a sanctioned port. As group policy requires, it sends group compliance the STR, the alert analysis and the customer file. Group compliance learns that Delmar also banks with the group's subsidiaries in Countries S and T; the other 27 subsidiaries have no relationship with it. The head of group compliance proposes emailing the full STR package to all 30 subsidiary MLROs 'so everyone is aware'. Which approach BEST reflects FATF Recommendation 18 and its Interpretive Note?",
    options: [
      "Email the package to all 30 MLROs, since group-wide programmes require every subsidiary to receive every STR",
      "Keep the package at group level, since FATF allows information to flow from subsidiaries to the group but not back",
      "Return the package to Country R, since an STR and its analysis may never leave the subsidiary that filed it",
      "Share relevant information with the subsidiaries in S and T, with safeguards on confidentiality and use, including against tipping-off"
    ],
    answer: [3],
    explanation: "INR.18 paragraph 4 says group-level compliance should receive customer, account and transaction information from branches and subsidiaries, including analysis of unusual activity. This could include an STR, its underlying information or the fact that one was filed. Branches and subsidiaries should in turn receive such information from group functions when relevant and appropriate to risk management, with adequate safeguards on confidentiality and use, including to prevent tipping-off. The runner-up, sending it to all 30, goes beyond what is relevant and widens the risk of disclosure. One-way flow and a total ban both contradict INR.18.",
    source: [
      { label: "FATF Recommendations (2026 update) – R.18 and its Interpretive Note, para. 4 (official copy hosted by the EAG)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "PPPS-018", domain: 2, topic: "Europol EFIPPP: a strategic partnership (typologies, not personal data)", hy: false, difficulty: "medium",
    q: "Mireille Danet, a financial intelligence analyst at a French bank, has just joined a working group of the Europol Financial Intelligence Public Private Partnership (EFIPPP). For her first meeting, on investment fraud, she plans to present a recent case in which her bank traced EUR 3.2 million through 14 accounts, including customer names and IBANs, so that police members can follow up. Her manager questions whether this is what EFIPPP is for. Which statement BEST describes EFIPPP?",
    options: [
      "An operational taskforce in which banks share named customer data with Europol so that it can open investigations",
      "A mechanism set up in 2017 to develop and share structured threat information, such as typologies, rather than personal data",
      "A legal gateway under the AMLR that requires EU banks to report cross-border cases to Europol instead of to their FIU",
      "A Europol database that banks must screen new customers against before opening an account"
    ],
    answer: [1],
    explanation: "According to the EFIPPP Practical Guide (2025), EFIPPP was set up in 2017 between private-sector stakeholders, FIUs and investigative authorities to develop and share structured threat information, such as financial crime typologies. Its secretariat sits in Europol's European Financial and Economic Crime Centre. The guide classes EFIPPP as a 'strategic' mechanism that does not share personal data, unlike operational partnerships such as the UK's JMLIT+ or the Dutch Fintell Alliance. Suspicions about named customers still go to the FIU in an STR.",
    source: [
      { label: "EFIPPP Practical Guide for Operational Cooperation between Investigative Authorities and Financial Institutions (Europol, 2025)", url: "https://www.europol.europa.eu/cms/sites/default/files/documents/EFIPPP_Practical_Guide.pdf" }
    ]
  },
  {
    id: "PPPS-019", domain: 2, topic: "Bank secrecy: data from a third-country branch in a public-private cooperation", hy: false, difficulty: "hard",
    q: "Holmgaard Bank, based in Denmark, takes part in an operational public-private cooperation with Danish investigators on a fraud network. Its branch in Country Z, which has a strict bank secrecy law, holds accounts for two of the network's companies. The investigators ask Holmgaard to give them direct, continuous access to the Country Z branch's customer and transaction data through the cooperation platform. Head office already receives the branch's data for group AML monitoring. According to the EFIPPP Practical Guide (2025), what should Holmgaard consider FIRST?",
    options: [
      "Whether Danish criminal procedure law lets the investigators compel the branch, since EU law then overrides Country Z's secrecy law",
      "Whether a data protection impact assessment has been completed, since a DPIA makes any transfer from a third-country branch lawful",
      "Whether Country Z's law permits the transfer, since direct access by EU authorities differs from head-office use to detect suspicious activity",
      "Whether the investigators have signed a confidentiality agreement, since that resolves any conflict with foreign bank secrecy laws"
    ],
    answer: [2],
    explanation: "The EFIPPP guide says that when cooperation involves data from third-country branches, whether the transfer is lawful is primarily a matter for that country's law. It often makes a difference whether the data are meant to become directly accessible to EU authorities, or only to help the EU head office identify suspicious activity. Head-office use for group AML monitoring is consistent with FATF R.18 group-wide sharing. Giving investigators direct access is a different step that may need formal channels such as mutual legal assistance. A Danish order cannot override Country Z's law, and neither a DPIA nor a confidentiality agreement settles a foreign secrecy conflict.",
    source: [
      { label: "EFIPPP Practical Guide (Europol, 2025) – section VI.2, data transfer from a third country", url: "https://www.europol.europa.eu/cms/sites/default/files/documents/EFIPPP_Practical_Guide.pdf" }
    ]
  },
  {
    id: "PPPS-020", domain: 2, topic: "314(b): sharing on suspected fraud without identifying laundered proceeds", hy: true, difficulty: "hard",
    q: "Lakeshore Credit Union's fraud team sees that member Dorian Pike has received USD 46,000 in 9 days from 11 elderly people in four states, each payment labelled 'tech support refund'. Pike forwards most of the money to an account at Ridgeway Bank. Lakeshore has not traced where the money ends up and has not yet decided whether to file a SAR. Its general counsel says Lakeshore cannot use section 314(b) to ask Ridgeway about the account, because this 'looks like fraud, not money laundering', and there is no proof that proceeds are being laundered. Both institutions are 314(b) registrants. What is the BEST response, based on FinCEN's Section 314(b) Fact Sheet?",
    options: [
      "Agree, because 314(b) covers only terrorist financing and laundering, so a fraud inquiry needs a law enforcement request",
      "Agree until a SAR is filed, because the safe harbor applies only to activity the institution has already reported",
      "Disagree only if Ridgeway confirms that it has also filed a SAR on the beneficiary account",
      "Disagree: fraud is a specified unlawful activity, and sharing is protected without identifying specific laundered proceeds"
    ],
    answer: [3],
    explanation: "FinCEN's Section 314(b) Fact Sheet explains that fraud offences are specified unlawful activities for money laundering. An institution that suspects activity may involve fraud can share under the safe harbor without having identified specific proceeds being laundered, and without having reached a conclusive determination that the activity is suspicious. Sharing does not depend on a filed SAR. Ridgeway may not reveal whether it has filed a SAR, because 314(b) does not authorise sharing SARs or disclosing their existence.",
    source: [
      { label: "FinCEN Section 314(b) Fact Sheet (updated 12 Jun 2026) – fraud as SUA; SARs may not be shared", url: "https://www.fincen.gov/system/files/shared/314bfactsheet.pdf" },
      { label: "31 CFR 1010.540 – voluntary information sharing among financial institutions", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-E/section-1010.540" }
    ]
  },
  {
    id: "PPPS-021", domain: 4, topic: "314(b) associations run by a non-financial-institution vendor", hy: false, difficulty: "hard",
    q: "ClearSignal Inc., a US analytics company that is not a financial institution under the BSA, wants to run a contract-based, unincorporated 314(b) association through which member banks and money services businesses share real-time alerts on scam payments. A payments app that is not registered as an MSB and has no AML program asks to join. One bank asks whether members may upload copies of their SARs to speed up investigations. Which statements about the arrangement are correct under FinCEN's Section 314(b) Fact Sheet? (Choose two.)",
    options: [
      "ClearSignal can form and operate the association even though it is not itself a BSA financial institution",
      "The association must be incorporated, because 314(b) does not cover groups that exist only by contract",
      "The payments app can join as a member, as long as it signs the association's confidentiality agreement",
      "Members must keep shared information secure and use it only for the purposes allowed by the 314(b) rule",
      "Members may upload copies of their SARs, because sharing inside a registered association is protected"
    ],
    answer: [0, 3],
    explanation: "FinCEN's fact sheet says the organisation that forms and operates a 314(b) association need not be a regulated financial institution, and unincorporated, contract-based associations are permitted. However, every member must be a financial institution as defined in 31 CFR 1010.540(a)(1), meaning one required to have an AML program, so the unregistered app cannot join. All participants must protect the information and use it only to identify and report ML/TF, decide whether to open or maintain an account or carry out a transaction, or comply with the BSA. Section 314(b) never authorises sharing SARs or revealing their existence.",
    source: [
      { label: "FinCEN Section 314(b) Fact Sheet (updated 12 Jun 2026) – associations, eligibility, use and security", url: "https://www.fincen.gov/system/files/shared/314bfactsheet.pdf" },
      { label: "31 CFR 1010.540 – voluntary information sharing among financial institutions", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-E/section-1010.540" }
    ]
  },
  {
    id: "PPPS-022", domain: 4, topic: "314(b) partners preparing a joint SAR vs an earlier separate SAR", hy: true, difficulty: "hard",
    q: "Investigators at Granite Peak Bank and Sumner Trust, both 314(b) registrants, have spent three weeks sharing records on a ring that used 23 accounts at the two banks to launder USD 1.9 million of business email compromise proceeds. None of the subjects works for either bank. The banks agree to file a joint SAR. Two months ago, before the collaboration began, Granite Peak filed its own SAR on one ring member, Calla Moreno. Sumner's investigator now asks for the draft joint SAR and whether Granite Peak 'has already reported Moreno'. What may Granite Peak do?",
    options: [
      "Share and discuss the draft joint SAR with Sumner, but not reveal its earlier SAR on Moreno",
      "Share both the draft joint SAR and a copy of the earlier SAR, because both banks are 314(b) registrants",
      "Neither share nor discuss the draft, because SAR confidentiality bars all discussion of any SAR with another bank",
      "Confirm the earlier SAR orally but not in writing, since 314(b) allows oral disclosure of a SAR's existence"
    ],
    answer: [0],
    explanation: "FinCEN's 314(b) fact sheet notes that SAR rules allow joint SARs, and that institutions considering or filing a joint SAR may freely discuss the prospective or filed joint SAR among themselves and share its contents. Section 314(b) does not relax SAR confidentiality in any other respect: participants may not disclose a SAR, or any information revealing that one exists, so Granite Peak's earlier solo SAR must stay confidential, whether orally or in writing.",
    source: [
      { label: "FinCEN Section 314(b) Fact Sheet (updated 12 Jun 2026) – joint SARs and SAR confidentiality", url: "https://www.fincen.gov/system/files/shared/314bfactsheet.pdf" }
    ]
  },
  {
    id: "PPPS-023", domain: 4, topic: "Keep-open requests in public-private cooperation: involving the supervisor (EFIPPP)", hy: false, difficulty: "hard",
    q: "Riga-based Daugava Bank is a member of an operational public-private cooperation led by the national police. Its monitoring has flagged customer Ilmars Krauze, whose account has received EUR 780,000 from 40 suspected romance-scam victims, and the bank's exit committee plans to close the account this week. The police ask the bank to keep it open for 60 days so they can trace the network's other members. The bank's MLRO worries that the AML supervisor will criticise the bank for continuing a relationship it knows is suspicious. According to the EFIPPP Practical Guide for Operational Cooperation (2025), what is the BEST way to resolve this?",
    options: [
      "Close the account as planned, since a bank may never continue a relationship with a customer it has reported",
      "Have the police, if they cannot grant an exemption themselves, seek the supervisor's approval for keeping the account open",
      "Keep the account open on the police's oral request, since police requests automatically override supervisory expectations",
      "Ask the customer to explain the incoming payments, so that the bank can decide whether to follow the police request"
    ],
    answer: [1],
    explanation: "The EFIPPP guide says that when investigative authorities ask a financial institution to continue a relationship with a suspected customer temporarily, they must make sure this does not expose the institution to regulatory repercussions. If they lack legal authority to grant exemptions, they should contact the competent supervisor and seek its approval. The guide also stresses agreement between agencies, since police and supervisors may take different positions on continuing an account. The bank must still meet its STR obligations, and questioning the customer about the payments risks tipping him off.",
    source: [
      { label: "EFIPPP Practical Guide (Europol, 2025) – sections VII and VIII (inter-agency agreement; regulatory expectations)", url: "https://www.europol.europa.eu/cms/sites/default/files/documents/EFIPPP_Practical_Guide.pdf" }
    ]
  },
  {
    id: "PPPS-024", domain: 4, topic: "Data minimisation when answering a voluntary police enquiry", hy: false, difficulty: "hard",
    q: "Through an operational public-private cooperation, police give Westmere Bank a voluntary briefing about suspect Pavel Ondra, who is believed to launder drug proceeds through a car-export business. They ask the bank to analyse his accounts and send back 'everything you have on Ondra and on anyone who has ever paid him or been paid by him' since 2015. That covers about 2,600 counterparties, most of them ordinary car buyers. No production order has been issued. The bank's investigations team is keen to help. According to the EFIPPP Practical Guide, which response BEST reflects the data minimisation principle?",
    options: [
      "Send all the data requested, because helping a criminal investigation is always a legitimate purpose that justifies full disclosure",
      "Refuse to analyse or disclose anything, because a bank may process customer data for the police only under a production order",
      "Use objective criteria to limit the analysis and any disclosure to what is strictly necessary, such as counterparties with suspicious links",
      "Send data on all 2,600 counterparties with names removed, since removing names takes the data outside data protection rules"
    ],
    answer: [2],
    explanation: "The EFIPPP guide says the bank needs a legal basis both to analyse customer data on the authorities' initiative and to disclose the results. Under data minimisation, processing must be strictly necessary for the stated purpose and limited by objective criteria. This applies in particular to customers who are neither suspected of wrongdoing nor connected to a suspect, and to how much is disclosed. Blanket disclosure about 2,600 mostly innocent counterparties is disproportionate. A total refusal ignores the forms of cooperation the guide describes, and removing names does not answer whether the processing is necessary.",
    source: [
      { label: "EFIPPP Practical Guide (Europol, 2025) – section VI.2 (legal basis, data minimisation, purpose limitation)", url: "https://www.europol.europa.eu/cms/sites/default/files/documents/EFIPPP_Practical_Guide.pdf" }
    ]
  },
  {
    id: "PPPS-025", domain: 4, topic: "Correcting shared intelligence that proves unfounded (EFIPPP)", hy: false, difficulty: "medium",
    q: "In May 2026, police in an operational public-private cooperation warn five member banks that Sanna Lehtonen is suspected of recruiting money mules, and give her name and date of birth. Two banks restrict her accounts after their own reviews find other red flags; the other three take no action. In August the police discover that the tip came from an unreliable informant who had confused her with another person, and they drop that line of inquiry. According to the EFIPPP Practical Guide, what should happen NEXT?",
    options: [
      "Nothing further, because information shared within a cooperation cannot be withdrawn once the banks have received it",
      "Each bank should file an STR on Lehtonen, so that the FIU can confirm whether the police information was wrong",
      "The police should inform Lehtonen's lawyer of the error, and the lawyer will then tell the two banks that restricted her accounts",
      "The police, as originators, should correct the information with the banks and document the correction for traceability"
    ],
    answer: [3],
    explanation: "The EFIPPP guide says that if shared data turn out to be wrong or outdated, the partner from whom the data came should rectify or update it. This applies especially where investigative authorities later find that a suspicion was unfounded or based on unreliable information, and rectifications should be documented for traceability. The banks should then reconsider any decisions in light of their own analysis, since adverse measures should rest on objective grounds the bank has established itself. Filing STRs to 'test' discredited information, or routing the correction through the customer's lawyer, does not achieve this.",
    source: [
      { label: "EFIPPP Practical Guide (Europol, 2025) – section VIII (security, quality and traceability of shared data)", url: "https://www.europol.europa.eu/cms/sites/default/files/documents/EFIPPP_Practical_Guide.pdf" }
    ]
  }
]);
