window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "EU-001", domain: 2, topic: "EU AMLR application dates", hy: false,
    q: "A compliance team is building its implementation plan for the EU Anti-Money Laundering Regulation, Regulation (EU) 2024/1624 (AMLR). Which statements about when and how the AMLR applies are correct? (Choose two.)",
    options: [
      "It applied from 10 July 2025, the same date on which AMLA took up most of its tasks.",
      "It applies from 10 July 2027 and, being a regulation, is directly applicable without national transposition.",
      "It will apply in each Member State only once that Member State has transposed it into national law.",
      "It applies to professional football clubs and football agents only from 10 July 2029.",
      "It applies from 1 January 2028, when AMLA begins direct supervision of selected entities."
    ],
    answer: [1, 3],
    explanation: "AMLR Article 90 says the Regulation applies from 10 July 2027, and from 10 July 2029 for football agents and professional football clubs (Article 3(3)(n) and (o)). It is binding in its entirety and directly applicable, so there is no transposition. Transposition applies to the accompanying Directive (EU) 2024/1640 (AMLD6), not the AMLR. AMLA's founding Regulation (EU) 2024/1620 applies from 1 July 2025, and AMLA's direct supervision starts in 2028, but neither date is when the AMLR applies.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR) – Art. 90 entry into force and application; Art. 3(3)(n)-(o)", url: "https://publications.europa.eu/resource/celex/32024R1624" },
      { label: "Regulation (EU) 2024/1620 (AMLA Regulation) – applies from 1 July 2025; direct supervision from 2028", url: "https://publications.europa.eu/resource/celex/32024R1620" }
    ]
  },
  {
    id: "EU-002", domain: 3, topic: "EU cash payment limit (AMLR Art. 80)", hy: true,
    q: "In 2028, a car dealer in an EU Member State that has no lower national cash limit agrees to sell a vehicle for EUR 14,000. The buyer wants to pay in cash in two instalments of EUR 7,000, a week apart. What is the dealer's position under the AMLR?",
    options: [
      "It may accept both instalments because each one is below EUR 10,000, provided it identifies the buyer.",
      "It may accept the cash if it verifies the buyer's identity and reports the sale to the FIU within 24 hours.",
      "It must not accept the payment in cash, because the EUR 10,000 limit also covers operations that appear to be linked.",
      "It may accept the cash because the limit applies only to payments made between two natural persons."
    ],
    answer: [2],
    explanation: "AMLR Article 80(1) says persons trading in goods or providing services may accept or make a cash payment only up to EUR 10,000, whether the transaction is carried out in one operation or in several operations that appear to be linked. Splitting the payment does not avoid the limit, and identifying the buyer or reporting does not make it lawful. The exemption in Article 80(4) covers payments between natural persons not acting in a professional capacity (the opposite of this case) and payments or deposits at the premises of banks and payment institutions.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR) – Art. 80 limits to large cash payments", url: "https://publications.europa.eu/resource/celex/32024R1624" }
    ]
  },
  {
    id: "EU-003", domain: 2, topic: "Beneficial ownership registers: CJEU WM and Sovim (2022)", hy: true,
    q: "What was the effect of the Court of Justice of the EU's November 2022 judgment in WM and Sovim SA v Luxembourg Business Registers (Joined Cases C-37/20 and C-601/20)?",
    options: [
      "It invalidated the AMLD5 provision giving any member of the general public access to beneficial ownership information in all cases.",
      "It barred obliged entities from consulting central beneficial ownership registers when performing customer due diligence.",
      "It held that express trusts must be removed from national beneficial ownership registers for data protection reasons.",
      "It required Member States to publish beneficial owners' full dates of birth and home addresses to improve transparency."
    ],
    answer: [0],
    explanation: "The Grand Chamber held that the AMLD5 amendment to Article 30(5)(c) of Directive 2015/849 was invalid in so far as it gave any member of the general public access in all cases, because this interfered with the rights to privacy and data protection (Charter Articles 7 and 8). Obliged entities and authorities kept their access. In response, AMLD6 (Directive (EU) 2024/1640) Article 12 grants access to persons with a legitimate interest, such as journalists, civil society organisations and persons likely to transact with the entity. Member States must transpose that article by 10 July 2026.",
    source: [
      { label: "CJEU Joined Cases C-37/20 and C-601/20, WM and Sovim (22 Nov 2022) – judgment", url: "https://publications.europa.eu/resource/celex/62020CJ0037" },
      { label: "Directive (EU) 2024/1640 (AMLD6) – Art. 12 legitimate interest access; Art. 78 transposition", url: "https://publications.europa.eu/resource/celex/32024L1640" }
    ]
  },
  {
    id: "EU-004", domain: 3, topic: "AMLR beneficial ownership: indirect ownership calculation", hy: false,
    q: "Under the AMLR, a bank is identifying the beneficial owners of Target SA. Anna owns 60% of HoldCo A, which owns 45% of Target. Carla owns 100% of HoldCo B, which owns 35% of Target. Ben owns 20% of Target directly. No other control arrangements exist. Who are Target's beneficial owners through ownership interest?",
    options: [
      "Carla only",
      "Anna, Ben and Carla",
      "Ben and Carla",
      "Anna and Carla"
    ],
    answer: [3],
    explanation: "AMLR Article 52(1) defines an ownership interest as direct or indirect ownership of 25% or more. Indirect ownership is calculated by multiplying the holdings along the chain and adding together holdings in different chains. Anna holds 60% x 45% = 27% and Carla holds 100% x 35% = 35%, so both meet the threshold. Ben's 20% does not. The Commission may later set lower thresholds (at most 15%) for higher-risk categories of entities.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR) – Art. 52 beneficial ownership through ownership interest", url: "https://publications.europa.eu/resource/celex/32024R1624" }
    ]
  },
  {
    id: "EU-005", domain: 1, topic: "EU criminal law directive on money laundering (Directive (EU) 2018/1673)", hy: false,
    q: "Directive (EU) 2018/1673 on combating money laundering by criminal law (often called 6AMLD) sets minimum rules for the offence. Which statements accurately describe its requirements? (Choose two.)",
    options: [
      "Member States must provide a maximum term of imprisonment of at least four years for the core money laundering offences.",
      "A prior or simultaneous conviction for the predicate offence is required before a money laundering conviction can follow.",
      "Aiding and abetting money laundering must be punishable, but attempted money laundering need not be.",
      "Environmental crime and cybercrime are excluded from the harmonised list of predicate offence categories.",
      "Self-laundering must be criminalised, at least for converting, transferring, concealing or disguising the proceeds."
    ],
    answer: [0, 4],
    explanation: "Article 5(2) requires a maximum penalty of at least four years' imprisonment. Article 3(5) requires self-laundering to be criminalised for the conversion or transfer and the concealment or disguise conduct. Article 3(3)(a) says a conviction for the predicate offence is not a prerequisite. Article 4 requires aiding and abetting, inciting and attempting to be punishable. The 22 predicate categories in Article 2(1) include environmental crime, tax crimes and cybercrime.",
    source: [
      { label: "Directive (EU) 2018/1673 – Arts 2, 3, 4 and 5", url: "https://publications.europa.eu/resource/celex/32018L1673" }
    ]
  },
  {
    id: "EU-006", domain: 3, topic: "Transfer of Funds Regulation: self-hosted addresses", hy: true,
    q: "A customer of an EU crypto-asset service provider (CASP) asks to withdraw stablecoins worth EUR 2,500 to a self-hosted (unhosted) wallet address. Under the Transfer of Funds Regulation (EU) 2023/1113, what must the CASP do?",
    options: [
      "Nothing beyond its usual monitoring, because the crypto travel rule does not apply to transfers to self-hosted addresses.",
      "Obtain and hold the originator and beneficiary information, and take adequate measures to assess whether the customer owns or controls the address.",
      "Refuse the transfer, because the Regulation prohibits transfers above EUR 1,000 to addresses that no CASP hosts.",
      "Verify the identity of the self-hosted wallet's user from documents before every transfer, whatever its amount."
    ],
    answer: [1],
    explanation: "The Regulation, which has applied since 30 December 2024, covers transfers to or from self-hosted addresses whenever a CASP is involved. Under Article 14(5), the originator's CASP must obtain and hold originator and beneficiary information and ensure the transfer can be individually identified. For amounts above EUR 1,000, it must also take adequate measures to assess whether the address is owned or controlled by its customer. Such transfers are not banned, and the Regulation does not require document-based verification of the wallet user for every transfer.",
    source: [
      { label: "Regulation (EU) 2023/1113 (Transfer of Funds Regulation) – Arts 14(5) and 16(2); application from 30 Dec 2024", url: "https://publications.europa.eu/resource/celex/32023R1113" }
    ]
  },
  {
    id: "EU-007", domain: 2, topic: "MiCA and AML framework interplay (CASP authorisation)", hy: false,
    q: "An EU crypto exchange was registered under its home Member State's national virtual asset regime in 2023 and has operated under MiCA's transitional (grandfathering) arrangement. In September 2026 it still has no MiCA authorisation. Which statement is MOST accurate?",
    options: [
      "It may keep operating until the AMLR applies on 10 July 2027, when AML registration and MiCA authorisation are merged.",
      "It may keep operating indefinitely, because its AML obligations flow from the Transfer of Funds Regulation, not MiCA.",
      "The transitional period ended no later than 1 July 2026, so it may no longer provide crypto-asset services without MiCA authorisation.",
      "It may keep operating while it complies fully with the travel rule, since compliance with the travel rule replaces authorisation."
    ],
    answer: [2],
    explanation: "Under MiCA (Regulation (EU) 2023/1114) Article 143(3), CASPs that provided services under national law before 30 December 2024 could continue until 1 July 2026 at the latest, or until they were granted or refused authorisation, whichever came first. Member States could shorten this period. The Transfer of Funds Regulation and the AML Directive define a CASP by reference to MiCA, so the two regimes work together. Complying with the travel rule does not replace authorisation.",
    source: [
      { label: "Regulation (EU) 2023/1114 (MiCA) – Art. 143(3) transitional measures", url: "https://publications.europa.eu/resource/celex/32023R1114" },
      { label: "Regulation (EU) 2023/1113 – CASP defined by reference to MiCA Art. 3(1)(15)", url: "https://publications.europa.eu/resource/celex/32023R1113" }
    ]
  },
  {
    id: "EU-008", domain: 2, topic: "EU high-risk third countries list", hy: true,
    changed: "EU high-risk third country list: Russia added by Delegated Regulation (EU) 2026/46, in force early 2026",
    q: "An EU bank's onboarding policy triggers mandatory enhanced due diligence (EDD) only for countries on the FATF 'black' and 'grey' lists. In September 2026 it onboards a corporate customer established in Russia. What should the compliance officer conclude?",
    options: [
      "EDD is optional, because Russia is on neither FATF public list and the EU high-risk list mirrors those lists exactly.",
      "The relationship is prohibited outright, because listing on the EU high-risk list bans business with the country.",
      "Only sanctions screening is needed, because the EU deals with Russia through restrictive measures, not the AML list.",
      "Russia is on the Commission's high-risk third country list, so EU-mandated EDD applies and the policy needs updating."
    ],
    answer: [3],
    explanation: "Commission Delegated Regulation (EU) 2026/46 (adopted 3 December 2025) added Russia to the EU list in Delegated Regulation 2016/1675. It created a new category for countries not on FATF lists but whose FATF membership is suspended. EU obliged entities must apply EDD to business relationships and transactions involving listed high-risk third countries. Listing does not ban the business, and sanctions screening is a separate obligation. The EU list can therefore differ from the FATF lists. For example, the June 2025 update added Monaco and removed the UAE.",
    source: [
      { label: "Commission Delegated Regulation (EU) 2026/46 – adds Russia to the high-risk third country list", url: "https://publications.europa.eu/resource/celex/32026R0046" },
      { label: "European Commission press release IP/25/2910 (3 Dec 2025) – Russia listed as high-risk", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_25_2910" }
    ]
  },
  {
    id: "EU-009", domain: 2, topic: "EU sanctions: adoption and enforcement", hy: false,
    q: "Which statement BEST describes how EU restrictive measures (sanctions) are adopted and enforced?",
    options: [
      "The Council adopts a CFSP decision and an Article 215 TFEU regulation, and Member States enforce them, with breaches criminalised under Directive (EU) 2024/1226.",
      "The European Commission adopts and enforces sanctions directly, fining EU operators through a central EU sanctions enforcement office in Brussels.",
      "The European Central Bank designates persons and enforces asset freezes through national central banks as part of the single supervisory mechanism.",
      "AMLA has adopted EU sanctions designations since July 2025 and imposes penalties for breaches directly on obliged entities in all Member States."
    ],
    answer: [0],
    explanation: "EU restrictive measures are based on a Council decision under Article 29 TEU and, for economic and financial measures, a Council regulation under Article 215 TFEU. Member States' competent authorities enforce them and set penalties. Directive (EU) 2024/1226, with a transposition deadline of 20 May 2025, harmonises the criminal offences for violating EU restrictive measures. For legal persons, some offences carry maximum fines of at least 5% of worldwide turnover or EUR 40 million. Neither the ECB nor AMLA designates sanctions targets.",
    source: [
      { label: "Directive (EU) 2024/1226 – criminalisation of violations of Union restrictive measures (Art. 29 TEU / Art. 215 TFEU; transposition 20 May 2025)", url: "https://publications.europa.eu/resource/celex/32024L1226" },
      { label: "AMLR recital – UN listings implemented via Art. 29 TEU decisions and Art. 215 TFEU regulations", url: "https://publications.europa.eu/resource/celex/32024R1624" }
    ]
  },
  {
    id: "EU-010", domain: 3, topic: "EU sanctions: 'no re-export to Russia' clause (Art. 12g)", hy: false,
    q: "An EU manufacturer is negotiating a contract to sell items listed as common high priority items (Annex XL of Regulation 833/2014) to a distributor in Kazakhstan. What does Article 12g require?",
    options: [
      "An end-user certificate filed with the European Commission before each shipment leaves the EU",
      "A contractual clause prohibiting re-export to Russia and for use in Russia, backed by adequate remedies",
      "No clause, because Kazakhstan is one of the partner countries listed in Annex VIII of the Regulation",
      "A clause only if the distributor is owned 50% or more by a Russian national or Russian company"
    ],
    answer: [1],
    explanation: "Article 12g requires EU exporters of specified sensitive goods (including common high priority items, aviation goods, jet fuel and firearms) to include a contractual clause that prohibits re-export to Russia and re-export for use in Russia. The clause must have adequate remedies, such as termination and penalties. The clause is not needed for partner countries in Annex VIII (for example the US, UK, Japan, Switzerland and Norway), and Kazakhstan is not one of them. Exporters must inform their national competent authority as soon as they become aware of a breach. Ownership of the buyer is irrelevant to this obligation.",
    source: [
      { label: "European Commission FAQs – 'No re-export to Russia' clause, Article 12g of Regulation 833/2014 (as of 18 Dec 2024)", url: "https://finance.ec.europa.eu/system/files/2024-02/faqs-sanctions-russia-no-re-export_en.pdf" }
    ]
  },
  {
    id: "EU-011", domain: 3, topic: "EU sanctions: 'best efforts' obligation (Art. 8a)", hy: false,
    q: "An EU-headquartered group controls a trading subsidiary incorporated in Türkiye. Under Article 8a of Regulation 833/2014 (added in June 2024), what is the EU parent's obligation regarding the subsidiary and EU sanctions on Russia?",
    options: [
      "None, because EU sanctions bind only persons in EU territory, EU nationals and EU-incorporated entities.",
      "It is strictly liable for any sanctions breach by the subsidiary, regardless of its degree of control.",
      "It must use best efforts, meaning feasible actions such as policies and controls, to stop the subsidiary undermining the sanctions.",
      "It must obtain a licence from the Commission before the subsidiary trades with any country outside the EU."
    ],
    answer: [2],
    explanation: "Article 8a, inserted by Regulation (EU) 2024/1745, requires EU operators to undertake their best efforts to ensure that non-EU entities they own or control do not participate in activities that undermine the sanctions. The Commission's FAQs (recital 30) define best efforts as actions that are suitable and necessary, such as appropriate policies, controls and procedures. These actions are judged against the operator's nature, size and degree of effective control. The obligation is not strict liability and does not require a licence.",
    source: [
      { label: "European Commission FAQs – 'Best efforts' obligation, Article 8a of Regulation 833/2014 (22 Nov 2024)", url: "https://finance.ec.europa.eu/document/download/65560de8-a13a-4a58-a87c-ddd27b14e6c1_en?filename=faqs-sanctions-russia-best-efforts-obligation_en.pdf" }
    ]
  },
  {
    id: "EU-012", domain: 3, topic: "EBA guidelines on de-risking and access to financial services", hy: true,
    q: "After a thematic review, an EU bank's business unit proposes to exit every not-for-profit organisation (NPO) customer that operates in conflict zones, citing terrorist financing risk. Under the EBA's 2023 guidelines on ML/TF risk management and access to financial services, what should compliance recommend?",
    options: [
      "Assess each relationship individually and consider mitigating measures before any rejection or termination, documenting the reasons for each decision.",
      "Proceed with the exit, because categories of customers assessed as higher risk may be exited as a block under the risk-based approach.",
      "Keep all the NPO customers but apply simplified due diligence to them, so that the bank does not contribute to financial exclusion.",
      "Ask the national FIU to approve each exit in advance, so that the bank avoids any regulatory challenge to the decision."
    ],
    answer: [0],
    explanation: "EBA/GL/2023/04 says institutions should not refuse or terminate business relationships with entire categories of customers assessed as higher risk. Before rejecting or terminating a relationship, they should consider and reject all mitigating measures that could reasonably apply, such as adjusting monitoring or targeted restrictions on products. They should also document every refusal or termination and the reasons for it. Simplified due diligence would be inappropriate for higher-risk customers, and FIU approval is not part of the process. EBA/GL/2023/03 added an NPO annex to the ML/TF risk factor guidelines.",
    source: [
      { label: "EBA/GL/2023/04 – Guidelines on ML/TF risk management and access to financial services (paras 10-14)", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2023/1054144/Guidelines%20on%20MLTF%20risk%20management%20and%20access%20to%20financial%20services.pdf" }
    ]
  },
  {
    id: "EU-013", domain: 3, topic: "AMLR: periodic update of customer information", hy: false,
    q: "An EU bank preparing for the AMLR proposes periodic KYC reviews every 2 years for customers subject to enhanced due diligence and every 7 years for all other customers, with trigger-event reviews in between. What change does Article 26 of the AMLR require?",
    options: [
      "None, because the AMLR leaves review intervals entirely to the firm's risk-based judgment.",
      "Reviewing all customers annually, because the AMLR removes risk-based review intervals.",
      "Lengthening the higher-risk interval to 3 years, in line with the other-customer maximum.",
      "Shortening the intervals to at most 1 year for higher-risk and 5 years for other customers."
    ],
    answer: [3],
    explanation: "AMLR Article 26(2) requires customer information to be kept up to date at intervals that depend on risk but never exceed 1 year for higher-risk customers subject to enhanced due diligence and 5 years for all other customers. Article 26(3) also requires review when a customer's relevant circumstances change and on other triggers. The bank's proposed 2-year and 7-year cycles exceed both maximums. A blanket annual review for everyone is not required.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR) – Art. 26 ongoing monitoring and update intervals", url: "https://publications.europa.eu/resource/celex/32024R1624" }
    ]
  },
  {
    id: "EU-014", domain: 1, topic: "Anonymity-enhancing coins under the AMLR", hy: false,
    q: "An EU crypto-asset service provider is considering supporting a privacy coin that hides senders, receivers and amounts by default. What is the MOST accurate statement about this plan once the AMLR applies?",
    options: [
      "It is permitted if the CASP applies enhanced due diligence to every customer who holds the coin.",
      "It is prohibited, because CASPs may not keep accounts that allow anonymisation, including through anonymity-enhancing coins.",
      "It is permitted if each transfer of the coin is below EUR 1,000, the travel rule verification threshold.",
      "It is prohibited only if AMLA adds the coin to a published list of banned crypto-assets."
    ],
    answer: [1],
    explanation: "AMLR Article 79(1) prohibits credit institutions, financial institutions and CASPs from keeping anonymous crypto-asset accounts or any account that allows the customer to be anonymised or transactions to be obscured, including through anonymity-enhancing coins. The prohibition reflects the high laundering risk of privacy coins, which break the audit trail that blockchain analytics relies on. Enhanced due diligence or low values do not lift the prohibition, and it does not depend on an AMLA list.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR) – Art. 79 anonymous accounts and anonymity-enhancing coins", url: "https://publications.europa.eu/resource/celex/32024R1624" }
    ]
  },
  {
    id: "EU-015", domain: 2, topic: "AMLA: selection of directly supervised entities", hy: false,
    q: "Which statement correctly describes how AMLA selects credit and financial institutions for direct supervision under Regulation (EU) 2024/1620?",
    options: [
      "All credit institutions with total assets above EUR 30 billion are selected automatically, whatever their risk profile.",
      "Each Member State nominates the entities in its territory, and AMLA must accept the nominations without change.",
      "The first selection begins by 1 July 2027 and repeats every three years, with an extra selection in any Member State left without one.",
      "Once selected, an entity remains under AMLA's direct supervision permanently, even if its risk profile improves."
    ],
    answer: [2],
    explanation: "Under Articles 12 and 13 of the AMLA Regulation, institutions operating in at least six Member States whose residual risk is classified as high are selected. The list is normally capped at 40, with provision for more. The first selection must start by 1 July 2027 and then repeats every three years, and direct supervision begins in 2028. If no institution in a Member State qualifies, AMLA runs an additional selection there so that one is selected. Selection is based on risk, not size alone or national nomination, and an entity leaves direct supervision when a later list no longer includes it.",
    source: [
      { label: "Regulation (EU) 2024/1620 (AMLA Regulation) – Arts 12-13 selection of obliged entities", url: "https://publications.europa.eu/resource/celex/32024R1620" }
    ]
  },
  {
    id: "EU-016", domain: 2, topic: "UK POCA s.329 and the adequate consideration defence", hy: false,
    q: "A UK wedding caterer, which is not in the AML regulated sector, is paid the normal market price for catering a client's wedding. It later suspects that the client paid with drug proceeds. Has the caterer committed the POCA section 329 offence (acquisition, use and possession)?",
    options: [
      "No, because acquiring property for adequate consideration is a defence, and ordinary catering does not help anyone carry out criminal conduct.",
      "Yes, because accepting any property later suspected to be criminal is an offence unless a DAML was obtained beforehand.",
      "No, because section 329 applies only to businesses in the regulated sector, and the caterer is outside it.",
      "Yes, unless the payment was below the £3,000 threshold amount set by section 339A for operating accounts."
    ],
    answer: [0],
    explanation: "POCA s.329(2)(c) provides that no offence is committed where a person acquired, used or had possession of the property for adequate consideration. Under s.329(3), consideration is inadequate if it is significantly less than the value, and goods or services that the person knows or suspects may help another person commit crime do not count as consideration. Market-price catering therefore qualifies. Section 329 applies to everyone, not only the regulated sector. The s.339A threshold applies only to deposit-taking bodies and certain other institutions operating accounts, and to regulated firms exiting customers.",
    source: [
      { label: "Proceeds of Crime Act 2002 s.329 – acquisition, use and possession; adequate consideration", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/329" }
    ]
  },
  {
    id: "EU-017", domain: 2, topic: "UK POCA s.330 failure to disclose (regulated sector)", hy: true,
    q: "A UK bank employee processed a series of transactions with clear money laundering red flags but did not report them. She says she never actually suspected money laundering. Under POCA section 330, which statement is correct?",
    options: [
      "She cannot be guilty, because section 330 requires actual knowledge that the customer was laundering money.",
      "She cannot be guilty unless she also disclosed the bank's concerns to the customer, which would be tipping off.",
      "Only the bank's nominated officer can commit the section 330 offence, so the employee faces no personal liability.",
      "She may be guilty if she had reasonable grounds for knowing or suspecting money laundering, even without actual suspicion."
    ],
    answer: [3],
    explanation: "Section 330(2)(b) applies an objective test: the offence is committed where a person in the regulated sector has reasonable grounds for knowing or suspecting money laundering and does not disclose as soon as practicable. The other conditions must also be met, and defences include reasonable excuse and the lack-of-training defence in s.330(7). Under s.330(8), the court must consider whether the person followed Treasury-approved guidance such as the JMLSG guidance. Nominated officers have a separate offence under s.331, and tipping off is a separate offence.",
    source: [
      { label: "Proceeds of Crime Act 2002 s.330 – failure to disclose: regulated sector", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/330" }
    ]
  },
  {
    id: "EU-018", domain: 3, topic: "UK tipping off: permitted disclosures within a group (s.333B)", hy: false,
    q: "A UK bank's MLRO has filed a SAR on a customer who also has an account with the group's German banking subsidiary. The MLRO wants to tell the German subsidiary's AML officer about the SAR so that it can review the relationship. Is this permitted under POCA?",
    options: [
      "No, because any disclosure of a SAR to a person outside the United Kingdom is tipping off under section 333A.",
      "Yes, because section 333B permits disclosure between credit or financial institutions of the same group in the UK or an EEA state.",
      "Yes, but only after the NCA has given its prior written consent to that specific disclosure to the subsidiary.",
      "Yes, and the customer may also be told, because no law enforcement investigation has formally started yet."
    ],
    answer: [1],
    explanation: "Section 333A makes it an offence for a person in the regulated sector to disclose that a SAR has been made if the disclosure is likely to prejudice an investigation. Section 333B(2) provides that no offence is committed by a disclosure from one credit or financial institution to another in the same group, where the recipient is in the UK, an EEA state or a country with equivalent AML requirements. Germany qualifies, and no NCA consent is needed. Telling the customer would risk tipping off and is not permitted.",
    source: [
      { label: "Proceeds of Crime Act 2002 s.333B – disclosures within an undertaking or group", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/333B" },
      { label: "Proceeds of Crime Act 2002 s.333A – tipping off: regulated sector", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/333A" }
    ]
  },
  {
    id: "EU-019", domain: 3, topic: "UK DAML exemptions: exiting and paying away (threshold amount)", hy: true,
    changed: "POCA s.339A threshold amount raised from £1,000 to £3,000 (SI 2025/877, 31 July 2025)",
    q: "In September 2026 a UK bank decides to exit a customer and suspects that part of the £2,400 remaining balance is criminal property. The bank has complied with its CDD duties on the customer. Before paying the balance away to close the account, what does POCA require?",
    options: [
      "The bank must obtain a DAML before paying the balance away, because suspicion always requires a defence first.",
      "The bank need not seek a DAML, and it need not file a SAR either, because the balance is below the threshold.",
      "The bank need not seek a DAML to pay the balance away on exit, but it must still report its suspicion in a SAR.",
      "The bank must obtain a DAML, because the threshold amount for exiting a customer is set at £1,000."
    ],
    answer: [2],
    explanation: "POCA ss.327(2D), 328(6) and 329(2D), inserted by the Economic Crime and Corporate Transparency Act 2023, exempt a regulated firm that transfers property to a customer to end the relationship. The criminal property must be below the s.339A threshold amount and the firm must have complied with its CDD duties. Since 31 July 2025 the threshold is £3,000 (previously £1,000), both for exiting customers and for deposit-taking bodies operating accounts. UKFIU guidance says these exemptions do not remove the obligation to submit a SAR where there is knowledge or suspicion.",
    source: [
      { label: "Proceeds of Crime Act 2002 s.339A – threshold amounts (£3,000 from 31.7.2025, SI 2025/877)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/339A" },
      { label: "UKFIU (NCA) – Chapter 3: Understanding DAMLs and DATFs (exemption for exiting and paying away)", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/776-ukfiu-chapter-3-understanding-damls-and-datfs/file" }
    ]
  },
  {
    id: "EU-020", domain: 2, topic: "UK MLRs 2017 amendments (2026): high-risk jurisdiction EDD", hy: true,
    changed: "UK MLRs amended by SI 2026/621, in force 30 June 2026 (reg. 33 EDD narrowed to FATF call-for-action countries)",
    q: "A UK firm is updating its EDD policy after the Money Laundering and Terrorist Financing (Amendment) Regulations 2026. Under the amended regulation 33(1)(b) of the MLRs 2017, which jurisdiction-based EDD requirement now applies?",
    options: [
      "Mandatory EDD applies to relationships and relevant transactions with persons established in FATF call-for-action countries.",
      "Mandatory EDD continues to apply to persons established in countries on either the FATF call-for-action or increased-monitoring list.",
      "Mandatory EDD applies to every country on the European Commission's high-risk third country list, which the UK still follows.",
      "Business relationships with persons established in FATF call-for-action countries are prohibited, not merely subject to EDD."
    ],
    answer: [0],
    explanation: "SI 2026/621 (made 9 June 2026, mostly in force 30 June 2026) amended regulation 33(1)(b). Mandatory jurisdiction-based EDD now applies to business relationships and relevant transactions involving persons established in a FATF call-for-action country. Countries under increased monitoring are handled through the firm's risk-based assessment. The instrument also limits EDD to 'unusually complex' (rather than all complex) transactions and converts euro thresholds to sterling. The UK no longer follows the EU list after Brexit, and the rule requires EDD, not a prohibition.",
    source: [
      { label: "MLRs 2017 reg. 33 (as amended by SI 2026/621, 30.6.2026)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/33" },
      { label: "Explanatory Memorandum to the Money Laundering and Terrorist Financing (Amendment) Regulations 2026 (SI 2026/621)", url: "https://www.legislation.gov.uk/uksi/2026/621/pdfs/uksiem_20260621_en_001.pdf" }
    ]
  },
  {
    id: "EU-021", domain: 2, topic: "OFSI civil monetary penalties (strict liability)", hy: true,
    q: "A UK company made a payment to an entity that, unknown to it, was more than 50% owned by a person designated under UK sanctions. Which statement about OFSI's power to impose a civil monetary penalty is correct?",
    options: [
      "OFSI must prove the company knew, or had reasonable cause to suspect, the breach, and the penalty is capped at £1 million.",
      "OFSI may act only after a criminal conviction, and the penalty is then limited to a fixed percentage of the payment.",
      "OFSI's penalties are capped at 10% of the company's global annual turnover, in line with the approach of EU competition law.",
      "OFSI may impose a penalty on a strict liability basis, up to the greater of £1 million or 50% of the breach's estimated value."
    ],
    answer: [3],
    explanation: "Section 146 of the Policing and Crime Act 2017 lets HM Treasury (OFSI) impose monetary penalties on the balance of probabilities. Since 15 June 2022, s.146(1A), inserted by the Economic Crime (Transparency and Enforcement) Act 2022, has required any knowledge or suspicion element to be ignored, which makes civil penalties strict liability. The maximum is the greater of £1 million or 50% of the estimated value of the funds or economic resources. An entity more than 50% owned by a designated person is itself 'owned or controlled' (for example, reg. 7 of the Russia regulations). No criminal conviction is required.",
    source: [
      { label: "Policing and Crime Act 2017 s.146 – OFSI monetary penalties; s.146(1A) strict liability from 15.6.2022", url: "https://www.legislation.gov.uk/ukpga/2017/3/section/146" },
      { label: "Russia (Sanctions) (EU Exit) Regulations 2019 reg. 7 – meaning of 'owned or controlled directly or indirectly'", url: "https://www.legislation.gov.uk/uksi/2019/855/regulation/7" }
    ]
  },
  {
    id: "EU-022", domain: 3, topic: "OFSI reporting obligations for relevant firms", hy: false,
    q: "A UK bank discovers that it holds funds for a person designated under the UK's Russia sanctions regime. Which reporting obligations apply to the bank as a relevant firm? (Choose two.)",
    options: [
      "Return the funds to the customer after 30 days if OFSI has not issued a licence authorising their continued retention.",
      "Rely on a SAR submitted to the NCA, which automatically satisfies the bank's reporting duties to OFSI as well.",
      "Inform OFSI (HM Treasury) as soon as practicable, stating what its knowledge or suspicion is based on and identifying details.",
      "Report to OFSI within seven working days, after which the funds may be released if OFSI has not objected.",
      "While it continues to hold the funds, provide an annual report by 30 November on the frozen funds held at 30 September."
    ],
    answer: [2, 4],
    explanation: "Regulation 70 of the Russia (Sanctions) (EU Exit) Regulations 2019 requires a relevant firm to inform the Treasury as soon as practicable if it knows or has reasonable cause to suspect that a person is designated, or that it holds funds for one. The report must include the basis of the suspicion and identifying information. Under reg. 70(1ZB), firms that continue to hold such funds must report annually by 30 November on holdings as at 30 September. Frozen funds stay frozen unless OFSI grants a licence. A SAR to the NCA does not replace the OFSI report, and there is no seven-day release mechanism, which belongs to the POCA DAML regime.",
    source: [
      { label: "Russia (Sanctions) (EU Exit) Regulations 2019 reg. 70 – finance: reporting obligations", url: "https://www.legislation.gov.uk/uksi/2019/855/regulation/70" }
    ]
  },
  {
    id: "EU-023", domain: 1, topic: "Criminal Finances Act 2017: failure to prevent facilitation of tax evasion", hy: true,
    q: "A relationship manager at a UK private bank knowingly helps a client hide income from HMRC by setting up an undisclosed offshore structure. The client evades UK tax. The bank's senior management knew nothing about it. What is the bank's MOST likely exposure?",
    options: [
      "None, because corporate liability requires a directing mind of the bank to have known of the evasion.",
      "It may be guilty of failing to prevent facilitation of UK tax evasion unless it had reasonable prevention procedures.",
      "It is liable only if it gained financially from the client's tax evasion, for example through higher fees.",
      "None, because the Criminal Finances Act 2017 corporate offence covers only the evasion of foreign taxes."
    ],
    answer: [1],
    explanation: "Criminal Finances Act 2017 s.45 makes a relevant body guilty if an associated person (such as an employee) commits a UK tax evasion facilitation offence while acting in that capacity. The bank's only defence is to prove it had reasonable prevention procedures, or that none could reasonably be expected. The offence does not require senior management knowledge or any benefit to the bank, unlike the ECCTA failure to prevent fraud offence. Section 46 creates a parallel offence for facilitating foreign tax evasion where there is a UK nexus.",
    source: [
      { label: "Criminal Finances Act 2017 s.45 – failure to prevent facilitation of UK tax evasion offences", url: "https://www.legislation.gov.uk/ukpga/2017/22/section/45" },
      { label: "Criminal Finances Act 2017 s.46 – failure to prevent facilitation of foreign tax evasion offences", url: "https://www.legislation.gov.uk/ukpga/2017/22/section/46" }
    ]
  },
  {
    id: "EU-024", domain: 4, topic: "Unexplained wealth orders (POCA Part 8)", hy: false,
    q: "UK law enforcement investigators are considering an unexplained wealth order (UWO) over a London property. Which statements about the requirements for a UWO are correct? (Choose two.)",
    options: [
      "The High Court must have reasonable cause to believe that the respondent holds the property and that it is worth more than £50,000.",
      "Only the National Crime Agency may apply for a UWO, and other agencies must refer their cases to it.",
      "The respondent must have been convicted of an offence in the UK or abroad before a UWO can be made.",
      "The respondent must be a politically exposed person, or be reasonably suspected of involvement (or connection) with serious crime.",
      "A UWO cannot be made against a respondent who lives outside the United Kingdom."
    ],
    answer: [0, 3],
    explanation: "Under POCA s.362B the High Court must be satisfied that there is reasonable cause to believe the respondent holds property worth more than £50,000. There must also be reasonable grounds to suspect that the respondent's known lawful income was insufficient to obtain it, or (since 2022) that it was obtained through unlawful conduct. In addition, the respondent must be a PEP, or there must be reasonable grounds to suspect that they, or someone connected with them, are involved in serious crime. Under s.362A, the NCA, HMRC, the FCA, the SFO and the DPP can all apply. The respondent may be outside the UK, and no conviction is required.",
    source: [
      { label: "Proceeds of Crime Act 2002 s.362B – requirements for making a UWO", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/362B" },
      { label: "Proceeds of Crime Act 2002 s.362A – UWOs; enforcement authorities; respondents outside the UK", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/362A" }
    ]
  },
  {
    id: "EU-025", domain: 2, topic: "ECCTA 2023: failure to prevent fraud offence", hy: true,
    changed: "ECCTA failure to prevent fraud offence in force 1 September 2025",
    q: "Which statements about the failure to prevent fraud offence in section 199 of the UK Economic Crime and Corporate Transparency Act 2023 are correct? (Choose two.)",
    options: [
      "It requires prosecutors to prove that senior managers knew about, or consented to, the fraud.",
      "It has been in force since 1 September 2025 and applies to large organisations, defined by turnover, balance sheet and employee thresholds.",
      "It is a defence for the organisation to prove that it had reasonable fraud prevention procedures in place.",
      "It applies to organisations of every size, including small businesses with fewer than 50 employees.",
      "It applies mainly where an employee defrauds the organisation itself, for example by embezzlement."
    ],
    answer: [1, 2],
    explanation: "Section 199 came fully into force on 1 September 2025. It applies to large organisations, meaning those meeting two of three conditions: more than 250 employees, more than £36 million turnover and more than £18 million balance sheet total (s.201). The offence is committed when an associated person commits a listed fraud offence intending to benefit the organisation or its clients. Management knowledge is not required, and s.199(4) provides a defence of reasonable prevention procedures. Section 199(3) excludes cases where the organisation was, or was intended to be, the victim.",
    source: [
      { label: "Economic Crime and Corporate Transparency Act 2023 s.199 – failure to prevent fraud (in force 1.9.2025)", url: "https://www.legislation.gov.uk/ukpga/2023/56/section/199" },
      { label: "Economic Crime and Corporate Transparency Act 2023 s.201 – large organisations", url: "https://www.legislation.gov.uk/ukpga/2023/56/section/201" }
    ]
  },
  {
    id: "EU-026", domain: 1, topic: "Failure to prevent fraud: which conduct is in scope", hy: false,
    changed: "ECCTA failure to prevent fraud offence in force 1 September 2025",
    q: "A large UK company is assessing its fraud risk under the ECCTA 2023 failure to prevent fraud offence. Which scenario could expose the COMPANY to liability?",
    options: [
      "A sales employee misrepresents product safety test results to customers to win contracts for the company.",
      "A finance employee embezzles funds from the company's own accounts to pay off personal gambling debts.",
      "A customer with no connection to the company submits a fraudulent insurance claim to the company.",
      "A former supplier that no longer provides any services forges invoices to benefit its own new business."
    ],
    answer: [0],
    explanation: "The offence requires fraud by an associated person (an employee, agent, subsidiary or person performing services for the company) intending to benefit the company or its clients. Misrepresenting test results to win contracts is fraud by false representation that benefits the company. Home Office guidance confirms the company is not liable where it is the victim, as in embezzlement (s.199(3)). A customer, or a former supplier no longer performing services, is not an associated person.",
    source: [
      { label: "Home Office – Guidance to organisations on the offence of failure to prevent fraud (ECCTA 2023)", url: "https://www.gov.uk/government/publications/offence-of-failure-to-prevent-fraud-introduced-by-eccta/economic-crime-and-corporate-transparency-act-2023-guidance-to-organisations-on-the-offence-of-failure-to-prevent-fraud-accessible-version" },
      { label: "Economic Crime and Corporate Transparency Act 2023 s.199", url: "https://www.legislation.gov.uk/ukpga/2023/56/section/199" }
    ]
  },
  {
    id: "EU-027", domain: 3, topic: "Companies House identity verification (ECCTA 2023)", hy: false,
    changed: "Companies House identity verification mandatory from 18 November 2025",
    q: "In 2026 a UK bank is onboarding a newly incorporated UK company. Its sole director says that identity verification with Companies House is optional and not relevant to the bank. What is the BEST response?",
    options: [
      "Accept the claim, because Companies House identity verification applies only to persons with significant control, not directors.",
      "Accept the claim, because identity verification with Companies House stays voluntary until the end of 2027.",
      "Reject the claim, and rely on the director's Companies House verification in place of the bank's own identity checks.",
      "Reject the claim, since new directors must verify their identity with Companies House, but still carry out the bank's own CDD."
    ],
    answer: [3],
    explanation: "Since 18 November 2025, new directors must verify their identity to incorporate a company or be appointed. Existing directors verify when they file their next confirmation statement, and PSCs verify within a 12-month transition period. Verification with Companies House improves the reliability of the register, but it does not replace the bank's own CDD. Under MLR 2017 reg. 28(9), firms may not rely solely on information in the Companies House register to meet beneficial ownership requirements.",
    source: [
      { label: "Companies House press release (5 Aug 2025) – identity verification from 18 November 2025", url: "https://www.gov.uk/government/news/companies-house-confirms-identity-verification-rollout-from-18-november-2025" },
      { label: "MLRs 2017 reg. 28(9) – no sole reliance on the register", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/28" }
    ]
  },
  {
    id: "EU-028", domain: 4, topic: "ECCTA 2023 information sharing (s.188)", hy: false,
    q: "A UK bank is exiting a customer because of economic crime concerns. The customer also banks with another UK bank, and the first bank wants to warn it. Under section 188 of the Economic Crime and Corporate Transparency Act 2023, when is the first bank protected from claims for breach of confidence?",
    options: [
      "Only when the NCA has approved the disclosure in advance through a DAML request submitted by the first bank",
      "Only when both banks have registered with HM Treasury under a voluntary information-sharing notice beforehand",
      "When both are in the regulated sector and the first bank shares because it has decided on safeguarding action such as exiting",
      "Only after the first bank has filed a SAR and the NCA has confirmed that sharing will not prejudice any investigation"
    ],
    answer: [2],
    explanation: "Section 188, in force since 15 January 2024, protects direct disclosures between businesses in the regulated sector about a customer or former customer. The protection covers breach of confidence and civil liability, provided either the request condition or the warning condition is met and the disclosing firm is satisfied the information will help the recipient. The warning condition is met where the firm has decided, because of economic crime concerns, to take safeguarding action: ending the relationship, refusing a service or restricting access. No NCA approval, registration or prior SAR is required, although SAR and tipping-off rules still apply.",
    source: [
      { label: "Economic Crime and Corporate Transparency Act 2023 s.188 – direct disclosures: restrictions on civil liability", url: "https://www.legislation.gov.uk/ukpga/2023/56/section/188" }
    ]
  },
  {
    id: "EU-029", domain: 3, topic: "FCA SYSC 6.3: the MLRO", hy: false,
    q: "A growing FCA-authorised investment firm with 40 employees is formalising its financial crime governance. What does FCA rule SYSC 6.3.9R require in relation to its money laundering reporting officer (MLRO)?",
    options: [
      "Appoint the head of internal audit as MLRO, so that the role is independent of the business lines.",
      "Appoint an individual as MLRO and give them enough authority, independence, resources and information.",
      "Outsource the MLRO role to an external firm that has been approved by the National Crime Agency.",
      "Appoint an MLRO only if the firm's annual number of SARs exceeds the threshold set by the FCA."
    ],
    answer: [1],
    explanation: "SYSC 6.3.9R requires every firm except a sole trader with no employees to appoint an individual as MLRO, responsible for overseeing compliance with the FCA's anti-money laundering systems and controls rules. The firm must give the MLRO sufficient authority, independence and access to resources and information. SYSC 6.3.10G describes the MLRO as the focal point for AML activity and says the FCA expects the MLRO to be based in the UK. Making internal audit the MLRO would compromise the audit function's independence, and there is no SAR-volume threshold or NCA approval of MLROs.",
    source: [
      { label: "FCA Handbook SYSC 6.3.9R-6.3.10G – the money laundering reporting officer", url: "https://www.handbook.fca.org.uk/handbook/SYSC/6/3.html" }
    ]
  },
  {
    id: "EU-030", domain: 4, topic: "DAML requests and authorised push payment fraud", hy: false,
    q: "An elderly customer of a UK bank tells staff to transfer £40,000 of her savings to an overseas 'partner' she met online. Staff believe she is the victim of a romance scam. The fraud team proposes submitting a DAML request to the UKFIU and processing the payment if no refusal arrives within seven working days. What is the BEST course of action?",
    options: [
      "Submit the DAML request and process the payment if no refusal is received within the seven-working-day notice period.",
      "Submit the DAML request and hold the payment for the 31-day moratorium period, whatever response the UKFIU gives.",
      "Process the payment immediately, because the customer's instruction overrides any concerns the bank has about fraud.",
      "Not seek a DAML, because her savings are not criminal property before the transfer; handle it through fraud and customer-protection processes."
    ],
    answer: [3],
    explanation: "UKFIU guidance says a DAML cannot be given where the property is not criminal property at the time of the disclosure. In romance or advance-fee scams, the victim's funds become criminal only once they reach the fraudster, so the criteria for a DAML request are not met. The bank should use its fraud-prevention and vulnerable-customer processes (for example, intervening, delaying and discussing the payment with the customer) and consider a SAR on the suspected fraudster. The seven-working-day and 31-day periods apply only to valid DAML requests.",
    source: [
      { label: "UKFIU (NCA) – Chapter 3: Understanding DAMLs and DATFs (FAQ Q2-Q3)", url: "https://www.nationalcrimeagency.gov.uk/who-we-are/publications/776-ukfiu-chapter-3-understanding-damls-and-datfs/file" }
    ]
  }
]);
