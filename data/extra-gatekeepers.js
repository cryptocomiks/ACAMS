// Batch: gatekeepers, DNFBPs and non-bank sectors (GATE-001 to GATE-025). Sources verified October 2026.
window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "GATE-001", domain: 1, topic: "Lawyers: when FATF R.22/R.23 apply, and legal privilege", hy: true, difficulty: "hard",
    q: "A law firm in a country that follows the FATF Standards acts for the same client on two matters. On the first, a litigation partner defends the client in a criminal fraud trial and learns, in a privileged meeting, how the client moved money in the past. On the second, a corporate partner forms a holding company for the client and receives the purchase money for a villa into the firm's client account to complete the purchase. The firm also prints the client's annual newsletter. During the second matter the corporate partner becomes suspicious that the purchase money comes from the fraud. Under FATF R.22 and R.23 and INR.23, which statement is CORRECT?",
    options: [
      "The firm must report what it learned in the criminal defence, because once a firm is a DNFBP all client information is reportable",
      "The firm has no reporting duty at all, because lawyers report suspicions only to their self-regulatory body",
      "The suspicion arising on the company formation and property purchase is reportable, but information obtained while defending the client in the proceedings need not be reported",
      "Nothing is reportable until the villa purchase completes, because R.23 applies only after a financial transaction has been carried out"
    ],
    answer: [2],
    explanation: "R.22(d) applies CDD to lawyers when they prepare for or carry out transactions for a client concerning, among other things, buying and selling real estate, managing client money and creating legal persons, and R.23(a) requires STRs when they engage in a financial transaction in relation to those activities. INR.23 says lawyers are not required to report information obtained in circumstances covered by professional secrecy or legal professional privilege, which normally covers defending or representing the client in judicial proceedings. The runner-up, reporting everything, ignores that privilege carve-out; R.23 is not limited to completed transactions, and INR.23 only allows (does not require) STRs to go through an SRO that cooperates with the FIU.",
    source: [{ label: "FATF Recommendations (2026), R.22, R.23 and INR.23 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }]
  },
  {
    id: "GATE-002", domain: 1, topic: "Lawyers and accountants: INR.23 (dissuasion, SRO reporting)", hy: false, difficulty: "medium",
    q: "A bar association is drafting guidance on suspicious transaction reporting for lawyers, notaries and accountants who act as independent legal professionals. Which statements are consistent with FATF R.23 and its Interpretive Note? (Choose two.)",
    options: [
      "Where a lawyer seeks to dissuade a client from engaging in illegal activity, this does not amount to tipping-off",
      "Lawyers must report information they obtain while representing a client in arbitration or mediation proceedings",
      "Accountants are outside R.23 altogether, because only lawyers and notaries handle client transactions",
      "Countries may allow these professionals to send their STRs to their self-regulatory organisation, if it cooperates appropriately with the FIU",
      "A lawyer may tell a long-standing client that an STR has been filed, provided the client is not a PEP"
    ],
    answer: [0, 3],
    explanation: "INR.23 paragraph 4 says that seeking to dissuade a client from engaging in illegal activity is not tipping-off, and paragraph 3 lets countries allow STRs to be sent to the appropriate SRO where there are appropriate forms of cooperation between the SRO and the FIU. Information obtained in representing a client in judicial, administrative, arbitration or mediation proceedings is normally privileged (INR.23 paragraph 2). R.23(a) covers accountants and strongly encourages extending reporting to their other professional activities, including auditing. Telling any client that an STR has been filed is tipping-off under R.21, which applies to DNFBPs through R.23.",
    source: [{ label: "FATF Recommendations (2026), R.21, R.23 and INR.23 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }]
  },
  {
    id: "GATE-003", domain: 1, topic: "UK: privileged circumstances and the crime/fraud exception (POCA s.330)", hy: true, difficulty: "hard",
    q: "A client asks a London solicitor for advice on buying a small trading company. During the advice meeting the client explains that the price will be paid by an offshore company that holds the profits of a VAT fraud he ran, and asks how to structure the payment so the source cannot be traced. The solicitor has not acted on the purchase yet. The firm's training says information received 'in connection with giving legal advice' is privileged. The solicitor asks the firm's MLRO whether privilege prevents a disclosure. What is the BEST answer under the Proceeds of Crime Act 2002?",
    options: [
      "Privilege does not apply, because information communicated with the intention of furthering a criminal purpose falls outside privileged circumstances",
      "The information is protected, because it was given by a client in connection with the giving of legal advice",
      "The solicitor must tell the client that a report will be made, since a lawyer may warn a client to dissuade him",
      "No disclosure is needed until the solicitor actually handles the purchase funds through the client account"
    ],
    answer: [0],
    explanation: "Under POCA s.330(6) and (10), a professional legal adviser does not commit the failure-to-disclose offence where the information came to him in privileged circumstances, such as from a client in connection with legal advice. However, s.330(11) says this does not apply to information communicated with the intention of furthering a criminal purpose, and the client here wants help hiding the proceeds of his VAT fraud. The runner-up applies s.330(10) but ignores that exception. The s.333D(2) defence covers a disclosure made to dissuade a client from an offence, not announcing a report, and the duty to disclose arises from knowledge or suspicion, not from first handling the funds.",
    source: [
      { label: "Proceeds of Crime Act 2002, s.330 (failure to disclose: regulated sector)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/330" },
      { label: "Proceeds of Crime Act 2002, s.333D (permitted disclosures)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/333D" }
    ]
  },
  {
    id: "GATE-004", domain: 1, topic: "Accountants: activities covered by FATF R.22(d)", hy: false, difficulty: "medium",
    q: "A mid-sized accountancy firm offers several services. Which services bring the firm within FATF R.22's customer due diligence requirements, when it prepares for or carries out transactions for a client? (Choose two.)",
    options: [
      "Carrying out the statutory audit of a listed company's financial statements",
      "Managing a client's bank and securities accounts under a power of attorney",
      "Running monthly payroll calculations for a restaurant client",
      "Preparing an individual client's personal income tax return",
      "Arranging the purchase of a business entity on behalf of a client"
    ],
    answer: [1, 4],
    explanation: "R.22(d) applies to lawyers, notaries, other independent legal professionals and accountants when they prepare for or carry out transactions for a client concerning buying and selling real estate, managing client money, securities or other assets, managing bank, savings or securities accounts, organising contributions for companies, and creating, operating or managing legal persons or arrangements and buying and selling business entities. Managing accounts and buying a business fit that list. Auditing, payroll and tax return preparation are not listed in R.22(d). R.23 only encourages countries to extend reporting to accountants' other activities, including auditing.",
    source: [{ label: "FATF Recommendations (2026), R.22(d) and R.23(a) (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }]
  },
  {
    id: "GATE-005", domain: 1, topic: "UK TCSPs: sale of off-the-shelf companies (MLRs 2026 amendment)", hy: true, difficulty: "hard",
    changed: "UK MLRs reg 12(2)(ab) added by SI 2026/621 (in force 30 June 2026): selling an off-the-shelf firm is TCSP activity",
    q: "In August 2026, a UK company formation agent advertises 'aged' dormant companies with several years of filing history. A buyer based abroad wants one urgently, asks for a company with a long trading history so that it 'looks established' for a public procurement bid, and will pay the agent from a third party's account. The agent's compliance manual says that only forming new companies is a regulated activity, because selling an existing company is a simple share transfer. Which statement is CORRECT?",
    options: [
      "The manual is right: the sale is a share transfer outside the MLRs, although the agent could still make a voluntary report",
      "The agent need only file a confirmation statement at Companies House recording the new shareholder",
      "The sale is regulated only if the agent also provides a registered office or a nominee director to the buyer",
      "Selling an off-the-shelf firm is now trust or company service provider activity, so CDD applies, and the buyer's wish to look established and the third-party payment are red flags"
    ],
    answer: [3],
    explanation: "The Money Laundering and Terrorist Financing (Amendment) Regulations 2026 (SI 2026/621) inserted regulation 12(2)(ab) into the MLRs from 30 June 2026. A TCSP now includes a firm that by way of business sells an off-the-shelf firm, meaning one that does not carry on business or whose business is not the TCSP's main activity. HM Treasury's explanatory memorandum says this ensures CDD applies to the onward sale of a pre-existing firm. The manual reflects the law before that change, and the regulated status does not depend on also providing an address or nominee. A buyer seeking a false appearance of trading history, paid for by a third party, should be treated as suspicious.",
    source: [
      { label: "MLRs 2017 reg. 12 (as amended by SI 2026/621, 30.6.2026)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/12" },
      { label: "Explanatory Memorandum to SI 2026/621", url: "https://www.legislation.gov.uk/uksi/2026/621/pdfs/uksiem_20260621_en_001.pdf" }
    ]
  },
  {
    id: "GATE-006", domain: 1, topic: "Real estate agents: CDD on buyers and sellers (INR.22)", hy: true, difficulty: "medium",
    q: "A real estate agency is instructed only by the seller of a luxury apartment. The buyer is a newly formed foreign company, and its deposit is paid by an unrelated individual abroad. The agency's policy is to perform CDD only on the party that signs its engagement letter. According to the FATF Standards, what is the problem with this policy?",
    options: [
      "Real estate agents need perform CDD only when the price is paid in cash above USD/EUR 15,000",
      "Real estate agents should apply CDD to both the purchasers and the vendors of the property",
      "CDD on the buyer is the sole responsibility of the buyer's bank and lawyer",
      "Real estate agents are not DNFBPs unless they also hold client money for the buyer"
    ],
    answer: [1],
    explanation: "R.22(b) covers real estate agents when they are involved in transactions for a client concerning the buying and selling of real estate, and INR.22 paragraph 1 says they should comply with R.10 with respect to both the purchasers and vendors of the property. FATF's 2022 real estate guidance repeats this and lists third-party payers and complex or opaque ownership as risk indicators. The USD/EUR 15,000 cash threshold applies to dealers in precious metals and stones, not real estate agents. Other parties' CDD does not replace the agent's own obligations.",
    source: [
      { label: "FATF Recommendations (2026), R.22(b) and INR.22 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
      { label: "FATF Guidance for a Risk-Based Approach to the Real Estate Sector (2022) (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/Best_practicies/RBA-Real-Estate-Sector.pdf.coredownload.pdf.pdf" }
    ]
  },
  {
    id: "GATE-007", domain: 1, topic: "Real estate: successive sales with unexplained changes in value", hy: false, difficulty: "hard",
    q: "A bank finances a property developer and reviews the land registry history of a townhouse offered as collateral. Company A bought it for 1.2 million. Three months later it sold it to Company B for 1.9 million, and two months after that Company B sold it to Company C for 2.6 million. No renovation took place. The three companies share a director and use the same corporate services provider, and the purchases were paid from accounts in different jurisdictions. The townhouse is in a popular area where prices rose about 5% that year. Which typology does this MOST likely indicate?",
    options: [
      "A legitimate 'fix and flip' strategy, since resale profits are normal in a rising market",
      "A loan-back scheme, in which a criminal lends his own money to himself through an offshore company",
      "Successive sales between connected parties to create an artificial value and move or justify illicit funds",
      "Tax-efficient group restructuring, since transfers between related companies are common"
    ],
    answer: [2],
    explanation: "FATF's 2022 real estate guidance lists as high-risk indicators successive transactions in the same property in a short period with unexplained changes in value, complex ownership structures that obscure the beneficial owner, and funds from overseas accounts or third parties. Here the price more than doubles in five months, with no renovation and far above the market trend, between companies sharing a director. A 'fix and flip' requires work on the property, and a loan-back scheme involves a sham loan, which is not described. Restructuring would not explain the inflated prices paid with money from several jurisdictions.",
    source: [{ label: "FATF Guidance for a Risk-Based Approach to the Real Estate Sector (2022), high-risk indicators (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/Best_practicies/RBA-Real-Estate-Sector.pdf.coredownload.pdf.pdf" }]
  },
  {
    id: "GATE-008", domain: 1, topic: "Insurance: cash equivalents and policy loans", hy: true, difficulty: "hard",
    q: "A US life insurer reviews a whole life policy owned by a restaurant owner. Over two months he paid $27,000 of premiums with 11 money orders from four different MSBs, each between $2,000 and $2,900, plus one personal check. Soon afterwards he took a policy loan of $20,000, which was paid by wire to an account in another state. He repays the loan with more money orders under $3,000. The agent says the customer is a good client with a net worth over $1 million. What should the insurer do?",
    options: [
      "Investigate and file a SAR if the activity remains unexplained, since structured cash equivalents and a quick policy loan are recognised insurance red flags and the $5,000 threshold is met",
      "Take no action, because no single instrument reached the $3,000 recordkeeping or $5,000 SAR threshold",
      "File a currency transaction report, because the money orders together exceed $10,000",
      "Leave the review to the agent, because the agent sold the policy and knows the customer best"
    ],
    answer: [0],
    explanation: "An insurer must report a suspicious transaction involving a covered product that involves or aggregates at least $5,000, including one designed to evade BSA requirements through structuring (31 CFR 1025.320). FinCEN's assessment of insurance SARs describes owners of cash-intensive businesses paying into policies with multiple cash equivalents from different issuers, each below BSA thresholds, then taking policy loans and repaying them with more cash equivalents. The runner-up looks at each instrument alone, but the SAR threshold is met in aggregate and the pattern of buying instruments just under $3,000 is itself the concern. Insurers do not file CTRs, and the insurer stays responsible for reporting activity conducted through its agents.",
    source: [
      { label: "FinCEN, Insurance Industry Suspicious Activity Reporting: An Assessment of the Second Year SAR Filings (Jan 2010)", url: "https://fincen.gov/sites/default/files/shared/Insurance_update_pub.pdf" },
      { label: "31 CFR 1025.320 – SARs by insurance companies (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1025/subpart-C/section-1025.320" }
    ]
  },
  {
    id: "GATE-009", domain: 3, topic: "Insurance companies: which BSA rules apply (no CIP or beneficial ownership rule)", hy: false, difficulty: "hard",
    q: "A US life insurer is launching single-premium deferred annuities for small businesses, including LLCs. Its new AML officer, who joined from a bank, drafts the program. Which statement BEST describes the federal BSA requirements the insurer must build in for these covered products?",
    options: [
      "A customer identification program and beneficial ownership verification under 31 CFR 1010.230, the same as for a bank",
      "Beneficial ownership verification under 1010.230 only, because annuities sold to LLCs are legal entity accounts",
      "No AML program, because AML program rules apply only to products sold directly without agents",
      "A risk-based AML program that integrates its agents and SAR reporting, while the CIP and beneficial ownership rules do not apply to insurers"
    ],
    answer: [3],
    explanation: "Part 1025 requires insurers to keep an AML program for covered products that integrates their agents and brokers (1025.210) and to file SARs (1025.320). The beneficial ownership rule in 31 CFR 1010.230 applies only to 'covered financial institutions' as defined in 1010.605(e)(1): banks, broker-dealers, futures commission merchants and introducing brokers, and mutual funds. Insurers are not on that list, and FinCEN has no CIP rule for insurers. The runner-up treats the LLC customer as triggering 1010.230, but that rule depends on the type of institution, not the type of customer. A risk-based program may still collect ownership information where the risk warrants.",
    source: [
      { label: "31 CFR 1010.605(e)(1) – covered financial institution (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-F/section-1010.605" },
      { label: "31 CFR 1025.210 – AML program for insurance companies (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1025/subpart-B/section-1025.210" }
    ]
  },
  {
    id: "GATE-010", domain: 1, topic: "UK casinos: £2,000 CDD threshold and re-used winnings", hy: true, difficulty: "hard",
    changed: "UK MLRs reg 27 thresholds converted to sterling by SI 2026/621 (in force 30 June 2026): casino €2,000 became £2,000",
    q: "In September 2026, a patron at a London casino buys £1,200 of chips with cash at 9 p.m. He wins £900 in chips, does not cash them, and stakes them again. At 11 p.m. he buys another £500 of chips with cash. At 1 a.m. he cashes out £2,300 of chips at the cage. The casino treats the evening's transactions as linked. Under regulation 27 of the MLRs, when must the casino apply customer due diligence?",
    options: [
      "When he re-stakes the £900 of winnings, because his stakes for the evening then total £2,100",
      "When he cashes out £2,300, because collecting winnings of £2,000 or more triggers CDD",
      "At the first purchase, because any cash chip purchase over £1,000 requires CDD",
      "Not at all, because UK casinos apply CDD only at the FATF threshold of £3,000"
    ],
    answer: [1],
    explanation: "Regulation 27(5) and (6) require a casino to apply CDD to the wagering of a stake (including buying chips) or the collection of winnings amounting to £2,000 or more, in a single operation or linked operations. Under regulation 27(7), uncollected winnings re-used in a later stake are not counted. His new stakes are therefore £1,200 + £500 = £1,700, below the threshold, but collecting £2,300 of winnings meets it. The runner-up counts the re-staked winnings, which regulation 27(7) excludes. Since 30 June 2026 (SI 2026/621) the threshold is £2,000 rather than €2,000. The UK threshold is lower than FATF's casino threshold of USD/EUR 3,000.",
    source: [
      { label: "MLRs 2017 reg. 27 (as amended by SI 2026/621, 30.6.2026)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/27" },
      { label: "FATF Recommendations (2026), INR.22 and INR to R.22/23 casino threshold (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "GATE-011", domain: 1, topic: "EU AMLR: providers of gambling services", hy: false, difficulty: "hard",
    q: "A group runs a land-based casino and a private online sports betting site in an EU Member State. It is preparing for the EU Anti-Money Laundering Regulation (AMLR), which applies from 10 July 2027. Which statements about the AMLR are CORRECT? (Choose two.)",
    options: [
      "Gambling providers apply CDD only above USD/EUR 3,000, the FATF casino threshold",
      "The Member State may exempt the casino if it shows a proven low risk",
      "CDD applies when wagering a stake or collecting winnings of at least EUR 2,000, in a single operation or linked transactions",
      "Gambling providers become subject to the AMLR only from 10 July 2029",
      "At physical premises, the casino may identify and verify customers on entry, if it can attribute transactions to them"
    ],
    answer: [2, 4],
    explanation: "AMLR Article 19(5) requires providers of gambling services to apply CDD upon collecting winnings, wagering a stake or both, for transactions of at least EUR 2,000, single or linked. Article 19(8) allows identification and verification on entry to a casino or other physical gambling premises, provided systems attribute transactions to specific customers. Article 4 lets Member States exempt low-risk gambling providers, but never casinos or private providers whose main activity is online gambling or sports betting. The FATF threshold of USD/EUR 3,000 is higher than the EU figure, and the 2029 date applies only to football clubs and agents (Article 90).",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR), Arts. 4, 19 and 90", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }]
  },
  {
    id: "GATE-012", domain: 1, topic: "Casinos: FinCEN section 311 proposal on Mexican gambling establishments", hy: true, difficulty: "hard",
    changed: "FinCEN s.311 NPRM on ten Mexico-based gambling establishments, Nov 2025 (still a proposal in Oct 2026)",
    q: "In October 2026, a US bank's monitoring finds that a Mexican respondent bank's correspondent account processes regular payments involving Midas Casino in Mazatlán, one of ten Mexico-based gambling establishments named in a FinCEN section 311 notice of proposed rulemaking published in November 2025. FinCEN has not issued a final rule. The relationship manager says the respondent is profitable and fully licensed. What is the BEST course of action?",
    options: [
      "Close the correspondent account at once, because the section 311 prohibition is already in force",
      "Take no action, because a proposed rule has no legal effect and creates no risk",
      "Use FinCEN's findings in a risk-based review of the respondent's activity involving these establishments, file SARs as warranted, and prepare to apply the special measure if it is finalised",
      "Restrict only cash-based payments, because the proposed measure would cover only currency transactions"
    ],
    answer: [2],
    explanation: "In November 2025 FinCEN proposed, under section 311, to find transactions involving ten Mexico-based gambling establishments to be a class of transactions of primary money laundering concern. It assessed that they facilitate money laundering for the Sinaloa Cartel, a designated FTO and SDGT. The proposed special measure would bar US institutions from opening or maintaining correspondent accounts for foreign banks used to process such transactions, and require special due diligence. Because it is still only a proposal, there is no prohibition yet, but ignoring FinCEN's published findings would not be risk-based. The proposal is not limited to cash.",
    source: [
      { label: "Federal Register (17 Nov 2025) – Proposal of Special Measure Regarding Ten Mexican Gambling Establishments", url: "https://www.federalregister.gov/documents/2025/11/17/2025-19927/proposal-of-special-measure-regarding-transactions-involving-ten-mexican-gambling-establishments-as" },
      { label: "Same notice, GovInfo text (90 FR 51234)", url: "https://www.govinfo.gov/content/pkg/FR-2025-11-17/html/2025-19927.htm" }
    ]
  },
  {
    id: "GATE-013", domain: 1, topic: "UK high value dealers: linked cash and payments into a bank account", hy: true, difficulty: "hard",
    changed: "UK MLRs reg 14 HVD threshold converted from €10,000 to £10,000 by SI 2026/621 (in force 30 June 2026)",
    q: "In August 2026, a UK jeweller that normally refuses large cash payments agrees to sell a bracelet for £10,500. The customer pays £6,000 in cash at the counter. A week later an associate of the customer pays the remaining £4,500 in cash directly into the jeweller's business bank account at a branch. The jeweller says that only £6,000 was 'received in cash', so it is not acting as a high value dealer. What is the CORRECT analysis under the MLRs?",
    options: [
      "Both payments count as cash, so the linked £10,500 reaches the £10,000 threshold and the jeweller must apply CDD as a high value dealer",
      "Only the £6,000 counts, because money deposited into a bank account is a bank payment, not cash",
      "No CDD is needed, because the occasional transaction threshold for dealers is £12,000",
      "The jeweller must apply CDD only if it suspects money laundering, because cash thresholds no longer apply after 2026"
    ],
    answer: [0],
    explanation: "Under regulation 14(1)(a), a high value dealer trades in goods and makes or receives cash payments of at least £10,000 for a transaction, in a single operation or several linked operations. Regulation 14(2) says a payment remains a 'payment in cash' when cash is paid into a bank account for the benefit of the other party, so the £4,500 counts. Regulation 27(3) then requires CDD. SI 2026/621 converted the threshold from €10,000 to £10,000 from 30 June 2026; it did not remove it. The £12,000 figure is the general occasional-transaction threshold in regulation 27(2), which expressly does not apply to high value dealers.",
    source: [
      { label: "MLRs 2017 reg. 14 (as amended by SI 2026/621)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/14" },
      { label: "MLRs 2017 reg. 27 (as amended by SI 2026/621)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/27" }
    ]
  },
  {
    id: "GATE-014", domain: 1, topic: "UK art market participants: threshold and the artist exemption", hy: false, difficulty: "hard",
    changed: "UK MLRs reg 14 art market participant threshold converted from €10,000 to £10,000 by SI 2026/621 (in force 30 June 2026)",
    q: "A London gallery is a partnership. In September 2026 it makes four sales. Which sale, on its own, makes the gallery an art market participant under the MLRs for that transaction?",
    options: [
      "A £80,000 sculpture created by one of the gallery's own partners",
      "A single £9,500 painting by an unrelated artist, paid by card",
      "Storing a collector's works worth £400,000 in an ordinary London warehouse that is not a freeport",
      "Three prints by an unrelated artist sold to one buyer in linked transactions totalling £10,400"
    ],
    answer: [3],
    explanation: "Regulation 14(1)(d) defines an art market participant as a firm that trades in, or acts as an intermediary in, works of art where the transaction or a series of linked transactions amounts to £10,000 or more, or a freeport operator storing art of that value. Linked sales of £10,400 meet the test. Regulation 14(3) excludes the sale of a work created by, or attributable to, a member of the firm, so the partner's sculpture is outside it despite its value. The £9,500 sale is below the threshold, and storage counts only in a freeport. SI 2026/621 changed the threshold from €10,000 to £10,000 from 30 June 2026.",
    source: [{ label: "MLRs 2017 reg. 14 (as amended by SI 2026/621)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/14" }]
  },
  {
    id: "GATE-015", domain: 1, topic: "US antiquities dealers: AML Act 2020 s.6110 status", hy: false, difficulty: "medium",
    q: "In October 2026, a US dealer in ancient coins and artefacts asks whether it must already run a BSA AML program, given that the AML Act of 2020 added persons 'engaged in the trade of antiquities' to the BSA definition of financial institution. Which statement is CORRECT?",
    options: [
      "Yes, the obligations took effect automatically when the AML Act was enacted in January 2021",
      "No AML program or SAR rule applies yet, because the obligations start only with FinCEN's final regulations and FinCEN has issued only an advance notice, but Form 8300 still applies to currency over $10,000",
      "Yes, because antiquities dealers are covered by FinCEN's rule for dealers in precious metals, stones or jewels",
      "No, and the dealer is also exempt from Form 8300, because antiquities are cultural property"
    ],
    answer: [1],
    explanation: "FinCEN's notice FIN-2021-NTC2 explains that section 6110(a) of the AML Act added antiquities traders to the BSA definition and directed FinCEN to issue regulations, and that the obligations take effect only on the effective date of those final regulations. FinCEN published an advance notice of proposed rulemaking in September 2021, and no final rule has followed; Title 31 Chapter X still has no part for antiquities dealers. Any trade or business must still file Form 8300 for currency over $10,000 (31 CFR 1010.330). Part 1027 covers precious metals, stones and jewels, not antiquities.",
    source: [
      { label: "FinCEN Notice FIN-2021-NTC2 – Trade in Antiquities and Art (Mar 2021)", url: "https://fincen.gov/sites/default/files/2021-03/FinCEN%20Notice%20on%20Antiquities%20and%20Art_508C.pdf" },
      { label: "Federal Register (24 Sep 2021) – ANPRM: AML Regulations for Dealers in Antiquities", url: "https://www.federalregister.gov/documents/2021/09/24/2021-20731/anti-money-laundering-regulations-for-dealers-in-antiquities" }
    ]
  },
  {
    id: "GATE-016", domain: 1, topic: "EU AMLR: threshold reports for high-value cars, boats and aircraft", hy: false, difficulty: "medium",
    q: "In late 2027, a luxury car dealer in an EU Member State sells a EUR 260,000 sports car to a private individual for personal use. The buyer pays by bank transfer, and nothing about the sale is suspicious. Under the EU AMLR, what must the dealer do?",
    options: [
      "Nothing, because AML obligations for traders in goods apply only to cash payments of EUR 10,000 or more",
      "File a suspicious transaction report, because all sales over EUR 250,000 are presumed suspicious",
      "Report the sale to the FIU as a threshold-based report, because it is a motor vehicle bought for non-commercial purposes at EUR 250,000 or more",
      "Report only if the buyer is a PEP, because threshold reports apply only to higher-risk customers"
    ],
    answer: [2],
    explanation: "AMLR Article 74 requires persons trading in high-value goods to report to the FIU all sales of motor vehicles for at least EUR 250,000, and of watercraft or aircraft for at least EUR 7,500,000, when acquired for non-commercial purposes. Credit and financial institutions providing services for the purchase must also report. These are threshold-based reports, so they do not depend on suspicion or the payment method, and they are not STRs. Under Annex IV, motor vehicles priced over EUR 250,000 are high-value goods, which brings their traders into scope. The AMLR applies from 10 July 2027.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR), Art. 74 and Annex IV", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }]
  },
  {
    id: "GATE-017", domain: 1, topic: "UK market abuse: STOR to the FCA vs SAR to the NCA", hy: true, difficulty: "hard",
    q: "A UK broker's surveillance team flags a retail client who has never traded options. Two days before a takeover announcement, he bought a large position in out-of-the-money call options on the target, then sold at a large profit the day after. The client's brother works in the target's finance department. The client asks for the profits to be wired to an account in another country. The head of compliance proposes filing a suspicious transaction and order report (STOR) with the FCA, since 'the FCA shares intelligence with the NCA'. What is the BEST approach?",
    options: [
      "File a STOR with the FCA, and separately consider a SAR to the NCA, because a STOR does not discharge POCA obligations",
      "File a STOR only, because the FCA passes all market abuse intelligence to the NCA",
      "File a SAR with the NCA only, because insider dealing is a criminal offence and a SAR covers MAR as well",
      "Wait for the FCA to open an investigation before reporting, to avoid tipping off the client"
    ],
    answer: [0],
    explanation: "Under MAR Article 16(2), a person professionally arranging or executing transactions must notify the FCA without delay of reasonably suspected insider dealing or market manipulation, which is a STOR. Insider dealing is also a crime under Part V of the Criminal Justice Act 1993, so the profits are criminal property and a SAR under POCA may be required. The FCA's 2019 letter states that filing a STOR does not discharge POCA or Terrorism Act obligations, that a SAR does not discharge the MAR duty, and that firms may need to file both. The runner-up relies on intelligence sharing that the FCA said does not replace a firm's own SAR obligation.",
    source: [{ label: "FCA letter to UK Finance on SARs and STORs (6 Sep 2019)", url: "https://www.fca.org.uk/publication/correspondence/letter-uk-finance-sars-stors.pdf" }]
  },
  {
    id: "GATE-018", domain: 1, topic: "Insider trading and market manipulation as predicate offences", hy: true, difficulty: "medium",
    q: "A bank sees that a customer received large profits from options trades placed just before a merger announcement, and then moved the money through accounts of family members. A colleague argues that insider trading is a 'securities regulatory breach', not a crime that can generate laundered proceeds, so no STR is needed. What is the BEST response under the FATF Standards?",
    options: [
      "Agree, because only drug trafficking, terrorism and fraud are designated predicate offences",
      "Agree, because securities offences are handled by market regulators, not FIUs",
      "Disagree, but only if the customer was convicted of insider trading before the funds moved",
      "Disagree, because insider trading and market manipulation are designated categories of offences, so their proceeds can be laundered"
    ],
    answer: [3],
    explanation: "The FATF Glossary's list of designated categories of offences, which countries must cover as predicate offences for money laundering, includes 'insider trading and market manipulation'. Proceeds of insider trading moved through relatives' accounts can therefore be laundered funds, and a suspicion is enough for an STR under R.20, without a conviction. Market regulators' supervision does not remove a bank's duty to report to the FIU.",
    source: [{ label: "FATF Recommendations (2026), Glossary – designated categories of offences; R.20 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }]
  },
  {
    id: "GATE-019", domain: 1, topic: "Securities: using ADRs for currency conversion", hy: false, difficulty: "hard",
    q: "A US broker-dealer's customer, a trading company owned by residents of a country with strict capital controls, repeatedly delivers into its account American Depositary Receipts (ADRs) that were bought abroad in local currency. It sells them within days for US dollars and wires the proceeds to unrelated companies in third countries. It places no offsetting buy orders at the firm and shows no interest in investment returns. Which concern does this pattern MOST directly match in FINRA's red flags?",
    options: [
      "Mirror trading, because the same security is bought and sold in two currencies by related parties at the same firm",
      "Using securities to convert currency and move value out of a country, outside normal foreign exchange channels",
      "Front-running, because the customer trades ahead of other customers' orders in the same ADRs",
      "Marking the close, because the sales are designed to move the ADRs' closing price"
    ],
    answer: [1],
    explanation: "FINRA Regulatory Notice 19-18 lists as a red flag a pattern of transactions in which the customer uses securities to convert currency, for example delivering in and then liquidating ADRs or dual currency bonds for US dollar proceeds when the securities were bought in another currency. Wires to unrelated third parties and indifference to returns add to the concern. Mirror trading is the runner-up, but it needs matching, offsetting trades by related parties, which this firm does not see. Nothing suggests trading ahead of other orders or timing trades to move the closing price.",
    source: [{ label: "FINRA Regulatory Notice 19-18 – red flags for suspicious activity", url: "https://www.finra.org/rules-guidance/notices/19-18" }]
  },
  {
    id: "GATE-020", domain: 3, topic: "Investment advisers in 2026: CIP reliance and the delayed IA AML rule", hy: true, difficulty: "hard",
    changed: "FinCEN IA AML rule effective date delayed from 1 Jan 2026 to 1 Jan 2028 (final rule, Jan 2026)",
    q: "In October 2026, a US bank builds a custody and cash sweep service for the clients of an SEC-registered investment adviser. The adviser offers to perform the bank's customer identification program (CIP) for these clients and to certify each year that it has an AML program. The bank's project lead notes that the SEC is a federal functional regulator and wants the CIP to rely on the adviser under 31 CFR 1020.220(a)(6). What is the MAIN problem?",
    options: [
      "The reliance provision may be used only for affiliates, and the adviser is not affiliated with the bank",
      "Reliance is allowed, but only if the adviser also files SARs jointly with the bank",
      "The adviser is not yet subject to a BSA AML program rule, because FinCEN delayed the investment adviser rule to 1 January 2028",
      "The reliance provision requires the adviser to be regulated by the OCC rather than the SEC"
    ],
    answer: [2],
    explanation: "Under 1020.220(a)(6), a bank may rely on another financial institution for CIP only if the reliance is reasonable, the other institution is subject to a rule implementing 31 U.S.C. 5318(h) and regulated by a federal functional regulator, and it certifies its AML program to the bank each year. FinCEN's investment adviser AML rule would have applied from 1 January 2026, but a final rule published in January 2026 delayed it to 1 January 2028, so advisers are not yet subject to an AML program rule. The runner-up looks only at the SEC as the regulator and misses this first condition. Reliance can extend beyond affiliates, and SEC regulation is acceptable.",
    source: [
      { label: "Federal Register (2 Jan 2026) – Delaying the Effective Date of the IA AML/CFT Program and SAR Rule", url: "https://www.federalregister.gov/documents/2026/01/02/2025-24184/delaying-the-effective-date-of-the-anti-money-launderingcountering-the-financing-of-terrorism" },
      { label: "31 CFR 1020.220 – CIP for banks (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-B/section-1020.220" }
    ]
  },
  {
    id: "GATE-021", domain: 1, topic: "Prepaid access: when a low-value open-loop card is a prepaid program", hy: false, difficulty: "hard",
    q: "A US fintech plans an open-loop, non-reloadable prepaid card with a maximum value of $500, sold online. Cardholders can use it at merchants worldwide and withdraw cash at foreign ATMs. The fintech organises the program, sets its terms and chooses the issuing bank. Its counsel says the product is outside FinCEN's prepaid access rules because it never holds more than $1,000. What is the CORRECT analysis?",
    options: [
      "It is a prepaid program because funds can be transmitted internationally, so the provider must register as an MSB and verify purchasers' identities",
      "It is exempt, because open-loop products with a maximum value of $1,000 or less are never prepaid programs",
      "It is exempt, because only closed-loop products above $2,000 a day are covered",
      "It is covered only if a single customer buys more than $10,000 of cards in one day"
    ],
    answer: [0],
    explanation: "Under 31 CFR 1010.100(ff)(4)(iii)(D), an arrangement giving access to no more than $1,000 is not a prepaid program only if it also does not permit funds to be transmitted internationally, transfers between users, or loading from non-depository sources. International use removes the exemption, which is the point counsel missed. The provider, the participant with principal oversight and control, is an MSB that must register and must verify and record the name, date of birth, address and ID number of those obtaining prepaid access (1022.210(d)(1)(iv)). The $2,000 figure concerns closed-loop products, and the $10,000 daily test concerns sellers of prepaid access.",
    source: [
      { label: "31 CFR 1010.100(ff) – MSB definitions, prepaid program (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-A/section-1010.100" },
      { label: "31 CFR 1022.210 – AML programs for MSBs (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1022/subpart-B/section-1022.210" }
    ]
  },
  {
    id: "GATE-022", domain: 1, topic: "EU AMLR: low-value e-money exemption", hy: false, difficulty: "medium",
    q: "An EU e-money institution asks its supervisor to exempt a new product from customer due diligence once the AMLR applies. Which product could qualify for the e-money exemption in AMLR Article 19(7)?",
    options: [
      "A reloadable card with a EUR 100 limit that can be used at any merchant accepting the card scheme",
      "A EUR 150 card linked to the holder's payment account for top-ups",
      "A EUR 120 card whose balance can be withdrawn as cash or exchanged for crypto-assets",
      "A non-reloadable EUR 100 card usable only within a defined network of service providers, with transaction monitoring by the issuer"
    ],
    answer: [3],
    explanation: "AMLR Article 19(7) lets supervisors exempt e-money from some CDD measures only where all conditions are met. The instrument must not be reloadable and must hold no more than EUR 150. It must be used only for the issuer's goods and services or within a network of service providers, and it must not be linked to a payment account or allow the balance to be exchanged for cash or crypto-assets. The issuer must also monitor enough to detect unusual or suspicious transactions. Each of the other products fails at least one condition: reloadability, a link to a payment account, or cash and crypto exchange.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR), Art. 19(7)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }]
  },
  {
    id: "GATE-023", domain: 1, topic: "Dealers in precious metals and stones: FATF cash threshold vs US rule", hy: false, difficulty: "hard",
    q: "A gold bullion dealer operates in a country that follows FATF R.22 and R.23 to the letter, and has a US affiliate. In one month the foreign dealer makes two sales: EUR 40,000 of bars paid by bank transfer, and EUR 16,000 of coins paid in cash. The US affiliate bought and sold more than $50,000 of gold in the previous year and sells mostly to other dealers. Which statement is CORRECT?",
    options: [
      "Under FATF, both foreign sales trigger CDD, because any precious metals sale above USD/EUR 15,000 is covered",
      "Under FATF, only the EUR 16,000 cash sale triggers DNFBP CDD and reporting, while the US affiliate is a dealer under 31 CFR part 1027 regardless of how it is paid",
      "Under FATF, neither sale is covered, because dealers are covered only above USD/EUR 50,000",
      "The US affiliate is covered only if it accepts cash over $10,000, as in the FATF standard"
    ],
    answer: [1],
    explanation: "R.22(c) and R.23(b) apply to dealers in precious metals and stones only when they engage in a cash transaction with a customer at or above the designated threshold, which INR.22/23 sets at USD/EUR 15,000. So under FATF only the EUR 16,000 cash sale is covered, and the runner-up wrongly includes the wire-paid sale. US rules work differently: under 31 CFR 1027.100, a person that bought and sold more than $50,000 of covered goods in the prior year is a dealer that needs an AML program, whatever the payment method. The retailer exemption does not fit a wholesaler.",
    source: [
      { label: "FATF Recommendations (2026), R.22(c), R.23(b) and INR to R.22/23 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
      { label: "31 CFR part 1027 – dealers in precious metals, precious stones, or jewels (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1027" }
    ]
  },
  {
    id: "GATE-024", domain: 1, topic: "EU AMLR: who counts as the customer (Art. 19(6))", hy: false, difficulty: "hard",
    q: "Under Article 19(6) of the EU AMLR, which persons must obliged entities treat as their customers for CDD purposes? (Choose three.)",
    options: [
      "For a real estate agent: both parties to the transaction",
      "For a bank executing a customer's transfer: the recipient of the transfer",
      "For a dealer in precious metals and stones: the supplier of the goods, in addition to the direct customer",
      "For a notary who is the only legal professional intermediating a transaction: both parties to it",
      "For a payment initiation service provider: the payer's account-servicing bank"
    ],
    answer: [0, 2, 3],
    explanation: "Article 19(6) says real estate agents must treat both parties as customers. Notaries, lawyers and other independent legal professionals intermediating a transaction must do the same, to the extent that they are the only legal professional intermediating it. Persons trading in precious metals and stones, high-value goods and cultural goods must treat the supplier of goods as a customer as well as the direct customer. For payment initiation services the customer is the merchant, not a bank. The recitals add that the person for whose benefit a transaction is carried out does not mean the recipient of a transfer the bank makes for its customer.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR), Art. 19(6)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }]
  },
  {
    id: "GATE-025", domain: 3, topic: "Payment providers using agents: FATF R.14", hy: false, difficulty: "medium",
    q: "A licensed remittance and payment provider plans to expand through 300 retail agents in a country that does not license or register agents itself. The business plan says the agents' own know-your-customer checks will be enough and that the provider will audit a sample every three years. Which design BEST meets FATF R.14?",
    options: [
      "Rely on the agents' own controls, since they are separate legal persons responsible for their own compliance",
      "Ask each agent to register voluntarily with the FIU and file its own STRs, with no further oversight",
      "Keep a current list of agents that competent authorities can access, include the agents in the provider's AML/CFT programme, and monitor them for compliance",
      "Delay the launch until the country creates an agent licensing regime, because agents cannot operate without one"
    ],
    answer: [2],
    explanation: "R.14 requires agents of MVTS providers to be licensed or registered by a competent authority, or the provider to maintain a current list of its agents, accessible to competent authorities in the countries where the provider and agents operate. Countries must also ensure that providers include their agents in their AML/CFT programmes and monitor them for compliance. A provider cannot hand responsibility to agents or rely on occasional sample audits. Where there is no agent licensing, the list option meets the standard, so a launch does not have to wait for a new regime.",
    source: [{ label: "FATF Recommendations (2026), R.14 (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }]
  }
]);
