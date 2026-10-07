window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  // ---------------- Screening hit adjudication and blocked-property handling ----------------
  {
    id: "SANP-001", difficulty: "hard", domain: 3, topic: "Hit adjudication: gathering identifiers before deciding (OFAC FAQ 5, 2026)", hy: true,
    changed: "OFAC FAQ 5 revised Sep 2026: OFAC does not confirm potential matches",
    q: "In October 2026, Harbourview Bank, a US bank, holds an incoming USD 48,000 wire for its customer Marisol Trading LLC while an alert is reviewed. The ordering customer, 'Ahmad Karimi', is a full-name match to an individual on the SDN List under a counter-terrorism program. The SDN entry gives a date of birth, a passport number and an address in a third country. The payment message contains only the name and a city in a fourth country, and the remitter banks with a foreign correspondent. The relationship manager stresses that Marisol has banked with Harbourview for 12 years without problems. What should the analyst do NEXT?",
    options: [
      "Obtain more identifying details on the remitter, such as date of birth, ID number and full address, through the remitting bank or the customer, and compare them with the full SDN entry",
      "Ask OFAC's Compliance Hotline to confirm whether the remitter is the listed person, and keep the funds on hold until OFAC answers",
      "Block the funds now and report them to OFAC within 10 business days, because a full-name match is enough to treat the hit as valid",
      "Release the wire, because the city in the message differs from the SDN address and the customer has a long, clean history"
    ],
    answer: [0],
    explanation: "OFAC FAQ 5 (updated September 2026) says that verifying or disqualifying a potential match may require gathering additional information from the parties involved, and then comparing all details of the listing with that information. The runner-up, calling OFAC, does not work: the revised FAQ states that OFAC does not confirm potential matches or false positives and expects a risk-based decision by the organisation. A name match alone is not a valid match, so blocking now is premature. A city that differs from the listed address does not by itself disqualify a full-name match, and the customer's long history concerns the beneficiary, not the remitter.",
    source: [
      { label: "OFAC FAQ 5 – determining a valid match (updated 9 September 2026)", url: "https://ofac.treasury.gov/faqs/5" }
    ]
  },
  {
    id: "SANP-002", difficulty: "hard", domain: 3, topic: "Unblocking property blocked in error (OFAC FAQ 1196)", hy: false,
    q: "In March 2026, Lakeport Bank, a US bank, blocked a USD 86,500 incoming payment for 'Novak Engineering s.r.o.' after a hit against an SDN entity with a nearly identical name, and it filed a blocking report with OFAC. Three weeks later the analyst obtains the beneficiary's commercial registry extract, tax ID and ownership chart. They show a different registration number, a different country of incorporation and owners with no link to any blocked person. The corporate banking team wants the funds released today. Payment operations proposes applying to OFAC for a specific license, and the treasury team suggests simply releasing the funds because the original blocking was a mistake. What is the BEST course of action?",
    options: [
      "Apply to OFAC for a specific license, because only a license can authorize release of property once a blocking report has been filed",
      "Release the funds without any further filing, because property blocked by mistake was never blocked property and needs no report",
      "Unblock the funds and file an unblocking report with OFAC that cites FAQ 1196 for mistaken identity, keeping the evidence on record",
      "Keep the funds blocked until OFAC removes the similar-named entity from the SDN List or confirms that the hit was a false positive"
    ],
    answer: [2],
    explanation: "OFAC FAQ 1196 says property blocked and reported because of mistaken identity may be unblocked, with an unblocking report under 31 CFR 501.603(b)(3) that cites FAQ 1196 instead of a license. A Compliance Release under 31 CFR 501.806 is an alternative. The runner-up, a specific license, is what OFAC expects when property was correctly blocked but its status later changed, for example after a change in ownership. Releasing with no report ignores the unblocking report rule, and OFAC does not confirm false positives, so waiting for it would leave the funds frozen for no reason.",
    source: [
      { label: "OFAC FAQ 1196 – unblocking property blocked in error", url: "https://ofac.treasury.gov/faqs/1196" },
      { label: "31 CFR 501.603 – reports of blocked, unblocked or transferred property", url: "https://www.ecfr.gov/current/title-31/section-501.603" }
    ]
  },
  {
    id: "SANP-003", difficulty: "hard", domain: 3, topic: "Blocking report deadline: counting business days (calculation)", hy: true,
    q: "On Wednesday 20 May 2026, Cedar Ridge Bank's filter stops an outgoing USD 215,000 wire from its customer to a supplier in Türkiye. The investigation shows that the supplier is 50% owned by an SDN, so the bank blocks the funds the same day and moves them into an interest-bearing blocked account. Monday 25 May 2026 is Memorial Day, a federal holiday. The operations manager says the property can simply be included in the annual report of blocked property. By what date must the initial blocking report reach OFAC?",
    options: [
      "Wednesday 3 June 2026",
      "Thursday 4 June 2026",
      "Monday 1 June 2026",
      "Wednesday 30 September 2026"
    ],
    answer: [1],
    explanation: "31 CFR 501.603(b)(1) requires an initial blocking report within 10 business days from the date the property becomes blocked. Counting from 20 May and skipping the weekends and Memorial Day gives 21, 22, 26, 27, 28, 29 May and 1, 2, 3, 4 June, so the deadline is Thursday 4 June. The runner-up, 3 June, counts Memorial Day as a business day. 1 June comes from counting 10 calendar days (to Saturday 30 May) and rolling forward to the next business day. The annual report, due by 30 September and covering property held on 30 June, comes on top of the initial report and does not replace it.",
    source: [
      { label: "31 CFR 501.603 – initial and annual blocking reports", url: "https://www.ecfr.gov/current/title-31/section-501.603" }
    ]
  },
  {
    id: "SANP-004", difficulty: "hard", domain: 3, topic: "Blocked foreign-currency funds under a letter of credit: reporting the value", hy: false,
    q: "Brookline Bank, a US bank, confirmed a EUR 3.2 million letter of credit for a fertilizer shipment. When the beneficiary presents documents, screening shows that it became 60% owned by an SDN after the credit was issued. The bank has already received the euro cover funds from the issuing bank, so it blocks those EUR 3.2 million and holds the shipping documents. The trade operations team is completing the initial blocking report for the blocked funds. A colleague says that anything linked to a letter of credit is reported at zero. How should the bank report the value of the blocked funds?",
    options: [
      "Report USD 0.00 and describe the euro amount in the narrative, because value under a letter of credit is always reported as zero",
      "Report the amount in euros, the currency in which the funds were received, without converting it",
      "Report the value in US dollars, give the euro amount and the notional exchange rate in the narrative, and attach copies of the credit and related documents",
      "Leave the value out of the initial report and show it only in the annual report, valued as of 30 June"
    ],
    answer: [2],
    explanation: "Under 31 CFR 501.603(b)(1)(ii)(F), transactions blocked in foreign currencies must be reported in US dollars, with the foreign currency amount and a notional exchange rate in the narrative. Paragraph (I) requires copies of any letter of credit, bill of lading, invoice or other relevant documents. The runner-up, USD 0.00, applies to blocked trade finance documents themselves (and to loans and other negative balances), not to blocked funds. Reporting in euros ignores the dollar rule, and the annual report, due by 30 September, comes on top of the 10-business-day initial report.",
    source: [
      { label: "31 CFR 501.603 – reporting the value of blocked property (foreign currency, trade documents)", url: "https://www.ecfr.gov/current/title-31/section-501.603" }
    ]
  },
  {
    id: "SANP-005", difficulty: "hard", domain: 3, topic: "Wind-down general licences: payments into blocked accounts", hy: true,
    q: "On 3 March 2026, OFAC designates Volgatrans Shipping, a Russian carrier, and issues a general license modelled on GL 126 (Rosneft/Lukoil). It authorizes transactions ordinarily incident and necessary to wind down transactions involving Volgatrans and entities it owns 50% or more, through 2 April 2026, provided that any payment to a blocked person is made into a blocked account. Kestrel Grain, a US exporter, owes Volgatrans USD 640,000 for voyages completed in January under a 2025 charter. Kestrel's CFO wants to pay the invoice on 20 March to Volgatrans's usual account at a bank in Cyprus. He also wants to sign, under the same license, a new charter for a voyage in May. What should Kestrel's bank advise?",
    options: [
      "Kestrel may pay the Cyprus account before 2 April, and may sign the May charter if it is concluded within the wind-down period",
      "Kestrel may pay the January freight only into a blocked account in Volgatrans's name, and the new May charter is not authorized",
      "Kestrel may not pay at all, because wind-down licenses cover only Volgatrans's majority-owned subsidiaries, not Volgatrans itself",
      "Kestrel may sign the May charter now, because a contract concluded during the wind-down period may be performed after it ends"
    ],
    answer: [1],
    explanation: "Wind-down general licenses such as GL 126 authorize only transactions ordinarily incident and necessary to winding down existing dealings, and only provided that any payment to a blocked person goes into a blocked account. Paying Volgatrans's free account in Cyprus, the runner-up, would breach that condition even within the license period. A new charter for a future voyage is new business, not wind-down, and nothing in the license authorizes performance after it expires. The license covers the named blocked person as well as its 50%-owned entities.",
    source: [
      { label: "OFAC General License 126 (22 October 2025) – wind down of transactions involving Rosneft or Lukoil", url: "https://ofac.treasury.gov/media/934706/download" }
    ]
  },
  // ---------------- Enforcement: voluntary self-disclosure and General Factors ----------------
  {
    id: "SANP-006", difficulty: "hard", domain: 3, topic: "OFAC voluntary self-disclosure: what qualifies", hy: true,
    q: "Larkspur Payments, a US money transmitter, finds that over two years it sent 31 transfers to persons in a comprehensively sanctioned country. Its general counsel reviews five possible ways the matter could reach OFAC. Under OFAC's Economic Sanctions Enforcement Guidelines, which notifications would or could be treated as a voluntary self-disclosure? (Choose two.)",
    options: [
      "A notification sent after state examiners who found the transfers during an examination tell Larkspur to report them to OFAC",
      "A complete report to OFAC, authorized by senior management after an internal audit, sent before any agency has learned of the conduct",
      "A detailed answer to an administrative subpoena that OFAC sends Larkspur after a bank rejected one of the transfers",
      "A notification first made to another federal agency, which treats it as a voluntary self-disclosure, assessed by OFAC case by case",
      "A detailed email that a payments analyst sends to OFAC on her own initiative, without telling senior management"
    ],
    answer: [1, 3],
    explanation: "Appendix A to 31 CFR Part 501 defines a voluntary self-disclosure as a self-initiated notification made before or when OFAC or another agency discovers the violation; it must be authorized by senior management when the subject is an entity. A notification to another agency that treats it as a voluntary self-disclosure may be considered one by OFAC case by case. A disclosure that results from a suggestion or order of a federal or state agency is not self-initiated, a response to an administrative subpoena never qualifies, and a disclosure by an individual without senior management's authorization does not count.",
    source: [
      { label: "31 CFR Part 501, Appendix A – Economic Sanctions Enforcement Guidelines (definitions)", url: "https://www.ecfr.gov/current/title-31/part-501/appendix-Appendix%20A%20to%20Part%20501" }
    ]
  },
  {
    id: "SANP-007", difficulty: "hard", domain: 3, topic: "OFAC General Factors: five-year look-back for sanctions history", hy: false,
    q: "In 2026, OFAC is assessing apparent violations by Ridgeway Freight, a US freight forwarder, involving shipments made in February 2023. Ridgeway's file shows a civil penalty settlement in 2017 for Sudan-related shipments, a cautionary letter in January 2019 about a Cuba-related payment, and a Finding of Violation in September 2022 for Iran-related services. Ridgeway's counsel argues that none of these matters should count, because none of them was a penalty imposed within the last three years. Which part of Ridgeway's history will OFAC generally consider under the 'sanctions history' factor?",
    options: [
      "Only the September 2022 Finding of Violation, because OFAC looks back five years from the start of its investigation in 2026",
      "All three matters, because the statute of limitations and OFAC's look-back period for sanctions history are both 10 years",
      "None of them, because only civil penalties count, and cautionary letters and Findings of Violation are not penalties",
      "The January 2019 cautionary letter and the September 2022 Finding of Violation, because OFAC looks back five years from the date of the transactions"
    ],
    answer: [3],
    explanation: "Under General Factor D.4 of the Enforcement Guidelines, sanctions history includes prior penalties, Findings of Violation and cautionary, warning or evaluative letters, but OFAC generally considers only the five years preceding the date of the transaction giving rise to the apparent violation. Counting back from February 2023 captures the 2019 letter and the 2022 Finding of Violation, but not the 2017 settlement. The runner-up measures the five years from the wrong date and so drops the 2019 letter. The 10-year figure is the statute of limitations, not the look-back, and letters and findings do count.",
    source: [
      { label: "31 CFR Part 501, Appendix A – General Factor D.4 (sanctions history)", url: "https://www.ecfr.gov/current/title-31/part-501/appendix-Appendix%20A%20to%20Part%20501" }
    ]
  },
  // ---------------- OFAC Framework for Compliance Commitments in practice ----------------
  {
    id: "SANP-008", difficulty: "hard", domain: 3, topic: "Framework: sanctions due diligence in mergers and acquisitions", hy: false,
    q: "Northgate Bancorp, a US bank holding company, has agreed to buy Solvista Pay, a Spanish payments fintech with 400,000 customers, in a deal due to close in 60 days. Solvista screens only against the EU consolidated list, and about 8% of its volume goes to corridors in the Middle East and Central Asia. Northgate's deal team wants sanctions compliance to join after closing, 'when integration starts'. The seller has offered a contractual warranty that Solvista has always complied with all applicable sanctions. Which approach BEST reflects OFAC's Framework for Compliance Commitments?",
    options: [
      "Accept the seller's sanctions warranty and rely on it to recover any losses from penalties that arise later",
      "Wait until closing, then commission internal audit to test Solvista's controls in the first post-acquisition audit cycle",
      "Run sanctions due diligence before closing, escalate the issues found to senior management, address them before the deal closes, and feed them into the risk assessment",
      "Require Solvista to exit all customers in the Middle East and Central Asia corridors before closing, which removes the need for further due diligence"
    ],
    answer: [2],
    explanation: "The 2019 Framework names mergers and acquisitions as an area that has caused many sanctions problems. It expects compliance to be integrated into the deal, with due diligence that identifies sanctions issues, escalates them to senior levels, addresses them before the transaction closes and feeds them into the risk assessment. Post-closing audit and testing, the runner-up, is a complement after the deal, not a substitute for pre-closing diligence. A warranty only shifts money, not OFAC liability, and blanket corridor exits are not risk-based and would not show past violations.",
    source: [
      { label: "OFAC – A Framework for OFAC Compliance Commitments (2019), Risk Assessment (M&A)", url: "https://ofac.treasury.gov/media/16331/download?inline" }
    ]
  },
  {
    id: "SANP-009", difficulty: "hard", domain: 3, topic: "Framework: compensating controls after a screening gap (BIC identifiers)", hy: true,
    q: "Internal audit at Meridian Trust Bank finds that the list entries for 14 designated foreign banks in the screening filter do not contain the banks' SWIFT BICs. Test messages that identify the beneficiary bank only by BIC, which is normal in SWIFT messages, pass the filter without an alert. The screening vendor says a permanent fix will take 10 weeks. The audit report also recommends a full root-cause analysis and a look-back over 18 months of payments. What should the sanctions officer do FIRST?",
    options: [
      "Record a temporary risk acceptance signed by the business head and wait for the vendor's permanent fix",
      "Complete the root-cause analysis first, so that any interim change does not mask the real cause of the gap",
      "Start the 18-month look-back first, because past payments to designated banks may already be apparent violations",
      "Put compensating controls in place now, such as adding the BICs to an internal list or holding payments with those BICs for review"
    ],
    answer: [3],
    explanation: "The Framework expects an organisation that learns of a weakness or a negative audit result to take immediate and effective action to identify and implement compensating controls until the root cause can be determined and remediated. It lists failing to include identifiers such as SWIFT BICs of designated banks as a common screening fault. The look-back, the runner-up, is necessary, but while it runs, new payments to designated banks could still pass the filter, so stopping further harm comes first. Waiting for the vendor or for the root-cause analysis leaves the gap open.",
    source: [
      { label: "OFAC – A Framework for OFAC Compliance Commitments (2019), Internal Controls and Testing", url: "https://ofac.treasury.gov/media/16331/download?inline" }
    ]
  },
  {
    id: "SANP-010", difficulty: "medium", domain: 3, topic: "Framework: role-specific training (lessons from Exodus, 2025)", hy: false,
    q: "BlueHarbor Wallet, a US company, offers free self-custody crypto wallet software and earns fees when users swap assets through partner exchanges. Its Terms of Use forbid use from embargoed countries. A review finds that its customer support agents, trained only in product troubleshooting, routinely suggest VPNs to fix connection problems, including for users who write that they are in Iran. No mechanism links the Terms of Use to day-to-day support work. Which remediation BEST addresses the weakness?",
    options: [
      "Rewrite the Terms of Use in stronger language and require every user to accept them again at the next login",
      "Give support staff role-specific sanctions training, with assessments, on spotting users in sanctioned places and escalating instead of helping",
      "Add a short sanctions module to the annual company-wide e-learning taken by all staff, in the same format for every role",
      "Rely on the partner exchanges' own geolocation controls, because BlueHarbor itself does not hold customer assets"
    ],
    answer: [1],
    explanation: "In December 2025, Exodus Movement settled with OFAC for USD 3.1 million after its support staff helped users in Iran and suggested VPNs, while Terms of Use banned such use but staff were not trained on them and no practical mechanism enforced them. The Framework expects training that gives job-specific knowledge, is tailored to high-risk staff and holds staff accountable through assessments. Stronger Terms of Use or generic e-learning would not change support agents' behaviour, and relying on partners ignores Exodus's own exposure.",
    source: [
      { label: "OFAC enforcement release (16 December 2025) – Exodus Movement, Inc.", url: "https://ofac.treasury.gov/media/934831/download?inline" },
      { label: "OFAC – A Framework for OFAC Compliance Commitments (2019), Training", url: "https://ofac.treasury.gov/media/16331/download?inline" }
    ]
  },
  {
    id: "SANP-011", difficulty: "medium", domain: 3, topic: "Sanctions risk assessment: scope", hy: false,
    q: "Tallis Bank plans to offer pre-export finance and letters of credit to grain exporters in Central Asia. The sanctions team's draft risk assessment rates only the bank's customers, by nationality and country of residence. The head of compliance asks what else the assessment should cover before the launch. Under OFAC's Framework for Compliance Commitments, which elements should be added? (Choose two.)",
    options: [
      "Counterparties and intermediaries such as buyers, freight forwarders, shipping lines and the banks in each credit chain",
      "Only comprehensively embargoed countries, because list-based and sectoral programs are already covered by name screening",
      "A fixed three-year refresh cycle, whatever new sanctions programs or audit findings arise in between",
      "Reliance on the screening vendor's country risk scores in place of the bank's own analysis",
      "The products themselves and how they fit into other networks, and the locations of the supply chain and counterparties"
    ],
    answer: [0, 4],
    explanation: "The Framework describes a holistic, top-to-bottom review of the organisation's touchpoints with the outside world: customers, supply chain, intermediaries and counterparties; products and services, including how they fit into other networks; and the geographic locations of all of these. It also expects the assessment to be updated as risks change and to reflect the root causes of violations, so a fixed three-year cycle is wrong. Name screening does not remove the need to assess list-based risk, and vendor scores cannot replace the bank's own analysis.",
    source: [
      { label: "OFAC – A Framework for OFAC Compliance Commitments (2019), Risk Assessment", url: "https://ofac.treasury.gov/media/16331/download?inline" }
    ]
  },
  // ---------------- UK practice: lessons from OFSI penalty notices (2026) ----------------
  {
    id: "SANP-012", difficulty: "hard", domain: 3, topic: "UK: returning funds to a designated remitter is not 'rejecting'", hy: true,
    q: "Thamesgate Bank in London receives a GBP 240,000 incoming payment for its UK customer, a machinery exporter, from Bank Y in Moscow. The day before, the UK designated Bank Y under the Russia regulations, imposing an asset freeze. The alert handler follows a procedure copied from the group's US operations and proposes rejecting the payment back to Bank Y, because 'our customer is not designated and nothing is blocked'. The exporter is pressing for the funds, saying the invoice predates the designation. What should Thamesgate do?",
    options: [
      "Reject the payment back to Bank Y and report the rejection to OFSI within 10 working days, as US rules require for rejected transactions",
      "Credit the exporter's account, because the customer is not designated and the underlying contract predates the designation",
      "Not return the funds, freeze them as funds of a designated person, and report to OFSI as soon as practicable",
      "Return the funds to Bank Y if the exporter agrees in writing, because the money then goes back to its source unchanged"
    ],
    answer: [2],
    explanation: "Under UK financial sanctions, funds of a designated person must be frozen and must not be dealt with or made available to it, and relevant firms must report to OFSI as soon as practicable. In its August 2026 penalty on Citibank N.A. London Branch, OFSI counted a payment that an alert handler 'rejected' back to a designated Russian bank as a breach, because returning funds makes them available to the designated person. The US reject-and-report model, the runner-up, does not transfer to this situation. Crediting the exporter would deal with frozen funds, and the exporter would need an OFSI licence.",
    source: [
      { label: "OFSI – Imposition of monetary penalty, Citibank N.A. London Branch (2026)", url: "https://www.gov.uk/government/publications/imposition-of-monetary-penalty-citibank-na-london-branch" },
      { label: "OFSI – UK financial sanctions general guidance (asset freezes and reporting)", url: "https://www.gov.uk/government/publications/financial-sanctions-general-guidance/uk-financial-sanctions-general-guidance" }
    ]
  },
  {
    id: "SANP-013", difficulty: "medium", domain: 3, topic: "Fuzzy matching: legal-form designators as noise words", hy: false,
    q: "After the UK designates 'Severnaya Logistika', Albion Bank's sanctions team runs a test. The filter alerts on 'Severnaya Logistika' but not on its own KYC records 'PAO Severnaya Logistika' and 'OOO Severnaya Logistika Trans', because the extra tokens push the similarity score below the 85% threshold. The team also notes that the filter already produces many false positives. Which remediation is BEST?",
    options: [
      "Configure the matching to treat legal-form designators such as PAO, OOO, LLC and GmbH as noise words, test the change, then rescreen the customer base",
      "Lower the global matching threshold from 85% to 70%, so that longer names with extra tokens score high enough to alert",
      "Add an exact-match rule for every designated entity name, which avoids the false positives of fuzzy logic",
      "Ask customers with Russian legal-form prefixes to update their registered names so that they match the list format"
    ],
    answer: [0],
    explanation: "In its 2026 penalty on Citibank N.A. London Branch, OFSI found that the screening system did not generate alerts because it was not calibrated to account for the Russian corporate prefix 'PAO' before 'Sovcomflot', so accounts of designated entities stayed open. Treating legal-form designators as noise words fixes that specific weakness without flooding the queue. Lowering the global threshold would add large numbers of false positives, and exact matching would miss even more variants.",
    source: [
      { label: "OFSI – Imposition of monetary penalty, Citibank N.A. London Branch (2026)", url: "https://www.gov.uk/government/publications/imposition-of-monetary-penalty-citibank-na-london-branch" }
    ]
  },
  {
    id: "SANP-014", difficulty: "hard", domain: 3, topic: "Frozen accounts: internal fee debits and licence assessment", hy: false,
    q: "Kingsbridge Bank in London restricted the accounts of Corvel Ltd, a company 80% owned by a person designated under the UK's Russia regime. The restriction blocks customer and third-party debits. Over the next four months, the core banking system automatically debits monthly account fees and bulk-corrects negative interest on the accounts. An OFSI general licence permits certain fees for the routine holding or maintenance of frozen funds, but nobody checked its terms before the debits were posted. The head of operations argues that the bank's own fees can never be a sanctions issue. What is the BEST response?",
    options: [
      "Accept the operations view, because fees that stay within the bank are not funds dealt with or made available to anyone",
      "Close Corvel's accounts and pay the balance to Corvel, so that no further fee debits arise on frozen funds",
      "Stop charging fees until OFSI delists the owner, then recover all of them in one debit, which needs no licence",
      "Set the restriction to stop all debits, including internal charges, and route any fee or correction to sanctions review against the licence"
    ],
    answer: [3],
    explanation: "In its 2026 penalty on Citibank N.A. London Branch, OFSI treated the bank's own fee and tax debits from frozen accounts as dealing with frozen funds, and corrective credits as making funds available. The restriction type had stopped customer and third-party debits but not internal charges. A general licence covering routine holding or maintenance fees existed, but because no alert was generated, nobody assessed whether it applied. The runner-up, a deferred lump-sum debit, is still a dealing that needs a licence, and paying out the balance to Corvel would itself breach the freeze.",
    source: [
      { label: "OFSI – Imposition of monetary penalty, Citibank N.A. London Branch (2026)", url: "https://www.gov.uk/government/publications/imposition-of-monetary-penalty-citibank-na-london-branch" }
    ]
  },
  {
    id: "SANP-015", difficulty: "hard", domain: 3, topic: "Mass designations: restricting escalated accounts before the ownership decision", hy: false,
    q: "After a wave of 300 Russia-related designations, Fenwick Bank's level-3 sanctions queue holds 4,000 alerts, and some customer alerts have waited three weeks for a decision. Until now, staff have had to restrict every account escalated to level 3 while the ownership and control review is completed. To cut the workload, the head of operations proposes restricting an escalated account only once there is evidence that a designated person owns 50% or more of the customer. Fenwick has already triaged the queue by risk and value and hired two contractors. Which approach BEST manages the sanctions risk while the backlog lasts?",
    options: [
      "Adopt the proposal, because restricting accounts without evidence of 50% ownership harms customers who turn out not to be linked",
      "Keep restricting escalated accounts as a precaution until the review is decided, whatever stake has been found so far, and lift the restriction promptly when an alert is cleared",
      "Leave escalated accounts open, but add more contractors and automate triage so that decisions come faster",
      "Pause screening of payments below GBP 10,000 until the backlog is cleared, so that analysts can focus on high-value alerts"
    ],
    answer: [1],
    explanation: "In its 2026 penalty on Citibank N.A. London Branch, OFSI found that alerts stayed undecided for weeks after the 2022 designation surge, and that payments flowed from accounts that should have been frozen. The bank had changed its guidance so that staff requested restrictions only on evidence of 50% or greater ownership, instead of restricting every escalated account. OFSI said this increased both the risk of accounts being left unrestricted and how long they stayed so. Faster decisions, the runner-up, help, but they leave escalated accounts open while the queue lasts. The proposal repeats Citibank's mistake, and paused screening is not risk-based.",
    source: [
      { label: "OFSI – Imposition of monetary penalty, Citibank N.A. London Branch (2026)", url: "https://www.gov.uk/government/publications/imposition-of-monetary-penalty-citibank-na-london-branch" }
    ]
  },
  {
    id: "SANP-016", difficulty: "hard", domain: 3, topic: "Relying on vendor ownership data (lessons from OFSI v Deutsche Bank London, 2026)", hy: false,
    q: "Ravensworth Bank in London processes payments for Delmar Ltd, an Irish software distributor, to Lumen Media LLC, a Russian streaming company that is Delmar's customer, not the bank's. Lumen was owned by a designated Russian bank until May, when it was sold to Holding X. The UK designates Holding X at 11:00 on 29 June. The bank's screening vendor adds Holding X to its list but has no data on Holding X's ownership of Lumen. Ravensworth processes a payment to Lumen that afternoon and another four weeks later. Which statement BEST reflects OFSI's approach in comparable cases?",
    options: [
      "Neither payment is a breach, because the bank screened the beneficiary and the vendor's data gap is outside its control",
      "The bank must carry out its own open-source research on every beneficiary of its customers' payments, whatever the risk",
      "Both payments are breaches, and the bank cannot escape responsibility by relying on the vendor; OFSI weighs the timing of each payment",
      "Only the first payment is a breach, because strict liability applies only on the day of designation"
    ],
    answer: [2],
    explanation: "In its 2026 penalty on Deutsche Bank AG London Branch, OFSI treated two payments to a company wholly owned by a newly designated person as breaches under strict liability. It said the bank remained responsible even though its third-party vendor's list lacked the ownership data. OFSI treated the very short window for the first payment as mitigating and the second payment a month later as significant. The runner-up overstates the duty: OFSI said there is no general legal requirement to research a customer's customers, but it expected better understanding of how the customer controlled ownership risk.",
    source: [
      { label: "OFSI – Imposition of monetary penalty, Deutsche Bank AG London Branch (2026)", url: "https://www.gov.uk/government/publications/imposition-of-monetary-penalty-deutsche-bank-ag-london-branch-dblb" }
    ]
  },
  {
    id: "SANP-017", difficulty: "hard", domain: 3, topic: "EU instant payments: event-driven screening of the customer base (Reg. 2024/886)", hy: true,
    q: "Banca Aurelia, an Italian bank, offers SEPA instant credit transfers. It screens its whole customer base against EU targeted financial sanctions every night at 23:00. On 14 October 2026, a Council regulation listing 40 new persons enters into force at 10:00. At 15:00, one of the newly listed persons, a customer, sends an instant transfer of EUR 18,000, which completes within seconds. The head of sanctions proposes adding EU-list screening of payer and payee to every instant transfer. Which change BEST meets Regulation (EU) 2024/886?",
    options: [
      "Keep the nightly run unchanged, because the Regulation requires customer verification at least once every calendar day and nothing more",
      "Screen the payer and payee of each instant transfer against EU targeted sanctions lists while it is being executed, as proposed",
      "Rescreen the whole customer base immediately whenever new or amended EU listings enter into force, as well as the daily run",
      "Move to weekly customer-base screening and add real-time screening only for instant transfers above EUR 10,000"
    ],
    answer: [2],
    explanation: "Article 5d(1) requires PSPs offering instant credit transfers to verify their customers immediately after new or amended targeted financial restrictive measures enter into force, and at least once every calendar day. The runner-up, nightly screening only, misses the 'immediately' trigger, which is how the 15:00 transfer slipped through. Article 5d(2) bars the payer's and payee's PSPs from screening payer and payee against EU targeted financial sanctions during execution. Controls for AML/CFT or for non-EU or non-targeted measures remain allowed.",
    source: [
      { label: "Regulation (EU) 2024/886 (Instant Payments Regulation), Article 5d", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R0886" }
    ]
  },
  {
    id: "SANP-018", difficulty: "medium", domain: 3, topic: "OFAC Enforcement Guidelines: mitigating General Factors", hy: false,
    q: "OFAC is reviewing apparent violations by Pinecrest Logistics, a US freight company, which shipped spare parts to a company later found to be 50% owned by an SDN. The file shows five facts. Which facts would OFAC MOST likely weigh as mitigating under the General Factors of its Enforcement Guidelines? (Choose two.)",
    options: [
      "Pinecrest is a large, commercially sophisticated multinational with an experienced trade compliance team",
      "A regional manager saw warning signs about the buyer's ownership but approved further shipments to meet sales targets",
      "On discovery, Pinecrest stopped shipments at once, investigated the cause and extent, and added ownership screening controls",
      "At the time, Pinecrest had a risk-based compliance program, and the miss stemmed from a single data-feed fault",
      "The shipments formed a pattern of 40 consignments over three years rather than an isolated event"
    ],
    answer: [2, 3],
    explanation: "Appendix A to 31 CFR Part 501 lists the existence and adequacy of a risk-based compliance program at the time of the violation (Factor E) and the remedial response, including stopping the conduct, investigating fully and adopting better controls (Factor F), as factors that can reduce OFAC's response. Managerial awareness of warning signs points to recklessness and management involvement, and a pattern of conduct is aggravating. Commercial sophistication is assessed under individual characteristics and generally strengthens, not weakens, OFAC's response.",
    source: [
      { label: "31 CFR Part 501, Appendix A – General Factors Affecting Administrative Action", url: "https://www.ecfr.gov/current/title-31/part-501/appendix-Appendix%20A%20to%20Part%20501" }
    ]
  },
  // ---------------- Domain 2: frameworks across jurisdictions ----------------
  {
    id: "SANP-019", difficulty: "hard", domain: 2, topic: "EU: presumption of indirect making available to owned or controlled entities", hy: false,
    q: "Rhein Komponenten GmbH, a German manufacturer, has supplied industrial seals since 2019 under a distribution contract with Varna Trade OOD, a Bulgarian company. In 2026 the EU lists Mr K under Regulation 269/2014, and Rhein learns that he owns 60% of Varna. Varna itself is not listed. Rhein's sales director notes that the seals are low-value consumables sold to Bulgarian farms, and that Mr K only receives dividends. Rhein's bank asks how the next EUR 75,000 shipment should be assessed. Under the Council's 2024 EU Best Practices, which statement is correct?",
    options: [
      "Supplies to Varna are allowed without further analysis, because only listed persons and entities are covered by the prohibition",
      "Supplies to Varna are prohibited in all cases, because no evidence can rebut the treatment of an owned entity as the listed person",
      "Supplies to Varna may continue only after the European Commission grants Rhein an individual authorisation",
      "Supplies to Varna are presumed to make resources indirectly available to Mr K, unless a documented case-by-case assessment shows they will not benefit him"
    ],
    answer: [3],
    explanation: "The 2024 Best Practices treat 50% or more of the proprietary rights as ownership. Making funds or economic resources available to a non-listed entity owned or controlled by a listed person is in principle considered making them indirectly available to that person. The presumption can be rebutted by a risk-based, case-by-case assessment of the date and nature of the contractual links, the relevance of the sector and how easily the resources could be used by or transferred to the listed person. It is neither a free pass nor an absolute ban, and the Commission does not grant authorisations; national competent authorities do.",
    source: [
      { label: "Council of the EU – EU Best Practices for the effective implementation of restrictive measures (ST 11623/24, July 2024)", url: "https://data.consilium.europa.eu/doc/document/ST-11623-2024-INIT/en/pdf" }
    ]
  },
  {
    id: "SANP-020", difficulty: "hard", domain: 2, topic: "Control without majority ownership: UK and EU tests vs OFAC's 50 Percent Rule", hy: true,
    q: "Arctis Holdings Ltd, a Cypriot company, is a client of a global bank with operations in New York, London and Frankfurt. Mr P, who is designated by the United States (SDN List), the UK and the EU, owns 35% of Arctis. A shareholders' agreement gives him the right to appoint four of Arctis's seven directors. The other 65% is held by about 200 unrelated investors, and no other shareholder is designated. Which statement BEST describes Arctis's position?",
    options: [
      "Arctis is caught in all three jurisdictions, because every regime treats a right to appoint the board as blocking the entity",
      "Arctis is treated as controlled by Mr P under the UK and EU tests, but it is not blocked under OFAC's 50 Percent Rule, which looks only at ownership",
      "Arctis is caught nowhere, because Mr P's 35% stake is below the ownership threshold in each jurisdiction",
      "Arctis is blocked only under OFAC rules, because the US looks at control while the UK and EU look only at ownership"
    ],
    answer: [1],
    explanation: "OFSI's guidance treats an entity as controlled where a designated person has the right to appoint or remove a majority of the board. The EU Best Practices list the same right as a control criterion, which brings in the presumption against making resources available to the entity. OFAC's 50 Percent Rule is based on ownership, so Arctis is not blocked by operation of law, although OFAC advises caution in dealings where an SDN has control. The runner-up wrongly applies the board-appointment test to the US as well.",
    source: [
      { label: "OFSI – UK financial sanctions general guidance, section 4 (ownership and control)", url: "https://www.gov.uk/government/publications/financial-sanctions-general-guidance/uk-financial-sanctions-general-guidance" },
      { label: "Council of the EU – EU Best Practices (ST 11623/24), control criteria", url: "https://data.consilium.europa.eu/doc/document/ST-11623-2024-INIT/en/pdf" }
    ]
  },
  {
    id: "SANP-021", difficulty: "hard", domain: 2, topic: "EU: no general wind-down licence; national competent authority authorisation", hy: false,
    q: "Banca Litorale in Milan holds a frozen account for Zelenko Trading, listed in Annex I to Regulation (EU) 269/2014 since March 2026. Zelenko owes EUR 310,000 to Solmar SL, a non-listed Spanish supplier, under a contract concluded in 2024 for goods already delivered. Solmar asks the bank to pay it from the frozen account. Zelenko's lawyers argue that, as in the US, a published wind-down general licence automatically allows payments under pre-existing contracts. What should the bank tell Solmar?",
    options: [
      "Payment may be released only under an authorisation from the competent Italian authority, which must first determine that the payment meets the Regulation's conditions",
      "Payment may be made at once without any authorisation, because the contract was concluded before Zelenko was listed",
      "Payment requires an individual authorisation issued by the European Commission, which administers all EU sanctions derogations",
      "Payment is covered by a general wind-down licence that the Council publishes with each new listing"
    ],
    answer: [0],
    explanation: "Article 6 of Regulation 269/2014 allows the competent authorities of the Member States to authorise the release of frozen funds for a payment by a listed person under a contract concluded before the listing, once they have determined the conditions are met. Article 8 requires information to go to the competent authority of the Member State where the person is located (Annex II lists them). EU sanctions are implemented through these national authorities, not the Commission. A pre-listing contract alone does not unlock funds, and there is no automatic OFAC-style wind-down licence.",
    source: [
      { label: "Council Regulation (EU) No 269/2014, Articles 4, 6 and 8", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R0269" }
    ]
  },
  {
    id: "SANP-022", difficulty: "hard", domain: 2, topic: "OFAC recordkeeping: 10 years after unblocking (calculation)", hy: true,
    changed: "OFAC recordkeeping extended from 5 to 10 years (final rule effective 21 Mar 2025)",
    q: "In June 2017, Granite National Bank blocked USD 1.2 million belonging to an SDN and has held it in a blocked interest-bearing account ever since. In April 2026, OFAC removes the person from the SDN List, and the bank releases the funds on 15 April 2026 and files the required report. The bank's retention schedule still says 'OFAC records: five years from the date of blocking', which the records team believes allows it to purge the file now. Under 31 CFR 501.601, until when must the bank at least keep the records of this blocked property?",
    options: [
      "Until June 2022, five years after the date of blocking, so the file may already be purged",
      "Until 15 April 2031, five years after the funds were unblocked",
      "Until 15 April 2036, 10 years after the funds were unblocked",
      "Until June 2027, 10 years after the date of blocking"
    ],
    answer: [2],
    explanation: "Section 501.601, as amended in 2024 with effect from 21 March 2025, requires records of blocked property to be kept for the whole period the property is blocked and for at least 10 years after it is unblocked. The runner-up, five years after unblocking, was the rule before the 2025 change, which aligned retention with the 10-year statute of limitations for IEEPA and TWEA violations. Both options counted from the blocking date are wrong, because the period runs from unblocking.",
    source: [
      { label: "31 CFR 501.601 – records and recordkeeping requirements", url: "https://www.ecfr.gov/current/title-31/section-501.601" },
      { label: "Federal Register (21 March 2025) – OFAC final rule extending recordkeeping to 10 years", url: "https://www.govinfo.gov/content/pkg/FR-2025-03-21/pdf/2025-04864.pdf" }
    ]
  },
  {
    id: "SANP-023", difficulty: "medium", domain: 2, topic: "EU sanctions jurisdiction: EU nationals abroad (Art. 17, Reg. 269/2014)", hy: false,
    q: "Lars de Vries, a Dutch national, works in Dubai as treasury manager for Gulf Meridian FZE, a UAE company with no EU offices or EU business. His CEO asks him to transfer USD 900,000 from the company's UAE bank account to a company wholly owned by a person listed under Regulation (EU) 269/2014. No EU bank or EU currency is involved. A colleague, an Indian national, says EU sanctions cannot apply because nothing touches the EU. Which statement is correct?",
    options: [
      "EU sanctions do not apply, because the payment has no link to EU territory, EU banks or the euro",
      "EU sanctions apply only if the payment is made in euro or cleared through a bank in a Member State",
      "EU sanctions apply to the whole of Gulf Meridian FZE, because the company employs an EU national in a senior role",
      "EU sanctions apply to Lars personally as an EU national, wherever he is, so he must not make the funds available"
    ],
    answer: [3],
    explanation: "Article 17 of Regulation 269/2014 applies the Regulation to any person, inside or outside the EU, who is a national of a Member State, as well as within EU territory, to entities incorporated under Member State law, and to any business done in whole or in part within the EU. Lars is therefore bound personally. Making funds available to a company wholly owned by a listed person would be prohibited, and taking part in circumvention is also prohibited. Gulf Meridian itself is not covered just because it employs an EU national.",
    source: [
      { label: "Council Regulation (EU) No 269/2014, Article 17 (scope)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R0269" }
    ]
  },
  // ---------------- Domain 1: evasion red flags seen by screening teams ----------------
  {
    id: "SANP-024", difficulty: "medium", domain: 1, topic: "Evasion: resubmitting a stopped payment with references removed", hy: false,
    q: "Corvane Bank, a US correspondent, stops a USD 410,000 payment from its respondent Banco Meridional to a Dubai trading company. The remittance information reads 'INV 2207 – urea cargo ex Bandar Abbas'. Corvane asks for more information. Two hours later, Meridional sends a new message with the same amount, beneficiary and invoice number, but the remittance information now reads 'INV 2207 – fertiliser', with no port. Meridional is a long-standing respondent that passed its last due diligence review, and its message format recently moved to ISO 20022. What does this MOST likely indicate?",
    options: [
      "A routine repair of the payment message during the move to ISO 20022 structured data",
      "Possible stripping: removing the sanctions-relevant reference so that the payment passes the filter",
      "A duplicate payment caused by a technical timeout, which should be cancelled as a processing error",
      "Trade-based money laundering through over-invoicing of the urea cargo"
    ],
    answer: [1],
    explanation: "Resubmitting a stopped payment with the sanctioned-country reference (an Iranian port) deleted, while all other details stay the same, is a classic sign of stripping or manipulating payment messages to conceal sanctioned involvement. OFAC's Framework flags this concealment as a feature of the cases it pursues. The ISO 20022 migration and the respondent's clean history are decoys: a format change does not explain deleting the port. Corvane should treat the payment as possible evasion, escalate it and review the respondent relationship.",
    source: [
      { label: "OFAC – A Framework for OFAC Compliance Commitments (2019), Appendix: root causes (stripping and manipulation of payment messages)", url: "https://ofac.treasury.gov/media/16331/download?inline" }
    ]
  },
  {
    id: "SANP-025", difficulty: "medium", domain: 1, topic: "Evasion: unrelated third-party payers after a buyer's parent is designated", hy: false,
    q: "Oakfield Machinery, a customer of an EU bank, has sold farm equipment to Taymyr Agro in Kazakhstan since 2021. Taymyr always paid from its own account at a Kazakh bank. Two months after Taymyr's parent company is designated, Oakfield's invoices to Taymyr start being paid by five different companies in the UAE, Hong Kong and Armenia. None of these payers has any visible link to Taymyr, they pay round amounts that cover several invoices at once, and two were incorporated this year. Oakfield says it does not mind who pays as long as the invoices are settled. Which typology do these facts MOST likely indicate?",
    options: [
      "Non-standard third-party payments used to hide the involvement of a sanctioned party",
      "Normal supply-chain financing, in which factoring companies settle invoices on the buyer's behalf",
      "Cuckoo smurfing, in which criminal funds are deposited into a legitimate customer's account",
      "Over-invoicing to move value from Kazakhstan into the EU"
    ],
    answer: [0],
    explanation: "After the parent's designation, a long-standing buyer that paid from its own account switches to several unrelated, newly formed third-party payers in other jurisdictions that pay lump sums. This non-standard payment practice is the kind OFAC's Framework lists as a root cause of violations, used to hide a sanctioned party's involvement. Genuine supply-chain finance would involve identifiable finance providers and documentation. Nothing suggests criminal cash placed into Oakfield's account (cuckoo smurfing) or mispriced invoices.",
    source: [
      { label: "OFAC – A Framework for OFAC Compliance Commitments (2019), Appendix: non-standard payment or commercial practices", url: "https://ofac.treasury.gov/media/16331/download?inline" }
    ]
  }
]);
