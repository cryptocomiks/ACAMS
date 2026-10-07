window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "RISK-001", difficulty: "hard", domain: 3, topic: "Country risk model: matching sources to sub-factors (EBA risk factor guidelines)", hy: true,
    q: "Lindgren Bank, an EU credit institution, is rebuilding its country risk model. Analyst Oskar Brandt wants to score each country's 'quality of the AML/CFT regime' factor using only a well-known corruption perceptions index, because it is free, updated every year and covers 180 countries. Country M scores well on that index, so it would be rated low risk. However, Country M's latest FSRB mutual evaluation rates its bank supervision (IO.3) and preventive measures (IO.4) as low effectiveness, and the FATF added it to its list of jurisdictions under increased monitoring last year. Lindgren's customers from Country M are mostly import-export firms, and the bank plans to open a correspondent relationship with a bank there. What is the BEST change to the methodology?",
    options: [
      "Score regime quality from several sources, such as mutual evaluations and FATF lists, and use the index for predicate offences",
      "Keep the corruption index as the only source, but add a manual one-band uplift for any country currently on a FATF list",
      "Replace the corruption index with the FATF lists alone, because they are the authoritative source on AML/CFT regime quality",
      "Rate Country M low as the index suggests, and apply enhanced due diligence only to the planned correspondent relationship"
    ],
    answer: [0],
    explanation: "The EBA ML/TF Risk Factors Guidelines (Guideline 2) say a jurisdiction's AML/CFT regime should be judged on information from more than one credible source, such as FATF or FSRB mutual evaluations (especially R.10, 26, 27, IO.3 and IO.4), the FATF lists and IMF/FSAP reports. They list corruption perception indices as a source for the level of predicate offences, not for regime quality. Guideline 1.32 adds that firms should not normally rely on only one source. The runner-up, an uplift for listed countries, still rests on a single source that measures something else. FATF lists alone cover only a few countries. Where the customer is a bank, the regime's quality and supervision matter most.",
    source: [{ label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), Guidelines 1.29-1.32 and 2 (country risk factors)", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }]
  },
  {
    id: "RISK-002", difficulty: "hard", domain: 3, topic: "Vendor risk-scoring tools: the firm must understand the weighting (EBA 3.7)", hy: false,
    q: "Harbourline Payments, an EU payment institution, buys a customer risk-scoring tool from a vendor. The vendor says its factor weights are proprietary and provides only an audit firm's certificate calling the model 'industry standard'. Six months after go-live, compliance analyst Ines Duarte notices that customers who send most of their volume to a high-risk remittance corridor still score low, while long-standing domestic salary earners often score medium. The head of operations points out that the tool cut onboarding time by 40% and that the vendor serves 200 other firms. The supervisor has announced a thematic review of customer risk scoring. What should Harbourline do FIRST?",
    options: [
      "Rely on the audit certificate and the vendor's large client base as evidence that the scores are reliable",
      "Switch the tool off and return to manual rating of every customer until a new vendor has been selected",
      "Find out how the tool combines and weights factors, and test whether its scores match the firm's own view of risk",
      "Ask the vendor to add a flag for the high-risk corridor, and record the change in next year's business-wide risk assessment"
    ],
    answer: [2],
    explanation: "Guideline 3.7 of the EBA Risk Factors Guidelines says a firm that buys an automated scoring system from an external provider should understand how it works and how it combines or weights risk factors. The firm must be able to satisfy itself, and show its supervisor, that the scores reflect its own understanding of ML/TF risk. A third-party certificate and a large client base do not meet this test. The runner-up, adding a corridor flag, treats one symptom without understanding why the model misranks customers. Switching the tool off is disproportionate, and under Guideline 3.6 the firm can override individual scores, with documented reasons, while it investigates.",
    source: [{ label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), Guidelines 3.6-3.7 – weighting and externally sourced scoring systems", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }]
  },
  {
    id: "RISK-003", difficulty: "hard", domain: 3, topic: "Customer risk rating overrides: governance and what override volumes signal", hy: true,
    q: "At Crestmoor Bank, relationship managers can override the automated customer risk rating by typing a free-text comment. A quarterly report shows that relationship managers moved 14% of model-rated high-risk customers down to medium, mostly in the private banking unit, where bonuses are linked to new assets. Most comments say 'known to RM for many years'. No one outside the business approves these changes. The model was validated last year, and internal audit rated the unit's EDD file quality satisfactory. What is the BEST response from the head of financial crime compliance?",
    options: [
      "Ask internal audit to re-test the private banking EDD files before deciding whether the override process needs to change",
      "Require an evidenced rationale and independent approval for each downgrade, and review the pattern as a possible model weakness",
      "Remove the ability to override automated ratings, because any manual change undermines a validated model",
      "Accept the overrides, because a relationship manager's long personal knowledge of a client is a recognised mitigating factor"
    ],
    answer: [1],
    explanation: "The EBA Risk Factors Guidelines (3.6) require firms to be able to override automated scores where necessary, with the rationale documented, and say economic or profit considerations must not influence the risk rating. The Wolfsberg FAQs on Risk Assessments, discussing overrides of risk assessment ratings, add that the rationale for any override must be thoroughly documented, supported and approved by someone with appropriate authority, and that the need for overrides may indicate a weakness in the methodology. Here, conflicted staff downgrade ratings without independent approval. Removing overrides altogether conflicts with 3.6. The runner-up, re-testing EDD files, does not fix the control gap: the downgraded customers are no longer in the high-risk population being tested.",
    source: [
      { label: "Wolfsberg FAQs on Risk Assessments (2015), Q3 and 6.2.1 – documented and approved overrides", url: "https://db.wolfsberg-group.org/assets/3deb66d7-6aca-490c-bcd9-c1a3d34a807b/17.%20Wolfsberg-Risk-Assessment-FAQs-2015.pdf" },
      { label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), Guideline 3.6", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }
    ]
  },
  {
    id: "RISK-004", difficulty: "hard", domain: 3, topic: "Methodology changes and year-on-year comparability", hy: false,
    q: "Fernhill Bank's 2026 enterprise-wide risk assessment shows residual risk in trade finance falling from high to moderate. In the same cycle, the risk team cut the weight given to geography from 40% to 20% and added two new control categories. Trade finance volumes, clients and control test results are almost the same as in 2025. The draft board paper presents the improvement as proof that last year's remediation worked, and the business plans to use the new rating to argue for more trade with high-risk corridors. The methodology change was agreed by email within the risk team. What should the MLRO do BEFORE the paper goes to the board?",
    options: [
      "Reverse the methodology change, so that the 2026 results use exactly the same weights as the 2025 assessment",
      "Present the moderate rating as drafted, because a risk team may refine its weights in every annual cycle",
      "Ask internal audit to validate the new weights independently before any 2026 result is reported to the board",
      "Get the change formally approved and show its effect on the comparison, for example by restating 2025 under the new method"
    ],
    answer: [3],
    explanation: "The Wolfsberg FAQs on Risk Assessments say methodology changes from one year to the next must be clearly documented and approved by the relevant governance function, and their effect on comparing results year on year must be assessed. Otherwise large changes in results cannot be justified or understood. Here the fall in residual risk comes from the method, not from lower risk or better controls, so the board paper would mislead. Reversing the change blocks a possibly valid improvement. An audit review is optional under the FAQs and does not correct the misleading comparison. The EBA guidelines (1.17) require senior management to get enough information to understand the risks.",
    source: [
      { label: "Wolfsberg FAQs on Risk Assessments (2015), Q2 – methodology changes, approval and comparability", url: "https://db.wolfsberg-group.org/assets/3deb66d7-6aca-490c-bcd9-c1a3d34a807b/17.%20Wolfsberg-Risk-Assessment-FAQs-2015.pdf" }
    ]
  },
  {
    id: "RISK-005", difficulty: "hard", domain: 3, topic: "Qualitative risk factors: staff turnover, system migration, acquisitions", hy: true,
    q: "Ashbury Bank is finishing its 2026 business-wide risk assessment. Its customer base and products have hardly changed, so the draft keeps every inherent risk rating at last year's level. During the year, however, 9 of the 20 analysts in its financial intelligence unit left, the bank moved to a new core banking platform that feeds transaction monitoring, and it agreed to buy a payments firm, with completion due in three months. The bank also sponsored a national anti-fraud awareness campaign. How should the assessment treat these developments?",
    options: [
      "As matters for next year's cycle, because inherent risk changes only when customers, products, channels or geographies change",
      "As operational risk issues for the operational risk function, outside the scope of the financial crime risk assessment",
      "As qualitative factors that may temporarily raise inherent risk or weaken controls, reflected now with actions",
      "Only the acquisition should be reflected, because staff turnover and the migration will show up in control testing anyway"
    ],
    answer: [2],
    explanation: "The Wolfsberg FAQs on Risk Assessments list 'other qualitative risk factors', including integration of IT systems, recent AML compliance staff turnover, reliance on third parties and recent or planned acquisitions and new products. Such changes can increase the likelihood of control breakdowns, and new controls take time to work, so the assessment should consider whether inherent risk has temporarily risen. The runner-up reflects only the acquisition and ignores two current weaknesses that control testing may not yet show. The sponsorship is irrelevant. AMLA's draft BWRA guidelines also mention mergers and strategic changes as indicators to consider.",
    source: [
      { label: "Wolfsberg FAQs on Risk Assessments (2015), 6.1.5 – other qualitative risk factors", url: "https://db.wolfsberg-group.org/assets/3deb66d7-6aca-490c-bcd9-c1a3d34a807b/17.%20Wolfsberg-Risk-Assessment-FAQs-2015.pdf" },
      { label: "AMLA consultation on draft guidelines on the business-wide risk assessment (2026)", url: "https://www.amla.europa.eu/policy/public-consultations/consultation-draft-guidelines-business-wide-risk-assessment_en" }
    ]
  },
  {
    id: "RISK-006", difficulty: "medium", domain: 3, topic: "Two-step risk assessment: identifying categories, then analysing the data", hy: true,
    q: "Two US community banks, Pinecrest and Riverbend, each send about 100 international wire transfers a day. Both draft BSA/AML risk assessments rate international wires 'moderate' on the basis of this count. Further analysis shows that about 90% of Pinecrest's wires are recurring, well-documented payments for long-standing customers, while about 90% of Riverbend's are one-off transfers, many for noncustomers. The two banks use the same monitoring vendor and are of similar size. What does this comparison BEST illustrate?",
    options: [
      "Identifying a category is only step one; analysing customer and transaction data can reveal different risk levels",
      "Banks with similar volumes that use the same monitoring system should give the same product the same risk rating",
      "Wire transfer risk is best measured by the number of transfers, because the count drives monitoring workload",
      "Riverbend should stop sending wires for noncustomers, because one-off transactions cannot be risk-assessed"
    ],
    answer: [0],
    explanation: "The FFIEC BSA/AML Examination Manual describes a two-step process: first identify the risk categories (products, services, customers and geographic locations), then analyse the data within them. It uses this exact example: two banks with the same number of international transfers can have different risks once the share of recurring transfers for known customers is compared with nonrecurring transfers or transfers for noncustomers. Volume alone is one factor. The manual says banks should also consider amounts, destinations and the nature of the customer relationships, and should document the factors and any weighting. Noncustomer wires can be assessed and controlled, so stopping them is not required.",
    source: [{ label: "FFIEC BSA/AML Examination Manual (2020), BSA/AML Risk Assessment – analysis of specific risk categories (NCUA copy)", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" }]
  },
  {
    id: "RISK-007", difficulty: "hard", domain: 3, topic: "Sanctions risk assessment: assessing sanctions-specific controls", hy: false,
    q: "Corvane Merchant Bank builds its first sanctions risk assessment by copying its AML risk assessment. Because KYC and EDD were rated strong in the AML assessment, the team rates sanctions residual risk low in every business line. The bank processes cross-border USD and EUR payments for trading companies and issues letters of credit for shipments routed through Gulf transshipment hubs. Its payment screening tool's fuzzy-matching threshold was last tuned three years ago. AML training completion stands at 98%. What is the MAIN weakness of this sanctions risk assessment?",
    options: [
      "It combines sanctions and AML risk in one exercise, although the two must always be assessed in separate documents",
      "It relies on KYC ratings at all, although customer due diligence plays no part in mitigating sanctions risk",
      "It gives too little weight to training, the control with the most direct effect on sanctions screening results",
      "It does not assess sanctions-specific controls, such as payment and trade screening, which differ from AML controls"
    ],
    answer: [3],
    explanation: "The Wolfsberg FAQs on Risk Assessments say a sanctions risk assessment overlaps most with ML and is often done together with it, but needs sanctions-specific data. The nature and effectiveness of sanctions controls, especially screening of payments and other transfers, may differ from core AML controls. Strong KYC therefore cannot by itself justify a low sanctions residual rating, particularly with trade finance and an untuned screening threshold. Due diligence on higher-risk clients does help mitigate sanctions risk, so excluding it is wrong. Firms may combine or separate the two assessments. OFAC's Framework also expects the assessment to cover products, counterparties and geographies.",
    source: [
      { label: "Wolfsberg FAQs on Risk Assessments (2015), Q5 – sanctions scope and sanctions-specific controls", url: "https://db.wolfsberg-group.org/assets/3deb66d7-6aca-490c-bcd9-c1a3d34a807b/17.%20Wolfsberg-Risk-Assessment-FAQs-2015.pdf" },
      { label: "OFAC, A Framework for OFAC Compliance Commitments (2019) – risk assessment", url: "https://ofac.treasury.gov/media/16331/download?inline" }
    ]
  },
  {
    id: "RISK-008", difficulty: "hard", domain: 3, topic: "Updating the sanctions risk assessment after an apparent violation (OFAC Framework)", hy: false,
    q: "In May 2026 Larchmont Bank, a US bank, finds that it processed three payments totalling $410,000 for a company that is 60% owned by a person on the SDN List. Its review shows that the screening tool checked only the names of direct parties, and that the ownership-data feed was switched off during a vendor change in 2025. The sanctions risk assessment was refreshed in January 2026 and rated the payments business low residual risk. The bank is preparing a voluntary self-disclosure to OFAC and has retrained its payments staff. According to OFAC's Framework for Compliance Commitments, what should the bank do with its sanctions risk assessment?",
    options: [
      "Leave it until the next annual refresh in January 2027, because it was updated only four months ago",
      "Update it now for the root cause and any systemic gap, and reassess the controls behind the low rating",
      "Wait for OFAC's response to the self-disclosure, because OFAC's findings may change the root cause",
      "Record the retraining as a new mitigating control, which allows the low residual rating to stand"
    ],
    answer: [1],
    explanation: "OFAC's Framework says the risk assessment should be updated, as appropriate, to account for the root causes of any apparent violations or systemic deficiencies the organisation identifies in the routine course of business. It also expects senior management to address root causes with systemic solutions. Here the root cause is a missing ownership-data feed, which undermines the control behind the low rating. Under OFAC's 50 Percent Rule the company was blocked. Retraining staff does not fix a data gap, and waiting for an annual cycle or for OFAC leaves a known weakness unassessed.",
    source: [{ label: "OFAC, A Framework for OFAC Compliance Commitments (2019) – risk assessment updated for root causes", url: "https://ofac.treasury.gov/media/16331/download?inline" }]
  },
  {
    id: "RISK-009", difficulty: "hard", domain: 3, topic: "PF risk sources: breach/non-implementation vs evasion of TFS", hy: true,
    q: "Valemont Bank's 2026 proliferation financing (PF) risk review records two incidents. First, the UN Security Council designated a shipping company under the DPRK regime, but the bank's screening list was not updated for nine days: the national authority published the designation late, and the bank screened only against the national list. Second, a long-standing customer, a metals trader, began receiving payments from a newly formed company whose director was later found to be acting for a designated entity. Under the FATF's 2021 guidance on PF risk assessment and mitigation, which classification is CORRECT?",
    options: [
      "Both are evasion risks, because in each case funds could have reached a designated person",
      "The first is a breach risk, and the second is outside PF risk because the paying company was not itself designated",
      "The first is a risk of breach or non-implementation of targeted financial sanctions, and the second is a risk of evasion",
      "The first is outside the bank's PF risk because the national authority caused the delay, and the second is an evasion risk"
    ],
    answer: [2],
    explanation: "The FATF guidance names two sources of PF risk. Breach or non-implementation risk arises when designated persons get access to services because of, for example, late communication of designations at national level or weak screening by firms. Evasion risk arises from concerted efforts by designated persons to get around sanctions, for example through front companies, middlemen or dummy accounts. The runner-up wrongly excludes the second incident: R.7 also covers persons acting on behalf of, or at the direction of, designated persons. A delay at national level is itself a listed cause of non-implementation risk, so it stays within the bank's assessment.",
    source: [
      { label: "FATF Guidance on Proliferation Financing Risk Assessment and Mitigation (2021), paras 1-6", url: "https://www.aml.gov.sa/en-us/GuidanceReports/Guidance%20on%20Proliferation%20Financing%20Risk%20Assessment%20and%20Mitigation.pdf" }
    ]
  },
  {
    id: "RISK-010", difficulty: "hard", domain: 3, topic: "PF risk assessment where there are no known cases", hy: true,
    q: "Coral Reef Trust Bank operates in a small international financial centre. Most of its customers are non-resident companies formed by local corporate service providers, and many of them trade commodities or operate ships under foreign flags. The bank has never had a sanctions match linked to the DPRK or Iran, and the country's national risk assessment does not mention proliferation financing (PF). The board proposes to record PF risk as 'not applicable' because the country has no trade or diplomatic links with either state. The bank's ML/TF risk assessment was approved last month. What is the BEST advice from the compliance officer?",
    options: [
      "Assess PF risk anyway: no cases does not mean low risk, and evasion networks use centres like this one",
      "Record PF risk as low and revisit it only if a later national risk assessment identifies a proliferation threat",
      "Record PF risk as not applicable, but keep screening all customers against the UN DPRK and Iran designations",
      "Ask the supervisor for an exemption, because FATF R.1 lets any firm with no known cases skip a PF risk assessment"
    ],
    answer: [0],
    explanation: "The FATF's 2021 PF guidance says the absence of known cases does not necessarily mean a firm faces low or no PF risk. Designated networks route activity through international financial, trading, shipping and company formation centres, whatever their distance from the DPRK or Iran. Firms can use scenario building, expert focus groups and UN Panel of Experts reports where local cases are lacking. The runner-up, screening without assessing, meets R.7 but not the separate R.1 duty to identify and assess PF risk. Exemptions are a country decision for a type of institution with assessed low risk, not a firm-level choice.",
    source: [
      { label: "FATF Guidance on Proliferation Financing Risk Assessment and Mitigation (2021), paras 33-35 and boxes", url: "https://www.aml.gov.sa/en-us/GuidanceReports/Guidance%20on%20Proliferation%20Financing%20Risk%20Assessment%20and%20Mitigation.pdf" },
      { label: "FATF Recommendations (2026), INR.1 paras 3-4 and 17", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "RISK-011", difficulty: "medium", domain: 3, topic: "PF risk mitigation for a low-risk firm: proportionate measures", hy: false,
    q: "Glenvale Community Savings serves about 6,000 local households and small shops in one rural region. It offers savings accounts, domestic payments and consumer loans, with no international wires or trade finance. Its documented proliferation financing (PF) risk assessment concludes that PF risk is low. A consultant now proposes that it buy vessel-tracking data, subscribe to a dual-use goods database and apply enhanced due diligence to every customer with a foreign-born director. Glenvale already screens customers against the relevant UN and national sanctions lists at onboarding and whenever the lists change. What is the MOST appropriate response?",
    options: [
      "Adopt the consultant's measures, because PF consequences are so severe that every firm must apply enhanced measures",
      "Stop screening against the UN lists, because its documented PF risk is low and measures must be proportionate",
      "Apply enhanced due diligence only to customers with foreign-born directors, as a targeted compromise",
      "Keep its existing screening and CDD, which is proportionate for a low-risk firm, and watch for changes in risk"
    ],
    answer: [3],
    explanation: "The FATF's 2021 PF guidance says low-risk firms, such as small institutions serving mainly local, lower-risk customers, are not expected to spend significant time and resources on PF risk mitigation. For most of them it is reasonable to maintain their sanctions screening and CDD without enhanced measures. INR.1 says measures should be proportionate to risk, but full implementation of the R.7 targeted financial sanctions is required in every case, so screening cannot stop. Enhanced due diligence based on a director's place of birth is not a risk-based measure.",
    source: [
      { label: "FATF Guidance on Proliferation Financing Risk Assessment and Mitigation (2021), para 66", url: "https://www.aml.gov.sa/en-us/GuidanceReports/Guidance%20on%20Proliferation%20Financing%20Risk%20Assessment%20and%20Mitigation.pdf" },
      { label: "FATF Recommendations (2026), INR.1 para 4", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "RISK-012", difficulty: "medium", domain: 3, topic: "UK MLRs regulation 18A: proliferation financing risk assessment", hy: false,
    q: "A UK-authorised payment institution is documenting its proliferation financing risk assessment under regulation 18A of the Money Laundering Regulations 2017. Which TWO statements about this requirement are CORRECT? (Choose two.)",
    options: [
      "It may skip the assessment if it has no customers or payments connected with the DPRK or Iran",
      "It must take into account the information in HM Treasury's proliferation financing risk assessment report",
      "It must send its assessment to the FCA every year, whether or not the FCA asks for it",
      "It may treat the requirement as met once its ML/TF risk assessment under regulation 18 has been approved",
      "It must consider risk factors on customers, countries, products or services, transactions and delivery channels"
    ],
    answer: [1, 4],
    explanation: "Regulation 18A, inserted from 1 September 2022, requires relevant persons to take appropriate steps to identify and assess the proliferation financing risks their business faces. They must take into account the Treasury's risk assessment under regulation 16A and risk factors relating to customers, countries or geographic areas, products or services, transactions and delivery channels. They must keep an up-to-date written record unless the supervisor says one is not required, and provide the assessment to the supervisor on request, not every year by default. Having no direct DPRK or Iran links does not remove the duty, and the ML/TF assessment under regulation 18 does not automatically cover PF.",
    source: [{ label: "UK Money Laundering Regulations 2017, regulation 18A (legislation.gov.uk)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/18A" }]
  },
  {
    id: "RISK-013", difficulty: "hard", domain: 3, topic: "AMLR Art. 10(1): existing product offered to a new segment or area", hy: true,
    q: "In 2028 Lumen Pay, an e-money institution licensed in an EU Member State, has offered a reloadable prepaid card to domestic salaried customers for four years, and its business-wide risk assessment rates the product low risk. The product team now wants to market the same card, with unchanged features and limits, to international students and seasonal workers in another Member State through an online partner. The launch is planned for next month. The team argues that no new risk assessment is needed because the product is not new. What does the AMLR require?",
    options: [
      "Nothing extra before launch; the change will be captured at the next scheduled update of the business-wide risk assessment",
      "Before launch, assess and mitigate the ML/TF risks of offering the card to the new segment in the new area",
      "A prior assessment only if the card's features or limits change, because the AMLR covers only new products and technologies",
      "Prior approval of the launch by AMLA, because the card will be distributed across borders in another Member State"
    ],
    answer: [1],
    explanation: "Article 10(1) AMLR requires obliged entities to identify and assess the ML/TF risks, and take measures to manage them, before launching new products, services, business practices or delivery channels, and also before starting to provide an existing product or service to a new customer segment or in a new geographical area. This goes further than FATF R.15, which focuses on new products, practices and technologies. Article 10(2) also requires the business-wide assessment to be updated when events significantly affect risk. Waiting for the next scheduled update is the runner-up, but the AMLR requires the assessment before launch. AMLA does not approve product launches.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR), Article 10(1)-(2) (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }]
  },
  {
    id: "RISK-014", difficulty: "medium", domain: 3, topic: "Delivery channel risk: introducers, group introductions and remote onboarding", hy: false,
    q: "Brightwater Bank, in an EU Member State, gets new customers through three channels. Channel 1 onboards customers remotely using a reliable electronic identification scheme with liveness checks. Channel 2 takes customers introduced by a subsidiary in another Member State that applies the group's CDD policies. Channel 3 takes customers introduced by a car dealership network, whose main business is unrelated to financial services and which is not subject to AML obligations; it passes on only copies of identity documents. Channel 3 brings the bank's highest-margin loans. Under the EBA Risk Factors Guidelines, which channel presents the HIGHEST delivery channel risk?",
    options: [
      "Channel 1, because any non-face-to-face relationship carries more risk than one that comes through an introducer",
      "Channel 2, because an introduction from another Member State adds a cross-border element",
      "Channel 3, because the introducer is unregulated, non-financial and gives the bank little assurance over its CDD",
      "The three are equal, because the bank remains responsible for CDD whichever channel the customer uses"
    ],
    answer: [2],
    explanation: "The EBA guidelines (Guideline 2, delivery channel factors) ask whether non-face-to-face onboarding used a reliable form of CDD with steps against impersonation. A reliable electronic ID with liveness checks therefore does not make Channel 1 high risk by default. For group introductions, the firm considers how far it can rely on the group entity applying EEA-standard CDD. For third-party introducers, it considers whether they are regulated, whether they are financial institutions or have an unrelated main business, and the quality of their CDD. Channel 3 fails on all of these points. The bank stays responsible in every channel, but the risk still differs between them, and profitability is irrelevant.",
    source: [{ label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), Guideline 2 – delivery channel risk factors", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }]
  },
  {
    id: "RISK-015", difficulty: "hard", domain: 3, topic: "Keeping the business-wide risk assessment current between scheduled updates (EBA 1.7)", hy: false,
    q: "Ostrava Credit, an EU bank, updates its business-wide risk assessment every March. In October its MLRO, Petra Kral, starts preparing the next update and finds that the only inputs are last year's assessment and current customer statistics. During the year the bank made 40 internal suspicious activity reports about student accounts used as money mules, failed an internal audit of sanctions screening, and heard repeated warnings from branch staff about cash deposits linked to a new car-wash chain. None of this was logged for the risk assessment. The board meets quarterly. Which control should Petra put in place to close this gap?",
    options: [
      "A process to log relevant issues all year, such as internal reports and audit failures, and to reflect new risks as soon as possible",
      "A switch from an annual to a quarterly full refresh of the business-wide risk assessment, timed to match the board meetings",
      "A rule that the business-wide assessment may use only quantitative statistics, so that anecdotal inputs do not distort it",
      "An annual questionnaire sent to branch managers each February, so that front-office views are collected just before the update"
    ],
    answer: [0],
    explanation: "Guideline 1.7 of the EBA Risk Factors Guidelines expects firms to set an annual date for the business-wide update. If a new risk emerges, or an existing one increases, before that date, it should be reflected as soon as possible. Firms should also carefully record, throughout the period, issues that could affect the assessment, such as internal suspicious transaction reports, compliance failures and intelligence from front-office staff. A quarterly full refresh is the runner-up, but it is not required (1.10 leaves frequency to a risk-sensitive judgement) and it would still miss issues that nobody logs. Excluding qualitative intelligence, or collecting it only once a year, repeats the gap.",
    source: [{ label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), Guidelines 1.6-1.10 – keeping risk assessments up to date", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }]
  },
  {
    id: "RISK-016", difficulty: "medium", domain: 3, topic: "Proportionality: a simple risk assessment for a small, non-complex bank", hy: false,
    q: "Highmoor Cooperative Bank has 9,000 customers, almost all local individuals and small farms, and offers only deposit accounts, domestic payments and farm loans. A software vendor offers it an enterprise risk assessment platform used by global banks, with 300 risk factors and Monte Carlo simulation, for a price equal to its whole annual compliance budget. The bank's current risk assessment is a 15-page, board-approved document that analyses its customer types, products, channels and geographic exposure with supporting data, and it is updated when the business changes. Which statement BEST reflects FATF guidance for the banking sector?",
    options: [
      "The bank should buy the platform, because supervisors expect every bank's risk assessment to use quantitative modelling",
      "The bank may stop keeping a written assessment, because a bank with similar customers faces no material risk",
      "The bank should copy the platform's 300 factors into its own spreadsheet so that its assessment matches global practice",
      "The current assessment can suffice: it must be documented and kept current, but need not be complex"
    ],
    answer: [3],
    explanation: "The FATF's 2014 risk-based approach guidance for banks (paras 54-55) says a bank's risk assessment should always be properly documented, maintained and communicated to relevant staff, but need not be complex. It should be commensurate with the nature and size of the business. Where customers fall into similar categories and the range of products is very limited, a simple risk assessment might suffice, while larger, more diverse banks need more sophisticated processes. The EBA guidelines (1.16) say the same about small firms with limited, domestic exposure. Copying hundreds of irrelevant factors adds complexity without adding understanding.",
    source: [{ label: "FATF Guidance for a Risk-Based Approach: The Banking Sector (2014), paras 54-57", url: "https://www.aml.gov.sa/en-us/GuidanceReports/Guidance%20For%20%20RBA%20The%20Banking%20Sector.pdf" }]
  },
  {
    id: "RISK-017", difficulty: "hard", domain: 3, topic: "Generic industry inherent risk ratings vs the firm's own inherent risk assessment (Wolfsberg 6.1.6)", hy: true,
    q: "Kestrel Bank is running its first enterprise-wide risk assessment using the Wolfsberg FAQs methodology. To save time, the project lead proposes to copy the example standard inherent risk ratings in the FAQs' Appendix H (for example, international correspondent banking high, asset management low to moderate, retail banking moderate to high) as the inherent ratings of the bank's own business lines, without collecting client, product, channel or geography data. Kestrel's retail arm serves mainly salaried local customers, while its small asset management unit takes in money from offshore companies in several high-risk jurisdictions. Which TWO statements are consistent with the Wolfsberg FAQs? (Choose two.)",
    options: [
      "Generic industry ratings can be a useful reference, but they should not be used on their own in place of an inherent risk assessment",
      "The Appendix H ratings are an industry standard, so supervisors expect banks to adopt them for each business line without change",
      "Each line's inherent risk should come from scoring its own clients, products, channels, geographies and other qualitative factors",
      "The generic ratings are acceptable if controls are assessed in full, because control strength is what drives the residual rating",
      "The asset management unit can keep a low-to-moderate rating, because asset management is a lower-risk segment across the industry"
    ],
    answer: [0, 2],
    explanation: "Section 6.1.6 of the Wolfsberg FAQs says inherent risk is found by applying and aggregating each business line's client, product and service, channel, geography and other qualitative risk factors. Generic or relative ratings for banking businesses are useful, but should not be used on their own in the absence of inherent risk assessments. Appendix H itself says its examples are neither exhaustive nor binding, and that the firm should fully document its own approach. Kestrel shows why: its asset management unit, generically low to moderate, takes offshore money from high-risk jurisdictions. A full control assessment cannot fix a wrong inherent rating, because residual risk depends on both.",
    source: [{ label: "Wolfsberg FAQs on Risk Assessments (2015), 6.1.6 and Appendix H – generic inherent risk ratings", url: "https://db.wolfsberg-group.org/assets/3deb66d7-6aca-490c-bcd9-c1a3d34a807b/17.%20Wolfsberg-Risk-Assessment-FAQs-2015.pdf" }]
  },
  {
    id: "RISK-018", difficulty: "hard", domain: 3, topic: "Subsidiary adopting a group-wide risk assessment: tailoring it (EBA 1.14-1.15)", hy: true,
    q: "Velmar Bank is an EU subsidiary of a banking group headquartered in a non-EU country that credible indices associate with a high level of corruption. The group sends each subsidiary its group-wide ML/TF risk assessment, which says nothing about corruption risk linked to the head office country. Velmar's board proposes to adopt the group document unchanged as its own business-wide risk assessment, because group compliance designed it and the group's auditors reviewed it. Velmar has a large trade finance book, and about 15% of its corporate customers were referred by group companies in the head office country. What should Velmar's compliance officer advise?",
    options: [
      "Adopt the group assessment unchanged, because a single group methodology keeps the results consistent across all subsidiaries",
      "Adopt the group assessment once group compliance confirms in writing that corruption risk is not material for the group",
      "Check whether the group assessment is specific enough for Velmar's business, and add the head office corruption risk to it",
      "Replace the group assessment with an off-the-shelf consultancy model, so that it is independent of the parent group's views"
    ],
    answer: [2],
    explanation: "Guideline 1.14 of the EBA Risk Factors Guidelines says a firm that is part of a group with a group-wide risk assessment should consider whether it is granular and specific enough to reflect the firm's business and the risks from the group's links to countries, and complement it if necessary. If the group is headquartered in a country associated with a high level of corruption, the firm should reflect this even if the group-wide assessment is silent. Guideline 1.15 says a group assessment applied unquestioningly, or an off-the-shelf one not adapted to the firm, is unlikely to meet the legal requirement. A written assurance from group compliance is the runner-up, but it leaves the gap unassessed by Velmar, and an audit review does not tailor the document.",
    source: [
      { label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), Guidelines 1.14-1.15", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }
    ]
  },
  {
    id: "RISK-019", difficulty: "hard", domain: 3, topic: "Country risk: terrorist financing factors scored separately from AML regime quality", hy: false,
    q: "Altmark Bank's country risk model scores each country on AML/CFT regime quality, corruption and tax transparency. Country R scores well on all three: its mutual evaluation is strong, and it is on no FATF or EU list. However, credible law enforcement and media reports say an armed group designated for terrorism controls smuggling routes in R's northern border region, and the EU has terrorism-related restrictive measures against persons there. Altmark has 60 business customers in R, including a fuel distributor operating in the north. Which change to the model is MOST important?",
    options: [
      "Lower Country R's AML regime score, because the terrorist activity shows that its mutual evaluation was wrong",
      "Keep the model as it is and exit all customers in Country R's northern region to remove the exposure",
      "Add terrorist financing factors, such as active terrorist groups and terrorism-related sanctions, scored separately",
      "Rely on sanctions screening for Country R customers, because list matching fully addresses terrorist financing risk"
    ],
    answer: [2],
    explanation: "The EBA Risk Factors Guidelines (Guideline 2) treat a jurisdiction's terrorist financing risk as a separate set of factors. These include credible information that it funds or supports terrorism, that groups committing terrorist offences operate there, and that it is subject to UN or EU sanctions related to terrorism or proliferation. A strong AML regime does not cancel these factors. Where funds go to areas where such groups operate, firms should consider whether this could be expected given the relationship. Exiting a whole region is de-risking, which the guidelines (4.9) say the risk-based approach does not require. Screening covers only listed names, not the wider exposure.",
    source: [{ label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), Guideline 2 – terrorist financing country risk factors; Guideline 4.9", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }]
  },
  {
    id: "RISK-020", difficulty: "hard", domain: 3, topic: "Geographic risk for trusts: tax transparency sources", hy: false,
    q: "Rivergate Private Bank, in an EU Member State, is onboarding the Aldwyn Family Trust, a discretionary trust governed by the law of Country T. Its trustee is a licensed trust company in T. The settlor lives in the EU, and the beneficiaries are his children. Country T is perceived as having low corruption, and its mutual evaluation rates its CDD rules (R.10) as compliant. Relationship manager Tom Ashby asks which country information is MOST relevant to the geographic risk of this particular relationship. What should the compliance officer answer?",
    options: [
      "Country T's corruption perception score, because corruption is the predicate offence most closely linked to trusts",
      "Country T's R.10 rating, because CDD performed by the trustee is the key control for trust relationships",
      "Whether Country T is a FATF member, because membership shows that its AML/CFT regime is adequate and effective",
      "Whether Country T effectively meets international tax transparency standards, e.g. Global Forum ratings and CRS"
    ],
    answer: [3],
    explanation: "The EBA Risk Factors Guidelines (Guideline 2) say that, where the customer is a trust or similar arrangement, firms should consider how far the country where it is registered effectively complies with international tax transparency and information-sharing standards. Suggested sources include OECD Global Forum ratings, Common Reporting Standard implementation, FATF assessments of R.9, R.24, R.25, IO.2 and IO.5, and the EU list of non-cooperative tax jurisdictions. Corruption indices measure the level of predicate offences, which matters most for funds generated abroad. The guidelines also say FATF or FSRB membership does not by itself mean a regime is adequate.",
    source: [{ label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), Guideline 2 – country risk factors for trusts and tax transparency", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }]
  },
  {
    id: "RISK-021", difficulty: "medium", domain: 3, topic: "Product risk factors: third-party payments and overpayments", hy: false,
    q: "Novik Savings, an EU firm, is designing a new savings product. Product manager Leah Fischer says it is low risk because it will be sold only online to EU residents. The draft features are listed in the options. Which TWO features MOST increase the product's ML/TF risk? (Choose two.)",
    options: [
      "Third parties can pay into a customer's plan without being identified",
      "Customers can top up at any time by transfer from their own account at an EU bank",
      "The balance is capped at EUR 50,000",
      "Overpayments are accepted and refunded on request to any account the customer names",
      "Sales are made only online, using a reliable electronic identification scheme"
    ],
    answer: [0, 3],
    explanation: "The EBA Risk Factors Guidelines (Guideline 2, product factors) ask how far a product allows payments from third parties or accepts overpayments where these would not normally be expected, and whether the firm knows who the third parties are. Unidentified third-party funding and refunds of overpayments to any account let funds of unknown origin enter and leave under the cover of a legitimate product. Funding only from the customer's own account at a regulated institution lowers risk. Caps on value limit misuse. Online sales are not high risk in themselves when a reliable electronic identification method is used.",
    source: [{ label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), Guideline 2 – product, service and transaction risk factors", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }]
  },
  {
    id: "RISK-022", difficulty: "medium", domain: 3, topic: "PF risk analysis: threat, vulnerability and consequence", hy: false,
    q: "A bank's working group is analysing likelihood and consequence for its proliferation financing (PF) risk assessment. It cannot agree how to rate consequence for a scenario in which a front company for a designated entity uses the bank's trade finance products. According to the FATF's 2021 guidance on PF risk assessment, what should the starting assumption be?",
    options: [
      "That consequences would be severe, while noting that not all PF methods have equal consequences",
      "That consequence should be rated in proportion to the value of the transactions, as is usual in an ML/TF assessment",
      "That consequence is low unless the goods financed appear on a national dual-use export control list",
      "That consequence is left out of PF analysis, which looks only at threats and vulnerabilities"
    ],
    answer: [0],
    explanation: "The FATF guidance treats risk as a function of threat, vulnerability and consequence. When analysing consequence, the starting point is to assume that the consequences of a potential breach, non-implementation or evasion of PF-related targeted financial sanctions, including the possible development of weapons of mass destruction, would be severe. It also notes that consequences can differ by source, channel or recipient of the funds. Likelihood draws on known cases, intelligence, typologies, the strength of controls and the capabilities and intent of designated persons. Transaction value and dual-use listing are not the test.",
    source: [{ label: "FATF Guidance on Proliferation Financing Risk Assessment and Mitigation (2021), paras 42-44", url: "https://www.aml.gov.sa/en-us/GuidanceReports/Guidance%20on%20Proliferation%20Financing%20Risk%20Assessment%20and%20Mitigation.pdf" }]
  },
  {
    id: "RISK-023", difficulty: "hard", domain: 3, topic: "AMLR business-wide risk assessment: risks of non-implementation and evasion of EU TFS", hy: true,
    q: "In early 2027 Danubia Bank, a mid-sized bank in an EU Member State, is updating its business-wide risk assessment for the AMLR, which applies from 10 July 2027. The draft covers money laundering and terrorist financing, plus a proliferation financing chapter limited to the UN DPRK and Iran regimes, mirroring FATF Recommendation 1. Compliance with EU asset freezes under the Russia and Belarus regimes is covered in an operations manual but is not risk-assessed. The bank finances many exporters selling machinery to Central Asia and the Caucasus. What is the MAIN gap under the AMLR?",
    options: [
      "The PF chapter must be removed, because the AMLR limits the business-wide assessment to money laundering and terrorist financing",
      "It must also assess the risk of non-implementation and evasion of targeted financial sanctions, including EU asset freezes",
      "The bank must prepare a stand-alone sanctions risk assessment and submit it to AMLA for approval, separate from the ML/TF assessment",
      "There is no gap, because EU sanctions are rule-based and strict liability, so they are excluded from any risk assessment"
    ],
    answer: [1],
    explanation: "Article 10(1) AMLR requires obliged entities to identify and assess their ML/TF risks and also the risks of non-implementation and evasion of targeted financial sanctions. Article 2(1)(49) defines targeted financial sanctions as asset freezes and prohibitions on making funds available under Council Decisions (Article 29 TEU) and Council Regulations (Article 215 TFEU), which include the Russia and Belarus regimes. The FATF's R.1 definition of PF risk is narrower, covering only R.7 sanctions. AMLA's draft BWRA guidelines allow this risk to be built into the ML/TF assessment or covered in a separate one, but the rule-based freezing duties still apply. AMLA does not approve individual assessments.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Articles 2(1)(49) and 10 (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" },
      { label: "AMLA consultation on draft guidelines on the business-wide risk assessment (2026)", url: "https://www.amla.europa.eu/policy/public-consultations/consultation-draft-guidelines-business-wide-risk-assessment_en" }
    ]
  },
  {
    id: "RISK-024", difficulty: "medium", domain: 3, topic: "Individual customer risk ratings are no substitute for a business-wide assessment", hy: false,
    q: "Talbot Securities, a small EU investment firm, tells its supervisor it does not need a separate business-wide risk assessment, because every client has an individual risk rating and a quarterly report counts the number of high, medium and low-risk clients. The firm has 2,400 clients and offers execution-only trading and portfolio management. It onboards 70% of clients online through an affiliate marketing network, and it recently began accepting clients from two non-EU countries. The latest quarterly report shows 4% high-risk clients. What is the BEST assessment of the firm's position?",
    options: [
      "The approach is acceptable, because the aggregated client ratings already capture the firm's overall exposure",
      "The approach is acceptable, provided an external auditor certifies the quarterly report every year",
      "Client ratings inform but cannot replace a business-wide assessment covering products, channels and new geographies",
      "The firm should replace individual ratings with a business-wide assessment, because a small firm needs only one of the two"
    ],
    answer: [2],
    explanation: "The EBA Risk Factors Guidelines require two distinct but linked assessments: a business-wide assessment and individual assessments. Guideline 1.20 says individual risk assessments should inform, but are no substitute for, a business-wide assessment. Under 1.12 the business-wide assessment must take a holistic view of the products, jurisdictions, customers and delivery channels. Counting client ratings misses risks from the affiliate channel and the new non-EU markets, and it cannot inform policies (1.18). Proportionality (1.16) allows a simpler assessment for a small firm, but not the absence of one. An external certificate does not change this.",
    source: [{ label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), Guidelines 1.2, 1.11-1.20", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }]
  },
  {
    id: "RISK-025", difficulty: "hard", domain: 3, topic: "Weighting a country link against product features (EBA 3.2-3.5)", hy: false,
    q: "Saltmarsh Bank, an EU credit institution, offers a retirement savings plan that can be funded only by monthly payroll deductions through the customer's identified EU employer. It accepts no other third-party payments and pays out only at retirement age, to an account in the customer's name. The bank's customer risk model has a rule that rates as high risk any customer with personal links to a jurisdiction associated with higher ML/TF risk. Applicant Nadia Karim, a salaried nurse living in the EU, was born in Country Q, which has high levels of corruption but is not on any EU or FATF list, and she still owns a family flat there. She is not a PEP, and screening finds no adverse information. What does the EBA guidance on weighting risk factors suggest?",
    options: [
      "Rate her high, because any personal link to a higher-risk jurisdiction must lead to a high overall rating",
      "Weigh the country link against the plan's features, which may make it less relevant, and document why",
      "Disregard the country link, because geographic factors are excluded when the product itself is low risk",
      "Apply enhanced due diligence, because EU law requires it for customers born in high-corruption countries"
    ],
    answer: [1],
    explanation: "The EBA Risk Factors Guidelines ask firms to take a holistic view of all the risk factors they identify (3.2). Unless the law says otherwise, isolated risk factors do not necessarily move a relationship into a higher or lower risk category (3.3). When weighting, firms make an informed judgement about relevance. The guidelines' own example is that a customer's personal links to a higher-risk jurisdiction may be less relevant in light of the features of the product sought (3.5). Here, funding only by payroll, no other third-party payments and no early access limit the plan's use for ML/TF. The link is weighed, not ignored, and 3.6 still requires that weighting never makes a high rating impossible. EDD is mandatory for PEPs and EU-listed high-risk third countries, not for a birthplace.",
    source: [
      { label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), Guidelines 3.2-3.6", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }
    ]
  }
]);
