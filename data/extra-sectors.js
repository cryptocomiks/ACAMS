window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  { id: "SECT-001", domain: 2, topic: "Casinos and card clubs: BSA coverage threshold", hy: false,
    q: "A state-licensed card room charges players per-table fees and has never been subject to Bank Secrecy Act (BSA) requirements. Its gross annual gaming revenue was $800,000 last year. This year it passes $1 million in August and finishes at $1.2 million. When does it become subject to the BSA rules for casinos and card clubs?",
    options: [
      "Only from the start of next business year, because the test looks only at the previous year's revenue",
      "From the point in August when its current-year gross annual gaming revenue exceeded $1 million",
      "Never, because card rooms that earn per-table fees instead of house wins are outside the BSA",
      "Only after its revenue exceeds $1 million in two consecutive business years"
    ],
    answer: [1],
    explanation: "Under 31 CFR 1010.100(t)(6), a licensed card club is a BSA financial institution if its gross annual gaming revenue is over $1,000,000 in either the previous or the current business year. That revenue expressly includes per-game and per-table fees. If the club qualifies only because of current-year revenue, it is not covered until the point in that year when revenue passes $1,000,000. Casinos, including tribal casinos, follow the same test under 1010.100(t)(5). There is no two-year test and no need to wait for the next business year.",
    source: [{ label: "eCFR 31 CFR 1010.100(t)(5)-(6) – casino and card club definitions", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-A/section-1010.100" }] },

  { id: "SECT-002", domain: 1, topic: "Casinos: chip walking and minimal gaming", hy: true,
    q: "While reviewing player rating records, a casino analyst sees a pattern for one rated player. On 11 visits over two months, he bought chips for $6,000 to $9,000 in currency at table games, played a few low-stakes hands and left with most of the chips. The chips have not been redeemed. His cash-in never exceeded $10,000 in any gaming day. What should the casino do?",
    options: [
      "Nothing more, because no CTR by casino (CTRC) was triggered and unredeemed chips remain a casino liability",
      "File one CTRC for the combined amount, because the visits together exceed $10,000",
      "Look into the pattern for a reasonable explanation, and file a SAR if it remains unexplained, since it matches FinCEN's chip walking and minimal gaming red flags",
      "Refuse to sell the player chips for cash until he opens a front money account"
    ],
    answer: [2],
    explanation: "FinCEN guidance FIN-2008-G007 names this red flag directly: a customer who often buys chips with $5,000 to $10,000 in currency, plays very little and walks away with the chips. 'Chip walking' was added to the casino SAR form in 2018 and is one of the most often reported activities. A casino must file a SAR for suspicious transactions of $5,000 or more (31 CFR 1021.320). Cash transactions are aggregated for a CTRC only within a single gaming day (31 CFR 1021.313), so separate visits do not add up to one CTRC.",
    source: [{ label: "FinCEN FIN-2008-G007 – Red flags for casinos and card clubs", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/recognizing-suspicious-activity-red-flags-casinos-and-card" },
             { label: "FinCEN Director Blanco remarks (Aug 2019) – chip walking SAR trends", url: "https://www.fincen.gov/news/speeches/prepared-remarks-fincen-director-kenneth-blanco-delivered-12th-annual-las-vegas-anti" }] },

  { id: "SECT-003", domain: 1, topic: "Casinos: repayment of credit markers", hy: false,
    q: "In one week, a casino credit customer pays off $45,000 of markers using 14 cashier's checks and money orders from different issuers. Each is for less than $3,000. What concern does this pattern MOST directly raise?",
    options: [
      "Structuring of the instruments, so the issuers avoid the $3,000 recordkeeping requirement for monetary instrument sales",
      "Chip walking, because the value of the markers leaves the casino floor",
      "Mirror trading, because the credit extended and the repayment offset each other",
      "A missed CTRC, because the payments add up to more than $10,000 in currency"
    ],
    answer: [0],
    explanation: "FIN-2008-G007 lists as a red flag paying off large markers with several instruments (cashier's checks, money orders, traveler's checks or foreign drafts) that are each under $3,000. Financial institutions must keep identifying records when they sell these instruments for $3,000 to $10,000 in currency (31 CFR 1010.415), so buying many instruments just under $3,000 suggests the buyer is avoiding those records. The instruments are not currency, so no CTRC is triggered. Chip walking and mirror trading describe different patterns.",
    source: [{ label: "FinCEN FIN-2008-G007 – Red flags for casinos and card clubs", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/recognizing-suspicious-activity-red-flags-casinos-and-card" },
             { label: "eCFR 31 CFR 1010.415 – monetary instrument records", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-D/section-1010.415" }] },

  { id: "SECT-004", domain: 1, topic: "Casinos: intra-property transfers with foreign affiliates", hy: false,
    q: "A foreign national deposits funds at the Macau property of a US-based casino company. A week later, he draws the same amount in chips and credit at the company's Las Vegas property and later cashes out in the United States. According to Treasury's 2024 National Money Laundering Risk Assessment, what is the PRIMARY risk of this arrangement?",
    options: [
      "It is a form of chip walking that inflates the casino's reported gaming revenue",
      "It is banned outright by the casino AML program rule in 31 CFR 1021.210",
      "It exposes the casino mainly to credit risk, because foreign markers are hard to collect",
      "It can move value across borders while bypassing foreign currency controls and BSA reporting"
    ],
    answer: [3],
    explanation: "The 2024 NMLRA describes foreign illicit actors who deposit funds at a foreign branch of a US-based casino and then draw the same amount in cash, chips or credit at a US branch. This can bypass both foreign currency controls and BSA reporting. FinCEN's casino risk indicators (FIN-2010-G002) similarly point to transfers between US casinos and their foreign affiliates for front money or marker redemption. The practice is not banned outright. It is a risk the casino's program must address, and it is not simply a credit-risk or revenue issue.",
    source: [{ label: "Treasury 2024 National Money Laundering Risk Assessment (casinos section)", url: "https://home.treasury.gov/system/files/136/2024-National-Money-Laundering-Risk-Assessment.pdf" },
             { label: "FinCEN FIN-2010-G002 – Casino risk-based compliance indicators", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/casino-or-card-club-risk-based-compliance-indicators" }] },

  { id: "SECT-005", domain: 4, topic: "Casinos: using player-rating data to aggregate cash transactions", hy: false,
    q: "Within one gaming day, a patron buys $6,000 in chips with currency at a blackjack table at 10 p.m. and $5,000 at a craps table at 1 a.m. Different employees handled each purchase, but the casino's player rating system recorded both. Which statement about the casino's currency transaction reporting is CORRECT?",
    options: [
      "No CTRC is needed, because neither employee personally saw more than $10,000",
      "A CTRC is needed only if surveillance footage links the patron's play at the two tables",
      "A CTRC is needed, because the casino is deemed to know about multiple transactions recorded in its own systems and logs",
      "No CTRC is needed, because the purchases crossed midnight and so fell on two calendar days"
    ],
    answer: [2],
    explanation: "Under 31 CFR 1021.313, a casino must treat multiple currency transactions by or for one person as a single transaction if they total more than $10,000 in a gaming day. The casino is deemed to know about them if any employee knows, including from books, logs and computer records kept in the ordinary course of business. Chip purchases are cash-in transactions (1021.311(a)(1)), and the rule looks at the gaming day, not the calendar day. Casinos with automated systems must also use automated programs to help them comply (1021.210(b)(2)(vi)).",
    source: [{ label: "eCFR 31 CFR 1021.313 – Aggregation", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1021/subpart-C/section-1021.313" },
             { label: "eCFR 31 CFR 1021.210 – Casino compliance programs", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1021/subpart-B/section-1021.210" }] },

  { id: "SECT-006", domain: 3, topic: "Insurance: covered products (31 CFR 1025.100)", hy: true,
    q: "An insurer's AML officer is working out which products fall under FinCEN's AML program and SAR rules for insurance companies (31 CFR part 1025). Which of these are covered products? (Choose two.)",
    options: [
      "A group term life policy an employer provides to all staff",
      "An individual whole life policy that builds cash value",
      "A homeowner's property and casualty policy",
      "A group annuity contract funding a company pension plan",
      "An individual deferred variable annuity"
    ],
    answer: [1, 4],
    explanation: "31 CFR 1025.100(b) defines covered products as: (1) permanent life insurance other than group life; (2) annuity contracts other than group annuities; and (3) any other insurance product with cash value or investment features. An individual whole life policy and an individual annuity qualify. Group life and group annuity contracts are expressly excluded. Term life and property and casualty policies have no cash value or investment feature, so they are not covered.",
    source: [{ label: "eCFR 31 CFR 1025.100 – Definitions (covered product)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1025/subpart-A/section-1025.100" }] },

  { id: "SECT-007", domain: 3, topic: "Insurance: role of agents and brokers", hy: true,
    q: "A life insurer sells its annuities only through independent agents and broker-dealers that it does not employ. The agents say the insurer's SAR obligations do not concern them. Under 31 CFR part 1025, which statement is CORRECT?",
    options: [
      "The insurer must build its agents and brokers into its AML program, obtain relevant customer information from them, and report suspicious activity conducted through them",
      "The insurer's obligations end with the policy application it receives, because agents are independent contractors",
      "Agents and brokers must each run their own AML programs under part 1025, so the insurer can rely on them entirely",
      "The insurer only needs to train agents, because state insurance regulators handle SARs on agent-sourced business"
    ],
    answer: [0],
    explanation: "31 CFR 1025.210 requires an insurer's AML program to integrate its insurance agents and brokers and to obtain all relevant customer information. The compliance officer must monitor agents' compliance, and independent testing must cover them. Under 1025.320(a)(3), the insurer is responsible for reporting suspicious transactions conducted through its agents and brokers. Agents and brokers are excluded from the definition of 'insurance company', so part 1025 does not make them run their own programs. Some agents, such as a bank or broker-dealer, may have their own SAR duty, and then one joint SAR can be filed.",
    source: [{ label: "eCFR 31 CFR 1025.210 – Insurance AML programs", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1025/subpart-B/section-1025.210" },
             { label: "eCFR 31 CFR 1025.320 – Insurance SARs", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1025/subpart-C/section-1025.320" }] },

  { id: "SECT-008", domain: 1, topic: "Insurance: free-look cancellations and third-party refunds", hy: false,
    q: "A broker-dealer that sells variable annuities is reviewing recent customer activity. Which of the following are red flags for money laundering through insurance products? (Choose two.)",
    options: [
      "A customer cancels an annuity during the free-look period after funding it with several sequentially numbered money orders",
      "A customer raises monthly premium contributions after receiving a documented salary increase",
      "A customer cancels a policy and asks for the refund to be paid to an unrelated third party",
      "A customer asks detailed questions about the annuity's surrender charges and investment options",
      "A customer names a spouse and children as beneficiaries of a new policy"
    ],
    answer: [0, 2],
    explanation: "FINRA Regulatory Notice 19-18 lists insurance red flags. They include cancelling an annuity in the free-look period together with other indicators, such as funding it with sequentially numbered money orders, and cancelling a contract with the proceeds sent to a third party. Both use the insurer's refund to turn cash into clean-looking funds or to pass value to someone else. Contributions backed by documented income, normal questions about charges and naming family as beneficiaries are ordinary behavior. Lack of concern about charges and performance is the red flag, not interest in them.",
    source: [{ label: "FINRA Regulatory Notice 19-18 – AML red flags (insurance products)", url: "https://www.finra.org/rules-guidance/notices/19-18" }] },

  { id: "SECT-009", domain: 3, topic: "Broker-dealers: FINRA Rule 3310 independent testing", hy: false,
    q: "A FINRA member broker-dealer that carries customer accounts asks how often FINRA Rule 3310 requires independent testing of its AML program. What is the CORRECT answer?",
    options: [
      "Every two years, unless the firm's own risk assessment rates it high risk",
      "At a risk-based frequency, because the rule sets no minimum interval",
      "Only when FINRA asks for it during a cycle examination",
      "Every calendar year, with the two-year cycle reserved for firms with no customer accounts, such as proprietary traders"
    ],
    answer: [3],
    explanation: "FINRA Rule 3310(c) requires annual independent testing on a calendar-year basis. The only exception is a firm that does not execute transactions for customers, hold customer accounts or act as an introducing broker, for example a firm that trades only for its own account. That firm must test every two years. Supplementary Material .01 says firms should test more often if circumstances warrant. A purely risk-based frequency is the standard in FinCEN's casino and MSB rules, not the FINRA minimum. 31 CFR 1023.210(c) requires broker-dealers to comply with their SRO's AML program rules.",
    source: [{ label: "FINRA Rule 3310 – AML compliance program", url: "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3310" },
             { label: "eCFR 31 CFR 1023.210 – Broker-dealer AML programs", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1023/subpart-B/section-1023.210" }] },

  { id: "SECT-010", domain: 1, topic: "Broker-dealers: journal transfers without a business purpose", hy: false,
    q: "At a retail brokerage, a customer with a small-business account keeps journaling funds to and from several unrelated customers' accounts at the firm, often in round amounts. He then wires the balances abroad and trades almost no securities. What is the MOST likely concern?",
    options: [
      "Churning by the registered representative to earn commissions",
      "Use of brokerage accounts to move funds between parties with no business purpose, a layering red flag",
      "Marking the close to influence the price of a thinly traded security",
      "Front-running pending customer orders based on advance knowledge"
    ],
    answer: [1],
    explanation: "FINRA Regulatory Notice 19-18 lists money movement red flags. They include excessive journal entries between related or unrelated accounts with no apparent business purpose, and a securities account used for payments or outgoing wires with little or no securities activity, as a conduit. Round-amount movements followed by cross-border wires fit layering. Churning, marking the close and front-running are trading abuses that require securities trading, which is almost absent here.",
    source: [{ label: "FINRA Regulatory Notice 19-18 – AML red flags (money movements)", url: "https://www.finra.org/rules-guidance/notices/19-18" }] },

  { id: "SECT-011", domain: 1, topic: "Broker-dealers: DVP/RVP omnibus accounts for foreign financial institutions", hy: true,
    q: "A US broker-dealer keeps a DVP/RVP omnibus account for a foreign bank. The account repeatedly sells large blocks of thinly traded low-priced stocks at the peak of sudden price spikes. The foreign bank declines to identify the underlying sellers. What should the broker-dealer do?",
    options: [
      "Apply its due diligence program for foreign correspondent accounts, escalate the refusal, and consider a SAR and limits on the activity",
      "Keep executing trades, because the foreign bank is the customer and is responsible for due diligence on its own clients",
      "Convert the account to a fully disclosed account and then onboard each seller through CIP with no further review",
      "Report the trades to FINRA as manipulation instead of filing a SAR, because SARs do not cover securities fraud"
    ],
    answer: [0],
    explanation: "SEC staff's 2020 bulletin on omnibus accounts describes pump-and-dump groups that trade low-priced securities through foreign financial institutions' omnibus (often DVP/RVP) accounts at US broker-dealers, so that no single firm sees the whole picture. These accounts are correspondent accounts, which must be covered by the broker-dealer's risk-based due diligence program under 31 CFR 1010.610. Failing to get information on the underlying owners of risky activity greatly increases the risk. The foreign bank's own KYC does not remove the broker-dealer's duties, and suspected securities fraud is reportable on a SAR.",
    source: [{ label: "SEC Staff Bulletin – Risks of omnibus accounts transacting in low-priced securities", url: "https://www.sec.gov/tm/risks-omnibus-accounts-transacting-low-priced-securities" }] },

  { id: "SECT-012", domain: 2, topic: "Investment advisers: FinCEN AML rule effective date", hy: true,
    changed: "FinCEN final rule, Dec 2025: IA AML rule delayed to 1 Jan 2028",
    q: "In September 2026, an SEC-registered investment adviser asks whether FinCEN's investment adviser AML rule, published in September 2024, is already in force. What is the CORRECT answer?",
    options: [
      "Yes, it took effect on 1 January 2026, so the adviser must already file SARs",
      "Yes, but only for exempt reporting advisers, not for SEC-registered advisers",
      "No, FinCEN has postponed its effective date to 1 January 2028 while it reviews the rule's scope",
      "No, a federal court vacated it and FinCEN has formally withdrawn it"
    ],
    answer: [2],
    explanation: "The 2024 rule would treat registered investment advisers and exempt reporting advisers as BSA financial institutions, with AML program and SAR obligations, from 1 January 2026. On 31 December 2025 FinCEN issued a final rule moving the effective date to 1 January 2028, following a September 2025 proposal. FinCEN intends to review the rule and tailor it to the sector. The rule has not been vacated or withdrawn, and it applies to advisers of both types once in effect.",
    source: [{ label: "FinCEN press release (31 Dec 2025) – IA rule postponed to 2028", url: "https://www.fincen.gov/news/news-releases/fincen-issues-final-rule-postpone-effective-date-investment-adviser-rule-2028" }] },

  { id: "SECT-013", domain: 2, topic: "MSBs: activity thresholds in the MSB definition", hy: false,
    q: "Based only on the activity described, which of the following businesses meet FinCEN's definition of a money services business (MSB)? (Choose two.)",
    options: [
      "A currency exchange kiosk whose largest exchange for any person on any day is $800",
      "A grocery store that accepts customers' personal checks only as payment for groceries",
      "A convenience store that cashes $1,500 of payroll checks for one person on one day",
      "A mobile app that accepts $50 from users and transmits it to recipients abroad",
      "An armored car company that moves a retailer's cash from its store to the retailer's own bank account"
    ],
    answer: [2, 3],
    explanation: "Under 31 CFR 1010.100(ff), check cashers and dealers in foreign exchange are MSBs only above $1,000 for any person on any day. The $1,500 check cashing qualifies, but the $800 exchange kiosk does not. Money transmission has no dollar threshold, so the remittance app is an MSB. The definitions exclude a business that accepts checks only as payment for its own goods, and an armored car carrier that moves a customer's cash to the customer's own account with only a custodial interest.",
    source: [{ label: "eCFR 31 CFR 1010.100(ff) – Money services business", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-A/section-1010.100" }] },

  { id: "SECT-014", domain: 3, topic: "MSBs: registration, re-registration and agent lists", hy: false,
    q: "A licensed money transmitter registered with FinCEN in 2025. In 2026 an investor acquires 25% of its equity, and its agent network grows from 40 to 70 agents. What does 31 CFR 1022.380 require?",
    options: [
      "Nothing until the next two-year renewal, because renewal captures these changes",
      "Each new agent must register separately with FinCEN before it offers services",
      "The MSB must notify FinCEN within 30 days by filing a SAR describing the ownership change",
      "The MSB must re-register within 180 days, and it must keep its list of agents up to date"
    ],
    answer: [3],
    explanation: "Re-registration is required within 180 days when more than 10% of voting power or equity is transferred, or when the number of agents grows by more than 50% during a registration period. Both happened here (25% equity; 40 to 70 agents is a 75% increase). A business that is an MSB only because it is another MSB's agent does not register. The principal must keep a list of its agents and revise it each January 1. Normal renewals come every two calendar years, and a SAR is not a way to notify FinCEN of an ownership change.",
    source: [{ label: "eCFR 31 CFR 1022.380 – Registration of MSBs", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1022/subpart-D/section-1022.380" }] },

  { id: "SECT-015", domain: 3, topic: "MSBs: principal's monitoring of agents", hy: false,
    q: "A money transmitter's review shows that one agent location sends far more transfers than similar agents, many of its senders share the same address, and the agent's ownership changed without notice. Which response BEST reflects FinCEN's 2016 guidance on how principals must oversee their agents?",
    options: [
      "Leave it to the agent, since each agent is itself an MSB with its own AML program obligation",
      "Identify the agent's current owners, review its operations and controls, take corrective action up to termination, and report suspicious activity",
      "Wait for the agent's annual independent review before acting, because that is the required control",
      "Terminate every agent in the same region to remove the risk quickly"
    ],
    answer: [1],
    explanation: "FinCEN guidance FIN-2016-G001 says principals must, at a minimum, identify their agents' owners, keep evaluating agents' operations and watch for changes, and assess how agents apply policies and controls. Principals must also have procedures for non-compliant agents, including terminating contracts. Under 31 CFR 1022.210(d)(1)(iii), principal and agent can divide who develops the controls, but each MSB stays responsible for its own program. Relying on the agent or waiting for an annual review ignores clear red flags. Terminating every agent in a region is blanket de-risking, not a risk-based response.",
    source: [{ label: "FinCEN FIN-2016-G001 – MSB principals and agent monitoring", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/guidance-existing-aml-program-rule-compliance-obligations" },
             { label: "eCFR 31 CFR 1022.210 – MSB AML programs", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1022/subpart-B/section-1022.210" }] },

  { id: "SECT-016", domain: 3, topic: "BaaS / partner-bank models: CIP reliance on a fintech", hy: false,
    q: "Under a banking-as-a-service arrangement, a community bank opens deposit accounts for users of a fintech app. By contract, the fintech verifies the users' identities; the fintech is not subject to any BSA AML program rule. The bank's customer identification program (CIP) states that it relies on the fintech under the CIP reliance provision. What is the MAIN problem?",
    options: [
      "The reliance provision covers only financial institutions that are subject to an AML program rule and a federal functional regulator, and the bank stays responsible for the partner's work",
      "Nothing, as long as the fintech certifies its procedures to the bank each year",
      "Banks may never let a third party collect customer information for any account",
      "A fintech's end users are never the bank's customers, so CIP does not apply to them"
    ],
    answer: [0],
    explanation: "Under 31 CFR 1020.220(a)(6), a bank may rely on another institution's CIP work only if the reliance is reasonable, that institution is subject to a rule implementing 31 U.S.C. 5318(h) and a federal functional regulator, and it certifies its AML program to the bank each year. An unregulated fintech does not meet these conditions, so an annual certification alone is not enough. In 2024 the Federal Reserve took action against Evolve Bank & Trust because it lacked effective risk management and AML controls over its fintech partnerships. The bank remains accountable for its partners' onboarding and monitoring.",
    source: [{ label: "eCFR 31 CFR 1020.220 – Bank CIP (reliance provision)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-B/section-1020.220" },
             { label: "Federal Reserve press release (14 Jun 2024) – Evolve Bank & Trust enforcement action", url: "https://www.federalreserve.gov/newsevents/pressreleases/enforcement20240614a.htm" }] },

  { id: "SECT-017", domain: 3, topic: "Prepaid access: sellers and the $10,000 daily threshold", hy: false,
    q: "A retailer sells closed-loop gift cards and has no policy limiting how many a customer can buy. One customer wants $14,000 of gift cards in a single visit. Under FinCEN's prepaid access rule, what is the consequence?",
    options: [
      "None, because closed-loop prepaid access is always outside the prepaid access rule",
      "The retailer becomes the provider of prepaid access for the program and must register with FinCEN",
      "The retailer becomes a seller of prepaid access, an MSB that needs an AML program and must verify buyers who acquire over $10,000 in a day",
      "The retailer must refuse the sale, because closed-loop cards can never carry more than $2,000 a day"
    ],
    answer: [2],
    explanation: "Under 31 CFR 1010.100(ff)(7)(ii), anyone who sells prepaid access, including closed-loop, for more than $10,000 to any person in one day without policies reasonably designed to prevent such sales is a seller of prepaid access, and therefore an MSB. Sellers need an AML program that verifies and records the identity of those buyers (1022.210(d)(1)(iv)). Sellers are exempt from registration (1022.380(a)(1)). The provider is the participant with principal oversight and control of the program, not the retailer. The $2,000 daily limit is only the ceiling for exempting closed-loop programs from the prepaid program definition (1010.100(ff)(4)(iii)(A)); it does not ban larger sales.",
    source: [{ label: "eCFR 31 CFR 1010.100(ff)(4) and (7) – provider and seller of prepaid access", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-A/section-1010.100" },
             { label: "eCFR 31 CFR 1022.210 – MSB AML programs (prepaid access)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1022/subpart-B/section-1022.210" }] },

  { id: "SECT-018", domain: 2, topic: "Virtual currency: FinCEN 2019 CVC guidance on business models", hy: true,
    q: "Under FinCEN's May 2019 guidance on business models involving convertible virtual currency (CVC), which of these persons are money transmitters? (Choose two.)",
    options: [
      "A hosted wallet provider that receives, stores and transmits CVC for its account holders",
      "An individual who uses an unhosted wallet to buy goods for herself",
      "A developer that only sells anonymizing software that other people use to mix their coins",
      "An operator of a mixing service that accepts CVC and sends it on in a way that hides its source",
      "A miner who uses the CVC he mines only to buy goods for himself"
    ],
    answer: [0, 3],
    explanation: "FinCEN's guidance FIN-2019-G001 treats hosted wallet providers as account-based money transmitters, and treats anonymizing service providers (mixers or tumblers) as money transmitters, because hiding the source does not change their status. Someone using an unhosted wallet to buy goods or services on their own behalf is not a money transmitter. Neither is a user who obtains CVC by mining and spends it for themselves. An anonymizing software provider is exempt as a supplier of communication or network access services.",
    source: [{ label: "FinCEN Guidance FIN-2019-G001 – CVC business models (May 2019)", url: "https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf" }] },

  { id: "SECT-019", domain: 2, topic: "DeFi: BSA status of 'decentralized' services", hy: false,
    q: "A DeFi protocol serves US users. Its developers keep administrative keys and collect fees, but they say it needs no AML program because it is 'fully decentralized.' According to Treasury's 2023 illicit finance risk assessment of DeFi, what is the BEST response?",
    options: [
      "Agree, since BSA obligations apply only to legal entities with a physical presence in the US",
      "Agree, but only if the protocol's governance tokens are spread across more than 1,000 wallets",
      "Disagree only if the developers are designated by OFAC, since otherwise no obligations apply",
      "Disagree: a DeFi service that acts as a financial institution, such as a money transmitter, has BSA obligations regardless of the claim"
    ],
    answer: [3],
    explanation: "Treasury's April 2023 DeFi risk assessment says that a DeFi service acting as a BSA financial institution must meet AML/CFT obligations whether it is centralized or decentralized. A claim to be 'fully decentralized' does not change that status. When a DeFi service transmits money, the money transmitter definition can apply to the service, its owners or operators, or both, as FinCEN's 2019 guidance says for DApps. There is no wallet-count test, and sanctions laws apply to everyone, not only to designated persons.",
    source: [{ label: "Treasury Illicit Finance Risk Assessment of Decentralized Finance (Apr 2023)", url: "https://home.treasury.gov/system/files/136/DeFi-Risk-Full-Review.pdf" }] },

  { id: "SECT-020", domain: 3, topic: "Virtual currency: US travel rule threshold vs. FATF standard", hy: true,
    q: "A US crypto exchange registered as an MSB sends a customer's $2,000 bitcoin withdrawal to an exchange in a country that applies FATF's recommended threshold. Which statement is CORRECT?",
    options: [
      "US rules require travel rule information for this transfer, because the US threshold for virtual currency is $1,000",
      "The US funds travel rule starts at $3,000, so US law does not require it here, but FATF standards allow a de minimis threshold of no more than USD/EUR 1,000 for full originator and beneficiary data",
      "The travel rule never applies to virtual currency transfers, because FinCEN treats virtual currency as property rather than money under the BSA",
      "The travel rule applies only when both the sending and receiving institutions are banks, so transfers between two exchanges are outside it"
    ],
    answer: [1],
    explanation: "Under 31 CFR 1010.410(f), the funds travel rule applies to transmittals of $3,000 or more. FinCEN's 2019 CVC guidance confirms it covers CVC transfers by money transmitters, and the $3,000 threshold applies to the CVC equivalent too. FATF INR.15 applies R.16 to virtual asset transfers on the same basis as wire transfers. R.16 lets countries set a de minimis threshold of no more than USD/EUR 1,000, above which full originator and beneficiary information must travel. The foreign exchange may therefore still ask for this information.",
    source: [{ label: "FinCEN Guidance FIN-2019-G001 – Funds Travel Rule and CVC", url: "https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf" },
             { label: "FATF Recommendations 2026 (INR.15 and INR.16) – EAG-hosted copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }] },

  { id: "SECT-021", domain: 2, topic: "Stablecoins: GENIUS Act 2025 AML/CFT treatment", hy: true,
    changed: "GENIUS Act, enacted 18 Jul 2025",
    q: "How does the US GENIUS Act, signed in July 2025, treat permitted payment stablecoin issuers for AML/CFT purposes?",
    options: [
      "As BSA financial institutions with AML program, SAR, CIP and sanctions duties, and the technical means to block, freeze and reject impermissible transactions",
      "As exempt technology providers, with compliance falling entirely on the exchanges that list the stablecoin",
      "As MSBs only when a stablecoin is redeemed for fiat currency, with no duties for on-chain transfers",
      "As broker-dealers subject to FINRA Rule 3310 instead of FinCEN regulations"
    ],
    answer: [0],
    explanation: "Section 4(a)(5) of the GENIUS Act (Public Law 119-27) makes a permitted payment stablecoin issuer a financial institution for BSA purposes. It becomes subject to federal sanctions, AML, customer identification and due diligence laws, including an AML program with a risk assessment and designated officer, suspicious transaction reporting, and technical means to block, freeze and reject impermissible transactions. Issuers must also be able to comply with lawful orders to seize, freeze, burn or prevent transfers of their stablecoins. The Act takes effect on the earlier of 18 months after enactment or 120 days after final implementing regulations.",
    source: [{ label: "GENIUS Act, Public Law 119-27 (govinfo)", url: "https://www.govinfo.gov/content/pkg/PLAW-119publ27/html/PLAW-119publ27.htm" }] },

  { id: "SECT-022", domain: 2, topic: "Real estate: title/escrow obligations and the RRE rule status", hy: true,
    changed: "FinCEN RRE rule effective Dec 2025, vacated by E.D. Tex. Mar 2026 (on appeal)",
    q: "In September 2026, a title and escrow company asks which federal AML obligations currently apply to its residential closings. Which statement is MOST accurate?",
    options: [
      "It must file Real Estate Reports for all non-financed transfers to entities and trusts, because the rule took effect in December 2025",
      "It must run a full AML program, because persons involved in real estate closings lost their exemption in 2025",
      "It need not file Real Estate Reports while a March 2026 court order vacating the rule remains in force, but it can still file voluntary SARs and must file Form 8300 for cash over $10,000",
      "It must file CTRs for every closing above $10,000, whatever the payment method, because title companies are treated as banks for currency reporting"
    ],
    answer: [2],
    explanation: "On 19 March 2026 the US District Court for the Eastern District of Texas vacated FinCEN's Residential Real Estate Rule. FinCEN's FAQs say reporting persons are not currently required to file Real Estate Reports, and face no liability for not filing, while the order is in force; FinCEN has appealed. Persons involved in real estate closings are still temporarily exempt from the AML program requirement (31 CFR 1010.205(b)(1)(v)). FinCEN encourages voluntary SARs from closing professionals. Any trade or business receiving more than $10,000 in currency must still file Form 8300 (31 CFR 1010.330).",
    source: [{ label: "FinCEN Residential Real Estate FAQs (updated May 2026)", url: "https://www.fincen.gov/rre-faqs" },
             { label: "eCFR 31 CFR 1010.205 – Exempted AML programs", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-B/section-1010.205" }] },

  { id: "SECT-023", domain: 3, topic: "Dealers in precious metals, stones or jewels (31 CFR 1027)", hy: true,
    q: "Last year a US wholesale jeweler bought $400,000 and sold $900,000 of diamonds and gold jewelry. Which statement describes its BSA obligations?",
    options: [
      "It is exempt as a retailer, so it has no BSA obligations",
      "It must file SARs on suspicious transactions of $5,000 or more and file CTRs, but it needs no AML program",
      "It must register with FinCEN as an MSB and comply with the funds travel rule",
      "It must keep a written, risk-based AML program and file Form 8300 for currency over $10,000, but no mandatory SAR rule applies"
    ],
    answer: [3],
    explanation: "Under 31 CFR 1027.100(b), a business that bought more than $50,000 and sold more than $50,000 of covered goods in the prior year is a dealer. The retailer exemption covers businesses selling mainly to the public, and it does not fit a wholesaler. A dealer needs a written AML program approved by senior management, based on a risk assessment, with a compliance officer, training and independent testing (1027.210). It files Form 8300 for currency over $10,000 (1027.330). The SAR sections of part 1027 (1027.310-320) are reserved, so no mandatory SAR rule applies, and currency receipts are reported on Form 8300, not CTRs.",
    source: [{ label: "eCFR 31 CFR part 1027 – Dealers in precious metals, stones or jewels", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1027" }] },

  { id: "SECT-024", domain: 1, topic: "Dealers in precious metals: red flags and inquiry duties", hy: false,
    q: "A new buyer orders $180,000 of gold bars from a precious metals dealer. He pays partly by wire from an unrelated foreign company and partly with sequentially numbered money orders, and asks that his name not appear on the invoice. Under 31 CFR 1027.210, what should the dealer's program require FIRST?",
    options: [
      "Complete the sale and file a CTR for the money orders",
      "Make reasonable inquiries into the transaction, and refuse or withdraw from it if the concerns are not resolved",
      "Report the buyer to OFAC, since third-party payments are sanctions violations",
      "Accept the order but deliver the gold only to the company that paid"
    ],
    answer: [1],
    explanation: "31 CFR 1027.210(b)(1)(ii) requires dealers' programs to include reasonable inquiries into possible money laundering, and to refuse, withdraw from or end such transactions when needed. The rule lists warning factors that are all present here: unusual payment methods (sequentially numbered money orders, third-party payments) and attempts at unusual secrecy, such as asking that normal records not be kept. Dealers do not file CTRs. Third-party payments are not in themselves sanctions violations. Delivering to the payer does nothing to resolve the concerns.",
    source: [{ label: "eCFR 31 CFR 1027.210 – Dealer AML programs", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1027/subpart-B/section-1027.210" }] },

  { id: "SECT-025", domain: 1, topic: "Art market: intermediaries and anonymity", hy: false,
    q: "A private bank's client, a BVI company, wires $12 million to an auction house to buy a painting. The purchase goes through an art adviser who bids for an undisclosed principal, and the painting will be shipped to a storage facility abroad. Which vulnerability does Treasury's 2022 study of the art trade MOST directly link to this setup?",
    options: [
      "Use of third-party intermediaries and shell companies to buy and hold art while the true buyer stays anonymous",
      "Heavy use of cash, which makes high-value art the preferred way to place street-level drug proceeds",
      "Terrorist financing, which the study found to be the main risk in the art market",
      "Mandatory CTR filings by auction houses, which alert criminals to reporting thresholds"
    ],
    answer: [0],
    explanation: "Treasury's 2022 study, required by section 6110 of the AML Act of 2020, highlights the accepted use of intermediaries (dealers, advisers, shell companies, trusts) to buy, sell and hold art while clients stay anonymous. It cites the sanctioned Rotenberg brothers, who used shell companies to buy art after their designation. The study found that cash is rarely used in the institutional high-value market, so it is a poor vehicle for laundering cash. It found little evidence of terrorist financing. Most art market participants have no BSA AML obligations, and auction houses do not file CTRs.",
    source: [{ label: "Treasury Study on illicit finance through the trade in works of art (Feb 2022)", url: "https://home.treasury.gov/system/files/136/Treasury_Study_WoA.pdf" }] },

  { id: "SECT-026", domain: 3, topic: "Trade finance: price verification expectations", hy: false,
    q: "A bank's trade operations team is told to check the unit price of every item in every documentary credit against market data before paying. According to the Wolfsberg Group, ICC and BAFT Trade Finance Principles, what is the MOST reasonable expectation?",
    options: [
      "Banks must check the unit price of all goods against public market data before paying",
      "Price checks are not needed, because documentary credits carry less risk than open account trade",
      "Banks usually cannot judge whether unit prices are legitimate, but staff should be trained to spot clearly unusual prices and escalate them",
      "Price checks are the job of the exporter's customs broker, not the bank"
    ],
    answer: [2],
    explanation: "The Trade Finance Principles say price verification is difficult for banks. Banks generally cannot judge whether unit prices are legitimate because they lack the business context, such as contract terms, volume discounts and quality. Where a price looks obviously unusual, enquiries should follow. The Principles recommend guidance and training on analyzing prices where reliable data exists, spotting obviously unusual prices, and escalating. Documentary credits still carry TBML risk. The bank cannot pass all responsibility to a third party.",
    source: [{ label: "Wolfsberg/ICC/BAFT Trade Finance Principles (2019)", url: "https://db.wolfsberg-group.org/assets/5c770f68-6277-4443-931b-7750478f08e7/Trade%20Finance%20Principles.pdf" }] },

  { id: "SECT-027", domain: 1, topic: "Trade finance: limited visibility in open account trade", hy: false,
    q: "Most world trade is settled on open account terms. Why does open account trade make it harder for a bank to detect trade-based money laundering than a documentary credit does?",
    options: [
      "Open account payments are exempt from sanctions screening",
      "Open account trade is used only between companies in the same group",
      "Open account payments must be settled in cash",
      "Unless the bank finances the trade, it usually sees only a clean payment and not the underlying trade documents"
    ],
    answer: [3],
    explanation: "The Wolfsberg/ICC/BAFT Trade Finance Principles explain that most world trade uses open account terms. The buyer and seller agree terms, the goods are delivered, and payment follows as a clean or netted transfer. Unless the bank provides credit, its role is usually limited to normal AML and sanctions screening of that payment, with no view of invoices or shipping documents. Under a documentary credit, the bank examines the documents. Open account payments are still screened, and they are not limited to related companies or to cash.",
    source: [{ label: "Wolfsberg/ICC/BAFT Trade Finance Principles (2019), section 1.6 and Appendix IV", url: "https://db.wolfsberg-group.org/assets/5c770f68-6277-4443-931b-7750478f08e7/Trade%20Finance%20Principles.pdf" }] },

  { id: "SECT-028", domain: 1, topic: "Third-party payment processors: red flags", hy: true,
    q: "A bank is reviewing a third-party payment processor customer that handles remotely created checks and ACH debits for merchants. Which of these are red flags named in FinCEN's 2012 advisory on payment processors? (Choose two.)",
    options: [
      "Serving mainly utility companies with low, stable return rates",
      "High return and chargeback rates, and many consumer complaints about its merchant clients",
      "Giving the bank merchant lists and carrying out its own merchant due diligence",
      "Holding accounts at several banks and moving between banks within a short time",
      "Processing mostly recurring debits that consumers authorized in writing"
    ],
    answer: [1, 3],
    explanation: "FinCEN advisory FIN-2012-A010 names several red flags. They include high numbers of consumer complaints and high returns or chargebacks, which suggest merchant fraud such as unauthorized remotely created checks or ACH debits. Another is keeping accounts at several banks or moving from bank to bank in a short time, sometimes using consolidation accounts to hide return rates. The advisory treats processors for telemarketing and internet merchants as higher risk. Low-risk billers, transparent merchant information and properly authorized debits are not warning signs.",
    source: [{ label: "FinCEN Advisory FIN-2012-A010 – Risk associated with third-party payment processors", url: "https://www.fincen.gov/resources/advisories/fincen-advisory-fin-2012-a010" }] },

  { id: "SECT-029", domain: 4, topic: "Payment processor monitoring: return rates by originator", hy: false,
    q: "A bank monitors a payment processor's ACH return rate for unauthorized transactions. The processor's overall rate is within the normal range, but a few merchant originators generate most of the returns. Which monitoring change BEST addresses the warning in FinCEN's 2012 advisory?",
    options: [
      "Calculate unauthorized-return rates for each originator, not only for the processor's total volume",
      "Keep monitoring the overall rate, since that is the benchmark the payment network uses",
      "Stop monitoring returns and rely on the processor's annual audit report",
      "Raise the alert threshold so that only spikes at the processor level are flagged"
    ],
    answer: [0],
    explanation: "FIN-2012-A010 warns that a processor used by criminals may show an acceptable overall rate of unauthorized returns as a share of its total volume, but a much higher rate when calculated on individual originators' traffic. Monitoring only the overall figure lets a few fraudulent merchants hide among legitimate volume. Measuring returns per originator, and watching for consolidation accounts that hide returns, targets that gap. Raising thresholds or relying on the processor's own audit would weaken detection.",
    source: [{ label: "FinCEN Advisory FIN-2012-A010 – Elevated return rates", url: "https://www.fincen.gov/resources/advisories/fincen-advisory-fin-2012-a010" }] },

  { id: "SECT-030", domain: 1, topic: "Casinos: junket operators", hy: false,
    q: "A US casino group markets private gaming salons to wealthy foreign patrons brought in by junket operators. According to Treasury's 2024 National Money Laundering Risk Assessment, which risk is MOST closely tied to such junkets?",
    options: [
      "They are mainly used to structure street-level cash below CTR thresholds at slot machines",
      "They attract patrons trying to move money out of jurisdictions such as mainland China, and money laundering groups have used them in mirror-trade schemes",
      "They are low risk, because junket operators must register with FinCEN as MSBs",
      "Their main risk is tax evasion on tips received by casino employees"
    ],
    answer: [1],
    explanation: "The 2024 NMLRA names foreign illicit actors, especially Chinese money laundering organizations (CMLOs) and junket operators, as a key casino risk. It says junkets attract wealthy people who want to move money out of mainland China and allow large transfers between jurisdictions, and that CMLOs have used mirror trades as a feature of junkets. The report also flags misuse of private gaming salons. FinCEN's casino risk indicators tell casinos to consider organized tours and junkets when assessing their customer base. Describing junkets as low risk contradicts Treasury's own assessment.",
    source: [{ label: "Treasury 2024 National Money Laundering Risk Assessment (casinos section)", url: "https://home.treasury.gov/system/files/136/2024-National-Money-Laundering-Risk-Assessment.pdf" },
             { label: "FinCEN FIN-2010-G002 – Casino risk-based compliance indicators", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/casino-or-card-club-risk-based-compliance-indicators" }] }
]);
