window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  { id: "GAME-001", domain: 1, topic: "Online poker: chip dumping on a shared network", hy: true, difficulty: "hard",
    q: "Halden Poker, a UK-licensed remote casino, shares a poker network with eight other operators. Its analyst reviews 'redkite77', an account opened three weeks ago by a 24-year-old who gives his job as warehouse picker. He has deposited £9,600 using six prepaid cards and plays only at high-stakes tables between 2 a.m. and 4 a.m. In 31 hands against 'oslo_fin', a long-standing player registered with another operator on the network, he went all-in with very weak hands or folded strong hands to large bets, losing £9,100 to that one opponent. Against all other players he plays only small pots. The next day 'oslo_fin' withdrew most of his winnings to an e-wallet. What is this pattern MOST likely to be?",
    options: [
      "Collusion in which two players share hole-card information to cheat the other players at the table",
      "Problem gambling by an inexperienced player who is chasing losses at stakes above his means",
      "Chip dumping, in which a player deliberately loses to a chosen opponent to move value through peer-to-peer play",
      "Bonus abuse, in which a player farms sign-up offers from several operators that share the same network"
    ],
    answer: [2],
    explanation: "The Gambling Commission's casino AML guidance says that in peer-to-peer games a launderer can transfer value by deliberately losing to the person who should receive the funds, and that poker played on networks shared by several operators can facilitate chip dumping. The FATF's 2026 gaming and gambling indicators also list consistent losses to one player in peer-to-peer settings and chip dumping. Collusion is the runner-up, but colluders cheat third parties and both profit; here the money flows from one account to one opponent, and other players are unaffected. Folding strong hands and losing only to one player does not fit loss-chasing or bonus abuse.",
    source: [
      { label: "Gambling Commission – AML guidance for remote and non-remote casinos (5th ed., rev. 5, Oct 2025), paras 2.23-2.25", url: "https://www.gamblingcommission.gov.uk/guidance/the-prevention-of-money-laundering-and-combating-the-financing-of-terrorism" },
      { label: "FATF (Sept 2026) – Risks of Gaming and Gambling: red-flag risk indicators", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/risks-of-gaming-and-gambling.html" }
    ] },

  { id: "GAME-002", domain: 1, topic: "Online betting: mule accounts monetising match-fixing", hy: true, difficulty: "hard",
    q: "Brackley Bet, an online sportsbook, reviews 14 accounts opened over two days in March 2026. The account holders' details match students at one university, and identity was verified before each first bet, as the operator's licence requires. Each account was opened through the operator's mobile app and funded through a different e-wallet. All 14 accounts log in from the same device and IP address, and each placed its first and only bet on the same handicap market of a third-tier basketball match abroad. Each staked its whole balance, several hid the main selection in accumulators with very short-odds legs, and all tried to cash out early before the match ended and withdraw. Which facts are the STRONGEST indicators that these are mule accounts used to monetise suspected match-fixing? (Choose two.)",
    options: [
      "All 14 accounts used one device and IP address and placed their first and only bet on the same obscure match",
      "Identity was verified before each customer was allowed to place a first bet with the operator",
      "Each account was opened through the operator's mobile app rather than through its desktop website",
      "Each account staked its whole deposit, disguised the main bet in short-odds accumulators and sought an early cash-out",
      "The bets were placed on a handicap market, which offers better odds than a simple match-winner market"
    ],
    answer: [0, 3],
    explanation: "The Gambling Commission's risk assessment for remote betting says mule accounts are used to monetise match-fixing and lists red flags: newly opened accounts with third-party payment set-ups, first and only bets on the fixture, using all the funds deposited, disguising the main bet in an accumulator with short-odds selections, and taking an early cash-out before settlement. Its case example describes many accounts linked to one device and IP address and apparently belonging to students. Verifying identity before the first bet is a licence requirement (LCCP 17.1.1), not a red flag. The app channel and the choice of a handicap market are ordinary features.",
    source: [
      { label: "Gambling Commission – ML/TF risks in the British gambling industry: Betting (Remote)", url: "https://www.gamblingcommission.gov.uk/guidance/The-money-laundering-and-terrorist-financing-risks-within-the-British-gambling-industry/betting-remote" },
      { label: "Gambling Commission – LCCP 17.1.1 Customer identity verification", url: "https://www.gamblingcommission.gov.uk/licensees-and-businesses/lccp/condition/17-1-1-customer-identity-verification" }
    ] },

  { id: "GAME-003", domain: 1, topic: "Casinos: criminal spend is money laundering", hy: true, difficulty: "hard",
    q: "Tom Varley, a payroll clerk at a building firm, has been a regular at Mayfair Lane Casino in London for two years. Staff read in a local newspaper that he has been charged with stealing about £180,000 from his employer over 18 months. Casino records show that he bought £150,000 of chips over that period and lost almost all of it. He never asked for a cheque or cashed out large sums, always paid in cash in amounts consistent with his visits, and was popular in the members' bar. The general manager says no money laundering occurred, because Varley simply lost the money and never tried to make it look legitimate. What is the BEST assessment?",
    options: [
      "The manager is right: without placement, layering or integration nothing was laundered, so this is only a fraud matter for the police",
      "Gambling with criminal property is laundering even if the money is simply lost, so staff should report internally for a SAR decision",
      "A report is needed only if Varley comes back, because the casino is not expected to report activity by customers who stopped visiting",
      "Only the cash buy-ins of £2,000 or more need to be reported, because smaller amounts fall outside the Money Laundering Regulations"
    ],
    answer: [1],
    changed: "UK casino CDD threshold in MLR reg 27(5) became £2,000 (previously €2,000) from 30 June 2026 (SI 2026/621)",
    explanation: "The Gambling Commission's guidance says the money laundering offence includes simple criminal spend, meaning the use of criminal proceeds to gamble for leisure or to fund an addiction, and that it may involve none of the typical laundering stages. The UK's 2025 National Risk Assessment (para 5.154) adds that recreational spending of criminal property is the most common form of laundering through licensed casinos. Staff should report to the nominated officer, who decides on a SAR to the NCA. The runner-up wrongly treats placement, layering and integration as required elements. The £2,000 threshold in regulation 27 of the MLRs triggers CDD, not reporting, and the reporting duty arises whenever knowledge or suspicion arises, whatever the amount.",
    source: [
      { label: "Gambling Commission – AML guidance for casinos (5th ed., rev. 5, Oct 2025), para 1.10 (criminal spend)", url: "https://www.gamblingcommission.gov.uk/guidance/the-prevention-of-money-laundering-and-combating-the-financing-of-terrorism" },
      { label: "HM Treasury/Home Office – UK National Risk Assessment of ML and TF 2025, para 5.154", url: "https://assets.publishing.service.gov.uk/media/6877be59760bf6cedaf5bd4f/National_Risk_Assessment_of_Money_Laundering_and_Terrorist_Financing_2025_FINAL.pdf" },
      { label: "Money Laundering Regulations 2017, reg 27(5)-(6) (casino CDD threshold, as amended)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/27" }
    ] },

  { id: "GAME-004", domain: 1, topic: "Casinos: proxy ('human head') gambling", hy: false, difficulty: "hard",
    q: "Pinewood Grand, a US casino, reviews play in its private salon. Over four visits, Lin Rao, a 26-year-old registered as a graduate student, bought $180,000 to $260,000 of chips per visit, funded by wires from a Hong Kong company. Each time an older man, Mr. Zhou, sat beside or behind her. Surveillance shows Zhou choosing the bets and Rao placing them, and Zhou leaving the salon with chips after she cashed out part of her stack. Zhou has no players' card and declined to show identification when a host offered him one. The salon manager points out that the casino filed CTRs in Rao's name and that she spends heavily at the hotel spa. What does this pattern MOST likely show?",
    options: [
      "A legitimate gift arrangement, since a patron may gamble with funds that a relative or friend gives her",
      "Chip walking, because chips are leaving the salon without being redeemed at the casino's cage",
      "Structuring, because the buy-ins are split across visits to keep each gaming day below the CTR threshold",
      "Proxy or 'human head' gambling, in which a nominee gambles for a hidden true patron who directs the play"
    ],
    answer: [3],
    explanation: "In September 2024 Wynn Las Vegas forfeited $130,131,645 under a non-prosecution agreement. Among other conduct, it allowed 'Human Head' gambling, where a proxy bought chips and gambled for a nearby person who was unable or unwilling to transact under his own identity and who directed the play, without scrutinising the source of funds or reporting the suspicious activity. Here Zhou directs the bets, takes the chips and refuses identification. Chip walking is the runner-up, but it is a side effect: the core problem is that the true patron is hidden. CTRs in Rao's name report the wrong person, and wire-funded buy-ins are not structured cash.",
    source: [
      { label: "DOJ (S.D. Cal.) press release, 6 Sept 2024 – Wynn Las Vegas forfeits $130 million", url: "https://www.justice.gov/usao-sdca/pr/wynn-las-vegas-forfeits-130-million-illegally-conspiring-unlicensed-money-transmitting" }
    ] },

  { id: "GAME-005", domain: 1, topic: "Betting shops: cash loading of online accounts", hy: false, difficulty: "hard",
    q: "Corran Bet runs 300 betting shops and an online site, and shop staff can load cash onto a customer's online account at the counter. Analyst Priya Nair reviews Dale Fenwick, a self-employed scaffolder. Over five weeks he loaded £46,000 in cash at 11 different shops, never more than £1,900 at a time and often minutes apart at neighbouring branches. Online he placed a few £10 bets on short-odds favourites, then withdrew £44,500 to a bank account he had added the week before. He has never missed a payment and has never self-excluded. Which typology does this MOST likely represent?",
    options: [
      "Using shop cash loading to place criminal cash in an online account, then withdrawing after minimal play so it looks like gambling funds",
      "Arbitrage betting, in which the customer locks in a small, certain profit by backing every outcome with different bookmakers",
      "Problem gambling, because frequent visits to many shops in a short period show that the customer is chasing his losses",
      "Refining, in which the customer swaps small-denomination notes for large ones at the counter to make cash easier to move"
    ],
    answer: [0],
    explanation: "The FATF's 2026 gaming and gambling indicators list cash loading of digital accounts (for example through a betting shop linked to a remote account with the same operator), numerous cash deposits within short time frames, short-odds bets used to justify withdrawals, and deposits followed by withdrawals with minimal play. The Gambling Commission's casino guidance likewise warns that customers may deposit criminal proceeds into an internet gambling account at a non-remote casino, and the same risk arises wherever shop counters accept cash for online accounts. Repeated loads minutes apart at neighbouring shops look designed to avoid attention. Refining is the runner-up, but no notes were exchanged and the money left by bank transfer; he withdrew almost everything, which does not fit loss-chasing.",
    source: [
      { label: "FATF (Sept 2026) – Risks of Gaming and Gambling: red-flag risk indicators (payment methods; betting patterns)", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/risks-of-gaming-and-gambling.html" },
      { label: "Gambling Commission – AML guidance for casinos (5th ed., rev. 5, Oct 2025), para 2.23", url:"https://www.gamblingcommission.gov.uk/guidance/the-prevention-of-money-laundering-and-combating-the-financing-of-terrorism" }
    ] },

  { id: "GAME-006", domain: 1, topic: "Junkets: pooled funds and hidden players", hy: true, difficulty: "hard",
    q: "Port Celesta Casino, in a fictional Asia-Pacific jurisdiction, contracts with Golden Reef Tours, a licensed junket operator. For a weekend tour, Golden Reef wires HKD 38 million of front money from its own corporate account and receives chips for 12 players in its own name. The casino copies the players' passports at the salon door, but all buy-ins, losses and winnings run through Golden Reef's account, and Golden Reef settles with the players privately after they go home. The casino's finance team notes that junket commission is calculated on rolling-chip turnover and that Golden Reef has always repaid its markers on time. According to the FATF, what is the MOST significant money laundering vulnerability in this arrangement?",
    options: [
      "Commission on rolling-chip turnover rewards the junket for high play volumes and may inflate the casino's credit exposure",
      "Copying passports at the salon door does not meet the casino customer due diligence threshold under the FATF Standards",
      "Pooling the players' money through the junket's account hides the source and ownership of each player's funds from the casino",
      "Foreign junket players are by definition politically exposed persons, so enhanced due diligence must apply to all of them"
    ],
    answer: [2],
    explanation: "The FATF/APG casino report (2009, para 153) explains that junket players rely on the operator to move their funds, which creates layers of obscurity around the source and ownership of the money and the players' identities; in one case (Case 24) all the money went through the operator's accounts, so the casino bypassed identifying the source and beneficial owner of the funds. The FATF's 2026 findings say junkets still pose risks from player anonymity and the obscured beneficial ownership of junket operators. Commission terms are the runner-up but are a commercial and credit issue. Identifying players does not reveal whose money is played, and foreign players are not automatically PEPs.",
    source: [
      { label: "FATF/APG (March 2009) – Vulnerabilities of Casinos and Gaming Sector, paras 150-155 and Case 24 (EAG-hosted copy)", url: "https://eurasiangroup.org/files/FATF_docs/Casinos_and_Gaming_Sector.pdf" },
      { label: "FATF (Sept 2026) – Risks of Gaming and Gambling, key findings", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/risks-of-gaming-and-gambling.html" }
    ] },

  { id: "GAME-007", domain: 1, topic: "Lotteries: buying winning tickets", hy: false, difficulty: "hard",
    q: "Lotteria Meridia, a state lottery operator, reviews prize claims. Since January 2025, Andrés Vela, who owns two car washes, has claimed nine prizes of EUR 8,000 to EUR 40,000, totalling EUR 196,000. The tickets were sold by retailers in different cities, most far from his home, and each claim was made within days of the draw. Vela always asks for payment by bank transfer and presents valid identification. One of the selling retailers was recently fined for selling tickets to minors. His declared income from the car washes is modest, and he tells staff he is 'just lucky'. What is the MOST likely explanation for this pattern?",
    options: [
      "A retailer fraud scheme in which shop staff check customers' tickets and keep the winning ones for themselves",
      "Buying winning tickets from genuine winners with illicit cash, so the prize payment gives the funds a lawful source",
      "Syndicate play, in which a group of friends pools stakes and nominates one member to claim every prize",
      "Structuring of prize claims to keep each payment below the operator's prize verification threshold"
    ],
    answer: [1],
    explanation: "The FATF's 2026 indicators include buying, or trying to buy, winning claim instruments such as lottery tickets from another customer and presenting them as one's own, and an improbable, sustained winning streak. The FATF/APG 2009 casino report (Case 16) describes Spanish investigations, mainly into drug trafficking, corruption and tax fraud, in which proceeds were laundered by buying winning lottery tickets from legitimate gamblers. The launderer then receives a prize payment that gives the money an apparently lawful source. Retailer fraud is the runner-up, but Vela is not a retailer and the tickets came from many shops; nothing suggests a syndicate, and the prizes vary too widely for structuring.",
    source: [
      { label: "FATF (Sept 2026) – Risks of Gaming and Gambling: red-flag risk indicators", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/risks-of-gaming-and-gambling.html" },
      { label: "FATF/APG (March 2009) – Vulnerabilities of Casinos and Gaming Sector, Case 16 (EAG-hosted copy)", url: "https://eurasiangroup.org/files/FATF_docs/Casinos_and_Gaming_Sector.pdf" }
    ] },

  { id: "GAME-008", domain: 1, topic: "Online gambling groups: brand-hopping to evade restrictions", hy: true, difficulty: "hard",
    q: "Arden Gaming Group runs three online brands under one UK licence: Arden Casino, SpinFox and Bet Quay. In May 2026, SpinFox suspends Callum Reyes after he deposits £58,000 in 11 months and does not answer a source of funds request. The next morning Reyes opens a Bet Quay account with the same name, date of birth and debit card, passes the automated identity check and deposits £27,000 within 24 hours. Bet Quay's monitoring rules are calibrated to its own average customer spend, and its current marketing campaign gives free bets to new sign-ups. Which weakness did Reyes MOST likely exploit?",
    options: [
      "Bet Quay's free-bet campaign, which rewards new customers before any source of funds check has taken place",
      "The automated identity check, which should reject any debit card already registered with another brand",
      "Bet Quay's rules calibrated to average spend, which should have flagged £27,000 in a day as an outlier",
      "Restrictions and due diligence findings were not shared across the group's brands, so he simply switched brands"
    ],
    answer: [3],
    explanation: "The Gambling Commission's casino guidance warns that customers may open accounts across different brands of the same or a linked licensee to obscure their spending or avoid CDD checks. In its 2022 £17 million settlement with Entain, the Commission cited a customer blocked on Coral after spending £60,000 in 12 months without providing source of funds, who immediately opened a Ladbrokes account and deposited £30,000 in a single day. The root cause is the lack of a single customer view across brands. Better calibrated rules (the runner-up) might have produced an alert later, but would not have stopped a customer already restricted by the group.",
    source: [
      { label: "Gambling Commission news, 17 Aug 2022 – Entain to pay £17 million for regulatory failures", url: "https://www.gamblingcommission.gov.uk/news/article/entain-to-pay-gbp17-million-for-regulatory-failures" },
      { label: "Gambling Commission – AML guidance for casinos (5th ed., rev. 5), para 2.23", url: "https://www.gamblingcommission.gov.uk/guidance/the-prevention-of-money-laundering-and-combating-the-financing-of-terrorism" }
    ] },

  { id: "GAME-009", domain: 1, topic: "Betting shops: dyed banknotes in gaming machines", hy: false, difficulty: "medium",
    q: "Staff at a high-street betting shop empty the note acceptor of a gaming machine and find 40 £20 notes with pink staining along one edge. CCTV shows that a man in a cap inserted them over 20 minutes, played briefly, and cashed the resulting ticket at the counter. He is not a known customer, and the manager notes that the machine was last serviced three weeks ago. The area manager suggests banking the notes as usual because the amount is small. What is the BEST response?",
    options: [
      "Tell the police through the non-emergency route and submit a SAR to the NCA, since suspicion exists whatever the amount",
      "Bank the notes as usual and log the incident, because £800 is too small a sum to require any report",
      "Keep the notes and return them to the customer on his next visit, asking him to exchange them at his own bank",
      "Refer the matter to the machine supplier, because staining usually points to a fault in the note acceptor"
    ],
    answer: [0],
    explanation: "The Gambling Commission's risk assessment for land-based betting notes that dyed notes have been found in gaming machines. Its industry alert asks operators to report them to the local police through non-emergency contact options, and it is mandatory to submit a SAR to the NCA where there is knowledge or suspicion of money laundering, which the Commission expects in all cases where dyed notes are found. The size of the sum does not matter: no minimum amount applies to reporting suspicion. Banking the notes or handing them back would deal with suspected criminal property while ignoring the suspicion, and the dye is on the notes themselves, so it does not point to a machine fault.",
    source: [
      { label: "Gambling Commission – ML/TF risks in the British gambling industry: Betting (Non-remote), dyed notes", url: "https://www.gamblingcommission.gov.uk/guidance/The-money-laundering-and-terrorist-financing-risks-within-the-British-gambling-industry/betting-non-remote" }
    ] },

  { id: "GAME-010", domain: 1, topic: "Esports betting: spot-fixing in low-level competitions", hy: true, difficulty: "hard",
    q: "Kestrel Sports, an online bookmaker, offers markets on a small online esports league whose players earn under EUR 400 a month and whose matches are streamed to a few hundred viewers. Its integrity analyst sees that five accounts, all opened that week and funded through e-wallets, placed large bets just before kick-off on the favourite losing the second map by a wide margin. The favourite lost that map heavily, then won the match. The accounts requested immediate withdrawals. Kestrel sponsors a different, top-tier league, and its traders say the odds moved only slightly. What is the MOST likely explanation?",
    options: [
      "Courtsiding, in which sharp bettors use faster live data feeds to exploit slow updates of in-play odds",
      "A trading error by Kestrel, which priced the map handicap far more generously than other bookmakers did",
      "Spot-fixing of a low-level competition whose players are cheap to approach, with bets spread over new accounts",
      "Arbitrage betting, in which customers back opposing outcomes at different bookmakers to lock in a profit"
    ],
    answer: [2],
    explanation: "Europol's assessment of organised crime in sports corruption finds that criminal groups mostly target lower-level competitions, where wages, attendance and media coverage are low, players are easier to approach and bribes are cheaper. Fixers may manipulate a single sub-set of a match (spot-fixing), and use betting mules and misused identities to create betting accounts and e-wallets. The FATF's 2026 indicators add improbable outcomes and co-ordinated bets. Courtsiding is the runner-up, but it exploits delays in live data, and these bets were placed before the match. There is no sign of mispricing, and the bets did not cover opposing outcomes.",
    source: [
      { label: "Europol (Aug 2020) – The involvement of organised crime groups in sports corruption", url: "https://www.europol.europa.eu/sites/default/files/documents/the_involvement_of_organised_crime_groups_in_sports_corruption.pdf" },
      { label: "FATF (Sept 2026) – Risks of Gaming and Gambling: red-flag risk indicators", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/risks-of-gaming-and-gambling.html" }
    ] },

  { id: "GAME-011", domain: 1, topic: "Match-fixing and laundering: Europol findings", hy: false, difficulty: "medium",
    q: "A bank's financial crime team is preparing training on betting-related match-fixing. According to Europol's assessment of organised crime involvement in sports corruption, which statements are CORRECT? (Choose two.)",
    options: [
      "Criminal groups mainly target top-tier televised competitions, where betting liquidity is highest",
      "Criminal groups misuse identities to create betting accounts and e-wallets used to bet on pre-arranged matches",
      "The fixing and the betting are usually organised by the same people, who bet in person to avoid digital traces",
      "Laundering through betting is limited to small sums, because operators' controls block unusually large bets",
      "Laundering can take place by exploiting regulated betting operators or by taking direct ownership of operators"
    ],
    answer: [1, 4],
    explanation: "Europol's key findings state that organised crime groups misuse identities to create betting accounts and e-wallets for betting on pre-arranged matches, and that money laundering can take place through online betting, either by exploiting regulated operators or by owning operators outright ('criminally controlled gambling operators'). Europol also finds that groups mostly target lower-level competitions, that the fixing is usually organised separately from the betting, and that betting-related match-fixing can serve as a platform for high-scale laundering schemes, so the other statements are wrong.",
    source: [
      { label: "Europol (Aug 2020) – The involvement of organised crime groups in sports corruption", url: "https://www.europol.europa.eu/sites/default/files/documents/the_involvement_of_organised_crime_groups_in_sports_corruption.pdf" }
    ] },

  { id: "GAME-012", domain: 1, topic: "Video games: laundering through in-game items marketplaces", hy: false, difficulty: "medium",
    q: "Northfield Bank's monitoring flags Jaden Morrow, 20, a retail assistant earning about £1,400 a month. In six weeks his account received 640 payments of £15 to £90, totalling £31,000, from a third-party marketplace where players sell in-game currency and rare cosmetic items for a popular online game. He tells the bank he 'farms' the items by playing. Device data show his marketplace account logging in from several countries, and his listings show hundreds of identical items sold within days of their release. He also runs a small video channel about the game. Which explanation should the bank consider MOST seriously?",
    options: [
      "Legitimate side income from game content, which is common among young customers and needs no further review",
      "Laundering of illicit funds turned into in-game items and cashed out through many small marketplace payouts",
      "Tax evasion only, because income from trading video game items is outside the scope of money laundering laws",
      "Problem gambling, because buying and selling cosmetic items is a form of betting on their future resale value"
    ],
    answer: [1],
    explanation: "The UK's 2025 National Risk Assessment says in-game currencies present a risk of both fraud and money laundering. The FATF's 2025 terrorist financing update notes that research into in-game purchases has revealed significant ML concerns and that, with little oversight, criminals can launder large amounts quickly through thousands of small transactions. Hundreds of identical items, sales far beyond what one player could farm and logins from several countries point to items bought with illicit funds and sold on. The video channel does not explain the volume, and laundering rules apply whatever the item traded.",
    source: [
      { label: "HM Treasury/Home Office – UK National Risk Assessment of ML and TF 2025, para 5.169", url: "https://www.gov.uk/government/publications/national-risk-assessment-of-money-laundering-and-terrorist-financing-2025" },
      { label: "FATF (July 2025) – Comprehensive Update on Terrorist Financing Risks, section 6.2", url: "https://eurasiangroup.org/files/uploads/files/Public_typology_reports/Comprehensive-Update-on-Terrorist-Financing-Risks-2025.pdf.coredownload.inline.pdf.pdf" }
    ] },

  { id: "GAME-013", domain: 1, topic: "FATF 2026: gaming versus gambling risks", hy: true, difficulty: "medium",
    q: "In September 2026 the FATF published findings and red-flag indicators on the risks of gaming and gambling. Which statement reflects its findings on online video gaming compared with gambling?",
    options: [
      "Video gaming carries higher laundering risk than casinos, because in-game purchases are not subject to any controls",
      "Proliferation financing is the main risk in video gaming, because state actors use games to move large sums",
      "Video gaming and gambling show the same level of documented terrorist financing misuse, so they need the same controls",
      "Laundering through gaming appears smaller in scale and sophistication than through gambling, but more TF misuse is documented in gaming"
    ],
    answer: [3],
    explanation: "The FATF found that, on current evidence, money laundering through gaming appears to take place on a smaller scale, or with less sophistication and frequency, than through gambling, where land-based and online casinos and sports betting are particularly exposed. By contrast, terrorist financing typologies are limited for gambling, while online gaming shows more observable and documented TF misuse. The FATF considers PF risk very limited in both sectors, so the other statements misstate its findings.",
    source: [
      { label: "FATF (Sept 2026) – Risks of Gaming and Gambling, key findings paras 7-9", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/risks-of-gaming-and-gambling.html" }
    ] },

  { id: "GAME-014", domain: 1, topic: "Online casinos: crash games hide minimal-play laundering", hy: false, difficulty: "hard",
    q: "Velvet Ace, a UK-licensed online casino, added a 'crash' game in 2025: a multiplier applied to the stake rises until the round crashes, and players must cash out before then. Analyst Hana Okoye notices Ross Teller, a new customer funding his account with prepaid cards, staking £500 a round and cashing out at 1.05x almost every time before withdrawing to a bank account. Teller deposited £38,000 in a month, but the casino's minimal-play rule never fired. The game's supplier is licensed, and the game's return to player is similar to that of the casino's slots. Why did the standard minimal-play rule MOST likely fail to detect Teller?",
    options: [
      "Quick cash-outs with little play are normal in crash games, so a launderer's behaviour blends in with genuine play",
      "Prepaid cards cannot be monitored at all, so no monitoring rule can detect activity funded through them",
      "Crash games are offered only by illegal crypto casinos, so they fall outside a licensed operator's monitoring duties",
      "The return to player means Teller is certain to lose most of his deposits, so laundering through the game cannot work"
    ],
    answer: [0],
    explanation: "The UK's 2025 National Risk Assessment notes that crash games, offered by crypto casinos (illegal if accessible from the UK) and by some licensed operators, may give criminals an opportunity to launder through regulated casinos: because legitimate players also cash out quickly, criminals can hide the high-risk behaviour of quick cash-outs after limited play. Prepaid cards are higher risk (the Gambling Commission's casino guidance says they pose the same risks as cash), but they can still be monitored. Cashing out at 1.05x keeps losses small, so the return to player does not prevent laundering.",
    source: [
      { label: "HM Treasury/Home Office – UK National Risk Assessment of ML and TF 2025, para 5.169", url: "https://assets.publishing.service.gov.uk/media/6877be59760bf6cedaf5bd4f/National_Risk_Assessment_of_Money_Laundering_and_Terrorist_Financing_2025_FINAL.pdf" },
      { label: "Gambling Commission – AML guidance for casinos (5th ed., rev. 5, Oct 2025), para 2.23 (pre-paid cards)", url: "https://www.gamblingcommission.gov.uk/guidance/the-prevention-of-money-laundering-and-combating-the-financing-of-terrorism" }
    ] },

  { id: "GAME-015", domain: 1, topic: "Online casinos: third-party prepaid funding and foreign e-wallet withdrawals", hy: true, difficulty: "hard",
    q: "Lunar Slots, an online casino, reviews Ilse Brandt, who registered in April 2026 with an address in Hamburg. She has funded her account with seven prepaid cards, four of them registered to other people, and has wagered only about 10% of the EUR 21,000 she deposited, mostly on even-money roulette bets. She now asks to withdraw EUR 19,000 to an e-wallet held with a payment institution in a jurisdiction with weak AML controls, saying her bank 'blocks gambling transactions'. Her IP address is in Germany, and she has signed up to the VIP newsletter. Which facts are the MOST significant indicator of laundering?",
    options: [
      "Her preference for even-money roulette bets, which let a player recover most of a stake while appearing to gamble",
      "Her claim that her bank blocks gambling, which shows that she is trying to hide her gambling from her own bank",
      "Prepaid cards in other people's names, little play, and a withdrawal request to a different, foreign e-wallet",
      "Her recent registration, which means the operator has not yet completed enhanced due diligence on her"
    ],
    answer: [2],
    explanation: "The FATF's 2026 indicators include multiple payment methods in different names linked to one account, deposits followed by withdrawals with minimal play, attempts to withdraw to an account other than the source of funds, and e-wallets held by foreign payment institutions. The Gambling Commission's casino guidance says pre-paid cards pose the same risks as cash, and its remote casino risk assessment strongly recommends a closed loop, paying customers back to the card they deposited with. Even-money roulette is the runner-up: the FATF does list frequent low-risk, low-return play as an indicator, but on its own it is weak and also fits ordinary cautious play, and she is not placing the equal, opposite stakes on red and black that the guidance describes. A bank gambling block or a new account is not suspicious in itself.",
    source: [
      { label: "FATF (Sept 2026) – Risks of Gaming and Gambling: red-flag risk indicators", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/risks-of-gaming-and-gambling.html" },
      { label: "Gambling Commission – ML/TF risks in the British gambling industry: Casino (Remote), closed loop", url: "https://www.gamblingcommission.gov.uk/guidance/The-money-laundering-and-terrorist-financing-risks-within-the-British-gambling-industry/casino-remote" },
      { label: "Gambling Commission – AML guidance for casinos (5th ed., rev. 5, Oct 2025), paras 2.23 and 2.25", url: "https://www.gamblingcommission.gov.uk/guidance/the-prevention-of-money-laundering-and-combating-the-financing-of-terrorism" }
    ] },

  { id: "GAME-016", domain: 1, topic: "B2B game suppliers: games reaching unlicensed operators", hy: false, difficulty: "hard",
    q: "Lumen Live, a games studio, holds Gambling Commission gambling software and casino game host licences and supplies live-dealer games to about 40 operators worldwide. Its ML/TF risk assessment, last updated in 2022, covers only its direct customers' licences, checked at onboarding. In 2026 its traffic data show heavy play from British IP addresses on six websites run by two Curaçao-based customers that hold no UK licence. The commercial director notes that both customers pay on time, that the games are independently certified as fair, and that the contracts make geo-blocking the operators' responsibility. What is the MOST important lesson for Lumen Live from the UK regulator's perspective?",
    options: [
      "Because the games are certified as fair, the supplier carries no laundering risk from where they are played",
      "It must keep its risk assessment current and know how and where its games are actually accessed, whatever the contracts say",
      "Responsibility for unlicensed access lies wholly with the two operators, because the contracts assign geo-blocking to them",
      "It should make its customers sign annual compliance certificates, which transfer the legal responsibility to them"
    ],
    answer: [1],
    explanation: "In July 2026 the Gambling Commission announced a £4.75 million settlement with Evolution Malta Holding, a gambling software and casino game host licensee whose games appeared on six unlicensed websites accessible to consumers in Great Britain. Its risk assessment was outdated and did not flag that two business customers were supplying its games to British consumers without a licence, and it breached the regulations on risk assessment, policies and controls, and CDD. The Commission said suppliers must understand who they supply, how and where their games are accessed in practice, and keep their risk assessments current and tested. Contracts and certificates (the runner-up) do not transfer the supplier's own obligations.",
    source: [
      { label: "Gambling Commission news, 23 July 2026 – Evolution Malta Holding Limited to pay £4.75m", url: "https://www.gamblingcommission.gov.uk/news/article/evolution-malta-holding-limited-to-pay-gbp4-75m" }
    ] },

  { id: "GAME-017", domain: 1, topic: "US sweepstakes casinos outside casino regulation (2026 NMLRA)", hy: false, difficulty: "medium",
    q: "Cedar Valley Bank's monitoring flags Troy Bennett, a 31-year-old delivery driver. In two months his account received 37 payouts totalling $46,000 from an online sweepstakes casino. The site lets people play slot-style games for free, sells bundles of 'gold coins', and gives players 'sweeps coins' that can be redeemed for cash. Bennett says most of his play was funded by 'friends from the game' who bought coin bundles for him. The relationship manager wants to close the alert, saying the site is a casino and so has its own Bank Secrecy Act program. According to Treasury's 2026 National Money Laundering Risk Assessment, what is the BEST assessment?",
    options: [
      "The manager is right, because sweepstakes casinos are BSA-covered casinos whose own AML programs mitigate the risk",
      "Sweepstakes casinos generally fall outside casino and gambling regulation, and that lack of oversight can make them attractive for laundering",
      "Sweepstakes play is legally a game of skill, so redemptions cannot involve criminal proceeds and need no further review",
      "The only concern is consumer protection, because coins won on a sweepstakes site have no cash value"
    ],
    answer: [1],
    explanation: "The 2026 NMLRA describes sweepstakes casinos as services offering casino games for free with a dual-currency system in which players earn coins they can later cash out for fiat currency or digital assets. That model means they are not subject to many casino or online gambling rules, yet they are vulnerable to the same laundering methods as casinos and may be especially attractive to criminals because of the lack of oversight. Third-party funding and large cash-outs inconsistent with Bennett's income therefore need review and a SAR decision. The manager's view (the runner-up) assumes BSA coverage that generally does not exist. The coins here are redeemable for cash, and the NMLRA uses the 'game of skill' label for fantasy sports; no such label stops a service from being used to launder criminal proceeds.",
    source: [
      { label: "US Treasury – 2026 National Money Laundering Risk Assessment, Casinos and Gaming: Non-Casino Gaming and Gambling", url: "https://home.treasury.gov/system/files/246/2026-NMLRA.pdf" }
    ] },

  { id: "GAME-018", domain: 1, topic: "Matched betting and bonus abuse through relatives' accounts", hy: false, difficulty: "hard",
    q: "Owen Marsh, a customer of Tallis Bank, tells his relationship manager that he runs a 'matched betting' side business, using bookmakers' free-bet offers to lock in small profits. Matched betting itself is legal in the UK. The bank sees transfers from Marsh's account to 23 relatives and friends, each followed by deposits from their accounts to the same five bookmakers. Winnings return from the bookmakers to the relatives' accounts and are passed back to Marsh within a day, and he pays each relative £50 a month. Marsh has a mortgage with the bank and has always paid on time. From an AML perspective, what is the MOST significant concern?",
    options: [
      "Accounts in other people's names hide who is really betting and whose money is staked, a method launderers and fixers also use",
      "Matched betting defrauds bookmakers, so the bank must treat all of Marsh's income as criminal property from now on",
      "The £50 monthly payments are wages, so Marsh is running an unregistered employment business through his account",
      "The main risk is credit risk, because matched betting profits are too irregular to support Marsh's mortgage payments"
    ],
    answer: [0],
    explanation: "The Gambling Commission's risk assessment for remote betting describes 'mule' betting accounts, opened with third parties' details with or without their knowledge, which hide who places the bets and the source of the funds. It lists bonus abusers alongside money launderers, organised crime groups and match fixers among their users, and says third-party funding of gambling has facilitated laundering. The FATF's 2026 indicators also flag frequent transfers, deposits and payments to or from numerous individuals, and the use of third parties to place bets in an attempt to anonymise gambling. The runner-up overstates the position: breaching bookmakers' terms does not automatically make all his income criminal property, but the nominee structure must be understood.",
    source: [
      { label: "Gambling Commission – ML/TF risks in the British gambling industry: Betting (Remote)", url: "https://www.gamblingcommission.gov.uk/guidance/The-money-laundering-and-terrorist-financing-risks-within-the-British-gambling-industry/betting-remote" },
      { label: "FATF (Sept 2026) – Risks of Gaming and Gambling: red-flag risk indicators", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/risks-of-gaming-and-gambling.html" }
    ] },

  { id: "GAME-019", domain: 1, topic: "High-end casinos: anonymity through assistants and poker staking", hy: false, difficulty: "medium",
    q: "The MLRO of a high-end London casino is reviewing why identity and source of funds checks on some customers take longer than others. According to the UK's 2025 National Risk Assessment, which practices add anonymity risk in casinos? (Choose two.)",
    options: [
      "Customers who pay for chips at the cage with a debit card issued in their own name",
      "Customers who play only electronic roulette terminals and never sit at live tables",
      "Customers who deal with the casino through personal assistants and other third-party employees",
      "Poker staking contracts in which backers fund players without their identities or funds being verified",
      "Customers who ask for their winnings to be paid by cheque into their own verified bank account"
    ],
    answer: [2, 3],
    explanation: "The 2025 National Risk Assessment says some high-end casino customers use personal assistants and third-party employees when dealing with casinos, which complicates verifying identity and source of funds or wealth. It adds that poker stable contracts, where a collection of players is backed by an individual or a staking syndicate, can create anonymity issues because the backers' identity or source of funds may not be verified. Paying with one's own card and receiving winnings into one's own verified account reduce anonymity, and the choice of electronic roulette is not an anonymity factor in itself.",
    source: [
      { label: "HM Treasury/Home Office – UK National Risk Assessment of ML and TF 2025, para 5.164", url: "https://www.gov.uk/government/publications/national-risk-assessment-of-money-laundering-and-terrorist-financing-2025" }
    ] },

  { id: "GAME-020", domain: 1, topic: "Gambling operators as bank customers: platform-level red flags", hy: true, difficulty: "hard",
    q: "Westmere Bank is reviewing Orbis Play Ltd, a new corporate customer that holds an online gambling licence and wants a merchant account and a multi-currency payments account. Its due diligence produces the findings below. According to the FATF's 2026 red-flag indicators for gaming and gambling, which findings are the STRONGEST indicators that the platform may be misused for illicit finance? (Choose two.)",
    options: [
      "Its brand name and website address have changed three times in a year, and it did not trade for 18 months after obtaining its licence",
      "It pays large fees to an offshore 'software and marketing consultancy' for services that its contracts describe only vaguely and that bear no relation to its size",
      "Its customer numbers and revenue have grown steadily, in line with its published marketing spend",
      "It takes card deposits through a regulated payment service provider and pays withdrawals back to the same card",
      "An independent testing house has certified the fairness of its random number generator"
    ],
    answer: [0, 1],
    explanation: "The FATF's product and platform indicators include frequent changes of platform URLs, website addresses or company or brand names; obtaining a gambling licence followed by a prolonged period of operational inactivity; and third-party contracts with intangible service providers (such as software, marketing, consultancy or technology services) that appear to lack economic or commercial sense, together with business-to-business cross-border flows unrelated to regulated gambling. Steady growth in line with marketing is the opposite of the FATF's indicator of rapid, unexplained growth or sudden revenue spikes. Card payments through a regulated provider with a closed loop and a certified random number generator are features of a well-run operator, not red flags.",
    source: [
      { label: "FATF (Sept 2026) – Risks of Gaming and Gambling: red-flag risk indicators (product and platform features)", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/risks-of-gaming-and-gambling.html" }
    ] },

  { id: "GAME-021", domain: 4, topic: "Investigating account takeover on a betting account", hy: false, difficulty: "hard",
    q: "Investigator Marta Silva at Highgate Bet reviews the account of Gordon Pell, 71, which had been dormant for two years. In the last 48 hours it was accessed from a new IP address in another country, its phone number and email address were changed, and a new bank account was added. £9,000 was then deposited from a card never used before, two bets were placed at very short odds, and a withdrawal of £8,700 to the new bank account is pending. Pell's registered home address and date of birth are unchanged, and all his earlier logins came from his home town. What should Silva do FIRST?",
    options: [
      "Approve the withdrawal, because the short-odds bets won and the funds are the account holder's winnings",
      "Hold the withdrawal and contact Pell using the contact details held before the changes, to confirm whether he made them",
      "Close the account at once and refund the £9,000 to the new card that was used to fund the deposit",
      "Email the new address on file, asking the customer to explain the recent activity and confirm the new bank account"
    ],
    answer: [1],
    explanation: "The FATF's 2026 indicators flag a new IP address inconsistent with the account's history as a possible sign of account takeover, along with a dormant account suddenly funded with a large deposit, frequent changes to account details, short-odds bets used to justify withdrawals and withdrawals to an account other than the source. The first step is to stop the money leaving and verify with the genuine customer through trusted, pre-change contact details, then consider a SAR. Emailing the new address (the runner-up) would reach the likely fraudster. Refunding to a possibly stolen card or paying out would move the funds on.",
    source: [
      { label: "FATF (Sept 2026) – Risks of Gaming and Gambling: red-flag risk indicators", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/risks-of-gaming-and-gambling.html" }
    ] },

  { id: "GAME-022", domain: 4, topic: "Casino investigations: acting on adverse media (Wynn lessons)", hy: false, difficulty: "hard",
    q: "Before accepting $1.4 million in front money, an analyst at Sierra Crest Casino in Las Vegas runs open-source searches on Mr. Tan, a VIP patron from abroad. Tan has a clean sanctions screening result and a long CTR history at the casino. The searches show that the press linked him to proxy gambling two years ago, and that a year ago he was refused entry to the United States because of suspected links to a criminal organisation, while travelling with the president of marketing of the casino's overseas affiliate. That executive says the reports are old and that Tan is one of the affiliate's best customers. What lesson from the 2024 Wynn Las Vegas resolution should guide the analyst?",
    options: [
      "A clean sanctions screen and CTR history are enough, because adverse media without a conviction cannot be weighed",
      "The patron's value and the executive's sponsorship justify approval, provided a senior manager signs off on the risk",
      "Press reports older than 12 months should be set aside unless a court judgment has confirmed the allegations",
      "Credible adverse media must lead to scrutiny of the source of funds and a SAR decision, whoever sponsors the patron"
    ],
    answer: [3],
    explanation: "In the Wynn Las Vegas non-prosecution agreement (September 2024, $130,131,645 forfeited), DOJ cited 2018 transactions of about $1.4 million for an individual who had been publicly linked to proxy gambling two years earlier and, a year earlier, while with the president of marketing of a Wynn international affiliate, was denied entry to the United States over suspected links to a criminal organisation. The casino allowed such activity without scrutinising the source of funds or reporting it. Senior sign-off (the runner-up) does not cure a failure to investigate, and adverse media need not be proven in court to be relevant.",
    source: [
      { label: "DOJ (S.D. Cal.) press release, 6 Sept 2024 – Wynn Las Vegas forfeits $130 million", url: "https://www.justice.gov/usao-sdca/pr/wynn-las-vegas-forfeits-130-million-illegally-conspiring-unlicensed-money-transmitting" }
    ] },

  { id: "GAME-023", domain: 4, topic: "Suspected spot-fixing: who a British betting operator must tell", hy: true, difficulty: "hard",
    q: "Bramwell Bet, a remote betting operator licensed by the Gambling Commission, finds that 30 accounts opened in the past month placed co-ordinated bets on a named player receiving a yellow card in a second-tier English football match. The player was booked in the third minute. Bramwell's investigator suspects spot-fixing and believes the winnings, now about £85,000, are the proceeds of crime. Which steps should Bramwell take? (Choose three.)",
    options: [
      "Give the information to the Gambling Commission's Sports Betting Intelligence Unit as soon as reasonably practicable",
      "Tell the account holders that their bets are under integrity review, so they can explain them before any report",
      "Give relevant information to the Football Association about a suspected breach of its betting rules",
      "Wait until the governing body finishes its disciplinary case before reporting anything, to avoid a false accusation",
      "Submit a SAR to the NCA and seek a defence before paying out the suspected criminal winnings"
    ],
    answer: [0, 2, 4],
    explanation: "LCCP 15.1.2 requires betting licensees to give the Commission, as soon as reasonably practicable, information they know or suspect relates to an offence under the Gambling Act (sports betting integrity information goes to the Sports Betting Intelligence Unit), and to give sport governing bodies listed in Schedule 6, which include The Football Association, information about suspected breaches of their betting rules. Paying out winnings suspected to be criminal property would be a prohibited act, so a SAR with a request for a defence (DAML) is needed first. Warning the account holders could alert suspected fixers and prejudice an investigation (and, once a SAR is made, risk tipping off), and waiting for a disciplinary outcome breaches the 'as soon as reasonably practicable' duty.",
    source: [
      { label: "Gambling Commission – LCCP 15.1.2 Reporting suspicion of offences etc – betting licences", url: "https://www.gamblingcommission.gov.uk/licensees-and-businesses/lccp/condition/15-1-2-reporting-suspicion-of-offences-etc-betting-licences" },
      { label: "Gambling Act 2005, Schedule 6, Part 3 (sport governing bodies)", url: "https://www.legislation.gov.uk/ukpga/2005/19/schedule/6/part/3" }
    ] },

  { id: "GAME-024", domain: 4, topic: "Investigating chip dumping: what evidence matters", hy: false, difficulty: "medium",
    q: "After a chip-dumping alert, investigator Leo Grant at an online poker room reviews two accounts. In four weeks 'bluefinch' lost £22,000 and 'tarnwolf' won £19,000. Both accounts passed identity verification, both players are registered in the same city, and 'tarnwolf' has played on the site for three years. Which evidence would BEST support the suspicion that value is being deliberately transferred from one account to the other?",
    options: [
      "Hand histories showing bluefinch losing mainly to tarnwolf through irrational plays, plus shared devices, IP addresses or payment links",
      "Bluefinch's total net loss for the month, compared with the average loss of other players at the same stakes",
      "The fact that both players passed identity verification, which shows that each account belongs to a real person",
      "Tarnwolf's long record of winning against many opponents, which shows that he is a skilled professional player"
    ],
    answer: [0],
    explanation: "The FATF's 2026 indicators describe players who often play together with one always winning and the other always losing, consistent losses to other players in peer-to-peer settings, several accounts opened from the same IP address or device, and customers sharing a payment method. Hand histories show whether the losses go to one opponent through plays no genuine player would make, and technical or payment links show common control. A large net loss alone may just mean a poor player, passing identity checks proves nothing about collusion, and a broad winning record would weaken rather than support the suspicion.",
    source: [
      { label: "FATF (Sept 2026) – Risks of Gaming and Gambling: red-flag risk indicators", url: "https://www.fatf-gafi.org/en/publications/Methodsandtrends/risks-of-gaming-and-gambling.html" }
    ] },

  { id: "GAME-025", domain: 4, topic: "Source of wealth: limits of open-source information", hy: false, difficulty: "hard",
    q: "Compliance analyst Nadia Brook at Stellan Bet reviews Kieran Holt, who has deposited £140,000 in ten months. His online profiles describe him as the founder of a property firm, the company register shows him as a director of two active companies, and a press article shows him at a charity dinner. Brook proposes recording his source of wealth as 'business owner – verified via open source' and letting him continue to deposit. Holt plays mostly slots, and he has never complained about a bet. What is the BEST next step?",
    options: [
      "Accept the open-source profile, because a company directorship confirms an income large enough for his spending",
      "Close the account at once and report Holt, because deposits of this size are suspicious in themselves",
      "Ask for documentary source of funds evidence, such as bank statements or company accounts, and limit deposits until it is assessed",
      "Keep monitoring his play for unusual patterns, because slots players present lower laundering risk than sports bettors"
    ],
    answer: [2],
    explanation: "In its 2022 settlement with Entain, the Gambling Commission listed 'placing excessive reliance on open-source information' as an AML failure: one customer deposited £140,700 while the operator based its view of his source of wealth on open-source searches before any source of funds check. In the 2023 William Hill case it criticised the lack of hard stops preventing further spend before risk profiling was complete. A directorship does not show what Holt earns or where these deposits come from. Monitoring alone (the runner-up) does not establish the source of funds, and size alone is not grounds to report without enquiry.",
    source: [
      { label: "Gambling Commission news, 17 Aug 2022 – Entain to pay £17 million for regulatory failures", url: "https://www.gamblingcommission.gov.uk/news/article/entain-to-pay-gbp17-million-for-regulatory-failures" },
      { label: "Gambling Commission news, 28 Mar 2023 – William Hill Group businesses to pay record £19.2m", url: "https://www.gamblingcommission.gov.uk/news/article/william-hill-group-businesses-to-pay-record-gbp19-2m-for-failures" }
    ] }
]);
