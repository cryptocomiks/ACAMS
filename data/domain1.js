window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "D1-001",
    domain: 1,
    topic: "Stages of money laundering",
    hy: true,
    q: "A drug trafficker instructs the owner of a busy car wash to add bundles of street cash to the business's daily cash deposits at a local bank. Which stage of money laundering does this activity MOST directly represent?",
    options: ["Layering", "Placement", "Integration", "Structuring"],
    answer: [1],
    explanation: "Placement is the first entry of illicit cash into the financial system, frequently by commingling it with the cash receipts of a cash-intensive business. Layering (moving funds to hide the audit trail) and integration (returning the funds as apparently legitimate wealth) come later. Structuring is a technique for avoiding reporting thresholds, not a stage of laundering."
  },
  {
    id: "D1-002",
    domain: 1,
    topic: "Stages of money laundering",
    hy: true,
    q: "Funds already held at a bank are wired within one week through accounts of four shell companies in three different jurisdictions. Each transfer is described as a \"consulting fee\" or \"loan repayment.\" Which stage of money laundering is MOST likely occurring?",
    options: ["Placement", "Integration", "Layering", "Commingling"],
    answer: [2],
    explanation: "Layering separates illicit proceeds from their source through complex, often cross-border transactions with false descriptions, which makes the audit trail hard to follow. The funds are already in the financial system, so this is not placement, and they have not yet come back to the criminal as apparently legitimate wealth (integration). Commingling is a technique, usually used at placement, not a stage."
  },
  {
    id: "D1-003",
    domain: 1,
    topic: "Stages of money laundering",
    hy: true,
    q: "A businessman controls an offshore company that holds laundered funds. The offshore company \"lends\" him money to buy a luxury home, and he makes documented repayments on the loan. Which stage of money laundering does this loan-back arrangement BEST illustrate?",
    options: ["Integration", "Placement", "Layering", "Smurfing"],
    answer: [0],
    explanation: "In a loan-back scheme, the criminal's own illicit funds come back to him as an apparently legitimate loan and are used to buy assets, which is the integration stage. Placement is the initial entry of cash and layering is the obscuring of the trail. Smurfing is a placement technique that uses many people to make small deposits."
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
    explanation: "Under 31 USC 5324, breaking up cash transactions to evade CTR reporting is a crime whatever the source of the funds, and the customer's question about the threshold is a classic red flag. The bank should consider filing a SAR. A legitimate source does not cure structuring. CTRs are not required for individual deposits of $10,000 or less that do not aggregate above $10,000 in a business day."
  },
  {
    id: "D1-005",
    domain: 1,
    topic: "Funnel accounts",
    hy: false,
    q: "An account opened in Chicago receives many cash deposits, each under $10,000, made at branches in several different states. Within a day or two the balance is withdrawn in cash at branches near the southwest US border. Which typology does this pattern MOST closely match?",
    options: ["Nested account", "Payable-through account", "Concentration account", "Funnel account"],
    answer: [3],
    explanation: "FinCEN's 2014 advisory describes a funnel account as one that receives multiple cash deposits, often below the CTR threshold, in different geographic areas, with the funds withdrawn quickly in another area. It is commonly linked to drug proceeds and TBML. Nested and payable-through accounts are correspondent banking structures. A concentration account is an internal bank account used to pool funds."
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
    explanation: "Over- or under-invoicing and discrepancies between the invoice and shipping documents are core TBML red flags identified by FATF and the Wolfsberg Trade Finance Principles, because they are used to move value across borders. A letter of credit consistent with the customer's history and a logical shipping route are normal features of trade, not indicators."
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
    explanation: "In the BMPE, a broker takes drug dollars in the US and sells them (or pays with them) on behalf of Colombian importers buying US goods. The cartel receives clean pesos in Colombia from the broker. It is a classic form of trade-based laundering and value transfer that avoids physically moving currency across the border. The other options describe legitimate exchange or bulk cash smuggling, not the BMPE."
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
    explanation: "Hawala moves value through trust networks. The sending hawaladar tells a counterpart to pay the beneficiary, and the two settle their balances later, often through cash, trade invoices or other transfers, with little documentation. This makes the flow of funds hard to trace (FATF report on hawala and similar service providers). The other options describe formal-sector features that hawala lacks."
  },
  {
    id: "D1-009",
    domain: 1,
    topic: "Correspondent banking - nesting",
    hy: true,
    q: "A US bank's review of its correspondent account for a respondent bank in Country X finds many payments that originate from customers of three other foreign banks. The respondent has quietly offered these banks access to its US account. What is this practice called?",
    options: ["Nested (downstream) correspondent banking", "Payable-through banking", "Concentration banking", "Cover payment stripping"],
    answer: [0],
    explanation: "Nesting occurs when a respondent bank lets other foreign financial institutions reach the correspondent through its own account. The US bank then has no direct relationship with, or due diligence on, the underlying banks. Payable-through accounts give the respondent's own customers direct access. Stripping is the removal of originator information from payment messages."
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
    explanation: "In a payable-through account, customers of the foreign bank have direct signing authority over a US account. The US bank therefore processes activity for people it has not identified, which is why USA PATRIOT Act s.312 and FFIEC guidance require enhanced due diligence. Nesting involves other banks, not the respondent's retail customers. Concentration accounts are internal pooling accounts."
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
    explanation: "A front company runs a real business but inflates its receipts by adding criminal proceeds, so that the cash looks like legitimate revenue. Sales far above what the business's capacity could produce are a key red flag. A shell company has no real operations. Cuckoo smurfing and trusts are different typologies."
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
    explanation: "All-cash real estate purchases through legal entities, funded via attorney accounts and nominees, are a well-known way to hide beneficial ownership (FATF real estate typologies, FinCEN Geographic Targeting Orders). No mortgage is involved, so mortgage fraud does not apply. A single large wire is not structuring, and a law firm's client account payment is not in itself money transmission."
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
    explanation: "Buying chips with cash, playing minimally and cashing out for a check or wire is a classic casino laundering red flag. It turns street cash into a clean-looking instrument that can be explained as winnings. The pattern does not involve credit markers or foreign front-money accounts, and with minimal play there are no real winnings to hide from the tax authorities."
  },
  {
    id: "D1-014",
    domain: 1,
    topic: "Insurance",
    hy: false,
    q: "A customer buys a single-premium life insurance policy with a large lump sum. Three months later he cancels it within the free-look period, accepts a surrender penalty, and asks that the refund be paid to an unrelated third party abroad. Which statement BEST describes this activity?",
    options: [
      "Normal behavior for a customer whose financial circumstances have changed",
      "A red flag for laundering through early surrender of an insurance product",
      "Premium fraud committed against the policyholder by the insurer",
      "A tax-efficient investment strategy that is routine for high net worth clients"
    ],
    answer: [1],
    explanation: "Early cancellation of a single-premium product, indifference to penalties, and redirecting the refund to a third party are recognized insurance red flags (FATF and IAIS guidance). The refund check or wire from the insurer makes the funds look legitimate. The indifference to losses and the third-party payout are what separate this from normal changes in circumstances."
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
    explanation: "Depositing large blocks of low-priced securities, promotional hype, liquidation and immediate outbound wires are FINRA and FinCEN red flags for pump-and-dump schemes and laundering through the securities sector. Front-running involves a broker trading ahead of client orders. Nothing in the scenario points to material non-public information about a merger."
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
    explanation: "FATF guidance on legal professionals warns that client accounts can be used to pass funds through a trusted gatekeeper, and that returning them to a different account after an aborted transaction makes them look legitimate. The other options misread the scenario: no privilege issue, unauthorized practice or firm tax issue is present."
  },
  {
    id: "D1-017",
    domain: 1,
    topic: "Trusts and legal arrangements",
    hy: true,
    q: "In an express trust, which party holds legal title to the trust assets?",
    options: ["The settlor", "The beneficiary", "The trustee", "The protector"],
    answer: [2],
    explanation: "The trustee holds legal title and manages the assets for the beneficiaries, while the beneficiaries hold the beneficial interest. The separation of legal and beneficial ownership is why FATF R.25 requires information on the settlor, trustee(s), protector, beneficiaries and anyone exercising ultimate effective control. The settlor transfers the assets into the trust, and a protector oversees the trustee."
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
    explanation: "Private banking combines high-value clients, complex vehicles such as private investment companies and trusts, emphasis on discretion, and relationship managers who may advocate for clients rather than challenge them. This mix increases risk and calls for enhanced due diligence (Wolfsberg Private Banking Principles). The other options describe low-risk retail features."
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
    explanation: "Mixers or tumblers combine funds from many users and pay out coins that cannot easily be linked back to their origin. This obscures the trail of illicit proceeds such as hacks, ransomware or darknet sales (FATF VA red flag indicators, 2020). Fees and fiat conversion are not the main concern, and saying there is no risk ignores well-documented abuse and sanctions actions against mixers."
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
    explanation: "Anonymity-enhanced cryptocurrencies use cryptographic techniques that hide transaction details by default, which limits blockchain analysis. FATF lists AEC use as a red flag. Bitcoin, by contrast, has a transparent public ledger. Privacy coins are not central bank issued, and many regulated exchanges have in fact delisted them."
  },
  {
    id: "D1-021",
    domain: 1,
    topic: "Virtual assets - chain-hopping",
    hy: false,
    q: "Stolen cryptocurrency is swapped from bitcoin to ether, bridged to another blockchain, and exchanged into a stablecoin, all within a few hours. Which laundering technique does this BEST describe?",
    options: ["Chain-hopping", "Cryptojacking", "Pig butchering", "Rug pull"],
    answer: [0],
    explanation: "Chain-hopping moves funds rapidly across different virtual assets and blockchains, often through bridges or swap services, to break the trail and make tracing harder. It is a layering technique. Cryptojacking is the unauthorized use of computing power for mining. Pig butchering is an investment or romance scam, and a rug pull is a fraud in which developers abandon a project and take investors' funds."
  },
  {
    id: "D1-022",
    domain: 1,
    topic: "Virtual assets - NFTs",
    hy: false,
    q: "An individual repeatedly buys a non-fungible token (NFT) from wallets he secretly controls, raising its price each time, then sells it to a third party using funds from a darknet marketplace. Which technique is MOST evident?",
    options: [
      "Initial coin offering fraud",
      "Staking reward manipulation",
      "Wash trading to create artificial value and justify the movement of illicit funds",
      "Front-running in a decentralized exchange liquidity pool"
    ],
    answer: [2],
    explanation: "Wash trading NFTs between wallets under common control inflates their apparent market value. Illicit funds can then be moved or \"cleaned\" as the proceeds of an apparently legitimate art sale. This is highlighted in US Treasury's 2022 study on illicit finance through high-value art. No ICO, staking or DEX front-running is involved."
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
    explanation: "The UN Security Council 1718 Committee Panel of Experts and US authorities have reported that DPRK cyber theft (for example, by the Lazarus Group) is a major revenue source for its WMD and ballistic missile programs. This makes it proliferation financing and sanctions evasion. The other options do not reflect this state-sponsored purpose."
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
    explanation: "FATF's 2020 Red Flag Indicators for virtual assets include exposure to darknet markets, structuring below thresholds, and conversion into privacy coins with rapid withdrawal. Using a hardware wallet is a common security practice and not suspicious alone. Activity consistent with a documented profile is expected behavior."
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
    explanation: "Money laundering hides the illicit origin of funds, while terrorist financing is concerned with their destination and use. The money can come from legitimate sources such as salaries, donations or business income. TF often involves small amounts, which makes it hard to detect, and it can affect institutions anywhere (UN TF Convention 1999, FATF R.5)."
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
    explanation: "FATF R.8 and its typologies identify diversion of funds by NPOs operating near conflict zones as a major TF risk. Red flags include cash collection, transfers to individuals rather than established partners, and vague program information. Nothing in the scenario points to trade flows, false tax deductions or securities."
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
    explanation: "FATF's 2015 report on foreign terrorist fighters lists sudden liquidation of assets, taking out loans with no intent to repay, one-way travel purchases, and cash withdrawals near conflict zones as indicators. Regular payroll and tuition payments are normal, explainable activity."
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
    explanation: "FATF's work on emerging TF risks and lone-actor terrorism shows that small cells often fund themselves with small, legitimate amounts such as salaries, benefits and loans. Such funds are hard to tell apart from normal activity. State sponsorship, trade finance and large frauds are associated with larger organizations, not low-cost attacks."
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
    explanation: "FATF's 2008 proliferation financing typologies and 2021 PF risk guidance list dual-use goods, trading companies in transshipment hubs, unclear end users and third-party payments as indicators. Frequency converters are a recognized dual-use item. The other options do not explain the combination of red flags."
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
    explanation: "PF networks use front companies, intermediaries and normal trade finance channels to buy goods that often have legitimate civilian uses. Because the funds may be clean and the transactions look routine, the typical ML red flags may not be present (FATF PF typologies). PF is subject to targeted financial sanctions and screening, and it uses many channels, not only cash or crypto."
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
    explanation: "OFAC's 2020 maritime advisory, updated in later sanctions guidance, identifies AIS disablement or manipulation and ship-to-ship transfers as key deceptive shipping practices used to hide sanctioned cargo. They are not fuel-saving practices, and they point to sanctions risk rather than piracy or customs fraud."
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
    explanation: "Sanctions and export control guidance (e.g., joint OFAC/BIS/FinCEN advisories) highlights newly formed intermediaries in third countries, purchase volumes inconsistent with the local market, and rapid re-export toward sanctioned destinations as classic evasion red flags. Nothing in the facts points to mispriced invoices (TBML) or customs duty fraud, and stockpiling would not explain a new company with no market footprint diverting goods toward a sanctioned area."
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
    explanation: "Prepaid cards are portable and can be loaded anonymously in small amounts, so value can move across borders without a currency declaration and be withdrawn abroad (FATF report on new payment methods). Loading just below ID thresholds is a structuring red flag. The scenario involves no skimming, chargebacks or interchange issues."
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
    explanation: "FinCEN's advisories on elder financial exploitation list sudden wires to a new online romantic partner who has never been met, defensiveness or secrecy, and a break from long-standing behavior as indicators of romance scams. BEC targets business payment processes, there is no trade element, and estate planning would not involve urgent wires to an unmet person abroad."
  },
  {
    id: "D1-035",
    domain: 1,
    topic: "Fraud - business email compromise",
    hy: false,
    q: "A corporate customer's accounts payable team receives an email that appears to come from a long-standing supplier and asks that future invoices be paid to a new account at a different bank in another country. The next payment is sent there. Which fraud typology does this represent?",
    options: ["Business email compromise", "Check kiting", "Advance fee fraud", "Synthetic identity fraud"],
    answer: [0],
    explanation: "Business email compromise uses spoofed or compromised email accounts to redirect legitimate payments, often by changing a supplier's banking details (FinCEN BEC advisories). Check kiting exploits float between accounts. Advance fee fraud asks the victim for upfront payments, and synthetic identity fraud combines real and fictitious identity data."
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
    explanation: "Money mules receive and quickly move funds for others, often after being recruited through fake job offers online (FBI and Europol money mule guidance). Incoming funds from unrelated parties that are passed on rapidly and \"payment processing\" job offers are key indicators. Wages and ordinary student expenses are expected activity."
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
      "Bribery, with proceeds of corruption channeled through a PEP's close family member",
      "Fraud against the consulting company by the construction firm"
    ],
    answer: [2],
    explanation: "A minister's family member is covered by PEP requirements (FATF R.12). Payments from a contractor that has won a government contract, made to a new company with no track record, are a classic indicator that corrupt payments are being routed through relatives or close associates. The other options do not explain the link between the contract award and the payments to a PEP's relative."
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
    explanation: "Unusually high or success-based commissions and payments to offshore accounts in another party's name are well-known red flags that an intermediary may be passing on bribes. They are cited in the DOJ/SEC FCPA Resource Guide and OECD guidance. Audited financials, references and acceptance of anti-corruption clauses and audit rights are signs of a legitimate intermediary."
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
    explanation: "The 2012 FATF Recommendations added \"tax crimes (related to direct taxes and indirect taxes)\" to the glossary of designated predicate offenses, so laundering the proceeds of tax evasion is a money laundering offense. Civil disputes, late filing and lawful tax planning are not criminal tax offenses."
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
    explanation: "MTIC or carousel fraud exploits the VAT-free treatment of intra-EU supplies. A \"missing trader\" collects VAT and disappears, and the goods circulate repeatedly through a chain of companies. Transfer mispricing involves prices between related parties, round-tripping sends domestic capital abroad and back, and customs undervaluation targets import duties, not VAT."
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
    explanation: "OFAC's advisories on ransomware payments (2020, updated 2021) warn that facilitating ransom payments to sanctioned actors may violate sanctions regulations on a strict liability basis. They also encourage prompt reporting to law enforcement. FinCEN has issued related ransomware red flags for SAR reporting. The other risks are secondary to the sanctions exposure."
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
    explanation: "Several senders sending just below the $3,000 funds transfer recordkeeping threshold to one beneficiary, with shared contact details, indicates smurfing or structuring. The MSB should evaluate this for a SAR (the MSB SAR threshold is $2,000 under 31 CFR 1022.320). Shared phone numbers undermine the family-remittance explanation, and no correspondent or trade element is present."
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
    explanation: "FinCEN's human trafficking advisories (2014, 2020) and FATF's 2018 report list third-party control of multiple accounts and identity documents, shared contact details, and frequent hotel and online advertising spending as indicators. Mortgage payments from salary and routine charitable giving are ordinary activity."
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
    explanation: "FATF's 2021 report on money laundering from environmental crime notes that illegal logging proceeds are often laundered through trade. Techniques include misdeclaring species or volumes, using front companies, and third-party payments. Species mismatches together with unexplained payers go beyond routine errors or lawful tax planning."
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
    explanation: "FATF's 2020 report on money laundering and the illegal wildlife trade identifies vague goods descriptions, links to known source and transit countries, cash deposits and payments to individuals as indicators. Valid CITES permits consistent with the business, and routine domestic logistics payments, are signs of legitimate trade."
  }
]);
