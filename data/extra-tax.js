window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "TAXC-001", domain: 1, topic: "MTIC fraud: identifying the broker in a VAT fraud chain", hy: true, difficulty: "hard",
    q: "Halden Components BV, a customer of Meridian Bank in an EU Member State, trades computer processors. It was VAT-registered 14 months ago and its director previously ran a mobile phone shop. Every quarter it files a VAT return claiming a repayment of about EUR 1.9 million. It buys all its stock from two domestic companies that were registered only a few months earlier, and it sells everything VAT-free to customers in other Member States. The tax authority has told the bank that the trader at the start of the chain, which bought the chips VAT-free from abroad, cannot be contacted and has never paid the VAT it charged. Halden leases a small warehouse and is audited by a mid-sized accounting firm. In MTIC terms, which role does Halden MOST likely play?",
    options: [
      "The buffer, a trader placed in the middle of the chain between the defaulter and the exporter",
      "The missing trader, which charged VAT on its domestic sales and then disappeared without paying it",
      "The broker, which sits at the end of the chain, makes zero-rated supplies abroad and claims repayment of input VAT",
      "The contra trader, which offsets output tax from one chain against input tax from a separate chain"
    ],
    answer: [2],
    explanation: "HMRC's VAT Fraud Manual describes the broker as the trader at the end of the chain that dispatches or exports the goods. Because its supply is zero-rated, it has input tax but no output tax, so it files repayment returns, which is how the fraud draws money out of the treasury. The two newly registered suppliers look like buffers, and the uncontactable first trader is the defaulter (missing trader). A contra trader would also run a second chain of acquisitions and domestic sales to cancel out its repayment claim, which Halden does not do. The warehouse and the auditor are decoys.",
    source: [
      { label: "HMRC VAT Fraud Manual VATF23520 – descriptions of those involved in MTIC fraud", url: "https://www.gov.uk/hmrc-internal-manuals/vat-fraud/vatf23520" },
      { label: "HMRC VAT Fraud Manual VATF23540 – carousel fraud", url: "https://www.gov.uk/hmrc-internal-manuals/vat-fraud/vatf23540" }
    ]
  },
  {
    id: "TAXC-002", domain: 1, topic: "MTIC fraud: contra trading to hide a repayment claim", hy: false, difficulty: "hard",
    q: "Kestrel Trading Ltd banks with Northfield Bank. In one VAT quarter it buys EUR 12 million of mobile phones from domestic suppliers and dispatches them VAT-free to a buyer in another Member State, which gives it about EUR 2.4 million of input VAT. In the same quarter it acquires EUR 12 million of computer software and hardware VAT-free from a different foreign supplier and sells it to domestic customers, charging about EUR 2.4 million of output VAT. Its VAT return therefore shows almost nothing payable or repayable. The two trades involve unrelated goods and counterparties, and every payment clears within a day. Kestrel's finance director says the business is 'naturally hedged'. Which scheme does this pattern MOST likely indicate?",
    options: [
      "Contra trading, in which output tax from one chain offsets input tax from a tax loss chain, so no repayment claim alerts the tax authority",
      "Acquisition fraud, in which goods bought VAT-free from abroad are sold to final consumers and the seller then defaults",
      "Legitimate VAT netting between a company's export business and its import business, with no fraud indicators",
      "Hijacking of another trader's VAT number to make acquisitions without registering for VAT"
    ],
    answer: [0],
    explanation: "HMRC describes a contra trader as a VAT-registered person that, in the same VAT period, runs a 'tax loss chain' (domestic purchases followed by zero-rated dispatches) and a 'contra chain' (VAT-free acquisitions followed by domestic sales). The output tax on the contra chain is designed to offset the input tax on the tax loss chain, which hides a large repayment claim and makes the fraud harder to detect. The tax loss chain still traces back to a defaulter. Legitimate netting is the runner-up, but matching two unrelated, same-sized chains in one quarter, with same-day payments, is the hallmark HMRC describes. Kestrel is registered and trades in its own name, so this is not hijacking.",
    source: [
      { label: "HMRC VAT Fraud Manual VATF23550 – contra trading", url: "https://www.gov.uk/hmrc-internal-manuals/vat-fraud/vatf23550" }
    ]
  },
  {
    id: "TAXC-003", domain: 1, topic: "Import VAT fraud through Customs Procedure 42 (EPPO 'Calypso')", hy: true, difficulty: "hard",
    q: "Pirin Logistics Ltd is registered in one EU Member State but uses a VAT number from another, where a large container port is located. It imports e-bikes, scooters and textiles from China at declared values far below those of comparable shipments. It claims the import VAT exemption on the basis that the goods will go straight on to buyers in Czechia, Denmark and Germany. The tax authorities in those countries report that the named buyers never received the goods or declared the acquisitions. Trucking records show the goods going to warehouses in Spain and France. Pirin's account at a local bank receives payments from dozens of unrelated companies and individuals, not from the declared buyers, and sends regular transfers to Hong Kong. Pirin's director has a clean record and the company holds a valid customs broker contract. Which scheme is MOST likely?",
    options: [
      "A classic carousel, in which the goods circulate between Member States and return to the original importer",
      "Abuse of the Customs Procedure 42 import VAT exemption, with fake acquirers acting as missing traders, combined with undervaluation to evade customs duty",
      "Transfer mispricing between related companies to shift corporate profits to a low-tax jurisdiction",
      "Customs duty drawback fraud, in which duty is reclaimed on goods falsely declared as re-exported outside the EU"
    ],
    answer: [1],
    explanation: "EPPO's June 2025 'Calypso' case (about EUR 700 million of damage) describes this model. Goods from China were undervalued at the port to evade customs duty. The importer then claimed the Customs Procedure 42 exemption from import VAT because the goods were supposedly going on to buyers in other Member States. Those buyers acted as missing traders, some using hijacked VAT numbers, and never received the goods, which went to warehouses and were sold in other countries. A carousel is the runner-up, but here the goods are sold into the market rather than going round the chain again. Nothing suggests related-party pricing or drawback claims.",
    source: [
      { label: "EPPO (26 June 2025) – Investigation 'Calypso': criminal networks flooding the EU with fraudulently imported Chinese goods", url: "https://www.eppo.europa.eu/en/media/news/investigation-calypso-eppo-strikes-criminal-networks-flooding-eu-fraudulent-chinese" }
    ]
  },
  {
    id: "TAXC-004", domain: 1, topic: "Case lessons: EPPO 'Admiral 2.0' VAT carousel (2024)", hy: false, difficulty: "hard",
    q: "A bank's financial crime team is reviewing EPPO's November 2024 announcement on 'Admiral 2.0', a spin-off of the Admiral investigation, to update its VAT fraud scenarios. Which lessons does the case support? (Choose two.)",
    options: [
      "The losses fell within a single Member State, so the case shows that national tax authorities can handle carousel fraud without EU-level coordination",
      "The fraud infrastructure was also suspected of laundering proceeds of drug trafficking, cybercrime and investment fraud, so VAT fraud networks can serve other criminals",
      "The scheme relied mainly on cash couriers, so bank account monitoring has little value against VAT carousel fraud",
      "The scheme involved intangible services such as carbon emission allowances rather than physical goods",
      "Companies sold electronics to consumers through online marketplaces and then disappeared without paying the VAT, while other companies in the chain claimed VAT refunds"
    ],
    answer: [1, 4],
    explanation: "EPPO said the syndicate set up companies in 15 Member States and sold over EUR 1.48 billion of popular electronic devices through online marketplaces. The selling companies disappeared without paying the VAT their customers had paid, and other companies in the chain claimed VAT refunds, causing an estimated EUR 297 million of damage. EPPO also said the scheme was believed to have laundered proceeds of drug trafficking, cybercrime and investment fraud, and that proceeds were moved to offshore accounts. Searches covered 16 countries, 62 bank accounts were frozen, and the goods were physical electronics, so the other options contradict the release.",
    source: [
      { label: "EPPO (28 November 2024) – Investigation Admiral 2.0: Europe's biggest VAT fraud with links to organised crime", url: "https://www.eppo.europa.eu/en/media/news/investigation-admiral-20-europes-biggest-vat-fraud-links-to-organised-crime" }
    ]
  },
  {
    id: "TAXC-005", domain: 1, topic: "Payroll tax fraud: mini umbrella company fraud (HMRC)", hy: false, difficulty: "hard",
    q: "In six months, Thameside Bank opens business accounts for 38 limited companies with names such as 'Quartz Vale 14 Ltd'. Each company was incorporated around the same time, has five to nine employees and shares a registered address with several of the others. Most directors are foreign nationals with no experience in UK labour supply, and many are replaced within a few months. Companies House lists activities such as hairdressing supplies, but every company is paid by the same recruitment agency for temporary warehouse workers. Workers' pay goes to their own accounts by Bacs at about minimum wage, and payments to HMRC are small. Companies close within a year and are replaced by new ones. The agency is a long-standing, well-run customer. Which typology is MOST likely?",
    options: [
      "Labour trafficking, in which controllers confiscate workers' wages through debt bondage",
      "Ghost employee fraud by an insider at the recruitment agency who adds fictitious workers to the payroll",
      "A payroll card scheme that uses the workers' accounts as money mules for third-party funds",
      "Mini umbrella company fraud, splitting the workforce across many small companies to claim small-business reliefs and leave unpaid tax debts"
    ],
    answer: [3],
    explanation: "HMRC describes mini umbrella company fraud as organised crime groups breaking one umbrella company into many small companies, each with few workers. This lets them claim small-business incentives such as the Employment Allowance or the VAT Flat Rate Scheme, build up PAYE, National Insurance and VAT debts and then close. HMRC's warning signs match this case: similar unusual names set up at the same time, unrelated listed activities, inexperienced foreign national directors who are soon replaced, workers moved between companies, and short-lived businesses. Labour trafficking is the runner-up, but workers here are paid into their own accounts with no sign of control or wage confiscation. The reputable agency is a decoy, because these companies sit low in the supply chain.",
    source: [
      { label: "HMRC guidance – Mini umbrella company fraud (GOV.UK)", url: "https://www.gov.uk/guidance/mini-umbrella-company-fraud" }
    ]
  },
  {
    id: "TAXC-006", domain: 1, topic: "US employment tax fraud: pyramiding", hy: false, difficulty: "hard",
    q: "Ridgeline Framing LLC, a US construction subcontractor with about 60 workers, pays net wages from its payroll account every two weeks. Until last year it also made federal tax deposits through EFTPS on each payday, but for the last three quarters there have been none. Over the same period the owner has drawn large sums and bought a boat. Public records show a recent IRS federal tax lien against the company. The bank also learns that the owner ran Ridgeback Framing Inc., which went bankrupt three years ago owing payroll taxes, and that Ridgeline was formed 18 months ago. The company uses no outside payroll provider, and its workers receive W-2s. Which scheme is MOST likely?",
    options: [
      "Misclassifying employees as independent contractors so that no tax is withheld from their pay",
      "Diversion of client tax deposits by an unreliable third-party payroll provider",
      "Pyramiding: withholding employment taxes from workers but not paying them over, then closing and restarting under a new name",
      "A fraudulent claim for employment tax credits paid by Treasury check to a business with no payroll"
    ],
    answer: [2],
    explanation: "The IRS describes pyramiding as a business withholding taxes from its employees but intentionally not remitting them, often using the trust funds to pay other bills. The quarterly liabilities build up, and the business often shuts down or goes bankrupt and starts again under a new name. Net payroll with no EFTPS deposits, the owner's drawings, a tax lien and a predecessor that failed owing payroll taxes all fit. Third-party payer diversion is the runner-up, but Ridgeline uses no payroll provider, and its workers receive W-2s with tax withheld, so this is not misclassification. Nothing points to a credit claim.",
    source: [
      { label: "IRS – Warning to businesses about questionable employment tax practices (pyramiding, third-party payers, cash wages)", url: "https://www.irs.gov/newsroom/irs-warns-businesses-individuals-to-watch-for-questionable-employment-tax-practices" }
    ]
  },
  {
    id: "TAXC-007", domain: 1, topic: "US tax refund fraud: SAR narrative and IRS-CI contact (FIN-2013-A001)", hy: true, difficulty: "hard",
    q: "Trevor Ames opened a checking account at Juniper Ridge Credit Union in January. In March the account receives 11 ACH credits from 'IRS TREAS 310 TAX REF' in the names of 11 different people, two of them in their nineties. Within a day of each credit, the money is withdrawn in cash at ATMs or used to load prepaid cards. The account has had no other deposits. Asked about it, Ames says he is a self-employed tax preparer and that his clients have no bank accounts. His identity documents were verified at account opening, and he has no adverse media. What is the BEST response?",
    options: [
      "File a SAR that uses the term 'tax refund fraud' in the narrative, and consider alerting the local IRS Criminal Investigation field office because the funds move quickly",
      "Accept the explanation, because tax preparers routinely receive their clients' refunds in their own accounts, and note it in the file",
      "Return the ACH credits to Treasury and close the account, which removes the need for a SAR",
      "File a CTR for the cash withdrawals and continue monitoring, because government refunds are a low-risk source of funds"
    ],
    answer: [0],
    explanation: "FinCEN's tax refund fraud advisory lists, as red flags, multiple direct-deposit refunds to different individuals paid into an account held by one person, deposits made up only of refunds, victims such as the elderly, and fast ATM or prepaid card cash-outs. It asks institutions to use the term 'tax refund fraud' in the SAR narrative. Because these transactions are time-sensitive, it suggests institutions may also alert their local IRS Criminal Investigation field office. Ames's explanation does not account for refunds in other people's names being paid into his own account. Returning the credits or filing a CTR does not replace the SAR obligation.",
    source: [
      { label: "FinCEN Advisory FIN-2013-A001 – Update on tax refund fraud and related identity theft", url: "https://www.fincen.gov/sites/default/files/shared/FIN-2013-A001.pdf" }
    ]
  },
  {
    id: "TAXC-008", domain: 1, topic: "Case lessons: Credit Suisse Services AG plea (May 2025) – inherited undeclared US accounts", hy: false, difficulty: "hard",
    q: "In 2026, Lakemont Bank completes its takeover of Felsberg Bank. Integration staff find about 60 accounts at Felsberg's Singapore branch held through Panamanian foundations. Old files show US addresses and US phone numbers for the controlling persons, but no US tax forms or evidence of tax compliance. The relationship managers say the clients are 'long-standing and loyal', and Felsberg's pre-merger certifications state that it had no undeclared US accounts. Some clients have already asked to move their assets to a bank in another country. In light of the 2025 Credit Suisse Services AG resolution, what should Lakemont do?",
    options: [
      "Rely on Felsberg's pre-merger certifications, because conduct before the acquisition is not Lakemont's responsibility",
      "Help the clients move their assets quickly to another bank, which ends the relationship and the exposure",
      "Obtain new self-certifications declaring non-US status for each account and keep the relationships unchanged",
      "Restrict the accounts, investigate the beneficial owners and US indicia, and consider disclosing to the authorities and filing suspicious activity reports"
    ],
    answer: [3],
    explanation: "In May 2025, Credit Suisse Services AG pleaded guilty to conspiring to hide more than USD 4 billion from the IRS in at least 475 offshore accounts and agreed to pay over USD 510 million. A separate NPA covered Singapore accounts that the bank 'knew or should have known' were US and where it had failed to identify the true beneficial owners or look into US indicia. After the merger, UBS froze some accounts, voluntarily disclosed them to the DOJ and investigated, which the resolution recognised. Relying on old certifications or re-papering the accounts repeats the failure. Helping clients move funds elsewhere without investigating could itself facilitate evasion.",
    source: [
      { label: "DOJ press release (5 May 2025) – Credit Suisse Services AG admits conspiring with US taxpayers to hide assets offshore", url: "https://www.justice.gov/opa/pr/credit-suisse-services-ag-admits-conspiring-us-taxpayers-hide-assets-and-income-offshore" }
    ]
  },
  {
    id: "TAXC-009", domain: 1, topic: "Citizenship by investment: verifying the original identity", hy: false, difficulty: "hard",
    q: "Leon Varga asks an EU private bank to open an account for EUR 3 million from the sale of a company. He identifies himself with a valid biometric passport issued in 2024 by a Caribbean state that sells citizenship by investment, and he holds a local residence permit. The passport shows a place of birth in a Central Asian country. On the onboarding form he declares only his Caribbean citizenship. An adverse media search in English on his current name returns nothing. He was introduced by a reputable wealth adviser, who confirms he is 'well known in business circles'. What should the bank do FIRST?",
    options: [
      "Accept the Caribbean passport as sufficient, because it is a valid government-issued document and the screening is clear",
      "Ask for evidence of his original nationality, such as his birth certificate and any passports held in his original identity, and for all his current citizenships",
      "Decline the relationship, because passports obtained through investment cannot be used to identify customers",
      "Rely on the introducer's confirmation of his reputation and complete the onboarding under the standard procedure"
    ],
    answer: [1],
    explanation: "The 2023 FATF/OECD report on citizenship and residency by investment warns that a new citizenship can be used to separate a person from their original identity and from past crimes or tax obligations. It suggests that, when a CBI passport is the proof of identity, institutions routinely ask for evidence of the original nationality, including the birth certificate and any passports held in the original identity, and make sure all nationalities are disclosed. Screening only the new identity in one language can miss adverse information from the country of origin. CBI passports are not banned, and an introducer's assurance does not replace the bank's own CDD.",
    source: [
      { label: "FATF/OECD (2023) – Misuse of Citizenship and Residency by Investment Programmes (copy hosted by the Bank of Russia), paras 69 and 170", url: "https://www.cbr.ru/Content/Document/File/156566/MCR.PDF" }
    ]
  },
  {
    id: "TAXC-010", domain: 1, topic: "FATCA: curing a US place of birth (Model 1 IGA Annex I)", hy: true, difficulty: "hard",
    q: "A Reporting Financial Institution in a Model 1 IGA country reviews a high-value preexisting account held by Helena Brandt. Its records show her place of birth as Boston, Massachusetts. She provides a self-certification that she is neither a US citizen nor a US resident for tax purposes, together with her German passport. She explains that her parents were posted to Boston for two years and that she has lived in Germany since the age of two. She has no US address or phone number, and her account is managed from Frankfurt. Under Annex I of the Model 1 IGA, what else does the institution need before it can treat the account as not US reportable?",
    options: [
      "Nothing more, because a non-US self-certification and a non-US passport together cure a US place of birth",
      "A second non-US identity document, such as a national identity card, issued by a different country",
      "A copy of her Certificate of Loss of Nationality of the United States, or a reasonable explanation of why she has none despite relinquishing citizenship or why she did not obtain it at birth",
      "Her US federal tax returns for the last three years, showing that she owes no US tax"
    ],
    answer: [2],
    explanation: "An unambiguous US place of birth is a US indicium. Annex I lets the institution avoid treating the account as a US Reportable Account only if it obtains three things: a self-certification of non-US status, a non-US passport or other government ID, and a copy of the Certificate of Loss of Nationality or a reasonable explanation of why the holder has none despite relinquishing US citizenship (or why they did not obtain it at birth). Moving away as a child does not end US citizenship, so the self-certification and passport alone, the runner-up, are not enough. US tax returns are not part of the cure.",
    source: [
      { label: "US Treasury – Model 1 IGA, Annex I (June 2014), section II.B(1) and B(4)(a)", url: "https://home.treasury.gov/system/files/131/FATCA-Annex-I-to-Model-1-Agreement-6-6-14.pdf" }
    ]
  },
  {
    id: "TAXC-011", domain: 1, topic: "OECD MDR: recognising CRS avoidance arrangements", hy: true, difficulty: "hard",
    q: "Fenwick Partners, a UK wealth planning firm, reviews five proposals its planners have prepared for clients who are tax resident in France and Spain, both of which take part in the Common Reporting Standard (CRS). Under the UK Mandatory Disclosure Rules, which implement the OECD Model Rules, which proposals have features of a reportable CRS avoidance arrangement? (Choose two.)",
    options: [
      "Moving a client's portfolio to an institution in a jurisdiction that does not exchange CRS information with the client's country of residence",
      "Using money from a CRS-reported French bank account to buy a holiday home in France",
      "Restructuring a US citizen client's holdings only to avoid FATCA reporting by a UK financial institution",
      "Putting a client's cash into a 'private vault deposit plan' that is presented as not being a Financial Account but works like a deposit account",
      "Transferring a client's account between two banks in CRS-participating jurisdictions, both of which report it"
    ],
    answer: [0, 3],
    explanation: "HMRC's MDR guidance lists, among the features of CRS avoidance arrangements, using a product that purports not to be a Financial Account but has substantially similar features, and moving accounts or assets to an institution or jurisdiction that does not exchange CRS information with all of the taxpayer's residence jurisdictions. An arrangement does not circumvent the CRS just because no report results: real estate is outside the CRS, so buying the French house is not caught. The UK's FATCA agreement is not an equivalent agreement, so FATCA-only avoidance is not reportable under these rules, although other anti-avoidance rules may apply. A move between two reporting banks keeps the account reported.",
    source: [
      { label: "HMRC International Exchange of Information Manual IEIM730020 – CRS avoidance arrangements", url: "https://www.gov.uk/hmrc-internal-manuals/international-exchange-of-information/ieim730020" },
      { label: "International Tax Enforcement (Disclosable Arrangements) Regulations 2023 (SI 2023/38)", url: "https://www.legislation.gov.uk/uksi/2023/38/made" }
    ]
  },
  {
    id: "TAXC-012", domain: 1, topic: "OECD MDR: opaque offshore structures vs excluded vehicles", hy: false, difficulty: "hard",
    q: "A UK trust and company service provider reviews four client structures under the Mandatory Disclosure Rules. Which one is MOST likely an 'opaque offshore structure'?",
    options: [
      "A Singapore trading company with 40 staff, a warehouse and its own offices, whose shares are held by a nominee for a disclosed UK family",
      "A Cayman Islands investment fund wholly owned by three national pension funds and a sovereign wealth fund",
      "A Luxembourg holding company with no staff, whose beneficial owners are all tax resident in Luxembourg",
      "A company holding a securities portfolio, with no staff or premises, in a jurisdiction with no beneficial ownership records, whose shares are held by a nominee for an undisclosed nominator"
    ],
    answer: [3],
    explanation: "Under the Model Rules, an opaque offshore structure is a passive offshore vehicle (no substantive economic activity with adequate staff, equipment, assets and premises) held through a structure that prevents accurate identification of its beneficial owner. Examples include nominee shareholders with undisclosed nominators and jurisdictions with no requirement or mechanism to keep beneficial ownership information. The Singapore company has real economic substance. Vehicles wholly owned by institutional investors are excluded, and so are vehicles whose beneficial owners are all tax resident where the vehicle is established. The Luxembourg company, the runner-up, is passive, but that exclusion applies to it.",
    source: [
      { label: "HMRC International Exchange of Information Manual IEIM730030 – Obscuring beneficial ownership (opaque offshore structures)", url: "https://www.gov.uk/hmrc-internal-manuals/international-exchange-of-information/ieim730030" }
    ]
  },
  {
    id: "TAXC-013", domain: 1, topic: "Offshore structures hiding income: diverted service fees and third-party payments", hy: false, difficulty: "hard",
    q: "Marco Bellini, an IT consultant, banks with Sandmere Bank and declares a salary of EUR 60,000 a year from his own small local company. A review shows that his three German clients have stopped paying his local company. Instead they pay invoices issued by Larchmont Holdings Ltd, a BVI company of which he is the only signatory. His personal account has no transfers from Larchmont, but Larchmont now pays his mortgage, his children's school fees and a car lease directly, about EUR 9,000 a month. He also holds a debit card on Larchmont's account, which he uses for groceries and holidays. He says the BVI company 'owns his intellectual property' and that a local accountant set it up. Which typology does this MOST likely show?",
    options: [
      "Diverting personal service income to an offshore company and using it for personal spending, without declaring it, to hide taxable income",
      "Lawful tax planning, because the BVI company is properly incorporated and the arrangement was designed by an accountant",
      "Trade-based money laundering through over-invoicing of consulting services to German clients",
      "Mortgage fraud, in which a third party pays the loan to hide the borrower's inability to repay it"
    ],
    answer: [0],
    explanation: "Income from Bellini's own work is redirected to an offshore company he controls, and he enjoys it through third-party payments and a card without it ever passing through his declared accounts. The OECD Model Rules flag exactly this kind of arrangement: giving a taxpayer access to income or assets held by a structure without his being identified as its beneficial owner. HM Treasury defines tax evasion as deliberately not declaring and accounting for tax owed, which is always illegal, unlike avoidance or planning. Lawful incorporation and an accountant's involvement do not make undeclared income lawful. The mortgage is being paid, so this is not mortgage fraud.",
    source: [
      { label: "HMRC IEIM730030 – Opaque offshore structures, including access to income without being identified as beneficial owner", url: "https://www.gov.uk/hmrc-internal-manuals/international-exchange-of-information/ieim730030" },
      { label: "HM Treasury / HMRC – Tackling tax evasion and avoidance (Cm 9047, March 2015), Box 1.A", url: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/413931/Tax_evasion_FINAL__with_covers_and_right_sig_.pdf" }
    ]
  },
  {
    id: "TAXC-014", domain: 1, topic: "Tax evasion vs tax avoidance vs tax planning", hy: true, difficulty: "medium",
    q: "An MLRO is training relationship managers on when a client's tax affairs may give rise to criminal property. Which facts point to tax evasion rather than avoidance or planning? (Choose two.)",
    options: [
      "The client invested in a government-approved pension plan to obtain the income tax relief it was designed to give",
      "The client used a marketed scheme that had been disclosed to the tax authority, which later challenged it successfully in court",
      "The client deliberately left rental income from a foreign apartment off her tax return for six years",
      "The client deducted invoices from a related company for consulting services that were never provided",
      "The client moved to a lower-tax country, sold his home country house and became tax resident abroad"
    ],
    answer: [2, 3],
    explanation: "HM Treasury and HMRC define tax evasion as always illegal: deliberately not declaring and accounting for taxes owed, which covers hiding income and claiming deductions on fake invoices. Tax avoidance means bending the rules to get an advantage Parliament never intended, within the letter but not the spirit of the law. A disclosed scheme that is defeated in court costs the client tax and penalties, but it is not in itself a crime. Tax planning uses reliefs as intended, as with the pension, and genuinely changing residence is lawful.",
    source: [
      { label: "HM Treasury / HMRC – Tackling tax evasion and avoidance (Cm 9047, March 2015), Box 1.A", url: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/413931/Tax_evasion_FINAL__with_covers_and_right_sig_.pdf" }
    ]
  },
  {
    id: "TAXC-015", domain: 1, topic: "Trade mispricing for tax: re-invoicing through a low-tax affiliate", hy: false, difficulty: "hard",
    q: "Brennick Steel, a manufacturer in Country H, where the corporate tax rate is 30%, banks with Corran Bank. It sells all its steel coil to Brennick Trading FZE, an affiliate in a zero-tax free zone, at prices about 35% below what end customers pay. The affiliate has two employees and no warehouse. It re-invoices the same coil at full price to customers in Europe, which pay the affiliate directly, while the goods ship straight from Country H to those customers. The affiliate's profits are then lent to Brennick's owner personally. Brennick has a transfer pricing policy drafted by a large consulting firm, and its export volumes match customs data. Which concern does this pattern MOST clearly raise?",
    options: [
      "Missing trader VAT fraud, because the goods cross borders and pass through several companies",
      "Shifting profit offshore by under-invoicing exports to an affiliate that re-invoices the goods, which may amount to tax evasion and trade-based laundering",
      "Over-invoicing of imports to inflate customs duty deductions in Country H",
      "No concern, because pricing between related parties is a matter of legitimate transfer pricing policy"
    ],
    answer: [1],
    explanation: "FATF's trade-based ML report notes that a company can sell goods to a foreign affiliate at one price and have the affiliate re-invoice them at a much higher or lower price, which moves the over- or under-invoicing to a jurisdiction where it is less likely to be detected. FATF also notes that genuine transfer pricing concerns the legitimate allocation of income between related parties. That is the runner-up here, but an affiliate with no substance, goods that bypass it, and profits lent back to the owner go beyond pricing policy. Matching export volumes do not test the price. Nothing suggests a VAT chain or an import.",
    source: [
      { label: "FATF (2006) – Trade Based Money Laundering (copy hosted by the EAG), section on re-invoicing and transfer pricing", url: "https://eurasiangroup.org/files/FATF_docs/Trade_Based_Money_Laundering.pdf" }
    ]
  },
  {
    id: "TAXC-016", domain: 1, topic: "Trade mispricing for tax: over-invoiced exports to inflate VAT rebates", hy: false, difficulty: "medium",
    q: "Orinoco Textiles exports cotton T-shirts from Country M, which refunds VAT and pays an export tax credit based on the declared export value. Its invoices to a new buyer abroad price the shirts at USD 14 each, while customs data shows comparable shirts exported at about USD 3. The shirts are actually shipped, and the quantities match the bills of lading. The buyer is a two-year-old company with no website, and part of each payment comes from unrelated third parties. Orinoco's refund claims have tripled this year. Which scheme is MOST likely?",
    options: [
      "Under-invoicing exports to move capital out of Country M",
      "A phantom shipment, in which no goods are sent and the documents are entirely fictitious",
      "Over-invoicing exports to inflate VAT refunds and export tax credits, with the excess payments bringing funds into Country M",
      "A VAT carousel, in which the shirts are later reimported and sold again"
    ],
    answer: [2],
    explanation: "FATF's trade-based ML report explains that an exporter who over-invoices the goods it ships can significantly increase the export tax credit or VAT rebate it receives, which links trade mispricing to tax fraud. The price is almost five times the market rate while quantities are genuine, so this is a price misrepresentation, not a phantom shipment. Over-invoicing also lets value enter the country through the buyer's and third parties' payments, which is the opposite of under-invoicing to move capital out. Nothing suggests the goods come back.",
    source: [
      { label: "FATF (2006) – Trade Based Money Laundering (copy hosted by the EAG), over- and under-invoicing and tax implications", url: "https://eurasiangroup.org/files/FATF_docs/Trade_Based_Money_Laundering.pdf" }
    ]
  },
  {
    id: "TAXC-017", domain: 1, topic: "FATF: countries define which tax crimes are predicate offences", hy: true, difficulty: "medium",
    q: "Country Z's ML offence covers the proceeds of tax crimes, but its tax law makes evasion a crime only when it is deliberate and the tax lost exceeds a set threshold; smaller or careless underpayments are dealt with by administrative penalties. Both direct and indirect taxes are covered. A visiting assessor asks whether this approach is consistent with the FATF standards. What is the BEST answer?",
    options: [
      "No, because every underpayment of tax, however small or careless, must be a predicate offence for money laundering",
      "No, because FATF requires only indirect tax crimes such as VAT fraud to be predicate offences",
      "Yes, because FATF lets each country decide whether to treat tax crimes as predicate offences at all",
      "Yes, because tax crimes are a designated category, but each country may define them and the elements that make them serious"
    ],
    answer: [3],
    explanation: "The FATF Glossary lists 'tax crimes (related to direct taxes and indirect taxes)' as a designated category of offences, so countries must cover them. It also says each country may decide, under its domestic law, how to define the offences in each category and the elements that make them serious. EU Directive 2018/1673 takes the same approach and does not harmonise national definitions of tax crimes (recital 8). The category is mandatory, not optional, and it covers both direct and indirect taxes.",
    source: [
      { label: "FATF Recommendations (2026), General Glossary – 'designated categories of offences' (copy hosted by the EAG)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
      { label: "Directive (EU) 2018/1673, recital 8 and Article 2(1)(q)", url: "https://publications.europa.eu/resource/celex/32018L1673" }
    ]
  },
  {
    id: "TAXC-018", domain: 1, topic: "EU Directive 2018/1673: foreign tax crimes and dual criminality", hy: false, difficulty: "hard",
    q: "A bank in EU Member State P files a suspicious transaction report on funds that a customer moved from Country T, a non-EU country. Investigators believe the money comes from income tax evasion in Country T. The conduct would be a tax crime if it had occurred in P, but in Country T the same conduct is only an administrative tax breach. P's money laundering law requires foreign predicate conduct to be an offence in the country where it happened. Under Directive (EU) 2018/1673, is P's dual criminality requirement allowed for this case?",
    options: [
      "Yes, because the Directive bars a dual criminality requirement only for listed categories such as organised crime, terrorism, trafficking, sexual exploitation, drug trafficking and corruption, not tax crimes",
      "No, because the Directive bars a dual criminality requirement for all 22 categories of criminal activity, including tax crimes",
      "No, because the Directive requires every Member State to apply dual criminality to all foreign predicate conduct",
      "Yes, because the Directive excludes tax crimes committed outside the EU from the definition of criminal activity"
    ],
    answer: [0],
    explanation: "Article 3(3)(c) requires the ML offence to extend to property derived from conduct abroad that would be criminal activity if it had occurred domestically. Article 3(4) lets Member States also require that the conduct is an offence where it was committed, except for the offences in points (a) to (e) and (h) of Article 2(1): organised crime and racketeering, terrorism, trafficking in human beings and migrant smuggling, sexual exploitation, drug trafficking, and corruption. Tax crimes are point (q), so P may keep the requirement. The runner-up wrongly extends the exception to all categories, and tax crimes remain a designated category whether committed at home or abroad.",
    source: [
      { label: "Directive (EU) 2018/1673 on combating money laundering by criminal law – Articles 2(1) and 3(3)-(4)", url: "https://publications.europa.eu/resource/celex/32018L1673" }
    ]
  },
  {
    id: "TAXC-019", domain: 1, topic: "US employment tax fraud: offshore employee leasing", hy: false, difficulty: "hard",
    q: "Dr. Alan Pryce, an anaesthetist, has banked with Westbrook Bank for 15 years. Last year he 'resigned' from his medical practice and signed an employment contract with Coral Reef Staffing Ltd, an offshore company, which leases his services back to the same practice through a domestic leasing firm. He does the same work and his total pay has risen. His account now receives only a small salary from the domestic firm. Each quarter he also receives a large wire from an offshore account, described as a 'loan' under a deferred compensation plan. A promoter's brochure in his file says that neither income tax nor employment tax is due on the deferred amounts. He has no debts and his credit score is excellent. Which scheme is MOST likely?",
    options: [
      "A legitimate deferred compensation plan, because employee leasing through a professional employer organisation is a lawful practice",
      "Offshore employee leasing, in which most of his pay goes offshore as 'deferred compensation' and comes back as 'loans' to avoid income and employment taxes",
      "Pyramiding, in which his employer withholds taxes from his pay but never remits them",
      "A loan-back scheme to support a mortgage application with a fabricated source of funds"
    ],
    answer: [1],
    explanation: "The IRS describes offshore employee leasing, a Listed Transaction since 2003, in which a worker resigns, signs with an offshore leasing company and is leased back to the original employer through a domestic intermediary. Most of the pay goes offshore as 'deferred' compensation and returns to the individual as a 'loan' or into an account he controls, while promoters falsely claim that no tax is due. Employee leasing is lawful in itself, which makes the first option the runner-up, but the round trip through offshore 'loans' is the hallmark of the scheme. Nothing suggests unremitted withholding or a mortgage application.",
    source: [
      { label: "IRS – Warning on questionable employment tax practices (offshore employee leasing)", url: "https://www.irs.gov/newsroom/irs-warns-businesses-individuals-to-watch-for-questionable-employment-tax-practices" }
    ]
  },
  {
    id: "TAXC-020", domain: 1, topic: "US employment tax fraud: unreliable third-party payroll providers", hy: false, difficulty: "hard",
    q: "Summit Payroll Services Inc., a payroll service provider, banks with Clearwater Bank. Each pay period it collects about USD 4 million from roughly 300 client employers, covering net wages and the employment taxes it has agreed to pay on their behalf. Its outgoing payments show net wages paid in full, but EFTPS tax payments have fallen to about 20% of the expected amount over two quarters. During the same period Summit bought two commercial buildings and paid large 'consulting fees' to a company owned by its CEO. Several clients' IRS addresses of record have been changed to Summit's address. Summit has been a customer for eight years and its payroll software is well regarded. What is the MOST likely concern?",
    options: [
      "Pyramiding by Summit's client employers, which are withholding taxes from their staff but choosing not to remit them",
      "Misclassification of the client employers' workers as independent contractors to avoid employment taxes",
      "Ordinary cash flow timing, because payroll providers can legitimately delay tax deposits for a few quarters",
      "A third-party payer diverting employment taxes collected from client employers, which remain liable for the unpaid taxes"
    ],
    answer: [3],
    explanation: "The IRS warns that some payroll service providers and professional employer organisations collect employment taxes from their clients but do not pay them over, leaving millions unpaid when they dissolve. It urges employers to choose providers that use EFTPS, so payments can be checked, and never to let the provider change their address of record with the IRS. Clients that funded the taxes can still be held liable for them. Pyramiding by the clients is the runner-up, but here the clients paid the money to Summit and Summit diverted it into property and fees. A shortfall of this size over two quarters, alongside property purchases and fees to the CEO's company, is not explained by ordinary timing.",
    source: [
      { label: "IRS – Warning on questionable employment tax practices (unreliable third-party payers)", url: "https://www.irs.gov/newsroom/irs-warns-businesses-individuals-to-watch-for-questionable-employment-tax-practices" }
    ]
  },
  {
    id: "TAXC-021", domain: 2, topic: "EU: EPPO competence for cross-border VAT fraud (EUR 10 million) vs direct taxes", hy: true, difficulty: "hard",
    q: "Investigators in Belgium, Germany and Italy uncover a VAT carousel in electronics run by one organised group. The estimated VAT loss is EUR 6 million in Belgium, EUR 5 million in Germany and EUR 3 million in Italy. The group's leader, a Belgian resident, also failed to declare EUR 2 million of personal income from the scheme to the Belgian tax authority. All three countries take part in the European Public Prosecutor's Office (EPPO). Which part of the case falls within EPPO's competence?",
    options: [
      "Neither part, because VAT is a national tax and no single country's VAT loss reaches EUR 10 million",
      "Both parts, because the personal income tax evasion is inextricably linked to the VAT fraud",
      "The VAT carousel, because it involves two or more Member States and a total loss of at least EUR 10 million, but not the evasion of national income tax",
      "Only the leader's income tax evasion, because EPPO investigates crimes by individuals rather than VAT schemes"
    ],
    answer: [2],
    explanation: "Under Article 22(1) of the EPPO Regulation, EPPO is competent for serious VAT offences under the PIF Directive (2017/1371) that are connected with two or more Member States and cause total damage of at least EUR 10 million. Total damage means the whole scheme, here EUR 14 million, not the loss in each country. Article 22(4) says EPPO is never competent for offences concerning national direct taxes, including offences inextricably linked to them, so the income tax evasion stays with national authorities. The runner-up ignores that express exclusion. VAT fraud of this kind affects the Union's financial interests through VAT own resources.",
    source: [
      { label: "Council Regulation (EU) 2017/1939 (EPPO) – Article 22", url: "https://publications.europa.eu/resource/celex/32017R1939" },
      { label: "Directive (EU) 2017/1371 (PIF Directive) – Articles 2(2) and 3(2)(d)", url: "https://publications.europa.eu/resource/celex/32017L1371" }
    ]
  },
  {
    id: "TAXC-022", domain: 2, topic: "EU AMLR Art. 41: minimum EDD for residence-by-investment applicants", hy: false, difficulty: "medium",
    q: "In November 2027, Volta Bank in an EU Member State onboards Chen Wei, a third-country national who is applying for residence rights in that Member State by buying a EUR 500,000 apartment. Apart from this, the bank's risk assessment finds nothing unusual: he is not a PEP and screening is clear. Under the EU Anti-Money Laundering Regulation (AMLR), which enhanced due diligence measures must the bank apply as a minimum? (Choose three.)",
    options: [
      "Obtain additional information on the customer and any beneficial owners",
      "Require the first payment to come from an account in the customer's name at a credit institution with equivalent CDD standards",
      "Obtain additional information on the source of funds and source of wealth",
      "Obtain additional information on the reasons for each intended transaction",
      "Obtain senior management approval to establish the business relationship"
    ],
    answer: [0, 2, 4],
    explanation: "AMLR Article 41, which applies from 10 July 2027, requires obliged entities dealing with third-country nationals applying for residence rights in exchange for investment to apply, as a minimum, the EDD measures in Article 34(4) points (a), (c), (e) and (f). These are additional information on the customer and beneficial owners, on the source of funds and wealth, senior management approval, and enhanced monitoring. The first-payment requirement (g) and information on the reasons for transactions (d) remain available but are not mandatory minimums. Recital 21 adds that the AMLR does not apply to investor citizenship schemes, which the Court of Justice found to breach EU law in Commission v Malta (C-181/23, April 2025).",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR) – Articles 34(4) and 41, recital 21", url: "https://publications.europa.eu/resource/celex/32024R1624" },
      { label: "CJEU Grand Chamber, Commission v Malta, C-181/23 (29 April 2025)", url: "https://publications.europa.eu/resource/celex/62023CJ0181" }
    ]
  },
  {
    id: "TAXC-023", domain: 2, topic: "US: tax evasion intent under 18 U.S.C. 1956(a)(1)(A)(ii)", hy: true, difficulty: "hard",
    q: "Vance Medical Billing LLC fraudulently bills Medicare, a health care fraud that is a specified unlawful activity (SUA). Its owner then pays part of the proceeds to a sham consulting company he controls so that he can deduct the payments as business expenses on a false corporate tax return. A BSA officer preparing training material asks how the federal money laundering statute treats the tax element of these payments. What is the BEST answer?",
    options: [
      "Conducting a financial transaction with SUA proceeds, intending to commit tax evasion or file a false return under 26 U.S.C. 7201 or 7206, is a money laundering offence under 1956(a)(1)(A)(ii)",
      "Tax evasion is itself a specified unlawful activity, so the tax saved on any underreported income is SUA proceeds",
      "The tax element is irrelevant under section 1956, which covers only transactions designed to conceal the proceeds or to avoid reporting requirements",
      "An intent to evade tax can be charged only under the Internal Revenue Code and never under the money laundering statutes"
    ],
    answer: [0],
    explanation: "Section 1956(a)(1)(A)(ii) makes it an offence to conduct a financial transaction involving SUA proceeds, knowing they come from unlawful activity, with intent to engage in conduct that violates section 7201 (tax evasion) or section 7206 (false returns) of the Internal Revenue Code. The SUA here is the health care fraud, not the tax offence: tax evasion does not appear in the SUA definition in section 1956(c)(7). So the runner-up is wrong, and so are the claims that only concealment counts or that tax intent stays outside the money laundering statutes. A bank's SAR duty still covers suspected tax evasion, because the rule applies to funds from any illegal activity.",
    source: [
      { label: "18 U.S.C. 1956 – Laundering of monetary instruments (GovInfo, US Code 2023 edition)", url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title18/html/USCODE-2023-title18-partI-chap95-sec1956.htm" }
    ]
  },
  {
    id: "TAXC-024", domain: 2, topic: "UK CFA 2017: who is an associated person 'acting in that capacity'", hy: false, difficulty: "hard",
    q: "Harrowgate Bank, a UK bank, faces two situations. First, Gulfstar Consulting, an introducer paid to refer clients to the bank, began selling its own 'tax structuring' service outside its contract with the bank and knowingly falsified documents to help a referred client evade UK tax. The bank did not know. Second, the bank's wealth arm hired a foreign tax adviser for a client, kept control of the advice and the client relationship, and billed the adviser's fees to the client as a disbursement. That adviser knowingly designed a structure to hide the client's income from HMRC. Under the Criminal Finances Act 2017, in which situation is the bank MOST exposed to the failure-to-prevent offence?",
    options: [
      "Only the introducer situation, because the introducer was paid by the bank and dealt with the bank's clients",
      "Only the foreign tax adviser situation, because the adviser was performing services for or on behalf of the bank",
      "Both situations, because anyone who has a contract with the bank is an associated person for every purpose",
      "Neither situation, because only the bank's own employees can be associated persons"
    ],
    answer: [1],
    explanation: "Under the government guidance, a relevant body commits the offence only if a person associated with it criminally facilitates tax evasion while acting in that capacity, meaning when performing services for or on behalf of the body. The guidance's own examples are on point. An introducer that sells extra tax services outside its contracted role does not create liability, but a foreign tax adviser that the firm sub-contracts, controls and bills as a disbursement does. The runner-up, 'both', ignores the requirement that the person act in that capacity. Associated persons are not limited to employees: they include agents and sub-contractors.",
    source: [
      { label: "HM Government guidance – Tackling tax evasion: corporate offences of failure to prevent the criminal facilitation of tax evasion (2017), section 3.2 case studies", url: "https://assets.publishing.service.gov.uk/media/5a82aaa0e5274a2e8ab58b82/Tackling-tax-evasion-corporate-offences.pdf" },
      { label: "Criminal Finances Act 2017, s.44 (legislation.gov.uk)", url: "https://www.legislation.gov.uk/ukpga/2017/22/section/44" }
    ]
  },
  {
    id: "TAXC-025", domain: 2, topic: "UK POCA: proceeds of foreign tax evasion as criminal property (s.340)", hy: true, difficulty: "hard",
    q: "Amélie Durand, a French resident, holds GBP 900,000 in a deposit account at Kingsbury Bank in London. During a periodic review, she tells her relationship manager that she has never declared the interest and dividends on these funds to the French tax authority, and her adviser estimates the tax evaded at about GBP 140,000. She now asks the bank to transfer the whole balance to an account in Dubai. France has made no request to the UK, and the original capital came from a documented inheritance. What should the bank's nominated officer conclude under the Proceeds of Crime Act 2002?",
    options: [
      "The funds are not criminal property, because UK courts do not enforce foreign tax laws and France has made no request",
      "Only the GBP 140,000 of evaded tax is criminal property, so the rest of the balance can be transferred without a defence",
      "The balance can be criminal property, because the evaded tax is a benefit and property representing it even in part is covered, so a SAR and a DAML are needed before the transfer",
      "The funds become criminal property only once a French court has convicted her of tax evasion"
    ],
    answer: [2],
    explanation: "Under POCA s.340(2)(b), criminal conduct includes conduct abroad that would be an offence if it happened in the UK, which deliberately evading tax would be. Under s.340(6), a person who obtains a pecuniary advantage, such as tax not paid, is treated as obtaining a sum equal to its value. Under s.340(3), property is criminal property if it represents such a benefit 'in whole or part', so the mixed balance is tainted. The runner-up tries to split the balance, but moving any of it would risk a s.327 offence without an authorised disclosure. No conviction or foreign request is needed.",
    source: [
      { label: "Proceeds of Crime Act 2002, s.340 (legislation.gov.uk)", url: "https://www.legislation.gov.uk/ukpga/2002/29/section/340" }
    ]
  }
]);
