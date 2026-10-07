// Batch 7 – retail banking and payments: practical cases (RETL-001 to RETL-025).
// Cash, ATMs, cheques and monetary instruments, prepaid/payroll cards, P2P, MSBs and agents,
// remittance corridors, small-business third-party flows, students, seniors, safe deposit boxes,
// branch observations and CTR exemptions in practice. Sources opened October 2026.
window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  { id: "RETL-001", domain: 1, topic: "Independent ATMs: replenishing with illicit cash", hy: true, difficulty: "hard",
    q: "QuickVault ATM LLC, a customer of Ridgeline Bank, owns 38 independent ATMs in bars and convenience stores. Its account receives daily ACH settlement credits from its processor, now about USD 210,000 a month and up 70% in a year. The bank sees almost no cash withdrawals from the account to load the machines. The owner says he refills them with 'cash takings' from his two nightclubs and a partner's car wash, which bank elsewhere. He adds that his ATMs only dispense cash and give balances, so he is not a money services business. The ATMs carry a well-known network logo, and the processor's contract is in the file. What is the MOST significant money laundering concern?",
    options: [
      "The company is operating as an unregistered money transmitter by dispensing cash to the public",
      "Card skimming at bar locations, which explains the fast rise in settlement volumes",
      "Illicit cash loaded into the ATMs comes back as settlement ACH credits that look like legitimate income",
      "Structuring, because each ATM dispenses less than USD 10,000 a day"
    ],
    answer: [2],
    explanation: "The FFIEC manual section on independent ATM owners or operators says the source of replenishment cash is a key risk factor. Operators that load ATMs only with cash withdrawn from their bank account are lower risk because the bank can compare cash usage with EFT settlements, while cash from other or unknown sources is harder to verify. Illicit cash dispensed to ATM users returns to the operator as 'clean' ACH settlement credits. The runner-up is wrong: under FIN-2007-G006 an operator offering only withdrawals and balance inquiries is not an MSB, so the owner's point is correct but irrelevant to the laundering risk.",
    source: [{ label: "FFIEC BSA/AML Examination Manual – Independent ATM Owners or Operators (Nov 2021, FDIC copy)", url: "https://www.fdic.gov/sites/default/files/2024-03/fil21076d.pdf" }] },

  { id: "RETL-002", domain: 1, topic: "Students as CMLN money mules: identity and account red flags (FIN-2025-A003)", hy: false, difficulty: "hard", changed: "FinCEN advisory on Chinese money laundering networks, FIN-2025-A003, Aug 2025",
    q: "Lin, who says she is a graduate student, opens a checking account at Bayview Bank's university branch. She presents a Chinese passport issued in 2017 and a US student visa issued in 2025, and the teller notices that both carry exactly the same photograph. Over the next three months the account receives cash deposits at branches in two states and wires from unrelated individuals marked 'tuition' and 'living expenses', far above what she declared. She sends most of the money on by P2P transfers to people she cannot describe and buys cashier's checks with cash, which are deposited at another bank. Her tuition is in fact paid by a university scholarship. What does this MOST likely indicate?",
    options: [
      "A student money mule for a Chinese money laundering network, possibly opened with a counterfeit passport",
      "Ordinary family support from abroad, which students often receive in irregular amounts",
      "A Black Market Peso Exchange broker settling Colombian importers' debts",
      "A ghost-student ring that enrols fake students to collect financial aid refunds"
    ],
    answer: [0],
    explanation: "FinCEN's August 2025 advisory on Chinese money laundering networks (CMLNs) says they increasingly recruit students on visas as money mules. Its red flags include a passport and visa with the same photograph despite being issued years apart, a 'student' receiving cash or wires marked 'tuition' or 'living expenses' that do not fit her profile and then sending the funds by P2P to unrelated people, and cash funding cashier's checks deposited at another institution. Family support would not arrive as cash in two states from strangers, and here the tuition is already covered. Ghost-student fraud involves aid refunds, not cash and third-party wires.",
    source: [{ label: "FinCEN Advisory FIN-2025-A003 – Chinese money laundering networks (Aug 2025)", url: "https://www.fincen.gov/system/files/2025-08/FinCEN-Advisory-CMLN-508.pdf" }] },

  { id: "RETL-003", domain: 1, topic: "Money orders kept under the $3,000 recordkeeping threshold", hy: true, difficulty: "medium",
    q: "Greenleaf Landscaping LLC normally receives checks and ACH payments from homeowners' associations. Over six weeks it deposits 46 money orders worth USD 500 to 2,950 each, none for USD 3,000 or more. They were bought at nine different convenience stores and post offices, several are in sequential batches, and the payee lines are all in the same handwriting. The owner says some clients 'prefer to pay that way'. The company's revenue for the period is otherwise normal for the season. Which typology is MOST likely?",
    options: [
      "Check kiting between Greenleaf's accounts at two banks",
      "Counterfeit money orders deposited to defraud the bank",
      "Seasonal cash-paying clients settling invoices in the way they prefer",
      "Cash converted into money orders below the recordkeeping threshold and placed through the business account"
    ],
    answer: [3],
    explanation: "Under 31 CFR 1010.415, a seller of money orders or cashier's checks must record the purchaser's identity for cash purchases of USD 3,000 to 10,000. The FFIEC manual warns that criminals buy monetary instruments with currency in smaller increments to avoid identification, then deposit them at other banks. Instruments just below USD 3,000, bought at many locations in batches and filled in by one hand, point to structured placement of cash. Counterfeit items would usually be returned unpaid, and kiting involves checks drawn on the customer's own accounts.",
    source: [
      { label: "FFIEC BSA/AML Manual – Purchase and Sale of Monetary Instruments Recordkeeping (June 2021, FDIC copy)", url: "https://www.fdic.gov/news/financial-institution-letters/2021/fil21045a.pdf" },
      { label: "31 CFR 1010.415 – purchases of monetary instruments with currency", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-D/section-1010.415" }
    ] },

  { id: "RETL-004", domain: 1, topic: "Small business accounts used by money couriers: the travel footprint", hy: false, difficulty: "hard",
    q: "Jade Garden Nail Spa LLC, a three-chair salon in Houston with good online reviews and a valid state licence, has banked with Coastline Bank for two years. In the last quarter its account received cash deposits of USD 8,000 to 9,500 at branches in six states. The owner's business debit card shows multi-leg flights between Chicago, Atlanta, New York and Los Angeles within single weeks, plus hotels, tolls and parking in each city. She buys cashier's checks with cash payable to unrelated companies and receives many P2P payments from people who are not clients. Which feature MOST strongly suggests the owner is working as a money courier for a laundering network rather than running a busy salon?",
    options: [
      "The high share of cash in the salon's revenue, which is unusual for a personal-care business",
      "Travel spending that fits cash pickups across many cities, matched by out-of-state cash deposits",
      "The salon's state licence and positive reviews, which may have been bought to build a cover story",
      "The use of a business debit card for travel, which mixes business and personal expenses"
    ],
    answer: [1],
    explanation: "FinCEN's 2025 fentanyl trend analysis describes Chinese money laundering organizations using couriers who make large cash deposits into accounts of apparently legitimate businesses such as restaurants and salons and buy cashier's checks with cash to move funds. One filer identified couriers from travel spending that fit money pickups across the country: multi-leg trips, airlines, hotels, tolls and parking. Cash revenue is normal for a salon, so it is a weak indicator alone. Mixing personal and business spending is poor practice, not evidence of courier activity.",
    source: [{ label: "FinCEN Financial Trend Analysis – Fentanyl-related illicit finance: 2024 threat pattern (2025)", url: "https://www.fincen.gov/sites/default/files/shared/FinCEN-FTA-Fentanyl.pdf" }] },

  { id: "RETL-005", domain: 1, topic: "Labor broker shells: off-the-books payroll (FIN-2026-A002)", hy: true, difficulty: "hard", changed: "FinCEN joint advisory on non-work authorized populations, FIN-2026-A002, June 2026",
    q: "RGM Framing LLC was formed five months ago. Its owner opened the account with a foreign passport and an ITIN, described himself as a 'self-employed laborer' and gave the address of a commercial mail receiving agency. The account now receives about USD 300,000 a month in checks from six construction contractors for 'framing' and 'drywall'. Several times a week the owner, accompanied by another man, withdraws USD 9,000 to 9,800 in cash, and the account also issues dozens of checks under USD 1,000 to individuals who cash them. There are no payroll tax payments, but the company holds a workers' compensation policy covering three employees. What scheme does this MOST likely show?",
    options: [
      "A legitimate subcontractor paying day laborers in cash, as is common in construction",
      "A funnel account moving drug proceeds to cash withdrawals near the southwest border",
      "A labor broker's shell company running off-the-books payroll for complicit employers, evading payroll taxes",
      "Check kiting, using the float on contractors' checks before they clear"
    ],
    answer: [2],
    explanation: "FinCEN's June 2026 joint advisory describes labor brokers who set up shell companies, often unregistered MSBs, that receive checks from complicit employers. They cash them in structured amounts or pay workers through checks, cash couriers or P2P, keeping a 4-10% fee and withholding no payroll taxes. Its red flags include an ITIN or foreign passport with a 'self-employed' description, a commercial mail receiving agency address, structured cash withdrawals with another person, many checks under USD 1,000 and a workers' compensation policy far too small for the activity. A legitimate subcontractor would make payroll tax deposits. A funnel account has deposits spread across distant locations, not contractors' checks.",
    source: [{ label: "FinCEN, FDIC, OCC, NCUA joint advisory FIN-2026-A002 (5 June 2026)", url: "https://www.fincen.gov/system/files/2026-06/FinCEN-Advisory-Non-Work-Authorized-Populations.pdf" }] },

  { id: "RETL-006", domain: 1, topic: "Complicit employers: red flags in a large company's account (FIN-2026-A002)", hy: false, difficulty: "hard", changed: "FinCEN joint advisory on non-work authorized populations, FIN-2026-A002, June 2026",
    q: "Grand Vista Resorts, a 900-room hotel group, has banked with Lakeside Bank for 12 years. Its revenue peaks every summer. It pays its linen supplier by ACH on 30-day terms and runs payroll for its 40 salaried managers through a national payroll processor. A review finds that its federal payroll tax deposits are far below what its workforce would need. Each week it also writes large checks marked 'housekeeping labor' to three LLCs formed last year that have no websites. Which findings are red flags of a complicit employer under FinCEN's June 2026 advisory? (Choose two.)",
    options: [
      "Payroll tax deposits far below what its operations and workforce would need",
      "ACH payments to the linen supplier on 30-day terms",
      "Use of a national payroll processor for its salaried managers",
      "Recurring large checks to recently formed companies with no online presence",
      "A seasonal revenue pattern that peaks every summer"
    ],
    answer: [0, 3],
    explanation: "For large companies in agriculture, construction, domestic service, hospitality or staffing, the advisory's red flags include payroll tax deposits significantly lower than expected for the workforce and a significant, repeated flow of checks to one or a few recently established companies with little or no online presence. Together they suggest the real workforce is paid off the books through labor broker shells. Paying suppliers on normal terms, using a payroll processor for a small salaried group and seasonal revenue are ordinary for a hotel group.",
    source: [{ label: "FinCEN, FDIC, OCC, NCUA joint advisory FIN-2026-A002 (5 June 2026) – red flags for large companies", url: "https://www.fincen.gov/system/files/2026-06/FinCEN-Advisory-Non-Work-Authorized-Populations.pdf" }] },

  { id: "RETL-007", domain: 1, topic: "Money remitters: customer risk factors at the counter (EBA)", hy: true, difficulty: "hard",
    q: "Rosa, 74, has used Velo Transfer, an EU payment institution, for six years to send money to her sister. For the past two months she has come to the same agent every Friday and paid EUR 950 to EUR 990 in cash to send to a different person in another country. She reads the payee's details from a handwritten note, and a younger man waits outside and signals to her through the window. When the agent asks who the payee is, she cannot say and does not know what the money is for. Under the EBA ML/TF Risk Factors Guidelines for money remitters, which factors increase the risk? (Choose three.)",
    options: [
      "She has used the remitter for six years without any concerns",
      "She reads the payee details from a note while a man outside appears to direct her",
      "She knows little about the payee or the purpose of the transfers",
      "Each transfer is low in value, so terrorist financing risk can be discounted",
      "Her transfers always fall just below the EUR 1,000 threshold"
    ],
    answer: [1, 2, 4],
    explanation: "Guideline 11 of the EBA Risk Factors Guidelines lists as higher-risk behaviour a customer who appears to act for someone else (others watch over the customer or are visible outside, or the customer reads instructions from a note), who knows little about the payee, and whose transactions are always just below applicable thresholds, including the EUR 1,000 transfer threshold. A long-standing relationship is a risk-reducing factor, but only where there are no signs of increased risk, which is not the case now. The guidelines also warn that low amounts alone are not enough to discount terrorist financing risk.",
    source: [{ label: "EBA Guidelines on ML/TF risk factors (EBA/GL/2021/02), Guideline 11 – money remitters", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }] },

  { id: "RETL-008", domain: 1, topic: "Credit card overpayments followed by cash advances", hy: false, difficulty: "medium",
    q: "Daniel, a part-time warehouse worker, holds a CAD 5,000 credit card at a Canadian bank. Over four months he pays between CAD 6,000 and 9,500 in cash onto the card at different branches, leaving large credit balances. Within days of each payment he takes cash advances or asks for the credit balance to be refunded by bank draft. He makes few purchases with the card, and his chequing account receives a modest salary. Which typology does this MOST likely show?",
    options: [
      "Using card overpayments to turn cash into bank-issued funds and break the link to its source",
      "Bust-out fraud, in which a cardholder builds a good record and then maxes out the card and defaults",
      "Balance transfer arbitrage to take advantage of a promotional interest rate",
      "Card skimming, with criminals withdrawing cash advances from a cloned card"
    ],
    answer: [0],
    explanation: "FINTRAC's ML/TF indicators for financial entities list a client who frequently overpays a credit card and then requests a cash advance. Cash paid in at several branches comes back as a cash advance or bank draft, which looks like funds from the bank and is harder to trace to its source, all out of line with a part-time income. Bust-out fraud runs the card up to its limit and leaves a debt, the opposite of overpaying. Skimming would show unauthorised use, not cash payments made by the customer himself.",
    source: [{ label: "FINTRAC – ML/TF indicators for financial entities (products and services)", url: "https://fintrac-canafe.canada.ca/guidance-directives/transaction-operation/indicators-indicateurs/fin_mltf-eng" }] },

  { id: "RETL-009", domain: 1, topic: "UK: criminal cash through Post Office counter deposits", hy: true, difficulty: "hard",
    q: "Kestrel Bank's business customer Northgate Mini Mart Ltd declared turnover of about GBP 30,000 a month. In one month it made 61 cash deposits at 14 Post Office branches in London and the West Midlands, many between GBP 15,000 and 19,900 and several on the same day, mostly using paper paying-in slips completed by different people. Within a day or two the money was paid out in small amounts to many personal accounts and to an e-money account. The company's directors have not changed, and its rent and utility bills are paid on time. What does this MOST likely show?",
    options: [
      "Cash recycling by a busy shop that cannot reach its own bank's branch",
      "Refining, in which small notes are swapped for large ones to reduce bulk",
      "Cuckoo smurfing, in which criminal cash replaces a remittance owed to an unwitting beneficiary",
      "Organised placement of criminal cash through the Post Office deposit channel, followed by quick dispersal"
    ],
    answer: [3],
    explanation: "The UK NRA 2025 reports increasing use by organised crime groups of the Post Office's everyday banking facility to deposit criminal cash, with hotspots in London, the West Midlands and Glasgow, and funds then paid on in small amounts to multiple accounts or payment platforms. The FCA notes that criminals abused the GBP 20,000 per-transaction limit with multiple deposits a day, and that paper paying-in slips enabled third-party deposits. Cuckoo smurfing is the runner-up, but it involves an unwitting recipient awaiting a remittance, whereas here the customer's own company immediately disperses the funds.",
    source: [
      { label: "FCA – Cash-based money laundering (Post Office deposits; updated June 2026)", url: "https://www.fca.org.uk/firms/financial-crime/money-laundering-terrorist-financing/cash-based-money-laundering" },
      { label: "HM Treasury/Home Office – UK National Risk Assessment 2025, paras 3.41-3.42", url: "https://assets.publishing.service.gov.uk/media/6877be59760bf6cedaf5bd4f/National_Risk_Assessment_of_Money_Laundering_and_Terrorist_Financing_2025_FINAL.pdf" }
    ] },

  { id: "RETL-010", domain: 1, topic: "Safe deposit boxes: changes in visit patterns", hy: false, difficulty: "medium",
    q: "Victor has rented a safe deposit box at a UK bank's city branch since 2015. Until this year he visited it about twice a year. Since March he has visited every week, always in the last half hour before the vault closes, and each time a cousin who is not a renter comes with him, carries a holdall and seems to decide what goes in and out. Victor pays the annual rental from his own current account by card, lives 40 km from the branch and declined the bank's offer of contents insurance. Which observation is MOST significant for money laundering risk?",
    options: [
      "He pays the rental fee by card from his own current account",
      "The sudden rise in visits at unusual times, with a third party who appears to control the box",
      "He lives 40 km from the branch where the box is held",
      "He declined the bank's offer of contents insurance for the box"
    ],
    answer: [1],
    explanation: "UK safe custody services are covered by the Money Laundering Regulations, and the FCA encourages providers to use visit records to know what is normal and to notice when a box is suddenly visited more often or at unusual hours. Its review also found that providers often failed to identify the beneficial owner, the person for whose benefit the box is held. FINTRAC similarly lists frequent use of a safety deposit box as an indicator. Paying by card from his own account, distance and declining insurance are ordinary customer choices.",
    source: [
      { label: "FCA – Safe custody services and money laundering", url: "https://www.fca.org.uk/firms/financial-crime/money-laundering-terrorist-financing/safe-custody-services" },
      { label: "FCA – Safe custody services firm review findings (ongoing monitoring of visits)", url: "https://www.fca.org.uk/news/firms/safe-custody-services-firm-review-findings" }
    ] },

  { id: "RETL-011", domain: 1, topic: "MSB agent accounts: repatriating proceeds to Mexico through structured transfers", hy: false, difficulty: "hard",
    q: "Fiesta Market, a grocery in Phoenix, banks with Saguaro Bank and is an agent of a large licensed money transmitter. For years its cash deposits peaked in December. This February and March they tripled, mostly in amounts of USD 9,000 to 9,900, and the principal swept the funds as usual. Through a 314(b) request, the principal tells Saguaro that the agent's transfers in those months were to the same few receivers in Mexico and Guatemala, in similar amounts, often minutes apart, under many sender names. The store's owner recently renovated the shop and added a deli counter. What is the MOST likely explanation?",
    options: [
      "Higher legitimate remittances after the new deli counter brought in more customers",
      "Seasonal remittances for a spring holiday in the receiving countries",
      "The agent location is being used to repatriate illicit proceeds through structured cash-funded transfers",
      "The principal's sweep timing creates the appearance of structuring in the agent's account"
    ],
    answer: [2],
    explanation: "FinCEN's 2025 fentanyl trend analysis describes simple repatriation schemes through MSB funds transfers: similar amounts sent within a short time, often minutes apart, to the same counterparties in Mexico, and an MSB agent whose cash deposits funded outbound transfers to Mexico and Guatemala out of line with its usual seasonal pattern. Here the volume shift, structured deposits and clustered transfers point to that typology. A deli counter or sweep timing cannot explain identical receivers and minute-apart transfers. The seasonal explanation fails because the agent's historical peak is December.",
    source: [{ label: "FinCEN Financial Trend Analysis – Fentanyl-related illicit finance (2025): MSB funds transfers to Mexico", url: "https://www.fincen.gov/sites/default/files/shared/FinCEN-FTA-Fentanyl.pdf" }] },

  { id: "RETL-012", domain: 1, topic: "Retail banking: dormant account reactivated for a high-value banknote payout (EBA)", hy: false, difficulty: "medium",
    q: "Lukas, 34, has held a current account at an Austrian bank since 2012. It received his salary until 2022 and has been almost dormant since. In two weeks it receives EUR 48,000 in credit transfers from nine private individuals with no clear link to him. He updates his address through the mobile app, then visits a branch and asks to withdraw EUR 45,000 in EUR 200 notes, saying he is buying a used car privately. Under the EBA Risk Factors Guidelines for retail banks, which factor MOST increases the risk?",
    options: [
      "Reactivation after dormancy with third-party credits, followed by a demand for high-value notes without a clear reason",
      "The length of his relationship with the bank, which began in 2012",
      "His use of the mobile app to update his address before the withdrawal",
      "His stated plan to buy a used car privately, which is a lawful purchase"
    ],
    answer: [0],
    explanation: "Guideline 9 of the EBA Risk Factors Guidelines lists unusual customer behaviour as increasing risk, including demanding payout of high-value banknotes without apparent reason and increasing activity after a period of dormancy, and transactions out of line with the customer's profile. A long-standing relationship reduces risk only where past activity gave no concern and the new activity fits the profile. Updating an address in the app is routine, and the stated purpose does not explain why nine unrelated people paid him.",
    source: [{ label: "EBA Guidelines on ML/TF risk factors (EBA/GL/2021/02), Guideline 9 – retail banks", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }] },

  { id: "RETL-013", domain: 1, topic: "Elder scams: the tech support 'over-refund' scheme", hy: true, difficulty: "hard",
    q: "Harold, 78, comes to his Maple Bank branch to wire USD 3,600 to an individual in another state. Last year he paid USD 399 for a computer 'protection plan'. On Monday a caller said the company was closing and would refund him. Harold let the caller connect remotely to his computer, and his online banking then appeared to show a refund of USD 3,999 instead of USD 399. The caller said the extra money was sent by mistake and must be returned today, by wire or gift cards, or the caller would lose his job. Harold has no grandchildren, has never used dating sites and has not been contacted by any government agency. Which scheme is this MOST likely?",
    options: [
      "A grandparent scam, in which a fake relative or lawyer demands urgent bail money",
      "A government imposter scam, in which a caller posing as an agency official demands payment",
      "A romance scam, in which an online partner asks for money to cover a sudden hardship",
      "A tech and customer support refund scam that tricks the victim into returning a fake 'over-refund'"
    ],
    answer: [3],
    explanation: "FinCEN's elder financial exploitation advisory describes tech and customer support scams in which callers posing as support staff obtain remote access and later offer a refund. They then claim too much was refunded and press the victim to pay back the 'over-refund'. Its red flags also include large gift card purchases and payments with descriptors such as 'tech support services', and it asks banks to record behavioral red flags and the staff who saw them in any SAR. The other scams involve a different pretext: a relative in trouble, an official demand or an online romantic partner.",
    source: [{ label: "FinCEN Advisory FIN-2022-A002 – Elder financial exploitation (June 2022)", url: "https://www.fincen.gov/sites/default/files/advisory/2022-06-15/FinCEN%20Advisory%20Elder%20Financial%20Exploitation%20FINAL%20508.pdf" }] },

  { id: "RETL-014", domain: 1, topic: "Money remitters: which agent presents the highest risk (EBA)", hy: false, difficulty: "medium",
    q: "Velo Transfer, an EU payment institution, is ranking four of its agents for on-site visits. Agent A is a pharmacy with low, steady volumes that send mostly small amounts to one diaspora corridor. Agent B is a travel agency that also acts for two other remitters, carries out most of its transfers after 21:00, and has many transfers of EUR 950 to 999. Agent C is a branch of a regulated bank acting as agent. Agent D is a supermarket with high volumes in line with similar supermarket agents in the region. Under the EBA Risk Factors Guidelines, which agent presents the HIGHEST risk?",
    options: [
      "Agent A, because a single diaspora corridor concentrates risk",
      "Agent B, because of multiple principals, out-of-hours activity and transfers just under the threshold",
      "Agent C, because banks acting as agents fall outside the remitter's control",
      "Agent D, because high volumes always indicate a higher risk of laundering"
    ],
    answer: [1],
    explanation: "Guideline 11 lists as higher-risk agents those that represent more than one principal, show unusual turnover compared with similar agents, have many transactions just under the CDD threshold, or do business outside normal hours. Agents that are themselves regulated financial institutions are a risk-reducing factor. High volumes in line with comparable agents are not unusual, and a steady single corridor matches the diaspora customer base.",
    source: [{ label: "EBA Guidelines on ML/TF risk factors (EBA/GL/2021/02), Guideline 11.9-11.10 – agents", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }] },

  { id: "RETL-015", domain: 1, topic: "UK cash-intensive fronts: barbershops", hy: false, difficulty: "hard", changed: "UK National Risk Assessment 2025 (July 2025)",
    q: "Fade Lane Barbers Ltd opened eight months ago with three chairs. Its account receives about GBP 22,000 a week in cash, at the branch and at Post Offices, but almost no card income, although most local barbers take cards. Its sole director has opened four more barbershops in a year, each with the same pattern. The company pays a 'wholesale' supplier of tobacco products, though it sells none in its shops. It files accounts on time and its premises have planning permission. What is the MOST likely explanation?",
    options: [
      "Under-declaring card takings to reduce tax, with cash preferred by loyal clients",
      "Cuckoo smurfing, with cash deposited into the account by people unknown to the director",
      "A cash-intensive front commingling criminal cash, such as illicit tobacco or drug proceeds, with takings",
      "Trade-based laundering through over-invoiced tobacco imports"
    ],
    answer: [2],
    explanation: "The UK NRA 2025 lists barbershops, car washes and nail salons as prominent cash-intensive businesses used to launder criminal cash, with SARs on barbershops rising each year. In spring 2025 Operation Machinize visited 380 such premises, seizing cash, illicit tobacco and illegal vapes. Cash far above capacity with almost no card income, rapid replication across shops and payments for goods the shop does not sell point to a front. Tax evasion is the runner-up, but it would reduce declared income rather than inflate it with cash.",
    source: [{ label: "UK National Risk Assessment 2025, para 3.40 and Box 3.D (Operation Machinize)", url: "https://assets.publishing.service.gov.uk/media/6877be59760bf6cedaf5bd4f/National_Risk_Assessment_of_Money_Laundering_and_Terrorist_Financing_2025_FINAL.pdf" }] },

  { id: "RETL-016", domain: 1, topic: "MSB customers exporting sterling banknotes", hy: false, difficulty: "hard", changed: "UK National Risk Assessment 2025 (July 2025)",
    q: "Harbour FX Ltd, a bureau de change registered with HMRC, banks with Marlow Bank. It buys sterling banknotes from other MSBs, paying through an intermediary e-money institution, and exports them by air freight to an exchange house in a country where sterling is not widely used and that has no large UK diaspora or tourist trade. Volumes have tripled in a year. Its own retail counter business is stable. Its HMRC registration and fit-and-proper approvals are in order. What is the MOST significant concern?",
    options: [
      "Exports of sterling cash to a destination with no obvious market need, which can move and commingle criminal cash",
      "The exchange margin, which may be higher than other bureaux charge",
      "The use of air freight rather than a cash-in-transit company, which breaches UK rules",
      "Its HMRC registration, which shows that the supervisor already manages the risk"
    ],
    answer: [0],
    explanation: "The UK NRA 2025 says HMRC is working to understand why some MSBs export significant volumes of sterling to jurisdictions with no obvious economic or market need, since cash exports can disguise audit trails and commingle criminal and legitimate cash. It also notes that complex relationships between MSBs through intermediary EMIs and PSPs can disguise audit trails. Registration does not remove the bank's own duty to monitor. Air freight is a common legal channel and is not itself the risk.",
    source: [{ label: "UK National Risk Assessment 2025, paras 5.118-5.120 (MSBs; exporting of physical cash)", url: "https://assets.publishing.service.gov.uk/media/6877be59760bf6cedaf5bd4f/National_Risk_Assessment_of_Money_Laundering_and_Terrorist_Financing_2025_FINAL.pdf" }] },

  { id: "RETL-017", domain: 1, topic: "Students: discounted tuition fee schemes", hy: false, difficulty: "hard", changed: "UK National Risk Assessment 2025 (July 2025)",
    q: "Jun, an international postgraduate student at a UK university, banks with Elmstead Bank. His GBP 28,000 tuition fees were paid in three payments by a letting agency, a restaurant and an electronics trader, none of them linked to him. Jun explains that an 'education agent' offered him a 12% discount if he paid the agent in his home currency at home. Since then his account has received several cash deposits at Post Offices, which he forwards to people he does not know. His scholarship stipend arrives on time each month. What does this MOST likely show?",
    options: [
      "A scholarship arrangement in which local sponsor companies pay fees on the student's behalf",
      "Student loan fraud using a false enrolment to obtain government funding",
      "Visa fraud, with fees paid to create a false record of enrolment",
      "Underground banking: a third party settles the fees with criminal cash in the UK in exchange for payment abroad"
    ],
    answer: [3],
    explanation: "The UK NRA 2025 warns that students, particularly international students, are used as money mules and cash couriers, including through arrangements with a third party to settle tuition fees at a reduced rate, where the third party may use criminal funds. It also notes that Chinese underground banking networks need UK cash, partly to serve students. Fees paid by unrelated businesses, a discount for paying the agent abroad and the later cash deposits fit that model. Sponsor companies would be known to the university and would not pay through unrelated traders.",
    source: [{ label: "UK National Risk Assessment 2025, paras 3.57-3.58 and 6.11-6.12", url: "https://assets.publishing.service.gov.uk/media/6877be59760bf6cedaf5bd4f/National_Risk_Assessment_of_Money_Laundering_and_Terrorist_Financing_2025_FINAL.pdf" }] },

  { id: "RETL-018", domain: 3, topic: "Monetary instrument records: indirect currency purchases", hy: true, difficulty: "hard",
    q: "Maria has had a checking account at Redwood Bank for ten years. At 11:00 she deposits USD 4,600 in cash into it. At 11:05, at the same teller window, she asks for a USD 4,500 cashier's check payable to a private car seller, debited from the account. The teller says no monetary instrument record is needed because the check was paid from her account, not with cash. She has no other transactions that day. What is the bank's obligation?",
    options: [
      "File a CTR, because the cash deposit and the cashier's check together exceed USD 9,000",
      "Keep the 1010.415 purchase record, because currency deposited to buy the instrument is an indirect cash purchase",
      "No record is needed, because only instruments handed over against cash at the counter are covered",
      "No record is needed, because the purchaser is a deposit accountholder whose identity is already verified"
    ],
    answer: [1],
    explanation: "The FFIEC manual states that when a deposit accountholder first deposits currency in order to buy monetary instruments of USD 3,000 to 10,000, FinCEN guidance treats the transaction as still subject to 31 CFR 1010.415, whether it follows bank policy or the customer's request. The runner-up wrongly looks only at the debit to the account. Being an accountholder changes what must be recorded (name, date, instrument type, serial number and amount, with identity verified from bank records), not whether a record is needed. No CTR is due, because cash in was USD 4,600.",
    source: [
      { label: "FFIEC BSA/AML Manual – Purchase and Sale of Monetary Instruments Recordkeeping (indirect currency purchases)", url: "https://www.fdic.gov/news/financial-institution-letters/2021/fil21045a.pdf" },
      { label: "31 CFR 1010.415", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-D/section-1010.415" }
    ] },

  { id: "RETL-019", domain: 3, topic: "CTR exemptions: agency deposits and the owner's personal account", hy: true, difficulty: "hard",
    q: "Brightwater Grocers Inc. is designated as a Phase II (non-listed business) exempt person at Union Valley Bank. On Monday its manager deposits USD 18,000 of store takings into the store's account. In a separate deposit he pays in USD 12,500 in cash that the store collected from vending machines owned by Pinewood Vending LLC, an unrelated company, which the store forwards to Pinewood each week. That afternoon Brightwater's owner deposits USD 11,000 in cash into his personal savings account. Which reports must the bank file?",
    options: [
      "None, because Brightwater's exemption covers all cash it and its owner bring to the bank",
      "One CTR for the store's combined deposits of USD 30,500, because the exemption lapses when another firm's money is mixed in",
      "CTRs for the USD 12,500 deposited on Pinewood's behalf and for the owner's USD 11,000; the store's own takings stay exempt",
      "Only a CTR for the owner's USD 11,000, because all deposits into the store's account are exempt"
    ],
    answer: [2],
    explanation: "Under 31 CFR 1020.315(f), a cash transaction carried out by an exempt person as agent for another person who beneficially owns the funds is not covered by the exemption, so the USD 12,500 belonging to Pinewood is reportable. The exemption for a non-listed business also applies only to transactions through its exemptible accounts (1020.315(b)(6)), so the owner's personal deposit of more than USD 10,000 needs a CTR. The runner-up is wrong because the store's own takings remain exempt; the exemption is not lost by one agency deposit.",
    source: [{ label: "31 CFR 1020.315(b)(6), (f) – exempt persons; limitation for agency transactions", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.315" }] },

  { id: "RETL-020", domain: 3, topic: "CTR exemptions: delisting, safe harbor and affiliated banks", hy: false, difficulty: "hard",
    q: "Harbor Bancorp owns two US banks. Both serve Coastal Foods Inc., whose shares were listed on the New York Stock Exchange until a private equity buyout delisted them last week, and Coastal Foods' US subsidiary. Harbor's BSA officer is reviewing its exemption practices. Which statements are correct? (Choose two.)",
    options: [
      "Coastal Foods' subsidiary stays exempt as long as the parent owns at least 40% of its shares",
      "Coastal Foods' exempt status as a listed company ended automatically when it was delisted, without any Treasury action",
      "The banks may keep treating Coastal Foods as exempt until its next annual review, even though they know it was delisted",
      "A Coastal Foods director's personal money market account is covered by the company's exemption",
      "The holding company may file one designation for both banks, as long as it lists each bank subsidiary"
    ],
    answer: [1, 4],
    explanation: "31 CFR 1020.315(i) says a listed entity's exempt status ceases once it is no longer listed, without Treasury action, and a subsidiary's status ceases once the listed parent no longer owns at least 51%. Under (e)(6), a parent bank holding company or one of its banks may designate on behalf of all its bank subsidiaries if the designation lists each of them. The safe harbor in (g)(2) to keep treating a customer as exempt until the next annual review applies only absent specific knowledge that it no longer qualifies. The exemption covers the exempt person's own transactions, and money market accounts not held in connection with a commercial enterprise are not exemptible accounts, so a director's personal account is outside it.",
    source: [{ label: "31 CFR 1020.315(e)(6), (e)(9), (g)(2), (i)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.315" }] },

  { id: "RETL-021", domain: 3, topic: "CIP: which retail products create an 'account' (prepaid, payroll and safe deposit)", hy: true, difficulty: "medium",
    q: "Pinecrest Bank is updating its CIP procedures for retail products. Under the CIP rule and the 2016 interagency guidance on prepaid cards, which of the following establish an 'account', so that the bank must apply its CIP to the customer? (Choose three.)",
    options: [
      "Renting a safe deposit box to a walk-in customer who has no other relationship with the bank",
      "Selling a USD 500 money order to a walk-in customer",
      "A general purpose prepaid card once the cardholder registers it and activates the reload feature",
      "A payroll card program in which employees may also load funds from sources other than their employer",
      "A non-reloadable general purpose gift card with no credit or overdraft feature"
    ],
    answer: [0, 2, 3],
    explanation: "The CIP rule defines an account to include a relationship to provide a safety deposit box, but not the sale of a check or money order. The 2016 interagency guidance says a general purpose prepaid card with a reload or credit/overdraft feature is an account once that feature is activated, while a non-reloadable card without credit features is not. For payroll cards, the employer is the customer if only it can load funds; if employees can reload from other sources or access credit, each employee becomes a customer subject to CIP.",
    source: [{ label: "Interagency Guidance on applying CIP requirements to holders of prepaid cards (March 2016, FDIC copy)", url: "https://www.fdic.gov/sites/default/files/2024-03/fil16021a.pdf" }] },

  { id: "RETL-022", domain: 3, topic: "Case lessons: Block/Cash App (NYDFS 2025) – compliance must keep pace with growth", hy: false, difficulty: "medium",
    q: "Payly, a licensed money transmitter with a P2P payments app, grew from 2 million to 8 million users in two years. Its compliance team stayed at 25 people, its transaction monitoring alert backlog has reached six months, and customers can buy bitcoin in the app after only light identity checks. The CFO suggests raising alert thresholds until the backlog clears. Drawing on the lessons of the New York DFS action against Block, Inc. (Cash App) in April 2025, what should the board do?",
    options: [
      "Scale compliance resources and controls to the new size, clear the backlog by risk priority and strengthen CDD for the bitcoin feature",
      "Raise alert thresholds until the backlog clears, then lower them again once staffing improves",
      "Close all alerts older than 90 days as stale, so that analysts can focus on new activity",
      "Wait for the next regulatory examination before changing the program, to avoid admitting deficiencies"
    ],
    answer: [0],
    explanation: "NYDFS fined Block USD 40 million and required an independent monitor after finding inadequate customer due diligence, a severe transaction alert backlog that built up during rapid growth in 2019-2020 and was left unaddressed, and lax treatment of high-risk bitcoin transactions. The Superintendent stressed that compliance functions must keep pace with company growth. Raising thresholds or bulk-closing old alerts to manage workload, rather than risk, repeats the failure.",
    source: [{ label: "NYDFS press release – Block, Inc. USD 40 million penalty (10 April 2025)", url: "https://www.dfs.ny.gov/reports_and_publications/press_releases/pr202504101" }] },

  { id: "RETL-023", domain: 3, topic: "MSB agents: when a store must register itself", hy: true, difficulty: "hard",
    q: "Corner Mart LLC asks Fairview Bank for a business account. It is an agent of a large licensed money transmitter and shows its agency agreement. It also cashes payroll checks for local construction workers with its own cash, often USD 1,500 to 3,000 per person on payday. The owner says that as an agent it does not need to register with FinCEN, because its principal's registration covers it. Under the interagency MSB guidance and FinCEN's registration rule, what should the bank conclude?",
    options: [
      "The store need not register, because agents of a registered money transmitter are always covered by the principal's registration",
      "The store must register only if it cashes more than USD 10,000 of checks for any one person on one day",
      "The bank should decline the account, because banks may not serve MSB agents that are not registered with FinCEN",
      "The store is an MSB in its own right as a check casher and must register; the bank should confirm both registration and agent status"
    ],
    answer: [3],
    explanation: "Under 31 CFR 1022.380(a)(3), a business that is an MSB solely because it is an agent of another MSB need not register, but one that also performs MSB activities on its own behalf must register. FinCEN's example is a supermarket that, besides acting as an agent, cashes checks for more than USD 1,000 for any person on any day. The 2005 interagency guidance expects banks to confirm FinCEN registration if required, state licensing, and agent status. The runner-up states the agent-only rule correctly but ignores the store's own check cashing. The threshold is USD 1,000, not USD 10,000, and banks are not required to refuse MSB customers.",
    source: [
      { label: "31 CFR 1022.380(a)(3) – registration of MSBs; agents", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1022/subpart-D/section-1022.380" },
      { label: "FinCEN and federal banking agencies – Interagency Interpretive Guidance on Providing Banking Services to MSBs (April 2005)", url: "https://www.fincen.gov/sites/default/files/shared/guidance04262005.pdf" }
    ] },

  { id: "RETL-024", domain: 3, topic: "Case lessons: Barclays/Stunt & Co (FCA 2025) – acting on law enforcement information", hy: false, difficulty: "hard",
    q: "Over 14 months, Halden Metals Ltd, a bullion trader and customer of Westmoor Bank, received GBP 9 million from Northgate Jewellers, which banks elsewhere. Police now tell Westmoor that Northgate is suspected of laundering cash for organised crime, and that both firms' premises were searched last week. Halden's relationship manager says its onboarding file is complete and no monitoring alert has fired. The bank's annual review of Halden is due in five months. In light of the FCA's 2025 action against Barclays over Stunt & Co, what should Westmoor do FIRST?",
    options: [
      "Wait for the outcome of any criminal case before acting, because Halden has not been charged",
      "Promptly reassess Halden, review its own exposure to Northgate across all customers and report suspicions to the NCA",
      "Rely on the complete onboarding file and the absence of alerts, and review the matter at the annual review",
      "Close Halden's account at once without further review, to remove the risk"
    ],
    answer: [1],
    explanation: "The FCA fined Barclays Bank PLC GBP 39.3 million in July 2025 because it did not gather enough information at the start of the Stunt & Co relationship or monitor it properly, as Stunt & Co received GBP 46.8 million from Fowler Oldfield, a money laundering operation. Barclays failed to reconsider the risk even after law enforcement information and police raids, and only reviewed its exposure to Fowler Oldfield after the NatWest prosecution. The FCA said banks must act promptly when obvious risks are brought to their attention. Waiting for a trial repeats Barclays' failure, and an immediate exit without review or reporting leaves the suspicion unaddressed.",
    source: [{ label: "FCA press release – FCA fines Barclays £42 million (16 July 2025)", url: "https://www.fca.org.uk/news/press-releases/fca-fines-barclays-42-million-poor-handling-financial-crime-risks" }] },

  { id: "RETL-025", domain: 3, topic: "CDD: ITINs presented instead of an SSN (FIN-2026-A002)", hy: false, difficulty: "medium", changed: "FinCEN joint advisory on non-work authorized populations, FIN-2026-A002, June 2026",
    q: "In August 2026, the owner of Delta Staffing LLC, a new company that says it supplies workers to construction sites, applies for a business account at Mesa Bank. He provides a foreign passport and an Individual Taxpayer Identification Number (ITIN) rather than a Social Security number. The branch manager asks how the June 2026 joint advisory from FinCEN and the banking agencies affects the bank's approach. What is the MOST accurate answer?",
    options: [
      "An ITIN can never be accepted as an identification number for CIP purposes",
      "The bank must refuse to open accounts for any applicant who presents an ITIN",
      "The bank should assess whether ITIN use is a relevant risk factor, in light of all other information, as part of risk-based CDD",
      "An ITIN shows that the holder is lawfully present and authorised to work, so no further checks are needed"
    ],
    answer: [2],
    explanation: "The June 2026 advisory (FIN-2026-A002) encourages banks to treat the use of an ITIN in place of an SSN or employment authorization document as a possible risk factor. Banks should assess it together with all other information they hold, as part of risk-based CDD, ongoing monitoring and suspicious activity reporting. ITINs are taxpayer identification numbers issued only for federal tax purposes; they do not prove legal status or work authorization. The advisory does not require banks to refuse ITIN holders, and the CIP rule accepts a TIN, passport or other government document as the identification number for non-US persons.",
    source: [{ label: "FinCEN, FDIC, OCC, NCUA joint advisory FIN-2026-A002 (5 June 2026) – enhanced due diligence for ITINs", url: "https://www.fincen.gov/system/files/2026-06/FinCEN-Advisory-Non-Work-Authorized-Populations.pdf" }] }
]);
