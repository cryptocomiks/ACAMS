// Batch: Domain 4 – Tools and Technologies (digital ID, AI/ML governance, screening, monitoring, VASP tools, PETs, RegTech)
// Every keyed answer checked against the primary source listed in `source` (October 2026).
window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "TECH-001", domain: 4, topic: "Digital ID: non-face-to-face onboarding risk (INR.10, Feb 2025)", hy: true, difficulty: "hard",
    changed: "FATF INR.10 revised Feb 2025: non-face-to-face is a higher-risk example only where risk mitigation is absent",
    q: "A bank's 2023 policy rates every customer onboarded through its mobile app as high risk, because the relationship is non-face-to-face. Each of these customers goes through enhanced due diligence, which now covers 70% of new retail accounts. The app verifies customers through a government-backed digital ID scheme that is independently certified to a high identity assurance level, and it also uses device checks and liveness detection. Compliance reports that EDD queues are delaying ordinary low-value accounts by weeks. Under the FATF Standards as revised in February 2025 and the FATF Guidance on Digital ID, what is the BEST way to update the policy?",
    options: [
      "Keep the automatic high-risk rating, because FATF still lists every non-face-to-face relationship as a higher-risk example",
      "Rate all app customers as low risk and apply simplified due diligence to them, because the digital ID is certified",
      "Treat non-face-to-face onboarding as higher risk only where mitigants are missing, and rate app customers on all their risk factors",
      "Require app customers to visit a branch with original documents within 30 days so the relationship is no longer non-face-to-face"
    ],
    answer: [2],
    explanation: "Since the February 2025 revision, INR.10 lists as a higher-risk example only 'non-face-to-face business relationships or transactions where appropriate risk mitigation measures have not been implemented'. The FATF Guidance on Digital ID (para. 25) tells institutions that always classify non-face-to-face relationships as high risk to review that policy, because onboarding through a reliable, independent digital ID system with appropriate mitigants may be standard or even lower risk. Rating every app customer as low risk is the runner-up but overcorrects: the assurance level shows that the identity is reliable, while the overall rating must still reflect customer, product and geographic risk factors (para. 23). A branch visit is not required by the Standards and defeats the purpose of digital onboarding.",
    source: [
      { label: "FATF Recommendations (2012-2026), INR.10 para. 15 and amendment table (Feb 2025)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
      { label: "FATF Guidance on Digital Identity (2020), paras. 3, 23-25 (official copy, Labuan FSA)", url: "https://www.labuanfsa.gov.my/clients/asset_120A5FB8-61B6-45E8-93F0-3F79F86455C8/contentms/img/documents/AML_CFT/Guidelines_directives/2020/Appendix%20II%20-%20Guidance%20on%20Digital%20Identity_09122020.pdf" }
    ]
  },
  {
    id: "TECH-002", domain: 4, topic: "Digital ID: identity proofing (IAL) vs authentication (AAL) risk", hy: true, difficulty: "hard",
    q: "A digital bank onboards customers through a national digital ID with a high identity assurance level (IAL). Six months later, fraudsters take over 200 of these accounts. Investigators find that each takeover began with a SIM swap, after which the fraudsters received the one-time login codes sent by text message. The victims' identities had been correctly proofed at onboarding. Using the framework in the FATF Guidance on Digital ID, which statement BEST describes the weakness?",
    options: [
      "It is an authentication risk: legitimately issued credentials were compromised, so the assurance level of the login process is too low",
      "It is an identity proofing risk: the IAL at onboarding was too low, so the accounts were opened with fake identities",
      "It is a federation risk: the bank should never accept identity assertions passed to it by an external digital ID provider",
      "It is not a digital ID issue at all, so only the fraud team needs to act and AML/CFT monitoring is unaffected"
    ],
    answer: [0],
    explanation: "The FATF Guidance (para. 116) separates identity proofing risks, where a digital ID is fake from the start and which are mitigated by an appropriate identity assurance level, from authentication risks, where a legitimately issued digital ID is compromised and its credentials are controlled by an unauthorised person, which are mitigated by an appropriate authentication assurance level (AAL). The identity proofing option is the runner-up, but these identities were correctly proofed, so raising the IAL would not have stopped the takeovers. The Guidance also says institutions can monitor authentication events to detect misuse of compromised credentials and feed that into ongoing due diligence and suspicious transaction reporting (para. 26), so this is an AML/CFT issue too.",
    source: [
      { label: "FATF Guidance on Digital Identity (2020), paras. 26 and 116 (official copy, Labuan FSA)", url: "https://www.labuanfsa.gov.my/clients/asset_120A5FB8-61B6-45E8-93F0-3F79F86455C8/contentms/img/documents/AML_CFT/Guidelines_directives/2020/Appendix%20II%20-%20Guidance%20on%20Digital%20Identity_09122020.pdf" }
    ]
  },
  {
    id: "TECH-003", domain: 4, topic: "FATF Guidance on Digital ID: practices for regulated entities", hy: false, difficulty: "medium",
    q: "A payments firm is deciding whether to rely on third-party digital ID systems to identify and verify customers. According to the FATF Guidance on Digital ID, which practices should the firm follow? (Choose two.)",
    options: [
      "Treat any government-issued digital ID as enough for every customer, whatever its assurance level",
      "Understand the system's assurance levels for identity proofing and authentication, and check they suit the customer's ML/TF risks",
      "Let the provider keep the underlying identity evidence with no arrangement for authorities to obtain it",
      "Consider whether systems with lower assurance levels may be enough for simplified due diligence in low-risk cases",
      "Ignore authentication events after onboarding, because digital ID matters only at initial verification"
    ],
    answer: [1, 3],
    explanation: "The Guidance recommends that regulated entities understand a digital ID system's assurance levels, especially for identity proofing and authentication, and make sure they are appropriate for the ML/TF risks of the customer, product and jurisdiction (para. 23). It also suggests that lower-assurance systems may be enough for simplified due diligence in low-risk cases, for example in tiered CDD that supports financial inclusion (para. 24). Entities should make sure they can access, or let authorities obtain, the underlying identity information and evidence (para. 27), and they can use authentication events for ongoing due diligence and monitoring (para. 26). A government origin alone does not make a system appropriate for every risk level.",
    source: [
      { label: "FATF Guidance on Digital Identity (2020), paras. 22-27 (official copy, Labuan FSA)", url: "https://www.labuanfsa.gov.my/clients/asset_120A5FB8-61B6-45E8-93F0-3F79F86455C8/contentms/img/documents/AML_CFT/Guidelines_directives/2020/Appendix%20II%20-%20Guidance%20on%20Digital%20Identity_09122020.pdf" }
    ]
  },
  {
    id: "TECH-004", domain: 4, topic: "Remote identity proofing: injection attacks vs liveness detection", hy: false, difficulty: "hard",
    q: "A bank's remote onboarding vendor reports that an applicant's selfie video passed passive liveness detection and matched the passport photo with a 98% score. However, device telemetry shows that the video came through a virtual camera driver running on an emulated phone. The applicant gives an Ohio address, but the session came from an IP range abroad. The business line argues that the biometric match and the liveness pass are strong evidence that the applicant is genuine. Under NIST SP 800-63A-4 (July 2025), what is the BEST assessment?",
    options: [
      "The application is reliable, because a liveness pass shows a living person was in front of the camera",
      "The only concern is the IP address, which the applicant can resolve by explaining recent travel abroad",
      "The biometric match is decisive, and a virtual camera is a common privacy tool with no bearing on proofing",
      "A virtual camera points to an injection attack that liveness and face matching do not stop, so halt proofing"
    ],
    answer: [3],
    explanation: "NIST SP 800-63A-4 (section 3.14) explains that injection attacks insert forged media, such as deepfakes, between the capture device and the comparison process. It states that a biometric comparison does not prevent these attacks and that presentation attack detection gives only partial protection. It therefore requires controls that confirm the media comes from a genuine sensor, such as detecting a virtual camera or device emulator. Relying on the liveness pass is the runner-up, but liveness detection only checks whether a sample appears to come from a living subject at the point of capture, and injected media can be built to defeat it. FinCEN's deepfake alert (FIN-2024-Alert004) also lists device or geographic data inconsistent with the identity documents as a red flag.",
    source: [
      { label: "NIST SP 800-63A-4 (July 2025), section 3.14 and glossary", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63A-4.pdf" },
      { label: "FinCEN Alert FIN-2024-Alert004 (Nov 2024) – deepfake media", url: "https://www.fincen.gov/system/files/shared/FinCEN-Alert-DeepFakes-Alert508FINAL.pdf" }
    ]
  },
  {
    id: "TECH-005", domain: 4, topic: "EBA remote onboarding guidelines: pre-implementation assessment", hy: false, difficulty: "medium",
    q: "An EU credit institution plans to replace branch account opening with a vendor's fully automated remote onboarding app next quarter. The vendor's marketing material claims a 99.7% fraud detection rate. Under the EBA Guidelines on the use of remote customer onboarding solutions (EBA/GL/2022/15), what must the institution do before it starts using the solution?",
    options: [
      "Nothing beyond signing the contract, because the vendor carries the AML/CFT obligations for the checks it runs",
      "Carry out a documented pre-implementation assessment, including risk impact, fraud tests and end-to-end testing",
      "Obtain prior written approval of the app from both its national competent authority and the EBA",
      "Run the app alongside branch onboarding for a full year, because the guidelines require a parallel run"
    ],
    answer: [1],
    explanation: "Guidelines 13-17 require a pre-implementation assessment covering the adequacy of the data and documents collected and the reliability of sources, the impact on ML/TF, operational, reputational and legal risks, mitigating measures, fraud and impersonation tests, and end-to-end testing. The institution must be able to show its competent authority what it assessed, and should start using the solution only once it is satisfied that it fits its internal control system. Guideline 15 treats some criteria as met for notified eIDAS schemes at assurance level 'substantial' or 'high'. The guidelines contain no prior approval or parallel-run requirement. Where the process is outsourced, Guideline 48 still requires the institution itself to assess the provider and monitor that it complies with the institution's own policies, so the vendor's marketing claims cannot replace the institution's assessment.",
    source: [
      { label: "EBA Guidelines on remote customer onboarding (EBA/GL/2022/15), Guidelines 13-17 and 48 (official copy, FIN-FSA)", url: "https://prod.finanssivalvonta.fi/contentassets/8c34ef1c85d44d0b9c9cb6d18aaad682/2022_15_en_final-report.pdf" }
    ]
  },
  {
    id: "TECH-006", domain: 4, topic: "Remote onboarding failure: remedial review of affected customers", hy: false, difficulty: "hard",
    q: "An EU bank discovers that a software update four months ago switched off the liveness detection step in its unattended remote onboarding solution. About 9,000 customers were onboarded in that period. Most hold low-value retail accounts, but 300 are rated high risk, including several receiving large international transfers. Other banks have also reported a rise in impersonation attempts. The vendor has now fixed the defect. Under the EBA remote onboarding guidelines, what should the bank do NEXT?",
    options: [
      "Close all 9,000 accounts at once and report every customer to the FIU, because none of their identities were verified",
      "Take no action on existing customers, because the defect is fixed and identity documents were checked at opening",
      "Review the affected relationships, highest risk first, and decide on further due diligence, limits, exit, FIU reporting or re-rating",
      "Ask the vendor to certify that no fraudulent customers were onboarded, and keep the certificate as evidence for the supervisor"
    ],
    answer: [2],
    explanation: "Guideline 41(c) requires liveness detection in unattended remote onboarding. Where errors affect the solution, Guideline 19 requires a review of all affected business relationships, prioritising those with the highest ML/TF risk, followed by a case-by-case decision on additional due diligence, limits on transactions, termination, reporting to the FIU or reclassification. Guideline 18 lists functional deficiencies and a perceived increase in fraud attempts among the triggers for ad hoc reviews. Closing and reporting everyone is the runner-up, but the guidelines call for a risk-based assessment of each relationship rather than automatic exit and reporting. A vendor certificate cannot replace the bank's own review.",
    source: [
      { label: "EBA Guidelines on remote customer onboarding (EBA/GL/2022/15), Guidelines 18-19 and 41 (official copy, FIN-FSA)", url: "https://prod.finanssivalvonta.fi/contentassets/8c34ef1c85d44d0b9c9cb6d18aaad682/2022_15_en_final-report.pdf" }
    ]
  },
  {
    id: "TECH-007", domain: 4, topic: "Deepfake onboarding red flags (FIN-2024-Alert004)", hy: false, difficulty: "medium",
    q: "An analyst is reviewing remote account applications flagged by a bank's onboarding tool. Which of the following are red flags of deepfake media abuse listed in FinCEN's November 2024 alert? (Choose two.)",
    options: [
      "The ID gives a date of birth making the applicant 64, but the selfie appears to show someone in their twenties",
      "The applicant completes the live video check at the first attempt in the bank's own app",
      "The applicant's identity document was issued less than a year before the application",
      "The applicant accepts the bank's offer to set up phishing-resistant multifactor authentication",
      "The applicant's device and location data do not match the address and country on the identity documents"
    ],
    answer: [0, 4],
    explanation: "FinCEN's alert lists as red flags a customer photo that is internally inconsistent or inconsistent with other identifying information (for example, a date of birth suggesting a much older or younger person than the photo), and geographic or device data inconsistent with the identity documents. Completing a live check normally, a recently issued document and accepting MFA are not listed. FinCEN recommends MFA and live verification as best practices, and lists declining MFA as a red flag. FinCEN asks filers to use the key term 'FIN-2024-DEEPFAKEFRAUD' in SARs related to the alert.",
    source: [
      { label: "FinCEN Alert FIN-2024-Alert004 (Nov 2024) – red flag indicators", url: "https://www.fincen.gov/system/files/shared/FinCEN-Alert-DeepFakes-Alert508FINAL.pdf" }
    ]
  },
  {
    id: "TECH-008", domain: 4, topic: "SR 26-2: model materiality and low-materiality models", hy: true, difficulty: "hard",
    changed: "SR 26-2 (Apr 2026) replaced SR 11-7 and SR 21-8",
    q: "A US bank with $90 billion in assets has a statistical model that its FIU uses to forecast next month's alert volumes for staffing. The model's output does not affect which alerts are generated or how they are scored or decided. The model risk team wants to give it the same full annual validation as the bank's machine-learning transaction monitoring model. The head of the FIU wants to remove it from the model inventory, because staffing is not a compliance decision. Under the interagency model risk guidance issued in April 2026 (SR 26-2), which approach is MOST appropriate?",
    options: [
      "Validate it as rigorously as the monitoring model, because SR 26-2 applies the same validation to every model in the inventory",
      "Remove it from the inventory, because a model that does not drive compliance decisions is not a model under SR 26-2",
      "Exempt it from all oversight, because SR 26-2 is non-binding and the model affects only internal staffing",
      "Keep it in the inventory as a lower-materiality model, monitoring its performance and any conditions that could make it material"
    ],
    answer: [3],
    explanation: "SR 26-2 says model purpose and model exposure together determine materiality. For models deemed immaterial, model risk management may consist of identifying them and monitoring their performance and the conditions under which their use could become material, while more material models warrant more rigorous oversight. Full annual validation is the runner-up but ignores the guidance's tailored, materiality-based approach. The forecast is still a statistical model, since the definition depends on the method and not on whether it drives compliance decisions. An effective inventory supports managing model risk individually and in aggregate. Under-forecasting could, for example, lead to an alert backlog, which is why monitoring matters. SR 26-2 is indeed non-binding guidance, but that does not make 'no oversight' sound practice: for immaterial models it still describes identifying and monitoring them.",
    source: [
      { label: "SR 26-2 attachment – Supervisory Guidance on Model Risk Management (Apr 2026), sections II, III and VI", url: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf" }
    ]
  },
  {
    id: "TECH-009", domain: 4, topic: "SR 26-2: aggregate model risk from shared data", hy: false, difficulty: "hard",
    changed: "SR 26-2 (Apr 2026) replaced SR 11-7 and SR 21-8",
    q: "A bank's machine-learning transaction monitoring model, its customer risk rating model and its fraud scoring model have each been validated separately and rated as low inherent risk. All three take customer occupation and expected activity from the same onboarding data feed. A data migration has left 18% of those fields set to 'unknown'. Each model owner says the impact on their own model is small. Under SR 26-2, what is the MOST important point for the model risk function to raise?",
    options: [
      "Model risk should also be assessed in aggregate, because a shared data source can degrade several models at the same time",
      "Each owner is responsible only for their own model, so the data defect should be raised with the data team alone",
      "The models remain low risk because each was validated, and those results stand until the next scheduled cycle",
      "The fraud model is outside AML model risk management, so only the other two models need to be reassessed"
    ],
    answer: [0],
    explanation: "SR 26-2 says sound practice is to assess model risk both individually and in aggregate. Aggregate risk reflects dependencies among models and reliance on common assumptions, data or methods that could affect several models at once. Input data quality is also part of a model's inherent risk, and ongoing monitoring should consider changes in data relevance. Leaving the defect to the data team alone is the runner-up: the data must be fixed, but the combined effect on three risk controls is a model risk issue that separate model-by-model reviews would miss. Past validation does not freeze a model's risk rating once its inputs change.",
    source: [
      { label: "SR 26-2 attachment – Supervisory Guidance on Model Risk Management (Apr 2026), sections III and V", url: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf" }
    ]
  },
  {
    id: "TECH-010", domain: 4, topic: "SR 26-2: effective challenge and validator independence", hy: true, difficulty: "hard",
    changed: "SR 26-2 (Apr 2026) replaced SR 11-7 and SR 21-8",
    q: "At a large bank, the analytics team that built a new machine-learning sanctions-alert scoring model also runs its 'validation'. The validators are two junior data scientists who report to the head of the same team, and their bonuses depend on the model going live on time. They are technically skilled and wrote a thorough report, but their findings have never led to a change in any model. Which change would BEST align this set-up with SR 26-2's expectation of effective challenge?",
    options: [
      "Have internal audit re-perform the validation itself each year, in place of the junior validators' work",
      "Give validation to objective experts with enough independence, standing and influence to bring about changes",
      "Keep the set-up, because SR 26-2 says the quality of validation does not depend on organisational structure",
      "Ask an external vendor to co-sign the validation report as independent confirmation of the results"
    ],
    answer: [1],
    explanation: "SR 26-2 defines effective challenge as critical analysis by objective experts with the right expertise, enough independence to stay objective, and the organisational standing and influence to bring about change. It also highlights conflicts of interest, such as misaligned incentives between development and validation. Keeping the set-up is the runner-up because SR 26-2 does say that validation quality depends on the rigor and effectiveness of the review rather than on organisational structure. Here, however, the validators' reporting line, incentives and lack of influence undermine that rigor. Internal audit should evaluate model risk management, not duplicate validation, and a co-signature does not create independence.",
    source: [
      { label: "SR 26-2 attachment – Supervisory Guidance on Model Risk Management (Apr 2026), sections III, V and VI", url: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf" }
    ]
  },
  {
    id: "TECH-011", domain: 4, topic: "Champion-challenger testing: precision and recall (calculation)", hy: true, difficulty: "hard",
    q: "A bank tests a challenger machine-learning model against its champion rules engine on the same six months of data, which contain 100 cases later confirmed as suspicious. The champion produced 2,000 alerts that caught 60 of the confirmed cases. The challenger produced 800 alerts that caught 72 of them. Which statement about the results is correct?",
    options: [
      "The champion has the higher recall, because it produced more alerts overall",
      "The challenger has a precision of 72% and a recall of 9%",
      "The challenger has higher precision (9% vs 3%) and higher recall (72% vs 60%)",
      "Both models have the same precision, because both were tested on the same 100 cases"
    ],
    answer: [2],
    explanation: "Precision is the share of alerts that are true positives, and recall is the share of actual positive cases the model finds (Wolfsberg glossary). Challenger: precision 72/800 = 9% and recall 72/100 = 72%. Champion: precision 60/2,000 = 3% and recall 60/100 = 60%. The option giving 72% and 9% swaps the two measures, and more alerts do not mean higher recall. In champion-challenger testing the current model competes with retrained or new challengers. Even the better challenger misses 28 cases, so those should be analysed before a switch.",
    source: [
      { label: "Wolfsberg Group – Statement on Effective Monitoring for Suspicious Activity, Part I (2024), glossary", url: "https://db.wolfsberg-group.org/assets/e3d83d2f-fad9-46d2-b5a9-3cf4e932f53f/Wolfsberg%20Group%20MSA%20Statement%20Part%20I.pdf" }
    ]
  },
  {
    id: "TECH-012", domain: 4, topic: "Wolfsberg AI/ML principles: legitimate purpose", hy: false, difficulty: "medium",
    q: "A bank's machine-learning model for detecting money mules uses device fingerprints, login times and spending patterns. The marketing department asks to reuse the model's customer features to target credit card offers, arguing that the data is already collected and cleaned. Under the Wolfsberg Group's Principles for Using AI and Machine Learning in Financial Crime Compliance, what is the BEST response?",
    options: [
      "Allow it, since any data the bank holds lawfully may be used for any internal purpose",
      "Allow it, provided marketing retrains the model on its own servers and pays for the computing",
      "Refuse permanently, because financial crime data can never be used for another purpose under any framework",
      "Do not allow the reuse unless it passes an additional review under the bank's data and risk management framework"
    ],
    answer: [3],
    explanation: "Under the 'Legitimate Purpose' principle, data used in AI/ML solutions adopted for financial crime compliance should not be allowed to support other activities without additional review under the institution's data and risk management framework. The 'Proportionate Use' principle also requires that data use stay proportionate to the intended compliance purpose. A permanent ban is the runner-up but goes further than the principles, which call for review rather than an absolute prohibition. Lawful possession alone, or a change in where the model runs, does not satisfy the review the principles expect.",
    source: [
      { label: "Wolfsberg Principles for Using AI and ML in Financial Crime Compliance (Dec 2022)", url: "https://db.wolfsberg-group.org/assets/ae8ec2d1-da45-4cef-b6c6-166e2cf17c03/Wolfsberg%20Principles%20for%20Using%20Artificial%20Intelligence%20and%20Machine%20Learning%20in%20Financial%20Crime%20Compliance.pdf" }
    ]
  },
  {
    id: "TECH-013", domain: 4, topic: "Generative AI in investigations: automation bias and confabulation", hy: false, difficulty: "hard",
    q: "A bank uses a generative AI assistant to summarise monitoring alerts and recommend 'close' or 'escalate'. Policy requires an investigator to approve each recommendation. After six months, QA finds that investigators agreed with 99.6% of recommendations and spent a median of 40 seconds per alert. They also approved several summaries describing wire transfers that did not exist in the source data. Management says the human-in-the-loop control works, because no alert was closed without human approval. Which conclusion is BEST supported by NIST's Generative AI Profile (NIST AI 600-1)?",
    options: [
      "The control is weak: the pattern suggests automation bias, and reviewers missed confabulated wire details",
      "The control is effective, because a 99.6% agreement rate shows that the tool's recommendations are accurate",
      "The only problem is speed, so a five-minute minimum review time per alert would fully fix the control",
      "The invented details are a data privacy risk, so encrypting the case data the tool reads is the fix"
    ],
    answer: [0],
    explanation: "NIST AI 600-1 defines confabulation as confidently stated but false content ('hallucinations'). It describes automation bias, an excessive deference to automated systems, as a human-AI configuration risk that can make confabulation risk worse. Approving invented transactions after short reviews shows that the human check is not working. The minimum review time is the runner-up: it may help, but it does not make reviewers check summaries against source records, and it adds no QA sampling or testing. Generative AI is outside SR 26-2's scope, so the bank's own risk governance must set these controls.",
    source: [
      { label: "NIST AI 600-1, Generative AI Profile (July 2024), sections 2.2 and 2.7", url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf" },
      { label: "SR 26-2 attachment (Apr 2026), footnote 3 – generative AI out of scope", url: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf" }
    ]
  },
  {
    id: "TECH-014", domain: 4, topic: "Supervised ML for monitoring: training labels and recall targets", hy: false, difficulty: "hard",
    q: "A bank is building a supervised machine-learning model to replace its legacy monitoring rules. The data science team plans to train it only on alerts from the legacy rules, labelling those that led to SARs as positive. The head of the FIU insists that the model must reproduce every past SAR ('no SAR left behind') before it can go live. Which points are supported by the Wolfsberg Group's 2024 Statement on Effective Monitoring for Suspicious Activity? (Choose two.)",
    options: [
      "Training only on SARs from legacy rules is ideal, because these are the most reliable labels the bank has",
      "Reproducing 100% of past SARs is the best evidence that the model will also detect new typologies",
      "Training labels should also draw on other realised risks, such as manually raised cases and law enforcement production orders",
      "Precision does not matter for ML models, because investigators review every alert the model generates anyway",
      "Aiming for 100% recall of past SARs is likely to make the system ineffective, so recall must be balanced against precision"
    ],
    answer: [2, 4],
    explanation: "The Wolfsberg statement says supervised models benefit from training on a variety of crystallised (realised) risks from multiple sources, including manually generated cases and law enforcement production orders, which can help them predict risks that legacy systems never identified. Training only on legacy-rule SARs would teach the model the old rules' blind spots. The statement also warns that aiming for 100% recall, 'No SAR/STR left behind', is likely to produce an ineffective system, and that models must balance recall with precision. Sacrificing some past cases may yield better future outputs.",
    source: [
      { label: "Wolfsberg Group – Statement on Effective Monitoring for Suspicious Activity, Part I (2024), 'Machine Learning'", url: "https://db.wolfsberg-group.org/assets/e3d83d2f-fad9-46d2-b5a9-3cf4e932f53f/Wolfsberg%20Group%20MSA%20Statement%20Part%20I.pdf" }
    ]
  },
  {
    id: "TECH-015", domain: 4, topic: "Payment screening: data changed after the screening point", hy: true, difficulty: "hard",
    q: "A bank screens outgoing SWIFT payments when they are created. Payments that fail format validation go to a repair queue, where operations staff can correct beneficiary names, addresses and bank codes before release. Repaired payments then go straight to the network without being screened again. Last year 3% of payments were repaired. The head of operations says screening at creation is enough because the original data was clean. What is the MOST significant weakness?",
    options: [
      "Screening at creation is too early, so payments should be screened once a day in a batch after release",
      "Data can change after screening and before release, so repaired payments must be screened again before they are sent",
      "The repair rate is too high, so the main fix is training staff to make fewer formatting errors in payments",
      "The bank should stop screening bank codes, because a BIC is not a name and cannot match a sanctions list"
    ],
    answer: [1],
    explanation: "The Wolfsberg Sanctions Screening Guidance says transaction screening should happen at a point where the transaction can still be stopped, before any commitment to move funds. Particular attention should go to points where information could be changed, modified or removed in a way that undermines screening, and a repair queue is such a point. Screening after release is too late to prevent a violation. Reducing the repair rate is the runner-up: it shrinks the exposure but leaves unscreened changes possible. The guidance names BICs and other routing codes as relevant data, for example for listed banks.",
    source: [
      { label: "Wolfsberg Guidance on Sanctions Screening (2019), sections 5.2-5.3", url: "https://db.wolfsberg-group.org/assets/4b6c2db6-696d-492e-bdd5-c51552708597/Wolfsberg%20Guidance%20on%20Sanctions%20Screening.pdf" }
    ]
  },
  {
    id: "TECH-016", domain: 4, topic: "Transaction screening: which data elements to screen", hy: false, difficulty: "medium",
    q: "A bank is designing sanctions screening for cross-border wires and trade finance documents. Which data elements does the Wolfsberg Sanctions Screening Guidance identify as relevant for screening? (Choose two.)",
    options: [
      "The payment amount stated in the message",
      "Free-text payment details, such as SWIFT field 70",
      "The value date on which the payment settles",
      "Vessel names and IMO numbers in trade documents",
      "The sender's transaction reference number"
    ],
    answer: [1, 3],
    explanation: "The Wolfsberg guidance lists commonly screened attributes, including the parties, agents and intermediaries, bank names and BICs, free-text fields such as payment reference information or the stated purpose in SWIFT field 70, and vessels with their IMO numbers in trade finance. It states that amounts, dates and transaction reference numbers have no relevance from a screening perspective. They may still matter for monitoring or investigation, but they cannot match a sanctions list entry.",
    source: [
      { label: "Wolfsberg Guidance on Sanctions Screening (2019), section 5.2", url: "https://db.wolfsberg-group.org/assets/4b6c2db6-696d-492e-bdd5-c51552708597/Wolfsberg%20Guidance%20on%20Sanctions%20Screening.pdf" }
    ]
  },
  {
    id: "TECH-017", domain: 4, topic: "Screening threshold changes: pre- and post-implementation testing", hy: true, difficulty: "hard",
    q: "A New York-regulated bank wants to raise its sanctions name-matching threshold from 85 to 90, which would cut false positives by 45%. The vendor confirms that the change is a simple configuration setting. The sanctions team proposes making the change on Friday and comparing alert volumes over the following month. Which approach BEST meets NYDFS Part 504 and the Wolfsberg screening guidance?",
    options: [
      "Make the change as proposed, because lower alert volumes afterwards will prove the new setting works",
      "Ask the vendor to confirm in writing that 90 is an industry-standard threshold, and file that as the rationale",
      "First test the new setting on known list names and variants to confirm expected alerts still fire, and document approval",
      "Keep the threshold at 85 permanently, because an approved matching threshold can never be raised"
    ],
    answer: [2],
    explanation: "NYDFS Part 504.3(b) requires end-to-end, pre- and post-implementation testing of the filtering program, including whether threshold settings map to the institution's risks, and 504.3(c) requires governance so that changes are defined, controlled, reported and audited. The Wolfsberg guidance calls for independent testing that the application still generates expected alerts, and for documented rationale for threshold settings. Watching alert volumes after the change is the runner-up: post-implementation monitoring is required too, but a fall in volume cannot show whether true matches are now being missed. A vendor statement does not replace the bank's own risk-based testing.",
    source: [
      { label: "3 NYCRR 504.3 – Transaction monitoring and filtering program requirements", url: "https://www.law.cornell.edu/regulations/new-york/3-NYCRR-504.3" },
      { label: "Wolfsberg Guidance on Sanctions Screening (2019), sections 3.1 and 3.4", url: "https://db.wolfsberg-group.org/assets/4b6c2db6-696d-492e-bdd5-c51552708597/Wolfsberg%20Guidance%20on%20Sanctions%20Screening.pdf" }
    ]
  },
  {
    id: "TECH-018", domain: 4, topic: "Above-the-line threshold analysis (calculation)", hy: true, difficulty: "hard",
    q: "A bank's cash scenario alerts when a customer's monthly cash deposits exceed $10,000. Last year it produced 1,000 alerts, 30 of which led to SARs. The tuning team tested raising the threshold to $12,500. Of the 1,000 alerts, 400 fell between $10,000 and $12,500, including 9 of the alerts that led to SARs. The team recommends the change because the alert-to-SAR rate would rise. Which conclusion is BEST supported by these figures?",
    options: [
      "The change would cut alerts by 40% but lose 30% of the productive alerts, so it should not be approved on this analysis alone",
      "The change should be approved, because the alert-to-SAR rate would improve from 3% to 3.5% with 400 fewer alerts",
      "The change would cut alerts by 40% and lose no productive alerts, because other scenarios would find those cases",
      "The change would cut alerts by 9% and lose 40% of productive alerts, so the threshold should be lowered instead"
    ],
    answer: [0],
    explanation: "Raising the threshold removes 400 of 1,000 alerts (40%) and 9 of 30 SAR-producing alerts (30%). The rate rises only from 30/1,000 = 3% to 21/600 = 3.5%. That improvement is the tempting runner-up, but it is bought by losing nearly a third of the reportable cases, so the change is not justified unless further analysis shows those cases are caught another way. NYDFS Part 504.3 requires ongoing analysis of thresholds and controlled, documented changes. The Wolfsberg Group describes threshold testing above and below the baseline as a way to find where false positives and false negatives appear.",
    source: [
      { label: "3 NYCRR 504.3 – Transaction monitoring and filtering program requirements", url: "https://www.law.cornell.edu/regulations/new-york/3-NYCRR-504.3" },
      { label: "Wolfsberg Group – Statement on Effective Monitoring for Suspicious Activity, Part I (2024), glossary (ATL/BTL)", url: "https://db.wolfsberg-group.org/assets/e3d83d2f-fad9-46d2-b5a9-3cf4e932f53f/Wolfsberg%20Group%20MSA%20Statement%20Part%20I.pdf" }
    ]
  },
  {
    id: "TECH-019", domain: 4, topic: "Travel rule: timing and method of data transmission", hy: false, difficulty: "hard",
    q: "To cut costs, a VASP's engineering team proposes three changes to its travel-rule process. Proposal 1: send originator and beneficiary data to counterparty VASPs in batches every 15 minutes, together with the batch of transfers they relate to. Proposal 2: stop writing customer data onto the blockchain and send it through an off-chain messaging protocol instead. Proposal 3: for transfers between USD 1,000 and USD 5,000, send the required data to the beneficiary VASP the next business day after the transfer settles. Under the FATF Standards and FATF's 2021 updated guidance on virtual assets, which proposal is NOT acceptable?",
    options: [
      "Proposal 1, because travel-rule data must be sent one transfer at a time and never in batches",
      "Proposal 2, because the required data must be embedded in the on-chain transaction itself",
      "Proposals 1 and 2, because both of them separate the data from the transfer itself",
      "Proposal 3, because sending the data after the transfer is post facto submission, which is not permitted"
    ],
    answer: [3],
    explanation: "INR.15 para. 7(b) requires originating VASPs to submit the required information to the beneficiary VASP 'immediately and securely'. FATF's 2021 guidance (para. 187) accepts batch submission if it happens immediately and securely, but says post facto submission should not be permitted: the data must be sent before or when the transfer is conducted. Paragraph 188 adds that the information need not be attached to the transfer or recorded on the blockchain, consistent with FATF's technology-neutral approach. Only Proposal 3 breaches the standard.",
    source: [
      { label: "FATF Updated Guidance on a Risk-Based Approach to VAs and VASPs (Oct 2021), paras. 187-188 (official copy, ONPCSB Romania)", url: "https://www.onpcsb.ro/2022/01042022/Updated-Guidance-VA-VASP.pdf" },
      { label: "FATF Recommendations (2012-2026), INR.15 para. 7(b)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "TECH-020", domain: 4, topic: "Counterparty VASP due diligence before sending travel-rule data", hy: true, difficulty: "medium",
    q: "A VASP's customer asks to withdraw USDC to an address that the VASP's blockchain analytics attributes to an exchange the VASP has never dealt with. The exchange says it is licensed in another country. According to FATF's 2021 updated guidance on virtual assets, which approach BEST reflects how the VASP should handle the transfer?",
    options: [
      "Send the customer's travel-rule data first, then complete due diligence on the exchange within 30 days",
      "Treat the address as an unhosted wallet, since analytics attribution can never identify a VASP",
      "Confirm the address is a VASP's, identify it, and assess whether it is an eligible counterparty before sending data",
      "Repeat full counterparty due diligence on the exchange for every later transfer, even after it is approved"
    ],
    answer: [2],
    explanation: "FATF's guidance (paras. 196-197) describes three phases: determine whether the transfer is with a counterparty VASP or an unhosted wallet, identify the counterparty VASP, and assess whether it is an eligible counterparty to receive customer data and have a business relationship with. Due diligence must be done before the required information is transmitted (para. 292), to avoid unknowingly dealing with illicit or sanctioned actors. It need not be repeated for every transfer unless there is suspicious history or adverse information, but it should be refreshed periodically or when risk emerges. FATF notes that no method identifies the VASP behind an address perfectly, but analytics remain a useful input.",
    source: [
      { label: "FATF Updated Guidance on a Risk-Based Approach to VAs and VASPs (Oct 2021), paras. 196-198 and 292 (official copy, ONPCSB Romania)", url: "https://www.onpcsb.ro/2022/01042022/Updated-Guidance-VA-VASP.pdf" }
    ]
  },
  {
    id: "TECH-021", domain: 4, topic: "Blockchain analytics coverage gaps when listing a new asset", hy: false, difficulty: "hard",
    q: "A US-registered crypto exchange plans to list a token on a newly launched layer-1 blockchain within two weeks, to beat competitors. Its blockchain analytics vendor does not yet support that chain, so deposits and withdrawals could not be screened for exposure to sanctioned addresses, mixers or darknet markets. The vendor expects to add support 'in a few months'. The product team argues that the exchange's strong customer KYC makes this acceptable. What should the compliance officer do FIRST?",
    options: [
      "Approve the listing, since strong customer KYC fully makes up for the lack of on-chain exposure screening",
      "Assess the risks before launch, including the analytics gap, and require compensating controls or a delay until they are mitigated",
      "Approve the listing but file a SAR on every deposit of the new token until the vendor supports the chain",
      "Ask the vendor to certify that the new chain carries no illicit activity, and launch on the basis of that certificate"
    ],
    answer: [1],
    explanation: "Recommendation 15 requires financial institutions, including VASPs, to assess ML/TF risks before launching new products or using new technologies and to take appropriate measures to mitigate them. FATF's 2021 guidance notes that VASPs widely use blockchain analytics to monitor exposure, for example to mixers, but that not all virtual assets are covered by all vendors and analytics have limits in coverage and accuracy. KYC identifies the exchange's own customer but cannot show the on-chain counterparties funding the account, so it does not replace exposure screening. Blanket SAR filing is not a risk-based control.",
    source: [
      { label: "FATF Recommendations (2012-2026), Recommendation 15", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
      { label: "FATF Updated Guidance on a Risk-Based Approach to VAs and VASPs (Oct 2021), paras. 39 and 234 (official copy, ONPCSB Romania)", url: "https://www.onpcsb.ro/2022/01042022/Updated-Guidance-VA-VASP.pdf" }
    ]
  },
  {
    id: "TECH-022", domain: 4, topic: "Privacy-enhancing technologies for collaborative analytics", hy: false, difficulty: "hard",
    q: "Five banks want to work together on detecting money mules, but data protection law prevents them from pooling raw customer data. They are considering several privacy-enhancing technologies. Based on FATF's 2021 Stocktake on Data Pooling, Collaborative Analytics and Data Protection, which pairing of objective and technology is correct?",
    options: [
      "Train a shared detection model while each bank's data stays where it is: zero-knowledge proofs",
      "Let one bank establish that another holds data on a person without revealing the person's identity: differential privacy",
      "Train a shared detection model while each bank's data stays where it is: federated learning",
      "Remove the legal barriers to sharing so raw data can be pooled freely: secure cloud storage"
    ],
    answer: [2],
    explanation: "FATF's stocktake (Table 5.1) describes federated learning, for example a 'travelling algorithm', as able to access and interrogate data sets in different institutions without moving the data. Zero-knowledge proofs allow one bank to establish that another bank holds data on an individual without sharing that individual's identity. Differential privacy analyses broad trends with a trade-off between precision and privacy. FATF notes that even when two institutions hold their data in the same secure cloud environment, the legal barriers to data sharing remain the same (Table 5.1).",
    source: [
      { label: "FATF – Stocktake on Data Pooling, Collaborative Analytics and Data Protection (July 2021), Table 5.1 (official FATF publication page)", url: "https://www.fatf-gafi.org/en/publications/Digitaltransformation/Data-pooling-collaborative-analytics-data-protection.html" }
    ]
  },
  {
    id: "TECH-023", domain: 4, topic: "RegTech procurement: consortium due diligence, certifications and accountability", hy: false, difficulty: "hard",
    q: "In October 2026, a US bank with $12 billion in assets is choosing an AI-based sanctions screening vendor. The bank belongs to an industry consortium that has performed shared due diligence on the vendor, and the vendor holds an independent certification of its information security controls. The vendor uses a subcontractor in another country to host the matching engine. The procurement lead proposes signing on the strength of the consortium report and the certification alone. Which approach BEST reflects the federal banking agencies' third-party risk management guidance, including their September 2026 proposal?",
    options: [
      "Use the shared work to inform due diligence, but assess vendor and subcontractor against the bank's own risks; the bank stays responsible",
      "Rely on the consortium report alone, because shared due diligence transfers responsibility for sanctions compliance to the consortium",
      "Disregard the consortium work and repeat every due diligence step from scratch, because shared reviews are never acceptable",
      "Rely on the vendor's contractual warranties instead of due diligence, because supervisory guidance on third parties is not binding"
    ],
    answer: [0],
    explanation: "The 2023 interagency guidance, still in force, says a bank's use of third parties does not diminish its responsibility to comply with laws and regulations as if it did the activity in-house. The September 2026 proposal, which would replace it, keeps that principle, including where subcontractors are involved. It says consortium due diligence and certifications may meet a bank's due diligence needs depending on the facts, but that risk management should rest on the bank's own circumstances and performance criteria. Repeating everything from scratch is the overcorrection, and non-binding guidance does not make due diligence optional, because the underlying legal obligations remain.",
    source: [
      { label: "Proposed Interagency Guidance on Third-Party Risk Management (Sept 2026) – NCUA copy", url: "https://ncua.gov/files/press-releases-news/proposed-2026-third-party-risk-management-tprm-guidance.pdf" },
      { label: "Interagency Guidance on Third-Party Relationships: Risk Management, 88 FR 37920 (June 2023)", url: "https://www.govinfo.gov/content/pkg/FR-2023-06-09/pdf/2023-12340.pdf" }
    ]
  },
  {
    id: "TECH-024", domain: 4, topic: "Case management: audit trail and change control", hy: false, difficulty: "hard",
    changed: "FinCEN SAR FAQs, Oct 2025 (no-SAR documentation not required – does not remove NYDFS Part 504 duties)",
    q: "An internal audit at a New York-chartered bank finds that its case management system lets team leads change the disposition and closing rationale of alerts after they are closed. Only the latest version is kept, so the original analyst's decision cannot be recovered. In one month, 140 'escalate' decisions were changed to 'close'. The head of investigations says no fix is needed, because FinCEN's October 2025 SAR FAQs removed any requirement to document decisions not to file a SAR. What is the BEST response?",
    options: [
      "Agree, because after the October 2025 FAQs a bank need not keep any record of how its alerts were decided",
      "Delete the 140 changed alerts from the system so that the case records are consistent for the auditors",
      "Reopen every alert from the past five years and have a different analyst re-review each one before any other action",
      "Restore an unalterable audit trail recording who changed what and when, and review the 140 changed alerts"
    ],
    answer: [3],
    explanation: "The October 2025 FAQs say there is no requirement or expectation under the BSA or its implementing regulations to document a decision not to file a SAR. They do not address audit trails or state rules. NYDFS Part 504.3 requires protocols setting out how alerts are investigated, who decides on filings and how that process is documented, and it requires changes to the program to be controlled, reported and audited. Overturned escalations may also hide reportable activity. Re-reviewing five years of alerts is the runner-up: a look-back may later be warranted, but the risk-based first step is to fix the control and review the 140 known changes. Deleting records would destroy evidence.",
    source: [
      { label: "3 NYCRR 504.3(a)(7) and (c)(4)", url: "https://www.law.cornell.edu/regulations/new-york/3-NYCRR-504.3" },
      { label: "FinCEN/agency SAR FAQs (Oct 2025), Question 4", url: "https://www.fincen.gov/system/files/2025-10/SAR-FAQs-October-2025.pdf" }
    ]
  },
  {
    id: "TECH-025", domain: 4, topic: "Network analytics vs entity resolution in a mule investigation", hy: false, difficulty: "hard",
    q: "A bank confirms that a customer is a money mule: her account received funds from 25 scam victims and forwarded them within hours. The investigator notices that 37 other customers, with different names, addresses and dates of birth, logged in from the same two device IDs and sent money to the same three accounts. Which approach BEST reveals the full extent of the scheme?",
    options: [
      "Entity resolution, to merge the 38 customer records into one customer, since they share device IDs",
      "Network analytics starting from the known mule, linking customers, devices and counterparties to map related accounts",
      "Peer-group segmentation, to test whether the 38 customers' volumes are unusual for others of the same age",
      "Sanctions name screening of all 38 customers, since mule networks often include listed persons"
    ],
    answer: [1],
    explanation: "FATF's 2021 stocktake (Table 5.1) describes network analytics as deriving patterns that cannot otherwise be seen at end-point level and identifying networks of related entities based on known subjects of interest. The Wolfsberg Group says monitoring inputs should include behavioural data such as device IDs and IP addresses, and that graph networks give a network-based view of customers. Entity resolution is the runner-up, but it links data fragments that refer to the same real-world entity, while here the 38 are distinct people tied by shared devices and counterparties. Merging them would hide the network. Segmentation and sanctions screening do not map the relationships.",
    source: [
      { label: "FATF – Stocktake on Data Pooling, Collaborative Analytics and Data Protection (July 2021), Table 5.1 (official FATF publication page)", url: "https://www.fatf-gafi.org/en/publications/Digitaltransformation/Data-pooling-collaborative-analytics-data-protection.html" },
      { label: "Wolfsberg Group – Statement on Effective Monitoring for Suspicious Activity, Part I (2024), 'Approach to Data' and glossary", url: "https://db.wolfsberg-group.org/assets/e3d83d2f-fad9-46d2-b5a9-3cf4e932f53f/Wolfsberg%20Group%20MSA%20Statement%20Part%20I.pdf" }
    ]
  }
]);
