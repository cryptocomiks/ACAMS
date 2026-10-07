// Batch 7: practical cases on organized crime proceeds (drugs, smuggling, environmental crime, wildlife, counterfeiting, excise fraud, extortion, firearms).
window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  { id: "OCRM-001", domain: 1, topic: "Fentanyl purchases: personal-use payments vs bulk precursor payments (FIN-2019-A006)", hy: false, difficulty: "hard",
    q: "Analyst Priya Nandakumar at Lakeshore Community Bank in Ohio reviews two customers flagged in the same week. Customer A, a 24-year-old warehouse worker, sent seven transfers of USD 150 to USD 600 over two months, through different money transmitter agent locations, to individuals in China whose names differ but who share one phone number. His debit card was also used on a website selling 'research chemicals'. Customer B, a newly formed LLC that calls itself a cleaning-products distributor, sent three wires of USD 18,000 to USD 26,000 to a company in China with no apparent link to chemicals, and its account shows no sales receipts or payroll. Both customers have banked locally for years, and Customer A pays a car loan from his salary. According to FinCEN's 2019 fentanyl advisory, which statement BEST describes how the two patterns differ?",
    options: [
      "Customer A's structured, low-value transfers point to bulk precursor buying, while Customer B's larger wires fit a personal consumer",
      "Both patterns are typical of personal consumption, because each involves payments to China rather than to Mexican cartels",
      "Customer A fits low-value purchases for personal use or small resale, while Customer B's wires to a shell company fit bulk drug or precursor purchases",
      "Neither pattern is linked to fentanyl in the advisory, which covers only bulk cash smuggling by Mexican cartels across the border"
    ],
    answer: [2],
    explanation: "FinCEN's advisory FIN-2019-A006 says that US individuals who buy fentanyl from foreign suppliers usually send low-dollar transfers (under USD 1,000) through MSBs, online payment processors or banks. The recipients often share phone numbers, and the transfers are often structured across agent locations. In other cases the supplier asks for a bank transfer to a front company in the chemical field, or to a shell company with no link to chemicals. These payments are usually over USD 10,000 and may relate to bulk drug or precursor purchases. The first option is the runner-up trap because it reverses the two patterns. The advisory covers purchases from China and over the internet as well as cartel activity, so the last two options are wrong. The car loan and the customers' banking history are noise.",
    source: [{ label: "FinCEN Advisory FIN-2019-A006 (Aug 2019) – fentanyl purchases via MSBs (<USD 1,000) and bank transfers to front/shell companies (>USD 10,000)", url: "https://www.fincen.gov/sites/default/files/advisory/2019-08-21/Fentanyl%20Advisory%20FINAL%20508.pdf" }] },

  { id: "OCRM-002", domain: 1, topic: "Fentanyl precursors: spotting prestanombres (straw buyers) in correspondent wire data (FinCEN FTA 2025)", hy: true, difficulty: "hard",
    q: "Northgate Bank in Texas provides US dollar correspondent accounts to Banco Pacífico, a Mexican bank. In 2026 its monitoring shows that 14 Banco Pacífico customers, all individuals with addresses in small towns around Culiacán, Sinaloa, each sent two or three wires of USD 4,000 to USD 9,000 to the same chemical company in Wuhan, China. The payment details say only 'goods' or 'services', and none of the senders has any apparent link to the chemical industry. Each sender's account was almost inactive except for the one or two months in which these payments were made. Banco Pacífico has a good AML rating from its supervisor. Northgate's analyst already suspects the wires are payments for fentanyl precursors. Which feature BEST suggests that the 14 senders are money mules or 'prestanombres' (straw buyers) acting for a broker, rather than the real buyers of the chemicals?",
    options: [
      "Each sender's account was almost dormant outside the short window in which the chemical payments were made",
      "The beneficiary is a chemical company in Wuhan, one of the PRC cities most often named in fentanyl-related reports",
      "The wires were sent in US dollars and cleared through a US correspondent account held by a Mexican bank",
      "Each wire was below USD 10,000, the amount at which a currency transaction report must be filed"
    ],
    answer: [0],
    explanation: "FinCEN's April 2025 Financial Trend Analysis of 2024 fentanyl-related BSA reports says Mexico-based individuals, including those identified as money mules or 'prestanombres' (straw buyers), made suspected precursor payments. Filers often cited generic payment details ('goods' or 'services') and sporadic account dormancy, meaning little activity beyond a one- to two-month window of chemical-related payments. Networks of individuals around Culiacán sent wires to the same PRC supplier in a many-to-one pattern. An account that exists only to make a few payments points to a nominee, not a buyer. The Wuhan beneficiary is the runner-up: FinCEN notes Wuhan was tied for the most PRC subjects by city, but that links the payments to precursors, which the analyst already suspects; it says nothing about who is really paying. US dollar clearing through correspondent accounts is normal for these cross-border payments. The CTR threshold applies to cash, not wires, and FinCEN's 2024 advisory warns that low-dollar precursor payments can still fund large drug proceeds.",
    source: [
      { label: "FinCEN Financial Trend Analysis (Apr 2025) – fentanyl-related illicit finance: prestanombres, generic payment details, dormancy, many-to-one, Wuhan", url: "https://www.fincen.gov/system/files/shared/FinCEN-FTA-Fentanyl.pdf" },
      { label: "FinCEN Supplemental Advisory FIN-2024-A002 (June 2024) – low-dollar precursor payments and red flags", url: "https://www.fincen.gov/system/files/advisory/2024-06-20/FinCEN-Supplemental-Advisory-on-Fentanyl-508C.pdf" }
    ] },

  { id: "OCRM-003", domain: 1, topic: "Fentanyl precursors: CAS numbers in invoices and payment instructions", hy: false, difficulty: "hard",
    q: "Delmar Trading SA de CV, a Mexican importer that banks with your institution, asks you to release a USD 22,500 wire to a Hong Kong company. The attached invoice reads only 'chemical raw material, 25 kg, CAS 79099-07-3' and gives no product name. Delmar's file says it imports industrial cleaning supplies. It was incorporated 11 months ago, and its registered office is a residential flat. The Hong Kong beneficiary is a subsidiary of a mainland Chinese chemical group, which is common in the region, and the wire is in US dollars, Delmar's usual currency. Which element should the analyst treat as the MOST significant red flag?",
    options: [
      "The use of US dollars for a payment between a Mexican importer and a Hong Kong supplier",
      "The beneficiary being a Hong Kong subsidiary of a chemical group based in mainland China",
      "The modest size of the wire, well below the level that usually triggers an enhanced review",
      "The invoice naming the goods only by a CAS number that matches a known fentanyl precursor"
    ],
    answer: [3],
    explanation: "FinCEN's 2025 fentanyl trend analysis explains that Chemical Abstracts Service (CAS) numbers are unique identifiers for chemicals, and that criminals use them to avoid naming fentanyl. Filers found CAS numbers of fentanyl precursors in payment instructions and in invoices supplied by their clients. CAS 79099-07-3 (1-Boc-4-piperidone) is one of the precursors FinCEN lists. The Hong Kong link is the runner-up: FinCEN notes that some Hong Kong entities were branches of suspect PRC chemical companies, but on its own such a subsidiary is ordinary. US dollar pricing is normal in trade. Size is no comfort, because precursor payments are often low in value. The new company, residential address and mismatch with its stated business add to the concern.",
    source: [{ label: "FinCEN Financial Trend Analysis (Apr 2025) – CAS numbers in advertisements, invoices and payment instructions; Figure 5 precursor list", url: "https://www.fincen.gov/system/files/shared/FinCEN-FTA-Fentanyl.pdf" }] },

  { id: "OCRM-004", domain: 1, topic: "Domestic fentanyl sales in bank data: P2P memos and cash", hy: true, difficulty: "medium",
    q: "A bank's fraud team reviews Jalen Ortiz, 22, who reports part-time work at a car wash. In three months his account received 410 peer-to-peer payments of USD 20 to USD 300 from more than 150 different people. Many payment memos read 'blues' or 'ills', or show only blue-dot emojis, and most weeks he deposits USD 2,000 to USD 3,000 in cash at ATMs. Outflows are mostly rent, a car payment and transfers to an account at another bank. A few senders used memos that mention a 'concert ticket'. What is the MOST likely explanation for this activity?",
    options: [
      "Ticket resale on a secondary market, with the emoji memos used as the seller's brand",
      "Street-level sales of counterfeit opioid pills containing fentanyl, paid by P2P and cash",
      "Collection of contributions for an informal savings club run among the car wash staff",
      "A money mule account receiving the proceeds of online romance scams from many victims"
    ],
    answer: [1],
    explanation: "FinCEN's 2025 fentanyl trend analysis found that domestic fentanyl sales are mainly paid in cash and peer-to-peer transfers, cited in 54% and 51% of the relevant reports. Memos such as 'blues' and 'ills', and blue-dot emojis, are common slang for counterfeit opioid pills that contain fentanyl. Filers also reported structured cash deposits, including at ATMs. A few 'concert ticket' memos do not explain hundreds of small payments from 150 people. A savings club would involve the same few members paying in and being paid out. A mule account for scam proceeds would not explain the drug-slang memos or the weekly ATM cash deposits.",
    source: [{ label: "FinCEN Financial Trend Analysis (Apr 2025) – cash and P2P in domestic fentanyl sales; 'blues', 'ills' and emoji memos", url: "https://www.fincen.gov/system/files/shared/FinCEN-FTA-Fentanyl.pdf" }] },

  { id: "OCRM-005", domain: 1, topic: "Fentanyl precursors: shift to US-based intermediaries", hy: false, difficulty: "hard",
    q: "Since 2023, Químicos Rivera, a Mexican company with no registration to import chemicals, has sent wires through another bank to a chemical manufacturer in Hebei, China. In early 2026 those wires stop. At the same time, Harbor Link Supply LLC, a two-year-old New Jersey company owned by a Chinese national and a customer of your bank, starts receiving wires from Químicos Rivera. Within days of each one, it sends a similar amount to the same Hebei manufacturer. Harbor Link describes itself as an importer of kitchen equipment, files its taxes on time and has two employees. What does this change MOST likely indicate?",
    options: [
      "A normal supply-chain change, in which a US distributor takes over sales of the manufacturer's products in North America",
      "Trade-based laundering, in which Harbor Link over-invoices kitchen equipment imports to move cartel funds to China",
      "A shift to a US-based intermediary to hide payments for fentanyl precursor chemicals to the PRC supplier",
      "Proliferation financing, with Harbor Link acting as a front to buy dual-use chemicals for a weapons program"
    ],
    answer: [2],
    explanation: "FinCEN's 2025 fentanyl trend analysis reports that in 2024 suspected Mexico-based chemical brokers and their networks moved to using US intermediaries to pay precursor suppliers. One filer saw a Mexican company that had paid the PRC directly start routing payments through a US company owned by a Chinese national. Here the same sender, the same beneficiary, pass-through timing and an unrelated line of business all fit that pattern. A normal change of distributor is the runner-up, but Harbor Link sells kitchen equipment and simply passes the money on, and the Mexican sender is not registered to import chemicals. Nothing shows over-invoiced imports or a weapons end use.",
    source: [{ label: "FinCEN Financial Trend Analysis (Apr 2025) – Mexico-based brokers shifting to US-based intermediaries in 2024", url: "https://www.fincen.gov/system/files/shared/FinCEN-FTA-Fentanyl.pdf" }] },

  { id: "OCRM-006", domain: 1, topic: "Synthetic opioids: FATF risk indicators for pharmaceutical trading customers", hy: false, difficulty: "hard",
    q: "Coastline Bank is reviewing Veridia Pharma Trading Ltd, a customer that says it imports and resells pharmaceutical ingredients. Which observations does the FATF's 2022 report on money laundering from fentanyl and synthetic opioids list as risk indicators for this kind of customer? (Choose three.)",
    options: [
      "It operates from a residential flat with no commercial or industrial space and gives no reasonable explanation",
      "It holds valid import registrations and buys from suppliers in several countries, as its peers do",
      "Its accounts show no regular payroll, operating costs or tax payments despite the size of its stated business",
      "It pays its main supplier on standard 60-day terms that match the dates on the bills of lading",
      "Its contracts and invoices describe the traded chemicals only in generic or non-specific terms"
    ],
    answer: [0, 2, 4],
    explanation: "The FATF's 2022 report lists, among its customer and trade indicators: a trade entity using residential property without commercial or industrial space and with no reasonable explanation; pharmaceutical or chemical companies with a notable lack of routine business activity such as payroll, operating costs and tax payments; and contracts or invoices that describe the chemicals only generically. Valid import registrations, a spread of suppliers like its peers, and payment terms that match the shipping documents are signs of a normal business, not risk indicators.",
    source: [{ label: "FATF (2022) Money Laundering from Fentanyl and Synthetic Opioids – risk indicators (copy hosted by FIAU Malta)", url: "https://fiaumalta.org/app/uploads/2022/12/Money-Laundering-Fentanyl-Synthetic-Opioids.pdf" }] },

  { id: "OCRM-007", domain: 1, topic: "Migrant smuggling: hawala as a guarantee for 'guaranteed smuggling' (FATF 2022)", hy: false, difficulty: "medium",
    q: "Investigators in Country G are tracing the money of a network that smuggles migrants from the Middle East to Western Europe. Before each journey, the migrant's relatives pay EUR 6,000 in cash at a hawala office in the migrant's home town. The hawaladar does not pass the money on straight away. When the migrant reaches the destination, the smugglers post a short video on social media showing that the person has arrived, and only then does the hawaladar release the funds, sometimes after receiving a code by phone. Some migrants also carry small amounts of cash for food. According to the FATF's 2022 report on migrant smuggling, what role does the hawaladar play in this scheme?",
    options: [
      "A cash courier who carries the smuggling fees physically across each border on the route",
      "A professional money launderer who buys property for the smugglers in the destination country",
      "A money mule who receives the fees into a personal bank account and forwards them abroad",
      "A guarantor who holds the fee in a fiduciary capacity and releases it only once arrival is proven"
    ],
    answer: [3],
    explanation: "The FATF's 2022 report describes 'guaranteed smuggling': relatives pay a hawala office in the country of origin or where the route begins before the journey. The office holds the funds in a fiduciary capacity and pays the smugglers only after the smuggling succeeds. Smugglers often upload videos to social media as proof of arrival, and funds can be released by phone call or code. The report names hawala as the most common way to move smuggling proceeds, alongside cash couriers and money mules, but in this scheme the hawaladar is neither carrying the cash nor using a personal account.",
    source: [
      { label: "FATF (2022) ML/TF Risks Arising from Migrant Smuggling – official publication page", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/Migrant-smuggling.html" },
      { label: "FATF (2022) ML/TF Risks Arising from Migrant Smuggling – full text, hawala held in fiduciary capacity (copy hosted by the Bank of Russia)", url: "https://www.cbr.ru/Content/Document/File/135353/Mig_Sm.pdf" }
    ] },

  { id: "OCRM-008", domain: 1, topic: "Human smuggling: charter flights to Nicaragua (FinCEN FTA 2026)", hy: false, difficulty: "hard",
    q: "Aerolíneas Brisa Charter, a small company that sells charter flights, banks with Southport Bank in Florida. Over eight months it receives more than USD 3 million from travel agencies and individuals for flights from the United Arab Emirates to Managua, Nicaragua, some with stops in Egypt and Jamaica. The payments do not match the contracts it provides, several large refunds have no explanation, and most passengers are Indian nationals on one-way bookings. The company recently leased a second aircraft and hired a new finance director. Its owner has a clean background. What is the MOST likely concern?",
    options: [
      "Financing of human smuggling, using charter flights to bring migrants to Nicaragua before a journey by land to the US border",
      "Evasion of US export controls, by leasing the second aircraft to an airline based in a sanctioned jurisdiction",
      "Trade-based money laundering, with over-invoiced flight contracts moving cartel proceeds from the UAE to Nicaragua",
      "Tour operator fraud, in which customers pay for flights that are later cancelled and never refunded"
    ],
    answer: [0],
    explanation: "FinCEN's August 2026 trend analysis of human smuggling BSA reports describes a filer that reported more than USD 3 million in charter flight transactions suspected of financing human smuggling from the UAE to Nicaragua, with the United States as the final destination. The red flags were inconsistent payment amounts, unexplained refunds and contracts that did not match the money flows. A linked company had chartered a flight carrying Indian nationals from Egypt to Jamaica via the UAE and on to Nicaragua, which a 2024 joint alert identified as a point where migrants get off and travel by land to the US border. Nothing in the facts points to an export to a sanctioned party, cartel proceeds or unpaid refunds; the new aircraft and finance director are noise.",
    source: [{ label: "FinCEN Financial Trend Analysis (Aug 2026) – Human Smuggling: 2023-2025 threat pattern and trend information (charter flights UAE–Nicaragua)", url: "https://www.fincen.gov/system/files/2026-08/FTA-Human-Smuggling.pdf" }] },

  { id: "OCRM-009", domain: 1, topic: "Human smuggling fees in bank data: funnel account and structured withdrawals", hy: true, difficulty: "hard",
    q: "Rosa Delgado, a home health aide in El Paso, Texas, has a checking and a savings account at Mesa Verde Bank. From March to July, the checking account received more than 500 peer-to-peer transfers of USD 50 to USD 400 from 34 senders in several US states, about USD 68,000 in total. Each evening she moves the incoming money to savings, and she then makes cash withdrawals of USD 2,000 to USD 9,000 at different branches and ATMs near the border. When asked, she said she runs a tanda, a rotating savings club, for friends from church. None of the senders lives in her area, and none has received a payout from her accounts. Which explanation is MOST consistent with the activity?",
    options: [
      "A rotating savings club, since tandas commonly collect regular small contributions from many members",
      "Payment collection for a home care agency that has not yet opened its own business account",
      "A funnel account collecting human smuggling fees, with withdrawals kept below the currency reporting threshold",
      "Proceeds of elder financial exploitation taken from the patients she cares for in their homes"
    ],
    answer: [2],
    explanation: "FinCEN's 2026 trend analysis describes a bank-filed report on an account that acted as a funnel account: more than 500 small P2P transfers from over 30 senders, about USD 68,000 between March and July, moved from checking to savings and then withdrawn in cash below the CTR threshold at several branches and ATMs. FinCEN's 2023 alert lists payments from many senders in different places to one beneficiary on or near the southwest border as a human smuggling red flag. The tanda story is the runner-up, but a rotating savings club pays each member in turn, and its members are usually local; here the senders are spread across states and no one is ever paid out. Nothing suggests a business or her patients as the source.",
    source: [
      { label: "FinCEN Financial Trend Analysis (Aug 2026) – Human Smuggling: funnel account example with structured withdrawals", url: "https://www.fincen.gov/system/files/2026-08/FTA-Human-Smuggling.pdf" },
      { label: "FinCEN Alert FIN-2023-Alert001 (Jan 2023) – human smuggling along the southwest border: red flags and funnel accounts", url: "https://www.fincen.gov/sites/default/files/shared/FinCEN%20Alert%20Human%20Smuggling%20FINAL_508.pdf" }
    ] },

  { id: "OCRM-010", domain: 2, topic: "SAR filing when smuggling debt turns into forced labor (FIN-2023-Alert001)", hy: true, difficulty: "hard",
    q: "In 2025 Hector Ruiz, a construction worker, opened an account at Pinewood Bank three weeks after arriving in the United States. His aunt paid part of his smuggling fee in advance, and he still owes the balance to the smuggling network. Since then, about 60% of each weekly payroll deposit has been sent, on the day it arrives, to the account of a 'labor broker' linked to the smugglers, who also keeps Hector's passport and decides where he works and lives. Hector tells a teller he cannot leave until 'the debt is paid', although the debt keeps growing because of 'fees'. Pinewood decides to file a SAR. Following FinCEN's 2023 human smuggling alert, how should the SAR be completed?",
    options: [
      "Include the key term FIN-2023-HUMANSMUGGLING in field 2 and the narrative, select human smuggling in field 38(g), and also select human trafficking in field 38(h)",
      "Select only human trafficking in field 38(h), because once exploitation begins the smuggling no longer needs to be reported",
      "Select only human smuggling in field 38(g), because the debt arose from a smuggling fee that the migrant agreed to pay",
      "Select 'other' in field 38(z) and describe the debt as an informal loan, because no smuggling payment passed through Pinewood"
    ],
    answer: [0],
    explanation: "FinCEN's alert FIN-2023-Alert001 asks filers to include the key term 'FIN-2023-HUMANSMUGGLING' in SAR field 2 and in the narrative and to select field 38(g) (human smuggling). Filers that suspect human trafficking should also select field 38(h). The alert warns that migrants who cannot pay in full, or cannot pay their remaining debt on arrival, may become victims of human trafficking, including forced labor; trafficking includes obtaining labor through force, fraud or coercion for debt bondage. A confiscated passport, control of work and housing, wages diverted to the broker and a debt that keeps growing are signs of that. Selecting only 38(h) is the runner-up, but the alert asks for both: the payments still relate to the smuggling network, and the key term links the report to the alert. Selecting only 38(g) ignores the coercion. The 'informal loan' framing is wrong because a SAR does not require the smuggling fee itself to pass through the bank.",
    source: [{ label: "FinCEN Alert FIN-2023-Alert001 (Jan 2023) – vulnerability to trafficking, SAR key term and fields 38(g) and 38(h)", url: "https://www.fincen.gov/sites/default/files/shared/FinCEN%20Alert%20Human%20Smuggling%20FINAL_508.pdf" }] },

  { id: "OCRM-011", domain: 1, topic: "Cartel revenue from human smuggling: the 'piso'", hy: true, difficulty: "medium",
    q: "FinCEN's 2026 analysis of human smuggling BSA reports explains how Mexico-based cartels profit from smuggling networks that they do not run themselves. What is a 'piso' in this context?",
    options: [
      "A fee migrants pay to a hawala office, which holds it until they reach their destination",
      "A cash courier who carries the cartel's share of smuggling fees back across the border",
      "A territorial tax that cartels collect from smugglers operating in areas they control",
      "A funnel account opened in a migrant's name to receive payments from the migrant's relatives"
    ],
    answer: [2],
    explanation: "FinCEN explains that human smuggling networks are often linked to larger transnational criminal organizations, such as Mexico-based cartels, which 'control' territory along key migration corridors. These cartels profit in several ways, including by collecting a 'piso', or territorial tax, from smugglers operating in their areas. FinCEN's 2023 alert describes the same link as a 'protection tax' paid for safe passage. The other options describe a hawala guarantee, a cash courier and a funnel account.",
    source: [
      { label: "FinCEN Financial Trend Analysis (Aug 2026) – Human Smuggling: TCOs collect a 'piso' (territorial tax)", url: "https://www.fincen.gov/system/files/2026-08/FTA-Human-Smuggling.pdf" },
      { label: "FinCEN Alert FIN-2023-Alert001 (Jan 2023) – 'protection tax' paid to TCOs for safe passage", url: "https://www.fincen.gov/sites/default/files/shared/FinCEN%20Alert%20Human%20Smuggling%20FINAL_508.pdf" }
    ] },

  { id: "OCRM-012", domain: 1, topic: "Illegal logging: reconciling exported volumes with concession permits", hy: false, difficulty: "hard",
    q: "Tamsin Oduya, an analyst at a bank in a timber-exporting country, reviews Greenridge Timber Ltd. Greenridge holds a concession permit to harvest 8,000 cubic metres of hardwood a year, but its export documents for the year show 21,000 cubic metres shipped. Several bills of lading were changed while the cargo was in a free trade zone. Greenridge's director also sits on the boards of four other logging companies, and the company makes large cash withdrawals at a branch in a remote forest town. Greenridge has banked with the bank for 12 years, files its tax returns on time and recently bought new sawmill equipment. Which finding gives the MOST direct evidence that some of the exported timber was not legally harvested?",
    options: [
      "The exported volume is far above the volume allowed under the company's concession permit",
      "The director sits on the boards of several other companies in the logging sector",
      "The company makes large cash withdrawals at a branch in a remote forest area",
      "The company has recently bought new equipment for its sawmill operations"
    ],
    answer: [0],
    explanation: "The FATF's 2021 environmental crime report lists, as a risk indicator, export or import documents that differ significantly from the amount of timber allowed in the concession or permit. It also lists exports above what is available in the region and changes of ownership and bill of lading en route, often in a free trade zone. A director of several extraction companies and large cash withdrawals in rural areas near logging sites are also FATF indicators, but they only raise suspicion: they do not show that timber was cut beyond what was allowed. That makes the cash withdrawals the runner-up. Shipping more than twice the permitted volume directly suggests illegal harvesting. Buying new equipment is ordinary.",
    source: [{ label: "FATF (2021) Money Laundering from Environmental Crime, Annex A – risk indicators (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/03.Money-Laundering-from-Environmental-Crime.pdf" }] },

  { id: "OCRM-013", domain: 1, topic: "Illegal logging proceeds comingled through a cash-intensive export trade (rosewood and vanilla)", hy: false, difficulty: "hard",
    q: "Authorities in Country M, which exports both vanilla and rosewood, notice that in 2014 a small group of traders bought vanilla in bulk, for cash, at prices far above the usual market level, and then reported large 'vanilla export profits'. Several of the traders had earlier been linked to exports of rosewood, an endangered and protected species. Vanilla prices returned to normal only after an export ban on rosewood was enforced several years later. Vanilla is the country's main export, and the trade is highly cash-intensive. Which laundering technique does this case MOST likely show?",
    options: [
      "Market manipulation, in which traders corner the vanilla supply to profit from higher world prices",
      "Comingling illegal logging proceeds with a cash-intensive legal export trade to present them as legitimate earnings",
      "Trade-based laundering by over-invoicing vanilla exports to bring funds into the country from abroad",
      "Placement of illegal logging cash by structuring bank deposits below the reporting threshold"
    ],
    answer: [1],
    explanation: "In a Madagascar case in the FATF's 2021 environmental crime report, individuals bought vanilla in bulk in 2014 and drove up prices to hide the mixing of rosewood trafficking proceeds with legitimate trade, presenting criminal gains as vanilla earnings. Prices stabilised after a rosewood export ban was enforced in 2019. The FATF notes that front companies in cash-intensive sectors with links to the export sector are a common way to comingle environmental crime proceeds. Market manipulation is the runner-up, but paying above market for the main export makes sense here only as cover for illicit funds, as the price drop after the ban shows. Nothing points to over-invoicing or structured deposits.",
    source: [{ label: "FATF (2021) Money Laundering from Environmental Crime, Box 3.1 – rosewood proceeds laundered through the vanilla sector (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/03.Money-Laundering-from-Environmental-Crime.pdf" }] },

  { id: "OCRM-014", domain: 1, topic: "Waste trafficking: criminal infiltration of a waste-sector company", hy: true, difficulty: "hard",
    q: "Mercato Bank's monitoring flags Ecometal Srl, a company licensed to process metal waste. Two new owners recently bought its shares for well below market value; neither has any experience in the heavily regulated waste sector, and no business is carried on at the company's registered address. The account receives transfers described as 'advance payment of invoices' from other waste companies, some of which were previously investigated for illegal waste disposal and tax crimes. Most outgoing funds are cash withdrawals and transfers to foreign companies. The previous shareholders were investigated by prosecutors five years ago, and the company recently changed its auditor. What is the MOST likely explanation?",
    options: [
      "A distressed business sold cheaply to new investors who plan to restructure it before reselling it",
      "VAT carousel fraud, using fictitious cross-border sales of scrap metal between linked traders",
      "Tax-efficient restructuring, using foreign group companies to process the waste at a lower cost",
      "Organised crime using a front company in the waste sector to traffic waste and launder proceeds"
    ],
    answer: [3],
    explanation: "This matches an Italian case in the FATF's 2021 environmental crime report. An STR on a metals and waste disposal company with no adequate structure or real activity, bought below market value by new shareholders with little knowledge of the regulated sector, showed 'advance payment of invoices' from companies investigated for illegal waste disposal and Mafia laundering, followed by cash withdrawals and transfers abroad. Annex A lists these same indicators. VAT carousel fraud is the runner-up, but there are no circular cross-border sales; the features point to infiltration of the waste sector. A genuine turnaround or tax restructuring would not explain the counterparties' history, the empty address or the cash.",
    source: [{ label: "FATF (2021) Money Laundering from Environmental Crime, Box 3.2 and Annex A – waste sector indicators (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/03.Money-Laundering-from-Environmental-Crime.pdf" }] },

  { id: "OCRM-015", domain: 1, topic: "Illegal mining: FATF financial risk indicators", hy: false, difficulty: "medium",
    q: "Mateo Quispe, an analyst at Banco Andino, reviews accounts linked to a remote gold-mining district. Which observations does the FATF's 2021 report on money laundering from environmental crime list as risk indicators of illegal mining or logging? (Choose two.)",
    options: [
      "A licensed mining cooperative pays its miners by bank transfer and files monthly production reports",
      "A company without a mining licence makes growing payments to firms that lease and sell mining equipment",
      "A refinery buys gold only from licensed mines and keeps full chain-of-custody records for each lot",
      "A newly created company registers large gold exports during a very short period of operations",
      "A petrol station in the district deposits card receipts that match its reported fuel sales"
    ],
    answer: [1, 3],
    explanation: "Annex A of the FATF's 2021 report lists, among other indicators, more transactions between entities not registered in the mining or logging sector (non-licence holders) and equipment leasing or sales companies, and recently created companies that register significant gold exports over a short period of operations. It also flags large cash transfers from businesses such as petrol stations to mining areas, but card receipts that match fuel sales are normal. Licensed operators that pay by transfer, report production or keep chain-of-custody records show controls, not risk.",
    source: [{ label: "FATF (2021) Money Laundering from Environmental Crime, Annex A – mining and logging indicators (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/03.Money-Laundering-from-Environmental-Crime.pdf" }] },

  { id: "OCRM-016", domain: 1, topic: "Wildlife trafficking disguised as antiques: false age claims for ivory", hy: false, difficulty: "medium",
    q: "Heritage Curios LLC, an antiques dealer in a US city, banks with your institution. Over a year it receives wires from buyers in Hong Kong and Vietnam for 'antique carved ivory figurines', each described as more than 100 years old, and it pays several individuals in Kenya and Tanzania described as 'restoration consultants'. The dealer cannot provide provenance or appraisal records for the pieces, and its owner recently bought a holiday home. It also sells mid-century furniture to local customers by card. What is the MOST likely concern?",
    options: [
      "Sale of looted cultural property from conflict zones to finance terrorist groups",
      "Wildlife trafficking, with false age claims used to pass off recent ivory as antiques",
      "Tax evasion through under-reporting of card sales of furniture to local customers",
      "Art market price manipulation through wash trades between related collectors"
    ],
    answer: [1],
    explanation: "FinCEN's 2021 wildlife trafficking threat analysis says that wildlife trafficking may be linked to the antiquities trade, and that illicit actors may make false claims about the age of animal items to avoid trade restrictions, such as those on ivory. Hong Kong, Vietnam, Kenya and Tanzania all appear among the top locations in wildlife trafficking-related SARs, and ivory was the most often cited product. Payments to individuals in East African source countries for vague 'consulting', with no provenance records, fit this pattern. Nothing points to conflict-zone antiquities, related-party trades or under-reported card sales.",
    source: [{ label: "FinCEN (Dec 2021) Financial Threat Analysis: Illicit Finance Threat Involving Wildlife Trafficking – antiquities and false age claims", url: "https://www.fincen.gov/system/files/2021-12/Financial_Threat_Analysis_IWT_FINAL%20508_122021.pdf" }] },

  { id: "OCRM-017", domain: 1, topic: "Wildlife crime in the EU: glass eel trafficking (EU SOCTA 2025)", hy: false, difficulty: "medium",
    q: "Each winter and spring, Baltavia Seafood, a small exporter in an EU port city, pays cash to local fishermen and then receives large wires from companies in Hong Kong and mainland China. Its air waybills describe the cargo as 'live fish fry for aquaculture', shipped in oxygenated bags via a hub outside the EU. The company has six employees, its turnover rises tenfold in those months, and it has no aquaculture customers in the EU. Its manager is also a member of a local rowing club. According to Europol's 2025 EU Serious and Organised Crime Threat Assessment, which trade does this pattern MOST likely reflect?",
    options: [
      "Trafficking of glass eels, a protected species, by EU-based networks working with Asian criminal networks",
      "Illegal fishing of bluefin tuna in the Mediterranean Sea for sale to Asian sushi markets",
      "Smuggling of protected reptiles for the exotic pet trade, advertised on social media platforms",
      "Food fraud involving farmed fish mislabelled as wild-caught and sold to EU retailers"
    ],
    answer: [0],
    explanation: "Europol's 2025 EU SOCTA says the trafficking of glass eels remains one of the largest and most lucrative illegal trades in protected species, with illegal profits estimated at up to EUR 3 billion in peak years. For trafficking through the EU to Asia, EU-based networks work closely with Asian criminal networks, especially in glass eels. Live juvenile fish paid for by Asian buyers, described vaguely and routed through a non-EU hub, fit this. The SOCTA also mentions illegal bluefin tuna fishing, but tuna is not shipped as live fry in oxygenated bags. Nothing suggests reptiles or mislabelled retail fish; the rowing club is noise.",
    source: [{ label: "Europol (2025) EU SOCTA – The changing DNA of serious and organised crime: wildlife crime and glass eels", url: "https://www.europol.europa.eu/cms/sites/default/files/documents/EU-SOCTA-2025.pdf" }] },

  { id: "OCRM-018", domain: 1, topic: "Counterfeit goods: network-owned courier companies (EU SOCTA 2025)", hy: false, difficulty: "medium",
    q: "An online shop sells 'luxury' handbags and watches through a website and a dozen social media profiles, at about a tenth of normal retail prices. Its bank, Aegean Commerce Bank, sees about EUR 18 million in card and cash-on-delivery receipts over two years. The receipts come in through two courier companies owned by the same people as the shop, and money moves back and forth between the shop and the couriers many times a month. The shop has no contracts with any of the brands it sells. Its website is hosted abroad, and it pays a marketing agency for influencer posts. What role do the courier companies MOST likely play?",
    options: [
      "Independent delivery firms that the shop uses, without their knowledge, to send goods to customers",
      "Network-owned businesses used to move counterfeit goods and launder the proceeds of their sale",
      "Payment facilitators that the shop uses to avoid card scheme fees on its cash-on-delivery sales",
      "Front companies used to bring in foreign investment for the shop's planned expansion abroad"
    ],
    answer: [1],
    explanation: "Europol's 2025 EU SOCTA describes a Greek case in which a network sold counterfeit luxury goods through a website and 13 social media profiles, sent over 364,000 parcels and made more than EUR 18 million, laundered through other companies it owned. The network also owned two courier companies that exchanged goods and money many times to avoid detection. The SOCTA explains that criminal networks often set up and fully control their own legal business structures. Common ownership rules out independent couriers. The back-and-forth flows and the lack of brand contracts point to counterfeiting and laundering, not fee savings or investment.",
    source: [{ label: "Europol (2025) EU SOCTA – criminal exploitation of legal business structures: counterfeiting network owns courier companies", url: "https://www.europol.europa.eu/cms/sites/default/files/documents/EU-SOCTA-2025.pdf" }] },

  { id: "OCRM-019", domain: 1, topic: "Cigarette excise fraud: duty-suspended movements and illicit factories", hy: false, difficulty: "hard",
    q: "Branislav Transport, a haulier in an EU border region, banks with Danubia Bank. Its documents show regular movements of tobacco products under excise duty suspension to a bonded warehouse in another Member State, but the warehouse operator says it never received them. The haulier also pays rent on a large industrial unit near the border with very high electricity use, and it makes monthly cash payments to two men described as 'machine technicians'. Other payments go to a printer of cigarette packaging. The owner recently leased a new fleet of trucks. What is the MOST likely activity?",
    options: [
      "VAT carousel fraud using fictitious sales of tobacco between linked traders in different Member States",
      "Smuggling of Russian-origin oil products to evade EU sanctions, using false transport documents",
      "Legitimate contract manufacturing of cigarettes for a foreign brand owner, paid in cash to avoid fees",
      "Excise fraud involving illicit cigarette production and the diversion of duty-suspended tobacco movements"
    ],
    answer: [3],
    explanation: "Europol's 2025 EU SOCTA says excise fraud stands out for tobacco products. Excisable goods are smuggled using excise duty suspension schemes, abusing the Excise Movement and Control System (EMCS). Illicit tobacco is made in large facilities, often in border regions, and skilled technicians set up and maintain the machinery. Duty-suspended movements that never arrive, a high-energy industrial unit near the border, cash-paid technicians and packaging printing fit this. VAT carousel fraud is the runner-up, but there is no chain of linked buyers and sellers, and a lawful contract manufacturer would not need diverted movements or cash payments. The SOCTA mentions sanctions evasion for Russian goods, but nothing here involves oil.",
    source: [{ label: "Europol (2025) EU SOCTA – excise fraud: tobacco, duty suspension and EMCS, illicit factories and technicians", url: "https://www.europol.europa.eu/cms/sites/default/files/documents/EU-SOCTA-2025.pdf" }] },

  { id: "OCRM-020", domain: 1, topic: "Extortion victims: indicators in FINTRAC's 2026 Special Bulletin", hy: false, difficulty: "hard",
    q: "Gurdeep Malhi, who has owned a trucking company in Surrey, British Columbia, for 15 years, visits his branch at Fraser Credit Union. He wants to cash in CAD 180,000 of long-term investments and send three wires to new payees he cannot describe. He is visibly nervous and takes phone calls during the meeting, apparently receiving instructions. Two weeks earlier, local news reported shots fired at businesses owned by members of the South Asian community nearby. He has never wired money abroad before, although his daughter studies in the UK. According to FINTRAC's 2026 Special Bulletin, which concern is MOST consistent with this situation?",
    options: [
      "An investment scam in which a fake adviser persuades him to move his savings to a fraudulent platform",
      "Tax evasion, by moving business profits to accounts abroad ahead of an expected tax audit",
      "Extortion, with a local business owner paying demands under threat after violence in his community",
      "Funding his daughter's studies abroad, with his nervousness caused by being unfamiliar with wires"
    ],
    answer: [2],
    explanation: "FINTRAC's Special Bulletin FINTRAC-2026-SB002 describes extortion of South Asian diaspora communities, in which victims are often small and medium-sized business owners in sectors such as transportation and demands are backed by shootings and arson. It lists victim indicators: a local business owner seeking a large cash withdrawal or wire that does not fit past activity, who seems nervous or distressed and appears to be receiving directions or coaching while liquidating long-term investments or sending large or multiple wires to new counterparties. An investment scam is the runner-up because scam victims can also be coached, but the threats, recent violence against similar businesses and the victim profile point to extortion. The daughter's studies do not explain payees he cannot describe.",
    source: [{ label: "FINTRAC Special Bulletin FINTRAC-2026-SB002 (Apr 2026) – money laundering associated with extortion of Canada's South Asian diaspora", url: "https://fintrac-canafe.canada.ca/intel/bulletins/csad-dsac-eng" }] },

  { id: "OCRM-021", domain: 3, topic: "Canada: property of a listed terrorist entity linked to extortion (LPEP report and STR)", hy: true, difficulty: "hard",
    changed: "Canada listed the Bishnoi Gang as a terrorist entity (Sept 2025); FINTRAC Special Bulletin SB002 (Apr 2026)",
    q: "In June 2026, Prairie Maple Bank in Ontario investigates Arjun M., 21, who opened an account as a college student on a study permit. The account receives many email money transfers that it forwards within hours, and it is funded by structured cash deposits at several ATMs. The bank's investigation, including messages Arjun sent through its app, establishes that a CAD 40,000 balance in a second account he controls is held on behalf of the Bishnoi Gang. Arjun has twice tried to transfer that balance to a third party. What must the bank do? (Choose two.)",
    options: [
      "Disclose the property to the RCMP or CSIS and immediately submit a listed person or entity property report to FINTRAC",
      "Wait until a transfer from the second account is completed before reporting, because a report needs a transaction",
      "Submit only a large cash transaction report, because the ATM cash deposits together exceeded CAD 10,000",
      "Submit a suspicious transaction report that includes the term #TAPEX, because transactions were attempted",
      "Close both accounts and pay out the balance by bank draft, then report the closure to FINTRAC within 30 days"
    ],
    answer: [0, 3],
    explanation: "The Government of Canada listed the Bishnoi Gang as a terrorist entity on 29 September 2025. FINTRAC's April 2026 Special Bulletin explains that when a reporting entity has property owned or controlled by or on behalf of a terrorist group, it must disclose it to the RCMP or CSIS under section 83.1 of the Criminal Code and immediately submit a listed person or entity property report to FINTRAC. No transaction is needed for that report. If a transaction was attempted or completed with that property, the entity should also submit an STR, and FINTRAC asks for the term #TAPEX in extortion-related STRs. Waiting for a transaction, filing only a cash report, or paying out the balance would all fail these obligations.",
    source: [
      { label: "FINTRAC Special Bulletin FINTRAC-2026-SB002 (Apr 2026) – Bishnoi Gang listing, #TAPEX, listed person or entity property reports", url: "https://fintrac-canafe.canada.ca/intel/bulletins/csad-dsac-eng" },
      { label: "Public Safety Canada – currently listed terrorist entities (Bishnoi Gang added 29 Sept 2025)", url: "https://www.publicsafety.gc.ca/cnt/ntnl-scrt/cntr-trrrsm/lstd-ntts/crrnt-lstd-ntts-en.aspx" }
    ] },

  { id: "OCRM-022", domain: 1, topic: "Firearms trafficking and straw purchasing as US money laundering predicates (BSCA 2022)", hy: true, difficulty: "hard",
    q: "Investigator Dana Kowalski at Ridgeline Bank in Arizona reviews Marcus Bell, 23, who reports no employment. In four months his account received 38 peer-to-peer payments of USD 800 to USD 2,500 from people he describes as 'friends'. Soon after each batch, he used his debit card at five licensed gun dealers, often buying several identical pistols, and he made cash deposits after trips to Nogales near the Mexican border. A colleague says the bank cannot treat this as possible money laundering because firearms offences are not money laundering predicates under US law. Which statement is accurate?",
    options: [
      "The colleague is right: only unlawful firearms imports are predicates, so the activity can be reported only as structuring",
      "Since the Bipartisan Safer Communities Act of 2022, straw purchasing and firearms trafficking are specified unlawful activities",
      "Firearms trafficking can be a predicate only if the guns are exported to a country under comprehensive US sanctions",
      "Firearms offences are predicates only under RICO, so the bank must wait for a racketeering charge before filing a SAR"
    ],
    answer: [1],
    explanation: "The Bipartisan Safer Communities Act (Pub. L. 117-159, 2022) created 18 U.S.C. 932 (straw purchasing of firearms) and 933 (trafficking in firearms). It added both to the list of specified unlawful activities in 18 U.S.C. 1956(c)(7)(D) and to the RICO predicates in 18 U.S.C. 1961(1). Unlawful importation (922(l)) and section 924(n) were already on the list, so the first option is wrong. No sanctions link is needed, and a SAR depends on the bank's suspicion, not on a charge being brought.",
    source: [{ label: "Bipartisan Safer Communities Act, Pub. L. 117-159 (2022) – new 18 U.S.C. 932-933; amendments to 1956(c)(7)(D) and 1961(1) (GovInfo)", url: "https://www.govinfo.gov/content/pkg/PLAW-117publ159/html/PLAW-117publ159.htm" }] },

  { id: "OCRM-023", domain: 3, topic: "Business-wide risk assessment: environmental crime exposure without domestic natural resources", hy: true, difficulty: "hard",
    q: "Harbourgate Bank is based in a small international financial centre that has no forests, mines or fisheries of its own. Its private bank serves clients from resource-rich countries in Africa and South America, its trade finance desk funds commodity traders, and it banks two dealers in precious metals. While updating the business-wide risk assessment, the head of risk proposes rating environmental crime 'not applicable', because no such crime can take place in the country. The country's national risk assessment does not mention environmental crime. What is the BEST response for the MLRO?",
    options: [
      "Assess environmental crime as a foreign predicate, because its proceeds can be laundered through the bank's clients and products",
      "Accept the 'not applicable' rating, because the national risk assessment does not identify environmental crime as a threat",
      "Rate environmental crime as high for every client from a resource-rich country and apply enhanced due diligence to all of them",
      "Leave environmental crime out until the regulator issues guidance, and record the decision in the risk committee minutes"
    ],
    answer: [0],
    explanation: "The FATF's 2021 report urges every country to consider whether criminals misuse its financial and non-financial sectors to launder environmental crime proceeds, including countries without domestic natural resources. It notes that regional financial centres in all regions seem to play an important role in laundering these proceeds and can act as trade intermediaries for comingling, and it stresses outreach to dealers in precious metals and stones and to company service providers. Fewer than half of the countries it surveyed had covered environmental crime in their risk assessments, so silence in the national assessment is not a reason to ignore it. A blanket high rating for every client from those countries is the runner-up, but it is not risk-based. Waiting for guidance leaves a known exposure unassessed.",
    source: [{ label: "FATF (2021) Money Laundering from Environmental Crime – executive summary and s.4.2 on risk understanding (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/03.Money-Laundering-from-Environmental-Crime.pdf" }] },

  { id: "OCRM-024", domain: 3, topic: "Program enhancement: detecting fentanyl precursor payments", hy: false, difficulty: "hard",
    q: "After reading FinCEN's 2025 fentanyl trend analysis, the BSA officer of Gulf Coast Bancorp, whose customers include many importers that trade with Mexico and China, wants to improve how the bank detects payments for fentanyl precursor chemicals. The bank already screens names against the SDN List and runs a high-risk-country wire rule that produces thousands of alerts a month. The budget allows one major enhancement this year. Based on how filers in FinCEN's analysis identified this activity, which enhancement is MOST likely to improve detection?",
    options: [
      "Matching phone numbers, emails and CAS numbers from KYC files and payment details against chemical sellers' online adverts",
      "Lowering the threshold of the high-risk-country wire rule so that every wire to China or Hong Kong generates an alert",
      "Exiting every customer that imports chemicals from China, since FinCEN names the PRC as the main source of precursors",
      "Adding a rule that alerts on wires over USD 10,000 to chemical companies, since precursor payments are usually large"
    ],
    answer: [0],
    explanation: "FinCEN's 2025 trend analysis says filers were helped by watching PRC chemical companies' online activity, such as e-commerce adverts, product listings and offers to guarantee customs clearance. They linked payments to chemical companies by matching phone numbers and email addresses collected for due diligence with contact details in those adverts, and they noticed CAS numbers of precursors in payment instructions and invoices. Lowering the wire threshold is the runner-up, but it would add noise to a rule that already overwhelms the team. Exiting all such customers is de-risking, not a risk-based control. A USD 10,000 floor would miss the low-dollar payments that FinCEN's 2024 advisory highlights.",
    source: [
      { label: "FinCEN Financial Trend Analysis (Apr 2025) – how filers identified precursor payments (contact matching, adverts, CAS numbers)", url: "https://www.fincen.gov/system/files/shared/FinCEN-FTA-Fentanyl.pdf" },
      { label: "FinCEN Supplemental Advisory FIN-2024-A002 (June 2024) – low-dollar payments for precursors", url: "https://www.fincen.gov/system/files/advisory/2024-06-20/FinCEN-Supplemental-Advisory-on-Fentanyl-508C.pdf" }
    ] },

  { id: "OCRM-025", domain: 1, topic: "Environmental crime: why comingling early in the supply chain hides proceeds", hy: true, difficulty: "medium",
    q: "According to the FATF's 2021 report on money laundering from environmental crime, why are the proceeds of illegal logging, illegal mining and waste trafficking often hard for banks to detect later in the value chain?",
    options: [
      "Most of the proceeds are paid in virtual assets, which banks cannot trace without blockchain analytics",
      "Environmental crimes are not designated categories of offences, so banks are not required to report them",
      "The proceeds rarely enter the financial system because the products are sold for cash in local markets",
      "Criminals mix illegal goods with legal ones early in the supply chain, so later payments look like normal trade"
    ],
    answer: [3],
    explanation: "The FATF found that criminals often comingle illegal logs, minerals and waste with legal products early in resource supply chains. This makes it hard to tell legitimate from illicit financial flows later in the value chain, and often requires AML authorities to work with environmental investigators. Countries submitted no cases involving virtual assets. Environmental crime is a FATF designated category of offences, and the report stresses the role of trade-based fraud, front and shell companies and international financial centres, so the proceeds do reach the financial system.",
    source: [{ label: "FATF (2021) Money Laundering from Environmental Crime – executive summary and chapter 2-3 highlights (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/03.Money-Laundering-from-Environmental-Crime.pdf" }] }
]);
