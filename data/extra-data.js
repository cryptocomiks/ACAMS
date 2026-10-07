// Batch: Data and technology across the customer lifecycle (data quality and taxonomy, privacy, digital onboarding,
// external data, payment screening, pKYC, AI/ML adoption, RPA, SupTech, network analysis)
// Every keyed answer checked against the primary source listed in `source` (October 2026).
window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "DATA-001", domain: 4, topic: "Data taxonomy: inconsistent country values after an acquisition", hy: false, difficulty: "hard",
    q: "A bank acquires a payments firm and migrates its 40,000 customers into the bank's transaction monitoring system. The bank's high-risk geography scenarios match on two-letter ISO country codes. The acquired firm stored country as free text typed by staff, so its records show values such as 'Persia', 'Islamic Rep. Iran', 'IRN' and 'UAE (Dubai)'. Post-migration testing finds that 1,800 migrated customers have no valid country code, so the geography scenarios never fire for them. The integration project is already over budget, and the business wants to close it this quarter. What is the BEST remediation?",
    options: [
      "Add the free-text spellings found so far to a keyword list inside each geography scenario, so the rules also fire on them",
      "Rate all 40,000 migrated customers as high risk until the next periodic review collects the country again",
      "Map the values to the standard ISO code list, validate country fields at load, and review the unmonitored activity",
      "Rely on sanctions screening for these customers, since screening already checks names and addresses against the sanctions lists"
    ],
    answer: [2],
    explanation: "NYDFS Part 504.3(c) requires validation of the integrity, accuracy and quality of data so that accurate and complete data flows into monitoring, and extraction and loading processes that transfer data completely and accurately. The fix is therefore to bring the data into the bank's standard taxonomy, with validation at load, and then deal with the gap that already exists. The Wolfsberg Payment Transparency Standards also prefer ISO 3166 two-character country codes in structured fields. A keyword list is the runner-up but only patches the spellings seen so far, and every new variant would again bypass the rules. Blanket high-risk rating does not fix the data, and sanctions screening is a different control from geography-based monitoring.",
    source: [
      { label: "NYDFS 3 NYCRR 504.3(c) – data validation, extraction and loading (Cornell LII)", url: "https://www.law.cornell.edu/regulations/new-york/3-NYCRR-504.3" },
      { label: "Wolfsberg Group Payment Transparency Standards (2023) – structured addresses and ISO 3166 codes", url: "https://db.wolfsberg-group.org/assets/13422898-fba1-44b3-9679-a8c7406e9e78/Wolfsberg%20Group%20Payment%20Transparency%20Standards%202023.pdf" }
    ]
  },
  {
    id: "DATA-002", domain: 4, topic: "Network analytics: false links from poor-quality data", hy: false, difficulty: "hard",
    q: "A bank runs network analytics across its retail customer base for the first time. One cluster links 6,400 unrelated customers, including a known mule account, through a single shared phone number. Analysis shows that branch staff typed the bank's own call-centre number whenever a customer refused to give a phone number. The head of investigations proposes raising alerts on all 6,400 customers because they are connected to a confirmed mule. What should the bank do FIRST?",
    options: [
      "Treat the number as a data defect: exclude placeholder values from linking, then rebuild the network before concluding",
      "Raise alerts on all 6,400 customers, because any connection to a confirmed mule must be investigated whatever its source",
      "Close the network analytics project, because an attribute that links thousands of customers shows the tool is unreliable",
      "Ask each of the 6,400 customers for a valid phone number at their next periodic review, and keep the cluster unchanged until then"
    ],
    answer: [0],
    explanation: "In the HKMA's AML/CFT Regtech case studies, a bank using network analytics at scale warned that the technique 'is particularly vulnerable to data weaknesses… which can drive accidental linkages and missed risk factors', so data quality checks, cleansing and remediation must come first. A placeholder value shared by thousands of customers is exactly such an accidental link. Alerting on all 6,400 is the runner-up, but the 'connection' is created by bad data, not by the customers, and the volume would bury the real leads. Abandoning the tool or waiting for periodic reviews leaves the mule network unexamined.",
    source: [
      { label: "HKMA, AML/CFT Regtech: Case Studies and Insights (Jan 2021) – network analytics data sourcing and governance", url: "https://www.hkma.gov.hk/media/eng/doc/key-information/guidelines-and-circular/2021/20210121e2a1.pdf" }
    ]
  },
  {
    id: "DATA-003", domain: 4, topic: "Data integrity: default values that hide missing data", hy: false, difficulty: "medium",
    q: "A bank's monitoring data feed rejects wire records with an empty originator-country field, and about 2% of incoming wires are rejected each day. To stop the rejections, an IT team proposes filling every empty country field with the bank's home country code before loading. What is the MAIN problem with this proposal?",
    options: [
      "It increases the volume of records loaded and therefore the processing cost of the monitoring system",
      "It makes incomplete records look complete, so geography scenarios treat them as domestic and the data gap is hidden",
      "It breaches the requirement to load data into the monitoring system in real time, before the wire is executed",
      "It changes the wire records themselves, which then no longer match the copies kept for record retention"
    ],
    answer: [1],
    explanation: "NYDFS Part 504.3(c) requires institutions to validate the integrity, accuracy and quality of data so that accurate and complete data flows through monitoring, and to have extraction and loading processes that ensure a complete and accurate transfer. Defaulting missing countries to the home country does the opposite: the records pass validation but carry false data, so cross-border scenarios treat them as domestic and nobody sees the gap. The right approach is to route rejected records to a reviewed exception process and fix the source. Transaction monitoring under Part 504 is post-execution, so there is no real-time loading rule, and cost or record copies are not the main concern.",
    source: [
      { label: "NYDFS 3 NYCRR 504.3(a) and (c) – post-execution monitoring and data integrity (Cornell LII)", url: "https://www.law.cornell.edu/regulations/new-york/3-NYCRR-504.3" }
    ]
  },
  {
    id: "DATA-004", domain: 3, topic: "Privacy: DPIA before deploying ML monitoring (GDPR Art. 35)", hy: true, difficulty: "hard",
    q: "An EU bank plans to launch a machine-learning model next month that profiles every retail customer's behaviour and automatically raises their risk rating, which can lead to extra checks or account restrictions. The model also uses internal records of past fraud allegations and criminal investigations. The project team says data protection work is unnecessary because the processing is required by AML law. The data protection officer (DPO) has not been consulted. What should the MLRO insist on FIRST?",
    options: [
      "Ask customers for consent to the profiling through an update to the account terms before the model goes live",
      "Launch on schedule, since a legal obligation is a lawful basis, and complete a privacy review within three months",
      "Remove all criminal-offence data from the model so that no further data protection assessment is required",
      "Complete a data protection impact assessment before the processing starts, seeking the DPO's advice"
    ],
    answer: [3],
    explanation: "GDPR Article 35 requires the controller to carry out a data protection impact assessment before processing that uses new technologies and is likely to result in high risk. It is required in particular for systematic and extensive automated evaluation, including profiling, on which decisions with significant effects are based, and for large-scale processing of data on criminal offences. The controller must seek the DPO's advice. A legal obligation may be the lawful basis (Art. 6(1)(c)), but that does not remove the DPIA duty, and a review after launch is too late. Consent is not needed where the processing rests on a legal obligation, and dropping offence data still leaves the profiling that triggers a DPIA.",
    source: [
      { label: "GDPR (Regulation (EU) 2016/679), Arts. 5, 6 and 35 – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng" }
    ]
  },
  {
    id: "DATA-005", domain: 3, topic: "Record retention and deletion under the AMLR (Art. 77)", hy: false, difficulty: "hard",
    q: "An EU bank ended its business relationship with a customer on 1 September 2028. The customer was never reported to the FIU, and no authority has asked for the records. The head of investigations wants to keep all CDD files and transaction records of former customers indefinitely, in case they help future investigations. Under the AMLR, which retention approach is correct?",
    options: [
      "Keep the records for 5 years from the customer's last transaction, then keep them indefinitely in archive form",
      "Keep the records until 1 September 2033 and then delete the personal data, unless an authority requires longer retention",
      "Keep the records for 10 years from the end of the relationship, because the AMLR doubled the old retention period",
      "Keep the records indefinitely, because AML obligations override the storage limitation principle in data protection law"
    ],
    answer: [1],
    explanation: "AMLR Article 77(3) requires retention for 5 years from the date the business relationship ends, after which obliged entities 'shall delete personal data', subject to retention periods under other Union or national law. Competent authorities may require further retention case by case, where needed to prevent, detect, investigate or prosecute ML/TF, for up to another 5 years. Indefinite retention would also breach the GDPR's storage limitation principle (Art. 5(1)(e)). The default period is 5 years, not 10, and it runs from the end of the relationship, not from the last transaction.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Art. 77 – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng" },
      { label: "GDPR (Regulation (EU) 2016/679), Art. 5(1)(e) – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng" }
    ]
  },
  {
    id: "DATA-006", domain: 3, topic: "Subject access requests and SARs (UK DPA 2018 crime exemption)", hy: false, difficulty: "hard",
    q: "A UK bank submitted a SAR to the NCA on a customer three weeks ago and is still monitoring the account. The customer now sends a data subject access request asking for 'all personal data you hold about me, including any internal notes'. A data protection analyst proposes refusing the whole request, saying the crime exemption applies to any customer under investigation. How should the bank respond?",
    options: [
      "Send everything, including the SAR and investigation notes, because the right of access overrides the bank's AML duties",
      "Delay the whole response until the NCA has confirmed it has no objection to the disclosure",
      "Withhold only data whose disclosure would likely prejudice crime detection, and provide the rest without mentioning the SAR",
      "Refuse the whole request, because any customer with a SAR on file is fully exempt from subject access rights"
    ],
    answer: [2],
    explanation: "Under DPA 2018 Schedule 2 paragraph 2, the listed UK GDPR provisions, including the right of access, do not apply to data processed for the prevention or detection of crime only 'to the extent that' applying them 'would be likely to prejudice' those purposes. So the exemption is applied item by item, not to the whole file. Refusing everything is the runner-up, but it over-applies the exemption. Disclosing the SAR or investigation notes could amount to tipping off under POCA s.333A. There is no rule that the bank must wait for NCA approval before answering a subject access request.",
    source: [
      { label: "Data Protection Act 2018, Sch. 2 para. 2 – legislation.gov.uk", url: "https://www.legislation.gov.uk/ukpga/2018/12/schedule/2/paragraph/2" },
      { label: "Proceeds of Crime Act 2002, s.333A (tipping off) – legislation.gov.uk", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/333A" }
    ]
  },
  {
    id: "DATA-007", domain: 4, topic: "Automated and AI-based CDD decisions under the AMLR (Art. 76(5))", hy: false, difficulty: "hard",
    q: "In 2028 an EU bank uses an AI model that automatically refuses account applications scoring above a risk threshold. A rejected applicant complains that no one has explained the refusal and asks how to challenge it. The bank had separately reported her to the FIU after the model flagged links to a known fraud ring. What does the AMLR require of the bank?",
    options: [
      "Ensure meaningful human intervention, and offer an explanation and a way to challenge, without disclosing the FIU report",
      "Refuse any explanation, because decisions made for AML purposes are exempt from the rules on automated decision-making",
      "Stop using the model for onboarding decisions, because the AMLR prohibits AI systems in customer due diligence",
      "Give the applicant the model's full scores and features, including the fact that the fraud-ring link triggered a report"
    ],
    answer: [0],
    explanation: "AMLR Article 76(5) allows decisions from automated processes, including profiling and AI systems, only if the data are limited to CDD data obtained under Chapter III, a decision to enter into, refuse or maintain a relationship is subject to meaningful human intervention, and the customer can obtain an explanation and challenge the decision, 'except in relation to a report' to the FIU. Refusing any explanation is the runner-up, but the AMLR expressly grants the right. AI is permitted under these conditions, and disclosing the report would breach the prohibition on disclosure.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Art. 76(5) – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng" }
    ]
  },
  {
    id: "DATA-008", domain: 4, topic: "Geolocation and IP data in onboarding and sanctions controls", hy: true, difficulty: "hard",
    q: "A US crypto exchange onboards an applicant who gives a German address and passes document and liveness checks. The exchange's fraud team logs IP addresses for account security. The logs show that the applicant's first two logins came from an Iranian IP address and later logins came through a commercial VPN service. The applicant has asked to withdraw funds to an external wallet. The fraud team says the IP data was collected for security only, so compliance should not use it. What should the exchange do?",
    options: [
      "Approve the withdrawal, because the address and identity documents were verified and VPN use by itself is lawful",
      "Leave the IP logs with the fraud team, and ask the applicant to confirm the German address at the next periodic review",
      "Close the account at once and file a report, because any login from a sanctioned country proves the customer is resident there",
      "Use the IP data: hold the withdrawal, investigate the customer's location, and block if a sanctioned nexus is confirmed"
    ],
    answer: [3],
    explanation: "OFAC's Sanctions Compliance Guidance for the Virtual Currency Industry tells companies to use geolocation tools and IP blocking, and to screen IP addresses against known VPN addresses. It also says companies should use information they hold 'even if it was obtained for a different reason — such as for business or security purposes'. It lists access from an IP address or VPN connected to a sanctioned jurisdiction as a red flag. Approving because documents were verified ignores this red flag, and leaving the data with the fraud team repeats the failure OFAC cites in its enforcement cases. Closing the account at once overstates what one IP signal proves, because the guidance calls for investigation and appropriate controls.",
    source: [
      { label: "OFAC, Sanctions Compliance Guidance for the Virtual Currency Industry (Oct 2021) – geolocation, IP blocking and red flags", url: "https://ofac.treasury.gov/media/913571/download?inline" }
    ]
  },
  {
    id: "DATA-009", domain: 4, topic: "Biometrics: 1:N deduplication hit during onboarding", hy: false, difficulty: "hard",
    q: "A digital bank's onboarding flow compares each applicant's selfie with the photo in their identity document (1:1), and also searches the selfie against all existing customers' face templates (1:N) to detect duplicate identities. An applicant named Daniel passes the 1:1 check, but the 1:N search returns a match to an existing customer named David with a different date of birth and address. The operations team wants the system to decline such applicants automatically and file a report. According to NIST SP 800-63A-4, what should happen?",
    options: [
      "Decline the applicant automatically, because a 1:N match shows the person already holds an account under another name",
      "Hold the application for manual review to confirm or rule out the 1:N match before any decision to decline",
      "Approve the applicant, because only the 1:1 comparison against the document photo is relevant to identity proofing",
      "Ask the applicant to retake the selfie and accept the application if the second 1:N search returns no match"
    ],
    answer: [1],
    explanation: "NIST SP 800-63A-4 allows 1:N identification for resolution and deduplication, subject to a privacy risk assessment. It states that providers 'SHALL NOT decline a user's enrollment without a manual review' to confirm the automated result is not a false positive, giving twins as an example. Automatic decline is the runner-up but is exactly what the guideline forbids, and a real duplicate would only be confirmed by that review. Ignoring the 1:N hit discards a fraud signal, and a retake invites manipulation rather than resolving the match.",
    source: [
      { label: "NIST SP 800-63A-4 (July 2025), biometric requirements for 1:1 and 1:N comparison", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63A-4.pdf" }
    ]
  },
  {
    id: "DATA-010", domain: 4, topic: "Biometrics: demographic performance testing (calculation)", hy: false, difficulty: "hard",
    q: "A bank tests a vendor's face-verification system in conditions like its live onboarding. The overall false non-match rate (FNMR) is 0.6%. For applicants aged 70 and over, the FNMR is 0.9%. For applicants with the darkest skin-tone category, it is 0.7%. The overall false match rate is 1 in 20,000. The bank applies NIST SP 800-63A-4 as its benchmark. Which conclusion is correct?",
    options: [
      "Both groups pass, because every measured FNMR is below the 1-in-100 maximum that NIST sets for 1:1 verification",
      "Neither group passes, because NIST requires each demographic group's FNMR to equal the overall population's FNMR",
      "The 70-and-over group fails, because its FNMR is 50% worse than the overall rate and NIST allows at most 25% worse",
      "The system fails overall, because its false match rate of 1 in 20,000 is worse than the NIST requirement"
    ],
    answer: [2],
    explanation: "NIST SP 800-63A-4 requires biometric verification to perform for each demographic group no more than 25% worse than for the overall population, so with an overall FNMR of 0.6% no group may exceed 0.75%. The 70-and-over group, at 0.9%, is 50% worse and fails. The skin-tone group, at 0.7%, is about 17% worse and passes. The 1-in-100 FNMR ceiling is the runner-up trap: all rates meet it, but the demographic test is separate. A false match rate of 1 in 20,000 is better than the required 1 in 10,000.",
    source: [
      { label: "NIST SP 800-63A-4 (July 2025), FMR/FNMR thresholds and demographic performance requirement", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63A-4.pdf" }
    ]
  },
  {
    id: "DATA-011", domain: 4, topic: "Identity proofing steps: resolution, validation, verification", hy: false, difficulty: "medium",
    q: "A fintech's remote onboarding vendor labels each step of its identity proofing flow. Using the definitions in NIST SP 800-63A-4, which labels are correct? (Choose two.)",
    options: [
      "Comparing the applicant's live selfie with the photo on the passport to confirm they match is identity resolution",
      "Checking the passport's security features and chip data to confirm the document is genuine is evidence validation",
      "Confirming that the passport is genuine, unaltered and issued by a real authority is identity verification",
      "Checking the applicant's stated home address against a credit bureau file is identity verification",
      "Confirming that the claimed identity corresponds to a single, unique individual in the population served is identity resolution"
    ],
    answer: [1, 4],
    explanation: "NIST SP 800-63A-4 defines identity resolution as determining that the claimed identity corresponds to a single, unique individual, and evidence validation as confirming that the evidence is genuine, authentic and accurate. Attribute validation confirms the accuracy of core attributes such as an address, so the credit bureau check is attribute validation. Identity verification confirms that the applicant is the genuine owner of the evidence, which is what the selfie-to-photo comparison does. The document authenticity check is therefore validation, not verification.",
    source: [
      { label: "NIST SP 800-63A-4 (July 2025), sec. 1.1 and 2.1 – expected outcomes and steps of identity proofing", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63A-4.pdf" }
    ]
  },
  {
    id: "DATA-012", domain: 4, topic: "External data: beneficial ownership register discrepancies (AMLR Art. 24, date calculation)", hy: true, difficulty: "hard",
    q: "In 2028 an EU bank onboards a holding company that it rates as higher risk and applies enhanced due diligence. On 3 March 2028 the bank confirms, from a shareholder agreement and the customer's own declaration, that a person holding 40% of the shares is missing from the central beneficial ownership register. The register lists only two 30% owners. The relationship manager suggests asking the customer to correct the register itself. Under the AMLR, what must the bank do?",
    options: [
      "Report the discrepancy to the central register by 17 March 2028, with the evidence and its view of who the beneficial owners are",
      "Invite the customer to correct the register within 14 days, and report the discrepancy only if the customer fails to do so",
      "Report the discrepancy within 30 days, because the customer has a right to be heard before the register is notified",
      "Rely on the register entry, because obliged entities may treat central register information as conclusive for verification"
    ],
    answer: [0],
    explanation: "AMLR Article 24(1) requires obliged entities to report discrepancies with the central register without undue delay and in any case within 14 calendar days of detection, here by 17 March 2028. The report must include the supporting information and whom the entity considers to be the beneficial owners. Inviting the customer to correct the register first is the runner-up, but that Article 24(2) derogation does not apply to higher-risk cases under enhanced due diligence. Article 22(7) requires the register to be consulted in addition to other verification means, so it is never conclusive on its own.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Arts. 22(7) and 24 – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng" }
    ]
  },
  {
    id: "DATA-013", domain: 4, topic: "Remote identity verification means under the AMLR (Art. 22(6))", hy: false, difficulty: "medium",
    q: "An EU neobank is redesigning its app-based onboarding to meet the AMLR from July 2027. Which method meets the AMLR's verification standard on its own, without the customer also submitting an identity document?",
    options: [
      "A national electronic ID scheme notified under eIDAS at the 'low' assurance level, combined with a one-time SMS code",
      "A recorded video selfie, checked by passive liveness detection, with no identity document or other evidence",
      "A recent utility bill and a bank statement uploaded as PDFs and checked by an optical character recognition tool",
      "An electronic identification means meeting the eIDAS requirements for assurance level 'substantial' or 'high'"
    ],
    answer: [3],
    explanation: "AMLR Article 22(6) allows identity to be verified either by submitting an identity document, passport or equivalent (plus reliable independent sources where relevant), or by using electronic identification means that meet the eIDAS Regulation's requirements for assurance level 'substantial' or 'high', together with relevant qualified trust services. An eID at the 'low' level does not qualify, even with an SMS code. A selfie alone links a face to nothing, and utility bills are not identity documents.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Art. 22(6) – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng" }
    ]
  },
  {
    id: "DATA-014", domain: 4, topic: "Sanctions screening for instant euro payments (Reg. (EU) 2024/886, Art. 5d)", hy: true, difficulty: "hard",
    q: "A euro-area bank offers instant credit transfers that must complete within seconds. Its sanctions team wants to keep screening the payer and payee names of every instant transfer against the EU consolidated list, in addition to its daily screening of customers. Which statements about the Instant Payments Regulation are correct? (Choose two.)",
    options: [
      "The bank must check its customers against EU targeted financial sanctions at least daily and immediately after new or amended listings",
      "The bank should keep screening the payer and payee of each instant transfer against EU targeted sanctions lists as a second line of defence",
      "Because customer-base screening replaces transaction screening, the bank must stop all transaction-level checks on instant transfers, including AML monitoring",
      "The ban on screening during execution does not prevent controls needed for AML/CFT law or for restrictive measures other than EU targeted financial sanctions",
      "Weekly screening of the customer base is enough, provided that instant transfers above EUR 10,000 are screened in real time"
    ],
    answer: [0, 3],
    explanation: "Article 5d of Regulation (EU) 2024/886, which applies from 9 January 2025, requires PSPs offering instant credit transfers to verify their customers against EU targeted financial restrictive measures immediately after new or amended measures enter into force and at least once every calendar day. During execution of an instant transfer, the payer's and payee's PSPs 'shall not' screen the payer or payee for those measures, so transaction-by-transaction screening against the EU list is barred. Article 5d(2) states that this is without prejudice to actions taken under other restrictive measures or under EU AML/CFT law, so AML monitoring continues. Weekly screening is too infrequent, and there is no EUR 10,000 carve-out.",
    source: [
      { label: "Regulation (EU) 2024/886 (Instant Payments), Art. 1 inserting Art. 5d into Reg. (EU) 260/2012 – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/886/oj/eng" }
    ]
  },
  {
    id: "DATA-015", domain: 4, topic: "Verification of payee (Reg. (EU) 2024/886, Art. 5c)", hy: false, difficulty: "hard",
    changed: "EU Instant Payments Regulation: verification of payee mandatory for euro-area PSPs from 9 Oct 2025",
    q: "In October 2026 a euro-area bank reviews its verification-of-payee (VoP) service after a fraud case. A consumer entered a payee name and IBAN, the payee's bank reported that they did not match, and the customer went ahead after seeing the warning. The money went to a fraudster's account. The fraud team now proposes changes to the service. Which statement correctly describes the bank's obligations?",
    options: [
      "The bank must block any credit transfer where the name and IBAN do not match, until the payee's bank confirms the account holder",
      "The bank must warn the payer that the funds may reach an account not held by the intended payee, but the payer may still authorise",
      "VoP applies only to instant credit transfers, so the bank may drop the check for standard euro credit transfers to save cost",
      "The bank may let any customer, including consumers, opt out of VoP for individual payments if they accept the risk in writing"
    ],
    answer: [1],
    explanation: "Article 5c of the amended SEPA Regulation, which applies to euro-area PSPs from 9 October 2025, requires the payer's PSP to verify the payee for credit transfers before authorisation. If there is no match, the PSP must notify the payer and inform them that authorising may send the funds to an account not held by the intended payee. PSPs must ensure that verification 'does not prevent payers from authorising' the transfer, so blocking every mismatch is wrong. A PSP that complied is not liable for execution to an unintended payee on the basis of an incorrect unique identifier. The service covers credit transfers generally, and only non-consumers may opt out, and only for bulk payment packages.",
    source: [
      { label: "Regulation (EU) 2024/886 (Instant Payments), Art. 1 inserting Art. 5c into Reg. (EU) 260/2012 – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/886/oj/eng" }
    ]
  },
  {
    id: "DATA-016", domain: 4, topic: "Payment transparency: what an intermediary bank must and need not do", hy: false, difficulty: "hard",
    q: "A bank acts as an intermediary in cross-border USD payments for a respondent bank. It processes 30,000 messages a day. Its operations head asks which responsibilities sit with the bank as intermediary under FATF R.16 and the Wolfsberg Payment Transparency Standards (2023). Which responsibilities apply? (Choose two.)",
    options: [
      "Identifying and conducting CDD on the respondent bank's underlying customers who originate the payments",
      "Unbundling any bundled payments it learns of, so that each underlying payer and payee can be screened separately",
      "Passing on, to the next bank in the chain, the complete originator and beneficiary information it receives",
      "Holding every payment that lacks required information for manual review before release, whatever its risk",
      "Having risk-based policies for when to execute, reject or suspend payments that lack required information"
    ],
    answer: [2, 4],
    explanation: "INR.16 paragraphs 26-27 require an intermediary to take reasonable measures, consistent with straight-through processing, to identify cross-border payments lacking required information, and to have risk-based policies on when to execute, reject or suspend them. The Wolfsberg Payment Transparency Standards add that the intermediary must pass on the complete information it receives to the next PSP in the chain. The Standards say an intermediary is not responsible for CDD on the underlying customers of other PSPs, or for identifying or unbundling bundled payments. Holding every incomplete payment regardless of risk is not consistent with straight-through processing or a risk-based approach.",
    source: [
      { label: "FATF Recommendations (2012-2026), INR.16 paras 26-27 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
      { label: "Wolfsberg Group Payment Transparency Standards (2023), section 4 – intermediary agent PSPs", url: "https://db.wolfsberg-group.org/assets/13422898-fba1-44b3-9679-a8c7406e9e78/Wolfsberg%20Group%20Payment%20Transparency%20Standards%202023.pdf" }
    ]
  },
  {
    id: "DATA-017", domain: 4, topic: "ISO 20022 structured addresses for screening", hy: false, difficulty: "medium",
    q: "A bank is migrating its outgoing cross-border payments to ISO 20022. Its legacy system put the whole debtor address into free-text lines, which were often cut off so the town and country disappeared. The bank's local address formats vary widely, so full structuring is hard to achieve at once. According to the Wolfsberg Payment Transparency Standards (2023), what is the minimum acceptable approach?",
    options: [
      "Keep free-text address lines, as long as the full address appears in the remittance information field",
      "Send only the country code, because downstream banks screen country rather than street-level address details",
      "Use at least a hybrid address: structured town and country, with street and building details allowed in unstructured form",
      "Replace physical addresses with the bank's own branch address, which is always fully structured and complete"
    ],
    answer: [2],
    explanation: "The Wolfsberg Payment Transparency Standards say the address should be sufficient to identify the party's location clearly for sanctions screening and AML monitoring. It should be fully structured where possible and at a minimum use a hybrid structure: structured town and country, with street name and building number possibly unstructured because of local conventions. Putting the address in remittance information misuses that field, which the Standards say should be used for its intended purpose. A country code alone is insufficient, and substituting the branch address hides the debtor's real location.",
    source: [
      { label: "Wolfsberg Group Payment Transparency Standards (2023), debtor agent responsibilities – address", url: "https://db.wolfsberg-group.org/assets/13422898-fba1-44b3-9679-a8c7406e9e78/Wolfsberg%20Group%20Payment%20Transparency%20Standards%202023.pdf" }
    ]
  },
  {
    id: "DATA-018", domain: 4, topic: "Perpetual KYC: event triggers and maximum refresh intervals (AMLR Art. 26)", hy: true, difficulty: "hard",
    q: "An EU bank is replacing its fixed KYC refresh cycle with perpetual KYC (pKYC). The vendor's engine watches company registries, adverse media, sanctions lists and transaction behaviour, and opens a review only when a trigger fires. The vendor says that, once the AMLR applies, fixed refreshes will no longer be needed for any customer because 'pKYC is continuous by definition'. Some higher-risk customers have produced no triggers for 20 months. What is the BEST design under the AMLR?",
    options: [
      "Rely on triggers alone, because the AMLR is risk-based and lets each bank set its own refresh intervals",
      "Keep the old fixed cycles for all customers and use pKYC triggers only as information for those scheduled reviews",
      "Review only customers whose triggers fire, plus a random 5% sample of the others each year as a control test",
      "Use event triggers, plus a backstop update at least yearly for higher-risk and five-yearly for other customers"
    ],
    answer: [3],
    explanation: "AMLR Article 26(3) requires customer information to be reviewed when relevant circumstances change or the bank becomes aware of a relevant fact, which is what pKYC triggers support. Article 26(2) also caps the time between updates at 1 year for higher-risk customers under enhanced due diligence and 5 years for all others. Higher-risk customers with no triggers for 20 months are therefore already overdue. Triggers alone is the runner-up, but the caps apply whatever the monitoring approach. Ignoring the triggers loses the benefit of pKYC, and a 5% sample does not meet the maximum intervals.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Art. 26(2)-(3) – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng" }
    ]
  },
  {
    id: "DATA-019", domain: 4, topic: "AI-ranked adverse media: governing auto-discarded results", hy: true, difficulty: "hard",
    q: "A bank adopts a natural-language-processing tool that scores adverse media hits for relevance and automatically discards those scoring below 0.3. Analyst workload falls by 70%. Six months later, nobody has reviewed any discarded article. A regulator's thematic review asks how the bank knows the tool is not discarding relevant allegations, such as bribery reports in foreign-language local press. What is the BEST response?",
    options: [
      "Regularly sample-test discarded articles, including foreign-language ones, then recalibrate and document the results",
      "Lower the discard threshold from 0.3 to 0.1 so that fewer articles are discarded, and leave the process otherwise unchanged",
      "Rely on the vendor's accuracy statistics, because the vendor validated the model on a large multilingual news dataset",
      "Turn off automatic discarding and return to fully manual review of every hit, because AI cannot be trusted with screening"
    ],
    answer: [0],
    explanation: "The Wolfsberg Principles for Using AI/ML in Financial Crime Compliance require proportionate use: the severity of the financial crime risk should be weighed against the solution's margin for error, and the use and configuration should be validated regularly. Under the design principle, firms should run ongoing testing, validation and re-configuration, and under accountability they stay responsible even for vendor systems. Testing a sample of what the tool discards is how a bank measures that margin for error. Lowering the threshold changes the volume without measuring what is missed, vendor statistics do not reflect the bank's own customers and languages, and abandoning the tool is disproportionate.",
    source: [
      { label: "Wolfsberg Principles for Using AI and Machine Learning in Financial Crime Compliance (2022)", url: "https://db.wolfsberg-group.org/assets/ae8ec2d1-da45-4cef-b6c6-166e2cf17c03/Wolfsberg%20Principles%20for%20Using%20Artificial%20Intelligence%20and%20Machine%20Learning%20in%20Financial%20Crime%20Compliance.pdf" }
    ]
  },
  {
    id: "DATA-020", domain: 4, topic: "AI pilot finds activity the rules missed (2018 interagency innovation statement)", hy: true, difficulty: "hard",
    q: "A US bank runs a machine-learning monitoring pilot alongside its rules-based system. In three months the pilot finds 14 customers involved in apparent funnel-account activity that the rules never alerted on. Investigators confirm that 9 are suspicious. The CFO fears that the results prove the existing program deficient and wants to stop the pilot without telling anyone. Under the December 2018 Joint Statement on Innovative Efforts, which response is correct?",
    options: [
      "Stop the pilot and delete its results, because unfinished pilot findings are not covered by the suspicious activity reporting rules",
      "Self-report a program failure to all regulators, because a pilot that exposes gaps automatically counts as a BSA violation",
      "File SARs on the confirmed activity and continue; the findings are not automatically proof of a deficient program",
      "Keep the pilot but suspend SAR filing on its findings until the model has been fully validated and approved"
    ],
    answer: [2],
    explanation: "The 2018 Joint Statement says that pilots 'in and of themselves should not subject banks to supervisory criticism', and that where an AI-based monitoring system finds suspicious activity existing processes missed, the agencies 'will not automatically assume that the banks' existing processes are deficient'. They assess the existing processes on their own merits. The statement also says banks must continue to meet their BSA obligations, so activity confirmed as suspicious must be reported however it was detected. Stopping or deleting the results, or delaying the SARs pending validation, would breach those obligations. A self-report as an automatic violation misreads the statement.",
    source: [
      { label: "FinCEN/Fed/FDIC/NCUA/OCC, Joint Statement on Innovative Efforts to Combat ML and TF (3 Dec 2018)", url: "https://www.fincen.gov/sites/default/files/2018-12/Joint%20Statement%20on%20Innovation%20Statement%20%28Final%2011-30-18%29_508.pdf" }
    ]
  },
  {
    id: "DATA-021", domain: 4, topic: "Moving from rules to ML: when to retire the legacy system", hy: true, difficulty: "hard",
    q: "A bank's machine-learning monitoring model has run in parallel with the legacy rules for nine months. It produces 60% fewer alerts and a higher SAR conversion rate. The vendor urges the bank to switch the rules off next month to save licence fees. The model's data comes partly from a cloud provider in another country, and the bank has not yet assessed the change for privacy or customer-notification issues. Which approach BEST reflects the US agencies' 2018 Joint Statement on Innovative Efforts?",
    options: [
      "Switch off the rules next month, because nine months of better results show the model is already more effective",
      "Document whether the model is ready to replace the rules, covering security, vendor risk and privacy, and discuss it with the regulator",
      "Keep running both systems indefinitely, because the agencies expect legacy rules to remain as a permanent backstop",
      "Ask the vendor to certify the model's effectiveness, which transfers responsibility for any missed activity to the vendor"
    ],
    answer: [1],
    explanation: "The 2018 Joint Statement describes pilots run alongside existing BSA/AML processes as the way to test innovations. It says management should 'prudently evaluate whether, and at what point' an innovation is developed enough to replace or augment existing processes, considering information security, third-party risk management and compliance with other laws such as privacy and customer notification, and should discuss the evaluation with its regulator. Switching off next month is the runner-up but skips the open security, vendor and privacy issues. The agencies do not require permanent dual running, and a vendor certification does not move the bank's accountability.",
    source: [
      { label: "FinCEN/Fed/FDIC/NCUA/OCC, Joint Statement on Innovative Efforts to Combat ML and TF (3 Dec 2018)", url: "https://www.fincen.gov/sites/default/files/2018-12/Joint%20Statement%20on%20Innovation%20Statement%20%28Final%2011-30-18%29_508.pdf" }
    ]
  },
  {
    id: "DATA-022", domain: 4, topic: "RPA: which AML tasks suit robotic process automation", hy: false, difficulty: "medium",
    q: "A bank's financial crime unit plans its first robotic process automation (RPA) project. It wants processes that are manual, repeated often, structured and deterministic. Which tasks are the BEST candidates? (Choose two.)",
    options: [
      "Gathering customer, account and transaction data from core systems into the case file for each monitoring alert",
      "Deciding whether the activity in a monitoring alert is suspicious enough to report to the FIU",
      "Copying ownership names from third-party databases into the screening tool and running adverse media searches",
      "Judging whether a private banking client's explanation of their source of wealth is credible",
      "Approving the exit of high-risk customers once the case review has been completed"
    ],
    answer: [0, 2],
    explanation: "The HKMA's AML/CFT Regtech case studies describe a framework that selects processes that are manual, repeatable and high-frequency, structured, and deterministic, where one set of inputs always gives the same outputs. Banks applied RPA to data retrieval for monitoring alert investigations and to name screening and adverse media searches for correspondent banking reviews. They described RPA as suited to activity that is highly repetitive and requires limited human judgement. Deciding on suspicion, judging source-of-wealth explanations and approving exits all require human judgement, so they are not RPA tasks.",
    source: [
      { label: "HKMA, AML/CFT Regtech: Case Studies and Insights (Jan 2021) – RPA case studies", url: "https://www.hkma.gov.hk/media/eng/doc/key-information/guidelines-and-circular/2021/20210121e2a1.pdf" }
    ]
  },
  {
    id: "DATA-023", domain: 4, topic: "RPA: silent bot failure after a system change", hy: false, difficulty: "hard",
    q: "A bank uses a software robot to run name screening and adverse media searches for its periodic correspondent banking reviews. After IT moved a button on the screening portal's search page, the robot could no longer start searches. It logged errors but still marked each task 'completed'. Three weeks later, a reviewer notices that 46 reviews were closed without any screening results. Nobody had told the RPA team about the portal change. What should the bank do?",
    options: [
      "Update the robot's script to the new page layout, complete user acceptance testing, and resume normal operation",
      "Switch the reviews back to manual screening permanently, because the incident shows that RPA is unsuitable for screening",
      "Ask IT to freeze all changes to the screening portal so the robot cannot be affected by future interface updates",
      "Re-run screening for the 46 reviews, fix the robot, link system changes to robot retesting, and add alerts when the robot hits errors"
    ],
    answer: [3],
    explanation: "The HKMA's Regtech case studies found that a change to a system's interface, such as moving a button, required a matching change to the RPA solution and fresh testing. They also found that unless 'unhappy path' scenarios are designed in, the robot either stops or its errors are found only after the fact in log files. The bank must first make good the 46 reviews that were closed without screening, then fix the robot, put change management and exception alerting in place. Fixing the script alone is the runner-up, but it leaves the missed screenings and the root cause unaddressed. Permanent manual work or a change freeze are disproportionate.",
    source: [
      { label: "HKMA, AML/CFT Regtech: Case Studies and Insights (Jan 2021) – RPA considerations", url: "https://www.hkma.gov.hk/media/eng/doc/key-information/guidelines-and-circular/2021/20210121e2a1.pdf" }
    ]
  },
  {
    id: "DATA-024", domain: 4, topic: "SupTech vs RegTech; push vs pull data collection", hy: false, difficulty: "medium",
    q: "A central bank builds a platform that draws granular transaction data directly from supervised banks' systems whenever its analysts need it, instead of waiting for periodic returns. Its FIU applies natural language processing to STR narratives and network analysis to prioritise high-risk networks. How does the Financial Stability Board classify this technology use?",
    options: [
      "SupTech, and the data platform is a 'pull' approach, in which the authority draws data as and when needed",
      "RegTech, because the data originates in regulated institutions' systems, and the platform is a 'push' approach",
      "SupTech, but the data platform is a 'push' approach, because the banks' systems deliver the data automatically",
      "RegTech for the FIU's STR analytics and SupTech for the data platform, since FIUs are not supervisors"
    ],
    answer: [0],
    explanation: "The FSB defines SupTech as applications of FinTech used by authorities for regulatory, supervisory and oversight purposes, and RegTech as their use by regulated institutions for compliance and reporting. The FSB report cites authorities using NLP on STR text and network analysis to prioritise high-risk networks as SupTech examples. It describes push technology as automating the delivery of pre-defined data from the institution to the authority, and pull technology as the authority drawing data from the institution as and when needed. The platform here is therefore pull.",
    source: [
      { label: "FSB, The Use of Supervisory and Regulatory Technology by Authorities and Regulated Institutions (Oct 2020)", url: "https://www.fsb.org/wp-content/uploads/P091020.pdf" }
    ]
  },
  {
    id: "DATA-025", domain: 4, topic: "Network analysis links to an SDN: control without ownership", hy: true, difficulty: "hard",
    q: "A US bank's network analytics tool links a corporate customer to an SDN. Corporate registry data shows the SDN owns 20% of the customer and sits on its board. Payment data shows the SDN's nephew signs most of the customer's contracts. No other blocked person holds shares in the customer. A junior analyst proposes blocking all of the customer's funds because the network shows it is 'controlled by an SDN'. What is the MOST appropriate response?",
    options: [
      "Block all of the customer's property, because control by an SDN makes the entity blocked under the 50 Percent Rule",
      "Take no action, because the SDN's 20% stake is below 50%, so the relationship carries no sanctions risk",
      "Do not treat it as automatically blocked, but apply heightened due diligence and make sure no SDN acts or signs for it",
      "Reject only payments above USD 10,000, because those are the payments most likely to benefit the SDN"
    ],
    answer: [2],
    explanation: "OFAC FAQ 398 states that the 50 Percent Rule 'speaks only to ownership and not to control', so an entity controlled but less than 50% owned by blocked persons is not automatically blocked, although OFAC may designate it later. OFAC urges caution with such entities. Firms should make sure they are not dealing with a blocked person representing the entity, for example a contract signed by an SDN. Blocking is the runner-up, but it misapplies the rule. Taking no action ignores the risk OFAC highlights, and a value threshold has no basis in sanctions law.",
    source: [
      { label: "OFAC FAQ 398 – control versus ownership under the 50 Percent Rule", url: "https://ofac.treasury.gov/faqs/398" }
    ]
  }
]);
