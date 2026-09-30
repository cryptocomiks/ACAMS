window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    "id": "INV-001",
    "domain": 4,
    "topic": "Generative AI governance (SR 26-2 scope)",
    "hy": false,
    "difficulty": "hard",
    "changed": "SR 26-2 replaced SR 11-7 and SR 21-8, Apr 2026",
    "q": "In mid-2026 a US bank with $80 billion in assets pilots a large language model tool that drafts SAR narratives from investigators' case notes. Investigators edit each draft before a BSA officer approves the filing. The model risk team says the tool must go through full validation under the April 2026 interagency model risk guidance (SR 26-2), like the bank's credit scoring models. The head of investigations says no special governance is needed because a human signs off every SAR. The vendor hosts the tool in the cloud, and the pilot covers only fraud cases. Which view BEST reflects SR 26-2?",
    "options": [
      "SR 26-2 applies in full, so the tool needs conceptual-soundness review and outcomes analysis before any further use",
      "No governance is needed, because human review of each draft removes any risk that the tool could create",
      "Generative AI is outside SR 26-2's scope, so the bank's own risk governance should set controls for the tool",
      "SR 26-2 prohibits generative AI in BSA/AML work until the agencies issue separate guidance on its use"
    ],
    "answer": [
      2
    ],
    "explanation": "Footnote 3 of SR 26-2 says generative and agentic AI models are novel and rapidly evolving and so are not within the guidance's scope. It adds that the bank's own risk management and governance practices should guide the controls for tools it does not cover. The model risk team's view is the runner-up, but it applies the guidance to a type of AI the guidance expressly excludes. Human sign-off is one useful control, not a reason to skip governance, and SR 26-2 contains no prohibition on generative AI.",
    "source": [
      {
        "label": "SR 26-2 attachment: Supervisory Guidance on Model Risk Management (Apr 2026)",
        "url": "https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf"
      }
    ]
  },
  {
    "id": "INV-002",
    "domain": 4,
    "topic": "Rules-based scenarios and the SR 26-2 model definition",
    "hy": true,
    "difficulty": "hard",
    "changed": "SR 26-2 replaced SR 11-7 and SR 21-8, Apr 2026",
    "q": "A $45 billion US bank runs a transaction monitoring engine made up of fixed-threshold rules, such as 'cash deposits over $8,000 in 5 days'. The thresholds were chosen by expert judgment, with no statistical method behind them. Since 2021 the bank has run the engine through full model validation because the 2021 interagency statement on BSA/AML model risk (SR 21-8) was often read that way. After SR 26-2 was issued in April 2026, the CFO proposes dropping all testing of the rules to save money. Which statement is MOST accurate?",
    "options": [
      "Rules with no statistical theory behind them are not models under SR 26-2, but still need testing as AML controls",
      "The engine is still a model under SR 26-2, because SR 21-8 remains in force for BSA/AML systems alongside the new guidance",
      "The engine is a model only if a vendor supplied it, so a system the bank built in-house needs no testing of any kind",
      "Because the rules are not models, the bank can drop all testing, since the BSA does not require the monitoring system to be tested"
    ],
    "answer": [
      0
    ],
    "explanation": "SR 26-2 superseded both SR 11-7 and SR 21-8. Its definition of 'model' excludes deterministic rule-based processes that have no statistical, economic or financial theory behind them, so a fixed-threshold rules engine need not be treated as a model. The CFO's proposal is the runner-up but goes too far: the rules are still part of the AML program's system of internal controls, which 31 CFR 1020.210 requires together with independent testing. Whether a vendor supplied the system does not decide whether it is a model.",
    "source": [
      {
        "label": "SR 26-2 cover letter (supersedes SR 11-7 and SR 21-8)",
        "url": "https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm"
      },
      {
        "label": "SR 26-2 attachment: definition of model",
        "url": "https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf"
      }
    ]
  },
  {
    "id": "INV-003",
    "domain": 4,
    "topic": "Using a model before validation (SR 26-2)",
    "hy": false,
    "difficulty": "hard",
    "changed": "SR 26-2 replaced SR 11-7, Apr 2026",
    "q": "A bank's machine-learning model for detecting money mule accounts is ready, but independent validation will not finish for three months. Meanwhile, mule activity tied to a new scam has tripled, and the bank's current rules miss most of it. The business asks to switch the model on now. Under SR 26-2, what is the MOST appropriate approach?",
    "options": [
      "Keep the model off until validation is complete, because the guidance does not allow any model to be used before it has been validated",
      "Use the model now as the sole detection method, and let validation assess its performance later using production data",
      "Use the model only if the vendor certifies that it has already been validated for other banks with similar customers",
      "Use the model, but tell stakeholders its limits and add controls such as use limits or closer monitoring"
    ],
    "answer": [
      3
    ],
    "explanation": "SR 26-2 says validation generally occurs before first use, but circumstances such as an urgent business need may justify using a model before validation is complete. In that case, sound practice is to pay more attention to the model's limits, inform relevant stakeholders and set controls, for example limits on use or closer monitoring of performance. Waiting for validation is the runner-up, but the guidance does not require it. Using the model as the only control with no compensating measures, or relying on a vendor's generic certification, does not meet the guidance.",
    "source": [
      {
        "label": "SR 26-2 attachment, Section V: Model Validation and Monitoring",
        "url": "https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf"
      }
    ]
  },
  {
    "id": "INV-004",
    "domain": 3,
    "topic": "SR 26-2: applicability and governance roles",
    "hy": false,
    "difficulty": "medium",
    "changed": "SR 26-2 replaced SR 11-7 and SR 21-8, Apr 2026",
    "q": "A new chief risk officer is briefing the board on the interagency Revised Guidance on Model Risk Management issued in April 2026 (SR 26-2). Which statement is accurate?",
    "options": [
      "It is an enforceable regulation, and not following it leads directly to supervisory criticism",
      "It expects internal audit to assess model risk management, not to repeat validation itself",
      "It applies with the same rigor to every bank, whatever its size or reliance on models",
      "It requires every model, however immaterial, to be fully validated at least once a year"
    ],
    "answer": [
      1
    ],
    "explanation": "SR 26-2 says internal audit generally does not duplicate model risk management activities such as development or validation. Its role is to evaluate whether those practices are rigorous and effective and whether policies are followed. The guidance says it sets no enforceable standards and that not following it will not by itself lead to supervisory criticism. It is expected to be most relevant to banks with over $30 billion in assets and allows immaterial models to be handled mainly by identification and monitoring. It sets no fixed annual validation cycle.",
    "source": [
      {
        "label": "SR 26-2 attachment (scope, materiality, roles and responsibilities)",
        "url": "https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf"
      },
      {
        "label": "SR 26-2 cover letter",
        "url": "https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm"
      }
    ]
  },
  {
    "id": "INV-005",
    "domain": 4,
    "topic": "Blockchain sanctions exposure: look-back after new SDN addresses",
    "hy": false,
    "difficulty": "medium",
    "q": "OFAC designates a darknet vendor and lists 12 of its bitcoin addresses in the SDN entry. A US virtual currency exchange's blockchain analytics shows that some of its customers transacted with two of those addresses before the designation. It also shows an unlisted address that the analytics provider places in the same wallet cluster as the listed addresses. Under OFAC's sanctions compliance guidance for the virtual currency industry, which actions are appropriate? (Choose two.)",
    "options": [
      "Update screening at once so that transactions involving the listed addresses are identified and blocked from now on",
      "Take no action on the unlisted address, because only addresses that appear on the SDN List can carry any sanctions risk",
      "File blocked property reports on all pre-designation deposits, because OFAC designations apply retroactively",
      "Run a historic look-back for past activity with the listed addresses and with unlisted addresses linked to them, such as the same-wallet address",
      "Stop using blockchain analytics and rely only on name screening of customers against the SDN List"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "OFAC's guidance says virtual currency companies should use tools that identify and block transactions associated with listed addresses. It also suggests a historic look-back after an address is listed, to find connections to it. It adds that unlisted addresses sharing a wallet with a listed address, or that have transacted with one, may also pose sanctions risk. The guidance presents the look-back as a way to find connections and understand exposure, not as a duty to file blocking reports on deposits made before the designation. OFAC encourages blockchain analytics, not only name screening.",
    "source": [
      {
        "label": "OFAC, Sanctions Compliance Guidance for the Virtual Currency Industry (Oct 2021)",
        "url": "https://ofac.treasury.gov/media/913571/download?inline"
      }
    ]
  },
  {
    "id": "INV-006",
    "domain": 4,
    "topic": "Blockchain tracing: poison, haircut and FIFO taint",
    "hy": false,
    "difficulty": "hard",
    "q": "A wallet first receives 3 BTC stolen in an exchange hack. It then receives 7 BTC of freshly mined, clean coins. Later it sends a single 2 BTC payment to an exchange. An investigator compares how three taint-analysis methods would treat that 2 BTC payment. Which statements are correct? (Choose two.)",
    "options": [
      "Under the poison method, only about 0.6 BTC of the payment is treated as stolen",
      "Under the haircut method, the payment is treated as 30% tainted, or about 0.6 BTC of stolen value",
      "Under the FIFO method, the payment is treated as 30% tainted, like the haircut method",
      "All three methods give the same result, because the wallet holds the same 10 BTC under each",
      "Under the FIFO method, the payment consists entirely of stolen coins, and 1 stolen BTC is left in the wallet"
    ],
    "answer": [
      1,
      4
    ],
    "explanation": "Under poison tainting, every output from a wallet with any stolen input is treated as 100% stolen, so the whole 2 BTC is tainted. Haircut assigns taint in proportion to the inputs: 3 of 10 BTC means 30%, or 0.6 BTC of the payment. FIFO, based on the English rule in Clayton's case, treats the first coins in as the first coins out. The 2 BTC therefore comes from the 3 stolen BTC and leaves 1 stolen BTC behind. The methods give very different results, which is why investigators must state which one they use.",
    "source": [
      {
        "label": "Anderson et al., 'Tendrils of Crime: Visualizing the Diffusion of Stolen Bitcoins' (arXiv preprint, not an official source)",
        "url": "https://arxiv.org/pdf/1901.01769"
      }
    ]
  },
  {
    "id": "INV-007",
    "domain": 4,
    "topic": "Cross-chain tracing of hacked funds (Bybit / TraderTraitor)",
    "hy": false,
    "difficulty": "hard",
    "q": "In March 2025, a US exchange registered as an MSB receives a $180,000 bitcoin deposit to a customer's account. Its analytics show that the coins came through a cross-chain bridge. On the Ethereum side, the funds had passed through two addresses that the FBI listed in its February 2025 public service announcement on the Bybit hack, which it attributed to North Korean 'TraderTraitor' actors. None of the addresses is on the SDN List. The customer opened the account last month and says the bitcoin came from an OTC trade. What should the exchange do?",
    "options": [
      "Take no action, because no address is on the SDN List and the funds are now on a different blockchain",
      "Restrict the funds, trace the cross-chain path to confirm the link, and report to the FBI and in a SAR",
      "Return the bitcoin to the sending address at once, so the exchange no longer holds any funds tied to the hack",
      "Credit the deposit, because an OTC trade is a lawful source of funds, and review it at the next periodic KYC update"
    ],
    "answer": [
      1
    ],
    "explanation": "The FBI said TraderTraitor actors had converted stolen assets and spread them across thousands of addresses on multiple blockchains. It asked exchanges, bridges and analytics firms to block transactions with, or derived from, the listed addresses, and to contact the FBI. A bridge moves the trail onto another chain but does not break it, so the exchange should confirm the link and report suspicious transactions of $2,000 or more under the MSB SAR rule. Returning the funds would move possibly stolen assets back to the launderers. Crediting the deposit ignores clear red flags.",
    "source": [
      {
        "label": "FBI PSA I-022625-PSA: North Korea Responsible for $1.5 Billion Bybit Hack (Feb 2025)",
        "url": "https://www.ic3.gov/PSA/2025/PSA250226"
      },
      {
        "label": "31 CFR 1022.320 – SARs by money services businesses",
        "url": "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1022/subpart-C/section-1022.320"
      }
    ]
  },
  {
    "id": "INV-008",
    "domain": 4,
    "topic": "314(a): record search scope calculation",
    "hy": true,
    "difficulty": "hard",
    "q": "On 15 September 2026 a bank receives a FinCEN 314(a) request that contains no special search instructions. For the named subject, the bank's records show the following. Which records MUST the bank search and report as matches? (Choose two.)",
    "options": [
      "A checking account in the subject's name that was closed in June 2025",
      "A $4,000 cashier's check the subject bought with cash on 10 January 2026, with no account at the bank",
      "A savings account in the subject's name that was closed in November 2025",
      "A safe deposit box rental agreement in the subject's name that ended in 2024",
      "A $12,000 outgoing wire, recorded under the funds transfer rules, sent by the subject as a walk-in customer on 2 May 2026"
    ],
    "answer": [
      2,
      4
    ],
    "explanation": "Unless the request says otherwise, 31 CFR 1010.520(b)(3)(i) requires a search for current accounts, accounts maintained during the preceding 12 months, and transactions (including funds transfers) conducted by or for the subject during the preceding 6 months that the bank must record or keeps electronically. The savings account closed about 10 months ago, and the wire was sent about 4.5 months ago, so both are in scope. The checking account closed about 15 months ago, the cashier's check was bought about 8 months ago, and the safe deposit box ended in 2024, so all three fall outside the required periods.",
    "source": [
      {
        "label": "31 CFR 1010.520 – 314(a) information requests",
        "url": "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-E/section-1010.520"
      }
    ]
  },
  {
    "id": "INV-009",
    "domain": 4,
    "topic": "314(a) matches and 314(b) sharing",
    "hy": true,
    "difficulty": "hard",
    "q": "A bank reports a positive 314(a) match on a business customer to FinCEN. While reviewing the account, the investigator sees large payments to the same customer's account at Bank X. Both banks have current 314(b) registrations. The relationship manager wants to close the account today because 'the government is after them'. The investigator wants to ask Bank X about the activity. Which course of action is permitted and MOST appropriate?",
    "options": [
      "Tell Bank X that the customer appears on a FinCEN 314(a) list, so that Bank X can check its own records",
      "Close the account immediately, because a 314(a) match requires the bank to end the relationship",
      "File a SAR automatically, because every 314(a) match must be reported as suspicious activity",
      "Share the customer's activity with Bank X under 314(b), without saying FinCEN asked about it"
    ],
    "answer": [
      3
    ],
    "explanation": "Under 31 CFR 1010.520(b)(3)(iv)(B)(2), a bank authorized to share under 314(b) may share information about a subject named in a 314(a) request, but it must not reveal that FinCEN asked for the information. Telling Bank X about the 314(a) list is the runner-up: it looks efficient but breaches the confidentiality of the request. The rule also says a 314(a) request does not require the bank to close accounts or decline business. A match does not by itself require a SAR, although the bank should review the activity and file one if it is suspicious.",
    "source": [
      {
        "label": "31 CFR 1010.520 – use and confidentiality of 314(a) requests",
        "url": "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-E/section-1010.520"
      },
      {
        "label": "31 CFR 1010.540 – 314(b) voluntary sharing",
        "url": "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-E/section-1010.540"
      }
    ]
  },
  {
    "id": "INV-010",
    "domain": 4,
    "topic": "314(a) requests on behalf of foreign law enforcement",
    "hy": false,
    "difficulty": "medium",
    "q": "A bank receives a 314(a) request that FinCEN sent on behalf of a European law enforcement agency. The analyst is unsure whether the request covers accounts held by companies the named person controls. What should the analyst do?",
    "options": [
      "Direct the question to the U.S. law enforcement attaché named in the request, and keep the request confidential",
      "Phone the European agency directly and describe the accounts the bank holds for the named person",
      "Set the request aside, because FinCEN can pass on 314(a) requests only for US law enforcement agencies",
      "Ask the named person's relationship manager to ask the customer which companies the customer controls"
    ],
    "answer": [
      0
    ],
    "explanation": "Under 31 CFR 1010.520, 'law enforcement agency' includes a foreign agency from a jurisdiction that gives US agencies reciprocal access. For a foreign agency's request, the bank may send scope questions to the U.S. law enforcement attaché named in the request. The bank must not disclose the request except as needed to comply, so describing accounts directly to the foreign agency or asking the customer would breach confidentiality and could tip off the subject. A request for a foreign agency still has to be searched.",
    "source": [
      {
        "label": "31 CFR 1010.520 – definitions and obligations",
        "url": "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-E/section-1010.520"
      }
    ]
  },
  {
    "id": "INV-011",
    "domain": 4,
    "topic": "314(b): which counterparties are eligible",
    "hy": false,
    "difficulty": "hard",
    "q": "A US bank's investigator is tracing funds from a suspected fraud ring and wants to share information under the section 314(b) safe harbor. Assume every institution listed has filed a 314(b) registration if it is allowed to. With which counterparties can the safe harbor apply? (Choose two.)",
    "options": [
      "A state-licensed US casino with gross annual gaming revenue above $1 million",
      "The bank's correspondent bank in Mexico, which is regulated only under Mexican law",
      "A US broker-dealer registered with the SEC",
      "A US law firm that handles real estate closings for the ring's companies",
      "A US car dealership that files Form 8300 reports on large cash sales"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Under 31 CFR 1010.540(a)(1), 314(b) sharing is limited to financial institutions that FinCEN's regulations require to have an AML program, and to associations of them. FinCEN's fact sheet lists casinos and broker-dealers among the eligible types. A foreign bank that has no FinCEN AML program requirement is outside the safe harbor. So are law firms and car dealers: filing Form 8300 does not make a business subject to a FinCEN AML program rule.",
    "source": [
      {
        "label": "31 CFR 1010.540 – voluntary information sharing",
        "url": "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-E/section-1010.540"
      },
      {
        "label": "FinCEN Section 314(b) Fact Sheet (June 2026)",
        "url": "https://www.fincen.gov/system/files/shared/314bfactsheet.pdf"
      }
    ]
  },
  {
    "id": "INV-012",
    "domain": 4,
    "topic": "314(b) information and foreign affiliates",
    "hy": false,
    "difficulty": "hard",
    "changed": "FinCEN 314(b) Fact Sheet, June 2026",
    "q": "Under 314(b), US Bank A received details from US Bank B about a customer suspected of laundering fraud proceeds. The same customer banks with Bank A's London subsidiary, which FinCEN's AML program rules do not cover. Bank A's investigator wants to pass the details to the London team so it can review the customer's account there. Under FinCEN's June 2026 Section 314(b) Fact Sheet, which statement is correct?",
    "options": [
      "Sharing is prohibited, because information received under 314(b) may never be passed to any institution outside the United States",
      "Sharing is permitted and fully covered by the 314(b) safe harbor, because the London subsidiary belongs to the same corporate group",
      "Sharing for the permitted purposes is allowed, but the safe harbor does not cover it, and the bank should consider privacy and UK law",
      "Sharing is permitted only after Bank B consents in writing and FinCEN approves the transfer abroad"
    ],
    "answer": [
      2
    ],
    "explanation": "The June 2026 fact sheet says information received under 314(b) may be shared with a foreign financial institution, such as an affiliate, solely for the purposes listed in 31 CFR 1010.540(b)(4). The safe harbor applies only if the recipient meets the regulatory definition of financial institution. The bank should also consider the RFPA, the GLBA, state law and foreign law. Treating the affiliate as covered by the safe harbor is the runner-up, but group membership does not bring it within the definition. Neither the rule nor the fact sheet requires consent from Bank B or approval from FinCEN.",
    "source": [
      {
        "label": "FinCEN Section 314(b) Fact Sheet (June 2026)",
        "url": "https://www.fincen.gov/system/files/shared/314bfactsheet.pdf"
      }
    ]
  },
  {
    "id": "INV-013",
    "domain": 4,
    "topic": "Cross-border sharing and SAR confidentiality (FIN-2025-G001)",
    "hy": true,
    "difficulty": "hard",
    "changed": "FinCEN FIN-2025-G001, Sept 2025",
    "q": "A US bank filed a SAR last month on a trading company. A bank in Singapore that holds the company's operating account asks the US bank for help with its own review. Under FinCEN's September 2025 guidance on cross-border information sharing and SAR confidentiality, which items does the BSA generally NOT prohibit the US bank from sharing? (Choose two.)",
    "options": [
      "The investigator's memo concluding that the activity was suspicious and recommending a filing",
      "Wire records for the company, and the transaction monitoring alerts they generated",
      "A statement that the US bank reviewed the company and decided not to file a SAR",
      "The US bank's adverse media research on the company, and the IP addresses and device IDs linked to its logins",
      "A copy of the SAR with the names of the bank's employees redacted"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "FIN-2025-G001 says the BSA does not prohibit sharing the underlying facts, transactions and documents on which a SAR is based. Its examples include wire and transaction records, monitoring alerts, due diligence and adverse media research, and cyber data such as IP addresses and device IDs. Analytic materials that give a view on whether activity is suspicious, or that imply a SAR decision, could reveal a SAR. So could a statement that no SAR was filed, and a copy of a SAR, even redacted, cannot be shared.",
    "source": [
      {
        "label": "FinCEN FIN-2025-G001: Cross-Border Information Sharing and SAR Confidentiality (Sept 2025)",
        "url": "https://www.fincen.gov/system/files/2025-09/Crossborderguidance-508C.pdf"
      }
    ]
  },
  {
    "id": "INV-014",
    "domain": 4,
    "topic": "314(b): using shared information about non-customers",
    "hy": false,
    "difficulty": "medium",
    "changed": "FinCEN 314(b) Fact Sheet, June 2026",
    "q": "A 314(b) association of banks shares, in real time, a list of accounts and device IDs linked to a money mule network. Bank C, a registered member, has no current relationship with anyone on the list. Its privacy officer says Bank C must delete the list because the information is not about its own customers. Under FinCEN's June 2026 Section 314(b) Fact Sheet, how should Bank C treat the information?",
    "options": [
      "Delete it, because 314(b) information may be used only when it relates to the receiving bank's existing customers",
      "Keep it, but use it only after the association confirms that each listed person is the subject of a SAR",
      "Forward it to any US business that asks, because once information is shared under 314(b) it is no longer confidential",
      "Use it for permitted purposes, such as monitoring and account-opening decisions, and keep it secure"
    ],
    "answer": [
      3
    ],
    "explanation": "The June 2026 fact sheet says information may be shared under 314(b) even if the sharer has no reason to believe it relates to the recipient's customers. The recipient may use it for permitted purposes, including adding it to its transaction monitoring and deciding whether to establish an account. Real-time sharing is expressly allowed. Both sides must keep the information secure and confidential, so it cannot be forwarded freely. 314(b) does not allow SARs, or the fact that one was filed, to be shared.",
    "source": [
      {
        "label": "FinCEN Section 314(b) Fact Sheet (June 2026)",
        "url": "https://www.fincen.gov/system/files/shared/314bfactsheet.pdf"
      }
    ]
  },
  {
    "id": "INV-015",
    "domain": 4,
    "topic": "Keep-open requests: safe harbor limits (31 USC 5333)",
    "hy": true,
    "difficulty": "hard",
    "q": "On 1 March a federal agency, after notifying FinCEN, sends a bank a written keep-open request for a customer's account, with a termination date of 31 May. The bank keeps the account open and files continuing SARs. The agent says informally that a renewal letter is 'on its way', but none arrives, and the bank leaves the account open until 15 July. The customer's activity grows in June. Which statement is correct?",
    "options": [
      "The safe harbor runs automatically until the agency tells the bank it no longer needs the account kept open",
      "The request suspended the bank's SAR obligations for the account until the termination date",
      "The safe harbor covers the account only up to 31 May, and SAR duties applied throughout",
      "The agent's verbal assurance extended the safe harbor, because it came from the agency that made the request"
    ],
    "answer": [
      2
    ],
    "explanation": "Under 31 U.S.C. 5333, a keep-open request must state a termination date. The safe harbor does not extend to anything the bank does after that date, or before the request. Section 5333 also says nothing in it relieves the bank of its reporting duties, including SARs. The agent's verbal assurance is the runner-up but gives no protection: only a written request with its stated parameters does. From 1 June the bank had to decide whether to keep the account under its own risk standards.",
    "source": [
      {
        "label": "31 U.S.C. 5333 – Safe harbor with respect to keep open directives",
        "url": "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title31-section5333&num=0&edition=prelim"
      },
      {
        "label": "FinCEN FIN-2007-G002: Requests by Law Enforcement to Maintain Accounts",
        "url": "https://www.fincen.gov/resources/statutes-regulations/guidance/requests-law-enforcement-financial-institutions-maintain"
      }
    ]
  },
  {
    "id": "INV-016",
    "domain": 4,
    "topic": "Account closure while law enforcement is investigating",
    "hy": false,
    "difficulty": "medium",
    "q": "A bank's exit committee votes to close a customer's accounts after a second SAR. Two months ago the bank received a grand jury subpoena for the customer's records, and last week the customer matched a 314(a) request. No keep-open request has been received. According to FinCEN guidance, what should the bank do before deciding the status of the accounts?",
    "options": [
      "Notify law enforcement before making its decision, while continuing to meet its SAR obligations",
      "Close the accounts at once and tell the customer the closure is linked to the subpoena",
      "Keep the accounts open indefinitely, because closing them could interfere with the investigation",
      "Ask FinCEN to approve the closure, because a 314(a) match freezes changes to the accounts"
    ],
    "answer": [
      0
    ],
    "explanation": "FinCEN's 2007 guidance recommends that, if a bank knows from a subpoena, 314(a) request, NSL or similar communication that an account is under investigation, it notify law enforcement before deciding the account's status. The decision to keep or close the account remains the bank's own. BSA obligations such as SAR filing continue either way. Telling the customer about the subpoena risks tipping off the customer, and a 314(a) match neither freezes accounts nor requires FinCEN approval.",
    "source": [
      {
        "label": "FinCEN FIN-2007-G002: Requests by Law Enforcement to Maintain Accounts",
        "url": "https://www.fincen.gov/resources/statutes-regulations/guidance/requests-law-enforcement-financial-institutions-maintain"
      },
      {
        "label": "31 CFR 1010.520 – no action required on 314(a) subjects",
        "url": "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-E/section-1010.520"
      }
    ]
  },
  {
    "id": "INV-017",
    "domain": 4,
    "topic": "National Security Letters (12 U.S.C. 3414)",
    "hy": false,
    "difficulty": "hard",
    "q": "A bank receives a letter from an FBI Special Agent in Charge. It certifies in writing that a customer's financial records are sought to protect against international terrorism, and that disclosure of the request could endanger national security. The letter states the nondisclosure requirement. The customer is a long-standing client, and the relationship manager wants to warn him that a request was received. How should the bank respond?",
    "options": [
      "Refuse to produce records until the FBI obtains a court order or grand jury subpoena, as the RFPA requires",
      "Produce the records, telling only the staff needed to comply and legal counsel",
      "Produce the records, and notify the customer so that he can challenge the disclosure under the RFPA",
      "Produce only records that were already reported in a SAR, because other records need customer consent"
    ],
    "answer": [
      1
    ],
    "explanation": "Under 12 U.S.C. 3414(a)(5)(A), a bank must comply with an FBI request (a National Security Letter) certified in writing by an authorized official, such as a Special Agent in Charge, for counterintelligence or international terrorism purposes. No court order is needed. Where the required certification is made, section 3414 bars the bank from disclosing the request to anyone except those needed to comply and an attorney giving legal advice. The RFPA notice and challenge procedures do not apply to these requests, so warning the customer would break the law.",
    "source": [
      {
        "label": "12 U.S.C. 3414 – Special procedures (RFPA)",
        "url": "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title12-section3414&num=0&edition=prelim"
      }
    ]
  },
  {
    "id": "INV-018",
    "domain": 4,
    "topic": "SAR supporting documentation",
    "hy": true,
    "difficulty": "hard",
    "q": "Eighteen months after filing a SAR on a customer, a bank receives a verified request from an IRS-CI agent for the SAR's supporting documentation. The narrative mentions the account statements and wire records. It does not mention an email chain in which the relationship manager recorded the customer's inconsistent explanations, which the investigator relied on. The bank's counsel says only documents named in the narrative count. Which statement is MOST accurate?",
    "options": [
      "Only documents named in the narrative are supporting documentation, so the email chain needs a subpoena",
      "Supporting documentation is kept for only one year after filing, so nothing needs to be produced now",
      "The email chain may still count as supporting documentation and must be produced without a subpoena",
      "The bank must notify the customer under the RFPA before giving any records to the IRS-CI agent"
    ],
    "answer": [
      2
    ],
    "explanation": "FinCEN's 2007 guidance defines supporting documentation as all records that helped the bank decide to file a SAR. It says a document may qualify even if the narrative does not name it, although banks should identify supporting documentation when they file and keep it as such. Records must be kept for five years from filing, are deemed filed with the SAR, and must be given to FinCEN or appropriate law enforcement on request, without legal process or customer notice. Counsel's position is the runner-up and reflects a common misreading.",
    "source": [
      {
        "label": "FinCEN FIN-2007-G003: SAR Supporting Documentation",
        "url": "https://www.fincen.gov/resources/statutes-regulations/guidance/suspicious-activity-report-supporting-documentation"
      }
    ]
  },
  {
    "id": "INV-019",
    "domain": 4,
    "topic": "SAR narrative: structure and detail",
    "hy": true,
    "difficulty": "hard",
    "q": "A QA reviewer reads a draft SAR narrative that says: 'Subject received $1.2 million in wires over six months and moved it out quickly. See table below.' A spreadsheet table has been pasted into the narrative field. The bank filed a SAR on the same subject last year, and the case number appears nowhere. The investigator says the table already 'shows everything'. Which revision BEST follows FinCEN's SAR narrative guidance?",
    "options": [
      "Keep the aggregate figure, move the table into the SAR's continuation fields, and leave out the prior SAR to avoid repetition",
      "Rewrite in text giving individual dates and amounts, cite the prior SAR's date and reason, and add the internal case number",
      "Replace the narrative with a short label, such as 'rapid movement of funds', and keep the details in the case file",
      "Keep the table, but add a sentence telling law enforcement to contact the bank for an explanation of its contents"
    ],
    "answer": [
      1
    ],
    "explanation": "FinCEN's SAR narrative guidance says not to insert objects, tables or preformatted spreadsheets in the narrative, because they may not convert properly. It also says to give individual transaction dates and amounts rather than only an aggregate. The introduction can give the date of, and reason for, any earlier SAR on the subject, plus an internal case number that law enforcement can quote. Keeping the table with a note to call the bank is the runner-up, but it still leaves the narrative without the facts it needs. A one-line label does not explain the who, what, when, where and why.",
    "source": [
      {
        "label": "FinCEN, Guidance on Preparing a Complete & Sufficient SAR Narrative (2003)",
        "url": "https://www.fincen.gov/system/files/shared/sarnarrcompletguidfinal_112003.pdf"
      }
    ]
  },
  {
    "id": "INV-020",
    "domain": 4,
    "topic": "Egmont: dissemination and use of FIU-exchanged information",
    "hy": false,
    "difficulty": "hard",
    "q": "FIU A asked FIU B for information on a company, stating in the request that the results would be shared with FIU A's national police for a corruption investigation. FIU B answered through the Egmont Secure Web and did not refuse consent to any dissemination. Six months later, the national tax authority asks FIU A for the same material to support a separate tax-evasion case. Under the Egmont Group Principles for Information Exchange, what should FIU A do?",
    "options": [
      "Share with both authorities freely, because once FIU B answered, the information belongs to FIU A under its national law",
      "Share with neither authority until FIU B gives separate written consent for each disclosure, including the police",
      "Refuse the tax authority's request, because the Egmont Principles do not allow FIU information to be used in tax matters",
      "Share with the police as stated, but get FIU B's prior authorization before giving it to the tax authority"
    ],
    "answer": [
      3
    ],
    "explanation": "Under the Egmont Principles, unless the requested FIU explicitly refuses, the requesting FIU may assume consent to share the information with the authorities named in its request, here the police. Principle 38 says any dissemination or use beyond the purposes originally approved needs prior authorization from the requested FIU. Requiring separate consent even for the police is the runner-up, but it ignores the presumption of consent. The Principles do not rule out tax matters: FIUs should not refuse cooperation just because a request involves fiscal matters.",
    "source": [
      {
        "label": "Egmont Group, Principles for Information Exchange between FIUs (rev. July 2025)",
        "url": "https://egmontgroup.org/wp-content/uploads/2022/07/EG-Principles-for-Information-Exchange-Revised-July-2025.pdf"
      }
    ]
  },
  {
    "id": "INV-021",
    "domain": 4,
    "topic": "Egmont: handling incoming FIU requests",
    "hy": false,
    "difficulty": "hard",
    "q": "An FIU receives a well-founded request from a foreign counterpart about a company suspected of laundering the proceeds of VAT fraud. One analyst proposes refusing because the case is a fiscal matter. Another notes that domestic police have an open file on the same company, although answering would not affect that inquiry. A third says the FIU need not reply until its analysis is complete, which may take four months. Under the Egmont Group Principles, what is the BEST course of action?",
    "options": [
      "Handle the request and aim for at least an interim, partial or negative reply within 30 business days",
      "Refuse the request, because fiscal matters fall outside FIU-to-FIU exchange under the Egmont Principles",
      "Delay any reply until the domestic police inquiry is closed, to avoid duplicating that work",
      "Reply only when the full analysis is done, because interim or partial replies are not allowed"
    ],
    "answer": [
      0
    ],
    "explanation": "The Egmont Principles say FIUs should not refuse assistance because a request is also considered to involve fiscal matters. Nor should they refuse because an inquiry is under way at home, unless helping would impede that inquiry. FIUs should acknowledge requests and are encouraged to give at least an interim, partial or negative response within 30 business days. Waiting for the full analysis is the runner-up, but it ignores that expectation, and none of the proposed reasons for refusal applies here.",
    "source": [
      {
        "label": "Egmont Group, Principles for Information Exchange between FIUs (rev. July 2025)",
        "url": "https://egmontgroup.org/wp-content/uploads/2022/07/EG-Principles-for-Information-Exchange-Revised-July-2025.pdf"
      }
    ]
  },
  {
    "id": "INV-022",
    "domain": 4,
    "topic": "UK POCA s.339ZB: information sharing and joint disclosure reports",
    "hy": true,
    "difficulty": "hard",
    "q": "Bank B, a UK bank, suspects that a shared customer is laundering money. It asks Bank A, another UK bank in the regulated sector, for information about the customer's account under section 339ZB of POCA 2002. The NCA was not involved in the request. Bank A is satisfied that disclosing the information may help determine whether the customer is laundering money. Which statement correctly describes the process?",
    "options": [
      "Bank B notifies the NCA before Bank A discloses; a joint report is due within 84 days, signed by both nominated officers",
      "Bank A must notify the NCA before it discloses, and the banks then have 30 days to submit a joint disclosure report",
      "Neither bank needs to notify the NCA, because sharing between regulated firms is outside the SAR regime",
      "The NCA must approve the sharing in writing first, and only Bank A may then submit a SAR"
    ],
    "answer": [
      0
    ],
    "explanation": "Under s.339ZC(3)(b), when the request comes from another regulated firm, the requesting firm (Bank B) makes the required notification to the NCA, and s.339ZB(4) requires it before Bank A discloses. Under s.339ZD, a joint disclosure report must be sent within 84 days of that notification and be approved and signed by each firm's nominated officer. It then satisfies both firms' s.330 reporting duties. The option in which Bank A notifies is the runner-up: that applies only where an NCA officer made the request. No prior NCA approval is required.",
    "source": [
      {
        "label": "POCA 2002 s.339ZB (legislation.gov.uk)",
        "url": "https://www.legislation.gov.uk/ukpga/2002/29/section/339ZB"
      },
      {
        "label": "POCA 2002 s.339ZD (legislation.gov.uk)",
        "url": "https://www.legislation.gov.uk/ukpga/2002/29/section/339ZD"
      }
    ]
  },
  {
    "id": "INV-023",
    "domain": 3,
    "topic": "Regulator-ordered SAR look-backs: consultant findings",
    "hy": false,
    "difficulty": "hard",
    "q": "Under an OCC consent order modelled on the 2024 TD Bank order, an independent consultant finishes a SAR look-back. It recommends 40 new SARs and 12 amendments. Bank management agrees with most of them but decides not to file 6 of the recommended SARs, believing the activity had a business purpose. The board chair suggests leaving those 6 out of the final report because 'they were resolved internally'. What does the order require?",
    "options": [
      "The report may leave out the 6 cases, because the bank has the final say on whether to file",
      "The consultant should file the 6 SARs itself, because the bank's disagreement is overridden by the order",
      "The 6 cases must be settled with the OCC before the consultant can give any report to the board",
      "The report must list the 6 cases and the bank's reasons, and a copy goes directly to the OCC examiner"
    ],
    "answer": [
      3
    ],
    "explanation": "The TD Bank order requires the consultant's written report to list the customers, accounts and transactions where the bank chose, against the consultant's recommendation, not to file or amend SARs, with the bank's reasons. The consultant must give a copy of the report directly to the Examiner-in-Charge when it gives it to the board. Leaving the cases out is the runner-up, since filing decisions do stay with the bank, but the disagreement still has to be disclosed. The consultant does not file SARs for the bank.",
    "source": [
      {
        "label": "OCC Consent Order, TD Bank N.A. (AA-ENF-2024-77), Article XV",
        "url": "https://www.occ.gov/static/enforcement-actions/eaAA-ENF-2024-77.pdf"
      }
    ]
  },
  {
    "id": "INV-024",
    "domain": 3,
    "topic": "Regulator-ordered SAR look-backs: purpose and scope",
    "hy": false,
    "difficulty": "hard",
    "q": "A bank has 60 days to propose a SAR look-back consultant under an OCC order similar to TD Bank's 2024 order. To save cost, the BSA officer drafts a scope that covers only alerts closed as false positives. It leaves out past no-file decisions and SARs already filed, and it sets the review period itself. Which statement BEST describes the problem with this plan?",
    "options": [
      "The plan is acceptable, because a look-back exists only to find alerts that were wrongly closed as false positives",
      "It must also cover weakly supported no-file decisions and past SARs, and the OCC examiner sets the scope",
      "The only problem is cost, because a look-back must cover every transaction since the account was opened",
      "The plan is acceptable, provided that internal audit, not a consultant, carries out the review"
    ],
    "answer": [
      1
    ],
    "explanation": "Under the TD Bank order, the SAR look-back aims to find previously unreported suspicious activity. This includes cases where staff saw suspicious activity but did not adequately support a decision not to file. The look-back also reviews the quality and accuracy of earlier SARs for correction or amendment, and identifies transactions of excessive risk. The Examiner-in-Charge sets the scope in writing, and the OCC may expand it. The order calls for an independent third-party consultant approved by the OCC, not internal audit, and no rule requires a review going back to account opening.",
    "source": [
      {
        "label": "OCC Consent Order, TD Bank N.A. (AA-ENF-2024-77), Article XV",
        "url": "https://www.occ.gov/static/enforcement-actions/eaAA-ENF-2024-77.pdf"
      }
    ]
  },
  {
    "id": "INV-025",
    "domain": 4,
    "topic": "Transaction-flow analysis: funnel, pass-through, round-tripping",
    "hy": true,
    "difficulty": "hard",
    "q": "An analyst is labelling transaction flows found during a review of a commercial portfolio. Which flows are correctly labelled? (Choose two.)",
    "options": [
      "A company wires $2 million to an offshore affiliate, which sends $1.95 million back two weeks later as a 'loan': funnel account",
      "A customer deposits $9,500 in cash on four straight days to avoid a CTR: round-tripping",
      "Funds move from Bank A to Bank B and then back to Bank A with no clear purpose: structuring",
      "An account opened in Texas gets cash deposits at branches in five other states, and the funds are withdrawn in Texas within a day: funnel account",
      "Many small incoming transfers reach a wholesaler's account and are wired almost at once to another country, out of line with its business: rapid pass-through"
    ],
    "answer": [
      3,
      4
    ],
    "explanation": "FinCEN defines a funnel account as an account in one area that receives many cash deposits, often below the reporting threshold, with funds withdrawn in a different area soon afterwards. The FFIEC red flags describe many small incoming transfers wired almost immediately to another city or country, out of line with the customer's business, which is pass-through or rapid movement. Money sent offshore and returned as a 'loan' is round-tripping. Cash kept under $10,000 to avoid a CTR is structuring. Funds moving from one bank to another and back is a round-trip red flag, not structuring.",
    "source": [
      {
        "label": "FinCEN Advisory FIN-2014-A005: Funnel Accounts and TBML",
        "url": "https://www.fincen.gov/resources/advisories/fincen-advisory-fin-2014-a005"
      },
      {
        "label": "FFIEC BSA/AML Examination Manual, Appendix F red flags (OCC-hosted copy)",
        "url": "https://www.occ.gov/news-issuances/news-releases/2005/ffiec-bsa-bml-exam-man-2005-appendix.pdf"
      }
    ]
  },
  {
    "id": "INV-026",
    "domain": 4,
    "topic": "Entity resolution vs. link analysis",
    "hy": false,
    "difficulty": "hard",
    "q": "A bank finds that 'Mohammed A. Karimi', 'M. Kareemi' and 'Mohamed Karimi' hold three customer records in three product systems, each with a different address but a shared date of birth and phone number. Because the records are not linked, cash deposits across them were never added together for monitoring. The bank also wants to see who else sends money to these accounts. Which capability should the bank apply FIRST to fix the aggregation gap?",
    "options": [
      "Link analysis, to map the transfers between the three records and their counterparties as a network",
      "Raising the cash scenario thresholds, so that each record's deposits are judged against a larger peer group",
      "Entity resolution, to tie the three records to one person so their activity can be combined",
      "Adverse media screening of all three name variants, to see whether any of them has a criminal history"
    ],
    "answer": [
      2
    ],
    "explanation": "The Wolfsberg Group describes entity resolution as linking data fragments that refer to the same real-world entity, which improves accuracy and reveals hidden risks. The gap here is that one person appears as three customers, so entity resolution must come first, before activity can be added together. Link analysis is the runner-up: it is valuable for mapping counterparties, but it shows relationships between entities, not that three records are the same person. Raising thresholds or screening names does not fix a data problem that prevents aggregation.",
    "source": [
      {
        "label": "Wolfsberg Group, Statement on Effective Monitoring for Suspicious Activity, Part I (2024)",
        "url": "https://db.wolfsberg-group.org/assets/e3d83d2f-fad9-46d2-b5a9-3cf4e932f53f/Wolfsberg%20Group%20MSA%20Statement%20Part%20I.pdf"
      }
    ]
  },
  {
    "id": "INV-027",
    "domain": 3,
    "topic": "Monitoring metrics: SAR conversion rate pitfalls",
    "hy": true,
    "difficulty": "hard",
    "q": "A bank's board dashboard reports a single effectiveness metric for monitoring: the alert-to-SAR conversion rate, with a target of 10%. The rate has doubled after the bank raised several thresholds, and management proposes bonuses for investigators based on SAR counts. The bank has had no feedback from law enforcement, but several SARs this year came from branch staff referrals rather than from alerts. Which approach BEST reflects the Wolfsberg Group's view of measuring monitoring effectiveness?",
    "options": [
      "Keep the conversion rate as the main measure, since a higher rate proves the thresholds are now well calibrated",
      "Base investigator bonuses on SAR counts, since more SARs give law enforcement more information to use",
      "Replace the conversion rate with total alert volume, because more alerts show that monitoring coverage is wider",
      "Treat conversion ratios as quantity measures only, and add authority feedback and false-negative review"
    ],
    "answer": [
      3
    ],
    "explanation": "The Wolfsberg Group says common metrics, such as alert volumes, alert productivity and alert-to-SAR ratios, measure quantity rather than how useful the information is. It recommends looking for feedback from government authorities, using indicators such as complexity or network detection where feedback is lacking, and reviewing false negatives, including SARs that came from referrals. Treating the higher rate as proof of good calibration is the runner-up, but raising thresholds can raise the ratio while hiding missed activity. Rewarding SAR counts encourages defensive filing.",
    "source": [
      {
        "label": "Wolfsberg Group, Statement on Effective Monitoring for Suspicious Activity, Part I (2024)",
        "url": "https://db.wolfsberg-group.org/assets/e3d83d2f-fad9-46d2-b5a9-3cf4e932f53f/Wolfsberg%20Group%20MSA%20Statement%20Part%20I.pdf"
      }
    ]
  },
  {
    "id": "INV-028",
    "domain": 4,
    "topic": "Scenario retirement and de-scoped routine testing",
    "hy": false,
    "difficulty": "hard",
    "q": "A bank's analysis shows that one monitoring scenario generated 4,000 alerts over two years and no SARs, while other sources produced reportable activity for the same typology. The scenario is expensive to run. The model owner proposes retiring it. The head of FIU argues that every scenario must stay live forever in case the theoretical risk ever materialises. What is the BEST approach?",
    "options": [
      "Retire it with documented, approved analysis, and regularly test the de-scoped routine for material risk",
      "Keep the scenario live permanently, because retiring any scenario creates regulatory risk whatever its results",
      "Retire it quietly without documentation, since a scenario with no SARs does not affect the program",
      "Keep the scenario but lower its priority, so that its alerts are closed automatically without review"
    ],
    "answer": [
      0
    ],
    "explanation": "The Wolfsberg Group encourages banks to use productivity data and the value of SARs filed when deciding whether to keep or stop a monitoring routine. It also says banks should regularly test de-scoped routines to confirm there is no material risk. Changes to monitoring need documented rationale and governed change control, as NYDFS Part 504 requires for scenarios and thresholds. Keeping everything live is the runner-up but ties up resources on risk that has not been seen. Auto-closing alerts, or retiring the scenario without documentation, removes the control without accountability.",
    "source": [
      {
        "label": "Wolfsberg Group, Statement on Effective Monitoring for Suspicious Activity, Part I (2024)",
        "url": "https://db.wolfsberg-group.org/assets/e3d83d2f-fad9-46d2-b5a9-3cf4e932f53f/Wolfsberg%20Group%20MSA%20Statement%20Part%20I.pdf"
      },
      {
        "label": "3 NYCRR 504.3 – Transaction monitoring and filtering programs",
        "url": "https://www.law.cornell.edu/regulations/new-york/3-NYCRR-504.3"
      }
    ]
  },
  {
    "id": "INV-029",
    "domain": 3,
    "topic": "Scenario design: thresholds by customer segment",
    "hy": false,
    "difficulty": "medium",
    "q": "A bank uses one set of cash and wire thresholds for all customers, from students to large importers. Alerts are flooded with retail false positives, while commercial accounts rarely alert. What is the BEST redesign?",
    "options": [
      "Apply the importers' higher thresholds to every customer, to cut the number of retail false positives",
      "Keep one threshold for all customers, because different thresholds for different segments would be discriminatory",
      "Segment customers by attributes and statistical clustering, with documented thresholds per segment, reviewed regularly",
      "Let each relationship manager set a personal threshold for each customer, based on knowing the customer's business"
    ],
    "answer": [
      2
    ],
    "explanation": "The Wolfsberg Group suggests combining known customer attributes with dynamic statistical clustering, such as k-means, to build meaningful segments that stay current as behaviour changes. NYDFS Part 504 requires documentation of scenarios' assumptions, parameters and thresholds, and ongoing analysis of whether they are still relevant. Using the highest thresholds for everyone would blind the bank to retail risk. Thresholds set by relationship managers lack independence and governance.",
    "source": [
      {
        "label": "Wolfsberg Group, Statement on Effective Monitoring for Suspicious Activity, Part I (2024)",
        "url": "https://db.wolfsberg-group.org/assets/e3d83d2f-fad9-46d2-b5a9-3cf4e932f53f/Wolfsberg%20Group%20MSA%20Statement%20Part%20I.pdf"
      },
      {
        "label": "3 NYCRR 504.3",
        "url": "https://www.law.cornell.edu/regulations/new-york/3-NYCRR-504.3"
      }
    ]
  },
  {
    "id": "INV-030",
    "domain": 4,
    "topic": "Sanctions screening tuning: weak aliases",
    "hy": true,
    "difficulty": "hard",
    "q": "A payments firm's screening filter produces 40% of its alerts from a handful of SDN aliases such as 'Abu Ahmad' and 'the Engineer', which OFAC marks as weak AKAs. The tuning team proposes removing weak AKAs from the automated filter. The firm has a documented, risk-based sanctions program. Which statement BEST reflects OFAC's guidance?",
    "options": [
      "Removing weak AKAs is prohibited, because every alias on the SDN List must be screened by fuzzy matching",
      "OFAC does not expect screening against weak AKAs, but they should be used to judge hits raised by other data",
      "Weak AKAs should be screened by exact match only, which OFAC requires in place of fuzzy logic",
      "Removing weak AKAs requires OFAC's prior written approval of the firm's screening configuration"
    ],
    "answer": [
      1
    ],
    "explanation": "OFAC FAQ 124 says its regulations do not require any particular screening regime and that it does not expect persons to screen for weak AKAs. It does expect them to be used to help decide whether a hit raised by other information is accurate. FAQ 122 explains that weak AKAs are broad or generic names that cause many false hits. The exact-match option is the runner-up, but OFAC sets no such requirement, and no prior OFAC approval is needed for filter settings.",
    "source": [
      {
        "label": "OFAC FAQ 124 – screening for weak aliases",
        "url": "https://ofac.treasury.gov/faqs/124"
      },
      {
        "label": "OFAC FAQ 122 – what are weak aliases",
        "url": "https://ofac.treasury.gov/faqs/122"
      }
    ]
  },
  {
    "id": "INV-031",
    "domain": 4,
    "topic": "Sanctions screening tuning: suppression, enrichment and list updates",
    "hy": true,
    "difficulty": "hard",
    "q": "A bank's sanctions screening review finds that the filter missed a payment to a listed entity whose name appeared in Cyrillic transliteration. It also finds thousands of repeat alerts on customers already confirmed as false positives. The vendor updates lists quarterly. Which tuning measures are consistent with the Wolfsberg Sanctions Screening Guidance? (Choose two.)",
    "options": [
      "Screen date of birth and nationality in place of names, because identifiers are more precise than names",
      "Move every list to exact matching, because fuzzy logic produces most false positives",
      "Add rules that suppress repeat alerts on confirmed false positives, with documented rationale, governance and periodic review",
      "Enrich list entries with foreign-language name variants, and test that the filter now catches them",
      "Keep the quarterly vendor updates, because new designations can wait for the next scheduled release"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": "Wolfsberg's guidance accepts suppression rules or 'good guys' lists for common false positives, with documented rationale for risk-based decisions and governance over changes. It notes list enrichment, such as foreign-language name variations, and calls for independent testing of the filter. Identifiers such as date of birth need not be screened; they help decide alerts rather than replace name screening. Exact matching would miss spelling variants. The guidance says new designations should be put into screening as quickly and accurately as possible.",
    "source": [
      {
        "label": "Wolfsberg Group, Guidance on Sanctions Screening (2019)",
        "url": "https://db.wolfsberg-group.org/assets/4b6c2db6-696d-492e-bdd5-c51552708597/Wolfsberg%20Guidance%20on%20Sanctions%20Screening.pdf"
      }
    ]
  },
  {
    "id": "INV-032",
    "domain": 4,
    "topic": "Adverse media screening in multiple scripts",
    "hy": false,
    "difficulty": "hard",
    "q": "An adverse media tool finds an article about 'Pyotr Tchaikovsky' but misses the customer record 'Piotr Czajkowski'. Both render the same Russian name, using different phonetic conversion systems. In the Wolfsberg Group's Negative News Screening FAQs, which term BEST describes producing these different Latin spellings of one name?",
    "options": [
      "Transliteration, meaning conversion of a word into another script so that it sounds similar",
      "Transcription, meaning conversion by a set system that can give several spellings of one name",
      "Translation, meaning rendering the meaning of the text in another language",
      "Fuzzy matching, meaning an algorithm that scores how similar two strings are"
    ],
    "answer": [
      1
    ],
    "explanation": "The Wolfsberg FAQs define transcription as transferring words from one script to another under a particular conversion system. Because methods vary, one name can produce several versions, and the FAQs use 'Piotr Czajkowski / Pyotr Tchaikovsky / Piotr Chaykovskiy' as the example. Transliteration, the runner-up, is converting script to script with similar pronunciation, as in 歌川豊春 to Utagawa Toyoharu. Translation renders meaning, and fuzzy matching is a matching technique, not a conversion method.",
    "source": [
      {
        "label": "Wolfsberg Group, Negative News Screening FAQs (2022)",
        "url": "https://db.wolfsberg-group.org/assets/b3a010d9-7b32-4580-92d7-db9a7e78cbaf/Negative%20News%20Screening%20FAQs%20(2022).pdf"
      }
    ]
  },
  {
    "id": "INV-033",
    "domain": 3,
    "topic": "Negative news screening: risk stage and scope",
    "hy": false,
    "difficulty": "medium",
    "q": "To reduce alert volumes, a bank proposes configuring its negative news screening to alert only when a customer has been convicted of a financial crime. It would also exclude civil matters such as speeding fines. According to the Wolfsberg Group's Negative News Screening FAQs, which statement BEST assesses this proposal?",
    "options": [
      "Conviction-only alerts must be used, because allegations are not reliable enough to include in screening",
      "Excluding traffic fines is not allowed, because every item of negative news must be reviewed without exception",
      "Alerting at conviction cuts volumes but may lose AML/CTF value; both choices are risk-based and documented",
      "The alert stage must be set by the regulator, so the bank cannot choose it under its risk appetite"
    ],
    "answer": [
      2
    ],
    "explanation": "The Wolfsberg FAQs describe a 'risk stage' running from allegation to investigation, charges and conviction. Alerting at the allegation stage produces more alerts, while waiting for conviction may give less AML/CTF value. The FAQs say that items unrelated to financial crime, such as speeding fines, may be excluded, at the bank's discretion and in line with its risk appetite. They also say negative news screening should not be a zero-tolerance process.",
    "source": [
      {
        "label": "Wolfsberg Group, Negative News Screening FAQs (2022)",
        "url": "https://db.wolfsberg-group.org/assets/b3a010d9-7b32-4580-92d7-db9a7e78cbaf/Negative%20News%20Screening%20FAQs%20(2022).pdf"
      }
    ]
  },
  {
    "id": "INV-034",
    "domain": 4,
    "topic": "OSINT: assessing adverse media source credibility",
    "hy": false,
    "difficulty": "medium",
    "q": "During EDD on a prospective client, an investigator finds three items alleging bribery. One is an article by an international news agency that quotes court filings. One is a blog post with no named author. The third is a report from a state-controlled outlet in a country with low press freedom, where the client is a known critic of the government. Which approach is MOST consistent with the Wolfsberg Group's guidance on source credibility?",
    "options": [
      "Weight the news agency article most, and treat the other two with caution unless reliable sources confirm them",
      "Give all three items equal weight, because any public allegation of bribery must lead to rejecting the client",
      "Rely mainly on the state-controlled outlet, because government sources in the client's home country are best placed to know",
      "Ignore all three items, because negative news can never be used without a criminal conviction"
    ],
    "answer": [
      0
    ],
    "explanation": "The Wolfsberg FAQs describe international news agencies with editorial oversight, and reports that cite original sources, as generally more credible. Anonymous blogs and opinion content are less reliable. Reporting from countries where the media may be controlled or politically partisan needs extra care, for example by checking press freedom indices. Content that other reputable sources confirm is more reliable. Negative news can inform a decision before any conviction.",
    "source": [
      {
        "label": "Wolfsberg Group, Negative News Screening FAQs (2022)",
        "url": "https://db.wolfsberg-group.org/assets/b3a010d9-7b32-4580-92d7-db9a7e78cbaf/Negative%20News%20Screening%20FAQs%20(2022).pdf"
      }
    ]
  },
  {
    "id": "INV-035",
    "domain": 3,
    "topic": "Transaction monitoring program documentation and testing (NYDFS Part 504)",
    "hy": false,
    "difficulty": "medium",
    "q": "A New York-licensed money transmitter is about to launch a new scenario for rapid movement of funds through prepaid accounts. The vendor has supplied a certificate saying the scenario 'meets industry standards'. Under NYDFS Part 504, which step is REQUIRED as part of the institution's transaction monitoring program?",
    "options": [
      "Relying on the vendor's certificate, because vendor-built scenarios are exempt from the institution's own testing",
      "Getting NYDFS approval of the scenario's threshold values before the scenario can go live",
      "Running the scenario for a year before documenting its logic, so the documentation reflects real results",
      "Documenting its assumptions, parameters and thresholds, and testing it end to end before and after launch"
    ],
    "answer": [
      3
    ],
    "explanation": "3 NYCRR 504.3(a) requires documentation of current detection scenarios and their underlying assumptions, parameters and thresholds. It also requires end-to-end, pre- and post-implementation testing, covering governance, data mapping, transaction coding, scenario logic, model validation, data input and program output, as relevant. A vendor certificate does not replace the institution's own testing; Part 504 addresses vendor selection separately. The rule does not require NYDFS to approve thresholds in advance.",
    "source": [
      {
        "label": "3 NYCRR 504.3 – Transaction monitoring and filtering program requirements",
        "url": "https://www.law.cornell.edu/regulations/new-york/3-NYCRR-504.3"
      }
    ]
  }
]);
