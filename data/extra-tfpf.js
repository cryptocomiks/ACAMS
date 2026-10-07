// Batch 6 (October 2026): practical cases on terrorist financing, proliferation financing and sanctions evasion typologies.
window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  { id: "TFPF-001", domain: 1, topic: "Lone actors: the indicator that points to a wider network", hy: true, difficulty: "hard",
    q: "Karim Vos, 24, has held a basic current account at Elmbridge Bank for six years. His only regular credits are unemployment benefits of about EUR 900 a month. In the past two months, his account received 11 cash deposits of EUR 300-700 at different ATMs. In the same period he started using a peer-to-peer payment app for the first time and bought two prepaid cards. He also cancelled his gym membership and changed his mobile number. An open-source check shows that he shares posts from a designated group's propaganda channel. According to the FATF's 2025 report on terrorist financing risks, which fact MOST suggests that he may be working with a wider network rather than funding himself alone?",
    options: [
      "Frequent cash deposits that do not fit his known economic situation as an unemployed person",
      "His reliance on social benefits as his main source of legitimate income",
      "Cancelling his gym membership and changing his mobile number",
      "Sharing posts from a designated group's propaganda channel online"
    ],
    answer: [0],
    explanation: "The FATF's 2025 report says that frequent unexplained cash deposits, especially when they do not fit the person's economic situation (for example, someone known to be unemployed), may indicate that the individual is working with a wider network. Living on salary, savings or social benefits is the typical self-funding pattern of lone actors, so it does not point to a network. The new P2P app and prepaid cards are early indicators of possible TF, but they do not by themselves show outside funding. Sharing propaganda is a strong sign of radicalisation, which makes it the runner-up, but it says nothing about where the money comes from. The gym membership and phone number are irrelevant.",
    source: [
      { label: "FATF (2025) Comprehensive Update on Terrorist Financing Risks, paras 102-104", url: "https://eurasiangroup.org/files/uploads/files/Public_typology_reports/Comprehensive-Update-on-Terrorist-Financing-Risks-2025.pdf.coredownload.inline.pdf.pdf" }
    ] },

  { id: "TFPF-002", domain: 1, topic: "Foreign terrorist fighters: funding flows to detention camps", hy: false, difficulty: "hard",
    q: "Leila Haddad, a 45-year-old nurse in Belgium, sends EUR 150-400 every few weeks through two money transfer operators to different recipients in a town in southern Türkiye near the Syrian border. Her account also receives small transfers from eight unrelated people with references such as 'for the sisters'. A local news report says that her daughter travelled to Syria in 2015 and is held with her children in al-Hol camp. Leila recently renovated her kitchen with a bank loan, which she repays on time. In a message she shared with the bank to explain the transfers, she mentions 'getting them out before winter' and paying 'the driver'. What is the MOST likely concern?",
    options: [
      "Humanitarian support to a relative in a camp, which is lawful and outside TF typologies",
      "Proceeds of a loan fraud being layered through two money transfer operators",
      "Funds collected from others to smuggle ISIL-linked detainees out of the camp or sustain them there",
      "Migrant smuggling proceeds being collected by a domestic organised crime group"
    ],
    answer: [2],
    explanation: "The FATF's 2025 report describes financial flows from the home countries of foreign terrorist fighters to prison camps in the Iraqi-Syrian region, to smuggle ISIL affiliates and their family members out or to sustain them inside, as well as larger sums sent to pay traffickers and smugglers. It also notes that supporters collect small amounts on behalf of others and send them through MVTS. Funds pooled from unrelated people, a smuggling 'driver' and recipients near the border fit this pattern. The runner-up is wrong because a family link does not take the activity outside TF typologies: helping ISIL-linked detainees escape is exactly the flow FATF describes. The loan is repaid normally, and nothing suggests the sender profits from smuggling migrants.",
    source: [
      { label: "FATF (2025) Comprehensive Update on Terrorist Financing Risks, paras 96-100", url: "https://eurasiangroup.org/files/uploads/files/Public_typology_reports/Comprehensive-Update-on-Terrorist-Financing-Risks-2025.pdf.coredownload.inline.pdf.pdf" }
    ] },

  { id: "TFPF-003", domain: 1, topic: "Kidnapping for ransom: a disguised ransom payment", hy: true, difficulty: "hard",
    q: "An engineer working for Norrland Drilling AB is abducted in the Sahel. Two weeks later, the company's CFO asks its bank to wire EUR 1.8 million to 'Sahel Risk Advisory SARL', a firm set up three months ago in a neighbouring country, for 'security consulting'. The CFO explains that the firm will 'resolve the situation' and make onward payments in cash or through hawala. He stresses that the payment is urgent and approved by the board. The relationship is 20 years old and profitable, and Sahel Risk Advisory is not on any sanctions list. What should the bank do FIRST?",
    options: [
      "Process the payment, because the board approved it and the customer is long-standing",
      "Hold the payment, escalate it as a likely ransom that may fund a terrorist group, and report it",
      "Release the payment once Sahel Risk Advisory has cleared sanctions screening",
      "Process the payment and file a report afterwards, because a life is at stake"
    ],
    answer: [1],
    explanation: "The FATF's 2025 report identifies kidnapping for ransom as a major revenue source for terrorist groups in the Sahel and elsewhere, notes that ransoms are often paid in cash or through hawala to avoid tracing, and states that ransom payments contravene UNSCR 2133 (2014). A large urgent payment to a newly formed 'consultancy' that will pay onward in cash or hawala after an abduction is a strong indicator of a ransom, so the bank should stop and escalate before any funds move and report to the FIU and law enforcement. The runner-up fails because a clean sanctions screen of a new intermediary says nothing about the ultimate recipient. Board approval and a long relationship do not remove TF risk, and paying first and reporting later would let the funds reach the group.",
    source: [
      { label: "FATF (2025) Comprehensive Update on Terrorist Financing Risks, section 8.2 (paras 265-267)", url: "https://eurasiangroup.org/files/uploads/files/Public_typology_reports/Comprehensive-Update-on-Terrorist-Financing-Risks-2025.pdf.coredownload.inline.pdf.pdf" }
    ] },

  { id: "TFPF-004", domain: 1, topic: "NPO abuse: false representation and sham NPOs", hy: false, difficulty: "hard",
    q: "Hope Bridge Relief was registered as a charity eight months ago. Its website says that it is 'the national operational arm' of a well-known international aid charity and uses that charity's logo. It collects donations through a crowdfunding page and street collections. Asked by the bank, the international charity confirms that it has no affiliate in the country and has never heard of Hope Bridge. Hope Bridge sends the money to individuals in a conflict-affected region through remittance companies. Its three trustees are brothers, and one of them recently changed his surname. Which type of NPO abuse identified by the FATF does this MOST closely match?",
    options: [
      "Diversion of funds by an insider of a legitimate NPO to a terrorist entity",
      "Abuse of programming, where a real project is manipulated at the point of delivery",
      "Affiliation, where a legitimate NPO keeps operational ties with a terrorist entity",
      "False representation, where people falsely claim to act for an existing legitimate NPO"
    ],
    answer: [3],
    explanation: "The FATF's 2014 report on the risk of terrorist abuse in NPOs, cited again in its 2025 TF risk report, describes 'false representation and sham NPOs': either an NPO created as a front with false stated purposes, or individuals who falsely claim to act on behalf of an existing legitimate NPO. Hope Bridge borrows the name and logo of a real charity that denies any link. Diversion is the runner-up, but it assumes a genuine NPO whose funds are siphoned off by an insider or partner. Abuse of programming and affiliation also require a legitimate organisation with real programmes or ties. The surname change is a decoy.",
    source: [
      { label: "FATF (2014) Risk of Terrorist Abuse in Non-Profit Organisations, para 121", url: "https://eurasiangroup.org/files/FATF_docs/Risk-of-terrorist-abuse-in-non-profit-organisations.pdf" },
      { label: "FATF (2025) Comprehensive Update on Terrorist Financing Risks, paras 326-334", url: "https://eurasiangroup.org/files/uploads/files/Public_typology_reports/Comprehensive-Update-on-Terrorist-Financing-Risks-2025.pdf.coredownload.inline.pdf.pdf" }
    ] },

  { id: "TFPF-005", domain: 1, topic: "Small-value TF: live-stream gifting converted to virtual assets", hy: false, difficulty: "medium",
    q: "A customer of Fennel, a digital bank, runs a social media channel called 'Nur Media'. At onboarding he described himself as a 'gaming streamer'. His account receives weekly payouts of EUR 1,500-3,000 from a live-streaming platform that converts viewers' in-app 'gifts' into money. The bank's review finds that the streams, in Arabic and Tajik, show battlefield footage of a designated group, and that viewers are told how to send gifts. Each payout is used within an hour to buy USDT, which is sent to the same unhosted wallet. He also pays his rent and a car lease from the account. Which assessment is MOST accurate?",
    options: [
      "Possible TF: donations solicited through live-stream gifts are converted into virtual assets and moved on",
      "Normal creator income, because the platform has already performed KYC on every viewer who sends gifts",
      "Proceeds of a pig-butchering scam, because the payouts are converted into USDT so quickly",
      "Online gaming money laundering, in which in-game items are traded to layer criminal proceeds"
    ],
    answer: [0],
    explanation: "The FATF's 2025 report notes that some social media platforms allow in-app gifting, tipping or live-stream donations that can be converted into cash or virtual assets, and that terrorist groups use social media to spread propaganda and ask for donations, including in several Central Asian languages. Propaganda streams that tell viewers how to give, followed by immediate conversion to USDT and transfer to one unhosted wallet, fit this pattern. The gaming option is the runner-up because of his declared profile, but no in-game items are traded here. Platforms do not perform bank-grade KYC on every viewer, and nothing points to a romance or investment scam victim.",
    source: [
      { label: "FATF (2025) Comprehensive Update on Terrorist Financing Risks, paras 108 and 187-191", url: "https://eurasiangroup.org/files/uploads/files/Public_typology_reports/Comprehensive-Update-on-Terrorist-Financing-Risks-2025.pdf.coredownload.inline.pdf.pdf" }
    ] },

  { id: "TFPF-006", domain: 1, topic: "Social media TF fundraising: replacement accounts after a block", hy: true, difficulty: "hard",
    q: "In March, Corvid Pay, an e-money institution, froze an account after police told it that the account collected donations for a designated group through a Telegram channel called 'Orphans of the Valley'. Within ten days, Corvid's monitoring sees three newly opened accounts each receive dozens of payments of EUR 10-50 from many senders, with the reference 'valley orphans'. Several of the senders had previously paid the frozen account. The new account holders are students living in different cities, and each forwards the funds to a crypto exchange within 24 hours. Corvid's onboarding checks on the students raised no concerns. What does this pattern MOST likely show?",
    options: [
      "Genuine donors moving to a legitimate charity after the first account was frozen",
      "Account takeover fraud, in which criminals have hijacked the students' new accounts",
      "Organisers advertising replacement accounts on the same channel to keep the TF fundraising going",
      "Structuring, with payments kept small to stay under the institution's verification thresholds"
    ],
    answer: [2],
    explanation: "The FATF's 2025 report explains that TF fundraising disguised as charity on social media collects small donations from many sympathisers into bank, mobile and VA accounts, and that when accounts are blocked, organisers quickly advertise new accounts or wallets through the same platforms to keep the fundraising going. It adds that funds are often split and routed through intermediaries. The same reference, overlapping donors and quick onward transfers to a crypto exchange fit this pattern. Structuring is the runner-up, but the amounts are small because they are individual donations, not because a single person is splitting cash. Nothing suggests a legitimate charity or hijacked accounts.",
    source: [
      { label: "FATF (2025) Comprehensive Update on Terrorist Financing Risks, paras 189-190", url: "https://eurasiangroup.org/files/uploads/files/Public_typology_reports/Comprehensive-Update-on-Terrorist-Financing-Risks-2025.pdf.coredownload.inline.pdf.pdf" }
    ] },

  { id: "TFPF-007", domain: 1, topic: "Ethnically or racially motivated terrorism (EoRMT): overt fundraising", hy: false, difficulty: "medium",
    q: "Bastion Apparel Ltd banks with a regional bank. It sells T-shirts, music and books online and collects 'membership subscriptions' of GBP 10 a month from about 2,000 people. It also sells tickets for concerts and for a yearly 'fitness camp' at a remote farm with martial arts and shooting sessions. Its directors lead a movement whose members publicly praised a recent racially motivated attack. The movement is not designated or proscribed in any country. The company files its accounts on time. Which statement BEST reflects the FATF's view of this type of financing?",
    options: [
      "As the movement is not designated, its fundraising is lawful and raises no TF risk for the bank",
      "Such groups often raise funds openly through sales, events and fees, and spend them on training",
      "EoRMT groups mainly rely on state sponsorship and on taxing populations in territory they control",
      "EoRMT groups raise most of their funds through kidnapping for ransom and the extortion of businesses"
    ],
    answer: [1],
    explanation: "The FATF's 2025 report says that EoRMT groups that are not designated can fundraise overtly through rallies, concerts, membership fees and online sales of music, literature and merchandise, and that many spend a large share of their funds on training camps with martial arts and weapons practice. The bank should therefore assess the TF risk instead of treating the funds as harmless. Lack of designation does not remove the risk; it is what lets these groups fundraise in the open. The report also notes that these groups generally cannot raise funds through control of territory, and kidnapping and extortion are typical of other types of groups.",
    source: [
      { label: "FATF (2025) Comprehensive Update on Terrorist Financing Risks, paras 87-92", url: "https://eurasiangroup.org/files/uploads/files/Public_typology_reports/Comprehensive-Update-on-Terrorist-Financing-Risks-2025.pdf.coredownload.inline.pdf.pdf" }
    ] },

  { id: "TFPF-008", domain: 1, topic: "E-commerce platforms: moving value for TF through goods", hy: false, difficulty: "medium",
    q: "An FIU analyst reviews two linked online sellers. Seller A, in Country X, buys high-end phones and drones with prepaid cards loaded in cash and ships them to Seller B in Country Y. Seller B lists the items on a large e-commerce marketplace, has the sale proceeds paid into a local account and withdraws them in cash in a town near an area where a terrorist group is active. Seller A sells almost nothing on the marketplace himself. Both sellers have five-star ratings and use the same courier. Which TF method does this MOST likely illustrate?",
    options: [
      "Self-funding by a lone actor through the sale of his own personal belongings",
      "Abuse of an NPO's programme delivery to channel goods to a terrorist group",
      "Settlement between hawala brokers through over-invoicing of commercial imports",
      "Use of an e-commerce marketplace to move value through goods to a TF network"
    ],
    answer: [3],
    explanation: "The FATF's 2025 report notes that e-commerce platforms and online marketplaces can be used to move funds in a way inspired by trade-based money laundering: one actor buys items and sends them to an accomplice, who sells them in another jurisdiction and uses the proceeds to finance terrorism. Hawala settlement through trade is the runner-up, but there are no brokers or invoices here, only goods resold on a marketplace. Seller A is not selling his own belongings, and no NPO is involved. The ratings and courier are irrelevant.",
    source: [
      { label: "FATF (2025) Comprehensive Update on Terrorist Financing Risks, paras 224-227", url: "https://eurasiangroup.org/files/uploads/files/Public_typology_reports/Comprehensive-Update-on-Terrorist-Financing-Risks-2025.pdf.coredownload.inline.pdf.pdf" }
    ] },

  { id: "TFPF-009", domain: 1, topic: "TF through extortion and coerced fees", hy: false, difficulty: "hard",
    q: "Delta Harvest, a farm-labour contractor, pays 300 seasonal workers through payroll cards at a bank. Monitoring shows that on each payday most workers withdraw about a quarter of their wages in cash at the same ATM. A supervisor then deposits similar total amounts of cash into his personal account and sends bulk transfers to several accounts in a border city near an area controlled by a designated group. The workers keep their own cards and documents, live where they choose and receive the rest of their pay. Several of them told a branch employee that they 'have to pay the organisation' or face threats. Which typology does this MOST likely show?",
    options: [
      "Labour trafficking, with the employer keeping workers in debt bondage",
      "Payroll fraud, with ghost employees added to the contractor's payroll",
      "Extortion of workers' wages by a terrorist group as a coerced 'fee'",
      "An informal rotating savings scheme run by the workers' supervisor"
    ],
    answer: [2],
    explanation: "The FATF's 2025 report describes a case in which a designated organisation forced seasonal workers to hand over 25% of their daily wages as a 'coercion fee', collected the cash and sent it to border cities near the areas it controlled. Threats, a fixed share of wages, a collector and onward transfers to a border city match this extortion-based TF pattern. Labour trafficking is the runner-up, but the usual indicators, such as confiscated documents, controlled housing and wages held by the employer, are absent, and the money goes to 'the organisation', not the employer. The workers are real and the payments are not voluntary savings.",
    source: [
      { label: "FATF (2025) Comprehensive Update on Terrorist Financing Risks, section 8 (extortion and coerced fees; case study on seasonal workers)", url: "https://eurasiangroup.org/files/uploads/files/Public_typology_reports/Comprehensive-Update-on-Terrorist-Financing-Risks-2025.pdf.coredownload.inline.pdf.pdf" }
    ] },

  { id: "TFPF-010", domain: 1, topic: "PF front-company networks: replacement payers", hy: true, difficulty: "hard",
    q: "A US bank reviews USD payments that pass through the correspondent account of its respondent in Asia. For 18 months, Kowloon Star Metals, a Hong Kong company, paid a Singapore coal broker every month. After the US bank sent the respondent questions about Kowloon Star, its payments stopped. Two weeks later, a newly formed company, Pearl Ridge Resources, began paying the same broker similar amounts with the same coded references ('KS-17', 'KS-18'). Both companies use the same company secretary's address and have no website. The payments are described as 'anthracite', and no shipping documents are provided. Which fact MOST strongly suggests a proliferation-related front-company network?",
    options: [
      "Both companies use the address of the same company secretary, as many Hong Kong firms do",
      "A new company took over the payments, with the same coded references, as soon as questions were asked",
      "The payments are in US dollars and clear through a correspondent account in the United States",
      "The payments are for coal, a commodity that many legitimate traders buy and sell around the world"
    ],
    answer: [1],
    explanation: "The FATF's 2025 PF report lists as an indicator funds that 'flow cyclically between companies, with one ceasing payment and another initiating payment to the same beneficiary'. Its case study on the DPRK's Foreign Trade Bank describes over 250 front companies that cleared USD 2.5 billion through US correspondent banks, created new front companies once counterparties found the old ones suspicious, and used coded payment references. Coal is a relevant commodity, which makes it the runner-up, but it is traded legitimately worldwide and is weaker than the replacement pattern. Shared corporate-service addresses are common, and USD clearing is how the scheme reached US banks, not evidence of it.",
    source: [
      { label: "FATF (2025) Complex Proliferation Financing and Sanctions Evasion Schemes, Box 13 and Annex A", url: "https://www.fatf-gafi.org/en/publications/Financingofproliferation/complex-proliferation-financing-sanction-evasion-schemes.html" }
    ] },

  { id: "TFPF-011", domain: 1, topic: "DPRK crypto thefts: cash-out through OTC brokers and front companies", hy: true, difficulty: "hard",
    q: "Golden Sail Trading, a corporate customer of Brightwater Bank in Country M, imports cigarettes and mobile phones. Over two months, it receives USD 4.2 million from three over-the-counter (OTC) virtual asset brokers abroad, described as 'customer prepayments'. It immediately uses the money to pay suppliers of cigarettes and communications equipment, with delivery to a port near the DPRK border. Golden Sail cannot name the customers who made the prepayments. Public reports show that one of the OTC brokers was named in a US indictment for converting stolen virtual assets. Golden Sail's owner also runs two restaurants. What is the MOST likely explanation?",
    options: [
      "Normal crypto-to-fiat settlement of prepayments made by Golden Sail's overseas buyers",
      "Trade-based laundering of drug proceeds through over-invoiced tobacco imports",
      "Ransomware proceeds being cashed out by a local affiliate of a criminal group",
      "Stolen virtual assets converted by OTC brokers and paid to a front company buying goods for the DPRK"
    ],
    answer: [3],
    explanation: "The FATF's 2025 PF report explains that after laundering stolen virtual assets, DPRK actors often convert them into fiat currency through OTC brokers and, in some cases, direct the brokers to send the money to bank accounts of front companies that buy goods on behalf of the DPRK. Its case study describes OTC traders paying Hong Kong front companies that bought tobacco and communications devices for the DPRK. Unknown 'prepayment' customers, a broker linked to stolen assets and deliveries near the DPRK border fit this pattern. Legitimate settlement is unlikely when the customer cannot name its buyers, and nothing points to drugs or ransomware. The restaurants are a decoy.",
    source: [
      { label: "FATF (2025) Complex Proliferation Financing and Sanctions Evasion Schemes, para 81 and Box 24", url: "https://www.fatf-gafi.org/en/publications/Financingofproliferation/complex-proliferation-financing-sanction-evasion-schemes.html" }
    ] },

  { id: "TFPF-012", domain: 1, topic: "DPRK revenue generation: subcontracting and false origin labels", hy: false, difficulty: "medium",
    q: "Lumen Beauty GmbH, a German importer, buys wigs and false eyelashes from a Chinese manufacturer and pays into the manufacturer's account in Hong Kong. Its bank's trade team notices that the supplier's prices are about 30% below its competitors'. A former employee of the supplier tells a journalist that semi-finished products are sent across the border to the DPRK for hand-finishing and then returned. All goods carry 'Made in China' labels. Lumen's owner says he has visited the Chinese factory twice and that its quality is excellent. What is the MOST significant risk?",
    options: [
      "Revenue for the DPRK's weapons programmes through work subcontracted to DPRK firms, with origin hidden by third-country labels",
      "Customs duty evasion through misclassification of the hair products under a lower-duty tariff code on import into Germany",
      "Trade-based laundering through under-invoicing, which moves value from the Chinese supplier to the German importer",
      "Forced labour in the Chinese factory, which the importer has missed despite visiting the production site twice"
    ],
    answer: [0],
    explanation: "The FATF's 2025 PF report notes that wigs and false eyelashes are a major DPRK export: the DPRK imports raw materials from a neighbouring country, makes semi-finished products and sends them back for final processing and export to third countries, and the DPRK companies involved are subordinate to UN-listed entities. Its risk indicators include third-country suppliers shifting work to a DPRK factory without telling customers and DPRK goods carrying third-country origin labels. Low prices can have many causes, and no facts point to tariff misclassification or forced labour in China. A factory visit does not reveal subcontracting across the border.",
    source: [
      { label: "FATF (2025) Complex Proliferation Financing and Sanctions Evasion Schemes, para 27 and Annex A (trade indicators 21-22)", url: "https://www.fatf-gafi.org/en/publications/Financingofproliferation/complex-proliferation-financing-sanction-evasion-schemes.html" }
    ] },

  { id: "TFPF-013", domain: 1, topic: "Iranian oil: successive ship-to-ship transfers and third-country origin", hy: true, difficulty: "hard",
    q: "Corvina Commodities SA asks Meridian Trade Bank to finance a cargo of 'Malaysian blend' crude for delivery to an independent refinery in China. The certificate of origin was issued in Malaysia. Tracking data show that the cargo reached the final tanker through three successive ship-to-ship transfers, two of them at night, in the outer port limits off Malaysia and near Indonesia's Riau Islands. One of the earlier tankers had a nine-day AIS gap while in the Persian Gulf near Kharg Island. The final tanker is 22 years old, and the price is well below comparable grades. Which conclusion is MOST supported?",
    options: [
      "Russian crude sold above the G7 price cap and relabelled as Malaysian",
      "Routine lightering, because ship-to-ship transfers off Malaysia are common",
      "Iranian crude disguised through successive transfers and a third-country certificate of origin",
      "Fuel smuggling to evade Malaysian excise duty on domestically sold oil"
    ],
    answer: [2],
    explanation: "OFAC's April 2025 maritime advisory says Iran often uses three to five STS transfers per shipment, which serve little commercial purpose and are a strong risk factor, especially at night or with AIS manipulation. It names the outer port limits of Malaysia and Singapore as high-risk areas and says that certificates of origin from places with frequent Iranian STS operations, such as Malaysia, should be investigated thoroughly. The AIS gap near Kharg Island, which the advisory names as Iran's largest crude export facility, points to Iran rather than Russia, which makes the price cap option the runner-up but wrong. Single STS transfers can be legitimate, but successive night transfers are not routine, and the cargo is exported, not sold locally.",
    source: [
      { label: "OFAC (16 Apr 2025) Guidance for Shipping and Maritime Stakeholders on Detecting and Mitigating Iranian Oil Sanctions Evasion", url: "https://ofac.treasury.gov/media/934236/download" }
    ] },

  { id: "TFPF-014", domain: 1, topic: "Shadow fleet: 'false' flags in the IMO's GISIS database", hy: false, difficulty: "medium",
    q: "During due diligence on a tanker carrying a cargo financed by Aldmoor Bank, an analyst sees that the vessel's AIS broadcasts the flag of Country G. In the IMO's Global Integrated Shipping Information System (GISIS), however, the vessel's flag is recorded as 'FALSE'. The ship is 19 years old, its P&I insurer is a member of a well-known club, and its name has not changed in five years. What does the 'FALSE' entry MOST likely mean?",
    options: [
      "Its AIS transponder is faulty and has been broadcasting false positions",
      "The registry of Country G has de-registered it, but it still flies or broadcasts that flag",
      "The vessel is registered with an open registry, also called a flag of convenience",
      "Country G has designated the vessel under its national sanctions regime"
    ],
    answer: [1],
    explanation: "OFAC's April 2025 advisory explains that if a flag registry reports that a ship continues to fly its flag or broadcast it via AIS after de-registration, GISIS records the ship as flying a FALSE flag. Shadow fleet tankers falsely claim flags they are not registered with or use fraudulent registries, and OFAC says stakeholders should check GISIS and request documents on ownership, voyage and flag history. A FALSE flag is not about position data, an open registry is a legitimate (if sometimes higher-risk) registration, and GISIS flag status is not a sanctions designation. The vessel's age and its insurer are decoys.",
    source: [
      { label: "OFAC (16 Apr 2025) Iranian oil sanctions evasion advisory, 'Verify flag registration' and note 2", url: "https://ofac.treasury.gov/media/934236/download" }
    ] },

  { id: "TFPF-015", domain: 1, topic: "Deceptive shipping practices: AIS manipulation and identity tampering", hy: true, difficulty: "hard",
    q: "A sanctions analyst reviews the voyage of the bulk carrier MV Aster before her bank pays for its coal cargo. As the ship approached the waters of a country under UN sanctions, its AIS signal stopped for about a day. When the signal resumed, AIS showed the ship at anchor 300 nautical miles away, while satellite imagery showed it under way. Later the ship broadcast the IMO number of a vessel scrapped in 2019 and the MMSI number of an unrelated, non-sanctioned ship. Imagery shows no other ship alongside at any point, and the vessel has flown the same flag for five years. Which tactics does this voyage show? (Choose three.)",
    options: [
      "Disabling the AIS transponder, or 'going dark'",
      "A ship-to-ship transfer to hide the cargo's origin",
      "Broadcasting a false position through AIS (spoofing)",
      "Frequent flag changes to escape registry scrutiny",
      "Using another vessel's identifiers to disguise its identity"
    ],
    answer: [0, 2, 4],
    explanation: "The FATF's 2025 PF report groups deceptive shipping tactics into altering vessel identification, ship-to-ship transfers, disabling or disguising AIS broadcasts, and falsifying documents, and describes a DPRK coal case in which a ship turned off its AIS and then broadcast a position showing it at anchor while it was under way. OFAC's April 2025 advisory adds that vessels report the MMSI of a different, non-sanctioned ship or the IMO number of a scrapped vessel to hide their identity. Here the signal stopped (going dark), showed a false position (spoofing) and carried another ship's identifiers. No vessel came alongside, so there was no STS transfer, and the flag has not changed.",
    source: [
      { label: "FATF (2025) Complex Proliferation Financing and Sanctions Evasion Schemes, paras 87-92 and Box 32", url: "https://www.fatf-gafi.org/en/publications/Financingofproliferation/complex-proliferation-financing-sanction-evasion-schemes.html" },
      { label: "OFAC (16 Apr 2025) Iranian oil sanctions evasion advisory, 'Manipulating vessel location and identification data'", url: "https://ofac.treasury.gov/media/934236/download" }
    ] },

  { id: "TFPF-016", domain: 1, topic: "Russia export control evasion: transshipment red flags (FinCEN/BIS)", hy: true, difficulty: "hard",
    q: "Altay Components LLP, a Kazakh company onboarded by a US bank last year, buys US-origin processors (HS 8542.31) from a US distributor under a letter of credit. The shipping documents name a freight forwarder in Almaty as both the consignee and the final end customer. Payment for the latest order comes from a company in the UAE that has no other role in the deal. Altay has a working website and 12 employees. The order is about 20% larger than its previous orders, and it is paid under a letter of credit rather than on open account. Which TWO facts are the MOST significant red flags of possible export control evasion? (Choose two.)",
    options: [
      "Altay has a working website and a small workforce of 12 employees",
      "A freight forwarder is listed as the product's final end customer",
      "The order is about 20% larger than the customer's previous orders",
      "Payment comes from a third-country company not otherwise involved",
      "The purchase is paid under a letter of credit, not on open account"
    ],
    answer: [1, 3],
    explanation: "The June 2022 FinCEN/BIS joint alert lists as red flags transactions involving freight forwarders that are also listed as the product's final end customer, especially in traditional transshipment hubs, and payments from entities in third countries not otherwise involved that are potential transshipment points. It names Kazakhstan and the UAE among the transshipment points, and integrated circuits under HS 8542 are Tier 1 items on the Common High Priority List. A working website is the opposite of the 'little or no web presence' red flag. A moderate rise in order size is weak on its own, and a letter of credit is not a red flag here; the November 2023 notice flags open-account terms combined with transshipment countries.",
    source: [
      { label: "FinCEN and BIS Joint Alert FIN-2022-Alert003 (June 2022), red flags and note 21", url: "https://www.fincen.gov/sites/default/files/2022-06/FinCEN%20and%20Bis%20Joint%20Alert%20FINAL.pdf" },
      { label: "FinCEN and BIS Joint Notice FIN-2023-NTC2 (Nov 2023)", url: "https://www.fincen.gov/sites/default/files/shared/FinCEN_Joint_Notice_US_Export_Controls_FINAL508.pdf" }
    ] },

  { id: "TFPF-017", domain: 1, topic: "Common High Priority List (CHPL): Tier 1 items", hy: true, difficulty: "medium",
    q: "A bank's trade finance team is building alerts for goods that Russia seeks for its weapons programmes, using the Common High Priority List that BIS developed with the EU, Japan and the UK. Payment and document descriptions will be matched to six-digit HS codes. The head of trade asks which category the list places in its HIGHEST tier, as the items of greatest concern. Which goods should the team map to Tier 1?",
    options: [
      "Tantalum capacitors and multilayer ceramic capacitors (HS 8532.21 and 8532.24)",
      "Ball bearings and tapered roller bearings (HS 8482.10 and 8482.20)",
      "Numerically controlled machining centres and lathes (HS 8457.10 and 8458.11)",
      "Electronic integrated circuits such as processors, memories and amplifiers (HS 8542)"
    ],
    answer: [3],
    explanation: "BIS's CHPL lists 50 items by six-digit HS code, divided into tiers. Tier 1 covers electronic integrated circuits (HS 8542.31, .32, .33 and .39), described as the items of highest concern because of their role in advanced Russian precision-guided weapons, Russia's lack of domestic production and the small number of global manufacturers. Tantalum and ceramic capacitors are Tier 2, bearings are Tier 3.B, and CNC machine tools are Tier 4.B. BIS prioritises the nine HS codes in Tiers 1 and 2, but only integrated circuits form Tier 1.",
    source: [
      { label: "BIS – Common High Priority Items List (CHPL)", url: "https://www.bis.gov/licensing/country-guidance/common-high-priority-items-list-chpl" }
    ] },

  { id: "TFPF-018", domain: 1, topic: "Designated persons' proxies: the UK control test", hy: true, difficulty: "hard",
    q: "Viktor R. owned 80% of Calder Marine Holdings Ltd, a UK company with an account at Thames Bank, from 2019. In March 2026, two weeks before the UK designated him under its Russia regime, he transferred all his shares to his long-time personal assistant, who has no other significant assets. Calder's board minutes show that the assistant votes as Viktor instructs, and Viktor still approves large payments by email. Thames Bank's screening finds no listed person among Calder's shareholders or directors, and Calder's auditors gave a clean opinion. Under OFSI's guidance, what should the bank conclude?",
    options: [
      "Calder is likely controlled by Viktor, so the bank should freeze its funds and report to OFSI",
      "Calder is outside the asset freeze, because Viktor no longer holds more than 50% of its shares",
      "Calder is affected only if it is added to the UK Sanctions List as a designated entity itself",
      "Calder can operate normally, because the share transfer took place before the designation"
    ],
    answer: [0],
    explanation: "OFSI's general guidance says an entity is owned or controlled by a designated person if that person holds more than 50% of shares or voting rights, can appoint or remove a majority of the board, or it is reasonable to expect that the person could ensure the entity's affairs are run according to his wishes, including through a front or another person. Such entities are subject to the asset freeze even if they are not listed. A firm that knows or has reasonable cause to suspect it holds such funds must freeze them and report to OFSI. The runner-up applies only the ownership limb and ignores control through a nominee. The timing of the transfer does not matter when control continues, and the audit opinion is irrelevant.",
    source: [
      { label: "OFSI – UK financial sanctions general guidance, sections 3.1 and 4 (ownership and control)", url: "https://www.gov.uk/government/publications/financial-sanctions-general-guidance/uk-financial-sanctions-general-guidance" }
    ] },

  { id: "TFPF-019", domain: 1, topic: "Sanctions evasion through family members and third parties", hy: false, difficulty: "medium",
    q: "Daria, 26, a graduate student, is a private banking client of Pinecrest Bank in the US. She receives a USD 7.5 million wire from a Cyprus company to buy a condominium in Miami. Her father is a Russian businessman whom OFAC designated in 2024. Daria says the company is 'a family investment vehicle' run by an adviser in Dubai, but she cannot say who owns it. The account was opened in 2023, and she normally uses it to pay her tuition and rent. Which concern is MOST significant?",
    options: [
      "Daria may be a money mule recruited online, because she has no income of her own",
      "The Cyprus company may be used to evade taxes, so Daria must file a foreign account report",
      "A family member and a shell company may be hiding a sanctioned person's interest in the purchase",
      "The funds may be proceeds of foreign corruption, so the bank should only apply PEP due diligence"
    ],
    answer: [2],
    explanation: "FinCEN's March 2022 alert on Russian sanctions evasion lists as red flags the use of corporate vehicles to obscure ownership and source of funds, and the use of third parties to shield the identity of sanctioned persons, for example to hide a real estate purchase. A designated father, an opaque company controlled from a third country and a large property purchase in a student's name fit this pattern. If the father has an interest in the funds or the property, they must be blocked. Nothing suggests online mule recruitment or that the father is a PEP, and tax reporting is a side issue.",
    source: [
      { label: "FinCEN Alert FIN-2022-Alert001 (Mar 2022) – Potential Russian sanctions evasion attempts", url: "https://www.fincen.gov/sites/default/files/2022-03/FinCEN%20Alert%20Russian%20Sanctions%20Evasion%20FINAL%20508.pdf" }
    ] },

  { id: "TFPF-020", domain: 1, topic: "DPRK sanctions monitoring after the UN Panel of Experts", hy: false, difficulty: "medium",
    q: "For years, a bank's proliferation financing risk assessment relied on the reports of the UN 1718 Committee's Panel of Experts for DPRK typologies. While updating the assessment in 2026, an analyst notices that no new Panel report has been published since early 2024. Which statement is accurate?",
    options: [
      "The Panel was transferred to the FATF, which now publishes its findings in its grey list statements",
      "The Panel's mandate ended in April 2024 after a veto, and 11 states created the MSMT to report on DPRK sanctions violations",
      "UN sanctions on the DPRK lapsed in 2024, so DPRK-related PF risk no longer needs to be assessed",
      "The Panel was merged into the 1267 Monitoring Team, which now covers both ISIL and DPRK sanctions"
    ],
    answer: [1],
    explanation: "The mandate of the 1718 Committee's Panel of Experts ended in April 2024 after a veto in the Security Council. In October 2024, 11 states (including Korea, Japan, the US and the UK) established the Multilateral Sanctions Monitoring Team (MSMT) to monitor and publicly report violations and evasion of UN sanctions on the DPRK. The FATF's 2025 PF report notes that the end of the Panel makes it harder to obtain reliable information on DPRK PF risk, while confirming that DPRK sanctions still apply and that the DPRK remains the most significant PF actor. The Panel's work did not move to the FATF or the 1267 Monitoring Team.",
    source: [
      { label: "UK FCDO (16 Oct 2024) Joint statement on establishing the Multilateral Sanctions Monitoring Team (MSMT)", url: "https://www.gov.uk/government/news/joint-statement-on-establishing-multilateral-sanctions-monitoring-team-msmt" },
      { label: "FATF (2025) Complex Proliferation Financing and Sanctions Evasion Schemes, para 22", url: "https://www.fatf-gafi.org/en/publications/Financingofproliferation/complex-proliferation-financing-sanction-evasion-schemes.html" }
    ] },

  { id: "TFPF-021", domain: 3, topic: "Export control risk in transshipment countries: avoiding wholesale de-risking", hy: true, difficulty: "hard",
    q: "After reading the FinCEN/BIS alerts on Russia-related export control evasion, Lakeshore Bank's head of trade proposes exiting all 640 business customers that trade with Armenia, Georgia, Kazakhstan, Kyrgyzstan, Türkiye and the UAE, because BIS lists these countries as transshipment points. Most of these customers are long-standing importers of food and textiles. About 35 export electronics or machine tools. The CFO welcomes the cost savings. The bank's trade monitoring already screens names and countries. What is the BEST response?",
    options: [
      "Exit all 640 customers, because trade with transshipment countries is prohibited under US export controls",
      "Keep all 640 customers and rely on the exporters' own licences, since export controls are not a bank matter",
      "Require every customer to certify each year that no goods reach Russia, and take no further steps",
      "Apply risk-based enhanced due diligence to customers trading high-priority goods through these hubs"
    ],
    answer: [3],
    explanation: "The June 2022 FinCEN/BIS alert asks financial institutions to take reasonable, risk-based steps to identify and limit exposure to Russia-related export control evasion, but says these steps should not be used as a basis for wholesale or indiscriminate de-risking of any class of customers. It also notes that controlled US items may be legally exported to these transshipment countries. The bank should focus EDD and monitoring on the customers whose goods and routes carry the risk, such as electronics and machine tools. A blanket certification is the runner-up, but on its own it does not test any red flag. Trade with these countries is not prohibited, and banks have their own obligation to report suspected evasion.",
    source: [
      { label: "FinCEN and BIS Joint Alert FIN-2022-Alert003 (June 2022), notes 20-21", url: "https://www.fincen.gov/sites/default/files/2022-06/FinCEN%20and%20Bis%20Joint%20Alert%20FINAL.pdf" }
    ] },

  { id: "TFPF-022", domain: 3, topic: "Maritime sanctions controls for shipping finance", hy: false, difficulty: "medium",
    q: "Nordhavn Bank is drafting controls for its oil shipping finance book after OFAC's April 2025 maritime advisory. The draft policy has five proposals. The business unit wants controls that are effective without stopping all tanker business, and the board wants them in place before the next audit. Which TWO controls are consistent with the advisory? (Choose two.)",
    options: [
      "Research vessels by IMO number, including flag, ownership, STS and AIS history, not only by name",
      "Accept certificates of origin from transshipment hubs at face value if the bill of lading is clean",
      "Screen only the vessel name against the SDN List at the moment the payment is released",
      "Include sanctions clauses that allow termination for deceptive practices such as repeated AIS manipulation",
      "Exit every client that owns or charters a tanker more than 15 years old, whatever its history"
    ],
    answer: [0, 3],
    explanation: "OFAC's April 2025 advisory recommends know-your-vessel due diligence that researches the IMO number and vessel history, including travel patterns, STS history, ownership, insurance and flag history, and recommends contractual sanctions clauses, including language allowing termination for deceptive practices such as a pattern of vessel location manipulation. It says certificates of origin from jurisdictions known for hiding Iranian origin should be investigated thoroughly, not accepted at face value. Name-only screening misses vessels that change names or spoof identifiers. Age alone is not the test, and blanket exits are not what the advisory asks for.",
    source: [
      { label: "OFAC (16 Apr 2025) Iranian oil sanctions evasion advisory – KYC/KYV and contractual controls", url: "https://ofac.treasury.gov/media/934236/download" }
    ] },

  { id: "TFPF-023", domain: 2, topic: "Humanitarian carve-outs: UNSCR 2664 and OFAC's NGO general licences", hy: true, difficulty: "hard",
    q: "Harbourline Bank, a US bank, holds the account of Clearwater Aid, a US NGO running a cholera-treatment programme in a region where a group designated as a Specially Designated Global Terrorist runs the local administration. Clearwater asks the bank to wire USD 18,000 to its field office to pay local staff, buy chlorine, and pay import duties and clinic permit fees to the local administration. The bank has no information suggesting that the payments go beyond these purposes. The sanctions team proposes to reject the wire and exit the NGO. What is the BEST course of action?",
    options: [
      "Process the wire, as OFAC's NGO general licences cover the activity, including incidental taxes, duties and permit fees",
      "Reject the wire, because any payment that may reach the designated group needs a specific licence from OFAC first",
      "Block the funds and file a blocked property report with OFAC within 10 business days of the payment request",
      "Process only the staff and chlorine portion, and require a specific licence for the duties and permit fees"
    ],
    answer: [0],
    explanation: "UNSCR 2664 (2022) created a humanitarian carve-out from UN asset freezes, and OFAC implemented it in December 2022 with general licences, including for NGOs' humanitarian activities. OFAC's 2023 fact sheet says these licences do not authorise transfers to blocked persons, except for payments of taxes, fees or import duties and purchases of permits, licences or public utility services that are ordinarily incident and necessary to the authorised activity. Banks may process such transactions and may reasonably rely on information available in the ordinary course of business. Splitting the payment is the runner-up, but the duties and permit fees are exactly the carved-out payments. Rejection, blocking and exiting the NGO would be unnecessary de-risking.",
    source: [
      { label: "OFAC (Feb 2023) Supplemental Guidance for the Provision of Humanitarian Assistance, Q6 and Q9", url: "https://ofac.treasury.gov/media/931341/download" },
      { label: "US Treasury press release (20 Dec 2022) – Treasury implements historic humanitarian sanctions exceptions", url: "https://home.treasury.gov/news/press-releases/jy1175" }
    ] },

  { id: "TFPF-024", domain: 2, topic: "FATF R.5: elements of the terrorist financing offence", hy: true, difficulty: "hard",
    q: "Country Q's draft terrorist financing law is being reviewed against FATF Recommendation 5 and its Interpretive Note. The draft (1) makes TF an offence only when the funds are linked to a specific terrorist act; (2) covers funds from both legitimate and illegitimate sources; (3) does not cover financing an individual's travel to another state to receive terrorist training; (4) lets intent be inferred from objective factual circumstances; and (5) provides civil or administrative liability for legal persons where criminal liability is impossible under domestic law. Which TWO features must be changed to comply? (Choose two.)",
    options: [
      "Covering funds from both legitimate and illegitimate sources",
      "Requiring a link between the funds and a specific terrorist act",
      "Allowing intent to be inferred from objective factual circumstances",
      "Using civil or administrative liability for legal persons where needed",
      "Leaving out the financing of travel to receive terrorist training"
    ],
    answer: [1, 4],
    explanation: "The Interpretive Note to Recommendation 5 states that TF offences should not require that the funds were used for, or linked to, a specific terrorist act, and that TF includes financing the travel of individuals to a state other than their state of residence or nationality to commit, plan or prepare terrorist acts or to provide or receive terrorist training, the foreign terrorist fighter element drawn from UNSCR 2178 (2014). The other three features are required or allowed: the offence must cover funds from legitimate or illegitimate sources, intent may be inferred from objective facts, and civil or administrative liability for legal persons is acceptable where criminal liability is not possible.",
    source: [
      { label: "FATF Recommendations (2026 update) – Interpretive Note to Recommendation 5", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ] },

  { id: "TFPF-025", domain: 2, topic: "DPRK sanctions: bank accounts for DPRK diplomats (UK)", hy: false, difficulty: "hard",
    q: "A DPRK national accredited as a diplomat at the DPRK embassy in London asks Thames Valley Bank to open a personal current account so that he can receive his salary. He has no other account in the UK. He passes identity checks and is not on the UK Sanctions List. The relationship manager notes that UNSCR 2321 (2016) asks states to limit DPRK diplomats to one bank account each, and argues that this would be his only account. What should the bank do?",
    options: [
      "Open the account, because UNSCR 2321 allows one account for each accredited DPRK diplomat",
      "Open the account and apply enhanced due diligence because he is a foreign PEP",
      "Not open the account unless an exception applies or OFSI grants a licence",
      "Open the account and notify the UN 1718 Committee within 30 days"
    ],
    answer: [2],
    explanation: "Regulation 25 of the UK's Democratic People's Republic of Korea (Sanctions) (EU Exit) Regulations 2019 says a UK credit or financial institution must not open a bank account for a DPRK diplomatic mission or consular post, or for a DPRK national who is a member of one, subject only to the exceptions and licences in Part 9; breaching this is an offence. UNSCR 2321 sets a UN minimum of limiting such accounts to one per mission and one per accredited diplomat, which the EU applied as a one-account rule, but the UK rule is stricter. That makes the one-account argument the runner-up but wrong in the UK. PEP EDD does not cure a prohibition, and there is no notification route to the 1718 Committee that permits opening.",
    source: [
      { label: "legislation.gov.uk – The DPRK (Sanctions) (EU Exit) Regulations 2019, reg. 25", url: "https://www.legislation.gov.uk/uksi/2019/411/regulation/25" },
      { label: "legislation.gov.uk – Council Decision (CFSP) 2016/849, Art. 31a (one account per DPRK mission or member)", url: "https://www.legislation.gov.uk/eudn/2016/849/article/31a" }
    ] }
]);
