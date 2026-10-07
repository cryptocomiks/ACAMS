window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  { id: "SHELL-001", domain: 1, topic: "Cuckoo smurfing vs funnel accounts", hy: true, difficulty: "hard",
    q: "Ravi Menon, a salaried engineer, banks with Harbourline Bank. His father in India pays 120,000 to a local informal remitter to send to Ravi for a flat purchase, and Ravi gives the remitter his account number. Over nine days Ravi's account receives 17 cash deposits of 6,000 to 8,500 each, made by eight different people at branches and ATMs in two cities. Ravi does not know any of the depositors. The total matches the amount his father paid. Ravi has no cash business, his salary continues as normal, and the local cash reporting threshold is 10,000. Which typology does this pattern MOST likely show?",
    options: [
      "Cuckoo smurfing, in which a launderer's cash replaces a legitimate remittance owed to an unwitting beneficiary",
      "A funnel account, in which cash paid in at distant branches is withdrawn quickly by the holder in another region",
      "Self-structuring by the customer, who splits his own savings into deposits below the threshold to avoid a report",
      "Money mule activity, in which the customer is paid a commission to receive and forward fraud proceeds abroad"
    ],
    answer: [0],
    explanation: "The FATF's Professional Money Laundering report describes cash controller networks that substitute criminal cash, deposited below the reporting threshold, for legitimate funds due to an unwitting third party who expects a payment from abroad; the FATF-Egmont report calls this cuckoo smurfing, moving wealth through the accounts of innocent third parties. The runner-up, a funnel account, needs the money to be withdrawn quickly in another region, but here the funds stay in Ravi's account and match a payment he expected. Ravi made no deposits himself, so this is not self-structuring, and he forwards nothing for a fee, so he is not acting as a mule.",
    source: [
      { label: "FATF (2018) Professional Money Laundering – money transport and cash controller networks (Bank of Russia copy of the FATF report)", url: "https://www.cbr.ru/Content/Document/File/54606/Professional-Money-Laundering.pdf" },
      { label: "FATF–Egmont (2018) Concealment of Beneficial Ownership – footnote 71 on cuckoo smurfing (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF-Egmont-Concealment-beneficial-ownership_eng.pdf" }
    ] },

  { id: "SHELL-002", domain: 3, topic: "Responding to cuckoo smurfing without tipping off", hy: false, difficulty: "hard",
    q: "Harbourline Bank's investigator concludes that Ravi's account was used for cuckoo smurfing: cash deposits by third parties replaced a remittance his father paid to an informal remitter abroad. Ravi appears not to have known. Teller records and CCTV identify several depositors, two of whom paid similar cash into four other customers' accounts this month. Ravi asks to withdraw the full balance tomorrow to pay a property deposit, and the branch manager wants to settle the matter quickly. What should the bank do FIRST?",
    options: [
      "Close Ravi's account at once and return the cash to the depositors who have been identified from the CCTV images",
      "Tell Ravi that the deposits are suspected criminal proceeds and ask him to name the remitter before deciding anything",
      "Report the suspicion promptly to the FIU, including the depositors and linked accounts, and follow local rules on the withdrawal",
      "Treat Ravi as the main suspect and freeze all his accounts until the police confirm whether he took part in the scheme"
    ],
    answer: [2],
    explanation: "Under FATF R.20, a bank that suspects funds are the proceeds of crime must report promptly to the FIU, and here the report should cover the depositors and the four linked accounts, which point to a wider cash controller network. Whether the withdrawal can proceed then depends on local law, such as any consent or postponement regime. The runner-up, questioning Ravi about criminal proceeds, risks tipping off contrary to R.21 and is not needed before reporting. Closing the account and returning cash, or treating an apparently unwitting customer as the main suspect, does not address the reporting duty.",
    source: [
      { label: "FATF Recommendations (2012-2026) – R.20 and R.21 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
      { label: "FATF (2018) Professional Money Laundering – substitution of funds through unwitting customers' accounts", url: "https://www.cbr.ru/Content/Document/File/54606/Professional-Money-Laundering.pdf" }
    ] },

  { id: "SHELL-003", domain: 1, topic: "Professional money launderers: individual, organisation or network", hy: true, difficulty: "hard",
    q: "Investigators map a laundering scheme that served a cocaine importer, an investment-fraud gang and a tax-evasion ring. There is no single leader and no fixed hierarchy. A company formation agent in Country A, a currency dealer in Country B and a freight forwarder in Country C know one another from earlier deals. Whenever one of them brings in a client, each takes on specific tasks for a fee. None of them took part in the predicate crimes, and two also run legitimate businesses. Under the FATF's 2018 Professional Money Laundering report, how is this group BEST described?",
    options: [
      "A professional money laundering organisation: an autonomous group with a strict hierarchy of specialists",
      "A professional money laundering network: associates who work together and subcontract specific tasks",
      "Three individual professional money launderers, each acting alone for separate criminal clients",
      "Self-launderers, because each member also earns income from a legitimate business of their own"
    ],
    answer: [1],
    explanation: "The FATF defines a professional money laundering network (PMLN) as a collection of associates or contacts who work together to facilitate schemes or subcontract services for specific tasks; such networks are often global, informal and flexible. The runner-up, a professional money laundering organisation (PMLO), is an autonomous, structured group, and most PMLOs have a strict hierarchy, which this group lacks. They work together, so they are not acting alone, and they launder for third parties for a fee without taking part in the predicate crimes, so they are not self-launderers.",
    source: [
      { label: "FATF (2018) Professional Money Laundering – individuals, organisations and networks", url: "https://www.cbr.ru/Content/Document/File/54606/Professional-Money-Laundering.pdf" }
    ] },

  { id: "SHELL-004", domain: 1, topic: "Professional money laundering roles: maintaining infrastructure", hy: false, difficulty: "medium",
    q: "Police seize the phone of 'Viktor', who works for a laundering organisation. His messages show that he recruits people to register companies in their own names, collects their online banking logins and passwords, and buys prepaid SIM cards to receive the accounts' security codes. He never meets the criminal clients and never handles cash. Which function in the FATF's description of professional money laundering does Viktor MOST clearly perform?",
    options: [
      "Introducing and promoting",
      "Collecting",
      "Transmitting",
      "Maintaining infrastructure"
    ],
    answer: [3],
    explanation: "The FATF's 2018 report says those who maintain infrastructure set up companies, open bank accounts and manage registrars who recruit nominees, receive online banking logins and passwords, and buy SIM cards. Introducers bring in clients and manage contact with them. Collectors take in the illicit funds, often cash, and carry out placement. Transmitters move funds through banks or money transfer services and make withdrawals.",
    source: [
      { label: "FATF (2018) Professional Money Laundering – roles and functions", url: "https://www.cbr.ru/Content/Document/File/54606/Professional-Money-Laundering.pdf" }
    ] },

  { id: "SHELL-005", domain: 1, topic: "Professional money launderers: what drives their fees", hy: true, difficulty: "medium",
    q: "A professional money launderer quotes different commission rates to different criminal clients. According to the FATF's 2018 Professional Money Laundering report, which factors tend to RAISE the fee? (Choose two.)",
    options: [
      "The launderer also took part in committing the predicate offence",
      "The client needs the funds moved or hidden in a shorter time",
      "The client pays the commission in cash before the work starts",
      "New regulation or law enforcement activity has increased the risk",
      "The client's proceeds are already held in bank accounts, not cash"
    ],
    answer: [1, 3],
    explanation: "The FATF lists factors that affect the fee, including the launderer's reputation, the amount, the denomination of banknotes, the time allowed (a shorter time means a higher commission) and new regulation or law enforcement activity. Paying in cash in advance is one way PMLs collect their commission, not a factor that sets its level. PMLs are rarely involved in the predicate offence, and the report does not say that funds held in bank accounts raise the fee.",
    source: [
      { label: "FATF (2018) Professional Money Laundering – commissions and fees", url: "https://www.cbr.ru/Content/Document/File/54606/Professional-Money-Laundering.pdf" }
    ] },

  { id: "SHELL-006", domain: 1, topic: "Proxy networks of shell companies", hy: false, difficulty: "hard",
    q: "Tallis Bank reviews 14 domestic trading companies opened in the last year through two introducers. Each company receives transfers from several unrelated corporate payers. Within days the funds pass through two or three of the other companies under 'supply contracts' for different goods, then go abroad as 'loan disbursements' and 'securities purchases' to companies in three jurisdictions. Those foreign accounts send money back to the payers' directors and to a property developer. The 14 companies have no staff or premises and keep balances close to zero, and their monthly volumes range from small to very large. Which typology does this MOST closely match?",
    options: [
      "A proxy network of shell companies that mixes funds from many clients and returns them to the clients",
      "Trade-based laundering by over-invoicing genuine exports between importers under common control",
      "An account settlement mechanism that swaps one group's criminal cash for another group's bank funds",
      "A funnel account scheme that collects cash in one region and pays it out quickly in another region"
    ],
    answer: [0],
    explanation: "The FATF describes proxy networks as chains of shell company accounts, at home and abroad, that receive client funds, mix money from different clients in the same accounts, send it abroad under fictitious trade, loan or securities contracts and return it to the clients or their associates; accounts with different activity levels are chosen to look legitimate. The runner-up, TBML, is a supporting mechanism, but nothing suggests real goods are shipped or mispriced; the contracts are a cover for the transfers. No cash is involved, which rules out account settlement and funnel accounts.",
    source: [
      { label: "FATF (2018) Professional Money Laundering – proxy networks", url: "https://www.cbr.ru/Content/Document/File/54606/Professional-Money-Laundering.pdf" },
      { label: "FATF–Egmont (2018) Concealment of Beneficial Ownership – Annex E shell company indicators (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF-Egmont-Concealment-beneficial-ownership_eng.pdf" }
    ] },

  { id: "SHELL-007", domain: 1, topic: "Account settlement mechanisms between criminal groups", hy: false, difficulty: "hard",
    q: "Several construction and industrial cleaning companies bank with Meridian Bank. Their articles of association are near-identical, their managers come from the same country, their finances are weak, and two have stopped filing accounts. They receive transfers from corporate customers, withdraw much of the money in cash 'to pay workers', and send the rest to unrelated companies in Asia with vague references. A foreign FIU reports that a drug-trafficking group holding large amounts of cash uses a laundering organisation that drives the cash into the country and hands it to local firms that need cash for wages. Which mechanism does this MOST likely show?",
    options: [
      "Cuckoo smurfing, in which criminal cash replaces a cross-border remittance owed to an unwitting beneficiary",
      "Front companies commingling drug cash with their own genuine revenue to make it look like business income",
      "An account settlement mechanism, in which one client's criminal cash meets another's need for cash for wages",
      "A funnel account scheme, in which cash paid in at one location is withdrawn shortly afterwards in another"
    ],
    answer: [2],
    explanation: "The FATF calls this an account settlement mechanism: a professional launderer serves at the same time criminals who have cash and want it moved into bank accounts, and others who hold bank funds but need cash, for example to pay illegal workers; the report's Belgian case had exactly this profile. The runner-up, front-company commingling, would show unexplained cash deposits, but here the companies withdraw cash and receive bank transfers. Cuckoo smurfing and funnel accounts both involve cash deposits into accounts, which are not described here.",
    source: [
      { label: "FATF (2018) Professional Money Laundering – account settlement mechanisms (Box 12)", url: "https://www.cbr.ru/Content/Document/File/54606/Professional-Money-Laundering.pdf" }
    ] },

  { id: "SHELL-008", domain: 1, topic: "Shell company indicators", hy: true, difficulty: "hard",
    q: "Nordvik Trading Ltd opened an account with Alder Bank eight months ago, describing itself as a wholesaler of industrial parts. Its sole director lives abroad, and its annual accounts are filed by an external accountancy firm. Its first incoming payment arrived two weeks after the account was opened. The company is incorporated in the same country as the bank. Which TWO facts are the strongest indicators that Nordvik is a shell company rather than an operating business? (Choose two.)",
    options: [
      "Its registered address is shared with 340 other companies managed by the same formation agent",
      "It files its annual accounts through an external accountancy firm rather than an in-house team",
      "It is incorporated in the same country as the bank's head office rather than offshore",
      "Its first incoming payment arrived two weeks after the account was opened",
      "Incoming funds leave within one or two days, and it pays no salaries, rent or taxes"
    ],
    answer: [0, 4],
    explanation: "The FATF-Egmont indicators of shell companies include an address of mass registration (often a company service provider's address used for many companies), only facilitating transit transactions with funds flowing through quickly, having no personnel and paying no taxes or social contributions. Using an external accountant and being incorporated in the bank's own country are normal for genuine businesses. A first payment two weeks after opening is unremarkable by itself.",
    source: [
      { label: "FATF–Egmont (2018) Concealment of Beneficial Ownership – Annex E, indicators of shell companies (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF-Egmont-Concealment-beneficial-ownership_eng.pdf" }
    ] },

  { id: "SHELL-009", domain: 1, topic: "Informal nominees (straw men) vs formal nominees", hy: true, difficulty: "hard",
    q: "Bianca, 20, a university student, is the sole director and 100% shareholder of Lumen Logistics Srl, which banks with Alder Bank. When the bank calls about large transfers, Bianca insists that she owns and runs the company but cannot name its customers or suppliers. Her father, a haulage contractor who was disqualified as a company director two years ago, joins the call and answers every question. There is no nominee agreement, and Bianca receives no fee. The company files its accounts on time. Which description is MOST accurate?",
    options: [
      "Bianca is the beneficial owner, because she is the registered director and holds all of the shares",
      "Bianca is likely an informal nominee, or straw man, for her father, who is the probable beneficial owner",
      "Bianca is a formal nominee director, because she holds the post on behalf of another person",
      "Her father is the senior managing official, because he answers the bank's operational questions"
    ],
    answer: [1],
    explanation: "The FATF-Egmont report describes informal nominees as spouses, children and associates whose link to the true owner is personal, rarely governed by a contract, and who often claim to be the beneficial owner to keep up the fiction; nominees are also used to get around directorship bans. The runner-up is wrong because formal nominees are professional, usually act under a contract for a fee, and seek to distance themselves from the company rather than claim to own it. Registered ownership does not make Bianca the beneficial owner when someone else controls the company, and the senior managing official is only a fallback when no controlling person can be identified.",
    source: [
      { label: "FATF–Egmont (2018) Concealment of Beneficial Ownership – formal and informal nominees (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF-Egmont-Concealment-beneficial-ownership_eng.pdf" }
    ] },

  { id: "SHELL-010", domain: 1, topic: "Money mule categories: unwitting, witting, complicit", hy: true, difficulty: "hard",
    q: "Tomasz, 26, was recruited online last year as a 'payment agent' for an overseas company. In March his bank stopped a transfer into his account, told him the money came from a reported scam, warned him that he might be acting as a money mule, and later closed the account. Since then he has opened accounts at two digital banks. They receive transfers from unrelated individuals, which he forwards to a crypto exchange, keeping 8%. He does not advertise his services or recruit others, and still says he 'just works in payments'. Under the FBI's categories of money mules, how is Tomasz BEST described?",
    options: [
      "An unwitting mule, since he still believes that he works for a genuine payments business",
      "A witting mule, since he carries on despite clear warnings and is wilfully blind to the activity",
      "A complicit mule, since he has opened accounts at more than one institution to receive funds",
      "A mule herder, since he controls the onward flow of the funds to the crypto exchange account"
    ],
    answer: [1],
    explanation: "The FBI's IC3 groups mules as unwitting, witting and complicit. Witting mules ignore warning signs or are wilfully blind, may have been warned by bank staff but keep opening accounts, and generally start out as unwitting mules, which matches Tomasz. The runner-up, complicit, describes mules who knowingly open accounts to receive illicit funds and may advertise their services or recruit others; Tomasz does neither and still claims to believe the job is real. A herder recruits and manages other mules.",
    source: [
      { label: "FBI IC3 PSA I-120419-PSA – Money mules: unwitting, witting and complicit", url: "https://www.ic3.gov/PSA/2019/PSA191204" }
    ] },

  { id: "SHELL-011", domain: 1, topic: "Student mules: selling accounts and cards to laundering networks", hy: false, difficulty: "hard",
    q: "Over two months, Corvin Bank's fraud team links 31 accounts opened online by first-year students at two universities. Each account received e-wallet top-ups and transfers from many senders and was emptied within hours by ATM withdrawals at a few machines in one district, often by the same two people, whom cameras show holding several cards each. When contacted, most students say they 'sold' their debit card and PIN for a one-off 200 to someone they met on a messaging app and have not used the account since. No customer has reported unauthorised access. Which explanation is MOST likely?",
    options: [
      "Account takeover by phishing, in which criminals stole the students' logins without their knowledge",
      "Cuckoo smurfing, in which cash deposits replace remittances that are owed to the students from abroad",
      "A funnel account scheme, in which the students pay in cash in one city for withdrawal in another city",
      "A laundering network using accounts and cards bought from students, with cash coordinators withdrawing the funds"
    ],
    answer: [3],
    explanation: "The FATF's Professional Money Laundering report describes networks that use cards and e-wallets issued in the names of students, who sell them for a fee, while 'cash co-ordinators' holding many cards make coordinated ATM withdrawals and hand the cash on. The runner-up, account takeover, involves access without the holder's knowledge, but these students handed over their cards and no one reported unauthorised use. No cash is paid in, which rules out cuckoo smurfing and funnel accounts.",
    source: [
      { label: "FATF (2018) Professional Money Laundering – digital money networks and money mules (Box 6)", url: "https://www.cbr.ru/Content/Document/File/54606/Professional-Money-Laundering.pdf" }
    ] },

  { id: "SHELL-012", domain: 1, topic: "Funnel accounts linked to trade-based money laundering", hy: true, difficulty: "hard",
    q: "Sierra Produce LLC operates only in Southern California and opened its account at a San Diego branch. Over three months the account receives 46 cash deposits of $4,000 to $9,500 at branches in Chicago, Indianapolis and Minneapolis, made by people the bank cannot identify. The account also shows normal payroll and fuel payments. Outgoing checks and wires now go to a leather goods company and to a textile manufacturer in China. The owner recently bought a new truck. Which fact is the strongest sign that this funnel account is being used for trade-based money laundering rather than as a traditional funnel account?",
    options: [
      "Cash deposits made in three distant states by people whom the bank cannot identify",
      "Checks and wires to textile and leather firms that are unrelated to a produce business",
      "The owner's purchase of a new truck shortly after the out-of-state deposits began",
      "The deposits are each kept below the $10,000 currency transaction reporting threshold"
    ],
    answer: [1],
    explanation: "FinCEN's advisory FIN-2014-A005 explains that in the TBML variant, funnel account funds pay for goods that are shipped abroad and sold, and it gives this exact red flag: debits unrelated to the business, such as a produce company paying a leather goods business or a textile manufacturer in China. In a traditional funnel account the cash is simply withdrawn and handed to the criminal organisation. The runner-up, out-of-state deposits by unknown people, and deposits kept below $10,000 show a funnel account but not the trade link, and a truck purchase is not a TBML indicator.",
    source: [
      { label: "FinCEN Advisory FIN-2014-A005 – funnel accounts and TBML", url: "https://www.fincen.gov/sites/default/files/advisory/FIN-2014-A005.pdf" }
    ] },

  { id: "SHELL-013", domain: 1, topic: "Business accounts used as mule accounts (UK NRA 2025)", hy: false, difficulty: "medium",
    q: "A UK bank reviews Ashgrove Scaffolding Ltd, a two-year-old company with one director. In ten months, £4.2 million passed through its business account: hundreds of incoming payments from individuals and small firms with no link to construction, sent on the same day to a few accounts abroad and to crypto exchanges. There are no payments for equipment hire, insurance or wages, and the director says business is 'booming'. According to the UK's 2025 National Risk Assessment, why are criminals increasingly using business accounts like this one?",
    options: [
      "They can move larger sums without arousing suspicion and now feature in about 1 in 5 mule cases reported to Cifas",
      "They are outside ongoing monitoring under the Money Laundering Regulations when there is only one director",
      "Payments through them cannot be reported in a suspicious activity report unless cash is deposited",
      "They are subject to simplified due diligence by default because a company has a registered office"
    ],
    answer: [0],
    explanation: "The UK's 2025 NRA says business accounts are increasingly targeted by money mules and account for 1 in 5 cases reported to Cifas, because they can move larger amounts without arousing suspicion; it cites the NCA's Operation Destabilise, where a scaffolding company moved £4.31 million in ten months. The other options are false: business accounts are subject to ongoing monitoring, any suspicious activity can be reported, and simplified due diligence depends on assessed low risk, not on a registered office.",
    source: [
      { label: "HM Treasury and Home Office – National Risk Assessment of Money Laundering and Terrorist Financing 2025, paras 5.12-5.14", url: "https://assets.publishing.service.gov.uk/media/6877be59760bf6cedaf5bd4f/National_Risk_Assessment_of_Money_Laundering_and_Terrorist_Financing_2025_FINAL.pdf" }
    ] },

  { id: "SHELL-014", domain: 1, topic: "Hawala: settlement through trade payments and registration", hy: false, difficulty: "hard",
    q: "Noor Mini Market Ltd, a UK grocery shop, banks with Kestrel Bank. Its account receives daily cash deposits well above what a shop of its size would take, and every week it pays invoices from a Dubai general trading company for electronics and textiles, which the shop does not sell. Customers have told branch staff that the owner can 'send money home the same day' to relatives in Pakistan and Afghanistan. The shop is not registered with HMRC as a money service business. Its food sales and VAT returns look normal. What is the MOST likely explanation?",
    options: [
      "The shop is a front company for drug dealers that mixes their cash with its genuine takings",
      "The shop is expanding into wholesale electronics through a legitimate supplier in the Gulf",
      "The owner runs an unregistered hawala and uses the trade payments to settle with a counterpart abroad",
      "The account is a funnel account receiving cash deposited at distant branches by unknown people"
    ],
    answer: [2],
    explanation: "The UK's 2025 NRA explains that hawala and other IVTS operators pay out from a local cash pool and later settle imbalances between themselves, for example through the movement or sale of goods, and that every UK IVTS provider must register with HMRC as a money service business. Same-day transfers 'home', excess cash and payments for goods the shop does not sell fit that pattern. The runner-up, a front company, would explain the excess cash but not the remittance service or the trade invoices. Nothing suggests real wholesale trade or deposits at distant branches.",
    source: [
      { label: "UK National Risk Assessment 2025 – informal value transfer systems and hawala, paras 3.51-3.55", url: "https://assets.publishing.service.gov.uk/media/6877be59760bf6cedaf5bd4f/National_Risk_Assessment_of_Money_Laundering_and_Terrorist_Financing_2025_FINAL.pdf" }
    ] },

  { id: "SHELL-015", domain: 1, topic: "Cash courier networks and TBML through vehicle exports", hy: false, difficulty: "hard",
    q: "Brandt Autohandel GmbH, a used-car dealer in Germany, banks with Rheinbank. Over six months, buyers arriving by car from Spain, the Netherlands and Italy pay cash, often in small notes, for used cars, construction machinery and spare parts, which the dealer exports to a single consignee in Iraq. Each payment is made by a different buyer, but the export documents always name the same consignee. The dealer's prices match the market, its customs filings are complete, and it recently bought a new cash-counting machine. Which scheme is this MOST consistent with?",
    options: [
      "Over-invoicing of exports to move extra value from Germany to the consignee in Iraq",
      "Cuckoo smurfing of remittances owed to the dealer by customers based in Iraq",
      "Structuring of the dealer's own sales to avoid cash transaction reporting duties",
      "Cash couriers collecting crime proceeds across Europe and moving the value abroad as goods"
    ],
    answer: [3],
    explanation: "The FATF's report describes Europol's Operation Kandil, in which couriers drove across Europe to collect heroin cash and the value was sent to Iraq by buying second-hand cars, machinery and equipment in Germany for export and resale there. The runner-up, over-invoicing, needs prices that differ from the value of the goods, but here prices match the market; the value moves because cash buys real goods. Cash paid into the dealer by third parties is not cuckoo smurfing, and nothing shows the dealer splitting its own sales.",
    source: [
      { label: "FATF (2018) Professional Money Laundering – Box 3, Operation Kandil (cash courier network)", url: "https://www.cbr.ru/Content/Document/File/54606/Professional-Money-Laundering.pdf" }
    ] },

  { id: "SHELL-016", domain: 1, topic: "Cash couriers: what FATF R.32 covers", hy: true, difficulty: "medium",
    q: "A courier who used to carry cash across a land border for a laundering network is now told to carry gold bars instead, because the destination country runs a cash declaration system under FATF Recommendation 32. Which statement about R.32 is accurate?",
    options: [
      "Gold and precious stones are outside R.32, but authorities should consider alerting customs in the origin and destination countries",
      "Gold bars count as bearer negotiable instruments under R.32, so they must be declared above USD/EUR 15,000",
      "R.32 sets a minimum declaration threshold of USD/EUR 15,000, which countries are not allowed to lower",
      "R.32 covers only outgoing currency, so a courier bringing gold or cash into a country is not covered"
    ],
    answer: [0],
    explanation: "The Interpretive Note to R.32 states that gold, precious metals and precious stones are not included, but a country that finds an unusual cross-border movement of them should consider notifying the customs or other authorities of the origin and destination countries. Bearer negotiable instruments are monetary instruments such as cheques and money orders, not gold. USD/EUR 15,000 is the maximum threshold (countries may set a lower one), and the system must cover both incoming and outgoing movements.",
    source: [
      { label: "FATF Recommendations (2012-2026) – R.32 and its Interpretive Note (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ] },

  { id: "SHELL-017", domain: 1, topic: "Underground banking through casinos", hy: false, difficulty: "hard",
    q: "A casino's AML analyst reviews Mr. Wen, a high-roller visiting from a country with strict currency controls. Several times a month a man Mr. Wen calls 'a friend' meets him in the car park and gives him bags of small-denomination cash, which he uses to buy chips. He plays little, cashes out for a casino cheque and pays it into a local bank account; some of the money has gone towards a house. Mr. Wen says he paid the same amount into an account in his home country before each trip. He has no local income. Which scheme does this MOST likely show?",
    options: [
      "Chip walking, in which the gambler takes chips off the premises to avoid currency reporting",
      "A junket arrangement in which an operator lends to the gambler for repayment later abroad",
      "Underground banking that supplies criminal cash locally in exchange for payments at home",
      "Refining small notes into large notes to prepare the cash for bulk smuggling abroad"
    ],
    answer: [2],
    explanation: "The FATF's report describes a Canadian case in which wealthy gamblers paid into accounts in China controlled by a laundering network and received cash, much of it drug money, delivered in casino car parks; they bought chips, cashed out for casino cheques and some bought real estate, while value moved through an informal value transfer system. The runner-up, a junket credit arrangement, involves lending to the gambler, but here Mr. Wen has prepaid at home and receives cash from a third party. He does not keep chips or exchange notes for larger ones.",
    source: [
      { label: "FATF (2018) Professional Money Laundering – Box 13, underground banking system", url: "https://www.cbr.ru/Content/Document/File/54606/Professional-Money-Laundering.pdf" }
    ] },

  { id: "SHELL-018", domain: 1, topic: "Alternative banking platforms", hy: false, difficulty: "hard",
    q: "Investigators examine Lynx Pay, which calls itself a 'treasury management service'. Its registered office is in one country, its holding company in a second, its only bank account in a third, and it is run from a fourth. Dozens of companies, several linked to VAT fraud, hold 'balances' with Lynx Pay. Their payments to one another are recorded only in Lynx Pay's encrypted software, while the single bank account shows a few large pooled transfers. Lynx Pay has no payment or banking licence. Which concept BEST describes Lynx Pay?",
    options: [
      "A nested correspondent relationship giving downstream banks access through a respondent bank",
      "A payable-through account used directly by a foreign bank's own customers to make payments",
      "A cash controller network that pools criminal cash in several countries and balances the pools",
      "An alternative banking platform running a parallel ledger inside the formal banking system"
    ],
    answer: [3],
    explanation: "The FATF describes alternative banking platforms as shadow banks that use the formal banking system while running their own accounting and settlement software, so money changes hands between many users inside one bank account without showing as bank transactions; its UK example had a registered office, holding company, bank account and operators in four different jurisdictions and served VAT fraud groups. The runner-up, a cash controller network, balances pools of physical cash, which is not involved here. Nested and payable-through accounts are correspondent banking structures that need a respondent bank.",
    source: [
      { label: "FATF (2018) Professional Money Laundering – underground banking and alternative banking platforms (Box 14)", url: "https://www.cbr.ru/Content/Document/File/54606/Professional-Money-Laundering.pdf" }
    ] },

  { id: "SHELL-019", domain: 1, topic: "Professional intermediaries: two-way flows through a client account", hy: false, difficulty: "hard",
    q: "Quill & Partners, a law firm, holds a client account at Fenwick Bank. Mr. Ortega, a client, sends 750,000 into the account 'for a property purchase'. Two weeks later the firm sends 745,000 to a company in another jurisdiction that Mr. Ortega says he controls, explaining that the purchase fell through. No property search, contract or fee invoice is on file. Six months later the same pattern repeats with 1.1 million. The firm is well established and regulated, and its partners have no adverse media. Mr. Ortega is a non-resident with shipping interests. Which red flag is MOST significant?",
    options: [
      "The law firm uses a pooled client account rather than a separate account for each client",
      "Two-way transfers of similar sums between the client and the firm with no sign of legal work",
      "The client is a non-resident whose wealth comes from interests in the shipping industry",
      "The sums are larger than the typical price of a residential property in the bank's region"
    ],
    answer: [1],
    explanation: "The FATF-Egmont indicators include a two-way transfer of similar sums between a client and a professional intermediary and the use of an intermediary without due cause, which lets funds pass through a lawyer's account and come back looking clean. The runner-up, non-resident status, is a general risk factor but does not by itself point to laundering, whereas a repeated round trip with no legal service does. Pooled client accounts are normal for law firms, and a large sum alone is not specific.",
    source: [
      { label: "FATF–Egmont (2018) Concealment of Beneficial Ownership – Annex E, indicators about the transaction (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF-Egmont-Concealment-beneficial-ownership_eng.pdf" }
    ] },

  { id: "SHELL-020", domain: 1, topic: "Company formation agents, nominees and EMIs (UK NRA 2025)", hy: false, difficulty: "medium",
    q: "A UK e-money institution sees a cluster of new company customers. All were formed online on the same day by one formation agent, which also supplied a virtual office address and an overseas nominee director. That director sits on the boards of 412 UK companies in sectors from cosmetics to freight. Within weeks, each company's account receives and sends on payments of around $800,000. Which statements reflect the UK's 2025 National Risk Assessment? (Choose two.)",
    options: [
      "Nominee services are lawful in the UK, so the NRA rates them as the lowest-risk service that TCSPs offer",
      "TCSPs do not move money themselves, so the NRA treats their services as outside the scope of ML risk",
      "Packages combining formation, nominees and e-money accounts speed up moving funds through new structures",
      "A director linked to many companies is a concern only when all of those companies are in the same sector",
      "Nominee directors linked to an implausibly large number of companies in disparate industries are higher risk"
    ],
    answer: [2, 4],
    explanation: "The 2025 NRA notes more partnering between TCSPs, including overseas nominees, and EMIs to sell company and financial service packages, which increases the speed at which money moves through newly created structures, citing UK companies used for transactions averaging $800,000. It treats directors linked to an implausibly large number of companies as higher risk, especially nominees across disparate industries. The NRA says nominee risk may now be higher than assessed in 2020, and it covers TCSPs precisely because companies they form can then move large sums.",
    source: [
      { label: "UK National Risk Assessment 2025 – TCSPs and nominee services, paras 5.224-5.235", url: "https://assets.publishing.service.gov.uk/media/6877be59760bf6cedaf5bd4f/National_Risk_Assessment_of_Money_Laundering_and_Terrorist_Financing_2025_FINAL.pdf" }
    ] },

  { id: "SHELL-021", domain: 1, topic: "Professional nominees and false links between companies", hy: false, difficulty: "hard",
    q: "A bank's network analytics tool links 180 corporate customers into one cluster because they share a director, Ms. Hale, a professional nominee supplied by a company service provider in a small financial centre. The cluster includes a shipping firm, two crypto start-ups and a bakery chain, in several countries. Three of the companies were recently reported to the FIU for fraud. The model owner proposes treating the whole cluster as one criminal network and exiting all 180 relationships. What is the MOST accurate assessment?",
    options: [
      "The cluster is a single criminal network, because a shared director proves common beneficial ownership",
      "Ms. Hale is the beneficial owner of all 180 companies, so screening her alone is enough to manage the risk",
      "FATF standards prohibit nominee directors, so all 180 relationships must be exited without further review",
      "A shared nominee can create false links, so the bank should look through her to each company's controllers"
    ],
    answer: [3],
    explanation: "The FATF-Egmont report warns that nominees in company records can delay identification of the beneficial owner or create false links between companies that share nominees, and the FATF Glossary says a nominee director is never the beneficial owner. The bank should treat the shared nominee as a risk factor and look through her to each company's real controllers, then act on the three reported companies and any others with real links. The runner-up, treating the cluster as one network, confuses a shared nominee with common ownership, and FATF R.24 requires measures against misuse of nominees, not a ban.",
    source: [
      { label: "FATF–Egmont (2018) Concealment of Beneficial Ownership – formal nominees, para. 86 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF-Egmont-Concealment-beneficial-ownership_eng.pdf" },
      { label: "FATF Recommendations (2012-2026) – INR.24 and Glossary, 'nominee' (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ] },

  { id: "SHELL-022", domain: 3, topic: "Ownership split just below the beneficial ownership threshold", hy: true, difficulty: "hard",
    q: "Corvo Holdings Ltd applies to open an account with Pennant Bank, which uses a 25% ownership threshold to identify beneficial owners. The share register shows four shareholders with 24.5% each and a fifth with 2%. The four main shareholders are siblings who give the same home address, and each has signed an identical power of attorney in favour of their uncle, who 'handles the business'. The uncle holds no shares and is not a director. The company plans to buy commercial property with funds from abroad. What should the bank do?",
    options: [
      "Record that there is no beneficial owner, because no shareholder exceeds 25%, and identify a senior managing official",
      "Rely on the share register, because registered shareholders are the beneficial owners unless the customer says otherwise",
      "Treat the split as a red flag, identify and verify the uncle as controlling through other means, and apply EDD",
      "Decline the application, because ownership just below the threshold proves that the company was set up to launder"
    ],
    answer: [2],
    explanation: "The FATF-Egmont indicators include several shareholders each holding just below the threshold that triggers enhanced measures. Under INR.10, where no one has a controlling ownership interest or there is doubt, the bank must identify natural persons who exercise control by other means, here the uncle who holds powers of attorney from all four siblings, and the unusual structure and foreign funds justify EDD. The runner-up, naming a senior managing official, is only the last step of the cascade, used when no controlling person can be found. A red flag calls for more due diligence, not automatic refusal.",
    source: [
      { label: "FATF Recommendations (2012-2026) – INR.10, beneficial owners of legal persons (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
      { label: "FATF–Egmont (2018) Concealment of Beneficial Ownership – Annex E indicators (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF-Egmont-Concealment-beneficial-ownership_eng.pdf" }
    ] },

  { id: "SHELL-023", domain: 3, topic: "Onboarding a company with legacy bearer shares", hy: false, difficulty: "hard",
    q: "Kestrel Bank is onboarding Arden Maritime SA, incorporated in a country that banned new bearer shares in 2023 but allows existing ones to remain if they are immobilised with a licensed custodian. A 60% stake in Arden is held in bearer shares issued in 2015. The share register lists that block as 'bearer', and the chairman provides a letter saying the bearer is 'a long-standing investor'. The other 40% belongs to a listed company. What should the bank do?",
    options: [
      "Treat Arden as higher risk, get the custodian's confirmation of who holds the bearer shares, and verify that person",
      "Accept the chairman's letter, because bearer shares issued before the 2023 reform are grandfathered for CDD",
      "Identify the listed company as the only beneficial owner, since it is the only shareholder named in the register",
      "Refuse the relationship, because FATF standards prohibit banks from serving companies that have bearer shares"
    ],
    answer: [0],
    explanation: "The Interpretive Note to R.10 lists companies with nominee shareholders or bearer shares as a higher-risk customer factor needing enhanced CDD, and INR.24 deals with existing bearer shares by conversion or immobilisation with a regulated institution or intermediary, so the custodian should be able to confirm who holds them. The bank must then identify and verify that natural person, who has a 60% controlling interest. The runner-up, automatic refusal, is wrong because the FATF does not ban such relationships; it requires risk-based EDD. An unverified letter is not enough, and a 40% holder does not remove the need to identify the 60% holder.",
    source: [
      { label: "FATF Recommendations (2012-2026) – INR.10 higher-risk factors and INR.24 bearer shares (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ] },

  { id: "SHELL-024", domain: 4, topic: "Evidence: shadow accounting records of professional launderers", hy: false, difficulty: "medium",
    q: "Executing a search warrant at the office of a suspected professional money launderer, investigators seize mobile phones, 40,000 in cash, dozens of company stamps and a password-protected spreadsheet. The spreadsheet lists code names, amounts, dates, the origin and destination of funds, and a percentage for each line. Which item is likely to be MOST valuable for identifying the launderer's criminal clients and the scale of the laundering?",
    options: [
      "The company stamps, which show which shell companies the launderer controlled",
      "The cash, whose serial numbers can be traced back to individual drug sales",
      "The phones' contact lists, which are likely to name every client in full",
      "The spreadsheet, a shadow accounting record of clients, flows and commissions"
    ],
    answer: [3],
    explanation: "The FATF reports that professional launderers often keep shadow accounts, such as password-protected spreadsheets that track clients by code name, funds laundered, origin and destination, dates and commissions, and calls these records an invaluable resource for investigators. The runner-up, company stamps, helps identify the infrastructure but not the clients or volumes. Serial numbers rarely link cash to specific crimes, and contact lists seldom name clients, especially when code names are used.",
    source: [
      { label: "FATF (2018) Professional Money Laundering – record keeping (shadow accountancy)", url: "https://www.cbr.ru/Content/Document/File/54606/Professional-Money-Laundering.pdf" }
    ] },

  { id: "SHELL-025", domain: 4, topic: "Investigative strategy: targeting professional launderers", hy: false, difficulty: "hard",
    q: "A task force of the FIU and police has spent two years prosecuting street-level drug dealers in one city, with many convictions. Analysis of suspicious transaction reports now shows that the same 30 shell companies, two money service businesses and one accountant moved the dealers' proceeds and also those of an online fraud ring and an excise fraud group. Each time a criminal group was dismantled, the same channels were serving new clients within weeks. Which change in strategy would be MOST effective?",
    options: [
      "Investigate the shared laundering infrastructure and its operators as a primary target, separate from the predicate crimes",
      "Keep focusing on predicate offenders, since laundering cases cannot go ahead without first convicting for the predicate",
      "Ask the banks to close the 30 companies' accounts, which will dismantle the network without further investigation",
      "Concentrate on seizing the proceeds held by each new client group as soon as it starts using the same channels"
    ],
    answer: [0],
    explanation: "The FATF's 2018 report finds that professional launderers survive action against their criminal clients and stand ready to serve the next ones, so dismantling them requires intelligence and investigation focused on the laundering activity rather than on the predicate offences; it criticises countries that limit cases to self-launderers. The runner-up, seizing each new group's proceeds, deals with symptoms while the infrastructure keeps working. FATF standards do not require a prior predicate conviction for a laundering prosecution, and account closures alone only push the network to new accounts.",
    source: [
      { label: "FATF (2018) Professional Money Laundering – executive summary", url: "https://www.cbr.ru/Content/Document/File/54606/Professional-Money-Laundering.pdf" },
      { label: "FATF Recommendations (2012-2026) – INR.3: no predicate conviction needed to prove proceeds of crime (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ] }
]);
