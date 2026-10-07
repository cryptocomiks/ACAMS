window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  { id: "CSTD-001", domain: 1, topic: "Case study: government business run through an official's personal account", hy: false, difficulty: "hard",
    q: "Marisol Echeverri is the defence attaché at the Embassy of Country R in Washington. She holds a personal checking account at Potomac Ridge Bank, opened with her diplomatic passport; the embassy's own operating account is at another bank. Over five months her personal account receives eleven wires totalling USD 1.9 million from three US defence-equipment distributors, each referenced 'embassy procurement - spare parts'. Her diplomatic salary of about USD 11,000 a month also arrives in the account. Her husband, a Spanish citizen, holds a joint card on it, and online banking is accessed from the embassy's IP range. She then wires USD 1.2 million to a property developer in Portugal as a deposit on a villa. Which fact is the MOST significant red flag of possible foreign public corruption?",
    options: [
      "Payments for official embassy procurement are flowing into the attaché's personal account instead of the embassy's own account",
      "The account is accessed from the embassy's IP range, which shows that the holder works inside a foreign mission",
      "Her husband holds a joint card on the account although he is a national of a third country",
      "The account was opened with a diplomatic passport rather than a national identity card issued by Country R"
    ],
    answer: [0],
    explanation: "FinCEN's kleptocracy advisory (FIN-2022-A001) lists 'transactions involving official embassy or foreign government business conducted through personal accounts' as a red flag of foreign public corruption. Supplier payments for government procurement landing in an official's personal account suggest diverted public money or kickbacks, and the villa purchase shows the funds being integrated into assets out of line with her salary. Embassy IP access, a joint card for a spouse and a diplomatic passport are all normal for a diplomat and explain nothing about the source of USD 1.9 million.",
    source: [
      { label: "FinCEN Advisory FIN-2022-A001 (Apr 2022) – kleptocracy and foreign public corruption red flags", url: "https://www.fincen.gov/system/files/advisory/2022-04-14/FinCEN%20Advisory%20Corruption%20FINAL%20508.pdf" }
    ] },

  { id: "CSTD-002", domain: 1, topic: "Case study: Mexico-based timeshare fraud and re-victimization (FIN-2024-NTC2)", hy: true, difficulty: "hard",
    q: "Walter Brenning, 74, a retired engineer in Arizona, has banked with Saguaro Federal Credit Union for 30 years. In May 2026 he moved USD 48,000 from his IRA into his checking account and wired it to Cierre Vallarta Servicios S.A. de C.V., a Mexican company registered four months earlier, as 'closing taxes' on the sale of his Puerto Vallarta timeshare to a buyer found by a broker who had phoned him. Two more wires for 'transfer fees' followed. In September 2026 a caller claiming to work for the US Treasury's Office of Foreign Assets Control tells him the Mexican payments were 'blocked as linked to money laundering' and that a USD 15,000 release fee must be wired today to an account in Guadalajara, or he faces arrest. Walter asks the branch to send the wire urgently. He mentions that his grandson recently helped him set up online banking. Which explanation BEST fits this activity?",
    options: [
      "A genuine OFAC blocking action, since the originator of a blocked transfer must pay a release fee before the funds are freed",
      "Elder financial exploitation by the grandson, who is using his online banking access to divert the retirement funds",
      "A timeshare exit scam run from Mexico that is now re-victimizing him by impersonating a US government authority",
      "Trade-based money laundering, in which the timeshare sale disguises cross-border payments for a cartel's imports"
    ],
    answer: [2],
    explanation: "The FinCEN/OFAC/FBI joint notice FIN-2024-NTC2 (July 2024) describes Mexico-based criminal organizations such as CJNG that target older US timeshare owners with fake buyers, then demand 'taxes' or 'fees' wired to newly formed Mexican companies, often from retirement accounts moved first into checking. Victims are later re-victimized by scammers who impersonate authorities, including OFAC and Mexico's FIU, claiming funds were 'blocked' and demanding more fees under threat of arrest. OFAC does not ask victims to wire release fees. The grandson is a decoy: nothing links him to the wires. FinCEN asks for the key term FIN-2024-NTC2 in SARs and suggests referring victims to the FBI's IC3.",
    source: [
      { label: "FinCEN, OFAC and FBI Joint Notice FIN-2024-NTC2 (July 2024) – timeshare fraud by Mexico-based TCOs", url: "https://www.fincen.gov/system/files/shared/FinCEN-Joint-Notice-Timeshare-Mexico-508C-FINAL.pdf" }
    ] },

  { id: "CSTD-003", domain: 1, topic: "Case study: bulk cash repatriation through armored car services (FIN-2025-Alert001)", hy: true, difficulty: "hard",
    q: "Frontera Bank in El Paso banks Casa Delgado Comercializadora, a produce exporter incorporated in Ciudad Juárez. Twice a week a Mexico-based armored car service delivers USD 180,000-250,000 in cash to the bank for credit to Casa Delgado's account. Each shipment comes with a currency declaration (CMIR) filed by the carrier, describing the cash as 'export sales proceeds'. Within a day the funds are wired to Casa Delgado's account in Mexico and to two US electronics wholesalers. Casa Delgado's tax filings show annual sales of about USD 4 million, while the cash shipments total USD 21 million over the year. The relationship manager notes that the company has banked with them for six years, that the CMIRs prove the funds were lawfully declared, and that Mexican banks cap business deposits of US dollar cash. What is the BEST assessment?",
    options: [
      "The CMIRs filed by a regulated armored car service establish that the cash is legitimate, so the existing CDD file is sufficient",
      "Because Mexican rules cap US dollar cash deposits, a Mexican exporter repatriating dollars through a US bank explains the volumes",
      "The main gap is that the armored car service should have filed the CTRs, so the bank should obtain copies before deciding",
      "A CMIR proves the cash was declared, not that it is clean; volumes five times sales and rapid onward wires fit cartel bulk-cash repatriation"
    ],
    answer: [3],
    explanation: "FinCEN Alert FIN-2025-Alert001 (March 2025) describes cartels smuggling bulk cash into Mexico and repatriating it through Mexican businesses near the border, using armored car services to deliver it to US banks before wiring it on. FinCEN warns that banks 'should not conflate the presentation of a CMIR as an indication that the source of the funds is legitimate'. The Mexican deposit limits are the very reason these schemes exploit legitimate-looking repatriation, but they do not explain cash far above the customer's sales. The bank, not the carrier, files CTRs on cash it receives. SARs should use the key term FIN-2025-BULKCASH.",
    source: [
      { label: "FinCEN Alert FIN-2025-Alert001 (Mar 31, 2025) – bulk cash smuggling and repatriation", url: "https://www.fincen.gov/system/files/shared/BCS-Alert-FINAL-508C.pdf" }
    ] },

  { id: "CSTD-004", domain: 1, topic: "Case study: self-funded terrorist travel (FIN-2025-A001 red flags)", hy: true, difficulty: "hard",
    q: "Over three weeks in 2026, Karl Mendez, a 26-year-old warehouse worker who has banked at Lakeshore Bank since college, changes his pattern sharply. He sells his car for cash, closes his savings account and cancels his gym and streaming subscriptions. He opens four new credit cards, uses them almost only for cash advances and purchases at a crypto exchange, and misses the first payments. One card is used to book one-way flights for him and two unrelated men to a city near an area where an ISIS affiliate is active. His employer recently cut his hours, and he has posted online that he is 'starting a new life abroad'. Which typology do these facts MOST likely indicate?",
    options: [
      "A first-party bust-out fraud, in which he maxes out new credit lines and disappears to escape debts after losing income",
      "Self-funded terrorist travel, with assets liquidated and credit drawn down to pay for travel to an ISIS area for several people",
      "A money mule recruited online, who uses his new cards to receive and pass on the proceeds of other people's fraud",
      "Ordinary financial distress after reduced working hours, with his plan to emigrate explaining the account closures"
    ],
    answer: [1],
    explanation: "FinCEN's ISIS advisory (FIN-2025-A001) lists as red flags one card booking travel for several unrelated people to an area of ISIS activity; abruptly seeking many credit lines and using new cards for cash advances and virtual currency, then defaulting; and buying travel after abruptly liquidating assets, closing accounts and cancelling subscriptions. A bust-out is the runner-up because the credit pattern alone fits it, but bust-out fraud does not explain paying travel for unrelated men to an ISIS area. Reduced hours and emigration plans are decoys.",
    source: [
      { label: "FinCEN Advisory FIN-2025-A001 (Apr 2025) – financing of ISIS and its global affiliates, red flags", url: "https://www.fincen.gov/system/files/advisory/2025-04-01/FinCEN-Advisory-ISIS-508C.pdf" }
    ] },

  { id: "CSTD-005", domain: 1, topic: "Case study: embezzlement of public funds (lessons from the Dixon/Crundwell case)", hy: false, difficulty: "hard",
    q: "Norma Haskell has been finance director of the Town of Millbrook for 22 years and is the sole signatory on most of its accounts. A review at Prairie State Bank finds an account opened in 2009 titled 'Town of Millbrook - Capital Reserve', on which Norma is the only signer and which the town council's minutes never mention. Town money reaches it through same-day transfers between other town accounts. From it, checks pay a personal credit card, a horse-feed supplier and a horse-trailer dealer, and fund Norma's own account at another bank. Norma is known locally for her prize-winning show horses, which she says are funded by family money. The town's auditors have never raised concerns, and Norma recently asked the bank to stop mailing statements to the town hall. Which is the MOST significant red flag?",
    options: [
      "Her long tenure combined with sole-signatory authority over most of the town's accounts",
      "An account in the public body's name, controlled by one official, pays her personal and private business expenses",
      "The rapid same-day transfers between several of the town's own operating accounts",
      "Her request that the bank stop mailing the account statements to the town hall"
    ],
    answer: [1],
    explanation: "In the Dixon, Illinois case, comptroller Rita Crundwell opened an account in the name of the city that she alone controlled, moved city funds into it through other city accounts, and used it to pay her quarter-horse business, personal credit cards, real estate and vehicles, stealing more than USD 53 million from 1990 to 2012 while fictitious invoices satisfied the auditors. Public money paying an official's personal expenses is direct evidence of misappropriation. The statement request is the runner-up: it suggests concealment but on its own could be administrative. Tenure, signing authority and internal transfers are control weaknesses, not proof of theft.",
    source: [
      { label: "US Attorney, N.D. Illinois (Nov 14, 2012) – Rita Crundwell pleads guilty, admits stealing $53 million from Dixon", url: "https://www.justice.gov/archive/usao/iln/rockford/2012/pr1114_01.pdf" }
    ] },

  { id: "CSTD-006", domain: 1, topic: "Case study: charity funds to a conflict zone diverted to a personal account", hy: false, difficulty: "hard",
    q: "Hope Across Borders, a registered charity in England, banks with Severn Commercial Bank. It runs school-feeding projects in a conflict-affected region through Al-Nour Relief, a local partner whose registration and governance it checked in 2024. In 2026 its transfers to the region rise from GBP 40,000 to GBP 310,000 a quarter after a successful donor appeal. The latest payment instructions ask the bank to pay the funds into a personal account, in a neighbouring country, held by Al-Nour's director, citing 'banking problems at home'. The charity's trustees include a former MP, its annual accounts are filed on time, and a UN agency also funds Al-Nour. Which fact should the bank's analyst treat as the MOST significant red flag?",
    options: [
      "The eightfold rise in transfers to the region after the charity's new donor appeal",
      "A former Member of Parliament serves among the charity's trustees",
      "The partner operates in a conflict-affected region where armed groups are active",
      "The request to pay charitable funds into the partner director's personal account in another country"
    ],
    answer: [3],
    explanation: "The Charity Commission's guidance on due diligence and end use of funds lists as warning signs requests for payment into an account not in the name of the partner, or in a country where the partner is not based or the project is not carried out. It also cites a case where funds paid into an intermediary's personal account in another country left trustees unable to verify that the money reached beneficiaries. The rise in transfers is explained by the appeal, the conflict region is an inherent risk factor rather than a sign of diversion, and a former MP trustee says nothing about the payment route.",
    source: [
      { label: "Charity Commission – Compliance toolkit chapter 2: due diligence, monitoring and verifying end use of funds", url: "https://www.gov.uk/government/publications/charities-due-diligence-checks-and-monitoring-end-use-of-funds/chapter-2-due-diligence-monitoring-and-end-use-of-funds" }
    ] },

  { id: "CSTD-007", domain: 1, topic: "Case study: fraud rings exploiting child nutrition programs (FIN-2026-Alert001)", hy: false, difficulty: "hard",
    q: "Brightmeal Partners, a non-profit 'sponsor' in a state child nutrition program, banks with Granite Valley Bank. In 2026 it starts receiving state reimbursements of USD 2-3 million a month, many times what similar sponsors receive, and passes most of them to 14 'meal sites'. Nine sites are restaurants or companies registered within the last six months with little online presence; one claims to serve 4,000 children a day from a small café. The sites' accounts show few food purchases but large 'consulting fee' payments to two Brightmeal employees, frequent cashier's check purchases and wires abroad for real estate. Brightmeal's director sits on a local hospital board, and the state agency has approved all of its claims. What is the MOST likely scheme?",
    options: [
      "A sponsor-and-site fraud ring claiming meals that were never served, with kickbacks paid back to sponsor staff",
      "Legitimate rapid growth by a sponsor, since the state agency reviewed and approved every claim submitted",
      "A tax-evasion scheme in which restaurants under-report income by routing their receipts through a non-profit",
      "Trade-based money laundering through overstated food purchases between the meal sites and their suppliers"
    ],
    answer: [0],
    explanation: "FinCEN Alert FIN-2026-Alert001 (January 2026) describes fraud rings acting as sponsors that enrolled recently formed shell companies as sites, claimed to feed thousands of children beyond their capacity, and passed reimbursements to sites whose operators paid sponsor employees cash and 'consulting fees'; proceeds were laundered through cashier's checks, wires abroad and real estate. Its red flags include sudden reimbursements out of line with similar entities, recent formation, limited online presence and few operating costs other than consulting fees. Agency approval does not make claims genuine, and the near absence of food purchases rules out trade-based laundering. SARs should use the key term FIN-2026-MNFRAUD.",
    source: [
      { label: "FinCEN Alert FIN-2026-Alert001 (Jan 9, 2026) – fraud rings exploiting federal child nutrition programs", url: "https://www.fincen.gov/system/files/2026-01/FinCEN-Alert-Federal-Child-Nutrition-Programs.pdf" }
    ] },

  { id: "CSTD-008", domain: 1, topic: "Case study: ghost-student fraud ring (FIN-2026-Alert004)", hy: false, difficulty: "hard",
    q: "In August 2026, Clearwater Online Bank's fraud team reviews 37 checking accounts opened online over 10 days. Each received a single student aid refund of USD 2,800-4,100 from a payment intermediary used by several community colleges with open-admission online programs. Within hours, most of each refund was sent by peer-to-peer transfer to two accounts held by Tessa Morrow, or used to buy digital assets sent to one external wallet. Twenty-nine of the accounts were opened and accessed from the same out-of-state IP address and two devices. The holders' stated occupations vary, and several are over 50. Tessa's own account also received a student aid refund in the name of a man with no known link to her. Which facts are the STRONGEST indicators of a ghost-student fraud ring? (Choose two.)",
    options: [
      "Many accounts opened online in a short period, each funded by one refund and accessed from the same IP address and devices",
      "Several account holders are over 50, which is unusual for students enrolled at community colleges",
      "The refunds were paid through a payment intermediary rather than directly by the colleges",
      "Refunds in the names of unrelated people are pooled through P2P transfers and digital assets into a few destinations",
      "The colleges offer open-admission online programs that accept students from other states"
    ],
    answer: [0, 3],
    explanation: "FinCEN Alert FIN-2026-Alert004 (July 2026) lists as red flags many accounts created online in a short time that each receive one student aid refund, accounts accessed from the same out-of-state or foreign IP address or device, and refunds in the names of unrelated people that are rapidly moved by P2P, used to buy digital assets or sent abroad. Payment intermediaries are a normal refund channel described in the alert, and open-admission online programs are the context fraudsters exploit, not an account-level indicator. Age is not itself evidence: many adults enrol in online programs. SARs should use the key term FIN-2026-FSAFRAUD.",
    source: [
      { label: "FinCEN Alert FIN-2026-Alert004 (July 24, 2026) – fraud schemes targeting federal student aid", url: "https://www.fincen.gov/system/files/2026-07/FinCEN-Alert-Fraud-Schemes-Targeting-Federal-Student-Aid.pdf" }
    ] },

  { id: "CSTD-009", domain: 1, topic: "Case study: US-incorporated front company for terrorist financing (FIN-2024-A001)", hy: false, difficulty: "hard",
    q: "Cedar Gate Logistics LLC was incorporated in Delaware in 2025 and opened an account at Harborline Bank, describing its business as 'freight forwarding for US exporters'. In its first year the account is funded by wires from a general trading company in a third country that has a residential address and an opaque ownership chain. Nearly all outgoing payments go to individuals and an exchange house in a jurisdiction known for activity by an Iran-backed terrorist group, described as 'aid', 'travel expenses' or 'gifts'. The company has no US customers, warehouses or freight invoices, and online banking is accessed from IP addresses in that jurisdiction. Its sole registered manager is a US citizen who works as a ride-share driver. Which is the MOST accurate assessment?",
    options: [
      "A start-up freight forwarder whose first-year activity is in one market; ask for a business plan at the next periodic review",
      "A sanctions matter only, so the bank's sole obligation is to screen the counterparties against OFAC's lists",
      "A nominee-managed front whose activity occurs only in a high-risk jurisdiction and bears no relation to its stated business, consistent with terrorist financing",
      "A typical diaspora remittance pattern, which is low risk because the payments are described as aid and gifts"
    ],
    answer: [2],
    explanation: "FinCEN's advisory on Iran-backed terrorist organizations (FIN-2024-A001, May 2024) flags a company incorporated in the US or a third country whose activities occur solely in jurisdictions at high risk for terrorist activity with no relationship to its stated business; dealings with general trading companies with opaque ownership or residential addresses; transfers with vague purposes such as 'travel expenses', 'charity', 'aid' or 'gifts'; and access from IP addresses in high-risk jurisdictions. A ride-share driver as sole manager suggests a nominee. Screening alone does not discharge the SAR obligation, and waiting for a periodic review ignores current red flags.",
    source: [
      { label: "FinCEN Advisory FIN-2024-A001 (May 2024) – countering the financing of Iran-backed terrorist organizations", url: "https://www.fincen.gov/system/files/advisory/2024-05-07/FinCEN-Advisory-Iran-Backed-TF-508C.pdf" }
    ] },

  { id: "CSTD-010", domain: 1, topic: "Case study: Employee Retention Credit fraud (FIN-2023-Alert007, calculation)", hy: false, difficulty: "hard",
    q: "In March 2026, Dunmore Community Bank reviews the account of Thornbury Home Services LLC, a two-person handyman business. The account was dormant for 14 months, then received a single US Treasury check for USD 186,000 described as an Employee Retention Credit refund for 2021. The account has never shown payroll. Within a week the owner moved USD 120,000 by P2P transfers to three newly formed companies he had never paid before and withdrew USD 30,000 in cash at ATMs. He says a 'tax recovery firm' filed the claim for a 25% fee. The bank has confirmed that the check itself is genuine and unaltered. Which conclusion is BEST supported?",
    options: [
      "The genuine Treasury check removes the fraud concern, so the outflows need no further review",
      "The refund is out of line with the business's size and payroll, lands in a dormant account and is quickly dispersed; investigate and consider a SAR",
      "The only real risk is check fraud, so once the check is confirmed unaltered the bank has nothing more to review",
      "Because a third-party firm prepared the claim, any liability rests with that firm and the bank has no reporting concern"
    ],
    answer: [1],
    explanation: "FinCEN's ERC fraud alert (FIN-2023-Alert007, November 2023) lists as red flags an ERC not commensurate with the business's size and employees, a dormant account that suddenly receives an ERC check, no payroll history, rapid P2P transfers or ATM cash withdrawals, payments to new businesses, and claims filed by third-party firms whose credentials cannot be verified. For 2021 the credit was at most USD 7,000 per employee per quarter, so two employees could yield at most USD 56,000 even over four quarters, far below USD 186,000. A genuine check can still be the proceeds of a fraudulent claim. SARs should use the key term FIN-2023-ERC.",
    source: [
      { label: "FinCEN Alert FIN-2023-Alert007 (Nov 2023) – COVID-19 Employee Retention Credit fraud", url: "https://www.fincen.gov/system/files/shared/FinCEN_ERC_Fraud_Alert_FINAL508.pdf" }
    ] },

  { id: "CSTD-011", domain: 1, topic: "Case study: insurance policy of a foreign official's relative paid by a ministry contractor", hy: false, difficulty: "hard",
    q: "Sofia Ilyenko, 23, a graduate student in Boston, buys a USD 900,000 single-premium life insurance policy from Bayfront Life through an independent agent. The premium is wired by Vostra Build Ltd, a construction company in Cyprus that holds road contracts from the ministry her father heads in Country T; she has no stated link to the company. Seven weeks later she takes the maximum policy loan and, a month after that, surrenders the policy, accepting a USD 54,000 surrender charge without complaint. She asks for the proceeds to go to an account in her name in Singapore, where neither she nor her father has any apparent connection. Her father's official salary is about USD 60,000 a year. Which typology do these facts MOST likely indicate?",
    options: [
      "Premium-financing fraud, in which the agent inflates the policy's size to earn a larger commission from the insurer",
      "Normal wealth planning for a politically exposed family, explained by the policy's tax advantages in Country T",
      "Claims fraud against Bayfront Life, because the early surrender is designed to produce a false insurance claim",
      "Laundering of possible bribe proceeds for a foreign official, routed through a relative's policy and a third-party payer"
    ],
    answer: [3],
    explanation: "FinCEN's insurance guidance lists as red flags payment by an apparently unrelated third party, early termination at a cost to the customer, little concern for the product's performance and borrowing the maximum soon after purchase. FinCEN's kleptocracy advisory (FIN-2022-A001) adds the use of third parties to shield foreign officials, payments tied to government contracts, and funds moving to countries with which the official has no ties. A ministry contractor paying a large premium for the minister's daughter points to a disguised bribe. A surrender is not an insurance claim, and nothing suggests agent fraud or a tax motive. The insurer must consider a SAR on this covered product.",
    source: [
      { label: "FinCEN FAQ (FIN-2008-G004) – insurance AML program and SAR red flags", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/frequently-asked-questions-anti-money-laundering-program" },
      { label: "FinCEN Advisory FIN-2022-A001 – kleptocracy and foreign public corruption", url: "https://www.fincen.gov/system/files/advisory/2022-04-14/FinCEN%20Advisory%20Corruption%20FINAL%20508.pdf" }
    ] },

  { id: "CSTD-012", domain: 1, topic: "Case study: opaque contract awards to related companies (kleptocracy red flags)", hy: false, difficulty: "hard",
    q: "Ostend Commercial Bank's monitoring flags payments involving its corporate customer Kalveron Roadworks Ltd. Over six years, Kalveron and two sister companies, which share the same nominee directors and a holding company in a secrecy jurisdiction, have won 17 consecutive highway maintenance contracts from Country V's transport ministry without public tenders. Kalveron's invoices to the ministry show lump sums with no quantities or unit rates, and several ministry payments do not match the invoice totals. Kalveron also pays monthly 'advisory fees' to a consultancy in a third country. The company files audited accounts and employs 600 people, and its chief executive recently donated to a children's hospital. Which facts are the MOST significant red flags of foreign public corruption? (Choose two.)",
    options: [
      "The company's large workforce and audited accounts, which show it can absorb unusual costs",
      "Long-term contracts repeatedly awarded through an opaque process to related companies with the same ownership structure",
      "The chief executive's recent donation to a children's hospital",
      "The sector itself, since road maintenance is a high-volume business with many subcontractors",
      "Invoices lacking normal detail, and government payments that do not match the invoiced amounts"
    ],
    answer: [1, 4],
    explanation: "FinCEN's kleptocracy advisory (FIN-2022-A001) lists long-term government contracts consistently awarded through an opaque selection process to the same entities or entities sharing similar beneficial ownership structures, and documentation for government contracts that is overly simple or lacks traditional details, or payments that do not match the underlying documentation. A large workforce, audited accounts and a charitable donation do not address how the contracts were won, and a sector's general features are an inherent risk factor, not a red flag about this customer.",
    source: [
      { label: "FinCEN Advisory FIN-2022-A001 (Apr 2022) – kleptocracy red flags on government contracts", url: "https://www.fincen.gov/system/files/advisory/2022-04-14/FinCEN%20Advisory%20Corruption%20FINAL%20508.pdf" }
    ] },

  { id: "CSTD-013", domain: 3, topic: "Case study: a money transmitter customer nesting other transmitters", hy: true, difficulty: "hard",
    q: "Ridgeway Bank, a US regional bank, has banked Pronto Envíos Inc., a licensed and FinCEN-registered money transmitter, for five years. The account was opened for Pronto's own settlement with its paying agents abroad. A periodic review finds that Pronto now lets three smaller money transmitters, which are not Ridgeway customers, send their own customers' funds through Pronto's account; this flow is now 40% of the volume. Pronto's AML program was rated satisfactory by its state examiner last year. Ridgeway's head of payments wants to keep the relationship unchanged because it is profitable, while an analyst proposes collecting CDD on every customer of the three smaller transmitters. What is the BEST response?",
    options: [
      "Keep the relationship unchanged, because a licensed transmitter with a satisfactory examination is responsible for its own customers",
      "Require Pronto to provide full CDD on each customer of the three smaller transmitters before any further payments",
      "Treat the flow as a correspondent-type service: assess Pronto's controls over the three transmitters, consider a separate account, and adjust monitoring",
      "Exit Pronto immediately, because a money transmitter may not give other money transmitters access to its bank account"
    ],
    answer: [2],
    explanation: "The FATF Guidance on correspondent banking services (2016, section VI) says a bank should understand whether an MVTS customer uses its account for its own settlement or to provide correspondent services to its own customers. In the latter case the bank should apply the correspondent risk factors case by case, and it may require separate accounts for the two activities to make monitoring effective. The guidance also states that the FATF Recommendations impose no obligation to apply CDD to the MVTS provider's customers, which rules out the analyst's proposal. Leaving the profile unchanged ignores an undisclosed nested flow, and automatic exit is not required.",
    source: [
      { label: "FATF Guidance on Correspondent Banking Services (Oct 2016), paras 21 and 42-45", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/FATF_Guidances/Guidance-Correspondent-Banking-Services.pdf" }
    ] },

  { id: "CSTD-014", domain: 3, topic: "Case study: after acquiring a fintech, update the risk assessment", hy: false, difficulty: "hard",
    q: "In July 2026, Harrow Valley Bank, a mid-size US bank, completed its purchase of Zipwell, a fintech app with 220,000 users that offers instant peer-to-peer payments, debit cards and in-app crypto purchases through a partner. Zipwell's customers will move onto Harrow's systems next spring. Due diligence found thin KYC for users onboarded during a 2024 growth campaign but no unfiled SARs. Harrow's BSA/AML risk assessment was last updated in March 2026, before the deal, and its independent test is scheduled for November on the usual scope. The head of integration proposes running Zipwell under Harrow's existing risk assessment and procedures until the migration. What should the BSA officer do FIRST?",
    options: [
      "Update the BSA/AML risk assessment for Zipwell's products, customers and geographies, and use it to set CDD, monitoring and testing scope",
      "Postpone changes until the spring migration, when Zipwell's customers will become subject to Harrow's own systems",
      "Ask the November independent test to review Zipwell and wait for its findings before deciding on any controls",
      "Close all accounts opened during the 2024 growth campaign, since their KYC must be presumed unreliable"
    ],
    answer: [0],
    explanation: "The FFIEC BSA/AML Examination Manual says a bank may need to update its risk assessment when new products, services and customer types are introduced or the bank expands through mergers and acquisitions, and that independent testing should consider expansion through merger activity. The updated assessment comes first because it drives CDD refresh priorities, monitoring and the test's scope. Sending the issue to the November test is the runner-up, but testing evaluates controls rather than designing them. Waiting for migration leaves new risks unmanaged, and closing every campaign account is not risk-based.",
    source: [
      { label: "FFIEC BSA/AML Examination Manual (April 2020) – BSA/AML Risk Assessment and Independent Testing (NCUA copy)", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" }
    ] },

  { id: "CSTD-015", domain: 3, topic: "Case study: banking a foreign embassy and its diplomats (2011 interagency guidance)", hy: true, difficulty: "medium",
    q: "The Embassy of Country Q asks Capitol Square Bank to open accounts for paying staff salaries, rent and utilities, and to offer personal accounts to its 30 diplomats. Country Q is not sanctioned and has a moderate corruption ranking. The bank's head of retail wants to accept all requested services on standard terms. The chief risk officer instead proposes rating every foreign-mission account as high risk and refusing staff accounts, citing a peer bank's enforcement action years ago. Under the US agencies' 2011 guidance on accepting accounts from foreign missions, which approach is BEST?",
    options: [
      "Rate every foreign-mission and diplomat account as high risk, as the agencies expect, and apply EDD to all of them",
      "Rate each relationship on its own characteristics, use written agreements setting the terms of use, offer limited-purpose operating accounts and monitor the limits",
      "Refuse the diplomats' personal accounts, because the guidance lets banks serve foreign missions only through official accounts",
      "Accept all services on standard terms, because foreign missions enjoy diplomatic immunity from BSA requirements"
    ],
    answer: [1],
    explanation: "The 2011 interagency advisory states that the agencies do not expect banks to treat all foreign mission accounts as higher risk; banks should assign a risk rating reflecting each account's characteristics. Risk can be mitigated with written agreements defining services, acceptable transactions and access limits, with limited-purpose accounts for operational expenses such as payroll, rent and utilities, and with monitoring of compliance with those limits. It also allows ancillary accounts for mission personnel and their families under similar agreements. Mission accounts remain subject to the BSA.",
    source: [
      { label: "Interagency Advisory (Mar 24, 2011) – accepting accounts from foreign embassies, consulates and missions (SR 11-6 attachment)", url: "https://www.federalreserve.gov/supervisionreg/srletters/sr1106a1.pdf" }
    ] },

  { id: "CSTD-016", domain: 3, topic: "Case study: casino AML program must use all available information", hy: false, difficulty: "hard",
    q: "Silver Mesa Casino in Nevada runs a cage system, a slot management system, a table-games player rating system and a players' club database. Its AML procedures tell the compliance team to look for suspicious activity only in cage transaction logs, because 'that is where the cash is'. An internal review finds that a rated player repeatedly bought chips at tables, played minimally and redeemed at the cage, and that slot vouchers were cashed by people who had not played those machines; neither pattern appeared as suspicious in the cage logs. The compliance officer says the manual cage reviews are thorough and that staff receive annual training. What does FinCEN's casino rule require the program to include?",
    options: [
      "Nothing more, because the casino rule requires monitoring only of cash transactions recorded at the cage",
      "Additional annual training for cage staff, since training is the program element that addresses detection gaps",
      "Annual independent testing by an external auditor, which the rule requires for casinos that run slot systems",
      "Procedures using all available information, including player rating and slot data, and automated programs where the casino has such systems"
    ],
    answer: [3],
    explanation: "Under 31 CFR 1021.210(b)(2), a casino's program must include procedures for using all available information to determine, among other things, the occurrence of transactions or patterns that must be reported as suspicious, and, for casinos with automated data processing systems, the use of automated programs to aid compliance. Limiting reviews to cage logs ignores the rating and slot systems that revealed both patterns. Training is required but does not fix the data gap, and the rule sets independent testing scope and frequency by risk, not an annual external audit.",
    source: [
      { label: "31 CFR 1021.210 – AML program requirements for casinos (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1021/subpart-B/section-1021.210" }
    ] },

  { id: "CSTD-017", domain: 3, topic: "Case study: screening identifiers in SDN entries, not just names", hy: true, difficulty: "hard",
    q: "Tidewater Bank screens customer and payment names against the SDN List with fuzzy matching, but no other identifiers. In October 2026 an analyst reviews the SDN entry of a designated financier of an Iran-backed terrorist group, which lists an email address, two phone numbers and a passport number. She finds that Rami Haddad, a retail customer with a different name and nationality, registered one of those phone numbers and that email address with the bank for peer-to-peer payments, and that P2P notes on his account include terms associated with the group. His account holds USD 7,400. What is the BEST response?",
    options: [
      "Close Rami's account and return the balance, because his name does not match the SDN List and blocking would be disproportionate",
      "Treat the identifier match as a potential true match: escalate for OFAC review and possible blocking, consider a SAR, and add identifiers to screening",
      "Clear the alert, because sanctions screening is name-based and a shared phone number or email is common within families",
      "Ask Rami to explain why he uses the number and email before taking any further action on the account"
    ],
    answer: [1],
    explanation: "FinCEN's advisory on Iran-backed terrorist organizations (FIN-2024-A001) flags transactions with a nexus to identifiers listed for OFAC-designated persons, including email addresses, physical addresses, phone numbers, passport numbers and virtual currency addresses, and P2P notes containing terms associated with terrorist groups. OFAC's virtual currency guidance likewise recommends screening addresses and other identifying information, not only names. Closing the account and returning funds could release blocked property, clearing the alert ignores the match, and questioning Rami first risks tipping him off.",
    source: [
      { label: "FinCEN Advisory FIN-2024-A001 (May 2024) – red flags: identifiers listed for OFAC-designated persons", url: "https://www.fincen.gov/system/files/advisory/2024-05-07/FinCEN-Advisory-Iran-Backed-TF-508C.pdf" },
      { label: "OFAC – Sanctions Compliance Guidance for the Virtual Currency Industry (Oct 2021)", url: "https://ofac.treasury.gov/media/913571/download?inline" }
    ] },

  { id: "CSTD-018", domain: 3, topic: "Case study: a charity customer starts funding a conflict region (2020 joint fact sheet)", hy: false, difficulty: "hard",
    q: "Blue Heron Bank holds the accounts of Riverlight Aid, a US public charity that for ten years funded food banks in its home state. In 2026 it starts sending USD 80,000 a month to a partner organization running clinics in a conflict region where terrorist groups are active. The bank's analyst proposes requiring Riverlight to provide the name, address and ID of every donor, or else closing the account. The relationship manager says the charity remains low risk because it files IRS Form 990 and has a clean history. Under the 2020 interagency joint fact sheet on charities, which actions are MOST appropriate? (Choose two.)",
    options: [
      "Reassess the risk profile, since US charities that fund or have affiliates in conflict regions can present higher terrorist financing risk",
      "Require identity documents for every donor, because the CDD rule requires banks to verify the donors of nonprofit customers",
      "Obtain information on the partner, the criteria for disbursing funds, any intermediaries and the charity's controls, and adjust monitoring",
      "Keep the low risk rating, because filing Form 990 shows the charity is supervised and needs no further review",
      "Close the account, because the agencies view charities operating abroad as presenting unacceptably high risk"
    ],
    answer: [0, 2],
    explanation: "The 2020 joint fact sheet says charities do not present a uniform or unacceptably high risk, that charities funding domestic recipients generally present low terrorist financing risk, but that those operating abroad or funding affiliates in conflict regions can present higher risk. Useful information includes geographic areas served, beneficiaries and disbursement criteria, intermediaries, affiliations, structure and financial statements. It also says there is no requirement for unique, additional due diligence steps for charities, so demanding every donor's ID is not required. Form 990 filing is useful information but does not freeze the risk rating.",
    source: [
      { label: "Joint Fact Sheet on BSA Due Diligence Requirements for Charities and Non-Profit Organizations (Nov 19, 2020)", url: "https://www.fincen.gov/sites/default/files/shared/Charities%20Fact%20Sheet%2011_19_20.pdf" }
    ] },

  { id: "CSTD-019", domain: 4, topic: "Case study: newly designated crypto exchange – blocking and historic lookback", hy: true, difficulty: "hard",
    q: "On 6 October 2026, OFAC designates Kestrova, a foreign virtual currency exchange, and lists 14 of its wallet addresses on the SDN List. Pacifica Coin, a US exchange, updates its screening the next morning. Its blockchain analytics tool shows that three customers received deposits from the listed addresses months before the designation. On 6 October, hours after the listing, a fourth customer, Lena Varga, received 2.1 BTC from one of those addresses, and it is still in her account. Another customer often deposits from an unlisted address that shares a wallet with a listed address. What should Pacifica do?",
    options: [
      "Block Lena's 2.1 BTC and report it to OFAC within 10 business days, run a historic lookback, and assess the unlisted shared-wallet address as a sanctions risk",
      "Take no action on Lena's deposit, because Pacifica's screening list had not yet been updated when the bitcoin arrived",
      "Convert Lena's 2.1 BTC into US dollars held in an interest-bearing blocked account, as OFAC requires for virtual currency",
      "Block the accounts of all four customers, because anyone who has ever received funds from Kestrova is now a blocked person"
    ],
    answer: [0],
    explanation: "OFAC's Sanctions Compliance Guidance for the Virtual Currency Industry says blocked virtual currency must be reported within 10 business days and annually thereafter, that holders need not convert it to fiat or hold it in an interest-bearing account, and that firms may run a historic lookback after OFAC lists an address, which can also reveal unlisted addresses (for example, sharing a wallet with a listed one) that pose sanctions risk. A post-designation transfer from an SDN must be blocked whether or not the firm's list was updated, since liability is strict. Deposits received before the designation were not prohibited and do not make the recipients blocked persons.",
    source: [
      { label: "OFAC – Sanctions Compliance Guidance for the Virtual Currency Industry (Oct 2021)", url: "https://ofac.treasury.gov/media/913571/download?inline" }
    ] },

  { id: "CSTD-020", domain: 4, topic: "Case study: activating FinCEN's Rapid Response Program after an impersonation scam", hy: false, difficulty: "hard",
    q: "On Monday 5 October 2026 at 10 a.m., Gloria Whitfield, 68, tells Mesa Verde Bank that on Friday she wired USD 85,000 to a bank in Hong Kong after a caller posing as the bank's fraud team said her savings were at risk. Mesa Verde's recall request through its correspondent has had no reply. The branch manager wants to email FinCEN directly with the details, while the fraud lead plans to wait until the bank's SAR is filed later in the month so that law enforcement has the full picture. What is the BEST next step to try to recover the funds?",
    options: [
      "Email FinCEN directly with the wire details, since FinCEN runs the Rapid Response Program and contacts foreign FIUs",
      "File the SAR first, because the Rapid Response Program starts when FinCEN reviews a SAR naming the beneficiary account",
      "Help Gloria file a complaint at once with the FBI's IC3 or the Secret Service, giving victim, beneficiary and wire details, so law enforcement can refer it to FinCEN",
      "Ask the Hong Kong beneficiary bank to freeze the funds and wait for its reply before involving any authorities"
    ],
    answer: [2],
    explanation: "FinCEN's April 2026 Rapid Response Program fact sheet says the victim or the victim's financial institution must file a complaint with law enforcement (the FBI's IC3 and/or the nearest Secret Service field office); law enforcement then refers the case to FinCEN, which works with the foreign FIU to stop and repatriate the funds. FinCEN asks victims not to contact it directly, and recovery is most likely when fraudulent wires are reported within 72 hours, so waiting for the SAR wastes the window. The complaint must include the victim's and beneficiary's account and bank details, the date, currency and amount. The SAR is still filed separately.",
    source: [
      { label: "FinCEN – Fact Sheet on the Rapid Response Program (Apr 15, 2026)", url: "https://www.fincen.gov/system/files/2026-04/RRPFactSheet.pdf" }
    ] },

  { id: "CSTD-021", domain: 4, topic: "Case study: cyber indicators that make a terrorist financing SAR useful", hy: false, difficulty: "medium",
    q: "Northfield Credit Union's investigator is completing a SAR on Omar Saleh, a member whose account received 230 small P2P and crowdfunding payouts in six weeks after he posted a social media appeal for 'aid to families' alongside terrorist imagery. He sent most of the funds on to a crypto wallet, and his online banking sessions came from IP addresses in a jurisdiction known for terrorist activity. The draft narrative summarises the transfers and the social media posts. Which additional information would MOST help law enforcement?",
    options: [
      "The credit union's internal risk-score history for the member and the scoring methodology of its model",
      "A copy of the credit union's AML policy and the training records of the analyst who reviewed the alert",
      "A list of every other member who has donated to any charity linked to the same region in the past year",
      "The IP addresses with their timestamps, device identifiers and login details for his online banking sessions"
    ],
    answer: [3],
    explanation: "FinCEN's advisory on Iran-backed terrorist organizations (FIN-2024-A001) notes that valuable cyber indicators for terrorist financing investigations include email addresses, IP addresses with their timestamps, login information and device identifiers, and it flags crowdfunding payouts accessed from IP addresses in high-risk jurisdictions. Internal risk scores, policies and training records do not help investigators trace the subject. Listing unrelated members who gave to a region would be speculative and is not based on any suspicion about them.",
    source: [
      { label: "FinCEN Advisory FIN-2024-A001 (May 2024) – SAR cyber indicators and crowdfunding red flags", url: "https://www.fincen.gov/system/files/advisory/2024-05-07/FinCEN-Advisory-Iran-Backed-TF-508C.pdf" }
    ] },

  { id: "CSTD-022", domain: 2, topic: "Case study: BSA whistleblower protection and awards (31 U.S.C. 5323)", hy: true, difficulty: "hard",
    q: "Priya Venkataraman, a senior investigator at Bayshore Bank in Florida, tells the chief audit executive that the BSA officer keeps closing, without reasons, investigations of a large client that she recommended for SARs. Getting no response, she later gives the same information and documents to FinCEN. Months later, FinCEN and the DOJ impose USD 14 million in civil money penalties on the bank, and the DOJ separately obtains USD 3 million in criminal forfeiture. The bank's head of HR proposes dismissing Priya for 'going outside the chain of command'. Under 31 U.S.C. 5323, which statement is CORRECT?",
    options: [
      "Both her internal report and her report to FinCEN are protected from retaliation, and she may receive 10-30% of the penalties collected, but not of the forfeiture",
      "Only her report to FinCEN is protected, because internal reports to an auditor fall outside the anti-retaliation provision",
      "She is protected from dismissal, but no award is possible because she gave the information as part of her job as an investigator",
      "An award is available but is calculated on the USD 3 million forfeiture, because forfeiture is the main sanction in BSA cases"
    ],
    answer: [0],
    explanation: "Section 5323 protects whistleblowers who give information to the Secretary or the Attorney General and also those who report internally to a supervisor or another person at the employer with authority to investigate or stop the misconduct. Awards for actions with monetary sanctions above USD 1 million are 10-30% of what is collected, and 'monetary sanctions' expressly exclude forfeiture and restitution. The job-duties bar on awards applies only to employees of regulators, Treasury, the DOJ or law enforcement; the definition of whistleblower includes information given to the employer 'as part of the job duties'.",
    source: [
      { label: "31 U.S.C. 5323 – whistleblower incentives and protections (LII text of the US Code)", url: "https://www.law.cornell.edu/uscode/text/31/5323" }
    ] },

  { id: "CSTD-023", domain: 2, topic: "Case study: casino player becomes a foreign PEP (FATF R.22 and R.12)", hy: true, difficulty: "hard",
    q: "Grand Lido Casino operates in a country whose AML law implements the FATF Recommendations, with a casino CDD threshold of EUR 3,000. Teodor Vasilescu has been a rated player for three years, usually buying EUR 4,000-8,000 of chips per visit. In September 2026 the casino's screening shows that he has just been appointed deputy minister of finance of a neighbouring country. His play has not changed, and he pays with cards drawn on his personal bank account. The general manager says PEP rules are for banks and that casinos only need to identify players above the threshold. Which statement BEST reflects the FATF Standards?",
    options: [
      "Casinos need only verify identity at the threshold, because R.12 PEP measures apply to financial institutions and not to DNFBPs",
      "R.22 extends R.12 to casinos at or above the threshold, so continuing requires senior management approval, source of wealth and funds measures, and enhanced monitoring",
      "The casino must end the relationship, because the FATF Standards do not allow foreign PEPs to gamble in casinos",
      "Nothing changes until his play changes, because PEP measures apply only when a relationship begins, not to existing customers"
    ],
    answer: [1],
    explanation: "FATF Recommendation 22 applies the requirements of Recommendations 10, 11, 12, 15 and 17 to casinos when customers engage in financial transactions at or above the designated threshold (USD/EUR 3,000). For foreign PEPs, R.12 requires senior management approval for establishing 'or continuing, for existing customers' the relationship, reasonable measures to establish source of wealth and source of funds, and enhanced ongoing monitoring. Becoming a PEP does not bar the relationship, and the duty arises when an existing customer becomes a PEP, not only at onboarding.",
    source: [
      { label: "FATF Recommendations (2012-2026) – R.12 and R.22, INR.22 casino threshold (Eurasian Group copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ] },

  { id: "CSTD-024", domain: 2, topic: "Case study: Senior Safe Act immunity for reporting elder exploitation", hy: false, difficulty: "hard",
    q: "Elena Ruiz, a teller at Canyon State Bank, notices that Harold Pike, 81, is withdrawing large sums while his new 'caregiver' waits outside and answers questions for him. She tells her branch manager, who reviews the account and, in good faith and with reasonable care, reports the suspected exploitation to the state's Adult Protective Services. Canyon State has given Senior Safe Act training to its branch managers and its BSA officer, but its tellers, who deal with older customers every day, have not yet been trained. Elena also called APS herself from her personal phone. Under the Senior Safe Act (12 U.S.C. 3423), which statements are CORRECT? (Choose two.)",
    options: [
      "Elena is immune for her own call, because every bank employee who reports suspected elder exploitation is protected",
      "No one is immune, because the Act protects only reports made to federal regulators, not to state Adult Protective Services",
      "The branch manager is immune for his report, because he is a trained supervisor who acted in good faith and with reasonable care",
      "The Act covers only customers aged 70 or over, which is why Harold's age qualifies the report",
      "Canyon State itself is not immune for the manager's report, because not all staff who regularly deal with older customers had been trained"
    ],
    answer: [2, 4],
    explanation: "Under 12 U.S.C. 3423, an individual is immune for disclosing suspected exploitation of a senior citizen (65 or older) to a covered agency, which includes a state or local adult protective services agency, if trained, serving as a supervisor or in a compliance or legal function, and acting in good faith with reasonable care. The institution is immune only if, before the disclosure, every individual described in subsection (b)(1), including employees who regularly come into contact with senior citizens, had received the training. Elena is neither trained nor a supervisor or compliance officer, so the Act does not protect her call.",
    source: [
      { label: "12 U.S.C. 3423 – Senior Safe Act immunity and training (LII text of the US Code)", url: "https://www.law.cornell.edu/uscode/text/12/3423" }
    ] },

  { id: "CSTD-025", domain: 2, topic: "Case study: receiving currency from abroad – the recipient's CMIR duty", hy: false, difficulty: "hard",
    q: "Ortega Fresh Imports LLC, a Texas produce importer, receives a sealed package of USD 62,000 in US currency from a Mexican customer. A private courier drove it across the border and delivered it to Ortega's warehouse, and no currency report was filed for the shipment. Ortega deposits the cash at its bank that afternoon, and the bank files a CTR. Ortega's controller believes the CTR covers all reporting, and that any border report was the courier's or the Mexican customer's responsibility. Which statement about cross-border currency reporting is CORRECT?",
    options: [
      "No report is due beyond the bank's CTR, because the cross-border duty rests only with the person who carried the currency",
      "Ortega must file an FBAR, because it received more than USD 10,000 from a foreign customer during the year",
      "Ortega must file a CMIR within 15 days of receiving the cash, because no report was filed for the shipment",
      "The bank must file the CMIR for Ortega when it accepts a cash deposit that it knows came from abroad"
    ],
    answer: [2],
    explanation: "Under 31 CFR 1010.340(b), a person who receives in the United States currency over USD 10,000 at one time shipped from outside the country, for which no report was filed, must file a report, and 31 CFR 1010.306(b)(2) requires it within 15 days after receipt. The bank's CTR covers the deposit, not the import of the currency, and the bank did not receive the shipment from abroad. An FBAR concerns foreign financial accounts, not receipts from foreign customers. Ortega may also have to file Form 8300 for the cash received in its business.",
    source: [
      { label: "31 CFR 1010.340 – reports of transportation of currency or monetary instruments (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-C/section-1010.340" },
      { label: "31 CFR 1010.306 – filing of reports (CMIR by recipient within 15 days) (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-C/section-1010.306" }
    ] }
]);
