window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  { id: "MIX-001", domain: 1, topic: "Casinos: bill stuffing at slot machines (FIN-2008-G007)", hy: true, difficulty: "hard",
    q: "Ridgeline Casino's AML analyst reviews slot data for Walter Brisco, a retired schoolteacher and players' club member who moved up a club tier last month. On four evenings he put $2,950 to $2,990 in $5, $10 and $20 bills into the bill acceptors of four different slot machines each night. He wagered less than 3% of the credits each time, then pressed 'cash out' to print a voucher. Later in the same gaming day he redeemed the vouchers at different cage windows, at different times, for $100 bills or a casino check. The casino installed a new slot management system in the spring. What is this activity MOST likely, and how should the casino respond?",
    options: [
      "Legitimate slot play by a loyal member chasing tier credits, so the casino should take no action",
      "Bill stuffing: small bills are turned into vouchers and then large bills or a check with little play, so the casino should aggregate his activity and consider a SAR",
      "Chip walking at slot machines, so the casino should check whether his table-game chips were ever redeemed",
      "A software fault in the new slot system that printed vouchers in error, so the casino should refer it to IT"
    ],
    answer: [1],
    explanation: "FinCEN's casino red flags (FIN-2008-G007) describe exactly this pattern under 'minimal gaming': a slot club member inserts just under $3,000 in small bills into several machines, plays little, cashes out vouchers and redeems them with different cashiers at different times for large bills or casino checks. The aim is to swap small bills for large bills or a casino instrument, kept under thresholds. Tier-chasing is the tempting runner-up, but chasing tier credits needs wagering, and he wagered under 3% of his credits. Chip walking is a table-game pattern, and nothing points to a system fault.",
    source: [{ label: "FinCEN FIN-2008-G007 – Recognizing suspicious activity: red flags for casinos and card clubs", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/recognizing-suspicious-activity-red-flags-casinos-and-card" }] },

  { id: "MIX-002", domain: 1, topic: "Sports betting: hedging both sides of a line (FIN-2008-G007)", hy: false, difficulty: "hard",
    q: "Every Sunday for two months, Desmond Kerr, a season-ticket holder who follows the league closely, comes to the sportsbook of a US casino with his teenage son. At one window he bets $6,000 in cash, mostly $20 bills, on the home team to win. At another window he bets $6,000 in cash on the away team to win the same game. He shows identification without objection, and the casino files a currency transaction report for each gaming day. After each game he cashes the winning ticket for a casino check, losing only the bookmaker's margin. What does this pattern MOST likely indicate?",
    options: [
      "Structuring, because he splits his bets between two windows to stay below the reporting threshold",
      "Match-fixing, because betting on both teams suggests he knows the result in advance",
      "Hedging both sides of the line to turn cash into a casino check that looks like winnings, at a small cost",
      "Low-risk recreational betting, because he provides ID and the casino already files CTRs"
    ],
    answer: [2],
    explanation: "FIN-2008-G007 lists a customer who routinely bets both sides of the same line for sporting events (backing both teams to win), so that his overall loss is minimal. This practice is called hedging. Small bills go in, and a casino check backed by an apparently legitimate gambling payout comes out. Structuring is the runner-up, but it does not fit: he shows ID and CTRs are filed, so he is not avoiding the threshold. Betting on both sides cannot profit from a fixed result, and filing CTRs does not remove the duty to assess suspicious activity.",
    source: [{ label: "FinCEN FIN-2008-G007 – Recognizing suspicious activity: red flags for casinos and card clubs", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/recognizing-suspicious-activity-red-flags-casinos-and-card" }] },

  { id: "MIX-003", domain: 1, topic: "Casinos: cage used as a bank and chips pooled to evade reporting", hy: true, difficulty: "hard",
    q: "The compliance officer of Harbor Lights Casino reviews five patron files flagged during the quarter. Which of them are red flags of money laundering that FinCEN's casino guidance describes? (Choose two.)",
    options: [
      "Two patrons who are not playing partners each buy $6,000 to $7,000 in chips with cash, play little, pool their chips and one redeems $13,200 for a casino check",
      "A rated player loses $40,000 at high-limit baccarat over a weekend, in line with his rating history and his declared wealth from a car dealership",
      "A patron wires funds into his front-money account several times a month and, within a day or two, asks to wire all but a token amount to banks abroad",
      "A patron wins a $15,000 slot jackpot, gives identification for the W-2G and takes the payout in cash",
      "A credit customer repays a $25,000 marker with one personal check drawn on his own account, which matches his credit file"
    ],
    answer: [0, 2],
    explanation: "FIN-2008-G007 lists two or more customers who each buy chips with currency for $3,000 to $10,000, play minimally, combine the chips (over $10,000) and have one of them redeem for a casino check, which is an attempt to evade CTRC reporting. It also lists a customer who uses a casino account mainly as a temporary repository, making frequent deposits and, within a day or two, transferring all but a token amount to domestic or foreign banks. Heavy losses consistent with a known profile, a documented jackpot paid with a W-2G, and marker repayment from the customer's own account are normal gaming activity.",
    source: [{ label: "FinCEN FIN-2008-G007 – Recognizing suspicious activity: red flags for casinos and card clubs", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/recognizing-suspicious-activity-red-flags-casinos-and-card" }] },

  { id: "MIX-004", domain: 1, topic: "Life insurance: premium overpayment refunded to a third party abroad", hy: true, difficulty: "hard",
    q: "Marek Dvorak has held a unit-linked life policy with Solace Life for six years and pays an annual premium of EUR 4,800 by direct debit. Last year he raised the sum assured after his daughter was born. In March, Solace receives EUR 48,000 for the policy from a company account in another country. Marek calls it a 'clerical error' by his business partner. He asks Solace to refund the EUR 43,200 excess by wire to a consultancy firm in a third jurisdiction, which he says is owed money by the partner. His CDD file is up to date, and he has never claimed on the policy. What should Solace's AML officer do?",
    options: [
      "Refund the excess to the consultancy as asked, because Marek is a verified long-standing customer",
      "Refund the excess to the paying company's account at once, as that cures the problem without further review",
      "Cancel the policy and return all premiums to Marek, because an overpayment breaches the policy terms",
      "Treat it as a red flag: hold the refund, find out where the money came from and how the payer and recipient are linked, and consider an STR"
    ],
    answer: [3],
    explanation: "The red flag indicators for direct life insurers published by Singapore's Suspicious Transaction Reporting Office list overpayment of premium with a request to refund the excess to a third party, or to an account in another jurisdiction. They also list premiums from unconnected third parties and abnormal settlement instructions. An insurer refund looks like clean money from a reputable source, so the AML officer must look into the source of funds and the parties before paying anything. A quick refund to the payer is the tempting runner-up, but sending the money back without review ignores the suspicion and can still complete a laundering cycle. Paying the consultancy, or cancelling and refunding to Marek, would move suspect funds without analysis.",
    source: [{ label: "Singapore Police Force STRO – Red flag indicators for direct life insurance", url: "https://www.police.gov.sg/~/media/spf/files/cad/stro/website/industry%20layout/direct-life-insurance-indicators.pdf" }] },

  { id: "MIX-005", domain: 1, topic: "Refining: exchanging small banknotes for large denominations", hy: true, difficulty: "hard",
    q: "Every week for three months, Darius Volk comes to Centrum Exchange, a currency exchange office in an EU city. He brings between EUR 6,000 and EUR 14,000 in used EUR 10, 20 and 50 notes, often uncounted and wrapped in rubber bands, and asks for EUR 100 and EUR 200 notes in return. He shows his passport each time without objection, and the office reports every exchange of EUR 10,000 or more to the FIU. He says he runs a food truck. He never exchanges foreign currency, and he recently asked whether the office could also supply EUR 500 notes. Which typology does this pattern MOST likely show?",
    options: [
      "Structuring: splitting a large sum into amounts below the identification and reporting threshold",
      "Refining: swapping small notes for high denominations so that criminal cash is less bulky to move or store",
      "Cuckoo smurfing: third parties paying cash into an unwitting customer's account to settle a remittance",
      "Integration: placing laundered funds into legitimate assets so that they look like business income"
    ],
    answer: [1],
    explanation: "Exchanging small notes for large ones, called refining, reduces the bulk and weight of street cash, for example drug proceeds, so that it is easier to smuggle or hide. The Dutch central bank (DNB) says that denomination exchanges carry a heightened ML risk. It notes that criminals use large denominations in activities such as drug trafficking and that EUR 100 and EUR 200 notes are refused at most points of sale. The FIU's indicators include money repeatedly exchanged from small to large denominations. Structuring is the runner-up but does not fit: his amounts go above the threshold, and he identifies himself each time. No third-party account deposits or asset purchases are involved.",
    source: [{ label: "De Nederlandsche Bank – Q&A: exchange transactions from one euro denomination to another (2023)", url: "https://www.dnb.nl/en/sector-information/supervision-sectors/exchange-transactions/integrity-and-exchange-transactions/q-a-s-exchange-transactions/exchange-transactions-from-one-euro-denomination-to-another" }] },

  { id: "MIX-006", domain: 1, topic: "Real estate: undervalued contract price and cash withdrawals before signing", hy: false, difficulty: "hard",
    q: "Baltic Home Bank is processing a mortgage for Karl Ozols, a first-time buyer who owns a used-car trading company. The purchase contract for a city-centre flat states a price of EUR 180,000, while the bank's independent valuation is EUR 310,000. The flat is in good condition, and the seller, a private individual, accepted Karl's offer within a day. In the week before signing, Karl withdrew EUR 125,000 in cash from his accounts, which are funded mainly by cash deposits from his company. The mortgage application asks for a loan of EUR 140,000. What is the MOST likely explanation?",
    options: [
      "Part of the real price is being paid in cash outside the contract, which hides the cash and evades taxes",
      "Mortgage fraud: the buyer has inflated the price to borrow more than the flat is worth",
      "A distressed seller has agreed a below-market price, which is a commercial matter for the parties",
      "A loan-back scheme: the buyer is lending himself his own illicit funds through an offshore company"
    ],
    answer: [0],
    explanation: "Latvia's FIU lists two indicators that fit here: a significant gap between the purchase price and the property's market value, and atypically large cash withdrawals before a purchase. The FIU notes that such withdrawals may show that part of the property is being paid for in cash, which avoids taxes. The EUR 130,000 gap almost matches the EUR 125,000 withdrawn, and the cash comes from a cash-intensive business. Mortgage fraud usually inflates the price, not deflates it. A distressed sale does not explain the cash withdrawals, and no offshore lender is involved, so a loan-back does not fit.",
    source: [{ label: "Financial Intelligence Unit of Latvia – Money laundering indicators in real estate transactions (2023)", url: "https://fid.gov.lv/uploads/files/2023/Money%20Laundering%20Indicators%20in%20the%20Real%20Estate%20Transactions.pdf" }] },

  { id: "MIX-007", domain: 1, topic: "Gold: cash purchases of used gold from anonymous suppliers", hy: false, difficulty: "hard",
    q: "Aurex Metals, a precious-metals wholesaler, banks with Scheldt Bank. Its account mainly receives payments from a bullion bank for refined gold, and Aurex withdraws about EUR 70 million a year in cash. Its records show that it buys used gold from shops, intermediaries and suppliers recorded only as 'private individuals', with no identification. Large lots are paid in several cash instalments, each below EUR 15,000. Police intelligence links two of its regular suppliers to jewellery burglaries and drug trafficking. Aurex's director sits on a regional trade association, and its audited accounts are filed on time. What conclusion is BEST supported?",
    options: [
      "Aurex appears to let criminals convert stolen or illicit gold into cash anonymously, with payments split below the threshold",
      "Aurex is using trade-based laundering by over-invoicing its gold exports to foreign buyers",
      "Large cash withdrawals are normal in a cash-intensive gold trade, so ordinary monitoring is enough",
      "Aurex is diverting gold to finance terrorism through suppliers in conflict-affected regions"
    ],
    answer: [0],
    explanation: "The FATF/APG gold report describes a Belgian wholesaler that paid suppliers in cash, recorded them as private individuals without identification, and split payments so that none exceeded EUR 15,000, the cash reporting threshold. Much of the gold came from jewellery theft and from criminal groups. The report says cash-for-gold businesses let criminals turn stolen gold into cash without proving ownership. Calling this normal for a cash-intensive trade is the runner-up, but anonymous suppliers, split payments and police intelligence go well beyond normal practice. Nothing points to export over-invoicing or terrorist financing, and trade-association roles and timely filing do not reduce the risk.",
    source: [{ label: "FATF/APG (2015) ML/TF risks and vulnerabilities associated with gold – case study 3 (Singapore government copy)", url: "https://isomer-user-content.by.gov.sg/473/89fd3fe2-b411-48d2-88ad-6075883f6ebe/ML-TF-risks-vulnerabilities-associated-with-gold.pdf" }] },

  { id: "MIX-008", domain: 1, topic: "Three stages of laundering in a complex gold case", hy: true, difficulty: "hard",
    q: "Police dismantle a network that launders cannabis proceeds. Collectors, who know the cash is criminal, gather it from street dealers in Country F. An organiser drives the cash to Country B, where it is paid into the accounts of companies linked to a gold trader and used to buy gold from a wholesaler, supported by false invoices. The gold is exported to Dubai under more false invoices and sold for cash through a hawaladar, and the dealers' suppliers are paid through foreign exchange operations there. Couriers then smuggle the gold on to India, where the organiser owns several valuable properties despite living on social benefits in Country F. Which step is BEST described as layering?",
    options: [
      "The collectors gathering street cash from the dealers in Country F",
      "Paying the cash into the trader-linked company accounts in Country B to buy gold",
      "Exporting the gold to Dubai under false invoices and selling it through a hawaladar",
      "The organiser owning valuable properties in India while living on benefits in Country F"
    ],
    answer: [2],
    explanation: "This case comes from the FATF/APG gold report (case study 1, French police investigation, 2014). Placement is the first entry of criminal cash into the financial system or the gold trade, here the cash paid into accounts in Belgium (Country B) to buy gold. Layering is the series of transactions that hides the trail, here exports under false invoices, sale through a hawaladar and cross-border movement. Integration is the enjoyment of the cleaned value as apparently legitimate wealth, such as the organiser's assets in India. Collecting street cash comes before placement, because the money has not yet entered the system. The cash deposits are the tempting runner-up, but they are placement.",
    source: [{ label: "FATF/APG (2015) ML/TF risks and vulnerabilities associated with gold – case study 1 (Singapore government copy)", url: "https://isomer-user-content.by.gov.sg/473/89fd3fe2-b411-48d2-88ad-6075883f6ebe/ML-TF-risks-vulnerabilities-associated-with-gold.pdf" }] },

  { id: "MIX-009", domain: 1, topic: "Predicate offence vs ML offence: prosecuting cash collectors (INR.3)", hy: true, difficulty: "hard",
    q: "In Country F, which applies the FATF Standards fully, prosecutors charge three cash collectors who picked up about EUR 10 million from street drug dealers and handed it to an organiser who converted it into gold. The collectors say they knew the money was 'dirty' but were never told which crime produced it. The dealers have fled abroad and have not been tried. Defence lawyers argue that their clients cannot be convicted of money laundering. One of the collectors also has a past conviction for tax fraud. Under FATF Recommendation 3 and its Interpretive Note, which statement is CORRECT?",
    options: [
      "The collectors cannot be charged with money laundering, because only someone who committed the drug offence can launder its proceeds",
      "A money laundering conviction must wait until at least one dealer has been convicted of the drug trafficking offence",
      "Proving the cash is criminal proceeds does not require a conviction for the drug offence, and the collectors' knowledge can be inferred from objective facts",
      "The case must be charged as drug trafficking, the predicate offence, because handling cash is part of the drug sale"
    ],
    answer: [2],
    explanation: "INR.3 paragraph 4 states that, when proving that property is the proceeds of crime, it should not be necessary that a person be convicted of a predicate offence. Paragraph 7(a) requires that the intent and knowledge needed for money laundering can be inferred from objective factual circumstances. Laundering by third parties is the core of the offence. Self-laundering is the extension that countries may limit on fundamental principles, so the first option has it backwards. Waiting for the dealers' conviction is the tempting runner-up, but the standard rejects it. Collecting and passing on proceeds is laundering conduct (transfer or possession of proceeds), separate from the drug trafficking predicate. The old tax conviction is irrelevant.",
    source: [{ label: "FATF Recommendations (2012-2026) – R.3 and Interpretive Note (EAG-hosted copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }] },

  { id: "MIX-010", domain: 1, topic: "Cyber-enabled fraud cash-out: gift cards resold on the secondary market", hy: false, difficulty: "medium",
    q: "Tyler Banks, 22, a part-time warehouse worker, has held a checking account at Northgate Bank for three years. Over six weeks it receives 140 payouts totalling $96,000 from two online gift card exchange platforms. Each payout is about 75-85% of the face value of high-demand retailer cards. Within hours he sends most of the money to a crypto exchange. Asked about it, he says he 'flips gift cards' that 'contacts' send him as card numbers and PINs by message. He has never bought gift cards with his own debit card. Which explanation is MOST likely?",
    options: [
      "A lawful gift card resale side business that only needs better record-keeping",
      "Structuring of cash to avoid currency transaction reports at the bank",
      "Trade-based laundering through over-invoiced sales of consumer goods",
      "He is cashing out scam proceeds by selling victims' gift card codes at a discount on resale sites"
    ],
    answer: [3],
    explanation: "The Federal Reserve's FedPayments Improvement guidance explains that scammers have victims buy gift cards and read out or photograph the numbers and PINs. The criminals then drain the cards or sell them online at a discount, and the money is hard to trace. The FBI has warned that criminal activity occurs on secondary gift card market sites. Tyler receives codes from 'contacts', never buys cards himself, sells at a discount and moves the money to crypto. Together these point to a cash-out role, probably as a money mule. No cash or trade invoices are involved, and the volume and sourcing do not fit a genuine side business.",
    source: [
      { label: "FedPayments Improvement (Federal Reserve) – Gift cards and scam payments: protect your customers", url: "https://fedpaymentsimprovement.org/wp-content/uploads/gift-cards-scam-payments-protect-customers.pdf" },
      { label: "FBI IC3 PSA I-061115-PSA – Gift card scams and the secondary gift card market", url: "https://www.ic3.gov/PSA/2015/PSA150611.pdf" }
    ] },

  { id: "MIX-011", domain: 1, topic: "Gold purchases as a cover story for cross-border fund movements", hy: false, difficulty: "medium",
    q: "Over a year, Corvan Metals SA in Country A sends USD 9 million to its local account in Country B, describing each transfer as 'funds for gold purchases'. Its agents in Country B advertise that they buy gold and jewellery above local market prices. Each transfer is withdrawn in cash or by check within a few days, and the bank cannot find any record of gold being exported, refined or sold. Corvan also holds a gold-buying event at a luxury hotel that few people attend, then sends the 'surplus' back to Country A and on to countries where it does not operate. Corvan's website shows a modern office. Which scheme is MOST likely?",
    options: [
      "Funding illegal artisanal mining through advances to miners in Country B",
      "Using claimed gold buying as cover to move funds across borders and withdraw them",
      "Under-invoicing gold exports from Country B to evade customs duties",
      "A gold investment Ponzi scheme that pays early investors with new deposits"
    ],
    answer: [1],
    explanation: "Case study 17 in the FATF/APG gold report (from the Costa Rica FIU) describes this scheme. Representatives offered to buy gold above market prices, and funds sent 'to buy gold' were withdrawn as cash or checks soon after arrival. Little was known about the goods, and a poorly attended hotel event was used to justify sending money back or on to other countries. The report's red flags include large international transfers withdrawn very quickly, no clarity on how the merchandise moves, and transfers to countries where the company is not registered. No gold flows, mining advances or investors are shown, so the other schemes do not fit.",
    source: [{ label: "FATF/APG (2015) ML/TF risks and vulnerabilities associated with gold – case study 17 and red flags (Singapore government copy)", url: "https://isomer-user-content.by.gov.sg/473/89fd3fe2-b411-48d2-88ad-6075883f6ebe/ML-TF-risks-vulnerabilities-associated-with-gold.pdf" }] },

  { id: "MIX-012", domain: 1, topic: "Football clubs: investor and sponsor flows as key risk areas", hy: false, difficulty: "hard",
    q: "Lindqvist Bank holds the accounts of Rovers FC, a top-division football club in an EU Member State. In its review in late 2029 it looks at five flows. Which TWO show the risk factors that the EU AMLR identifies for football and call for the closest scrutiny? (Choose two.)",
    options: [
      "A EUR 6 million capital injection from the club's new owner through a Cyprus holding company whose own source of funds is undocumented",
      "A EUR 3 million transfer fee for a player, at market value and paid under a registered transfer agreement directly to the selling club",
      "A EUR 3 million-a-year sponsorship, four times the previous rate, from a firm owned through nominees that has no business in the country",
      "Monthly salaries paid through the payroll system to registered players and staff",
      "Season ticket sales received from the club's card acquirer in small amounts"
    ],
    answer: [0, 2],
    explanation: "Recital 24 of the EU AMLR names the factors that expose football to money laundering: large sums, cross-border transactions and sometimes opaque ownership. It names transactions with investors and sponsors, and player transfers, as key risk areas. Article 3(3)(o) covers clubs in their dealings with investors, sponsors, agents and intermediaries, and in player transfers. The undocumented owner's injection and the over-priced, nominee-owned sponsor combine a key area with concrete red flags. The transfer is the trap: transfers are a key risk area, but this one is at market value, documented and paid straight to the selling club. Payroll and season ticket income are routine.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR) – recital 24 and Article 3(3)(o)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32024R1624" }] },

  { id: "MIX-013", domain: 2, topic: "EU AMLR: exempting professional football clubs (Article 5)", hy: false, difficulty: "hard",
    q: "In 2029, the finance ministry of an EU Member State considers using Article 5 of the AMLR to exempt some professional football clubs. Its national risk assessment finds a proven low risk for Clubs 1, 2 and 3, but has not yet assessed Club 4. Club 1 plays in the top division, with turnover of EUR 4.6 million in 2027 and EUR 5.3 million in 2028. Club 2 also plays in the top division, with turnover of EUR 3.1 million and EUR 2.9 million in those years. Club 3 plays in the third division, with turnover of EUR 1 million. Club 4 plays in the second division, with turnover of EUR 0.8 million. Which statement is CORRECT?",
    options: [
      "Clubs 1, 2 and 3 may be exempted, because each one's average turnover over the two years is below EUR 5 million",
      "Only Club 3 may be exempted, because clubs in the highest division can never be exempted",
      "Clubs 2 and 3 may be exempted, but not Club 1, and Club 4 only after a risk assessment shows proven low risk",
      "All four clubs may be exempted, because lower-division clubs are exempt automatically"
    ],
    answer: [2],
    explanation: "Article 5(1) allows Member States to exempt top-division clubs only on proven low risk and if their turnover was below EUR 5 million in each of the previous two calendar years. Club 1's EUR 5.3 million in 2028 rules it out, even though its average (EUR 4.95 million) is below the threshold, which is the trap. Lower-division clubs can be exempted on proven low risk, with no turnover test. Under Article 5(2), however, the Member State must first carry out a risk assessment, which has not been done for Club 4. No exemption is automatic, and Article 5(3) requires monitoring to prevent abuse.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR) – Article 5 exemptions for certain professional football clubs", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32024R1624" }] },

  { id: "MIX-014", domain: 2, topic: "EU AMLR: storage in free zones and customs warehouses (Article 3(3)(j))", hy: false, difficulty: "hard",
    q: "In 2028, Portus Vault operates secure, climate-controlled storage in a free zone in an EU Member State. It is not a bank, an art dealer or a precious-metals dealer. This month it takes in four new consignments for different clients. Which one makes Portus an obliged entity under the AMLR for that activity?",
    options: [
      "A sports car with a price of EUR 180,000, stored for a private collector",
      "Industrial turbines worth EUR 2 million, held for a manufacturer until re-export",
      "A gold necklace valued at EUR 8,000, placed in storage on its own",
      "Four wristwatches valued at EUR 12,000 each, stored together for one client"
    ],
    answer: [3],
    explanation: "Article 3(3)(j) of the AMLR covers persons who store, trade or act as intermediaries in cultural goods and high-value goods within free zones and customs warehouses, where the transaction or linked transactions are worth at least EUR 10,000. Annex IV defines high-value goods to include clocks and watches worth more than EUR 10,000, but motor vehicles only when priced above EUR 250,000, and jewellery only above EUR 10,000. The watches qualify, and together they are worth EUR 48,000. The car is the runner-up but falls below the vehicle threshold. The necklace is below EUR 10,000, and industrial turbines are neither cultural nor high-value goods.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR) – Article 3(3)(j) and Annex IV", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32024R1624" }] },

  { id: "MIX-015", domain: 4, topic: "Human trafficking SAR: victim vs subject (FIN-2020-A008)", hy: true, difficulty: "hard",
    q: "In 2025, investigator Rachel Moore at Crestline Bank reviews the account of Ana, 19, opened eight months ago. It shows late-night cash deposits at different ATMs, payments for online advertisements, motel stays and rideshares in several states, and rapid transfers of nearly all funds to an account held by Victor Hale. At the branch, Victor speaks for Ana, holds her ID and fills in her forms, and the teller noticed bruising on her arms. Rachel concludes that Ana is probably a sex-trafficking victim and Victor the likely trafficker. Ana also has a small car loan with the bank. How should the SAR be prepared?",
    options: [
      "Name Victor as the subject, describe Ana and the indicators staff saw in the narrative, and use the advisory key term",
      "Name both Ana and Victor as subjects, because both accounts were used to move the funds",
      "Name Ana as the subject because the activity ran through her account, and describe Victor in the narrative",
      "File no SAR, because reporting a victim would harm her, and call a trafficking hotline instead"
    ],
    answer: [0],
    explanation: "FinCEN's 2020 human trafficking advisory (FIN-2020-A008) says that a potential victim should not be reported as the subject of a SAR, but all available information about the victim should go in the narrative. It asks institutions to include behavioral indicators, and the staff who witnessed them, in the narrative. It also asks them to put the key term 'HUMAN TRAFFICKING FIN-2020-A008' in field 2 and the narrative, and to select field 38(h). Naming both as subjects is the tempting runner-up, but it lists the victim as a subject. Not filing is wrong because reporting the trafficker helps law enforcement protect her. Contacting a hotline is an addition to the SAR, not a replacement for it.",
    source: [{ label: "FinCEN Advisory FIN-2020-A008 – Human trafficking (Oct 2020), SAR filing instructions", url: "https://www.fincen.gov/sites/default/files/advisory/2020-10-15/Advisory%20Human%20Trafficking%20508%20FINAL_0.pdf" }] },

  { id: "MIX-016", domain: 4, topic: "Investigating gold imports: reconciling customs values with payments", hy: false, difficulty: "hard",
    q: "Investigator Luis Ortega at Gulfport Bank reviews Meridian Refining Supply LLC, a US importer of scrap gold from two Central American suppliers. Over 23 months the customer's import documents show a total declared customs value of about USD 6.4 million, while its outgoing wires to the same two suppliers total about USD 24 million. Gold prices rose about 15% over the period. The customer's CFO says the extra payments are 'advances on future shipments', though none has arrived. The suppliers bank in Central America. What is the BEST next step?",
    options: [
      "Match each wire to its shipment's customs entry, invoice, weight and purity, then decide on a SAR",
      "Close the alert, because the gold price rise explains why payments exceed declared values",
      "Share the case with the suppliers' Central American banks under the section 314(b) safe harbor",
      "Tell the CFO that the bank suspects customs fraud and ask him to correct the import declarations"
    ],
    answer: [0],
    explanation: "This case follows case study 13 of the FATF/APG gold report. A US importer brought in scrap gold at undervalued declared prices but paid the exporters overvalued amounts (USD 6.4 million declared against USD 24 million wired). The owners were charged with conspiracy to launder money, with customs violations as the predicate. Matching payments to documents shipment by shipment tests the hypothesis and supports a well-founded SAR. A 15% price rise cannot explain payments almost four times the declared value. Section 314(b) sharing is limited to US financial institutions and associations, so foreign banks are not eligible. Telling the CFO of the suspicion risks tipping off.",
    source: [{ label: "FATF/APG (2015) ML/TF risks and vulnerabilities associated with gold – case study 13 (Singapore government copy)", url: "https://isomer-user-content.by.gov.sg/473/89fd3fe2-b411-48d2-88ad-6075883f6ebe/ML-TF-risks-vulnerabilities-associated-with-gold.pdf" }] }
]);
