// Practical cases: from alert to suspicious activity report (SARC-001 to SARC-025). Written and source-verified October 2026.
window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "SARC-001", domain: 3, topic: "Continuing-activity SAR dates when no suspect was identified (calculation)", hy: true, difficulty: "hard",
    changed: "FinCEN SAR FAQs, Oct 2025",
    q: "Harbor Lane Bank's monitoring flags a series of rapid wires on 2 March 2026. That day the investigator finds facts that may support a SAR, but she cannot identify who controls the receiving accounts, so the bank uses the extra time the rule allows and files its initial SAR on 1 May 2026. The relationship manager is on leave until June, and the bank's policy refers to 'quarterly' reviews. The bank has chosen to follow FinCEN's continuing-activity timeline, and the suspicious wires continue through the summer. According to FinCEN's October 2025 SAR FAQs, what date range should the continuing-activity SAR cover, and by when should it be filed?",
    options: [
      "Activity from 2 March to 30 July 2026, filed by 29 August 2026",
      "Activity from 1 April to 29 June 2026, filed by 29 July 2026",
      "Activity from 2 May to 30 July 2026, filed by 29 August 2026",
      "Activity from 2 May to 30 July 2026, filed by 30 June 2026"
    ],
    answer: [2],
    explanation: "The FAQs give a separate timeline for an institution that cannot identify a subject and files 60 days after detection: day 0 detection, day 60 initial SAR, day 150 end of the 90-day period, day 180 continuing SAR. Here day 60 is 1 May, so the 90-day period runs from 2 May to 30 July (the activity dates must cover the whole 90-day period starting the day after the initial SAR) and the SAR is due by 29 August. The 1 April / 29 July dates would apply only if the initial SAR had been filed on day 30, and starting the range at detection would repeat activity already reported. The FAQs also stress that following this timeline is optional; the bank may instead file as appropriate within the normal deadlines.",
    source: [
      { label: "FinCEN and federal banking agencies – SAR FAQs (9 Oct 2025), Q2-Q3 and footnote 12", url: "https://www.fincen.gov/system/files/2025-10/SAR-FAQs-October-2025.pdf" },
      { label: "31 CFR 1020.320(b)(3) – 30/60-day SAR filing deadlines (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.320" }
    ]
  },
  {
    id: "SARC-002", domain: 3, topic: "Sharing a SAR within the group: affiliates, parent and foreign branches (FIN-2010-G006)", hy: true, difficulty: "hard",
    q: "Pinecrest National Bank, a US bank, files a SAR on a customer who also trades through the bank's US broker-dealer affiliate. Pinecrest's parent is a bank holding company in Canada, and Pinecrest runs a branch in London that services the customer's sterling account. The broker-dealer's compliance head asks whether she may then pass the SAR to the group's US investment adviser affiliate. The customer's son works in the London branch's operations team. Under FinCEN guidance on sharing SARs, which disclosures of the SAR are permitted? (Choose two.)",
    options: [
      "Pinecrest sharing the SAR with its London branch so that the branch can review the sterling account",
      "Pinecrest sharing the SAR with its US broker-dealer affiliate, which is subject to a SAR rule",
      "The broker-dealer passing the SAR on to the group's US investment adviser affiliate",
      "Pinecrest sharing the SAR with its Canadian parent holding company for enterprise-wide oversight",
      "Pinecrest sharing the SAR with any affiliate that first signs a written confidentiality undertaking"
    ],
    answer: [1, 3],
    explanation: "FIN-2010-G006 lets a depository institution share a SAR with an affiliate that is subject to a SAR regulation, and confirms that the 2006 guidance still applies: a US bank may share a SAR with its controlling company, whether domestic or foreign. Foreign branches of US banks count as affiliates that are not subject to a SAR regulation, so the London branch may not receive the SAR. An affiliate that has received a SAR may not pass it on to an affiliate of its own, even one subject to a SAR rule. A confidentiality undertaking does not widen these limits, and no sharing is allowed where the SAR may reach a person involved in the activity.",
    source: [
      { label: "FinCEN FIN-2010-G006 – Sharing SARs by depository institutions with certain U.S. affiliates", url: "https://www.fincen.gov/sites/default/files/shared/fin-2010-g006.pdf" },
      { label: "31 CFR 1020.320(e)(1)(ii)(B) – sharing within the corporate organizational structure (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.320" }
    ]
  },
  {
    id: "SARC-003", domain: 3, topic: "SAR confidentiality: a request to confirm that no SAR was filed", hy: false, difficulty: "medium",
    q: "A lawyer for Delmar Freight, a business customer of a US bank, writes that a lender will refinance Delmar's loans only if the bank confirms in writing that it 'has never filed a suspicious activity report on Delmar or its owners.' The bank has in fact filed no SAR on Delmar. The relationship manager wants to help, because Delmar is a profitable client with a 20-year history and its credit line is up for renewal next quarter. What should the bank do?",
    options: [
      "Provide the confirmation, because no SAR exists and so there is no SAR information to protect",
      "Decline to say whether any SAR exists, and notify FinCEN of the request and the bank's response",
      "Provide the confirmation, but only after the BSA officer has checked that no SAR was ever filed",
      "Refer the lawyer to FinCEN, which can confirm on the bank's behalf whether a SAR was filed"
    ],
    answer: [1],
    explanation: "A SAR and any information that would reveal its existence are confidential, and a bank asked to disclose such information must decline and notify FinCEN (31 CFR 1020.320(e)(1)(i)). FinCEN's 2010 confidentiality rule, quoted in FIN-2025-G001, adds that institutions should also keep confidential any document stating that a SAR has not been filed; otherwise, any refusal would reveal that a SAR exists. Checking the records first does not make the statement permissible, and government authorities may not disclose SAR information in response to a request for use in a private legal proceeding.",
    source: [
      { label: "FinCEN FIN-2025-G001 – Cross-border information sharing and SAR confidentiality (Sept 2025), footnote 7", url: "https://www.fincen.gov/system/files/2025-09/Crossborderguidance-508C.pdf" },
      { label: "31 CFR 1020.320(e) – confidentiality of SARs (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.320" }
    ]
  },
  {
    id: "SARC-004", domain: 3, topic: "SAR confidentiality and employment references (31 U.S.C. 5318(g)(2)(B))", hy: false, difficulty: "hard",
    q: "Westgate Savings, an FDIC-insured bank, dismissed teller Marcus Lowe after finding that he had taken $14,000 from dormant accounts, and it filed a SAR naming him. Three months later, another bank where Lowe has applied for a job sends Westgate a written request for an employment reference under section 18(w) of the Federal Deposit Insurance Act. Lowe has not been charged, and he is threatening to sue Westgate for defamation. Which response does the BSA permit?",
    options: [
      "A written reference that describes the theft and says that it was reported to FinCEN in a SAR",
      "No reference at all, because any information that was included in a SAR becomes confidential",
      "An oral briefing to the other bank, since only a written reference could reveal the SAR",
      "A written reference that describes the suspected theft but does not reveal that a SAR was filed"
    ],
    answer: [3],
    explanation: "31 U.S.C. 5318(g)(2)(B), reflected in 31 CFR 1020.320(e)(1)(ii)(A)(2)(ii), provides that SAR confidentiality does not prevent a bank from including information that was in a SAR in a written employment reference given under section 18(w) of the FDI Act in response to another financial institution's request. The reference may not disclose that the information was also included in a SAR or that a SAR was made, and the bank has no duty to include it. Confidentiality protects the SAR and its existence, not the underlying facts, so refusing on that ground is wrong; the statutory route is a written reference, not an informal oral briefing.",
    source: [
      { label: "31 U.S.C. 5318(g)(2)(B) – disclosures in certain employment references (GovInfo)", url: "https://www.govinfo.gov/link/uscode/31/5318?link-type=html" },
      { label: "31 CFR 1020.320(e)(1)(ii)(A)(2)(ii) – rules of construction (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.320" }
    ]
  },
  {
    id: "SARC-005", domain: 3, topic: "Alert triage: prioritising by urgency and risk (AMLR Art. 69(2))", hy: false, difficulty: "hard",
    q: "In late 2027, an EU bank's investigation team has 1,400 open alerts. Four new alerts arrive on Monday morning: three months of small card payments by a student; a corporate customer's €390,000 instant payment, held pending release, to a beneficiary in a high-risk third country who was added yesterday; a €2,000 pension credit into a dormant account; and a retail customer whose name partly matches a 2015 adverse media article. The team lead wants to work the queue strictly by alert age, as the procedures manual says. Under Article 69(2) of the AMLR, how should the team approach these alerts?",
    options: [
      "Assess the held €390,000 payment first, because assessments should take account of the urgency of the transaction and the risks",
      "Work the queue strictly by alert age, because first-in, first-out is the only defensible way to order the work",
      "Assess the adverse media match first, because name matches must be cleared before any transaction alert",
      "Close the low-value alerts automatically, because reports are needed only above a minimum amount"
    ],
    answer: [0],
    explanation: "AMLR Article 69(2) requires obliged entities to assess customers' transactions against all relevant facts and information they hold and, where necessary, to prioritise that assessment taking into account the urgency of the transaction and the risks affecting their Member State. A large payment on hold to a newly added high-risk beneficiary is both urgent and high risk, and Article 71 expects the bank to refrain from suspicious transactions until it has reported. Working strictly by age is the tempting runner-up, but it ignores the urgency the Regulation tells the bank to weigh. Article 69(1) requires reporting regardless of the amount involved, so small alerts cannot be closed automatically on value alone.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR) – Art. 69(1)-(2) and Art. 71 (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "SARC-006", domain: 3, topic: "Joint SARs: prohibited when a subject is an insider of a filer", hy: false, difficulty: "hard",
    q: "Investigators at Bank A and Bank B, both US banks, uncover a check-kiting ring that moved $2.3 million between accounts at the two banks. Both banks have filed 314(b) notices and have shared records with each other. One of the five subjects is a Bank B branch manager who approved the ring's withdrawals against uncollected funds. Bank A's investigator drafts a single joint SAR naming all five subjects, with Bank B as joint filer, to save effort. What should the banks do?",
    options: [
      "File the joint SAR without the branch manager, and report him in a separate SAR later",
      "File the joint SAR as drafted, because their 314(b) notices allow joint filing on any subject",
      "File separate SARs, because a joint SAR is not allowed when a subject is an insider of a filer",
      "Let Bank A file alone, because one SAR on the ring meets both banks' filing obligations"
    ],
    answer: [2],
    explanation: "FinCEN's SAR filing instructions prohibit a joint SAR when any subject is identified as a director, employee, officer or owner of the filing institution or of a would-be joint filer; each institution must then file its own SAR. Dropping the insider from the joint report would leave it incomplete and still treat an insider case jointly. Section 314(b) protects information sharing between registered institutions, but it does not change the joint-filing rules. A joint filing never relieves a filer of reporting what it knows, so one bank's SAR does not discharge the other's obligation.",
    source: [
      { label: "FinCEN SAR Electronic Filing Instructions – General Instruction 5 (joint reports)", url: "https://www.fincen.gov/system/files/shared/FinCEN%20SAR%20ElectronicFilingInstructions-%20Stand%20Alone%20doc.pdf" }
    ]
  },
  {
    id: "SARC-007", domain: 4, topic: "Correcting a filed SAR: amended report vs continuing report", hy: false, difficulty: "medium",
    q: "Two weeks after filing a SAR on a suspected romance-scam money mule, investigator Priya Nair learns from a 314(b) partner that the subject's date of birth and passport number in the SAR were wrong. She also finds two further incoming wires, within the period already reported, that were part of the same scheme. No new activity has occurred since the SAR was filed, and the account is now restricted. How should the bank report this information?",
    options: [
      "File a continuing-activity SAR after the next 90-day period, covering the corrected identifiers and the two extra wires",
      "File an amended SAR in full, check 'Correct/Amend prior report', enter the prior BSA ID and describe the changes at the start of the narrative",
      "Send the corrected identifiers and wire details to FinCEN's Regulatory Helpline, quoting the BSA ID of the original SAR",
      "File an amended SAR containing only the corrected fields and the two extra wires, and leave every other item blank"
    ],
    answer: [1],
    explanation: "FinCEN's filing instructions require a corrected report when errors are found and an amended report when new data about already-reported activity is discovered and a continuing report is not justified. Both must be completed in their entirety, with box 1b 'Correct/Amend prior report' checked, the prior report's BSA ID entered (zero-filled if unknown), and the corrections or amendments described at the beginning of the narrative. A continuing report is for suspicious activity that continues after the SAR, which is not the case here. A partial filing is not allowed, and the helpline is not a reporting channel.",
    source: [
      { label: "FinCEN SAR Electronic Filing Instructions – General Instructions 3-4 (corrected, amended and continuing reports)", url: "https://www.fincen.gov/system/files/shared/FinCEN%20SAR%20ElectronicFilingInstructions-%20Stand%20Alone%20doc.pdf" }
    ]
  },
  {
    id: "SARC-008", domain: 4, topic: "SAR attachments: the single CSV file and supporting documentation", hy: true, difficulty: "medium",
    q: "Investigator Tomás Ruiz is finishing a SAR on a trading company that sent 640 wires through 14 shell entities over five months. He wants to attach PDF bank statements, the customer's falsified invoices and an Excel workbook with three tabs of transaction data, because 'law enforcement will want everything.' The narrative already explains the layering pattern in chronological order. What does FinCEN's SAR filing guidance allow?",
    options: [
      "Attach the statements, invoices and workbook, because supporting documentation is deemed filed with the SAR and must go with it",
      "Attach nothing, paste the transaction table into the narrative, and send the statements and invoices to FinCEN by secure email",
      "Attach the invoices and statements as one PDF of up to 1 MB, and summarise the transaction data in the narrative instead",
      "Attach one Excel-compatible CSV file of up to 1 MB with the transaction data, describe it in the narrative, and retain the rest"
    ],
    answer: [3],
    explanation: "FinCEN's filing instructions allow a single Microsoft Excel-compatible CSV file of no more than 1 MB, best suited to transaction records too numerous for the narrative, and its contents must be described in Part V. No other supporting documentation may be included; it is described in the narrative, kept for five years and made available to authorities on request. 'Deemed filed' in 31 CFR 1020.320(d) means it is kept and produced on request, not submitted with the SAR. FinCEN's narrative guidance also warns against inserting tables or pre-formatted spreadsheets into the narrative.",
    source: [
      { label: "FinCEN SAR Electronic Filing Instructions – General Instruction 6 and 'Add Attachment'", url: "https://www.fincen.gov/system/files/shared/FinCEN%20SAR%20ElectronicFilingInstructions-%20Stand%20Alone%20doc.pdf" },
      { label: "31 CFR 1020.320(d) – retention of SAR and supporting documentation (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.320" }
    ]
  },
  {
    id: "SARC-009", domain: 4, topic: "Continuing-activity SAR narrative: content and amounts", hy: false, difficulty: "hard",
    q: "Fairhaven Bank is filing its third continuing-activity SAR on a used-car dealer suspected of structuring cash deposits. The first SAR reported $310,000 and the second $280,000; the current 90-day period shows $265,000. A new analyst drafts the narrative by pasting both earlier narratives in full, followed by the new transactions, and enters $855,000 as the amount for this report. The dealer recently changed its trading name, and two new depositors have appeared. Which revision BEST follows FinCEN's SAR filing instructions?",
    options: [
      "Describe the current 90-day period with only the earlier detail needed to understand it, and report $265,000 for the period and $855,000 cumulative",
      "Keep both earlier narratives in full for context but move them to the end, and report $855,000 as the amount for this period",
      "Describe the current 90-day period only, report $265,000 for the period, and leave out the cumulative amount to avoid double-counting",
      "Replace the narrative with the BSA IDs of the earlier SARs, and report $855,000 as both the period amount and the cumulative amount"
    ],
    answer: [0],
    explanation: "FinCEN's instructions say a continuing report's narrative should cover all details of the 90-day period and only as much from prior reports as is needed to understand the activity, and must never reproduce earlier narratives in full. The filer reports the amount for the 90-day period in Item 26 ($265,000) and the cumulative amount for the current and all prior related reports in Item 28 ($855,000). Leaving out the cumulative figure is the runner-up error, because the instructions require both. Continuing reports must also be complete, so the new trading name and the new depositors belong in the report.",
    source: [
      { label: "FinCEN SAR Electronic Filing Instructions – General Instruction 4 and Part V narrative checklist", url: "https://www.fincen.gov/system/files/shared/FinCEN%20SAR%20ElectronicFilingInstructions-%20Stand%20Alone%20doc.pdf" }
    ]
  },
  {
    id: "SARC-010", domain: 3, topic: "UK: money laundering and terrorist financing suspicions need separate SARs", hy: false, difficulty: "hard",
    q: "A UK bank's MLRO reviews a small import business. Its cash takings are routed through the owner's personal accounts in a way that suggests VAT fraud, and the owner has also sent several payments to a person whom open sources link to a proscribed organisation. The business also banks with the bank's sister company, and its turnover is £1.1 million a year. The MLRO plans to submit one SAR under POCA describing both concerns, to keep the picture in one place. According to UKFIU guidance, what should she do?",
    options: [
      "Submit one SAR under POCA covering both concerns, because the reason-for-suspicion field allows 8,000 characters",
      "Submit two SARs, one under POCA and one under TACT, each fully describing its suspicion and referring to the other",
      "Submit one SAR under TACT only, because a terrorist financing suspicion takes priority over money laundering",
      "Submit a POCA SAR now, and a TACT SAR only if the police confirm that the payee is linked to terrorism"
    ],
    answer: [1],
    explanation: "UKFIU guidance says that a reporter holding both a money laundering and a terrorist financing suspicion must submit two separate SARs, one under POCA and one under TACT, selecting the correct legislation for each. Each SAR must fully describe its own suspicion and mention that the other has been (or will be) submitted, not just refer to it. POCA and TACT SARs are handled by different teams in the UKFIU and law enforcement, so a combined SAR delays the TF intelligence. TACT requires a report as soon as practicable once there is belief or suspicion, so waiting for police confirmation is wrong.",
    source: [
      { label: "NCA UKFIU – SARs Best Practice Guidance, Chapter 2: Submitting a SAR (Dec 2025)", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/775-ukfiu-chapter-2-submitting-a-sar/file" }
    ]
  },
  {
    id: "SARC-011", domain: 3, topic: "UK DAML notice period over Easter (date calculation)", hy: true, difficulty: "hard",
    q: "On Thursday 2 April 2026, the nominated officer of a bank in England submits a SAR with a DAML request through the SAR Portal before releasing a customer's £64,000 payment to a property developer. Friday 3 April is Good Friday and Monday 6 April is Easter Monday, a bank holiday. The customer phones every day to chase the payment, and the bank's service standard promises payments within 10 calendar days. If the UKFIU sends neither a refusal nor a grant, on which day can the bank first make the payment with a defence under POCA?",
    options: [
      "Thursday 9 April 2026",
      "Tuesday 14 April 2026",
      "Thursday 16 April 2026",
      "Monday 20 April 2026"
    ],
    answer: [2],
    explanation: "Under POCA s.335(5) the notice period is seven working days starting with the first working day after the disclosure, and s.335(7) excludes Saturdays, Sundays, Christmas Day, Good Friday and bank holidays in that part of the UK. The first working day after 2 April is Tuesday 7 April, so the seven working days are 7, 8, 9, 10, 13, 14 and 15 April. With no refusal by the end of 15 April, the bank is treated as having consent and can pay on 16 April. Tuesday 14 April results from wrongly counting Good Friday and Easter Monday, and 9 April from counting calendar days; the UKFIU's guidance tells reporters to check bank holidays before proceeding.",
    source: [
      { label: "Proceeds of Crime Act 2002 s.335 – notice period, moratorium and working days (legislation.gov.uk)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/335" },
      { label: "NCA UKFIU – Chapter 3: Understanding DAMLs and DATFs (Dec 2025), Q39", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/776-ukfiu-chapter-3-understanding-damls-and-datfs/file" }
    ]
  },
  {
    id: "SARC-012", domain: 3, topic: "UK DAML refusal: moratorium and pending extension applications", hy: true, difficulty: "hard",
    q: "A UK bank asked the UKFIU for a defence to transfer £210,000 for a customer. On 10 March 2026 the UKFIU phoned to refuse consent and confirmed it by email the same day. On 7 April a police financial investigator gave the bank formal notice that an application had been made to the Crown Court to extend the moratorium period, with a hearing listed for 14 April. On 10 April the customer's solicitor writes that 'the 31 days are over' and threatens legal action unless the transfer is made that day. What is the bank's position on 10 April?",
    options: [
      "It may proceed, because the 31-day moratorium ended on 9 April and no extension order has yet been made",
      "It may proceed, but only after telling the UKFIU that it intends to make the transfer that afternoon",
      "It must not proceed until 186 days after the refusal, which is the moratorium period set by POCA",
      "It must not proceed, because the moratorium continues until the court decides the extension application"
    ],
    answer: [3],
    explanation: "The moratorium is 31 days starting with the day the refusal is received (POCA s.335(6)), so it would have ended on 9 April. However, the application to extend was made before then, and s.336C extends the moratorium automatically until the application is determined; the UKFIU guidance confirms it continues even if the hearing is after the original expiry date. Under s.336A the court may grant extensions of up to 31 days at a time, totalling no more than 186 days after the initial 31-day period, so 186 days is a ceiling, not the standard period. The bank should send the litigation threat to the UKFIU DAML team rather than proceed.",
    source: [
      { label: "Proceeds of Crime Act 2002 s.336A and s.336C – extension of the moratorium period (legislation.gov.uk)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/336C" },
      { label: "NCA UKFIU – Chapter 3: Understanding DAMLs and DATFs (Dec 2025), refused DAMLs and Q31", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/776-ukfiu-chapter-3-understanding-damls-and-datfs/file" }
    ]
  },
  {
    id: "SARC-013", domain: 3, topic: "UK exit and pay-away exemption: £3,000 threshold across several accounts", hy: false, difficulty: "hard",
    changed: "POCA s.339A threshold raised from £1,000 to £3,000 (SI 2025/877, 31 July 2025)",
    q: "In October 2026, a UK bank decides to exit a customer after its investigation concludes that the money in his accounts is probably the proceeds of an investment fraud. He holds £1,900 in a current account and £1,600 in a savings account, and the bank has met its customer due diligence duties. The bank has already submitted a SAR. The closing team plans to send each balance to his nominated account at another bank under the 'exiting and paying away' exemption. What is the correct position?",
    options: [
      "The exemption applies, because each balance on its own is below the £3,000 threshold amount",
      "The exemption does not apply, because the total of £3,500 is £3,000 or more, so a DAML is needed first",
      "The exemption does not apply, because the threshold amount for paying away on exit is still £1,000",
      "The exemption applies, because the bank has already submitted a SAR that describes both accounts"
    ],
    answer: [1],
    explanation: "POCA s.339A(6A) sets the threshold for acts done to terminate a business relationship; SI 2025/877 raised it from £1,000 to £3,000 from 31 July 2025. The exemption requires the reporter to have complied with its CDD duties and the total value of criminal property transferred to be below the threshold; the UKFIU guidance states that if the total across several customer accounts is £3,000 or more, the exemption is not available. Splitting the balance does not help, so the bank needs a DAML before paying away £3,500. The exemptions never remove the duty to submit a SAR, and a SAR on its own gives no defence for the payment.",
    source: [
      { label: "Proceeds of Crime Act 2002 s.339A – threshold amounts, as amended by SI 2025/877 (legislation.gov.uk)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/339A" },
      { label: "NCA UKFIU – Chapter 3: Understanding DAMLs and DATFs (Dec 2025), exemption for exiting and paying away", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/776-ukfiu-chapter-3-understanding-damls-and-datfs/file" }
    ]
  },
  {
    id: "SARC-014", domain: 3, topic: "UK DAML requests: describing a specific future prohibited act", hy: false, difficulty: "hard",
    q: "A UK bank holds £85,000 in the account of Brightwell Ltd and suspects it is the proceeds of VAT fraud. The director has asked the bank to pay the £85,000 to a solicitor to complete a warehouse purchase or, if the purchase fails, to send it to his personal account in Cyprus. The bank has not yet decided whether it will act on either instruction. The draft DAML request reads: 'We seek a defence to pay the funds to the solicitor or, alternatively, to the director's account, as the customer directs.' What is the BEST next step?",
    options: [
      "Decide which act the bank will carry out, then request a defence for that act, giving its value, date and destination",
      "Submit the draft as written, because it covers every payment that the customer might ask the bank to make",
      "Submit the draft and ask the UKFIU to say which of the two payments the bank should make",
      "Ask for a defence to maintain the business relationship, which would cover whatever payments follow"
    ],
    answer: [0],
    explanation: "The UKFIU can consider a defence only for a future, specified prohibited act, described with its value, date and destination. It will not consider 'either/or' requests, because law enforcement may accept one act (paying for a property) but want to prevent another (returning funds abroad). Deciding what to do is a business decision for the reporter, and the UKFIU will close requests that ask it what to do. It also rejects requests to 'maintain a business relationship' as too broad.",
    source: [
      { label: "NCA UKFIU – Chapter 3: Understanding DAMLs and DATFs (Dec 2025), prohibited act and FAQs Q8, Q10, Q12", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/776-ukfiu-chapter-3-understanding-damls-and-datfs/file" }
    ]
  },
  {
    id: "SARC-015", domain: 3, topic: "UK: production orders, law enforcement interest and inherited suspicion", hy: true, difficulty: "hard",
    q: "A UK bank receives a production order from a regional police force for the records of a customer, a car dealer, citing a fraud investigation. The order is signed by a named detective constable. An analyst drafts a SAR whose reason for suspicion reads 'Production order received - customer under police investigation', names the detective, and says that a copy of the order is attached. The bank's records show that the dealer's cash deposits doubled last quarter; he says sales rose after a competitor closed. According to UKFIU guidance, which changes should the MLRO make? (Choose two.)",
    options: [
      "Review the relationship and submit a SAR only if the bank forms its own suspicion, explaining why it is suspicious",
      "Keep the detective's name, so that the UKFIU can pass the SAR directly to the officer leading the case",
      "Keep the reference to the attachment, so that law enforcement receives a copy of the order with the SAR",
      "Keep the reason for suspicion as drafted, because a production order is in itself a valid basis for a SAR",
      "Tick the known law enforcement interest box and give the force's name and the order's reference number"
    ],
    answer: [0, 4],
    explanation: "UKFIU guidance says suspicion should not be inherited: a court or production order can prompt a review, but it should not be the only basis of a SAR, and the reporter must explain its own suspicion. Where there is known law enforcement interest, the reporter ticks the box and gives the force and any reference numbers in the reason for suspicion. Reporters must not name individual officers unless they are a subject of the suspicion. The SAR Portal does not accept attachments, so the SAR should say that further information is available on request.",
    source: [
      { label: "NCA UKFIU – Chapter 2: Submitting a SAR (Dec 2025), court orders and known law enforcement interest", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/775-ukfiu-chapter-2-submitting-a-sar/file" }
    ]
  },
  {
    id: "SARC-016", domain: 3, topic: "UK: reporting new information after a SAR (linking URNs)", hy: false, difficulty: "medium",
    q: "In February 2026 a UK bank submitted a SAR on a customer suspected of laundering the proceeds of drug supply, and the UKFIU issued a URN for it. In September the bank finds new information that strengthens its suspicion: the customer has started making cash deposits at branches in three cities. The bank's internal case number for the matter is FC-2026-0417, and the customer opened a second account in July. How should the bank report the new information?",
    options: [
      "Submit a new SAR, quoting internal case number FC-2026-0417 so that the UKFIU can link the two reports",
      "Email the new information to the UKFIU, quoting the earlier URN, instead of submitting another SAR",
      "Submit a new SAR with the new information, entering the earlier SAR's UKFIU URN in the previous-SAR field",
      "Wait for law enforcement to contact the bank, because the earlier SAR already covers this customer"
    ],
    answer: [2],
    explanation: "UKFIU guidance says that where new information enhances or adds to a suspicion, the reporter should submit a new SAR and enter the UKFIU reference numbers (URNs) of earlier SARs on the same main or associated party in the relevant field. Internal reference numbers must not be entered there, because only URNs let the UKFIU connect the reports. SARs must never be emailed to the UKFIU; email updates are used for live DAML or DATF requests. A new SAR should not be submitted if the new information reduces or removes the suspicion.",
    source: [
      { label: "NCA UKFIU – Chapter 2: Submitting a SAR (Dec 2025), Section 1 and FAQ Q9", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/775-ukfiu-chapter-2-submitting-a-sar/file" }
    ]
  },
  {
    id: "SARC-017", domain: 3, topic: "Exit decisions after repeated SARs (UK)", hy: true, difficulty: "medium",
    q: "A UK bank has submitted its third SAR in 18 months on Harlow Trading, whose payments repeatedly suggest invoice fraud. No DAML has been requested, and no law enforcement agency has contacted the bank. The relationship manager points out that Harlow pays high fees and asks whether the bank needs the NCA's agreement before exiting, or whether the NCA can confirm it is safe to keep the account open. According to UKFIU guidance, which statement is correct?",
    options: [
      "The bank must keep the accounts open until the NCA confirms that it has no interest in Harlow",
      "The bank must obtain a DAML before it can decide to end the relationship and close the accounts",
      "The NCA will confirm whether it is safe to keep the relationship if the bank submits another SAR",
      "Keeping Harlow is the bank's own decision; if it continues, it must consider whether future activity needs a DAML"
    ],
    answer: [3],
    explanation: "UKFIU guidance says that whether to keep a client after a SAR is a decision for the reporter, based on its legal obligations and risk appetite; if it continues, it must consider whether a DAML is needed for future activity involving suspected criminal property. The UKFIU cannot give a defence to start or maintain a relationship and does not advise reporters on what to do. A DAML covers a specified prohibited act, such as paying away suspected criminal property above the threshold on exit, not the decision to exit itself. Unless law enforcement has made a request, the decision rests with the bank's governance.",
    source: [
      { label: "NCA UKFIU – Chapter 2: Submitting a SAR (Dec 2025), FAQ Q10", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/775-ukfiu-chapter-2-submitting-a-sar/file" },
      { label: "NCA UKFIU – Chapter 3: Understanding DAMLs and DATFs (Dec 2025), FAQs Q7-Q10", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/776-ukfiu-chapter-3-understanding-damls-and-datfs/file" }
    ]
  },
  {
    id: "SARC-018", domain: 3, topic: "Deciding whether activity is suspicious: the threshold for suspicion (UK)", hy: false, difficulty: "medium",
    q: "During a periodic review, a UK bank analyst looks at a florist whose card takings rose 12% after it won a hotel contract. Nothing in the transactions contradicts the explanation on file, but the analyst writes: 'I have a vague feeling of unease about this owner - should we submit a SAR to be safe?' The florist also changed its accountant recently. Which view BEST reflects the threshold for suspicion described in UKFIU guidance?",
    options: [
      "Suspicion means a possibility, more than fanciful, that the relevant facts exist; a vague feeling of unease is not enough",
      "Suspicion arises only when the bank can show, on the balance of probabilities, that the funds are criminal property",
      "Any feeling of unease meets the threshold, so the bank should submit a SAR to protect itself from prosecution",
      "The UKFIU decides whether the threshold is met, so the bank should submit a SAR and ask for its opinion"
    ],
    answer: [0],
    explanation: "Suspicion is not defined in POCA, but the UKFIU guidance points to R v Da Silva [2006] EWCA Crim 1654: a possibility, which is more than fanciful, that the relevant facts exist, while 'a vague feeling of unease would not suffice'. A balance-of-probabilities test sets the bar far too high. The decision belongs to the reporter, and the UKFIU will not comment on whether circumstances are suspicious. The bank may make further enquiries to assess the activity, while taking care not to tip off.",
    source: [
      { label: "NCA UKFIU – Chapter 2: Submitting a SAR (Dec 2025), 'What constitutes suspicion?' and FAQ Q5", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/775-ukfiu-chapter-2-submitting-a-sar/file" }
    ]
  },
  {
    id: "SARC-019", domain: 3, topic: "AMLR Art. 71: refraining from a suspicious transaction and the 3-working-day rule", hy: true, difficulty: "hard",
    q: "In November 2027, a customer of a bank in Portugal instructs it to send €480,000 from a recently opened account to a company in a third country. The bank suspects the funds are the proceeds of an investment fraud, holds the payment and reports to the Portuguese FIU on Monday 8 November. The customer, who describes himself as a retired engineer, threatens to move his pension elsewhere if the payment is not released. By Friday 12 November the FIU has given no instruction. Under Article 71 of the AMLR, what may the bank do?",
    options: [
      "Keep holding the payment until the FIU expressly approves its release, however long that takes",
      "Carry out the payment after assessing the risks, as no contrary FIU instruction came within 3 working days",
      "Carry out the payment straight after reporting, because only the FIU itself can suspend a transaction",
      "Send the funds back to their source, because a reported transaction may never be executed afterwards"
    ],
    answer: [1],
    explanation: "AMLR Article 71(1) requires obliged entities to refrain from transactions they know or suspect to be related to criminal proceeds or terrorist financing until they have reported under Article 69 and complied with any specific FIU instructions. They may then carry out the transaction, after assessing the risks of proceeding, if the FIU has not instructed otherwise within 3 working days of the report. Executing immediately skips the refraining duty, while holding indefinitely goes beyond it; the bank still decides on risk grounds whether to proceed. Article 71(2) covers cases where refraining is impossible or would frustrate the pursuit of beneficiaries: the entity then informs the FIU immediately afterwards.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR) – Art. 71 refraining from carrying out transactions (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "SARC-020", domain: 3, topic: "AMLR: reporting when CDD cannot be completed, safe harbour and tipping off", hy: true, difficulty: "hard",
    q: "In 2028, a customer of an EU payment institution receives €62,000 from five unrelated companies and refuses to explain the payments or to provide the documents needed to complete CDD. The analyst cannot tell whether the funds come from fraud, tax evasion or another crime, and the customer's account manager is a family friend. The compliance officer is drafting the procedure for cases like this. Which statements are correct under the AMLR? (Choose two.)",
    options: [
      "A report is needed only once the analyst can name the predicate offence behind the payments",
      "The account manager may tell the customer that a report will follow unless documents are provided",
      "Suspicions that arise from the inability to conduct CDD must be reported to the FIU",
      "A report made in good faith is protected even if the institution does not know precisely what the underlying crime is",
      "Reports are needed only for transactions above a minimum amount set by the Member State"
    ],
    answer: [2, 3],
    explanation: "AMLR Article 69(1) requires all suspicious transactions to be reported, regardless of the amount involved, including attempted transactions and suspicions arising from the inability to conduct CDD. Article 72 protects good-faith disclosures to the FIU from any liability, even where the entity was not precisely aware of the underlying criminal activity and whether or not illegal activity occurred, so no predicate needs to be named. Article 73 prohibits telling the customer that information is being or will be reported, so the account manager's warning would be tipping off.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR) – Arts. 69, 72 and 73 (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "SARC-021", domain: 3, topic: "Attempted transactions and STRs (FATF R.20)", hy: false, difficulty: "medium",
    q: "A walk-in customer at a money transfer agent asks to send the equivalent of USD 900 in cash to a person abroad. When the cashier asks for identification and the purpose of the transfer, the customer becomes agitated, says the money is 'for a friend's business' and leaves without sending it. Ten minutes later a second person tries to send the same amount to the same recipient and also leaves when asked for ID. The supervisor says no report is needed because nothing was sent and the amounts are small. Under FATF Recommendation 20 and its Interpretive Note, which statement is correct?",
    options: [
      "No report is needed, because the transfers were never executed and so no funds ever entered the system",
      "A report is needed only if the combined attempts exceed the USD/EUR 1,000 wire transfer threshold",
      "The agent should wait until one of the customers completes a transfer, so that it can report actual funds",
      "Report the attempts promptly, as suspicious transactions, including attempted ones, are reported regardless of amount"
    ],
    answer: [3],
    explanation: "FATF Recommendation 20 requires a financial institution that suspects, or has reasonable grounds to suspect, that funds are criminal proceeds or related to terrorist financing to report promptly to the FIU. INR.20 paragraph 3 adds that all suspicious transactions, including attempted transactions, should be reported regardless of the amount. The USD/EUR 1,000 figure is the R.16 wire transfer threshold and has nothing to do with suspicious transaction reporting. Waiting for a completed transfer would defeat the 'promptly' requirement.",
    source: [
      { label: "FATF Recommendations (2026) – R.20 and INR.20 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "SARC-022", domain: 4, topic: "UK SAR quality: structured fields, open sources and format", hy: false, difficulty: "medium",
    q: "Ellis Moore, the MLRO of a UK e-money firm, reviews five draft SARs on mule accounts that receive funds from many senders and forward them within minutes to crypto exchanges. He notes several drafting habits across the drafts. Which practices follow UKFIU guidance on completing SARs? (Choose two.)",
    options: [
      "Entering each suspicious transaction in the Suspicious Transactions fields, not only in the reason for suspicion",
      "Uploading account statements as attachments so that law enforcement receives the underlying records",
      "Summarising adverse media by giving the article's title, date and publication, not just a link to it",
      "Splitting a long narrative across two SARs on the same subject to get around the 8,000-character limit",
      "Writing the reason for suspicion in capital letters so that the key facts stand out for the reader"
    ],
    answer: [0, 2],
    explanation: "UKFIU guidance asks reporters to enter data in the right SAR Portal fields, including the Suspicious Transactions fields, because SARs that hold details only in free text may not appear in law enforcement searches. Open-source findings should be summarised with the article's title, date and publication name, not just a link. The Portal does not accept attachments; reporters say what further information they hold and how to request it. Reporters must not submit several SARs to get around the 8,000-character limit, and should not write in capital letters, which makes SARs hard to read.",
    source: [
      { label: "NCA UKFIU – Chapter 2: Submitting a SAR (Dec 2025), Sections 5-6 and FAQ Q4", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/775-ukfiu-chapter-2-submitting-a-sar/file" }
    ]
  },
  {
    id: "SARC-023", domain: 4, topic: "Law enforcement contact about a SAR: verifying the requester (UK)", hy: false, difficulty: "medium",
    q: "Two weeks after a UK bank submitted a SAR, a caller who says he is 'DC Hart from the local force' phones the MLRO's deputy. He names the customer and asks for a copy of the SAR and the bank's internal notes, saying it is urgent because the customer is about to leave the country. The deputy has never dealt with this force before, and the caller's number is withheld. What should the deputy do FIRST?",
    options: [
      "Verify the caller by ringing back through the force's switchboard, and confirm that he holds SAR access accreditation",
      "Email the SAR and notes to the caller at once, because the risk that the customer will flee makes it urgent",
      "Refuse to discuss the matter and tell the customer's relationship manager about the call for awareness",
      "Tell the caller that the bank never discusses its SARs with police and that he must ask the UKFIU instead"
    ],
    answer: [0],
    explanation: "UKFIU guidance says law enforcement may contact reporters about their SARs, but reporters should first verify the caller, for example by ringing back through the force or agency switchboard. SARs may be shared only with officers who are SAR researchers, accredited financial investigators or financial intelligence officers, so not every police officer is entitled to them. Sending the material before verification risks a breach of SAR confidentiality. Refusing all contact is wrong, because police may legitimately follow up, and briefing the relationship manager spreads the information further than needed.",
    source: [
      { label: "NCA UKFIU – Chapter 2: Submitting a SAR (Dec 2025), FAQ Q11", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/775-ukfiu-chapter-2-submitting-a-sar/file" }
    ]
  },
  {
    id: "SARC-024", domain: 3, topic: "UK DAML notice period: customer threatens self-harm", hy: false, difficulty: "hard",
    q: "A UK bank's DAML request on a customer's £22,000 transfer is on day four of the notice period. The customer phones the branch, says he will harm himself if he cannot pay his landlord today, and hangs up. Branch staff know he lives alone, and his account shows regular gambling transactions. The branch manager proposes releasing £2,000 for the rent straight away, saying it is below the threshold amount. What should the bank do FIRST?",
    options: [
      "Release £2,000 for the rent under the threshold amount, then mention the threat in a later SAR to the UKFIU",
      "Email the UKFIU DAML team for an expedited decision, and take no other step until the team replies",
      "Call an ambulance or the police to help the customer, then email the DAML team with details of the threat",
      "Tell the customer that the payment is waiting for an NCA decision, so that he understands the delay"
    ],
    answer: [2],
    explanation: "UKFIU guidance says that if a customer threatens to harm himself, the reporter should first call an ambulance and/or the police to get help for him, and then email the DAML team with details of the threat (when and to whom it was made, the exact words, and whether emergency services were called). The UKFIU then expedites the decision if the request is still in the notice period. Emailing the UKFIU alone is the runner-up, but it puts the safety call second. The UKFIU treats the funds under a live request as frozen, so releasing part of them risks an offence. Telling the customer about the NCA decision risks tipping off.",
    source: [
      { label: "NCA UKFIU – Chapter 3: Understanding DAMLs and DATFs (Dec 2025), FAQs Q24, Q25 and Q28", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/776-ukfiu-chapter-3-understanding-damls-and-datfs/file" }
    ]
  },
  {
    id: "SARC-025", domain: 3, topic: "UK DAML moratorium: chargebacks and other payments from frozen funds", hy: false, difficulty: "hard",
    q: "A UK bank's DAML request on £48,000 in a merchant's account was refused, and the 31-day moratorium is running. A card scheme then presents chargeback claims totalling £6,500 from cardholders who say they never received goods from the merchant. The bank's disputes team says scheme rules require payment within ten days and that refunding victims cannot be money laundering. The merchant has also asked to withdraw £1,500 for staff wages. What should the bank do?",
    options: [
      "Pay the chargebacks, because returning money to victims of crime never requires a DAML",
      "Hold all the funds, and email the UKFIU DAML team to seek an amendment of the prohibited act before paying anything",
      "Pay both the chargebacks and the wages, because each payment is below the £3,000 threshold amount",
      "Close the merchant's account and pay the whole balance to the card scheme to settle every claim"
    ],
    answer: [1],
    explanation: "UKFIU guidance says that under POCA all funds covered by a DAML request must be treated as frozen during the notice period and any moratorium after a refusal. Paying a chargeback or other external claim from those funds is likely to be a money laundering offence unless the reporter has asked the DAML team to amend its prohibited act and received confirmation. The general view that a DAML is unnecessary to refund a victim does not apply to funds already under a refused request, which makes it the runner-up. Requests for wage payments should also be emailed to the DAML team with details, not paid on the strength of the threshold.",
    source: [
      { label: "NCA UKFIU – Chapter 3: Understanding DAMLs and DATFs (Dec 2025), FAQs Q23, Q24, Q30 and Q37", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/776-ukfiu-chapter-3-understanding-damls-and-datfs/file" }
    ]
  }
]);
