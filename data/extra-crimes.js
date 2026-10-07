window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "CRIME-001", domain: 2, topic: "Criminal Finances Act 2017: foreign tax evasion offence (s.46)", hy: true, difficulty: "hard",
    q: "Lionbank is incorporated in Singapore and has a London branch that serves UK corporate clients. A Singapore-based relationship manager, acting for the bank, knowingly helps a German client hide investment income from the German tax authority through an undisclosed structure. All of the relationship manager's conduct takes place in Singapore. The client's conduct is a crime in Germany and would be a crime if it involved UK tax. Germany has made no request to the UK, and Lionbank's prevention procedures cover UK taxes only. Under the UK Criminal Finances Act 2017, what is Lionbank's MOST likely position?",
    options: [
      "No exposure, because none of the facilitation conduct took place in the United Kingdom",
      "No exposure, because the foreign tax offence applies only to bodies incorporated in the UK",
      "Exposure under section 46, because it carries on business in the UK, unless its procedures were reasonable",
      "Exposure under section 45, because evading any tax through a bank with a UK branch is UK tax evasion"
    ],
    answer: [2],
    explanation: "Section 46 applies if the relevant body is incorporated in the UK, OR carries on business or part of a business in the UK, OR any part of the facilitation conduct takes place in the UK. These conditions are alternatives, so Lionbank's London branch is enough, and the runner-up ('no UK conduct') is wrong. Dual criminality is met. The defence requires reasonable procedures designed to prevent facilitation of foreign tax evasion (s.46(3)-(4)), so UK-only procedures are unlikely to help. Section 45 covers only UK taxes.",
    source: [
      { label: "Criminal Finances Act 2017, s.46 (legislation.gov.uk)", url: "https://www.legislation.gov.uk/ukpga/2017/22/section/46" },
      { label: "HMRC guidance: Tackling tax evasion – corporate offences (2017)", url: "https://assets.publishing.service.gov.uk/media/5a82aaa0e5274a2e8ab58b82/Tackling-tax-evasion-corporate-offences.pdf" }
    ]
  },
  {
    id: "CRIME-002", domain: 1, topic: "Tax evasion facilitation: elements of the CFA 2017 offences", hy: false, difficulty: "hard",
    q: "A UK bank's head of financial crime is training staff on the corporate offences of failing to prevent the facilitation of tax evasion in the Criminal Finances Act 2017. Which statements are correct? (Choose two.)",
    options: [
      "The bank can be prosecuted even if the taxpayer whose evasion was facilitated is never convicted",
      "A director of the bank can personally be convicted of the corporate failure-to-prevent offence",
      "The offences cover facilitation by employees only, not by agents or outside service providers",
      "Facilitation that is criminal abroad only because it was negligent cannot trigger the foreign offence",
      "The bank has a complete defence if it proves senior management did not know of the facilitation"
    ],
    answer: [0, 3],
    explanation: "HMRC's guidance says a conviction of the taxpayer is not a prerequisite, although the prosecution must still prove the taxpayer-level offence to the criminal standard. The foreign offence needs dual criminality, and UK law criminalises only deliberate and dishonest facilitation, so negligent facilitation does not qualify even where foreign law punishes it. Only relevant bodies (companies and partnerships) commit the offence, not individuals. Associated persons include agents and anyone performing services for the body (s.44). The only defence is reasonable prevention procedures, not management ignorance.",
    source: [
      { label: "HMRC guidance: Tackling tax evasion – corporate offences (2017)", url: "https://assets.publishing.service.gov.uk/media/5a82aaa0e5274a2e8ab58b82/Tackling-tax-evasion-corporate-offences.pdf" },
      { label: "Criminal Finances Act 2017, s.44 (legislation.gov.uk)", url: "https://www.legislation.gov.uk/ukpga/2017/22/section/44" }
    ]
  },
  {
    id: "CRIME-003", domain: 1, topic: "CRS avoidance through residence and citizenship by investment schemes", hy: false, difficulty: "medium",
    q: "A private bank in a jurisdiction that applies the OECD Common Reporting Standard (CRS) onboards a wealthy entrepreneur. She self-certifies sole tax residence in a small island state, where she obtained residence last year through an investment scheme. The state charges little or no personal income tax on offshore financial assets and has no minimum-stay requirement. Her business and family are based in another country, and she rarely visits the island. What should the bank do?",
    options: [
      "Treat the self-certification as doubtful and ask further questions, such as other residences, time spent elsewhere and where she files tax returns",
      "Accept the self-certification, because a residence certificate issued by the island's government is conclusive for CRS purposes",
      "Report the account only to the island's tax authority, because residence obtained by investment always creates tax residence there",
      "Refuse the account, because the CRS prohibits financial institutions from accepting clients whose residence was obtained by investment"
    ],
    answer: [0],
    explanation: "The OECD warns that citizenship and residence by investment schemes can be misused to avoid CRS reporting. Potentially high-risk schemes give access to a low personal income tax rate on offshore financial assets and do not require significant time in the jurisdiction. Where there is doubt, the institution should not rely on the self-certification until it has asked further questions (OECD guidance, as adopted by tax authorities such as Curaçao's Ministry of Finance in January 2026): whether residence was obtained through such a scheme, whether she holds other residence rights, whether she spent more than 90 days elsewhere in the previous year, and where she filed income tax returns. A residence certificate is not conclusive, and the CRS does not bar these clients.",
    source: [
      { label: "Curaçao Ministry of Finance – CRS guidance note on CBI/RBI circumvention schemes (12 January 2026), restating the OECD criteria and questions", url: "https://minfin.cw/wp-content/uploads/2026/01/guidance-note-on-crs-circumvention-schemes_12012026.pdf" },
      { label: "OECD – Residence/citizenship by investment schemes (list of potentially high-risk schemes)", url: "https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/residence-citizenship-by-investment/" }
    ]
  },
  {
    id: "CRIME-004", domain: 1, topic: "Tax evasion as a predicate: fiscal fuel theft (FIN-2026-Alert003)", hy: false, difficulty: "hard",
    q: "A US bank's customer is a family-owned fuel trader in South Texas that has long bought gasoline from major US refiners. In 2026 its account starts receiving several large, non-descriptive wires a day from one Mexican trading company. That company holds a Mexican permit to buy and sell fuel within Mexico (a CNE permit) but no permit to import fuel (a SENER permit). Shipping papers show the fuel trucked to Tamaulipas and described as 'lubricants' and 'waste oils'. The trader also recently bought two used tanker trucks and refinanced its warehouse. What is the MOST likely scheme?",
    options: [
      "Northbound smuggling of stolen Mexican crude oil for sale to US refineries",
      "Fiscal fuel theft: smuggling US fuel into Mexico to evade Mexican fuel import taxes",
      "Legitimate cross-border fuel trade by a properly licensed Mexican wholesaler",
      "Laundering of US drug proceeds by over-invoicing fuel sold to a Mexican buyer"
    ],
    answer: [1],
    explanation: "FinCEN's June 2026 supplemental alert describes cartel 'fiscal fuel theft' (huachicol fiscal): US fuel is smuggled into Mexico, often misdescribed as lubricants or waste oils, to evade Mexico's IEPS import tax. CNE-permit companies may not import fuel, so payments from a Mexican company without a SENER permit are 'highly indicative' of smuggling. The runner-up, northbound crude theft, was the focus of FinCEN's May 2025 alert, but here refined fuel moves south. Nothing points to over-invoicing, and the truck and warehouse details are noise. SARs should use the key term FIN-2026-FISCALFUELTHEFT.",
    source: [
      { label: "FinCEN FIN-2026-Alert003 (June 2026) – fuel smuggling and tax evasion schemes", url: "https://www.fincen.gov/system/files/2026-06/FinCEN-Alert-Fiscal-Fuel-Theft.pdf" }
    ]
  },
  {
    id: "CRIME-005", domain: 2, topic: "US specified unlawful activities: foreign predicate offences (18 U.S.C. 1956(c)(7)(B))", hy: true, difficulty: "hard",
    q: "A US bank's investigation shows that incoming wires derive from crimes committed entirely abroad by foreign nationals. Prosecutors can charge laundering under 18 U.S.C. 1956 only if the underlying crime is a 'specified unlawful activity' (SUA). For a financial transaction that occurs in whole or in part in the United States, which foreign offence is expressly listed as an SUA in section 1956(c)(7)(B)?",
    options: [
      "Evasion of the foreign country's personal income tax",
      "Breach of the foreign country's foreign-exchange controls",
      "Violation of the foreign country's campaign finance laws",
      "Trafficking in persons, including recruiting people for commercial sex"
    ],
    answer: [3],
    explanation: "Section 1956(c)(7)(B) lists offences against a foreign nation that are SUAs, including drug offences, violent crimes, fraud against a foreign bank, bribery and misappropriation of public funds, certain smuggling and export-control violations, and (vii) trafficking in persons and related sexual exploitation offences. Foreign tax evasion is not on that list, even though FATF's designated categories include tax crimes; this gap is a common exam trap. Exchange-control and campaign finance violations are not listed either.",
    source: [
      { label: "18 U.S.C. 1956 (GovInfo, US Code)", url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title18/html/USCODE-2023-title18-partI-chap95-sec1956.htm" }
    ]
  },
  {
    id: "CRIME-006", domain: 1, topic: "FATF designated categories of predicate offences", hy: true, difficulty: "medium",
    q: "Under the glossary of the FATF Recommendations, which of the following are 'designated categories of offences' that each country's money laundering offence should cover at a minimum? (Choose two.)",
    options: [
      "Breach of targeted financial sanctions related to proliferation",
      "Environmental crime, such as criminal extraction of natural resources or waste trafficking",
      "Illegal gambling that does not involve an organised criminal group",
      "Operating an unlicensed money transmission business",
      "Trafficking in human beings and migrant smuggling"
    ],
    answer: [1, 4],
    explanation: "INR.3 says each country should, at a minimum, include a range of offences within each designated category. The FATF glossary lists, among others, trafficking in human beings and migrant smuggling, and environmental crime (for example criminal harvesting, extraction or trafficking of protected species, precious metals and stones, other natural resources, or waste). It also lists tax crimes (direct and indirect) and smuggling, including customs and excise. Sanctions breaches, illegal gambling and unlicensed money transmission are not designated categories, although countries may criminalise them separately.",
    source: [
      { label: "FATF Recommendations (2026), INR.3 and glossary (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "CRIME-007", domain: 1, topic: "Human trafficking: illicit massage business payments (FIN-2026-NTC1)", hy: false, difficulty: "medium",
    q: "A bank's monitoring flags a retail customer who, on many evenings, sends three peer-to-peer payments within a few minutes to three different accounts: a small one, a larger one and another small one. The recipient accounts change every few weeks, and payment memos read 'wellness' and 'personal care'. According to FinCEN's May 2026 notice on human trafficking, what may this pattern indicate?",
    options: [
      "Structuring of P2P payments to stay under the payment app's daily limit",
      "Splitting restaurant bills with different friends after group dinners",
      "Payments at an illicit massage business: a door fee, a service fee and a tip",
      "Sextortion payments demanded by an overseas criminal network"
    ],
    answer: [2],
    explanation: "FinCEN's notice FIN-2026-NTC1, issued for the 2026 FIFA World Cup, lists three rapid, sequential P2P transfers to three separate accounts as a possible sign of illicit massage business payments (a door fee, a service fee and a tip), which can be linked to sex trafficking. It also notes vague memos such as 'wellness' or 'personal care' that may disguise payment for commercial sex. Structuring and sextortion do not fit the fixed three-payment pattern. SARs should use the key term FIN-2026-HTWORLDCUP and select field 38(h).",
    source: [
      { label: "FinCEN FIN-2026-NTC1 (May 2026) – human trafficking during the 2026 FIFA World Cup", url: "https://www.fincen.gov/system/files/2026-05/FinCEN-WCHT-Notice.pdf" }
    ]
  },
  {
    id: "CRIME-008", domain: 1, topic: "Human trafficking: branch response to a suspected victim", hy: true, difficulty: "hard",
    q: "In June 2026, a young woman visits a branch near a World Cup stadium to deposit cash. A man who says he is her 'manager' stays at her side, answers questions for her and holds her ID. Her account shows late-night cash deposits at gas-station ATMs, followed quickly by P2P transfers to one other account. It shows no spending on rent or food. The teller suspects she is a trafficking victim. Under FinCEN's guidance, what should the bank do?",
    options: [
      "Ask the man to step outside so the teller can ask her privately whether she is being held against her will",
      "Not raise the concern with either of them, escalate internally, contact law enforcement or the national hotline, and file a SAR",
      "Refuse the deposit and close the account at once so the bank cannot be used to move trafficking proceeds",
      "Complete the deposit, note the visit in the file and review the account at its next periodic review"
    ],
    answer: [1],
    explanation: "FinCEN's May 2026 notice says that if staff suspect a customer is a trafficker or a victim, they should not approach them with these concerns but should immediately contact law enforcement, for example through the National Human Trafficking Hotline. The bank should also file a SAR as soon as possible, regardless of threshold. Questioning her privately is the tempting runner-up, but it can endanger her and alert the trafficker. Closing the account loses intelligence and does not protect her, and waiting for a periodic review ignores clear red flags such as late-night gas-station ATM deposits and no spending on essential needs.",
    source: [
      { label: "FinCEN FIN-2026-NTC1 (May 2026) – human trafficking during the 2026 FIFA World Cup", url: "https://www.fincen.gov/system/files/2026-05/FinCEN-WCHT-Notice.pdf" }
    ]
  },
  {
    id: "CRIME-009", domain: 1, topic: "Labor trafficking: business and worker account indicators", hy: false, difficulty: "hard",
    q: "A bank reviews a commercial cleaning company that won large contracts at hotels and stadiums for the 2026 World Cup. Its revenue has tripled, yet its account shows almost no payroll, tax withholding or benefit payments compared with similar firms. Several of its workers have accounts at the bank. Each receives a small paycheck that moves the same day to one individual's account, and their accounts show almost no spending on housing or food. The owner recently bought a boat. What is the MOST likely concern?",
    options: [
      "Payroll tax evasion by paying the workers off the books in cash",
      "Funnel account activity moving drug proceeds across the country",
      "Workers sending remittances home through a trusted relative",
      "Labor trafficking, with workers' wages withheld or taken by the trafficker"
    ],
    answer: [3],
    explanation: "FinCEN's 2026 human trafficking notice lists, as labor trafficking red flags, a business account with nonexistent or very low payroll compared with peers, and accounts with few or no transactions for essential needs whose paycheck is immediately transferred to a single individual. Payroll tax evasion is the runner-up: it could explain the missing payroll, but not the same-day sweeps of workers' wages to one person or their lack of spending on basic needs. Nothing suggests drug proceeds, and remittances would go abroad to families, not to one local account.",
    source: [
      { label: "FinCEN FIN-2026-NTC1 (May 2026) – human trafficking during the 2026 FIFA World Cup", url: "https://www.fincen.gov/system/files/2026-05/FinCEN-WCHT-Notice.pdf" }
    ]
  },
  {
    id: "CRIME-010", domain: 1, topic: "Scam centers and trafficked workers (FIN-2026-Alert005)", hy: false, difficulty: "hard",
    q: "A US customer asks her bank to wire $8,000 to an account in Cambodia. She explains that her nephew took an overseas 'customer service' job advertised on social media. His employer took his passport, forces him to send investment pitches to strangers online, and says he will be released only when his family pays off his 'recruitment debt'. He has sent her photos of injuries. She has never sent money to Asia before and is otherwise financially stable. What is the MOST likely situation?",
    options: [
      "Her nephew is a trafficking victim forced to work in a scam center, and the payment is a ransom",
      "Her nephew is a willing scammer, and the payment helps fund the scam center's operations",
      "She is the target of a pig butchering scam, and the story about her nephew is a pretext",
      "Her nephew is being smuggled, and the payment is a fee for his next border crossing"
    ],
    answer: [0],
    explanation: "FinCEN's September 2026 alert says criminal gangs have trafficked hundreds of thousands of people to scam centers, mainly in Cambodia, Burma and Laos. Victims may have their passports taken, are coerced into committing online fraud, and report being held until their families pay ransoms. A pig butchering scam is the runner-up, but it builds trust and lures the victim into fake investments rather than demanding a debt payment to free a relative. The bank should file a SAR with the key term FIN-2026-SCAMCENTERS and refer the matter to law enforcement.",
    source: [
      { label: "FinCEN FIN-2026-Alert005 (Sept 2026) – digital asset investment scam centers", url: "https://www.fincen.gov/system/files/2026-08/FinCEN-Alert-Scam-Centers.pdf" }
    ]
  },
  {
    id: "CRIME-011", domain: 1, topic: "Recovery scams targeting prior fraud victims", hy: false, difficulty: "hard",
    q: "Last year a 70-year-old customer lost $90,000 on a fake crypto investment platform. This month a 'law firm' calls her, says it works with a federal agency, and offers to recover her money for a $12,000 upfront retainer. She must pay in stablecoin through a money services business that the firm says is 'approved by FinCEN'. She has no engagement letter, and the firm's website was registered three weeks ago. She asks her bank to fund the purchase. What is the MOST likely situation?",
    options: [
      "A legitimate asset-recovery service that simply has an unusual fee structure",
      "An attempt by the customer to launder her own past losses through a new account",
      "A recovery scam aimed at someone who has already been a scam victim",
      "A pig butchering scam in its early trust-building stage with small deposits"
    ],
    answer: [2],
    explanation: "FinCEN's September 2026 scam center alert warns that scammers repeatedly target past victims with 'recovery scams', posing as a government agency or law firm that will recover lost funds. Its red flags include a payment to retain a law firm without documentation showing the service is legitimate, and an MSB that claims to be 'approved by FinCEN'. FinCEN registers MSBs but does not approve, license or endorse them. Pig butchering is the runner-up, but its early stage involves building a relationship and small 'investments', not an upfront fee to recover earlier losses.",
    source: [
      { label: "FinCEN FIN-2026-Alert005 (Sept 2026) – digital asset investment scam centers", url: "https://www.fincen.gov/system/files/2026-08/FinCEN-Alert-Scam-Centers.pdf" },
      { label: "FinCEN FIN-2025-NTC1 (Aug 2025) – CVC kiosks (MSB registration is not endorsement)", url: "https://www.fincen.gov/system/files/2025-08/FinCEN-Notice-CVCKIOSK.pdf" }
    ]
  },
  {
    id: "CRIME-012", domain: 1, topic: "Scam centers: guarantee marketplaces", hy: false, difficulty: "medium",
    q: "FinCEN's September 2026 alert on scam centers describes 'guarantee marketplaces', such as Huione Group's Haowang Guarantee. What role do they MOST typically play in the scam center ecosystem?",
    options: [
      "They insure victims' deposits at regulated crypto exchanges against losses from fraud",
      "They are licensed escrow agents that hold buyers' funds in cross-border property deals",
      "They are analytics firms that trace scam proceeds on-chain and help freeze them",
      "They are Telegram-based markets that escrow payments and link scammers to launderers"
    ],
    answer: [3],
    explanation: "FinCEN describes guarantee marketplaces as online markets, typically networks of Chinese-language Telegram chat groups, that act as trusted intermediaries and hold a buyer's payment in escrow until delivery. They sell money laundering, account-creation and phishing services and connect scam center operators with professional money launderers such as Chinese money laundering networks. They are not insurers, licensed escrow agents or analytics providers. FinCEN found that Huione Group laundered at least $4 billion in illicit proceeds between August 2021 and January 2025.",
    source: [
      { label: "FinCEN FIN-2026-Alert005 (Sept 2026) – digital asset investment scam centers", url: "https://www.fincen.gov/system/files/2026-08/FinCEN-Alert-Scam-Centers.pdf" }
    ]
  },
  {
    id: "CRIME-013", domain: 2, topic: "Section 311 special measure on Huione Group (2025)", hy: true, difficulty: "hard", changed: "FinCEN section 311 final rule on Huione Group, Oct 2025",
    q: "In 2026, a foreign respondent bank sends a payment through its correspondent account at a US bank. The beneficiary is a company in Cambodia-based Huione Group, which is covered by FinCEN's October 2025 final rule under section 311 of the USA PATRIOT Act. Assume no OFAC sanctions apply to the parties. What does the rule require of the US bank?",
    options: [
      "Block the funds, report them to OFAC within 10 business days and hold them in an interest-bearing account",
      "Take reasonable steps not to process the transaction, and not open or maintain correspondent accounts for Huione Group",
      "Process the payment, because the rule applies only to accounts that Huione Group holds directly at US banks",
      "Process the payment and file a SAR within 30 days, because the rule only requires enhanced due diligence"
    ],
    answer: [1],
    explanation: "FinCEN's final rule (14 October 2025) prohibits covered financial institutions from opening or maintaining correspondent accounts for or on behalf of Huione Group. It also requires them to take reasonable steps not to process transactions for a foreign bank's correspondent account if the transaction involves Huione Group, which prevents indirect access. Blocking is the runner-up, but it is an OFAC sanctions remedy: a section 311 special measure prohibits access rather than freezing property. The rule covers indirect access, not only direct accounts, and it goes beyond enhanced due diligence.",
    source: [
      { label: "FinCEN press release (14 Oct 2025) – final rule severing Huione Group", url: "https://www.fincen.gov/news/news-releases/fincen-issues-final-rule-severing-huione-group-us-financial-system" },
      { label: "FinCEN FIN-2026-Alert005 (Sept 2026) – scam centers (Huione rule summary)", url: "https://www.fincen.gov/system/files/2026-08/FinCEN-Alert-Scam-Centers.pdf" }
    ]
  },
  {
    id: "CRIME-014", domain: 1, topic: "CVC kiosk operators: red flags for non-compliance (FIN-2025-NTC1)", hy: false, difficulty: "medium",
    q: "A bank is reviewing a business customer that operates 60 convertible virtual currency (CVC) kiosks in convenience stores. Which findings are red flags that FinCEN lists for a potentially non-compliant kiosk operator? (Choose two.)",
    options: [
      "It advertises that customers can buy crypto at its kiosks with only a phone number",
      "It places its kiosks in gas stations and stores that have long opening hours",
      "It charges fees far above similar operators and does not disclose its rates clearly",
      "It holds state money transmitter licences and is registered with FinCEN as an MSB",
      "Its kiosks support transactions in stablecoins as well as in bitcoin"
    ],
    answer: [0, 2],
    explanation: "FinCEN's August 2025 notice lists red flags for non-compliant kiosk owner-operators. They include advertising transactions without identification or with only a phone number or email, and charging unusually high fees compared with similar operators or having opaque rates and fees. Other red flags are failing to register as an MSB or hold state licences, failing to collect customer information, and structuring cash. Locations with heavy foot traffic and long hours are typical of legitimate kiosks, and many kiosks support several virtual currencies.",
    source: [
      { label: "FinCEN FIN-2025-NTC1 (Aug 2025) – CVC kiosks for scam payments", url: "https://www.fincen.gov/system/files/2025-08/FinCEN-Notice-CVCKIOSK.pdf" }
    ]
  },
  {
    id: "CRIME-015", domain: 1, topic: "CVC kiosk operators: FinCEN registration is not a licence", hy: false, difficulty: "hard",
    q: "A new business customer runs a network of CVC kiosks. When the bank asks about its AML program, the owner shows a printout from FinCEN's MSB Registrant Search page and says this means FinCEN has licensed and vetted the business. Over the next month, he deposits kiosk cash in amounts of $9,500 to $9,900 at several branches, sometimes at two branches on the same day. Asked why, he says it is 'just how the cash comes in'. What is the BEST response?",
    options: [
      "Treat the registration as no proof of compliance, review the kiosk AML program and file a SAR on the deposits",
      "Rely on the FinCEN registration as evidence of compliance and file CTRs only when a single deposit exceeds $10,000",
      "Ask FinCEN to confirm that the business is licensed before deciding whether the deposits are suspicious",
      "Close the account at once without filing a SAR, because kiosk operators are prohibited customers for banks"
    ],
    answer: [0],
    explanation: "FinCEN's 2025 kiosk notice says MSB registration is not a recommendation, certification or endorsement, and that FinCEN does not license MSBs. It lists as red flags an operator structuring cash below the CTR threshold and giving evasive or misleading answers. The bank should assess the operator's own AML program and report the structuring. CTRs must aggregate same-day cash deposits across branches, so 'single deposit' reporting is wrong. Asking FinCEN to confirm a licence is the runner-up, but no such licence exists, and kiosk operators are not prohibited customers.",
    source: [
      { label: "FinCEN FIN-2025-NTC1 (Aug 2025) – CVC kiosks for scam payments", url: "https://www.fincen.gov/system/files/2025-08/FinCEN-Notice-CVCKIOSK.pdf" }
    ]
  },
  {
    id: "CRIME-016", domain: 1, topic: "Ransomware payments: OFAC enforcement and licensing policy", hy: true, difficulty: "hard",
    q: "A US manufacturer is hit by ransomware. Within hours it reports the attack to the FBI and CISA, shares the ransom note and wallet address, and keeps cooperating. Its backups are corrupted, so it pays the ransom through a negotiator. Two weeks later, the wallet is linked to a person on OFAC's SDN List. The company had followed CISA's ransomware guidance and had an incident response plan. How is OFAC MOST likely to view the payment?",
    options: [
      "No violation can arise, because the company did not know that the recipient was sanctioned",
      "A licence would have been granted if requested, so OFAC will treat the payment as authorized",
      "A public civil penalty is certain, because the payment benefited a person on the SDN List",
      "Its early report and cooperation count as voluntary self-disclosure and favour a non-public response"
    ],
    answer: [3],
    explanation: "OFAC's September 2021 updated ransomware advisory says civil liability is strict, so lack of knowledge is no defence. However, a self-initiated, complete report to law enforcement or CISA made as soon as possible after the attack counts as a voluntary self-disclosure and a significant mitigating factor. Full cooperation and meaningful cybersecurity steps also mitigate, and OFAC would then be more likely to issue a No Action Letter or Cautionary Letter. Licence applications for ransomware payments are reviewed case by case with a presumption of denial, so the licence option is wrong.",
    source: [
      { label: "OFAC Updated Advisory on Potential Sanctions Risks for Facilitating Ransomware Payments (Sept 2021)", url: "https://ofac.treasury.gov/media/912981/download?inline" }
    ]
  },
  {
    id: "CRIME-017", domain: 1, topic: "DPRK revenue generation: IT worker laptop farms", hy: false, difficulty: "hard",
    q: "A bank reviews a retail customer in New Jersey who set up two single-member LLCs last year. The LLCs receive monthly payments from more than a dozen US tech companies, invoiced as 'contract developer services' for people with different names. Within days, most of each payment goes to accounts in China and the UAE, and the customer keeps about 10%. Courier records show many company-issued laptops delivered to his home, and he recently bought several keyboard-video-mouse (KVM) switches online. What is the MOST likely activity?",
    options: [
      "A small staffing agency's normal payments to its offshore subcontractors",
      "Unlicensed money transmission for a family remittance business",
      "A 'laptop farm' that hides North Korean IT workers and moves their pay abroad",
      "Business email compromise in which he acts as an unwitting money mule"
    ],
    answer: [2],
    explanation: "In June 2025 the DOJ described US facilitators who hosted company laptops at their homes, connected them to KVM switches for remote access, and set up shell companies and accounts to receive pay for North Korean IT workers using stolen or fake identities, sending much of it overseas. The DOJ said these schemes evade sanctions and fund the regime's weapons programs. Offshore subcontracting is the runner-up, but it would not need company laptops at his home, remote-access hardware and many different identities. Nothing suggests remittances or redirected supplier invoices.",
    source: [
      { label: "DOJ press release (30 June 2025) – nationwide actions against North Korean remote IT worker schemes", url: "https://www.justice.gov/opa/pr/justice-department-announces-coordinated-nationwide-actions-combat-north-korean-remote" }
    ]
  },
  {
    id: "CRIME-018", domain: 1, topic: "Iran shadow banking: front companies and 'rahbar' firms (FIN-2026-Alert002)", hy: true, difficulty: "hard",
    q: "A US bank processes dollar payments for a foreign correspondent. Its monitoring finds a Hong Kong company, formed eight months ago, that holds a non-resident account at a bank in mainland China. The company sends large, round-dollar payments to a UAE 'general trading' company. One says it trades electronics and the other building materials, and funds are moved on within a day. Neither company is on a sanctions list. The Hong Kong company's director also runs a logistics firm in Malaysia. What is the MOST likely explanation?",
    options: [
      "An Iranian shadow banking network of front companies set up through exchange houses",
      "Ordinary treasury netting between subsidiaries of a single multinational group",
      "Trade-based laundering for a Mexican cartel through the Black Market Peso Exchange",
      "Capital flight by a Chinese individual trying to get around foreign exchange limits"
    ],
    answer: [0],
    explanation: "FinCEN's May 2026 IRGC alert says Iranian banks set up 'rahbar' companies that use exchange houses to create front companies in third countries. Indicators visible to US correspondents include recently incorporated entities moving unusually large sums, rapid movement of funds, transactions between companies in unrelated lines of business, and large round-dollar payments. FinCEN found likely shell companies moved $5 billion in 2024, mainly from non-resident accounts at banks in China held by Hong Kong companies to the UAE. Capital flight is the runner-up, but it would not involve a UAE trading counterparty in an unrelated business.",
    source: [
      { label: "FinCEN FIN-2026-Alert002 (May 2026) – IRGC front companies, facilitators and digital assets", url: "https://www.fincen.gov/system/files/2026-05/FinCEN-Alert-IRGC.pdf" }
    ]
  },
  {
    id: "CRIME-019", domain: 1, topic: "Proliferation and sanctions evasion: Iranian aviation procurement", hy: false, difficulty: "medium",
    q: "A Dubai free-zone 'general trading' company, formed last year and listing a residential address as its office, asks its bank to pay a US supplier for Western-made aircraft brake assemblies. The goods are to be delivered to a freight forwarder in a second country. The buyer has never traded aviation goods before. It says the deal is 'cleared by OFAC' but does not provide a licence. What does this MOST strongly suggest?",
    options: [
      "Routine aftermarket parts trading of the kind typical in Gulf free zones",
      "Procurement of aircraft parts for Iranian airlines through front companies",
      "Trade-based money laundering through under-invoicing of the brake assemblies",
      "Procurement fraud in which the buyer never intends to pay the supplier"
    ],
    answer: [1],
    explanation: "FinCEN's September 2026 alert on Iranian aviation procurement lists these red flags: a general trading company in a free trade zone that does not normally deal in aviation goods, a recently formed company with a residential address, orders delivered to a freight forwarder in a second country, and claims of OFAC or BIS authorisation without copies. Iran uses front companies and transshipment hubs such as the UAE and Türkiye to obtain parts for airlines such as Mahan Air, which supports the IRGC. Nothing points to mispricing or non-payment. SARs should use FIN-2026-IRANAIR, and possible violations can also be reported to OFAC.",
    source: [
      { label: "FinCEN FIN-2026-Alert006 (Sept 2026) – Iranian commercial aviation procurement", url: "https://www.fincen.gov/system/files/2026-09/FinCEN-Alert-Iranian-Commercial-Aviation.pdf" }
    ]
  },
  {
    id: "CRIME-020", domain: 2, topic: "FATF R.8 (2023 revision): NPOs and the risk-based approach", hy: true, difficulty: "medium",
    q: "A country is revising its regime for non-profit organisations (NPOs) to meet FATF Recommendation 8 as revised in 2023. Which proposals are consistent with R.8 and its Interpretive Note? (Choose two.)",
    options: [
      "Apply the new NPO rules to every not-for-profit body, including sports clubs and residents' associations",
      "Require registered charities to carry out customer due diligence on their donors and beneficiaries",
      "For NPOs assessed as low risk, rely on outreach alone and refrain from additional measures",
      "Classify all NPOs working in conflict zones as high risk and require banks to exit them",
      "Identify which organisations fall within the FATF definition of an NPO and assess their TF risks"
    ],
    answer: [2, 4],
    explanation: "R.8 requires countries to identify organisations within the FATF's functional definition of an NPO, assess their TF risks and apply focused, proportionate, risk-based measures without unduly disrupting legitimate NPO activity. For low-risk NPOs, countries may focus only on outreach and refrain from further measures. INR.8 says applying measures to organisations outside the definition, or measures disproportionate to assessed risk, is not in line with R.8. It also says NPOs are not reporting entities and should not be required to conduct CDD. Blanket high-risk labels and forced exits contradict the risk-based approach.",
    source: [
      { label: "FATF Recommendations (2026), R.8 and INR.8 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "CRIME-021", domain: 1, topic: "Terrorist financing: crowdfunding abuse (FATF 2023)", hy: false, difficulty: "hard",
    q: "A registered aid charity runs an online crowdfunding campaign to fund a clinic in a region where a designated terrorist group controls the roads. Its donation and spending records match the campaign, and its staff are vetted. Field reports show that its local partner pays 'road fees' at armed checkpoints and that the group takes a share of the supplies. Its bank has found nothing unusual in the campaign's inflows. According to FATF's 2023 report on crowdfunding for terrorism financing, which risk does this MOST closely match?",
    options: [
      "An individual with no charity affiliation raising funds under a humanitarian pretext",
      "A sham charity that never carries out the humanitarian work it advertises",
      "Use of a dedicated crowdfunding platform set up to serve extremist causes",
      "A legitimate NPO becoming a victim of extortion or skimming in a high-risk area"
    ],
    answer: [3],
    explanation: "FATF's October 2023 report identifies three ways humanitarian or charitable causes are abused: individuals with no charity affiliation who raise funds that actually support terrorism, charities that divert some or all of the funds instead of doing the advertised work, and legitimate NPOs that become victims of extortion or skimming in high-risk areas controlled by terrorist groups. Here the charity does the work it advertises, so the sham-charity option, the runner-up, does not fit. Nothing suggests an extremist-dedicated platform. Under R.8, the bank should manage this risk proportionately rather than exit the charity automatically.",
    source: [
      { label: "FATF – Crowdfunding for Terrorism Financing (Oct 2023), copy hosted by FIAU Malta", url: "https://fiaumalta.org/app/uploads/2023/11/Crowdfunding-Terrorism-Financing-2023.pdf" }
    ]
  },
  {
    id: "CRIME-022", domain: 1, topic: "Environmental crime: waste and hazardous substances trafficking", hy: false, difficulty: "medium",
    q: "A recycling company offers to take hazardous electronic waste from manufacturers for well below the cost of lawful disposal. Its bank sees large payments from manufacturers, followed by payments to shipping agents for containers to a country in Southeast Asia. No import permits from that country are on file, and customs declarations describe the cargo as 'used spare parts for resale'. Which environmental crime in FinCEN's 2021 notice does this pattern MOST directly match?",
    options: [
      "Illegal mining of metals for export to refiners",
      "Illegal, unreported and unregulated fishing",
      "Waste and hazardous substances trafficking",
      "Illegal logging and associated timber trade"
    ],
    answer: [2],
    explanation: "FinCEN's November 2021 notice (FIN-2021-NTC4) names five environmental crimes: wildlife trafficking, illegal logging, illegal fishing, illegal mining, and waste and hazardous substances trafficking. It gives the export of hazardous waste without the receiving country's permission as a typical example of waste trafficking, which can happen at the collection, transport, sorting, recycling or disposal stage. Here the company is paid to take the waste and then ships it under a false description. SARs should use the key term FIN-2021-NTC4, select field 38(z) and include the keyword 'waste trafficking'.",
    source: [
      { label: "FinCEN FIN-2021-NTC4 (Nov 2021) – environmental crimes", url: "https://www.fincen.gov/system/files/2021-11/FinCEN%20Environmental%20Crimes%20Notice%20508%20FINAL.pdf" }
    ]
  },
  {
    id: "CRIME-023", domain: 1, topic: "Environmental crime: illegal fishing and associated crimes", hy: false, difficulty: "medium",
    q: "A seafood importer buys from a foreign fishing company. Its catch certificates for some shipments show different species and weights from its invoices. All the crew's wages are paid into one account controlled by a recruitment agent, who passes on only small amounts to the crew's home countries. According to FinCEN's 2021 environmental crimes notice, which offences are MOST closely associated with this activity?",
    options: [
      "Illegal fishing, which is often linked to forgery, corruption and human trafficking",
      "Wildlife trafficking of protected land species for traditional medicine markets",
      "Waste trafficking through the dumping of fish-processing by-products at sea",
      "Tax evasion through VAT carousel fraud on imports of frozen seafood"
    ],
    answer: [0],
    explanation: "FinCEN's notice says illegal fishing is often associated with transnational criminal organizations, corruption, money laundering, human trafficking, piracy, drug trafficking and forgery. It estimates annual illicit proceeds of $11 billion to $24 billion and notes that the United States imported about $2.4 billion of seafood from illegal, unreported and unregulated (IUU) fishing in 2019. Mismatched catch documents suggest forgery, and control of the crew's wages by a recruiter suggests possible forced labour. The other options do not fit a fishing supply chain with these features.",
    source: [
      { label: "FinCEN FIN-2021-NTC4 (Nov 2021) – environmental crimes", url: "https://www.fincen.gov/system/files/2021-11/FinCEN%20Environmental%20Crimes%20Notice%20508%20FINAL.pdf" }
    ]
  },
  {
    id: "CRIME-024", domain: 2, topic: "UK Payment Services Regulations: delaying suspected APP fraud payments (date calculation)", hy: true, difficulty: "hard",
    q: "At 11:00 on Monday 2 November 2026, a UK bank receives a customer's online instruction to send £18,000 by Faster Payments to a new UK payee. By 16:00 on Tuesday, its fraud team has reasonable grounds to suspect the customer is being deceived by a third party. There are no bank holidays that week. Under regulation 86 of the Payment Services Regulations 2017, as amended in 2024, what may the bank do?",
    options: [
      "Delay the payment until the end of Monday 9 November, and tell the customer within two business days",
      "Delay it until the end of Friday 6 November at the latest, telling the customer by the end of Tuesday why and what it needs",
      "Refuse the payment and submit a DAML request, because the 2024 rules replaced delays with a consent regime",
      "Delay it for as long as the investigation takes, provided it covers any interest or charges the customer incurs"
    ],
    answer: [1],
    explanation: "The Payment Services (Amendment) Regulations 2024 (in force 30 October 2024) let a payer's PSP delay a UK sterling payment if, by the end of the business day after receipt (Tuesday), it establishes reasonable grounds to suspect fraud or dishonesty by someone other than the payer. The delay must be no longer than necessary and must end by the fourth business day after receipt (Friday 6 November). The PSP must tell the payer about the delay, the reasons, and any information or action needed by the end of the next business day. It is also liable for resulting charges and interest, but that does not allow an open-ended delay.",
    source: [
      { label: "The Payment Services (Amendment) Regulations 2024, SI 2024/1013 (legislation.gov.uk)", url: "https://www.legislation.gov.uk/uksi/2024/1013/made" }
    ]
  },
  {
    id: "CRIME-025", domain: 1, topic: "UK APP reimbursement: civil disputes are out of scope", hy: false, difficulty: "hard",
    q: "In 2026, a UK customer pays £6,000 by Faster Payments to a long-established local building firm as a deposit for an extension. The firm goes into insolvency without starting the work. The customer says she was 'scammed' and claims under the PSR's APP scams reimbursement requirement. The bank finds that the firm had traded genuinely for 15 years, and the payee account was its usual business account. She is not a vulnerable customer. What is the MOST appropriate outcome?",
    options: [
      "Reimburse her in full within five business days, because she was induced to pay and lost money",
      "Reimburse 50%, because the cost of reimbursement is shared equally with the receiving bank",
      "Reimburse her minus the £100 excess, because she should have checked the firm's finances",
      "Decline under the scheme, because this is a civil dispute with a legitimate supplier"
    ],
    answer: [3],
    explanation: "The PSR's reimbursement requirement covers APP scams, not civil disputes. A civil dispute is where a customer has paid a legitimate supplier for goods or services and has not received them, found them defective, or is otherwise dissatisfied. Here a genuine firm failed, with no deception at the time of payment, so the claim falls outside the scheme. The PSR notes that consumer law (such as the Consumer Rights Act) protects buyers in civil disputes, and she may also claim in the insolvency. The 50:50 split is between the sending and receiving firms and does not reduce what an eligible customer receives. The optional £100 excess applies only to valid claims.",
    source: [
      { label: "PSR – PS23/3 APP fraud reimbursement policy statement (June 2023), paras 2.5–2.6 and 5.24 on civil disputes", url: "https://www.psr.org.uk/media/iolpbw0u/ps23-3-app-fraud-reimbursement-policy-statement-final-june-2023.pdf" },
      { label: "PSR – PS23/4 APP scams policy statement (December 2023): excess up to £100", url: "https://www.psr.org.uk/media/kwlgyzti/ps23-4-app-scams-policy-statement-dec-2023.pdf" },
      { label: "PSR – APP scams reimbursement (overview page)", url: "https://www.psr.org.uk/our-work/app-scams/" }
    ]
  }
]);
