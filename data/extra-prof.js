window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "PROF-001", domain: 1, topic: "Continuum of complicity: wilful blindness that becomes 'being corrupted'", hy: true, difficulty: "hard",
    q: "Investigators review the role of Teodor Vance, a conveyancing solicitor at a mid-sized firm. In 2023 he acted on a EUR 1.4 million flat purchase for Lorna Ash, a new client whose funds came from three unconnected third parties abroad. He noted the third-party payments in the file, asked no further questions, completed the purchase and made no report. Over the next two years he accepted four similar instructions from Ash's business associates, each funded by unexplained third-party transfers, and again made no reports. There is no evidence that he knew where the money came from or shared in any profit, and his firm passed its last supervisory inspection. Under the 'continuum of complicity' described by the FATF and the Egmont Group, how is Vance's involvement BEST described?",
    options: [
      "Unwitting: he carried out basic CDD, and the red flags were missed or their significance was misunderstood",
      "Wilfully blind on an isolated matter: he asked no further questions and completed a single transaction",
      "Being corrupted: wilful blindness that persists across repeat instructions from the client's associates with similar red flags",
      "Complicit: he had actual knowledge of the criminality in which he was involved"
    ],
    answer: [2],
    explanation: "The FATF-Egmont report (2018, para 108 and Figure 1, based on the FATF's 2013 legal professionals report) describes a continuum: innocent involvement, unwitting (basic CDD, red flags missed or misunderstood), wilfully blind (further questions not asked, an isolated transaction completed, often no STR), being corrupted (wilful blindness persists for repeat instructions from the same client, the client's associates or other matters with similar red flags) and complicit (actual knowledge of the criminality). Vance recorded the red flags, so he was not unwitting, and nothing shows actual knowledge. The runner-up, isolated wilful blindness, fits only the 2023 matter; repeating it for four instructions from the client's associates moves him to 'being corrupted'.",
    source: [{ label: "FATF-Egmont Group – Concealment of Beneficial Ownership (2018), paras 108-114 and Figure 1 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF-Egmont-Concealment-beneficial-ownership_eng.pdf" }]
  },
  {
    id: "PROF-002", domain: 1, topic: "FATF-Egmont findings: complicity of lawyers, accountants and TCSPs", hy: true, difficulty: "medium",
    q: "According to the 2018 FATF-Egmont Group report on the concealment of beneficial ownership, which findings about professional intermediaries are CORRECT? (Choose two.)",
    options: [
      "Accountants were the least represented sector but the most likely to be complicit, often designing and promoting the scheme themselves",
      "Legal professionals were the most likely of the three sectors to be complicit, because privilege shields them from reporting duties",
      "Complicity was necessary for a scheme to work, because an unwitting intermediary adds little value to a concealment scheme",
      "TCSPs assessed as complicit were more likely to have been wilfully blind than fully complicit, acting at the behest of a client or another intermediary",
      "Most schemes needed a lawyer as well as an accountant, because each provided services the other could not"
    ],
    answer: [0, 3],
    explanation: "The report found accountants the least represented sector but significantly more likely to be complicit, and the most frequent designers and promoters of schemes (paras 6 and 113). TCSPs were the most involved in setting up entities and accounts, but those assessed as complicit were more likely to have been wilfully blind than fully complicit, and their role was mostly transactional (para 6). Legal professionals were more often unwitting or wilfully blind than accountants, and an innocent or negligent intermediary can be as valuable as a complicit one (para 114). The services of both a lawyer and an accountant were rarely needed in the same scheme (para 7).",
    source: [{ label: "FATF-Egmont Group – Concealment of Beneficial Ownership (2018), executive summary paras 6-7 and paras 112-114 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF-Egmont-Concealment-beneficial-ownership_eng.pdf" }]
  },
  {
    id: "PROF-003", domain: 1, topic: "Continuum of complicity: unwitting vs innocent involvement", hy: false, difficulty: "hard",
    q: "Rana Odum, a sole-practitioner accountant, formed two companies and helped open their bank accounts for Mr. Kessel, a new client referred by a friend. She verified his passport and address, recorded him as the sole beneficial owner and filed the formation documents. Kessel paid her fees from the account of an unrelated company in another country and asked that both companies use her office as their registered address because he 'travels a lot'. Odum did not consider either point unusual. Police later established that the companies laundered fraud proceeds; Odum earned only her normal fee and knew nothing of the fraud. Using the FATF-Egmont 'continuum of complicity', how is Odum's involvement BEST described?",
    options: [
      "Innocent involvement: she applied CDD and was deceived by a client who presented no red flags",
      "Unwitting: she performed basic CDD, but missed red flags or misunderstood their significance",
      "Wilfully blind: she saw the warning signs for what they were but chose not to ask further questions",
      "Complicit: providing her office as a registered address shows that she knowingly helped hide the owner"
    ],
    answer: [1],
    explanation: "In the FATF-Egmont continuum, 'innocent involvement' means no red flag indicators were apparent, while 'unwitting' means basic CDD was done but red flags were missed or their significance misunderstood. FATF guidance treats payments from un-associated or unknown third parties, and registered office facilities without a proper explanation, as risk indicators; 'travels a lot' does not explain why a new client needs her address. Red flags were present and the runner-up, innocent involvement, does not fit. Wilful blindness requires a deliberate choice not to ask further questions, and complicity requires actual knowledge, which the facts exclude.",
    source: [
      { label: "FATF-Egmont Group – Concealment of Beneficial Ownership (2018), para 108 and Figure 1 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF-Egmont-Concealment-beneficial-ownership_eng.pdf" },
      { label: "FATF RBA Guidance for the Accounting Profession (2019), para 75(w) (copy hosted by Saudi Arabia's AML Permanent Committee)", url: "https://www.aml.gov.sa/en-us/GuidanceReports/RBA%20Accounting%20Profession.pdf" },
      { label: "FATF Guidance for a Risk-Based Approach: Legal Professionals (June 2019), para 104(y)(ii) (copy hosted by Malta's FIAU)", url: "https://fiaumalta.org/app/uploads/2020/10/20190916-FATF-Guidance-for-Legal-Professionals.pdf" }
    ]
  },
  {
    id: "PROF-004", domain: 1, topic: "SRA Accounts Rule 3.3: which client account payments are connected to regulated services", hy: true, difficulty: "hard",
    q: "Northbridge Bank's financial crime team reviews a month of payments out of the client account of Lindqvist & Hale LLP, a law firm in England regulated by the Solicitors Regulation Authority (SRA). Which payments are consistent with rule 3.3 of the SRA Accounts Rules, as the SRA explains it in its warning notice and case studies? (Choose two.)",
    options: [
      "On a house sale the firm handled, paying the estate agent's commission out of the sale proceeds before sending the balance to the seller",
      "Paying the school fees and household bills of a long-standing private client who lives abroad, from money he keeps on account because he finds online banking inconvenient",
      "On a remortgage, paying off the borrower's credit card balances because the lender's mortgage offer lists those specific debts as a condition of completion",
      "Holding money for a newly arrived client who has no UK bank account yet and says she will instruct the firm once a business deal comes through",
      "Receiving stamp duty from a client to whom the firm gave only stand-alone tax advice on a purchase it did not handle, and paying it to HMRC for her"
    ],
    answer: [0, 2],
    explanation: "Rule 3.3 says a client account must not be used to provide banking facilities, and payments into or out of it must be in respect of the firm's delivery of regulated services. The SRA's warning notice says usual payments related to the transaction, such as estate agents' fees on a conveyancing matter, are not affected, and its case studies treat paying debts named as a condition of a mortgage offer as part of the regulated service. Paying a client's routine outgoings for convenience is no longer justifiable: convenience, or lacking a UK bank account, is not a legitimate reason. The runner-up, paying stamp duty, fails because the firm did not act on the purchase, and a retainer for stand-alone advice gives no reason for the money to pass through client account rather than be paid by the client directly.",
    source: [
      { label: "SRA Accounts Rules, rule 3.3 – no banking facilities through client account", url: "https://www.sra.org.uk/solicitors/standards-regulations/accounts-rules/" },
      { label: "SRA – Warning notice: Improper use of client account as a banking facility (updated March 2023)", url: "https://www.sra.org.uk/solicitors/guidance/improper-client-account-banking-facility/" },
      { label: "SRA – Case studies: Improper use of client account as a banking facility (updated March 2023)", url: "https://www.sra.org.uk/solicitors/guidance/improper-use-client-account-banking-facility/" }
    ]
  },
  {
    id: "PROF-005", domain: 1, topic: "Cash paid directly into a solicitor's client account to bypass a no-cash policy", hy: false, difficulty: "hard",
    q: "Halden Conveyancing, a small law firm, holds a client account at Ravensmoor Bank. Its published AML policy says it never accepts cash. Over six weeks, the bank records 19 cash deposits into the client account, each between GBP 4,000 and GBP 9,500, made at nine branches in different towns by people who give only a matter reference. The deposits total GBP 141,000, and the references relate to two residential purchases. Halden's turnover and transaction volumes are otherwise in line with its profile, and its senior partner recently joined the bank's small business advisory panel. What does this activity MOST likely indicate?",
    options: [
      "The firm has quietly dropped its no-cash policy in order to win more conveyancing business",
      "Normal payment of buyers' deposits, since conveyancing clients often pay in several stages",
      "Clients or third parties placing cash directly into the client account to get around the firm's no-cash policy",
      "Branch recording errors, with transfers from other banks wrongly captured as cash deposits"
    ],
    answer: [2],
    explanation: "The Legal Sector Affinity Group guidance (section 5.16.2) warns that clients may try to circumvent a firm's no-cash policy by depositing cash directly into its client account at a bank, that a series of smaller cash payments may be a sign of money laundering, and that an unsolicited cash deposit should lead the firm to consider a disclosure to the NCA. Multiple cash deposits by unidentified people at many branches fit that pattern, not the firm's own choice, so the runner-up has no supporting facts. Staged buyers' deposits are normally paid by transfer from the buyer, and nothing suggests a recording error. The partner's role on a bank panel is irrelevant.",
    source: [
      { label: "Legal Sector Affinity Group – AML Guidance for the Legal Sector (2025), section 5.16.2 (SRA-hosted copy)", url: "https://www.sra.org.uk/globalassets/documents/solicitors/firm-based-authorisation/lsag-aml-guidance.pdf" },
      { label: "FATF Guidance for a Risk-Based Approach: Legal Professionals (June 2019), para 104(i)", url: "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Rba-legal-professionals.html" }
    ]
  },
  {
    id: "PROF-006", domain: 1, topic: "Spreading purchases across several law firms to limit each one's view", hy: false, difficulty: "hard",
    q: "Ostrava Private Bank reviews Mr. Darius Fenn, a non-resident client who bought five apartments in the same city over 18 months, for EUR 380,000 to EUR 520,000 each. A different small law firm in that city handled each purchase, although the first firm completed its work quickly and its fees were competitive. The purchase money came from Fenn's account at the bank, which is funded by transfers from companies in two other countries. Fenn says his wealth comes from a logistics business and that he 'likes to spread his business around'. What is the MOST likely concern with his use of five different firms?",
    options: [
      "Limiting what any single legal professional sees, so that none has the full picture or grounds for suspicion",
      "Shopping for the lowest conveyancing fee on each purchase, which is a commercial choice and not a risk factor",
      "Breaching a rule that a client may instruct only one law firm in each jurisdiction at a time",
      "Using lawyers in several jurisdictions to set up local companies, the pattern typical of TCSP networks"
    ],
    answer: [0],
    explanation: "The FATF-Egmont report (paras 7 and 105) found that where several lawyers or accountants were used in one scheme, they were usually in the same jurisdiction and often unwitting, which suggests criminal clients limit their dealings with any single professional to avoid suspicion. The SRA's 2026 sectoral risk assessment also notes that matters involving multiple firms reduce each firm's visibility over the wider transaction. Fee shopping is the runner-up, but it is undercut by the first firm being quick and competitive. Using TCSPs in multiple jurisdictions is a different pattern, and no rule limits a client to one law firm.",
    source: [
      { label: "FATF-Egmont Group – Concealment of Beneficial Ownership (2018), paras 7 and 105 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF-Egmont-Concealment-beneficial-ownership_eng.pdf" },
      { label: "SRA – Sectoral Risk Assessment (updated September 2026)", url: "https://www.sra.org.uk/sra/research-publications/aml-risk-assessment/" }
    ]
  },
  {
    id: "PROF-007", domain: 1, topic: "Contrived litigation settled too readily through a client account", hy: true, difficulty: "hard",
    q: "Marlow Trading Ltd, incorporated in Country A, sues Petrenko Supplies LLC, incorporated in Country B, for USD 3.2 million for an alleged breach of a supply contract. Petrenko files no defence and, nine days after the claim is issued, pays the full amount plus costs into the client account of Marlow's law firm. On Marlow's instruction, the firm then transfers the money to a third company in Country C. Searches show no shipping or trade history between Marlow and Petrenko, and the same formation agent incorporated both companies. Marlow's lawyers are a well-known litigation firm. Which typology does this MOST likely show?",
    options: [
      "Trade-based laundering through over-invoicing of goods shipped between the two companies",
      "A legitimate commercial settlement, because a court process and a regulated law firm were involved",
      "Contrived litigation, settled too readily, used to move funds through a lawyer's client account",
      "Structuring, because the payment was split between the claim amount and the legal costs"
    ],
    answer: [2],
    explanation: "The FATF's legal professionals guidance lists, as a service risk factor, settlement of default judgments or alternative dispute resolution in an atypical manner, for example when a judgment debt is satisfied too readily (para 104(o)). Here, linked companies with no trading history use an undefended claim to give a transfer the appearance of a court-backed payment and route it through a client account. The runner-up, a genuine settlement, ignores the common formation agent, the absence of any trade and the onward payment to a third company. No goods were shipped, so this is not trade-based laundering, and one payment is not structuring.",
    source: [{ label: "FATF Guidance for a Risk-Based Approach: Legal Professionals (June 2019), paras 44-45 and 104(o)", url: "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Rba-legal-professionals.html" }]
  },
  {
    id: "PROF-008", domain: 1, topic: "Notaries: inadequate consideration in a property deed", hy: false, difficulty: "medium",
    q: "In Country N, a civil-law notary, Maître Collin, is asked to authenticate the sale of a seaside villa by Orvis SARL to Mr. Bastien Roy. The deed states a price of EUR 600,000, while a valuation in the file puts the market value at EUR 1.5 million. Roy explains that the seller 'needs a quick sale' and adds that 'the rest has been settled between us'. Each party is represented by its own lawyer, Roy is paying with a EUR 450,000 loan from a domestic bank plus his savings, and the sale is set to complete in the normal six weeks. Which red flag is MOST significant?",
    options: [
      "The seller is a company rather than a natural person",
      "Each party has its own lawyer in addition to the notary",
      "Part of the price is financed with a loan from a domestic bank",
      "Inadequate consideration in the deed, with a hint that the balance was paid outside it"
    ],
    answer: [3],
    explanation: "The FATF's legal professionals guidance names transactions where it is readily apparent that the consideration is inadequate, especially without a legitimate reason, as a risk factor (para 104(j)), and the LSAG guidance lists significant differences between the declared price and actual values. A price at 40% of value plus a remark that 'the rest' was settled privately suggests an off-deed payment, possibly in cash, that hides the true flow of funds. A corporate seller, separate lawyers and a domestic bank loan are normal features of a property sale.",
    source: [
      { label: "FATF Guidance for a Risk-Based Approach: Legal Professionals (June 2019), para 104(j)", url: "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Rba-legal-professionals.html" },
      { label: "Legal Sector Affinity Group – AML Guidance for the Legal Sector (2025), red flag indicators (SRA-hosted copy)", url: "https://www.sra.org.uk/globalassets/documents/solicitors/firm-based-authorisation/lsag-aml-guidance.pdf" }
    ]
  },
  {
    id: "PROF-009", domain: 1, topic: "Professionals vouching for a client's standing (comfort letters)", hy: false, difficulty: "medium",
    q: "Ms. Ilse Marten applies to open a private banking account at Crestbridge Bank and plans to deposit EUR 8 million from the sale of a stake in a mining company in Country M. She provides a letter from Hollins & Pye, a regulated law firm, stating that 'our client is of excellent standing and her wealth derives from legitimate business activities'. The relationship manager wants to rely on the letter instead of asking for the sale documents. On a call, the partner who signed it says he was instructed three weeks ago, has seen no documents on the sale and wrote the letter 'as a courtesy'. Ms. Marten is not a PEP and her identity documents verify. What is the MOST significant concern?",
    options: [
      "The letter breaches legal professional privilege, so the bank may not keep it on file",
      "A professional is vouching for the client's standing without the knowledge to support it, so the letter is not evidence of source of wealth",
      "The bank may not accept any letter from a law firm, because only auditors may confirm source of wealth",
      "Ms. Marten's identity is unverified, because the law firm did not certify a copy of her passport"
    ],
    answer: [1],
    explanation: "FATF guidance for both legal professionals and accountants lists, as a service risk factor, situations where the professional represents or assures the client's standing, reputation and credibility to third parties without a commensurate knowledge of the client's affairs. The accountants' guidance also warns that criminals use professionals to gain introductions to financial institutions. The partner admits he has seen nothing, so the bank must still obtain and verify evidence of the sale itself. Privilege does not stop a client handing over her own letter, no rule limits source-of-wealth evidence to auditors, and her identity is already verified.",
    source: [
      { label: "FATF Guidance for a Risk-Based Approach: Legal Professionals (June 2019), para 104(d)", url: "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Rba-legal-professionals.html" },
      { label: "FATF RBA Guidance for the Accounting Profession (2019), paras 22(e) and 75(d) (Saudi AML Permanent Committee copy)", url: "https://www.aml.gov.sa/en-us/GuidanceReports/RBA%20Accounting%20Profession.pdf" }
    ]
  },
  {
    id: "PROF-010", domain: 1, topic: "Accountants signing off falsified accounts to justify cash", hy: false, difficulty: "hard",
    q: "Brightwash Ltd runs four hand car washes and banks with Kellby Bank. To support a request for a GBP 600,000 loan and higher cash deposit limits, it provides annual accounts reviewed and signed off by a small accountancy practice, showing turnover of GBP 2.9 million. The bank's analysts estimate that four sites of that size could take about GBP 900,000 a year. Brightwash's monthly cash deposits match the reported turnover almost exactly, card takings are minimal, and its payroll shows few staff for the claimed volumes. The accountancy practice is owned by the brother-in-law of Brightwash's director. Which typology does this MOST likely show?",
    options: [
      "An accountant's sign-off lending legitimacy to falsified accounts that justify placing criminal cash",
      "Tax evasion through under-reporting of turnover to reduce the company's tax bill",
      "Loan fraud only, with turnover exaggerated solely to obtain the GBP 600,000 loan",
      "Structuring of cash deposits to keep each one below a reporting threshold"
    ],
    answer: [0],
    explanation: "The FATF accountants' guidance (para 30) warns that criminals abuse accountants' services to give a sense of legitimacy to falsified accounts that conceal the source of funds, for example by having accounts reviewed and signed off for businesses engaged in criminality. The FATF legal professionals guidance also flags turnover that is unreasonably high for the number of employees and assets. The runner-up, loan fraud only, explains the inflated turnover but not why cash deposits match it every month, which points to criminal cash being placed. Turnover is overstated, not understated, so this is not classic tax evasion, and nothing suggests structuring.",
    source: [
      { label: "FATF RBA Guidance for the Accounting Profession (2019), para 30 (Saudi AML Permanent Committee copy)", url: "https://www.aml.gov.sa/en-us/GuidanceReports/RBA%20Accounting%20Profession.pdf" },
      { label: "FATF Guidance for a Risk-Based Approach: Legal Professionals (June 2019), para 103(y)", url: "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Rba-legal-professionals.html" }
    ]
  },
  {
    id: "PROF-011", domain: 1, topic: "Misuse of insolvency services to break the audit trail", hy: false, difficulty: "medium",
    q: "Over four years, Delford Bank sees the same pattern three times among its small business customers. A company (first a scaffolding firm, then a haulage firm, then a recruitment agency) receives large unexplained transfers from third parties for several months and is then placed into creditors' voluntary liquidation by the same insolvency practitioner, Aldous Rook. Within weeks, a new company with a similar name, the same director and the same trading address opens an account, and the liquidated company's records are reported as 'incomplete'. Creditors, including the tax authority, recover little. Rook's practice is licensed and in good standing. What is the MOST likely concern?",
    options: [
      "Normal business failure in high-risk sectors, which a licensed insolvency practitioner is required to manage",
      "Misuse of insolvency services to break the audit trail of funds laundered through each company",
      "Bust-out fraud by bank employees who approve the new company accounts",
      "Mortgage fraud, because each new company uses the same trading address"
    ],
    answer: [1],
    explanation: "The FATF accountants' guidance (para 30) warns that insolvency practice can be used by criminals to conceal the audit trail of money laundered through a company and to transfer the proceeds of crime, and it notes that incomplete client records are a higher-risk area (para 23). Repeated unexplained inflows, liquidation by the same practitioner, 'incomplete' records and an immediate successor company point to that misuse. A licence does not rule out misuse, so the runner-up ignores the repeated pattern. Nothing involves bank staff or mortgages.",
    source: [{ label: "FATF RBA Guidance for the Accounting Profession (2019), paras 23 and 30 (Saudi AML Permanent Committee copy)", url: "https://www.aml.gov.sa/en-us/GuidanceReports/RBA%20Accounting%20Profession.pdf" }]
  },
  {
    id: "PROF-012", domain: 1, topic: "FATF TCSP guidance: indicators of an undisclosed nominee arrangement", hy: true, difficulty: "hard",
    q: "During a periodic review, Meridian Bank notes several facts about its customer Arlen Shipping Services Ltd. Coralstone Corporate Services, a corporate service provider licensed and supervised in an offshore centre, administers the company. Under the FATF's risk-based guidance for trust and company service providers (TCSPs), which facts are indicators that an undisclosed nominee arrangement may exist? (Choose two.)",
    options: [
      "Arlen's sole director and registered shareholder, Ms. Paola Ferri, is a salaried Coralstone administrator, while Arlen owns vessels worth USD 40 million",
      "Coralstone is shown on Arlen's public records as the provider of its registered office and company secretary",
      "Payment instructions arrive by email from 'D.K.', who is neither an officer nor a shareholder, and Ms. Ferri approves each one within minutes without asking questions",
      "Arlen files its annual accounts on time, audited by an external firm",
      "Coralstone is licensed and supervised by the offshore centre's financial services regulator"
    ],
    answer: [0, 2],
    explanation: "Paragraph 204 of the FATF TCSP guidance lists indicators of an undisclosed nominee arrangement. They include a director or shareholder whose profile, or whose source of wealth, is inconsistent with the entity's activities and assets; a TCSP used to acting on the instructions of someone who is not the director; and instructions that are approved extremely quickly without challenge. The runner-up, Coralstone as registered office and secretary, is the transparent model that paragraph 200 describes: legitimate when the provider's role is visible on the entity's records. Timely audited accounts and the provider's licence are not nominee indicators and do not rule out a hidden controller, so the bank should identify 'D.K.' and who really controls Arlen.",
    source: [
      { label: "FATF Guidance for a Risk-Based Approach: Trust and Company Service Providers (June 2019), paras 198-204 (copy hosted by Malta's FIAU)", url: "https://fiaumalta.org/app/uploads/2020/10/20190916-FATF-Guidance-for-Trust-and-Company-Service-Providers.pdf" }
    ]
  },
  {
    id: "PROF-013", domain: 1, topic: "FATF R.22(e): which services make a firm a TCSP", hy: true, difficulty: "medium",
    q: "Kestrel Corporate Services, based in an offshore financial centre, offers several services. Under FATF Recommendation 22(e), which of them bring Kestrel within the CDD requirements for trust and company service providers when it prepares for or carries out transactions for a client? (Choose three.)",
    options: [
      "Preparing annual accounts and payroll for client companies",
      "Acting as formation agent for new companies",
      "Providing a registered office and correspondence address for client companies",
      "Introducing clients to an unaffiliated bank in exchange for a referral fee",
      "Arranging for its staff to act as nominee shareholders for clients"
    ],
    answer: [1, 2, 4],
    explanation: "R.22(e) covers TCSPs when they act as formation agent of legal persons; act as, or arrange for another person to act as, a director, secretary, partner or similar; provide a registered office, business address or correspondence or administrative address; act as, or arrange for another person to act as, a trustee of an express trust; or act as, or arrange for another person to act as, a nominee shareholder. Preparing accounts and payroll is not on that list (and is not an R.22(d) activity either). Introducing clients to a bank is a risk factor for professionals, not a listed TCSP activity.",
    source: [{ label: "FATF Recommendations (2026), Recommendation 22(e) (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }]
  },
  {
    id: "PROF-014", domain: 3, topic: "Banking a company whose TCSP provides only a registered office", hy: false, difficulty: "hard",
    q: "Harbourline Bank is onboarding Selvan Trading Ltd, a company incorporated in an offshore centre. Its only service provider there, Quayside Agents, provides the registered office and nothing else; Selvan's directors are individuals in another country. To speed things up, the relationship manager asks Quayside to confirm Selvan's source of funds and the purpose of the structure, and proposes to rely on its letter. Quayside replies that it holds the identities of the beneficial owners and directors but no information on Selvan's activities or funds. What is the BEST response for the bank?",
    options: [
      "Treat Quayside's reply as a red flag and exit, because every TCSP must hold source-of-funds information on its clients",
      "Accept the beneficial owner identities and treat the lack of information on activities as a sign of low risk",
      "Obtain the source of funds and the purpose of the structure from Selvan and its directors and verify them, since Quayside's limited role means it is not expected to hold them",
      "Rely on Quayside's letter for all CDD, because a licensed TCSP is automatically an eligible third party under R.17"
    ],
    answer: [2],
    explanation: "The FATF TCSP guidance (Annex 1, para 1) says a TCSP that forms or administers a structure, or acts as its trustee or director, must understand its purpose and source of funds, but a TCSP providing other services such as a registered office need only obtain enough information to identify the beneficial owners and controlling persons. Such providers rely on information from the external directors. The bank must therefore get the purpose and source of funds from the customer itself. Exiting is the runner-up, but Quayside's answer is consistent with its role, not a red flag. Under R.17 the bank keeps ultimate responsibility and must be satisfied that a third party is regulated and supervised for CDD; being licensed does not make every provider an eligible third party.",
    source: [
      { label: "FATF Guidance for a Risk-Based Approach: Trust and Company Service Providers (June 2019), Section I and Annex 1 para 1 (FIAU-hosted copy)", url: "https://fiaumalta.org/app/uploads/2020/10/20190916-FATF-Guidance-for-Trust-and-Company-Service-Providers.pdf" },
      { label: "FATF Recommendations (2026), Recommendation 17 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "PROF-015", domain: 3, topic: "Family offices and managing intermediaries holding powers of attorney", hy: false, difficulty: "hard",
    q: "Aldridge Family Office Ltd manages the wealth of the Aldridge family. It asks Carrow Private Bank to open accounts in the names of four adult family members, over which the family office will hold powers of attorney to trade and make payments. It also wants an account in its own name for its operating costs. The family office is not regulated in its home country. Its CEO says the family members 'prefer not to deal with banks directly' and offers to keep their identity documents on the family office's file. Under the Wolfsberg Private Banking Principles, what is the BEST approach?",
    options: [
      "Treat the family office as the only client for all five accounts and identify its directors and owners",
      "Treat each family member as the client for their account, identify and verify them and the attorney-holders, understand how they are connected, and do due diligence on the family office",
      "Rely on the family office to hold the family members' documents, because as a managing intermediary it becomes the client",
      "Decline both requests, because an unregulated family office may not hold powers of attorney over bank accounts"
    ],
    answer: [1],
    explanation: "The Wolfsberg Principles (1.2.4) distinguish a managing intermediary that is authorised to act on another person's account, where the bank obtains the same information on that person as it would without the intermediary, from one that is itself the accountholder and so is the client. Under 1.2.5, the bank must understand the relationship between the attorney-holder, the accountholder and the beneficial owner, and establish the identity of anyone holding general powers. The bank must also do due diligence on the intermediary; an unregulated family office gives little basis for reliance, and the SRA notes that family offices add layers that can reduce transparency. The family office is the client only for its own operating account, and the Principles do not ban unregulated attorney-holders.",
    source: [
      { label: "Wolfsberg AML Principles for Private Banking (2012), sections 1.2.4-1.2.5", url: "https://db.wolfsberg-group.org/assets/7d384fb4-8c82-4669-acb8-621aed03e928/Wolfsberg%20Private%20Banking%20Principles.pdf" },
      { label: "SRA – Sectoral Risk Assessment (updated September 2026), family offices", url: "https://www.sra.org.uk/sra/research-publications/aml-risk-assessment/" }
    ]
  },
  {
    id: "PROF-016", domain: 3, topic: "UK MLRs reg. 37: simplified due diligence on a pooled client account", hy: true, difficulty: "hard",
    changed: "SI 2026/621 (30 June 2026) added reg. 29(10)-(18) pooled account duties for accounts opened from that date; reg. 37(5) conditions unchanged",
    q: "A UK bank applies simplified due diligence (SDD) to the pooled client account of Ferris Molina LLP, a UK law firm supervised for AML purposes, having assessed the relationship as low risk. The account receives EUR 900,000 from a company in a country on the FATF increased-monitoring list. When the bank asks on whose behalf the money is held, the firm replies that client confidentiality prevents it from naming the client but that the matter is 'a routine property deal'. The firm has banked with the bank for 15 years without incident. What should the bank do FIRST?",
    options: [
      "Continue SDD, because a supervised law firm is responsible for its own clients' due diligence",
      "Close the account at once and return the EUR 900,000 to the sending company",
      "Ask the firm's supervisor to confirm whether the firm is entitled to withhold client names",
      "Stop applying SDD to the pooled account, since a condition for it is no longer met, and review the activity for suspicion"
    ],
    answer: [3],
    explanation: "Regulation 37(5) of the UK MLRs allows SDD on a pooled account held by a supervised relevant person only if the relationship is low risk and information on the identity of the persons on whose behalf money is held is available to the bank on request. Regulation 37(8) forbids continuing SDD if the risk assessment changes or the bank suspects money laundering. The refusal breaks condition (b) and, with a high-risk-country source, calls for an assessment of whether a SAR is needed. The runner-up, continuing SDD, treats the firm's supervised status as enough, but that is only one of the conditions. Closing and returning funds before assessing suspicion is premature, and the supervisor does not answer the bank's own CDD questions. Since 30 June 2026, for pooled accounts opened from that date, regulation 29(14) and (18) also oblige the account holder to give this information on request, and confidentiality is no bar (only legal professional privilege is).",
    source: [
      { label: "UK MLRs 2017, regulation 37(5), (6) and (8) (legislation.gov.uk, as amended to 2026)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/37" },
      { label: "The Money Laundering and Terrorist Financing (Amendment) Regulations 2026 (SI 2026/621), reg. 15 (new reg. 29(10)-(18))", url: "https://www.legislation.gov.uk/uksi/2026/621/made" }
    ]
  },
  {
    id: "PROF-017", domain: 3, topic: "EU AMLR Article 66: disclosure of nominee arrangements to obliged entities", hy: false, difficulty: "hard",
    q: "In September 2027, Volta Bank in an EU Member State onboards Ristra Logistics BV. Its sole director and 100% registered shareholder is Mr. Pieter Aals, an employee of a corporate service provider, who confirms that he acts as nominee for one of his firm's clients. Ristra's adviser tells the bank that nominee arrangements are private agreements and that the nominator's identity 'is only for the central register'. The company was formed in 2024 and has a turnover of EUR 4 million. Under the EU AMLR, which response is CORRECT?",
    options: [
      "Ristra must report to the bank, as part of CDD, the nominee status and the identity of the nominator and the nominator's beneficial owners",
      "The bank may record Mr. Aals as the beneficial owner, because he is the registered holder of 100% of the shares",
      "The bank must obtain the nominator's identity from the central register, because the company may not disclose it to obliged entities",
      "Nominee arrangements are banned under the AMLR, so the bank must reject the application"
    ],
    answer: [0],
    explanation: "Article 66 of the AMLR, which applies from 10 July 2027, requires nominee shareholders and nominee directors to hold up-to-date information on their nominator and the nominator's beneficial owners and to disclose it, and their status, to the legal entity. The entity must report it to the central register and also to obliged entities applying CDD. Article 22 requires the bank to record persons holding shares or directorships in nominee form. The runner-up, relying on the register, ignores the company's own duty to tell the bank. A nominee is never the beneficial owner, and the AMLR regulates nominee arrangements rather than banning them.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR), Articles 22, 66 and 90 (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }]
  },
  {
    id: "PROF-018", domain: 3, topic: "UK MLRs: bookkeepers and tax return preparers as relevant persons", hy: false, difficulty: "medium",
    q: "Tamsin Holt, a KYC analyst at a UK bank, is onboarding Ledgerline Ltd, a firm that keeps the books and prepares and files tax returns for 400 small businesses. Ledgerline says it is outside the Money Laundering Regulations because it gives no tax 'advice' and only processes figures that clients provide, so it has no AML supervisor. Its directors are qualified bookkeepers who do not belong to any professional body. What is the BEST response?",
    options: [
      "Accept the explanation, because only firms that give tax advice count as tax advisers under the MLRs",
      "Treat Ledgerline as in scope as an external accountant and tax adviser, and confirm that HMRC supervises it, since it has no professional body",
      "Ask Ledgerline to register with the FCA, which supervises all accountancy firms under the MLRs",
      "Accept the explanation for the bookkeeping, but require Ledgerline to register with OPBAS for its tax work"
    ],
    answer: [1],
    explanation: "Regulation 11 of the UK MLRs defines an external accountant as a firm that by way of business provides accountancy services, and a tax adviser as a firm that provides material aid, or assistance or advice, in connection with other persons' tax affairs, directly or through a third party. Preparing and filing returns is material aid. Under regulation 7(1)(c)(iv), HMRC supervises accountants and tax advisers that are not supervised by a listed professional body. OPBAS oversees the professional body supervisors, not firms, and the FCA is not the accountancy supervisor while the planned move to a single professional services supervisor awaits legislation.",
    source: [
      { label: "UK MLRs 2017, regulation 11 (auditors, external accountants, tax advisers)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/11" },
      { label: "UK MLRs 2017, regulation 7 (supervisory authorities)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/7" }
    ]
  },
  {
    id: "PROF-019", domain: 1, topic: "EU AMLR Article 70: limits of the professional secrecy exemption", hy: true, difficulty: "hard",
    q: "In 2028, Ms. Hedda Lindt, a tax adviser in an EU Member State, represents Varga Holdings in a tax dispute that is before the courts. In a meeting on litigation strategy, Varga's director also asks how to route the company's undeclared foreign profits through a new foundation 'so the tax authority never sees them', and mentions that the profits came from invoices for services that were never supplied. Ms. Lindt's firm believes that anything learned while acting for a client in judicial proceedings is exempt from reporting. Under the EU AMLR, which statement is CORRECT?",
    options: [
      "The exemption covers everything she heard, because it was said in a meeting about pending court proceedings",
      "Tax advisers fall outside the exemption altogether, which applies only to notaries and lawyers",
      "Only the self-regulatory body may decide whether the exemption applies, so she must send it the file first",
      "The exemption does not apply where she knows the client seeks advice for money laundering or its predicate offences, which may be inferred from objective facts"
    ],
    answer: [3],
    explanation: "Article 70(2) of the AMLR exempts notaries, lawyers, other independent legal professionals, auditors, external accountants and tax advisers from reporting information obtained when ascertaining a client's legal position or representing the client in judicial proceedings. The exemption does not apply when they take part in money laundering, give advice for that purpose, or know that the client seeks advice for money laundering or its predicate offences; knowledge or purpose may be inferred from objective factual circumstances. Recital 143 protects advice sought on the pending proceedings themselves, but the request to hide profits from invoices for services never supplied is a separate request for help with laundering. The runner-up stops at the first sentence of the rule. Tax advisers are expressly covered, and Article 70(1) only lets Member States route reports through a self-regulatory body, which must forward them to the FIU promptly and unfiltered.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR), Article 70 and recital 143 (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }]
  },
  {
    id: "PROF-020", domain: 1, topic: "Companies struck off for false information still using old documents", hy: false, difficulty: "medium",
    q: "In September 2026, Thornbury Bank's onboarding team receives an application from Halcyon Freight Ltd, a UK company. The director provides a certificate of incorporation, an old Companies House confirmation statement and a lease for a serviced office. A check of the live Companies House register shows that Halcyon was dissolved earlier in the year through expedited strike-off, which Companies House uses for companies that gave false information. The director says the dissolution was 'an administrative error' and that the company has traded for years. The serviced office provider confirms that Halcyon has a mailbox there. What is the MOST significant finding?",
    options: [
      "The company is relying on Companies House documents it still holds after being struck off for giving false information",
      "The serviced office shows that the company has no physical presence, which makes it a shell bank",
      "The confirmation statement is more than a year old, so the bank must ask for an updated one",
      "The director has not explained why the company uses a serviced office rather than a warehouse"
    ],
    answer: [0],
    explanation: "The SRA's 2026 sectoral risk assessment notes that Companies House now uses expedited strike-off to dissolve companies that gave false information (920 companies in the past year) and that criminals using such companies may still hold their old Companies House documents and use them to prove their credentials. It advises checking that a company is properly and currently listed. A dissolved company cannot be onboarded on the strength of its old papers, and the false-information strike-off is a strong red flag. A serviced office does not make a trading company a shell bank, and the age of the confirmation statement or the choice of premises is minor next to the dissolution.",
    source: [{ label: "SRA – Sectoral Risk Assessment (updated September 2026), company registration", url: "https://www.sra.org.uk/sra/research-publications/aml-risk-assessment/" }]
  },
  {
    id: "PROF-021", domain: 1, topic: "Client risk factors for legal professionals: choice of firm and premium fees", hy: false, difficulty: "hard",
    q: "Marsh & Tolley, a two-partner law firm in a small market town whose work is mainly wills and local residential conveyancing, receives an instruction from Mr. Anton Reyes, who lives abroad. He wants the firm to handle his purchase of a shipping company incorporated in another country. He offers to pay twice the firm's usual hourly rate 'for priority', asked for a written fee estimate before instructing, and will fund the purchase from his own account at a bank in his home country. His business partner is a director of a company listed on a regulated market. Under the FATF guidance for legal professionals, which factors raise the risk of this instruction? (Choose two.)",
    options: [
      "The client's business partner is a director of a company listed on a regulated market",
      "The client asked for a written fee estimate before instructing the firm",
      "The reason for choosing this firm is unclear, given its size, location and specialisation",
      "The funds will come from the client's own account at a bank in his home country",
      "The client offers unusually high fees for work that would not ordinarily warrant a premium"
    ],
    answer: [2, 4],
    explanation: "The FATF's legal professionals guidance (para 103) lists, among client risk factors, a client choosing a firm for unclear reasons given its size, location or specialisation, and a client offering unusually high fees for services that would not ordinarily warrant such a premium (bona fide contingency fees excepted). A small wills and conveyancing practice asked to buy a foreign shipping company at double rates meets both. Paying from his own account is the opposite of the unexplained third-party payments that the guidance flags, asking for a fee estimate is normal, and a business partner's listed-company directorship is not a risk factor.",
    source: [{ label: "FATF Guidance for a Risk-Based Approach: Legal Professionals (June 2019), para 103 (client risk factors)", url: "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Rba-legal-professionals.html" }]
  },
  {
    id: "PROF-022", domain: 1, topic: "Conveyancing: vendor impersonation fraud through a client account", hy: false, difficulty: "hard",
    q: "Pellow & Co, a law firm, acts for 'Mr. Gerald Hume', who wants to sell a buy-to-let house he owns outright. He is onboarded remotely: he says he lives overseas, passes a video identity check, and asks that the GBP 410,000 sale proceeds be sent to an account he opened at an online bank two weeks earlier. The buyer's money reaches Pellow's client account from a mortgage lender, and the sale completes. A month later the real Mr. Hume, who lives locally, finds that his house has been sold. The receiving bank sees the proceeds leave the new account within 48 hours in transfers to six crypto exchanges. Which typology does this case MOST likely show?",
    options: [
      "Mortgage fraud by the buyer, who overstated the property's value in order to borrow more",
      "Vendor impersonation fraud, with the proceeds passing through the client account and gaining an appearance of legitimacy",
      "Money mule activity by the law firm, which knowingly received and passed on criminal funds",
      "Real estate laundering by the buyer, who is integrating criminal funds into the property"
    ],
    answer: [1],
    explanation: "The SRA's 2026 sectoral risk assessment identifies vendor impersonation fraud as a continuing risk in property transactions, creating both fraud and money laundering exposure when criminal proceeds pass through client accounts and gain an appearance of legitimacy. It also warns that remote onboarding and AI-enabled impersonation, such as deepfakes, increase identity fraud risk. The runner-up, laundering by the buyer, does not fit because the buyer's money came from a mortgage lender; the criminal is the fake seller. Nothing suggests an inflated valuation or that the firm knew of the fraud.",
    source: [{ label: "SRA – Sectoral Risk Assessment (updated September 2026), vendor fraud and technology risks", url: "https://www.sra.org.uk/sra/research-publications/aml-risk-assessment/" }]
  },
  {
    id: "PROF-023", domain: 1, topic: "UK NRA 2025: definition of a professional enabler", hy: true, difficulty: "medium",
    q: "A UK bank's financial crime training defines a 'professional enabler' as a lawyer, accountant or TCSP who knowingly launders money for criminals. Which change would BEST align the training with the definition used in the UK's 2025 National Risk Assessment?",
    options: [
      "Limit the term to professionals who have been convicted of a money laundering offence",
      "Restrict the term to professionals outside the regulated sector, since regulated firms are supervised",
      "Replace the term with 'professional money launderer', since the NRA treats the two as identical",
      "Extend it to deliberate, reckless, improper, dishonest or negligent conduct that enables criminality"
    ],
    answer: [3],
    explanation: "The 2025 NRA (para 3.128) defines a professional enabler as an individual or organisation providing professional services that enable criminality, whose behaviour is deliberate, reckless, improper, dishonest and/or negligent through a failure to meet professional and regulatory obligations. Knowledge is not required, so a negligent professional can be an enabler. The definition does not depend on a conviction or on being outside the regulated sector, and it is broader than outsourcing laundering to full-time third parties.",
    source: [{ label: "HM Treasury/Home Office – National Risk Assessment of Money Laundering and Terrorist Financing 2025, paras 3.127-3.128", url: "https://assets.publishing.service.gov.uk/media/6877be59760bf6cedaf5bd4f/National_Risk_Assessment_of_Money_Laundering_and_Terrorist_Financing_2025_FINAL.pdf" }]
  },
  {
    id: "PROF-024", domain: 1, topic: "Trusts set up by professionals: a charity as placeholder beneficiary", hy: false, difficulty: "hard",
    q: "Weston Private Bank is onboarding the Arbor Trust, a discretionary trust set up two months ago by a law firm that also acts as its sole trustee. The trust deed names a children's hospital charity as the only beneficiary, and the trustee has power to add beneficiaries. The trust will hold the shares of a company that owns three commercial properties, funded by the settlor, Mr. Corin Blake, a property developer. The lawyer mentions that Blake's two adult sons 'will be added in due course'. The charity has received no distributions, and audited accounts document Blake's source of wealth. Which feature is the MOST significant red flag?",
    options: [
      "A law firm acts as the professional trustee of a family trust",
      "The trust holds shares in a property-owning company rather than the properties directly",
      "A charity is named as the sole beneficiary, apparently as a placeholder for the real beneficiaries",
      "The settlor is a property developer whose wealth comes from his own business"
    ],
    answer: [2],
    explanation: "FATF guidance for legal professionals and accountants gives, as an example of advice misused to obscure ownership, a discretionary trust that names a charity as the sole beneficiary initially, with a view to adding the real beneficiaries later. The lawyer's remark about the sons confirms that pattern. The runner-up, holding company shares, appears in the same guidance only where the trust is set up with the intention of making beneficiaries harder to identify, and holding property through a company is common; here the documented wealth and audited accounts give no sign of that intent. Professional trustees and developer settlors are normal.",
    source: [
      { label: "FATF Guidance for a Risk-Based Approach: Legal Professionals (June 2019), para 104(m)", url: "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Rba-legal-professionals.html" },
      { label: "FATF RBA Guidance for the Accounting Profession (2019), para 75(b) (Saudi AML Permanent Committee copy)", url: "https://www.aml.gov.sa/en-us/GuidanceReports/RBA%20Accounting%20Profession.pdf" }
    ]
  },
  {
    id: "PROF-025", domain: 1, topic: "Notarised capital increases into a company bought out of liquidation", hy: false, difficulty: "medium",
    q: "The office of a notary, Maître Ferrand, in Country L records the following for Delvaux Industrie SA, which Mr. Ilan Varo bought out of liquidation in March for EUR 1. Between April and June, Varo makes six capital increases of EUR 150,000 to EUR 400,000 each, totalling EUR 1.9 million, each paid from a different foreign company. Delvaux has no employees, has not restarted trading and has no business plan on file. Varo says he 'believes in the brand'. The former owners are unrelated to Varo, and the court approved the liquidator's sale. Which red flag is MOST significant?",
    options: [
      "Successive capital contributions from varied foreign sources into a dormant company with no apparent economic reason",
      "The EUR 1 price, which shows that the liquidator undervalued the company's assets",
      "The court's approval of the sale, which suggests the court was misled about the buyer",
      "The fact that the former owners are unrelated to the new buyer"
    ],
    answer: [0],
    explanation: "FATF guidance for legal professionals and accountants lists successive capital or other contributions in a short period to the same entity with no apparent legitimate reason, and acquisitions of businesses in liquidation with no apparent legitimate reason, as service risk factors. Here EUR 1.9 million arrives in six tranches from different foreign companies into a shell with no plan, staff or trade, and the only explanation is vague. A nominal price is common for insolvent companies, court approval is a normal safeguard, and unrelated former owners are what one would expect in an arm's-length sale.",
    source: [
      { label: "FATF Guidance for a Risk-Based Approach: Legal Professionals (June 2019), para 104(u)-(v)", url: "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Rba-legal-professionals.html" },
      { label: "FATF RBA Guidance for the Accounting Profession (2019), para 75(r)-(s) (Saudi AML Permanent Committee copy)", url: "https://www.aml.gov.sa/en-us/GuidanceReports/RBA%20Accounting%20Profession.pdf" }
    ]
  }
]);
