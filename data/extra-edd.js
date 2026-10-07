// Batch 7 – EDD for specific high-risk customer types as bank customers: practical cases (EDDX-001 to EDDX-025).
// Cannabis businesses (FIN-2014-G001), MSBs and payment institutions, VASPs, BaaS program managers, NPOs in conflict zones,
// embassies, gambling operators, precious metals dealers, defence manufacturers, payment processors for high-risk merchants,
// independent ATM operators, PEP-linked companies, cash-intensive franchisees, and avoiding wholesale de-risking.
// Sources opened October 2026.
window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  { id: "EDDX-001", domain: 3, topic: "Cannabis businesses: CDD steps under FIN-2014-G001", hy: true, difficulty: "medium",
    q: "Greenfield Community Bank in Colorado is asked to open accounts for Peak Leaf LLC, a state-licensed adult-use (recreational) marijuana dispensary with two stores. The owners provide a copy of their state licence, two years of tax returns and a letter from their attorney saying the business complies with state law. The relationship manager notes that Peak Leaf expects about USD 400,000 a month in cash sales and that a competitor bank recently declined it. Under FinCEN's guidance FIN-2014-G001, which due diligence steps should the bank take if it decides to bank Peak Leaf? (Choose three.)",
    options: [
      "Verify with the state licensing authority that Peak Leaf is duly licensed and registered",
      "Review the licence application and related documents Peak Leaf submitted to obtain its state licence",
      "Obtain a written assurance from the DEA that Peak Leaf will not be subject to federal enforcement",
      "Develop an understanding of Peak Leaf's normal and expected activity, including products sold and medical versus recreational customers",
      "Treat the attorney's compliance letter as sufficient, so that no ongoing monitoring of public sources is needed"
    ],
    answer: [0, 1, 3],
    explanation: "FIN-2014-G001 lists the CDD a bank should perform for a marijuana-related business: verify licensing and registration with the state authorities, review the licence application, request available information from state licensing and enforcement authorities, understand the normal and expected activity (products, medical versus recreational customers), monitor public sources for adverse information, monitor for suspicious activity and refresh CDD periodically. The guidance does not contemplate any DEA assurance, and an attorney's letter cannot replace ongoing monitoring. The April 2026 DOJ/DEA order moved only FDA-approved products and state medical-licensed marijuana to Schedule III, with broader rescheduling still pending, so an adult-use dispensary remains squarely within the 2014 guidance.",
    source: [{ label: "FinCEN FIN-2014-G001 – BSA Expectations Regarding Marijuana-Related Businesses", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/bsa-expectations-regarding-marijuana-related-businesses" },
             { label: "DOJ press release (23 Apr 2026) – FDA-approved and state medical-licensed marijuana placed in Schedule III", url: "https://www.justice.gov/opa/pr/justice-department-places-fda-approved-marijuana-products-and-products-containing-marijuana" }] },

  { id: "EDDX-002", domain: 3, topic: "Cannabis businesses: when a 'Marijuana Limited' customer needs a 'Priority' SAR", hy: true, difficulty: "hard",
    q: "Riverbend Bank has banked Mesa Green LLC, a licensed adult-use dispensary in Nevada, for two years and files 'Marijuana Limited' SARs on it. Its customer due diligence was refreshed in March 2026 and its state licence is current. During a July 2026 review, the analyst finds that Mesa Green's cash deposits have doubled in four months while local competitors' sales have been flat, that several cash deposits were made at Riverbend branches in Arizona, and that the managing member now lives in Texas. The dispensary still files its state tax returns on time, and the bank has filed CTRs on all its large cash deposits. What should the bank do?",
    options: [
      "Continue filing 'Marijuana Limited' SARs, because the licence is current and the CTRs have been filed",
      "File a 'Marijuana Priority' SAR giving full transaction details and the enforcement priorities that may be implicated",
      "Designate Mesa Green as exempt from CTR filing, since its deposits are regular and it has been a customer for two years",
      "File a 'Marijuana Termination' SAR and close the account at once, because banks may not serve dispensaries with out-of-state links"
    ],
    answer: [1],
    explanation: "FIN-2014-G001 says that when CDD and monitoring detect changes that may implicate a federal enforcement priority or a breach of state law, the bank should move from 'Marijuana Limited' to a 'Marijuana Priority' SAR with comprehensive detail. Its red flags include revenue well above local competitors, cash deposits from locations outside the state and owners living outside the state. The runner-up, continuing Limited SARs, fits only when CDD shows no priority is implicated, and a current licence or filed CTRs do not change that. A marijuana business cannot be treated as a non-listed business for CTR exemption, and the guidance leaves the exit decision to the bank instead of mandating it.",
    source: [{ label: "FinCEN FIN-2014-G001 – Marijuana Priority SARs, red flags and CTRs", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/bsa-expectations-regarding-marijuana-related-businesses" }] },

  { id: "EDDX-003", domain: 3, topic: "Cannabis businesses: indirect relationships (commercial landlord)", hy: false, difficulty: "hard",
    q: "Harbor Point Bank's commercial customer Delgado Properties LLC owns a strip mall. One tenant is a state-licensed adult-use marijuana dispensary that pays USD 18,000 a month in rent by wire from its own bank. Delgado has no other link to the cannabis industry; its other tenants are a dentist and a coffee shop. The bank's analyst is unsure which narrative term to use in any SAR and whether the relationship must be refused. According to FIN-2014-G001, how may the bank approach this indirect relationship?",
    options: [
      "It must exit Delgado, because federal law bars banks from serving anyone that receives payments from a marijuana business",
      "It must file a 'Marijuana Limited' SAR on Delgado every 90 days, with the same content as for a dispensary customer",
      "It must obtain the dispensary's licence application and inspect its premises before accepting each rent payment",
      "Banking Delgado is a risk-based decision, and any SAR may be filed under existing rules without choosing between 'Limited' and 'Priority'"
    ],
    answer: [3],
    explanation: "Footnote 7 of FIN-2014-G001 covers banks that serve a marijuana business only indirectly, giving a commercial landlord as an example. Because such a bank may not be well placed to judge whether a priority is implicated, it may file SARs under existing regulations and guidance without distinguishing 'Marijuana Limited' from 'Marijuana Priority', and whether to provide the indirect service is a risk-based decision. The runner-up wrongly applies the direct-relationship labels and a fixed 90-day cycle to the landlord. Nothing in the guidance requires exiting indirect relationships or inspecting the tenant.",
    source: [{ label: "FinCEN FIN-2014-G001 – footnote 7 on indirect services", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/bsa-expectations-regarding-marijuana-related-businesses" }] },

  { id: "EDDX-004", domain: 3, topic: "Cannabis businesses: exiting a dispensary ('Marijuana Termination' SAR and 314(b))", hy: false, difficulty: "hard",
    q: "After a 2026 review, Cobalt Valley Credit Union decides to exit Golden Bud Inc., a state-licensed adult-use dispensary, because its management repeatedly could not explain large cash withdrawals followed by same-day deposits into the accounts of unrelated businesses. The credit union has filed 'Marijuana Limited' SARs on Golden Bud for a year. Golden Bud's owner tells the branch that it will move its accounts to Sierra State Bank next week. Both institutions have registered with FinCEN for section 314(b) information sharing. What does FinCEN's 2014 guidance expect the credit union to do?",
    options: [
      "File a SAR with 'MARIJUANA TERMINATION' in the narrative explaining the basis for exit, and consider alerting Sierra State Bank under 314(b)",
      "File a final 'MARIJUANA LIMITED' SAR noting that no additional suspicious activity was identified, then close the account",
      "Close the account without filing, since the exit removes the risk and the earlier SARs already identify the business",
      "Tell Golden Bud that a SAR is being filed so that it can explain the activity to Sierra State Bank before the move"
    ],
    answer: [0],
    explanation: "FIN-2014-G001 says that an institution that terminates a marijuana-related business to keep an effective AML program should file a SAR noting the basis for the termination and using the term 'MARIJUANA TERMINATION'. If it learns the business is moving to another institution, FinCEN urges it to use 314(b) sharing, if it qualifies, to alert that institution. The runner-up is wrong because a 'Limited' SAR must state that no additional suspicious activity was found, which is untrue here: rapid cash movement and commingling with unrelated businesses are listed red flags. Telling the customer about a SAR would breach SAR confidentiality.",
    source: [{ label: "FinCEN FIN-2014-G001 – Marijuana Termination SARs and 314(b)", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/bsa-expectations-regarding-marijuana-related-businesses" }] },

  { id: "EDDX-005", domain: 3, topic: "Cannabis businesses: continuing 'Marijuana Limited' SARs after the October 2025 SAR FAQs", hy: false, difficulty: "hard",
    changed: "FinCEN SAR FAQs, Oct 2025: no separate continuing-activity review required",
    q: "In October 2026, the BSA officer of Pinecrest Bank, which banks nine licensed adult-use dispensaries, wants to cut workload. Each dispensary is the subject of a 'Marijuana Limited' SAR, and due diligence has found no enforcement-priority or state-law issue. A consultant says FinCEN requires a separate manual review of every dispensary account every 90 days and a new SAR within 120 days of the previous one. A teller supervisor suggests the bank stop filing after the first SAR, since nothing new has happened. Which statement BEST reflects current FinCEN guidance?",
    options: [
      "The bank must perform and document a separate manual review of each dispensary account every 90 days, as the consultant says",
      "The bank may stop filing after the first SAR, because a 'Marijuana Limited' SAR covers the relationship indefinitely",
      "Continuing reports may repeat the limited content plus amounts since the last SAR, and a separate 90-day review is not required if risk-based monitoring keeps reporting current",
      "Continuing reports must switch to 'Marijuana Priority' content, because each later filing adds new transaction amounts"
    ],
    answer: [2],
    explanation: "FIN-2014-G001 says continuing reports on a 'Marijuana Limited' relationship may keep the same limited content plus the amounts of deposits, withdrawals and transfers since the last SAR, following FinCEN's continuing-activity guidance on timing. FinCEN's October 2025 SAR FAQs state that institutions are not required to conduct a separate review after a SAR to see whether activity continued, and that the 90-day/120-day schedule is optional; they may rely on reasonably designed risk-based procedures to report as appropriate. The runner-up, stopping after one SAR, ignores that the dispensary's ongoing transactions still involve funds that are illegal under federal law. More amounts do not by themselves turn a Limited SAR into a Priority SAR.",
    source: [{ label: "FinCEN FIN-2014-G001 – continuing Marijuana Limited reports", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/bsa-expectations-regarding-marijuana-related-businesses" },
             { label: "FinCEN SAR FAQs (October 2025) – Questions 2 and 3, continuing activity reviews", url: "https://www.fincen.gov/system/files/2025-10/SAR-FAQs-October-2025.pdf" }] },

  { id: "EDDX-006", domain: 3, topic: "MSB customers: a check casher starts making currency deposits", hy: true, difficulty: "hard",
    q: "Lakeview Bank banks QuickCash Express, a licensed check casher registered with FinCEN that runs three stores. For four years its account showed large check deposits and matching currency withdrawals to fund its tills. Since May 2026, QuickCash has also deposited USD 30,000 to 45,000 in cash, mostly in USD 5 and USD 10 bills, three times a week. The owner says the stores now sell prepaid phone cards. QuickCash's state licence was renewed in June, its independent AML review found no issues, and it recently opened a fourth store. Which observation should the analyst treat as the MOST significant?",
    options: [
      "The opening of a fourth store without notice to the bank",
      "The recurring currency deposits in small bills, which a check casher would not normally need to make",
      "The reliance on an independent review rather than an annual state examination",
      "The large currency withdrawals used to fund the check-cashing tills"
    ],
    answer: [1],
    explanation: "The 2005 interagency guidance on banking MSBs notes that a check casher would typically deposit checks and withdraw currency to meet its business needs, so recurring currency deposits, especially in small denominations, may indicate suspicious activity. The phone-card explanation would need evidence, since it hardly accounts for over USD 100,000 a week. The runner-up, the new store, may explain growth but not a reversal in the direction of cash flows. Currency withdrawals to fund tills are the expected pattern, and the independent review is a normal MSB program element.",
    source: [{ label: "Interagency Interpretive Guidance on Providing Banking Services to MSBs (FinCEN, 2005)", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/interagency-interpretive-guidance-providing-banking" }] },

  { id: "EDDX-007", domain: 3, topic: "MSB customers: an unexplained change of remittance corridor", hy: false, difficulty: "hard",
    q: "Northshore Bank's customer Envíos Rápidos Inc. is a licensed money transmitter that told the bank at onboarding it specializes in remittances to Guatemala and Honduras. Its account funds settlement with its foreign payout partners. In 2026 the bank notices regular, growing wires from the account to a payout company in a South Asian country, which now make up 30% of outflows. Envíos Rápidos's state licences and FinCEN registration are current. A junior analyst proposes requiring the transmitter to send the bank the name and ID of every sender each week so the bank can screen them itself. What is the BEST next step under the interagency MSB guidance?",
    options: [
      "Require weekly sender files and screen every underlying remitter as though each were the bank's own customer",
      "Take no action, because the corridor change is a commercial decision and the licences and registration are current",
      "File a SAR at once and close the account, because any departure from the stated corridors shows illegal activity",
      "Ask the transmitter to explain the new corridor, update its profile, assess its controls, and consider a SAR if it is unexplained"
    ],
    answer: [3],
    explanation: "The 2005 guidance gives this exact example: a transmitter that said it specializes in remittances to Latin America and starts sending funds regularly to another part of the world may show an unexplained change that indicates suspicious activity. It also says variances do not necessarily mean a problem but may call for more review, that risk-based monitoring does not mean real-time review of every payee, and that banks are not expected to act as de facto regulators of MSBs. Weekly screening of every remitter is the runner-up but goes beyond what the guidance expects; doing nothing ignores the deviation, and an automatic exit skips the inquiry.",
    source: [{ label: "Interagency Interpretive Guidance on Providing Banking Services to MSBs (FinCEN, 2005)", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/interagency-interpretive-guidance-providing-banking" }] },

  { id: "EDDX-008", domain: 3, topic: "MSB customers: further due diligence for a higher-risk currency exchanger", hy: true, difficulty: "medium",
    q: "Granite Bank is onboarding Global Currency Hub LLC, a new currency exchanger with no operating history, located in a High Intensity Drug Trafficking Area. It exchanges the currencies of two countries that the bank rates as high risk and will deposit large amounts of cash at several branches. Its FinCEN registration and state licence are confirmed, and the bank has applied its CIP. Under the 2005 interagency MSB guidance, which additional due diligence is MOST appropriate?",
    options: [
      "Review its AML program and independent test results, conduct site visits, and review its agent list and agent management practices",
      "No further due diligence, because confirming registration and licensing completes the bank's obligations for any MSB",
      "Examine the exchanger's compliance with the BSA and report its program deficiencies to FinCEN as its de facto regulator",
      "Decline the account, because the guidance treats currency exchangers in drug trafficking areas as prohibited customers"
    ],
    answer: [0],
    explanation: "The 2005 guidance lists higher-risk indicators that all apply here: a new business without operating history, dealing in currencies of higher-risk jurisdictions, located in a HIDTA or HIFCA. Beyond the minimum steps (CIP, confirming registration, licensing and agent status, and a basic risk assessment), the bank may review the MSB's AML program and independent testing, conduct site visits and review agent lists and agent management practices. The guidance says heightened risk does not mean the bank cannot keep the account, and that banks are not expected to act as de facto regulators of MSBs.",
    source: [{ label: "Interagency Interpretive Guidance on Providing Banking Services to MSBs (FinCEN, 2005)", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/interagency-interpretive-guidance-providing-banking" }] },

  { id: "EDDX-009", domain: 3, topic: "Payment institutions as bank customers: PSD2 Article 36 access to accounts", hy: false, difficulty: "medium",
    q: "In 2026, Banca Adriatica, an Italian bank, receives an application from Volta Pay, a payment institution authorised by the Bank of Italy, for a safeguarding account and an operating account. Volta Pay processes merchant payments for e-commerce clients across the EU. The bank's onboarding team wants to reject it under a new internal rule that declines every payment institution with less than five years of history, without reviewing its controls. Volta Pay has a clean supervisory record and has supplied its AML policies. Under Article 36 of PSD2, what is the bank's position?",
    options: [
      "It may apply the five-year rule, because access to accounts for payment institutions is entirely a commercial decision",
      "It must open the accounts, because PSD2 prohibits credit institutions from ever refusing an authorised payment institution",
      "Access must be objective, non-discriminatory and proportionate, and any rejection must be explained to the competent authority with duly motivated reasons",
      "It must refer the application to the EBA, which decides whether payment institutions may be refused bank accounts"
    ],
    answer: [2],
    explanation: "Article 36 of Directive (EU) 2015/2366 requires Member States to ensure that payment institutions have access to credit institutions' payment account services on an objective, non-discriminatory and proportionate basis, and that the credit institution gives the competent authority duly motivated reasons for any rejection. A blanket age rule applied without assessing the applicant is hard to reconcile with that test, and the EBA's access guidelines require refusals to be documented. PSD2 does not oblige banks to accept every payment institution, and the EBA does not decide individual cases.",
    source: [{ label: "Directive (EU) 2015/2366 (PSD2), consolidated text – Article 36 (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02015L2366-20240408" },
             { label: "EBA Guidelines on ML/TF risk management and access to financial services (EBA/GL/2023/04)", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2023/1054144/Guidelines%20on%20MLTF%20risk%20management%20and%20access%20to%20financial%20services.pdf" }] },

  { id: "EDDX-010", domain: 3, topic: "Crypto firms as bank customers: services outside the scope of the licence (EBA 9.20-9.21)", hy: false, difficulty: "hard",
    q: "Nordhavn Bank, a Danish credit institution, is asked to open accounts for Kestrel Digital Ltd, a crypto exchange incorporated and registered as a virtual asset service provider in a non-EU country whose AML/CFT regime the bank rates as adequate. Kestrel's licence covers fiat-to-crypto exchange and custody. Its website also promotes crypto lending at 12% returns and an 'instant' service paying out to self-hosted wallets. Kestrel's founders passed screening, and it says its own customer due diligence follows FATF standards. Under the EBA ML/TF risk factors guidelines as amended in 2024, which step is MOST important before deciding on the relationship?",
    options: [
      "Apply simplified due diligence, because the home country's AML/CFT regime is adequate and Kestrel is supervised",
      "Determine whether the services Kestrel provides fall within the scope of its licence, including the lending product",
      "Require Kestrel to obtain MiCA authorisation first, since only MiCA-authorised CASPs may hold accounts at EU banks",
      "Rely on Kestrel's statement about its own CDD, because verifying its clients' identities is Kestrel's responsibility"
    ],
    answer: [1],
    explanation: "Guidelines 9.20 and 9.21, inserted by EBA/GL/2024/01, say that banks serving crypto-asset service providers not regulated under MiCA may face increased risk, should assess that risk before the relationship starts, and should at least: understand the business, carry out due diligence on senior management, understand the customer's own CDD, assess a non-EU regulator's regime, and determine whether the services fall within the scope of the licence or go beyond it. An unlicensed lending product is the clearest open issue here. The runner-up, relying on Kestrel's own statement, skips the duty to understand how far it actually applies CDD. Neither simplified due diligence nor a MiCA-only rule is supported.",
    source: [{ label: "EBA/GL/2024/01 – Guidelines amending the ML/TF Risk Factors Guidelines (Guidelines 9.20-9.21)", url: "https://www.eba.europa.eu/sites/default/files/2024-01/a3e89f4f-fbf3-4bd6-9e07-35f3243555b3/Final%20Amending%20%20Guidelines%20on%20MLTF%20Risk%20Factors.pdf" }] },

  { id: "EDDX-011", domain: 3, topic: "Crypto firms as bank customers (US): after the April 2025 withdrawal of the 2023 joint statements", hy: false, difficulty: "hard",
    q: "In September 2026, Tidewater Bank, a state member bank, is asked to open operating and customer-funds accounts for Orbit Exchange, a US crypto exchange registered with FinCEN as an MSB and licensed as a money transmitter in 30 states. The deposits would equal 6% of the bank's total deposits. The bank's policy, written in 2023, bars crypto-sector deposits because the federal banking agencies' 2023 joint statements on crypto-asset risks and liquidity discouraged them. Orbit has strong sanctions screening and blockchain analytics controls. What should the BSA officer advise?",
    options: [
      "Keep the policy, because the 2023 joint statements still require banks to avoid deposits from crypto-asset firms",
      "Open the accounts without enhanced review, because the withdrawal of the 2023 statements means crypto firms are now low risk",
      "Seek the Federal Reserve's prior written non-objection, which a state member bank needs before accepting deposits from any crypto firm",
      "Update the policy, since the 2023 statements were withdrawn in April 2025, and decide on Orbit through risk-based due diligence and liquidity planning"
    ],
    answer: [3],
    explanation: "On 24 April 2025 the Federal Reserve, with the FDIC and OCC, withdrew the 2023 joint statements on crypto-asset risks and on liquidity risks from crypto-asset market vulnerabilities, and rescinded SR 22-6 (advance notification of crypto activities) and SR 23-8; it now monitors these activities through the normal supervisory process. The withdrawal did not change BSA duties, so the bank still applies the MSB minimum steps (CIP, registration, licensing, risk assessment) and further due diligence matching Orbit's risk, and it must manage the deposit concentration. The runner-up wrongly treats the withdrawal as a downgrade of risk. No non-objection process exists for taking a crypto firm's deposits.",
    source: [{ label: "Federal Reserve press release (24 Apr 2025) – withdrawal of crypto-asset guidance", url: "https://www.federalreserve.gov/newsevents/pressreleases/bcreg20250424a.htm" },
             { label: "Interagency Interpretive Guidance on Providing Banking Services to MSBs (FinCEN, 2005)", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/interagency-interpretive-guidance-providing-banking" }] },

  { id: "EDDX-012", domain: 3, topic: "BaaS program managers: an undisclosed sub-program without a bank contract", hy: false, difficulty: "hard",
    q: "Pinewood Bank holds deposits for 120,000 users of BrightWallet, a fintech program manager that performs CIP and transaction monitoring under contract. In 2026 the bank learns that BrightWallet has signed up StreamCash, another fintech, which markets 'BrightWallet-powered' accounts to gig workers abroad and onboards them through its own vendor. Pinewood has no contract with StreamCash or its vendor and no access to StreamCash's onboarding records, although BrightWallet says it audits StreamCash once a year. StreamCash accounts are growing by 8,000 a month. What is the BEST action?",
    options: [
      "Stop new StreamCash onboarding until the bank has due diligence, contract rights and record access covering every party performing crucial functions",
      "Accept BrightWallet's annual audit of StreamCash as sufficient, since the program manager is contractually responsible for compliance",
      "Treat StreamCash's users as BrightWallet's customers rather than the bank's, so the bank's CIP and SAR duties do not apply to them",
      "Let growth continue while requesting StreamCash's AML policy, since a policy document makes up for the lack of a direct contract"
    ],
    answer: [0],
    explanation: "The agencies' July 2024 joint statement on bank arrangements with third parties to deliver deposit products flags multiple levels of third-party and subcontractor relationships without direct bank contracts, lack of access to records, and rapid growth as sources of elevated risk. It stresses that the bank remains responsible for CIP, CDD, suspicious activity reporting and sanctions compliance even when third parties perform them, and that the bank must assess whether risks from parties it has no contract with can be mitigated within its risk appetite. The runner-up, relying on the program manager's audit, leaves the bank without its own due diligence or record access. A policy document does not give contractual rights.",
    source: [{ label: "Joint Statement on Banks' Arrangements with Third Parties to Deliver Bank Deposit Products and Services (25 Jul 2024)", url: "https://www.federalreserve.gov/newsevents/pressreleases/files/bcreg20240725c1.pdf" }] },

  { id: "EDDX-013", domain: 3, topic: "NPOs in conflict zones: activity in a sanctioned jurisdiction (EBA NPO annex)", hy: true, difficulty: "hard",
    q: "Hilfe Ohne Grenzen e.V., a German humanitarian NPO, banks with Rheinland Bank. In 2026 it plans to fund a water and sanitation programme in a region of a country subject to EU and UN sanctions, paying local suppliers and staff through a partner NGO. The NPO has audited accounts, a documented board and EU government grants. Some payments could reach entities linked to a designated group that controls parts of the region. The relationship manager suggests either exiting the NPO or simply processing the payments as usual. Under the EBA's annex on customers that are NPOs, what should the bank do?",
    options: [
      "Exit the relationship, because NPOs operating in sanctioned jurisdictions are outside any bank's risk appetite",
      "Process the payments as usual, because the audited accounts and EU grants show that the NPO is low risk",
      "Establish whether the activity falls within a humanitarian exemption or derogation and obtain evidence giving reasonable assurance that it does",
      "Require the NPO to identify every individual who will use the water facilities before any payment is made"
    ],
    answer: [2],
    explanation: "Paragraph 4 of the NPO annex (EBA/GL/2023/03) says that where an NPO works in jurisdictions subject to EU or UN sanctions, firms should establish whether it benefits from humanitarian exemptions or derogations and, consistent with their own asset-freezing obligations, obtain evidence that gives reasonable assurance that the NPO acts within them. The runner-up, processing as usual, relies on mitigating factors (audits, government funding) that do not remove the asset-freeze risk from a designated group's control of the area. The annex asks about categories of beneficiaries, not every individual, and the EBA guidelines reject exiting whole categories without individual assessment.",
    source: [{ label: "EBA/GL/2023/03 – Annex: Customers that are NPOs", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2023/1054143/Amending%20GLs%20to%20the%20RFGLs%20in%20relation%20to%20NPOs.pdf" }] },

  { id: "EDDX-014", domain: 3, topic: "NPOs in conflict zones: factors that reduce risk (EBA NPO annex)", hy: false, difficulty: "medium",
    q: "Rheinland Bank is rating Brücke Aid gGmbH, an NPO that supports refugees in a neighbouring conflict-affected country. The analyst has gathered five facts about it. Which of them does the EBA's NPO annex list as factors that may contribute to REDUCING the risk? (Choose two.)",
    options: [
      "It is legally required to publish annual financial statements identifying its sources of funds, main purposes and categories of beneficiaries",
      "It was set up less than a year ago, but its founders are well regarded in the local community",
      "It delivers support only as direct material help, such as medical devices and IT equipment, instead of cash",
      "It is funded mainly by private donors in a high-risk third country, whom it describes as long-standing supporters",
      "It relies on local intermediaries in the conflict area, whom it trusts because they are relatives of its staff"
    ],
    answer: [0, 2],
    explanation: "Paragraph 3 of the EBA's NPO annex lists risk-reducing factors, including a legal duty to disclose annual financial statements or reports showing sources of funds, purposes and categories of beneficiaries, and delivering assistance only through direct material help such as IT equipment or medical devices. The other facts match the annex's risk-increasing factors: difficulty establishing reputation for an NPO set up in the last 12 months, funding by private donors from high-risk third countries, and reliance on intermediaries whose work the NPO cannot oversee.",
    source: [{ label: "EBA/GL/2023/03 – Annex: Customers that are NPOs (paragraphs 2-3)", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2023/1054143/Amending%20GLs%20to%20the%20RFGLs%20in%20relation%20to%20NPOs.pdf" }] },

  { id: "EDDX-015", domain: 3, topic: "US charities: beneficial ownership (control prong only) and focus of EDD", hy: true, difficulty: "hard",
    q: "Cedar Valley Bank is opening an account for Light for Aleppo Inc., a newly registered US public charity that will fund medical clinics in northern Syria through a partner NGO. The onboarding analyst asks the charity to list every donor that provides more than 25% of its income as a beneficial owner and to supply their IDs. The charity's executive director replies that it has no owners. The bank's policy rates the relationship high risk because of the conflict-zone activity. What is the CORRECT approach to beneficial ownership and EDD?",
    options: [
      "Identify donors giving 25% or more of income as beneficial owners under the ownership prong, and also verify the board chair",
      "Identify and verify one individual with significant responsibility to control the charity, and focus EDD on its partner, disbursement criteria and controls",
      "Record that the charity has no beneficial owners, since nonprofits are excluded from the beneficial ownership rule entirely",
      "Identify every board member as a beneficial owner, because control of a charity is shared equally among its directors"
    ],
    answer: [1],
    explanation: "The FFIEC manual's charities section notes that charity and nonprofit customers are subject only to the control prong of the beneficial ownership requirement: the bank identifies and verifies a single individual with significant responsibility to control, manage or direct the entity. Donors are not owners. For a charity funding activity in a conflict region, which the manual says can face higher TF risk, useful information includes beneficiaries and disbursement criteria, intermediaries, operating policies and controls, and affiliations. The runner-up applies an ownership test that does not fit nonprofits, while full exclusion and an all-directors rule are both wrong.",
    source: [{ label: "FFIEC BSA/AML Examination Manual – Charities and Nonprofit Organizations (Nov 2021, FDIC copy)", url: "https://www.fdic.gov/sites/default/files/2024-03/fil21076c.pdf" }] },

  { id: "EDDX-016", domain: 3, topic: "Embassies and foreign missions: which staff are PEPs (AMLR definition)", hy: true, difficulty: "medium",
    q: "In 2028, Banque du Lac in Luxembourg is opening accounts for the Embassy of Country T and for several of its staff. It must decide which individuals to treat as politically exposed persons under the EU AMLR definition, which covers functions in third countries equivalent to those listed for Member States. Which individuals fall within the definition? (Choose two.)",
    options: [
      "The ambassador of Country T",
      "The chargé d'affaires who heads the embassy while no ambassador is accredited",
      "A third secretary who handles cultural affairs",
      "The embassy's locally hired chief accountant, who signs payments on the operating account",
      "The embassy driver who deposits cash from visa fees"
    ],
    answer: [0, 1],
    explanation: "Article 2(1)(34) of Regulation (EU) 2024/1624 lists 'ambassadors, chargés d'affaires and high-ranking officers in the armed forces' among prominent public functions, and point (d) extends this to equivalent functions in a third country. Middle-ranking or junior diplomats, such as a third secretary, and local employees are not PEPs by virtue of their posts, although signatories on the embassy account still need normal CDD and the account still needs monitoring against its agreed purpose.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR) – Article 2(1)(34) (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32024R1624" }] },

  { id: "EDDX-017", domain: 3, topic: "Gambling operators as bank customers (UK): only casinos are in the MLR regulated sector", hy: false, difficulty: "hard",
    q: "Thames Commercial Bank is onboarding Quickline Bet Ltd, a UK remote betting operator licensed by the Gambling Commission that takes sports bets online. The relationship manager proposes light due diligence: he says all licensed gambling operators are in the 'regulated sector' under the Money Laundering Regulations 2017, so Quickline's own AML duties can be relied on. Quickline expects GBP 3 million a month in customer deposits through two payment processors, and it has appointed a money laundering lead. What is the BEST response?",
    options: [
      "Agree, because every Gambling Commission licensee is a relevant person under the MLRs and can be treated as lower risk",
      "Decline the relationship, because UK banks may not hold accounts for betting operators that are outside the MLRs",
      "Apply simplified due diligence, because a Gambling Commission licence shows that Quickline's AML controls have been vetted",
      "Correct the premise, since only casinos are in the MLR regulated sector, and assess Quickline's licence, AML controls and payment flows on their own merits"
    ],
    answer: [3],
    explanation: "The Gambling Commission explains that all gambling operators must keep crime out of gambling and comply with POCA, the Terrorism Act, the Gambling Act and its licence conditions, but only remote and non-remote casinos have additional responsibilities under the Money Laundering Regulations 2017. A betting operator is therefore not a 'relevant person' that the bank can treat as AML-regulated. The EBA and other standards also treat gambling businesses as associated with higher ML risk, so the bank should verify the licence and assess Quickline's controls, customer funding methods and processors. The runner-up, simplified due diligence, misreads a licence as AML vetting, and nothing prohibits banking betting operators.",
    source: [{ label: "Gambling Commission – Our approach to preventing money laundering", url: "https://www.gamblingcommission.gov.uk/licensees-and-businesses/guide/approach-to-preventing-money-laundering" },
             { label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02) – Guideline 9.6 customer risk factors", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }] },

  { id: "EDDX-018", domain: 3, topic: "Precious metals dealers (UK): accepting high value cash without HMRC registration", hy: false, difficulty: "medium",
    q: "Marlow Bank's customer Sterling Bullion Ltd sells gold coins and bars from a shop in Birmingham. At onboarding it said it would accept only card and bank payments. In 2026 its account starts receiving cash deposits of GBP 15,000 to 40,000 the day after large sales, and the director confirms that some buyers now pay in cash 'as a service'. The analyst checks HMRC's Supervised Business Register and cannot find Sterling Bullion. Its VAT filings are up to date and its gold suppliers are reputable refiners. What should the analyst do FIRST?",
    options: [
      "Escalate to the nominated officer, because the company appears to accept high value cash payments without the HMRC registration it must hold first",
      "Take no action, because dealers in precious metals are outside the MLRs unless they trade bullion above EUR 15,000",
      "Ask the company to register with the FCA as a cryptoasset business before it accepts more cash",
      "Close the account immediately and return the funds without making any internal or external report"
    ],
    answer: [0],
    explanation: "HMRC guidance says any business that accepts or makes high value cash payments of EUR 10,000 or more (single or linked) for goods must register as a high value dealer and must not accept such payments until registered. HMRC's Supervised Business Register lets firms check registration, though recent registrations may lag, so the analyst should escalate internally, update the risk profile and let the nominated officer consider a SAR. The other options misstate the threshold, name the wrong supervisor, or close the account without considering a report.",
    source: [{ label: "HMRC – Money Laundering Regulations: high value dealer registration (GOV.UK)", url: "https://www.gov.uk/guidance/money-laundering-regulations-high-value-dealer-registration" },
             { label: "HMRC – Money Laundering Regulations: Supervised Business Register (GOV.UK)", url: "https://www.gov.uk/guidance/money-laundering-regulations-supervised-business-register" }] },

  { id: "EDDX-019", domain: 3, topic: "Arms and defence manufacturers: tailoring EDD to corruption risk (EBA)", hy: true, difficulty: "hard",
    q: "Aldmark Bank, an EU bank, is onboarding Viridian Defence Systems SA, a maker of military radios and armoured-vehicle parts. Viridian holds national export licences and sells mainly to defence ministries in three countries, one of them with high corruption risk. It pays commissions of 8% to 15% to sales agents in two of those countries and will receive advance payments through a state-owned bank. Its owners are a listed industrial group and a pension fund, and its audited accounts are clean. Under the EBA risk factors guidelines, how should Aldmark design its EDD?",
    options: [
      "Apply the bank's standard high-risk package, centred on the source of wealth of the listed parent's shareholders",
      "Tailor EDD to the reason for the high-risk rating: understand the agents and their commissions, the end customers and the destination of funds, and monitor payments to intermediaries more closely",
      "Decline the relationship, because the guidelines treat the arms trade as a sector that EU banks may not serve",
      "Treat the export licences as evidence of low risk and apply simplified due diligence, since governments have vetted each sale"
    ],
    answer: [1],
    explanation: "The EBA guidelines list the arms trade and defence among sectors associated with higher corruption risk. Guideline 4.62 says firms should decide which EDD measures fit each high-risk situation, depending on why the relationship was rated high risk, and 4.64 includes obtaining more information on the nature of the business and the destination of funds and more frequent or in-depth monitoring. Agents paid large commissions on government contracts are the obvious corruption channel. The runner-up applies generic EDD that misses that risk; 4.68 rejects refusing whole categories, and an export licence does not address bribery risk.",
    source: [{ label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02) – customer risk factors and Guidelines 4.62-4.68", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }] },

  { id: "EDDX-020", domain: 3, topic: "Payment processors for high-risk merchants: soliciting a capital-strained bank (FIN-2012-A010)", hy: false, difficulty: "hard",
    q: "Prairie State Bank, a small community bank under a regulatory order to raise capital, is approached by ClearPath Processing LLC. ClearPath processes ACH debits and remotely created checks for online merchants selling adult-content subscriptions, 'free trial' nutritional supplements and debt-relief services. It offers to move USD 40 million of deposits to the bank and to buy 9.9% of the bank's shares. It banks at three other institutions and changed banks twice last year. Its overall return rate is within network limits. What should the bank do FIRST?",
    options: [
      "Accept the deposits and the share purchase, since ClearPath's overall return rate is within network limits",
      "Before deciding, perform due diligence on ClearPath's merchants, licences, pending investigations and returns by merchant, treating the share offer and bank-hopping as red flags",
      "Refuse the relationship, because FinCEN prohibits banks from serving processors whose merchants sell adult content",
      "Accept the deposits but decline the share purchase, which removes the risk FinCEN describes"
    ],
    answer: [1],
    explanation: "FinCEN Advisory FIN-2012-A010 warns that processors engaged in suspicious activity solicit distressed institutions, sometimes offering to buy their stock, keep accounts at several institutions and move between them quickly, and may show an acceptable overall return rate that hides much higher rates for individual originators. It says banks should find out whether investigations or legal actions are pending against the processor and whether it holds the required licences. The runner-up, taking the deposits without the shares, still skips the due diligence. FinCEN does not prohibit serving any merchant category.",
    source: [{ label: "FinCEN Advisory FIN-2012-A010 – Risk associated with third-party payment processors", url: "https://www.fincen.gov/resources/advisories/fincen-advisory-fin-2012-a010" }] },

  { id: "EDDX-021", domain: 3, topic: "Independent ATM operators: controls on the source of replenishment cash", hy: false, difficulty: "hard",
    q: "Summit Ridge Bank is onboarding Cornerstone ATM Services LLC, which plans to deploy 25 independent ATMs in convenience stores and gas stations. It is an Independent Sales Organization sponsored by another bank, and its EFT network settlements will arrive by ACH. Cornerstone proposes to refill the machines from the store owners' daily cash takings and to use its account at Summit Ridge for settlement and payroll. Its owners have clean backgrounds, and it has five years of operating history in another state. Which control would MOST reduce the money laundering risk of this relationship?",
    options: [
      "Require Cornerstone to register with FinCEN as a money services business before the account opens",
      "File a CTR on each ACH settlement credit over USD 10,000",
      "Have replenishment funded from a dedicated account at the bank that also receives the settlements, so cash used can be compared with EFT settlements",
      "Obtain the EFT network's certification of Cornerstone and rely on it in place of ongoing monitoring"
    ],
    answer: [2],
    explanation: "The FFIEC manual's section on independent ATM owners or operators calls the source of replenishment cash a key risk factor. Operators that fund ATMs only with cash withdrawn from their bank account are lower risk because the bank can compare cash usage with EFT settlements, and a separate account used only for replenishment and settlement adds transparency. Cash from store takings is harder to verify. The runner-up, relying on network certification, can inform the risk profile but does not replace monitoring. Under FIN-2007-G006 such operators are generally not MSBs, and CTRs cover currency, not ACH credits.",
    source: [{ label: "FFIEC BSA/AML Examination Manual – Independent ATM Owners or Operators (Nov 2021, FDIC copy)", url: "https://www.fdic.gov/sites/default/files/2024-03/fil21076d.pdf" }] },

  { id: "EDDX-022", domain: 3, topic: "Companies linked to PEPs: board members of state- and locally owned enterprises (AMLR)", hy: true, difficulty: "hard",
    q: "In 2028, Kestrel Bank in an EU Member State onboards three companies. RailNet is a national railway operator wholly owned by the state. ParkTown is a small municipal parking company (12 employees, turnover EUR 1.5 million) owned by a town of 80,000 inhabitants. RegioPower is a large regional energy utility controlled by a regional government. The bank must decide whose board members to treat as PEPs under the AMLR definition. Which statement is CORRECT?",
    options: [
      "Board members of RailNet and RegioPower are PEPs; those of ParkTown are not, because ParkTown is not a medium-sized or large undertaking",
      "Board members of all three companies are PEPs, because each is controlled by a public authority",
      "Only board members of RailNet are PEPs, because enterprises controlled by regional or local authorities are never covered",
      "The companies themselves are PEPs, so each account needs senior management approval whoever sits on the board"
    ],
    answer: [0],
    explanation: "Article 2(1)(34)(a)(vii) of the AMLR covers members of the administrative, management or supervisory bodies of enterprises controlled by the state, and of enterprises controlled by regional or local authorities only where they are medium-sized or large undertakings or groups under the Accounting Directive. A small municipal company is therefore outside, while the state railway and the large regional utility are inside. The runner-up ignores the size condition. A PEP is a natural person, so a company is not itself a PEP; EDD applies where a PEP is the customer or beneficial owner.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR) – Article 2(1)(34) (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32024R1624" }] },

  { id: "EDDX-023", domain: 3, topic: "Companies linked to foreign PEPs (US): risk-rating on the facts", hy: false, difficulty: "medium",
    q: "Harborview Bank's policy automatically rates every account linked to a foreign PEP as high risk and requires annual source-of-wealth documents. Ana Ruiz, a pediatrician employed by a US hospital, opens a checking account for her single-member LLC, which receives consulting fees from two US medical schools and pays her mortgage. Screening shows that her father is a deputy minister of health in Country P. The account expects about USD 6,000 a month in domestic ACH credits, and she has no other products. According to the FFIEC manual's PEP section, what is the BEST approach?",
    options: [
      "Rate the relationship on its facts, because limited volume, known legitimate funds and few accounts can support a lower risk profile",
      "Keep the high rating, because the BSA requires enhanced due diligence on all accounts of PEP family members",
      "Decline the account, because PEP family members must be treated under the private banking rule for senior foreign political figures",
      "Ignore the PEP link, because US regulations prohibit banks from screening customers for PEP status"
    ],
    answer: [0],
    explanation: "The FFIEC manual's PEP section says there are no BSA regulations specific to PEPs and that not all bank-identified PEPs are automatically higher risk. PEPs with limited transaction volume, a low-dollar deposit account, known legitimate sources of funds and few accounts could reasonably have lower risk profiles. The CDD rule does not require PEP screening, but a bank may screen, so the link should be weighed rather than ignored. The private banking due diligence rule covers private banking accounts, not an ordinary checking account.",
    source: [{ label: "FFIEC BSA/AML Examination Manual – Politically Exposed Persons (Nov 2021, FDIC copy)", url: "https://www.fdic.gov/sites/default/files/2024-03/fil21076e.pdf" }] },

  { id: "EDDX-024", domain: 3, topic: "Cash-intensive franchisees: comparing an outlet with its peers", hy: false, difficulty: "hard",
    q: "Ostrava Savings Bank has 14 customers that each operate one outlet of the same fast-food franchise in similar city-centre locations. Thirteen deposit EUR 35,000 to 50,000 in cash a month, consistent with card-heavy sales. The fourteenth, Rapid Burger Sp., deposits EUR 160,000 in cash a month, mostly in EUR 50 notes, and its card takings are the lowest in the group. Its owner says his outlet is simply more popular, and his franchise contract and food-safety certificates are current. The monthly volume is within the range recorded at onboarding three years ago, when the owner estimated 'up to EUR 200,000'. What should the analyst do?",
    options: [
      "Close the alert, because the cash volume is within the expected range the owner declared at onboarding",
      "Treat the volume as normal, because cash-intensive franchises are already rated high risk and subject to EDD",
      "Exit all 14 franchise outlets, since one outlier shows that the franchise model is being abused",
      "Investigate the deviation from comparable outlets, request evidence such as sales records to explain it, and consider an STR if it stays unexplained"
    ],
    answer: [3],
    explanation: "The EBA guidelines treat a customer as higher risk where its behaviour or transaction volume is not in line with that expected from the category of customer to which it belongs, and list EDD measures that include more information about the business and requesting evidence about expected transactions; firms must report to the FIU where they have reasonable grounds to suspect ML. The runner-up relies on a self-declared estimate made three years ago, which cannot override a fourfold gap with identical peers and an unusually low card share. A high-risk rating is a reason to monitor more closely, not to accept anomalies, and 4.68 rejects exiting a whole category.",
    source: [{ label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02) – Guidelines 4.64-4.68 and 9.6", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }] },

  { id: "EDDX-025", domain: 3, topic: "Avoiding wholesale de-risking: targeted restrictions for a remittance customer (EBA/GL/2023/04)", hy: true, difficulty: "hard",
    q: "Baltic Union Bank's customer Sahel Remit UAB is a Lithuanian payment institution whose customers send family remittances to West Africa. A 2026 review finds that its controls are adequate overall, but 12% of its outflows go through one payout partner in a high-risk third country with a weak AML regime, and that partner cannot yet provide complete payer and payee information. Senior management proposes to exit Sahel Remit and every other remittance customer. Under the EBA guidelines on ML/TF risk management and access to financial services, what is the BEST approach?",
    options: [
      "Exit all remittance customers, documenting the decision as a portfolio-level risk appetite choice",
      "Keep Sahel Remit unchanged, because a licensed payment institution is supervised and its partners are its own responsibility",
      "Consider targeted restrictions, such as limits on transfers to that country or partner, adjust monitoring, and document any refusal or termination",
      "Keep the relationship but stop monitoring Sahel Remit's flows, because the institution's own monitoring replaces the bank's"
    ],
    answer: [2],
    explanation: "EBA/GL/2023/04 asks institutions to include in their policies options to adjust products and services on an individual, risk-sensitive basis, including targeted restrictions on the amount, type or number of transfers to and from third countries associated with higher ML/TF risk. It also asks them to adjust monitoring intensity to the customer's risk and to document any decision to refuse or terminate a relationship. Exiting a whole category without individual assessment is the de-risking the EBA warns against. The runner-up ignores a real gap at the payout partner, and the bank cannot hand its own monitoring duty to the customer.",
    source: [{ label: "EBA Guidelines on ML/TF risk management and access to financial services (EBA/GL/2023/04)", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2023/1054144/Guidelines%20on%20MLTF%20risk%20management%20and%20access%20to%20financial%20services.pdf" }] }
]);
