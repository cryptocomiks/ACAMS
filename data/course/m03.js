window.CAMS_COURSE = (window.CAMS_COURSE || []).concat([{
  id: "m03",
  order: 3,
  domain: 1,
  title: "Fraud, corruption and other predicate crimes",
  icon: "🕵️",
  minutes: 14,
  summary: "Learn which crimes generate the money that gets laundered, how the exam distinguishes fraud, bribery, tax, cyber, trafficking, environmental and drug typologies, and which laws and red flags go with each.",
  mostTested: [
    "Predicate offence vs laundering: FATF's 21 designated categories (tax crimes since 2012); a mule who forwards fraud proceeds is laundering them",
    "Fraud red flags: BEC changes to payment details, romance and pig-butchering scams, elder exploitation, synthetic identity bust-outs",
    "FCPA anti-bribery vs accounting provisions, and the facilitating payments exception that the UK Bribery Act does not have",
    "UK failure-to-prevent offences: bribery (s.7, adequate procedures), tax evasion facilitation (CFA 2017), fraud (ECCTA s.199)",
    "PEP corruption red flags: consulting fees paid to relatives' companies, excessive agent commissions, wealth that cannot be explained",
    "Human smuggling (consensual, one-off fee) vs human trafficking (coercion, ongoing exploitation)",
    "Ransomware: strict-liability sanctions risk; cyber-event SARs from $5,000, attempts included"
  ],
  sections: [
    {
      h: "Predicate offences: the crime behind the money",
      p: [
        "A **predicate offence** is the crime that generates the proceeds; laundering them is a separate offence. **R.3** requires countries to criminalise laundering on the basis of the **Vienna (1988)** and **Palermo (2000)** Conventions and to cover the widest range of predicates.",
        "The FATF Glossary lists **21 designated categories of offences**, including fraud, corruption, **tax crimes**, **environmental crime**, human trafficking and migrant smuggling, drugs, extortion and forgery. Directive **(EU) 2018/1673** lists **22**, adding **cybercrime**, and criminalises **self-laundering**."
      ],
      list: [
        "**No conviction** for the predicate is needed to prove that property is the proceeds of crime.",
        "A fraud victim's money becomes criminal property only once it reaches the fraudster (UKFIU); whoever then moves it, such as a **money mule**, is laundering it."
      ],
      tip: "Exam tip: in a BEC case the fraud is the predicate. The student forwarding the stolen wire for a commission is layering it, witting or not.",
      remember: "FATF has 21 designated categories, with tax crimes added in 2012. The EU list adds cybercrime."
    },
    {
      h: "Scams: BEC, romance, pig butchering and elder exploitation",
      table: {
        head: ["Typology", "How it works", "Red flags"],
        rows: [
          ["**BEC** (FIN-2019-A005)", "A spoofed or compromised supplier or executive email redirects a payment", "Request by email to pay a new beneficiary account, often abroad"],
          ["**Romance / elder scam** (FIN-2022-A002)", "Trust is built online, then money is requested", "Sudden large wires to someone never met; reluctance to discuss finances"],
          ["**Pig butchering** (FIN-2023-Alert005)", "A 'wrong number' contact coaches the victim on a fake crypto platform", "HELOC proceeds sent to a VASP; 'taxes' to release profits; a small withdrawal allowed, then larger sums"],
          ["**CVC kiosk scam** (FIN-2025-NTC1)", "A caller poses as tech support, a government agency or another trusted party", "Older victim withdraws cash while on the phone, then uses a crypto ATM"]
        ]
      },
      list: [
        "**BEC**: request a **recall** and report to the FBI's **IC3** at once. Recovery works best within **24 hours**, and the SAR is still due.",
        "Pig butchering is run from Southeast Asian **scam centres** using **trafficked** workers. FinCEN now calls it a **digital asset investment scam** (changed September 2026).",
        "**FINRA Rule 2165** lets a broker-dealer hold disbursements for a **Specified Adult** (65+ or impaired). It must notify the trusted contact within **2 business days**, unless that person is suspected.",
        "UK **APP fraud** (since **7 October 2024**): reimbursement up to **£85,000**, cost split **50:50** between sending and receiving firms; vulnerable customers face no excess or gross-negligence refusal."
      ],
      tip: "Exam tip: an 81-year-old withdrawing $9,000 three times on a phone caller's instructions is a scam victim, not a structurer."
    },
    {
      h: "Check fraud, synthetic identities, deepfakes and mules",
      list: [
        "**Check washing** (FIN-2023-Alert003): checks stolen from the mail are chemically altered to change the payee and amount. Sign: a mailed check never arrived.",
        "**Synthetic identity**: combined PII is used to invent a person who builds good credit, then **busts out** by maxing every line. No real victim complains, unlike in **account takeover**.",
        "**Deepfakes** (FIN-2024-Alert004): webcam plugins at live verification, repeated 'glitches', refusal of MFA. Hold the opening, verify another way, consider a SAR.",
        "**Money mules** are **unwitting**, **witting** or **complicit** (FBI), often recruited via fake jobs or romance scams; students, the elderly and recent immigrants are targeted."
      ],
      remember: "Synthetic identity: an invented person, a bust-out and no victim who complains."
    },
    {
      h: "Anti-bribery laws: FCPA, UK Bribery Act, OECD, UNCAC",
      table: {
        head: ["Instrument", "Scope", "Key points"],
        rows: [
          ["**FCPA** anti-bribery (US)", "Issuers, domestic concerns and anyone in US territory **corruptly** paying a **foreign official** to win business", "Narrow **facilitating payments** exception. Defences: lawful under the **written** local law; bona fide expenditure"],
          ["**FCPA** accounting provisions", "**Issuers**", "Accurate **books and records** and **internal accounting controls**; no corrupt intent needed"],
          ["**UK Bribery Act 2010**", "**s.1** bribing, **s.2** being bribed, **s.6** bribing a foreign public official, **s.7** failure to prevent", "Covers **private-sector** bribery; **no facilitation exemption**; individuals face up to **10 years**"],
          ["**OECD Convention** (1997)", "**Supply-side** bribery of **foreign public officials**", "Peer review by the **Working Group on Bribery**"],
          ["**UNCAC** (2003)", "Public and private sectors, active and passive bribery, **illicit enrichment**", "**Asset recovery** is a **fundamental principle** (Art. 51)"]
        ]
      },
      p: [
        "Under **s.7** any company doing business in the UK is liable when an **associated person** bribes for its benefit; the only defence is **adequate procedures**. Glencore Energy (UK) pleaded guilty to seven Bribery Act counts in 2022 (**£280 million**)."
      ],
      tip: "Exam tip: facilitation payments are the classic trap: a narrow FCPA exception, but bribes under the UK Act. Bribes booked as 'consulting fees' breach the FCPA books-and-records rules even without proof of intent."
    },
    {
      h: "PEPs, kleptocracy and corruption red flags",
      p: [
        "Corrupt officials rarely hold bribes in their own name. FATF's corruption report shows **PEPs** using **family members and close associates**, corporate vehicles and gatekeepers, with bribes disguised as **consulting contracts**. That is why **R.12** covers them too."
      ],
      list: [
        "**Foreign PEPs** (R.12) need **senior management approval**, measures to establish **source of wealth and source of funds**, and **enhanced ongoing monitoring**. **Domestic** and **international organisation** PEPs need these only if higher risk. PEP status alone is no reason to refuse a legitimate customer (UNCAC Art. 52).",
        "US: the CDD Rule sets no special PEP steps, but **31 CFR 1010.620** requires enhanced scrutiny of **senior foreign political figures'** **private banking accounts** for **proceeds of foreign corruption**.",
        "Red flags: a PEP relative's new company receives 'advisory fees' from a contractor that has just won a public contract; **excessive or success-based commissions**; payments to **offshore accounts in another name**; wealth beyond lawful income (**illicit enrichment**).",
        "Cases: at **Riggs** (2004) one unsupervised relationship manager ran a foreign-government PEP relationship. **Goldman/1MDB** (2020) missed obvious red flags. **Credit Suisse/Mozambique** (2021) ignored the lack of public procurement and a 'master of kickbacks' contractor.",
        "**Non-conviction-based confiscation** (R.4) recovers criminal property without a conviction, useful when kleptocrats are out of reach."
      ],
      remember: "Bribes hide in consulting fees and commissions paid to relatives and offshore companies."
    },
    {
      h: "Tax crimes and the UK 'failure to prevent' offences",
      p: [
        "Since **2012**, **tax crimes** have been a designated predicate, so laundering tax-evasion proceeds is money laundering; lawful tax planning is not.",
        "**VAT carousel (MTIC) fraud**: a **missing trader** imports goods VAT-free from another EU state, charges VAT on resale and vanishes without paying it. The goods (typically **mobile phones and computer chips**) then pass through buffer companies and are re-exported."
      ],
      table: {
        head: ["UK offence", "Committed when", "Defence"],
        rows: [
          ["Bribery Act 2010 **s.7**", "An associated person bribes for the organisation", "**Adequate procedures**"],
          ["Criminal Finances Act 2017 **s.45** (UK tax) and **s.46** (foreign tax)", "An associated person **criminally facilitates** tax evasion", "**Reasonable prevention procedures**"],
          ["ECCTA 2023 **s.199**, in force **1 September 2025** (changed September 2025)", "An associated person commits fraud **intending to benefit** the organisation or its clients; **large organisations** only (2 of 3: over 250 staff, £36m turnover, £18m balance sheet)", "**Reasonable prevention procedures**"]
        ]
      },
      tip: "Exam tip: none requires senior management knowledge, so the 'directing mind' test is bypassed. Fraud against the organisation itself, such as embezzlement, is outside s.199."
    },
    {
      h: "Cybercrime, ransomware and sextortion",
      list: [
        "**Ransomware**: paying a sanctioned actor can breach US sanctions on a **strict liability** basis (OFAC, 2021). Licence applications face a **presumption of denial**, and prompt reporting to law enforcement is a significant **mitigating factor**.",
        "**DFIR firms or cyber insurers** that convert a victim's funds into CVC and pay the attackers may be conducting **money transmission** (FIN-2021-A004).",
        "**Cyber-events** (FIN-2016-A005): an intrusion aimed at moving funds is an **attempted** transaction. A SAR is required at **$5,000** or more even if nothing is lost. Include IP addresses with timestamps and device identifiers.",
        "**Sextortion** (FIN-2025-NTC2): victims, often minors, send small, round-dollar P2P payments late at night to places such as Côte d'Ivoire or Nigeria, with memos like 'please stop'. Mule accounts receive P2P from unrelated senders and pass it on fast."
      ],
      tip: "Exam tip: CTRs cover physical currency only. A crypto ransom can require a SAR and sanctions screening, never a CTR."
    },
    {
      h: "Human trafficking, smuggling and environmental crime",
      table: {
        head: ["Feature", "Human smuggling", "Human trafficking"],
        rows: [
          ["Consent", "The migrant **chooses** to cross illegally", "**Force, fraud or coercion** and exploitation"],
          ["Border", "Always an illegal crossing or harbouring", "**No border** needed"],
          ["Money", "A **one-off fee**, often part before departure and the rest on arrival, paid by relatives", "**Ongoing** proceeds from forced labour or commercial sex"]
        ]
      },
      list: [
        "Trafficking red flags (FIN-2020-A008): a **third party speaks for the customer** or holds their ID or money; payments for hotels and **online classified** sites; **front companies** (massage businesses, bars, cantinas).",
        "Environmental crime yields an estimated **USD 110-281 billion** a year (FATF, 2021). FinCEN names **wildlife trafficking, illegal logging, illegal fishing, illegal mining** and **waste trafficking**. It is laundered mainly through **trade**: mislabelled protected wood or waste, **front companies** and **third-party payments**.",
        "**Illegal mining** both generates proceeds and **launders** the proceeds of other crimes (FIN-2021-NTC4)."
      ],
      remember: "Smuggling is a crime against the border and is paid once. Trafficking is a crime against the person and keeps paying."
    },
    {
      h: "Drugs, fentanyl and Chinese money laundering networks",
      list: [
        "The **Vienna Convention (1988)** made laundering **drug trafficking** proceeds a crime; **Palermo (2000)** widened it to serious crime.",
        "**Fentanyl precursors** (FIN-2024-A002): Mexican importers with little online presence sharing phone numbers; many low-value payments to **PRC or Hong Kong** chemical suppliers or for **pill presses**.",
        "**Section 2313a** (FEND Off Fentanyl Act): FinCEN's first orders (**June 2025**) banned **transmittals of funds** involving CIBanco, Intercam and Vector, with a compliance date of **20 October 2025** (changed August 2025). Major cartels were designated **FTOs and SDGTs** in February 2025.",
        "**Chinese money laundering networks** (CMLNs, FIN-2025-A003) buy cartel dollars, paying pesos in Mexico through **mirror transactions**, then sell them to Chinese nationals paying renminbi in China to evade the roughly **$50,000** yearly currency limit. **Students** serve as mules."
      ],
      tip: "Exam tip: in the **BMPE**, drug dollars pay for goods exported to Latin America. In a **CMLN** scheme, they are sold to Chinese buyers who pay in renminbi."
    }
  ],
  cards: [
    { front: "Predicate offence vs money laundering", back: "The predicate is the crime that generates proceeds (e.g. fraud). Laundering is dealing with those proceeds. No predicate conviction is needed." },
    { front: "How many FATF designated categories of offences, and since when are tax crimes included?", back: "21 categories. Tax crimes (direct and indirect taxes) were added in the 2012 Recommendations." },
    { front: "Which predicate category does the EU Directive 2018/1673 add to the FATF list?", back: "Cybercrime, giving 22 categories. Self-laundering must also be criminalised." },
    { front: "A BEC wire went out three hours ago. What first?", back: "Ask the beneficiary bank to recall the wire and report to law enforcement (IC3) within 24 hours. A SAR is still required." },
    { front: "Classic pig-butchering transaction pattern", back: "A small 'withdrawal' builds trust, then the victim sends far larger sums; 'taxes' or 'fees' are demanded to release profits." },
    { front: "Can a UK bank get a DAML to pay a romance scammer from a victim's savings?", back: "No. The funds are not criminal property until they reach the fraudster. Use fraud and vulnerable-customer processes instead." },
    { front: "Three kinds of money mule (FBI)", back: "Unwitting (deceived), witting (ignores warning signs, wilfully blind) and complicit (knowingly part of the scheme)." },
    { front: "Synthetic identity bust-out", back: "A fabricated identity builds good credit, then maxes out every credit line and disappears. No real victim reports identity theft." },
    { front: "Facilitation payments: FCPA vs UK Bribery Act", back: "The FCPA has a narrow exception for routine governmental action. The UK Bribery Act has no exemption: they are bribes." },
    { front: "What do the FCPA accounting provisions require, and from whom?", back: "Issuers must keep accurate books and records and adequate internal accounting controls. No corrupt intent needs to be proved." },
    { front: "OECD Convention vs UNCAC", back: "OECD (1997): supply-side bribery of foreign public officials, with peer review. UNCAC (2003): broad scope; asset recovery is a fundamental principle (Art. 51)." },
    { front: "Defences to the UK failure-to-prevent offences", back: "Bribery Act s.7: adequate procedures. CFA 2017 s.45/46 and ECCTA s.199: reasonable prevention procedures." },
    { front: "What is a missing trader in a VAT carousel?", back: "A company that imports goods VAT-free within the EU, charges VAT on domestic sales and disappears without paying it." },
    { front: "Customer asks help to pay a ransom to an OFAC-designated group", back: "Sanctions violation risk on a strict liability basis. OFAC presumes licence denial; reporting to law enforcement is a mitigating factor." },
    { front: "Human smuggling vs human trafficking", back: "Smuggling: voluntary illegal migration, one-off fee, always a border. Trafficking: force, fraud or coercion, ongoing exploitation, no border needed." },
    { front: "Why is illegal mining a special money laundering concern?", back: "It generates illicit proceeds and also offers a way to launder the proceeds of other crimes (FIN-2021-NTC4)." },
    { front: "How does a Chinese money laundering network settle with a cartel?", back: "Through mirror transactions: pesos are paid to the cartel in Mexico while the network sells its US dollars to Chinese buyers." },
    { front: "What do FinCEN's section 2313a orders do?", back: "Find a foreign institution of primary money laundering concern for opioid trafficking and prohibit transmittals of funds involving it (first used June 2025)." }
  ],
  numbers: [
    { q: "Number of FATF designated categories of predicate offences", a: "21", wrong: ["12", "30", "40"] },
    { q: "FATF revision that added tax crimes as a designated predicate offence", a: "2012", wrong: ["2003", "2008", "2019"] },
    { q: "Window in which reporting BEC fraud to law enforcement gives FinCEN the best chance of recovery", a: "Within 24 hours", wrong: ["Within 72 hours", "Within 7 days", "Within 30 days"] },
    { q: "SAR threshold for an attempted cyber-enabled transaction at a US bank", a: "$5,000 or more", wrong: ["$2,000 or more", "$10,000 or more", "$25,000 or more"] },
    { q: "Maximum mandatory UK APP fraud reimbursement per claim", a: "£85,000", wrong: ["£30,000", "£100,000", "£415,000"] },
    { q: "Date the UK failure to prevent fraud offence (ECCTA s.199) came into force", a: "1 September 2025", wrong: ["1 January 2024", "1 April 2025", "1 January 2026"] },
    { q: "Employee test for a 'large organisation' under ECCTA s.201", a: "More than 250 employees", wrong: ["More than 50 employees", "More than 500 employees", "More than 1,000 employees"] },
    { q: "Maximum prison term for an individual under UK Bribery Act s.1, s.2 or s.6", a: "10 years", wrong: ["5 years", "7 years", "14 years"] },
    { q: "Deadline to notify authorised parties after a FINRA Rule 2165 temporary hold", a: "Within 2 business days", wrong: ["Within 24 hours", "Within 5 business days", "Within 15 business days"] },
    { q: "China's approximate annual limit on individuals' foreign currency conversion, exploited by CMLNs", a: "About $50,000 per year", wrong: ["About $10,000 per year", "About $100,000 per year", "About $250,000 per year"] }
  ],
  questionIds: [
    "D1-034", "D1-035", "D1-036", "D1-037", "D1-038", "D1-039", "D1-040", "D1-041", "D1-043", "D1-044", "D1-045",
    "D2-008", "D2-009", "D2-024", "D2-025", "D2-026", "D2-029", "D3-016", "D3-018",
    "EU-005", "EU-023", "EU-025", "EU-026", "EU-030",
    "CASE-017", "CASE-021", "CASE-022", "CASE-024", "CASE-033",
    "TRAP-003", "TRAP-005", "TRAP-006", "TRAP-009", "TRAP-015", "TRAP-030", "TRAP-032",
    "GLOB-014", "GLOB-015", "GLOB-016", "GLOB-017", "GLOB-018", "GLOB-020", "GLOB-021", "GLOB-022",
    "GLOB-023", "GLOB-024", "GLOB-025", "GLOB-026", "GLOB-029", "GLOB-030",
    "KYC-011"
  ],
  sources: [
    { label: "FATF Recommendations (2026) – R.3, INR.3, R.4, R.12 and Glossary of designated categories of offences (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
    { label: "FinCEN Advisory FIN-2019-A005 – Business email compromise, money mules and the 24-hour recovery window", url: "https://www.fincen.gov/system/files/advisory/2019-07-16/Updated%20BEC%20Advisory%20FINAL%20508.pdf" },
    { label: "FinCEN Alert FIN-2026-Alert005 (September 2026) – Digital asset investment scam centers", url: "https://www.fincen.gov/system/files/2026-08/FinCEN-Alert-Scam-Centers.pdf" },
    { label: "15 U.S.C. 78dd-1 – FCPA anti-bribery provisions, facilitating payments exception and defences (GovInfo)", url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title15/html/USCODE-2023-title15-chap2B-sec78dd-1.htm" },
    { label: "Bribery Act 2010 s.7 – Failure of commercial organisations to prevent bribery", url: "https://www.legislation.gov.uk/ukpga/2010/23/section/7" },
    { label: "Criminal Finances Act 2017 s.45 – Failure to prevent facilitation of UK tax evasion", url: "https://www.legislation.gov.uk/ukpga/2017/22/section/45" },
    { label: "Economic Crime and Corporate Transparency Act 2023 s.199 – Failure to prevent fraud (in force 1 September 2025)", url: "https://www.legislation.gov.uk/ukpga/2023/56/section/199" },
    { label: "UN Convention against Corruption – Arts. 20, 21, 51 and 52", url: "https://www.unodc.org/documents/brussels/UN_Convention_Against_Corruption.pdf" },
    { label: "OFAC Updated Advisory on Sanctions Risks for Facilitating Ransomware Payments (2021)", url: "https://ofac.treasury.gov/media/912981/download?inline" },
    { label: "FinCEN Advisory FIN-2025-A003 (August 2025) – Chinese money laundering networks and mirror transactions", url: "https://www.fincen.gov/system/files/2025-08/FinCEN-Advisory-CMLN-508.pdf" }
  ]
}]);
