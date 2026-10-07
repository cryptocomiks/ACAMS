// Batch 6 (October 2026): practical cases on misuse of financial products and channels
// (correspondent banking, private banking, cash, RDC, ATMs, prepaid/e-money, PSPs, wires, securities, trusts).
window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  { id: "PROD-001", domain: 1, topic: "Cover payments: bank-to-bank messages hiding customer transfers", hy: true, difficulty: "hard",
    q: "Northbridge Bank clears US dollars for Mariner Bank, a respondent in Country Z. An analyst sees that every week Mariner sends Northbridge bank-to-bank transfer instructions (Swift MT202, not MT202COV) of USD 1 to 3 million in favour of Beacon Bank in another country. The messages name only the two banks. After an RFI, Beacon confirms that each amount was credited to accounts of its corporate customers, and that Mariner had sent the customer details directly to Beacon in separate MT103 messages. Mariner's Wolfsberg CBDDQ was updated last quarter, the amounts are round, and Country Z is not on any FATF list. What is the MOST accurate assessment?",
    options: [
      "These are interbank liquidity transfers between two banks, so FATF R.16 requires no originator or beneficiary information",
      "These are serial payments, so Northbridge should have received the MT103 itself and has no gap to address",
      "Mariner is settling customer transfers by the cover method but with plain bank-to-bank messages, so Northbridge cannot screen or monitor the underlying parties",
      "Mariner is offering nested correspondent services to Beacon, so Northbridge must perform CDD on Beacon's corporate customers"
    ],
    answer: [2],
    explanation: "Under INR.16 (2025), R.16 covers both serial and cover payments, and the exemption for financial institution-to-financial institution transfers applies only where both banks act on their own behalf. Here the funds paid Beacon's customers, so the cover leg should carry the underlying originator and beneficiary data; the Wolfsberg Payment Transparency Standards require PSPs to use the correct message type and not to omit party information to avoid detection by other PSPs. The interbank-liquidity option is the runner-up, but it ignores that the underlying transfers were for customers. The payments are not serial (the MT103 went directly to Beacon), and nothing shows Beacon using Mariner's account as a nested bank; in any case no one must perform CDD on a respondent's customers. The CBDDQ, round amounts and country status are decoys.",
    source: [
      { label: "FATF Recommendations (2026), INR.16 paras 3, 13 and glossary (cover payment)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
      { label: "Wolfsberg Payment Transparency Standards (2023)", url: "https://db.wolfsberg-group.org/assets/13422898-fba1-44b3-9679-a8c7406e9e78/Wolfsberg%20Group%20Payment%20Transparency%20Standards%202023.pdf" }
    ] },

  { id: "PROD-002", domain: 1, topic: "Correspondent banking: volume out of line with the respondent's size", hy: false, difficulty: "medium",
    q: "Alpenrhein Bank provides euro and dollar clearing to Sava Commercial Bank, a respondent with total assets of EUR 400 million that serves local retail and small business customers. Six months ago Sava's monthly clearing volume was EUR 30 million; it is now EUR 1.1 billion, and most payments are between companies with no apparent link to Sava's home country. Sava appointed a new CEO from a large international bank this year. Its country left the FATF list of jurisdictions under increased monitoring last year. Sava's CBDDQ, updated last month, says it offers no downstream correspondent services. Which fact should concern the correspondent MOST?",
    options: [
      "The appointment of a new CEO, because changes in management alter the respondent's risk profile",
      "The country's recent exit from the FATF list, because recently delisted countries remain high risk",
      "The CBDDQ's statement that Sava offers no downstream services, because questionnaires are often wrong",
      "The rise in volume to a level far beyond what Sava's size and business would explain"
    ],
    answer: [3],
    explanation: "The EBA ML/TF Risk Factors Guidelines (8.6) list as a risk factor a transaction amount that is not in line with what the correspondent expects from the nature and size of the respondent, and the Wolfsberg 2022 Principles cite material or unexplained changes in volume as review triggers. A small retail bank clearing EUR 1.1 billion a month for unrelated foreign companies suggests undisclosed nesting or pass-through business. A management change and a recent delisting are relevant background but are not red flags in themselves, and the CBDDQ is a starting point that the volume data now contradict, which is why the volume is the fact to act on.",
    source: [
      { label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), Guideline 8", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" },
      { label: "Wolfsberg Correspondent Banking Principles (2022), section 7", url: "https://db.wolfsberg-group.org/assets/d39a5072-7fb6-4e31-9a87-9e54021ce71f/Wolfsberg%20Correspondent%20Banking%20Principles%202022.pdf" }
    ] },

  { id: "PROD-003", domain: 1, topic: "Virtual account numbers that disguise a payment's country (R.16, 2025)", hy: false, difficulty: "hard", changed: "FATF R.16 revision, June 2025",
    q: "Lindqvist Bank, in an EU Member State, receives hundreds of incoming credit transfers whose payer accounts have IBANs with its own country's code. The IBANs belong to Paynex, a domestic e-money institution. An investigation shows that Paynex issues these 'virtual IBANs' to customers of a partner payment firm based in Country H, a jurisdiction the bank rates high risk; the funds are actually held and the payers serviced in Country H. Because the IBANs look domestic, the bank's high-risk geography rules never fire. The payments are each below EUR 3,000 and carry the payer's name. Under FATF R.16 as revised in June 2025, what is the BEST assessment?",
    options: [
      "No issue arises, because the IBAN country code is the accepted way to identify where the payer's institution is located",
      "Account numbers must not disguise the country of the institution servicing the payer's account, so this is a transparency gap the bank should address",
      "The transfers are domestic EEA payments, so R.16 requires only an account number and no further review",
      "The transfers are below the EUR 3,000 travel-rule threshold, so originator information need not be accurate"
    ],
    answer: [1],
    explanation: "The revised INR.16 (para 7) requires that payment information make it possible to identify which institution services the originator's and beneficiary's accounts and in which country, and states that account numbers should not be used to disguise that country. Virtual IBANs that make Country H accounts look domestic defeat the bank's geography controls, so it should identify the true servicing institution, adjust monitoring and consider reporting. The runner-up treats the payments as domestic, but here the servicing institution is outside the EEA, so the chain is cross-border. The IBAN code is the very disguise at issue, and R.16's de minimis threshold is no higher than USD/EUR 1,000, not 3,000.",
    source: [
      { label: "FATF Recommendations (2026), INR.16 paras 6-8", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
      { label: "Wolfsberg Payment Transparency Standards (2023), virtual account numbers", url: "https://db.wolfsberg-group.org/assets/13422898-fba1-44b3-9679-a8c7406e9e78/Wolfsberg%20Group%20Payment%20Transparency%20Standards%202023.pdf" }
    ] },

  { id: "PROD-004", domain: 2, topic: "Shell bank prohibition: indirect services through a respondent (31 CFR 1010.630)", hy: true, difficulty: "hard",
    q: "A US bank maintains a correspondent account for Coralline Bank in Country M. Coralline's certification under 31 CFR 1010.630, received last year, states that it does not serve foreign shell banks. Monitoring now shows regular payments through the account for 'Westbay Trust Bank Ltd', licensed by a small island jurisdiction. Westbay's only address is its registered agent's office, it has no staff in any country, and it is not affiliated with any banking group. Coralline says Westbay holds a valid banking licence, and the business line notes that Westbay is Coralline's customer, not the US bank's. What does the regulation require the US bank to do?",
    options: [
      "Take reasonable steps to stop Coralline's account being used to serve Westbay, and ask Coralline to verify or correct its certification",
      "Nothing, because the shell bank prohibition applies only to accounts that the US bank itself opens for a shell bank",
      "Treat Westbay as a regulated affiliate, because a banking licence from its home regulator means it is supervised",
      "Close Coralline's account within 10 business days, because any link to a shell bank requires immediate termination"
    ],
    answer: [0],
    explanation: "Section 1010.630(a)(1)(ii) requires reasonable steps to ensure a foreign bank's correspondent account is not used to indirectly provide banking services to a foreign shell bank, and 1010.630(c) requires the bank to ask the foreign bank to verify or correct a certification it has reason to believe is no longer correct (with closure if this is not done within 90 days). Westbay has no physical presence, so it is a shell bank. The regulated-affiliate exception is the runner-up, but it covers only a shell bank affiliated with a bank that has a physical presence and supervised by that bank's regulator; a licence alone does not qualify. The 10-business-day closure applies to a Treasury or Attorney General summons notice, not to this situation.",
    source: [
      { label: "31 CFR 1010.630 (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-F/section-1010.630" },
      { label: "31 CFR 1010.605 definitions: foreign shell bank, regulated affiliate (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-F/section-1010.605" }
    ] },

  { id: "PROD-005", domain: 2, topic: "Foreign bank certifications: deadlines and recordkeeping (calculation)", hy: false, difficulty: "hard",
    q: "On Monday, 2 March 2026, a US bank opens a correspondent account for Kestrel Bank, a foreign bank. On Monday, 10 May 2027, the bank learns that information in Kestrel's certification on owners and its agent for service of process may be wrong and asks Kestrel to verify or correct it. Under 31 CFR 1010.630, which statements are correct? (Choose two.)",
    options: [
      "Kestrel must provide a recertification at least once every five years",
      "If no certification or equivalent documentation is obtained by 1 April 2026, the bank must close all of Kestrel's correspondent accounts within a commercially reasonable time",
      "The bank may destroy the certification five years after it receives it, even while the account remains open",
      "If Kestrel has not verified or corrected the information by 8 August 2027, the bank must close its correspondent accounts within a commercially reasonable time",
      "After an account is closed for lack of certification, the bank may reopen it once Kestrel promises to send the certification within 30 days"
    ],
    answer: [1, 3],
    explanation: "For accounts opened after 28 October 2002, the certification (or equivalent documentation) must be obtained within 30 calendar days of opening (2 March + 30 days = 1 April 2026) and at least once every three years after that, not five. When the bank undertakes to verify information, it must close the accounts if verification or correction is not obtained within 90 calendar days (10 May 2027 + 90 days = 8 August 2027). Records must be kept for at least five years after the bank no longer maintains any correspondent account for the foreign bank, and a closed account may not be reestablished until the certification is actually obtained.",
    source: [
      { label: "31 CFR 1010.630(b)-(e) (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-F/section-1010.630" }
    ] },

  { id: "PROD-006", domain: 3, topic: "EDD for offshore-licensed respondents: identifying owners (10% test, calculation)", hy: false, difficulty: "hard",
    q: "A US bank is onboarding Harbor Isle Bank, which operates under an offshore banking licence and whose shares are not publicly traded. Its ownership is: Lantern Holdings Ltd, wholly owned by Paulo Pereira, holds 30% of the common shares; Daniel Okoro holds 7% of the common shares and his sister Amara holds 4%; Ines Varga holds 15% of the non-voting preferred shares (a separate class); and Kenji Lee holds 9% of the common shares. The remaining shares are widely held. Under 31 CFR 1010.610(b), whose identity and ownership interest must the bank determine?",
    options: [
      "Only Lantern Holdings and Paulo Pereira, because only holdings of 25% or more of voting securities count",
      "Lantern Holdings and Pereira, and Daniel and Amara Okoro, but not Varga, because non-voting shares are ignored",
      "Lantern Holdings and Pereira, Daniel and Amara Okoro, and Ines Varga, but not Kenji Lee",
      "Every shareholder named, including Kenji Lee, because an offshore licence requires identifying all shareholders"
    ],
    answer: [2],
    explanation: "For a foreign bank under an offshore licence, 1010.610(b)(3) requires the bank to identify each owner of a non-publicly traded foreign bank, defining an owner as anyone who directly or indirectly owns, controls or has power to vote 10% or more of any class of securities, with members of the same family treated as one person. Lantern (30%) and Pereira (indirectly 30%) qualify, the Okoro siblings together hold 11%, and Varga holds 15% of a class, while Lee's 9% falls below the threshold. The 25%-of-voting-securities test is the definition of 'owner' used for the 1010.630 ownership records, not for this enhanced due diligence. That makes it the runner-up, but it is the wrong rule here.",
    source: [
      { label: "31 CFR 1010.610(b)-(c) (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-F/section-1010.610" },
      { label: "31 CFR 1010.605(j) owner and same family (eCFR)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-F/section-1010.605" }
    ] },

  { id: "PROD-007", domain: 3, topic: "Correspondent alerts: targeted RFIs, not 'KYCC'", hy: true, difficulty: "hard",
    q: "Monitoring at Corvane Bank flags three USD 400,000 payments sent through its correspondent account for Banco Austral. The originator is Tamaris Trading, a customer of Banco Austral, and the beneficiary is a jewellery wholesaler in a free trade zone. Banco Austral has answered past RFIs on time and its controls were rated satisfactory at the last review. The head of correspondent banking proposes requiring Banco Austral to send full KYC files on every customer that uses the account, and to exit the relationship if it refuses. What is the BEST response, according to the FATF's 2016 correspondent banking guidance?",
    options: [
      "Require full KYC files on all of Banco Austral's customers, because the correspondent is responsible for knowing its customer's customers",
      "Exit the relationship now, because payments to a free trade zone jeweller show Banco Austral's controls have failed",
      "Take no action, because the correspondent has no responsibility for transactions of the respondent's customers",
      "Send a targeted RFI on the flagged payments, which may include information on Tamaris, then review the answers and its own controls"
    ],
    answer: [3],
    explanation: "The FATF guidance states that there is no expectation or requirement for a correspondent to conduct CDD on its respondent's customers. Where monitoring flags a transaction, the correspondent should send a request for information targeted on that transaction, which may extend to information about the respondent's customer, and then review its controls to detect similar transactions. Exiting is the runner-up, but one alert at a respondent with a good RFI record does not justify termination before the facts are known. Doing nothing ignores the duty to monitor the respondent's transactions and report suspicion.",
    source: [
      { label: "FATF Guidance on Correspondent Banking Services (2016), paras 3 and 32", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/FATF_Guidances/Guidance-Correspondent-Banking-Services.pdf" }
    ] },

  { id: "PROD-008", domain: 1, topic: "Private banking: Lombard-backed loan-back of offshore funds", hy: false, difficulty: "hard",
    q: "Rafael Montes, a resident of Country R, holds EUR 6 million at Lakeshore Private Bank's affiliate in another jurisdiction through a BVI company. He cannot clearly explain how the BVI company earned the money. He asks Lakeshore's branch in Country R for a EUR 5 million mortgage on a villa there, secured by a pledge over the BVI company's deposits. Instalments are to be paid from the BVI account, and he will tell the Country R tax authority that the villa was bought with a bank loan. He is not a PEP, his credit score is excellent, and the loan-to-value ratio is within policy. What is this arrangement MOST likely designed to do?",
    options: [
      "Bring undeclared offshore funds into Country R disguised as legitimate loan proceeds",
      "Lower Montes's borrowing costs by using low-yield offshore deposits as collateral",
      "Shield the villa from Montes's creditors by keeping its legal title in a BVI company",
      "Avoid currency risk by matching a euro loan with euro deposits held abroad"
    ],
    answer: [0],
    explanation: "The EBA guideline for wealth management names lending secured against assets in other jurisdictions, cross-border arrangements in which assets are deposited with another institution of the same group, and complex vehicles with unclear ultimate ownership as risk-increasing factors, and notes that the sector is vulnerable to clients who wish to hide the origin of funds or evade tax. Here the pledged offshore money of unexplained origin effectively funds the villa, while the loan gives it a clean explanation at home, which is a loan-back. Cheaper borrowing and currency matching are ordinary motives, but they do not explain the unexplained source and the planned declaration to the tax authority. The villa is bought in Montes's own name, so asset shielding through a BVI title does not fit. His credit score and the loan-to-value ratio are decoys.",
    source: [
      { label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), Guideline 12 (wealth management)", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }
    ] },

  { id: "PROD-009", domain: 1, topic: "Private banking: misuse of internal concentration accounts", hy: false, difficulty: "medium",
    q: "A senior private banker at Halden Private Bank processes payments for a long-standing client in an unusual way. He debits the client's account, books the funds to one of the bank's internal suspense accounts, and then sends wires from that suspense account, so receiving banks see Halden Bank as the originator. He says the client values discretion and that the client's identity is fully documented internally. The client's file is complete and the client is not a PEP. What is the MAIN problem?",
    options: [
      "The banker should have used a numbered account, which allows the client's name to be omitted from wires",
      "Using an internal account breaks the link between the client's identity and the movement of funds, which the bank must not allow",
      "Internal suspense accounts may be used for client payments only with the approval of the head of private banking",
      "There is no problem, because the client's identity is held on file and can be produced on request"
    ],
    answer: [1],
    explanation: "The Wolfsberg AML Principles for Private Banking (1.5) state that the bank will not permit its internal non-client ('concentration') accounts to be used to prevent the association of a client's identity with movements of funds on the client's behalf, because this defeats monitoring. It also deprives the next banks in the chain of the originator information that FATF R.16 expects. Numbered accounts are no answer, because wires from them must still reflect the true name of the account holder (principle 1.4). Internal approval cannot make an inherently concealing practice acceptable.",
    source: [
      { label: "Wolfsberg AML Principles for Private Banking (2012), 1.4-1.5", url: "https://db.wolfsberg-group.org/assets/7d384fb4-8c82-4669-acb8-621aed03e928/Wolfsberg%20Private%20Banking%20Principles.pdf" }
    ] },

  { id: "PROD-010", domain: 1, topic: "Cash-intensive businesses used as fronts (2024 NMLRA)", hy: true, difficulty: "hard",
    q: "Velasco Auto Repair LLC is a three-bay garage with two mechanics. It deposits USD 8,000 to 15,000 in cash almost every day at its local branch, and the bank files CTRs whenever a day's cash exceeds USD 10,000. Card receipts are small and stable. The owner, Marco Velasco, recently opened business accounts at two other banks, where he also deposits cash and buys cashier's checks. He used the cashier's checks to buy four houses he describes as 'rental properties'. The garage is licensed, Velasco has no criminal record, and all deposits are made by him in person. Which typology is MOST likely?",
    options: [
      "Structuring, because the deposits are timed to avoid currency transaction reporting",
      "A funnel account, because cash enters one account and quickly leaves through cashier's checks",
      "Trade-based money laundering, because the garage buys imported spare parts",
      "A front business mixing illicit cash with legitimate revenue and then moving it into real estate"
    ],
    answer: [3],
    explanation: "The 2024 National Money Laundering Risk Assessment describes criminals using cash-intensive businesses, including auto repair shops, as fronts that mix illicit proceeds with legitimate revenue. Its case of a beauty salon owner who opened accounts at several banks, made large cash deposits, bought cashier's checks and acquired properties described as 'rental properties' closely matches this pattern. Cash far out of line with a small garage's card sales points to commingling. Structuring is the runner-up, but CTRs are being filed, so the deposits are not being kept under the threshold. A funnel account needs deposits from many places by different people, and nothing suggests trade misinvoicing.",
    source: [
      { label: "US Treasury, 2024 National Money Laundering Risk Assessment, Cash-Intensive Businesses and Front Companies", url: "https://home.treasury.gov/system/files/136/2024-National-Money-Laundering-Risk-Assessment.pdf" }
    ] },

  { id: "PROD-011", domain: 1, topic: "Remote deposit capture used by a foreign MSB", hy: false, difficulty: "hard",
    q: "Cambio Sol, a currency exchange licensed in Country M, has held a US dollar account at a US bank for years and used to send deposits by courier pouch. Last year the bank gave it remote deposit capture (RDC). Session logs show that the scanner is operated from Country M. The deposits are mostly sequentially numbered US money orders and third-party checks endorsed over to Cambio Sol, and volumes have tripled since RDC replaced the pouch. Cambio Sol's licence is current and its local regulator has not taken action against it. What is the MOST appropriate response?",
    options: [
      "Treat the deposits like any domestic RDC activity, because the items are US-dollar instruments drawn on US banks",
      "Apply additional due diligence and monitoring suited to a foreign MSB capturing deposits abroad, and assess suspicious activity",
      "Rely on Cambio Sol's own AML programme, because it is licensed and supervised in Country M",
      "Terminate all foreign MSB relationships, because RDC by foreign customers is prohibited"
    ],
    answer: [1],
    explanation: "The FFIEC's Risk Management of Remote Deposit Capture guidance warns that the growing use of RDC by foreign correspondents and foreign MSBs to replace pouch and instrument clearing raises money laundering risks. It says additional due diligence may be needed where the capture device is in a foreign location or the customer is high risk, with suitability reviews that may include site visits. Sequentially numbered money orders and third-party checks, with tripled volume, call for monitoring and possibly a SAR. A licence does not replace the bank's own due diligence, and RDC for foreign customers is not prohibited, so a blanket exit would be de-risking without assessment.",
    source: [
      { label: "FFIEC Risk Management of Remote Deposit Capture (FDIC FIL-4-2009 attachment)", url: "https://www.fdic.gov/news/financial-institution-letters/2009/fil09004a.html" }
    ] },

  { id: "PROD-012", domain: 1, topic: "ATMs: cross-border card cash withdrawals (R.16, 2025)", hy: true, difficulty: "hard", changed: "FATF R.16 revision, June 2025",
    q: "Harbourview Bank runs ATMs in a border town. Over three weeks, 40 prepaid cards issued by one card issuer in Country Q withdraw the daily maximum between 2 a.m. and 4 a.m. at the same two machines. Camera images show the same three people making most withdrawals. Harbourview has no relationship with the cardholders and receives only the card number with each withdrawal. In a country that has implemented FATF R.16 as revised in June 2025, what can Harbourview obtain to support its analysis and any STR?",
    options: [
      "Nothing beyond the card number, because card transactions are fully exempt from R.16",
      "The cardholder's name, address and date of birth, which must accompany each withdrawal as for a wire transfer",
      "The cardholder's name, which the issuer must send on request within three business days",
      "The full CDD file on each cardholder, which the issuer must send within five business days"
    ],
    answer: [2],
    explanation: "The revised INR.16 (para 19) sets requirements for cross-border cash withdrawals with a credit, debit or prepaid card through a different institution: the card number must accompany the withdrawal, and the cardholder's name must be sent to the acquiring institution on request within three business days. Harbourview can therefore request the names behind the 40 cards and use them in its investigation and STR. The exemption for card purchases of goods and services does not cover cash withdrawals. R.16 requires neither full originator details with each withdrawal nor the issuer's CDD file.",
    source: [
      { label: "FATF Recommendations (2026), INR.16 paras 16-19", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ] },

  { id: "PROD-013", domain: 3, topic: "RDC monitoring controls: duplicates, limits and velocity", hy: false, difficulty: "medium",
    q: "Ridgeway Bank finds that a small business customer deposited the same USD 4,800 check through remote deposit capture and then cashed it at another bank. In the same month the customer uploaded far more files than usual, all just under its RDC deposit limit. The bank is redesigning its RDC oversight using the FFIEC's RDC guidance. Which controls does that guidance specifically describe for monitoring this kind of misuse? (Choose two.)",
    options: [
      "Reports that recognise and intercept duplicate files and items, and that flag breaches of deposit thresholds",
      "Relying on the paying bank to catch duplicates under Check 21, so the depositary bank needs no detection",
      "Exempting existing account holders from the suitability review for RDC",
      "Assessing RDC risk once, at product launch, and not repeating it",
      "Velocity metrics such as file numbers and sizes, transaction value and volume, and returned items"
    ],
    answer: [0, 4],
    explanation: "The FFIEC guidance says reports on duplicate entries (file and item recognition and interception) and on violations of deposit thresholds help monitor for unauthorised activity, and that velocity metrics such as file size and number, dollar value and volume, and returned items help detect fraud. The guidance also expects suitability reviews of new and existing customers and a risk assessment before RDC is offered and periodically afterwards. A depositary bank cannot hand duplicate detection over to the paying bank.",
    source: [
      { label: "FFIEC Risk Management of Remote Deposit Capture (FDIC FIL-4-2009 attachment)", url: "https://www.fdic.gov/news/financial-institution-letters/2009/fil09004a.html" }
    ] },

  { id: "PROD-014", domain: 1, topic: "E-money and prepaid cards: customer risk factors (EBA)", hy: false, difficulty: "medium",
    q: "Lumora Money, an EU e-money issuer, sells a reloadable card marketed as a gift card for one shopping centre. A review of one customer, Petra Kovac, shows the following. Which facts are risk-increasing customer factors under the EBA ML/TF Risk Factors Guidelines? (Choose two.)",
    options: [
      "She funds every load from a current account in her sole name at an EU bank",
      "The card's use is restricted to merchants in the issuer's home country",
      "Her loads are always just below the product's value limits",
      "The card is used from several IP addresses at the same time, and recently abroad",
      "She has used the card for two years at the shopping centre's supermarkets"
    ],
    answer: [2, 3],
    explanation: "Guideline 10.6 lists, among risk-increasing customer factors, transactions always just below value or transaction limits, use of the product by several people unknown to the issuer (for example from several IP addresses at once), and use for a purpose it was not designed for, such as overseas use of a shopping-centre gift card. Funding from an account in the customer's own name at an EEA institution and restricting use to domestic merchants are risk-reducing product factors in Guideline 10.5. Long-standing ordinary use matches the product's purpose.",
    source: [
      { label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), Guideline 10", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }
    ] },

  { id: "PROD-015", domain: 1, topic: "Transaction laundering through a merchant account", hy: true, difficulty: "hard",
    q: "Brightpay Merchant Services onboarded Bloomly Flowers, an online florist, expecting card sales of about EUR 20,000 a month. Eight months later Bloomly processes EUR 900,000 a month. Most transactions occur between midnight and 5 a.m., come from cardholders in countries where Bloomly does not deliver, and cluster at a few fixed amounts. The chargeback rate is 4%, within Brightpay's tolerance. A test purchase on a link found in a forum leads to an unlicensed online casino whose checkout shows Bloomly's name as the merchant. Bloomly's owner says the growth comes from a new marketing campaign. Which typology is MOST likely?",
    options: [
      "Transaction laundering, in which a hidden business's payments are processed through the florist's merchant account",
      "Card testing, in which fraudsters make small purchases to check whether stolen card numbers work",
      "Friendly fraud, in which genuine customers dispute legitimate purchases to obtain refunds",
      "A bust-out scheme, in which the merchant builds volume and then disappears with advance settlements"
    ],
    answer: [0],
    explanation: "The 2024 National Money Laundering Risk Assessment notes that payment processors and merchants have been used to disguise merchant activity, including by misrepresenting the transactions processed, using shell companies or fake websites and concealing the underlying merchant. The casino checkout showing Bloomly's name, volumes far above the expected profile and sales to countries Bloomly does not serve all point to an undisclosed merchant. The EBA Guidelines (10.9) also expect firms to understand an online merchant's customers and expected volumes so they can spot such anomalies. Card testing involves many small authorisations, not EUR 900,000 of settled sales. A chargeback rate within tolerance does not rule out laundering, and nothing indicates a bust-out yet.",
    source: [
      { label: "US Treasury, 2024 National Money Laundering Risk Assessment, Third-Party Payment Processors", url: "https://home.treasury.gov/system/files/136/2024-National-Money-Laundering-Risk-Assessment.pdf" },
      { label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), para 10.9", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }
    ] },

  { id: "PROD-016", domain: 3, topic: "Exempt low-value e-money: monitoring and disabling products", hy: false, difficulty: "hard",
    q: "An EU e-money issuer sells a non-reloadable prepaid card that qualifies for its country's low-value exemption from identifying and verifying customers. Monitoring shows that about 300 cards were bought in two weeks by a handful of buyers at the same two kiosks, and that the cards were used only at online gambling sites, from a few devices. The product manager argues that because the product is exempt from CDD, the issuer has no monitoring or reporting obligations for it. What is the BEST course of action?",
    options: [
      "Accept the product manager's view, because the exemption covers all AML/CFT obligations for the product",
      "Withdraw the exemption for the whole product line and verify every past buyer's identity before any other step",
      "File an STR now and leave the cards active, because disabling them could tip off the buyers",
      "Treat the pattern as unusual, disable the cards until the issuer is satisfied there is no suspicion, and report if suspicion remains"
    ],
    answer: [3],
    explanation: "The EBA Guidelines (10.13-10.14) state that the low-value exemption does not extend to ongoing monitoring of transactions or to identifying and reporting suspicious transactions. They name use of the product in ways it was not designed for and links between products and the same devices as patterns to detect, and note that the issuer may disable the product until it is satisfied there are no grounds for suspicion. Filing an STR at once is the runner-up, but it skips the analysis and leaves the cards available for misuse. Disabling a card is a normal control, not tipping off in itself. Re-verifying every past buyer of an exempt product goes beyond what the risk calls for as a first step.",
    source: [
      { label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), paras 10.12-10.14", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }
    ] },

  { id: "PROD-017", domain: 1, topic: "Low-priced securities: deposit red flags (FINRA RN 19-18)", hy: true, difficulty: "medium",
    q: "Harlan Vance opens an account at a retail broker-dealer and deposits a physical certificate for 4 million shares of Quorvex Biotech, quoted over the counter at USD 0.04. He says he got the shares two months ago by converting a note issued by the company. Which facts are red flags for the deposit of securities listed in FINRA Regulatory Notice 19-18? (Choose two.)",
    options: [
      "The certificate has no restrictive legend, even though he acquired the shares from the issuer only two months ago",
      "He gives a verified US home address and a valid tax identification number",
      "Quorvex has changed its name and business twice in the past year and reports no revenue",
      "He asks to receive account statements electronically rather than by post",
      "He pays the firm's standard commission rate on his first sale"
    ],
    answer: [0, 2],
    explanation: "FINRA Regulatory Notice 19-18 lists, among red flags in deposits of securities, a lack of a restrictive legend that seems inconsistent with when and how the customer acquired the shares, and deposits of shares issued by a company that has been through several recent name changes or business combinations, or has no apparent business, revenues or products. Such patterns can indicate an unregistered distribution or a pump-and-dump. A verified identity, electronic statements and standard commissions are ordinary features of an account.",
    source: [
      { label: "FINRA Regulatory Notice 19-18 (red flags)", url: "https://www.finra.org/rules-guidance/notices/19-18" }
    ] },

  { id: "PROD-018", domain: 1, topic: "Securities account used as a conduit for funds", hy: false, difficulty: "medium",
    q: "Orbis Consulting LLC opened a brokerage account eight months ago, stating that it would invest surplus cash. Since then it has deposited 14 checks from different third parties, none related to the others, and within days wired most of the money to accounts at banks in three other countries. Apart from one small purchase of an index fund, it has made no trades. When asked, Orbis says the wires cover 'operating expenses'. The account has margin privileges, which it has never used. Which concern does this activity MOST directly raise?",
    options: [
      "Possible insider trading, because a consulting firm may hold confidential client information",
      "Possible market manipulation, because the index fund purchase could move the market",
      "The account is being used as a depository or conduit for transfers, with little securities activity",
      "Excessive use of margin credit, which may expose the broker-dealer to credit losses"
    ],
    answer: [2],
    explanation: "FINRA Regulatory Notice 19-18 lists as money-movement red flags a securities account used for payments or outgoing wires with little or no securities activity, which makes it look like a depository account or a conduit even when the customer says the wires are for business operating needs. It also lists incoming third-party checks and transfers to institutions other than those the funds came from, especially in different countries. Nothing points to trading on inside information, a small index fund purchase cannot move the market, and the margin facility is unused.",
    source: [
      { label: "FINRA Regulatory Notice 19-18 (red flags in money movements)", url: "https://www.finra.org/rules-guidance/notices/19-18" }
    ] },

  { id: "PROD-019", domain: 3, topic: "Pooled accounts of an unregulated payment facilitator (EBA)", hy: false, difficulty: "hard",
    q: "An EU bank's corporate customer, Zentrix Pay, is a payment facilitator. It is not licensed or registered as an obliged entity anywhere. It receives card settlements for about 2,000 small online sub-merchants into one account at the bank and pays each sub-merchant weekly. Zentrix asks the bank to treat the account as a pooled account under simplified due diligence. It offers to let the bank sample-test its onboarding files and to sign a contract promising to provide sub-merchant data on request. What should the bank do under the EBA ML/TF Risk Factors Guidelines?",
    options: [
      "Apply SDD, because the contract and sample-testing meet the conditions for pooled accounts",
      "Apply full CDD, treating the sub-merchants as beneficial owners of the funds and verifying their identities",
      "Apply SDD to Zentrix but EDD to each sub-merchant whose turnover exceeds EUR 15,000",
      "Refuse the account, because the Guidelines prohibit pooled accounts for payment businesses"
    ],
    answer: [1],
    explanation: "Guideline 9.16 says that where a customer opens a pooled account to administer its own clients' funds, the bank should apply full CDD, treating the customer's clients as beneficial owners of the funds and verifying their identities. SDD under 9.18 is possible only where risk is low and the customer is itself an obliged entity, or a firm subject to equivalent AML/CFT rules, supervised for compliance. The contract and sample-testing are additional conditions, so they are the runner-up but cannot make up for Zentrix being unregulated. The Guidelines do not prohibit such accounts, and they set no EUR 15,000 sub-merchant rule.",
    source: [
      { label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), paras 9.16-9.19", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }
    ] },

  { id: "PROD-020", domain: 1, topic: "Trust accounts: settlor keeping effective control", hy: true, difficulty: "hard",
    q: "Fairhaven Bank holds the account of the Halvorsen Family Trust, a discretionary trust whose trustee is Northgate Trustees Ltd, a licensed corporate trustee. The settlor, Erik Halvorsen, is alive and is not a beneficiary; the beneficiaries are his three adult children. The trust's EUR 8 million came from the documented sale of Erik's company. Over the past year, Northgate made 23 payments within hours of emails from Erik's personal address: his credit card bills, his yacht crew's wages and invoices from a new company he owns. No payments went to the children. The trust deed is in order. What does this pattern MOST likely show?",
    options: [
      "The settlor is exercising effective control over the trust, which may be a façade, so he should be treated as a person controlling it",
      "The children must be re-verified, because discretionary beneficiaries become beneficial owners when payments are made",
      "Nothing of concern, because the settlor was identified at onboarding and the source of funds is documented",
      "The trustee is acting outside its licence, so the issue is solely one for the trustee's supervisor"
    ],
    answer: [0],
    explanation: "FATF R.10 and R.25 require identification of the settlor, trustee, protector, beneficiaries and any other natural person exercising ultimate effective control over the trust. A trustee that rubber-stamps the settlor's personal spending, while the named beneficiaries receive nothing, suggests that the settlor keeps control and the trust may be a façade hiding his continuing ownership. The bank should treat him as a controlling person, reassess the risk and consider an STR. The children have received nothing, so a payout-based check on them is not the issue. A documented source of funds does not explain how the funds are used, and the bank keeps its own monitoring duties whatever the trustee's supervisor does.",
    source: [
      { label: "FATF Recommendations (2026), INR.10 (legal arrangements) and INR.25", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ] },

  { id: "PROD-021", domain: 1, topic: "Correspondent services: what lowers inherent risk", hy: true, difficulty: "medium",
    q: "A bank is risk-rating the different services it provides to other banks. Which arrangement is generally associated with LOWER ML/TF risk?",
    options: [
      "A respondent lets other banks in its region clear payments through its account (downstream clearing)",
      "A respondent's customers write checks and give wire instructions directly on its account (payable-through)",
      "Other entities in the respondent's group use its account although they were not subject to the correspondent's due diligence",
      "The relationship is limited to an exchange of SWIFT RMA keys, with no account for the counterparty"
    ],
    answer: [3],
    explanation: "The EBA Guidelines (8.4-8.5) list nesting or downstream clearing, use of the account by group entities not subject to due diligence, and payable-through accounts as factors that increase risk. They list a relationship limited to a SWIFT Relationship Management Application (RMA) capability, without a payment account, as a factor that may reduce risk. The FATF's 2016 guidance likewise notes that the mere exchange of RMA keys is not correspondent banking.",
    source: [
      { label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), paras 8.4-8.5", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" },
      { label: "FATF Guidance on Correspondent Banking Services (2016), para 9", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/FATF_Guidances/Guidance-Correspondent-Banking-Services.pdf" }
    ] },

  { id: "PROD-022", domain: 1, topic: "Private banking: numbered accounts and wire transparency", hy: false, difficulty: "medium",
    q: "Anton Reyes, a private banking client, holds a numbered account at Cresthill Private Bank. The bank has identified and verified him and his source of wealth. He asks that outgoing wires from the account show only 'Account No. 44871' as the originator, so recipients do not learn his name. His relationship manager supports the request, noting that the account is numbered precisely to protect his privacy. How should the bank respond?",
    options: [
      "Agree, because numbered accounts exist to keep the client's name confidential from third parties",
      "Agree, provided the client signs a waiver accepting responsibility for any delays at receiving banks",
      "Refuse, because wires from numbered accounts must reflect the account holder's true name",
      "Refuse, and close the numbered account, because numbered accounts are prohibited"
    ],
    answer: [2],
    explanation: "Under the Wolfsberg AML Principles for Private Banking (1.4), numbered or alternate-name accounts are acceptable only if the bank has established the identity of the client and beneficial owner, they get the same scrutiny as other accounts, and wires from them must reflect the true name of the account holder. FATF R.16 also requires the originator's name to accompany wire transfers. Numbered accounts are not prohibited, so closure is unnecessary, and a client waiver cannot set aside payment transparency rules.",
    source: [
      { label: "Wolfsberg AML Principles for Private Banking (2012), 1.4", url: "https://db.wolfsberg-group.org/assets/7d384fb4-8c82-4669-acb8-621aed03e928/Wolfsberg%20Private%20Banking%20Principles.pdf" }
    ] },

  { id: "PROD-023", domain: 1, topic: "Bundled 'many-to-many' remittances through a correspondent account", hy: false, difficulty: "hard",
    q: "Corvane Bank clears US dollars for Banco Litoral. Each day Litoral sends 3 to 5 payments of USD 300,000 to USD 900,000. Each names as originator Rapido Remesas SA, a licensed exchange house that banks with Litoral, and as beneficiary a single payment company in another region. Litoral explains that each payment combines hundreds of remittances from different senders to different recipients. Rapido's licence is current, and each payment message is fully populated for the two companies named. What is the MOST significant risk for Corvane?",
    options: [
      "Concentration risk, because a large share of Litoral's dollar flows depends on one exchange house",
      "Payments that bundle many senders to many recipients hide the underlying parties, so Corvane cannot screen or monitor them",
      "Bundled 'one-to-many' payroll payments, which are low risk because they come from a single originator",
      "Litoral has filled in the messages correctly, so Corvane bears no residual sanctions or AML risk"
    ],
    answer: [1],
    explanation: "The Wolfsberg Payment Transparency Standards distinguish 'one-to-many' and 'many-to-one' bundling, where risks are less significant, from 'many-to-many' bundling of remittances from various originators to various beneficiaries, which gives intermediaries less transparency and raises risk, especially cross-border. Intermediaries can only screen the information in the message, so the underlying senders and recipients are invisible to Corvane. The EBA Guidelines (8.6) also flag respondents that do significant remittance business for exchange houses. A message correctly filled in for the two companies named is the runner-up, but it still leaves the real parties hidden. The flows are not payroll, and concentration is a business risk rather than the main financial crime risk.",
    source: [
      { label: "Wolfsberg Payment Transparency Standards (2023), section 1 (bundled payments)", url: "https://db.wolfsberg-group.org/assets/13422898-fba1-44b3-9679-a8c7406e9e78/Wolfsberg%20Group%20Payment%20Transparency%20Standards%202023.pdf" },
      { label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), para 8.6", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }
    ] },

  { id: "PROD-024", domain: 1, topic: "Correspondent account used by an undisclosed group entity", hy: false, difficulty: "hard",
    q: "Corvane Bank maintains a correspondent account for Norvale Bank, a well-supervised bank in Country N with a strong compliance record. Over two quarters, a growing share of payments through the account are ordered by Norvale Bank Offshore Ltd, a subsidiary licensed in another jurisdiction under an offshore banking licence that bars it from dealing with local residents. The subsidiary is not Corvane's customer and was never covered by its due diligence. Norvale says the subsidiary follows the group's AML policy. What should Corvane do FIRST?",
    options: [
      "Find out how the subsidiary uses the account and perform due diligence on it, restricting its use until that is done",
      "Accept the activity, because the subsidiary is covered by the parent's group-wide AML programme",
      "File a SAR on every payment ordered by the subsidiary to date",
      "Close Norvale's account, because offshore-licensed banks may not use correspondent accounts"
    ],
    answer: [0],
    explanation: "The EBA Guidelines (8.4) list use of the account by other entities in the respondent's group that have not been subject to the correspondent's due diligence as a risk-increasing factor. The Wolfsberg 2022 Principles warn that a branch or subsidiary, especially one operating under an offshore banking licence, may have risks different from its parent's. Corvane should therefore understand and assess the subsidiary and limit its use of the account meanwhile. Relying on the parent's programme is the runner-up, but the subsidiary's own risks have not been assessed. A blanket SAR or immediate closure would come before any analysis, and offshore-licensed banks are not barred from correspondent services, though in the US they trigger enhanced due diligence.",
    source: [
      { label: "EBA ML/TF Risk Factors Guidelines (EBA/GL/2021/02), para 8.4", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" },
      { label: "Wolfsberg Correspondent Banking Principles (2022), section 4 and FAQ 2", url: "https://db.wolfsberg-group.org/assets/d39a5072-7fb6-4e31-9a87-9e54021ce71f/Wolfsberg%20Correspondent%20Banking%20Principles%202022.pdf" }
    ] },

  { id: "PROD-025", domain: 1, topic: "Gift cards in elder fraud: tech support refund scams", hy: false, difficulty: "medium",
    q: "Doris Quinlan, 79, has banked at Elmford Bank for 30 years and rarely withdraws cash. On three consecutive days she withdraws USD 2,500 in cash. A teller learns she is buying gift cards at nearby pharmacies and reading the card numbers over the phone to a 'support agent' from a well-known software company. She says the company had refunded her too much money for a computer repair and she must pay back the difference. Her son is her joint account holder, and her pension is paid in on the first of each month. Which statement BEST describes the typology and FinCEN's reporting request if Elmford files a SAR?",
    options: [
      "A romance scam; include the key term 'EFE FIN-2022-A002' only if the losses exceed USD 10,000",
      "A lottery scam; mark the fraud checkbox but no key term, because gift cards are not a monetary instrument",
      "Financial exploitation by the joint account holder; file a CTR as well, because the withdrawals total over USD 7,000",
      "A tech support refund scam; include the key term 'EFE FIN-2022-A002' and mark the Elder Financial Exploitation checkbox"
    ],
    answer: [3],
    explanation: "FinCEN's advisory FIN-2022-A002 describes tech and customer support scams in which scammers claim to have refunded too much and make victims 'repay' the over-refund. It lists bulk purchases of gift cards or prepaid cards by an older customer and uncharacteristic cash withdrawals as red flags. FinCEN asks filers to include the key term 'EFE FIN-2022-A002' in SAR field 2 and the narrative and to mark the Elder Financial Exploitation checkbox (field 38(d)). There is no dollar minimum for the key term, nothing implicates the son, and no CTR is due because no single day's cash exceeded USD 10,000.",
    source: [
      { label: "FinCEN Advisory FIN-2022-A002 on Elder Financial Exploitation (June 2022)", url: "https://www.fincen.gov/sites/default/files/advisory/2022-06-15/FinCEN%20Advisory%20Elder%20Financial%20Exploitation%20FINAL%20508.pdf" }
    ] }
]);
