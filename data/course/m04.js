window.CAMS_COURSE = (window.CAMS_COURSE || []).concat([{
  id: "m04",
  order: 4,
  domain: 1,
  title: "Virtual assets and emerging technology risks",
  icon: "🪙",
  minutes: 15,
  summary: "Master how the FATF, the US and the EU regulate virtual assets and VASPs, how criminals obscure crypto flows and how analytics trace them, the OFAC rules for crypto, and the fraud risks of deepfakes, crypto kiosks and bank-fintech partnerships.",
  mostTested: [
    "FATF R.15: VASPs licensed or registered (at least where created), supervised by a competent authority, CDD on occasional transactions from USD/EUR 1,000",
    "Travel rule: FATF de minimis of no more than USD/EUR 1,000; US Funds Travel Rule $3,000 (CVC included); EU TFR has no threshold; unhosted wallets",
    "FinCEN 2019 CVC guidance: exchangers, hosted wallets, kiosks, P2P exchangers and mixers are money transmitters; users and unhosted wallets are not",
    "Obfuscation red flags: mixers, privacy coins, chain hopping, peel chains, NFT wash trading, nested VASPs",
    "Blockchain analytics: co-spend clustering, attribution, direct vs indirect exposure (pseudonymous, not anonymous)",
    "OFAC and crypto: SDN wallet addresses, block and report within 10 business days, strict liability on ransom payments; Tornado Cash delisted in March 2025 but mixer exposure is still ML risk",
    "Deepfake onboarding red flags (FIN-2024-Alert004), and BaaS: the bank stays responsible for its fintech partner's CIP and monitoring"
  ],
  sections: [
    {
      h: "Virtual assets, VASPs and Recommendation 15",
      p: [
        "A **virtual asset (VA)** is a digital representation of value that can be traded or transferred and used for payment or investment. Digital fiat currencies and securities are excluded. A **VASP** carries out, as a business for another person, one of **five activities**:",
        "**R.15** was revised in **October 2018**, and its Interpretive Note was added in **June 2019**. VASPs must be **licensed or registered**, at a minimum where they are **created**, and supervised by a **competent authority, not an SRB**. CDD on occasional transactions applies from **USD/EUR 1,000**. R.15 also requires a risk assessment of **new products and technologies before launch**."
      ],
      list: [
        "Exchange between VAs and **fiat** currencies",
        "Exchange between **one or more forms of VAs**",
        "**Transfer** of VAs",
        "**Safekeeping and/or administration** of VAs (custody)",
        "Financial services related to an issuer's **offer or sale** of a VA"
      ],
      tip: "Exam tip: the test is functional. An NFT used for payment or investment can be a VA. DeFi software is not a VASP, but owners or operators with **control or sufficient influence** can be.",
      remember: "VASPs: licensed or registered where created, supervised by a competent authority, CDD from USD/EUR 1,000."
    },
    {
      h: "The travel rule: FATF, US and EU",
      p: [
        "**INR.15 para 7(b)** applies **R.16** to VA transfers. The originating VASP **submits** originator and beneficiary information to the beneficiary VASP immediately and securely, not necessarily on-chain. Under R.16 as **revised in June 2025** (changed June 2025), transfers above the threshold carry names, account numbers, the originator's **address**, a natural person's **date of birth** and, where one exists, a legal person's **LEI**."
      ],
      table: {
        head: ["Regime", "Threshold", "Key point"],
        rows: [
          ["FATF R.16 and INR.15", "De minimis of **no more than USD/EUR 1,000**", "Below it: names and account numbers, not verified unless suspicious"],
          ["US Funds Travel Rule, 31 CFR 1010.410(f)", "**$3,000 or more**, CVC equivalent included", "FinCEN's 2019 guidance confirms it covers CVC"],
          ["EU Transfer of Funds Regulation 2023/1113 (from 30 December 2024)", "**No threshold** for crypto transfers", "To a self-hosted address above **EUR 1,000**: assess whether the customer owns or controls it"]
        ]
      },
      list: [
        "**Unhosted wallets:** collect the data **from your own customer**, then monitor and screen the transfer.",
        "**Missing data or the sunrise issue** (counterparty in a country without travel-rule law): apply risk-based policies to **execute, reject or suspend**, then follow up (INR.16 para 31, changed October 2025).",
        "**EU:** MiCA grandfathering for CASPs ended by **1 July 2026** (changed July 2026). From **10 July 2027** the AMLR bans accounts allowing anonymisation, including via **anonymity-enhancing coins**."
      ],
      tip: "Exam tip: a $2,000 US crypto withdrawal is below the $3,000 US rule, but a foreign VASP applying FATF's USD 1,000 threshold can still ask for the data."
    },
    {
      h: "US rules: CVC money transmitters and stablecoins",
      p: [
        "FinCEN's **May 2019 guidance (FIN-2019-G001)** applies the MSB rules to **convertible virtual currency (CVC)**. **Exchangers and administrators** are money transmitters; **users** are not. An MSB is a person **wherever located** doing business wholly or in substantial part in the US. It registers within **180 days** and files SARs from **$2,000**."
      ],
      table: {
        head: ["Money transmitter", "Not a money transmitter"],
        rows: [
          ["**Hosted wallet** provider", "**Unhosted wallet** user buying goods for herself"],
          ["**CVC kiosk** owner-operator", "Miner spending mined CVC on his own behalf"],
          ["**P2P exchanger** trading CVC as a business", "**Anonymizing software** provider (supplies tools only)"],
          ["**Mixer/tumbler** (anonymizing service); DApps that transmit value", "Multi-signature provider that only adds a second key"]
        ]
      },
      list: [
        "Banking a crypto exchanger: **minimum** MSB due diligence is CIP, confirming **FinCEN registration**, **state licensing** and agent status, and a basic risk assessment.",
        "Treasury's **2023 DeFi assessment**: a DeFi service acting as a financial institution has BSA duties, **fully decentralized** or not.",
        "**GENIUS Act** (signed **18 July 2025**, changed July 2025): permitted payment stablecoin issuers hold reserves **at least 1:1** and are **BSA financial institutions**. They need AML, CIP and sanctions programs, suspicious transaction reporting and the ability to **block, freeze and reject** transactions.",
        "The Act takes effect by **18 January 2027** at the latest; the FinCEN/OFAC issuer rule proposed in **April 2026** is not yet final."
      ],
      remember: "Exchangers, administrators and mixers transmit money; users do not."
    },
    {
      h: "Laundering techniques and red flags",
      table: {
        head: ["Technique", "How it works", "What to look for"],
        rows: [
          ["**Mixer/tumbler**", "Pools users' coins and pays out unlinked coins; **CoinJoin** merges payments into one transaction", "Funds received directly from a mixer"],
          ["**Privacy coins (AECs)**, e.g. Monero", "**Ring signatures and stealth addresses** hide sender, receiver and amount", "Bitcoin deposited, swapped at once into an AEC and withdrawn"],
          ["**Chain hopping**", "Fast swaps across assets and blockchains via **bridges** or DeFi, often into **stablecoins**", "Conversions with no business purpose despite fees"],
          ["**Peel chain**", "A large balance moves through new addresses, peeling off small amounts", "Long chains of similar transfers to several VASPs"],
          ["**NFT self-laundering**", "Buy with dirty funds, sell to yourself (**wash trading**), then to a real buyer", "Repeated sales between linked wallets"],
          ["**Nested VASP**", "An unlicensed VASP serves its own customers through an account at a licensed VASP", "Exchange-like volumes from many unrelated wallets"]
        ]
      },
      list: [
        "Deposits **structured** below thresholds; bursts of high-value transfers",
        "Deposit then immediate withdrawal, with no trading rationale",
        "Funds linked to **darknet markets, ransomware, theft or sanctioned addresses**",
        "Tor, VPN or sanctioned-country IP addresses; many wallets run from one IP"
      ],
      tip: "Exam tip: a **hardware or paper wallet** is not suspicious on its own; read it in context."
    },
    {
      h: "Blockchain analytics: clustering, attribution, exposure",
      list: [
        "**Clustering** groups addresses believed to belong to one entity. The **common-input-ownership (co-spend) heuristic** assumes that all inputs to one transaction share an owner.",
        "**Attribution** labels clusters as an exchange, darknet market, mixer, ransomware wallet or **SDN**.",
        "**Exposure** is **direct** (straight from a mixer or darknet market) or **indirect** (through intermediate hops).",
        "**Taint** methods differ: **poison** treats every output as 100% tainted, **haircut** assigns taint pro rata (3 stolen of 10 BTC gives 30%), **FIFO** treats the first coins in as the first out."
      ],
      p: [
        "A mixer or darknet-market hit calls for a source-of-funds review, **EDD** and a **SAR** decision. A bridge moves the trail to another chain without breaking it: the FBI tied the **$1.5 billion Bybit** hack (February 2025) to North Korean **TraderTraitor** actors and asked VASPs to block derived funds."
      ],
      remember: "Pseudonymous is not anonymous: cluster, attribute, then measure direct and indirect exposure."
    },
    {
      h: "Sanctions: OFAC, Tornado Cash and the DPRK",
      p: [
        "OFAC has listed **digital currency addresses** in SDN entries since **2018**. Sanctions duties are the same as for fiat and liability is **strict**. A US person holding blocked VC must **deny all parties access** (no conversion to fiat is required), report it within **10 business days** and then annually, and keep records for **10 years**."
      ],
      list: [
        "OFAC's 2021 industry guidance expects **geolocation and IP blocking**, wallet-address screening and a **historic lookback** after listings, covering unlisted addresses in the same wallet.",
        "**Blender.io** (May 2022) was the first mixer sanctioned; **Tornado Cash** followed in **August 2022**. The Fifth Circuit's **Van Loon** ruling (**November 2024**) held that its immutable smart contracts are not blockable property, and Treasury **delisted it on 21 March 2025**.",
        "In **August 2025** co-founder Roman Storm was convicted of conspiring to run an **unlicensed money transmitting business** that moved over **$1 billion** of criminal proceeds.",
        "DPRK crypto theft funds **WMD and missile programmes**, so it is also a **proliferation financing** risk."
      ],
      tip: "Exam tip: a Tornado Cash deposit is no longer a sanctions hit, but mixer exposure is still an ML red flag needing risk-based review. Funds from an **SDN-listed address** are blocked, never returned."
    },
    {
      h: "Enforcement cases to know",
      table: {
        head: ["Case", "Action", "Lesson"],
        rows: [
          ["**Liberty Reserve** (2013)", "First **Section 311** action against a virtual currency provider", "Only an email to register; unlimited accounts; third-party exchangers"],
          ["**Bitzlato** (2023)", "First order under **Section 9714**", "Transmittals of funds barred; served Russian ransomware groups"],
          ["**Binance** (2023)", "**$3.4 billion** FinCEN and **$968 million** OFAC settlements", "Unregistered MSB serving US users; sanctions compliance must start on **Day One**"],
          ["**Coinbase** (NYDFS, 2023)", "$50 million penalty plus $50 million compliance investment", "Backlog of **100,000+** alerts led to late SARs"],
          ["**Huione Group** (2025)", "Section 311 final rule, **October 2025**", "Laundered Lazarus hack and pig-butchering proceeds"]
        ]
      }
    },
    {
      h: "Ransomware, crypto kiosks and scams",
      p: [
        "Paying a ransom to a sanctioned actor can breach sanctions on a **strict liability** basis, and OFAC reviews licence requests with a **presumption of denial**. Prompt reporting to law enforcement and full cooperation are **significant mitigating factors**. FinCEN (FIN-2021-A004) flags **DFIR firms** that receive a victim's funds and quickly send the same amount to an exchange, and **Monero** demands. SARs cover **attempts**.",
        "**CVC kiosk** operators are money transmitters. FinCEN's notice **FIN-2025-NTC1 (August 2025)** cites **$246.7 million** of reported kiosk losses in 2024; people aged **60+** were over three times as likely to report a loss. In **pig butchering**, a small 'withdrawal' builds trust before far larger transfers (often HELOC-funded), then 'taxes' are demanded to release profits."
      ],
      tip: "Exam tip: an elderly customer withdrawing cash on a caller's instructions is a **scam victim**, not a structurer."
    },
    {
      h: "Deepfakes, neobanks and BaaS",
      p: [
        "FinCEN's alert **FIN-2024-Alert004 (November 2024)** describes criminals using **GenAI** to fake ID documents, photos and video, often for **synthetic identities**. SAR key term: **FIN-2024-DEEPFAKEFRAUD**; MFA and live verification are recommended."
      ],
      list: [
        "Onboarding red flags: a photo inconsistent with the date of birth, a **third-party webcam plugin**, 'glitches' and requests to switch channel, **declining MFA**, a reverse-image match with GenAI faces.",
        "Later signs: rapid transactions, payments to gambling sites and **digital asset exchanges**, high **chargebacks**. Re-reviewing onboarding documents often exposes them.",
        "**Neobanks and BaaS:** fintech apps offer accounts through a partner bank. Whoever performs CIP or monitoring, **the bank remains responsible** (interagency statement, July 2024).",
        "CIP reliance is allowed only on an institution **subject to an AML program rule and a federal functional regulator** that certifies annually. An unregulated fintech does not qualify (Federal Reserve action against **Evolve**, June 2024)."
      ],
      remember: "You can outsource the task, never the accountability."
    }
  ],
  cards: [
    { front: "The five VASP activities in the FATF Glossary", back: "Exchange VA-fiat; exchange VA-VA; transfer; safekeeping or administration; financial services for an issuer's offer or sale of a VA." },
    { front: "Where must a VASP be licensed or registered under INR.15?", back: "At a minimum where it is created. Host countries may also require it. Supervision is by a competent authority, not an SRB." },
    { front: "Is a DeFi protocol a VASP?", back: "The software is not. Creators, owners or operators with control or sufficient influence over it can be." },
    { front: "What must a VASP do on a transfer to an unhosted wallet?", back: "Collect originator and beneficiary data from its own customer, monitor and screen. EU: above EUR 1,000, assess ownership or control." },
    { front: "US Funds Travel Rule vs the FATF threshold", back: "US: $3,000 or more, CVC included. FATF: countries may set a de minimis threshold of no more than USD/EUR 1,000." },
    { front: "Mixer operator vs mixing-software developer (FinCEN 2019)", back: "The anonymizing service provider is a money transmitter. The anonymizing software provider only supplies tools and is not." },
    { front: "Why do FinCEN's MSB rules reach an offshore exchange with US users?", back: "An MSB is a person wherever located doing business wholly or in substantial part within the United States." },
    { front: "What does the GENIUS Act make payment stablecoin issuers?", back: "BSA financial institutions: AML program, suspicious transaction reporting, CIP, sanctions program, and the ability to block, freeze and reject." },
    { front: "Common-input-ownership (co-spend) heuristic", back: "All addresses used as inputs to one transaction are assumed to belong to one entity. Analytics firms use it to cluster addresses." },
    { front: "Direct vs indirect exposure", back: "Direct: funds come straight from an illicit source such as a mixer. Indirect: they arrive through intermediate addresses." },
    { front: "Peel chain", back: "A large balance moved through successive new addresses, peeling off small amounts at each hop, often to several VASPs." },
    { front: "Chain hopping", back: "Rapid conversion between assets and blockchains through bridges, swaps or DeFi, often into stablecoins, to break the trail." },
    { front: "A deposit comes directly from an SDN-listed wallet address. What now?", back: "Block it so no one can access it, do not return it, and report it to OFAC within 10 business days." },
    { front: "Tornado Cash status in 2026", back: "Delisted by OFAC on 21 March 2025 after Van Loon. Not a sanctions hit, but mixer exposure is still an ML red flag." },
    { front: "OFAC licence policy for ransomware payments", back: "Case by case with a presumption of denial. Prompt reporting to law enforcement and cooperation are significant mitigating factors." },
    { front: "Three deepfake onboarding red flags (FIN-2024-Alert004)", back: "Third-party webcam plugin in the live check; 'glitches' and a request to switch channel; declining multifactor authentication." },
    { front: "A BaaS partner fintech runs CIP badly. Who is responsible?", back: "The bank. It may rely on another's CIP only if that party is AML-regulated, federally supervised and certifies annually." }
  ],
  numbers: [
    { q: "FATF CDD threshold for occasional transactions carried out by VASPs", a: "USD/EUR 1,000", wrong: ["USD/EUR 3,000", "USD/EUR 10,000", "USD/EUR 15,000"] },
    { q: "Maximum de minimis threshold FATF R.16 allows for cross-border transfers, including VA transfers", a: "USD/EUR 1,000", wrong: ["USD/EUR 250", "USD/EUR 3,000", "USD/EUR 5,000"] },
    { q: "US Funds Travel Rule threshold (also applies to the CVC equivalent)", a: "$3,000 or more", wrong: ["$1,000 or more", "$250 or more", "More than $10,000"] },
    { q: "SAR threshold for a money transmitter such as a US crypto exchange", a: "At least $2,000", wrong: ["At least $5,000", "At least $3,000", "More than $10,000"] },
    { q: "Deadline for a new MSB to register with FinCEN", a: "Within 180 days of being established", wrong: ["Within 30 days of being established", "Within 90 days of being established", "Within 1 year of being established"] },
    { q: "Deadline to report blocked virtual currency to OFAC", a: "Within 10 business days", wrong: ["Within 24 hours", "Within 5 business days", "Within 30 calendar days"] },
    { q: "EU TFR: amount of a transfer to a self-hosted address above which the CASP must assess ownership or control", a: "More than EUR 1,000", wrong: ["More than EUR 3,000", "More than EUR 10,000", "More than EUR 15,000"] },
    { q: "Month and year FATF revised R.15 to cover virtual assets and VASPs", a: "October 2018", wrong: ["February 2012", "June 2016", "June 2021"] },
    { q: "Minimum reserve backing for US payment stablecoins under the GENIUS Act", a: "At least 100% (1:1)", wrong: ["At least 50%", "At least 20%", "At least 8%"] },
    { q: "Latest date on which the GENIUS Act takes effect", a: "18 January 2027", wrong: ["18 July 2025", "1 July 2026", "10 July 2027"] }
  ],
  questionIds: [
    "D1-019", "D1-020", "D1-021", "D1-022", "D1-023", "D1-024", "D1-041",
    "D2-030", "D3-044", "D4-013", "D4-014", "D4-015",
    "EU-006", "EU-007", "EU-014",
    "CASE-004", "CASE-006", "CASE-026", "CASE-027", "CASE-028", "CASE-031",
    "TRAP-007", "TRAP-009", "TRAP-026", "TRAP-029", "TRAP-033",
    "SECT-016", "SECT-018", "SECT-019", "SECT-020", "SECT-021",
    "GLOB-016", "GLOB-017", "GLOB-018", "GLOB-019", "GLOB-030",
    "INV-005", "INV-006", "INV-007"
  ],
  sources: [
    { label: "FATF Recommendations (2026) – R.15, INR.15, R.16 and INR.16 (revised June 2025), Glossary definitions of VA and VASP (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
    { label: "FATF Updated Guidance for a Risk-Based Approach to VAs and VASPs (October 2021) – DeFi, NFTs, stablecoins, unhosted wallets, sunrise issue (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/Best_practicies/Updated-Guidance-VA-VASP.pdf.coredownload.inline.pdf.pdf" },
    { label: "FATF Virtual Assets Red Flag Indicators of ML/TF (September 2020) (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/Virtual-Assets-Red-Flag-Indicators.pdf" },
    { label: "FATF Countering Ransomware Financing (March 2023) – peel chains, mixers, privacy coins, chain hopping (EAG copy)", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/Best_practicies/Countering-Ransomware-Financing.pdf.coredownload.pdf.pdf" },
    { label: "FinCEN Guidance FIN-2019-G001 (May 2019) – CVC business models and the Funds Travel Rule", url: "https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf" },
    { label: "GENIUS Act, Public Law 119-27 (July 2025) – s.4(a)(5) BSA treatment of stablecoin issuers, s.20 effective date", url: "https://www.govinfo.gov/content/pkg/PLAW-119publ27/html/PLAW-119publ27.htm" },
    { label: "OFAC Sanctions Compliance Guidance for the Virtual Currency Industry (October 2021) – blocking, reporting, lookback, geolocation", url: "https://ofac.treasury.gov/media/913571/download?inline" },
    { label: "US Treasury press release sb0057 (21 March 2025) – Tornado Cash delisting", url: "https://home.treasury.gov/news/press-releases/sb0057" },
    { label: "FinCEN Notice FIN-2025-NTC1 (August 2025) – CVC kiosks, scams and elder fraud", url: "https://www.fincen.gov/system/files/2025-08/FinCEN-Notice-CVCKIOSK.pdf" },
    { label: "FinCEN Alert FIN-2024-Alert004 (November 2024) – Fraud schemes involving deepfake media", url: "https://www.fincen.gov/sites/default/files/shared/FinCEN-Alert-DeepFakes-Alert508FINAL.pdf" }
  ]
}]);
