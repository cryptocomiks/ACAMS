window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  { id: "CASE-001", domain: 3, topic: "Case lessons: TD Bank (2024) - resourcing", hy: true,
    q: "In the 2024 TD Bank enforcement actions, FinCEN found that senior executives held the AML budget flat year over year while the bank's profits and risk profile grew, and the BSA Officer listed running the program \"within a flat cost paradigm\" as an accomplishment. Which lesson for a BSA/AML officer does this case BEST illustrate?",
    options: [
      "AML resources must be set by the institution's risk profile, and resource gaps must be escalated to executive management and the board",
      "AML budgets should be benchmarked to peer banks of a similar asset size rather than to the institution's own risk assessment",
      "Holding costs flat is acceptable so long as the bank's independent testing function has not yet reported a program failure",
      "Budget decisions are a first-line business matter, so the BSA Officer is not responsible for raising concerns about staffing"
    ],
    answer: [0],
    explanation: "FinCEN's consent order faulted TD Bank for failing to fund and staff its AML program in line with its growing risk, and noted that AML management did not timely escalate resource requests to executive management or the boards. The lesson is that the risk profile drives resourcing and that shortfalls must be escalated. Peer benchmarking does not replace a bank's own risk assessment, and waiting for audit to find a failure, or treating staffing as someone else's problem, is the conduct that was penalized.",
    source: [
      { label: "FinCEN Consent Order 2024-02 – TD Bank (Oct 2024)", url: "https://www.fincen.gov/system/files/enforcement_action/2024-10-10/FinCEN-TD-Bank-Consent-Order-508FINAL.pdf" },
      { label: "OCC news release 2024-116 – TD Bank cease and desist, penalty and asset cap", url: "https://www.occ.gov/news-issuances/news-releases/2024/nr-occ-2024-116.html" }
    ] },

  { id: "CASE-002", domain: 4, topic: "Case lessons: TD Bank (2024) - monitoring coverage", hy: true,
    q: "A bank decides to replace its transaction monitoring system. During the multi-year migration, management freezes the old system: \"paused\" scenarios stay dormant, no new scenarios are added, and staff note that check activity is largely unmonitored. FinCEN criticized TD Bank for exactly this pattern. What should the bank have done?",
    options: [
      "Accept temporary gaps because regulators expect coverage to be restored only once the new platform goes live",
      "Replace the paused scenarios with a higher-threshold cash rule so that alert volumes stay flat during the migration",
      "Keep assessing coverage against current risks and close known gaps with interim scenarios or manual controls during migration",
      "Rely on front-line referrals from branch staff to cover the unmonitored products until the new system is validated"
    ],
    answer: [2],
    explanation: "FinCEN found that TD Bank let paused scenarios stay dormant for years, added no new scenarios for about four years while it moved to a new system, and did not monitor key products such as checks and Zelle adequately. Monitoring coverage must keep matching current risks during a system change, so known gaps need interim scenarios or manual controls. Accepting the gaps, keeping alert volumes flat on purpose, or relying only on staff referrals leaves the gap open, which is the failure the consent order described.",
    source: [
      { label: "FinCEN Consent Order 2024-02 – TD Bank (Oct 2024)", url: "https://www.fincen.gov/system/files/enforcement_action/2024-10-10/FinCEN-TD-Bank-Consent-Order-508FINAL.pdf" }
    ] },

  { id: "CASE-003", domain: 1, topic: "Case lessons: TD Bank (2024) - insider risk and CTRs", hy: false,
    q: "From 2017 to 2021 a customer brought bags of cash into TD Bank branches, moved more than $400 million, and routinely gave gift cards to branch employees. He was not identified on more than 500 CTRs. Which lessons does this case illustrate? (Choose two.)",
    options: [
      "Cash deposits made by a third party into another person's account are prohibited under the Bank Secrecy Act",
      "A CTR must correctly identify the person who actually conducts the cash transaction, not only the account holder",
      "The bank should have exempted the customer from CTR filing because his cash activity was frequent and routine",
      "Gifts from a customer to branch staff are an insider-risk red flag that should be escalated to compliance",
      "The bank should have waited for a law enforcement inquiry before filing a SAR on a long-standing customer"
    ],
    answer: [1,3],
    explanation: "FinCEN reported that TD Bank failed to identify Da Ying Sze on more than 500 CTRs and that he routinely gave employees gift cards (at least $57,000 in 2020-2021); the consent order also criticized weak reporting of insider involvement. CTRs must record the person conducting the transaction, and gifts to staff are an insider-risk warning sign. Third-party cash deposits are not banned by the BSA; an individual's frequent cash activity does not qualify for a CTR exemption; and SARs do not wait for law enforcement contact.",
    source: [
      { label: "FinCEN press release (Oct 2024) – record $1.3B penalty against TD Bank", url: "https://www.fincen.gov/news/news-releases/fincen-assesses-record-13-billion-penalty-against-td-bank" },
      { label: "FinCEN Consent Order 2024-02 – TD Bank", url: "https://www.fincen.gov/system/files/enforcement_action/2024-10-10/FinCEN-TD-Bank-Consent-Order-508FINAL.pdf" }
    ] },

  { id: "CASE-004", domain: 2, topic: "Case lessons: Binance (2023) - MSB registration", hy: false,
    q: "A virtual currency exchange is incorporated offshore and has no US office, but a large share of its users and trading volume comes from the United States. Binance admitted in 2023 that it willfully operated as an unregistered money services business. Why do FinCEN's MSB rules reach such an exchange?",
    options: [
      "FinCEN rules cover any exchange whose parent company has issued securities to US investors",
      "An MSB is defined as a person wherever located doing business wholly or in substantial part within the United States",
      "Registration applies only when the exchange keeps an agent or branch office physically located in the United States",
      "The exchange becomes a US MSB only after a US state has issued it a money transmitter license"
    ],
    answer: [1],
    explanation: "Under 31 CFR 1010.100(ff), an MSB is \"a person wherever located doing business ... wholly or in substantial part within the United States\", so a foreign-located exchange that serves US customers must register (31 CFR 1022.380) and run a BSA program. Treasury said Binance admitted it willfully operated as an unregistered MSB while hiding its ties to the US. Having a physical US office is only one example of doing business in the US, not a requirement, and FinCEN registration applies whether or not the business holds a state license.",
    source: [
      { label: "eCFR 31 CFR 1010.100(ff) – definition of money services business", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-A/section-1010.100" },
      { label: "Treasury press release jy1925 (Nov 2023) – Binance settlements", url: "https://home.treasury.gov/news/press-releases/jy1925" }
    ] },

  { id: "CASE-005", domain: 4, topic: "Case lessons: Standard Chartered (OFAC 2019) - IP data", hy: false,
    q: "Standard Chartered's Dubai branch held accounts for trading companies that sent payment instructions by fax while located in Iran, and some online banking customers logged in from Iran, Sudan or Syria. An IT employee said Iranian IP addresses could be blocked, but earlier discussions had led to \"reporting only.\" What is the BEST lesson for a sanctions compliance program?",
    options: [
      "IP addresses change too often to be reliable, so screening should focus only on names and registered addresses",
      "IP logs are marketing data and fall outside what OFAC expects a bank to review in its sanctions controls",
      "Where the customer actually gives instructions from is a sanctions indicator, and IP data should drive blocking and investigation",
      "Location data matters only for US-person customers, so a non-US branch need not consider where its customers are"
    ],
    answer: [2],
    explanation: "OFAC's 2019 settlement found that SCB processed USD payments for customers who gave instructions while in Iran, and that the bank received warning signs about online banking access from sanctioned jurisdictions but did not fully act on them. Where the customer really is, shown by IP address, fax origin and similar data, is a key sanctions risk indicator, and IP data should feed blocking, alerts and investigation. The problem of changing IP addresses does not justify ignoring them, and OFAC exposure arose because the payments were processed through the United States, whatever the branch location.",
    source: [
      { label: "OFAC Settlement Agreement – Standard Chartered Bank (Apr 2019)", url: "https://ofac.treasury.gov/media/13921/download?inline=" },
      { label: "OFAC Enforcement Information for April 9, 2019", url: "https://ofac.treasury.gov/media/26286/download?inline=" }
    ] },

  { id: "CASE-006", domain: 3, topic: "Case lessons: Binance (2023) - management commitment", hy: false,
    q: "The founders of a fast-growing crypto exchange tell the new CCO that sanctions compliance can wait until the platform reaches scale, and that for now updated Terms of Use asking users to confirm they are not sanctioned will do. Based on OFAC's compliance considerations in its 2023 Binance settlement, what is the BEST response?",
    options: [
      "Agree, provided the Terms of Use require users to certify their country of residence during onboarding",
      "Agree, but ask the board to approve a written sanctions policy that can be adopted once revenue allows",
      "Disagree, because OFAC requires every exchange to screen transactions against every national sanctions list",
      "Disagree, because management commitment must start on Day One and be backed by resources adequate to the risks"
    ],
    answer: [3],
    explanation: "OFAC said that management commitment is the first pillar of an effective risk-based program, that it should begin on \"Day One\" even while a company is still building its technology, and that it must be backed by adequate resources and an empowered compliance function. Binance's Terms of Use and paper policies gave the appearance of compliance while senior management knowingly allowed sanctioned-jurisdiction users. A user's self-certification or a policy that is never implemented does not manage the risk. OFAC does not require screening against every country's lists.",
    source: [
      { label: "OFAC Enforcement Release (Nov 21, 2023) – Binance Holdings", url: "https://ofac.treasury.gov/system/files/2023-11/20231121_binance.pdf" }
    ] },

  { id: "CASE-007", domain: 4, topic: "Case lessons: NatWest (2021) - monitoring and escalation", hy: false,
    q: "In 2021 NatWest was convicted of failing to comply with the Money Laundering Regulations in relation to a jeweller customer, Fowler Oldfield, that deposited about £264 million in cash. Which control failures did the FCA identify? (Choose two.)",
    options: [
      "The bank filed SARs on the customer but did not request a defence against money laundering first",
      "The bank failed to register the jeweller with HMRC as a high value dealer before accepting cash",
      "The automated monitoring system recorded some cash deposits as cheque deposits, which carry lower risk",
      "The bank relied on the jeweller's audited accounts rather than obtaining a certified trade licence",
      "Branch staff reported red flags such as musty-smelling notes, but no appropriate action was ever taken"
    ],
    answer: [2,4],
    explanation: "The FCA reported that NatWest's monitoring system wrongly treated some cash deposits as cheques, a serious gap, and that red flags reported by staff (Scottish notes deposited across England, musty-smelling notes, couriers acting suspiciously) were never properly acted on. The customer had said at onboarding that it would not handle cash. Registering high value dealers is the dealer's own duty with HMRC, not the bank's, and the case was not about DAML requests or trade licences. It was the first criminal prosecution the FCA brought for money laundering control failings.",
    source: [
      { label: "FCA press release (Dec 2021) – NatWest fined £264.8m", url: "https://www.fca.org.uk/news/press-releases/natwest-fined-264.8million-anti-money-laundering-failures" }
    ] },

  { id: "CASE-008", domain: 2, topic: "Case lessons: Danske Bank (2022) - legal theory", hy: true,
    q: "Danske Bank's Estonian branch served a high-risk non-resident portfolio that moved about $160 billion through US correspondent banks. Danske Bank is not a US bank. What did it plead guilty to in the United States in December 2022?",
    options: [
      "Conspiracy to commit bank fraud, by misrepresenting its Estonian AML controls and customers to US correspondent banks",
      "Willfully failing to maintain a BSA anti-money laundering program as a US-chartered depository institution",
      "Violating a Section 311 special measure that FinCEN had earlier imposed on its Estonian branch",
      "Knowingly processing transactions for SDNs in violation of the International Emergency Economic Powers Act"
    ],
    answer: [0],
    explanation: "Danske Bank pleaded guilty to conspiracy to commit bank fraud. It had misrepresented the state of Danske Bank Estonia's AML program, its transaction monitoring and its customers' risk to US banks, which relied on that information to open and keep the USD accounts. As a foreign bank, Danske was not subject to the BSA program requirement for US banks. No Section 311 action had targeted the branch, and the case was not an IEEPA prosecution. The lesson is that false AML representations to correspondent banks can be prosecuted as fraud.",
    source: [
      { label: "DOJ (SDNY) Information – United States v. Danske Bank A/S (Dec 2022)", url: "https://www.justice.gov/d9/press-releases/attachments/2022/12/13/danske_information_508_compliant_0.pdf" },
      { label: "DOJ press release (Dec 2022) – Danske Bank pleads guilty to fraud on US banks", url: "https://www.justice.gov/archives/opa/pr/danske-bank-pleads-guilty-fraud-us-banks-multi-billion-dollar-scheme-access-us-financial" }
    ] },

  { id: "CASE-009", domain: 3, topic: "Case lessons: Danske Bank (2022) - correspondent oversight", hy: false,
    q: "A US correspondent bank sees that a respondent's non-resident customers use shell companies and financial intermediaries, and that the respondent seems to restructure payments so they avoid the correspondent's monitoring. The respondent replies that it has automated monitoring, client visits and a ban on third-party agents. In the Danske case, such assurances proved false. What should the correspondent do NEXT?",
    options: [
      "Accept the written assurances because respondents are responsible for their own customers under FATF R.13",
      "Test the assurances against its own transaction data and RFIs, escalate, and restrict or exit if they are not borne out",
      "Ask the respondent to complete a new Wolfsberg CBDDQ and close the review once it is signed by the respondent's MLRO",
      "Continue the relationship but raise the monitoring thresholds for the respondent to reduce false-positive alerts"
    ],
    answer: [1],
    explanation: "DOJ's charging document states that one US bank warned Danske Bank Estonia against restructuring client activity to avoid its monitoring and noted the portfolio's lack of transparency, and that the respondent's assurances about monitoring, client visits and a ban on agents were false. Correspondent due diligence must test a respondent's claims against actual activity, through transaction analysis and requests for information, and act on the result. A signed questionnaire or written assurance is a starting point, not proof. Raising thresholds does the opposite of what the risk requires.",
    source: [
      { label: "DOJ (SDNY) Information – United States v. Danske Bank A/S (Dec 2022)", url: "https://www.justice.gov/d9/press-releases/attachments/2022/12/13/danske_information_508_compliant_0.pdf" }
    ] },

  { id: "CASE-010", domain: 3, topic: "Case lessons: Danske Bank - group-wide oversight", hy: false,
    q: "After acquiring a Baltic bank, a banking group cancels a plan to move the new branch onto the group IT platform, so head office cannot directly monitor the branch's customers or transactions. This is what happened at Danske Bank Estonia. Which FATF standard does this MOST directly undermine?",
    options: [
      "R.10's requirement to identify and verify customers before or during the establishment of a business relationship",
      "R.13's requirement to obtain senior management approval before opening new correspondent relationships",
      "R.18's requirement for group-wide AML/CFT programs that include sharing information within the group",
      "R.20's requirement to report suspicious transactions promptly to the financial intelligence unit"
    ],
    answer: [2],
    explanation: "FATF R.18 requires financial groups to run group-wide AML/CFT programs, including information sharing within the group, and to make sure foreign branches apply consistent measures. DOJ's charging document states that Danske recognized the AML risk of leaving the Baltic branches off the group IT platform, cancelled the migration anyway, and so lost direct oversight of the Estonian branch's customers and transactions. The other Recommendations matter, but the core failure was group oversight, not customer identification, correspondent approval or STR filing.",
    source: [
      { label: "FATF Recommendations (2012-2026), R.18 – official copy hosted by EAG", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
      { label: "DOJ (SDNY) Information – United States v. Danske Bank A/S (Dec 2022)", url: "https://www.justice.gov/d9/press-releases/attachments/2022/12/13/danske_information_508_compliant_0.pdf" }
    ] },

  { id: "CASE-011", domain: 3, topic: "Case lessons: HSBC (2012) - country risk rating", hy: true,
    q: "Between 2006 and 2009, HSBC Bank USA gave Mexico its lowest country risk rating (\"standard\"), so more than $670 billion in wire transfers from HSBC Mexico went unmonitored. Which control weakness does this case MOST clearly illustrate?",
    options: [
      "Relying on the Mexican regulator's supervision of HSBC Mexico instead of screening wires against the SDN List",
      "Failing to file CTRs on physical US dollar banknote purchases from the Mexican affiliate",
      "Using a customer risk rating model that had not been approved by the board of directors",
      "A geographic risk rating that ignored known risk, which then switched off monitoring of a high-risk flow"
    ],
    answer: [3],
    explanation: "DOJ stated that despite evidence of serious money laundering risk in Mexico, HSBC Bank USA rated Mexico \"standard\", its lowest AML risk category. As a result it failed to monitor over $670 billion in wires and over $9.4 billion in banknote purchases from HSBC Mexico, and at least $881 million in drug proceeds was laundered. The lesson is that risk ratings drive the monitoring that follows, so a wrong rating turns off controls. Sanctions screening, CTR filing on interbank banknote trades and board approval of the model were not the central failures.",
    source: [
      { label: "DOJ (EDNY) press release (Dec 11, 2012) – HSBC deferred prosecution agreement", url: "https://www.justice.gov/archive/usao/nye/pr/2012/2012dec11.html" }
    ] },

  { id: "CASE-012", domain: 2, topic: "Case lessons: HSBC (2012) - due diligence on affiliates", hy: false,
    q: "A US bank maintains correspondent accounts for foreign banks in its own corporate group. It exempts them from its correspondent due diligence program because they are \"family.\" One of the four counts HSBC was charged with in 2012 addresses this practice. What is the correct position?",
    options: [
      "Correspondent accounts for foreign affiliates are subject to Section 312 due diligence, and HSBC was charged with willfully failing to perform it",
      "Accounts for affiliates are exempt if the parent company certifies that the whole group follows one AML policy",
      "Affiliated foreign banks need due diligence only if they are located in a country the FATF has named on a public list",
      "The due diligence obligation applies only to payable-through accounts, not to ordinary correspondent accounts for affiliates"
    ],
    answer: [0],
    explanation: "HSBC's 2012 criminal information included a count for willfully failing to conduct due diligence on its foreign correspondent affiliates. HSBC Bank USA failed to adequately monitor activity from HSBC Group affiliates such as HSBC Mexico, and HSBC Group did not tell it about serious AML deficiencies at HSBC Mexico. Section 312 (31 CFR 1010.610) does not exempt affiliates, a group certification is no substitute for risk-based due diligence, and the duty is not limited to FATF-listed countries or payable-through accounts.",
    source: [
      { label: "DOJ (EDNY) press release (Dec 11, 2012) – HSBC deferred prosecution agreement", url: "https://www.justice.gov/archive/usao/nye/pr/2012/2012dec11.html" }
    ] },

  { id: "CASE-013", domain: 1, topic: "Case lessons: HSBC (2012) - wire stripping", hy: true,
    q: "HSBC Group affiliates processed US dollar payments for sanctioned parties in Iran, Cuba, Sudan, Libya and Burma. Which techniques did HSBC admit were used to keep these payments from being stopped by US banks' filters? (Choose two.)",
    options: [
      "Removing sanctioned names and countries from USD payment messages sent to the United States",
      "Structuring the payments into amounts below the US currency transaction reporting threshold",
      "Converting the payments into prepaid cards loaded in the names of third-party nominees",
      "Deliberately using less-transparent cover payments that do not show the underlying parties",
      "Routing the funds through casinos to create gambling winnings as a cover for their origin"
    ],
    answer: [0,3],
    explanation: "DOJ stated that HSBC Group, following instructions from sanctioned entities, left their names off USD payment messages, removed country references, deliberately used less-transparent cover payments, and added notes such as \"do not mention our name in NY\", all of which kept US filters from blocking the payments. This is called wire stripping. Structuring, prepaid cards and casinos are laundering typologies but were not the methods in this case. Payment transparency standards such as FATF R.16, which require full originator and beneficiary information, are meant to prevent this.",
    source: [
      { label: "DOJ (EDNY) press release (Dec 11, 2012) – HSBC deferred prosecution agreement", url: "https://www.justice.gov/archive/usao/nye/pr/2012/2012dec11.html" }
    ] },

  { id: "CASE-014", domain: 1, topic: "Case lessons: BNP Paribas (2014) - satellite banks", hy: false,
    q: "A compliance officer at a European bank's Geneva unit notices that nine Arab banks among its clients do almost nothing except clear US dollar transactions for Sudanese banks. BNP Paribas's 2014 guilty plea described this arrangement. What is it, and what risk does it create?",
    options: [
      "A nested correspondent structure that is permitted as long as the respondent banks screen their own customers",
      "A satellite bank system that disguises sanctioned parties' role in USD payments and so evades US sanctions",
      "A legitimate liquidity arrangement, since clearing for regional banks is ordinary correspondent business",
      "A payable-through arrangement that creates CTR obligations for the European bank but no sanctions exposure"
    ],
    answer: [1],
    explanation: "DOJ described BNP Paribas's \"satellite banks\", set up to disguise both BNPP's and the Sudanese sanctioned entities' roles in USD payments cleared through the United States. A senior compliance officer warned in 2005 that the practice was \"circumventing the US embargo.\" BNPP pleaded guilty to conspiring to violate IEEPA and TWEA. Intermediary banks used to hide sanctioned counterparties are a sanctions evasion method, not an allowed form of nesting or normal clearing, and the issue was sanctions, not CTRs.",
    source: [
      { label: "DOJ (SDNY) press release (Jun 30, 2014) – BNP Paribas agrees to plead guilty", url: "https://www.justice.gov/archive/usao/nys/pressreleases/June14/BNPParibasPlea.php" }
    ] },

  { id: "CASE-015", domain: 1, topic: "Case lessons: Wachovia (2010) - casas de cambio", hy: true,
    q: "From 2004 to 2007 a US bank provided wire, bulk cash, pouch and remote deposit capture services to Mexican casas de cambio (CDCs), even though it knew other US banks had stopped serving them because of drug money laundering risk. What was the CORE failure in the Wachovia case?",
    options: [
      "It kept expanding high-risk foreign MSB relationships without effective monitoring of each service channel used",
      "It did not register the casas de cambio with FinCEN as money services businesses on their behalf",
      "It failed to report the casas de cambio to the Mexican FIU before accepting their bulk cash shipments",
      "It accepted traveler's checks, which US regulations prohibit correspondent banks from taking from abroad"
    ],
    answer: [0],
    explanation: "DOJ stated that Wachovia knew of the high risk that drug money was moving through the CDCs and knew other banks had exited them, yet it expanded the business without an effective program to monitor the wires, bulk cash and RDC deposits. Billions moved through, some of it used to buy aircraft for drug trafficking. Wachovia had no duty to register its customers with FinCEN or to report them to Mexico's FIU, and taking traveler's checks is not prohibited. Every channel of a high-risk relationship must be monitored.",
    source: [
      { label: "DOJ (SDFL) press release (Mar 17, 2010) – Wachovia deferred prosecution agreement", url: "https://www.justice.gov/archive/usao/fls/PressReleases/2010/100317-02.html" }
    ] },

  { id: "CASE-016", domain: 3, topic: "Case lessons: Santander UK (2022) - expected activity and exits", hy: false,
    q: "A business customer opened an account as a small translation firm expecting deposits of about £5,000 a month. Within six months it was receiving millions and moving them on quickly. The bank's AML team recommended closure, but the account stayed open for another 18 months. Which lessons from the FCA's 2022 Santander UK case apply? (Choose two.)",
    options: [
      "Wait for a law enforcement request before closing an account that the AML team has flagged",
      "Compare actual account activity with the turnover the customer declared at onboarding",
      "Rely on the business's declared turnover because verifying it would be disproportionate",
      "Transfer high-risk business accounts to the retail segment so that monitoring is simpler",
      "Have a governed process that carries out exit decisions promptly once they are made"
    ],
    answer: [1,4],
    explanation: "The FCA found that Santander did not properly verify what business customers said they would do, or monitor declared against actual activity, and that poor processes delayed closing the translation-firm account from March 2014 to September 2015. More than £298 million passed through before the accounts were closed. Waiting for law enforcement, accepting declared turnover without checking it, and moving accounts to a simpler segment are weaknesses, not controls.",
    source: [
      { label: "FCA press release (Dec 2022) – Santander UK fined £107.7m", url: "https://www.fca.org.uk/news/press-releases/fca-fines-santander-uk-repeated-anti-money-laundering-failures" }
    ] },

  { id: "CASE-017", domain: 3, topic: "Case lessons: Riggs Bank (2004) - PEP relationships", hy: false,
    q: "A bank's largest deposit relationship is with a foreign government, its PEPs and their companies. One relationship manager runs it with little supervision, and later moves over $1 million from government accounts into his own company. Riggs Bank was penalized in 2004 for this pattern. Which control would MOST directly have addressed the weakness?",
    options: [
      "Adding a clause to the account agreement stating that embassy accounts cannot be used for personal expenses",
      "Asking the foreign government's embassy to certify its accounts annually instead of reviewing the transactions",
      "Independent compliance oversight and monitoring of the relationship, not reliance on the relationship manager",
      "Moving the relationship to the private banking unit so that the relationship manager has greater discretion"
    ],
    answer: [2],
    explanation: "FinCEN's 2004 assessment found that Riggs lacked staff and procedures to monitor this relationship and did not oversee the relationship manager, who had little or no supervision. Suspicious activity went unreported: large cash withdrawals, sequentially numbered drafts, and wires into a company he owned. High-risk PEP relationships need independent compliance monitoring and oversight. Contract clauses, customer certifications and more discretion for the relationship manager do nothing about the conflict of interest.",
    source: [
      { label: "FinCEN Assessment of Civil Money Penalty – Riggs Bank N.A. (May 2004)", url: "https://www.fincen.gov/sites/default/files/shared/riggsassessment3.pdf" }
    ] },

  { id: "CASE-018", domain: 2, topic: "Case lessons: Westpac (AUSTRAC 2020) - payment transparency", hy: false,
    q: "Besides failing to report more than 19.5 million international funds transfer instructions, Westpac admitted that it did not pass on information about the origin of funds to other banks in the transfer chain. Why does this failure matter?",
    options: [
      "It prevents the ordering customer from tracking the payment and seeking a refund if it is misdirected",
      "It breaches data protection law, which requires originator data to go with every cross-border payment",
      "It means the sending bank loses the right to charge correspondent fees on the transfer",
      "Intermediary and beneficiary banks need that originator information to manage their own ML/TF risks"
    ],
    answer: [3],
    explanation: "AUSTRAC said that Westpac's failure to pass on information about the source of funds deprived other banks in the transfer chain of information they needed to manage their own AML/CTF risks. This is the purpose of payment transparency rules such as FATF R.16: originator information must travel with the transfer so that downstream institutions can screen and monitor it. The rules are not about customer refunds, fee rights or data protection law.",
    source: [
      { label: "AUSTRAC media release (Sep 2020) – AUSTRAC and Westpac agree $1.3bn penalty", url: "https://www.austrac.gov.au/news-and-media/media-release/austrac-and-westpac-agree-penalty" }
    ] },

  { id: "CASE-019", domain: 1, topic: "Case lessons: Westpac (AUSTRAC 2020) - child exploitation", hy: false,
    q: "AUSTRAC found that Westpac did not carry out appropriate due diligence or monitoring on customers whose transfers matched known financial indicators of child sexual exploitation. Which pattern was central to that finding?",
    options: [
      "Frequent low-value transfers to the Philippines and South East Asia by customers with no apparent reason for them",
      "Large single wire transfers to offshore trusts in the Caribbean funded from the sale of real estate",
      "Structured cash deposits just under the Australian threshold transaction reporting limit",
      "Trade finance payments for over-invoiced goods shipped to free trade zones in the Middle East"
    ],
    answer: [0],
    explanation: "AUSTRAC said Westpac did not carry out appropriate due diligence on transactions to the Philippines and South East Asia that matched known financial indicators of child exploitation, and did not monitor for them adequately. This typology usually involves frequent small payments, so it rarely trips value thresholds and needs dedicated scenarios. The other patterns are real laundering typologies, but they are not the child exploitation risk at the center of the Westpac case.",
    source: [
      { label: "AUSTRAC media release (Sep 2020) – AUSTRAC and Westpac agree $1.3bn penalty", url: "https://www.austrac.gov.au/news-and-media/media-release/austrac-and-westpac-agree-penalty" }
    ] },

  { id: "CASE-020", domain: 3, topic: "Case lessons: Commonwealth Bank (AUSTRAC 2018) - new technology", hy: true,
    q: "A bank rolls out intelligent deposit machines that accept large cash deposits around the clock. No ML/TF risk assessment is done until three years later, and a coding error means most threshold cash reports from the machines are filed late. In the CBA case, which requirement was MOST fundamentally breached at the start?",
    options: [
      "Filing suspicious matter reports within the deadline once the bank forms a suspicion",
      "Assessing the ML/TF risk of a new delivery channel before it is launched",
      "Obtaining senior management approval before opening accounts for politically exposed persons",
      "Screening cash depositors against the consolidated sanctions list at the time of each deposit"
    ],
    answer: [1],
    explanation: "AUSTRAC found that CBA did no ML/TF risk assessment of its IDMs before the 2012 rollout and none until mid-2015. It also filed 53,506 threshold transaction reports late, about 95% of the IDMs' threshold transactions. FATF R.15 requires financial institutions to assess the risks of new products, delivery mechanisms and technologies before launch. The risk assessment was the first control to fail. PEP approval and sanctions screening at deposit were not the core issue.",
    source: [
      { label: "AUSTRAC media release (Jun 2018) – AUSTRAC and CBA agree $700m penalty", url: "https://www.austrac.gov.au/news-and-media/media-release/austrac-and-cba-agree-700m-penalty" },
      { label: "FATF Recommendations (2012-2026), R.15 – official copy hosted by EAG", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ] },

  { id: "CASE-021", domain: 3, topic: "Case lessons: Goldman Sachs / 1MDB (2020)", hy: false,
    q: "An investment bank's control functions have repeatedly refused to onboard a private individual because his source of wealth cannot be explained. He is known to have close ties to senior officials of a foreign state-owned fund. The bank is now arranging multi-billion-dollar bond deals for that fund, and there are signs he is involved. What does the 1MDB case show the control functions should do?",
    options: [
      "Treat the earlier onboarding rejection as irrelevant because the client for the deal is the state fund, not him",
      "Accept the deal team's written statement that he is not involved and record it in the approval file",
      "Approve the deals but ask internal audit to review them after closing, since the fund is government-owned",
      "Treat his possible involvement as a major bribery red flag and take reasonable steps to confirm he is not involved"
    ],
    answer: [3],
    explanation: "In the 1MDB resolutions, DOJ stated that Jho Low had been rejected several times by Goldman's control functions, and that staff in those functions knew any deal involving him was high risk and were on notice he was involved, yet did not take reasonable steps to exclude him. The Federal Reserve found that Goldman's approval processes failed to address obvious red flags. A rejected client with official connections who turns up as an undisclosed intermediary is a key corruption warning sign, and the deal team's assurance, which later proved false, was not enough.",
    source: [
      { label: "Federal Reserve press release (Oct 22, 2020) – Goldman Sachs 1MDB penalty", url: "https://www.federalreserve.gov/newsevents/pressreleases/enforcement20201022a.htm" },
      { label: "DOJ (EDNY) press release (Oct 2020) – Goldman Sachs resolves foreign bribery case", url: "https://www.justice.gov/usao-edny/pr/goldman-sachs-resolves-foreign-bribery-case-and-agrees-pay-over-29-billion" }
    ] },

  { id: "CASE-022", domain: 2, topic: "Case lessons: 1MDB - kleptocracy asset recovery", hy: false,
    q: "From July 2016, the US Department of Justice filed civil forfeiture complaints seeking more than $1 billion in US assets bought with funds misappropriated from Malaysia's 1MDB, including luxury real estate and film rights. Which statement BEST describes this tool?",
    options: [
      "It is an in personam criminal penalty that can be imposed only after the owners of the assets are convicted",
      "It is an administrative freeze by OFAC that blocks the assets of persons named on the SDN List",
      "It is a non-conviction-based action against the assets themselves, pursued under DOJ's Kleptocracy Asset Recovery Initiative",
      "It is a tax lien filed by the IRS to collect unpaid US taxes on income earned from the misappropriated funds"
    ],
    answer: [2],
    explanation: "DOJ brought the 1MDB cases as civil forfeiture complaints under its Kleptocracy Asset Recovery Initiative. At the time they were the largest action under the initiative and the largest civil forfeiture action in DOJ history. Civil forfeiture is an in rem action against property traceable to crime, so it does not need a criminal conviction of the owner. This allows recovery when the kleptocrats are abroad or out of reach, and the revised FATF R.4 requires countries to have measures for non-conviction-based confiscation. It is not an OFAC blocking action or a tax lien.",
    source: [
      { label: "DOJ press release – US seeks to recover more than $1 billion (1MDB)", url: "https://justice.gov/opa/pr/united-states-seeks-recover-more-1-billion-obtained-corruption-involving-malaysian-sovereign" }
    ] },

  { id: "CASE-023", domain: 2, topic: "Case lessons: Ericsson (2019 DPA, 2023 plea)", hy: false,
    q: "In 2019 Ericsson entered a deferred prosecution agreement (DPA) to resolve FCPA charges involving bribery and books-and-records violations in several countries. In 2023 DOJ found that Ericsson had breached the DPA by failing to disclose evidence about the schemes and allegations about its business in Iraq. What was the consequence?",
    options: [
      "Ericsson pleaded guilty to the previously deferred FCPA charges and paid an additional criminal penalty",
      "DOJ converted the DPA into a non-prosecution agreement with a longer term and a new compliance monitor",
      "The charges were dismissed because the breach concerned cooperation rather than new acts of bribery",
      "The SEC took over the case because a breach of a DPA must be pursued as a civil matter"
    ],
    answer: [0],
    explanation: "Under a DPA, DOJ files charges but defers prosecution while the company meets its obligations, including full cooperation and disclosure. Because Ericsson did not truthfully disclose all information about the Djibouti and China schemes and did not promptly report evidence about Iraq, it pleaded guilty in March 2023 to the deferred charges and paid over $206 million more. Breaching cooperation terms is itself a breach of the DPA and exposes the company to prosecution. It does not lead to dismissal, a more lenient agreement or civil handling.",
    source: [
      { label: "DOJ Plea Agreement Attachment A-1 – Factual basis for breach of Ericsson DPA (Mar 2023)", url: "https://justice.gov/criminal-fraud/file/1576986/download" },
      { label: "DOJ press release (Mar 2023) – Ericsson to plead guilty following breach of 2019 FCPA DPA", url: "https://www.justice.gov/archives/opa/pr/ericsson-plead-guilty-and-pay-over-206m-following-breach-2019-fcpa-deferred-prosecution" }
    ] },

  { id: "CASE-024", domain: 2, topic: "Case lessons: Glencore (SFO 2022) - failure to prevent bribery", hy: false,
    q: "Glencore Energy (UK) Ltd pleaded guilty in 2022 to seven Bribery Act counts over bribes paid by its employees and agents to obtain oil in several African countries. Two counts were under section 7. For a section 7 offence, what must the prosecution prove, and what defence is available?",
    options: [
      "That a director personally authorised the bribe; the defence is that the payment was a lawful facilitation payment",
      "That an associated person bribed another intending to obtain or retain business or an advantage for the company; the defence is adequate procedures",
      "That the company kept false books and records; the defence is that its external auditor approved the accounts",
      "That a foreign public official received the bribe; the defence is that the payment was lawful under local custom"
    ],
    answer: [1],
    explanation: "Section 7 of the Bribery Act 2010 makes a commercial organisation guilty if a person associated with it, such as an agent, bribes another intending to obtain or retain business or a business advantage for it. The only defence is proving that it had adequate procedures to prevent such conduct. No senior-level authorisation is needed, which is what separates section 7 from the section 1 counts Glencore also admitted. The Act has no facilitation payment or local custom exception, and false books and records is an FCPA concept.",
    source: [
      { label: "Bribery Act 2010, section 7 (legislation.gov.uk)", url: "https://www.legislation.gov.uk/ukpga/2010/23/section/7" },
      { label: "SFO case page – Glencore group of companies (GOV.UK)", url: "https://www.gov.uk/sfo-cases/glencore-group-of-companies" }
    ] },

  { id: "CASE-025", domain: 1, topic: "Case lessons: ABLV Bank (FinCEN 311, 2018)", hy: false,
    q: "In 2018 FinCEN proposed a Section 311 special measure against ABLV Bank of Latvia. Which finding BEST describes why ABLV was treated as a primary money laundering concern?",
    options: [
      "It had processed a small number of payments for a sanctioned party because of a screening software defect",
      "It had filed too few STRs with the Latvian FIU compared with other banks of a similar size",
      "It relied on correspondent banks in the United States to perform due diligence on its customers",
      "Its management made money laundering a pillar of its business, soliciting high-risk shell company accounts it did not control"
    ],
    answer: [3],
    explanation: "FinCEN found that ABLV had \"institutionalized money laundering as a pillar of the bank's business practices\". It solicited high-risk shell company activity, kept inadequate controls over those accounts, helped orchestrate laundering schemes, sought to obstruct Latvian AML enforcement, and processed activity linked to North Korean procurement networks and corrupt PEPs. Section 311 targets institutions whose whole business model poses the concern. A one-off screening defect, a low STR count or reliance on correspondents does not describe that.",
    source: [
      { label: "FinCEN press release (Feb 13, 2018) – ABLV Bank named primary money laundering concern", url: "https://www.fincen.gov/news/news-releases/fincen-names-ablv-bank-latvia-institution-primary-money-laundering-concern-and" }
    ] },

  { id: "CASE-026", domain: 1, topic: "Case lessons: Liberty Reserve (2013)", hy: true,
    q: "In 2013 Treasury used Section 311 for the first time against a virtual currency provider, Liberty Reserve. Which features made its system attractive to criminals? (Choose two.)",
    options: [
      "All transfers were recorded on a public blockchain that anyone could view without identifying the parties",
      "It required a government-issued ID but allowed users to open accounts in any currency they chose",
      "It did not verify account registration, asking only for a working email address, and allowed unlimited accounts",
      "Users funded and cashed out through independent third-party exchangers rather than directly with Liberty Reserve",
      "It operated only through licensed US banks, which gave its transfers the appearance of legitimacy"
    ],
    answer: [2,3],
    explanation: "Treasury said Liberty Reserve verified nothing at registration beyond a working email address, allowed unlimited accounts, and offered a \"privacy fee\" to hide account numbers. Users moved money in and out through independent exchangers, so Liberty Reserve itself avoided bank transfers. It was a centralized system with internal accounts, not a public blockchain. It did not require ID and did not operate through US banks. Anonymous accounts combined with arm's-length exchangers remain a core red flag for virtual value transfer services.",
    source: [
      { label: "Treasury press release jl1956 (May 2013) – Liberty Reserve Section 311 action", url: "https://home.treasury.gov/news/press-releases/jl1956" }
    ] },

  { id: "CASE-027", domain: 2, topic: "Case lessons: Bitzlato (FinCEN 9714, 2023)", hy: true,
    q: "In January 2023 FinCEN identified the virtual currency exchange Bitzlato as a primary money laundering concern in connection with Russian illicit finance. It had served Russia-linked ransomware groups and the Hydra darknet market. What was notable about the legal authority FinCEN used, and what did the order require?",
    options: [
      "It was the first order under Section 9714 of the Combating Russian Money Laundering Act, and it barred covered institutions from transmitting funds to or from Bitzlato",
      "It was an OFAC designation under a Russia-related executive order that required US persons to block Bitzlato's property and report it",
      "It was a geographic targeting order that required money transmitters in certain ZIP codes to report transfers to Bitzlato",
      "It was a Section 314(a) request that required banks to search their records and report any accounts that belonged to Bitzlato"
    ],
    answer: [0],
    explanation: "FinCEN's Bitzlato order was the first issued under Section 9714(a) of the Combating Russian Money Laundering Act, as amended. That section lets FinCEN use Section 311-style special measures for Russian illicit finance. From 1 February 2023 it barred covered financial institutions from transmitting funds to or from Bitzlato or any account or CVC address it administered. It was not an OFAC blocking action, a geographic targeting order or a 314(a) request.",
    source: [
      { label: "FinCEN press release (Jan 18, 2023) – Bitzlato identified as primary money laundering concern", url: "https://www.fincen.gov/news/news-releases/fincen-identifies-virtual-currency-exchange-bitzlato-primary-money-laundering" }
    ] },

  { id: "CASE-028", domain: 4, topic: "Case lessons: Tornado Cash - delisting and residual risk", hy: false,
    changed: "OFAC delisted Tornado Cash (Mar 2025); founder Roman Storm convicted on unlicensed money transmitting count (Aug 2025)",
    q: "A VASP's blockchain analytics shows a customer deposit came directly from Tornado Cash smart contracts. A product manager says there is no longer any risk because OFAC removed Tornado Cash from the SDN List in March 2025. What is the BEST response from the compliance officer?",
    options: [
      "Agree, and add a rule so that future Tornado Cash exposure is automatically excluded from alert scoring",
      "Agree, but keep screening because OFAC's delisting is only temporary while the Van Loon appeal is pending",
      "Disagree, because the delisting did not apply to non-US exchanges, which must still block Tornado Cash funds",
      "Disagree: the deposit is no longer a sanctions hit, but mixer exposure is still ML risk and needs risk-based review"
    ],
    answer: [3],
    explanation: "After the Fifth Circuit ruled in Van Loon (Nov 2024) that OFAC could not designate immutable smart contracts, Treasury removed the Tornado Cash sanctions in March 2025. It still urged caution about transactions that could benefit DPRK cyber actors. In August 2025 Tornado Cash co-founder Roman Storm was convicted of conspiring to operate an unlicensed money transmitting business that moved more than $1 billion in criminal proceeds, including Lazarus Group proceeds. A mixer's anonymizing function is still a money laundering red flag, so the exposure should feed risk-based review. The delisting was not temporary or limited, and it did not create a rule for non-US exchanges.",
    source: [
      { label: "Treasury press release sb0057 (Mar 21, 2025) – Tornado Cash delisting", url: "https://home.treasury.gov/news/press-releases/sb0057" },
      { label: "DOJ (SDNY) press release (Aug 2025) – Tornado Cash founder convicted", url: "https://www.justice.gov/usao-sdny/pr/founder-tornado-cash-crypto-mixing-service-convicted-knowingly-transmitting-criminal" }
    ] },

  { id: "CASE-029", domain: 4, topic: "Case lessons: Capital One (FinCEN 2021) - MSB customers", hy: false,
    q: "A bank's check casher customers are monitored mainly for suspicious activity by the check cashers' own customers. The bank learns that one check casher and its owner have been indicted over the business, but it files no SAR on the check casher and keeps processing its transactions. Capital One was penalized in 2021 for this. What was the key investigative failure?",
    options: [
      "Filing SARs on the check cashers' customers, which is outside the scope of the bank's own reporting obligations",
      "Not treating the MSB customer itself as a potential subject, even after learning of indictments linked to its accounts",
      "Not registering the check cashers with FinCEN as agents of the bank before opening their accounts",
      "Not asking the check cashers' customers for identification before they cashed checks at the MSB"
    ],
    answer: [1],
    explanation: "FinCEN found that Capital One's Check Cashing Group reported suspicious activity by check cashers' customers but failed to detect and report activity by the check cashers themselves. It did not file SARs even when it knew of indictments and guilty pleas tied to operations run through the bank, such as the Pucillo and Goldberg check cashers. The MSB account holder is the bank's customer and can itself be a SAR subject. Reporting on the MSB's customers is not wrong, and MSBs register themselves and identify their own customers.",
    source: [
      { label: "FinCEN Assessment of Civil Money Penalty – Capital One, N.A. (Jan 2021)", url: "https://www.fincen.gov/system/files/enforcement_action/2021-01-15/Assessment_CONA%20508_0.pdf" }
    ] },

  { id: "CASE-030", domain: 3, topic: "Case lessons: USAA FSB (FinCEN 2022) - growth and remediation", hy: false,
    q: "A bank's customer base and revenue grow quickly. Its regulator has already cited AML deficiencies, but alerts go unreviewed for months, SARs are late, and remediation deadlines keep slipping. According to FinCEN's 2022 action against USAA FSB, what message does this pattern send?",
    options: [
      "Fast-growing banks are given a grace period before regulators expect their AML programs to match their size",
      "Deficiencies cited by an examiner become penalties only if the bank's own internal audit function confirms them",
      "Growth and compliance must go together, and deficiencies raised by regulators must be fixed promptly and effectively",
      "Late SAR filings are procedural and do not by themselves support a finding of willful BSA violations"
    ],
    answer: [2],
    explanation: "FinCEN's Acting Director said USAA FSB's compliance program did not keep pace as its customer base and revenue grew, that the bank had ample notice and opportunity to remediate but repeatedly failed to, and that \"growth and compliance must be paired\". USAA admitted willfully failing to maintain an adequate AML program and to report thousands of suspicious transactions on time. There is no grace period for growth, examiner findings do not need internal audit to confirm them, and systemic late filing supported the willfulness finding.",
    source: [
      { label: "FinCEN press release (Mar 17, 2022) – $140 million penalty against USAA FSB", url: "https://www.fincen.gov/news/news-releases/fincen-announces-140-million-civil-money-penalty-against-usaa-federal-savings" }
    ] },

  { id: "CASE-031", domain: 4, topic: "Case lessons: Coinbase (NYDFS 2023) - alert backlog", hy: false,
    q: "A crypto platform's transaction monitoring alerts outgrow its investigators, leaving a backlog of more than 100,000 unreviewed alerts, some several months old. According to NYDFS's 2023 consent order with Coinbase, what was the MOST serious regulatory consequence of this backlog?",
    options: [
      "Its transaction monitoring model automatically became invalid under state model risk rules",
      "The platform lost its virtual currency license immediately under the state's regulations",
      "Suspicious activity was not investigated and reported on time, and SARs were filed months late",
      "Customers whose transactions had alerted were entitled to compensation for delayed withdrawals"
    ],
    answer: [2],
    explanation: "NYDFS found that Coinbase could not keep pace with its alerts. By late 2021 more than 100,000 alerts were unreviewed, and as they sat for months Coinbase routinely failed to investigate and report suspicious activity on time, with many SARs filed months late. NYDFS installed an independent monitor. Coinbase kept its license. The core harm of a backlog is late or missed reporting, not an automatic model invalidation or customer compensation.",
    source: [
      { label: "NYDFS press release (Jan 4, 2023) – $100 million settlement with Coinbase", url: "https://www.dfs.ny.gov/reports_and_publications/press_releases/pr202301041" }
    ] },

  { id: "CASE-032", domain: 3, topic: "Case lessons: U.S. Bank / individual liability (FinCEN 2020)", hy: true,
    q: "A senior risk executive approves capping the number of monitoring alerts to match investigator headcount, despite warnings from staff and regulators. FinCEN later fines the executive personally. What does the 2020 LaFontaine case show?",
    options: [
      "Only the bank can be penalized for BSA program failures; individuals face criminal exposure only for bribery",
      "Capping alerts is acceptable if the cap is documented and approved by a senior officer of the bank",
      "Individuals can be personally fined only if they personally profited from the money laundering",
      "Officers and employees who willfully cause BSA violations can face civil penalties under 31 U.S.C. 5321"
    ],
    answer: [3],
    explanation: "FinCEN fined Michael LaFontaine, U.S. Bank's former Chief Operational Risk Officer, $450,000 because he did not prevent BSA violations. The bank capped alerts based on staffing, and he was warned by subordinates and the OCC that this was dangerous. 31 U.S.C. 5321(a)(1) allows civil penalties against a partner, director, officer or employee of a financial institution who willfully violates the BSA. Documenting or approving a cap does not make it acceptable, and personal profit is not required.",
    source: [
      { label: "FinCEN press release (Mar 4, 2020) – FinCEN penalizes U.S. Bank official", url: "https://www.fincen.gov/news/news-releases/fincen-penalizes-us-bank-official-corporate-anti-money-laundering-failures" },
      { label: "31 U.S.C. 5321 – civil penalties (uscode.house.gov)", url: "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title31-section5321&num=0&edition=prelim" }
    ] },

  { id: "CASE-033", domain: 1, topic: "Case lessons: Credit Suisse / Mozambique (2021)", hy: false,
    q: "A bank is arranging large loans to state-owned companies in a country with high corruption risk. Which facts from the Credit Suisse Mozambique case should have raised clear bribery red flags for its control functions and committees? (Choose two.)",
    options: [
      "The projects were not subject to public scrutiny or a formal procurement process",
      "The loans were denominated in US dollars rather than in the local currency",
      "The borrower planned to repay the loans from the future revenues of the projects",
      "The loans were syndicated to other institutional investors after they were arranged",
      "The contractor engaged for the projects had a reputation as a \"master of kickbacks\""
    ],
    answer: [0,4],
    explanation: "The FCA found that Credit Suisse knew Mozambique had a high risk of official corruption, that the projects avoided public scrutiny and formal procurement, and that the contractor was described as a \"master of kickbacks\". It paid over $50 million in kickbacks to members of the deal team. The FCA said these warning signs should have been clear to control functions and committees, and that there was repeated lack of challenge. USD denomination, project-revenue repayment and syndication are ordinary features of such financing, not bribery indicators.",
    source: [
      { label: "FCA press release (Oct 2021) – Credit Suisse fined over Mozambique loans", url: "https://www.fca.org.uk/news/press-releases/credit-suisse-fined-ps147190276-us200664504-and-undertakes-fca-forgive-us200-million-mozambican-debt" }
    ] },

  { id: "CASE-034", domain: 1, topic: "Case lessons: Deutsche Bank mirror trades (2017)", hy: true,
    q: "A broker's Moscow office receives orders from related clients to buy a Russian blue-chip stock for roubles in Moscow while a connected offshore client sells the same quantity of the same stock through London for US dollars, and both sides are executed at the same time. Which laundering method is this?",
    options: [
      "Pump-and-dump manipulation, in which a thinly traded stock is inflated and then sold to retail investors",
      "Mirror trading, a trade with no economic purpose that converts roubles into dollars and moves them out of Russia covertly",
      "Trade-based money laundering, in which the price of goods is misrepresented on commercial invoices",
      "Front running, in which a broker trades ahead of a large client order to profit from the price movement"
    ],
    answer: [1],
    explanation: "The FCA found that Deutsche Bank's Moscow office executed more than 2,400 pairs of mirror trades between 2012 and 2014. Connected clients bought and sold the same securities in the same volume on both sides, converting roubles into dollars and moving more than $6 billion out of Russia to accounts in places such as Cyprus, Estonia and Latvia. The FCA cited inadequate CDD, the front office not owning KYC, and no automated systems to detect suspicious trades. The pattern involves no price inflation, goods invoices or trading ahead of clients.",
    source: [
      { label: "FCA press release (Jan 2017) – Deutsche Bank fined £163 million for AML control failures", url: "https://www.fca.org.uk/news/press-releases/fca-fines-deutsche-bank-163-million-anti-money-laundering-controls-failure" }
    ] },

  { id: "CASE-035", domain: 4, topic: "Case lessons: Starling Bank (FCA 2024) - screening completeness", hy: true,
    q: "In January 2023 Starling Bank discovered that since 2017 its automated sanctions screening system had screened customers against only a fraction of the full financial sanctions list. Which control would MOST likely have caught this earlier?",
    options: [
      "Raising the fuzzy-matching threshold so that the system produces fewer false-positive alerts",
      "Relying on the screening vendor's annual certification that its software meets industry standards",
      "Screening new customers only at onboarding, and rescreening them at their periodic KYC review",
      "Regular testing that confirms the list data in the system is complete and matches the official list"
    ],
    answer: [3],
    explanation: "The FCA fined Starling about £29 million, noting that its screening had covered only a fraction of the sanctions list since 2017 and that its controls did not keep pace with rapid growth. Starling also breached an agreed requirement not to onboard high-risk customers. Independent testing that reconciles the loaded list data against the official source detects this kind of gap. A higher match threshold reduces alerts rather than coverage checks, a vendor certification does not test the bank's own setup, and screening less often makes the gap worse.",
    source: [
      { label: "FCA press release (Oct 2024) – Starling Bank fined £29m", url: "https://www.fca.org.uk/news/press-releases/fca-fines-starling-bank-failings-financial-crime-systems-and-controls" }
    ] }
]);
