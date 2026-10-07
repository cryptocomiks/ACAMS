// Batch 7: practical cases on cyber-enabled financial crime, 2024-2026
// (deepfake fraud, account takeover, SIM swap, phishing kits, residential proxies, ransomware and fake
// ransomware, cyber-event SAR reporting, scam centers and their laundering, DPRK IT worker extortion,
// ramp-and-dump clubs, recovery of fraudulent wires, bank incident notification).
// Every keyed answer checked against the primary source listed in `source` (October 2026).
window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "CYBR-001", domain: 1, topic: "Deepfake executive impersonation on a video call: typology and SAR key terms (FIN-2024-Alert004)", hy: true, difficulty: "hard",
    q: "On 3 March 2026 Ilse Varga, controller of Halvorsen Marine Supplies, a corporate customer of Brightwater Bank, joins a video call with what appear to be her company's CFO and its outside lawyer. Both look and sound exactly like the real people. They tell her a confidential acquisition must close today and instruct her to send $1.85 million to a newly created beneficiary in Hong Kong. Ilse releases the wire herself through the company's online banking, using her usual device and token. The next morning the real CFO says he was on a flight and never held the call. Halvorsen has banked with Brightwater for 12 years and recently changed its payroll provider. Which option BEST describes the activity and how Brightwater's SAR should flag it?",
    options: [
      "Executive impersonation using deepfake media in a BEC-type scheme; use FIN-2024-DEEPFAKEFRAUD in field 2 and the narrative, plus the key term for the underlying BEC typology",
      "Account takeover, because criminals controlled the payment; describe it as account takeover and leave out the deepfake key term, since no identity document was faked",
      "Authorized push payment fraud outside FinCEN's deepfake alert, because that alert covers only synthetic identity documents used to open accounts",
      "Business email compromise only; use the BEC key term alone, because FinCEN asks filers to pick a single advisory key term for each SAR"
    ],
    answer: [0],
    explanation: "FinCEN's November 2024 deepfake alert says criminals use GenAI tools to impersonate an executive or other trusted employee and instruct victims to transfer large sums, in support of schemes such as business email compromise. It asks filers to put 'FIN-2024-DEEPFAKEFRAUD' in SAR field 2 and the narrative, and also to include any key terms for the underlying typology. Account takeover is the runner-up, but Ilse released the wire herself with her own credentials and device, so no account was taken over. The alert is not limited to onboarding documents, and the payroll change is a decoy.",
    source: [
      { label: "FinCEN Alert FIN-2024-Alert004 (Nov 13, 2024) – Fraud schemes involving deepfake media", url: "https://www.fincen.gov/sites/default/files/shared/FinCEN-Alert-DeepFakes-Alert508FINAL.pdf" }
    ]
  },
  {
    id: "CYBR-002", domain: 1, topic: "Data breach with no transactions: when a cyber-event SAR is mandatory (FIN-2016-A005)", hy: true, difficulty: "hard",
    q: "Prairie Gate Credit Union finds that intruders spent nine days inside its online-banking environment before being locked out. Forensic work shows they copied usernames, passwords and security-question answers for 2,300 members, together with account numbers and balances. No unauthorized transactions have been seen in the ten days since. The credit union has reset all credentials, its IT vendor has patched the flaw, and it has notified its regulator. The BSA officer asks whether a SAR is needed. What is the BEST answer under FinCEN's 2016 cyber-events advisory?",
    options: [
      "No SAR is required, because no transaction was conducted or attempted, although FinCEN would welcome a voluntary filing",
      "A SAR is required, because the credit union can reasonably suspect the event targeted information to conduct or facilitate transactions of $5,000 or more",
      "A SAR is required only if unauthorized transactions appear within 30 days after the credit union detected the intrusion",
      "No SAR is needed, because notifying the regulator about the incident already satisfies the credit union's BSA reporting duty"
    ],
    answer: [1],
    explanation: "FinCEN's advisory FIN-2016-A005 treats a cyber-event intended to conduct, facilitate or affect transactions as an attempted suspicious transaction. Its Example 2 is a breach exposing credentials, account numbers and challenge answers: the institution should file a SAR even though no transaction occurred, and it measures the amount by the funds and assets put at risk. Voluntary filing is the runner-up, but it applies to events that could not have affected transactions, such as a DDoS attack that only disrupts a website. The advisory also says a SAR does not replace other notification duties, nor do those duties replace the SAR.",
    source: [
      { label: "FinCEN Advisory FIN-2016-A005 (Oct 25, 2016) – Cyber-events and cyber-enabled crime", url: "https://www.fincen.gov/sites/default/files/advisory/2016-10-25/Cyber%20Threats%20Advisory%20-%20FINAL%20508_2.pdf" }
    ]
  },
  {
    id: "CYBR-003", domain: 1, topic: "Crypto investment scams switching to cash couriers (FBI PSA, June 2026)", hy: false, difficulty: "medium",
    q: "In June 2026 Walter Brandt, 71, asks his bank for $90,000 in cash. Two weeks earlier the bank declined his wire to an overseas 'trading platform' that he joined after a stranger texted him by mistake and became a friend. Walter says the platform told him his account was 'flagged', so a courier will now collect cash at his home. He will recognise the courier because she will show him a dollar bill whose serial number the platform sent him. His platform account shows large profits, but he must first pay 'taxes' to withdraw them. He also mentions he recently refinanced his house at a lower rate. What is the MOST likely situation?",
    options: [
      "A legitimate offshore broker using a cash collection service because of currency controls",
      "A grandparent scam, because a courier is collecting cash from an older customer at home",
      "A crypto investment scam that switched to cash couriers after the bank blocked the wire",
      "Money mule recruitment, because Walter is being asked to hand cash to a go-between"
    ],
    answer: [2],
    explanation: "The FBI's June 2026 PSA describes crypto investment scammers who, because banks may deny suspicious transfers, tell victims that in-person cash pickups are needed or that their account has been 'flagged'. The courier proves her link to the scammer with a dollar bill serial number or password, and victims who try to withdraw 'profits' are pushed to pay taxes and penalties. A grandparent scam is the runner-up because couriers are used in many scams, but the wrong-number contact, fake platform and fake profits point to an investment scam. The refinancing is a decoy.",
    source: [
      { label: "FBI IC3 PSA I-061526-PSA (June 15, 2026) – Couriers collecting cash in crypto investment scams", url: "https://www.ic3.gov/PSA/2026/PSA260615" }
    ]
  },
  {
    id: "CYBR-004", domain: 1, topic: "Payroll diversion through a fake search advert: account takeover vs BEC (FBI PSA, April 2025)", hy: false, difficulty: "hard",
    q: "Nadia Osei, a nurse at Marlow Health, searches online for her employer's employee self-service portal, clicks the top result, which is a sponsored advert, and logs in. Later that morning a caller claiming to be from her bank's fraud team asks her to read out a one-time passcode 'to secure her account'. Within hours her inbox fills with more than 3,000 newsletter sign-up emails. Her next salary of $4,200 is paid to a newly opened neobank account in another state. Marlow's HR team received no email or request about her bank details; the change was made inside the portal under her own login. Which explanation BEST fits the facts?",
    options: [
      "Payroll diversion through business email compromise, in which a fraudster emailed HR while pretending to be the employee",
      "Account takeover through a fake search-engine advert, with the flood of emails used to hide alerts about the change",
      "A data breach at Marlow Health, in which hackers changed payroll records directly in the HR database without logging in",
      "A SIM swap, in which criminals took over her mobile number so that they could receive the portal's passcodes"
    ],
    answer: [1],
    explanation: "The FBI's April 2025 PSA describes criminals who buy search-engine adverts imitating employee self-service sites, capture credentials on a look-alike page, obtain one-time passcodes by posing as bank staff, and change direct deposit details to redirect pay. It notes that a burst of thousands of spam emails is a sign of compromise, used to bury the genuine notification. Payroll-diversion BEC is the runner-up, but it relies on an email to HR, and here HR got no request and the change was made under Nadia's login. She read the passcode out herself and never lost phone service, so this was not a SIM swap.",
    source: [
      { label: "FBI IC3 PSA I-042425-PSA (Apr 24, 2025) – Impersonation of employee self-service websites", url: "https://www.ic3.gov/PSA/2025/PSA250424" }
    ]
  },
  {
    id: "CYBR-005", domain: 1, topic: "SIM swap account takeover and SMS one-time passcodes (FBI PSA I-020822-PSA)", hy: true, difficulty: "hard",
    q: "At 01:40 on a Sunday, Owen Pryce's phone suddenly shows 'No service'. At 02:05 someone uses the 'forgot password' function of his bank's app, receives the one-time passcode by text message, resets the password, adds a new payee and sends $48,000 to a cryptocurrency exchange. The login came from a device the bank has never seen. Owen often posts about his cryptocurrency gains on social media, and last month he used public Wi-Fi at an airport. A check of his phone on Monday finds no malware. Which typology is MOST likely, and which control would BEST have reduced the risk?",
    options: [
      "Banking trojan malware; antivirus software on the customer's phone",
      "Credential stuffing; stronger password complexity rules for online banking",
      "Interception on public Wi-Fi; a mandatory VPN for all mobile banking sessions",
      "SIM swap account takeover; an authenticator app or security key instead of SMS codes"
    ],
    answer: [3],
    explanation: "The FBI's 2022 PSA explains that after a SIM swap the victim's calls and texts go to the criminal's device, who then uses 'forgot password' requests and SMS one-time passcodes to reset passwords and take over accounts. Sudden loss of service is the tell. The FBI recommends stronger MFA such as biometrics, physical security tokens or standalone authenticator apps, and warns people not to advertise crypto holdings online. Password rules are the runner-up, but the attacker reset the password using the SMS code, so its strength did not matter. The clean phone rules out malware, and the airport Wi-Fi is a decoy.",
    source: [
      { label: "FBI IC3 PSA I-020822-PSA (Feb 8, 2022) – SIM swap schemes", url: "https://www.ic3.gov/PSA/2022/PSA220208" }
    ]
  },
  {
    id: "CYBR-006", domain: 1, topic: "Phishing-as-a-service: device-code token theft that bypasses MFA (FBI PSA, May 2026)", hy: false, difficulty: "medium",
    q: "Priya Nair, finance manager of a corporate customer, receives an email that looks like a document-sharing notice. It asks her to go to the genuine Microsoft sign-in page and enter a short code, which she does. Days later, fake payment instructions are sent to suppliers from her mailbox, although the company enforces multi-factor authentication and she never typed her password on an unusual site. Based on the FBI's May 2026 warning about the Kali365 phishing kit, what MOST likely happened?",
    options: [
      "The attacker obtained OAuth access tokens through device-code authorization, giving mailbox access without her password or a new MFA prompt",
      "The attacker installed a keylogger that recorded her password and MFA codes when she visited the Microsoft page",
      "The attacker swapped her SIM card so that the MFA codes sent to her phone were delivered to the attacker instead",
      "The genuine Microsoft page had been compromised and passed her stored password to the attacker's server"
    ],
    answer: [0],
    explanation: "The FBI's May 2026 PSA describes Kali365, a phishing-as-a-service kit sold on Telegram. Its lure tells the target to enter a device code on the real Microsoft page, which unknowingly authorizes the attacker's device. The attacker then captures OAuth access and refresh tokens and can use Outlook, Teams and OneDrive without a password or further MFA challenges. The FBI recommends blocking device code flow through conditional access policies. A keylogger or SIM swap would still need her password or codes, and nothing suggests the genuine page was compromised.",
    source: [
      { label: "FBI IC3 PSA I-052126-PSA (May 21, 2026) – Kali365 phishing-as-a-service kit", url: "https://www.ic3.gov/PSA/2026/PSA260521" }
    ]
  },
  {
    id: "CYBR-007", domain: 1, topic: "Scam center laundering: an exchange customer acting as an OTC broker or P2P exchanger (FIN-2026-Alert005)", hy: true, difficulty: "hard", changed: "FinCEN scam center alert FIN-2026-Alert005, Sept 2026",
    q: "Northmark Digital, a US-registered virtual asset exchange, reviews Leung Wai-ming, who opened a retail account in 2025 describing himself as a 'part-time trader'. His monthly volume is now $38 million. He buys USDT for fiat from hundreds of unrelated counterparties and almost at once sells similar amounts to others through the exchange's order book, so his net position stays near zero. Many of his USDT deposits come from addresses that had just moved funds from Ethereum to Tron through a DeFi protocol. He files his taxes on time and recently upgraded to a premium account tier. What does this pattern MOST likely indicate?",
    options: [
      "High-frequency arbitrage trading that is unusual for a retail customer but has a lawful purpose",
      "Wash trading meant to inflate the exchange's reported volume and the market price of USDT",
      "Operation as an unregistered OTC broker or P2P exchanger, likely helping to launder scam proceeds",
      "A pig butchering victim whom a romance scammer is coaching to buy and sell stablecoins"
    ],
    answer: [2],
    explanation: "FinCEN's September 2026 scam center alert lists as a red flag an exchange customer who uses the exchange's liquidity to execute large numbers of offsetting transactions consistent with operating as an OTC broker or P2P exchanger. It explains that launderers swap scam USDT from Ethereum to Tron through DeFi protocols and cash out through underground P2P and OTC services with weak KYC. Arbitrage is the runner-up, but it does not explain hundreds of unrelated fiat counterparties or deposits fresh from cross-chain laundering. Wash trading means trading with oneself, and a coached victim would send funds out rather than run a balanced book.",
    source: [
      { label: "FinCEN Alert FIN-2026-Alert005 (Sept 3, 2026) – Money laundering by digital asset investment scam centers", url: "https://www.fincen.gov/system/files/2026-08/FinCEN-Alert-Scam-Centers.pdf" }
    ]
  },
  {
    id: "CYBR-008", domain: 1, topic: "Scam center red flags: victim payments, guarantee marketplaces and laundering (FIN-2026-Alert005)", hy: false, difficulty: "medium", changed: "FinCEN scam center alert FIN-2026-Alert005, Sept 2026",
    q: "A US bank's investigations team is updating its scenario library after FinCEN's September 2026 alert on digital asset investment scam centers. Which of the following are red flags listed in that alert? (Choose three.)",
    options: [
      "A customer holds her digital assets in a hardware wallet rather than at an exchange",
      "A customer withdraws money from a retirement account to buy gold and says a courier will collect it",
      "A customer makes substantial transactions in a stablecoin whose issuer advertises it cannot be frozen or seized",
      "A customer buys digital assets at a US-registered exchange by ACH from her own bank account",
      "A payment provider linked to a guarantee marketplace changes its name and branding after a takedown"
    ],
    answer: [1, 2, 4],
    explanation: "FinCEN's September 2026 alert lists, among others: withdrawing funds from an investment or retirement account to buy gold that is to be handed to a courier; substantial transactions in a stablecoin whose issuer advertises that it does not cooperate with law enforcement or cannot be seized or frozen (Huione's USDH was marketed as 'unfreezable'); and a payment provider that rebrands to mask its link to a guarantee marketplace hit by enforcement, takedowns or negative news. Using a hardware wallet or funding a US-registered exchange from one's own bank account are ordinary activities, not listed red flags.",
    source: [
      { label: "FinCEN Alert FIN-2026-Alert005 (Sept 3, 2026) – Red flag indicators", url: "https://www.fincen.gov/system/files/2026-08/FinCEN-Alert-Scam-Centers.pdf" }
    ]
  },
  {
    id: "CYBR-009", domain: 1, topic: "Laundering scam proceeds through crypto mining (Prince Group lesson, DOJ Oct 2025)", hy: false, difficulty: "hard",
    q: "Arden Bank's corporate client Vantlay Compute Ltd says it runs a bitcoin mining farm in Laos. Its account receives large 'capital contributions' from four BVI holding companies that share one Singapore address, and its electricity and equipment bills are paid directly by unrelated third parties in Cambodia. Each month Vantlay sells newly mined bitcoin through an OTC desk and sends the proceeds to hotel and real estate projects in the region. The CFO stresses that 'freshly mined coins have no history, so they are perfectly clean'. Vantlay's auditor is a mid-sized local firm. Which laundering technique does this MOST likely show?",
    options: [
      "Chain-hopping, in which value moves rapidly across blockchains to break the audit trail",
      "Paying mining costs with criminal funds so that the money re-emerges as newly mined coins with no history",
      "Cryptojacking, in which criminals secretly use victims' computers to mine virtual assets for them",
      "A Ponzi scheme, in which new investors' contributions are paid out as mining returns to earlier investors"
    ],
    answer: [1],
    explanation: "In October 2025 the DOJ charged Prince Group's chairman with running forced-labor scam compounds and said proceeds were laundered through the group's ostensibly legal businesses, including online gambling and crypto mining. He boasted that mining profit was 'considerable because there is no cost', since its operating capital was money stolen from victims; Treasury also designated the group's Laos-based mining company. Paying costs with dirty money produces 'clean' new coins. Chain-hopping is the runner-up, but no cross-chain movement is described, and nothing suggests cryptojacking or investor payouts.",
    source: [
      { label: "DOJ press release (Oct 14, 2025) – Prince Group chairman indicted; 127,271 BTC forfeiture action", url: "https://www.justice.gov/opa/pr/chairman-prince-group-indicted-operating-cambodian-forced-labor-scam-compounds-engaged" },
      { label: "Treasury press release sb0278 (Oct 14, 2025) – US and UK action against Prince Group TCO", url: "https://home.treasury.gov/news/press-releases/sb0278" }
    ]
  },
  {
    id: "CYBR-010", domain: 1, topic: "Cash-for-crypto swap networks serving drug gangs and ransomware actors (NCA Operation Destabilise)", hy: false, difficulty: "hard",
    q: "A UK bank links 40 cash deposits of £8,000 to £9,500 each, made over four months by three young men at branches across England and Scotland, into the accounts of small 'trading' companies. Within an hour of each deposit, an exchange account controlled by one company's director sends the same value in USDT to wallets abroad. Open-source research ties some receiving wallets to a drug supplier and others to addresses that previously received ransomware payments. None of the companies has staff, premises or suppliers. One director also owns a car wash. Which typology does this MOST closely match?",
    options: [
      "A cash-for-crypto swap network that lets criminals move value across borders without moving the cash",
      "Cuckoo smurfing, in which criminal cash is paid into accounts of people expecting genuine remittances",
      "A crypto ATM scam, in which victims deposit cash because they are told their savings are at risk",
      "Structuring through funnel accounts to stay below the UK's currency transaction reporting threshold"
    ],
    answer: [0],
    explanation: "The NCA's Operation Destabilise (December 2024) exposed the Russian-speaking Smart and TGR networks, which collected cash in one country and made the same value available in another in cryptocurrency: UK cash handovers were followed almost at once by crypto transfers of equal value. Their clients included drug gangs and ransomware actors such as Ryuk; the operation led to 84 arrests and over £20 million seized. Cuckoo smurfing is the runner-up, but it uses accounts of legitimate recipients expecting real remittances, whereas these are shell companies run by the network. The UK has no currency transaction report threshold, so the last option is wrong.",
    source: [
      { label: "NCA news (Dec 4, 2024) – Operation Destabilise: Russian money laundering networks", url: "https://nationalcrimeagency.gov.uk/news/operation-destabilise-nca-disrupts-multi-billion-russian-money-laundering-networks-with-links-to-drugs-ransomware-and-espionage-resulting-in-84-arrests" }
    ]
  },
  {
    id: "CYBR-011", domain: 1, topic: "Ransomware trends in BSA data, 2022-2024 (FinCEN Financial Trend Analysis, Dec 2025)", hy: false, difficulty: "medium",
    q: "FinCEN's December 2025 Financial Trend Analysis reviewed ransomware incidents reported in BSA data from 2022 to 2024. Which findings does it report? (Choose two.)",
    options: [
      "Bitcoin accounted for about 97 percent of reported ransomware-related transactions",
      "Monero overtook bitcoin as the most requested ransom currency during 2024",
      "Most ransom payments were collected in hosted exchange accounts, not unhosted wallets",
      "Where the method was reported, TOR was the most common way attackers contacted targets",
      "The median single ransom payment was above $1 million in each year of the review"
    ],
    answer: [0, 3],
    explanation: "FinCEN's 2025 analysis found that bitcoin made up 97 percent of reported ransomware transactions and Monero about two percent, and that TOR was used in 67 percent of reports that named a communication method. It also found that attackers overwhelmingly collected payments in unhosted wallets before using exchanges to launder them, and that median payments were $124,097 (2022), $175,000 (2023) and $155,257 (2024). Reported payments peaked at about $1.1 billion in 2023 and fell to about $734 million in 2024 after the ALPHV/BlackCat and LockBit disruptions.",
    source: [
      { label: "FinCEN Financial Trend Analysis (Dec 2025) – Ransomware trends in BSA data, 2022-2024", url: "https://www.fincen.gov/system/files/2025-12/FTA-Ransomware.pdf" }
    ]
  },
  {
    id: "CYBR-012", domain: 1, topic: "FBI IC3 2025 Internet Crime Report: largest loss categories", hy: true, difficulty: "medium",
    q: "The FBI's 2025 Internet Crime Report recorded about $20.9 billion in reported losses. Which complaint category accounted for the LARGEST reported losses?",
    options: [
      "Phishing and spoofing",
      "Business email compromise",
      "Investment fraud",
      "Ransomware"
    ],
    answer: [2],
    explanation: "The IC3's 2025 report shows investment fraud with about $8.6 billion in losses, followed by business email compromise (about $3.0 billion) and tech support scams (about $2.1 billion); crypto investment fraud alone caused $7.2 billion. Phishing and spoofing drew the most complaints (191,561) but only about $216 million in losses. Ransomware showed about $32 million, a figure the FBI says is artificially low because it excludes lost business and many victims report no loss amount.",
    source: [
      { label: "FBI IC3 2025 Internet Crime Report", url: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf" }
    ]
  },
  {
    id: "CYBR-013", domain: 1, topic: "Mailed extortion letters impersonating a ransomware group (FBI PSA, March 2025)", hy: false, difficulty: "hard",
    q: "The CEO of Corbett Logistics, a customer of Granite Federal Bank, receives a paper letter stamped 'Time Sensitive Read Immediately'. It claims a well-known ransomware group has stolen thousands of the company's files and will publish them unless $350,000 in bitcoin is paid to a QR-code address within ten days, with no negotiation. Corbett's IT team and its incident-response firm find no sign of intrusion, encryption or data exfiltration. The CFO asks the bank to help buy bitcoin 'just in case'. Corbett also recently opened a branch in Mexico. What is the MOST likely situation?",
    options: [
      "A genuine data-extortion attack, which Corbett may pay once it obtains a licence from OFAC",
      "An insider threat, because only an employee could know the CEO's postal address",
      "A mailed extortion scam that impersonates a ransomware group to scare the company into paying",
      "A business email compromise attempt that will be followed by fake invoices from a spoofed supplier"
    ],
    answer: [2],
    explanation: "The FBI's March 2025 PSA warned of letters mailed to executives claiming to come from the BianLian ransomware group and demanding $250,000 to $500,000 in bitcoin through a QR code within ten days. The FBI assessed them as a scam and found no link to the real group. It advised checking that network defenses are current with no active alerts and reporting to the FBI or IC3. A genuine attack is the runner-up, but forensic work found no intrusion, and OFAC reviews ransomware licence requests with a presumption of denial. The Mexico branch is a decoy.",
    source: [
      { label: "FBI IC3 PSA I-030625b-PSA (Mar 6, 2025) – Mail scam claiming ties to ransomware", url: "https://www.ic3.gov/PSA/2025/PSA250306-2" },
      { label: "OFAC Updated Advisory on Ransomware Payments (Sept 21, 2021)", url: "https://ofac.treasury.gov/media/912981/download?inline" }
    ]
  },
  {
    id: "CYBR-014", domain: 1, topic: "Bulletproof hosting providers that support ransomware (Zservers designation, Feb 2025)", hy: false, difficulty: "medium",
    q: "Tallis Pay, a US payments fintech, onboards Kovalenko Web Services LLC, a small US web-hosting reseller. Within weeks the customer starts sending monthly crypto payments to a Russia-based hosting provider that advertises on cybercriminal forums that it ignores abuse complaints and resists takedowns. Blockchain analysis links the provider's address to a firm designated in February 2025 by the US, the UK and Australia for leasing infrastructure to LockBit ransomware affiliates. What is the MOST significant risk?",
    options: [
      "Price volatility, because the customer pays its hosting bills in a volatile virtual asset",
      "Tax evasion, because payments to a foreign supplier may avoid US withholding tax",
      "Data privacy breaches, because its clients' websites may be hosted outside the US",
      "Payments to a sanctioned bulletproof hosting provider that supports ransomware attacks"
    ],
    answer: [3],
    explanation: "On 11 February 2025 OFAC, Australia and the UK jointly designated Zservers, a Russia-based bulletproof hosting (BPH) provider, for supporting LockBit attacks. Treasury explained that BPH providers sell access to servers and infrastructure designed to evade detection and defy law enforcement, and that Zservers leased IP addresses to LockBit affiliates. US persons may not deal with blocked persons, so these payments create a sanctions violation and suggest the customer may be supporting cybercrime. The other risks are minor by comparison.",
    source: [
      { label: "Treasury press release sb0018 (Feb 11, 2025) – Zservers bulletproof hosting designation", url: "https://home.treasury.gov/news/press-releases/sb0018" }
    ]
  },
  {
    id: "CYBR-015", domain: 1, topic: "Virtual kidnapping with altered proof-of-life media (FBI PSA, Dec 2025)", hy: false, difficulty: "medium",
    q: "Rosa Delgado rushes into her bank branch and asks to wire $25,000 at once to an account in Mexico. She received a text saying her daughter, who is backpacking in Central America, has been kidnapped, with a photo of her daughter tied to a chair. The photo was sent with a timed feature and disappeared after 30 seconds, but Rosa noticed that her daughter's arm tattoo was missing from it. She has not tried to call her daughter because the kidnappers told her not to. Rosa has banked there for 20 years and has a healthy balance. What should the branch staff do FIRST?",
    options: [
      "Process the wire quickly, because any delay could put the daughter in danger",
      "Encourage Rosa to try to reach her daughter directly before paying, and escalate it as a possible virtual kidnapping",
      "Refuse the wire and close the account, because paying any ransom is illegal",
      "File a SAR and then process the wire, since the bank cannot judge whether the kidnapping is real"
    ],
    answer: [1],
    explanation: "The FBI's December 2025 PSA warns of virtual kidnapping scams that use altered photos as 'proof of life'. Close inspection often reveals errors such as missing tattoos or scars, and criminals use timed messages to limit scrutiny. Its key tip is to always try to contact the loved one before considering any ransom, and to report to IC3. Processing the wire ignores clear red flags, closing the account punishes the victim, and a SAR does not make it right to send money that is probably going to fraudsters.",
    source: [
      { label: "FBI IC3 PSA I-120525-PSA (Dec 5, 2025) – Altered proof-of-life media in virtual kidnapping scams", url: "https://www.ic3.gov/PSA/2025/PSA251205" }
    ]
  },
  {
    id: "CYBR-016", domain: 1, topic: "North Korean IT workers turning to data extortion (FBI PSA, Jan 2025)", hy: false, difficulty: "hard",
    q: "Brightloom Software, a customer of Cedar Bank, fires a remote developer after its security team finds that he logged into his account from IP addresses in three countries within an hour and copied the company's code repositories to a personal cloud account. Two days later Brightloom receives an email demanding $500,000 in USDT and threatening to publish the source code. Soon after onboarding, the developer had switched his pay from a bank account to a payment platform, and his video interview showed odd delays between his lips and his voice. Brightloom recently hired three more developers through the same staffing agency. What is the MOST likely situation?",
    options: [
      "A disgruntled former employee committing ordinary data theft, which is mainly a civil employment matter",
      "A ransomware attack, because the attacker is demanding cryptocurrency in exchange for not releasing data",
      "A synthetic identity bust-out, in which the developer built trust before maximising stolen salary payments",
      "A North Korean IT worker who, once discovered, turned to extortion using the company's stolen code"
    ],
    answer: [3],
    explanation: "The FBI's January 2025 PSA warns that North Korean IT workers, once discovered, have extorted companies by holding stolen code hostage, after copying repositories to personal cloud accounts. Its indicators include multiple logins from IPs in different countries within a short time, face-swapping during video interviews, and changes of address or payment platform during onboarding. Paying would also raise serious sanctions risk. Ransomware is the runner-up, but no malware encrypted anything; this is data extortion by a placed worker. The other hires from the same agency deserve review.",
    source: [
      { label: "FBI IC3 PSA I-012325-PSA (Jan 23, 2025) – North Korean IT workers conducting data extortion", url: "https://www.ic3.gov/PSA/2025/PSA250123" }
    ]
  },
  {
    id: "CYBR-017", domain: 1, topic: "Scam proceeds: first-hop jurisdiction vs ultimate destination (FIN-2026-Alert005)", hy: false, difficulty: "hard", changed: "FinCEN scam center alert FIN-2026-Alert005, Sept 2026",
    q: "An analyst at Keystone Bank is reviewing six customers who were persuaded by online 'investment mentors' to send ACH transfers totalling $410,000. The first-hop receiving accounts are at banks in Mexico, Germany and the UAE. All six victims were first contacted by 'wrong number' texts, were shown fake profits on a polished trading app, and were later asked to pay 'taxes' before they could withdraw. One victim also visited Germany last year. The analyst's draft concludes that, because no first-hop account is in Asia, a Southeast Asian scam center can be ruled out. What is the BEST assessment of that conclusion?",
    options: [
      "It is sound, because the country of the first receiving account normally shows where a scam is run",
      "It is sound for the German transfers only, because EU banks would have rejected scam-center funds",
      "It is weak, because the victim's trip to Germany suggests a personal link rather than a scam",
      "It is weak, because scam funds pass through many hops, so the first receiving country need not be the final one"
    ],
    answer: [3],
    explanation: "FinCEN's September 2026 alert says data from its Rapid Response Program show that accounts receiving cyber-scam proceeds are spread across many foreign jurisdictions, and that because proceeds are laundered through multiple transactions, the jurisdiction of the first transactions does not necessarily match the final destination. Its figures show first-hop ACH funds going to the Americas, Europe and the Middle East as well as Asia-Pacific. The wrong-number contact, fake profits and 'tax' demands match the scam center pattern. The trip to Germany is a decoy.",
    source: [
      { label: "FinCEN Alert FIN-2026-Alert005 (Sept 3, 2026) – How scam center operators launder proceeds", url: "https://www.fincen.gov/system/files/2026-08/FinCEN-Alert-Scam-Centers.pdf" }
    ]
  },
  {
    id: "CYBR-018", domain: 1, topic: "Ramp-and-dump stock manipulation through online investment clubs (FBI PSA, July 2025)", hy: false, difficulty: "hard",
    q: "Crestline Securities notices that 37 retail accounts, most opened in the past two months, all bought the same low-priced Nasdaq-listed stock of a newly listed overseas company over six weeks. Several customers say they joined an 'investment club' on a messaging app after an 'accidental' text, where a famous analyst shares 'exclusive' tips and promises to cover any losses. Two new account holders say a club 'assistant' paid them $300 each to open an account and share the login. The stock rose 600 percent on no news, then collapsed in one day as large blocks were sold through other brokers. The issuer's auditor is a small firm. Which scheme is MOST likely?",
    options: [
      "A ramp-and-dump manipulation, using investment clubs and controlled accounts to push up the price before insiders sell",
      "Insider trading by company executives who knew in advance about a product approval that was about to be announced",
      "A pig butchering scam, in which the club members are being moved onto a fake crypto trading platform",
      "Spoofing, in which traders place large orders they intend to cancel so as to move the stock's price"
    ],
    answer: [0],
    explanation: "The FBI's July 2025 PSA describes 'ramp-and-dump' schemes: criminals secretly control a large volume of a low-priced stock, use investment clubs reached through 'accidental' texts or adverts to get members buying over weeks or months, then sell at the inflated price. Red flags include claims from famous analysts, promises to cover losses, and offers of money to open or share an account that someone else will use for manipulation. Pig butchering is the runner-up because the social engineering is similar, but these victims buy a real listed stock in their own brokerage accounts. No news or cancelled orders point to insider trading or spoofing.",
    source: [
      { label: "FBI IC3 PSA I-070325-PSA (July 3, 2025) – Investment clubs and ramp-and-dump stock fraud", url: "https://www.ic3.gov/PSA/2025/PSA250703" }
    ]
  },
  {
    id: "CYBR-019", domain: 4, topic: "SAR reporting of DDoS attacks: mandatory vs voluntary (FIN-2016-A005)", hy: true, difficulty: "hard",
    q: "Swiftline Remit, a US money transmitter, suffers a two-hour DDoS attack on its website. While its security staff are dealing with the attack, an unauthorized $2,000 transfer is sent from a customer's account to a new recipient abroad. A month later a second DDoS attack takes the website offline for a full day, but investigation shows it could not have affected any transactions. Under FinCEN's 2016 cyber-events advisory, which statements are correct? (Choose two.)",
    options: [
      "Swiftline should file one SAR that reports both the unauthorized $2,000 transfer and the DDoS attack used to conceal it",
      "The first incident is below the SAR threshold, because the $5,000 threshold applies to every type of financial institution",
      "FinCEN encourages, but does not require, a SAR on the second DDoS attack, because it was particularly damaging",
      "Swiftline must file a SAR on the second attack, because every cyber-event counts as an attempted suspicious transaction",
      "Swiftline should file two separate SARs on the first incident, one for the fraud and one for the cyber-event"
    ],
    answer: [0, 2],
    explanation: "Example 3 in FinCEN's advisory FIN-2016-A005 is an MSB whose staff were distracted by a DDoS attack while an unauthorized $2,000 wire went out: it should file a single SAR covering both the transfer and the attack used to conceal it. The MSB SAR threshold is generally $2,000, not $5,000. For a DDoS attack that disrupts services but could not affect transactions, FinCEN encourages but does not require a SAR. Only cyber-events intended to conduct, facilitate or affect transactions are treated as attempted suspicious transactions.",
    source: [
      { label: "FinCEN Advisory FIN-2016-A005 (Oct 25, 2016) – Mandatory and voluntary reporting of cyber-events", url: "https://www.fincen.gov/sites/default/files/advisory/2016-10-25/Cyber%20Threats%20Advisory%20-%20FINAL%20508_2.pdf" }
    ]
  },
  {
    id: "CYBR-020", domain: 4, topic: "Investigating account takeover through residential proxies: IP geolocation limits (FBI PSA, March 2026)", hy: false, difficulty: "hard",
    q: "A fraud analyst at Lakeshore Bank reviews a login to Margaret Ellison's online banking that was followed by a $19,500 transfer to a new payee. The session came from a residential broadband IP address in Margaret's home city, but from a device the bank has never seen, with a different browser, screen size and time zone setting from her usual phone. Margaret says she did not make the transfer, and her credentials appeared in a dark-web dump last month. A colleague argues the IP match shows it was probably Margaret or a relative. What is the BEST assessment?",
    options: [
      "Agree, because a residential IP address in the customer's own city is strong evidence of a genuine session",
      "Disagree, because criminals can rent residential proxy IPs in the victim's city, and the new device and leaked credentials point to takeover",
      "Disagree, because residential IP addresses cannot be geolocated reliably and so should be left out of the SAR",
      "Agree, unless the IP address appears on a sanctions list or on a list of known commercial VPN servers"
    ],
    answer: [1],
    explanation: "The FBI's March 2026 PSA explains that residential proxy networks route criminals' traffic through compromised or enrolled home devices, and that a criminal with leaked bank credentials can pick a residential IP in the victim's city so the bank is less likely to flag the login. An IP match is therefore weak evidence on its own, while a never-seen device and leaked credentials point to account takeover. FinCEN's 2016 advisory asks filers to include IP addresses with timestamps and device identifiers in SARs, so leaving the IP out is wrong.",
    source: [
      { label: "FBI IC3 PSA I-031226-PSA (Mar 12, 2026) – Residential proxy networks", url: "https://www.ic3.gov/PSA/2026/PSA260312" },
      { label: "FinCEN Advisory FIN-2016-A005 – Cyber-related information in SARs", url: "https://www.fincen.gov/sites/default/files/advisory/2016-10-25/Cyber%20Threats%20Advisory%20-%20FINAL%20508_2.pdf" }
    ]
  },
  {
    id: "CYBR-021", domain: 4, topic: "Tagging identity-related SARs: impersonation, circumvention, compromise (FinCEN identity FTA, Jan 2024)", hy: false, difficulty: "hard",
    q: "A bank's BSA team tags its identity-related SARs using the framework in FinCEN's January 2024 Financial Trend Analysis, which links three exploitations to three identity processes. Which tags are correct? (Choose two.)",
    options: [
      "A fraudster uses stolen credentials to log in to a real customer's account: circumvention, at verification",
      "A fraudster logs in to a real customer's account with phished credentials and an intercepted passcode: compromise, at authentication",
      "A fraudster opens an account using a stolen identity: compromise, at authentication",
      "An applicant opens an account in another person's name using that person's stolen details: impersonation, at validation",
      "An applicant exploits a weak selfie-matching step to tie a stolen ID to herself: impersonation, at authentication"
    ],
    answer: [1, 3],
    explanation: "FinCEN's identity FTA describes three exploitations: attackers impersonate others to evade validation, circumvent or exploit insufficient verification, and use compromised credentials to gain unauthorized access during authentication. A stolen-credential login is therefore compromise at authentication, and opening an account in a victim's name is impersonation at validation. Beating a weak matching step is circumvention at verification. FinCEN found that 69 percent of identity-related reports involved impersonation, but compromise had a disproportionately large monetary impact.",
    source: [
      { label: "FinCEN Financial Trend Analysis (Jan 2024) – Identity-related suspicious activity: 2021 threats and trends", url: "https://www.fincen.gov/system/files/shared/FTA_Identity_Final508.pdf" }
    ]
  },
  {
    id: "CYBR-022", domain: 4, topic: "Bank ransomware incident: 36-hour regulator notification vs SAR (12 CFR 53.3, date calculation)", hy: true, difficulty: "hard",
    q: "Harbor National Bank, an OCC-supervised national bank, detects ransomware on its servers at 08:00 on Monday. At 15:00 on Tuesday its incident team determines that the attack has materially disrupted online banking for most customers, making it a notification incident. The team also finds that a $90,000 wire was attempted using credentials stolen in the attack. By when must the OCC receive notice, and how does that relate to the SAR?",
    options: [
      "By 20:00 on Tuesday, 36 hours after detection; filing a SAR within that time satisfies the notice",
      "By 03:00 on Thursday, 36 hours after the determination; the SAR on the attempted wire is a separate duty",
      "By 15:00 on Wednesday, 24 hours after the determination; no SAR is needed because the wire failed",
      "Within 72 hours of detection; the OCC notice can be combined with the SAR in one filing to FinCEN"
    ],
    answer: [1],
    explanation: "Under 12 CFR 53.3, the OCC must receive notice as soon as possible and no later than 36 hours after the bank determines that a notification incident has occurred; 15:00 Tuesday plus 36 hours is 03:00 Thursday. The clock runs from the determination, not detection. FinCEN's 2016 cyber advisory says filing a SAR does not relieve an institution of other duties to notify regulators, and the attempted $90,000 wire is reportable even though it failed. Separately, bank service providers must notify their bank customers of incidents that disrupt covered services for four or more hours.",
    source: [
      { label: "12 CFR part 53 – Computer-security incident notification (eCFR)", url: "https://www.ecfr.gov/current/title-12/chapter-I/part-53" },
      { label: "FinCEN Advisory FIN-2016-A005 (Oct 25, 2016)", url: "https://www.fincen.gov/sites/default/files/advisory/2016-10-25/Cyber%20Threats%20Advisory%20-%20FINAL%20508_2.pdf" }
    ]
  },
  {
    id: "CYBR-023", domain: 4, topic: "Cumulative SARs for similar malware intrusions and CSV attachments (FIN-2016-A005)", hy: false, difficulty: "medium",
    q: "Over three weeks, Ridgeview Bank's security team blocks 37 malware intrusions into corporate clients' online banking sessions. All use the same malware family, exploit the same browser flaw and connect to the same command-and-control IP addresses, and each tried to send wires of more than $10,000. The BSA officer wants a filing approach that is efficient but complete. Which approach does FinCEN's 2016 cyber-events advisory support?",
    options: [
      "One cumulative SAR covering the similar intrusions, describing the cyber indicators in the narrative, with a CSV of event data if useful",
      "No SAR, because every intrusion was blocked and no funds left the bank or its corporate clients' accounts",
      "One SAR consisting of a CSV attachment that lists all the events, with the narrative left blank to avoid repetition",
      "Thirty-seven separate SARs, because FinCEN does not allow cyber-events affecting different customers to be combined"
    ],
    answer: [0],
    explanation: "FinCEN's advisory FIN-2016-A005 says institutions facing many similar cyber-events may report them in a single cumulative SAR, for example several malware intrusions sharing methodology, exploited vulnerability and IP addresses. They may attach a CSV file of cyber-event and transaction data, but the CSV is part of, not a substitute for, the narrative. The blocked wires are attempted transactions over $5,000, so a SAR is required; no loss is needed.",
    source: [
      { label: "FinCEN Advisory FIN-2016-A005 (Oct 25, 2016) – Reporting cyber-related information", url: "https://www.fincen.gov/sites/default/files/advisory/2016-10-25/Cyber%20Threats%20Advisory%20-%20FINAL%20508_2.pdf" }
    ]
  },
  {
    id: "CYBR-024", domain: 4, topic: "Recovering a fraudulent wire: IC3 Recovery Asset Team and second-hop transfers", hy: true, difficulty: "hard",
    q: "At 10:00 on Wednesday, Pemberton Tools tells its bank that a $310,000 wire sent at 16:00 on Tuesday, after a spoofed supplier email, went to a fraudster. Tracing shows the receiving US bank has already forwarded $200,000 by ACH to accounts at two other US banks, and it has shared those account details. Pemberton's CFO wants to wait until the internal investigation is finished before contacting law enforcement. What is the BEST course of action?",
    options: [
      "Wait for the internal investigation so that the IC3 complaint is accurate, then file a SAR within 30 days",
      "Ask the receiving bank to freeze the remaining $110,000 only, since the forwarded funds are now out of reach",
      "Request a recall now and file an IC3 complaint at once with full details, including the second-hop accounts, so freezes can go beyond the first bank",
      "File a SAR first, because the IC3 Recovery Asset Team acts only on cases that FinCEN refers to it"
    ],
    answer: [2],
    explanation: "The IC3's 2025 report explains that its Recovery Asset Team runs the Financial Fraud Kill Chain to help freeze funds, and that for domestic cases it will extend requests beyond the first recipient bank if 'second hop' details are supplied. It stresses that time is of the essence: contact the financial institution, request a recall, and file at ic3.gov with full transaction details whatever the amount. In 2025 the process froze about $679 million, a 58 percent success rate. Freezing only the remaining balance is the runner-up, but it gives up funds that may still be recoverable at the second-hop banks.",
    source: [
      { label: "FBI IC3 2025 Internet Crime Report – Recovery Asset Team and Financial Fraud Kill Chain", url: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf" }
    ]
  },
  {
    id: "CYBR-025", domain: 4, topic: "SAR content for scam center cases: key term, field 34(z) and cyber indicators (FIN-2026-Alert005)", hy: true, difficulty: "medium", changed: "FinCEN scam center alert FIN-2026-Alert005, Sept 2026",
    q: "Fernhill Credit Union is filing a SAR on a member who sent $64,000 to a fake trading platform that it believes is run from a Southeast Asian scam center. The member has screenshots of chats, the scammer's phone number and social media handle, the wallet addresses and transaction hashes, and the platform's web address. Which approach BEST follows FinCEN's September 2026 scam center alert?",
    options: [
      "Use only the 2023 pig butchering key term, since the scam center alert merely supplements that alert and asks for no key term of its own",
      "Describe the scam in the narrative but omit the scammer's phone number and social media handle, since they identify third parties",
      "Leave the cyber event indicator fields blank, because the member, not the credit union, was the target of the scam",
      "Use FIN-2026-SCAMCENTERS in field 2 and the narrative, select 'Fraud-Other' with 'Scam Centers', and add the chat, phone, wallet, hash and URL data as cyber indicators"
    ],
    answer: [3],
    explanation: "FinCEN's September 2026 alert asks filers to include the key term 'FIN-2026-SCAMCENTERS' in SAR field 2 and the narrative and to select 'Fraud-Other' in field 34(z) with 'Scam Centers' in the text box. It asks for technical cyber indicators in the structured cyber event fields or as an attachment, such as chat logs, phone numbers, social media usernames, wallet addresses, transaction hashes, and the URL, domain and IP address of the platform. Filers may add other alert key terms, but not instead of this one. FinCEN also encourages referring victims to IC3 or the Secret Service.",
    source: [
      { label: "FinCEN Alert FIN-2026-Alert005 (Sept 3, 2026) – SAR filing instructions", url: "https://www.fincen.gov/system/files/2026-08/FinCEN-Alert-Scam-Centers.pdf" }
    ]
  }
]);
