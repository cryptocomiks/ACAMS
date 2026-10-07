// Batch: Virtual assets practical cases (VASP due diligence, travel rule, stablecoins, mixers, kiosks, ransomware, scams, sanctions)
// Every keyed answer checked against the primary source listed in `source` (October 2026).
(function () {
  var FATF_GUID = { label: "FATF Updated Guidance for a Risk-Based Approach to VAs and VASPs (Oct 2021) (official copy, ONPCSB Romania)", url: "https://www.onpcsb.ro/2022/01042022/Updated-Guidance-VA-VASP.pdf" };
  var FATF_RF = { label: "FATF (2020) Virtual Assets Red Flag Indicators of ML/TF (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/Virtual-Assets-Red-Flag-Indicators.pdf" };
  var FATF_RECS = { label: "FATF Recommendations (2012-2026), INR.15 (EAG-hosted copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" };
  var FATF_SC = { label: "FATF Targeted Report on Stablecoins and Unhosted Wallets – P2P Transactions (Mar 2026) (copy hosted by FIAU Malta)", url: "https://fiaumalta.org/app/uploads/2026/03/Mar-2026-Targeted-Report-on-Stablecoins-and-Unhosted-Wallets-Peer-to-Peer-Transactions.pdf" };
  var TFR = { label: "Regulation (EU) 2023/1113 (Transfer of Funds Regulation), EUR-Lex", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R1113" };
  var EBA_TR = { label: "EBA Travel Rule Guidelines (EBA/GL/2024/11), applicable from 30 Dec 2024", url: "https://www.eba.europa.eu/sites/default/files/2024-07/6de6e9b9-0ed9-49cd-985d-c0834b5b4356/Travel%20Rule%20Guidelines.pdf" };
  var OFAC_VC = { label: "OFAC, Sanctions Compliance Guidance for the Virtual Currency Industry (Oct 2021)", url: "https://ofac.treasury.gov/media/913571/download?inline" };
  var TREAS_GARANTEX = { label: "Treasury press release sb0225 (14 Aug 2025) – Garantex re-designated; Grinex, A7, Old Vector designated", url: "https://home.treasury.gov/news/press-releases/sb0225" };
  var FINCEN_RANSOM = { label: "FinCEN Advisory FIN-2021-A004 – ransomware red flags", url: "https://www.fincen.gov/system/files/2021-11/FinCEN%20Ransomware%20Advisory_FINAL_508_.pdf" };
  var FINCEN_KIOSK = { label: "FinCEN Notice FIN-2025-NTC1 (Aug 2025) – CVC kiosks: red flags for operators", url: "https://www.fincen.gov/system/files/2025-08/FinCEN-Notice-CVCKIOSK.pdf" };
  var DOJ_225 = { label: "DOJ press release (18 Jun 2025) – civil forfeiture complaint against $225.3M in crypto confidence scam laundering", url: "https://www.justice.gov/opa/pr/united-states-files-civil-forfeiture-complaint-against-225m-funds-involved-cryptocurrency" };

  window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  // ---------------- Domain 1 (14) ----------------
  {
    id: "VASP-001", domain: 1, topic: "Sanctions evasion: Garantex successor exchange and the A7A5 token", hy: true, difficulty: "hard",
    changed: "OFAC re-designated Garantex and designated Grinex, A7 and Old Vector (Aug 2025)",
    q: "Kestrel Exchange, a US-registered VASP, onboarded Lunaport Trading LLC, a Kyrgyz Republic company that says it settles invoices for Russian importers of car parts. In October 2026, Lunaport asks to deposit 2.1 million units of the ruble-backed A7A5 token and to send USDT to a deposit address that Kestrel's blockchain analytics attributes to the exchange Grinex. Lunaport's director provides audited 2024 accounts and a valid certificate of incorporation, and the company cleared Kestrel's sanctions name screening at onboarding. The account manager notes that Lunaport is one of the exchange's ten largest clients by fees. Which fact should drive Kestrel's response MOST?",
    options: [
      "Lunaport's audited accounts are almost two years old, so its source-of-funds information is out of date",
      "OFAC designated Grinex in 2025 as Garantex's successor, and A7A5 serves a sanctioned settlement network",
      "Lunaport is a top client by fees, so any restriction must first be approved by senior management",
      "The Kyrgyz Republic is not on the FATF list of high-risk jurisdictions subject to a call for action"
    ],
    answer: [1],
    explanation: "In August 2025 OFAC re-designated Garantex and designated Grinex, which Garantex staff created after the March 2025 law enforcement takedown to keep serving customers and evade sanctions. OFAC also designated A7, a Russian cross-border settlement platform used for sanctions evasion and owned by Ilan Shor and Promsvyazbank, and Old Vector, the Kyrgyz issuer of the A7A5 token that was used to repay Garantex users. Sending USDT to a Grinex address would be a prohibited dealing with a blocked person, so Kestrel must stop it, assess blocking and reporting, and review the whole relationship. Onboarding name screening cannot detect on-chain exposure, and stale accounts, client fees or FATF list status are secondary.",
    source: [TREAS_GARANTEX]
  },
  {
    id: "VASP-002", domain: 1, topic: "Unregistered P2P exchanger using a bank account", hy: false, difficulty: "hard",
    q: "Tomasz Wrona, 29, a customer of Baltica Bank who describes himself as a freelance web designer, receives 140 instant payments in one month from 95 different individuals, each between EUR 150 and EUR 2,000. Many payment references read 'USDT order' followed by a number. Within hours of each credit he sends similar amounts to his own account at a licensed crypto exchange. A public profile in his name on a peer-to-peer (P2P) crypto marketplace shows 1,300 completed trades, a 'verified merchant' badge and prices about 3% above the exchange rate. He is not registered as a VASP. His tax return shows modest freelance income, and he recently bought a car with a loan. What is the MOST likely explanation?",
    options: [
      "He is a money mule in a business email compromise scheme, passing on stolen company payments",
      "He is a victim of an investment scam who is being coached to send his savings to the exchange",
      "He is acting as an unregistered VASP, selling virtual assets to P2P buyers and settling through his bank account",
      "He is receiving advance payments for web design projects and investing them in crypto"
    ],
    answer: [2],
    explanation: "FATF's virtual asset red flags include customers who operate as an unregistered or unlicensed VASP on P2P exchange websites, handle large volumes on behalf of others, charge higher fees than exchanges, and use bank accounts to facilitate these P2P trades. INR.15 requires a natural person who provides VASP services to be licensed or registered where they do business, and countries must act against unlicensed VASP activity. The mule explanation is the runner-up, but BEC mules receive large payments from defrauded companies, not many small payments from individuals referencing 'USDT order'. A scam victim would send money out, not receive it from 95 people.",
    source: [FATF_RF, FATF_RECS]
  },
  {
    id: "VASP-003", domain: 1, topic: "Investment scam (pig butchering) proceeds: consolidation and OTC cash-out", hy: false, difficulty: "hard",
    q: "Harbor Digital, a VASP, reviews Velmora Consulting Ltd, a corporate customer onboarded six weeks ago for 'blockchain advisory'. Its account has received USDT on the Tron blockchain from 212 addresses, most of them deposit addresses of retail customers at other exchanges; several of those exchanges have sent recall requests citing investment fraud complaints. Deposits range from USD 900 to USD 48,000. Every two or three days the balance is swept to one external address that analytics links to an unlicensed over-the-counter (OTC) broker. Velmora's director lives in a third country, its website went live the week the account opened, and it pays its fees promptly. What is the account MOST likely being used for?",
    options: [
      "Receiving consulting fees from clients who prefer to pay in stablecoins because they settle quickly",
      "Providing liquidity for arbitrage trades between exchanges on different blockchains",
      "Layering ransomware proceeds through a mixing service before converting them into stablecoins",
      "Collecting proceeds from investment scam victims and cashing them out through an unlicensed OTC broker"
    ],
    answer: [3],
    explanation: "FATF lists as a red flag incoming transfers from many unrelated wallets in relatively small amounts (accumulation) followed by transfer to another wallet or exchange for fiat. Its March 2026 stablecoin report notes that proceeds of investment fraud and pig butchering are collected in stablecoins and exchanged for fiat through unregistered or unlicensed VASPs, including OTC brokers. The recall requests citing fraud, a brand-new company with no real presence, and regular sweeps to an unlicensed OTC broker outweigh the prompt fee payments. Consulting fees would not come from hundreds of retail exchange accounts, and nothing shows a mixer or arbitrage trading. DOJ's June 2025 forfeiture of USD 225.3 million from a crypto confidence scam laundering network shows the scale of such schemes.",
    source: [FATF_RF, FATF_SC, DOJ_225]
  },
  {
    id: "VASP-004", domain: 1, topic: "Ransomware victims buying crypto: FinCEN red flags", hy: true, difficulty: "medium",
    q: "Northfield Regional Hospital opens an account at Cobalt Exchange, a US MSB. Its finance director, who says she has never bought cryptocurrency, asks to buy USD 1.2 million of bitcoin 'today if at all possible' and to send it to one address. The hospital has never held or paid in virtual currency before. Which facts are red flags that FinCEN lists for ransomware-related payments? (Choose two.)",
    options: [
      "The hospital funds the purchase by wire from its long-standing operating account at a US bank",
      "The customer shows limited knowledge of virtual currency yet urgently asks to buy a large amount",
      "The finance director supplies the hospital's EIN and a board resolution authorising the account",
      "An organisation with no history of virtual currency use sends a large transaction outside its normal business",
      "The hospital asks Cobalt for a transaction receipt for its accounting records"
    ],
    answer: [1, 3],
    explanation: "FinCEN's ransomware advisory lists a customer with limited knowledge of CVC who asks to buy it, particularly in a large amount or as a rush request, which may indicate a ransomware victim. It also lists a customer with no or limited CVC history that sends a large CVC transaction outside its normal business practices. Healthcare is named as a sector at high risk of ransomware. Funding from an established account, proper entity documents and a receipt request are ordinary features, not red flags. If the exchange suspects a ransom payment, it should consider a SAR (MSB threshold USD 2,000) and OFAC exposure.",
    source: [FINCEN_RANSOM]
  },
  {
    id: "VASP-005", domain: 1, topic: "CVC kiosk operator: many customers paying one wallet", hy: true, difficulty: "hard",
    q: "CoinPoint operates 300 cryptocurrency kiosks in three US states. Its monitoring team finds that over nine days, 14 different customers bought bitcoin with cash at kiosks in 11 cities and all sent it to the same wallet address. Each customer certified on the kiosk screen that the destination wallet was their own. Twelve of them are over 65, and none had used a kiosk before. Most transactions were between USD 4,000 and USD 9,500, and two customers came back the next day. The kiosks involved are in grocery stores with long opening hours. What does this pattern MOST likely indicate?",
    options: [
      "Many scam victims being directed to pay one scammer-controlled wallet",
      "One drug-trafficking organisation splitting cash below the CTR threshold across machines",
      "Legitimate customers who all use the same custodial wallet provider for their savings",
      "A kiosk software error that shows CoinPoint's own hot-wallet address by default"
    ],
    answer: [0],
    explanation: "FinCEN's 2025 kiosk notice lists, for kiosk operators, multiple customers in geographically disparate locations depositing to the same CVC address over a short period while certifying that they own it. It also notes that older adults are the main victims of kiosk scams, and that scammers coach them by phone. Structuring by a trafficking group is the runner-up because the amounts stay under USD 10,000, but FinCEN's structuring red flag describes one customer using multiple machines or accounts. Here, many unrelated first-time older users falsely certify ownership of a single address. CoinPoint should file SARs (MSB threshold USD 2,000) and consider blocking further sends to the address.",
    source: [FINCEN_KIOSK]
  },
  {
    id: "VASP-006", domain: 1, topic: "Stablecoin freezes and switching to a stablecoin without a freeze function", hy: false, difficulty: "hard",
    changed: "FATF targeted report on stablecoins and unhosted wallets (Mar 2026)",
    q: "Analysts at Meridian Chain, a blockchain analytics firm that supports an EU crypto-asset service provider, track a cluster of Tron addresses that public reporting links to procurement networks of Iran's Islamic Revolutionary Guard Corps (IRGC). In mid-2025, the issuer of USDT froze several addresses in the cluster. Over the following weeks, the remaining addresses bridged their USDT to Ethereum, swapped it on a decentralised exchange into DAI, and used the DAI to pay suppliers of drone components. The cluster's fees rose sharply, and some swaps were made at a loss. Which explanation is MOST consistent with FATF's analysis?",
    options: [
      "The network moved to DAI because it is a privacy coin that hides senders, receivers and amounts",
      "The network was chain-hopping only to reduce the transaction fees it paid on Tron",
      "The network moved to a stablecoin with no freeze function, to keep its funds beyond issuer freezes",
      "The network converted to DAI to gain access to a regulated redemption channel under MiCA"
    ],
    answer: [2],
    explanation: "FATF's March 2026 report notes that Iranian actors, including the IRGC, use stablecoins for sanctions evasion and proliferation procurement such as drone components. It warns that the mid-2025 USDT freezes of IRGC-linked addresses may push sanctioned entities toward stablecoins, such as DAI, that have no freeze function. The bridge and DEX swap are chain-hopping steps, but their purpose here is evasion, which is why the network accepted higher fees and losses. DAI runs on the transparent Ethereum blockchain and is not an anonymity-enhanced coin.",
    source: [FATF_SC]
  },
  {
    id: "VASP-007", domain: 1, topic: "Money mule networks converting layered fiat into virtual assets", hy: false, difficulty: "hard",
    q: "Solvent Exchange, a VASP in South Africa, notices 23 new retail accounts opened over two weeks. Several list the same residential address, and most log in from the same IP address. Each account is funded by one bank transfer of ZAR 40,000 to ZAR 90,000 from a different company account, buys bitcoin immediately, and withdraws it within an hour to accounts at two VASPs in another country. The account holders are aged 19 to 24, and their identity documents passed liveness checks. Two of the funding companies were registered in the last three months. What is the MOST likely explanation?",
    options: [
      "A student investment club is pooling its members' savings to buy bitcoin together",
      "Professional launderers are using recruited mules to turn layered fiat into virtual assets and move it abroad",
      "Customers are splitting purchases below the exchange's verification threshold to avoid KYC",
      "A payroll provider is paying staff salaries in bitcoin on behalf of the employer companies"
    ],
    answer: [1],
    explanation: "FATF's virtual asset red flags describe this case closely: individuals sharing a residential address and IP address bought virtual assets and immediately sent them to VASPs abroad, which indicated money mules used by professional launderers. The fiat had first been layered through company accounts. FATF also lists frequent transfers to the same destination by more than one person or from the same IP address, and newly created accounts that move their entire balance off the platform. Passing liveness checks shows the holders are real people, not that they act for themselves. KYC was completed, so threshold avoidance does not fit, and a payroll would not route salaries through brand-new companies and immediate foreign transfers.",
    source: [FATF_RF]
  },
  {
    id: "VASP-008", domain: 1, topic: "Using an exchange as a pass-through (de facto mixer)", hy: false, difficulty: "medium",
    q: "Over three months, a customer of Quill Exchange deposits bitcoin 61 times from 38 different external addresses. Each deposit is withdrawn in full within minutes to a newly generated private wallet address, with no trading in between, although every withdrawal costs a network fee. The customer, a 41-year-old logistics manager, says he 'likes to keep things tidy'. His KYC file is complete, and his address was verified last year. Which concern does this pattern MOST directly raise?",
    options: [
      "He is following the normal security practice of moving coins to his own hardware wallet",
      "He may be manipulating bitcoin's market price by moving large volumes through the exchange",
      "He may be hiding assets from tax authorities by holding them long-term in the exchange's custody",
      "He may be using the exchange as a pass-through to break the on-chain trail, in effect as a mixer"
    ],
    answer: [3],
    explanation: "FATF lists depositing virtual assets at an exchange and immediately withdrawing them without further exchange activity, an unnecessary step that incurs fees, as a red flag. FATF adds that withdrawing the deposit immediately to a private wallet effectively turns the exchange into a money laundering mixer. Moving coins to a hardware wallet can be legitimate, which makes it the runner-up, but 38 source addresses and a new destination address each time point to obscuring the trail, not storage. The funds do not stay on the exchange, and nothing suggests price manipulation.",
    source: [FATF_RF]
  },
  {
    id: "VASP-009", domain: 1, topic: "Ransomware cash-out: staggered high-value deposits then dormancy", hy: false, difficulty: "medium",
    q: "An analyst at Fjord Digital, a Nordic crypto-asset service provider, reviews an account that had been almost dormant for a year. In five days it received four bitcoin deposits of 3.1, 3.0, 3.2 and 3.1 BTC from different external addresses, arriving at roughly 24-hour intervals. Each deposit was converted at once into USDT and withdrawn to an exchange in a jurisdiction with weak AML/CFT regulation. No further activity followed. The account holder is a 52-year-old IT contractor. Which typology is MOST consistent with FATF's virtual asset red flag indicators?",
    options: [
      "Collection and cash-out of ransomware payments",
      "A pig-butchering victim being coached to make larger 'investments'",
      "Wash trading to inflate the price of a thinly traded token",
      "Cryptojacking, in which malware secretly mines coins on hijacked computers"
    ],
    answer: [0],
    explanation: "FATF lists multiple high-value transactions in a staggered and regular pattern, with no further transactions for a long period afterwards, as particularly common in ransomware cases. Related red flags include high-value transfers into a previously inactive account and transfers to VASPs in jurisdictions with weak or no AML/CFT regulation. A pig-butchering victim sends funds out rather than receiving them, and wash trading needs repeated trades in one asset between related accounts. Cryptojacking produces small mining rewards, not round 3 BTC deposits from different senders.",
    source: [FATF_RF]
  },
  {
    id: "VASP-010", domain: 1, topic: "Terrorist financing: small stablecoin transfers to a TF-linked wallet", hy: false, difficulty: "medium",
    q: "Over seven weeks, Anaïs Roche, a 27-year-old retail customer of a French crypto-asset service provider, sends 46 transfers of USDC to the same external wallet, each between EUR 40 and EUR 180. Her salary is paid into her bank account, and she tops up her crypto account by card. When asked, she says she is 'helping friends abroad'. The provider's blockchain analytics shows that the receiving wallet has direct exposure to several addresses linked to earlier terrorist financing cases. Her total outflows are below EUR 6,000, and she has no adverse media. Which factor should weigh MOST in the provider's assessment?",
    options: [
      "The low total value, which places the activity below the level at which an STR is worthwhile",
      "Her lack of adverse media, which shows she is unlikely to be involved in crime",
      "The wallet's direct exposure to TF-linked addresses, plus frequent small transfers",
      "Her use of a payment card for top-ups, which makes the source of funds traceable and low risk"
    ],
    answer: [2],
    explanation: "FATF's March 2026 report describes a 2025 French case: a retail customer made small, frequent stablecoin transfers to one external wallet, and blockchain analytics showed the wallet had direct links to addresses involved in terrorist financing. The pattern suggested smurfing by a facilitator, and the VASP filed an STR with TRACFIN. Terrorist financing often involves small amounts, and there is no minimum value for an STR. A clean media profile and a traceable funding source do not explain where the funds go.",
    source: [FATF_SC]
  },
  {
    id: "VASP-011", domain: 1, topic: "Scam compound workers' wages routed through an unlicensed payment provider", hy: false, difficulty: "hard",
    q: "An Indian VASP, Rupeeflow, finds 60 customers who fund their accounts only with USDT received from the same Southeast Asia-based payment service provider, sell it at once and withdraw the rupees to bank accounts. Their login IP addresses trace to Cambodia and Myanmar, and many customers share the same device fingerprint. The phone numbers on file are switched off; those reached through a messaging app say they work abroad as construction or restaurant staff. Each receives between USD 150 and USD 600 a month, and all passed KYC when they opened their accounts in India. What is the MOST likely explanation for the VASP to investigate?",
    options: [
      "Ordinary migrant remittances, which carry little risk because the amounts are small and KYC was done",
      "A pump-and-dump scheme in which a group coordinates trading in a small token",
      "Sanctions evasion by designated Myanmar military companies moving funds to India",
      "Wages of people working in scam compounds, sent through an unlicensed provider, with possible trafficking"
    ],
    answer: [3],
    explanation: "FATF's March 2026 report includes an Indian case with this pattern: customers funded accounts with USDT from a Southeast Asia-based payment service provider, liquidated it at once and withdrew rupees, shared device fingerprints and IP addresses, and were located in and around scam compounds in Cambodia and Myanmar. Some appeared on lists of Indians who had not returned from visitor visas, and FIU-India acted against the provider for operating illegally in India. Ordinary remittances are the runner-up, but small amounts and completed KYC do not explain the shared devices, the locations or the unlicensed provider. Nothing suggests token trading or a designated entity.",
    source: [FATF_SC]
  },
  {
    id: "VASP-012", domain: 1, topic: "Stablecoins and unhosted wallets: FATF findings (Mar 2026)", hy: true, difficulty: "medium",
    changed: "FATF targeted report on stablecoins and unhosted wallets (Mar 2026)",
    q: "Which statement reflects the findings of FATF's March 2026 targeted report on stablecoins and unhosted wallets?",
    options: [
      "Bitcoin remains the main asset in illicit on-chain activity, and stablecoins are mostly used for legitimate payments",
      "Stablecoins are the most-used asset in illicit transactions; P2P transfers via unhosted wallets are a key vulnerability",
      "Most illicit stablecoin activity happens at issuance and redemption, where issuers deal directly with customers",
      "The FATF Standards now require countries to prohibit all transfers between VASPs and unhosted wallets"
    ],
    answer: [1],
    explanation: "FATF reports that stablecoins are the most popular virtual asset in illicit transactions, citing industry data that they made up 84% of the USD 154 billion in illicit virtual asset volume in 2025. It calls P2P transactions via unhosted wallets a key vulnerability, because they take place without an AML/CFT-obliged intermediary. Most illicit stablecoin activity occurs in the secondary market, not at issuance or redemption. The Standards do not explicitly apply to unhosted wallets; prohibiting such transfers is only one of several approaches that some jurisdictions take.",
    source: [FATF_SC]
  },
  {
    id: "VASP-013", domain: 1, topic: "Online gambling winnings converted rapidly into stablecoins", hy: false, difficulty: "medium",
    q: "A Paris-based crypto-asset service provider sees that Lucien Marchal, a 34-year-old warehouse supervisor, receives frequent large deposits of ether from wallets belonging to several online casinos. He converts each deposit into stablecoins within minutes, sells them for euros and sends the euros to four bank accounts in his name at different banks. Over two months the total reaches EUR 310,000. He says he is 'a lucky player'. His account was opened three years ago and saw little activity until this year. Which conclusion is BEST supported?",
    options: [
      "Online gambling may be giving illicit funds the look of winnings, and rapid stablecoin conversion obscures their source",
      "The activity is low risk, because gambling winnings are a recognised and legitimate source of funds",
      "He is the victim of a pig-butchering scam and is being coached to move his savings",
      "He is wash trading NFTs through casino platforms to inflate their prices"
    ],
    answer: [0],
    explanation: "FATF's March 2026 report describes a French VASP that filed an STR after funds from online casinos were rapidly converted into stablecoins, then into fiat and deposited into several bank accounts. The red flags were gambling inconsistent with the customer's profile and declared source of funds, and rapid conversion of winnings into stablecoins with no economic purpose, suggesting an attempt to obscure the source. FATF also notes that drug trafficking organisations exploit high-volume online gambling platforms. Winnings can be a legitimate source of funds, but they must fit the customer's profile, and he receives rather than sends funds, so he is not a scam victim.",
    source: [FATF_SC]
  },
  {
    id: "VASP-014", domain: 1, topic: "DeFi misuse: DEX swaps without KYC as a layering step", hy: false, difficulty: "hard",
    q: "Northgate, a regulated exchange, sees that customers linked to an import-export company regularly buy ether with funds from their personal bank accounts. On-chain, the ether is swapped into USDT and USDC on decentralised exchanges (DEXs) and coin-swap services that do no KYC, then sent to wallets that analytics attributes to the import-export company. Weeks later, stablecoins from those wallets are sold through OTC brokers and regulated exchanges, and the euros are wired to the same individuals' bank accounts with the reference 'investment proceeds'. Which statement BEST describes the role of the DEX swaps?",
    options: [
      "They are the placement stage, because this is where criminal proceeds first enter the financial system",
      "They show integration, because the funds are now invested in stablecoins that earn a yield",
      "They are layering: non-KYC swaps break the link between the regulated on-ramp and later wallets",
      "They carry no ML significance, because DEX transactions are recorded on a public blockchain"
    ],
    answer: [2],
    explanation: "FATF's March 2026 report describes a Canadian case in which an organised crime network bought ether at a regulated VASP, swapped it for USDT and USDC on DEXs and coin-swap platforms without KYC, moved it to wallets of a shell import-export company, layered it further and off-ramped through OTC brokers and VASPs, with fiat wired back as 'investment proceeds'. The non-KYC swaps are layering: they move value away from the regulated chokepoint and obscure its trail. Placement had already happened when the proceeds entered the bank accounts, which makes placement the runner-up, and integration is the return of funds as 'investment proceeds'. A public ledger does not identify who controls DEX-swapped wallets.",
    source: [FATF_SC]
  },
  // ---------------- Domain 4 (8) ----------------
  {
    id: "VASP-015", domain: 4, topic: "Travel rule: deadline for requesting missing information (EBA guidelines)", hy: true, difficulty: "hard",
    q: "On a Tuesday, Lumen, a crypto-asset service provider (CASP) in Germany, receives a USDC transfer for a customer from Brio, a CASP in Spain. Brio's travel-rule message gives the originator's name and address but no distributed ledger address or crypto-asset account number. Lumen's procedures say it should request the missing data before making the funds available. Brio is a direct counterparty, and no intermediary is involved. Lumen's operations team proposes giving Brio 'the usual five working days, as for all cross-border transfers'. Under the EBA Travel Rule Guidelines, what is the longest deadline Lumen should set?",
    options: [
      "Five working days, because the transfer crosses a national border within the EU",
      "Seven days, because two CASPs in different Member States are involved in the chain",
      "There is no maximum; the length of the deadline is left to Lumen's risk-based policy",
      "Three working days from the day Lumen identifies the missing information"
    ],
    answer: [3],
    explanation: "The EBA Travel Rule Guidelines say a CASP that requests missing information should set a reasonable deadline of no more than three working days for transfers within the Union, and five working days for transfers received from outside the Union, counted from the day it identifies the missing information. Longer deadlines of up to seven days may be set only where the chain involves more than two parties or at least one provider outside the EU. Spain and Germany are both in the Union and there are only two parties, so five or seven days are too long. Article 14(1) of Regulation (EU) 2023/1113 requires the originator's distributed ledger address, so the information is incomplete.",
    source: [EBA_TR, TFR]
  },
  {
    id: "VASP-016", domain: 4, topic: "Travel rule: meaningless originator data and suspicion", hy: true, difficulty: "hard",
    q: "An incoming transfer of EUR 7,500 in USDT reaches Ostra, an EU crypto-asset service provider, from another EU provider. The travel-rule message gives the originator's name as 'My Customer' and the address as 'xxxxx'. Ostra's beneficiary customer is a long-standing client with no other risk factors. Under Regulation (EU) 2023/1113 and the EBA Travel Rule Guidelines, which actions are appropriate? (Choose two.)",
    options: [
      "Treat the information as missing, and reject, return or request it under Ostra's procedures before making the funds available",
      "Accept the transfer as compliant, because the fields are filled in and only empty fields count as missing",
      "File an STR automatically, because missing or meaningless information in itself gives rise to suspicion",
      "Take the missing information into account as one factor when assessing whether the activity is suspicious",
      "Report the sending provider to its AML/CFT supervisor at once as a repeatedly failing provider"
    ],
    answer: [0, 3],
    explanation: "The EBA guidelines say information should be treated as missing if it is meaningless, including strings such as 'xxxxx' and designations such as 'My Customer'. Article 17(1) then requires the beneficiary's provider, on a risk-sensitive basis, to reject or return the transfer or request the information before making the crypto-assets available. Under Article 18, missing information is a factor in the suspicion assessment, but the guidelines state that missing information does not by itself give rise to suspicion, so an automatic STR is wrong. A single incident does not make the sender a 'repeatedly failing' provider under Article 17(2).",
    source: [TFR, EBA_TR]
  },
  {
    id: "VASP-017", domain: 4, topic: "Travel rule: repeatedly failing counterparty CASP", hy: false, difficulty: "hard",
    q: "Over the last quarter, 38% of the transfers that Ostra, an EU crypto-asset service provider, received from Tavira Exchange, a provider in another Member State, lacked the originator's address or the beneficiary's account number. Ostra sent 52 requests for the missing data, and Tavira answered 9. Ostra's policy defines a 'repeatedly failing' provider using these two percentages, and Tavira meets the definition. Tavira says its new travel-rule software 'will be fixed next year'. Ostra has decided to warn Tavira and set a deadline before restricting the relationship. What else MUST Ostra do?",
    options: [
      "File an STR with the FIU on every affected transfer, because repeated failure proves money laundering",
      "Report Tavira's failure and the steps taken to its AML/CFT competent authority, within three months",
      "Nothing more, because Tavira has explained the cause and is established in the EU",
      "Obtain the consent of Tavira's home supervisor before restricting the relationship"
    ],
    answer: [1],
    explanation: "Article 17(2) of Regulation (EU) 2023/1113 lets the beneficiary's provider first issue warnings and set deadlines, or directly reject, restrict or terminate. In either case it must report the failure, and the steps taken, to the competent authority responsible for AML/CFT supervision. The EBA guidelines require the report without undue delay and no later than three months after identifying the repeatedly failing provider, regardless of any reasons given or of the provider's location. Missing data is a factor in the suspicion assessment, not proof of laundering, so automatic STRs are wrong. No consent from the other supervisor is needed.",
    source: [TFR, EBA_TR]
  },
  {
    id: "VASP-018", domain: 4, topic: "Self-hosted wallets: verifying ownership or control", hy: true, difficulty: "medium",
    q: "Kaito Mori, a customer of an EU crypto-asset service provider, asks to withdraw EUR 3,200 of ether to a self-hosted address that he says is his hardware wallet. Under Regulation (EU) 2023/1113 and the EBA Travel Rule Guidelines, which methods could the provider use to assess whether he owns or controls the address? (Choose two.)",
    options: [
      "Check that blockchain analytics does not attribute the address to any VASP or other service",
      "Accept a tick-box declaration in the app that the wallet belongs to him",
      "Ask him to send a small amount, set by the provider, from that address to his account with it",
      "Ask him for a photo of the hardware wallet's packaging and purchase receipt",
      "Ask him to sign a specific message with the private key that corresponds to the address"
    ],
    answer: [2, 4],
    explanation: "For a transfer above EUR 1,000 to a self-hosted address, Article 14(5) requires the originator's provider to take adequate measures to assess whether the customer owns or controls it. The EBA guidelines list acceptable methods, including sending a predefined small amount from and to the address, and having the customer digitally sign a specific message with the key for that address, as well as attended or unattended remote verification or other reliable technical means. A combination should be used if one method is not reliable enough, and a verified address may be whitelisted. Blockchain analytics helps identify that an address is self-hosted, not who controls it, and a self-declaration or a receipt proves nothing about the key.",
    source: [TFR, EBA_TR]
  },
  {
    id: "VASP-019", domain: 4, topic: "Travel rule: returning a transfer that cannot be rejected", hy: false, difficulty: "hard",
    q: "Ostra, an EU crypto-asset service provider, receives 0.8 BTC for a customer from a provider outside the EU. The required originator information is missing and cannot be obtained, so Ostra decides under its risk-based procedure not to make the funds available to its customer. The deposit is already confirmed on the blockchain, so it cannot be 'rejected' technically, and the sending provider has retired the address it sent from. Ostra has no grounds for suspicion. What should Ostra do under the EBA Travel Rule Guidelines?",
    options: [
      "Hold the bitcoin in a secure, segregated account while arranging a way to return it",
      "Credit the customer, because a confirmed blockchain transaction cannot be reversed in any way",
      "Send the bitcoin back to the original address, even though the sender no longer controls it",
      "Transfer the bitcoin to the national FIU, which takes custody of assets lacking travel-rule data"
    ],
    answer: [0],
    explanation: "The EBA guidelines say that where rejection is technically impossible, the transfer should be returned to the originator. Where returning it to the original address is not possible, CASPs should use alternative methods set out in their policies, including holding the assets in a secure, segregated account while they arrange a suitable return method with the originator. The provider should also tell the prior provider why the transfer was returned and consider how it treats that provider in future. Crediting the customer would defeat Ostra's own decision, and sending coins to an address nobody controls loses them. FIUs do not act as custodians of such assets.",
    source: [EBA_TR, TFR]
  },
  {
    id: "VASP-020", domain: 4, topic: "Blockchain analytics alert triage: direct sanctions exposure first", hy: false, difficulty: "hard",
    q: "On Monday morning, an analyst at a US crypto exchange has four new blockchain analytics alerts and time to work only one before noon. Which alert should she work FIRST?",
    options: [
      "A USD 85,000 deposit with 4% indirect exposure, five hops back, to an online gambling site",
      "A USD 40,000 withdrawal to a self-hosted address that the customer verified and whitelisted last year",
      "A USD 2,300 deposit received directly from a wallet attributed to Cryptex, an exchange OFAC designated in 2024",
      "A USD 12,000 deposit that came directly from a decentralised exchange's router contract"
    ],
    answer: [2],
    explanation: "Funds received directly from a wallet attributed to a designated exchange may be property in which a blocked person has an interest. OFAC's guidance says such virtual currency must be blocked, with access denied to all parties and a report to OFAC within 10 business days. That makes it time-critical whatever the amount. Treasury's August 2025 Garantex action confirms Cryptex's September 2024 designation. The USD 85,000 alert is larger, but a small share of indirect exposure several hops back is a weaker risk indicator. The whitelisted withdrawal and the DEX deposit can wait for routine review.",
    source: [OFAC_VC, TREAS_GARANTEX]
  },
  {
    id: "VASP-021", domain: 4, topic: "Preserving scam proceeds held in a centralised stablecoin", hy: false, difficulty: "hard",
    changed: "FATF targeted report on stablecoins and unhosted wallets (Mar 2026)",
    q: "Detective Sergeant Imogen Hale of a UK regional fraud unit is tracing GBP 600,000 that a retired engineer sent to a fake trading platform. Blockchain analytics shows that about USD 410,000 now sits as USDT on the Tron blockchain in one unhosted wallet, which has not moved for two days. A smaller part was swapped into DAI and sits in another unhosted wallet. The victim's bank has already filed a suspicious activity report. Which step offers the BEST chance of preserving the USDT quickly?",
    options: [
      "Ask the Tron network's validators to reverse the transactions that moved the victim's funds",
      "Ask the victim's bank to recall the original payments through the payment system",
      "Wait until the funds reach an exchange, then ask that exchange to freeze the account",
      "Ask the USDT issuer, through law enforcement channels, to freeze the tokens in that wallet"
    ],
    answer: [3],
    explanation: "FATF's March 2026 report notes that unhosted wallets leave no entity to cooperate with or compel. For centralised stablecoins such as USDT or USDC, however, the issuer can be contacted directly because it can freeze the tokens through smart contract functions. DAI has no freeze function, which is why that portion cannot be preserved this way. Tracing funds to an exit point is a valid tool and the runner-up, but waiting risks the funds being moved first. Blockchain validators cannot reverse confirmed transactions, and the victim's original payments were converted long ago. DOJ's June 2025 USD 225.3 million forfeiture in a crypto confidence scam case credited Tether's assistance.",
    source: [FATF_SC, DOJ_225]
  },
  {
    id: "VASP-022", domain: 4, topic: "Holding blocked virtual currency (OFAC)", hy: true, difficulty: "hard",
    q: "A US crypto exchange has blocked 4.6 BTC received from an address in an SDN entry and reported it to OFAC. Its treasury team proposes selling the bitcoin for dollars and moving the proceeds into an interest-bearing blocked account, 'as the bank does with blocked wires'. Which statement is CORRECT?",
    options: [
      "The exchange must convert the bitcoin into dollars within 10 business days, because blocked accounts may hold only fiat",
      "It need not convert the bitcoin or earn interest on it, but must deny all access and report annually",
      "The exchange must return the bitcoin to the sending address, because virtual currency cannot be blocked",
      "The exchange must transfer the bitcoin to a wallet controlled by OFAC, which holds all blocked virtual currency"
    ],
    answer: [1],
    explanation: "OFAC's guidance for the virtual currency industry (and FAQ 646) says a US person holding virtual currency that must be blocked must deny all parties access to it and follow OFAC's rules on holding and reporting blocked property. It is not obligated to convert the virtual currency into fiat or to hold it in an interest-bearing account. Blocked virtual currency must be reported within 10 business days and then annually while it remains blocked. The interest-bearing account rule applies to blocked funds such as wires, and OFAC does not take custody of blocked assets. Returning the coins to an SDN address would be a prohibited transfer.",
    source: [OFAC_VC]
  },
  // ---------------- Domain 2 (3) ----------------
  {
    id: "VASP-023", domain: 2, topic: "EU: correspondent relationships between CASPs and non-EU respondents", hy: false, difficulty: "medium",
    q: "Helix, a crypto-asset service provider authorised in the Netherlands, plans to start a relationship with Andes Crypto, an exchange in a non-EU country, so that Andes can route its customers' crypto-asset transfers through Helix. Under Directive (EU) 2015/849 as amended by Regulation (EU) 2023/1113, which measures must Helix take when entering into the relationship? (Choose three.)",
    options: [
      "Determine whether Andes Crypto is licensed or registered",
      "Obtain AMLA's prior approval for each relationship with a non-EU respondent",
      "Assess Andes Crypto's AML/CFT controls",
      "Collect identity documents for each of Andes Crypto's customers before the first transfer",
      "Obtain senior management approval before establishing the relationship"
    ],
    answer: [0, 2, 4],
    explanation: "Article 19b of the Directive, inserted by Regulation (EU) 2023/1113, requires CASPs entering a cross-border correspondent relationship with a non-EU respondent providing similar services to determine whether it is licensed or registered, understand its business, reputation and quality of supervision, and assess its AML/CFT controls. They must also obtain senior management approval and document each party's responsibilities. For payable-through accounts, the CASP must only be satisfied that the respondent has done CDD on its customers and can provide the data on request. It need not collect every customer's documents itself, and no AMLA approval is required.",
    source: [TFR]
  },
  {
    id: "VASP-024", domain: 2, topic: "NFTs: FATF's functional approach", hy: false, difficulty: "hard",
    q: "Gallerion, a platform in a FATF member country, sells 'Founders' Collection' NFTs. Each is a unique digital artwork, but it is sold in fractions, traded continuously on Gallerion's own secondary market, marketed with projected price growth, and accepted by partner merchants as payment for goods. Gallerion says it is outside AML/CFT rules because 'NFTs are collectibles, not virtual assets'. Under FATF's 2021 updated guidance, what is the BEST response?",
    options: [
      "The label is not decisive: NFTs used for payment or investment can be VAs, so Gallerion may be a VASP",
      "Gallerion is right, because unique tokens are excluded from the FATF definition of virtual assets in every case",
      "Gallerion is a VASP only if the NFTs also count as securities under national law",
      "NFTs fall entirely outside the FATF Standards, so only consumer protection law applies to Gallerion"
    ],
    answer: [0],
    explanation: "FATF's 2021 guidance says NFTs used in practice as collectibles are generally not virtual assets, but what matters is their nature and function in practice, not terminology or marketing. NFTs used for payment or investment purposes may fall within the virtual asset definition, and countries should apply the Standards case by case. An NFT that represents a security is covered as that financial asset rather than as a virtual asset, so securities status is not what would make Gallerion a VASP. Fractions, active trading, investment marketing and use as payment all point to a virtual asset.",
    source: [FATF_GUID]
  },
  {
    id: "VASP-025", domain: 2, topic: "R.15: licensing of offshore VASPs serving a host country", hy: true, difficulty: "medium",
    q: "Zentra Exchange is incorporated and licensed in Country A. It has no office in Country B, but it markets to Country B's residents in their language, and 40% of its users live there. Country B's supervisor asks what the FATF Standards allow it to do. Which answer is MOST accurate under INR.15?",
    options: [
      "Country B can do nothing, because only the country where a VASP is created may license or register it",
      "Country B must ask the FATF to declare Zentra a high-risk VASP before it can take any action",
      "Country B may act only if Country A is on the FATF list of jurisdictions under increased monitoring",
      "Country B may require VASPs serving its residents to be licensed there, and should act on unlicensed activity"
    ],
    answer: [3],
    explanation: "INR.15 requires VASPs to be licensed or registered at a minimum where they are created, but jurisdictions may also require VASPs that offer products or services to customers in, or operate from, their jurisdiction to be licensed or registered there. Countries should also take action to identify persons carrying out VASP activities without the required licence or registration and apply appropriate sanctions. The 'place of creation' rule is a minimum, not a limit, which makes it the runner-up. The FATF does not designate individual VASPs, and grey-list status is not a precondition.",
    source: [FATF_RECS]
  }
  ]);
})();
