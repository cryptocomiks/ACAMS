// Batch: practical cases on fraud and corruption as money laundering predicates
// (elder exploitation, embezzlement, kickbacks, bid rigging, FCPA lessons, synthetic ID, check fraud,
// APP and romance scams, account takeover, health care and benefits fraud, ECCTA, compliance response).
// Every keyed answer checked against the primary source listed in `source` (October 2026).
window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "FRAUD-001", domain: 1, topic: "Elder financial exploitation: elder theft through a power of attorney (FIN-2022-A002)", hy: true, difficulty: "hard",
    q: "Ruth Calloway, 86, has banked with Ashgrove Community Bank for 40 years. In March 2026 her nephew Dean presented a power of attorney that Ruth signed two weeks after she moved into a memory-care facility, and he was added to her accounts. Since then her pension has kept arriving, but $61,000 has gone out through checks payable to Dean, cash withdrawals at ATMs near his home, and payments on a credit card opened in Ruth's name in April. When the branch manager calls Ruth, Dean answers her phone and says she is 'too confused to talk'. Ruth has never sent money abroad, and nobody has contacted her online. Which typology is MOST likely?",
    options: [
      "Elder theft by a trusted person who is misusing a power of attorney to take control of the victim's money",
      "An elder scam, in which a stranger posing as a relative persuades the victim to send money for an emergency",
      "Synthetic identity fraud, in which a new credit card was opened with a mix of real and invented identity data",
      "A romance scam, in which the victim was groomed online and is now being used as a money mule by others"
    ],
    answer: [0],
    explanation: "FinCEN's 2022 advisory (FIN-2022-A002) splits elder financial exploitation into elder theft, committed by known and trusted persons such as family members and caregivers, and elder scams, committed by strangers, often abroad, who promise a benefit. It says elder theft often exploits power of attorney arrangements to liquidate savings, steal benefit income and max out credit cards in the victim's name. Its red flags include a sudden change of power of attorney when the customer has diminished capacity, and the bank being unable to speak directly with the older customer. The elder scam option is the runner-up, but Dean is a real, known relative, not an impostor. The card was opened in Ruth's real identity, so this is not synthetic identity fraud.",
    source: [
      { label: "FinCEN Advisory FIN-2022-A002 (June 2022) – Elder financial exploitation", url: "https://www.fincen.gov/sites/default/files/advisory/2022-06-15/FinCEN%20Advisory%20Elder%20Financial%20Exploitation%20FINAL%20508.pdf" }
    ]
  },
  {
    id: "FRAUD-002", domain: 1, topic: "Corruption predicates: embezzlement of public funds vs bribery (UNCAC Arts. 15 and 17)", hy: false, difficulty: "hard",
    q: "Tomas Rebane is finance director of the Port Authority of Country K, a state-owned body. Over 14 months the Port Authority pays KR 4.2 million to Seabright Marine Services for 'dredging surveys'. Seabright was formed a month before the first payment, has no vessels or staff, and is owned by Tomas's wife. Port engineers say no surveys were ever carried out. Seabright moves the money to a brokerage account and to the purchase of a villa abroad. No supplier or other private party pays anything to Tomas or to Seabright. Which predicate offence BEST describes how the funds were generated?",
    options: [
      "Bribery of a public official, because a company linked to him received payments connected to his public role",
      "Embezzlement or diversion of public funds by a public official, which were entrusted to him by his position",
      "Trade-based money laundering, because the payments were made against invoices for services never provided",
      "Tax evasion by his wife's company, because the income was moved abroad without being declared to anyone"
    ],
    answer: [1],
    explanation: "Article 17 of the UN Convention against Corruption requires states to criminalise the 'embezzlement, misappropriation or other diversion by a public official' of public or private funds 'entrusted to the public official by virtue of his or her position', for his benefit or another's. Tomas diverts the Port Authority's own money to his wife's sham company. Bribery (Article 15) is the runner-up, but it needs someone to offer or give the official an undue advantage to influence him, and here no third party pays anything. Fake service invoices do not make this trade-based laundering, and any tax issue is secondary. Article 17 is mandatory ('shall adopt'), while embezzlement in the private sector (Article 22) is one that states 'shall consider'.",
    source: [
      { label: "UN Convention against Corruption, Arts. 15, 17 and 22", url: "https://www.unodc.org/documents/treaties/UNCAC/Publications/Convention/08-50026_E.pdf" }
    ]
  },
  {
    id: "FRAUD-003", domain: 1, topic: "Investment fraud: Ponzi scheme vs pyramid scheme", hy: false, difficulty: "hard",
    q: "Lakeshore Wealth Club LLC opened a business account at Marlow Bank 18 months ago. Its owner, Vincent Oduya, tells members their money is placed in 'short-term trade finance' that pays a guaranteed 3% a month. The account receives about $1.1 million a month from more than 400 individuals, mostly retirees from the same church network. Each month it pays about $900,000 in round 'interest' amounts to earlier members and sends the rest to Vincent's personal account and a car dealer. There are no payments to any trade finance counterparty or broker, and no member is paid for bringing in others. In the last two months new deposits have fallen and several members have asked for their principal back. Which scheme is MOST likely?",
    options: [
      "A pyramid scheme, in which participants mainly earn money by recruiting new members who pay to join",
      "An advance-fee scheme, in which victims pay fees upfront for a loan or prize that never arrives",
      "A Ponzi scheme, in which the returns paid to earlier investors come from new investors' money",
      "Trade-based money laundering, in which members' funds settle overvalued trade invoices abroad"
    ],
    answer: [2],
    explanation: "The SEC's Investor.gov defines a Ponzi scheme as an investment fraud that pays existing investors with funds collected from new investors, often promising high returns with little or no risk. With little or no legitimate earnings, it needs a constant flow of new money and tends to collapse when recruiting slows or many investors cash out, as is now happening. A pyramid scheme is the runner-up, but in a pyramid participants are paid mainly for recruiting new members, and here nobody is paid for recruiting. No upfront fees are charged for a promised loan or prize, and there are no trade flows at all.",
    source: [
      { label: "SEC Investor.gov – Ponzi schemes", url: "https://www.investor.gov/introduction-investing/investing-basics/glossary/ponzi-schemes" },
      { label: "SEC Investor.gov – Pyramid schemes", url: "https://www.investor.gov/introduction-investing/investing-basics/glossary/pyramid-schemes" }
    ]
  },
  {
    id: "FRAUD-004", domain: 1, topic: "Kickbacks routed to a relative: advantage to a third party (UK Bribery Act ss.1-2) and the SAR decision", hy: true, difficulty: "hard",
    q: "Northgate Bank in London holds the account of Pell Advisory Ltd, a one-person consultancy owned by Hannah Pell. Her husband Gareth is head of procurement at Hollins Foods plc, a UK supermarket chain. Since Gareth took the job in 2025, Pell Advisory has received £6,500 every month from Brightfield Packaging Ltd for 'category insight reports', and Brightfield's share of Hollins's packaging contracts has grown from 10% to 60%. Hannah has no packaging background and has never produced a report when asked. When the bank asks about the payments, Hannah says: 'Gareth never receives a penny, the money is my company's declared income, and nobody has been charged with anything.' How should Northgate's MLRO BEST assess the activity?",
    options: [
      "As no bribery, because Gareth personally receives nothing and the fees are the declared income of a separate company",
      "As bribery by Brightfield only, because Gareth has not himself accepted any payment from the supplier",
      "As possible bribery, because the advantage can go to someone else, so the fees may be criminal property and a SAR may be needed",
      "As not yet reportable, because the fees cannot be criminal property until a court convicts someone of bribery"
    ],
    answer: [2],
    explanation: "Under the UK Bribery Act 2010, it does not matter whether the advantage is given to the person who performs the function or to someone else (s.1(4)), or whether the person being bribed accepts it directly or through a third party, for his own benefit or another's (s.2(6)). Performing a job for a business is a relevant function where good faith, impartiality or trust is expected (s.3). Fees routed to a spouse's company with no real work, while that supplier's share of contracts grows, therefore suggest bribery on both sides. The runner-up is that Gareth receives nothing, but the Act expressly covers advantages that go to another person. Under POCA s.340(3), property is criminal property if it represents a benefit from criminal conduct and the person knows or suspects that it does. Suspicion is enough, so no conviction is needed before a SAR to the NCA, and declaring the income for tax does not make it clean.",
    source: [
      { label: "UK Bribery Act 2010, s.1 (offences of bribing another person)", url: "https://www.legislation.gov.uk/ukpga/2010/23/section/1" },
      { label: "UK Bribery Act 2010, s.2 (offences relating to being bribed)", url: "https://www.legislation.gov.uk/ukpga/2010/23/section/2" },
      { label: "UK Bribery Act 2010, s.3 (function or activity to which bribe relates)", url: "https://www.legislation.gov.uk/ukpga/2010/23/section/3" },
      { label: "Proceeds of Crime Act 2002, s.340 (criminal property)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/340" }
    ]
  },
  {
    id: "FRAUD-005", domain: 1, topic: "Procurement fraud: bid rigging and compensation payments (OECD bid rigging guidelines)", hy: false, difficulty: "hard",
    q: "Corvane Civil Works banks with Elmstead Bank. In June 2026 it won the City of Branford's road resurfacing tender at a price 18% above the city's own estimate. Two days after the first city payment arrived, Corvane paid 'subcontracting services' invoices to Delta Paving and Ridgeline Asphalt, the two losing bidders on the same tender. Neither firm sent crews or equipment to the site. Public records show that over two years Corvane, Delta and Ridgeline have taken turns winning city tenders, with the other two always bidding higher. The city's procurement officer has no accounts at Elmstead, and no payments to any city employee appear. Which typology is MOST likely?",
    options: [
      "Bid rigging, with the losing bidders compensated through false subcontracting invoices",
      "Bribery of the procurement officer, with payments routed to him through the other firms",
      "Invoice fraud against Corvane, with its own staff paying fictitious suppliers for gain",
      "Contract splitting, with the city dividing a project to stay under approval thresholds"
    ],
    answer: [0],
    explanation: "The OECD Guidelines for Fighting Bid Rigging in Public Procurement explain that competitors who agree not to bid, or to submit losing 'cover' bids, may receive subcontracts or compensation payments from the designated winner, often through fraudulent invoices for subcontracting work that never takes place. Its warning signs include firms taking turns to win and the winner repeatedly subcontracting to unsuccessful bidders. Bribery of the procurement officer is the runner-up, but the money goes to rival bidders, not to any official, and the rotation pattern points to collusion between bidders. Staff invoice fraud would not involve the rivals in a rotation, and contract splitting is done by the buyer, not the bidders.",
    source: [
      { label: "OECD Guidelines for Fighting Bid Rigging in Public Procurement (2009)", url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2009/02/guidelines-for-fighting-bid-rigging-in-public-procurement_d4a5f7a8/8cfeafbb-en.pdf" }
    ]
  },
  {
    id: "FRAUD-006", domain: 1, topic: "Case lessons: Deutsche Bank FCPA (2021) - business development consultants as bribe conduits", hy: true, difficulty: "hard",
    q: "Kestrel Bank's Gulf coverage team asks compliance to approve Marwa Consulting as a 'business development consultant' on a mandate from a state-owned sovereign wealth fund. Marwa Consulting is owned by the wife of the fund's chief investment officer, who decides which banks win the mandate. The team says the officer will 'move his business elsewhere' if Marwa is not paid, and proposes a fee of 2% of the bank's fees. Marwa has no staff and no other clients. The team mentions that the bank already paid Marwa $400,000 last year without a signed contract or any invoices. Senior management backs the deal. What should compliance do?",
    options: [
      "Approve the engagement, provided Marwa signs a contract and submits detailed invoices for each future payment",
      "Approve the engagement, because a sovereign fund's officer is a commercial counterpart, not a public official",
      "Refuse the engagement, escalate it, and review last year's payments for possible bribery and reporting",
      "Refuse the engagement but leave last year's payments alone, because that earlier deal has already closed"
    ],
    answer: [2],
    explanation: "In its January 2021 FCPA resolution, Deutsche Bank admitted paying business development consultants (BDCs) who acted as proxies for client decision-makers, including a company owned by the wife of a client decision-maker, used to pass over $1 million in bribes. Payments were made without invoices or evidence of services, and the bank failed to conduct meaningful due diligence on BDCs. Approving with a contract and invoices is the runner-up, but paperwork cannot cure a consultant whose only role is to channel money to the decision-maker's family, and Deutsche Bank staff created false justifications for exactly such payments. Employees of a state-owned fund can be foreign officials, and the earlier uninvoiced payment must be investigated, not ignored.",
    source: [
      { label: "DOJ press release (Jan 2021) – Deutsche Bank FCPA and fraud resolution", url: "https://www.justice.gov/archives/opa/pr/deutsche-bank-agrees-pay-over-130-million-resolve-foreign-corrupt-practices-act-and-fraud" }
    ]
  },
  {
    id: "FRAUD-007", domain: 1, topic: "Case lessons: Gunvor (2024) - bribes via intermediaries and offshore shells through US banks", hy: false, difficulty: "hard",
    q: "Hudson Clearing Bank provides US dollar correspondent services to Lindqvist Bank in Geneva. Its monitoring flags 31 payments over three years, totalling $22 million, from Lindqvist's client Arvos Trading SA, a Swiss oil trader, to two companies in Panama and the British Virgin Islands. The references read 'commission - agency agreement'. Open sources show Arvos won oil supply contracts from Country E's state oil company without a public tender, through state-owned entities of a third country that never took delivery of the oil. The Panamanian payee's director is a former manager of the state oil company. The amounts vary and are not round. Which fact MOST strongly suggests that the 'commissions' are bribes paid through intermediaries?",
    options: [
      "The payments are in US dollars and clear through a US correspondent account",
      "The payment amounts vary and are not round, as is common for real commissions",
      "The payee companies are incorporated in Panama and the British Virgin Islands",
      "Untendered contracts won via front entities, with an ex-official behind the payee"
    ],
    answer: [3],
    explanation: "In March 2024 Gunvor pleaded guilty to conspiring to violate the FCPA after paying more than $97 million to intermediaries, knowing some would be used to bribe officials of Ecuador's state oil company. State-owned entities acted as front companies so that Gunvor could avoid competitive bidding, and the bribes were routed through US banks using shell companies in Panama and the British Virgin Islands. Offshore payees are the runner-up: they are a genuine risk factor, but many legitimate traders use such companies, while untendered contracts obtained through fronts, paid to a vehicle run by an ex-insider, tie the money to corrupt advantage. Dollar clearing is normal for oil trades, and irregular amounts do not show legitimacy.",
    source: [
      { label: "DOJ press release (Mar 2024) – Gunvor pleads guilty, pays over $661 million", url: "https://www.justice.gov/archives/opa/pr/commodities-trading-company-will-pay-over-661m-resolve-foreign-bribery-case" }
    ]
  },
  {
    id: "FRAUD-008", domain: 1, topic: "Case lessons: JPMorgan APAC 'Sons and Daughters' (2016) - jobs as bribes", hy: false, difficulty: "hard",
    q: "Brenmoor Capital, an investment bank, is competing to lead the IPO of a state-owned shipping group in Country T. The group's chairman, a senior government official, sends his nephew's CV to a Brenmoor managing director and says he 'values partners who support young talent'. HR rates the nephew below the bar for analyst roles. The deal team proposes creating a special 'strategy associate' role for him in London at a standard analyst salary. To clear the hiring review, the team submits the bank's referral-hire questionnaire with the pre-filled answer 'no expected business benefit'. The nephew himself holds no public office. What is the MAIN financial crime risk?",
    options: [
      "Bribery, because a job for an official's relative given to win the IPO is a thing of value",
      "Bribery only if the nephew himself holds public office or can influence the IPO decision",
      "An employment law risk, since unequal hiring standards may expose the bank to claims",
      "A sanctions risk, because a state-owned group might be owned by a designated government"
    ],
    answer: [0],
    explanation: "In 2016 JPMorgan's Hong Kong investment bank paid a $72 million penalty under a non-prosecution agreement for its 'Sons and Daughters Program', which hired relatives and friends of Chinese officials to win banking mandates. DOJ called it 'bribery by another name' and noted that staff misused compliance questionnaires, using a template with pre-filled answers that there was 'no expected benefit' from the hire. The runner-up is wrong because the thing of value is given to the relative in order to influence the official who awards the business; the relative need not be an official. Employment and sanctions points do not address the quid pro quo.",
    source: [
      { label: "DOJ press release (Nov 2016) – JPMorgan APAC $72 million penalty for corrupt hiring scheme", url: "https://www.justice.gov/archives/opa/pr/jpmorgan-s-investment-bank-hong-kong-agrees-pay-72-million-penalty-corrupt-hiring-scheme" }
    ]
  },
  {
    id: "FRAUD-009", domain: 1, topic: "Foreign Extortion Prevention Act (FEPA): demand-side foreign bribery", hy: false, difficulty: "medium",
    q: "A US company's sales director reports that a customs official in Country M demanded $50,000 to release the company's equipment. The company refused and reported the demand. Under the US Foreign Extortion Prevention Act (FEPA), now codified at 18 U.S.C. § 1352, which statement is correct?",
    options: [
      "It makes it a federal crime for the foreign official to corruptly demand or accept a bribe from a US issuer or domestic concern",
      "It allows the company to pay demands below $10,000 without liability, provided the payment is accurately recorded",
      "It applies only if the foreign official is physically in the United States when making or receiving the demand",
      "It is a civil statute enforced by the SEC against issuers whose employees receive demands for bribes abroad"
    ],
    answer: [0],
    explanation: "FEPA, enacted in December 2023 and placed at 18 U.S.C. § 1352 by a 2024 amendment, makes it unlawful for a foreign official to corruptly demand, seek, receive or accept anything of value from an issuer, a domestic concern, or any person while in US territory, in return for business-related influence. Penalties are fines of up to $250,000 or three times the bribe and up to 15 years in prison, and the offence has extraterritorial jurisdiction. It complements the FCPA, which covers the supply side. Presence in the United States is only one route (for 'any person'), and there is no small-payment exemption or SEC civil scheme.",
    source: [
      { label: "18 U.S.C. § 1352 – Demands by foreign officials for bribes (GovInfo, US Code)", url: "https://www.govinfo.gov/link/uscode/18/1352?link-type=html" },
      { label: "18 U.S.C. § 1352 (Cornell LII, with amendment notes)", url: "https://www.law.cornell.edu/uscode/text/18/1352" }
    ]
  },
  {
    id: "FRAUD-010", domain: 1, topic: "Grand corruption: StAR 'Puppet Masters' findings on corporate vehicles", hy: false, difficulty: "medium",
    q: "The World Bank/UNODC Stolen Asset Recovery Initiative (StAR) report 'The Puppet Masters' (2011) reviewed some 150 grand corruption cases. Which features did it find in the vast majority of them? (Choose two.)",
    options: [
      "The vehicle used was mainly a trust or foundation rather than a company",
      "The corporate vehicle used to hide the money trail was a company or corporation",
      "The proceeds were mainly moved across borders as physical cash by couriers",
      "The official always set up the vehicle personally, without any intermediary",
      "The proceeds and instruments of corruption were funds held in a bank account"
    ],
    answer: [1, 4],
    explanation: "Puppet Masters found that in the vast majority of the cases reviewed a corporate vehicle was misused to hide the money trail, the vehicle was a company or corporation, the proceeds consisted of funds in a bank account, and, where ownership information was available, the vehicle was established or managed by a professional intermediary. Trusts and foundations were used, but companies dominated. Cash couriers and self-made structures without intermediaries run against its findings, which is why it calls for due diligence by banks, lawyers, accountants and trust and company service providers.",
    source: [
      { label: "StAR, The Puppet Masters (2011), executive summary", url: "https://star.worldbank.org/sites/star/files/puppetmastersv1.pdf" }
    ]
  },
  {
    id: "FRAUD-011", domain: 1, topic: "Synthetic identity fraud: creation methods (fabrication, manipulation, compilation)", hy: false, difficulty: "hard",
    q: "Fenwick Card Services reviews a credit line that defaulted after being maxed out. The applicant, Marcus Lyle, applied under his true name and date of birth but gave a Social Security number that differs by two digits from his own, because his real SSN carries a poor credit history. The file shows a credit report created by an earlier rejected application, followed by approvals at other lenders, and the line was maxed out after 14 months. He used his own home address and mobile number. No one has reported identity theft. Under the Federal Reserve's synthetic identity fraud toolkit, which creation method does this BEST illustrate?",
    options: [
      "Fabrication, because all of the identity elements were invented with no real data",
      "Manipulation, because limited changes were made to a real person's identity elements",
      "Compilation, because a real SSN was combined with a made-up name and mailing address",
      "True-name identity theft, because another real person's name and birth date were used"
    ],
    answer: [1],
    explanation: "The Federal Reserve toolkit describes three creation methods. Fabrication invents every element; manipulation makes limited modifications to a real identity, its example being a person using his own name and date of birth with an SSN altered by a few digits; compilation combines real and fake elements, such as a person's real SSN with a made-up name and a PO box. Compilation is the runner-up because real and false data are mixed, but here the real elements are the applicant's own and only the SSN was tweaked, which is the toolkit's manipulation example. The toolkit also notes that even a rejected application creates a credit file that the fraudster then builds on.",
    source: [
      { label: "Federal Reserve Synthetic Identity Fraud Mitigation Toolkit – How is a synthetic identity created?", url: "https://fedpaymentsimprovement.org/wp-content/uploads/how-is-a-synthetic-identity-created.pdf" }
    ]
  },
  {
    id: "FRAUD-012", domain: 1, topic: "Mail theft-related check fraud: deposit-side red flags (FIN-2023-Alert003)", hy: true, difficulty: "medium",
    q: "Tyler Banks, 21, has had a student checking account at Riverbend Bank for three years, used only for card spending and a monthly $400 transfer from his parents. Over five days in September 2026 he makes mobile deposits of four checks totalling $18,700, each drawn on a different business account in another state. Within hours of each deposit becoming available, he withdraws cash at ATMs and sends P2P payments to two people he has never paid before. In the deposit images, two of the checks are on stock that looks noticeably different from genuine checks of the same issuing banks. None of the deposits is cash. Which facts are red flags named in FinCEN's 2023 mail theft-related check fraud alert? (Choose two.)",
    options: [
      "A customer with no history of check deposits suddenly deposits checks and then quickly withdraws or moves the funds",
      "The deposits total more than $10,000 within five days, which should have triggered a currency transaction report",
      "The customer used the mobile deposit channel, which on its own marks the checks as likely stolen from the mail",
      "Some checks are on noticeably different check stock from that used for genuine checks of the issuing bank",
      "The customer is a student whose account regularly receives small transfers from his parents"
    ],
    answer: [0, 3],
    explanation: "FinCEN's February 2023 alert, issued with the US Postal Inspection Service, lists as red flags an existing customer with no history of check deposits who suddenly deposits checks and withdraws or transfers the funds, sudden abnormal check deposits (often electronic) followed by rapid withdrawal or transfer, and checks on noticeably different check stock from that used by the issuing bank and for known legitimate transactions. It asks filers to use the key term FIN-2023-MAILTHEFT, check SAR field 34(d), and refer victims to USPIS. CTRs apply only to currency, so check deposits do not trigger one. Mobile deposit is a common channel for these schemes but is not suspicious on its own, and parental transfers are ordinary.",
    source: [
      { label: "FinCEN Alert FIN-2023-Alert003 (Feb 2023) – Mail theft-related check fraud", url: "https://www.fincen.gov/sites/default/files/shared/FinCEN%20Alert%20Mail%20Theft-Related%20Check%20Fraud%20FINAL%20508.pdf" }
    ]
  },
  {
    id: "FRAUD-013", domain: 1, topic: "Romance-investment scam via the victim's own crypto account: scope of UK APP reimbursement", hy: true, difficulty: "hard",
    q: "In January 2026 Moira Keane, 58, a UK customer of Tamworth Bank, met 'Daniel' on a dating app. After weeks of messages he coached her to 'invest' alongside him. She sent three Faster Payments totalling £24,000 from her Tamworth current account to her own verified account at a UK-registered cryptoasset exchange, bought USDT, and sent it to a wallet on Daniel's 'trading platform', which then disappeared. She is not a vulnerable customer and reported the scam five weeks later. She now asks Tamworth to reimburse her under the APP scams reimbursement requirement. Which assessment is MOST accurate?",
    options: [
      "Tamworth must reimburse her in full within five business days, because romance-investment scams are in scope",
      "Tamworth must reimburse her less a £100 excess, and recover half from the exchange as the receiving firm",
      "Tamworth may refuse, but only on the ground that she was grossly negligent about the risks of crypto investing",
      "The payments are outside the requirement, as they went to an account she controlled and the loss happened in crypto"
    ],
    answer: [3],
    explanation: "The PSR's consolidated policy statement (PS25/5) says the requirement covers Faster Payments and CHAPS payments received in a UK account 'not controlled by the consumer'. It expressly does not apply to payments across other systems, for example where a consumer sends funds to their own account at a crypto exchange and then pays a fraudster in cryptocurrency. The gross negligence option is the runner-up, but that exception (the consumer standard of caution) only matters for in-scope payments and is a high bar; here the payments are out of scope. Tamworth should still handle her complaint fairly and report the fraud, but mandatory reimbursement and the 50:50 split do not apply.",
    source: [
      { label: "PSR PS25/5 (May 2025) – APP scams reimbursement requirement: consolidated policy statement", url: "https://www.psr.org.uk/media/rhelv4op/ps25-5-app-scams-reimbursement-consolidated-policy-statement-may-2025.pdf" }
    ]
  },
  {
    id: "FRAUD-014", domain: 1, topic: "Account takeover vs computer intrusion (FIN-2011-A016)", hy: false, difficulty: "hard",
    q: "Harlow Dental Supply LLC, a business customer of Pinecrest Bank, reports that $146,000 left its account overnight in two ACH batches and one wire to new payees in three states. The investigation shows that its bookkeeper's PC was infected with banking malware that captured her online banking credentials. Using them, the attackers first changed the account's contact email and phone number, then added the new payees. Pinecrest's own systems were not breached, and Harlow neither authorised nor knew about the payments. The bank also recently moved its online banking platform to a new vendor. How is this activity BEST classified?",
    options: [
      "Computer intrusion, because malware was used to reach systems connected to the bank",
      "Business email compromise, because the attackers changed the customer's contact email",
      "Account takeover, because the customer was the target and its funds moved without authority",
      "Authorised push payment fraud, because the payments came from the customer's own profile"
    ],
    answer: [2],
    explanation: "FinCEN's account takeover advisory (FIN-2011-A016) says account takeover differs from other computer intrusions because the customer, not the financial institution, is the primary target, and the goal is to steal the customer's funds. Computer intrusion is the runner-up, but it means gaining access to the institution's own computer systems, which did not happen here. The advisory's warning signs include changes to customer and account profiles, clustered ACH transactions in different areas and sudden wires, and it asks filers to use the term 'account takeover fraud' in the SAR narrative. No fraudulent email induced the customer to pay (so not BEC), and the customer did not authorise the payments (so not APP fraud). The platform migration is a decoy.",
    source: [
      { label: "FinCEN Advisory FIN-2011-A016 (Dec 2011) – Account takeover activity", url: "https://www.fincen.gov/sites/default/files/shared/FIN-2011-A016.pdf" }
    ]
  },
  {
    id: "FRAUD-015", domain: 1, topic: "Health care fraud: straw-owned DME companies and stolen beneficiary identities (2025 takedown)", hy: true, difficulty: "hard",
    q: "In early 2026 Cobalt Medical Supply LLC, a long-dormant durable medical equipment company that banks with Westfield Bank, is bought by Andrei Volkan, who arrived in the United States two months earlier and gives a shared-office address. Within eight weeks Cobalt's monthly Medicare deposits rise from $15,000 to $6.8 million, nearly all for urinary catheters billed for patients in all 50 states. Cobalt has no warehouse lease or shipping costs, and its payroll is under $5,000 a month. Each day most of the money is wired to companies in Estonia and Cyprus or sent to a crypto exchange. The relationship manager says the new owner is 'very responsive' and the account is profitable. What is the MOST likely scheme?",
    options: [
      "Health care fraud using a straw owner and stolen patient identities, with the proceeds laundered abroad",
      "Legitimate fast growth after an acquisition, with profits sent to the new owner's foreign holding firms",
      "Trade-based money laundering, with catheters exported at inflated prices to related firms in Europe",
      "Medicare billing errors by an inexperienced new owner, which call for training rather than a SAR"
    ],
    answer: [0],
    explanation: "DOJ's June 2025 National Health Care Fraud Takedown described Operation Gold Rush: a transnational organisation used foreign straw owners to buy dozens of medical supply companies and submitted $10.6 billion in fraudulent Medicare claims for urinary catheters and other equipment, using stolen identities of over one million Americans in all 50 states. Proceeds were laundered into cryptocurrency and shell companies abroad, and a banker who helped launder the funds through a US bank was among those arrested. Growth after an acquisition is the runner-up, but a supplier with no warehouse, shipping costs or staff cannot be delivering millions of dollars of catheters. Nothing is exported, and the pattern is too deliberate to be billing errors.",
    source: [
      { label: "DOJ press release (June 2025) – 2025 National Health Care Fraud Takedown", url: "https://www.justice.gov/opa/pr/national-health-care-fraud-takedown-results-324-defendants-charged-connection-over-146" }
    ]
  },
  {
    id: "FRAUD-016", domain: 1, topic: "Benefits fraud: unemployment insurance red flags (FIN-2020-A007)", hy: false, difficulty: "medium",
    q: "In 2021 an analyst at Summit Ridge Bank reviews the account of Darnell Price, who has always lived and worked in Ohio. Over six weeks the account receives unemployment insurance (UI) payments from Ohio, Nevada and Arizona, several of them in names other than Darnell's. Most of the money is withdrawn at ATMs or sent through a P2P app soon after it arrives. Darnell lost his warehouse job in early 2021, and he pays his rent and utilities from the account by debit card. Which facts are red flags of UI fraud listed in FinCEN's advisory FIN-2020-A007? (Choose two.)",
    options: [
      "Darnell received a UI payment from Ohio shortly after losing his job there",
      "The UI payments were received by direct deposit rather than by paper check",
      "UI payments arrive from states other than the one where he lives or has worked",
      "He pays his rent and utilities from the account using his debit card",
      "UI payments arrive in the names of people other than the accountholder"
    ],
    answer: [2, 4],
    explanation: "FinCEN's October 2020 advisory lists as red flags UI payments from a state other than the one where the customer lives or has worked, multiple state UI payments in the same period, UI payments in the name of someone other than the accountholder, and quick withdrawal or transfer of the funds, for example through P2P apps. It asks filers to use the key term 'COVID19 UNEMPLOYMENT INSURANCE FRAUD FIN-2020-A007' and SAR field 34(z). An Ohio payment after losing an Ohio job is expected, direct deposit is the normal channel, and paying household bills by card is ordinary spending.",
    source: [
      { label: "FinCEN Advisory FIN-2020-A007 (Oct 2020) – Unemployment insurance fraud", url: "https://www.fincen.gov/sites/default/files/advisory/2020-10-13/Advisory%20Unemployment%20Insurance%20COVID%2019%20508%20Final.pdf" }
    ]
  },
  {
    id: "FRAUD-017", domain: 1, topic: "UK failure to prevent fraud (ECCTA s.199): UK nexus for an overseas bank", hy: true, difficulty: "hard",
    changed: "ECCTA failure to prevent fraud offence in force 1 September 2025",
    q: "Alpenrhein Privatbank AG is incorporated in Switzerland and has no UK branch or subsidiary. It has 1,400 employees and turnover far above £36 million. In November 2025 a Zurich-based relationship manager phones retired UK residents and falsely tells them that the bank's in-house fund guarantees 9% a year, to boost the fund's inflows; several invest. Separately, staff at the bank's Singapore subsidiary mislead Singapore clients about fees on local products, with no UK connection. Alpenrhein has never reviewed its fraud prevention procedures. Under the UK failure to prevent fraud offence in section 199 of the Economic Crime and Corporate Transparency Act 2023, what is Alpenrhein's MOST likely position?",
    options: [
      "No exposure for either matter, because it is not incorporated in the UK and has no UK establishment",
      "Exposure for the fraud on UK investors only, unless it proves reasonable fraud prevention procedures",
      "Exposure for both matters, because it is a large organisation and the size test covers its whole group",
      "Exposure for the Singapore matter only, because the UK calls were the manager's own personal crime"
    ],
    answer: [1],
    explanation: "The offence has applied since 1 September 2025 to large organisations meeting two of three tests (over 250 employees, over £36 million turnover, over £18 million assets), measured across the whole organisation. Home Office guidance says it needs a UK nexus, meaning an act of the fraud took place in the UK or the gain or loss occurred there; an overseas organisation can be prosecuted if its employee commits fraud targeting UK victims. Section 199 applies to a relevant body wherever incorporated. The fraud was meant to benefit the bank, and its defence is to prove reasonable prevention procedures (or that none could reasonably be expected), which a never-reviewed programme is unlikely to show. Exposure for both matters is the runner-up: the size test does cover the whole group, but the guidance says the offence does not apply to fraud committed abroad with no UK nexus, as in Singapore.",
    source: [
      { label: "Economic Crime and Corporate Transparency Act 2023, s.199", url: "https://www.legislation.gov.uk/ukpga/2023/56/section/199" },
      { label: "Home Office guidance to organisations on the failure to prevent fraud offence (ECCTA 2023)", url: "https://www.gov.uk/government/publications/offence-of-failure-to-prevent-fraud-introduced-by-eccta/economic-crime-and-corporate-transparency-act-2023-guidance-to-organisations-on-the-offence-of-failure-to-prevent-fraud-accessible-version" }
    ]
  },
  {
    id: "FRAUD-018", domain: 1, topic: "Health care kickbacks: Anti-Kickback Statute vs Stark law", hy: false, difficulty: "hard",
    q: "Bayline Pharmacy LLC, a customer of Coastway Bank, fills prescriptions for compounded pain creams billed to Medicare. Every week it pays Apex Patient Outreach LLC 40% of the Medicare money received for each prescription that Apex 'generated'. Apex then makes cash withdrawals and sends payments to two telemedicine doctors who signed the prescriptions without seeing the patients. Bayline's owner tells the bank that paying marketers a share of sales is 'standard commission practice in retail'. Bayline's state licence is current and its taxes are paid. Which assessment is MOST accurate?",
    options: [
      "The payments are ordinary marketing commissions, lawful because Bayline holds a valid licence",
      "The payments may be illegal kickbacks for referrals of federal health care business, a felony",
      "The payments raise only a civil Stark law issue, because doctors referred patients to a pharmacy",
      "The payments are only a tax matter, because the cash paid to the doctors may go unreported"
    ],
    answer: [1],
    explanation: "The Anti-Kickback Statute (42 U.S.C. § 1320a-7b(b)) makes it a felony to knowingly and willfully offer, pay, solicit or receive remuneration to induce or reward referrals of items or services paid by a federal health care program. HHS-OIG notes that while some industries may reward referrals, in federal health care programs 'paying for referrals is a crime', and the law covers both payers and recipients. The Stark law is the runner-up, but it is a separate rule on physician referrals to entities with which the physician has a financial relationship, and it does not displace criminal AKS liability. A licence or paid taxes does not make kickbacks lawful.",
    source: [
      { label: "42 U.S.C. § 1320a-7b(b) – Anti-Kickback Statute (Cornell LII)", url: "https://www.law.cornell.edu/uscode/text/42/1320a-7b" },
      { label: "HHS-OIG – Fraud and abuse laws (AKS and Stark)", url: "https://oig.hhs.gov/compliance/physician-education/fraud-abuse-laws/" }
    ]
  },
  {
    id: "FRAUD-019", domain: 1, topic: "Elder scams: emergency 'grandparent' scam vs government imposter scam (FIN-2022-A002)", hy: false, difficulty: "hard",
    q: "Evelyn Shaw, 79, comes into her Harbor Point Bank branch to withdraw $14,000 in cash, which she has never done before. She explains that her grandson was arrested after a car accident while visiting another state, and that his lawyer called this morning: a courier will collect the bail money from her home this afternoon. The lawyer told her a 'gag order' means she must not tell her son. Her phone is still on a call, and she keeps glancing at it and asks the teller to hurry. Nobody has said that Evelyn herself owes money or is under investigation. Her pension arrives as usual, and nobody else has access to her accounts. Which typology is MOST likely?",
    options: [
      "A government imposter scam, in which callers posing as officials threaten the victim with arrest for her own supposed crimes",
      "An emergency or 'grandparent' scam, in which impostors say a loved one is in trouble and needs money at once",
      "Elder theft by a trusted person, in which a relative or caregiver misuses access to the victim's accounts",
      "A romance scam, in which an online partner the victim has never met persuades her to send money"
    ],
    answer: [1],
    explanation: "FinCEN's 2022 elder exploitation advisory describes emergency or person-in-need scams, also called grandparent scams, in which scammers impersonate a grandchild, another relative, an attorney or a law enforcement official to make the victim believe a loved one is in an emergency, such as a car accident or arrest, and needs money sent immediately. It notes that scammers increasingly ask for cash collected at the victim's home. Its behavioural red flags include an older customer taking directions from someone on a phone call, nervous or unwilling to hang up, and agitated about the need to send money immediately for a purported emergency of a loved one. A government imposter scam is the runner-up, because the caller claims legal authority, but in that scheme fake officials from agencies such as the SSA or IRS threaten the victim herself with arrest or account seizure. No relative or caregiver controls her money, and there is no online romance.",
    source: [
      { label: "FinCEN Advisory FIN-2022-A002 (June 2022) – Elder financial exploitation", url: "https://www.fincen.gov/sites/default/files/advisory/2022-06-15/FinCEN%20Advisory%20Elder%20Financial%20Exploitation%20FINAL%20508.pdf" }
    ]
  },
  {
    id: "FRAUD-020", domain: 1, topic: "BEC targeting real estate closings: verifying changed payment instructions", hy: false, difficulty: "medium",
    q: "Priya Natarajan, a retail customer of Glenwood Bank, comes into a branch two days before closing on her first home. She asks to wire her $186,000 down payment using new instructions in an email that appears to come from her title company, saying its 'usual account is under audit'. The new beneficiary is a personal account in another state, not in the title company's name. The email includes correct details of the property and closing date. She is in a hurry because she fears the seller will walk away. What should the bank do FIRST?",
    options: [
      "Send the wire as instructed, and request a recall at once if the title company later reports a problem",
      "Refuse the wire and close her account, because she may be a money mule moving the funds onward",
      "File a SAR on the beneficiary account and then process the wire, since the customer has authorised it",
      "Hold the wire and urge her to confirm the instructions by calling the title company on a known number"
    ],
    answer: [3],
    explanation: "FinCEN's 2019 BEC advisory highlights real estate transactions as a lucrative target, because details are public, parties communicate by email, and instructions are rarely strongly authenticated. It says institutions may verify suspicious emailed payment instructions through other means of communication, because such transfers are often irrevocable and stopping fraud before payment is essential. Sending and then recalling is the runner-up, but recovery is not assured once funds reach the criminal's account. Priya is the likely victim, not a mule, and a SAR does not replace preventing a loss she has not yet suffered.",
    source: [
      { label: "FinCEN Advisory FIN-2019-A005 (July 2019) – Updated BEC advisory", url: "https://www.fincen.gov/sites/default/files/advisory/2019-07-16/Updated%20BEC%20Advisory%20FINAL%20508.pdf" }
    ]
  },
  {
    id: "FRAUD-021", domain: 3, topic: "Responding to elder financial exploitation: SAR content and cross-reporting (FIN-2022-A002)", hy: true, difficulty: "hard",
    q: "Staff at Fairhaven Bank's Elm Street branch report that Walter Brandt, 88, has twice come in with his new live-in caregiver, Celia, who answers questions for him and will not leave his side. Walter seemed fearful and said Celia 'could have him moved into a home' if he did not help her. Since she arrived, $47,000 has moved from his savings to an account in Celia's name, and his contact phone number was changed to hers. The BSA team concludes that the activity is suspicious and that Walter may still be at risk. Which response BEST follows FinCEN's 2022 elder financial exploitation advisory?",
    options: [
      "File a SAR with the key term EFE FIN-2022-A002 noting the red flags and staff witnesses, and cross-report to police and APS",
      "File a SAR with the key term EFE FIN-2022-A002, and rely on FinCEN to pass it on to Adult Protective Services",
      "Ask Celia to explain the transfers, and file a SAR only if she cannot produce evidence of Walter's consent",
      "Wait for Walter's next periodic account review to see whether the pattern continues before deciding on a SAR"
    ],
    answer: [0],
    explanation: "The advisory asks filers to use the key term 'EFE FIN-2022-A002', check the elder financial exploitation box, and include behavioural red flags and the names of staff who witnessed them. It recommends cross-reporting directly to local law enforcement where a crime may have been committed or the older adult may still be at risk, and says filing a SAR is not a substitute for any state requirement to report to law enforcement and Adult Protective Services; imminent threats should be reported immediately. Relying on FinCEN to inform APS is the runner-up, but the SAR does not do that job. Questioning Celia risks tipping off the suspect, and waiting leaves Walter exposed.",
    source: [
      { label: "FinCEN Advisory FIN-2022-A002 (June 2022) – Elder financial exploitation", url: "https://www.fincen.gov/sites/default/files/advisory/2022-06-15/FinCEN%20Advisory%20Elder%20Financial%20Exploitation%20FINAL%20508.pdf" }
    ]
  },
  {
    id: "FRAUD-022", domain: 3, topic: "Insider fraud: controls over dormant account maintenance", hy: false, difficulty: "hard",
    q: "Internal audit at Oakvale Bank finds that a branch operations officer, Lena Marsh, reactivated six dormant accounts of elderly customers over 18 months. Each time she changed the mailing address to a PO box, ordered a debit card, and then withdrew about $9,000 in cash at ATMs over several weeks. She could make all of these changes alone, and monitoring did not cover account maintenance events. She had passed standard vetting when hired, and the branch always met its sales targets. Losses total $212,000. Which control enhancement would MOST directly prevent a repeat?",
    options: [
      "Enhanced pre-employment vetting for all new branch staff, including credit and criminal record checks",
      "Four-eyes approval and alerts when a dormant account is reactivated and then has address or card changes",
      "Lower daily cash withdrawal limits on all retail debit cards, so that large ATM withdrawals take longer",
      "Annual fraud awareness training for branch staff, with a new module on elder financial exploitation"
    ],
    answer: [1],
    explanation: "The FCA's Financial Crime Guide lists as good practice against insider fraud that staff in high-risk positions get enhanced vetting and closer scrutiny, and that 'four eyes' procedures are in place. FinCEN's elder exploitation advisory adds the red flag of dormant accounts with large balances that begin to show constant withdrawals. The failure here was that one person could reactivate, redirect and draw on accounts unseen, so dual control plus monitoring of those maintenance events targets it directly. Better vetting is the runner-up, but Lena passed vetting and screening cannot detect future misconduct. Lower limits for all customers and training do not close the control gap.",
    source: [
      { label: "FCA Handbook FCG 4.2.1 – Fraud: good and poor practice", url: "https://www.handbook.fca.org.uk/handbook/FCG/4/2.html" },
      { label: "FinCEN Advisory FIN-2022-A002 (June 2022) – Elder financial exploitation", url: "https://www.fincen.gov/sites/default/files/advisory/2022-06-15/FinCEN%20Advisory%20Elder%20Financial%20Exploitation%20FINAL%20508.pdf" }
    ]
  },
  {
    id: "FRAUD-023", domain: 3, topic: "PEP family member as legal owner: limits of customer self-declaration (FATF PEP Guidance)", hy: false, difficulty: "hard",
    q: "Meridian Bank is onboarding Medlinea Supplies Ltd, formed two months ago and wholly owned by Irina Kask, 27, a former schoolteacher. Medlinea expects about $5 million a year from Country R's state hospital procurement agency for medical consumables. On the bank's form, which sets out the PEP definition, Irina ticked 'No' to being a PEP, a family member of a PEP, or a close associate. Screening found nothing, because she uses her married name. An analyst then finds a wedding announcement showing that her father, Dr Anton Vasko, is Country R's deputy minister of health. The relationship manager says the bank can rely on her signed declaration, because any false answer is her responsibility. What should the bank do?",
    options: [
      "Rely on the signed declaration, because the form gave the PEP definition and any misstatement is the customer's legal responsibility",
      "Apply standard due diligence, because Irina holds no public function herself and the company's own business is lawful",
      "Decline automatically, because companies owned by relatives of public officials may not contract with the state",
      "Treat her as a foreign PEP's family member, apply enhanced measures, and test whether the minister is the real owner"
    ],
    answer: [3],
    explanation: "FATF's PEP Guidance says Recommendation 12 applies also to family members and close associates of PEPs, and family members include those related by blood or by marriage. It warns that institutions that give customers a PEP definition and ask them to self-declare must not rely solely on such declarations, which may be false: doing so would shift the institution's obligation to the customer, which is not acceptable. Relying on the declaration is the runner-up, but that is exactly what FATF rejects. Among its red flags of PEPs shielding their identity are the use of corporate vehicles to obscure beneficial ownership and the use of family members or close associates as legal owner, which fits a new company selling to the ministry her father helps run. So the bank should apply the foreign PEP measures (senior management approval, source of wealth and funds, enhanced monitoring) and consider whether a suspicious transaction report is needed. Being a PEP relative does not by itself require refusal.",
    source: [
      { label: "FATF Guidance: Politically Exposed Persons (Recs 12 and 22), 2013", url: "https://www.fatf-gafi.org/content/dam/fatf-gafi/guidance/Guidance-PEP-Rec12-22.pdf" }
    ]
  },
  {
    id: "FRAUD-024", domain: 4, topic: "SAR reporting of email account compromise: EAC vs BEC key terms (FIN-2019-A005)", hy: true, difficulty: "hard",
    q: "Rosalind Feeney, a retired dentist, has a wealth management account at Lyndhurst Bank. An email from her personal email address asks her adviser to wire $95,000 to a 'contractor' for a kitchen renovation, and he processes it because it matches her usual writing style. Days later Rosalind says she never sent the email. Her email provider confirms that an attacker logged in from an overseas IP address and set up an auto-forwarding rule. Lyndhurst's investigator is drafting the SAR. Which approach BEST follows FinCEN's 2019 email compromise advisory?",
    options: [
      "Use the key term 'BEC FRAUD', because a compromised email account was used to induce a wire transfer",
      "Use the key term 'BEC DATA THEFT', because the attacker had access to personal data in her mailbox",
      "Leave out the email technical details, because the SAR should describe only the transaction and parties",
      "Use the key term 'EAC FRAUD', mark the cyber event field, and include the IP data, timestamps and forwarding rule"
    ],
    answer: [3],
    explanation: "FinCEN's 2019 advisory defines business email compromise (BEC) as targeting operational entities such as companies, and email account compromise (EAC) as targeting the personal email accounts of individuals. It asks filers to use 'BEC FRAUD' when businesses are the victims and 'EAC FRAUD' when individuals are, to select the cyber event field, and to include email addresses, IP addresses with timestamps, and details such as auto-forwarding or inbox rules. 'BEC FRAUD' is the runner-up because the technique is the same, but the victim here is an individual. 'BEC DATA THEFT' is for schemes that obtain information for future fraud, and cyber details are exactly what FinCEN wants included.",
    source: [
      { label: "FinCEN Advisory FIN-2019-A005 (July 2019) – Updated BEC advisory", url: "https://www.fincen.gov/sites/default/files/advisory/2019-07-16/Updated%20BEC%20Advisory%20FINAL%20508.pdf" }
    ]
  },
  {
    id: "FRAUD-025", domain: 4, topic: "Investigating a synthetic identity ring: link analysis and identity validation", hy: false, difficulty: "hard",
    q: "Over three weeks, Brightpath, a US digital bank, approves 14 online applications with different names, dates of birth and SSNs. Each applicant passed a credit bureau check showing a thin file and uploaded a utility bill in their own name. A fraud analyst then notices that five applications were submitted from the same device, that two list a mailing address that public records show is a vacant property, and that one SSN already exists in the bank's portfolio under a different name. No losses have occurred yet. What is the BEST next investigative step?",
    options: [
      "Ask each applicant for a second recent utility bill, as proof that they live at the stated address",
      "Wait until the accounts show missed payments or chargebacks, since no losses have occurred yet",
      "Link all applications and accounts by shared device, IP, address, phone and SSN, and validate the SSNs",
      "Close the five accounts opened from the shared device and treat the other nine as separate cases"
    ],
    answer: [2],
    explanation: "The Federal Reserve's synthetic identity toolkit recommends comparing application data with existing accounts (an SSN already held under a different name is a red flag), using device and IP data to see whether the same elements were used for other identities, checking addresses in public records, and validating name, date of birth and SSN through SSA's eCBSV service. Linking every shared attribute maps the whole ring rather than one cluster. A second utility bill is the runner-up, but the toolkit notes that fraudsters set up household utilities to make synthetic identities look real. Synthetics behave well until they 'bust out', so waiting for losses defeats the purpose.",
    source: [
      { label: "Federal Reserve Synthetic Identity Fraud Mitigation Toolkit – Identifying a synthetic at account opening", url: "https://fedpaymentsimprovement.org/wp-content/uploads/identifying-synthetic-account-opening.pdf" },
      { label: "Federal Reserve Synthetic Identity Fraud Mitigation Toolkit – How is a synthetic identity created?", url: "https://fedpaymentsimprovement.org/wp-content/uploads/how-is-a-synthetic-identity-created.pdf" }
    ]
  }
]);
