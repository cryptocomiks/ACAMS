window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "FATF-001", domain: 2, topic: "Grey list: what a new 'increased monitoring' listing means for a bank", hy: true, difficulty: "hard",
    q: "In June 2026, the FATF places Country L under increased monitoring. Brightwell Bank, a mid-sized bank, has 1,400 retail customers from L who send family remittances home, two corporate customers that import coffee from L, and a correspondent relationship with Lumo Bank, L's third-largest bank, rated medium risk. Lumo's periodic review in March found no adverse information. The head of financial institutions proposes exiting Lumo and the coffee importers at once. The head of retail proposes full enhanced due diligence (EDD) on every customer with any link to L. Brightwell's home country has not put L on any national or regional list that requires specific measures. What is the BEST response, in line with the FATF's statement on jurisdictions under increased monitoring?",
    options: [
      "Exit the correspondent relationship and the importers, because grey-listing means strategic deficiencies that cannot be mitigated",
      "Apply full EDD to all customers linked to Country L, because the FATF requires it for jurisdictions under increased monitoring",
      "Add the listing and L's action-plan deficiencies to the risk assessment, re-assess each relationship on a risk basis and keep remittances flowing",
      "Take no action until the FATF calls for countermeasures, because the increased-monitoring list has no bearing on risk ratings"
    ],
    answer: [2],
    explanation: "The FATF's June 2026 statement says that it does not call for EDD on jurisdictions under increased monitoring. It adds that the FATF Standards do not envisage de-risking or cutting off entire classes of customers, and it encourages everyone to take the information into account in their risk analysis. That analysis should not disrupt or discourage humanitarian, NPO or remittance flows. The runner-up, blanket EDD, confuses the grey list with the 'call for action' list, where R.19 requires EDD. Ignoring the listing is also wrong, because the FATF expects it to feed into the risk analysis.",
    source: [
      { label: "FATF – Jurisdictions under Increased Monitoring, 19 June 2026 (copy hosted by FIAU Malta)", url: "https://fiaumalta.org/app/uploads/2026/06/FATF-On-going-Process-19-June-2026-Increased-monitoring.pdf" },
      { label: "FATF Recommendations (updated June 2026), R.19 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "FATF-002", domain: 2, topic: "Call for action: countermeasures listed in INR.19", hy: true, difficulty: "medium",
    q: "Country Z is on the FATF list of high-risk jurisdictions subject to a call for action, and the FATF has called on members to apply countermeasures. A finance ministry is drafting a package of measures. Which measures are examples of countermeasures listed in the Interpretive Note to Recommendation 19? (Choose three.)",
    options: [
      "Prohibiting financial institutions from relying on third parties located in Country Z to conduct elements of the CDD process",
      "Freezing without delay all funds held by nationals of Country Z, whether or not they have been designated",
      "Requiring financial institutions to review and amend, or if necessary terminate, correspondent relationships with banks in Country Z",
      "Barring humanitarian organisations from sending any funds to Country Z until it is removed from the list",
      "Refusing the establishment of subsidiaries, branches or representative offices of financial institutions from Country Z"
    ],
    answer: [0, 2, 4],
    explanation: "INR.19 para 2 lists example countermeasures. They include prohibiting reliance on third parties in the country for CDD, requiring correspondent relationships to be reviewed, amended or terminated, and refusing the establishment of subsidiaries, branches or representative offices of the country's financial institutions. Others are specific EDD elements, systematic reporting, limiting business relationships, and increased supervisory examination or external audit. An asset freeze applies only to designated persons under R.6 or R.7, never to a whole nationality. A ban on all humanitarian funding is not a listed countermeasure, and countermeasures must be effective and proportionate to the risks.",
    source: [
      { label: "FATF Recommendations (updated June 2026), R.19 and INR.19 para 2 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "FATF-003", domain: 2, topic: "Wolfsberg: a respondent's country leaves the grey list", hy: false, difficulty: "hard",
    q: "Ostrava Trust Bank clears US dollars for Nordlys Bank, a respondent in Country N. In June 2026, Country N left the FATF list of jurisdictions under increased monitoring after completing its action plan. An analyst proposes lowering Nordlys's rating from high to low and moving it from annual to three-yearly review, citing the delisting. The same week, the press reports that Nordlys's own supervisor fined it for failing to file STRs on a casino group. Nordlys has also just opened a branch under an offshore banking licence. Its Wolfsberg CBDDQ was refreshed last month and is complete. Under the Wolfsberg Correspondent Banking Principles (2022), what is the BEST course of action?",
    options: [
      "Treat the delisting as one factor, and re-evaluate the relationship now in light of the fine and the offshore branch before changing the rating",
      "Lower the rating to low, since an internationally recognised improvement in the regulatory environment drives correspondent risk",
      "Keep the high rating unchanged until the next annual review, since ratings should change only at scheduled periodic reviews",
      "Rely on the refreshed CBDDQ to confirm the new rating, since a complete questionnaire satisfies due diligence on a respondent"
    ],
    answer: [0],
    explanation: "The Wolfsberg Principles say a correspondent may consider, but not rely solely on, the fact that a respondent operates in a regulatory environment recognised as adequate. That environment must be assessed together with information on the specific respondent. Trigger events such as financial crime-related adverse media 'shall prompt a re-evaluation of the relationship'. A branch operating under an offshore banking licence is a factor that may call for EDD. The runner-up, waiting for the annual review, ignores the trigger-event rule. The CBDDQ is only one source of information and does not replace the correspondent's own risk assessment.",
    source: [
      { label: "Wolfsberg Correspondent Banking Principles (2022), section 4 and FAQs 2-3", url: "https://db.wolfsberg-group.org/assets/d39a5072-7fb6-4e31-9a87-9e54021ce71f/Wolfsberg%20Correspondent%20Banking%20Principles%202022.pdf" }
    ]
  },
  {
    id: "FATF-004", domain: 2, topic: "Reading a MER: technical compliance vs effectiveness", hy: true, difficulty: "hard",
    q: "Tamsin, a country-risk analyst at a global bank, reviews Country K's fifth-round mutual evaluation report. K's money laundering offence (R.3) is rated Compliant and R.4 Largely Compliant. However, IO.7 (ML investigation and prosecution) and IO.8 (asset recovery) are rated Low. In five years, K secured four ML convictions, all for self-laundering, and confiscated almost nothing despite a large drug trade. K's GDP grew 6% last year, and it recently joined a regional trade bloc. Tamsin's manager argues that the strong technical ratings show K's framework is sound and that K should be rated low risk for ML. Which conclusion is MOST consistent with the FATF Methodology?",
    options: [
      "The Compliant rating on R.3 outweighs the IO ratings, since technical compliance is the primary measure of an AML/CFT regime",
      "The Low ratings show only that K's prosecutors need more training, and they have no bearing on the risk of laundering through K",
      "The ratings conflict, so the report is unreliable and the bank should rely on K's own national risk assessment instead",
      "K has the laws, but they do not work in practice: the Low ratings show that criminals face little risk of prosecution or of losing their proceeds"
    ],
    answer: [3],
    explanation: "Under the FATF Methodology, technical compliance checks whether the legal and institutional foundations exist. Effectiveness measures how far each Immediate Outcome is achieved, and 'it cannot be taken for granted that a technically compliant country will also be effective'. A Low rating means the outcome is not achieved, or achieved only to a negligible extent, and needs fundamental improvement. Here, IO.7 and IO.8 show that launderers are rarely prosecuted or deprived of their proceeds, which is directly relevant to country risk. The manager's view (the runner-up) overweights the technical ratings. GDP growth and the trade bloc are irrelevant decoys.",
    source: [
      { label: "FATF Methodology (updated June 2026), paras 53-55 and 72 (effectiveness ratings) – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Methodology_2026_eng.pdf" }
    ]
  },
  {
    id: "FATF-005", domain: 2, topic: "IO.8: what counts as confiscated property (calculation)", hy: false, difficulty: "hard",
    q: "Country P is preparing statistics on IO.8 (asset recovery) for its fifth-round on-site visit. The justice ministry's draft table shows EUR 52 million 'recovered from criminals' over five years. It is made up of EUR 31 million in criminal fines on convicted traffickers, EUR 6 million in administrative penalties on banks for AML failures, EUR 11 million in property confiscated under conviction-based orders, and EUR 4 million in cash forfeited in non-conviction-based proceedings. A further EUR 9 million is frozen pending trial. How much should the assessors count as criminal property or property of corresponding value confiscated?",
    options: [
      "EUR 52 million, since all of the amounts were taken from persons involved in crime or in AML failures",
      "EUR 15 million, since fines and penalties are sanctions rather than confiscation",
      "EUR 11 million, since only conviction-based confiscation counts as asset recovery",
      "EUR 24 million, since assets frozen pending trial count together with confiscated property"
    ],
    answer: [1],
    explanation: "The Note to Assessors for IO.8 says that assessors should not take into account amounts such as fines or other monetary penalties that are part of the sentence or sanction, in criminal or civil proceedings. They should count results from both conviction-based and non-conviction-based procedures, so the total is EUR 11 million + EUR 4 million = EUR 15 million. The runner-up of EUR 11 million wrongly leaves out non-conviction-based confiscation. Frozen assets are evidence of provisional measures, but they have not yet been confiscated.",
    source: [
      { label: "FATF Methodology (updated June 2026), Immediate Outcome 8, Note to Assessors para 2 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Methodology_2026_eng.pdf" }
    ]
  },
  {
    id: "FATF-006", domain: 2, topic: "Mutual evaluation: where proliferation financing findings are rated", hy: false, difficulty: "hard",
    q: "During Country R's fifth-round on-site visit, assessors find that its law on proliferation-related targeted financial sanctions fully meets Recommendation 7. However, when the UN 1718 Committee designated a shipping company, three of R's five largest banks took 11 days to update their screening lists, and one processed two payments for the company in that time. The banks' STR reporting, CDD and ML supervision are otherwise sound. One assessor proposes lowering the IO.3 rating for financial institutions' preventive measures because of the screening failure. Under the Methodology, where should this finding be weighed?",
    options: [
      "Under IO.3, as part of financial institutions' application of preventive measures",
      "Under R.7, by lowering its technical compliance rating to reflect the delay",
      "Under IO.11, without a cascading effect on IO.3 or other outcomes",
      "Under IO.10, which covers all targeted financial sanctions regimes"
    ],
    answer: [2],
    explanation: "The Methodology says that issues related to proliferation financing are assessed exclusively under R.7, IO.11 and specific elements of R.1, R.2 and R.15. Any underlying deficiency related to CPF 'should not have a cascading effect'. IO.11 asks whether proliferation-related targeted financial sanctions are implemented without delay, so the 11-day lag belongs there. The runner-up, R.7, rates the legal framework, which here is sound. IO.10 covers terrorist financing, not proliferation.",
    source: [
      { label: "FATF Methodology (updated June 2026), footnote 17 and Immediate Outcome 11 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Methodology_2026_eng.pdf" }
    ]
  },
  {
    id: "FATF-007", domain: 2, topic: "R.4: non-conviction-based confiscation when the offender dies", hy: true, difficulty: "hard",
    q: "Investigators in Country D trace EUR 2.3 million in accounts at three banks to Marek V., who ran a fake-invoice fraud ring. Marek dies in a car crash six weeks before his trial. His widow, who knew about the scheme, demands the release of the funds as his heir. The prosecutor notes that D's law allows confiscation only after a conviction, and that a separate tax claim against Marek is pending. Under the FATF Recommendations as revised in 2023, which measure should D have available to deprive the estate of the criminal property?",
    options: [
      "Non-conviction-based confiscation, which countries should have to the extent consistent with fundamental principles of domestic law",
      "Extended confiscation, which reaches other property of any person whose assets clearly exceed their lawful income",
      "A targeted financial sanctions freeze under Recommendation 6, which needs no criminal proceedings to be in place",
      "A reversed burden of proof, which the FATF requires countries to impose on the heirs of offenders"
    ],
    answer: [0],
    explanation: "Revised R.4(f) and INR.4 para 11 say countries should be able to confiscate criminal property without a criminal conviction, to the extent consistent with fundamental principles of domestic law. This covers cases where the offender has died. The runner-up, extended confiscation (INR.4 para 10), applies only to a person who has been convicted. A reversed burden of proof is something countries 'should consider' (para 12), and it applies to an offender, not to heirs. R.6 freezes apply only to designated terrorists and terrorist financiers.",
    source: [
      { label: "FATF Recommendations (updated June 2026), R.4 and INR.4 paras 9-12 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "FATF-008", domain: 2, topic: "R.38: enforcing a foreign non-conviction-based order", hy: false, difficulty: "hard",
    q: "A court in Country A issues a non-conviction-based (in rem) confiscation order over USD 4 million in bribes. The official who took them fled abroad before he could be charged. USD 1.5 million of it sits in an account at Bank Q in Country B, and A's central authority asks B to enforce the order. B's prosecutor replies that B can enforce a foreign order only after its own police open an investigation and re-establish the facts. He adds that B's law provides only for conviction-based confiscation. Under Recommendation 38 and its Interpretive Note, which response is expected of B?",
    options: [
      "Decline, because assistance with non-conviction-based orders is optional when domestic law lacks that form of confiscation",
      "Open a domestic investigation first, and enforce the order only if B's police reach the same findings of fact",
      "Ask Country A to convict the official in absentia first, since only conviction-based orders can be enforced abroad",
      "Enforce the order, relying on A's findings of fact, since assistance is expected at least where the offender has fled"
    ],
    answer: [3],
    explanation: "INR.38 para 1 says that countries should be able to act on requests based on both conviction-based and non-conviction-based confiscation. Footnote 93 adds that, at a minimum, they should assist where the perpetrator is unavailable because of death, flight or absence, or is unknown, to the extent consistent with fundamental principles of domestic law. Para 2 says the requested country should be able to rely on the findings of fact in the foreign order, and that enforcement should not depend on a domestic investigation. The runner-up, a parallel domestic investigation, is therefore exactly what INR.38 rules out.",
    source: [
      { label: "FATF Recommendations (updated June 2026), R.38 and INR.38 paras 1-2 and footnote 93 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "FATF-009", domain: 2, topic: "INR.4: property held by non-bona fide third parties", hy: false, difficulty: "hard",
    q: "Prosecutors in Country E are investigating Dario F., suspected of laundering EUR 6 million of drug proceeds. Asset tracing shows five items. A villa is registered to his brother-in-law, but Dario lives in it and pays all its costs. A flat was sold by Dario at market value to an unrelated buyer who paid with a mortgage. A yacht was 'sold' to a company owned by his girlfriend for 10% of its market value. Shares bought with drug money were sold and the proceeds spent. A car was bought from Dario in good faith at full price by a dealer. Under the Interpretive Note to Recommendation 4, which items are examples of property held by non-bona fide third parties that may be treated as criminal property or property of corresponding value? (Choose two.)",
    options: [
      "The flat bought at market value by the unrelated buyer with a mortgage",
      "The villa registered to the brother-in-law but under Dario's effective control",
      "The car bought from Dario in good faith and at full price by the dealer",
      "The yacht transferred to the girlfriend's company for 10% of its market value",
      "The spent share proceeds, which can only be pursued against the buyer of the shares"
    ],
    answer: [1, 3],
    explanation: "INR.4 para 3 says that criminal property and property of corresponding value extend to property owned or held by third parties, but without prejudicing the rights of bona fide third parties. It gives two examples: property under the defendant's effective control but held by family members, associates or legal persons, and property transferred for an amount significantly above or below market value. The market-value flat and the dealer's car were acquired in good faith. The value of the spent proceeds can be recovered from Dario's other assets as property of corresponding value, not from an innocent buyer.",
    source: [
      { label: "FATF Recommendations (updated June 2026), INR.4 para 3 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "FATF-010", domain: 2, topic: "R.4: managing seized assets that lose value", hy: false, difficulty: "medium",
    q: "Police in Country G seize assets from an organised crime group: 14 luxury cars, a refrigerated cargo of seafood, a 30-metre yacht that costs EUR 25,000 a month to moor and maintain, and EUR 3 million in bank balances. The trial is expected to take three years. Storage costs already exceed EUR 40,000 a month, and the cars are losing value. The group's lawyers argue that nothing may be sold before final confiscation. Under Recommendation 4 and its Interpretive Note, what is the BEST approach?",
    options: [
      "Release the depreciating assets to their owners on undertakings, and keep only the bank balances frozen",
      "Preserve the assets' value through asset management, including a pre-confiscation sale of perishable and depreciating assets where appropriate",
      "Keep every asset in storage until final judgment, since any sale before confiscation breaches the owners' rights",
      "Transfer all the assets at once into an asset recovery fund for law enforcement use"
    ],
    answer: [1],
    explanation: "R.4(h) and INR.4 para 14 require effective mechanisms for managing, preserving and, when necessary, disposing of frozen, seized or confiscated property. They state that preserving value should include pre-confiscation sale where appropriate, so the sale proceeds stand in place of the assets. Releasing the assets would risk their dissipation. An asset recovery fund (para 15) receives property only after it has been confiscated, not while the case is pending.",
    source: [
      { label: "FATF Recommendations (updated June 2026), R.4(h) and INR.4 paras 14-15 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "FATF-011", domain: 2, topic: "R.39: extradition of a country's own national", hy: false, difficulty: "medium",
    q: "Country H charges Ilir M. with laundering EUR 12 million of fraud proceeds and asks Country J to extradite him. Ilir is a national of J and now lives there, and J's constitution bars the extradition of its nationals. J's justice ministry also notes that J calls its offence 'concealment of criminal assets' rather than 'money laundering'. Ilir owns a large property portfolio in J and is a party to a pending civil suit. Under Recommendation 39, what should J do?",
    options: [
      "Refuse the request and close the file, since the constitutional bar ends J's obligations",
      "Refuse the request on dual criminality grounds, since J's offence has a different name",
      "At H's request, submit the case without undue delay to its own authorities for prosecution, and cooperate with H on evidence",
      "Extradite Ilir despite the constitution, since the FATF Standards override domestic constitutional law"
    ],
    answer: [2],
    explanation: "Under R.39, each country should either extradite its own nationals or, if it refuses solely on grounds of nationality, submit the case without undue delay to its own authorities for prosecution, at the requesting country's request. The two countries should cooperate on procedural and evidentiary aspects. Where dual criminality is required, it is met if both countries criminalise the underlying conduct, whatever they call the offence. The property portfolio and the civil suit are irrelevant to the extradition question.",
    source: [
      { label: "FATF Recommendations (updated June 2026), R.39 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "FATF-012", domain: 2, topic: "R.37: MLA, bank secrecy and legal professional privilege", hy: true, difficulty: "hard",
    q: "Prosecutors in Country M are investigating a corrupt procurement official and send a mutual legal assistance request to Country S. They ask for (1) account-opening files and statements from a bank in S, and (2) a law firm's file of legal advice given to the official on his criminal defence. S's central authority proposes to refuse the whole request. It cites S's banking law, which imposes strict secrecy on customer information, and the professional secrecy that binds S's lawyers. Under Recommendation 37, what is the correct position?",
    options: [
      "S may not refuse the bank records on secrecy grounds, but it may withhold information held under legal professional privilege",
      "S may refuse the bank records, since financial secrecy laws are a recognised ground for refusal under Recommendation 37",
      "S must provide both, since neither banking secrecy nor legal professional privilege may be raised against MLA requests",
      "S may refuse both, unless M first obtains a court order in S lifting the secrecy obligations"
    ],
    answer: [0],
    explanation: "R.37(d) says countries should not refuse mutual legal assistance because laws require financial institutions or DNFBPs to maintain secrecy or confidentiality. The exception is where the information is held in circumstances where legal professional privilege or legal professional secrecy applies. R.9 likewise says financial secrecy laws should not inhibit implementation of the Recommendations. The runner-up overlooks the privilege carve-out for the defence file. Requiring the requesting country to obtain a local court order first would be an unduly restrictive condition, which R.37(a) prohibits.",
    source: [
      { label: "FATF Recommendations (updated June 2026), R.9 and R.37(a) and (d) – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "FATF-013", domain: 2, topic: "INR.40: onward use of information from a foreign supervisor", hy: false, difficulty: "medium",
    q: "The banking supervisor of Country T is examining the group-wide controls of a bank headquartered in T. It asks the supervisor in Country V, which oversees the group's subsidiary there, for samples of customer files and transaction records, and V provides them under the two supervisors' MoU. T's supervisor then finds evidence of a possible crime and wants to pass the files to T's prosecutors. T's supervisor is under no legal obligation to report the matter. Under the Interpretive Note to Recommendation 40, what must T's supervisor do?",
    options: [
      "Pass the files to the prosecutors, since information may be used for any purpose once lawfully received",
      "Destroy the files, since information exchanged between supervisors may never leave the supervisory function",
      "Seek the consent of the subsidiary in Country V, since the files concern that subsidiary's customers",
      "Obtain prior authorisation from V's supervisor before passing the files on to the prosecutors"
    ],
    answer: [3],
    explanation: "INR.40 para 12 lets financial supervisors exchange AML/CFT information, including customer files and transaction samples, particularly within a group. Under para 14, any dissemination or use of that information, for supervisory or non-supervisory purposes, is subject to prior authorisation by the requested supervisor. The only exception is when the requesting supervisor is under a legal obligation to disclose, and it must then promptly inform the requested authority. Neither unrestricted use nor destruction is correct, and the customer or the subsidiary has no consent role.",
    source: [
      { label: "FATF Recommendations (updated June 2026), INR.40 paras 3, 12 and 14 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "FATF-014", domain: 2, topic: "Egmont Principles (2025): scoping an FIU request", hy: false, difficulty: "hard", changed: "Egmont Principles for Information Exchange revised July 2025",
    q: "Nadia, an analyst at the FIU of Country W, is working on a crypto-investment fraud. She has found transfers from the main suspect to exchanges in three countries. Her supervisor wants to send one request marked 'URGENT' through the Egmont Secure Web to a distribution list of 30 FIUs, asking for all information on the suspect over the past 15 years. No victim funds are at immediate risk, and W's police have already sent a formal request to one of the three countries. What should Nadia recommend, based on the Egmont Group's Principles for Information Exchange (revised July 2025)?",
    options: [
      "Send the request as proposed, since FIUs should seek the widest possible range of cooperation",
      "Send specific requests to the three linked FIUs, explaining each link and why a long period is needed, and drop the urgent marking",
      "Send no FIU request at all, since the police request means that any parallel channel is prohibited",
      "Send the request to all 30 FIUs but limit it to five years, since the Principles cap the period a request may cover"
    ],
    answer: [1],
    explanation: "The revised Principles say requests should be well defined and specific, limited to what is necessary and proportionate, and should clearly justify a particularly long period (para 20). Requests sent to several FIUs must explain the link with each country and should not go to large distribution lists (para 25). Urgent requests are for cases where a timely response is critical and should be avoided where the information has already been requested through other channels, such as law enforcement (para 21 and footnote 2). Nothing prohibits a proportionate FIU-to-FIU request alongside a police request, and the Principles set no five-year cap.",
    source: [
      { label: "Egmont Group – Principles for Information Exchange between FIUs (rev. July 2025), paras 20-21 and 25", url: "https://egmontgroup.org/wp-content/uploads/2022/07/EG-Principles-for-Information-Exchange-Revised-July-2025.pdf" }
    ]
  },
  {
    id: "FATF-015", domain: 2, topic: "Egmont Principles: lawful grounds to refuse a counterpart FIU", hy: false, difficulty: "medium",
    q: "The FIU of Country Y receives a request from FIU Z about a local resident suspected of laundering the proceeds of tax fraud. Last year, information that Y had sent to Z was leaked to the press, and Z has since ignored Y's last four requests without explanation. Y and Z have no bilateral MoU, but both are Egmont members. Which actions by Y's FIU are consistent with the Egmont Group's Principles for Information Exchange? (Choose two.)",
    options: [
      "Refuse to provide the information if Z cannot protect it effectively, and explain the refusal",
      "Ignore the request without replying, since refusals need no explanation under the Principles",
      "Refuse the request because it concerns tax fraud, which falls outside FIU-to-FIU exchange",
      "Consider refusing on grounds of lack of reciprocity or recurring inadequate cooperation, and justify the decision",
      "Refuse the request because Y and Z have not signed a bilateral MoU on information exchange"
    ],
    answer: [0, 3],
    explanation: "The Principles allow an FIU to refuse to provide information if the requesting FIU cannot protect it effectively (para 31). Cooperation may also be refused for lack of reciprocity or recurring inadequate cooperation (para 33). All refusals must be justified, and FIUs should make every effort to explain them. A request may not be refused because it also involves fiscal matters (para 30). An MoU is needed only where a country's law requires one (para 17), and the scenario does not suggest that.",
    source: [
      { label: "Egmont Group – Principles for Information Exchange between FIUs (rev. July 2025), paras 17 and 30-33", url: "https://egmontgroup.org/wp-content/uploads/2022/07/EG-Principles-for-Information-Exchange-Revised-July-2025.pdf" }
    ]
  },
  {
    id: "FATF-016", domain: 2, topic: "UNSCR 1373: acting on another country's designation request", hy: true, difficulty: "hard",
    q: "Country X designates the 'Northern Relief Network' as a terrorist entity under its national regime implementing UNSCR 1373 and asks Country Z to give effect to the designation. The network holds an account at a bank in Z. X provides identifying details and a summary of intelligence linking the network to attacks. Z's officials note that the network is not on any UN sanctions list and that no criminal case against it is open in Z. Under Recommendation 6 and its Interpretive Note, what should Z do?",
    options: [
      "Freeze the account automatically, since UNSCR 1373 requires every state to apply other states' designations",
      "Decline, since only designations by a UN Security Council committee can create freezing obligations",
      "Promptly decide, under its own legal standard, whether there are reasonable grounds to designate, and if so designate and freeze without delay",
      "Wait until a criminal case is opened in Z, since designations should follow a prosecution of the entity"
    ],
    answer: [2],
    explanation: "UNSCR 1373 has no UN list. Designations are made at the national or supranational level, either on a country's own motion or at another country's request (INR.6 para 3). A country receiving a request should promptly decide whether it is supported by reasonable grounds or a reasonable basis, applying its own legal standard. Designations should not depend on a criminal proceeding (para 4(b) and (d)). The freezing obligation is triggered by the receiving country's own designation (para 5), so there is no automatic freeze, but declining because there is no UN listing is wrong too.",
    source: [
      { label: "FATF Recommendations (updated June 2026), INR.6 paras 3-5 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
      { label: "UN Counter-Terrorism Committee – resolution 1373 (2001) and the Committee monitoring its implementation", url: "https://www.un.org/securitycouncil/ctc/node/38670" }
    ]
  },
  {
    id: "FATF-017", domain: 2, topic: "R.6 scope: the 1988 (Taliban) list as a 1267 successor regime", hy: true, difficulty: "hard",
    q: "Kestrel Bank's sanctions screening uses the 'ISIL (Da'esh) and Al-Qaida Sanctions List' as its only UN terrorism list, because its policy says that 'R.6 covers resolution 1267'. A new customer, a money changer, is a confirmed match to an individual designated for supporting the Taliban by the UN Security Council Committee established under resolution 1988. The analyst closes the alert because the person is 'not on the 1267 list'. The customer holds USD 85,000 at the bank. What is the BEST assessment?",
    options: [
      "The closure is wrong: R.6 covers resolution 1267 and its successors, including 1988, so the funds must be frozen without delay and the screening fixed",
      "The closure is correct, since designations relating to the Taliban fall under Recommendation 7 rather than Recommendation 6",
      "The closure is correct, since 1988 designations bind only states that have adopted a matching national designation",
      "The closure is wrong, but an STR is enough, since 1988 designations do not carry an asset freeze obligation"
    ],
    answer: [0],
    explanation: "INR.6 says that R.6 applies to resolution 1267 and its successor resolutions, which include resolution 1988 (2011). Designations relating to the Taliban are made by the 1988 Committee (para 3). Countries must freeze, without delay, the assets of persons designated by both the 1267 and 1988 Committees (para 5), and institutions must report frozen assets (para 6(e)). R.7 covers proliferation, not the Taliban. The runner-up wrongly treats the 1988 list as carrying no freeze obligation.",
    source: [
      { label: "FATF Recommendations (updated June 2026), INR.6 paras 1, 3, 5 and footnote 12 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "FATF-018", domain: 2, topic: "UN freezes: basic expenses (UNSCR 1452) and the Ombudsperson", hy: true, difficulty: "hard",
    q: "Hamid S., a customer of Caspian Bank, was added to the UN ISIL (Da'esh) and Al-Qaida Sanctions List in 2025, and the bank froze his EUR 140,000 account without delay. Hamid's lawyer writes that his client has filed a delisting petition with the UN Office of the Ombudsperson. He asks the bank to release EUR 3,000 a month for rent, food and medicines, and EUR 20,000 for legal fees. The relationship manager suggests releasing the rent money on humanitarian grounds while the petition is pending. What should the bank do?",
    options: [
      "Release the rent money, since a pending petition to the Ombudsperson suspends the freeze for basic needs",
      "Release all the requested amounts, since basic expenses and legal fees are automatically exempt from UN freezes",
      "Close the account and return the balance, since a pending delisting petition makes the freeze unenforceable",
      "Keep the funds frozen and refer the request to the national competent authority, which can authorise access under the UNSCR 1452 procedure"
    ],
    answer: [3],
    explanation: "Under INR.6 para 10, countries authorise access to frozen funds for basic expenses, certain fees and extraordinary expenses under the procedures of UNSCR 1452. For basic expenses, the State notifies the Committee and may proceed if no negative decision is taken within three working days. The bank cannot decide this itself. The freeze ends only when the Committee delists the person (para 7), and the Ombudsperson process under UNSCR 1904 is a route to delisting, not a suspension of the freeze (para 11). Legal fees and living costs are not automatically exempt.",
    source: [
      { label: "FATF Recommendations (updated June 2026), INR.6 paras 7, 10 and 11 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
      { label: "UN Security Council 1267 Committee – exemptions to the assets freeze (resolution 1452, as amended by resolution 1735)", url: "https://main.un.org/securitycouncil/sanctions/1267/exemptions/assetsfreeze" }
    ]
  },
  {
    id: "FATF-019", domain: 2, topic: "Humanitarian carve-out: UNSCR 2761 and INR.6 (June 2026)", hy: false, difficulty: "hard", changed: "FATF INR.6 revised June 2026 to incorporate UNSCRs 2664, 2761 and 2615",
    q: "Sahel Water Trust, an NGO that is an implementing partner in the UN humanitarian response plan for its country of operation, asks its European bank to transfer EUR 60,000 to well-drilling contractors. The district is one where a group on the UN ISIL (Da'esh) and Al-Qaida Sanctions List controls local checkpoints and charges aid convoys a 'road fee'. The bank's sanctions policy, written in 2023, says that the UNSCR 2664 humanitarian carve-out 'does not apply to the ISIL/Al-Qaida regime after December 2024'. The NGO is a long-standing customer with sound controls. Which statement BEST reflects the current international framework?",
    options: [
      "The policy is right: the 2664 carve-out for the ISIL/Al-Qaida regime lapsed, so any payment that may reach the group needs a Committee exemption",
      "The policy is outdated: resolution 2761 (2024) keeps the 2664 carve-out in force for the ISIL/Al-Qaida regime, and the FATF revised INR.6 in June 2026 to reflect this",
      "The policy is outdated, because the 2664 carve-out now permits any payment by any NGO to a designated group without limits",
      "The policy is right, because FATF Recommendation 6 requires freezing without delay and allows no humanitarian exceptions"
    ],
    answer: [1],
    explanation: "UNSCR 2664 (2022) created a humanitarian carve-out from UN asset freezes, but for the 1267 ISIL/Al-Qaida regime it was limited to two years. In December 2024, resolution 2761 decided that it would continue to apply to that regime. In June 2026, the FATF revised INR.6 (para 5bis and footnote 17) to require compliance with UNSCRs 2664, 2761 and 2615. Payments necessary for the timely delivery of humanitarian assistance by the actors listed in 2664 para 1 are therefore not a breach of the freeze. The carve-out is limited to those actors and to humanitarian purposes, so it is not a blanket licence for any NGO payment.",
    source: [
      { label: "FATF Recommendations (updated June 2026), INR.6 para 5bis, footnotes 15 and 17, and table of amendments (June 2026) – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" },
      { label: "UN press release SC/15924 (6 Dec 2024) – resolution 2761 extends the humanitarian carve-out for the ISIL/Al-Qaida regime", url: "https://press.un.org/en/2024/sc15924.doc.htm" }
    ]
  },
  {
    id: "FATF-020", domain: 2, topic: "Basel: an applicant exited by another bank", hy: false, difficulty: "medium",
    q: "Marlow Savings is onboarding Viktor P., an importer of used cars who wants to move his business accounts from Pellam Bank. He says Pellam 'closed the accounts for no reason'. A branch employee who used to work at Pellam mentions that Pellam exited him after months of cash deposits it could not explain. Viktor's documents are in order, his company is properly registered, and he offers to deposit EUR 400,000 in the first month. Under the Basel Committee's guidelines on sound management of ML/FT risks, what should Marlow do?",
    options: [
      "Accept him at standard risk, since customers have the right to move their business from one bank to another",
      "Reject him outright, since a customer exited by another bank may never be accepted by a new one",
      "Consider rating him higher risk and applying EDD, and consider filing an STR or declining him, in line with its own risk assessment",
      "Ask Pellam Bank for its internal investigation file and make no decision until Pellam supplies it"
    ],
    answer: [2],
    explanation: "Paragraph 43 of the Basel guidelines says that customers have the right to move their business, but a bank should still do its own due diligence. If it has reason to believe another bank refused the applicant because of concerns about illicit activity, it should consider classifying the applicant as higher risk and applying EDD, filing an STR and/or not accepting the customer, according to its own risk assessment. Accepting at standard risk ignores the warning. An automatic ban is not required. Making the decision depend on another bank's internal file is not what the guidelines call for.",
    source: [
      { label: "BCBS – Sound management of risks related to ML and FT (rev. July 2020), para 43", url: "https://www.bis.org/bcbs/publ/d505.pdf" }
    ]
  },
  {
    id: "FATF-021", domain: 2, topic: "Basel: consolidated monitoring of a customer across a group", hy: false, difficulty: "hard",
    q: "Harbourline Group's bank in Country A, its brokerage subsidiary in Country B and its private bank branch in Country C each hold accounts for Cormac D., a property developer. Each unit monitors him locally and rates him medium risk. Group compliance learns from a media report that he is under investigation in Country A for bribery. The branch in C holds EUR 18 million for him on a fiduciary basis, and the brokerage recently transferred EUR 5 million of his securities to an unrelated third party. Group policy does not require units to tell head office which customers they share. Under the Basel Committee's guidelines, what is the MOST important gap to fix?",
    options: [
      "The group cannot see shared customers across its units, so it should identify all accounts held for him and monitor the relationship on a consolidated basis",
      "The branch in C should move the fiduciary assets onto its balance sheet so that its local monitoring system can cover them",
      "Each unit should re-rate him on its own under local rules, since host-country requirements govern local customers",
      "The brokerage subsidiary should be taken out of group AML policy, since securities firms are subject to different requirements"
    ],
    answer: [0],
    explanation: "The Basel guidelines require group policies for finding out whether other branches or subsidiaries hold accounts for the same customer (para 79). Significant relationships should be monitored on a consolidated basis, whether the assets are on balance sheet, off balance sheet, under management or held on a fiduciary basis, and wherever they are held (para 73). Subsidiaries and branches should proactively tell head office about higher-risk customers (para 77). Mixed groups should share customer information across banking and securities business (para 82). Moving the fiduciary assets onto the balance sheet would not fix the missing group-wide view, and local re-rating unit by unit repeats the original problem.",
    source: [
      { label: "BCBS – Sound management of risks related to ML and FT (rev. July 2020), paras 73, 77, 79 and 82", url: "https://www.bis.org/bcbs/publ/d505.pdf" }
    ]
  },
  {
    id: "FATF-022", domain: 2, topic: "Basel: numbered accounts", hy: false, difficulty: "medium",
    q: "Aurelia Private Bank offers numbered accounts to wealthy clients who value discretion. For one such account, the client's identity is known only to the relationship manager, who keeps the passport copy in a locked drawer. The account receives large transfers from offshore companies. During an internal review, the relationship manager refuses to disclose the client's name to the chief AML/CFT officer, citing a promise of confidentiality. Under the Basel Committee's guidelines, what is the correct position?",
    options: [
      "Numbered accounts are anonymous accounts by definition and must be closed immediately",
      "The relationship manager is right, since numbered accounts give the client confidentiality even within the bank",
      "The arrangement is acceptable as long as the relationship manager certifies each year that CDD has been carried out",
      "Numbered accounts are allowed, but full CDD applies, enough staff must know the identity, and the AML/CFT officer must have full access"
    ],
    answer: [3],
    explanation: "Paragraph 44 of the Basel guidelines says that confidential numbered accounts should not function as anonymous accounts and are subject to exactly the same CDD as all other accounts. The holder's identity must be verified and known to enough staff for effective due diligence, especially where other risk factors are present. The bank's control functions, in particular the chief AML/CFT officer, and its supervisors must have full access to this information. Numbered accounts are not banned outright, but knowledge held by one person, or a yearly self-certification, does not meet the standard.",
    source: [
      { label: "BCBS – Sound management of risks related to ML and FT (rev. July 2020), para 44", url: "https://www.bis.org/bcbs/publ/d505.pdf" }
    ]
  },
  {
    id: "FATF-023", domain: 2, topic: "OECD CRS: Controlling Persons of a trust and the FATF link", hy: false, difficulty: "hard",
    q: "Fjord Bank, in a country that applies the OECD Common Reporting Standard (CRS), opens an account for the Solvik Trust, which is a Passive NFE for CRS purposes. The trustee is a licensed trust company. The settlor is Solvik Holdings Ltd, a company owned 60% by Ingrid S. and 40% by her brother. The beneficiaries are Ingrid's three children, and a lawyer acts as protector but has never used his powers. The onboarding team recorded only the trustee as a Controlling Person because it 'is the only party exercising control'. What should the bank's CRS and AML teams conclude?",
    options: [
      "The record is correct, since only persons who actually exercise control over a trust are its Controlling Persons",
      "The settlor, trustee, protector and beneficiaries are always Controlling Persons, and because the settlor is a company, its own Controlling Persons must be identified too",
      "Only the beneficiaries need to be added, since a corporate settlor and an inactive protector cannot be Controlling Persons",
      "The AML file should record Ingrid, but the CRS file need not, since the CRS does not use the FATF beneficial ownership concept"
    ],
    answer: [1],
    explanation: "The CRS defines Controlling Persons of a trust as the settlor(s), trustee(s), protector(s), beneficiaries or classes of beneficiaries, and anyone else exercising ultimate effective control. The term must be interpreted consistently with the FATF Recommendations. The Commentary says that the settlor, trustee, protector and beneficiaries must always be treated as Controlling Persons, whether or not they exercise control. Where the settlor is an Entity, its own Controlling Persons must be identified and reported as Controlling Persons of the trust. The CRS term corresponds to 'beneficial owner' under FATF R.10, and institutions may rely on AML/KYC procedures consistent with the FATF Recommendations, so the last option is wrong.",
    source: [
      { label: "OECD – Consolidated text of the Common Reporting Standard (2025), Section VIII(D)(6) and Commentary paras 132-137", url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/04/consolidated-text-of-the-common-reporting-standard-2025_e478bc04/055664b1-en.pdf" }
    ]
  },
  {
    id: "FATF-024", domain: 2, topic: "Who assesses a country: FATF, FSRBs, IMF and World Bank", hy: true, difficulty: "medium",
    q: "A small island state that is not a FATF member is due to be assessed in the current round. Its finance minister asks how the process works. Which statements are accurate? (Choose two.)",
    options: [
      "The IMF sets the AML/CFT standards against which the state will be assessed",
      "An FSRB assessment uses the FSRB's own methodology, which differs from the FATF Methodology",
      "The assessment may be carried out by the state's FSRB, or by the IMF or World Bank, all using the FATF Methodology",
      "The World Bank decides whether the state is placed on the list of jurisdictions under increased monitoring",
      "AML/CFT issues are also considered in other IMF work, such as the Financial Sector Assessment Program"
    ],
    answer: [2, 4],
    explanation: "The FATF Methodology applies to mutual evaluations by the FATF and FSRBs and to third-party assessments by the IMF and World Bank, so all of them use the same method. The IMF says that the FATF has primary responsibility for the AML/CFT standards, and that AML/CFT is also considered in IMF work such as the FSAP. The FATF, not the World Bank, identifies jurisdictions under increased monitoring, working with the FSRBs on their progress.",
    source: [
      { label: "FATF Methodology (updated June 2026), Introduction para 4 and footnote 1 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Methodology_2026_eng.pdf" },
      { label: "IMF factsheet – The Fight Against Money Laundering and Terrorism Financing", url: "https://www.imf.org/en/about/factsheets/sheets/2023/fight-against-money-laundering-and-terrorism-financing" }
    ]
  },
  {
    id: "FATF-025", domain: 2, topic: "Which Recommendation applies: secrecy law blocking a respondent's answer (R.9)", hy: false, difficulty: "hard",
    q: "During a correspondent review, Lindqvist Bank asks its respondent, Banco Serrano in Country S, about the customer behind a series of USD 900,000 payments to a shell company. Banco Serrano replies that S's banking secrecy law makes it a criminal offence to disclose customer information to any foreign bank, even in answer to a correspondent's request. S's latest mutual evaluation notes the same problem. Banco Serrano's own AML programme is otherwise rated satisfactory, and its CBDDQ is up to date. Which FATF Recommendation does S's secrecy law MOST directly conflict with?",
    options: [
      "Recommendation 40, on international cooperation between competent authorities",
      "Recommendation 13, which makes the respondent's home supervisor responsible for correspondent due diligence",
      "Recommendation 9, which requires that financial institution secrecy laws not inhibit implementation of the Recommendations",
      "Recommendation 21, which protects financial institutions that disclose information in good faith"
    ],
    answer: [2],
    explanation: "R.9 requires that financial institution secrecy laws not inhibit implementation of the FATF Recommendations. The Methodology names sharing between financial institutions where required by R.13, R.16 or R.17 as a particular concern. R.13 sets the correspondent's own due diligence obligations, not a duty of the respondent's supervisor, so that option misstates it. The runner-up, R.40, covers cooperation between competent authorities, not between banks. R.21 deals with safe harbour for STR filers and tipping-off.",
    source: [
      { label: "FATF Methodology (updated June 2026), R.9, criterion 9.1 and footnote 70 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Methodology_2026_eng.pdf" },
      { label: "FATF Recommendations (updated June 2026), R.9 and R.13 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  }
]);
