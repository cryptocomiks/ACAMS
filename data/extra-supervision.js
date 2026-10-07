window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "SUPV-001", domain: 2, topic: "FCA skilled person (s.166): choosing an independent reviewer", hy: true, difficulty: "hard",
    q: "In 2026 the FCA tells Elmstead Bank, a UK retail bank, that it will require a report by a skilled person under section 166 of FSMA on the effectiveness of the bank's transaction monitoring. The bank will appoint and pay for the skilled person. The COO proposes Vantage Advisory, which has advised the bank for eight years, designed and tuned the monitoring scenarios two years ago, and could start next week at a discounted rate. The CFO adds that Vantage's partners know the bank's systems better than anyone. Two other firms with strong monitoring expertise could start in a month. What should the MLRO recommend?",
    options: [
      "Propose Vantage, but ask it to staff the review with a different engagement partner from the one who led the scenario design",
      "Appoint Vantage at once and notify the FCA afterwards, because the firm chooses its own skilled person when it pays for the report",
      "Propose one of the other firms, because Vantage would be reviewing its own work and lacks detachment from the bank",
      "Ask internal audit to carry out the review instead, because the third line is independent of the monitoring function"
    ],
    answer: [2],
    explanation: "Under SUP 5.4.8G, when the FCA nominates or approves a skilled person it considers any conflict of interest, for instance where the review may reflect on the quality of work the proposed skilled person did before, and whether the person has enough detachment given an existing professional or commercial relationship. Vantage fails on both counts, so proposing a firm with no prior involvement is best. The runner-up, using a different partner at Vantage, does not remove the firm-level conflict. Appointing first and notifying later is wrong because the Act requires the skilled person to be nominated or approved by the FCA (SUP 5.4.6G). Internal audit is not a substitute: a s.166 report is a statutory tool that the FCA has decided to use.",
    source: [
      { label: "FCA Handbook SUP 5.4.6G-5.4.8G – appointment of a skilled person, conflicts and detachment", url: "https://www.handbook.fca.org.uk/handbook/SUP/5/4.html" },
      { label: "FCA Handbook SUP 5.3 – the skilled person tool and who pays", url: "https://www.handbook.fca.org.uk/handbook/SUP/5/3.html" }
    ]
  },
  {
    id: "SUPV-002", domain: 2, topic: "FCA skilled person (s.166): mandatory contract terms (SUP 5.5.1R)", hy: false, difficulty: "medium",
    q: "Harlow & Finch Bank is drafting its engagement contract with the skilled person the FCA approved to review its sanctions screening controls. The bank's general counsel wants to protect the bank's position. Which terms MUST the contract contain under the FCA's rules? (Choose two.)",
    options: [
      "A term requiring and permitting the skilled person to cooperate with the FCA and to tell it directly about possible contraventions of material significance",
      "A term giving the bank the right to approve the final report before the skilled person submits it to the FCA",
      "A term waiving any duty of confidentiality the skilled person owes the bank that could limit what it gives the FCA",
      "A term placing the contract under the law of the country of the bank's parent company, so group counsel can enforce it",
      "A term requiring the FCA to pay the skilled person's fees and recover them later through the bank's periodic fees"
    ],
    answer: [0, 2],
    explanation: "SUP 5.5.1R requires a firm that appoints a skilled person to contract that the skilled person must cooperate with the FCA and must communicate to it information or opinions on, among other things, contraventions that may be of material significance, and must waive any duty of confidentiality to the firm that might limit that flow of information. The bank may comment on the report before it goes to the FCA (SUP 5.4.10G), but it cannot approve or block it. The contract must be governed by the law of a part of the UK (SUP 5.5.5R). When the firm appoints the skilled person, the firm pays (SUP 5.3).",
    source: [
      { label: "FCA Handbook SUP 5.5 – duties of the firm and the skilled person's contract", url: "https://www.handbook.fca.org.uk/handbook/SUP/5/5.html" },
      { label: "FCA Handbook SUP 5.4.10G – reporting through the firm", url: "https://www.handbook.fca.org.uk/handbook/SUP/5/4.html" }
    ]
  },
  {
    id: "SUPV-003", domain: 2, topic: "FCA penalty calculation: five-step framework and settlement discount (calculation)", hy: false, difficulty: "hard",
    q: "The FCA finds that Ravensworth Bank's customer due diligence on its business current accounts was seriously deficient for three years. The bank earned £60 million of revenue from that business during the breach period. The FCA assesses the breach at seriousness level 3. It increases the Step 2 figure by 15% for aggravation, because the bank had been warned about similar weaknesses, and makes no deterrence adjustment. It also finds a £400,000 financial benefit from the breach that it will disgorge. The bank settles during stage 1. Under DEPP 6.5A and 6.7, what is the total amount payable?",
    options: [
      "£5.11 million",
      "£5.23 million",
      "£5.92 million",
      "£4.83 million"
    ],
    answer: [1],
    explanation: "Step 2: level 3 is 10% of £60 million relevant revenue, or £6 million. Step 3: +15% gives £6.9 million. Step 5: settlement in stage 1 earns a 30% discount, so £6.9 million x 0.7 = £4.83 million. The discount does not apply to Step 1 disgorgement (DEPP 6.5A.5G, 6.7.2G), so the £400,000 is added in full: £4.83 million + £0.4 million = £5.23 million. £5.11 million wrongly discounts the disgorgement too, £5.92 million uses an outdated 20% discount, and £4.83 million leaves out the disgorgement.",
    source: [
      { label: "FCA Handbook DEPP 6.5A – the five steps for penalties on firms", url: "https://www.handbook.fca.org.uk/handbook/DEPP/6/5A.html" },
      { label: "FCA Handbook DEPP 6.7 – settlement discount scheme", url: "https://www.handbook.fca.org.uk/handbook/DEPP/6/7.html" }
    ]
  },
  {
    id: "SUPV-004", domain: 2, topic: "FCA voluntary requirements (VREQs) vs own-initiative requirements (s.55L FSMA)", hy: true, difficulty: "hard",
    q: "After a supervisory visit in 2026, the FCA tells Northbank Digital, a fast-growing UK bank, that it has serious concerns about how the bank onboards high-risk customers. It asks the bank to apply for a voluntary requirement (VREQ) to stop onboarding new high-risk customers until a skilled person confirms that the controls work. At the board meeting, the CFO says that a voluntary requirement is only a promise, so the bank can lift it once management is satisfied. The CEO suggests refusing, because the FCA would then have to open an enforcement investigation before it could restrict the bank. Which statement BEST describes the position?",
    options: [
      "A VREQ is an informal undertaking with no legal effect, so the CFO is right that the bank can end it once the controls improve",
      "The CEO is right: without the bank's consent, the FCA can restrict new business only after it completes an enforcement investigation",
      "A VREQ binds the bank only until the skilled person's report is delivered, after which it lapses automatically",
      "A VREQ is a formal requirement under section 55L imposed at the bank's request, which only the FCA can vary or cancel, and if the bank refuses the FCA can impose a requirement on its own initiative"
    ],
    answer: [3],
    explanation: "Section 55L(5) FSMA lets the FCA impose, vary or cancel a requirement on the application of an authorised person, and section 55L(6) lets it refuse an application to vary or cancel. A VREQ is therefore a formal requirement that the bank cannot lift by itself. Under section 55L(3) the FCA also has an own-initiative requirement power. SUP 6B.3 explains that it can use this power with immediate effect where there are serious concerns, including a risk that the firm is being used for financial crime. SUP 6B.4.4G lists 'not to take on new business' as an example. No enforcement investigation needs to come first, and the requirement does not lapse automatically when the report arrives.",
    source: [
      { label: "FSMA 2000 s.55L – imposition of requirements by the FCA (legislation.gov.uk)", url: "https://www.legislation.gov.uk/ukpga/2000/8/section/55L" },
      { label: "FCA Handbook SUP 6B.3 – use of the own-initiative powers", url: "https://www.handbook.fca.org.uk/handbook/SUP/6B/3.html" }
    ]
  },
  {
    id: "SUPV-005", domain: 2, topic: "FCA publicity of enforcement investigations (ENFG 4, June 2025)", hy: false, difficulty: "medium", changed: "FCA PS25/5: new Enforcement Guide (ENFG), June 2025",
    q: "In its 2026 annual report, Ashdown Bank plc, a UK listed bank, states that the FCA has opened an enforcement investigation into its anti-money laundering controls over correspondent banking. A journalist then asks the FCA to confirm the investigation. Ashdown's head of regulatory affairs asks what the FCA may say under its Enforcement Guide (ENFG), which replaced the old Enforcement Guide on 3 June 2025. What is the CORRECT answer?",
    options: [
      "The FCA may confirm that it is investigating Ashdown and the subject matter, to the extent Ashdown has already made this public",
      "The FCA must name Ashdown, because it now announces every investigation into a regulated firm when it is in the public interest",
      "The FCA cannot comment on any investigation into a regulated firm until it issues a final notice",
      "The FCA may publish its provisional findings, because the bank waived confidentiality by disclosing the investigation"
    ],
    answer: [0],
    explanation: "ENFG 4.1.7G allows the FCA to confirm that it is investigating a named person if the person, an affiliated company or a public body has already made that public, and to confirm the subject matter to the extent it is already public. In PS25/5 the FCA dropped its proposed public-interest test for regulated firms and kept the 'exceptional circumstances' test (ENFG 4.1.4G), so it does not name every regulated firm it investigates. It is not barred from commenting until a final notice. ENFG 4.1.9G says it will not normally publish what its investigations find.",
    source: [
      { label: "FCA Handbook ENFG 4.1 – publicity during investigations", url: "https://www.handbook.fca.org.uk/handbook/ENFG/4/1.html" },
      { label: "FCA PS25/5 – Our Enforcement Guide and greater transparency of our enforcement investigations (June 2025)", url: "https://www.fca.org.uk/publications/policy-statements/ps25-5-enforcement-guide-greater-transparency-enforcement-investigations" }
    ]
  },
  {
    id: "SUPV-006", domain: 2, topic: "Case lessons: Barclays/WealthTek (FCA 2025) - checking a regulated customer's permissions", hy: true, difficulty: "medium",
    q: "Kingsmere Bank's business banking team is opening a client money account for Larkfield Wealth LLP, an FCA-authorised investment manager. Larkfield says that about 300 retail clients will pay their investment funds into the account. It provides its FCA firm reference number, audited accounts and a list of partners, all of whom pass sanctions and PEP screening. The relationship manager wants to open the account the same day because Larkfield is 'already regulated by the FCA'. In light of the FCA's July 2025 action against Barclays over WealthTek, what should the onboarding analyst do FIRST?",
    options: [
      "Open the account, because FCA authorisation means the FCA has already checked Larkfield's business model",
      "Ask Larkfield's compliance officer to sign a declaration that the firm meets all client money rules",
      "Rescreen the partners against adverse media, because sanctions and PEP checks do not cover fraud risk",
      "Check the Financial Services Register to confirm Larkfield has permission to hold client money, and understand how the account will be used"
    ],
    answer: [3],
    explanation: "The FCA fined Barclays Bank UK PLC because it opened a client money account for WealthTek without gathering enough information to understand the money laundering risk. One simple check, the Financial Services Register, would have shown that WealthTek did not have permission to hold client money. Clients then paid £34 million into the account. Authorisation alone does not show that a firm has the specific permission for the planned activity. A self-declaration cannot replace that check, and adverse media screening, while useful, does not answer the key question of whether the account's purpose is permitted.",
    source: [
      { label: "FCA press release (July 2025) – FCA fines Barclays £42 million for poor handling of financial crime risks", url: "https://www.fca.org.uk/news/press-releases/fca-fines-barclays-42-million-poor-handling-financial-crime-risks" }
    ]
  },
  {
    id: "SUPV-007", domain: 2, topic: "UK deferred prosecution agreements (Crime and Courts Act 2013, Sch. 17)", hy: false, difficulty: "hard",
    q: "Harrowgate Payments Ltd, a UK payment institution, self-reported that its former head of sales arranged for a client to move about £18 million of suspected fraud proceeds through the firm. The prosecutor investigating the matter, a designated prosecutor, invites the company to negotiate a deferred prosecution agreement (DPA) for offences under POCA section 328. The board wants the DPA to cover the former head of sales too, and asks whether the prosecutor can sign it as soon as terms are agreed. The CFO also hopes the penalty can be well below what a court would impose. Which statement is CORRECT?",
    options: [
      "A DPA can cover the company and the named individual together, and it takes effect when the prosecutor and the parties sign it",
      "A DPA can cover only the company, and it comes into force only when the Crown Court approves it as in the interests of justice and fair, reasonable and proportionate",
      "A DPA can cover only the company, but the court's role is limited to recording the agreement once the prosecutor has approved it",
      "A DPA can cover the individual only if he cooperates, and the penalty is set freely by the prosecutor with no reference to sentencing levels"
    ],
    answer: [1],
    explanation: "Under Schedule 17 of the Crime and Courts Act 2013, the party to a DPA may be a body corporate, partnership or unincorporated association, but not an individual (para. 4). The individual can still be prosecuted. The prosecutor must get a court declaration at a preliminary hearing, and the DPA comes into force only when the Crown Court approves it as being in the interests of justice with fair, reasonable and proportionate terms (paras. 7-8). The penalty must be broadly comparable to the fine a court would impose after a guilty plea (para. 5(4)). POCA ML offences are listed DPA offences (para. 23).",
    source: [
      { label: "Crime and Courts Act 2013, Schedule 17 – deferred prosecution agreements (legislation.gov.uk)", url: "https://www.legislation.gov.uk/ukpga/2013/22/schedule/17" }
    ]
  },
  {
    id: "SUPV-008", domain: 2, topic: "UK corporate criminal liability: senior manager attribution (Crime and Policing Act 2026 s.250)", hy: true, difficulty: "hard", changed: "Crime and Policing Act 2026 s.250 (in force 29 June 2026) replaced ECCTA 2023 ss.196-198",
    q: "In August 2026 Daniel Reyes, head of the trade finance division at Calder Bank plc, knowingly arranges a series of letters of credit for a client he knows is laundering the proceeds of an investment fraud. The division generates a quarter of the bank's revenue, and Reyes decides how it is organised and run. The board and the MLRO knew nothing, and the bank's AML framework was recently rated satisfactory by internal audit. Prosecutors charge Reyes under POCA section 328 and consider charging the bank. Which statement BEST describes the bank's exposure as of October 2026?",
    options: [
      "The bank can be liable only if Reyes was part of its 'directing mind and will', meaning the board or equivalent, under the common-law identification doctrine",
      "The bank is liable only if it cannot show that it had reasonable procedures to prevent its employees from facilitating money laundering",
      "The bank also commits the section 328 offence, because a senior manager acting within the scope of his authority committed it, and the statutory rule now covers all offences",
      "The bank can be liable only under section 196 of the Economic Crime and Corporate Transparency Act 2023, which still applies to a listed set of economic crimes"
    ],
    answer: [2],
    explanation: "Section 250 of the Crime and Policing Act 2026, in force from 29 June 2026 (s.255(3)(k)), so before Reyes acted in August 2026, provides that where a senior manager acting within the actual or apparent scope of their authority commits an offence, the organisation also commits it. A senior manager is someone who plays a significant role in decisions about, or in managing, the whole or a substantial part of the activities, which describes Reyes. The section replaced ECCTA sections 196-198, which applied only to listed economic crimes, so the section 196 answer is out of date. The narrow identification doctrine is no longer the only route. A 'reasonable procedures' defence belongs to failure-to-prevent offences, not to this attribution rule.",
    source: [
      { label: "Crime and Policing Act 2026, s.250 – liability where a senior manager commits an offence (legislation.gov.uk)", url: "https://www.legislation.gov.uk/ukpga/2026/20/section/250" },
      { label: "ECCTA 2023 s.196 – omitted 29.6.2026 (legislation.gov.uk)", url: "https://www.legislation.gov.uk/ukpga/2023/56/section/196" }
    ]
  },
  {
    id: "SUPV-009", domain: 2, topic: "DOJ Corporate Enforcement Policy (March 2026): self-disclosure with an aggravating prior resolution", hy: true, difficulty: "hard", changed: "DOJ Department-wide Corporate Enforcement and Voluntary Self-Disclosure Policy, March 2026",
    q: "In May 2026 Lakemont Bancorp, a US bank holding company, finds that employees at its broker-dealer subsidiary helped a client structure cash and move funds in ways that appear to break the Bank Secrecy Act criminally. Within weeks, before any government inquiry, it discloses the conduct to the appropriate DOJ criminal component. It then cooperates fully, fires the employees, fixes the root cause and offers to pay disgorgement. Four years ago, Lakemont entered a deferred prosecution agreement with the DOJ over unrelated sanctions violations. Under the DOJ's March 2026 Corporate Enforcement Policy, what is the MOST likely outcome, assuming the prior resolution is the only aggravating circumstance and prosecutors do not use their discretion to recommend a declination anyway?",
    options: [
      "A declination, because voluntary self-disclosure, full cooperation and timely remediation always guarantee one",
      "A non-prosecution agreement with a term of less than three years, no independent monitor, and a 50-75% reduction from the low end of the Guidelines fine range",
      "A resolution in the prosecutors' discretion, with a monitor likely and a fine reduction of no more than 50%",
      "A guilty plea, because a company with a prior criminal resolution is excluded from all benefits under the policy"
    ],
    answer: [1],
    explanation: "Part I of the CEP gives a declination when the company voluntarily self-discloses, fully cooperates, remediates in time, and has no aggravating circumstances. Aggravating circumstances include corporate recidivism, meaning a criminal resolution within the last five years. Prosecutors may still recommend a declination, but if they do not, Part II covers a company that is ineligible only because of aggravating factors: an NPA (absent particularly egregious or multiple aggravators), a term under three years, no monitor, and a 50-75% reduction off the low end of the U.S.S.G. range. The runner-up describes Part III, which applies only when a company does not qualify for Part I or Part II.",
    source: [
      { label: "DOJ Corporate Enforcement and Voluntary Self-Disclosure Policy (March 2026), Parts I-III", url: "https://www.justice.gov/dag/media/1430731/dl?inline" },
      { label: "DOJ press release (10 March 2026) – first Department-wide corporate enforcement policy", url: "https://www.justice.gov/opa/pr/department-justice-releases-first-ever-corporate-enforcement-policy-all-criminal-cases" }
    ]
  },
  {
    id: "SUPV-010", domain: 2, topic: "DOJ Corporate Enforcement Policy: 120-day window after an internal whistleblower report (calculation)", hy: false, difficulty: "hard", changed: "DOJ Department-wide Corporate Enforcement and Voluntary Self-Disclosure Policy, March 2026",
    q: "On Monday 4 May 2026, an analyst at Granite Ridge Payments, a US money transmitter, reports through the internal hotline that a regional manager has been processing payments for an unlicensed money transmitting business. On 20 May 2026 the same analyst also files a submission under the DOJ's Corporate Whistleblower Awards Pilot Program. The company's internal investigation confirms the misconduct in July. Under the whistleblower exception in the DOJ's March 2026 Corporate Enforcement Policy, what is the latest date by which Granite Ridge can self-report to the DOJ and still be able to qualify for a declination?",
    options: [
      "Friday 3 July 2026, 60 days after the internal report",
      "It can no longer qualify, because the whistleblower reached the DOJ before the company did",
      "Tuesday 1 September 2026, but it should report as soon as reasonably practicable before then",
      "Thursday 17 September 2026, 120 days after the whistleblower's submission to the DOJ"
    ],
    answer: [2],
    explanation: "Under the whistleblower exception in Appendix B of the CEP, a company still qualifies for a declination even if the whistleblower reaches the DOJ first. It must self-report as soon as reasonably practicable but no later than 120 days after receiving the internal report, and meet the other conditions. Counting 120 days from 4 May 2026 gives 1 September 2026 (27 days left in May, then 30 in June, 31 in July and 31 in August make 119, so day 120 is 1 September). The clock runs from the internal report, not from the DOJ submission. The whistleblower's earlier submission does not by itself rule out a declination.",
    source: [
      { label: "DOJ Corporate Enforcement and Voluntary Self-Disclosure Policy (March 2026), Appendix B – Corporate Whistleblower Awards Pilot Program exception", url: "https://www.justice.gov/dag/media/1430731/dl?inline" }
    ]
  },
  {
    id: "SUPV-011", domain: 2, topic: "DOJ Corporate Enforcement Policy: disclosure only to bank regulators", hy: false, difficulty: "hard", changed: "DOJ Department-wide Corporate Enforcement and Voluntary Self-Disclosure Policy, March 2026",
    q: "In March 2026 Redwood Valley Bank finds that a branch manager took cash payments to help a drug trafficker structure deposits and avoid CTRs. The bank promptly briefs its OCC examiners in full, files a SAR, fires the manager and fixes its branch controls. It does not contact the DOJ, believing that telling its primary regulator is enough. In June, the DOJ opens a criminal investigation based on the SAR. The bank's general counsel asks how the DOJ will treat the disclosure under its March 2026 Corporate Enforcement Policy. What is the MOST accurate answer?",
    options: [
      "It counts as a voluntary self-disclosure, because the OCC is a federal agency and must pass criminal matters to the DOJ",
      "It counts as a voluntary self-disclosure, because the SAR put the DOJ on notice of the conduct as soon as it was filed",
      "It cannot be considered at all, because only disclosures to the DOJ are relevant to any part of a corporate resolution",
      "It generally does not count, because disclosure only to regulators usually does not qualify, but the DOJ may still credit it in its discretion and will weigh it as cooperation and remediation"
    ],
    answer: [3],
    explanation: "The CEP requires disclosure to an appropriate DOJ criminal component. Footnote 5 says that disclosures made only to federal regulatory agencies, state and local governments or civil enforcement agencies generally do not qualify. Good-faith disclosures to them may qualify depending on the facts, at the DOJ's discretion, and in all cases they may count as part of cooperation and remediation. A SAR is a filing the bank already had to make with FinCEN; it is not a self-report to the DOJ. Saying the disclosure 'cannot be considered at all' contradicts the footnote.",
    source: [
      { label: "DOJ Corporate Enforcement and Voluntary Self-Disclosure Policy (March 2026), Part I and footnote 5; Appendix B definition", url: "https://www.justice.gov/dag/media/1430731/dl?inline" }
    ]
  },
  {
    id: "SUPV-012", domain: 2, topic: "FinCEN enforcement approach: guidance vs law, and factors weighed", hy: false, difficulty: "medium",
    q: "An IRS examination of Pinecrest Money Transfer, a small MSB, produces three findings. First, the MSB did not build into its monitoring the red flags from a FinCEN advisory on elder financial exploitation. Second, it failed to file SARs on 14 transfers that clearly met the regulatory SAR criteria. Third, it found and fixed a CTR filing error on its own and promptly disclosed it to FinCEN. The owner says FinCEN will treat all three findings the same way and must impose a civil money penalty. Under FinCEN's Statement on Enforcement of the Bank Secrecy Act, which statement is BEST?",
    options: [
      "Any action will rest on breaches of the BSA and its regulations, such as the SAR failures, not on failing to follow the advisory by itself, and voluntary disclosure and prompt remediation count in the MSB's favour",
      "Not following the advisory is a violation in its own right, because FinCEN advisories bind every financial institution",
      "FinCEN must impose a civil money penalty once any violation is found, and can consider mitigating factors only when setting the amount",
      "FinCEN cannot act against the MSB, because only the IRS has enforcement authority over money services businesses"
    ],
    answer: [0],
    explanation: "FinCEN's 2020 enforcement statement says it seeks to establish violations of statutes and regulations and will not treat failure to meet a standard announced only in guidance as a violation in itself. Its options run from no action and warning letters through settlements and civil money penalties to criminal referral, so a penalty is not automatic. The factors it weighs include the seriousness and systemic nature of the violations, self-initiated remediation, timely voluntary disclosure and cooperation. FinCEN holds overall BSA enforcement authority and relies on the IRS for MSB examinations.",
    source: [
      { label: "FinCEN Statement on Enforcement of the Bank Secrecy Act (August 2020)", url: "https://www.fincen.gov/sites/default/files/shared/FinCEN%20Enforcement%20Statement_FINAL%20508.pdf" }
    ]
  },
  {
    id: "SUPV-013", domain: 2, topic: "Market entry: a qualifying holding with ML red flags (FATF R.26, Basel Annex 5)", hy: true, difficulty: "hard",
    q: "Kestrel Holdings applies to the banking supervisor of Country M for approval to buy a 35% stake in Brightwater Bank. The prudential licensing team notes that the purchase price will come through a chain of companies in a jurisdiction under increased FATF monitoring. A press report says Kestrel's controlling shareholder was questioned, but not charged, in a foreign corruption-laundering investigation. Kestrel's capital is strong and its business plan is sound. In Country M, the central bank's AML/CFT supervision department is a separate unit. What should the licensing team do NEXT?",
    options: [
      "Approve the acquisition, because the shareholder has no conviction and the prudential criteria are met",
      "Approve the acquisition and ask Brightwater to treat Kestrel as a high-risk customer under its CDD procedures",
      "Defer the AML questions to the AML/CFT department's next routine inspection of Brightwater after the deal completes",
      "Obtain information from the AML/CFT supervisor and assess the source of funds and the shareholder's possible links to laundering before deciding"
    ],
    answer: [3],
    explanation: "FATF R.26 requires supervisors to take legal or regulatory measures to prevent criminals or their associates from holding a significant or controlling interest in a financial institution. Annex 5 of the Basel guidelines adds that the prudential supervisor assessing an acquirer should obtain information from the AML/CFT supervisor, and should consider whether the acquirer is or has been associated with money laundering, the source of the acquisition funds, and links to jurisdictions with strategic deficiencies. Under the Basel Annex, an ongoing investigation can lead to further inquiries, conditional approval or refusal, so a lack of conviction does not settle the matter. Bank-level CDD and inspections after completion come too late to keep a suspect owner out.",
    source: [
      { label: "FATF Recommendations (2026) – R.26 (official EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
      { label: "BCBS Sound management of ML/FT risks (rev. July 2020), Annex 5 paras 13-16 and Box 1", url: "https://www.bis.org/publications/202007-guidelines-sound-management-risks-related-money-laundering-and-financing-terrorism-revisions-supervisory.pdf" }
    ]
  },
  {
    id: "SUPV-014", domain: 2, topic: "Supervisory framework: technical compliance gaps (FATF R.26 and R.27)", hy: false, difficulty: "hard",
    q: "Assessors preparing Country V's mutual evaluation review the legal framework of its banking supervisor, which is also the AML/CFT supervisor for banks. Which features would they treat as technical compliance gaps against FATF Recommendations 26 and 27? (Choose two.)",
    options: [
      "The supervisor can compel a bank to produce customer files only after obtaining a court order",
      "The supervisor's AML/CFT powers apply to each licensed bank on a solo basis only, with no legal basis for consolidated group supervision for AML/CFT purposes",
      "The supervisor has licensed a bank whose mind and management sit with its parent abroad, a member of a regulated financial group under effective consolidated supervision",
      "Money or value transfer providers must be registered, but not licensed, with the supervisor",
      "The supervisor shares inspection findings with foreign counterparts through a supervisory college"
    ],
    answer: [0, 1],
    explanation: "R.27 requires supervisors to be authorised to compel production of any relevant information, and the FATF Methodology (footnote to criterion 27.3) says this power should not depend on a court order. R.26 and criterion 26.4(a) require Core Principles institutions such as banks to be supervised in line with the Core Principles, including consolidated group supervision for AML/CFT purposes, so solo-only powers are a gap. The bank licensed without local mind and management is the runner-up, but it is not a prohibited shell bank: the FATF Glossary defines a shell bank as one with no physical presence that is also unaffiliated with a regulated financial group subject to effective consolidated supervision. Criterion 26.2 allows money or value transfer providers to be licensed or registered, and sharing findings through colleges supports international cooperation.",
    source: [
      { label: "FATF Methodology (2026) – criteria 26.2, 26.4 and 27.3 with footnote (official EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Methodology_2026_eng.pdf" },
      { label: "FATF Recommendations (2026) – R.26, R.27 and Glossary 'shell bank' (official EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "SUPV-015", domain: 2, topic: "EU AML/CFT supervisory colleges: AMLA, third-country observers and disputes (AMLD6 Art. 49)", hy: true, difficulty: "hard",
    q: "In 2028 the Portuguese financial supervisor sets up an AML/CFT college for Banco Atlantis Group, which has its head office in Lisbon, subsidiaries in Spain and France, and branches in Brazil and Angola. AMLA has not selected the group for direct supervision. The Spanish and French supervisors will take part, and the Brazilian supervisor asks to join. During planning, the members disagree about whether to order a group-wide review of correspondent accounts. Under Directive (EU) 2024/1640, which statements are correct? (Choose two.)",
    options: [
      "AMLA chairs the college and decides disputes between its members, because the group operates in several Member States",
      "The Brazilian supervisor becomes a permanent member automatically, because the group has a branch in Brazil",
      "AMLA may attend the college's meetings, and if it does so it has the status of an observer",
      "The Brazilian supervisor may take part as an observer only if the members agree, it signs the written agreement, and it is bound by equivalent professional secrecy",
      "Disagreements on measures must be referred to the European Commission, whose decision binds the college members"
    ],
    answer: [2, 3],
    explanation: "Under Article 49 AMLD6, the home supervisor sets up the college, and the permanent members are the EU financial supervisors of the head office and of the host-state establishments. AMLA may attend and, if it does, has observer status (Art. 49(10)). Third-country supervisors may join only as observers, and only if they request it and the members agree (or the members invite them), EU data protection rules are met, they sign the written agreement, and they are bound by professional secrecy at least equivalent to the EU standard (Art. 49(11)). Members who disagree may refer the matter to AMLA for assistance (Art. 49(13)), not to the Commission.",
    source: [
      { label: "Directive (EU) 2024/1640 (AMLD6), Article 49 (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/dir/2024/1640/oj" }
    ]
  },
  {
    id: "SUPV-016", domain: 2, topic: "AMLA direct supervision: joint supervisory teams and conflicting instructions (AMLAR Art. 16)", hy: false, difficulty: "medium",
    q: "In 2029 Lucia Ferrer, an inspector at a national financial supervisor, is a member of the joint supervisory team (JST) for Banco Meridiano, which AMLA directly supervises. The JST coordinator, an AMLA staff member, asks her to spend the next two weeks testing Meridiano's transaction monitoring in its Italian subsidiary. Her national sub-coordinator tells her to give priority to a domestic thematic review of payment institutions instead, saying national staff report to their own authority. Under Regulation (EU) 2024/1620, how should Lucia proceed?",
    options: [
      "Follow the JST coordinator's instruction for her JST work, because the national sub-coordinator cannot give instructions that conflict with it",
      "Follow her national sub-coordinator, because staff seconded from a national supervisor take instructions only from that supervisor",
      "Split her time equally between both tasks until AMLA's Executive Board decides which instruction prevails",
      "Ask Banco Meridiano which work it would prefer, because the bank is entitled to agree the scope of JST inspections"
    ],
    answer: [0],
    explanation: "Article 16 of the AMLA Regulation sets up a JST for each selected obliged entity, made up of staff from AMLA and the national financial supervisors and coordinated by an AMLA staff member, the JST coordinator. JST members must follow the coordinator's instructions on their JST tasks, without prejudice to their duties at their own authority. A national sub-coordinator may instruct staff from the same authority only where this does not conflict with the JST coordinator's instructions. The Regulation does not provide for splitting the time pending an Executive Board ruling, and the supervised bank has no say in assigning supervisory work.",
    source: [
      { label: "Regulation (EU) 2024/1620 (AMLA Regulation), Article 16 (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/reg/2024/1620/oj" }
    ]
  },
  {
    id: "SUPV-017", domain: 2, topic: "AMLA pecuniary sanctions: applying aggravating and mitigating coefficients (calculation)", hy: false, difficulty: "hard",
    q: "In 2029 AMLA's Executive Board finds that Nordhavn Bank, a selected obliged entity with annual turnover of EUR 1 billion, negligently committed serious and systematic customer due diligence breaches identified in three Member States. It sets the basic amount at EUR 3,000,000. The breaches lasted more than six months (coefficient 1.5) and revealed systemic weaknesses in internal controls (coefficient 2.2). The bank has voluntarily taken measures to prevent a repeat (coefficient 0.6). The benefit it gained from the breaches is quantified at EUR 500,000. Under Article 22 and Annex I of the AMLA Regulation, what is the total pecuniary sanction?",
    options: [
      "EUR 6,440,000",
      "EUR 6,900,000",
      "EUR 7,400,000",
      "EUR 8,600,000"
    ],
    answer: [2],
    explanation: "Article 22(4)-(5) applies each coefficient separately to the basic amount and adds or subtracts the difference. Aggravating: 3.0m x 1.5 = 4.5m (+1.5m) and 3.0m x 2.2 = 6.6m (+3.6m). Mitigating: 3.0m x 0.6 = 1.8m (-1.2m). That gives 3.0 + 1.5 + 3.6 - 1.2 = EUR 6.9m. Where the benefit can be determined, it is added after the coefficients, so the total is EUR 7.4m. This is well below the 10% of turnover cap in Art. 22(6). EUR 6.44m wrongly multiplies the coefficients together and then adds the benefit. EUR 6.9m leaves out the benefit, and EUR 8.6m ignores the mitigating coefficient.",
    source: [
      { label: "Regulation (EU) 2024/1620 (AMLA Regulation), Article 22 and Annex I (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/reg/2024/1620/oj" }
    ]
  },
  {
    id: "SUPV-018", domain: 2, topic: "AMLA periodic penalty payments: limits and duration (AMLAR Art. 23)", hy: false, difficulty: "medium",
    q: "AMLA has ordered a directly supervised bank to fix its sanctions screening coverage by a set date, and the bank has missed the deadline. AMLA's Executive Board is considering a periodic penalty payment to compel compliance. Which statement about this tool is CORRECT under the AMLA Regulation?",
    options: [
      "It can reach 10% of the bank's annual turnover per day and continues without limit until the bank complies",
      "It is capped at 3% of the bank's average daily turnover in the preceding business year and can run for up to six months, with one further period of up to six months",
      "It can only be imposed by the national supervisor of the Member State where the bank has its head office",
      "It can only run from the date of the decision imposing it and can never cover the period before that decision"
    ],
    answer: [1],
    explanation: "Article 23 of Regulation (EU) 2024/1620 lets the Executive Board impose periodic penalty payments to compel a selected obliged entity to comply with an administrative measure. For legal persons the amount cannot exceed 3% of average daily turnover in the preceding business year (2% of average daily income for natural persons). It may be imposed for up to six months, plus one further period of up to six months if the entity still has not complied. A decision may be taken later with retroactive effect back to the date the administrative measure applied. The 10% of turnover figure is the cap on pecuniary sanctions in Article 22, not on periodic penalties.",
    source: [
      { label: "Regulation (EU) 2024/1620 (AMLA Regulation), Articles 22-23 (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/reg/2024/1620/oj" }
    ]
  },
  {
    id: "SUPV-019", domain: 2, topic: "Case lessons: MAS penalties on nine institutions (July 2025) after the S$3 billion laundering case", hy: true, difficulty: "hard",
    q: "In 2026 the board risk committee of Straits Harbour Private Bank in Singapore reviews the regulatory actions MAS announced in July 2025 against nine financial institutions linked to the 2023 money laundering case. The CRO wants to spend the remediation budget on a new transaction monitoring platform. The head of compliance notes that the bank already has detailed policies, that its relationship managers often accept clients' wealth narratives without corroboration, and that alerts on several wealthy clients have been closed with brief notes. Which lesson do MAS's findings MOST directly support?",
    options: [
      "MAS found that the institutions mostly lacked AML/CFT policies, so the priority should be rewriting the policy framework",
      "MAS's main concern was the absence of monitoring systems, so a new platform should be the first investment",
      "MAS found that most institutions had policies, but all nine failed to detect or follow up on source-of-wealth red flags, so implementation of SoW corroboration is the priority",
      "MAS took action only against the institutions, so the bank should focus on institutional controls rather than on individual relationship managers"
    ],
    answer: [2],
    explanation: "MAS imposed composition penalties totalling S$27.45 million. It found that all nine institutions failed to detect or adequately follow up on discrepancies or red flags about customers' source of wealth. Eight failed to adequately review transactions their own systems had flagged, and five had weak customer risk assessment. MAS said most had established policies and that the breaches came from poor or inconsistent implementation, so neither rewriting policies nor buying a platform is the main lesson. MAS also issued prohibition orders against individuals, so the institution-only option is wrong.",
    source: [
      { label: "MAS (4 July 2025) – MAS takes regulatory actions against 9 financial institutions for AML-related breaches", url: "https://www.mas.gov.sg/regulation/enforcement/enforcement-actions/2025/mas-takes-regulatory-actions-against-9-financial-institutions-for-aml-related-breaches" }
    ]
  },
  {
    id: "SUPV-020", domain: 2, topic: "Case lessons: BaFin special commissioner and growth limits (N26, 2021)", hy: false, difficulty: "medium",
    q: "In May 2021 BaFin ordered N26 Bank to remedy anti-money laundering deficiencies in IT monitoring and customer due diligence and appointed a special commissioner under section 45c of the German Banking Act. In June 2021 it fined the bank EUR 4.25 million for submitting a high number of suspicious transaction reports late. In October 2021, citing shortcomings in IT and outsourcing risk management, it capped new customer growth at 50,000 a month. A compliance director at another digital bank asks what role a special commissioner plays in this kind of AML remediation. Which answer is BEST?",
    options: [
      "The commissioner monitors how the ordered measures are implemented and keeps BaFin informed of progress, while management stays responsible for the fixes",
      "The commissioner takes over the bank's management and becomes its MLRO until BaFin lifts the order",
      "The commissioner is an independent auditor the bank selects and pays, and whose report the bank may keep from BaFin",
      "The commissioner decides which customers the bank may onboard under the monthly growth limit"
    ],
    answer: [0],
    explanation: "BaFin's May 2021 notice states that the special commissioner was appointed to monitor implementation of the AML order and to give BaFin ongoing updates on progress. Its November 2021 notice of the 5 October 2021 order says a special commissioner would also monitor the growth-limitation measures, which BaFin could adjust step by step after assessing progress in consultation with the commissioner, and links the cap to freeing resources for customer identification, transaction monitoring and suspicious transaction reporting. The bank remained responsible for carrying out the measures; the commissioner did not replace management or the MLRO. A report that could be kept from the supervisor would defeat the commissioner's purpose. The growth cap is a business restriction BaFin set, not a customer-by-customer approval process.",
    source: [
      { label: "BaFin (May 2021) – N26: order to prevent ML/TF; appointment of a special commissioner", url: "https://www.bafin.de/SharedDocs/Veroeffentlichungen/EN/Massnahmen/60b_KWG_84_WpIG_und_57_GwG/meldung_210512_57_GwG_N26_en.html" },
      { label: "BaFin (9 Nov 2021) – N26: measures to limit growth (order of 5 Oct 2021), special commissioner, and the EUR 4.25m STR fine of 25 June 2021", url: "https://www.bafin.de/SharedDocs/Veroeffentlichungen/EN/Massnahmen/60b_KWG_84_WpIG_und_57_GwG/meldung_211109_60b_N26_en.html" }
    ]
  },
  {
    id: "SUPV-021", domain: 2, topic: "Prudential and AML/CFT supervisors: sharing information on pending enforcement (Basel Annex 5)", hy: false, difficulty: "hard",
    q: "The AML/CFT supervisor of Country K plans a large penalty against Orion Bank and an order to stop onboarding new correspondent respondents, after finding systemic failures in its monitoring of nested payment flows. Orion is a subsidiary of a foreign banking group, and correspondent banking produces a third of its deposits. The decision will be finalised in about four months. The prudential supervisor in Country K, a separate authority, and the group's home prudential supervisor have not been told. The AML/CFT supervisor's legal team suggests waiting until the decision is published to avoid leaks. What is the BEST approach under the Basel Committee's guidelines?",
    options: [
      "Wait until the decision is published, because sharing pending enforcement action breaches the bank's confidentiality",
      "Share now with the domestic and home prudential supervisors, giving enough detail on the deficiencies for them to assess capital and liquidity effects",
      "Tell Orion to inform its prudential supervisors itself, because the bank owns the relationship with them",
      "Share only the final penalty amount with the domestic prudential supervisor, because the foreign home supervisor has no role in AML/CFT matters"
    ],
    answer: [1],
    explanation: "Annex 5 of the Basel guidelines says prudential and AML/CFT supervisors should share relevant information on pending or imposed enforcement actions with domestic and international counterparts in a timely manner, consistent with legal requirements. They should give enough detail about the AML/CFT deficiencies for each supervisor to assess the impact, as early and often as possible, to manage effects on financial stability such as capital, liquidity or curtailed activities. Waiting until publication defeats that aim, and handing the task to the bank is not supervisory cooperation. Leaving out the home supervisor ignores the cross-border group dimension the Annex stresses.",
    source: [
      { label: "BCBS Sound management of ML/FT risks (rev. July 2020), Annex 5 paras 21-26", url: "https://www.bis.org/publications/202007-guidelines-sound-management-risks-related-money-laundering-and-financing-terrorism-revisions-supervisory.pdf" }
    ]
  },
  {
    id: "SUPV-022", domain: 2, topic: "EU risk-based supervision: annual programmes and capacity to react (AMLD6 Art. 40)", hy: false, difficulty: "hard",
    q: "In late 2027 the head of AML supervision at a Member State's financial supervisor drafts the 2028 programme under Directive (EU) 2024/1640. It sets the frequency and intensity of on-site, off-site and thematic work from each institution's risk profile and the national risk assessment. To maximise coverage, it commits all inspector capacity to scheduled inspections. It also plans to publish a summary of the annual activity report covering the categories and number of supervised entities, the supervisor's powers and an overview of its activities. Which change does Article 40 MOST clearly require?",
    options: [
      "Inspect every obliged entity on-site each year, whatever its risk profile, to ensure full coverage",
      "Base inspection frequency mainly on each institution's asset size, which is the most objective measure of risk",
      "Publish the full annual report, including findings on named institutions, rather than a summary",
      "Keep time and resources in the programme to react promptly to objective and significant indications of breaches"
    ],
    answer: [3],
    explanation: "Article 40(1) AMLD6 requires supervisors to base the frequency and intensity of supervision on risk and to draw up annual supervisory programmes that take into account the timing and resources needed to react promptly to objective and significant indications of breaches. A plan that commits all capacity to scheduled work leaves nothing for that. Inspecting everyone annually or relying on size goes against the risk-based approach. Article 40(5) requires a public summary of the annual report without confidential information, which the draft already provides.",
    source: [
      { label: "Directive (EU) 2024/1640 (AMLD6), Article 40 (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/dir/2024/1640/oj" }
    ]
  },
  {
    id: "SUPV-023", domain: 2, topic: "Risk-based supervision: size is not a proxy for low ML/FT risk (Basel Annex 5 para 12)", hy: false, difficulty: "medium",
    q: "A banking supervisor's risk model ranks Pellucid Bank, with total assets of USD 400 million, in its lowest risk band because the bank is in the bottom 5% of the sector by assets and profits. Pellucid's main business is providing US dollar correspondent accounts to 40 small payment service providers in high-risk jurisdictions, several of which have their own downstream payment institution customers. The supervisor plans no AML/CFT inspection for five years. What is the MOST appropriate reassessment?",
    options: [
      "Keep the low rating, because a small bank cannot cause significant ML/FT harm to the financial system",
      "Keep the low rating but ask the bank's external auditor to confirm that its AML controls are adequate",
      "Raise the rating, because size and profitability should not be the main indicator for concluding that a bank is low risk",
      "Raise the rating only if the bank's assets grow above the sector median during the next five years"
    ],
    answer: [2],
    explanation: "Annex 5 of the Basel guidelines states that under the risk-based approach, using the size of operations or profits or losses of a bank as the main ML/FT risk indicator is not appropriate for concluding that a bank is low risk, because ML/FT risk can arise from small parts of a bank or from a small bank. Pellucid's correspondent services to payment providers in high-risk jurisdictions, with nested downstream customers, point to high inherent risk. FATF's Methodology (criterion 26.5) likewise ties supervisory intensity to each institution's risk profile. An auditor's comfort letter or an asset-growth trigger would not fix the flawed risk model.",
    source: [
      { label: "BCBS Sound management of ML/FT risks (rev. July 2020), Annex 5 para 12", url: "https://www.bis.org/publications/202007-guidelines-sound-management-risks-related-money-laundering-and-financing-terrorism-revisions-supervisory.pdf" },
      { label: "FATF Methodology (2026) – criterion 26.5 (official EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Methodology_2026_eng.pdf" }
    ]
  },
  {
    id: "SUPV-024", domain: 2, topic: "Business restrictions: the OCC's 2024 asset cap order against TD Bank", hy: true, difficulty: "hard",
    q: "A compliance team is studying the OCC's October 2024 cease-and-desist order against TD Bank's US banks, which led to an asset cap. The bank's US strategy team asks what the order means for growth plans. Which statements accurately describe the order's business restrictions? (Choose two.)",
    options: [
      "Total consolidated assets of the two US bank charters are capped at the level reported at 30 September 2024, and the OCC may require cuts of up to 7% for each year of non-compliance",
      "The cap lifts automatically three years after the order, whether or not the bank has completed its remediation",
      "The bank needs the OCC's supervisory non-objection to open a new branch or enter a new market",
      "The bank is banned from launching any new product for the whole term of the order, whatever its BSA/AML risk",
      "An OCC-appointed monitor replaces the bank's BSA officer and approves each new customer relationship"
    ],
    answer: [0, 2],
    explanation: "The OCC fact sheet says the asset cap limits the combined total consolidated assets of TD Bank, N.A. and TD Bank USA, N.A. to the level reported at 30 September 2024 for the duration of the order. If actionable articles are not met on time, the OCC may require reductions of up to 7%, and up to a further 7% for each further year of non-compliance. The bank also needs OCC non-objection to open branches or enter new markets. New products need non-objection until policies improve, and afterwards only medium- or high-risk products do, so there is no blanket product ban. The OCC order requires an independent third-party assessment of the BSA/AML program and a suspicious activity lookback, but it installs no one to replace the BSA officer or approve customers; the bank must correct its own program.",
    source: [
      { label: "OCC fact sheet (Oct 2024) – TD Bank enforcement actions: asset cap and business restrictions", url: "https://www.occ.gov/news-issuances/news-releases/2024/nr-occ-2024-116a.pdf" },
      { label: "OCC news release 2024-116 – TD Bank cease and desist order and civil money penalty", url: "https://www.occ.gov/news-issuances/news-releases/2024/nr-occ-2024-116.html" }
    ]
  },
  {
    id: "SUPV-025", domain: 2, topic: "Individual liability: FCA settlement discount for an MLRO's penalty and prohibition (DEPP 6.7)", hy: false, difficulty: "hard",
    q: "The FCA's investigation finds that Tobias Grant, the former MLRO of a UK wealth manager, repeatedly signed off high-risk clients without the required enhanced due diligence and misled internal audit about the backlog. The FCA proposes a financial penalty of £120,000 and an order permanently prohibiting him from performing any function in regulated financial services. Grant agrees to settle during stage 1. Which outcome follows from the FCA's settlement discount scheme?",
    options: [
      "The penalty falls to £84,000, and the permanent prohibition stays in place without any discount",
      "The penalty falls to £84,000, and the prohibition is reduced to a fixed seven-year term",
      "Neither is reduced, because the settlement discount scheme is available only to firms, not individuals",
      "The penalty falls to £96,000 under the 20% stage 1 discount, and the prohibition is lifted on settlement"
    ],
    answer: [0],
    explanation: "DEPP 6.7.3G gives a 30% discount for settlement in stage 1, so £120,000 becomes £84,000. Individuals can settle as well as firms. DEPP 6.7.6G applies the discount to the length of a suspension, restriction, condition or time-limited disciplinary prohibition, but says no settlement discount is available for a permanent disciplinary prohibition, and the scheme in DEPP 6.7 does not shorten a prohibition order either. The runner-up wrongly turns a permanent ban into a fixed term. The 20% figure applied only under transitional rules for cases where stage 1 had begun before 1 March 2017.",
    source: [
      { label: "FCA Handbook DEPP 6.7 – settlement discount scheme (incl. 6.7.6G on prohibitions)", url: "https://www.handbook.fca.org.uk/handbook/DEPP/6/7.html" }
    ]
  }
]);
