window.CAMS_COURSE = (window.CAMS_COURSE || []).concat([{
  id: "m02",
  order: 2,
  domain: 1,
  title: "Terrorist and proliferation financing",
  icon: "🎯",
  minutes: 14,
  summary: "Learn how terrorist financing differs from money laundering, how terrorists and proliferators raise and move funds, and how FATF R.5-R.8 and UN targeted financial sanctions require assets to be frozen without delay.",
  mostTested: [
    "TF vs ML: TF focuses on where funds are going, often involves small amounts and can use legitimate money (FATF R.5 / INR.5)",
    "Self-funding from wages, savings, benefits and small loans for lone actors; FTF red flags such as unpaid consumer loans, travel to high-risk areas and ATM withdrawals near conflict zones",
    "NPO abuse under FATF R.8: diversion of funds and sham charities, managed with focused, risk-based measures, not blanket de-risking",
    "UNSCR 1267 (UN committees designate) vs UNSCR 1373 (countries designate); R.6 covers terrorism TFS, R.7 proliferation TFS",
    "Targeted financial sanctions: freeze without delay (ideally within hours) and without prior notice; R.7 obligations are not risk-based",
    "PF red flags: dual-use goods, transshipment hubs, end-user mismatches, third-party payments; DPRK cyber theft and IT workers",
    "PF risk under R.1 means only the breach, non-implementation or evasion of R.7 TFS; UN Iran sanctions were re-applied in September 2025"
  ],
  sections: [
    {
      h: "Terrorist financing vs money laundering",
      p: [
        "FATF **Recommendation 5** requires countries to criminalise terrorist financing (TF) based on the **Terrorist Financing Convention (1999)**. It covers financing a terrorist act, a **terrorist organisation** or an **individual terrorist**, even with **no link to a specific act**, and TF must be a **predicate offence** for money laundering.",
        "Under INR.5 the funds may be **legitimate or illegitimate**, and they need not be used in an attack."
      ],
      table: {
        head: ["", "Money laundering", "Terrorist financing"],
        rows: [
          ["Main question", "Where did the money come from?", "Where is the money **going**?"],
          ["Source of funds", "Always proceeds of crime", "**Legitimate or illegitimate** (wages, donations, crime)"],
          ["Typical amounts", "Often large, layered through complex structures", "Often **small** and hard to tell from normal activity"]
        ]
      },
      list: [
        "INR.5 also covers financing the **travel** of foreign terrorist fighters and **attempted** TF; intent may be **inferred from objective factual circumstances**.",
        "Criminalising TF only as aiding and abetting, attempt or conspiracy is **not sufficient**."
      ],
      tip: "Exam tip: a small amount does not rule out TF; look at the destination (a conflict zone, a designated group).",
      remember: "ML makes dirty money look clean; TF sends clean or dirty money to a terrorist purpose."
    },
    {
      h: "How terrorists raise, move, store and use funds",
      p: [
        "FATF's **July 2025** TF risk update shows how terrorists **raise, move, store and use** funds. Large groups draw on crime (extortion, kidnapping for ransom, smuggling), natural resources, donations and even **state sponsorship**. Small cells and lone actors need very little."
      ],
      list: [
        "**Self-funding**: salary, savings, social benefits, family support and **small loans**; typical of **lone actors and small cells** and hard to spot.",
        "**NPO abuse**: sham charities or diverted donations (see R.8 below).",
        "**Crowdfunding**: **donation-based** models are the most exposed, often via humanitarian causes and social media.",
        "**Virtual assets**: growing use, with mixers, anonymity-enhanced coins and P2P exchanges.",
        "**Cash couriers**: **R.32** requires a declaration or disclosure system, with a declaration threshold no higher than **USD/EUR 15,000**.",
        "**Hawala and similar providers**: a subset of MVTS relying on **non-bank settlement** through trade and cash, often outside regulated systems.",
        "**Formal system**: accounts, wires, MVTS and **prepaid cards** remain widely used."
      ],
      tip: "Exam tip: for a lone actor's low-cost attack, the best answer is almost always self-funding from legitimate sources."
    },
    {
      h: "NPOs and FATF Recommendation 8",
      p: [
        "FATF **R.8** (revised in **2023**) requires countries to identify NPOs within the FATF's **functional definition**, assess their TF risk and apply **focused, proportionate and risk-based** measures without disrupting legitimate activity. Most NPOs may be **low risk**, and NPOs are **not reporting entities**: they should not be required to conduct CDD."
      ],
      list: [
        "R.8 targets three abuses: terrorist groups **posing as legitimate entities**, legitimate NPOs used as **conduits** (including to escape asset freezes), and the **clandestine diversion** of funds.",
        "FATF's 2014 typology found five types: **diversion of funds** (the most significant), affiliation with a terrorist entity, abuse of programming, support for recruitment, and **sham NPOs**.",
        "**Service NPOs** (humanitarian aid, housing, education, health) operating **close to an active terrorist threat** were the most often abused.",
        "Red flags: **cash couriers** taking NPO funds into areas of terrorist activity, transfers with **vague justifications**, shell organisations used as conduits, and spending that does not match programmes."
      ],
      tip: "Exam tip: exiting every NPO is de-risking. EU (EBA 2023) and US (2022 joint statement) supervisors expect each relationship to be assessed.",
      remember: "R.8: protect NPOs from abuse with risk-based measures, not blanket de-risking."
    },
    {
      h: "Foreign terrorist fighters, lone actors and TF red flags",
      p: [
        "UNSCR **2178 (2014)** describes foreign terrorist fighters (FTFs) as people who travel to another State to commit, plan or train for terrorist acts. Since **October 2015**, INR.5 requires countries to criminalise financing that travel."
      ],
      list: [
        "**Consumer loans** or overdrafts withdrawn in cash and never repaid; sudden **sale of personal assets**.",
        "Flights, visas or accommodation for travel to or near **high-risk areas**.",
        "**ATM withdrawals** near territory held by a terrorist group, or deposits followed by **immediate foreign cash withdrawals**.",
        "Many **unrelated people** sending small transfers to one beneficiary in or near a high-risk area.",
        "A sudden switch to **P2P transfers or prepaid cards**; signs of **radicalisation** online; young people (FATF cites ages **17-26**) opening accounts and moving funds out quickly."
      ],
      table: {
        head: ["US reporting point", "Rule (31 CFR 1020.320)"],
        rows: [
          ["Mandatory bank SAR", "Suspicious activity of **$5,000** or more"],
          ["Below the threshold", "The bank **may file voluntarily**"],
          ["Ongoing TF needing immediate attention", "**Telephone** law enforcement immediately, and file a timely SAR"]
        ]
      },
      tip: "Exam tip: the SAR threshold is a filing rule, not a risk test. Suspected TF under $5,000 still justifies a voluntary SAR; never tip off the customer.",
      remember: "TF red flags: travel, conflict zones, many small senders, sudden cash-out."
    },
    {
      h: "UN resolutions 1267 and 1373 (FATF R.6)",
      p: [
        "FATF **R.6** requires targeted financial sanctions (TFS) under two families of UN Security Council resolutions. The exam likes to ask **who designates**."
      ],
      table: {
        head: ["", "UNSCR 1267 (1999) and successors", "UNSCR 1373 (2001)"],
        rows: [
          ["Targets", "**ISIL (Da'esh) and Al-Qaida** (1267 Committee); the **Taliban** (1988 Committee)", "Anyone who commits, attempts or finances terrorist acts"],
          ["Who designates", "**UN Security Council committees**; countries only propose names", "**Countries** (or the EU), on their **own motion** or at **another country's request**"],
          ["Standard", "Committee listing criteria", "**Reasonable grounds** or reasonable basis; no criminal proceeding needed"],
          ["Other measures", "Asset freeze, travel ban, arms embargo", "Criminalise TF; created the **Counter-Terrorism Committee**"]
        ]
      },
      tip: "Exam tip: a country designating on its own initiative or at a foreign request acts under UNSCR 1373; a UN committee listing an ISIL or Al-Qaida affiliate is 1267.",
      remember: "1267: the UN lists. 1373: countries list."
    },
    {
      h: "Targeted financial sanctions: freezing without delay",
      p: [
        "Under **R.6** (terrorism) and **R.7** (proliferation), every natural and legal person must freeze **without delay and without prior notice** the funds or other assets of designated persons, and must not make funds available to them **directly or indirectly** unless authorised."
      ],
      list: [
        "**Without delay** means, ideally, **within a matter of hours** of a UN designation; for 1373, as soon as there are **reasonable grounds** to suspect or believe.",
        "The freeze covers assets **owned or controlled** (wholly or jointly, directly or indirectly), **derived** assets, and assets of persons acting **on behalf of** a designated person.",
        "Institutions **report** frozen assets and **attempted transactions**. In the US, blocking reports are due to OFAC within **10 business days**, and **Executive Order 13224** (2001) is the main counter-terrorism blocking authority.",
        "Countries must protect **bona fide third parties**, promptly unfreeze **false positives** and offer delisting.",
        "INR.6 now includes the UN **humanitarian exemption** (UNSCRs 2664 and 2761) (changed June 2026)."
      ],
      tip: "Exam tip: TFS are not risk-based. Freeze on a confirmed match whatever the amount; do not warn the customer or wait weeks for a domestic gazette.",
      remember: "Freeze without delay, without prior notice, then report."
    },
    {
      h: "Proliferation financing and FATF R.7",
      p: [
        "In FATF's working definition, proliferation financing (PF) is **providing financial services** for the transfer and export of **nuclear, chemical or biological weapons**, their **means of delivery** and related materials. In the FATF Standards, PF obligations sit only in **R.1, R.2, R.7 and R.15**.",
        "**R.7** requires TFS against persons designated by the **UN Security Council** under **UNSCR 1718 (2006)** and successors (**DPRK**) and resolutions **1737, 1747, 1803 and 1929** (**Iran**). Unlike R.6, it has **no national designation** obligation.",
        "France, Germany and the UK triggered the UNSCR 2231 **snapback** on 28 August 2025. The UN Iran measures were re-applied on **27 September 2025** (changed September 2025), and INR.7 was updated to list them (changed October 2025). Keep screening against the UN Iran list."
      ],
      list: [
        "**UNSCR 1540 (2004)** is different: States must prohibit **non-State actors** from acquiring WMD, including **financing** them, and must control exports and related financing. It has no designation list."
      ],
      tip: "Exam tip: R.6 = terrorism, with UN (1267) and national (1373) designations. R.7 = proliferation, with UN designations only."
    },
    {
      h: "PF typologies: dual-use goods, DPRK and Iran",
      p: [
        "PF is harder to detect than ML: the funds may be **legitimate**, payments look like **ordinary trade**, and **dual-use goods** (items with both commercial and weapons uses) are hard to identify. Networks use front companies and **transshipment hubs** to hide the true end-user."
      ],
      list: [
        "Trading companies in jurisdictions with **weak export controls**, or routes through **transshipment** or diversion points.",
        "Goods that do not fit the customer's business or the destination's **technical level**; a **freight forwarder** named as final destination.",
        "Missing or inconsistent end-user details, or an order placed from a country **other than the end-user's**.",
        "Payments involving **parties not named** in the letter of credit; circuitous routes; possible shell companies."
      ],
      table: {
        head: ["Actor", "Methods to watch", "Purpose"],
        rows: [
          ["**DPRK**", "Virtual asset theft (the **$1.5 billion Bybit** hack, February 2025); **IT workers** posing as non-North Koreans; ship-to-ship transfers and AIS manipulation", "Revenue for **WMD and missile** programmes"],
          ["**Iran**", "**Shadow banking** through exchange houses and front companies (largely in the UAE and Hong Kong); oil smuggling; procurement agents in third countries", "Oil revenue funds **missile and UAV** procurement and proxies"]
        ]
      },
      tip: "Exam tip: crypto stolen and laundered by DPRK-linked actors is proliferation financing and sanctions evasion, not just theft."
    },
    {
      h: "Assessing PF risk (R.1 and R.2)",
      p: [
        "Since **October 2020**, R.1 requires countries, financial institutions and DNFBPs to **identify, assess and mitigate** PF risk. Here PF risk means **strictly and only** the potential **breach, non-implementation or evasion** of the R.7 targeted financial sanctions. R.2 adds national **CPF cooperation and coordination**."
      ],
      list: [
        "PF risk may be assessed **within the existing TFS or compliance programme**; no stand-alone PF programme is required, but the assessment must be **documented**, kept up to date and proportionate to the business.",
        "Policies, controls and procedures must be **approved by senior management**.",
        "Countries may **exempt** a type of institution from PF risk assessment if its PF risk is assessed as **low**, but **full implementation of R.7 is mandatory in all cases**."
      ],
      remember: "Assess PF risk on a risk basis; apply R.7 freezes always."
    }
  ],
  cards: [
    { front: "Main difference between ML and TF", back: "ML hides the illicit source of funds; TF is about their destination and use, and the funds may be legitimate." },
    { front: "Does the TF offence need a link to a specific terrorist act?", back: "No. Under INR.5, funding a terrorist organisation or individual terrorist is enough; the funds need not be used in an attack." },
    { front: "Typical funding source for lone actors and small cells", back: "Self-funding from legitimate sources: salary, savings, social benefits, family support and small loans (FATF 2025)." },
    { front: "Which crowdfunding model is most exposed to TF abuse?", back: "Donation-based crowdfunding, often through humanitarian causes, social media and messaging apps, sometimes paid in virtual assets." },
    { front: "Most significant type of NPO abuse (FATF 2014)", back: "Diversion of funds to terrorist entities by insiders or external partners; service NPOs near active threats are most exposed." },
    { front: "Must NPOs perform CDD under FATF R.8?", back: "No. NPOs are not reporting entities. R.8 requires focused, proportionate, risk-based measures, not blanket controls." },
    { front: "Classic FTF financing red flags", back: "Unpaid consumer loans withdrawn in cash, sale of assets, travel to high-risk areas, ATM withdrawals near conflict zones." },
    { front: "UNSCR 1267 vs 1373: who designates?", back: "1267: UN committees (ISIL/Al-Qaida; the 1988 Committee for the Taliban). 1373: countries, on their own motion or another country's request." },
    { front: "What does \"without delay\" mean for a UN designation?", back: "Ideally within a matter of hours of the designation (FATF Glossary)." },
    { front: "May a bank warn the customer before freezing?", back: "No. Targeted financial sanctions require freezing without delay and without prior notice." },
    { front: "Does R.7 require national PF designations?", back: "No. R.7 covers UN Security Council designations only: 1718 for the DPRK, and 1737 and related resolutions for Iran." },
    { front: "Are UN proliferation sanctions on Iran in force?", back: "Yes. They were re-applied by snapback on 27 September 2025, and INR.7 was updated in October 2025." },
    { front: "What does UNSCR 1540 (2004) require?", back: "All States must prohibit non-State actors from acquiring WMD, including financing them, and control exports and related financing." },
    { front: "Why is PF harder to detect than ML?", back: "Funds may be legitimate, payments look like normal trade, and dual-use goods and true end-users are hidden." },
    { front: "PF risk under FATF R.1 means…", back: "Strictly and only the potential breach, non-implementation or evasion of the R.7 targeted financial sanctions." },
    { front: "Can a low-risk sector be exempted from R.7 freezing?", back: "No. It may be exempted from PF risk assessment, but R.7 targeted financial sanctions apply in full in all cases." },
    { front: "DPRK revenue schemes to know", back: "Virtual asset theft (Bybit, $1.5 billion, 2025), IT workers using false identities, ship-to-ship transfers." },
    { front: "US bank response to suspected ongoing TF", back: "File a timely SAR (voluntarily if under $5,000) and immediately notify law enforcement by telephone; do not tip off." }
  ],
  numbers: [
    { q: "FATF Recommendation that criminalises terrorist financing", a: "R.5", wrong: ["R.3", "R.6", "R.8"] },
    { q: "FATF Recommendation on targeted financial sanctions for terrorism", a: "R.6", wrong: ["R.5", "R.7", "R.8"] },
    { q: "FATF Recommendation on targeted financial sanctions for proliferation", a: "R.7", wrong: ["R.6", "R.1", "R.15"] },
    { q: "FATF Recommendation on non-profit organisations", a: "R.8", wrong: ["R.5", "R.10", "R.24"] },
    { q: "UN resolution under which countries designate terrorists themselves", a: "UNSCR 1373 (2001)", wrong: ["UNSCR 1267 (1999)", "UNSCR 1718 (2006)", "UNSCR 1540 (2004)"] },
    { q: "UN resolution establishing DPRK proliferation sanctions", a: "UNSCR 1718 (2006)", wrong: ["UNSCR 1737 (2006)", "UNSCR 1373 (2001)", "UNSCR 2231 (2015)"] },
    { q: "\"Without delay\" for freezing after a UN designation ideally means", a: "Within a matter of hours", wrong: ["Within 3 business days", "Within 10 business days", "Within 30 calendar days"] },
    { q: "Date the UN proliferation sanctions on Iran were re-applied (snapback)", a: "27 September 2025", wrong: ["28 August 2025", "18 October 2025", "14 July 2015"] },
    { q: "Maximum FATF declaration threshold for cross-border cash (R.32)", a: "USD/EUR 15,000", wrong: ["USD/EUR 10,000", "USD/EUR 5,000", "USD/EUR 50,000"] },
    { q: "US deadline to report blocked property to OFAC", a: "Within 10 business days", wrong: ["Within 5 business days", "Within 30 calendar days", "Within 24 hours"] }
  ],
  questionIds: [
    "D1-008", "D1-023", "D1-025", "D1-026", "D1-027", "D1-028", "D1-029", "D1-030",
    "D2-010", "D3-035",
    "TRAP-004", "TRAP-019",
    "SANC-023", "SANC-024", "SANC-025", "SANC-026", "SANC-027", "SANC-033",
    "EU-012", "KYC-012", "INV-007"
  ],
  sources: [
    { label: "FATF Recommendations (2026) – R.1, R.2, R.5-R.8, R.32, their Interpretive Notes and Glossary 'without delay' (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
    { label: "FATF (July 2025) Comprehensive Update on Terrorist Financing Risks (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/Public_typology_reports/Comprehensive-Update-on-Terrorist-Financing-Risks-2025.pdf.coredownload.inline.pdf.pdf" },
    { label: "FATF (2015) Financing of the Terrorist Organisation ISIL – FTF funding (EAG copy)", url: "https://eurasiangroup.org/files/FATF_docs/Financing-of-the-terrorist-organisation-ISIL.pdf" },
    { label: "FATF (2014) Risk of Terrorist Abuse in Non-Profit Organisations (EAG copy)", url: "https://eurasiangroup.org/files/FATF_docs/Risk-of-terrorist-abuse-in-non-profit-organisations.pdf" },
    { label: "FATF (2008) Typologies Report on Proliferation Financing – dual-use goods and PF indicators (EAG copy)", url: "https://eurasiangroup.org/files/FATF_docs/Typologies_Report_on_Proliferation_Financing.pdf" },
    { label: "UN Security Council resolution 1540 (2004)", url: "https://documents.un.org/doc/undoc/gen/n04/328/43/pdf/n0432843.pdf" },
    { label: "E3 joint statement on Iran: activation of the snapback (28 September 2025)", url: "https://www.gov.uk/government/news/e3-joint-statement-on-iran-activation-of-the-snapback" },
    { label: "FinCEN Advisory FIN-2025-A002 – Iranian oil smuggling, shadow banking and weapons procurement", url: "https://www.fincen.gov/system/files/advisory/2025-06-06/FinCEN-Advisory-Illicit-Oil-Smuggling-508.pdf" },
    { label: "FBI PSA I-022625-PSA – North Korea responsible for $1.5 billion Bybit hack", url: "https://www.ic3.gov/PSA/2025/PSA250226" },
    { label: "eCFR 31 CFR 1020.320 – bank SARs: $5,000 threshold, voluntary filing, immediate telephone notice", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.320" }
  ]
}]);
