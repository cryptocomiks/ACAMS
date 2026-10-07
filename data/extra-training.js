window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "TRNG-001", difficulty: "hard", domain: 3, topic: "Fixing training that has not changed behaviour: lessons learned and targeted redesign", hy: true,
    q: "Sundon Bank, a UK retail bank, gave all 1,800 branch staff a 40-minute e-learning module on cash-based money laundering in January 2026. Completion is 99% and the average quiz score is 94%, but the quiz uses the same ten questions each time and can be retaken until passed. QA still finds that tellers record the account holder instead of the person actually paying in the cash in 1 in 8 sampled deposits, and three recent branch cases involved third parties paying cash into student accounts that tellers did not question. The MLRO has already told the board that the module has not changed behaviour, and the board has approved a budget to fix it. What is the BEST way to redesign the training?",
    options: [
      "Re-issue the same module to all 1,800 staff with the pass mark raised to 100%, so that everyone shows full knowledge",
      "Build targeted, practical training for tellers on the actual failures, using the QA findings and branch cases, with varied testing, then re-measure",
      "Replace the e-learning with a full-day classroom course for every member of staff, since online training cannot change behaviour",
      "Ask each teller to sign an attestation that they will record the depositor's identity, and add it to the branch procedures manual"
    ],
    answer: [1],
    explanation: "The DOJ's Evaluation of Corporate Compliance Programs asks whether training addresses lessons learned from prior compliance incidents, whether it is tailored to the audience, how employees who fail testing are dealt with and whether training changes behaviour. The FCA lists failing to identify training needs as poor practice and training with a strong practical side and some form of testing as good practice (FCG 2.2.6). Here the needs are known: recording the depositor and spotting third-party cash. The runner-up, re-running the same module with a higher pass mark, repeats what failed: JMLSG 7.42 warns that re-showing the same material gives diminishing returns, and a retakeable ten-question quiz measures recall, not conduct. JMLSG 7.42 also says no single method fits all and online learning suits many staff, so classroom training for everyone is not required; an attestation is not training.",
    source: [
      { label: "DOJ Evaluation of Corporate Compliance Programs (Sept 2024) – Training and Communications", url: "https://www.justice.gov/criminal/criminal-fraud/page/file/937501/dl" },
      { label: "FCA Handbook – FCG 2.2.6 Staff recruitment, vetting, training, awareness and remuneration", url: "https://www.handbook.fca.org.uk/handbook/FCG/2/2.html" },
      { label: "JMLSG Guidance Part I (updated Aug 2025), Chapter 7 (7.42)", url: "https://www.jmlsg.org.uk/wp-content/uploads/2025/09/JMLSG-Guidance-Part-I_June-2023-updated-Aug-2025.pdf" }
    ]
  },
  {
    id: "TRNG-002", difficulty: "hard", domain: 3, topic: "Buying BSA training from an outside provider: tailoring and documentation (FFIEC)", hy: true,
    q: "To cut costs, Ridgeway Community Bank, a US state member bank, plans to replace its in-house BSA/AML training with a generic online course sold by a state bankers' association to about 60 banks. The course explains the BSA, CTRs and SAR rules well, but it does not cover Ridgeway's own BSA/AML procedures. Most of Ridgeway's risk comes from agricultural lending and seasonal cash from farm-produce businesses. The association will email each bank a completion certificate for every employee. What approach BEST reflects the FFIEC BSA/AML Examination Manual?",
    options: [
      "Use the course without changes, because the BSA's requirements are the same for every bank and the course covers them well",
      "Drop the plan, because BSA training must be designed and delivered by the bank's own BSA compliance officer",
      "Use the course, but add training on the bank's own procedures and risks, tailored by role, and keep full records of the training",
      "Use the course and keep only the certificates, because the association now carries responsibility for the bank's training"
    ],
    answer: [2],
    explanation: "The FFIEC manual allows a bank to rely on another financial institution or other party for training, but says appropriate documentation should be kept. Training should cover BSA requirements, supervisory guidance and the bank's own policies, procedures and processes, be tailored to each person's responsibilities, and include examples tailored to each operational area, such as money laundering through lending arrangements for loan staff. The runner-up, using the course unchanged, covers the law but not Ridgeway's procedures or its lending and cash risks. Using an outside provider is allowed, but it does not move responsibility for the training programme away from the bank, and certificates alone are not the full documentation the manual expects.",
    source: [
      { label: "FFIEC BSA/AML Examination Manual (April 2020) – BSA/AML Training", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" }
    ]
  },
  {
    id: "TRNG-003", difficulty: "hard", domain: 3, topic: "UK: a procedures manual is not training (JMLSG ch. 7, POCA s.330(7))", hy: true,
    q: "To cut costs, the COO of Wexcombe Building Society, a UK mortgage lender, proposes replacing AML training for its 300 customer-facing staff with a requirement to read the updated procedures manual on the intranet and tick an online attestation each year. He notes that the manual is accurate, was approved by the board in March and is fully searchable. The MLRO is asked for her view. Which response is BEST supported by the JMLSG guidance?",
    options: [
      "Agree, because an approved, accessible manual and signed attestations meet the regulation 24 training requirement",
      "Agree, if staff attest every quarter rather than every year, as frequent attestations show ongoing awareness",
      "Disagree, because the regulations require classroom training for all customer-facing staff every year",
      "Disagree: a manual is reference material, not training, and untrained staff may have a POCA defence, exposing the society"
    ],
    answer: [3],
    explanation: "JMLSG Part I (7.43) says procedures manuals help raise awareness and supplement training, but their main purpose is reference and they are not written as training material. Under POCA s.330(7) a staff member who did not know or suspect, and was not given training by the employer, has a defence to the failure-to-disclose offence (JMLSG 7.14); JMLSG 7.15 warns this may leave the firm open to prosecution or regulatory sanction, so firms should assess the effectiveness of training, not just collect acknowledgements. The runner-up about classroom training is wrong: JMLSG 7.42 accepts a mix of methods, including online learning.",
    source: [
      { label: "JMLSG Guidance Part I (updated Aug 2025), Chapter 7", url: "https://www.jmlsg.org.uk/wp-content/uploads/2025/09/JMLSG-Guidance-Part-I_June-2023-updated-Aug-2025.pdf" }
    ]
  },
  {
    id: "TRNG-004", difficulty: "hard", domain: 3, topic: "New product launch: trained investigators before go-live (EBA/GL/2022/05)", hy: false,
    q: "Vantra Bank, an EU credit institution, plans to launch instant cross-border payments for retail customers on 1 December 2026. In October its AML/CFT compliance officer, Elena Duarte, finds that the 14 investigators who will handle the new alerts have had no training on money mule and authorised push payment fraud typologies, which the bank's own risk assessment names as the product's main risks. The new monitoring scenarios are still being tested, and her request for four more investigators is pending. The head of retail says the date has been announced to the press, and offers to send the investigators a typology slide deck after launch. The bank's external auditor signed off the annual accounts last month. Under the EBA Guidelines on AML/CFT compliance officers, what should Elena do?",
    options: [
      "Accept the date and schedule the investigators' training for the first quarter after go-live, when real alert data exists",
      "Advise the management body that the launch should not start until adequate resources, including trained investigators, are in place",
      "Approve the launch if the head of retail signs a risk acceptance, since the business line owns the product's risks",
      "Postpone the launch on her own authority, because the compliance officer has a veto over new products"
    ],
    answer: [1],
    explanation: "Paragraph 40 of the EBA Guidelines says a new product should not be launched until adequate resources to understand and manage its risks are available and effectively implemented, and paragraph 58 requires specific training for compliance staff. Paragraph 48(d) asks the officer to say when resources are insufficient. The runner-up, training after go-live, leaves the main risks unmanaged during the period of highest exposure. The decision lies with the management body, which must justify and record any decision not to follow the officer's recommendation; the guidelines give her no personal veto.",
    source: [
      { label: "EBA/GL/2022/05 Guidelines on the AML/CFT compliance officer, paras 23, 40, 48, 58", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-05%20GLs%20on%20AML%20compliance%20officers/1035126/Guidelines%20on%20AMLCFT%20compliance%20officers.pdf" }
    ]
  },
  {
    id: "TRNG-005", difficulty: "medium", domain: 3, topic: "Specific training groups named in EBA/GL/2022/05 para. 58", hy: false,
    q: "Larsa Payments, an EU payment institution, is preparing its 2027 AML/CFT training plan. Besides general awareness for all staff, its AML/CFT compliance officer must decide which groups need specific theoretical and practical training adjusted to their exposure to ML/TF risk. Which groups are expressly named in paragraph 58 of the EBA Guidelines on AML/CFT compliance officers? (Choose two.)",
    options: [
      "Product designers who build the customer onboarding journey and its internal rules and tools",
      "The statutory auditors who audit the institution's annual financial statements",
      "Agents and distributors who deal with customers or carry out their transactions",
      "Members of the remuneration committee who set variable pay for the sales force",
      "Facilities contractors who maintain the institution's office buildings"
    ],
    answer: [0, 2],
    explanation: "Paragraph 58 lists three groups for specific training: staff of the compliance function, persons in contact with customers or carrying out their transactions (employees, agents and distributors), and persons responsible for developing procedures or internal tools for activities sensitive to ML/TF risk. Product designers of the onboarding journey fall in the last group. External auditors, remuneration committee members and facilities contractors are not named.",
    source: [
      { label: "EBA/GL/2022/05 Guidelines on the AML/CFT compliance officer, para. 58", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-05%20GLs%20on%20AML%20compliance%20officers/1035126/Guidelines%20on%20AMLCFT%20compliance%20officers.pdf" }
    ]
  },
  {
    id: "TRNG-006", difficulty: "hard", domain: 3, topic: "Front-line training content: suspicion handling without tipping off", hy: false,
    q: "Halden Savings Bank in the UK is rewriting its branch training after a teller missed signs of cash structuring. The draft tells tellers who suspect money laundering to: (1) ask the customer where the cash comes from and record the answer; (2) tell the customer the deposit 'may have to be reported to the authorities' to deter misuse; (3) decline the deposit if the explanation is weak; and (4) send an internal report to the nominated officer by the end of the day. The draft also includes six case studies based on local branch incidents. Which change to the draft is MOST important?",
    options: [
      "Remove the warning to the customer, which risks tipping off or prejudicing an investigation, and keep questions to normal due diligence",
      "Remove the case studies, because training should concentrate on the legislation rather than on local incidents",
      "Replace the internal report with a direct report by the teller to the NCA, which is faster than the nominated officer",
      "Remove the instruction to ask where the cash comes from, because any question about the source of funds is tipping off"
    ],
    answer: [0],
    explanation: "JMLSG Part I (7.28) reminds staff that once a report has been made to the nominated officer, any further disclosure likely to prejudice an investigation is an offence, so training must not tell staff to warn customers about reporting. Asking about the source of funds is normal due diligence (JMLSG 7.30), so the runner-up goes too far. Staff discharge their duty by reporting internally to the nominated officer (FCG 3.2.10), and the FCA lists practical case studies as good practice and training that dwells on legislation as poor practice (FCG 2.2.6).",
    source: [
      { label: "JMLSG Guidance Part I (updated Aug 2025), Chapter 7", url: "https://www.jmlsg.org.uk/wp-content/uploads/2025/09/JMLSG-Guidance-Part-I_June-2023-updated-Aug-2025.pdf" },
      { label: "FCA Handbook – FCG 2.2 Themes (staff training)", url: "https://www.handbook.fca.org.uk/handbook/FCG/2/2.html" }
    ]
  },
  {
    id: "TRNG-007", difficulty: "hard", domain: 3, topic: "Sanctions training after a negative testing result (OFAC Framework)", hy: true,
    q: "In a June 2026 compliance test, Coastline Bank, a US bank, finds that three payment operations staff released wires after clearing sanctions alerts on vessel names as 'not a person, so not relevant'. None of the payments involved a blocked vessel, but the reasoning was wrong. All staff completed the bank's annual sanctions e-learning in January, and the next session is due in January 2027. The operations manager notes that the three are among the fastest processors in the team. The bank also changed its screening vendor this year. Under OFAC's Framework for Compliance Commitments, what should the bank do about training?",
    options: [
      "Wait for the January 2027 session and add a vessel module, since OFAC expects sanctions training at least once a year",
      "Act now: give the three staff, and others who clear similar alerts, targeted training followed by an assessment",
      "Retrain the new screening vendor's staff, because the change of vendor is the likely cause of the wrong decisions",
      "Remove the three staff from alert handling for good, because retraining is not an adequate response to a test finding"
    ],
    answer: [1],
    explanation: "OFAC's Framework says that, on learning of a confirmed negative testing result or audit finding, an organisation should take immediate and effective action to provide training or other corrective action to the relevant personnel. Training should give job-specific knowledge and hold employees accountable through assessments. 'At least annually' is a minimum frequency, not a reason to wait seven months, which is why the runner-up is wrong. The staff, not the vendor, made the wrong decisions, and permanent removal is not required.",
    source: [
      { label: "OFAC – A Framework for OFAC Compliance Commitments (2019), Training", url: "https://ofac.treasury.gov/media/16331/download?inline" }
    ]
  },
  {
    id: "TRNG-008", difficulty: "hard", domain: 3, topic: "Quality control vs quality assurance in alert handling (Wolfsberg)", hy: true,
    q: "Marlowe Private Bank's negative news screening team closes about 900 alerts a month. Its head, Tomas Berg, has two proposals. Under the first, a senior analyst must approve every closure of an alert on a high-risk or PEP client before the decision becomes final. Under the second, an independent team samples closed alerts each month to test whether they were handled in line with the bank's discounting standards. The CFO asks which proposal is the 'real' quality control, since the budget allows only one this year. According to the Wolfsberg Group's Negative News Screening FAQs, what is the BEST reply?",
    options: [
      "The second is quality control and the first is only supervision, so only the sampling team should be funded",
      "Both are quality assurance and differ only in who reviews, so the cheaper option should be chosen",
      "The first is a detective control and the second a preventive one, so the first should be funded",
      "The first is QC, a preventive check before the outcome; the second is QA, a detective check after it; a strong framework has both"
    ],
    answer: [3],
    explanation: "The Wolfsberg FAQs (Q26) describe quality control as a preventive control performed before the alert outcome is decided, and quality assurance as a detective control performed after it, and say a strong control framework contains both. The pre-closure approval is QC and the post-closure sample is QA. The runner-up reverses the labels, and the third option reverses preventive and detective.",
    source: [
      { label: "Wolfsberg Group – Negative News Screening FAQs (2022), Q26-Q27", url: "https://db.wolfsberg-group.org/assets/b3a010d9-7b32-4580-92d7-db9a7e78cbaf/Negative%20News%20Screening%20FAQs%20(2022).pdf" }
    ]
  },
  {
    id: "TRNG-009", difficulty: "hard", domain: 3, topic: "Designing a screening QA programme: sampling and reconciliation", hy: false,
    q: "Brennan Bank's second-line QA team reviews the work of its negative news screening analysts. Each month it reviews 10 escalated alerts per team, chosen by the team leads. The latest MI shows a 0% QA failure rate for six months. Internal audit notes that the screening tool generated 41,200 alerts in the year, but the case system shows only 39,950 referred, dispositioned or closed, and nobody can explain the gap. The head of QA asks how to strengthen the programme. Which steps are MOST consistent with the Wolfsberg Group's guidance? (Choose two.)",
    options: [
      "Reconcile alerts generated with alerts worked, closed or referred, and investigate the 1,250 missing alerts",
      "Keep the current sample, since six months of 0% failures shows the alert process is working well",
      "Let team leads continue to choose the sample, as they know which alerts are the most complex",
      "Limit QA to escalated alerts, because alerts closed as false positives carry no further risk",
      "Size the sample through a risk assessment and statistical sampling, including alerts closed as false positives"
    ],
    answer: [0, 4],
    explanation: "The Wolfsberg FAQs (Q26-Q27) say firms should risk-assess the level of quality checks, treat statistical sampling as the target approach where resources allow, check that the number of alerts generated matches the number worked so that missing alerts are found, and test the false positive population for missed true matches. A sample of escalated alerts chosen by the teams' own leads cannot find wrongly closed alerts, so a 0% failure rate proves little.",
    source: [
      { label: "Wolfsberg Group – Negative News Screening FAQs (2022), Q26-Q27", url: "https://db.wolfsberg-group.org/assets/b3a010d9-7b32-4580-92d7-db9a7e78cbaf/Negative%20News%20Screening%20FAQs%20(2022).pdf" }
    ]
  },
  {
    id: "TRNG-010", difficulty: "hard", domain: 3, topic: "Compliance staff inside a business line: reporting lines and pay (SR 08-8)", hy: false,
    q: "Harborline Financial, a large US banking organisation, has 12 compliance officers working inside its wealth management division. They test the division's AML and sanctions controls and advise its bankers. They report only to the head of wealth management, who sets their bonuses from a pool funded by the division's revenue. The chief compliance officer learns of this when one of them downgrades a high-risk testing finding to 'low' shortly before year-end. The division's revenue grew 18% last year, and its head is well regarded by the board. Under the Federal Reserve's SR 08-8 guidance, what is the BEST fix?",
    options: [
      "Move all 12 officers into corporate compliance in another city, because compliance staff may never sit in a business line",
      "Keep the arrangement but require the head of wealth management to sign off each testing report personally",
      "Add a reporting line to corporate compliance, give it a key role in their pay and personnel decisions, end pay linked to division results and oversee their testing closely",
      "Have internal audit re-perform all of the division's compliance testing each year instead of the embedded officers"
    ],
    answer: [2],
    explanation: "SR 08-8 accepts dual reporting structures, where business-line compliance staff also report to business management, if minimum standards are met: corporate compliance plays a key role in how compliance matters are handled and in personnel decisions, including pay; compliance staff are not paid on the business line's financial performance; and corporate oversight of their monitoring and testing is especially robust. The runner-up, moving everyone out, is not required, since independence does not stop compliance staff working closely with the business. Sign-off by the business head makes the conflict worse.",
    source: [
      { label: "Federal Reserve SR 08-8 / CA 08-11 – Compliance Risk Management Programs and Oversight", url: "https://www.federalreserve.gov/supervisionreg/srletters/sr0808.htm" }
    ]
  },
  {
    id: "TRNG-011", difficulty: "hard", domain: 3, topic: "Board MI integrity: a KPI improved by changing its definition", hy: true,
    q: "The quarterly board dashboard at Oakhurst Bank, a UK bank, shows the KPI 'High-risk customer reviews completed on time' rising from 71% to 98% in one quarter with no extra staff. The MLRO, Femi Adeyemi, finds that operations changed the definition: reviews granted an extension now count as 'on time', and 1,140 reviews were extended last quarter, many of them twice. The KPI also turned from red to green. The board risk committee meets next week, and its chair has praised the improvement in an email to the CEO. A new core banking system went live in the same quarter. What should Femi do FIRST?",
    options: [
      "Report the KPI on the old, consistent definition, explain the change and show the extended reviews, so the committee sees the true position",
      "Leave this quarter's figure as reported to avoid confusing the board, and restore the old definition from next quarter",
      "Add a footnote that the definition was refined, since operations owns the metric and may define it as it sees fit",
      "Ask internal audit to review the core banking migration first, since the system change most likely explains the improvement"
    ],
    answer: [0],
    explanation: "The FCA expects senior management to receive informative, objective information sufficient to meet their AML obligations (FCG 3.2.1), and MI should help them understand the firm's risks and stay within appetite (FCG 2.2.2). The FCA's transaction monitoring review also warns against changing settings simply to improve performance statistics and stresses consistent measurement from one period to the next (FCTR 4.3.2); the same logic applies to any control metric. A footnote, the runner-up, still presents a misleading green status; the system migration is a decoy, because the cause is already known.",
    source: [
      { label: "FCA Handbook – FCG 3.2 Themes (governance and MLRO)", url: "https://www.handbook.fca.org.uk/handbook/FCG/3/2.html" },
      { label: "FCA Handbook – FCTR 4.3 Transaction monitoring: good and poor practice", url: "https://www.handbook.fca.org.uk/handbook/FCTR/4/3.html" }
    ]
  },
  {
    id: "TRNG-012", difficulty: "hard", domain: 4, topic: "Investigation team staffing model (calculation)", hy: false,
    q: "Calder Bank expects its new instant payments product to generate 6,000 transaction monitoring alerts a month. Under its operating model, level-1 analysts review every alert in 20 minutes on average, and 10% of alerts are escalated to level-2 investigators, who spend 4 hours per case on average, including the SAR decision. Workforce planning assumes 160 contracted hours a month per person, but only 120 productive hours after leave, training, QA rework and team meetings. Alert volumes will be reviewed against the risk assessment after six months. How many additional full-time staff, at minimum, does the bank need to handle the new alerts without building a backlog?",
    options: [
      "28 staff: 13 level-1 analysts and 15 level-2 investigators",
      "37 staff: 17 level-1 analysts and 20 level-2 investigators",
      "17 staff: level-1 analysts only, as escalated cases stay with them",
      "31 staff: 4,400 hours over 160 hours, plus a 10% buffer"
    ],
    answer: [1],
    explanation: "Level 1: 6,000 x 20 minutes = 2,000 hours, / 120 productive hours = 16.7, so 17. Level 2: 600 cases x 4 hours = 2,400 hours, / 120 = 20. Total 37. The runner-up uses 160 contracted hours, which overstates capacity and builds a backlog. The FFIEC manual expects staffing with the skills and expertise for the bank's risk level, and the DOJ asks whether compliance staffing is sufficient to analyse and act on results.",
    source: [
      { label: "FFIEC BSA/AML Examination Manual (April 2020) – BSA Compliance Officer (resources)", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" },
      { label: "DOJ Evaluation of Corporate Compliance Programs (Sept 2024) – Funding and Resources", url: "https://www.justice.gov/criminal/criminal-fraud/page/file/937501/dl" }
    ]
  },
  {
    id: "TRNG-013", difficulty: "hard", domain: 4, topic: "Investigator productivity targets vs quality", hy: false,
    q: "To clear a backlog, the head of investigations at Penmore Bank sets each level-1 analyst a target of 45 alerts a day and adds daily closure volume to the team leaderboard and bonus scorecard. Within two months, average handling time falls from 21 to 8 minutes and the backlog disappears. Second-line QA, however, finds its sample failure rate has risen from 4% to 17%, mostly closures with copied rationales, and referrals from analysts to the FIU have halved. Two experienced analysts have resigned. The COO wants to report the backlog clearance to the board as a success. What should the MLRO recommend?",
    options: [
      "Report it as a success, since the backlog has cleared and QA failures should fall as analysts gain experience",
      "Keep the target but have QA review 100% of closures next quarter, so errors are caught before they matter",
      "Replace volume-only targets with balanced measures weighted by QA results, re-review closures at risk and report the quality fall to the board",
      "Drop all productivity measures, since any throughput metric for analysts conflicts with regulatory expectations"
    ],
    answer: [2],
    explanation: "The FCA expects staff who review and investigate alerts to be subject to effective operational control and quality assurance, and warns against changes made simply to improve performance statistics (FCTR 4.3.2). The Wolfsberg Group notes that volume metrics measure quantity, not the usefulness of the work. The incentive is driving the quality fall, so it must change and the closures made under it re-reviewed. Dropping all productivity measures, the runner-up, goes too far: throughput is legitimate when balanced with quality, and 100% QA keeps the bad incentive.",
    source: [
      { label: "FCA Handbook – FCTR 4.3 Transaction monitoring: good and poor practice", url: "https://www.handbook.fca.org.uk/handbook/FCTR/4/3.html" },
      { label: "Wolfsberg Group – Statement on Effective Monitoring for Suspicious Activity, Part I (2024)", url: "https://db.wolfsberg-group.org/assets/e3d83d2f-fad9-46d2-b5a9-3cf4e932f53f/Wolfsberg%20Group%20MSA%20Statement%20Part%20I.pdf" }
    ]
  },
  {
    id: "TRNG-014", difficulty: "hard", domain: 4, topic: "QA disagrees with a no-SAR decision: escalation to the nominated officer", hy: true,
    q: "At Ashgrove Bank, a UK bank, investigator Kofi Mensah closes a case on a customer who received £180,000 from 23 unrelated individuals in five weeks, accepting that the funds are 'deposits for a property syndicate' on the strength of a one-page brochure from the customer. A QA reviewer re-reads the case and concludes there are reasonable grounds to suspect money laundering. Kofi's team leader replies that QA is 'advisory only' and the case is closed. Bank procedures say QA results feed into team scorecards. The case is four weeks old. What should happen NEXT?",
    options: [
      "The case stays closed, because QA findings are advisory and the investigator owns the decision",
      "The QA reviewer files a SAR with the NCA herself, since she now holds the suspicion",
      "The team leader decides, as the most senior person in the investigation line",
      "The concern goes to the nominated officer, who considers all the information and decides on a SAR, with the reasons recorded"
    ],
    answer: [3],
    explanation: "Staff in the regulated sector report suspicions internally to the nominated officer, who must consider all the information available and decide whether a report to the NCA is needed (FCG 3.2.10). The FCA lists a nominated officer who dismisses escalated concerns without documented reasons as poor practice. A team leader cannot close the matter by calling QA 'advisory'. The runner-up, a SAR filed by the reviewer herself, is not the right next step: POCA would let her disclose directly to the NCA, but she meets her duty by reporting to the nominated officer, whose role is to weigh all the information and make one documented decision for the firm.",
    source: [
      { label: "FCA Handbook – FCG 3.2.10 Liaison with law enforcement", url: "https://www.handbook.fca.org.uk/handbook/FCG/3/2.html" },
      { label: "JMLSG Guidance Part I (updated Aug 2025), Chapter 7", url: "https://www.jmlsg.org.uk/wp-content/uploads/2025/09/JMLSG-Guidance-Part-I_June-2023-updated-Aug-2025.pdf" }
    ]
  },
  {
    id: "TRNG-015", difficulty: "hard", domain: 3, topic: "Procedures: version control and accessibility", hy: false,
    q: "In a 2026 review, the second line at Sorrento Bank finds three versions of its EDD procedure on the intranet: a 2022 version with a USD 50,000 trigger for source-of-wealth evidence, a 2024 version with USD 25,000, and a 2025 draft that was never approved. Searching 'EDD' returns all three, and none shows an owner, approval date or effective date. Sampled analysts in two regions applied the 2022 threshold to 31 high-risk files. The procedures team is busy drafting a new policy for crypto-asset customers. What is the BEST long-term fix?",
    options: [
      "Email all staff to delete local copies and use the 2024 version from now on",
      "Keep one controlled, searchable version with owner, approval and effective dates, withdraw superseded versions, and communicate, train and check use",
      "Remove the EDD procedures from the intranet and send them only to team leaders, who brief their analysts",
      "Add a disclaimer to each document telling staff to check with compliance before relying on it"
    ],
    answer: [1],
    explanation: "The DOJ asks whether a company has a defined process for designing and updating policies and procedures, publishes them in a searchable format, confirms employees know how to access them and integrates them through training. The FCA expects up-to-date, readily accessible procedures that staff understand, and checks that they are applied consistently (FCG 2.2.5). The runner-up, an email, is a one-off fix that leaves the uncontrolled versions and the cause in place; the 31 files also need remediation.",
    source: [
      { label: "DOJ Evaluation of Corporate Compliance Programs (Sept 2024) – Policies and Procedures", url: "https://www.justice.gov/criminal/criminal-fraud/page/file/937501/dl" },
      { label: "FCA Handbook – FCG 2.2.5 Policies and procedures", url: "https://www.handbook.fca.org.uk/handbook/FCG/2/2.html" }
    ]
  },
  {
    id: "TRNG-016", difficulty: "hard", domain: 3, topic: "Staff errors vs misconduct: consistent consequence management", hy: false,
    q: "Two QA findings reach the head of financial crime operations at Felton Bank in the same week. First, analyst Grace Liu, in her third month and working a queue that doubled after a system change, closed one alert on structured cash deposits after misreading the date range; it was her first QA failure. Second, senior analyst Mark Doyle closed 60 alerts in two days by pasting the rationale 'activity in line with profile' into each without opening the transaction data, which system logs confirm. Both have clean HR records, and Mark is the team's top performer. Which response is MOST appropriate?",
    options: [
      "Reopen the affected alerts; coach and retrain Grace and review her workload; open a disciplinary process for Mark as for anyone else",
      "Issue a formal written warning to each of them, because treating every QA failure the same way is the only consistent approach",
      "Coach both informally, because a disciplinary process for a top performer like Mark would damage team morale",
      "Open a disciplinary process for Grace, because a missed structuring alert is serious, and coach Mark on documentation"
    ],
    answer: [0],
    explanation: "The DOJ asks whether disciplinary actions are applied fairly and consistently, whether similar misconduct has been treated differently, and whether consequences are commensurate with the violation regardless of the employee's position; it also expects root-cause analysis of failures. An honest error under heavy workload calls for coaching and a workload review, while deliberately closing alerts without review is misconduct, which may also have to be reported to the regulator (JMLSG 7.10). The runner-up confuses consistency with identical treatment: consistent means similar misconduct is treated alike, not that an error and a falsification get the same sanction.",
    source: [
      { label: "DOJ Evaluation of Corporate Compliance Programs (Sept 2024) – Incentives and Disciplinary Measures", url: "https://www.justice.gov/criminal/criminal-fraud/page/file/937501/dl" },
      { label: "JMLSG Guidance Part I (updated Aug 2025), Chapter 7", url: "https://www.jmlsg.org.uk/wp-content/uploads/2025/09/JMLSG-Guidance-Part-I_June-2023-updated-Aug-2025.pdf" }
    ]
  },
  {
    id: "TRNG-017", difficulty: "hard", domain: 3, topic: "UK SM&CR: notifying the FCA of disciplinary action (s.64C FSMA, SUP 15.11)", hy: true,
    changed: "FCA PS26/6 (April 2026): new SUP 15.11 guidance on suspensions and pay adjustments",
    q: "In October 2026, Kestrel Bank, a UK SM&CR banking firm, finds evidence that Owen Pryce, a financial crime team leader who is conduct rules staff but not a senior manager, told analysts to close sanctions alerts on a major client without review. HR suspends him on full pay so the matter can be investigated, and the investigation should take six weeks. The HR director asks whether the suspension must be notified to the FCA under section 64C of FSMA and SUP 15.11. Under the FCA's current guidance, what is the BEST answer?",
    options: [
      "Yes, because section 64C lists suspension as disciplinary action, so every suspension of conduct rules staff must be notified",
      "Not for a suspension to investigate; notify if disciplinary action for a COCON breach follows, and consider earlier notice under Principle 11 if serious",
      "No notification is ever needed, because COCON breaches below senior manager level are only recorded internally",
      "Yes, but only after any internal appeal is exhausted, because notifications are not made while an appeal is pending"
    ],
    answer: [1],
    explanation: "SUP 15.11.6F, added by PS26/6 in April 2026, says suspension used while a firm investigates is not disciplinary action for section 64C, so no notification is due for it; if the firm later takes disciplinary action (a formal written warning, suspension, dismissal or reduction or recovery of pay) for conduct that breaches COCON, it must notify. Under SUP 15.11.6C a firm may still have to notify a suspected serious breach earlier under Principle 11. The runner-up reads the statute without that guidance, and SUP 15.11.9 says an appeal does not delay a notification.",
    source: [
      { label: "FCA Handbook – SUP 15.11 Notification of COCON breaches and disciplinary action", url: "https://www.handbook.fca.org.uk/handbook/SUP/15/11.html" },
      { label: "FCA PS26/6 – Senior Managers & Certification Regime review (April 2026)", url: "https://www.fca.org.uk/publication/policy/ps26-6.pdf" }
    ]
  },
  {
    id: "TRNG-018", difficulty: "hard", domain: 3, topic: "Culture: tone from the middle shown by an employee survey (DOJ ECCP)", hy: false,
    q: "Brightlake Bank's 2026 employee survey asks staff whether they can raise financial crime concerns without harming their careers. Across the bank, 84% agree. In the trade finance unit only 41% agree, and several comments say the unit head 'treats compliance questions as disloyalty'. The unit beat its revenue target by 30%, and the CEO praised its head at the annual town hall. Its hotline reports are close to the bank average, and its last audit rating was 'satisfactory'. What should the chief compliance officer do?",
    options: [
      "Rely on the satisfactory audit rating and average hotline volumes, which outweigh a single survey result",
      "Re-run the survey in the unit next year with clearer questions, as the low score may reflect poor survey design",
      "Investigate the causes with the unit's staff, report the findings to senior management and the board, and hold the unit head accountable",
      "Send all trade finance staff on a whistleblowing refresher course and treat the matter as closed"
    ],
    answer: [2],
    explanation: "The DOJ expects companies to measure their compliance culture, seek input from all levels on whether staff see senior and middle management as committed to compliance, and act on the results. It asks whether managers tolerated more compliance risk in pursuit of revenue and how middle management reinforce standards. The runner-up, more training for staff, treats the people who answered the survey as the problem, when the evidence points at their manager; average hotline numbers and an old audit rating do not cancel the survey signal.",
    source: [
      { label: "DOJ Evaluation of Corporate Compliance Programs (Sept 2024) – Commitment by Senior and Middle Management; Culture of Compliance", url: "https://www.justice.gov/criminal/criminal-fraud/page/file/937501/dl" }
    ]
  },
  {
    id: "TRNG-019", difficulty: "medium", domain: 3, topic: "Employee screening during employment and on a move to a higher-risk role (MLR reg. 21)", hy: false,
    q: "Tamsin Hale joined Corbridge Bank, a UK bank, in 2019 as a mortgage administrator and passed pre-employment checks. In 2026 she applies internally for a role in payments operations, which can release high-value payments and change beneficiary details. Her manager says no new checks are needed because 'she was vetted and has seven years of good service'. The bank's vetting policy screens staff only at hire. What is the BEST approach under the UK Money Laundering Regulations and FCA guidance?",
    options: [
      "No new checks, because the regulations require screening only before an employee is first appointed",
      "Repeat only her criminal record check, because screening under the regulations means checking convictions",
      "Screen her for the new role, covering her skills and her conduct and integrity, and add ongoing screening of staff to the policy",
      "Ask her to sign a declaration that nothing has changed since 2019, which is enough for an internal move"
    ],
    answer: [2],
    explanation: "Regulation 21 of the MLRs 2017 requires screening of relevant employees both before appointment and during the course of the appointment, where appropriate to the firm's size and nature, and defines screening as assessing both the individual's skills, knowledge and expertise and their conduct and integrity. The FCA lists vetting as a one-off exercise as poor practice and expects higher-risk roles to get more thorough vetting (FCG 2.2.6). A criminal record check covers only part of integrity, and a self-declaration is not an assessment.",
    source: [
      { label: "Money Laundering Regulations 2017, regulation 21", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/21" },
      { label: "FCA Handbook – FCG 2.2.6 Staff recruitment, vetting, training", url: "https://www.handbook.fca.org.uk/handbook/FCG/2/2.html" }
    ]
  },
  {
    id: "TRNG-020", difficulty: "medium", domain: 3, topic: "Insider risk: unauthorised access to a confidential investigation file", hy: false,
    q: "Case management logs at Norrland Bank, an EU bank, show that FIU investigator Sara Lind opened the restricted file of a customer under investigation for suspected fraud four times in two weeks, although the case is assigned to a colleague. HR records show that the customer is Sara's landlord. Sara says she was 'just curious' and has told no one. The file contains a draft suspicious transaction report due to be filed this week. All 30 investigators in the team can open every case. What should the AML/CFT compliance officer do?",
    options: [
      "Remove Sara's access to the case, check whether anything was disclosed, treat it as a possible breach, and limit case access to those who need it",
      "Reassign the case to Sara, as her knowledge of the landlord will improve the quality of the report",
      "Take no action, because Sara is an authorised FIU investigator and all investigators may open all cases",
      "Withdraw the draft report, because the risk that the customer has been tipped off makes filing pointless"
    ],
    answer: [0],
    explanation: "The EBA Guidelines (para. 54) require firms to limit access to information on ongoing ML/TF analysis to the persons who need it for their functions and to keep the reporting procedure confidential. Repeated access to a case involving her own landlord is an insider-risk and conflict-of-interest red flag that needs investigation, and the open access model should be fixed. A possible leak is not a reason to withdraw a report that is otherwise justified.",
    source: [
      { label: "EBA/GL/2022/05 Guidelines on the AML/CFT compliance officer, para. 54", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-05%20GLs%20on%20AML%20compliance%20officers/1035126/Guidelines%20on%20AMLCFT%20compliance%20officers.pdf" }
    ]
  },
  {
    id: "TRNG-021", difficulty: "hard", domain: 3, topic: "Risk-based compliance monitoring and testing plan", hy: false,
    q: "Corvane Securities, a UK investment firm, inherited a second-line compliance monitoring plan that tests each of its eight business areas once a year for the same number of days. Its 2026 compliance risk assessment rates two areas high risk: a crypto-linked structured products desk launched in March, and an introducer-led private client business where QA found incomplete source-of-wealth evidence. Three back-office areas are rated low risk and have had no findings for four years. The 2027 plan will have the same resources as 2026. What is the BEST way to build the 2027 plan?",
    options: [
      "Keep equal yearly coverage of every area, since a uniform cycle best shows the regulator that nothing is missed",
      "Test only the two high-risk areas and stop monitoring the low-risk areas until a problem appears there",
      "Let the business heads choose the areas to test, since they know where their own controls are weakest",
      "Set scope and frequency from the risk assessment: more and deeper testing of high-risk areas, lighter or less frequent cover of low-risk ones"
    ],
    answer: [3],
    explanation: "SYSC 6.1.3-B requires the compliance function to base a risk-based monitoring programme on its compliance risk assessment, considering all areas of the business, with priorities set by that assessment. The Federal Reserve's SR 08-8 likewise says the scope and frequency of monitoring and testing should follow the assessed risk. Equal coverage, the runner-up, wastes effort on low-risk areas, while dropping them altogether fails the 'all areas' requirement; business heads cannot set the plan for the function that monitors them.",
    source: [
      { label: "FCA Handbook – SYSC 6.1 Compliance (SYSC 6.1.3-B, 6.1.3-C)", url: "https://www.handbook.fca.org.uk/handbook/SYSC/6/1.html" },
      { label: "Federal Reserve SR 08-8 – Compliance monitoring and testing", url: "https://www.federalreserve.gov/supervisionreg/srletters/sr0808.htm" }
    ]
  },
  {
    id: "TRNG-022", difficulty: "hard", domain: 3, topic: "First-line self-testing vs independent second-line testing", hy: true,
    q: "Each quarter, the 120 branch managers of Dalmore Bank, an EU bank, test ten new customer files from their own branch against a CDD checklist, and for six quarters they have reported a 99% pass rate. To free staff for a backlog, the head of retail proposes that the AML/CFT compliance function stop its own testing of branch CDD and rely on these results. The compliance function's own test last year found missing beneficial ownership evidence in 14% of sampled business files. Which response is BEST?",
    options: [
      "Use the self-testing results to inform the plan, but keep independent second-line testing, including re-checking a sample of files managers passed",
      "Accept the proposal, since first-line self-testing is a control and the high pass rate shows branch CDD is reliable",
      "Stop branch self-testing altogether, since only the second line is allowed to test controls in the business",
      "Have branch managers test each other's branches within each region and stop second-line testing"
    ],
    answer: [0],
    explanation: "Under the EBA Guidelines (para. 44), the AML/CFT compliance officer, as second line, monitors compliance and oversees how business lines apply AML/CFT controls; managers testing their own files are not independent, and the 99% versus 14% gap shows their results cannot simply be relied on. SR 08-8 says testing must confirm that the data and procedures behind monitoring can be relied on. First-line checks remain useful, so stopping them, the runner-up, is wrong, and peer testing by other branch managers is still first line.",
    source: [
      { label: "EBA/GL/2022/05 Guidelines on the AML/CFT compliance officer, para. 44", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-05%20GLs%20on%20AML%20compliance%20officers/1035126/Guidelines%20on%20AMLCFT%20compliance%20officers.pdf" },
      { label: "Federal Reserve SR 08-8 – Compliance monitoring and testing", url: "https://www.federalreserve.gov/supervisionreg/srletters/sr0808.htm" }
    ]
  },
  {
    id: "TRNG-023", difficulty: "hard", domain: 3, topic: "Reviewing why alerts were not escalated (EBA/GL/2022/05 para. 52(g))", hy: false,
    q: "MI at Aurelia Bank, an EU bank, shows that its 'rapid movement of funds' scenario produced 8,400 alerts in the past year. Level-1 analysts closed every one without escalation, while the bank's money mule STRs came almost entirely from customer complaints and police requests. Most closures cite 'customer salary account'. The scenario was tuned 18 months ago, and the vendor says it performs in line with peer banks. The analysts' team leader reports that productivity targets were met all year. Under the EBA Guidelines on AML/CFT compliance officers, what should the compliance officer do?",
    options: [
      "Raise the scenario's threshold, since a scenario that produces no escalations only wastes analyst time",
      "Rely on the vendor's peer comparison and the met productivity targets as evidence the scenario is well handled",
      "Leave the scenario as it is, because STRs from complaints and police requests show the bank detects mules anyway",
      "Review why these alerts were not escalated, comparing closures with the later STR cases, to find issues in analyst practice, training or scenario design"
    ],
    answer: [3],
    explanation: "Paragraph 52(g) of the EBA Guidelines asks the AML/CFT compliance officer to consider regularly why alerts were not escalated as internal reports, to find issues affecting detection. Mule cases that surfaced through complaints and police requests after the scenario fired may show wrong closures. Raising the threshold, the runner-up, would hide the problem without understanding it; vendor benchmarks and productivity targets say nothing about decision quality.",
    source: [
      { label: "EBA/GL/2022/05 Guidelines on the AML/CFT compliance officer, para. 52", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-05%20GLs%20on%20AML%20compliance%20officers/1035126/Guidelines%20on%20AMLCFT%20compliance%20officers.pdf" }
    ]
  },
  {
    id: "TRNG-024", difficulty: "hard", domain: 3, topic: "Branches that never report: finding out why (FCG 3.2.10)", hy: true,
    q: "Fenmoor Bank, a UK bank, has 140 branches. Over 18 months the average branch made six internal suspicion reports to the nominated officer, but three branches in a port town with the bank's highest cash deposit volumes made none. Their staff completed the annual e-learning on time, and the branches meet their sales targets. One branch manager says his team 'does not want to upset good customers'. Transaction monitoring has raised cash alerts on customers of these branches, and some led to SARs. What should the nominated officer do FIRST?",
    options: [
      "Find out why the three branches do not report, through file reviews and staff interviews, and act on any training, management or culture issues",
      "Conclude that the branches have no suspicious activity, since automated monitoring already covers their customers",
      "Set each branch a minimum number of internal reports per quarter to make sure staff engage",
      "Cut the branches' cash deposit limits until their reporting rises to the bank average"
    ],
    answer: [0],
    explanation: "The FCA asks whether staff report suspicions to the nominated officer and, if not, whether the nominated officer takes steps to find out why (FCG 3.2.10). Monitoring supplements but does not replace staff awareness (FCTR 4.3), and the SARs from monitoring alerts on these customers suggest the staff are missing activity. Report quotas, the runner-up, would produce defensive reports of little value, and the manager's comment points to a culture problem that must be addressed.",
    source: [
      { label: "FCA Handbook – FCG 3.2.10 Liaison with law enforcement", url: "https://www.handbook.fca.org.uk/handbook/FCG/3/2.html" },
      { label: "FCA Handbook – FCTR 4.3 Transaction monitoring: good and poor practice", url: "https://www.handbook.fca.org.uk/handbook/FCTR/4/3.html" }
    ]
  },
  {
    id: "TRNG-025", difficulty: "medium", domain: 3, topic: "Training records: overdue training and corrective action (FFIEC)", hy: false,
    q: "An examiner reviewing the BSA/AML training programme of Pine Ridge Bank, a US community bank, finds that 14% of staff are more than 90 days overdue on required training. HR keeps no record of who missed training or what was done about it, and the training slides are overwritten each year. Which practices does the FFIEC BSA/AML Examination Manual expect the bank to adopt? (Choose two.)",
    options: [
      "Delete training records after one year, once the next annual session has been completed",
      "Keep attendance records and records of any failures to complete required training on time, with the corrective actions taken",
      "Record only the completion rate by department, since individual records are not expected",
      "Keep the training and testing materials, if testing is used, and the dates of sessions, available for examiners",
      "Leave overdue staff out of the records if they complete the training before the examination"
    ],
    answer: [1, 3],
    explanation: "The FFIEC manual says banks should document their training programmes and keep training and testing materials (if testing is used) and the dates of sessions available for auditors and examiners. They should also keep attendance records and records of any failures to take required training on time, together with the corrective actions taken. Deleting, aggregating or cleaning up the records defeats that purpose.",
    source: [
      { label: "FFIEC BSA/AML Examination Manual (April 2020) – BSA/AML Training", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" }
    ]
  }
]);
