window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  // ---------------- Domain 1: Risks and Methods of Financial Crime ----------------
  {
    id: "TRAP-001", difficulty: "hard", domain: 1, topic: "TBML vs. Black Market Peso Exchange", hy: false,
    q: "A US auto-parts exporter has banked with your institution for nine years. It recently upgraded its warehouse software and hired a new CFO. Over the last quarter, payment for its shipments to Colombia changed: instead of wires from its Colombian buyers, it now receives dozens of cash deposits and cashier's checks bought by individuals in several US states, plus wires from US companies with no link to the buyers. Invoices, prices and shipping documents are consistent with the market and the goods really ship. The buyers tell the exporter they have 'settled with a local broker' in pesos. Which typology is MOST likely?",
    options: [
      "Over-invoicing of the exports to move value from Colombia into the United States",
      "Black Market Peso Exchange, in which a broker uses US drug dollars to settle the buyers' debts",
      "A funnel account that collects deposits in one region for withdrawal near the border",
      "Phantom shipments, in which payment is made for goods that are never exported"
    ],
    answer: [1],
    explanation: "In the Black Market Peso Exchange, a peso broker takes US dollars from a cartel's cash network, pays the US supplier directly or through structured deposits and third-party wires, and the foreign importer pays the broker in pesos locally (FATF-Egmont 2020 TBML report; FinCEN FIN-2010-A001). The key flags are unrelated third-party payers and cash instruments bought in several states. Over-invoicing is the tempting runner-up because this is trade, but prices match the market, so value is not being moved through price. The goods really ship, which rules out phantom shipments. A funnel account involves withdrawals in a different area, not payments to an exporter.",
    source: [
      { label: "FATF-Egmont Group, Trade-Based Money Laundering: Trends and Developments (2020) – BMPE description", url: "https://eurasiangroup.org/files/uploads/files/other_docs/FATF%20docs/Trade-Based-Money-Laundering-Trends-and-Developments.pdf" },
      { label: "FinCEN Advisory FIN-2010-A001 – TBML and BMPE indicators, including third-party payments", url: "https://www.fincen.gov/sites/default/files/advisory/fin-2010-a001.pdf" }
    ]
  },
  {
    id: "TRAP-002", difficulty: "hard", domain: 1, topic: "TBML – direction of value in over-invoicing", hy: true,
    q: "Company A, in Country X, has strict capital controls. It imports standard-grade steel tubing from Company B, a trading firm in a free-trade zone in Country Y. Both companies are ultimately owned by the same family. Company A's invoices show a unit price about three times the published market benchmark, and Company A pays each invoice promptly by wire. Customs in Country X collects duty on the declared value without objection, and Company A recently changed auditors. What is the scheme MOST likely achieving?",
    options: [
      "Under-invoicing that moves value into Country X",
      "Understating import values to evade customs duty in Country X",
      "Over-invoicing that moves value out of Country X to Company B",
      "Multiple invoicing of a single shipment across several banks"
    ],
    answer: [2],
    explanation: "FATF's 2006 TBML study explains that when goods are invoiced above fair market price, the exporter receives value from the importer. Here, value flows out of Country X, which has capital controls, to the related exporter in Country Y. Under-invoicing is the tempting runner-up, but it moves value in the opposite direction, from exporter to importer. Inflating the price increases the duty paid, so the aim is not duty evasion. Nothing suggests the same documents are being reused.",
    source: [
      { label: "FATF, Trade Based Money Laundering (June 2006) – over- and under-invoicing and the direction of value", url: "https://eurasiangroup.org/files/FATF_docs/Trade_Based_Money_Laundering.pdf" }
    ]
  },
  {
    id: "TRAP-003", difficulty: "hard", domain: 1, topic: "Fraud vs. money laundering – money mules", hy: true,
    q: "A 23-year-old retail customer has had a low-balance personal account for three years. One morning it receives a $148,000 wire from a US manufacturer whose payment instructions name a supplier company, not the customer. Within two hours he sends $140,000 to a cryptocurrency exchange and to two overseas accounts. At the branch he says he found a 'remote payment-processing job' online and keeps a 5% commission. That afternoon the manufacturer's bank sends a recall request citing business email compromise. The customer also recently updated his mobile phone number. Which statement BEST characterizes the activity in the customer's account?",
    options: [
      "The customer is acting as a money mule, laundering the proceeds of a BEC fraud against the manufacturer",
      "The customer is only the victim of an employment scam, so this is fraud and not money laundering",
      "The customer is structuring funds to avoid currency transaction reporting",
      "The customer is engaged in trade-based money laundering on behalf of the supplier"
    ],
    answer: [0],
    explanation: "The BEC fraud is the predicate offense; receiving and quickly passing on the stolen funds is laundering (layering), and FinCEN's BEC advisory describes money mules, witting or unwitting, as persons whose accounts receive and transfer illegally acquired funds. The runner-up is wrong because the customer may be naive, but his account is still being used to launder fraud proceeds, and the bank must assess it on that basis (for example, for a SAR). No cash is involved, so this is not structuring. There is no trade transaction either.",
    source: [
      { label: "FinCEN Advisory FIN-2019-A005 (BEC) – money mules may be witting or unwitting and launder BEC proceeds", url: "https://www.fincen.gov/system/files/advisory/2019-07-16/Updated%20BEC%20Advisory%20FINAL%20508.pdf" }
    ]
  },
  {
    id: "TRAP-004", difficulty: "hard", domain: 1, topic: "Terrorist financing – small amounts", hy: true,
    q: "A 19-year-old university student, who recently switched courses and moved apartments, has a checking account. In six weeks it receives about $2,800 in total: his savings, a small consumer loan, small peer-to-peer transfers from several friends, and payouts from an online 'medical emergency' crowdfunding page. He buys camping gear and two prepaid cards, then sends several small money-transfer payments to a recipient in a town bordering an area where a designated terrorist group operates. He arranges the transfers over an encrypted messaging app. Which features MOST distinguish possible terrorist financing from ordinary money laundering here? (Choose two.)",
    options: [
      "The funds come largely from legitimate sources such as savings, a small loan and donations",
      "The total amount is below the $5,000 SAR reporting threshold",
      "Funds pass through several shell companies to disguise their criminal origin",
      "Small amounts are being collected and sent toward an area of active terrorist operations",
      "Cash deposits are split into amounts under $10,000 to avoid reporting"
    ],
    answer: [0, 3],
    explanation: "FATF's 2025 terrorist financing update notes that activity linked to foreign terrorist fighters typically involves supporters collecting or sending small amounts abroad or funding travel to terrorist zones, often from legal means such as savings, salaries and small loans. Money laundering, by contrast, aims to disguise the criminal origin of funds, for example through shell companies. Being under $5,000 does not distinguish TF from ML: it affects only whether a SAR is mandatory, not whether the activity is suspicious. There is no structuring of cash here.",
    source: [
      { label: "FATF, Comprehensive Update on Terrorist Financing Risks (2025), paras 97 and 103", url: "https://eurasiangroup.org/files/uploads/files/Public_typology_reports/Comprehensive-Update-on-Terrorist-Financing-Risks-2025.pdf.coredownload.inline.pdf.pdf" }
    ]
  },
  {
    id: "TRAP-005", difficulty: "hard", domain: 1, topic: "Chinese money laundering networks vs. BMPE", hy: false,
    q: "A customer on a student visa opened an account five months ago and lists no employment. He makes frequent cash deposits just under $10,000 at several branches, buys cashier's checks payable to unrelated individuals, and wires funds for luxury goods and a car. Asked about the source of funds, he says relatives in China 'pay renminbi to someone over there' and he receives US dollars here. Law enforcement reporting links the cash in his area to a Mexico-based cartel. His account is also used to pay his university tuition. Which typology is MOST likely?",
    options: [
      "A Black Market Peso Exchange scheme settling Latin American import payments",
      "A funnel account moving drug cash to accounts near the southwest border",
      "Legitimate family remittances through an informal value transfer system",
      "A Chinese money laundering network selling cartel dollars to Chinese nationals evading currency controls"
    ],
    answer: [3],
    explanation: "FinCEN's August 2025 advisory (FIN-2025-A003) describes Chinese money laundering networks that buy cartel dollars (with pesos paid to the cartel through mirror transactions) and sell the dollars to Chinese citizens who pay renminbi in China to evade the roughly $50,000 annual currency limit. These networks often recruit students as money mules, who structure deposits and buy cashier's checks. BMPE is the close distractor, but in BMPE the dollars settle payments for goods exported to Latin America; here the dollars are bought by Chinese nationals paying in renminbi. There is no withdrawal near the border, as a funnel account would show. The cartel link rules out legitimate remittances.",
    source: [
      { label: "FinCEN Advisory FIN-2025-A003 (Aug 2025) – Chinese money laundering networks, mirror transactions, student money mules", url: "https://www.fincen.gov/system/files/2025-08/FinCEN-Advisory-CMLN-508.pdf" }
    ]
  },
  {
    id: "TRAP-006", difficulty: "hard", domain: 1, topic: "Human smuggling vs. human trafficking", hy: false,
    q: "Over three months, a US customer who runs a small landscaping business receives many small wires from different senders in Central America and the United States. Soon after each batch arrives, he forwards similar amounts to individuals in towns along the southwest border. Senders' memo lines refer to named relatives 'arriving'. Payments linked to each named relative stop soon after that person is reported to have arrived, and there are no ongoing payments to or from them afterwards. The customer's business has seasonal cash flow and recently bought a new truck. Which typology is MOST consistent with this pattern?",
    options: [
      "Human trafficking for forced labor",
      "Human smuggling",
      "A romance scam targeting the senders",
      "Payroll tax evasion by the landscaping business"
    ],
    answer: [1],
    explanation: "FinCEN's advisory FIN-2014-A008 distinguishes human smuggling (voluntary illegal migration, where the illicit proceeds are a one-time fee, often paid in part before and in part on arrival by relatives) from human trafficking (force or coercion and exploitation, which can generate ongoing criminal proceeds). Trafficking is the tempting runner-up, but payments that stop once each person arrives, with no ongoing exploitation proceeds, point to smuggling fees. Nothing indicates a romance scam or payroll tax evasion, and the business details are noise.",
    source: [
      { label: "FinCEN Advisory FIN-2014-A008 – human smuggling vs. human trafficking and payment patterns", url: "https://www.fincen.gov/sites/default/files/advisory/FIN-2014-A008.pdf" }
    ]
  },
  {
    id: "TRAP-007", difficulty: "hard", domain: 1, topic: "Virtual assets – nested VASP services", hy: false,
    q: "A licensed virtual asset service provider (VASP) onboarded 'Orion Trading Ltd' as a corporate over-the-counter trading client. Orion's account now receives thousands of small deposits from many distinct external wallets and sends thousands of withdrawals to unhosted wallets, with volumes comparable to a small exchange. Orion's website offers buy/sell services to retail users in a country where it holds no license. Its director is a former software engineer, and it pays its trading fees on time. What risk does this activity MOST likely indicate?",
    options: [
      "Use of a mixing service to break the transaction trail",
      "Chain-hopping across blockchains to obscure fund flows",
      "Wash trading of non-fungible tokens between related wallets",
      "Nested services, in which an unlicensed VASP serves its own customers through the account"
    ],
    answer: [3],
    explanation: "FATF's 2021 VA/VASP guidance identifies nested services (a VASP providing accounts to smaller VASPs for access to liquidity) as a correspondent-type relationship. The account-holding VASP then has no due diligence on the nested VASP's underlying customers, so R.13-type measures should apply. The retail-facing website, the exchange-like volumes and the many unrelated wallets show that Orion is acting as an exchange, not trading for itself. A mixer is the tempting runner-up because of the many wallets, but nothing shows commingling to break the trail. Nor is there any cross-chain swapping or NFT trading.",
    source: [
      { label: "FATF, Updated Guidance for a Risk-Based Approach to VAs and VASPs (Oct 2021), paras 165-166 – nested services", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/Best_practicies/Updated-Guidance-VA-VASP.pdf.coredownload.inline.pdf.pdf" }
    ]
  },
  {
    id: "TRAP-008", difficulty: "hard", domain: 1, topic: "TBML – multiple invoicing", hy: false,
    q: "A metals trader asks your bank to finance a shipment of 20 containers of copper cable. Vessel tracking confirms the voyage took place, and the invoiced price is in line with market benchmarks. Through a section 314(b) exchange, another bank tells you that it financed a shipment for the same trader two weeks ago, using a bill of lading with the same number and an invoice with identical container numbers. The trader recently opened a regional office and changed freight forwarders. Which TBML technique is MOST likely being used?",
    options: [
      "Multiple invoicing, reusing documents for one shipment to justify several payments",
      "Phantom shipment, in which no goods are shipped at all",
      "Over-invoicing, misstating the price to transfer value",
      "Falsely described goods, substituting a cheaper product"
    ],
    answer: [0],
    explanation: "The FATF-Egmont 2020 report describes multiple invoicing as reusing existing documentation to justify multiple payments for the same shipment, often across several financial institutions so that no single bank can see it. Phantom shipment is the tempting runner-up because the second financing has no additional goods behind it. However, the goods did move once (vessel tracking confirms the voyage); the fraud lies in financing that one shipment twice. The price matches the market, which rules out over-invoicing, and nothing indicates the goods are misdescribed.",
    source: [
      { label: "FATF-Egmont Group, Trade-Based Money Laundering: Trends and Developments (2020) – multiple invoicing vs. phantom shipments", url: "https://eurasiangroup.org/files/uploads/files/other_docs/FATF%20docs/Trade-Based-Money-Laundering-Trends-and-Developments.pdf" }
    ]
  },
  {
    id: "TRAP-009", difficulty: "hard", domain: 1, topic: "Elder fraud – CVC kiosk scams", hy: false,
    q: "An 81-year-old customer who has banked with you for 40 years withdraws $9,000 in cash three times in one week, each time asking for large bills. During each visit he stays on his mobile phone and says the 'bank's fraud department' told him to move his money to protect it from hackers. A teller later sees him feeding cash into a bitcoin ATM at a nearby gas station. He recently renewed his driver's license and his pension deposits are unchanged. Which typology is MOST likely?",
    options: [
      "Structuring of cash withdrawals to evade currency transaction reporting",
      "A romance scam in which an online partner requests money for travel",
      "An impersonation scam directing an elderly victim to pay through a CVC kiosk",
      "Laundering of drug proceeds through cryptocurrency kiosks by the customer"
    ],
    answer: [2],
    explanation: "FinCEN's August 2025 notice (FIN-2025-NTC1) warns that scammers, often initiating contact through unsolicited calls and impersonating technical support, government or other trusted parties, direct older victims to deposit cash into convertible virtual currency (CVC) kiosks; more than two of every three dollars reported lost through CVC kiosk fraud was lost by an older adult. Structuring is the tempting runner-up because each withdrawal is under $10,000, but nothing suggests he intends to evade reporting; he is following a caller's instructions. A romance scam would involve a relationship, not a caller posing as the bank. He is a victim, not a drug money launderer.",
    source: [
      { label: "FinCEN Notice FIN-2025-NTC1 (Aug 2025) – CVC kiosks used for scam payments, elder fraud", url: "https://www.fincen.gov/system/files/2025-08/FinCEN-Notice-CVCKIOSK.pdf" }
    ]
  },
  {
    id: "TRAP-010", difficulty: "hard", domain: 1, topic: "Securities – mirror trading", hy: false,
    q: "At a global bank, a Moscow affiliate's front office repeatedly executes the following trades. Client A, a Russian company, buys a block of highly liquid Russian blue-chip shares from the Moscow affiliate and pays in roubles. On the same day, Client B, a British Virgin Islands company whose onboarding in London was arranged by the same Moscow desk, sells the same number of the same shares to the London entity and is paid in US dollars to an account in Cyprus. The clients appear to be connected, accept small losses on each pair of trades, and have done this more than a thousand times. The shares are widely traded, and prices did not move unusually. Which typology is MOST likely?",
    options: [
      "Wash trading to create artificial volume and manipulate the share price",
      "Pump-and-dump promotion of thinly traded shares",
      "Front-running of the clients' orders by the Moscow desk",
      "Mirror trading to convert roubles into dollars and move them offshore"
    ],
    answer: [3],
    explanation: "The FCA's 2017 Final Notice against Deutsche Bank describes this pattern as 'mirror trading': connected customers bought securities in roubles in Moscow while an offshore counterparty sold the same securities for US dollars in London. The mirror trades were used to transfer more than USD 6 billion out of Russia. Wash trading is the tempting runner-up, but its aim is to create fake volume or move prices. Here the shares are liquid, prices did not move, and the purpose is currency conversion and cross-border transfer. Pump-and-dump schemes involve illiquid promoted stocks, and front-running exploits advance knowledge of clients' orders.",
    source: [
      { label: "FCA Final Notice, Deutsche Bank AG (30 Jan 2017) – mirror trading between Moscow and London", url: "https://www.fca.org.uk/publication/final-notices/deutsche-bank-2017.pdf" }
    ]
  },

  // ---------------- Domain 2: Frameworks, Governance and Regulations ----------------
  {
    id: "TRAP-011", difficulty: "hard", domain: 2, topic: "Governance – escalation of business/compliance conflict", hy: false,
    q: "After enhanced due diligence, the chief AML officer recommends exiting a foreign respondent bank whose risk exceeds the board-approved risk appetite. The head of correspondent banking, whose unit earns significant fees from the respondent, objects. The CEO sides with the business and says the decision is final. The respondent's activity has not shown specific suspicious transactions, and the bank recently completed a core system upgrade. What should the chief AML officer do FIRST?",
    options: [
      "Accept the CEO's decision and record her dissent in the customer file",
      "Escalate the disagreement, with the documented risk assessment, to the board or its risk committee",
      "File a SAR on the respondent to protect the bank before any decision is taken",
      "Report the CEO to the bank's supervisor before informing the board"
    ],
    answer: [1],
    explanation: "The Basel Committee's AML guidelines state that where conflicts arise between business lines and the chief AML/CFT officer, procedures should ensure that AML/CFT concerns are 'objectively considered at the highest level', and that the officer should have a direct reporting line to senior management or the board. FinCEN's culture-of-compliance advisory (FIN-2014-A007) adds that compliance must not be compromised by revenue interests. Filing a SAR is the tempting runner-up, but a SAR is for suspicious activity, which is absent here, and it does not resolve a risk-appetite breach. Simply recording dissent leaves the breach unresolved, and going to the supervisor before the board bypasses internal governance.",
    source: [
      { label: "Basel Committee, Sound management of risks related to ML and FT (rev. July 2020), paras 23-24", url: "https://www.bis.org/publications/202007-guidelines-sound-management-risks-related-money-laundering-and-financing-terrorism-revisions-supervisory.pdf" },
      { label: "FinCEN Advisory FIN-2014-A007 – compliance should not be compromised by revenue interests", url: "https://www.fincen.gov/sites/default/files/advisory/FIN-2014-A007.pdf" }
    ]
  },
  {
    id: "TRAP-012", difficulty: "hard", domain: 2, topic: "OFAC – blocking vs. rejecting", hy: true,
    q: "A US bank's sanctions filter stops five incoming and outgoing wires on the same morning. Which of these wires must be BLOCKED rather than rejected? (Choose two.)",
    options: [
      "A wire between two non-sanctioned third-country companies for goods exported to a non-blocked company in Iran",
      "A wire for a customer's account at a bank in Iran that is wholly owned by the Government of Iran",
      "A wire to a company owned 30% by one SDN and 25% by another SDN",
      "A wire to a company owned 40% by a single SDN, with no other blocked owner",
      "A wire whose originator partially matches an SDN name but has a different date of birth and nationality"
    ],
    answer: [1, 2],
    explanation: "OFAC FAQ 36 explains that a transaction must be blocked when a blocked person has an interest in it, for example a payment to an Iranian bank owned by the Government of Iran. Under the 50 Percent Rule, an entity owned 50% or more in the aggregate by SDNs (30% + 25% = 55%) is itself blocked. A prohibited transaction with no blockable interest, such as a trade payment involving a non-blocked Iranian company, is rejected instead. A 40% single-SDN owner does not make the entity blocked (proceed with caution), and a partial name match with differing identifiers is a false positive to be cleared (OFAC FAQ 5).",
    source: [
      { label: "OFAC FAQ 36 – when to reject rather than block (Iran examples)", url: "https://ofac.treasury.gov/faqs/36" },
      { label: "OFAC FAQ 5 – validating matches; block vs. reject vs. process chart, including the 50 Percent Rule", url: "https://ofac.treasury.gov/faqs/5" }
    ]
  },
  {
    id: "TRAP-013", difficulty: "hard", domain: 2, topic: "FATF R.16 (2025) – misdirected payments", hy: false,
    q: "A bank receives a cross-border credit transfer above the de minimis threshold. The payment message names the beneficiary as 'Delta Components GmbH', but the account number belongs to a personal account held by an individual, D. Kovac. The ordering bank's originator information is complete, and the amount is consistent with Delta's typical invoices. The receiving bank does not take part in any confirmation-of-payee scheme. Under FATF Recommendation 16 as revised in June 2025, which statement is correct?",
    options: [
      "Only the ordering institution is responsible for beneficiary information, so the receiving bank may simply credit the account",
      "The name must match the account holder exactly on every payment, or the payment must be returned",
      "The receiving bank must use at least one measure to detect misdirected payments and have risk-based rules to execute, reject or suspend them",
      "The misdirected-payment requirements apply only to domestic payments, not cross-border transfers"
    ],
    answer: [2],
    explanation: "Revised INR.16 (paras 30-31) requires the beneficiary financial institution to mitigate the risk of misdirected payments. It must use at least one of three measures: checking name/account alignment per transaction, holistic ongoing monitoring that includes misaligned beneficiary information, or a pre-validation (confirmation-of-payee) mechanism. It must also have risk-based policies for when to execute, reject or suspend such payments. The runner-up reflects the pre-2025 view that beneficiary accuracy was only the ordering bank's concern. FATF notes that alignment does not require an exact match, and the requirement applies to cross-border payments above the de minimis threshold.",
    changed: "FATF R.16 revision, June 2025",
    source: [
      { label: "FATF Recommendations (2026 ed.), INR.16 paras 28-31 and amendment table (June 2025)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "TRAP-014", difficulty: "hard", domain: 2, topic: "EU AMLR – cash payment limit and timing", hy: false,
    q: "In September 2026, a luxury car dealer in an EU Member State that currently has no national cash-payment limit asks its compliance adviser whether it can accept EUR 15,000 in banknotes from a buyer. The dealer already applies AML rules to cash sales of EUR 10,000 or more and recently opened a second showroom. Which statement about Regulation (EU) 2024/1624 (the AMLR) is MOST accurate?",
    options: [
      "Its EUR 10,000 cash limit already applies because AMLA has begun operating",
      "It is a directive, so its cash limit applies only once national law transposes it",
      "Its cash limit applies to every cash payment, including deposits at a bank's premises",
      "Its EUR 10,000 cash limit applies directly from 10 July 2027; until then national rules govern"
    ],
    answer: [3],
    explanation: "Article 80 of the AMLR limits cash payments for goods or services by persons trading in goods or providing services to EUR 10,000; Member States may keep or adopt lower limits, and deposits at the premises of credit institutions and payment service providers are excluded. Article 90 makes the Regulation directly applicable in all Member States from 10 July 2027, so no transposition is needed. The tempting runner-up confuses the AMLR's application date with the start of AMLA's operations. Until July 2027, the existing AML directive regime and national law apply, so the dealer must still apply AML measures to this sale.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Articles 80 and 90 – EU Publications Office", url: "https://publications.europa.eu/resource/celex/32024R1624" }
    ]
  },
  {
    id: "TRAP-015", difficulty: "hard", domain: 2, topic: "UK failure to prevent fraud (ECCTA 2023)", hy: false,
    q: "During 2026, mortgage advisers at a large UK bank inflate applicants' declared incomes so that more loans are approved and the bank earns more fees and interest. The advisers receive sales bonuses, but no director or senior manager knew about the practice. The bank's fraud-prevention policy is generic and has not been updated in years, although the bank reported the problem to the FCA once it was discovered. Which statement BEST describes the bank's criminal exposure under section 199 of the Economic Crime and Corporate Transparency Act 2023?",
    options: [
      "It can be liable only if a senior manager acting as its 'directing mind' knew of the fraud",
      "It cannot be liable because the advisers acted mainly to earn their own bonuses",
      "It has a complete defence because it reported the fraud to the FCA once discovered",
      "It can be liable if the advisers intended to benefit it; its defence is reasonable prevention procedures"
    ],
    answer: [3],
    explanation: "Section 199, in force since 1 September 2025, makes a large organisation guilty of an offence when an associated person, such as an employee, commits a fraud offence intending to benefit the organisation, directly or indirectly. No senior-management knowledge is required. The defence is to prove the organisation had reasonable prevention procedures in place, which a stale, generic policy is unlikely to satisfy. The 'directing mind' test is the tempting runner-up, but that identification doctrine is exactly what the new offence bypasses. Personal motives such as bonuses do not defeat the offence where benefit to the bank was also intended. Self-reporting is not a statutory defence.",
    changed: "UK failure to prevent fraud offence in force 1 Sept 2025",
    source: [
      { label: "Economic Crime and Corporate Transparency Act 2023, section 199", url: "https://www.legislation.gov.uk/ukpga/2023/56/section/199" },
      { label: "Home Office guidance – offence of failure to prevent fraud (came into effect 1 Sept 2025)", url: "https://www.gov.uk/government/publications/offence-of-failure-to-prevent-fraud-introduced-by-eccta" }
    ]
  },
  {
    id: "TRAP-016", difficulty: "hard", domain: 2, topic: "UK MLRs – former PEPs and family members", hy: false,
    q: "A UK bank has two private clients. One is a foreign former minister of transport who left office eight months ago. The other is his daughter-in-law, who has been subject to PEP enhanced due diligence because of her family link. Neither has any adverse media, and both recently moved their accounts to a new relationship manager. Under regulation 35 of the UK Money Laundering Regulations 2017, which statements are correct? (Choose two.)",
    options: [
      "The former minister must stay under PEP measures for at least 12 months after leaving office, or longer if risk requires",
      "Both clients must stay under PEP measures for exactly 12 months, then be moved to standard risk",
      "The former minister may be reclassified at once because he no longer holds a public function",
      "The bank no longer has to apply PEP measures to the daughter-in-law just because of her family link",
      "A daughter-in-law is not a PEP family member under the regulations, so PEP measures never applied"
    ],
    answer: [0, 3],
    explanation: "Regulation 35(9) requires the enhanced PEP measures to continue for at least 12 months after a person stops holding the prominent public function, or for longer if the firm considers this appropriate to address the risk. Regulation 35(11) provides that once the PEP leaves office, the firm is no longer required to apply these measures to his family members or known close associates, whether or not the 12-month period has expired. The firm may still rate her as higher risk on other grounds. Regulation 35(12) lists the spouse of a PEP's child as a family member. There is no fixed exit at exactly 12 months, and the former minister cannot be reclassified immediately.",
    source: [
      { label: "The Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017, regulation 35", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/35" }
    ]
  },
  {
    id: "TRAP-017", difficulty: "hard", domain: 2, topic: "FATF R.1 (2025) – proportionality and simplified measures", hy: false,
    q: "A country's national risk assessment finds that basic, low-limit accounts offered to asylum seekers present low ML/TF risk, but banks still apply full standard CDD and many applicants remain unbanked. The finance ministry is updating its AML regulations after the FATF revised Recommendation 1 in February 2025. Which statement BEST reflects revised R.1?",
    options: [
      "Where countries identify lower risks, they should allow and encourage simplified measures, proportionate to the risk",
      "Countries may choose to permit simplified measures, but the FATF takes no position on encouraging them",
      "Lower-risk products may be exempted from all CDD, including where ML/TF is suspected",
      "Simplified measures are allowed only after the FATF approves the national risk assessment"
    ],
    answer: [0],
    explanation: "The February 2025 revision of R.1 emphasised proportionality: where countries identify lower risks, they 'should allow and encourage simplified measures as appropriate'. The tempting runner-up reflects the older, permissive wording, under which countries 'may decide to allow' simplified measures. Simplified measures are never acceptable when ML/TF is suspected (INR.10). The FATF does not approve national risk assessments before simplified measures can be used.",
    changed: "FATF R.1 revision, Feb 2025",
    source: [
      { label: "FATF Recommendations (2026 ed.), R.1 and amendment table (Feb 2025)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },

  // ---------------- Domain 3: Building an AFC Compliance Program ----------------
  {
    id: "TRAP-018", difficulty: "hard", domain: 3, topic: "Trade finance – escalation of unusual LC", hy: false,
    q: "Your bank confirms a letter of credit for a new customer, a textile wholesaler, importing 'industrial pumps'. The unit price is four times a reliable market benchmark. The goods are routed through a free-trade zone, and a last-minute amendment replaced the beneficiary with a company in a third country. The presentation strictly complies with the LC terms, and the relationship manager points out that the bank must honour a complying presentation within five banking days. The customer's CFO is a former auditor. What is the BEST course of action?",
    options: [
      "Honour the presentation, since banks deal in documents and not goods",
      "Refuse payment and tell the applicant the bank suspects trade-based money laundering",
      "Escalate to financial crime compliance for enhanced review and SAR consideration before payment",
      "Ask the customs authority to inspect the goods before deciding whether to pay"
    ],
    answer: [2],
    explanation: "The Wolfsberg/ICC/BAFT Trade Finance Principles accept that banks deal in documents, not goods, but still expect trade transactions to be reviewed for sanctions and unusual or potentially suspicious activity. Manifestly unusual pricing should prompt enquiries and escalation. Here there are several red flags: a pricing anomaly, goods outside the customer's line of business, transshipment through a free-trade zone and an unexplained change of beneficiary. The tempting runner-up treats documentary compliance as the end of the analysis, which it is not. Telling the applicant of the suspicion risks tipping-off, and asking customs to inspect is not the bank's escalation route.",
    source: [
      { label: "Wolfsberg Group, ICC and BAFT Trade Finance Principles (2019) – review for unusual activity; escalation", url: "https://db.wolfsberg-group.org/assets/5c770f68-6277-4443-931b-7750478f08e7/Trade%20Finance%20Principles.pdf" },
      { label: "FinCEN Advisory FIN-2010-A001 – TBML indicators (amended LCs, third-party payments)", url: "https://www.fincen.gov/sites/default/files/advisory/fin-2010-a001.pdf" }
    ]
  },
  {
    id: "TRAP-019", difficulty: "hard", domain: 3, topic: "SAR – terrorist financing below the threshold", hy: true,
    q: "A US bank's investigator finds that a customer has sent $3,200 in small transfers over a month to a recipient in a town bordering an area controlled by a designated terrorist group. Open-source posts under the customer's name praise the group and mention traveling soon, and he has just bought a one-way ticket. None of the parties is on the SDN List, and the customer recently changed employers. What is the BEST course of action?",
    options: [
      "Record that no SAR is required because the total is below $5,000, and keep monitoring",
      "File a voluntary SAR and immediately notify law enforcement by telephone of the possible ongoing TF",
      "Block the funds in the account and report the blocking to OFAC within 10 business days",
      "Ask the customer to explain the transfers before deciding whether to report them"
    ],
    answer: [1],
    explanation: "The $5,000 threshold in 31 CFR 1020.320(a)(2) determines only when a SAR is mandatory. Section 1020.320(a)(1) allows a bank to file a SAR voluntarily on any suspicious transaction relevant to a possible violation of law. Section 1020.320(b)(3) requires immediate telephone notification to law enforcement when a violation requires immediate attention, as possible ongoing terrorist financing with imminent travel does. The runner-up treats the threshold as a reason to stay silent, which ignores the TF risk. There is no SDN, so there is no blockable interest. Questioning the customer about the transfers risks tipping him off.",
    source: [
      { label: "31 CFR 1020.320 – voluntary SARs (a)(1), $5,000 threshold (a)(2), immediate notification (b)(3)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.320" }
    ]
  },
  {
    id: "TRAP-020", difficulty: "hard", domain: 3, topic: "SAR – activity near the CTR threshold", hy: true,
    q: "A new automated rule flags a long-standing gas station customer. Its daily cash deposits range from $9,400 to $11,300, consistent with its fuel sales and seasonal patterns. The bank files CTRs whenever deposits exceed $10,000. There are no other indicators: the owner has never asked about reporting thresholds, deposits are not split across branches or days, and amounts track register receipts. The owner recently refinanced the station's mortgage. According to the SAR FAQs issued by FinCEN and the federal banking agencies in October 2025, is the bank required to file a SAR?",
    options: [
      "No. Deposits near the CTR threshold require a SAR only if the bank suspects they are designed to evade reporting",
      "Yes. Any repeated pattern of cash deposits between $9,000 and $10,000 must be reported as structuring",
      "Yes, but only for the days when deposits exceeded $10,000 and CTRs were filed",
      "No, because cash-intensive businesses may be exempted from SAR filing"
    ],
    answer: [0],
    explanation: "Question 1 of the October 2025 SAR FAQs states that the mere presence of transactions at or near the $10,000 CTR threshold is not sufficient to require a SAR. A SAR is required only if the institution knows, suspects or has reason to suspect that the transactions are designed to evade BSA reporting. The tempting runner-up treats proximity to the threshold as structuring in itself, which the FAQ rejects. Filing a CTR does not create a SAR obligation. CTR exemptions never relieve a bank of SAR obligations.",
    changed: "FinCEN/agencies SAR FAQs, Oct 2025 (Question 1)",
    source: [
      { label: "FinCEN and federal banking agencies, SAR FAQs (9 Oct 2025), Question 1", url: "https://www.fincen.gov/system/files/2025-10/SAR-FAQs-October-2025.pdf" }
    ]
  },
  {
    id: "TRAP-021", difficulty: "hard", domain: 3, topic: "Beneficial ownership – CDD rule after CTA changes", hy: true,
    q: "In September 2026, a relationship manager at a US bank handles two legal entity customers. Alpha LLC, onboarded in 2023 with a beneficial ownership certification, wants to open a second account. Beta LLC, a newly formed US company, wants to open its first account. The relationship manager, citing FinCEN's August 2026 final rule exempting US companies from Corporate Transparency Act reporting, says the bank no longer needs beneficial ownership information for either company. Nothing calls Alpha's earlier information into question. Which statement is correct?",
    options: [
      "Neither company needs beneficial ownership checks, because US companies are now exempt from CTA reporting",
      "Beta's beneficial owners must be identified and verified at account opening; for Alpha, the bank may rely on its existing information",
      "Both companies must re-certify their beneficial owners for every new account, as the 2016 rule required",
      "The bank should get both companies' beneficial ownership data from FinCEN's BOI database"
    ],
    answer: [1],
    explanation: "The August 2026 final rule removed US companies' duty to report beneficial ownership information to FinCEN under the CTA. It did not remove banks' CDD obligation in 31 CFR 1010.230 to identify and verify the beneficial owners of legal entity customers. FinCEN's exceptive relief order FIN-2026-R001 (Feb 2026) limits that obligation to the customer's first account opening, times when the bank has reason to question the information, and its risk-based ongoing CDD. The runner-up confuses the reporting companies' obligations with the bank's. Re-certification at every new account is no longer required, and US companies' information is no longer in the BOI database.",
    changed: "FinCEN BOI final rule (Aug 2026) and CDD exceptive relief FIN-2026-R001 (Feb 2026)",
    source: [
      { label: "FinCEN press release (11 Aug 2026) – BOI reporting permanently removed for US companies", url: "https://www.fincen.gov/news/news-releases/fincen-permanently-ends-beneficial-ownership-reporting-requirements-millions" },
      { label: "FinCEN Order FIN-2026-R001 – exceptive relief from identifying beneficial owners at each account opening", url: "https://www.fincen.gov/system/files/2026-02/FinCEN-Order-CCDExceptiveRelief.pdf" }
    ]
  },
  {
    id: "TRAP-022", difficulty: "hard", domain: 3, topic: "Correspondent banking – nesting and refusal to disclose", hy: true,
    q: "A US bank maintains a correspondent account for a foreign bank that operates under an offshore banking license. Monitoring shows many payments originating from customers of two foreign banks that the respondent never disclosed. When asked, the respondent refuses to identify those banks, citing local secrecy law, but sends an updated Wolfsberg CBDDQ. The relationship is profitable, and the respondent's country recently hosted an international banking conference. Which actions are MOST appropriate for the US bank? (Choose two.)",
    options: [
      "Accept the updated CBDDQ as enough, since it attests that the respondent has an AML program",
      "Take reasonable steps to obtain information on the downstream banks, including their identities",
      "End all correspondent relationships with banks in the respondent's country to remove the risk",
      "Apply its procedures for when due diligence cannot be performed: restrict, close or file a SAR",
      "Tell the respondent the bank is considering a SAR so that it will cooperate"
    ],
    answer: [1, 3],
    explanation: "Because the respondent holds an offshore license, 31 CFR 1010.610(b) and (c) require enhanced due diligence. That includes determining whether the respondent maintains correspondent accounts for other foreign banks that use the US account and taking reasonable steps to obtain information, including their identities, to assess the nesting risk. Section 1010.610(d) requires procedures for when due diligence cannot be performed, including when to suspend activity, file a SAR or close the account. A questionnaire does not cure a refusal to disclose nested banks. Exiting a whole country is de-risking rather than risk management, and revealing a possible SAR is prohibited.",
    source: [
      { label: "31 CFR 1010.610 – enhanced due diligence (b)(2), offshore licenses (c)(1), special procedures (d)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-F/section-1010.610" }
    ]
  },
  {
    id: "TRAP-023", difficulty: "hard", domain: 3, topic: "Audit findings – repeat finding and remediation governance", hy: false,
    q: "For the second year in a row, the independent test reports that about 30% of enhanced due diligence reviews on high-risk customers are overdue. Management has twice extended the remediation deadline, citing staff shortages. The head of retail proposes having internal audit staff complete the overdue reviews so the finding can be closed before year-end. The bank has also just moved its headquarters. What is the MOST appropriate response by the board's audit committee?",
    options: [
      "Have internal audit staff complete the overdue reviews so the finding can be closed quickly",
      "Close the finding once the policy is amended to lengthen review cycles for high-risk customers",
      "Require a resourced corrective action plan with owners and dates, and track it until fixed",
      "Defer action until the next regulatory examination confirms whether the finding is valid"
    ],
    answer: [2],
    explanation: "The FFIEC manual states that deficiencies identified by independent testing should be reported to the board or a designated committee in a timely manner, and that the board and staff should track them and document progress on corrective actions. FinCEN's culture-of-compliance advisory (FIN-2014-A007) also expects leadership to give the compliance function adequate resources. The tempting runner-up is quick, but having auditors perform the control they test would compromise the independence of the testing. Lengthening review cycles to make the finding disappear, or waiting for examiners, leaves the risk unaddressed.",
    source: [
      { label: "FFIEC BSA/AML Examination Manual (April 2020 update) – BSA/AML Independent Testing: board tracks deficiencies and corrective action", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" },
      { label: "FinCEN Advisory FIN-2014-A007 – culture of compliance and adequate resources", url: "https://www.fincen.gov/sites/default/files/advisory/FIN-2014-A007.pdf" }
    ]
  },
  {
    id: "TRAP-024", difficulty: "hard", domain: 3, topic: "Sanctions – blocked funds and later divestment", hy: true,
    q: "Two weeks ago a US bank blocked a $2.3 million incoming wire for Company X, which at the time was 60% owned by an SDN. Company X, an important client of the corporate banking unit, now provides documents showing that the SDN sold its stake down to 30% last week in a transaction entirely outside US jurisdiction. The head of corporate banking demands the funds be released today, and Company X has a new CFO. What is the BEST course of action?",
    options: [
      "Keep the funds blocked until OFAC authorizes release or delists the SDN; a genuine divestment affects only future transactions",
      "Release the funds, because Company X is no longer 50% or more owned by an SDN and so is no longer blocked",
      "Return the funds to the originator and file a rejected transaction report with OFAC",
      "Release the funds if the head of corporate banking and the BSA officer both approve in writing"
    ],
    answer: [0],
    explanation: "OFAC FAQ 402 states that property properly blocked while an entity was 50% or more SDN-owned stays blocked, even if the ownership later falls below 50%, until OFAC authorizes its release or removes the blocked person from the SDN List; OFAC does not recognize unlicensed transfers of the blocked interest. Future transactions with the entity need not be blocked once a genuine (not sham) divestment is confirmed. The runner-up applies the 50 Percent Rule correctly to future dealings but not to property already blocked. Blocked funds cannot be returned to the originator, and internal approvals cannot replace an OFAC license; the customer may apply to OFAC for release (FAQ 41).",
    source: [
      { label: "OFAC FAQ 402 – divestment below 50% and previously blocked property", url: "https://ofac.treasury.gov/faqs/402" },
      { label: "OFAC FAQ 41 – customer may apply for unblocking and release", url: "https://ofac.treasury.gov/faqs/41" }
    ]
  },
  {
    id: "TRAP-025", difficulty: "hard", domain: 3, topic: "CDD and tipping-off (INR.10)", hy: true,
    q: "While onboarding a prospective corporate client, a bank officer becomes suspicious when the prospect's representative asks how to keep deposits 'off the regulator's radar', proposes a nominee director, and wants to fund the account from an unrelated third party. The bank's standard next step is a detailed source-of-wealth interview and document request, which the officer believes would make the prospect realize he is under suspicion. The prospect is also a sponsor of a local football club. Under FATF standards, what should the bank do?",
    options: [
      "Carry out the full EDD interview and document request first so the STR is as complete as possible",
      "Decline the relationship and explain to the prospect that the bank has money laundering concerns",
      "Stop the CDD steps that would alert the prospect and file a suspicious transaction report",
      "Open the account normally and report only if later transactions turn out to be suspicious"
    ],
    answer: [2],
    explanation: "Paragraph 3 of the Interpretive Note to FATF R.10 states that where an institution forms a suspicion of ML/TF and reasonably believes that performing the CDD process will tip off the customer or potential customer, it may choose not to pursue that process and should file an STR. The tempting runner-up puts completeness ahead of the tipping-off risk the standard is designed to prevent. Explaining the concern to the prospect is tipping-off under R.21. Opening the account and waiting ignores a suspicion that already exists.",
    source: [
      { label: "FATF Recommendations (2026 ed.), INR.10 paras 1-3 (CDD and tipping-off) and R.21", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "TRAP-026", difficulty: "hard", domain: 3, topic: "Onboarding MSBs / virtual currency exchangers", hy: false,
    q: "A US community bank is asked to open an operating account for a US-based virtual currency exchange that swaps customers' dollars for bitcoin. The exchange's founders are well known locally, it plans to sponsor a fintech conference, and it expects to move about $20 million a month. Which approach reflects the MINIMUM due diligence expected of the bank?",
    options: [
      "Require an independent audit certifying the exchange's AML program before any account is opened",
      "Decline the account, because banks are held responsible for their MSB customers' BSA compliance",
      "Open it as a standard commercial account, since virtual currency exchangers are not money transmitters",
      "Apply CIP, confirm FinCEN registration and state licensing, and risk-assess whether more diligence is needed"
    ],
    answer: [3],
    explanation: "Under FinCEN's 2019 CVC guidance, an exchanger of virtual currency for real currency is generally a money transmitter and therefore an MSB. The 2005 interagency MSB guidance sets the minimum expectations: apply the CIP, confirm FinCEN registration if required, confirm state or local licensing if applicable, confirm agent status if applicable, and conduct a basic risk assessment to decide whether further due diligence is needed. The runner-up describes a possible enhanced step for higher-risk MSBs, not a minimum requirement. The same guidance states that banks are not held responsible for their MSB customers' own BSA compliance.",
    source: [
      { label: "Interagency Interpretive Guidance on Providing Banking Services to MSBs (2005) – minimum due diligence", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/interagency-interpretive-guidance-providing-banking" },
      { label: "FinCEN Guidance FIN-2019-G001 – CVC exchangers are money transmitters", url: "https://www.fincen.gov/system/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf" }
    ]
  },
  {
    id: "TRAP-027", difficulty: "hard", domain: 3, topic: "SAR on an insider – board notification", hy: false,
    q: "A national bank files a SAR naming its executive vice president of lending, who is also a member of the board and sits on the audit committee. The board has designated the audit committee to receive notice of all SAR filings. The executive recently led a successful loan-growth initiative, and the bank's annual meeting is next month. Under 12 CFR 21.11, how should management handle the required notification?",
    options: [
      "Notify all directors who are not suspects, and do not notify the suspected executive",
      "Notify the audit committee, as the board's designated committee, in the usual way",
      "Notify the full board, including the executive, because every director must be informed",
      "Postpone the SAR until the board completes its own internal investigation"
    ],
    answer: [0],
    explanation: "Under 12 CFR 21.11(h)(1), management must promptly notify the board, or a committee designated by it, of SARs filed. Under 21.11(h)(2), when the suspect is a director or executive officer, the bank may not notify the suspect, consistent with 31 USC 5318(g)(2), but must notify all directors who are not suspects. The tempting runner-up follows the usual routing, but here that would inform the suspect, who sits on the designated committee. Informing the full board also tips him off, and SAR deadlines cannot be deferred for internal investigations.",
    source: [
      { label: "12 CFR 21.11(h) – notification to board; suspect is a director or executive officer", url: "https://www.ecfr.gov/current/title-12/chapter-I/part-21/subpart-B/section-21.11" }
    ]
  },
  {
    id: "TRAP-028", difficulty: "hard", domain: 3, topic: "OFAC – rejected transaction reporting and recordkeeping", hy: false,
    q: "In 2026, a US bank rejects a wire between two non-sanctioned third-country companies because it pays for goods exported to a non-blocked company in Iran. The bank's records-retention schedule keeps all BSA and payments records for five years, and the operations team has just migrated to a new archive platform. Which statement about the bank's obligations to OFAC is correct?",
    options: [
      "No report is needed for a rejected wire; only blocked property must be reported to OFAC",
      "Report the rejection within 10 business days and keep the records for five years, matching BSA retention",
      "Report the rejection within 10 business days and keep the records for at least 10 years",
      "Include the rejection only in the annual report of blocked property due by 30 September"
    ],
    answer: [2],
    explanation: "OFAC FAQ 36 states that blocked and rejected transactions must both be reported to OFAC within 10 business days, under 31 CFR 501.603 and 501.604. Since the 2024 amendment of 31 CFR 501.601 (effective March 2025), records of transactions subject to OFAC regulations must be kept available for at least 10 years. The runner-up applies the familiar five-year BSA retention period, which is now too short for OFAC records. The annual report due 30 September covers blocked property, not rejected transactions.",
    changed: "OFAC recordkeeping extended from 5 to 10 years (effective Mar 2025)",
    source: [
      { label: "31 CFR 501.601 – records available for at least 10 years", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-V/part-501/subpart-C/section-501.601" },
      { label: "OFAC FAQ 36 – rejected transactions and 10-business-day reporting", url: "https://ofac.treasury.gov/faqs/36" }
    ]
  },

  // ---------------- Domain 4: Tools, Technologies and Investigations ----------------
  {
    id: "TRAP-029", difficulty: "hard", domain: 4, topic: "Blockchain screening – deposit from an SDN address", hy: false,
    q: "A US virtual currency exchange's blockchain screening tool alerts on a 3.2 BTC deposit to a customer's hosted wallet. The deposit came directly from an address listed as a digital currency address in an SDN entry. The customer, a freelance consultant with two years of normal activity, says it is payment for an invoice. The exchange recently added support for two new tokens. What must the exchange do?",
    options: [
      "Return the bitcoin to the sending address and file a rejected transaction report",
      "Block the bitcoin so no party can access it, and report it to OFAC within 10 business days",
      "Credit the customer's wallet but file a SAR describing the SDN exposure",
      "Freeze the deposit only until the customer produces the invoice, then release it"
    ],
    answer: [1],
    explanation: "Funds sent from an SDN's address are property in which a blocked person has an interest. Under OFAC FAQ 646, a US person holding virtual currency that must be blocked must deny all parties access to it and comply with the blocked-property reporting rules in 31 CFR 501.603, including reporting within 10 business days. Returning the deposit is the tempting runner-up, but rejection applies only when there is no blockable interest (FAQ 36); sending the funds back would be an unlicensed transfer of blocked property. Crediting the customer or releasing the funds on the strength of an invoice would also deal in blocked property.",
    source: [
      { label: "OFAC FAQ 646 – how to block virtual currency", url: "https://ofac.treasury.gov/faqs/646" },
      { label: "OFAC, Sanctions Compliance Guidance for the Virtual Currency Industry (Oct 2021) – blocking and reporting", url: "https://ofac.treasury.gov/media/913571/download?inline" }
    ]
  },
  {
    id: "TRAP-030", difficulty: "hard", domain: 4, topic: "BEC response – what to do first", hy: true,
    q: "Three hours after sending a $480,000 wire, a corporate customer calls its bank in a panic. The wire went to a 'new account' of a long-standing supplier after an email request, but the supplier has just confirmed it never changed its bank details. The beneficiary bank is in another US state. The customer's CFO is on vacation, and the customer also has a loan renewal pending. What should the bank do FIRST?",
    options: [
      "Open a case and file a SAR within 30 calendar days of initial detection",
      "Share the beneficiary account details with other banks under section 314(b)",
      "Close the customer's account to prevent any further fraudulent payments",
      "Request a recall from the beneficiary bank and report the fraud to law enforcement, such as IC3"
    ],
    answer: [3],
    explanation: "FinCEN's BEC advisory stresses that such transfers are often irrevocable. Recovery through FinCEN's Rapid Response Program is more likely when the fraud is reported to law enforcement quickly (within 72 hours of the transaction, per FinCEN's April 2026 fact sheet; the 2019 advisory said 24 hours), for example through the FBI's IC3, a local FBI field office or the Secret Service, so recall and law enforcement contact come first. The SAR is the tempting runner-up: it is still required, and contacting law enforcement does not replace it, but it can follow within the normal deadline. 314(b) sharing is useful but secondary, and closing the victim's account does not recover the funds.",
    source: [
      { label: "FinCEN Advisory FIN-2019-A005 (BEC) – recall and law enforcement first, SAR still required", url: "https://www.fincen.gov/system/files/advisory/2019-07-16/Updated%20BEC%20Advisory%20FINAL%20508.pdf" },
      { label: "FinCEN Rapid Response Program fact sheet (Apr 2026) – report within 72 hours", url: "https://www.fincen.gov/system/files/2026-04/RRPFactSheet.pdf" }
    ]
  },
  {
    id: "TRAP-031", difficulty: "hard", domain: 4, topic: "Model risk – ongoing monitoring and drift", hy: false,
    q: "A bank's machine-learning transaction monitoring model was independently validated 14 months ago. Since then, the bank has launched an instant-payments product and acquired a portfolio of gig-economy customers. Ongoing monitoring reports show the model's score distribution has shifted, and alert-to-SAR conversion has halved. The next scheduled validation is ten months away, the vendor has released a new user interface, and the business wants to keep the model as it is. Under the interagency model risk guidance issued in April 2026 (SR 26-2), what is the BEST course of action?",
    options: [
      "Keep the model unchanged until the scheduled validation, since it was validated and approved",
      "Raise the alert threshold to restore the former conversion rate without further analysis",
      "Switch off the model and review every instant payment manually until the next validation",
      "Treat this as deterioration: assess performance and apply overlays, recalibration or redevelopment per policy"
    ],
    answer: [3],
    explanation: "SR 26-2 describes ongoing monitoring as evaluating whether a model still performs as expected given changes in products, exposures, activities, clients, data relevance or market conditions. A model that no longer performs as expected may warrant overlays, adjustment or redevelopment under the bank's model risk policy, subject to effective challenge. Waiting for the scheduled validation is the tempting runner-up, but ongoing monitoring exists precisely to catch changes between validations. Retuning thresholds without analysis, or abandoning the model for manual review, are not controlled responses.",
    source: [
      { label: "Federal Reserve SR 26-2 attachment – Revised Guidance on Model Risk Management (April 2026): ongoing model monitoring", url: "https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf" }
    ]
  },
  {
    id: "TRAP-032", difficulty: "hard", domain: 4, topic: "Cyber-events and SAR reporting", hy: true,
    q: "Attackers using stolen credentials log into 40 customers' online banking profiles and try to send wires totaling $600,000. The bank's fraud controls stop every wire, and no funds are lost. The information security team has logs of the attackers' IP addresses, timestamps and device fingerprints. The bank also recently redesigned its mobile app. Which statements are correct? (Choose two.)",
    options: [
      "A SAR is required even though no funds were lost, because the attempted wires total $5,000 or more",
      "No SAR is required, because the bank was the target and no transaction was completed",
      "The security team's technical logs should be kept out of the AML investigation",
      "The SAR should include available cyber data such as IP addresses with timestamps and device identifiers",
      "A SAR is required only if law enforcement asks the bank to file one"
    ],
    answer: [0, 3],
    explanation: "FinCEN's 2016 cyber advisory (FIN-2016-A005) states that a cyber-event intended to conduct or facilitate transactions counts as an attempted suspicious transaction. A SAR is therefore mandatory when the attempted transactions involve or aggregate $5,000 or more, even if they failed. The advisory also asks institutions to include relevant cyber-related information, such as IP addresses with timestamps, virtual-wallet information and device identifiers, and to have AML and cybersecurity units work together. SAR obligations cover attempted transactions, do not depend on a loss, and do not wait for a law enforcement request.",
    source: [
      { label: "FinCEN Advisory FIN-2016-A005 – cyber-events and cyber-enabled crime; mandatory SAR reporting", url: "https://www.fincen.gov/sites/default/files/advisory/2016-10-25/Cyber%20Threats%20Advisory%20-%20FINAL%20508_2.pdf" }
    ]
  },
  {
    id: "TRAP-033", difficulty: "hard", domain: 4, topic: "Travel rule – VASP transfer missing originator data", hy: false,
    q: "A VASP's travel-rule tool shows that a USD 18,000 virtual asset transfer to one of its customers arrived from a counterparty VASP in a jurisdiction that has not yet implemented the travel rule. No originator information came with it. The customer is a verified small business with a steady trading history, and the counterparty VASP is licensed at home. Under FATF standards, what is the MOST appropriate response?",
    options: [
      "Apply its risk-based policy to execute, reject or suspend the transfer, and take follow-up action",
      "Automatically reject every transfer from VASPs in jurisdictions without travel-rule laws",
      "Credit the transfer and take no action, since the originating VASP bears the obligation",
      "File an STR on the customer automatically for every transfer that lacks originator data"
    ],
    answer: [0],
    explanation: "INR.15 para 7(b) applies R.16 to virtual asset transfers: beneficiary VASPs must obtain and hold required originator information, and the other R.16 requirements, including monitoring for missing information, apply on the same basis. Under INR.16, the beneficiary institution needs risk-based policies to decide whether to execute, reject or suspend a transfer lacking required information and what follow-up to take, such as requesting the data, reassessing the counterparty or considering an STR. Blanket rejection is the tempting runner-up, but it is a de-risking rule, not the risk-based policy the standard requires. Ignoring the gap puts the whole obligation on the sender. Missing data calls for a risk-based review, not an automatic STR.",
    source: [
      { label: "FATF Recommendations (2026 ed.), INR.15 para 7(b) and INR.16 para 31", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "TRAP-034", difficulty: "hard", domain: 4, topic: "Sanctions alert disposition – licenses before blocking", hy: false,
    q: "A US bank's customer, a humanitarian NGO, sends a payment for medical supplies. The payee's name, registration number and address all match an SDN entry, and no information disqualifies the match. The NGO says the shipment is urgent and points to its long record of legitimate aid work. The payment is in euros, and the NGO recently changed auditors. According to OFAC's guidance on assessing potential matches, what should the analyst do NEXT?",
    options: [
      "Block the payment immediately and report it to OFAC within 10 business days",
      "Clear the alert as a false positive because the payment is for humanitarian purposes",
      "Ask OFAC to confirm the match before taking any further step",
      "Treat it as a valid match and check whether a license or exemption covers the payment"
    ],
    answer: [3],
    explanation: "OFAC FAQ 5 sets out the steps. Once a valid match is identified (Step 4), the institution reviews the relevant regulations to see whether an OFAC general or specific license, or an exemption, authorizes the transaction. Only if none applies does it block or reject (Step 5) and then report within 10 business days (Step 6). Blocking immediately is the tempting runner-up, but it skips the authorization check that OFAC places first. A humanitarian purpose alone does not make a true match a false positive, and OFAC does not confirm potential matches for institutions.",
    source: [
      { label: "OFAC FAQ 5 – steps for determining a valid match; check authorizations before blocking or rejecting", url: "https://ofac.treasury.gov/faqs/5" }
    ]
  },
  {
    id: "TRAP-035", difficulty: "hard", domain: 4, topic: "314(b) sharing in a mule investigation", hy: false,
    q: "Bank A is investigating a network of money mule accounts that receive romance-scam proceeds and forward them to accounts at Bank B. Both banks have current 314(b) notices on file with FinCEN, and Bank A filed a SAR on two of its customers last month. Bank A's investigator, who joined from Bank B last year, wants to coordinate with Bank B. Which actions are permitted under the section 314(b) safe harbor? (Choose two.)",
    options: [
      "Sharing transaction details, IP addresses and device identifiers linked to the mule accounts",
      "Giving Bank B a copy of the SAR that Bank A filed last month",
      "Telling Bank B that Bank A has already filed a SAR on the two customers",
      "Working with Bank B to file a joint SAR on the network",
      "Sharing information only after getting written consent from the account holders"
    ],
    answer: [0, 3],
    explanation: "FinCEN's 314(b) fact sheet states that registered institutions may share information such as transaction details, IP addresses, geolocation and device identifiers relating to possible money laundering, including money mule schemes involving fraud proceeds. Institutions that share information may also file joint SARs. Section 314(b) does not authorize sharing a SAR or revealing that one exists, so providing the copy or confirming the filing is prohibited. Customer consent is not required under the safe harbor.",
    source: [
      { label: "FinCEN Section 314(b) Fact Sheet – what may be shared; joint SARs; SARs themselves may not be shared", url: "https://www.fincen.gov/system/files/shared/314bfactsheet.pdf" }
    ]
  }
]);
