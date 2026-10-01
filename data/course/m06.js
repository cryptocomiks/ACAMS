window.CAMS_COURSE = (window.CAMS_COURSE || []).concat([{
  id: "m06",
  order: 6,
  domain: 2,
  title: "United States AML/CFT framework",
  icon: "🇺🇸",
  minutes: 15,
  summary: "Master the US regime the exam tests most: the Bank Secrecy Act and the laws built on it, the USA PATRIOT Act sections by number, who does what (FinCEN, OFAC, the banking agencies), each report with its threshold and deadline, SAR confidentiality, 314(a) and 314(b) sharing, the CDD Rule and enforcement.",
  mostTested: [
    "USA PATRIOT Act sections: **311** special measures, **312** correspondent and private banking due diligence, **313** no shell banks, **314(a)/(b)** information sharing, **319(b)** records within **120 hours**, **326** CIP, **352** AML programs for all FIs",
    "Over **$10,000**: **CTR** (cash per business day, **15 days**), **CMIR** (at the border), **FBAR** (foreign accounts, **15 April**) and **Form 8300** (cash received by a business, **15 days**); **$3,000**: monetary instrument and funds transfer records",
    "SAR: insider abuse **any amount**, **$5,000** with a suspect, **$25,000** without, MSBs **$2,000**; file within **30 days** of initial detection (**60** if no suspect); keep **5 years**",
    "SAR confidentiality and **safe harbor** (31 USC 5318(g)): never tip off, decline subpoenas and notify FinCEN; the underlying facts can be shared, the SAR cannot",
    "**314(a)**: search accounts of the past **12 months** and transactions of the past **6 months**, report matches within **two weeks**; **314(b)**: voluntary, **annual** notice to FinCEN, safe harbor, never share a SAR",
    "Statutes: BSA **1970**, MLCA **1986** (ML and structuring become crimes), Annunzio-Wylie **1992** (SARs), MLSA **1994** (MSB registration), PATRIOT Act **2001**, AMLA **2020** (CTA, priorities, whistleblowers)",
    "**Five pillars** and the **2016 CDD Rule**: beneficial owners at **25%** plus **one** control person, identified at the **first** account opening (changed February 2026); US companies exempt from CTA reporting (changed August 2026)"
  ],
  sections: [
    {
      h: "The Bank Secrecy Act and the agencies behind it",
      p: [
        "The **Bank Secrecy Act (BSA)**, formally the Currency and Foreign Transactions Reporting Act of **1970**, is the base of US AML/CFT law: records and reports useful in criminal, tax and regulatory investigations and counter-terrorism, plus **AML programs**. Its rules sit in **31 CFR Chapter X**."
      ],
      table: {
        head: ["Body", "BSA role"],
        rows: [
          ["**FinCEN** (Treasury, created **1990**)", "Administers the BSA, writes the rules, imposes civil penalties; the US **FIU**"],
          ["**OCC**", "National banks and federal savings associations"],
          ["**Federal Reserve**", "State member banks and bank holding companies"],
          ["**FDIC**", "State non-member banks"],
          ["**NCUA**", "Federally insured credit unions"],
          ["**SEC**, **CFTC**", "Broker-dealers and mutual funds; futures firms"],
          ["**IRS**", "Examines MSBs, casinos and other non-bank FIs; investigates BSA crimes"],
          ["**OFAC** (Treasury)", "Sanctions, mainly under IEEPA and TWEA: outside the BSA"]
        ]
      },
      list: [
        "A bank that fails to keep a BSA program, or to fix a reported problem, **must** receive a **cease-and-desist** order from its agency (12 USC 1818(s)).",
        "**OFAC** blocks the property of SDNs and of entities they own **50% or more**, directly or indirectly, **in the aggregate**; a prohibited deal with no blocked interest is **rejected**. Liability is **strict**; records are kept **10 years** (changed March 2025)."
      ],
      tip: "Exam tip: FinCEN writes the rules and is the FIU, but it delegates BSA examinations to the functional regulators."
    },
    {
      h: "Key statutes from 1970 to 2020",
      table: {
        head: ["Year", "Law", "What it added"],
        rows: [
          ["**1970**", "Bank Secrecy Act", "**CTR**, CMIR and FBAR reports; recordkeeping"],
          ["**1986**", "Money Laundering Control Act", "ML a federal crime (**18 USC 1956, 1957**); **structuring** a crime"],
          ["1988", "Anti-Drug Abuse Act", "ID for cash purchases of monetary instruments over **$3,000**"],
          ["**1992**", "Annunzio-Wylie Act", "**SARs** replace criminal referral forms; wire transfer records; BSA Advisory Group"],
          ["**1994**", "Money Laundering Suppression Act", "**MSB registration**; streamlined CTR exemptions"],
          ["**2001**", "USA PATRIOT Act, Title III", "TF, CIP, shell bank ban, special measures, information sharing, AML programs for all FIs"],
          ["**2020**", "Anti-Money Laundering Act (**AMLA**)", "Enacted **1 January 2021**: CTA, priorities, whistleblower awards, higher penalties"]
        ]
      },
      list: [
        "**18 USC 1956**: laundering the proceeds of specified unlawful activity, up to **20 years** and **$500,000 or twice** the value. **18 USC 1957**: a monetary transaction of **more than $10,000** in criminally derived property, up to **10 years**.",
        "**Structuring** (31 USC 5324), splitting cash to evade a CTR, is a crime even when the money is clean."
      ],
      remember: "1970 reports, 1986 crime, 1992 SAR, 1994 MSB registration, 2001 PATRIOT Act, 2020 AMLA."
    },
    {
      h: "USA PATRIOT Act: the sections by number",
      p: [
        "Title III of the **USA PATRIOT Act** (**October 2001**) amended the BSA. Questions cite its sections by number."
      ],
      table: {
        head: ["Section", "What it does"],
        rows: [
          ["**311**", "Treasury names a foreign jurisdiction, institution, class of transactions or type of account a **primary money laundering concern**: up to **five special measures**; the fifth (barring correspondent or payable-through accounts) only by **regulation**"],
          ["**312**", "Due diligence on **correspondent** and **private banking** accounts of non-US persons; **EDD** for foreign banks with an **offshore** licence or from non-cooperative or 311-designated countries"],
          ["**313**", "No correspondent accounts for foreign **shell banks** (no physical presence), except regulated affiliates"],
          ["**314(a)/(b)**", "Information sharing (see below)"],
          ["**319(a)**", "Funds deposited in a foreign bank can be **seized** from its US interbank account"],
          ["**319(b)**", "AML records to a banking agency within **120 hours**; Treasury or DOJ **subpoenas** to foreign banks; close the account within **10 business days** if one is ignored"],
          ["**326**", "**Customer identification program** (CIP)"],
          ["**352**", "AML programs for **all** financial institutions"]
        ]
      },
      list: [
        "Private banking (312): at least **$1,000,000** in deposits, for non-US persons, with a bank liaison. **Senior foreign political figures** get enhanced scrutiny for proceeds of foreign corruption.",
        "Newer 311-style orders bar transmittals of funds with the target: **section 9714** (first: **Bitzlato**, 2023, Russia) and **section 2313a** (first: **CIBanco, Intercam, Vector**, 2025, fentanyl)."
      ],
      tip: "Exam tip: **120 hours** is 319(b); **two weeks** is 314(a); **10 business days** is the 319(b) closure and OFAC reporting."
    },
    {
      h: "Reports, thresholds and deadlines",
      table: {
        head: ["Report", "Trigger", "Deadline"],
        rows: [
          ["**CTR** (Form 112)", "Cash of **more than $10,000** in one business day, by or for one person, aggregated across branches", "**15 days**"],
          ["**SAR** (Form 111)", "From **$2,000** (MSBs) or **$5,000** (banks, casinos, broker-dealers, insurers); details below", "**30 days** (**60** if no suspect)"],
          ["**FBAR** (Form 114)", "US person whose foreign accounts total **more than $10,000** at any time in the year", "**15 April**, automatic extension to **15 October**"],
          ["**CMIR** (Form 105)", "**More than $10,000** in currency or monetary instruments crossing the US border at one time", "At the border, to **CBP**"],
          ["**Form 8300**", "A business receives **more than $10,000** in cash, in one or related transactions", "**15 days**; payer notified by **31 January**"],
          ["Monetary instruments", "Cash purchases of bank checks, money orders or traveler's checks of **$3,000 to $10,000**", "Record and verify ID"],
          ["Funds transfers", "**$3,000 or more**: records and the **travel rule** (FATF standard: USD/EUR 1,000)", "With each transfer"],
          ["**OFAC** reports", "Property blocked, or a prohibited transaction rejected", "**10 business days**; annual blocked property report by **30 September**"]
        ]
      },
      list: [
        "BSA records are kept **5 years**.",
        "CTR exemptions: banks, government bodies, listed companies and their 51%-owned subsidiaries (**Phase I**); eligible non-listed businesses and payroll customers (**Phase II**). They never remove SAR duties."
      ],
      tip: "Exam tip: a CTR needs **more than** $10,000; the monetary instrument log runs from **$3,000 to $10,000 inclusive**."
    },
    {
      h: "Suspicious activity reports",
      list: [
        "Bank thresholds: insider abuse at **any amount**; **$5,000** with an identified suspect or for ML and BSA evasion; **$25,000** with no suspect. Below them a **voluntary SAR** is always allowed.",
        "The clock starts at **initial detection**, when a prompt review concludes the activity is suspicious, not when the alert fires: **30 days**, or **60** to identify a suspect.",
        "Ongoing violations needing immediate attention, such as TF: **telephone** law enforcement at once, and still file.",
        "Keep the SAR and its **supporting documentation** for **5 years**; give the documentation to FinCEN, law enforcement or supervisors on request, **without a subpoena**.",
        "Tell the **board** about SARs filed, but never a suspect: if a director or officer is the subject, notify only the other directors.",
        "October 2025 FAQs (changed October 2025): activity **near $10,000** needs a SAR only if it seems designed to evade reporting; **continuing-activity reviews are optional** (if used, file by day **120** after the last SAR); **no-SAR decisions** need no documentation."
      ],
      tip: "Exam tip: thresholds make a SAR **mandatory**; they never prevent one, for example on small-value TF."
    },
    {
      h: "SAR confidentiality, safe harbor and keep-open requests",
      list: [
        "No one may reveal a SAR or information showing that one exists (31 USC **5318(g)(2)**). Staff escalate concerns internally and never tell the customer.",
        "Subpoenaed for a SAR, even in a civil case: **decline** and **notify FinCEN** (banks also tell their regulator).",
        "Allowed: disclosure to FinCEN, law enforcement and supervisors; sharing with the **head office** or **controlling company**, even abroad; sharing the **underlying facts and documents**, even across borders (FIN-2025-G001, September 2025). Never the SAR, whether one was filed, or analysis revealing the decision.",
        "**Safe harbor** (31 USC **5318(g)(3)**): no liability under any law or contract for reporting a possible violation, or for not telling the subject.",
        "**Keep-open requests** (31 USC **5333**, from AMLA): a written request with a **termination date** protects the bank. The bank still decides, and SAR duties continue."
      ],
      remember: "Facts can be shared; the SAR and its existence cannot."
    },
    {
      h: "Information sharing: 314(a) and 314(b)",
      table: {
        head: ["", "314(a)", "314(b)"],
        rows: [
          ["Who", "Law enforcement, through **FinCEN**, to institutions", "Institution to institution, **voluntary**"],
          ["How", "Requests every **two weeks** on TF or ML subjects", "**Notice** to FinCEN, valid **1 year**; check the counterparty's notice"],
          ["Duty", "Search accounts of the past **12 months** and transactions of the past **6 months**; report matches within **two weeks**; no reply if no match", "Use only to detect and report possible ML or TF (fraud included) or for account decisions; keep it secure. IP addresses and device IDs can be shared"],
          ["Limits", "Confidential; a lead, not a subpoena; no required account action or automatic SAR", "Only institutions with an AML program duty; **safe harbor**; joint SARs, never the SAR itself"]
        ]
      },
      tip: "Exam tip: after a 314(a) match, a bank may discuss the activity with another bank under 314(b), but must never reveal FinCEN's request."
    },
    {
      h: "Programs, CIP and the 2016 CDD Rule",
      p: [
        "A bank AML program (**31 CFR 1020.210**) has **five pillars**: internal controls, independent testing, a BSA compliance officer, training and, since the **2016 CDD Rule** (applicable **May 2018**), risk-based **customer due diligence**. No specific technology is required; an April 2026 reform of program rules is only proposed."
      ],
      list: [
        "CDD Rule core requirements: identify and verify **customers** and **beneficial owners**; understand the **nature and purpose** of relationships (risk profile); **ongoing monitoring**, updating customer data on a risk basis.",
        "**CIP** (section 326): obtain at least **name, date of birth, address and ID number** (TIN for US persons) before opening, verify within a reasonable time, and set procedures for failed verification: refuse, restrict or close, and consider a SAR.",
        "**Beneficial owners**: each individual with **25% or more**, directly or indirectly (up to **four**), plus **one** control person such as the CEO, always. If a trust holds 25% or more, identify the **trustee**.",
        "**FIN-2026-R001** (changed February 2026): identify them when a legal entity **first** opens an account, then only if facts cast doubt on the information or risk-based CDD requires it.",
        "**CTA** (changed August 2026): US companies and US persons no longer report beneficial ownership to FinCEN; only foreign companies registered in a US state do, without their US owners. Banks' CDD duties remain."
      ],
      tip: "Exam tip: indirect stakes count. Owning 100% of a company that holds 30% is a **30%** stake."
    },
    {
      h: "AMLA 2020, national priorities and enforcement",
      list: [
        "**AMLA 2020** (enacted **1 January 2021**): the **CTA**; **national AML/CFT priorities**; whistleblower awards of **10-30%** of sanctions over **$1 million**; foreign bank subpoenas reaching records abroad; 'value that substitutes for currency' added to the BSA.",
        "**Priorities** (June 2021, updated at least every **4 years**): corruption, cybercrime, terrorist financing, fraud, transnational criminal organizations, drug trafficking organizations, human trafficking and smuggling, proliferation financing. Programs need not include them until a final rule.",
        "**Penalties**: willful BSA violations carry up to **$250,000** and **5 years** (**$500,000** and **10 years** if aggravated). AMLA added fines of up to **3 times** the profit or **2 times** the maximum for repeat violators, and a **10-year** board ban for egregious ones.",
        "**Individuals**: FinCEN fined U.S. Bank's former chief operational risk officer **$450,000** (2020) for capping alerts to fit staffing.",
        "**Binance** (2023): FinCEN **$3.4 billion**, OFAC **$968 million**. **TD Bank** (2024): **guilty plea**, about **$3.09 billion** in total including FinCEN's record **$1.3 billion**, a growth restriction and a monitorship; its program was neither designed nor resourced for its risks, leaving trillions of dollars unmonitored."
      ],
      tip: "Exam tip: BSA crimes require willfulness, but negligence can still bring civil penalties, and OFAC liability is strict."
    }
  ],
  cards: [
    { front: "What is the BSA's formal name, and who administers it?", back: "The Currency and Foreign Transactions Reporting Act of 1970, administered by FinCEN, a Treasury bureau that is also the US FIU." },
    { front: "Which agency examines which institution for BSA compliance?", back: "OCC: national banks. Fed: state member banks and holding companies. FDIC: state non-member banks. NCUA: credit unions. IRS: MSBs and casinos." },
    { front: "What did the Money Laundering Control Act of 1986 do?", back: "Made money laundering a federal crime (18 USC 1956 and 1957) and made structuring to evade CTRs a crime." },
    { front: "Annunzio-Wylie (1992) vs Money Laundering Suppression Act (1994)", back: "1992: SARs replace criminal referral forms, wire transfer records, BSA Advisory Group. 1994: MSB registration, streamlined CTR exemptions." },
    { front: "What can Treasury do under PATRIOT Act section 311?", back: "Name a foreign jurisdiction, institution, class of transactions or account type a primary money laundering concern and impose up to five special measures." },
    { front: "Section 312 vs section 313", back: "312: due diligence, and EDD for some foreign banks, on correspondent and private banking accounts of non-US persons. 313: no correspondent accounts for shell banks." },
    { front: "Section 319(a) vs 319(b)", back: "319(a): seize funds from a foreign bank's US interbank account. 319(b): records within 120 hours; foreign bank subpoenas; closure within 10 business days." },
    { front: "Who must file an FBAR, and when?", back: "US persons whose foreign accounts total more than $10,000 at any time in the year; due 15 April, automatic extension to 15 October." },
    { front: "CMIR vs Form 8300", back: "CMIR: more than $10,000 moved across the US border at once, filed with CBP. Form 8300: a business receives over $10,000 cash; 15 days." },
    { front: "Is structuring a crime if the cash is legitimate?", back: "Yes. 31 USC 5324 punishes splitting transactions to evade reporting whatever the source of the funds; the bank should consider a SAR." },
    { front: "314(a) vs 314(b)", back: "314(a): mandatory search on FinCEN requests, matches reported within two weeks. 314(b): voluntary sharing between registered institutions, with a safe harbor." },
    { front: "What may a US bank share without breaching SAR confidentiality?", back: "The underlying facts and documents, even abroad, and the SAR itself with its head office or controlling company. Never the SAR or its existence otherwise." },
    { front: "The five pillars of a US bank AML program", back: "Internal controls, independent testing, a BSA compliance officer, training, and risk-based customer due diligence (fifth pillar, 2016 CDD Rule)." },
    { front: "Who are the beneficial owners under the US CDD Rule, and when are they identified?", back: "Each 25%+ owner plus one control person; at the first account opening, then when facts cast doubt or risk requires (FIN-2026-R001)." },
    { front: "What is the status of CTA beneficial ownership reporting in 2026?", back: "Since August 2026, US companies and US persons are exempt; only foreign companies registered in a US state report, without their US owners." },
    { front: "Name four key measures of AMLA 2020", back: "Corporate Transparency Act, national AML/CFT priorities, larger whistleblower awards, and broader foreign bank subpoenas; also the keep-open safe harbor and repeat-violator penalties." },
    { front: "The eight national AML/CFT priorities (June 2021)", back: "Corruption, cybercrime, terrorist financing, fraud, transnational criminal organizations, drug trafficking organizations, human trafficking and smuggling, proliferation financing." },
    { front: "Can individuals be penalised for BSA failures?", back: "Yes. 31 USC 5321 reaches officers and employees: FinCEN fined U.S. Bank's former risk chief $450,000 (2020) for capping alerts." }
  ],
  numbers: [
    { q: "Time to give a federal banking agency AML records under PATRIOT Act s.319(b)", a: "120 hours", wrong: ["48 hours", "14 days", "10 business days"] },
    { q: "Maximum number of special measures under PATRIOT Act s.311", a: "5", wrong: ["3", "4", "7"] },
    { q: "FBAR trigger: aggregate value of foreign accounts at any time in the year", a: "More than $10,000", wrong: ["More than $5,000", "More than $50,000", "$3,000 or more"] },
    { q: "FBAR due date", a: "15 April (automatic extension to 15 October)", wrong: ["30 June (no extension)", "31 January (extension to 15 April)", "15 March (extension to 15 September)"] },
    { q: "Deadline to file Form 8300 after receiving more than $10,000 in cash", a: "15 days", wrong: ["5 days", "30 days", "10 business days"] },
    { q: "Year the Money Laundering Control Act made money laundering a federal crime", a: "1986", wrong: ["1970", "1992", "2001"] },
    { q: "18 USC 1957: monetary transaction in criminally derived property worth", a: "More than $10,000", wrong: ["More than $3,000", "More than $5,000", "More than $100,000"] },
    { q: "AMLA 2020 whistleblower award range (actions with sanctions over $1 million)", a: "10% to 30% of sanctions collected", wrong: ["5% to 15% of sanctions collected", "15% to 25% of sanctions collected", "20% to 50% of sanctions collected"] },
    { q: "Number of national AML/CFT priorities FinCEN issued in June 2021", a: "8", wrong: ["5", "6", "10"] },
    { q: "Maximum criminal penalty for a willful BSA violation (31 USC 5322(a))", a: "$250,000 and 5 years", wrong: ["$100,000 and 1 year", "$500,000 and 20 years", "$1,000,000 and 15 years"] }
  ],
  questionIds: [],
  sources: []
}]);
