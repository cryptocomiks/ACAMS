// Batch 6 (October 2026): regional and national AML/CFT regimes applied to practical cross-border cases (domain 2).
window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  { id: "REGS-001", domain: 2, topic: "AMLR Art. 17: branch in a third country with less strict requirements", hy: true, difficulty: "hard",
    q: "In 2028, Polder Bank NV, headquartered in the Netherlands, runs a profitable branch in Country T, outside the EU. Country T's AML law lets banks apply simplified checks to every locally incorporated company and does not require beneficial owners to be verified. Nothing in Country T's law prevents a bank from doing more than the local minimum. The branch manager says that the branch is licensed locally, so only Country T's rules apply to it. The branch's largest client, a logistics company, pays its invoices on time and has been a customer for nine years. Under the EU Anti-Money Laundering Regulation (AMLR), what must the parent do?",
    options: [
      "Ensure the branch applies AMLR-standard CDD, including beneficial ownership verification, because the host's rules are less strict and local law permits it",
      "Let the branch follow Country T's rules, because a locally licensed branch is governed only by the law of the host country",
      "Inform the Dutch supervisor and apply additional measures in place of AMLR requirements, because Country T's minimum standards are lower",
      "Close the branch, because the AMLR prohibits EU groups from operating in countries whose AML standards are lower than the EU's"
    ],
    answer: [0],
    explanation: "AMLR Article 17(1) requires the parent to ensure that branches and subsidiaries in third countries with less strict minimum requirements comply with the AMLR (or equivalent). Informing the home supervisor and taking additional measures under Article 17(2) is the runner-up, but it applies only where the third country's law does not permit compliance, which is not the case here. Host licensing does not switch off group-wide obligations, and the AMLR does not ban operating in such countries. The client's payment record is irrelevant.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Art. 17 – branches and subsidiaries in third countries", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng" }
    ] },

  { id: "REGS-002", domain: 2, topic: "AMLR Art. 18: outsourcing CDD to a group hub in a high-risk third country", hy: false, difficulty: "hard",
    q: "In 2028, Banca Lirena SpA, an Italian bank, wants to move KYC work to its group's shared-service centre in Country K. The Commission has identified Country K as a high-risk third country under the AMLR. The centre belongs to the same group, the group applies AMLR-compliant policies across all entities, and the Bank of Italy supervises the group on a consolidated basis. The project plan moves three tasks to the centre: collecting and checking identity documents, assigning each customer's final risk profile, and filing suspicious transaction reports with the Italian FIU. The centre's staff costs are 60% lower than in Milan. Which plan complies with the AMLR?",
    options: [
      "Outsource nothing to Country K, because the AMLR bans any outsourcing of CDD tasks to providers in high-risk third countries",
      "Outsource all three tasks, as long as the bank notifies its supervisor and signs a written outsourcing agreement",
      "Outsource document collection and checking after notifying the supervisor, but keep risk-profile decisions and STR reporting in the bank",
      "Outsource all three tasks without notice, because the hub is in the same group and therefore not a separate service provider"
    ],
    answer: [2],
    explanation: "Article 18(6) allows outsourcing to a provider in a high-risk third country only if it belongs to the same group, the group applies AMLR-compliant policies, and the home supervisor supervises their implementation at group level. All three conditions are met here, so a total ban is wrong. Article 18(3) still forbids outsourcing the decision on a customer's risk profile and reporting to the FIU (except to a group entity in the same Member State). That is why notifying the supervisor and signing a contract is not enough to move all three tasks. Article 18(1) also requires the supervisor to be notified before the provider starts the task.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Art. 18 – outsourcing", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng" }
    ] },

  { id: "REGS-003", domain: 2, topic: "Singapore MAS Notice 626: overseas subsidiaries apply the higher of the two standards", hy: true, difficulty: "hard",
    q: "Merlion Harbour Bank, incorporated in Singapore, owns a bank subsidiary in Country V. Country V requires CDD on occasional cash transactions from a lower threshold than Singapore does. Its data-localisation law also forbids sending customer-level data abroad, so the subsidiary cannot feed the group's transaction monitoring hub in Singapore. The subsidiary's CEO proposes applying the Singapore threshold, because that is 'group policy', and simply leaving the subsidiary out of group monitoring. Country V has a strong FATF mutual evaluation. Under MAS Notice 626, what is the BEST approach?",
    options: [
      "Apply Singapore's threshold for consistency, and leave the subsidiary out of group monitoring because host law forbids data transfers",
      "Apply Country V's rules alone, since the subsidiary is locally licensed and the host's evaluation is strong",
      "Wind down the subsidiary, because MAS Notice 626 does not allow subsidiaries that cannot share customer data with the group",
      "Apply Country V's lower threshold, apply other measures to manage the monitoring gap, report the conflict to MAS and follow its directions"
    ],
    answer: [3],
    explanation: "Paragraph 15.8 requires overseas branches and subsidiaries to apply the higher of the Singapore and host standards, to the extent host law permits. Here the host's CDD threshold is the stricter one. Where host law prevents the higher standard from being fully applied, as with the data-transfer ban, paragraph 15.9 requires additional measures, a report to MAS and compliance with MAS directions. The CEO's plan is wrong on both points: 'group policy' does not mean the home rule where the host's is stricter, and the gap cannot simply be left open. The strong mutual evaluation does not change these obligations.",
    source: [
      { label: "MAS Notice 626 (last revised 30 June 2025), paras 15.4-15.9 – group policy", url: "https://www.mas.gov.sg/-/media/amld-amendments---30-june-2025/mas-notice-626.pdf" }
    ] },

  { id: "REGS-004", domain: 2, topic: "Hong Kong: overseas subsidiary unable to apply AMLO record-keeping standards", hy: false, difficulty: "hard",
    q: "Kowloon Crest Bank, a Hong Kong-incorporated authorized institution, owns a subsidiary in Country Q that carries on banking business. Country Q's privacy law requires banks to destroy customer records three years after an account closes, and it allows no exceptions. The Hong Kong standard is at least five years. The subsidiary is small and makes 2% of group profit. Under the HKMA Guideline on AML/CFT, which steps must the parent take? (Choose two.)",
    options: [
      "Inform the HKMA that the subsidiary cannot apply the higher record-keeping requirement",
      "Take additional measures to mitigate the ML/TF risks that result from the shorter retention period",
      "Accept the three-year period without further action, because host law always prevails over group standards",
      "Instruct the subsidiary to copy all records to Hong Kong before deletion, even though Country Q's law forbids it",
      "Close the subsidiary immediately, because the Guideline does not allow subsidiaries that cannot meet Schedule 2"
    ],
    answer: [0, 1],
    explanation: "Paragraphs 3.15-3.18 require Hong Kong-incorporated AIs to apply CDD and record-keeping requirements similar to Parts 2 and 3 of Schedule 2 to the AMLO across overseas branches and subsidiaries, using the higher of the home and host requirements where the host's laws permit. Where host law does not permit this, paragraph 3.19 requires the AI to inform the HKMA and take additional measures to mitigate the resulting risks. Doing nothing ignores paragraph 3.19, and the Guideline does not tell the AI to break host law or to close the subsidiary automatically.",
    source: [
      { label: "HKMA Guideline on AML/CFT (for Authorized Institutions), revised May 2023, paras 3.15-3.19", url: "https://brdr.hkma.gov.hk/eng/doc-ldg/docId/getPdf/20230525-4-EN/AML-2.pdf" }
    ] },

  { id: "REGS-005", domain: 2, topic: "Hong Kong: relationships managed in Hong Kong but booked abroad", hy: false, difficulty: "hard",
    q: "Victoria Peak Private Bank, an authorized institution in Hong Kong, has a team of 12 relationship managers in Central. They pitch to wealthy clients, take their investment instructions, run their annual reviews and are paid on the revenue those clients generate. To simplify the legal structure, all new client accounts are booked at the group's booking centre in Singapore. The Hong Kong head of compliance says that, because no account is booked in Hong Kong, the AMLO's CDD requirements do not apply to these clients. The Singapore booking centre applies MAS rules. What is the MOST accurate assessment?",
    options: [
      "The AMLO applies only where an account is booked in Hong Kong, so the Singapore booking takes these clients out of scope",
      "Because the relationships are managed in substance from Hong Kong, they are business relationships under the AMLO, and the Hong Kong AI must meet its CDD requirements",
      "The AMLO applies only to occasional transactions of HK$120,000 or more that these clients carry out in Hong Kong",
      "Only Singapore law applies, because a client can have a business relationship in only one jurisdiction at a time"
    ],
    answer: [1],
    explanation: "Paragraph 4.1.6 of the HKMA Guideline notes that relationships are often managed by an AI while the account is booked outside Hong Kong. The key question is whether the relationship is managed in substance by the AI, and if so, the AI must comply with the AMLO and the Guideline. The runner-up misreads footnote 13: booking an account in Hong Kong always creates a business relationship, but booking elsewhere does not rule one out. The Singapore booking centre's MAS duties apply in addition, not instead.",
    source: [
      { label: "HKMA Guideline on AML/CFT (for Authorized Institutions), revised May 2023, paras 4.1.6 and 4.2", url: "https://brdr.hkma.gov.hk/eng/doc-ldg/docId/getPdf/20230525-4-EN/AML-2.pdf" }
    ] },

  { id: "REGS-006", domain: 2, topic: "Singapore branch of a foreign bank: sharing information within the group (MAS Notice 626)", hy: false, difficulty: "medium",
    q: "The Singapore branch of Banque Rive Gauche, a French bank, has filed an STR on a commodities trader that also banks with the group's branches in Geneva and Dubai. Group financial crime compliance in Paris asks the branch for the trader's account and transaction data and for its analysis of the unusual activity, to support group-wide monitoring. The branch manager refuses, saying that Singapore banking secrecy prevents customer data from leaving the branch unless the customer consents. Under MAS Notice 626, what should the branch do?",
    options: [
      "Ask the trader to consent before any data is sent to Paris",
      "Send only anonymised, aggregated statistics, because customer-level data must stay in Singapore",
      "Share the customer, account and transaction information and its analysis with the group, with safeguards to protect confidentiality and use",
      "Refuse until Paris obtains a court order, because the STR makes the information confidential"
    ],
    answer: [2],
    explanation: "Paragraph 15.9A of MAS Notice 626 requires the Singapore branch of a foreign-incorporated bank to share customer, account and transaction information within the bank's financial group when necessary for ML/TF risk management. This includes information and analysis of unusual transactions. It must put in place adequate safeguards to protect the confidentiality and use of what it shares. Asking the customer for consent would create a real risk of tipping off, and a court order is not required.",
    source: [
      { label: "MAS Notice 626 (last revised 30 June 2025), para 15.9A", url: "https://www.mas.gov.sg/-/media/amld-amendments---30-june-2025/mas-notice-626.pdf" }
    ] },

  { id: "REGS-007", domain: 2, topic: "EU high-risk third countries list: 2025 update (Delegated Regulation (EU) 2025/1184)", hy: true, difficulty: "hard",
    changed: "Delegated Regulation (EU) 2025/1184 (in force Aug 2025): Monaco, Kenya and others added; UAE, Panama and others removed",
    q: "In September 2025, Kanaal Pay BV, a Dutch payment institution, finds that its screening tool still uses a hard-coded list of EU high-risk third countries copied in 2024. That list includes the United Arab Emirates and Panama but not Monaco or Kenya. That week it onboards two corporate customers: a yacht brokerage established in Monaco and a trading company established in Dubai. Both have simple ownership structures, and both directors are long-standing clients of a partner bank. Which response is BEST?",
    options: [
      "Leave the list unchanged until the AMLR applies in July 2027, because the 2024 list stays valid until then",
      "Keep the UAE on the internal list permanently, because a country removed from the list remains high risk by default",
      "Use only the FATF lists, because EU obliged entities must follow FATF statements and not the Commission's list",
      "Update the list: apply mandatory high-risk-country EDD to the Monaco customer, and risk-assess the Dubai customer under normal rules"
    ],
    answer: [3],
    explanation: "Delegated Regulation (EU) 2025/1184, which entered into force in August 2025, added Algeria, Angola, Côte d'Ivoire, Kenya, Laos, Lebanon, Monaco, Namibia, Nepal and Venezuela to the EU list. It removed Barbados, Gibraltar, Jamaica, Panama, the Philippines, Senegal, Uganda and the UAE. Mandatory EDD for relationships involving listed countries applies straight away under the AMLD rules, so waiting for the AMLR is wrong. The Dubai customer is still assessed on its own risk factors, but the UAE no longer triggers list-based EDD. The EU list, not only the FATF statements, is what triggers the EU legal requirement.",
    source: [
      { label: "Commission Delegated Regulation (EU) 2025/1184 amending Delegated Regulation (EU) 2016/1675", url: "https://eur-lex.europa.eu/eli/reg_del/2025/1184/oj/eng" }
    ] },

  { id: "REGS-008", domain: 2, topic: "AMLR: Art. 29 vs Art. 30 high-risk third countries", hy: true, difficulty: "hard",
    q: "Under the EU AMLR, which statements correctly describe the measures that apply to third countries identified by the Commission? (Choose two.)",
    options: [
      "For a country with significant strategic deficiencies (Art. 29), obliged entities apply all the EDD measures in Art. 34(4), and the delegated act also sets country-specific countermeasures",
      "For a country with compliance weaknesses (Art. 30), the delegated act identifies which specific EDD measures from Art. 34(4) obliged entities must apply",
      "For a country with compliance weaknesses (Art. 30), obliged entities must apply the full set of countermeasures, including a ban on opening branches there",
      "Member States may never impose countermeasures beyond those that the Commission has set for an Art. 29 country",
      "EDD must automatically be applied to an EU group's own branches in listed countries, even where they fully comply with group-wide policies"
    ],
    answer: [0, 1],
    explanation: "Article 29(4)-(5) requires the EDD measures listed in Article 34(4) for countries with significant strategic deficiencies (broadly the FATF call-for-action tier), and the delegated act also selects specific countermeasures from Article 35. Article 30(4) makes the delegated act for countries with compliance weaknesses identify the specific EDD measures to apply. Countermeasures are not automatic for Article 30 countries. Article 29(6) lets a Member State add specific countermeasures, which it must notify to the Commission within 5 days. Article 34(8) says EDD is not invoked automatically for an EU group's branches and subsidiaries that fully comply with group-wide policies.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Arts. 29, 30, 34(8) and 35", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng" }
    ] },

  { id: "REGS-009", domain: 2, topic: "AMLA direct supervision: applying the selection criteria to a group", hy: false, difficulty: "hard",
    q: "Corvalis Bank Group has its head office in Member State A. It has bank subsidiaries in Member States B and C and a branch in Member State D. It also serves customers in Member States E and F remotely under the freedom to provide services, with no offices there. Its total assets are EUR 25 billion. In the AMLA assessment that starts in 2027, Corvalis's subsidiary in B is individually seen as high risk by its national supervisor, but the group-wide residual risk profile is classified as 'substantial'. What is the outcome under the AMLA Regulation?",
    options: [
      "Corvalis is outside the assessment, because it is established in only four Member States",
      "Corvalis is selected, because one of its subsidiaries is high risk in its own Member State",
      "Corvalis is assessed but not selected, because only a group-wide residual risk profile classified as high qualifies",
      "Corvalis is selected automatically, because its total assets exceed the EUR 20 billion threshold"
    ],
    answer: [2],
    explanation: "Article 12(1) of Regulation (EU) 2024/1620 covers institutions and groups operating in at least six Member States, including the home one, whether through establishments or under the freedom to provide services, including remotely. So A to F count, and Corvalis is assessed. Article 12(3) classifies a group's risk profile at group-wide level, and Article 13(1) selects only those whose residual risk is high. One high-risk subsidiary therefore does not lead to selection. Size is not a criterion. The additional selection under Article 13(3) also picks only entities whose risk profile is high.",
    source: [
      { label: "Regulation (EU) 2024/1620 (AMLA Regulation), Arts. 12-13", url: "https://eur-lex.europa.eu/eli/reg/2024/1620/oj/eng" }
    ] },

  { id: "REGS-010", domain: 2, topic: "EU Blocking Statute vs US secondary sanctions (Bank Melli, C-124/20)", hy: false, difficulty: "hard",
    q: "Donauland Bank AG is an Austrian bank with no US offices, no US shareholders and no US dollar business. A long-standing customer, an Austrian food exporter, sells products in euros to a private Iranian buyer. The trade is lawful under EU sanctions, and no EU-listed person is involved. After reading about US secondary sanctions under the Iran Freedom and Counter-Proliferation Act, the head of compliance drafts a memo: 'Exit the customer to stay aligned with US Iran sanctions.' The exporter has threatened to sue. Under the EU Blocking Statute, what is the BEST course of action?",
    options: [
      "Exit the customer as drafted, because EU banks must follow US secondary sanctions to protect their correspondent relationships",
      "Exit without giving reasons, because unexplained terminations can never be challenged under the Blocking Statute",
      "Ask OFAC for a licence before deciding, because the Iranian buyer is subject to US jurisdiction",
      "Do not base the decision on complying with the US measures. Decide on documented risk grounds of its own, or seek Commission authorisation to comply"
    ],
    answer: [3],
    explanation: "Article 5 of Regulation 2271/96 forbids EU persons from complying with the US laws listed in its annex, which include the Iran Freedom and Counter-Proliferation Act. Persons may apply for authorisation where non-compliance would seriously damage their interests. In Bank Melli (C-124/20), the CJEU held that this applies even without a US order. Termination without reasons is not banned as such, which makes it the runner-up. But if the evidence suggests the bank acted to comply with the listed laws, the bank must prove otherwise, and a memo like this one would be strong evidence. OFAC has no licensing role over a non-US bank's euro trade.",
    source: [
      { label: "Council Regulation (EC) No 2271/96 (Blocking Statute), consolidated text – Arts. 1, 2, 5 and Annex", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:01996R2271-20180807" },
      { label: "CJEU, Case C-124/20 Bank Melli Iran v Telekom Deutschland (21 December 2021)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:62020CJ0124" }
    ] },

  { id: "REGS-011", domain: 2, topic: "OFAC reach: foreign branches of US banks are US persons", hy: true, difficulty: "hard",
    q: "Hudson Meridian Bank, N.A. operates a branch in Frankfurt. The branch receives a EUR 2.4 million incoming payment for a German corporate customer. The payment comes from a Russian company that OFAC added to the SDN List last week. The EU has not listed it. The payment came through the euro clearing system, and no US dollars or US-based banks are involved. The branch's operations head says that only EU and German law apply, because the branch is regulated by BaFin. The German customer says the payment settles a 2023 contract. What should the branch do?",
    options: [
      "Block the funds and report them to OFAC within 10 business days, because the branch is a US person under OFAC's regulations",
      "Reject the payment and file a rejected-transaction report, because rejection is the standard response for any SDN-related payment",
      "Process the payment, because OFAC jurisdiction depends on US dollar clearing and the payment is in euros",
      "Process the payment but ask BaFin for guidance, because the branch's host regulator decides which sanctions regime applies"
    ],
    answer: [0],
    explanation: "OFAC's Russia regulations define a US person to include any entity organised under US law, including its foreign branches (31 CFR 587.314). The Frankfurt branch is therefore bound by OFAC prohibitions whatever the currency or clearing route. Property in which an SDN has an interest that comes into a US person's possession must be blocked, and the blocking must be reported within 10 business days (31 CFR 501.603). Rejection is the runner-up, but it is used where processing would be prohibited and there is no blockable interest, not where an SDN is the originator. The branch must also comply with EU and German law, but that does not cancel its US obligations.",
    source: [
      { label: "31 CFR 587.314 – definition of United States person (including foreign branches)", url: "https://www.ecfr.gov/current/title-31/section-587.314" },
      { label: "31 CFR 501.603 – reports of blocked property (10 business days)", url: "https://www.ecfr.gov/current/title-31/section-501.603" }
    ] },

  { id: "REGS-012", domain: 2, topic: "US dollar clearing and OFAC jurisdiction: lessons from British Arab Commercial Bank (2019)", hy: false, difficulty: "medium",
    q: "Calder Gate Bank plc is a London bank with no US offices. It plans to serve banks in a country that is under comprehensive US sanctions but not UK sanctions. To avoid the US, payments to those customers' counterparties will be book transfers from a US dollar nostro account at a bank in Asia. The nostro will be topped up every month by large USD transfers from the bank's accounts at European banks. The business plan expects USD 50 million a year in fees, and the board has approved it. What is the MOST significant sanctions risk in this design?",
    options: [
      "UK sanctions law will apply to the third-party payments, because sterling equivalents are recorded in the bank's ledger",
      "The bulk USD funding transfers will clear through US banks, which can make the bank liable for causing OFAC violations",
      "The Asian bank holding the nostro will become a US person, because it holds US dollar balances",
      "Book transfers on the Asian bank's ledger are reportable to FinCEN as cross-border funds transfers"
    ],
    answer: [1],
    explanation: "OFAC settled with British Arab Commercial Bank in 2019 for USD 4 million (base penalty USD 381.4 million; OFAC judged the case egregious). BACB, a London bank with no US presence, processed Sudan-related USD payments through a nostro at a non-US bank. The individual payments never touched the US, but the bulk transfers that funded the nostro were processed through US banks. That is exactly the design described here. Holding US dollar balances does not make a foreign bank a US person, and the other options are not the main risk.",
    source: [
      { label: "OFAC Enforcement Information, 17 September 2019 – British Arab Commercial Bank plc", url: "https://ofac.treasury.gov/media/26036/download" }
    ] },

  { id: "REGS-013", domain: 2, topic: "Which US rules reach which offices: BSA vs OFAC", hy: true, difficulty: "hard",
    q: "A compliance officer is mapping obligations for two banks. Nordhafen Bank AG, a German bank, has a branch in New York. Lakeview Bancorp's national bank, a US bank, has a branch in London. Which statements are correct? (Choose two.)",
    options: [
      "Nordhafen's New York branch must file SARs with FinCEN, because the BSA rules define 'bank' to include US branches of foreign banks",
      "Lakeview's London branch must comply with OFAC sanctions, because OFAC's regulations treat foreign branches of US banks as US persons",
      "Lakeview's London branch must file CTRs with FinCEN for cash deposits over USD 10,000 made in London",
      "Nordhafen's New York branch may apply the German Money Laundering Act instead of the BSA, because BaFin supervises the group",
      "Lakeview's London branch need not report to the UK National Crime Agency, because its parent files SARs with FinCEN"
    ],
    answer: [0, 1],
    explanation: "31 CFR 1010.100(d) defines 'bank' as each agent, agency, branch or office within the United States of listed institutions, including a bank organised under foreign law. A US branch of a foreign bank is therefore subject to the BSA, and a London branch of a US bank is outside the BSA's CTR and SAR rules. OFAC's definitions of 'US person', such as 31 CFR 560.314, expressly include foreign branches of US entities. The London branch is also in the UK regulated sector, so it must report suspicions to the NCA under UK law.",
    source: [
      { label: "31 CFR 1010.100(d) – definition of bank (offices within the United States)", url: "https://www.ecfr.gov/current/title-31/section-1010.100" },
      { label: "31 CFR 560.314 – United States person (including foreign branches)", url: "https://www.ecfr.gov/current/title-31/section-560.314" }
    ] },

  { id: "REGS-014", domain: 2, topic: "AMLR: EU branch of a third-country bank reports to the host FIU", hy: false, difficulty: "medium",
    q: "In 2028, the Dublin branch of Granite Lakes Bank, a US bank, finds that an Irish customer is receiving large transfers from shell companies and moving them on to crypto exchanges the same day. The US head office tells the branch that its central investigations unit will file a SAR with FinCEN covering the whole relationship. It says a separate Irish report would duplicate effort, and FinCEN can share the SAR through the Egmont Group if needed. What should the Dublin branch do?",
    options: [
      "Have its compliance officer report to the Irish FIU, because the branch is an obliged entity under the AMLR",
      "Rely on the FinCEN SAR, because FIU-to-FIU sharing through the Egmont Group meets the Irish reporting duty",
      "Report to AMLA, because suspicious activity at branches of third-country banks is reported at EU level",
      "Report to the Irish FIU only if the US head office approves, because the head office owns the relationship"
    ],
    answer: [0],
    explanation: "Under the AMLR, 'credit institution' includes a branch located in the Union of a credit institution with its head office in a third country, so the Dublin branch is an obliged entity in its own right. Article 69(6) requires its compliance officer to send suspicious transaction reports to the FIU of the Member State where it is established, which here is Ireland. A FinCEN SAR does not discharge that duty, AMLA is a supervisor and not an FIU, and head-office approval is not a condition for reporting.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Art. 2 (credit institution definition) and Art. 69(6)", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng" }
    ] },

  { id: "REGS-015", domain: 2, topic: "Group record-retention policy: OFAC's 10 years vs AMLR deletion after 5 years", hy: false, difficulty: "hard",
    changed: "OFAC recordkeeping extended from 5 to 10 years (effective Mar 2025)",
    q: "Arden Global Bank has US operations and a subsidiary in Luxembourg. In 2028 its group policy committee proposes one rule for every entity: 'Keep all CDD files and transaction records for 10 years after a relationship ends. Where rules differ, the stricter one wins.' The US units process transactions covered by OFAC regulations. The Luxembourg subsidiary serves mainly retail customers, and no authority has asked it to keep particular files longer. The committee notes that one global rule would cut archiving costs by 30%. What is the BEST advice?",
    options: [
      "Adopt the 10-year rule everywhere, because a group must always apply the longest retention period that any of its regulators sets",
      "Keep at least 10 years for OFAC-covered records in the US, but let the Luxembourg subsidiary keep 5 years and then delete, unless longer retention is required",
      "Adopt 5 years everywhere, because EU data protection law is the strictest rule and therefore binds the US units as well",
      "Keep all records indefinitely, because retention limits do not apply to records kept for AML/CFT purposes"
    ],
    answer: [1],
    explanation: "31 CFR 501.601 requires records of transactions subject to OFAC regulations to be available for at least 10 years. AMLR Article 77(3) sets a 5-year retention period and then requires personal data to be deleted, unless other Union or national law requires longer retention or a competent authority orders up to 5 more years in a specific case. 'Stricter wins' does not work here, because the two rules pull in opposite directions. A single 10-year rule would breach the EU deletion duty, and a single 5-year rule would breach OFAC's.",
    source: [
      { label: "31 CFR 501.601 – records and recordkeeping (10 years)", url: "https://www.ecfr.gov/current/title-31/section-501.601" },
      { label: "Regulation (EU) 2024/1624 (AMLR), Art. 77 – record retention", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng" }
    ] },

  { id: "REGS-016", domain: 2, topic: "Switzerland: consolidated AML oversight of foreign group companies (FINMA 2022)", hy: false, difficulty: "medium",
    q: "Bank Alpenblick AG, a Swiss bank, owns banking subsidiaries in two countries outside the EU. Each subsidiary uses only its local procedures, and there is no group-wide directive on opening, monitoring or ending relationships. Head office gets no regular risk reporting from them, and nobody at head office is clearly responsible for them. An internal audit report says this 'respects local autonomy'. Based on the measures FINMA ordered in its 2022 enforcement case against a Swiss bank parent, which corrective step is MOST appropriate?",
    options: [
      "Issue a group-wide directive making the principles of the Swiss Anti-Money Laundering Act binding on all group companies, and strengthen the parent's compliance function",
      "Keep local autonomy and ask each subsidiary's external auditor to confirm that it complies with local law",
      "Sell both subsidiaries, because Swiss law does not allow banks to own subsidiaries in countries with weaker AML regimes",
      "Move all customer onboarding to Switzerland, because group companies may not make their own onboarding decisions"
    ],
    answer: [0],
    explanation: "In a 2022 ruling, FINMA found that a Swiss bank parent had not met group-wide AML/CFT requirements or applied its internal guidelines at group level. It ordered the bank to strengthen the parent's compliance department and to issue a group-wide directive on starting, monitoring and ending business relationships. It also had to make the principles of the Anti-Money Laundering Act mandatory across the group and to allocate management responsibilities in writing, with an audit firm checking implementation. Local compliance alone is not enough, and divesting or centralising everything was not required.",
    source: [
      { label: "FINMA – Enforcement proceedings due to shortcomings in consolidated supervision in the area of combating money laundering (2022)", url: "https://www.finma.ch/en/documentation/dossier/dossier-geldwaeschereibekaempfung/enforcementverfahren-wegen-maengeln-in-der-konsolidierten-aufsicht-im-bereich-geldwaeschereibek/" }
    ] },

  { id: "REGS-017", domain: 2, topic: "Canada: foreign money services businesses must register with FINTRAC", hy: false, difficulty: "medium",
    q: "Lumora Remit Ltd is licensed as a payment institution in Malta and has no office or staff in Canada. It plans to launch its remittance app to diaspora communities in Toronto and Montreal next month. It has a .ca domain, prices in Canadian dollars and runs social media ads aimed at Canadian users. Its customers will fund transfers from Canadian bank accounts. The CEO believes that a Maltese licence and an EU passport are enough for a business with no physical presence in Canada. What must Lumora do FIRST?",
    options: [
      "Nothing in Canada, because PCMLTFA obligations apply only to businesses with a place of business in Canada",
      "Register only with the Bank of Canada as a payment service provider, which replaces FINTRAC registration",
      "Open a Canadian branch, because only domestic MSBs may offer remittances to persons in Canada",
      "Register with FINTRAC as a foreign money services business before providing services to clients in Canada"
    ],
    answer: [3],
    explanation: "FINTRAC defines a foreign MSB as a person or entity with no place of business in Canada that provides services such as remitting or transmitting funds, directs them at persons or entities in Canada, and provides them to clients in Canada. Advertising aimed at Canadians, a .ca domain and Canadian-dollar pricing are listed indicators of directing services at Canada. A foreign MSB that meets the definition must register with FINTRAC. Other Canadian regimes, such as Bank of Canada registration, do not replace FINTRAC registration, and no Canadian branch is required.",
    source: [
      { label: "FINTRAC – Check to see if you need to register as a money services business (foreign MSBs)", url: "https://fintrac-canafe.canada.ca/msb-esm/questions/2-eng" }
    ] },

  { id: "REGS-018", domain: 2, topic: "Canada: Ministerial Directive on transactions associated with Iran", hy: true, difficulty: "hard",
    changed: "FINTRAC Iran Ministerial Directive extended to all PCMLTFA reporting entities (15 Nov 2025)",
    q: "Farhad, a long-standing member of Lakeshore Credit Union in Toronto, sends CAD 1,200 by electronic funds transfer to his sister in Tehran to pay her hospital bills. He is a salaried engineer, the amount fits his profile, and neither he nor his sister is on any sanctions list. The teller notes that the transfer is far below the CAD 10,000 reporting threshold and that nothing about it seems suspicious. What must the credit union do?",
    options: [
      "Nothing beyond normal records, because the transfer is under CAD 10,000 and there are no grounds for suspicion",
      "File an STR only, because transactions with Iran are reportable only when sanctions evasion is suspected",
      "Refuse the transfer, because Canadian law prohibits all personal remittances to Iran",
      "Treat the transfer as high risk, verify Farhad's identity, keep a record and report it to FINTRAC whatever the amount"
    ],
    answer: [3],
    explanation: "The Ministerial Directive on Iran requires every financial transaction originating from or bound for Iran, regardless of amount, to be treated as high risk. The entity must verify the client's identity, apply due diligence with attention to sanctions-evasion risk, keep a record and report the transaction to FINTRAC. For an EFT, an entity with EFT reporting obligations uses an EFTR, due within 5 working days. Since 15 November 2025, the directive applies to all reporting entities under the PCMLTFA. The usual CAD 10,000 threshold and the need for suspicion do not apply, and the directive does not ban the transfer.",
    source: [
      { label: "FINTRAC – Guidance related to the Ministerial Directive on financial transactions associated with Iran", url: "https://fintrac-canafe.canada.ca/obligations/dir-iri-eng" }
    ] },

  { id: "REGS-019", domain: 2, topic: "Canada: new AMP framework after Bill C-12 (March 2026)", hy: false, difficulty: "medium",
    changed: "Strengthening Canada's Immigration System and Borders Act, Royal Assent 26 Mar 2026: AMPs up to 40x, mandatory compliance agreements",
    q: "In September 2026, FINTRAC examines Northgate Exchange, a Vancouver money services business owned by a Hong Kong group. It finds that Northgate did not submit STRs on 14 transactions between April and June 2026. Northgate's lawyer argues that the old penalty limits apply until the regulations are rewritten, and that any compliance agreement would be voluntary. Which statement is MOST accurate?",
    options: [
      "The violations occurred after 26 March 2026, so the new framework applies: maximum penalties up to 40 times higher and a mandatory compliance agreement",
      "The old limits apply, because the new penalty framework covers only violations found in examinations that start after 2027",
      "Only a warning letter is possible, because FINTRAC cannot penalise MSBs with a foreign parent",
      "FINTRAC may combine pre- and post-March 2026 periods in one exam and apply whichever limits are lower"
    ],
    answer: [0],
    explanation: "FINTRAC states that Royal Assent of the Strengthening Canada's Immigration System and Borders Act on 26 March 2026 introduced a new AMP framework. It provides maximum penalties up to 40 times the previous limits, mandatory compliance agreements for prescribed violations committed after that date, compliance orders, and consideration of ability to pay. Violations entirely before that date fall under the former policy. FINTRAC scopes examinations to fall within one legislative period, rather than combining both.",
    source: [
      { label: "FINTRAC – Administrative monetary penalties: changes following legislative amendments", url: "https://fintrac-canafe.canada.ca/pen/3-eng" }
    ] },

  { id: "REGS-020", domain: 2, topic: "Australia: AML/CTF compliance officer requirements (from 31 March 2026)", hy: true, difficulty: "hard",
    changed: "AML/CTF Amendment Act 2024, Sch. 1 in force 31 Mar 2026: AML/CTF compliance officer must be fit and proper and, where services are provided through an Australian permanent establishment, an Australian resident",
    q: "Southern Cross Trade Bank is the Australian subsidiary of a Singapore banking group and provides its services through offices in Sydney and Melbourne. Preparing for the reforms that commence on 31 March 2026, the board proposes designating the group's head of compliance as its AML/CTF compliance officer. She is highly experienced and lives in Singapore, and she would visit Australia every quarter. The board says that her seniority is what matters, and that AUSTRAC need not be told until the next annual compliance report. What is the BEST advice?",
    options: [
      "Designate her, because seniority and experience satisfy the fit and proper test and residency is not required",
      "Designate her, but only after AUSTRAC formally approves the appointment",
      "Designate an Australian resident at management level who is fit and proper, and notify AUSTRAC within 14 days",
      "Designate a non-executive director, because the compliance officer must sit on the board to have enough authority"
    ],
    answer: [2],
    explanation: "Under new section 26J of the AML/CTF Act, inserted by the 2024 Amendment Act and in force from 31 March 2026, the compliance officer must be employed or engaged at management level and have enough authority, independence and resources. The officer must be a fit and proper person and, where services are provided through a permanent establishment in Australia, an Australian resident. Section 26M requires AUSTRAC to be notified within 14 days of the designation, not at the annual report. AUSTRAC approval is not required in advance, and a board seat is not required.",
    source: [
      { label: "Anti-Money Laundering and Counter-Terrorism Financing Amendment Act 2024 (No. 110, 2024), Sch. 1 – ss. 26J-26M; commencement table", url: "https://www.legislation.gov.au/C2024A00110/asmade/text" }
    ] },

  { id: "REGS-021", domain: 2, topic: "Australia: the reformed tipping-off offence (s.123)", hy: false, difficulty: "medium",
    q: "The Australian branch of a UK bank filed a suspicious matter report on a customer whose account the Australian Federal Police are investigating. Four disclosures are made afterwards. Under the reformed tipping-off offence in section 123 of the AML/CTF Act, which disclosure is MOST likely to be an offence?",
    options: [
      "The MLRO discusses the report with an AUSTRAC officer during a compliance review",
      "The relationship manager tells the customer that the bank has reported his transfers and that 'police may be in touch'",
      "The bank shares information with another reporting entity to disrupt money laundering, under conditions set by the regulations",
      "A qualified accountant, who is a reporting entity, uses report information in good faith to dissuade a client from committing an offence"
    ],
    answer: [1],
    explanation: "Under the substituted section 123, it is an offence to disclose that a suspicious matter report was made, or its contents, where the disclosure would or could reasonably be expected to prejudice an investigation. It does not matter whether an investigation has started. Telling the customer during an active police investigation clearly meets that test. Disclosures to AUSTRAC entrusted persons are excluded. There are exceptions for legal practitioners and accountants who dissuade a client from offending in good faith, and for sharing with another reporting entity to detect or disrupt money laundering under the prescribed conditions.",
    source: [
      { label: "Anti-Money Laundering and Counter-Terrorism Financing Amendment Act 2024 (No. 110, 2024), Sch. 5 – new s.123", url: "https://www.legislation.gov.au/C2024A00110/asmade/text" }
    ] },

  { id: "REGS-022", domain: 2, topic: "UK MLRs reg. 34A: EDD for cryptoasset correspondent relationships", hy: false, difficulty: "medium",
    changed: "UK MLRs reg. 34A inserted by SI 2026/621, in force 1 Feb 2027",
    q: "In November 2026, Thamesgate Digital Ltd, an FCA-registered UK cryptoasset exchange, plans a long-term arrangement with Orion Exchange, a crypto exchange licensed in a non-UK country. Under it, Orion's customers will be able to trade through Thamesgate's platform, and Thamesgate will settle Orion's customer flows. Thamesgate's onboarding team plans to apply only its standard business customer CDD, and it notes that Orion already complies with the Travel Rule. Under the UK MLRs as amended in 2026, what is the BEST approach?",
    options: [
      "Build in correspondent-style EDD, including senior management approval and an assessment of Orion's controls, because reg. 34A applies from 1 February 2027",
      "Apply standard business CDD, because the correspondent EDD rules in the MLRs apply only to credit institutions and financial institutions",
      "End the plan, because UK cryptoasset businesses are prohibited from having correspondent relationships with non-UK providers",
      "Rely on Orion's Travel Rule compliance, because it replaces correspondent due diligence for cryptoasset businesses"
    ],
    answer: [0],
    explanation: "SI 2026/621 inserted regulation 34A, which applies from 1 February 2027. A cryptoasset exchange provider or custodian wallet provider that has or proposes to have a correspondent relationship with a similar provider from a third country must take extra steps. It must understand the respondent's business, assess its reputation and the quality of its supervision, assess its controls, obtain senior management approval and document responsibilities. It must also be satisfied about CDD on customers with direct access, and it must not deal with shell banks. Because the relationship will continue past that date, it should be designed to the new standard now. The Travel Rule does not replace this due diligence, and correspondent relationships are not banned.",
    source: [
      { label: "The Money Laundering and Terrorist Financing (Amendment) Regulations 2026 (SI 2026/621), reg. 20 inserting reg. 34A", url: "https://www.legislation.gov.uk/uksi/2026/621/made" }
    ] },

  { id: "REGS-023", domain: 2, topic: "UK MLRs reg. 33(1)(f): 'unusually complex or unusually large given the nature of the transaction'", hy: true, difficulty: "hard",
    changed: "UK MLRs reg. 33(1)(f) and reg. 19 wording amended by SI 2026/621 (in force 30 June 2026)",
    q: "In August 2026, Pennine Aggregates Ltd, a quarry operator with GBP 400 million in annual turnover, pays GBP 18 million from its account at a London bank to a German manufacturer for a new crushing plant. The contract, invoices and board minutes match. The supplier is a known listed company, and Pennine made a similar purchase four years ago. A new analyst escalates the payment as 'unusually large' because it is the biggest payment in the account's history, and says that mandatory EDD now applies. The customer's director recently changed his home address. What is the BEST assessment under the amended MLRs?",
    options: [
      "Mandatory EDD applies, because any transaction that is the largest in an account's history is unusually large",
      "Mandatory EDD applies, because the MLRs require EDD for any transaction above GBP 10 million",
      "A SAR is required, because a payment of this size to an overseas manufacturer is a recognised trade-based laundering indicator",
      "The test is whether the payment is unusually large given the nature of the transaction, and a documented capital purchase that fits the business does not automatically trigger EDD"
    ],
    answer: [3],
    explanation: "SI 2026/621 changed regulation 33(1)(f)(i), and the matching wording in regulation 19, from 'complex or unusually large' to 'unusually complex or unusually large in each case given the nature of the transaction'. Size has to be judged against the type of transaction. A documented capital equipment purchase that fits a GBP 400 million business is not unusual in that sense, so mandatory EDD is not triggered automatically. The runner-up uses the account's history as the test, but the amended wording looks at the nature of the transaction. The MLRs contain no fixed GBP 10 million EDD threshold, and the address change is irrelevant.",
    source: [
      { label: "SI 2026/621, reg. 19 (amendment of MLRs reg. 33)", url: "https://www.legislation.gov.uk/uksi/2026/621/made" },
      { label: "MLRs 2017, reg. 33 (as amended)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/33" }
    ] },

  { id: "REGS-024", domain: 2, topic: "UK POCA: the overseas conduct defence and its exceptions", hy: true, difficulty: "hard",
    q: "Marcus Delaney, a Canadian resident, banks with Kensington Private Bank in London. He has just sold his stake in a licensed cannabis retailer in Ontario, where the business was fully legal. He asks the bank to receive CAD 3 million of sale proceeds and use them to buy a London flat. His tax returns and the sale agreement are in order, and the purchaser was a listed Canadian company. The relationship manager argues that POCA's overseas conduct defence applies, because the conduct was lawful where it took place. What should the MLRO conclude?",
    options: [
      "The defence applies, because the bank believes on reasonable grounds that the conduct was lawful in Canada",
      "POCA does not apply, because no offence was committed in the United Kingdom and the buyer was a listed company",
      "The defence does not apply, because supplying cannabis would be punishable in the UK by more than 12 months' imprisonment, so the bank should seek a DAML before handling the funds",
      "The bank only needs to apply enhanced due diligence, because conduct that is lawful abroad is never criminal property"
    ],
    answer: [2],
    explanation: "Under POCA s.340, criminal property includes the benefit of conduct abroad that would be an offence if it took place in the UK. Section 327(2A) gives a defence where the conduct was lawful where it occurred, but not for conduct of a description prescribed by SI 2006/1070. That covers conduct punishable in the UK by more than 12 months' imprisonment, apart from certain gaming, lottery and FSMA offences. Supplying a Class B drug such as cannabis carries up to 14 years on indictment. So the defence is the runner-up but does not apply, and the bank should make an authorised disclosure and seek consent (a DAML).",
    source: [
      { label: "Proceeds of Crime Act 2002, s.327 (including the overseas conduct defence in s.327(2A))", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/327" },
      { label: "Proceeds of Crime Act 2002 (Money Laundering: Exceptions to Overseas Conduct Defence) Order 2006 (SI 2006/1070)", url: "https://www.legislation.gov.uk/uksi/2006/1070/made" }
    ] },

  { id: "REGS-025", domain: 2, topic: "UK AML supervision reform: the FCA as single professional services supervisor", hy: false, difficulty: "medium",
    changed: "HM Treasury decision (Oct 2025): FCA to become the single professional services supervisor; transition from late 2028",
    q: "In October 2026, a KYC analyst at the London branch of a Dutch bank is onboarding Harcourt & Lowe LLP, an accountancy firm. The firm states that its AML supervisor is its professional body, which is overseen by OPBAS. The analyst rejects this, saying that HM Treasury moved AML supervision of accountants and lawyers to the FCA in 2025. She wants the firm to show an FCA registration instead. The firm's audit clients include two listed companies. What is the BEST response?",
    options: [
      "Require FCA registration, because the FCA became the AML supervisor for all professional services firms in 2025",
      "Accept the professional body as the current supervisor and verify that membership. The FCA will take over only after legislation and a phased transition from late 2028",
      "Treat the firm as unsupervised and apply EDD, because OPBAS was closed when the reform was announced",
      "Ask HMRC to confirm the firm's supervisor, because HMRC supervises all accountancy firms until the FCA takes over"
    ],
    answer: [1],
    explanation: "In October 2025 the government decided to create a single professional services supervisor, with the FCA taking over AML supervision of legal, accountancy and trust and company service providers. The FCA says that nothing changes immediately, because the reform depends on new legislation. Professional body supervisors remain the supervisors, and OPBAS keeps overseeing them during the transition. The phased transition is expected to start in late 2028, with the remaining PBSs moving over by 2030. HMRC supervises only accountants that are not members of a professional body supervisor.",
    source: [
      { label: "FCA – Anti-money laundering supervisory reform", url: "https://www.fca.org.uk/firms/aml-supervisory-reform" },
      { label: "HM Treasury (Oct 2025) – Reform of the AML/CTF supervisory regime: consultation response", url: "https://assets.publishing.service.gov.uk/media/68f609dc2f0fc56403a3d0c7/AML_Supervision_Reform_Response_Document_FINAL.pdf" }
    ] }
]);
