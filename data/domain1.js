window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "D1-001",
    domain: 1,
    topic: "Stages of money laundering",
    hy: true,
    q: "A drug trafficker instructs the owner of a busy car wash to add bundles of street cash to the business's daily cash deposits at a local bank. Which stage of money laundering does this activity MOST directly represent?",
    options: ["Layering", "Placement", "Integration", "Structuring"],
    answer: [1],
    explanation: "Placement is the first entry of illicit cash into the financial system, frequently by commingling it with the cash receipts of a cash-intensive business. Layering (moving funds to hide the audit trail) and integration (returning the funds as apparently legitimate wealth) come later. Structuring is a technique for avoiding reporting thresholds, not a stage of laundering.",
    source: [
      { label: "UNODC – Money-laundering overview: placement moves funds away from direct association with the crime (first of three stages)", url: "https://www.unodc.org/unodc/en/money-laundering/overview.html" }
    ]
  },
  {
    id: "D1-002",
    domain: 1,
    topic: "Stages of money laundering",
    hy: true,
    q: "Funds already held at a bank are wired within one week through accounts of four shell companies in three different jurisdictions. Each transfer is described as a \"consulting fee\" or \"loan repayment.\" Which stage of money laundering is MOST likely occurring?",
    options: ["Placement", "Integration", "Layering", "Commingling"],
    answer: [2],
    explanation: "Layering separates illicit proceeds from their source through complex, often cross-border transactions with false descriptions, which makes the audit trail hard to follow. The funds are already in the financial system, so this is not placement, and they have not yet come back to the criminal as apparently legitimate wealth (integration). Commingling is a technique, usually used at placement, not a stage.",
    source: [
      { label: "UNODC – Money-laundering overview: layering disguises the trail to foil pursuit", url: "https://www.unodc.org/unodc/en/money-laundering/overview.html" }
    ]
  },
  {
    id: "D1-003",
    domain: 1,
    topic: "Stages of money laundering",
    hy: true,
    q: "A businessman controls an offshore company that holds laundered funds. The offshore company \"lends\" him money to buy a luxury home, and he makes documented repayments on the loan. Which stage of money laundering does this loan-back arrangement BEST illustrate?",
    options: ["Integration", "Placement", "Layering", "Smurfing"],
    answer: [0],
    explanation: "In a loan-back scheme, the criminal's own illicit funds come back to him as an apparently legitimate loan and are used to buy assets, which is the integration stage. Placement is the initial entry of cash and layering is the obscuring of the trail. Smurfing is a placement technique that uses many people to make small deposits.",
    source: [
      { label: "UNODC – Money-laundering overview: integration makes the money available to the criminal from seemingly legitimate sources", url: "https://www.unodc.org/unodc/en/money-laundering/overview.html" }
    ]
  },
  {
    id: "D1-004",
    domain: 1,
    topic: "Structuring",
    hy: true,
    q: "A US bank customer deposits $9,400, $9,700 and $9,200 in cash on three consecutive days. On the second day she asks the teller at what amount the bank \"has to file paperwork.\" The customer shows the bank documents proving the cash came from a legitimate inheritance. Which statement is MOST accurate?",
    options: [
      "No concern exists because the source of funds has been documented as legitimate",
      "The activity is only reportable if the total exceeds $10,000 on a single business day",
      "The bank should file a CTR for each deposit and take no further action",
      "The pattern indicates structuring, which is an offense even if the funds are legitimate"
    ],
    answer: [3],
    explanation: "Under 31 USC 5324, breaking up cash transactions to evade CTR reporting is a crime whatever the source of the funds, and the customer's question about the threshold is a classic red flag. The bank should consider filing a SAR. A legitimate source does not cure structuring. CTRs are not required for individual deposits of $10,000 or less that do not aggregate above $10,000 in a business day.",
    source: [
      { label: "31 USC 5324(a)(3) – structuring to evade CTR reporting is an offense (no requirement that funds be illicit)", url: "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title31-section5324&num=0&edition=prelim" },
      { label: "31 CFR 1010.100(xx) – definition of structuring; transactions need not exceed $10,000 at any institution on any day", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-A/section-1010.100" }
    ]
  },
  {
    id: "D1-005",
    domain: 1,
    topic: "Funnel accounts",
    hy: false,
    q: "An account opened in Chicago receives many cash deposits, each under $10,000, made at branches in several different states. Within a day or two the balance is withdrawn in cash at branches near the southwest US border. Which typology does this pattern MOST closely match?",
    options: ["Nested account", "Payable-through account", "Concentration account", "Funnel account"],
    answer: [3],
    explanation: "FinCEN's 2014 advisory (FIN-2014-A005) defines a funnel account as an account in one geographic area that receives multiple cash deposits, often below the cash reporting threshold, from which the funds are withdrawn in a different geographic area with little time elapsing between deposits and withdrawals. It is commonly linked to Mexico-related drug proceeds and TBML. Nested and payable-through accounts are correspondent banking structures. A concentration account is an internal bank account used to pool funds.",
    source: [
      { label: "FinCEN Advisory FIN-2014-A005 – definition of a funnel account and link to TBML", url: "https://www.fincen.gov/sites/default/files/advisory/FIN-2014-A005.pdf" }
    ]
  },
  {
    id: "D1-006",
    domain: 1,
    topic: "Trade-based money laundering",
    hy: true,
    q: "A trade finance analyst reviews documents for a shipment of industrial valves. Which of the following are red flags for trade-based money laundering? (Choose two.)",
    options: [
      "The invoiced unit price is far above the fair market value of comparable valves",
      "Payment is made by a letter of credit issued by a well-established bank, consistent with the customer's history",
      "The goods description on the bill of lading does not match the commercial invoice",
      "The shipping route is direct and consistent with the stated origin and destination"
    ],
    answer: [0, 2],
    explanation: "Over- or under-invoicing and significant discrepancies between the goods described on the bill of lading and the invoice are core TBML red flags identified by FinCEN (FIN-2010-A001) and the FATF-Egmont 2020 TBML report, because misrepresenting price, quantity or type of goods is used to move value across borders. A letter of credit consistent with the customer's history and a logical shipping route are normal features of trade, not indicators.",
    source: [
      { label: "FinCEN Advisory FIN-2010-A001 – TBML red flags incl. discrepancies between bill of lading and invoice; over/under-invoicing", url: "https://www.fincen.gov/sites/default/files/advisory/fin-2010-a001.pdf" },
      { label: "FATF–Egmont (2020) Trade-Based Money Laundering: Trends and Developments – over/under-invoicing and falsely described goods (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/other_docs/FATF%20docs/Trade-Based-Money-Laundering-Trends-and-Developments.pdf" }
    ]
  },
  {
    id: "D1-007",
    domain: 1,
    topic: "Black Market Peso Exchange",
    hy: true,
    q: "Which description BEST captures the Black Market Peso Exchange (BMPE) money laundering system?",
    options: [
      "Colombian importers deposit pesos directly into US bank accounts to buy US dollars at the official exchange rate",
      "A peso broker buys cartel-held US dollars in the US and sells them to Colombian importers, who use them to pay for goods, and the cartel is paid in pesos",
      "Cartels smuggle bulk US currency into Colombia and exchange it for pesos at licensed exchange houses",
      "Colombian banks issue letters of credit in pesos that US exporters convert through correspondent accounts"
    ],
    answer: [1],
    explanation: "In the BMPE, a broker takes drug dollars in the US and sells them (or pays with them) on behalf of Colombian importers buying US goods. The cartel receives clean pesos in Colombia from the broker. It is a classic form of trade-based laundering and value transfer that avoids physically moving currency across the border. The other options describe legitimate exchange or bulk cash smuggling, not the BMPE.",
    source: [
      { label: "FinCEN Advisory FIN-2010-A001, fn. 9 – BMPE swaps cartel-owned US dollars for pesos already in Colombia by selling the dollars to Colombian businesses buying US goods", url: "https://www.fincen.gov/sites/default/files/advisory/fin-2010-a001.pdf" }
    ]
  },
  {
    id: "D1-008",
    domain: 1,
    topic: "Hawala and IVTS",
    hy: false,
    q: "An investigator is examining an informal value transfer system (hawala) that operates between a grocery store in Europe and a trader in South Asia. Which feature of hawala makes it MOST attractive to money launderers and terrorist financiers?",
    options: [
      "All transfers must go through the central bank of the receiving country",
      "Each transfer produces a SWIFT message showing the originator and the beneficiary",
      "Value is transferred without funds physically moving, and hawaladars settle balances later, often through trade and with minimal records",
      "Hawala transfers are guaranteed by deposit insurance in both countries"
    ],
    answer: [2],
    explanation: "Hawala moves value through trust networks. The sending hawaladar tells a counterpart to pay the beneficiary, and the two settle their balances later, often through cash, trade invoices or other transfers, with little documentation. This makes the flow of funds hard to trace (FATF report on hawala and similar service providers). The other options describe formal-sector features that hawala lacks.",
    source: [
      { label: "Central Bank of the UAE – AML/CFT guidance for hawala providers, s.2: FATF definition (settlement through trade, cash and long-term net settlement) and hawala risks", url: "https://www.centralbank.ae/media/b50eai4u/amlcft-guidance-for-registered-hawala-providers-and-lfis-providing-services-to-registered-hawala-providers.pdf" }
    ]
  },
  {
    id: "D1-009",
    domain: 1,
    topic: "Correspondent banking - nesting",
    hy: true,
    q: "A US bank's review of its correspondent account for a respondent bank in Country X finds many payments that originate from customers of three other foreign banks. The respondent has quietly offered these banks access to its US account. What is this practice called?",
    options: ["Nested (downstream) correspondent banking", "Payable-through banking", "Concentration banking", "Cover payment stripping"],
    answer: [0],
    explanation: "Nesting occurs when a respondent bank lets other foreign financial institutions reach the correspondent through its own account. The US bank then has no direct relationship with, or due diligence on, the underlying banks. Payable-through accounts give the respondent's own customers direct access. Stripping is the removal of originator information from payment messages.",
    source: [
      { label: "Wolfsberg CBDDQ Glossary v3.0 – \"Downstream correspondent banking\" (nesting) and payable-through accounts", url: "https://db.wolfsberg-group.org/assets/a7b0bc0c-5cf7-4c00-80fb-3cfff6cc7adb/CBDDQ%20Glossary%20v3.0.pdf" },
      { label: "31 CFR 1010.610(b)(2) – EDD: determine whether the foreign bank provides correspondent accounts to other foreign banks using the US account", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-F/section-1010.610" }
    ]
  },
  {
    id: "D1-010",
    domain: 1,
    topic: "Correspondent banking - payable-through accounts",
    hy: true,
    q: "A foreign bank asks a US bank for an account that its own customers can use directly, by writing checks and initiating wires in their own names as sub-account holders. Which type of arrangement is this, and why is it high risk?",
    options: [
      "A nested account, because the foreign bank is itself a customer",
      "A payable-through account, because the US bank may have no direct knowledge of sub-account holders who conduct transactions on the account",
      "A private banking account, because the sub-account holders are wealthy individuals",
      "A concentration account, because customer funds are pooled without identification"
    ],
    answer: [1],
    explanation: "In a payable-through account, customers of the foreign bank have direct signing authority over a US account. The US bank therefore processes activity for people it has not identified. FFIEC guidance treats PTAs as higher risk, and for foreign banks subject to USA PATRIOT Act s.312 enhanced due diligence (31 CFR 1010.610(b)(1)(iii)), the US bank must obtain the identity of persons with authority to direct transactions through the PTA and the sources and beneficial owners of the funds. Nesting involves other banks, not the respondent's retail customers. Concentration accounts are internal pooling accounts.",
    source: [
      { label: "31 CFR 1010.610(b)(1)(iii) – payable-through account definition and EDD on persons with authority to direct transactions", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-F/section-1010.610" },
      { label: "Wolfsberg CBDDQ Glossary v3.0 – payable-through accounts give the respondent’s customers direct access", url: "https://db.wolfsberg-group.org/assets/a7b0bc0c-5cf7-4c00-80fb-3cfff6cc7adb/CBDDQ%20Glossary%20v3.0.pdf" }
    ]
  },
  {
    id: "D1-011",
    domain: 1,
    topic: "Front and shell companies",
    hy: false,
    q: "A restaurant with 20 seats reports daily cash revenues comparable to those of a 200-seat restaurant. It has real staff, a menu and regular customers. Which laundering method is this pattern MOST consistent with?",
    options: [
      "A shell company with no operations issuing false invoices",
      "Cuckoo smurfing through third-party accounts",
      "A front company commingling illicit proceeds with legitimate revenue",
      "A trust used to conceal the settlor's identity"
    ],
    answer: [2],
    explanation: "A front company runs a real business but inflates its receipts by adding criminal proceeds, so that the cash looks like legitimate revenue. Sales far above what the business's capacity could produce are a key red flag. A shell company has no real operations. Cuckoo smurfing and trusts are different typologies.",
    source: [
      { label: "FATF–Egmont (2018) Concealment of Beneficial Ownership – definitions of front company (functioning, often cash-intensive business) and shell company (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF-Egmont-Concealment-beneficial-ownership_eng.pdf" }
    ]
  },
  {
    id: "D1-012",
    domain: 1,
    topic: "Real estate",
    hy: true,
    q: "A newly formed LLC buys a luxury condominium for cash. The purchase funds are wired from the client trust account of a foreign law firm, and the LLC's registered agent is a nominee company. Which risk is MOST significant in this transaction?",
    options: [
      "Mortgage fraud from inflated appraisal values",
      "Unlicensed money transmission by the law firm",
      "Structuring of payments below the CTR threshold",
      "Concealment of the true beneficial owner through a legal entity and a gatekeeper"
    ],
    answer: [3],
    explanation: "All-cash real estate purchases through legal entities, funded via attorney accounts and nominees, are a well-known way to hide beneficial ownership (FATF 2022 real estate RBA guidance; FinCEN's residential real estate Geographic Targeting Orders, which until February 2026 required title insurers to identify the natural persons behind entities making non-financed purchases). No mortgage is involved, so mortgage fraud does not apply. A single large wire is not structuring, and a law firm's client account payment is not in itself money transmission.",
    source: [
      { label: "FATF (2022) Guidance for a Risk-Based Approach: Real Estate Sector – legal persons, nominees and client accounts used to obscure beneficial owners (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/Best_practicies/RBA-Real-Estate-Sector.pdf.coredownload.pdf.pdf" },
      { label: "FinCEN (Oct 2025) – renewal of residential real estate GTOs covering non-financed purchases through shell companies, expiring Feb 28, 2026", url: "https://www.fincen.gov/news/news-releases/fincen-renews-residential-real-estate-geographic-targeting-orders-0" }
    ]
  },
  {
    id: "D1-013",
    domain: 1,
    topic: "Casinos and gaming",
    hy: false,
    q: "A patron buys $8,000 in chips with small-denomination bills, plays a few low-stakes hands over 20 minutes, then redeems the chips and asks for the proceeds as a casino check. What is this activity MOST likely designed to do?",
    options: [
      "Convert illicit cash into a casino-issued instrument that appears to be gambling winnings",
      "Evade income tax on gambling winnings",
      "Launder funds through the casino's front-money account in another country",
      "Obtain credit markers without a credit check"
    ],
    answer: [0],
    explanation: "Buying chips with cash, playing minimally and cashing out for a check or wire is a classic casino laundering red flag. It turns street cash into a clean-looking instrument that can be explained as winnings. The pattern does not involve credit markers or foreign front-money accounts, and with minimal play there are no real winnings to hide from the tax authorities.",
    source: [
      { label: "FATF (2009) Vulnerabilities of Casinos and Gaming Sector – buying chips for cash and redeeming by casino cheque; minimal gaming indicator (EAG copy)", url: "https://eurasiangroup.org/files/FATF_docs/Casinos_and_Gaming_Sector.pdf" }
    ]
  },
  {
    id: "D1-014",
    domain: 1,
    topic: "Insurance",
    hy: false,
    q: "A customer buys a single-premium life insurance policy with a large lump sum. Three months later he surrenders it, accepts a substantial surrender charge without complaint, and asks that the refund be paid to an unrelated third party abroad. Which statement BEST describes this activity?",
    options: [
      "Normal behavior for a customer whose financial circumstances have changed",
      "A red flag for laundering through early surrender of an insurance product",
      "Premium fraud committed against the policyholder by the insurer",
      "A tax-efficient investment strategy that is routine for high net worth clients"
    ],
    answer: [1],
    explanation: "FinCEN's insurance guidance (FIN-2008-G004) lists as red flags the early termination of a product (including during the free-look period), especially at a cost to the customer, or where the refund is directed to an apparently unrelated third party. The refund check or wire from the insurer makes the funds look legitimate. The indifference to losses and the third-party payout are what separate this from normal changes in circumstances.",
    source: [
      { label: "FinCEN FIN-2008-G004 insurance FAQ – red flags: early termination (incl. free-look period) at a cost, refunds to unrelated third parties", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/frequently-asked-questions-anti-money-laundering-program" }
    ]
  },
  {
    id: "D1-015",
    domain: 1,
    topic: "Securities",
    hy: false,
    q: "A new brokerage customer deposits a large block of thinly traded, low-priced shares acquired from an unknown source. The stock price rises sharply after a burst of online promotion. The customer sells the whole position and immediately wires the proceeds offshore. What does this pattern MOST likely indicate?",
    options: [
      "Legitimate profit-taking by a long-term investor",
      "Front-running of institutional client orders",
      "Microcap market manipulation (pump-and-dump) and laundering of the proceeds",
      "Insider trading ahead of a merger announcement"
    ],
    answer: [2],
    explanation: "Depositing large blocks of low-priced securities, promotional hype, liquidation and immediate outbound wires are red flags for pump-and-dump schemes and laundering through the securities sector (FINRA Regulatory Notice 21-03; FATF 2009 securities sector report). Front-running involves a broker trading ahead of client orders. Nothing in the scenario points to material non-public information about a merger.",
    source: [
      { label: "FINRA Regulatory Notice 21-03 – red flags: deposits of large blocks of thinly traded low-priced securities, promotional campaigns", url: "https://www.finra.org/rules-guidance/notices/21-03" },
      { label: "FATF (2009) ML and TF in the Securities Sector – pump-and-dump schemes in low-priced securities (EAG copy)", url: "https://eurasiangroup.org/files/FATF_docs/ML_and_TF_in_the_Securities_Sector.pdf" }
    ]
  },
  {
    id: "D1-016",
    domain: 1,
    topic: "Gatekeepers",
    hy: false,
    q: "A solicitor's client account receives $2 million from a new overseas client for an intended property purchase. A week later the client cancels the deal and asks for the money to be returned to a different account in another jurisdiction. Which risk does this scenario BEST illustrate?",
    options: [
      "Breach of legal professional privilege by the solicitor",
      "Unauthorized practice of law by the client",
      "Tax evasion by the law firm on its client fees",
      "Use of a professional's client account to make funds look legitimate with no genuine underlying transaction"
    ],
    answer: [3],
    explanation: "Legal-sector AML guidance (FATF's 2013 report on legal professionals; the UK SRA sectoral risk assessment and the 2025 Legal Sector Affinity Group guidance) warns that client accounts can pass funds through a regulated professional and lend them an appearance of legitimacy, and that funds from an aborted matter should be returned only to the original sender after considering a suspicious activity report. The other options misread the scenario: no privilege issue, unauthorized practice or firm tax issue is present.",
    source: [
      { label: "SRA Sectoral Risk Assessment – client accounts can lend an appearance of legitimacy to funds with no genuine legal purpose", url: "https://www.sra.org.uk/sra/research-publications/aml-risk-assessment/" },
      { label: "LSAG AML Guidance for the Legal Sector (2025) – aborted matters: return funds only to the original sender and consider a SAR", url: "https://www.sra.org.uk/globalassets/documents/solicitors/firm-based-authorisation/lsag-aml-guidance.pdf" }
    ]
  },
  {
    id: "D1-017",
    domain: 1,
    topic: "Trusts and legal arrangements",
    hy: true,
    q: "In an express trust, which party holds legal title to the trust assets?",
    options: ["The settlor", "The beneficiary", "The trustee", "The protector"],
    answer: [2],
    explanation: "The trustee holds legal title and manages the assets for the beneficiaries, while the beneficiaries hold the beneficial interest. The separation of legal and beneficial ownership is why FATF R.25 requires information on the settlor, trustee(s), protector, beneficiaries and anyone exercising ultimate effective control. The settlor transfers the assets into the trust, and a protector oversees the trustee.",
    source: [
      { label: "FATF (2024) Guidance on Beneficial Ownership and Transparency of Legal Arrangements – legal title held by trustee; parties to a trust (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/FATF_Guidances/Guidance-Beneficial-Ownership-Transparency-Legal-Arrangements.pdf.coredownload.inline.pdf.pdf" }
    ]
  },
  {
    id: "D1-018",
    domain: 1,
    topic: "Private banking",
    hy: false,
    q: "Which characteristic of private banking relationships MOST increases money laundering risk?",
    options: [
      "Use of private investment companies and a culture of confidentiality, often supported by relationship managers who advocate strongly for their clients",
      "Clients who receive standardized products with no personal contact",
      "Low account balances that are below the thresholds of most monitoring rules",
      "Accounts that are held only in the client's home jurisdiction"
    ],
    answer: [0],
    explanation: "Private banking combines high-value clients, complex vehicles such as private investment companies and trusts, emphasis on discretion, and relationship managers who may advocate for clients rather than challenge them. The US Senate Permanent Subcommittee on Investigations (1999) identified private bankers acting as client advocates, powerful clients and a culture of secrecy (shell companies, trusts, code names) as key vulnerabilities, and the Wolfsberg Private Banking Principles call for understanding the structure of private investment companies and applying additional diligence to higher-risk clients. The other options describe low-risk retail features.",
    source: [
      { label: "US Senate PSI Minority Staff Report (1999) Private Banking and Money Laundering – client advocates, powerful clients, culture of secrecy", url: "https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/minoritystaffreport.pdf" },
      { label: "Wolfsberg AML Principles for Private Banking (2012) – private investment companies and additional diligence for higher-risk clients", url: "https://db.wolfsberg-group.org/assets/7d384fb4-8c82-4669-acb8-621aed03e928/Wolfsberg%20Private%20Banking%20Principles.pdf" }
    ]
  },
  {
    id: "D1-019",
    domain: 1,
    topic: "Virtual assets - mixers",
    hy: false,
    q: "A virtual asset service provider's blockchain analytics tool shows that a customer's incoming bitcoin deposit came directly from a mixing service. What is the PRIMARY concern with this exposure?",
    options: [
      "Mixers increase transaction fees, which reduces the customer's returns",
      "Mixers pool and redistribute coins to break the traceable link between source and destination addresses",
      "Mixers convert bitcoin into fiat currency outside the regulated sector",
      "Mixers are used only for legitimate privacy protection and pose no risk"
    ],
    answer: [1],
    explanation: "Mixers or tumblers combine funds from many users and pay out coins that cannot easily be linked back to their origin. This obscures the trail of illicit proceeds such as hacks, ransomware or darknet sales (FATF VA red flag indicators, 2020). Fees and fiat conversion are not the main concern, and saying there is no risk ignores well-documented abuse and sanctions actions against mixers.",
    source: [
      { label: "FATF (2020) Virtual Assets Red Flag Indicators – funds sourced from mixing/tumbling services obscure the flow of illicit funds (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/Virtual-Assets-Red-Flag-Indicators.pdf" }
    ]
  },
  {
    id: "D1-020",
    domain: 1,
    topic: "Virtual assets - privacy coins",
    hy: false,
    q: "What distinguishes privacy coins (anonymity-enhanced cryptocurrencies) such as Monero from bitcoin?",
    options: [
      "They are issued and backed by a central bank",
      "They can only be exchanged on regulated exchanges",
      "They record every transaction on a fully transparent public ledger",
      "They use techniques such as ring signatures and stealth addresses to hide senders, receivers and amounts"
    ],
    answer: [3],
    explanation: "Anonymity-enhanced cryptocurrencies use cryptographic techniques that hide transaction details by default, which limits blockchain analysis. FATF lists AEC use as a red flag. Bitcoin, by contrast, has a transparent public ledger. Privacy coins are not central bank issued, and many regulated exchanges have in fact delisted them.",
    source: [
      { label: "FATF (2020) Virtual Assets Red Flag Indicators – conversion to anonymity-enhanced cryptocurrencies (AECs) as a red flag (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/Virtual-Assets-Red-Flag-Indicators.pdf" },
      { label: "DOJ Cryptocurrency Enforcement Framework (2020) – AECs such as Monero hinder tracing, unlike Bitcoin’s public blockchain", url: "https://www.justice.gov/archives/ag/page/file/1326061/dl" }
    ]
  },
  {
    id: "D1-021",
    domain: 1,
    topic: "Virtual assets - chain-hopping",
    hy: false,
    q: "Stolen cryptocurrency is swapped from bitcoin to ether, bridged to another blockchain, and exchanged into a stablecoin, all within a few hours. Which laundering technique does this BEST describe?",
    options: ["Chain-hopping", "Cryptojacking", "Pig butchering", "Rug pull"],
    answer: [0],
    explanation: "Chain-hopping moves funds rapidly across different virtual assets and blockchains, often through bridges or swap services, to break the trail and make tracing harder. It is a layering technique. Cryptojacking is the unauthorized use of computing power for mining. Pig butchering is an investment or romance scam, and a rug pull is a fraud in which developers abandon a project and take investors' funds.",
    source: [
      { label: "FATF (2023) Countering Ransomware Financing – chain-hopping: moving between virtual assets/blockchains in rapid succession to evade tracing (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/Best_practicies/Countering-Ransomware-Financing.pdf.coredownload.pdf.pdf" },
      { label: "DOJ Cryptocurrency Enforcement Framework (2020) – chain hopping used to launder proceeds of virtual currency thefts", url: "https://www.justice.gov/archives/ag/page/file/1326061/dl" }
    ]
  },
  {
    id: "D1-022",
    domain: 1,
    topic: "Virtual assets - NFTs",
    hy: false,
    q: "An individual uses proceeds from darknet marketplace sales to buy a non-fungible token (NFT). He then repeatedly sells it between wallets he secretly controls, raising its price each time, before selling it to an unrelated buyer. Which technique is MOST evident?",
    options: [
      "Initial coin offering fraud",
      "Staking reward manipulation",
      "Wash trading to create artificial value and justify the movement of illicit funds",
      "Front-running in a decentralized exchange liquidity pool"
    ],
    answer: [2],
    explanation: "Wash trading NFTs between wallets under common control inflates their apparent market value. Illicit funds can then be moved or \"cleaned\" as the proceeds of an apparently legitimate sale. US Treasury's 2024 NFT Illicit Finance Risk Assessment calls this self-laundering: buying an NFT with illicit funds and selling it to oneself from a different wallet to create records of sale, then selling it to an unwitting buyer for clean funds (also flagged in Treasury's 2022 art market study). No ICO, staking or DEX front-running is involved.",
    source: [
      { label: "US Treasury (2024) Illicit Finance Risk Assessment of NFTs, s.3.1 – self-laundering and wash trading", url: "https://home.treasury.gov/system/files/136/Illicit-Finance-Risk-Assessment-of-Non-Fungible-Tokens.pdf" }
    ]
  },
  {
    id: "D1-023",
    domain: 1,
    topic: "Proliferation financing - cyber",
    hy: false,
    q: "Cyber actors linked to the Democratic People's Republic of Korea (DPRK) steal hundreds of millions of dollars in virtual assets from exchanges and cross-chain bridges. Beyond the theft itself, what is the MOST significant financial crime concern?",
    options: [
      "Tax evasion by the exchange operators",
      "Generating revenue for weapons of mass destruction programs in evasion of UN sanctions",
      "Insider trading on the stolen tokens",
      "Consumer protection breaches by the bridge developers"
    ],
    answer: [1],
    explanation: "The UN Security Council 1718 Committee Panel of Experts (until its mandate lapsed in April 2024) and US authorities have reported that DPRK cyber theft (for example, by the Lazarus Group and its sub-group Bluenoroff, designated by OFAC in 2019) generates revenue for its nuclear weapons and ballistic missile programs. This makes it proliferation financing and sanctions evasion. The other options do not reflect this state-sponsored purpose.",
    source: [
      { label: "US Treasury press release sm774 (Sept 2019) – OFAC designates Lazarus Group/Bluenoroff; cyber heists fund DPRK nuclear and ballistic missile programs", url: "https://home.treasury.gov/news/press-releases/sm774" },
      { label: "UN Security Council SC/15648 (March 2024) – Panel of Experts mandate not extended (expired 30 April 2024)", url: "https://press.un.org/en/2024/sc15648.doc.htm" }
    ]
  },
  {
    id: "D1-024",
    domain: 1,
    topic: "Virtual assets - red flags",
    hy: false,
    q: "A VASP compliance analyst is reviewing customer activity. Which of the following are red flags for money laundering involving virtual assets? (Choose three.)",
    options: [
      "Funds received directly from addresses linked to a darknet marketplace",
      "Customer stores assets in a personal hardware wallet and trades rarely",
      "Many deposits just below the VASP's enhanced verification threshold",
      "Trading volume consistent with the customer's declared income and investment profile",
      "Frequent conversions into anonymity-enhanced cryptocurrencies followed by immediate withdrawal"
    ],
    answer: [0, 2, 4],
    explanation: "FATF's 2020 Red Flag Indicators for virtual assets include exposure to darknet markets, structuring below thresholds, and conversion into privacy coins with rapid withdrawal. Using a hardware wallet is a common security practice and not suspicious alone. Activity consistent with a documented profile is expected behavior.",
    source: [
      { label: "FATF (2020) Virtual Assets Red Flag Indicators – structuring below thresholds, AEC conversion, darknet exposure; hardware wallets may be legitimate (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/Virtual-Assets-Red-Flag-Indicators.pdf" }
    ]
  },
  {
    id: "D1-025",
    domain: 1,
    topic: "Terrorist financing vs. money laundering",
    hy: true,
    q: "Which statement BEST distinguishes terrorist financing from money laundering?",
    options: [
      "Terrorist financing always involves large amounts moved through shell companies",
      "Terrorist financing requires the funds to originate from a criminal predicate offense",
      "Terrorist financing is only a concern for institutions in conflict zones",
      "Terrorist financing may use legitimately sourced funds, and the focus is on where the funds are going"
    ],
    answer: [3],
    explanation: "Money laundering hides the illicit origin of funds, while terrorist financing is concerned with their destination and use. The money can come from legitimate sources such as salaries, donations or business income. TF often involves small amounts, which makes it hard to detect, and it can affect institutions anywhere (UN TF Convention 1999, FATF R.5).",
    source: [
      { label: "FATF Recommendations, INR.5 para. 5 – TF offences extend to funds from a legitimate or illegitimate source (APG copy)", url: "https://apgml.org/sites/default/files/documents/FATF_Recommendations_2012_Amended_February_2023.pdf" },
      { label: "FATF (2025) Comprehensive Update on Terrorist Financing Risks – self-financing from licit sources, small amounts (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/Public_typology_reports/Comprehensive-Update-on-Terrorist-Financing-Risks-2025.pdf.coredownload.inline.pdf.pdf" }
    ]
  },
  {
    id: "D1-026",
    domain: 1,
    topic: "Terrorist financing - NPOs",
    hy: true,
    q: "A charity registered to provide humanitarian aid raises funds largely in cash at community events. It then wires them to individuals, not to partner organizations, in a region bordering territory controlled by a designated terrorist group, and gives vague descriptions of its programs. What is the MOST significant risk?",
    options: [
      "Diversion of charitable funds to support terrorist activity",
      "Tax evasion by donors claiming false deductions",
      "Use of the charity for trade-based money laundering",
      "Securities fraud through misrepresentation to investors"
    ],
    answer: [0],
    explanation: "FATF R.8 and its 2014 typology report identify diversion of funds, especially by NPOs operating in close proximity to an active terrorist threat, as a major TF risk. Indicators include cash-intensive activity, use of cash couriers, requests to transfer funds with vague justifications, and programs vaguely explained to oversight bodies. Nothing in the scenario points to trade flows, false tax deductions or securities.",
    source: [
      { label: "FATF (2014) Risk of Terrorist Abuse in Non-Profit Organisations – diversion of funds; indicators incl. cash couriers, vague justifications (EAG copy)", url: "https://eurasiangroup.org/files/FATF_docs/Risk-of-terrorist-abuse-in-non-profit-organisations.pdf" }
    ]
  },
  {
    id: "D1-027",
    domain: 1,
    topic: "Terrorist financing - red flags",
    hy: true,
    q: "Which of the following are red flags that may indicate financing of a foreign terrorist fighter? (Choose two.)",
    options: [
      "Customer takes out a consumer loan, empties his savings and buys a one-way ticket to a country bordering a conflict zone",
      "Regular payroll deposits from a long-standing domestic employer",
      "Account funded by unrelated third parties, followed by ATM withdrawals in a city near a conflict zone",
      "Monthly tuition payments to a domestic university"
    ],
    answer: [0, 2],
    explanation: "FATF's February 2015 report on financing of ISIL describes foreign terrorist fighters funding their travel with consumer loans that are withdrawn in cash and never repaid, personal earnings and airline tickets, donations sent by family, friends and supporters, and ATM withdrawals near territory where ISIL operates, including large deposits followed by immediate foreign cash withdrawals. Regular payroll and tuition payments are normal, explainable activity.",
    source: [
      { label: "FATF (Feb 2015) Financing of the Terrorist Organisation ISIL, s.4 – FTF funding via unpaid consumer loans, airline tickets, ATM withdrawals near ISIL territory (EAG copy)", url: "https://eurasiangroup.org/files/FATF_docs/Financing-of-the-terrorist-organisation-ISIL.pdf" }
    ]
  },
  {
    id: "D1-028",
    domain: 1,
    topic: "Terrorist financing - self-funding",
    hy: true,
    q: "According to FATF typologies, which funding method is MOST common for small terrorist cells and lone actors planning low-cost attacks?",
    options: [
      "Large-scale state sponsorship through government ministries",
      "Self-funding from legitimate sources such as wages, social benefits and small consumer loans",
      "Complex trade-based schemes involving letters of credit",
      "Proceeds of large-scale securities fraud"
    ],
    answer: [1],
    explanation: "FATF's July 2025 Comprehensive Update on Terrorist Financing Risks finds that small cells and lone actors have low financial needs and can rely on legitimate sources such as salary, savings, social benefits, support from relatives and small credit loans. Such funds are hard to tell apart from normal activity. State sponsorship, trade finance and large frauds are associated with larger organizations, not low-cost attacks.",
    source: [
      { label: "FATF (July 2025) Comprehensive Update on Terrorist Financing Risks, paras. 102–104 – small cells and lone actors rely on salary, savings, benefits, small loans (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/Public_typology_reports/Comprehensive-Update-on-Terrorist-Financing-Risks-2025.pdf.coredownload.inline.pdf.pdf" }
    ]
  },
  {
    id: "D1-029",
    domain: 1,
    topic: "Proliferation financing - dual-use goods",
    hy: false,
    q: "A bank customer that exports electronic components receives an order for high-specification frequency converters from a newly established trading company in a transshipment hub. The end user is not stated, and payment comes from a third party in another country. What does this MOST likely indicate?",
    options: [
      "Standard supply-chain activity for a growing exporter",
      "Invoice fraud against the exporter's bank",
      "Tax evasion through transfer pricing",
      "Possible proliferation financing involving dual-use goods and transshipment"
    ],
    answer: [3],
    explanation: "FATF's 2008 proliferation financing typologies report lists indicators such as trading companies in countries with weak export controls, orders placed by firms from countries other than that of the stated end user, missing end-user information, and payments from parties not named in the original documentation. Frequency changers (converters) are a recognized dual-use item controlled for nuclear non-proliferation reasons (e.g., US Commerce Control List ECCN 3A225). The other options do not explain the combination of red flags.",
    source: [
      { label: "FATF (2008) Typologies Report on Proliferation Financing – indicators of possible PF (trading companies, end-user mismatch, third-party payments) (EAG copy)", url: "https://eurasiangroup.org/files/FATF_docs/Typologies_Report_on_Proliferation_Financing.pdf" },
      { label: "15 CFR Part 774, Supp. 1 – ECCN 3A225 frequency changers (converters), controlled for nuclear non-proliferation", url: "https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-774/appendix-Supplement%20No.%201%20to%20Part%20774" }
    ]
  },
  {
    id: "D1-030",
    domain: 1,
    topic: "Proliferation financing - detection challenges",
    hy: false,
    q: "Why is proliferation financing often MORE difficult to detect than traditional money laundering?",
    options: [
      "Proliferation financing always involves cash, which leaves no electronic records",
      "Proliferation financing transactions are exempt from sanctions screening",
      "Transactions often look like ordinary commercial trade, funds may be legitimate, and dual-use goods are hard to identify",
      "Proliferation financing only occurs through virtual assets"
    ],
    answer: [2],
    explanation: "PF networks use front companies, intermediaries and normal trade finance channels to buy goods that often have legitimate civilian uses. Because the funds may be clean and the transactions look routine, the typical ML red flags may not be present (FATF PF typologies). PF is subject to targeted financial sanctions and screening, and it uses many channels, not only cash or crypto.",
    source: [
      { label: "FATF (2008) Typologies Report on Proliferation Financing – dual-use goods; PF risk most likely where funds are legal but end-user or goods are obscured (EAG copy)", url: "https://eurasiangroup.org/files/FATF_docs/Typologies_Report_on_Proliferation_Financing.pdf" }
    ]
  },
  {
    id: "D1-031",
    domain: 1,
    topic: "Sanctions evasion - maritime",
    hy: false,
    q: "A bank finances an oil cargo. Vessel tracking data shows that the tanker switched off its Automatic Identification System (AIS) for several days near a comprehensively sanctioned country and then carried out a ship-to-ship transfer at sea. What does this MOST likely indicate?",
    options: [
      "Sanctions evasion through deceptive shipping practices",
      "Routine navigation to save fuel costs",
      "Piracy risk requiring additional insurance cover",
      "Customs fraud relating to import duties in the destination country"
    ],
    answer: [0],
    explanation: "The May 2020 State Department, OFAC and US Coast Guard maritime sanctions advisory identifies AIS disablement or manipulation and ship-to-ship transfers as key deceptive shipping practices used to hide sanctioned cargo. They are not fuel-saving practices, and they point to sanctions risk rather than piracy or customs fraud.",
    source: [
      { label: "State/OFAC/USCG Maritime Sanctions Advisory (May 14, 2020) – deceptive practices incl. disabling/manipulating AIS and ship-to-ship transfers", url: "https://ofac.treasury.gov/media/37751/download?inline" }
    ]
  },
  {
    id: "D1-032",
    domain: 1,
    topic: "Sanctions evasion - third-country intermediaries",
    hy: false,
    q: "A newly onboarded electronics distributor in a regional trade hub begins buying large volumes of US-origin microelectronics. Its orders far exceed local market demand, its website was created two months ago, and the goods are quickly re-exported to a country bordering a comprehensively sanctioned jurisdiction. Which risk does this pattern MOST likely indicate?",
    options: [
      "Ordinary inventory stockpiling ahead of expected price increases",
      "Trade-based money laundering through over-invoicing of the electronics",
      "Sanctions and export control evasion through a front company and transshipment",
      "Tax evasion through under-declaration of customs duties in the trade hub"
    ],
    answer: [2],
    explanation: "Sanctions and export control guidance (the FinCEN-BIS joint alerts of 2022 and 2023 and the March 2023 Commerce-Treasury-Justice Tri-Seal Compliance Note) highlights newly incorporated customers trading in high-priority items, anomalous increases in order volume, entities with little or no web presence, and routing through transshipment points as classic evasion red flags. Nothing in the facts points to mispriced invoices (TBML) or customs duty fraud, and stockpiling would not explain a new company with no market footprint diverting goods toward a sanctioned area.",
    source: [
      { label: "FinCEN–BIS Supplemental Alert FIN-2023-Alert004 – red flags: new customers incorporated after Feb 24, 2022, anomalous order volumes, transshipment", url: "https://www.fincen.gov/system/files/shared/FinCEN%20and%20BIS%20Joint%20Alert%20_FINAL_508C.pdf" },
      { label: "Commerce–Treasury–Justice Tri-Seal Compliance Note (March 2, 2023) – third-party intermediaries, little web presence, transshipment points", url: "https://ofac.treasury.gov/media/931471/download?inline" }
    ]
  },
  {
    id: "D1-033",
    domain: 1,
    topic: "Prepaid cards",
    hy: false,
    q: "A retail customer buys dozens of open-loop prepaid cards with cash at several stores, loading each card just below the store's identification threshold. The cards are then used for ATM withdrawals in another country. What is the MOST significant risk?",
    options: [
      "Card skimming of the customer's own debit card",
      "Cross-border movement of illicit value that avoids cash declaration and customer identification controls",
      "Merchant chargeback fraud against the card issuer",
      "Violation of the card network's interchange fee rules"
    ],
    answer: [1],
    explanation: "Prepaid cards are portable and can be loaded anonymously in small amounts, so value can move across borders without a currency declaration and be withdrawn abroad (FATF report on new payment methods). Loading just below ID thresholds is a structuring red flag. The scenario involves no skimming, chargebacks or interchange issues.",
    source: [
      { label: "FATF (2010) Money Laundering Using New Payment Methods – anonymity, global ATM access and cross-border transport of prepaid cards (EAG copy)", url: "https://eurasiangroup.org/files/FATF_docs/ML_using_New_Payment_Methods.pdf" }
    ]
  },
  {
    id: "D1-034",
    domain: 1,
    topic: "Fraud - romance scam and elder exploitation",
    hy: false,
    q: "A 78-year-old widower who has banked with the institution for decades suddenly sends several large wires to an overseas individual described as his \"fiancee,\" whom he met online and has never met in person. He becomes defensive when asked about the transfers. What is the MOST likely explanation?",
    options: [
      "Legitimate estate planning for a new spouse",
      "Business email compromise against the customer's employer",
      "Trade-based money laundering through personal remittances",
      "Romance scam involving elder financial exploitation"
    ],
    answer: [3],
    explanation: "FinCEN's 2022 elder financial exploitation advisory (FIN-2022-A002) describes romance scams and lists indicators such as transfers abroad to recipients with whom the customer has no in-person relationship, uncharacteristic or sudden large transfers, and a sudden reluctance to discuss financial matters. BEC targets business payment processes, there is no trade element, and estate planning would not involve urgent wires to an unmet person abroad.",
    source: [
      { label: "FinCEN Advisory FIN-2022-A002 on Elder Financial Exploitation – romance scams and behavioral/financial red flags", url: "https://www.fincen.gov/system/files/advisory/2022-06-15/FinCEN%20Advisory%20Elder%20Financial%20Exploitation%20FINAL%20508.pdf" }
    ]
  },
  {
    id: "D1-035",
    domain: 1,
    topic: "Fraud - business email compromise",
    hy: false,
    q: "A corporate customer's accounts payable team receives an email that appears to come from a long-standing supplier and asks that future invoices be paid to a new account at a different bank in another country. The next payment is sent there. Which fraud typology does this represent?",
    options: ["Business email compromise", "Check kiting", "Advance fee fraud", "Synthetic identity fraud"],
    answer: [0],
    explanation: "Business email compromise uses spoofed or compromised email accounts to redirect legitimate payments, often by changing a supplier's banking details (FinCEN BEC advisories). Check kiting exploits float between accounts. Advance fee fraud asks the victim for upfront payments, and synthetic identity fraud combines real and fictitious identity data.",
    source: [
      { label: "FinCEN Advisory FIN-2019-A005 (updated BEC advisory) – email compromise fraud and vendor impersonation to redirect payments", url: "https://www.fincen.gov/system/files/advisory/2019-07-16/Updated%20BEC%20Advisory%20FINAL%20508.pdf" }
    ]
  },
  {
    id: "D1-036",
    domain: 1,
    topic: "Money mules",
    hy: false,
    q: "A bank is reviewing a university student's account that was opened two months ago. Which of the following are red flags that the student is acting as a money mule? (Choose two.)",
    options: [
      "Monthly deposits of a part-time campus job salary",
      "Many incoming transfers from unrelated individuals, quickly sent on by wire or converted to cryptocurrency",
      "Payments for textbooks and student housing",
      "The student mentions a \"work from home\" job found on social media that involves receiving and passing on payments"
    ],
    answer: [1, 3],
    explanation: "Money mules receive and quickly move funds for others, often after being recruited through fake job offers online (FBI IC3 public service announcement on money mules, 2021, which notes that college-aged students are a targeted population). Incoming funds from unrelated parties that are passed on rapidly and \"payment processing\" job offers are key indicators. Wages and ordinary student expenses are expected activity.",
    source: [
      { label: "FBI IC3 PSA (Dec 3, 2021) Money Mules: A Financial Crisis – recruitment via employment and romance scams; college-aged students targeted", url: "https://www.ic3.gov/PSA/2021/PSA211203" }
    ]
  },
  {
    id: "D1-037",
    domain: 1,
    topic: "Corruption and PEPs",
    hy: true,
    q: "The brother-in-law of a sitting minister of infrastructure opens an account for his newly formed consulting company. Within weeks it receives large \"advisory fees\" from a construction firm that has just won a major government road contract. What is the MOST likely risk?",
    options: [
      "Tax evasion by the construction firm through inflated expenses",
      "Trade-based money laundering through construction materials",
      "Bribery, with proceeds of corruption channeled through a PEP's relative",
      "Fraud against the consulting company by the construction firm"
    ],
    answer: [2],
    explanation: "FATF R.12 applies PEP requirements to family members and close associates of PEPs, and FATF's PEP guidance treats relatives by marriage as family members. FATF's 2012 report on laundering the proceeds of corruption notes that PEPs use family and close associates to conceal corrupt funds and that bribes are often disguised as consulting contracts. Payments from a contractor that has won a government contract, made to a new company with no track record, are a classic indicator that corrupt payments are being routed through relatives or close associates. The other options do not explain the link between the contract award and the payments to a PEP's relative.",
    source: [
      { label: "FATF Recommendation 12 – PEP requirements apply to family members and close associates (APG copy)", url: "https://apgml.org/sites/default/files/documents/FATF_Recommendations_2012_Amended_February_2023.pdf" },
      { label: "FATF (2012) Specific Risk Factors in Laundering the Proceeds of Corruption – PEPs use family/associates; bribes via consulting contracts (EAG copy)", url: "https://eurasiangroup.org/files/FATF_docs/Specific_Risk_Factors_in_the_Laundering_of_Proceeds_of_Corruption.pdf" }
    ]
  },
  {
    id: "D1-038",
    domain: 1,
    topic: "Bribery - third-party intermediaries",
    hy: false,
    q: "A multinational company plans to hire a sales agent to win contracts with a foreign state-owned enterprise. Which of the following are bribery red flags? (Choose two.)",
    options: [
      "The agent asks for a commission far above market rates, payable on contract award",
      "The agent provides audited financial statements and references from reputable clients",
      "The agent asks for payments to an account in a third country held under a different company's name",
      "The agent agrees to a written anti-corruption clause and audit rights"
    ],
    answer: [0, 2],
    explanation: "Unusually high or success-based commissions and payments to offshore accounts in another party's name are well-known red flags that an intermediary may be passing on bribes. The DOJ/SEC FCPA Resource Guide lists excessive commissions to third-party agents, offshore shell companies and requests for payment to offshore bank accounts among common third-party red flags. Audited financials, references and acceptance of anti-corruption clauses and audit rights are signs of a legitimate intermediary.",
    source: [
      { label: "DOJ/SEC FCPA Resource Guide – common third-party red flags: excessive commissions, offshore shell companies, payment to offshore accounts", url: "https://www.sec.gov/spotlight/fcpa/fcpa-resource-guide.pdf" }
    ]
  },
  {
    id: "D1-039",
    domain: 1,
    topic: "Tax crimes as predicate offenses",
    hy: false,
    q: "Since its 2012 revision of the Recommendations, FATF has included which of the following as a designated category of predicate offense for money laundering?",
    options: [
      "Tax crimes related to direct and indirect taxes",
      "Civil tax disputes resolved through administrative settlement",
      "Late filing of corporate tax returns",
      "Aggressive but lawful tax planning"
    ],
    answer: [0],
    explanation: "The 2012 FATF Recommendations added \"tax crimes (related to direct taxes and indirect taxes)\" to the glossary of designated predicate offenses, so laundering the proceeds of tax evasion is a money laundering offense. Civil disputes, late filing and lawful tax planning are not criminal tax offenses.",
    source: [
      { label: "FATF Recommendations, Glossary – designated categories of offences include tax crimes (related to direct and indirect taxes) (APG copy)", url: "https://apgml.org/sites/default/files/documents/FATF_Recommendations_2012_Amended_February_2023.pdf" }
    ]
  },
  {
    id: "D1-040",
    domain: 1,
    topic: "Tax fraud - VAT carousel",
    hy: false,
    q: "A company imports mobile phones VAT-free from another EU member state, sells them domestically charging VAT, and disappears without paying the VAT to the tax authority. The goods are later re-exported and the cycle repeats through several companies. Which scheme is this?",
    options: [
      "Transfer mispricing",
      "Round-tripping of foreign direct investment",
      "Customs duty evasion through undervaluation",
      "Missing trader intra-community (carousel) fraud"
    ],
    answer: [3],
    explanation: "MTIC or carousel fraud exploits the VAT-free treatment of intra-EU supplies. A \"missing trader\" collects VAT and disappears, and the goods circulate repeatedly through a chain of companies. Transfer mispricing involves prices between related parties, round-tripping sends domestic capital abroad and back, and customs undervaluation targets import duties, not VAT.",
    source: [
      { label: "FATF (2007) Laundering the Proceeds of VAT Carousel Fraud – missing trader and carousel mechanics (EAG copy)", url: "https://eurasiangroup.org/files/FATF_docs/Laundering_the_Proceeds_of_VAT_Caroussel_Fraud.pdf" }
    ]
  },
  {
    id: "D1-041",
    domain: 1,
    topic: "Ransomware",
    hy: false,
    q: "A corporate customer hit by a ransomware attack asks its bank to help it buy cryptocurrency to pay the ransom. Threat intelligence links the ransomware variant to a group designated by OFAC. What is the MOST significant risk for the bank?",
    options: [
      "Market risk from volatility in the cryptocurrency's price",
      "Reputational risk from media coverage of the cyber attack",
      "Facilitating a payment to a sanctioned person, which may violate US sanctions",
      "Credit risk because the customer's operations are disrupted"
    ],
    answer: [2],
    explanation: "OFAC's advisories on ransomware payments (2020, updated 2021) warn that facilitating ransom payments to sanctioned actors may violate sanctions regulations on a strict liability basis. They also encourage prompt reporting to law enforcement. FinCEN has issued related ransomware red flags for SAR reporting. The other risks are secondary to the sanctions exposure.",
    source: [
      { label: "OFAC Updated Advisory on Potential Sanctions Risks for Facilitating Ransomware Payments (Sept 21, 2021) – strict liability", url: "https://ofac.treasury.gov/media/912981/download?inline" }
    ]
  },
  {
    id: "D1-042",
    domain: 1,
    topic: "Money services businesses",
    hy: true,
    q: "An MSB compliance officer notices that on the same day, eight different senders at three agent locations each sent $2,500 in cash to the same beneficiary in another country. Several senders gave the same phone number. Which typology is MOST likely?",
    options: [
      "Nested correspondent activity through the MSB's bank",
      "Structuring through multiple senders (smurfing) to avoid recordkeeping and identification requirements",
      "Legitimate family remittances from a large extended family",
      "Trade-based money laundering through invoice manipulation"
    ],
    answer: [1],
    explanation: "Several senders sending just below the $3,000 funds transfer recordkeeping threshold to one beneficiary, with shared contact details, indicates smurfing or structuring. The MSB should evaluate this for a SAR (the MSB SAR threshold is $2,000 under 31 CFR 1022.320). Shared phone numbers undermine the family-remittance explanation, and no correspondent or trade element is present.",
    source: [
      { label: "31 CFR 1010.410(e) – nonbank recordkeeping for transmittals of funds of $3,000 or more", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-D/section-1010.410" },
      { label: "31 CFR 1022.320(a)(2) – MSB SAR threshold of $2,000; structuring designed to evade BSA requirements", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1022/subpart-C/section-1022.320" }
    ]
  },
  {
    id: "D1-043",
    domain: 1,
    topic: "Human trafficking",
    hy: false,
    q: "Which of the following are financial red flags associated with human trafficking? (Choose three.)",
    options: [
      "Several individuals' accounts share the same address and phone number and are controlled by one third party",
      "Frequent late-night purchases at hotels and payments to online classified advertising sites",
      "Customer is accompanied by a third party who speaks for them and holds their identification documents",
      "Monthly mortgage payments funded by regular salary deposits",
      "Annual donations to a registered local charity"
    ],
    answer: [0, 1, 2],
    explanation: "FinCEN's human trafficking advisories (2014, 2020) and FATF's 2018 report list third-party control of multiple accounts and identity documents, shared contact details, and frequent hotel and online advertising spending as indicators. Mortgage payments from salary and routine charitable giving are ordinary activity.",
    source: [
      { label: "FinCEN Advisory FIN-2020-A008 on human trafficking – behavioral and financial red flags (third-party control, shared identifiers, hotels, online classified sites)", url: "https://www.fincen.gov/system/files/advisory/2020-10-15/Advisory%20Human%20Trafficking%20508%20FINAL_0.pdf" },
      { label: "FATF–APG (2018) Financial Flows from Human Trafficking – indicators incl. accounts controlled by third parties (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/Human-Trafficking-2018.pdf" }
    ]
  },
  {
    id: "D1-044",
    domain: 1,
    topic: "Environmental crime - illegal logging",
    hy: false,
    q: "A timber importer's invoices list low-value wood species, while customs data shows high-value protected hardwoods. Payments come from third parties in jurisdictions with no link to the supply chain. What does this MOST likely indicate?",
    options: [
      "Laundering of illegal logging proceeds through trade misdescription and third-party payments",
      "Routine classification errors that are common in the timber trade",
      "Tax avoidance through lawful transfer pricing",
      "Consumer fraud against retail buyers of furniture"
    ],
    answer: [0],
    explanation: "FATF's 2021 report on money laundering from environmental crime notes that illegal logging proceeds are often laundered through trade. Techniques include misdeclaring species or volumes, using front companies, and third-party payments. Species mismatches together with unexplained payers go beyond routine errors or lawful tax planning.",
    source: [
      { label: "FATF (2021) Money Laundering from Environmental Crime, s.3.4 – trade-based fraud incl. mislabelling protected wood; third-party wire transfers (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/03.Money-Laundering-from-Environmental-Crime.pdf" }
    ]
  },
  {
    id: "D1-045",
    domain: 1,
    topic: "Environmental crime - wildlife trafficking",
    hy: false,
    q: "A bank is reviewing a customer that describes itself as a traditional medicine import business. Which of the following are red flags for wildlife trafficking? (Choose two.)",
    options: [
      "Payments to suppliers in known source countries for ivory or pangolin scales, described vaguely as \"handicrafts\" or \"samples\"",
      "Import licenses and CITES permits that match the customer's declared product lines",
      "Large cash deposits followed by wires to individuals rather than companies in source or transit countries",
      "Regular payments to a logistics provider for domestic deliveries"
    ],
    answer: [0, 2],
    explanation: "FATF's 2020 report on money laundering and the illegal wildlife trade lists indicators such as transaction references using veiled speech or traditional-medicine names for CITES species, links to source, transit and demand countries, and cash deposits and third-party wire transfers used to place and layer proceeds. FinCEN's 2021 wildlife trafficking threat analysis adds import-export companies used as fronts. Valid CITES permits consistent with the business, and routine domestic logistics payments, are signs of legitimate trade.",
    source: [
      { label: "FATF (2020) Money Laundering and the Illegal Wildlife Trade, Annex A – risk indicators (ADB-hosted copy)", url: "https://events.development.asia/sites/default/files/materials/2020/06/202006-fatf-report-money-laundering-and-illegal-wildlife-trade-june-2020.pdf" },
      { label: "FinCEN (2021) Financial Threat Analysis: Illicit Finance Threat Involving Wildlife Trafficking – indicators", url: "https://www.fincen.gov/system/files/2021-12/Financial_Threat_Analysis_IWT_FINAL%20508_122021.pdf" }
    ]
  }
]);
