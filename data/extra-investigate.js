window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "INVS-001", domain: 4, topic: "Source and application of funds: expenditures method (calculation)", hy: false, difficulty: "hard",
    q: "Investigator Hana Whitlock is reviewing Damian Kerr, a nightclub promoter who rents his flat and owns almost nothing, so his net worth barely changed in 2025. He declared income of $48,000. From his bank and card records she lists what he spent or applied in 2025: rent of $72,000, luxury travel of $58,000, jewellery bought for $35,000, car lease payments of $24,000, and $16,000 used to pay down his credit card balance. His known sources are the declared income, a $30,000 personal loan credited to his account, and a fall in his bank balances from $20,000 to $8,000. He has 40,000 social media followers and was once questioned about ticket touting, but neither fact affects the figures. Using the expenditures (source and application of funds) method, how much of his spending is unexplained?",
    options: [
      "$99,000",
      "$145,000",
      "$115,000",
      "$127,000"
    ],
    answer: [2],
    explanation: "The expenditures method suits subjects who spend heavily on consumption and have little net worth. Funds applied are $205,000: $72,000 + $58,000 + $35,000 + $24,000 of spending plus the $16,000 reduction in a liability. Known sources are $90,000: $48,000 income, the $30,000 loan (a non-taxable, non-income source) and the $12,000 drawn from his bank balances. That leaves $115,000 unexplained. $99,000 leaves out the debt repayment, which IRM 9.5.9.6.5 posts as money applied. $145,000 forgets the loan, and $127,000 forgets the fall in bank balances, which is also a source of funds.",
    source: [
      { label: "IRS Internal Revenue Manual 9.5.9.6, Expenditures Method of Proving Income", url: "https://www.irs.gov/irm/part9/irm_09-005-009" },
      { label: "FATF Operational Issues: Financial Investigations Guidance (2012), indirect methods of proof", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/FATF_Guidances/Operational_Issues_Financial_investigations_Guidance.pdf" }
    ]
  },
  {
    id: "INVS-002", domain: 4, topic: "Reconstructing income from bank statements: bank deposits method (calculation)", hy: false, difficulty: "hard",
    q: "Lorna Pruitt owns a nail salon and declared gross receipts of $210,000 for 2025. Her investigator adds up every credit across her three accounts (business, personal and savings) and gets $640,000. The statements show that $150,000 of these credits were transfers between her own three accounts. Another $20,000 were cash deposits of money she had withdrawn from the same accounts earlier in the year, and $45,000 was a car loan paid into her personal account by a finance company. Contractor invoices show she also paid $30,000 in cash for a kitchen renovation, and that cash never passed through any account. The salon is in a busy shopping centre and is open seven days a week. Using the bank deposits method, how much income is unexplained?",
    options: [
      "$245,000",
      "$395,000",
      "$215,000",
      "$265,000"
    ],
    answer: [0],
    explanation: "The bank deposits formula starts with total deposits ($640,000) and adds currency spent outside the accounts ($30,000), giving $670,000 of funds available. It then subtracts non-income items: transfers between accounts ($150,000), re-deposited currency withdrawals ($20,000) and loan proceeds ($45,000). The result is $455,000 of income, so $245,000 more than she declared. $395,000 double-counts the transfers between accounts, which IRM 9.5.9.7.4.12 says must be treated as non-income. $215,000 leaves out the cash spending, and $265,000 treats her re-deposited withdrawals as new income.",
    source: [
      { label: "IRS Internal Revenue Manual 9.5.9.7, Bank Deposits Method of Proving Income", url: "https://www.irs.gov/irm/part9/irm_09-005-009" },
      { label: "FATF Operational Issues: Financial Investigations Guidance (2012), para. 89", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/FATF_Guidances/Operational_Issues_Financial_investigations_Guidance.pdf" }
    ]
  },
  {
    id: "INVS-003", domain: 4, topic: "Indirect methods of proof: steps that avoid evidential gaps", hy: true, difficulty: "medium",
    q: "A financial investigation unit is training analysts to use indirect methods of proof (net worth, sources and applications, and bank deposits) to estimate a suspect's illicit income. According to the FATF's guidance on financial investigations, which steps help address the evidential difficulties of these methods? (Choose three.)",
    options: [
      "Account for every source of funds, including inheritances, loans and transfers between accounts",
      "Treat every cash deposit as illicit income unless the suspect can document a lawful source",
      "Establish a likely source for the unexplained income, such as the predicate offence",
      "Avoid indirect methods whenever direct evidence of specific illicit payments is incomplete",
      "Identify cheques payable to cash and any missing cheques as possible sources of cash deposited, hoarded or spent"
    ],
    answer: [0, 2, 4],
    explanation: "Paragraph 89 of the FATF guidance lists the steps: account for all sources of funds (inheritances, loans, transfers between accounts), address any defence the suspect raises, establish a likely source of the unexplained income, and identify cheques payable to cash and missing cheques, especially in a bank deposits analysis. Treating all cash as illicit ignores non-income sources and invites a cash hoard defence. Indirect methods exist precisely for cases where direct evidence of specific payments is incomplete.",
    source: [
      { label: "FATF Operational Issues: Financial Investigations Guidance (2012), para. 88-89", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/FATF_Guidances/Operational_Issues_Financial_investigations_Guidance.pdf" }
    ]
  },
  {
    id: "INVS-004", domain: 4, topic: "Parallel financial investigations (FATF R.30)", hy: true, difficulty: "medium",
    q: "Detectives in Country M arrest Rafael Ostrander, a cocaine distributor, after a six-month surveillance operation. The drug squad's plan is to secure a conviction for the drug offences first, then pass the file to the asset recovery team, which will start looking at his finances. Ostrander owns two car washes, three flats held by relatives and several bank accounts abroad. Country M's FIU has received four STRs about the car washes in the past year. Which approach BEST reflects the FATF's expectations?",
    options: [
      "Keep the current plan, because a financial investigation should follow a conviction for the predicate offence",
      "Run a parallel financial investigation now, alongside the drug case, to trace and restrain the proceeds before they disappear",
      "Ask the FIU to freeze the car wash accounts at once on the basis of the four STRs, without a criminal investigation",
      "Leave the financial side to the tax authority, because unexplained wealth is mainly a tax matter"
    ],
    answer: [1],
    explanation: "Recommendation 30 expects law enforcement to develop a proactive parallel financial investigation for money laundering, the associated predicate offences and terrorist financing. The FATF guidance explains that investigating the predicate and the money laundering at the same time finds the proceeds for seizure or restraint before they dissipate, and helps identify every participant. Waiting for a conviction gives the subject time to move assets through relatives and foreign accounts. STRs are intelligence that support an investigation; they are not a basis for a freeze on their own. A tax referral can be useful, but it does not replace the financial investigation.",
    source: [
      { label: "FATF Operational Issues: Financial Investigations Guidance (2012), para. 21-25", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/FATF_Guidances/Operational_Issues_Financial_investigations_Guidance.pdf" }
    ]
  },
  {
    id: "INVS-005", domain: 4, topic: "Planning a financial investigation: hypothesis and action plan", hy: false, difficulty: "medium",
    q: "Inspector Yara Lindgren takes over a stalled investigation into a procurement official suspected of taking kickbacks. Her predecessor's team obtained seven years of records from 22 banks for the official and 40 relatives and associates, and two analysts have spent five months loading the data without finding a clear lead. The official recently bought a holiday home abroad, and a whistleblower says payments went through a 'consultancy' run by his cousin. Yara wants to restart the work. According to the FATF financial investigations guidance, what should she do FIRST?",
    options: [
      "Request the same data from every remaining bank in the country so that nothing is missed",
      "Pass the bank data to the prosecutor and ask for a decision on charges based on what has been gathered",
      "Interview the official at once and ask him to explain each of the 22 banking relationships",
      "Set a hypothesis, such as kickbacks paid through the cousin's consultancy, and plan what information is needed and where it is held"
    ],
    answer: [3],
    explanation: "The FATF guidance says financial investigators develop hypotheses and draw conclusions from the information available. The hypothesis decides what information is needed, and the investigator then finds where it is held and builds an action plan to obtain it lawfully. Collecting even more data without a hypothesis repeats the original mistake. Sending an unanalysed file to the prosecutor is premature. Interviewing the suspect before the facts are assembled gives away the investigation's position and loses the chance to test his account against evidence.",
    source: [
      { label: "FATF Operational Issues: Financial Investigations Guidance (2012), para. 49-51", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/FATF_Guidances/Operational_Issues_Financial_investigations_Guidance.pdf" }
    ]
  },
  {
    id: "INVS-006", domain: 4, topic: "Documentary credit file review: connected parties and control of documents", hy: false, difficulty: "hard",
    q: "Trade investigator Omar Castell reviews a USD 2.4 million import letter of credit opened for Varnell Trading, an importer of industrial valves, in favour of Orsk Supply, an exporter in another country. He finds that Orsk's sole director is the brother-in-law of Varnell's owner, and both companies list the same accountant's office as their address. The credit requires an inspection certificate before payment, and the only inspector named in it is a firm owned by Varnell. The invoiced unit price is 6% above a published price index. The credit requires a full set of on-board bills of lading, and the beneficiary's bank is in a FATF member country. Which findings are the MOST significant risk indicators under the Wolfsberg Trade Finance Principles? (Choose two.)",
    options: [
      "The invoiced unit price is 6% above a published price index",
      "The applicant and the beneficiary appear to be connected parties",
      "The credit requires a full set of on-board bills of lading",
      "A document that triggers payment is controlled by the applicant",
      "The beneficiary's bank is located in a FATF member country"
    ],
    answer: [1, 3],
    explanation: "The Wolfsberg risk indicator table for documentary credits lists 'connected applicant and beneficiary' and 'applicant documentation controls payment' as risk indicators. Both are present here, which makes collusive or circular trades possible. The 6% price difference is the runner-up, but the Principles warn that banks are generally not equipped to judge over- or under-invoicing and list only blatant anomalies in value against quantity. A full set of on-board bills of lading is a normal, protective requirement, and a counterparty bank in a FATF member country is not a risk indicator.",
    source: [
      { label: "Wolfsberg/ICC/BAFT Trade Finance Principles (2019), Appendix: risk indicators for DCs", url: "https://db.wolfsberg-group.org/assets/5c770f68-6277-4443-931b-7750478f08e7/Trade%20Finance%20Principles.pdf" }
    ]
  },
  {
    id: "INVS-007", domain: 4, topic: "Checking documentary collection documents for signs of fictitious trade", hy: true, difficulty: "medium",
    q: "Over eight months, Halvard Exports presents 14 documentary collections to its bank for shipments of 'industrial fasteners'. An analyst compares the documents with each other and with open sources. Which findings are data points that the FATF-Egmont report on trade-based money laundering says can help spot fictitious or false invoicing? (Choose three.)",
    options: [
      "Invoices and correspondence use a free personal email address instead of a business email",
      "Several sets of documents are copies of earlier ones with few edits apart from the dates",
      "Some of the documents are in a different language from the one the bank normally uses",
      "Open-source research shows the exporter works from a residential flat although it ships large quantities",
      "The commercial invoices show a harmonised system commodity code for the goods"
    ],
    answer: [0, 1, 3],
    explanation: "The 2020 FATF-Egmont report lists these data points: a personal email address used instead of a legitimate business email, obvious recycling of earlier documents with few or no edits such as the date, and no real trading presence, including residential premises for an exporter shipping large quantities. Documents in other languages are a normal feature of international trade; the report mentions them only because they make checking slower. A commercial invoice is expected to carry the harmonised system code, so its presence is normal.",
    source: [
      { label: "FATF-Egmont Group, Trade-Based Money Laundering: Trends and Developments (2020)", url: "https://eurasiangroup.org/files/uploads/files/other_docs/FATF%20docs/Trade-Based-Money-Laundering-Trends-and-Developments.pdf" }
    ]
  },
  {
    id: "INVS-008", domain: 4, topic: "Ownership of foreign trade counterparties when no public register exists", hy: false, difficulty: "medium",
    q: "Investigator Priya Okonjo suspects that her customer Lantern Imports LLC, a US importer of furniture, and its main supplier, Corrandor Ltd in Country Z, are controlled by the same people. Lantern's payments to Corrandor are 30% above what the customs values suggest. Corrandor has never been a customer of her bank. Country Z has no public register of beneficial ownership, and its company registry shows only a nominee director. Lantern's owner says he has 'no link' to the supplier. What should Priya do BEST?",
    options: [
      "Close the line of enquiry, because the bank cannot verify the ownership of a non-customer in another country",
      "Ask Corrandor directly to send its shareholder register, explaining that a suspicious activity review is under way",
      "Use other sources, such as commercial databases, trade and shipping records and information from the customer, and record the gap as a risk factor",
      "Treat the companies as under common control and close Lantern's account without further review"
    ],
    answer: [2],
    explanation: "The FATF-Egmont TBML report notes that many TBML schemes need a complicit buyer and seller, often under common control, so beneficial ownership information on counterparties can help detect them. It also notes that this information may be unavailable when the counterparty is not a customer, is incorporated abroad or there is no public register. The answer is to work around the gap with other sources and treat it as a risk factor, not to drop the enquiry. Telling the supplier that a suspicious activity review is under way risks tipping off. Assuming common control without evidence is not a sound basis for conclusions.",
    source: [
      { label: "FATF-Egmont Group, Trade-Based Money Laundering: Trends and Developments (2020), challenges for FIs", url: "https://eurasiangroup.org/files/uploads/files/other_docs/FATF%20docs/Trade-Based-Money-Laundering-Trends-and-Developments.pdf" }
    ]
  },
  {
    id: "INVS-009", domain: 4, topic: "Identity document abuse: impersonation vs forgery vs counterfeit", hy: false, difficulty: "hard",
    q: "A man applies at a UK branch to open an account using a passport in the name of Callum Rigby, born in 1968. The passport's paper reacts dully under ultraviolet light, the watermark shows subtle light and dark variations, the photo laminate is intact, and the machine readable zone matches the bio-data page. The issuing authority confirms the passport is valid and has not been reported lost or stolen. However, the man looks about 15 years younger than the date of birth suggests, his ears are clearly a different shape from those in the photo, and he cannot reproduce the signature without looking at it. Which type of document abuse is MOST likely?",
    options: [
      "Impersonation, in which a look-alike presents a genuine document",
      "Forgery, in which a genuine document has had its photograph replaced",
      "Counterfeit, in which the whole document was reproduced from scratch",
      "Pseudo or fantasy document, which has no official recognition"
    ],
    answer: [0],
    explanation: "The Home Office guidance describes impersonation as a look-alike presenting a genuine document. Its checks for this include whether the person can reproduce the signature without seeing the document, whether they look the right age, and a comparison of facial features such as the ears. Forgery is the runner-up, but photo substitution usually leaves damage around the photograph or its protective laminate or stamp, and here the laminate is intact. The security features rule out a counterfeit, and the issuing authority's confirmation rules out a fantasy document.",
    source: [
      { label: "Home Office, Guidance on examining identity documents (2025)", url: "https://www.gov.uk/government/publications/recognising-fraudulent-identity-documents/guidance-on-examining-identity-documents-accessible" }
    ]
  },
  {
    id: "INVS-010", domain: 4, topic: "Examining a suspect document: forged genuine document vs counterfeit", hy: false, difficulty: "hard",
    q: "Fraud investigator Selin Arkwright examines a national identity card that a new customer used six weeks ago. Under ultraviolet light the card material reacts dully, and in transmitted light the watermark shows the expected variations in thickness. However, the ink stamp that overlaps the photograph looks printed rather than applied in wet ink, there is slight damage at the edge of the photo, and the bio-data page does not sit flush with the other pages. The characters in the machine readable zone use a slightly non-standard font. How should Selin BEST classify the document?",
    options: [
      "As a counterfeit, because a non-standard font in the machine readable zone shows that the document was printed from scratch",
      "As a genuine, unaltered document, because the base material and watermark pass both light tests",
      "As a pseudo document, because the issuing country uses a non-standard machine readable zone font",
      "As a forgery, because a genuine document appears to have had its photograph and bio-data page substituted"
    ],
    answer: [3],
    explanation: "The Home Office guidance defines a forgery as a genuine document that has been unlawfully altered, for example by substituting a page or a photograph. It lists a printed ink stamp over the photo, damage around the image and pages that do not sit flush as signs of this. Genuine secure paper and watermark point away from a counterfeit, which is reproduced from scratch. The font is the decoy: the guidance notes that some countries have issued genuine passports with a non-compliant font in the machine readable zone, so it does not prove counterfeiting on its own.",
    source: [
      { label: "Home Office, Guidance on examining identity documents (2025)", url: "https://www.gov.uk/government/publications/recognising-fraudulent-identity-documents/guidance-on-examining-identity-documents-accessible" }
    ]
  },
  {
    id: "INVS-011", domain: 4, topic: "Synthetic identity investigations: what an SSN can and cannot reveal", hy: false, difficulty: "hard",
    q: "Analyst Grace Odum at a US card issuer reviews four applications that a vendor's rule flagged as 'possible synthetic identities' because of the Social Security number. Applicant 1, who lives in Texas, became a US citizen in 2016 and received her SSN that year; its first three digits were historically linked to Ohio. Applicant 2 gives an SSN beginning with 666. Applicant 3, born in 1975, has an SSN whose area number matches the state where he was born, not the state where he now lives. Applicant 4 is 42 and received his first SSN in 2013. Which application is MOST indicative of a fabricated SSN?",
    options: [
      "Applicant 1, because the area number points to a state where she has never lived",
      "Applicant 2, because the area number 666 is never assigned",
      "Applicant 3, because the area number should match his current state of residence",
      "Applicant 4, because adults do not normally receive a first SSN after 2011"
    ],
    answer: [1],
    explanation: "The Social Security Administration has never assigned area numbers 000, 666 or 900-999, so an SSN beginning with 666 cannot be valid. Since SSA introduced randomization on 25 June 2011, the first three digits have no geographic meaning, so applicant 1's 'Ohio' digits are not a red flag. Before 2011 the area number reflected the mailing address on the application, not later residence, so applicant 3's pattern is normal. Adults such as new citizens and immigrants still receive first SSNs, so applicant 4 is not suspicious on this basis alone.",
    source: [
      { label: "SSA, Social Security Number Randomization", url: "https://www.ssa.gov/employer/randomization.html" },
      { label: "SSA, SSN Randomization FAQs", url: "https://www.ssa.gov/employer/randomizationfaqs.html" }
    ]
  },
  {
    id: "INVS-012", domain: 4, topic: "Interviewing a suspected employee: the PEACE model", hy: true, difficulty: "hard",
    q: "A bank's internal investigator, Mark Ellery, will interview Dana Fox, a teller suspected of helping a customer split cash deposits to avoid currency reports. Mark has CCTV footage, deposit slips that Dana processed and messages between Dana and the customer. His draft plan is to open the interview by showing Dana all the footage and messages and asking her to explain them, 'so she cannot invent a story'. HR wants the interview finished within an hour. Following the PEACE model, how should Mark change the plan?",
    options: [
      "Keep the plan, but add a written list of the policy breaches to put to her at the start",
      "Hand Dana the evidence a day early so that she can prepare explanations before the interview",
      "Explain the purpose, get Dana's own account first, then clarify it and challenge it with the evidence",
      "Drop the interview and decide on the outcome from the documents, because an interview might tip off the customer"
    ],
    answer: [2],
    explanation: "The PEACE model runs Plan and prepare, Engage and explain, Account (with clarification and challenge), Closure and Evaluation. The interviewer first explains why they are speaking to the person and asks for their account of events, then tests it against the evidence, so that inconsistencies show when the evidence is put to them. Opening with all the evidence lets the interviewee shape an account around it, and giving it to her a day early is worse. Skipping the interview loses her account entirely. The tipping-off risk is managed by careful planning, not by refusing to interview.",
    source: [
      { label: "Home Office, Interviewing suspects, version 11.0 (July 2025): the PEACE interview model", url: "https://assets.publishing.service.gov.uk/media/686e23d181dd8f70f5de3cbf/Interviewing_suspects.pdf" }
    ]
  },
  {
    id: "INVS-013", domain: 4, topic: "Privilege and cooperation credit in a DOJ investigation (JM 9-28.720)", hy: true, difficulty: "hard",
    q: "Westlake Bank's outside counsel has interviewed 30 employees about how a branch helped a customer evade currency reporting. The interview memos are privileged. The Justice Department has opened an investigation, and the bank wants cooperation credit. Its general counsel thinks the bank faces a choice: either waive privilege and hand over all 30 memos, or keep the memos and the facts in them confidential and accept that it will get no credit. The board also wants to know whether it may keep paying the legal fees of two employees under investigation. Under the Justice Manual, which statement is MOST accurate?",
    options: [
      "Credit depends on timely disclosure of the relevant facts, including about the individuals involved, not on waiving privilege",
      "Credit requires waiving privilege over the memos, because prosecutors must test how counsel gathered the facts",
      "Facts learned in privileged interviews are privileged too, so the bank can keep them back and still receive full credit",
      "Paying the two employees' legal fees disqualifies the bank from cooperation credit"
    ],
    answer: [0],
    explanation: "JM 9-28.720 says eligibility for cooperation credit does not depend on waiving attorney-client privilege or work product protection. What counts is timely disclosure of the relevant facts, including facts about the individuals involved, and a company that does not disclose them gets no credit. The general counsel's choice is false, because the bank can disclose the facts without the memos. Privilege protects communications, not the underlying facts. JM 9-28.730 tells prosecutors not to weigh whether a company advances employees' legal fees.",
    source: [
      { label: "Justice Manual 9-28.720 and 9-28.730, Principles of Federal Prosecution of Business Organizations", url: "https://www.justice.gov/jm/jm-9-28000-principles-federal-prosecution-business-organizations" }
    ]
  },
  {
    id: "INVS-014", domain: 4, topic: "Legal holds and messaging apps in internal investigations (DOJ ECCP)", hy: false, difficulty: "hard",
    q: "Harbour Point Securities opens an internal investigation into three salespeople suspected of arranging mirror trades for a client. The legal team sends a legal hold that covers corporate email and recorded phone lines. Colleagues say the three often switched client discussions to an encrypted messaging app with disappearing messages on their personal phones. The firm's policy allows personal phones for work but says nothing about messaging apps, and it has never checked compliance. The head of legal says personal phones are 'outside our control' and proposes to rely on email. Which response BEST reflects the DOJ's Evaluation of Corporate Compliance Programs?",
    options: [
      "Rely on corporate email, because the DOJ does not consider personal devices or messaging apps when it assesses an internal investigation",
      "Ask the three salespeople to delete the app so that no further business is conducted on it",
      "Wait for the DOJ to request the messages, because preserving them early could look like an admission",
      "Extend the hold to work messages on personal phones and apps, collect them, and close the policy gap"
    ],
    answer: [3],
    explanation: "The September 2024 ECCP tells prosecutors to consider a company's policies on personal devices, communication platforms and messaging apps, including ephemeral messaging. Business communications should be accessible and preserved as far as possible, and the policy should be enforced in practice. Prosecutors also ask whether these apps have impaired the company's ability to investigate. Relying on email ignores where the conduct happened, and telling staff to delete the app before collection could destroy evidence. Delaying preservation risks losing evidence and weakens any later claim of cooperation.",
    source: [
      { label: "DOJ Criminal Division, Evaluation of Corporate Compliance Programs (updated Sept 2024)", url: "https://www.justice.gov/criminal/criminal-fraud/page/file/937501/dl?inline" }
    ]
  },
  {
    id: "INVS-015", domain: 4, topic: "Internal investigations: independence, documentation and root cause", hy: false, difficulty: "medium",
    q: "A hotline report alleges that Victor Hale, a branch manager at Ridgemont Bank, has been closing his own branch's AML alerts on a large cash-intensive customer. The case goes to Victor's regional director, whose bonus depends on the region's deposit growth. Two weeks later she closes it with a one-line note, 'training issue, manager reminded of procedure'. No interviews are recorded, and nobody asks why the alert-closing rights allowed a branch manager to close alerts. What is the MOST important weakness, using the DOJ's Evaluation of Corporate Compliance Programs as the benchmark?",
    options: [
      "The investigation took two weeks, which is longer than a hotline matter should take",
      "The investigation was not independent or properly documented and did not look for the root cause",
      "The hotline report should have been rejected because it was not signed by the reporter",
      "The regional director should have closed the customer's account before starting the review"
    ],
    answer: [1],
    explanation: "The ECCP asks whether investigations are properly scoped, independent, objective, appropriately conducted and properly documented, and whether they are used to find root causes, system weaknesses and accountability gaps, including among supervisors. Here the investigator had a conflict of interest, kept no record of interviews and ignored the control failure that let a branch manager close alerts. Two weeks is not the problem, and anonymous hotline reports should be investigated, not rejected. Closing the account first would skip the investigation the case needed.",
    source: [
      { label: "DOJ Criminal Division, Evaluation of Corporate Compliance Programs (updated Sept 2024)", url: "https://www.justice.gov/criminal/criminal-fraud/page/file/937501/dl?inline" }
    ]
  },
  {
    id: "INVS-016", domain: 4, topic: "Internal interviews during an SFO investigation (UK)", hy: true, difficulty: "hard",
    q: "Calder & Moss, a UK trade finance bank, self-reported suspected bribery by two employees in its Middle East desk to the Serious Fraud Office in May 2026. The SFO has opened an investigation and the bank wants to be invited to negotiate a deferred prosecution agreement. The bank's investigations team has booked interviews with the two employees for tomorrow, saying their memories are freshest now. The bank has preserved their emails and suspended their trading access. It also plans to keep legal privilege over the interview notes. Under the SFO's April 2025 corporate guidance, what should the bank do BEST?",
    options: [
      "Hold the interviews tomorrow as planned and send the SFO a summary afterwards",
      "Cancel all internal work and wait for the SFO to complete its investigation",
      "Tell the SFO about the planned interviews in advance and not take steps that could prejudice its investigation",
      "Hold the interviews but waive privilege over the notes, which removes any concern about prejudice"
    ],
    answer: [2],
    explanation: "The SFO's 2025 guidance says that a co-operating company should engage early on the scope of its internal investigation and inform the SFO in advance of proposed steps. It should not take any step that might prejudice the SFO's investigation, which the guidance says is particularly relevant to internal interviews. Interviewing first and reporting afterwards, the runner-up, is exactly what the guidance warns against. Halting all work is not required, since the SFO expects updates and facts from the bank's own investigation. Waiving privilege is a significant co-operative act, but it does not cure an interview that prejudiced the investigation.",
    source: [
      { label: "SFO Corporate Guidance (published 24 April 2025)", url: "https://www.gov.uk/government/publications/sfo-corporate-guidance/sfo-corporate-guidance" }
    ]
  },
  {
    id: "INVS-017", domain: 4, topic: "Self-reporting to the SFO: SAR vs self-report and timing", hy: false, difficulty: "hard",
    q: "An internal audit at Ashgrove Bank, a UK bank, finds emails in which a senior relationship manager agrees to pay a foreign official to win a mandate for the bank. The MLRO has submitted a SAR to the National Crime Agency. The general counsel proposes to treat the SAR as the bank's self-report and to spend six months on a full investigation before approaching the Serious Fraud Office, so that the bank can 'present a complete picture'. The bank also wants to keep legal privilege over its lawyers' advice. Under the SFO's April 2025 corporate guidance, which statement is MOST accurate?",
    options: [
      "The SAR is not a self-report to the SFO, and with direct evidence the SFO expects a report soon, before any full investigation",
      "The SAR counts as a self-report because the NCA shares SARs with the SFO, so the six-month plan is acceptable",
      "The bank should wait until its investigation is complete, because the SFO expects a full investigation before any self-report",
      "The bank will be refused a deferred prosecution agreement unless it waives privilege over its lawyers' advice"
    ],
    answer: [0],
    explanation: "The SFO guidance says that reporting through a SAR or to another agency is not a self-report to the SFO unless the SFO is also told at the same time or immediately afterwards. It does not expect a company to fully investigate before self-reporting, and where there is direct evidence of offending it expects a report soon after the company learns of it. Waiting six months, the runner-up, puts the self-report credit at risk. A valid claim of privilege will not be penalised, although waiver is seen as a significant co-operative act.",
    source: [
      { label: "SFO Corporate Guidance (published 24 April 2025)", url: "https://www.gov.uk/government/publications/sfo-corporate-guidance/sfo-corporate-guidance" }
    ]
  },
  {
    id: "INVS-018", domain: 4, topic: "Designing a SAR lookback (lessons from the TD Bank consent order)", hy: true, difficulty: "hard",
    q: "After a regulatory finding, Northgate Bank must carry out a SAR lookback covering 2021-2025. During those years its monitoring system did not cover remote deposit capture or most ACH flows, and three scenarios were 'paused' for 18 months during a system migration. The project lead proposes reviewing only the 62,000 alerts that analysts closed in the period, because 'those are the cases we already know about'. The bank has also hired a new head of financial crime, and its P2P volumes tripled in the same period. Based on the lookback FinCEN required of TD Bank in 2024, what is the BEST scope?",
    options: [
      "Only the closed alerts, because a lookback re-tests past decisions rather than activity that never alerted",
      "Only the alerts closed by analysts who have since left the bank, because their work cannot be checked any other way",
      "Only transactions above $1 million, because large transactions carry the highest risk",
      "Closed alerts plus activity that never alerted because of coverage gaps, such as RDC, ACH, paused scenarios and P2P"
    ],
    answer: [3],
    explanation: "FinCEN's 2024 consent order required TD Bank's independent SAR lookback to include transactions that did not generate alerts because of gaps in automated monitoring, such as ACH and RDC, scenarios never implemented or left paused, P2P payments such as Zelle, and transactions involving high-risk jurisdictions and funnel-account patterns. The scope and methodology go to the regulator for review, and the regulator can expand the period. Reviewing only closed alerts misses the activity the control failures hid. A cut-off by value or by analyst ignores where the gaps were.",
    source: [
      { label: "FinCEN Consent Order, TD Bank N.A. (Oct 2024), Section B: SAR Lookback Undertaking", url: "https://www.fincen.gov/system/files/enforcement_action/2024-10-10/FinCEN-TD-Bank-Consent-Order-508FINAL.pdf" }
    ]
  },
  {
    id: "INVS-019", domain: 4, topic: "Statistical sampling in a large-scale review: sample size and random selection (calculation)", hy: true, difficulty: "hard",
    q: "During a remediation programme, contractors at Marlow Bank closed 48,000 alerts. The quality assurance team must show with 95% confidence that fewer than 5% of the closures are wrong, and it expects to find no errors in the sample. It uses the OCC's statistical sampling approach, based on a binomial model that ignores population size. A senior analyst offers to pick the alerts himself, choosing those he considers riskiest, to 'make the test tougher'. Another manager suggests testing 5% of the population. Which approach meets the OCC methodology?",
    options: [
      "Test 2,400 alerts (5% of the population), chosen by the senior analyst",
      "Test 59 alerts selected at random from the 48,000",
      "Test the 59 alerts that the senior analyst considers riskiest",
      "Test 299 alerts selected at random, because the population is larger than 10,000"
    ],
    answer: [1],
    explanation: "In the OCC's Sampling Methodologies booklet, the sample size depends only on the confidence level and the tolerance rate (with an expected exception rate of zero), not on population size. At 95% confidence and a 5% tolerance rate the table gives 59. Items must be chosen at random: picking them judgmentally, as the senior analyst proposes, turns the test into judgmental sampling and invalidates any inference about the population. 299 is the size for a 1% tolerance rate, and a sample sized as a percentage of the population is not how the methodology works.",
    source: [
      { label: "OCC Comptroller's Handbook, Sampling Methodologies (2020), Table 1 and random selection", url: "https://www.occ.gov/publications-and-resources/publications/comptrollers-handbook/files/sampling-methodologies/pub-ch-sampling-methodologies.pdf" }
    ]
  },
  {
    id: "INVS-020", domain: 4, topic: "Evaluating sample results: exceptions found in a statistical sample", hy: false, difficulty: "hard",
    q: "Marlow Bank's QA team tests a random sample of 59 of the 48,000 contractor-closed alerts, sized for 95% confidence and a 5% tolerance rate with no expected exceptions. Two alerts were closed wrongly: both missed obvious funnel-account activity. The programme director wants to report to the regulator that 'the error rate is 3.4%, below the 5% tolerance, so the population is acceptable'. What is the MOST appropriate conclusion?",
    options: [
      "The population error rate is 3.4%, so the closures can be accepted as below tolerance",
      "The two exceptions should be removed as outliers and replaced with two more randomly selected alerts",
      "The bank cannot conclude the rate is below 5%; it could be higher, up to the upper confidence bound",
      "The sample proves the error rate is above 5%, so all 48,000 alerts must be re-reviewed"
    ],
    answer: [2],
    explanation: "The OCC booklet's sample sizes assume zero exceptions. With zero exceptions, examiners can conclude at the chosen confidence level that the population rate is below the tolerance rate. When one or more exceptions are found, the population rate could be above the tolerance rate, up to the upper confidence bound in the booklet's appendix tables. Reporting 3.4% as the population rate, the runner-up, overstates what the sample shows. Removing exceptions breaks random sampling. The sample does not prove the rate is above 5% either, although further review, such as a wider sample, may well be warranted.",
    source: [
      { label: "OCC Comptroller's Handbook, Sampling Methodologies (2020), evaluating statistical samples", url: "https://www.occ.gov/publications-and-resources/publications/comptrollers-handbook/files/sampling-methodologies/pub-ch-sampling-methodologies.pdf" }
    ]
  },
  {
    id: "INVS-021", domain: 4, topic: "Responding to an OFAC demand for information (31 CFR 501.602)", hy: false, difficulty: "medium",
    q: "Bayfront Bank receives a letter from OFAC under 31 CFR 501.602 asking for complete information, under oath, on a corporate customer's payments to a shipping company over two years. The letter also asks for supporting documents, including relationship managers' instant messages with the customer. None of the payments were blocked or made under a licence. The bank's counsel suggests answering only if OFAC gets a court subpoena, and leaving out the instant messages because they are 'informal'. What should the bank do?",
    options: [
      "Provide the complete information under oath, including the instant messages, in a format agreed with OFAC",
      "Respond only after OFAC obtains a court-issued subpoena, because the letter is a voluntary request",
      "Provide only information about blocked or licensed transactions, because those are all that section 501.602 covers",
      "Send the information without the instant messages, because informal messages are not documents"
    ],
    answer: [0],
    explanation: "Section 501.602 requires every person to give OFAC complete information under oath, at any time OFAC requires it, on any transaction subject to its regulations, whether or not it was licensed. OFAC can require books, papers and electronic documents. The definition of 'document' expressly includes text and instant messages, emails and metadata, and documents must be produced in a usable format agreed with OFAC. No court subpoena is needed, and the duty is not limited to blocked or licensed transactions.",
    source: [
      { label: "31 CFR 501.602, Reports to be furnished on demand", url: "https://www.ecfr.gov/current/title-31/section-501.602" }
    ]
  },
  {
    id: "INVS-022", domain: 4, topic: "Handing crypto tracing results to law enforcement: what to report", hy: true, difficulty: "medium",
    q: "A US virtual currency exchange has traced ransomware proceeds through a customer's account and is preparing a SAR. Its investigator wants the SAR to contain the information that FinCEN's virtual currency advisory describes as particularly helpful to law enforcement. Which items should she include? (Choose three.)",
    options: [
      "The customer's private keys, obtained from the customer's own hardware wallet",
      "Wallet addresses and transaction hashes for the relevant transfers",
      "Login information, including IP addresses, and mobile device information such as the IMEI",
      "The exchange's internal alert-tuning thresholds for its blockchain analytics tool",
      "Information from analysis of the customer's public online profile and communications"
    ],
    answer: [1, 2, 4],
    explanation: "FinCEN's 2019 virtual currency advisory lists the information most useful to law enforcement: wallet addresses, account information, transaction details including the transaction hash, relevant transaction history, login information including IP addresses, mobile device information such as the IMEI, and analysis of the customer's public online profile and communications. It asks filers to give all pertinent information in the SAR form and narrative. An exchange does not hold a customer's self-custody private keys and should not try to obtain them. Its internal tuning thresholds tell investigators nothing about the subject.",
    source: [
      { label: "FinCEN Advisory FIN-2019-A003, Illicit Activity Involving Convertible Virtual Currency", url: "https://www.fincen.gov/sites/default/files/advisory/2019-05-10/FinCEN%20Advisory%20CVC%20FINAL%20508.pdf" }
    ]
  },
  {
    id: "INVS-023", domain: 4, topic: "Systemic findings in a judgmental sample: stopping early and look-backs", hy: false, difficulty: "medium",
    q: "In a targeted review of Fairmont Bank's high-risk customers, the reviewer picks 40 files judgmentally, focusing on recently onboarded money services businesses. In the first 12 files, 9 have no enhanced due diligence at all, for the same reason: an onboarding workflow change in March skipped the EDD step for this customer type. Management confirms the facts and the cause. The reviewer's manager wants all 40 files finished 'to complete the sample' and then plans to report a 75% failure rate for all high-risk customers. Based on the OCC's sampling guidance, what is the BEST next step?",
    options: [
      "Finish all 40 files and report the 75% failure rate for the whole high-risk population",
      "Discard the 12 files reviewed so far and draw a new statistical sample to avoid bias",
      "Report no conclusion until a full statistical sample of 299 files has been tested",
      "Stop the sample, record the rationale, report the systemic cause, and consider a look-back"
    ],
    answer: [3],
    explanation: "The OCC booklet says that when a judgmental sample shows potentially systemic weaknesses early and management confirms them, the review may stop and conclude on the facts gathered. The decision and its rationale should be documented, and the reviewer should consider whether the bank needs a look-back where there is significant risk. Judgmental results cannot be extrapolated statistically, so reporting a 75% failure rate for all high-risk customers is not valid. Discarding confirmed findings, or waiting for a large statistical sample, delays fixing a known, confirmed gap.",
    source: [
      { label: "OCC Comptroller's Handbook, Sampling Methodologies (2020), judgmental sampling", url: "https://www.occ.gov/publications-and-resources/publications/comptrollers-handbook/files/sampling-methodologies/pub-ch-sampling-methodologies.pdf" }
    ]
  },
  {
    id: "INVS-024", domain: 4, topic: "Supporting conclusions in an investigation report: cash deposits and the cash hoard defence", hy: false, difficulty: "hard",
    q: "Investigator Leon Marsh's draft report on Tobias Wren, a used-car trader, says that all $180,000 of unidentified cash deposits over two years are 'proceeds of crime'. In an early informal conversation, Wren said the cash came from savings he kept at home from an inheritance in 2015. The report does not mention this, and Leon has not looked into Wren's finances before the review period. Records show Wren took out two high-interest payday loans in 2022, the year before the deposits started. His business also has documented card sales of $400,000 a year. What should the report do BEST before reaching its conclusion?",
    options: [
      "Leave the conclusion unchanged, because the subject bears the burden of proving where cash came from",
      "Test the cash hoard claim against evidence of his cash at the start, such as the 2022 payday loans",
      "Delete the cash deposits from the analysis, because their source can never be established",
      "Replace the conclusion with a statement that the inheritance explains the cash, because he offered it first"
    ],
    answer: [1],
    explanation: "The IRS methods-of-proof manual warns that currency deposits invite the claim that they came from a cash hoard. If that claim cannot be refuted, the cash must be treated as non-income, but it can often be refuted by firmly establishing the cash on hand at the starting point. Taking high-cost loans just before the deposits is evidence against a large hoard. The FATF guidance likewise says any reasonable defence must be investigated. Ignoring the explanation, the runner-up, leaves the conclusion open to attack. Dropping the deposits, or simply accepting the story, skips the analysis the report needs.",
    source: [
      { label: "IRS Internal Revenue Manual 9.5.9.7.4.1.2 (Currency Deposits) and 9.5.9.7.4.1.3 (Starting Point)", url: "https://www.irs.gov/irm/part9/irm_09-005-009" },
      { label: "FATF Operational Issues: Financial Investigations Guidance (2012), para. 89", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/FATF_Guidances/Operational_Issues_Financial_investigations_Guidance.pdf" }
    ]
  },
  {
    id: "INVS-025", domain: 4, topic: "Escalation vs closure: a wallet address shared by two customers", hy: false, difficulty: "hard",
    q: "Analyst Kai Brenner at a US crypto exchange reviews an alert on customer Ines Duarte, a 29-year-old designer. Over three weeks she received $86,000 of bitcoin, all from a large, regulated exchange, and converted it to dollars that she withdrew to her bank account. Kai drafts a closure note: 'source is a regulated exchange, customer verified, low risk'. Before he closes it, the analytics tool shows that the deposit address she gave for incoming transfers is also registered to the account of a different customer, Marco Bell, who lives in another state. Ines changed her email address and phone number twice last month. What should Kai do?",
    options: [
      "Close the alert, because funds from a regulated exchange are already subject to that exchange's AML controls",
      "Close the alert and add a note to review the account again if deposits exceed $100,000",
      "Escalate for investigation, because the shared wallet address and contact changes are FinCEN red flags",
      "Freeze both accounts and report them to OFAC, because a shared wallet address indicates sanctions evasion"
    ],
    answer: [2],
    explanation: "FinCEN's 2019 virtual currency advisory lists as red flags a wallet address shared between accounts belonging to two different customers, and multiple changes to an account's email or contact details, which may indicate account takeover. Unusually high deposits converted to fiat with an unclear source may also indicate theft. Together these facts call for escalation, not closure. A regulated source exchange does not explain who controls the address. Nothing suggests a sanctioned person, so an OFAC report would be the wrong route.",
    source: [
      { label: "FinCEN Advisory FIN-2019-A003, Illicit Activity Involving Convertible Virtual Currency, red flags", url: "https://www.fincen.gov/sites/default/files/advisory/2019-05-10/FinCEN%20Advisory%20CVC%20FINAL%20508.pdf" }
    ]
  }
]);
