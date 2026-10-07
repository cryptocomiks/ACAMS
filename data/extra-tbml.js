// Batch 6 (October 2026): practical cases on trade-based money laundering and trade finance abuse.
window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  { id: "TBML-001", domain: 1, topic: "TBML – detecting under-invoiced exports with partner-country trade data", hy: true, difficulty: "hard",
    q: "Customs in Country K, which limits how much foreign currency residents may hold abroad, suspects that exporters of made-to-order mining equipment parts are under-invoicing their shipments to move capital out of the country. Because each part is custom-built, no published market prices exist. Like most customs agencies, Country K's customs has always concentrated on inspecting imports and collecting import duties, and it sees only its own declarations. Which measure, described in the FATF's 2006 TBML study, would BEST help it detect the under-invoicing?",
    options: [
      "Comparing each declared export value with published commodity benchmark prices",
      "Exchanging import and export data with the customs authorities of the main destination countries, so values declared on export can be compared with values declared on import",
      "Increasing physical inspections of containers arriving at Country K's ports",
      "Raising export duties so that exporters have a reason to declare the full value of their goods"
    ],
    answer: [1],
    explanation: "The FATF's 2006 TBML study says under-invoicing exports is one of the most common TBML techniques, partly because customs agencies focus on imports and monitor exports less rigorously. It adds that customs agencies often lack data to establish a fair market price for complex goods, usually see only one side of the transaction, and can therefore spot mispricing mainly in widely traded goods. It describes trade transparency units, through which cooperating customs authorities share import and export data to detect anomalies, as an effective tool; studies of South Africa's currency controls compared its reported exports with partners' reported imports. Benchmark checks are the runner-up, but there is no published price for custom-built parts. Inspecting arriving containers looks at the wrong flow, and higher export duties would increase the incentive to under-declare.",
    source: [
      { label: "FATF (2006) Trade-Based Money Laundering (under-invoicing; Trade Transparency Units)", url: "https://eurasiangroup.org/files/FATF_docs/Trade_Based_Money_Laundering.pdf" }
    ] },

  { id: "TBML-002", domain: 1, topic: "TBML used to settle informal value transfer (hawala) balances", hy: false, difficulty: "hard",
    q: "Delmont Medical Supply, a small US importer, buys surgical instruments from a manufacturer in Country P. Over a year, the invoices rise to about three times the price Delmont paid for identical items before. A few days before each payment, Delmont's account receives cash deposits and transfers from a local storefront money transmitter that has no commercial link to Delmont. Delmont then wires the full inflated invoice amount to the manufacturer. Country P gives exporters a VAT rebate based on invoice value. Delmont's owner recently moved the business to a larger warehouse. Which scheme does this MOST likely show?",
    options: [
      "An informal value transfer operator settling its debts with a counterpart in Country P through an over-invoiced trade",
      "A Black Market Peso Exchange in which a broker sells drug dollars to importers who pay in local currency",
      "A phantom shipment in which no surgical instruments are actually delivered to Delmont",
      "Normal price inflation that the manufacturer is passing on to Delmont"
    ],
    answer: [0],
    explanation: "The FATF 2006 TBML study describes a US alternative remittance operator settling an account with his counterpart in Pakistan: a colluding exporter over-invoices a US importer, the operator gives the importer funds to cover the extra cost, and the exporter uses the excess to settle the debt and also gains a larger VAT rebate. That matches the top-ups from an unrelated money transmitter and the tripled prices. BMPE is the runner-up, but there is no peso broker selling dollar proceeds to a foreign importer; the extra funds come in from a transmitter to cover an inflated US import. Nothing suggests the goods are not delivered, and ordinary inflation does not explain third-party top-ups. The warehouse move is irrelevant.",
    source: [
      { label: "FATF (2006) Trade-Based Money Laundering, Case Study 3", url: "https://eurasiangroup.org/files/FATF_docs/Trade_Based_Money_Laundering.pdf" }
    ] },

  { id: "TBML-003", domain: 1, topic: "TBML – phantom shipments", hy: true, difficulty: "hard",
    q: "Calloway Components asks your bank to discount documents under a letter of credit for 'mobile phone sub-assemblies' sold to a company in a regional trading hub. The importer and exporter share a director. The invoice prices match recent comparable trades. The bill of lading names the vessel MV Silver Heron as loaded at Port A on 4 March. A third-party vessel-tracking service shows that MV Silver Heron was in dry dock in another region from February to April, and the shipping line's container tracking has no record of the listed container numbers. The same pair of companies has presented similar documents every month for a year. Which TBML technique is MOST likely being used?",
    options: [
      "Over-invoicing, because the price of the sub-assemblies has been inflated",
      "Multiple invoicing, because the same shipment is being financed at several banks",
      "Falsely described goods, because cheaper items were shipped instead",
      "Phantom shipments, because no goods appear to have moved at all"
    ],
    answer: [3],
    explanation: "The FATF-Egmont 2020 report describes over- and under-shipment, including 'phantom shipments' where no product is moved at all, which relies on collusion between importer and exporter (here, a shared director). The vessel was in dry dock and the containers do not exist, so the documents describe a shipment that never happened. Multiple invoicing is the runner-up, but it reuses documents for a real shipment, and nothing here shows a genuine shipment or financing elsewhere. Prices match comparables, which rules out over-invoicing, and there are no goods to misdescribe.",
    source: [
      { label: "FATF-Egmont (2020) TBML: Trends and Developments", url: "https://eurasiangroup.org/files/uploads/files/other_docs/FATF%20docs/Trade-Based-Money-Laundering-Trends-and-Developments.pdf" },
      { label: "Wolfsberg/ICC/BAFT Trade Finance Principles", url: "https://db.wolfsberg-group.org/assets/5c770f68-6277-4443-931b-7750478f08e7/Trade%20Finance%20Principles.pdf" }
    ] },

  { id: "TBML-004", domain: 1, topic: "TBML – over- and under-shipment (quantity misrepresentation)", hy: false, difficulty: "hard",
    q: "Under a documentary collection, Arden Electronics in Country S invoices its customer in Country T for 50,000 laptops at a unit price in line with the market. The bill of lading shows one 20-foot container with a gross weight of 4,200 kg, which is far too little for that many laptops. Vessel tracking confirms that the voyage took place, and the container was discharged in Country T. The importer pays the full invoice amount. The two companies are controlled by the same family, and the importer recently changed its customs broker. Which TBML technique is MOST likely shown?",
    options: [
      "Phantom shipment, because no goods were transported",
      "Misrepresenting the quantity of goods, so the importer pays for far more than it receives",
      "Under-invoicing, because the unit price is below the market price",
      "Multiple invoicing, because the documents were reused at another bank"
    ],
    answer: [1],
    explanation: "The FATF-Egmont 2020 report distinguishes price misrepresentation (over- and under-invoicing) from quantity misrepresentation (over- and under-shipment). Here the unit price is normal, but the weight shows that far fewer laptops were shipped than invoiced, so paying the full invoice moves excess value from the importer to the exporter. Phantom shipment is the runner-up, but a real container did travel and arrive, so goods moved, just not in the stated quantity. The unit price matches the market, and there is no evidence of reused documents. The change of customs broker is a decoy.",
    source: [
      { label: "FATF-Egmont (2020) TBML: Trends and Developments", url: "https://eurasiangroup.org/files/uploads/files/other_docs/FATF%20docs/Trade-Based-Money-Laundering-Trends-and-Developments.pdf" }
    ] },

  { id: "TBML-005", domain: 1, topic: "TBML – falsely described goods (quality misrepresentation)", hy: true, difficulty: "hard",
    q: "Your bank issued a letter of credit for Norland Health, which imports 'medical-grade nitrile examination gloves'. A trade operations checker compares the invoice unit price with a reliable benchmark for medical-grade nitrile gloves and finds it in line. However, the packing list and the inspection certificate presented with the documents describe 'industrial-grade vinyl gloves', which sell for a fraction of the price. The beneficiary is a long-standing supplier, and the presentation was made on time. Norland's finance director says the wording difference is 'just a paperwork error'. Which TBML technique does this MOST likely indicate?",
    options: [
      "Over-invoicing, because the unit price is above the benchmark for the goods described",
      "Multiple invoicing, because the supplier has presented documents before",
      "Falsely described goods, because a cheaper product is invoiced as a more expensive one",
      "No TBML concern, because the price check against the benchmark was passed"
    ],
    answer: [2],
    explanation: "The FATF-Egmont 2020 report defines falsely described goods as misrepresenting the quality or type of goods, such as shipping a relatively inexpensive good described as a more expensive item, to justify moving value. The Wolfsberg Trade Finance Principles list significant differences in goods descriptions, especially between the invoice and shipping documents, as a red flag. Over-invoicing is the runner-up, but the price matches the benchmark for the goods as described; the misrepresentation is of quality, which is why a price check alone misses it. A passed price check does not clear the discrepancy, and nothing suggests reused documents.",
    source: [
      { label: "FATF-Egmont (2020) TBML: Trends and Developments", url: "https://eurasiangroup.org/files/uploads/files/other_docs/FATF%20docs/Trade-Based-Money-Laundering-Trends-and-Developments.pdf" },
      { label: "Wolfsberg/ICC/BAFT Trade Finance Principles, Appendix I", url: "https://db.wolfsberg-group.org/assets/5c770f68-6277-4443-931b-7750478f08e7/Trade%20Finance%20Principles.pdf" }
    ] },

  { id: "TBML-006", domain: 1, topic: "Free trade zones – repackaging and relabelling", hy: false, difficulty: "medium",
    q: "Halcyon Trading FZE, located in a free trade zone, buys solar panels from Country C. Within days, the panels are unloaded in the zone, repacked into new cartons labelled 'Made in' the zone's host country, and re-exported to Country D, where panels from Country C face high anti-dumping duties. Halcyon has four staff and a small office, and pays its supplier by wire from a local bank. Which free trade zone vulnerability is MOST directly being exploited?",
    options: [
      "Weak oversight of goods in the zone, which allows repackaging and relabelling that hides the true origin",
      "The zone's exemption from all AML/CFT obligations for banks located there",
      "The use of bulk cash to pay for goods bought in the zone",
      "The zone's ban on letters of credit, which forces traders onto open account terms"
    ],
    answer: [0],
    explanation: "The FATF's 2010 report on free trade zones identifies relaxed oversight and weak procedures to inspect goods as core vulnerabilities and notes that repackaging in zones is a tool criminals use to cut the link with the real country of origin or destination. Here relabelling hides the Country C origin to evade duties in Country D. The report does not say zone banks are exempt from AML/CFT duties, payment is by wire rather than cash, and zones do not ban letters of credit.",
    source: [
      { label: "FATF (2010) Money laundering vulnerabilities of Free Trade Zones", url: "https://eurasiangroup.org/files/FATF_docs/ML_vulnerabilities_of_Free_Trade_Zones.pdf" }
    ] },

  { id: "TBML-007", domain: 1, topic: "Chinese money laundering networks – TBML red flags (FIN-2025-A003)", hy: true, difficulty: "hard", changed: "FinCEN advisory on Chinese money laundering networks, FIN-2025-A003, Aug 2025",
    q: "Pacific Crest Electronics LLC, a two-person US reseller of phones and tablets, opened its account 18 months ago. It regularly receives wires from companies in Hong Kong, the United Arab Emirates and Mexico, although it has no known business ties to those countries. Its account shows almost no payments to wholesalers to buy inventory. Instead, it makes large payments to the credit card accounts of a dozen individuals who appear unrelated to the business. The owner says the company 'exports electronics' and has just leased a delivery van. Under FinCEN's August 2025 advisory, what does this MOST likely indicate?",
    options: [
      "Ordinary export sales, since the business sells electronics abroad",
      "A Black Market Peso Exchange in which Colombian importers buy US goods",
      "Employee expense reimbursement through corporate credit cards",
      "A trade-based scheme in which a Chinese money laundering network launders cartel proceeds"
    ],
    answer: [3],
    explanation: "FinCEN's advisory FIN-2025-A003 says Chinese money laundering networks use recruits to buy US electronics and luxury goods with drug proceeds or with credit cards later paid off by the network or a complicit business, then export them to counterparties in Mexico, China, Hong Kong and the UAE. Its red flags include a business that receives export wires but rarely buys inventory, a small electronics business receiving wires from those countries with no known nexus, and payments to multiple credit cards of seemingly unrelated individuals. BMPE is the runner-up, but these wire origins and credit card pay-offs match FinCEN's network typology. FinCEN asks for the key term CMLN-2025-A003 in SARs.",
    source: [
      { label: "FinCEN Advisory FIN-2025-A003 (Aug 2025) – Chinese money laundering networks", url: "https://www.fincen.gov/system/files/2025-08/FinCEN-Advisory-CMLN-508.pdf" }
    ] },

  { id: "TBML-008", domain: 1, topic: "Funnel accounts and TBML – pre-signed checks red flag (FIN-2014-A005)", hy: false, difficulty: "hard",
    q: "Rio Bravo Auto Parts, whose account is held at a branch in Laredo, Texas, receives frequent cash deposits below USD 10,000 at branches in other states. During a review, an analyst examines the paid checks drawn on the account. On each one, the payee and amount lines are in a different handwriting from the owner's signature. The checks are payable to unrelated exporters of electronics and clothing, and several were cleared through the US correspondent account of a Mexican bank. The owner has not reported any lost or stolen checks and does not dispute any payment. What does the handwriting pattern MOST likely indicate?",
    options: [
      "The owner signed checks with the payee and amount left blank and handed them to a criminal organisation, which fills them in to pay for goods in a trade-based scheme",
      "Checks stolen from the mail were chemically washed and rewritten to new payees",
      "An employee has been forging the owner's signature on company checks",
      "Normal practice for a business whose bookkeeper completes checks that the owner has already signed"
    ],
    answer: [0],
    explanation: "FinCEN's advisory FIN-2014-A005 lists, as a red flag of funnel accounts used for TBML, checks with different handwriting on the payee and amount lines than on the signature line. It explains that the checks may have been pre-signed by the account holder, handed to a criminal organisation, and then completed to pay US or foreign parties. A further red flag is checks or wires from the account cleared through the US correspondent account of a Mexican bank. Check washing is the runner-up, but it involves stolen checks altered without the owner's knowledge, and here the owner reports no loss and disputes nothing. The signature is the owner's own, so forgery does not fit, and a genuine bookkeeper would not be paying unrelated exporters with funds from out-of-state cash deposits.",
    source: [
      { label: "FinCEN Advisory FIN-2014-A005 – Funnel accounts and TBML (red flags)", url: "https://www.fincen.gov/resources/advisories/fincen-advisory-fin-2014-a005" }
    ] },

  { id: "TBML-009", domain: 1, topic: "Third-party settlement of trade invoices", hy: true, difficulty: "hard",
    q: "Southwind Orchards, a long-standing customer, exports apples to a wholesaler in South-East Asia. Over 18 months, about USD 1.5 million of its export receipts came not from the wholesaler but from accounts of shell companies in Eastern Europe. When the bank asked for supporting documents, Southwind supplied invoices showing sales of 'ceramic tiles' to an Eastern European company, signed by a manager whom the bank cannot identify. Shipping records confirm that the apples really reached South-East Asia, and the prices match the market. Southwind's managers say they 'don't ask who pays, as long as we are paid'. Which conclusion is BEST supported?",
    options: [
      "Unrelated third parties are settling genuine export invoices with funds that need laundering, supported by false documents, so the activity should be reported",
      "The activity is low risk, because the apples really shipped at market prices",
      "The Eastern European shell companies are probably the wholesaler's subsidiaries, so only the invoices need correcting",
      "This is under-invoicing of the apples to move value to the South-East Asian buyer"
    ],
    answer: [0],
    explanation: "The FATF-Egmont 2020 report treats third-party settlement of invoices as a constant feature of TBML, even where importer and exporter do not collude, and its New Zealand case matches these facts: legitimate fruit exports paid for by shell companies in Eastern Europe, with banks given clearly fraudulent 'ceramic tiles' invoices. The 2021 risk indicators list payment by an entity other than the consignee with no clear economic reason. The runner-up relies on the genuine shipment and market price, but a real trade can be used to settle someone else's illicit funds. There is no evidence that the shell companies belong to the buyer, and prices are not depressed.",
    source: [
      { label: "FATF-Egmont (2020) TBML: Trends and Developments, Box 2.11", url: "https://eurasiangroup.org/files/uploads/files/other_docs/FATF%20docs/Trade-Based-Money-Laundering-Trends-and-Developments.pdf" },
      { label: "FATF-Egmont (2021) TBML Risk Indicators", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/Trade-based-money-laundering-indicators.html" }
    ] },

  { id: "TBML-010", domain: 1, topic: "Surrogate shopping networks", hy: false, difficulty: "medium",
    q: "A bank's card team notices that seven international students, all aged 20 to 24, each buy USD 15,000 to 30,000 of smartphones and tablets a month on their credit cards at several electronics stores. The card balances are paid off in full by electronic transfers from two import-export companies that the bank has already reported as suspected of laundering drug proceeds. The students' declared incomes are small. Which typology described by the FATF and Egmont Group does this MOST likely show?",
    options: [
      "Credit card bust-out fraud against the card issuer",
      "Black Market Peso Exchange using cashier's checks",
      "A surrogate shopping network used to integrate criminal proceeds through the purchase of goods",
      "Trade finance fraud using forged letters of credit"
    ],
    answer: [2],
    explanation: "The FATF-Egmont 2020 report describes surrogate shopping networks in which shoppers buy goods for others; in one variant, students bought portable electronics on credit cards whose balances were settled by companies suspected of laundering drug proceeds, and the goods were sent to grey markets in Asia and the Middle East. A bust-out leaves the card unpaid, which is the opposite of what happens here. No peso broker or letter of credit is involved.",
    source: [
      { label: "FATF-Egmont (2020) TBML: Trends and Developments", url: "https://eurasiangroup.org/files/uploads/files/other_docs/FATF%20docs/Trade-Based-Money-Laundering-Trends-and-Developments.pdf" }
    ] },

  { id: "TBML-011", domain: 1, topic: "TBML – use of money transmitters to pay trade invoices", hy: false, difficulty: "hard",
    q: "The compliance officer of a licensed money transmitter reviews Tamsin Imports Ltd, a small clothing importer that has a bank account. Over three months, Tamsin's director sent eight transfers of about USD 150,000 each through one of the transmitter's agents to a garment trading company in Asia, each supported by an invoice for 'assorted garments'. The director told the agent that the company's bank 'asks too many questions'. The invoice values are high for the stated quantities, and the agent notes that the transfers are unusually large for its location. What is the BEST assessment?",
    options: [
      "Low risk, because each transfer is supported by a commercial invoice",
      "Prohibited activity, because money transmitters may not send payments for commercial trade",
      "Cuckoo smurfing, because the Asian supplier is an unwitting beneficiary of criminal cash",
      "A TBML red flag, because launderers route large business payments for false invoices through money transmitters that they expect to ask fewer questions than banks"
    ],
    answer: [3],
    explanation: "The FATF-Egmont 2020 report says conspirators in false invoicing TBML schemes have used money or value transfer services (MVTS) to pay for goods instead of a bank, because they perceive the MVTS sector as having a weaker understanding of TBML and expect it not to question a large business payment made by an unusual method. The 2021 risk indicators add prices out of line with market value. The transmitter should review the trade against the customer's profile and consider a SAR. The runner-up relies on the invoice, but false invoices are the core of the scheme. Money transmitters can lawfully send business payments, and cuckoo smurfing involves criminal cash deposited into a legitimate remittance beneficiary's account, which is not described.",
    source: [
      { label: "FATF-Egmont (2020) TBML: Trends and Developments – exploitation of other types of FIs", url: "https://eurasiangroup.org/files/uploads/files/other_docs/FATF%20docs/Trade-Based-Money-Laundering-Trends-and-Developments.pdf" },
      { label: "FATF-Egmont (2021) TBML Risk Indicators", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/Trade-based-money-laundering-indicators.html" }
    ] },

  { id: "TBML-012", domain: 1, topic: "Services-based money laundering – verifying intangible trade", hy: false, difficulty: "hard",
    q: "Ashby Logistics, a mid-sized freight company, began paying about USD 400,000 a month to Corvane Advisory, a company registered in a secrecy jurisdiction, for 'strategic consultancy and software licences'. Corvane's website is a single page, and the contract is a two-page template. Ashby's profits have fallen, but its board approved the fees. The analyst checks customs import data and finds nothing, and no price benchmark exists for this kind of consultancy. Ashby's CFO, who signs off the payments, is also a director of a company that shares Corvane's registered address. What is the BEST next step?",
    options: [
      "Close the case, because customs data shows no imports to compare with",
      "Ask for evidence that the services were actually performed, such as deliverables and licence records, and review the link between the CFO and Corvane",
      "Compare the fees with commodity price databases for software products",
      "Exit the relationship at once without further review"
    ],
    answer: [1],
    explanation: "The FATF-Egmont 2020 report says services-based laundering is hard to detect because, for consultancy or advisory services, it is difficult to assess whether the relationship is genuine, and no physical goods create import or export data. The FATF free trade zone report lists checking whether an invoiced service was actually performed as an indicator to test. The runner-up treats the absence of customs data as clearing the activity, when in fact it is exactly why services are attractive. Commodity price databases cannot price bespoke consultancy, and exiting without review loses the facts needed for a report.",
    source: [
      { label: "FATF-Egmont (2020) TBML: Trends and Developments", url: "https://eurasiangroup.org/files/uploads/files/other_docs/FATF%20docs/Trade-Based-Money-Laundering-Trends-and-Developments.pdf" },
      { label: "FATF (2010) Money laundering vulnerabilities of Free Trade Zones, Annex A", url: "https://eurasiangroup.org/files/FATF_docs/ML_vulnerabilities_of_Free_Trade_Zones.pdf" }
    ] },

  { id: "TBML-013", domain: 1, topic: "Infiltration of legitimate supply chains", hy: false, difficulty: "hard",
    q: "Meridale Foods, a 30-year-old importer of canned fish, struggled through two loss-making years. In 2025 a new investor with no food-industry background bought 49% of the shares. Since then, Meridale's suppliers, routes, invoice prices and shipping documents have not changed, and every trade checks out. However, its cash deposits have risen steadily from about 2% to 18% of turnover over 15 months, although its customers are mainly supermarkets that pay by transfer. The company also replaced its delivery fleet. Which typology does this MOST likely show?",
    options: [
      "A criminal group using a stake in a legitimate business to integrate illicit cash slowly through its existing supply chain",
      "Over-invoicing of imports to move value abroad",
      "Phantom shipments supported by false shipping documents",
      "A normal recovery after new equity investment"
    ],
    answer: [0],
    explanation: "The FATF-Egmont 2020 report describes criminal groups buying a stake in a legitimate, sometimes struggling, business and keeping its supply chain unchanged while slowly increasing the illicit cash introduced into it. Because nothing about the trade itself is misrepresented, document and price checks find nothing. The runner-up, normal recovery, does not explain rising cash from a business whose customers pay by transfer. Prices and documents are consistent, which rules out over-invoicing and phantom shipments. The new fleet is a decoy.",
    source: [
      { label: "FATF-Egmont (2020) TBML: Trends and Developments", url: "https://eurasiangroup.org/files/uploads/files/other_docs/FATF%20docs/Trade-Based-Money-Laundering-Trends-and-Developments.pdf" }
    ] },

  { id: "TBML-014", domain: 1, topic: "Export control diversion red flags (BIS Know Your Customer guidance)", hy: true, difficulty: "medium",
    q: "Your bank finances the export of a high-precision 5-axis machine tool by Granite Machine Works to a new buyer abroad. The trade finance analyst reads the sales file. Which facts are red flags of possible unlawful diversion under the US Commerce Department's 'Know Your Customer' guidance? (Choose two.)",
    options: [
      "The buyer asks for the machine's standard user manual in its own language",
      "The buyer declines the installation and operator training that are included in the price",
      "The buyer has bought similar machines from Granite for ten years for its own plant",
      "The buyer offers to pay cash up front although the sale terms provide for financing",
      "The buyer asks for delivery to its own factory address shown on its website"
    ],
    answer: [1, 3],
    explanation: "Supplement No. 3 to 15 CFR Part 732 lists red flags of possible diversion, including a customer declining routine installation, training or maintenance, and a customer willing to pay cash for a very expensive item when the terms of sale call for financing. A long, consistent purchase history, delivery to the buyer's own documented factory and a request for a manual in the local language are normal features of a genuine sale. When red flags appear, BIS expects the exporter to inquire about the end use, end user and destination.",
    source: [
      { label: "15 CFR Part 732, Supplement No. 3 – BIS Know Your Customer guidance and red flags", url: "https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-732/appendix-Supplement%20No.%203%20to%20Part%20732" }
    ] },

  { id: "TBML-015", domain: 1, topic: "Export controls – self-blinding", hy: false, difficulty: "medium",
    q: "During an enhanced review, a bank's trade finance team learns that Velor Optics, a US exporter of laser systems, has told its sales staff not to ask foreign buyers about end use or final destination. Velor's export manager explains: 'If we never ask, we can never be said to know.' Velor has had no export violations to date and holds ISO quality certification. How does BIS guidance treat this policy?",
    options: [
      "As acceptable, because exporters have no duty to inquire unless the EAR expressly requires it",
      "As a mitigating factor, because it shows a consistent and documented policy",
      "As self-blinding, which does not protect the firm from liability and is usually an aggravating factor",
      "As relevant only to licence applications, not to exports under licence exceptions"
    ],
    answer: [2],
    explanation: "BIS's Know Your Customer guidance (Supplement No. 3 to 15 CFR Part 732) says 'do not self-blind': firms must not cut off the information that comes to them in the normal course of business, for example by telling sales staff not to discuss end use, end user or destination. Such a policy does not insulate the company from liability and would usually be considered an aggravating factor. Absent red flags there is no general duty to go behind a customer's statements, but the guidance forbids deliberately avoiding information, and the duty to check red flags is not limited to licence applications.",
    source: [
      { label: "15 CFR Part 732, Supplement No. 3 – BIS Know Your Customer guidance", url: "https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-732/appendix-Supplement%20No.%203%20to%20Part%20732" }
    ] },

  { id: "TBML-016", domain: 1, topic: "Shipping red flags – flag hopping and ownership changes", hy: true, difficulty: "hard",
    q: "Your bank is asked to finance a cargo of fuel oil carried by the tanker MT Lyra. Due diligence shows that the vessel is 18 years old and registered with an open registry. Its P&I insurer changed once at the last renewal. In the past 14 months, it has changed flag three times. Its registered owner has passed between three single-ship companies with the same beneficial owner, and its ISM manager has changed twice. AIS data show continuous transmission on a normal commercial route. Which fact is the MOST significant sanctions evasion red flag?",
    options: [
      "The vessel's age of 18 years",
      "Registration with an open registry",
      "The single change of P&I insurer at renewal",
      "Repeated flag changes combined with ownership moving between companies with the same beneficial owner"
    ],
    answer: [3],
    explanation: "The May 2020 Treasury, State and Coast Guard maritime advisory lists false flags and flag hopping (frequent changes of flag in a short period) and complex ownership or management, including patterns of ownership changes, changes of ISM manager, and transfers between companies with the same beneficial owner for no legitimate purpose, as deceptive shipping practices. Old vessels and open registries are common in legitimate shipping and are not indicators on their own. A single insurer change at renewal is routine. Continuous AIS transmission removes one red flag but does not cancel the others.",
    source: [
      { label: "OFAC/State/USCG Sanctions Advisory for the Maritime Industry (May 2020)", url: "https://ofac.treasury.gov/media/37751/download?inline" }
    ] },

  { id: "TBML-017", domain: 1, topic: "Circular payments and export incentive abuse", hy: false, difficulty: "hard",
    q: "Kestrel Textiles in Country A receives a government export incentive equal to 10% of its export receipts. Its exports of cotton shirts to Brightwater Ltd in Country B are invoiced at about twice the price of comparable shirts. In a public-private partnership briefing, investigators tell the bank that Brightwater pays Kestrel with funds it receives, a few days earlier, from a company in Country A whose director is Kestrel's managing director. Kestrel's sales grew 60% this year, and it has opened a design studio. What does this pattern MOST likely show?",
    options: [
      "A legitimate expansion financed by a related-party investor",
      "Over-invoiced exports paid with funds routed in a circle, to inflate export receipts and claim incentives",
      "Under-invoicing to move value from Country A to Country B",
      "Multiple invoicing of the same shirts across several banks"
    ],
    answer: [1],
    explanation: "The FATF-Egmont 2021 risk indicators list payments routed in a circle, where funds leave a country and return to it through other countries, and prices out of line with market value. The FATF 2006 TBML study notes that exports can be over-invoiced to obtain larger export subsidies. Here, Country A money returns as apparent export income at inflated prices, which also increases the incentive claimed. The runner-up, legitimate expansion, does not explain why the buyer is funded by Kestrel's own director just before paying. Prices are inflated, not depressed, and nothing indicates reused documents.",
    source: [
      { label: "FATF-Egmont (2021) TBML Risk Indicators", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/Trade-based-money-laundering-indicators.html" },
      { label: "FATF (2006) Trade-Based Money Laundering", url: "https://eurasiangroup.org/files/FATF_docs/Trade_Based_Money_Laundering.pdf" }
    ] },

  { id: "TBML-018", domain: 1, topic: "Lessons learned: Lebanese Canadian Bank used-car scheme (2011)", hy: false, difficulty: "hard",
    q: "A bank reviews 12 personal accounts held by self-described 'car buyers' who have few assets besides these accounts. Each account receives wires from exchange houses in Lebanon, which the holders use to buy used cars at US auctions. The cars are shipped to Cotonou, Benin. The holders say they are paid a commission per car, and two of them recently bought larger trucks for transport. Based on the US Attorney's December 2011 complaint involving the Lebanese Canadian Bank, what is the MOST serious concern?",
    options: [
      "Export of stolen vehicles that were bought at auctions",
      "Evasion of US sales tax on the auction purchases",
      "A trade-based scheme in which the cash from car sales, with drug proceeds, returns to Lebanon through channels controlled by a terrorist organisation",
      "Under-invoicing of the cars to reduce import duties in Benin"
    ],
    answer: [2],
    explanation: "The US Attorney for the Southern District of New York alleged that at least USD 329 million was wired from Lebanese financial institutions, including the Lebanese Canadian Bank and two exchange houses, to US car buyers with few assets. The cars were shipped mainly to Cotonou, Benin, and the cash from their sale, together with drug proceeds, was moved to Lebanon through Hizballah-controlled channels. The complaint sought more than USD 480 million. Stolen vehicles is the runner-up, but cars bought at auction are not stolen, and the concern lies in where the sale proceeds go. Nothing points to tax evasion or misstated car values. The trucks are a decoy.",
    source: [
      { label: "US Attorney SDNY press release (15 Dec 2011) – Lebanese Canadian Bank complaint", url: "https://www.justice.gov/archive/usao/nys/pressreleases/December11/hizballahmoneylaunderingpr.pdf" }
    ] },

  { id: "TBML-019", domain: 1, topic: "TBML structural risk indicators", hy: false, difficulty: "medium",
    q: "A bank onboards Orion Global Trading, which says it imports industrial chemicals. Which findings are structural risk indicators of TBML under the FATF-Egmont 2021 risk indicators? (Choose two.)",
    options: [
      "Its website is mostly boilerplate text copied from other sites and shows little knowledge of the chemicals it trades",
      "Its accounts are audited each year by a mid-sized accounting firm",
      "It pays its suppliers mainly by letters of credit",
      "It has a trade credit insurance policy covering its main buyers",
      "Its name is almost identical to that of a well-known chemicals multinational, although it has no connection to that group"
    ],
    answer: [0, 4],
    explanation: "The FATF-Egmont 2021 risk indicators list, among structural indicators, an online presence that suggests business inconsistent with the stated line of business, such as a website of boilerplate material taken from other websites or showing a lack of knowledge of the product, and a name that copies or closely resembles that of a well-known corporation to appear connected to it. Annual audits, letters of credit used in the normal way and trade credit insurance are ordinary features of legitimate trading businesses. The indicators flag letters of credit only when used in unconventional ways, such as for unusually long or frequently extended periods.",
    source: [
      { label: "FATF-Egmont (2021) TBML Risk Indicators", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/Trade-based-money-laundering-indicators.html" }
    ] },

  { id: "TBML-020", domain: 1, topic: "TBML trade activity indicators – unreasonable profit margins", hy: false, difficulty: "hard",
    q: "Bexley Metals Trading was formed eight months ago and already trades about USD 20 million a month in copper cathodes, a market that normally needs large capital and long-standing supplier relationships. It buys at or above the London Metal Exchange price and resells within days at the same price or slightly below, so it shows almost no profit. Its purchases are funded by sudden third-party transfers rather than bank credit. The owner says the firm is 'buying market share' and has just hired a well-known metals analyst. What is the MOST likely assessment?",
    options: [
      "An aggressive but legitimate strategy to win market share",
      "Over-invoicing of exports to obtain larger export subsidies",
      "Phantom shipments, because the trades are too large for a new firm",
      "Trade being used as a vehicle to move value rather than to make profit, consistent with several TBML risk indicators"
    ],
    answer: [3],
    explanation: "The FATF-Egmont 2021 risk indicators include consistently unreasonable profit margins, such as importing at or above retail value or reselling at or below purchase price, purchases that clearly exceed the entity's economic capacity and are funded by sudden third-party transfers, and a newly formed entity suddenly trading at high volume in a sector with high barriers to entry. Taken together, these suggest the trades exist to move funds. The runner-up, a market share strategy, cannot explain unexplained third-party funding. There is no evidence of subsidies or that goods did not move. The analyst hire is a decoy.",
    source: [
      { label: "FATF-Egmont (2021) TBML Risk Indicators", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/Trade-based-money-laundering-indicators.html" }
    ] },

  { id: "TBML-021", domain: 3, topic: "Supply chain finance – due diligence on programme counterparties", hy: false, difficulty: "hard",
    q: "Your bank is setting up a payables finance programme for Marlow Retail Group, a long-standing corporate customer. Under the programme, 140 of Marlow's suppliers in nine countries can sell their approved invoices to the bank for early payment. The suppliers will have no accounts with the bank and will give it no instructions. The operations head proposes full CDD, including beneficial ownership verification, on every supplier before launch, which would delay the programme by a year. Marlow's CFO wants no checks on suppliers. According to the Wolfsberg Trade Finance Principles, what is the BEST approach?",
    options: [
      "Apply CDD to Marlow as the customer, and risk-based checks to the suppliers, such as names and addresses, sanctions screening and internal red-flag lists, with more review where risk requires",
      "Apply full CDD with beneficial ownership verification to all 140 suppliers before any invoice is financed",
      "Apply no checks to suppliers, because only Marlow is the bank's customer",
      "Ask Marlow to certify that its suppliers are compliant and rely on that certificate alone"
    ],
    answer: [0],
    explanation: "The Wolfsberg Trade Finance Principles (Appendix IV) say that in payables finance the buyer is designated as the customer and is subject to CDD, while the bank is not responsible for performing due diligence on every party to a trade transaction. They recommend risk-based checks on counterparties: collecting names and addresses, sanctions screening, review against internal red-flag lists, and further checks where needed. Full CDD on all suppliers is the runner-up, but the Principles do not require it for non-customer counterparties. No checks at all, or relying on the buyer's certificate, would leave sanctions and fraud risks unmanaged.",
    source: [
      { label: "Wolfsberg/ICC/BAFT Trade Finance Principles, Appendix IV (Open Account)", url: "https://db.wolfsberg-group.org/assets/5c770f68-6277-4443-931b-7750478f08e7/Trade%20Finance%20Principles.pdf" }
    ] },

  { id: "TBML-022", domain: 3, topic: "Trade finance controls for dual-use goods", hy: false, difficulty: "hard",
    q: "After an examiner noted that a dual-use shipment passed through its documentary credit unit unnoticed, a bank's head of trade proposes hiring a team of engineers to classify technically every item in every credit. The business head instead argues that dual-use goods are solely the exporter's and customs' responsibility, so the bank need do nothing. The bank handles 9,000 credits a year across many industries, and its sanctions screening already covers names and countries. What is the BEST response, consistent with the Wolfsberg Trade Finance Principles?",
    options: [
      "Hire the engineering team, because banks must determine the export control classification of all goods they finance",
      "Give trade staff guidance and regular training on common dual-use goods so they can spot obvious cases, screen against export control lists where known, and escalate concerns",
      "Accept the business head's view and remove dual-use goods from the bank's risk assessment",
      "Decline all credits involving machinery, electronics or chemicals"
    ],
    answer: [1],
    explanation: "The Wolfsberg Trade Finance Principles say banks may be able to identify obvious dual-use goods, but corporates, customs and export licensing agencies are better placed to decide. They also say it would be impracticable for banks to employ specialists who would effectively have to replicate scientific research facilities. Banks should give staff guidance and regular training on dual-use issues and the common types of dual-use goods, try to identify them wherever possible, and check against applicable export control lists if known. Hiring engineers is the runner-up, but the Principles call it impracticable. Ignoring the risk, or de-risking whole sectors, is not a risk-based response.",
    source: [
      { label: "Wolfsberg/ICC/BAFT Trade Finance Principles (sections 5.5 and 6.2)", url: "https://db.wolfsberg-group.org/assets/5c770f68-6277-4443-931b-7750478f08e7/Trade%20Finance%20Principles.pdf" }
    ] },

  { id: "TBML-023", domain: 3, topic: "Documentary credits – red flags for post-transaction monitoring", hy: true, difficulty: "medium",
    q: "A bank is designing post-transaction monitoring rules for its documentary credit (DC) portfolio. Which patterns are listed as red flags in the Wolfsberg Trade Finance Principles' DC appendix? (Choose three.)",
    options: [
      "Credits that are constantly amended or extended",
      "Credits that are issued subject to UCP 600",
      "Credits that are routinely cancelled or left unused",
      "Third parties funding all or part of the credit's value through just-in-time credits to the settlement account",
      "Credits that are confirmed by a second bank in the beneficiary's country"
    ],
    answer: [0, 2, 3],
    explanation: "The Wolfsberg Trade Finance Principles' table of DC red flags includes credits that are constantly amended or extended, credits that are routinely cancelled or unused, and third parties funding or part-funding the credit's value through just-in-time credits to the settlement account. Issuing credits subject to UCP 600 is standard market practice, and confirmation by a second bank is a normal risk mitigation tool, not an indicator of laundering.",
    source: [
      { label: "Wolfsberg/ICC/BAFT Trade Finance Principles, Appendix I (Documentary Credits)", url: "https://db.wolfsberg-group.org/assets/5c770f68-6277-4443-931b-7750478f08e7/Trade%20Finance%20Principles.pdf" }
    ] },

  { id: "TBML-024", domain: 4, topic: "Vessel screening – using the IMO number", hy: false, difficulty: "hard",
    q: "A trade finance analyst screens a bill of lading naming the tanker 'Ocean Pearl', flagged in Country R. The name returns no sanctions match. A maritime database shows that the vessel's name has changed twice in two years and that it has had three registered owners. A colleague recalls that a designated tanker called 'Aurora Star' had the same tonnage and builder. The customer says the cargo is urgent and offers a letter from the charterer confirming the vessel is 'clean'. What should the analyst do NEXT to confirm the vessel's identity?",
    options: [
      "Rely on the charterer's letter, since the vessel name returned no match",
      "Screen the vessel's former names only, because names are what sanctions lists record",
      "Check the vessel's IMO number against sanctions lists and the IMO database, because the number stays the same despite changes of name or owner",
      "Ask the customer to provide a new bill of lading using the vessel's former name"
    ],
    answer: [2],
    explanation: "The May 2020 maritime sanctions advisory explains that a vessel's IMO number is meant to be permanent, whatever changes occur in its name or ownership, that bad actors paint over names and IMO numbers, and that IMO numbers can be verified through the IMO's database. The Wolfsberg Trade Finance Principles include the vessel name among the details reviewed and screened when documents are presented. Screening former names is the runner-up, but names change and can be falsified, while the IMO number links every identity. A letter from an interested party is not independent verification, and asking for re-issued documents does not resolve the identity question.",
    source: [
      { label: "OFAC/State/USCG Sanctions Advisory for the Maritime Industry (May 2020)", url: "https://ofac.treasury.gov/media/37751/download?inline" },
      { label: "Wolfsberg/ICC/BAFT Trade Finance Principles", url: "https://db.wolfsberg-group.org/assets/5c770f68-6277-4443-931b-7750478f08e7/Trade%20Finance%20Principles.pdf" }
    ] },

  { id: "TBML-025", domain: 4, topic: "Investigating trade documents – independent verification of shipment", hy: true, difficulty: "hard",
    q: "Dunmore Commodities presents documents under an export letter of credit for 2,000 tonnes of sugar shipped on MV Harbor Wren from Port Q. The documents comply on their face. The analyst notices that the bill of lading's issue date is a public holiday at Port Q, the container numbers follow an unusual format, and the beneficiary has presented four similar shipments this quarter. The relationship manager notes that Dunmore is a top-20 client and offers to obtain a confirmation letter from Dunmore's own freight forwarder. What should the analyst do FIRST?",
    options: [
      "Accept the freight forwarder's confirmation letter that Dunmore will obtain",
      "Reject the documents as discrepant under the credit's terms",
      "File a suspicious activity report at once, before checking the shipment",
      "Verify the voyage and container numbers through an independent vessel and voyage database or the International Maritime Bureau"
    ],
    answer: [3],
    explanation: "The Wolfsberg Trade Finance Principles note that sea transport can be verified using a well-known third-party vessel and voyage history database, or by checking container numbers or voyage details with the International Maritime Bureau, in line with the bank's risk-based approach. Independent verification is the right first step to test whether the shipment is real. The forwarder's letter is the runner-up, but it is arranged by the customer and is not independent. The documents comply on their face, so rejecting them as discrepant has no basis. A report may well follow, but first verifying the facts gives a better-grounded decision and a stronger narrative.",
    source: [
      { label: "Wolfsberg/ICC/BAFT Trade Finance Principles (section 1.9)", url: "https://db.wolfsberg-group.org/assets/5c770f68-6277-4443-931b-7750478f08e7/Trade%20Finance%20Principles.pdf" }
    ] }
]);
