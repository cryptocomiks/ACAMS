window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "PROG-001", difficulty: "hard", domain: 3, topic: "Risk assessment: calculating residual risk", hy: true,
    q: "A bank's enterprise-wide risk assessment rates its correspondent banking line as high inherent risk. Control strength is a weighted average of control scores: KYC 30% (score 85), transaction monitoring 30% (score 70), policies and procedures 15% (score 90), training 10% (score 100) and governance 15% (score 80). For a high inherent risk line, the methodology maps control strength of 90% or more to low residual risk, 80-89% to moderate and below 80% to high. Monitoring scored 70 because two key scenarios did not work during the review period. The business head says a replacement monitoring system has been contracted and goes live next quarter, and asks for monitoring to be scored 100. The bank also changed its external auditor this year. What residual risk rating should the assessment record?",
    options: [
      "Low: with the contracted system scored 100, control strength becomes 91%",
      "Moderate: weighted control strength is 82%; planned fixes count only once they operate",
      "High: residual risk follows the weakest control, so the 70% monitoring score sets the rating",
      "Low: inherent risk is offset because four of the five control areas score 80 or more"
    ],
    answer: [1],
    explanation: "The weighted control strength is 25.5 + 21 + 13.5 + 10 + 12 = 82%, which the methodology maps to moderate residual risk. The Wolfsberg FAQs on risk assessments say a planned action is not in itself a mitigating factor: the assessment is a point-in-time view, and a corrective action improves residual risk only in the next assessment once it is working. The runner-up (91%, low) scores a system that is not yet live. Using the weakest control alone ignores the documented weighting, and the change of external auditor is irrelevant.",
    source: [{ label: "Wolfsberg FAQs on Risk Assessments (2015), s.6 – three phases, actions do not affect residual risk, weightings (App. I)", url: "https://db.wolfsberg-group.org/assets/3deb66d7-6aca-490c-bcd9-c1a3d34a807b/17.%20Wolfsberg-Risk-Assessment-FAQs-2015.pdf" }]
  },
  {
    id: "PROG-002", difficulty: "hard", domain: 3, topic: "Risk assessment: when to update (US, 2026)", hy: true,
    q: "In October 2026 a US community bank's board asks whether the law now requires the BSA/AML risk assessment to be refreshed every 12 months and to include FinCEN's AML/CFT National Priorities. The bank last refreshed its assessment 20 months ago. Since then it has launched remote deposit capture for commercial customers and bought a branch network in a border county. Which response is MOST accurate?",
    options: [
      "Update it now for the new product and acquisition; no fixed cycle applies, and FinCEN's 2026 proposal is not final",
      "Refresh it at once, because FinCEN's 2026 program rule requires annual updates that include the National Priorities",
      "No update is needed before the next exam, because there is no requirement to update it on any specified periodic basis",
      "Update it within 12 months of the acquisition, which is the deadline set by 31 CFR 1020.210"
    ],
    answer: [0],
    explanation: "The FFIEC manual says there is no requirement to update the BSA/AML risk assessment on a continuous or specified periodic basis, but the bank may need to update it when it introduces new products or expands through mergers and acquisitions, as here. FinCEN's April 2026 proposed rule would require updates 'promptly' after significant changes and would make banks incorporate the AML/CFT Priorities. Comments closed on 9 June 2026, but as of early October 2026 FinCEN had not published a final rule. The runner-up correctly says there is no fixed cycle but ignores the two trigger events, and 31 CFR 1020.210 sets no 12-month deadline.",
    source: [
      { label: "FFIEC BSA/AML Manual (2020), BSA/AML Risk Assessment – no specified periodic update; update for new products, M&A (NCUA copy)", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" },
      { label: "FinCEN proposed rule, AML/CFT Programs (91 FR 18704, 10 April 2026) – proposed 'promptly' updates and AML/CFT Priorities", url: "https://www.govinfo.gov/content/pkg/FR-2026-04-10/pdf/2026-07033.pdf" }
    ]
  },
  {
    id: "PROG-003", difficulty: "medium", domain: 3, topic: "De-risking: 2022 US joint statement", hy: false,
    q: "A bank's new compliance head says that because the FFIEC BSA/AML Examination Manual has sections on cash-intensive businesses, nonbank financial institutions and politically exposed persons, regulators must view those customer types as high risk. According to the July 2022 interagency joint statement on the risk-based approach to assessing customer relationships, which statement is correct?",
    options: [
      "Those sections mean examiners expect the listed customer types to be rated high risk and placed under EDD",
      "Banks may not decline any customer of those types, because the agencies now require them to be served",
      "The statement created new CDD requirements for the listed customer types, applying from 2023",
      "No customer type presents a single uniform level of risk, and the manual's sections do not signal uniformly higher risk"
    ],
    answer: [3],
    explanation: "The July 2022 statement by the Federal Reserve, FDIC, FinCEN, NCUA and OCC says no customer type presents a single level of uniform risk, and that the manual's sections on specific customer types are not intended to signal that they are uniformly higher risk. It also says banks still choose whether to enter or keep relationships based on their business objectives and ability to manage risk, so they are not required to serve every customer. The statement expressly does not alter existing requirements or create new supervisory expectations.",
    source: [{ label: "Joint Statement on the Risk-Based Approach to Assessing Customer Relationships and Conducting CDD (6 July 2022) – Fed copy", url: "https://www.federalreserve.gov/supervisionreg/srletters/sr2205a1.pdf" }]
  },
  {
    id: "PROG-004", difficulty: "hard", domain: 3, topic: "Fair banking: EO 14331 and the end of reputation risk", hy: true,
    q: "In September 2026, after critical social media coverage, the head of retail at a US national bank proposes closing the accounts of all 12 of its federally licensed firearms dealers. The memo cites 'reputational risk' and says examiners might disapprove of the relationships. AML monitoring shows nothing unusual for 11 of the dealers. For the twelfth, cash deposits have tripled with no explanation, and the owner refused to answer questions about it. What should the BSA officer recommend?",
    options: [
      "Close all 12 accounts, since reputation risk remains a valid basis for supervisory criticism",
      "Keep all 12 accounts, since Executive Order 14331 bars closing any account of a lawful business",
      "Assess each dealer on objective risk; investigate the twelfth dealer's cash and consider a SAR",
      "Ask the OCC in writing whether it objects to the dealer relationships before deciding on any of them"
    ],
    answer: [2],
    explanation: "Executive Order 14331 (7 August 2025) says banking decisions must be made on individualized, objective and risk-based analyses, and it directed regulators to remove reputation risk from supervision. The OCC and FDIC final rule (effective 9 June 2026; 12 CFR 4.91 for the OCC) bars the agencies from criticising banks on the basis of reputation risk or encouraging account closures over politically disfavoured but lawful business. The rule expressly does not restrict BSA enforcement, so genuine red flags must still be investigated. The runner-up goes too far: the order does not stop a bank from exiting a customer whose financial crime risk it cannot manage. Asking the OCC to approve customer decisions is not how supervision works.",
    source: [
      { label: "Executive Order 14331, Guaranteeing Fair Banking for All Americans (7 Aug 2025), ss.2 and 4", url: "https://www.govinfo.gov/content/pkg/DCPD-202500835/html/DCPD-202500835.htm" },
      { label: "OCC and FDIC final rule: Prohibition on the Use of Reputation Risk by Regulators (91 FR 18279, 10 April 2026), 12 CFR 4.91(a)-(e)", url: "https://www.govinfo.gov/content/pkg/FR-2026-04-10/pdf/2026-06947.pdf" }
    ],
    changed: "EO 14331 (Aug 2025); OCC/FDIC reputation risk rule (effective June 2026)"
  },
  {
    id: "PROG-005", difficulty: "medium", domain: 3, topic: "De-risking: EBA guidelines and vulnerable customers", hy: false,
    q: "An EU bank receives an account application from an asylum seeker. He has no passport or national ID card, but he holds a document issued by national authorities while his asylum claim is processed. Under the EBA's 2023 guidelines on ML/TF risk management and access to financial services, which steps are appropriate? (Choose two.)",
    options: [
      "Refuse the application, since CDD cannot be completed without a passport or national ID card",
      "Accept the alternative, independent documentation that the bank's policy recognises, where national law permits",
      "Open the account but apply simplified due diligence, because the amounts involved are small",
      "Offer a basic payment account with targeted limits, such as no overdraft and turnover caps",
      "Postpone the decision until the national authorities have finally decided the asylum claim"
    ],
    answer: [1, 3],
    explanation: "EBA/GL/2023/04 asks institutions to set out in their policies which alternative, independent documents they can rely on for asylum seekers who cannot provide a passport or ID card, where national law permits. It also asks them to consider a payment account with basic features or targeted restrictions, such as no credit or overdraft, monthly turnover limits and limits on transfers to third countries, rather than refusal. A blanket refusal or indefinite delay is the unwarranted de-risking the guidelines target. SDD is tied to assessed lower risk, not to small amounts.",
    source: [{ label: "EBA/GL/2023/04 Guidelines on ML/TF risk management and access to financial services (31 March 2023), paras 12, 19-21", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2023/1054144/Guidelines%20on%20MLTF%20risk%20management%20and%20access%20to%20financial%20services.pdf" }]
  },
  {
    id: "PROG-006", difficulty: "medium", domain: 3, topic: "Training program design and coverage", hy: false,
    q: "An independent tester reviews a community bank's BSA/AML training program. Which findings are gaps against the FFIEC BSA/AML Examination Manual's expectations? (Choose two.)",
    options: [
      "Directors receive no BSA training, because they say they are not involved in operations",
      "Tellers get examples of currency structuring, while loan staff get examples of laundering through loans",
      "The BSA officer attends external training every year on regulatory changes",
      "Training records show attendance, test results and the follow-up for staff who missed the deadline",
      "Staff of a third-party agent that opens accounts and performs CIP for the bank receive no BSA training"
    ],
    answer: [0, 4],
    explanation: "The FFIEC manual says the board and senior management should receive foundational training so they can oversee the program, approve it, keep the compliance function independent and provide enough resources. It also says the bank should train any agents responsible for BSA-related functions on its behalf. Role-specific examples for tellers and loan staff, periodic training for the BSA officer, and records of attendance, testing and follow-up on missed training are all expected practices, not gaps.",
    source: [{ label: "FFIEC BSA/AML Manual (2020), BSA/AML Training – board training, agents, documentation (NCUA copy)", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" }]
  },
  {
    id: "PROG-007", difficulty: "hard", domain: 3, topic: "Independent testing: who may test", hy: true,
    q: "A $900 million bank with no internal audit department must choose who performs its next BSA/AML independent test. The consulting firm that rewrote the bank's BSA policies last year and delivers its annual staff training offers a discount. The BSA officer's deputy has the most BSA knowledge in the bank. A second consulting firm could do the test, but its report would go to the BSA officer, who would decide what reaches the board. A qualified senior manager from loan operations, who has no BSA duties, could do the test and report directly to the audit committee, which is made up of outside directors. Which choice BEST meets regulatory expectations?",
    options: [
      "The first consulting firm, because its knowledge of the policies it wrote makes the test more efficient",
      "The BSA officer's deputy, because the tester must have the strongest BSA expertise in the bank",
      "The second consulting firm, because an outside firm is independent whoever receives its report",
      "The loan operations manager, reporting directly to the audit committee"
    ],
    answer: [3],
    explanation: "Under the FFIEC manual, a bank without internal audit may use qualified staff who are not involved in the function being tested. Whoever tests must report directly to the board or a committee made up mainly or entirely of outside directors. The first firm wrote the policies and runs the training, which the manual names as conflicts that impair independence, and the deputy works in the function being tested. The runner-up is an outside firm, but sending its report through the BSA officer, who decides what the board sees, breaks the direct reporting line.",
    source: [{ label: "FFIEC BSA/AML Manual (2020), BSA/AML Independent Testing – qualified staff, conflicts, reporting to the board (NCUA copy)", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" }]
  },
  {
    id: "PROG-008", difficulty: "hard", domain: 3, topic: "Independent testing: frequency, scope and follow-up", hy: false,
    q: "A bank's policy calls for BSA/AML independent testing every 24 months, and the last test was 10 months ago. Since then the bank has converted its core banking system, moved its monitoring scenarios to a new platform and launched a banking-as-a-service program with three fintech partners. The last test found weak alert documentation, which management says it has now fixed. The audit committee asks what to do. What is the BEST recommendation?",
    options: [
      "Keep the 24-month cycle, since no regulation sets a testing frequency and the last test was recent",
      "Commission risk-based testing now, focused on the conversion, the BaaS program and validation of the alert fix",
      "Ask the regulator to test the new systems at its next examination instead of the bank",
      "Expand the next scheduled test to cover every pillar equally, with the same sample sizes as before"
    ],
    answer: [1],
    explanation: "The FFIEC manual says there is no regulatory testing frequency, but testing should match the bank's risk profile and may be done at periodic intervals and/or when there are significant changes in its risk profile, systems, compliance staff or processes. More frequent testing may also be needed to validate remedial actions. Testing should be risk-based, focusing on the areas of greatest risk. The runner-up is correct that no frequency is set by regulation, but it ignores three major changes and an unvalidated fix. Equal coverage of every pillar is not risk-based, and examiners do not replace the bank's own independent test.",
    source: [{ label: "FFIEC BSA/AML Manual (2020), BSA/AML Independent Testing – frequency and risk-based scope (NCUA copy)", url: "https://ncua.gov/files/press-releases-news/bsa-aml-examination-manual-april-2020.pdf" }]
  },
  {
    id: "PROG-009", difficulty: "medium", domain: 3, topic: "OCC community bank BSA/AML exam procedures (2026)", hy: false,
    q: "A national bank with $6 billion in assets has an OCC BSA/AML examination starting in March 2026. Its risk profile has not changed significantly since the last exam, and its independent testing is thorough and well documented. Under the OCC's Community Bank Minimum BSA/AML Examination Procedures (OCC Bulletin 2025-37), which statement is correct?",
    options: [
      "Examiners may rely on satisfactory independent testing and may carry forward prior conclusions on the training and BSA officer pillars",
      "Examiners must re-test every pillar in full, because community banks no longer need their own independent testing",
      "The bulletin now sets the bank's independent testing frequency at every 36 months",
      "Transaction testing is now prohibited in BSA/AML examinations of community banks"
    ],
    answer: [0],
    explanation: "OCC Bulletin 2025-37 (November 2025) applies to community banks with up to $30 billion in assets, for examinations starting on or after 1 February 2026. Examiners may rely on satisfactory independent testing, may carry forward prior-cycle conclusions on the training and BSA officer pillars for one cycle where the risk profile has not changed significantly, and have discretion over whether and how much transaction testing to do. The bulletin does not remove the bank's own testing pillar, set a testing frequency or ban transaction testing.",
    source: [{ label: "OCC Bulletin 2025-37: Community Bank Minimum BSA/AML Examination Procedures", url: "https://www.occ.gov/news-issuances/bulletins/2025/bulletin-2025-37.html" }],
    changed: "OCC Bulletin 2025-37 (Nov 2025, exams from Feb 2026)"
  },
  {
    id: "PROG-010", difficulty: "hard", domain: 3, topic: "CTR aggregation: night deposits, multiple accounts, cash in vs cash out", hy: true,
    q: "Lena makes these cash transactions at her bank. On Sunday evening she puts $3,000 in the night depository for her personal account. On Monday morning she deposits $4,500 into her personal account at Branch A. On Monday afternoon, at Branch B, she deposits $3,000 into the account of her consulting LLC and withdraws $9,800 from her personal account. Monday is a business day, and the bank's systems link all of these transactions to her. What is the bank's CTR obligation for Monday?",
    options: [
      "No CTR: net cash in is only $700 once the $9,800 withdrawal is deducted",
      "No CTR: the Sunday night deposit counts on Sunday, so Monday's cash in is $7,500",
      "A CTR for $10,500 in cash in; the $9,800 withdrawal is not offset against the deposits",
      "A CTR for $17,300, combining the personal-account deposits with the withdrawal"
    ],
    answer: [2],
    explanation: "Under 31 CFR 1010.313(b), multiple currency transactions by or on behalf of one person are aggregated per business day, and deposits made at night or over a weekend count on the next business day. So the Sunday night deposit counts on Monday: $3,000 + $4,500 + $3,000 = $10,500 cash in. FIN-2012-G001 confirms that deposits the same individual makes into her own account and a business account are aggregated, because she conducted both. Section 1010.313(b) aggregates 'either cash in or cash out', so cash in and cash out are totalled separately and never netted: the $9,800 withdrawal neither offsets the deposits nor adds to them, and on its own it is below the threshold. The runner-up wrongly dates the night deposit to Sunday.",
    source: [
      { label: "31 CFR 1010.313 – aggregation; night and weekend deposits count on the next business day", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-C/section-1010.313" },
      { label: "FinCEN FIN-2012-G001 – CTR aggregation (same conductor, personal and business accounts)", url: "https://www.fincen.gov/sites/default/files/shared/FIN-2012-G001.pdf" }
    ]
  },
  {
    id: "PROG-011", difficulty: "hard", domain: 3, topic: "CTR aggregation: businesses with a common owner", hy: false,
    q: "Marco owns 100% of three separately incorporated restaurants, each with its own EIN and account at the same bank. On one business day, each restaurant's manager deposits $4,000 in cash into that restaurant's account. The bank's records show that the restaurants share one bookkeeper and staff, that each restaurant's account has repeatedly paid the others' rent and payroll, and that the accounts also pay Marco's personal mortgage. How should the bank treat the deposits for CTR purposes?",
    options: [
      "Do not aggregate, because separately incorporated businesses are always separate persons for CTRs",
      "Aggregate them only if a single manager physically made all three deposits at the same branch",
      "Aggregate them, because 100% common ownership by itself requires aggregation for CTR purposes",
      "Aggregate them as made on behalf of one person, since the facts rebut the presumption of independence"
    ],
    answer: [3],
    explanation: "FIN-2012-G001 says separately incorporated businesses are presumed to be independent persons, so common ownership alone does not require aggregation. The presumption can be rebutted when information obtained in the ordinary course of business shows they are not run independently, for example shared staff, one business's account repeatedly paying another's expenses, or business accounts paying the owner's personal expenses. Here the deposits are treated as made on behalf of one person and total $12,000, so a CTR is required. The runner-up treats the presumption as absolute, and the identity of the person making the deposits does not matter when the transactions are on behalf of the same person.",
    source: [
      { label: "FinCEN FIN-2012-G001 – CTR aggregation for businesses with common ownership", url: "https://www.fincen.gov/sites/default/files/shared/FIN-2012-G001.pdf" },
      { label: "31 CFR 1010.313(b) – transactions 'by or on behalf of' any person", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-C/section-1010.313" }
    ]
  },
  {
    id: "PROG-012", difficulty: "hard", domain: 3, topic: "CTR exemptions: Phase II eligibility and Form 110", hy: true,
    q: "A family-owned US hardware store chain, not listed on any exchange, has banked with a bank for five months. In the last 12 months it made seven cash deposits over $10,000. About 20% of its gross revenue comes from selling farm equipment and the rest from hardware. The bank wants to stop filing CTRs on its deposits. What must the bank do?",
    options: [
      "Designate it as a Phase II non-listed business on Form 110, review it yearly and keep monitoring it",
      "Nothing: as an established business customer it becomes exempt automatically, with no filing needed",
      "Nothing: it cannot be exempted, because selling farm equipment is an ineligible business activity",
      "Designate it as a Phase I exempt person on Form 110 and renew the designation every two years"
    ],
    answer: [0],
    explanation: "Under 31 CFR 1020.315(b)(6), a non-listed business qualifies if it has had a transaction account for at least two months, frequently deals in currency over $10,000 (five or more reportable transactions a year, per FIN-2012-G003) and is US-organised. A business is ineligible only if more than 50% of its gross revenue comes from ineligible activities such as selling farm equipment, so 20% does not disqualify it. The bank must file Form 110 within 30 days after the first reportable transaction to be exempted, review eligibility at least annually and monitor the account for suspicious activity. The runner-up misreads the 50% test. Phase I covers listed companies, and biennial renewals were abolished in 2008.",
    source: [
      { label: "31 CFR 1020.315 – Phase II criteria, Form 110 within 30 days, annual review, 50% ineligible-revenue test", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.315" },
      { label: "FinCEN FIN-2012-G003 – CTR exemption guidance (five transactions, biennial renewal eliminated)", url: "https://www.fincen.gov/system/files/shared/FIN-2012-G003.pdf" }
    ]
  },
  {
    id: "PROG-013", difficulty: "hard", domain: 3, topic: "CTR exemptions: which customers need Form 110", hy: false,
    q: "A US bank wants to treat the following customers as exempt from CTR filing. For which of them must it file FinCEN Form 110 (Designation of Exempt Person)? (Choose three.)",
    options: [
      "A company whose common stock is listed on the New York Stock Exchange",
      "A city's water department, which collects cash utility payments",
      "A US subsidiary that is 60% owned by the listed company",
      "A payroll customer that frequently withdraws over $10,000 to pay its US employees in cash",
      "Another US bank, for the cash transactions of its domestic operations"
    ],
    answer: [0, 2, 3],
    explanation: "Under 31 CFR 1020.315(c)(2), no Form 110 is needed for transfers to or from banks, government departments and agencies, or entities exercising governmental authority (exempt persons in (b)(1)-(3)). Listed companies, their subsidiaries that are at least 51% owned, non-listed businesses and payroll customers must all be designated on Form 110 and reviewed every year. FIN-2012-G003 confirms that no designation or annual review is required for Phase I customers other than listed businesses and their subsidiaries.",
    source: [
      { label: "31 CFR 1020.315(b)-(d) – exempt persons, designation and annual review", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.315" },
      { label: "FinCEN FIN-2012-G003 – designation chart for Phase I and Phase II", url: "https://www.fincen.gov/system/files/shared/FIN-2012-G003.pdf" }
    ]
  },
  {
    id: "PROG-014", difficulty: "hard", domain: 3, topic: "CTR exemptions after a SAR", hy: false,
    q: "A bank has treated a non-listed building-supplies company as a Phase II exempt person for three years. It has just filed a SAR because the company's cash deposits rose 60% with no business explanation. The annual exemption review is due in two months. The CFO asks whether the bank must now revoke the exemption by filing Form 110. What is correct?",
    options: [
      "It must revoke the exemption at once, by filing Form 110 with the 'exemption revoked' box ticked, because a SAR was filed",
      "The SAR does not by itself end the exemption; the bank decides under its policy, and no formal revocation is needed",
      "The exemption also covers SAR filing, so the SAR should be withdrawn",
      "It must keep the exemption until the annual review, because exemptions can only be changed then"
    ],
    answer: [1],
    explanation: "FIN-2012-G003 says that when an exempt person is involved in a transaction reported on a SAR, the bank is not required to stop treating it as exempt. The decision to keep or revoke the exemption follows the bank's risk-based AML policies. Banks have never been required to revoke an exemption formally on the Form 110; they can simply start filing CTRs again. The runner-up describes an optional practice as a requirement. Under 31 CFR 1020.315(h), an exemption never reduces SAR obligations, and a sharp rise in an exempt customer's cash is given as an example that may require a SAR.",
    source: [
      { label: "FinCEN FIN-2012-G003 – FAQs on SARs on exempt persons and revoking exemptions", url: "https://www.fincen.gov/system/files/shared/FIN-2012-G003.pdf" },
      { label: "31 CFR 1020.315(h) – SAR obligations unaffected by exemption", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.315" }
    ]
  },
  {
    id: "PROG-015", difficulty: "medium", domain: 3, topic: "Casinos: one gaming day", hy: false,
    q: "A US casino resort keeps its table games and cage on a gaming day that runs from 6:00 a.m. to 5:59 a.m. Its slot department wants to use the calendar day (midnight to midnight) because its system reports that way. The players' rewards club covers all departments. What does FinCEN's casino rule say?",
    options: [
      "Each division may choose its own gaming day, provided the choice is documented",
      "Gaming day always means the calendar day for CTRC aggregation",
      "A casino may have only one gaming day, common to all its divisions",
      "Slot departments are exempt from gaming-day aggregation because slot play is automated"
    ],
    answer: [2],
    explanation: "31 CFR 1021.100(d) defines the gaming day as the casino's normal business day. For a 24-hour casino, it is the 24-hour period the casino uses for its books and records for business, accounting and tax purposes. Each casino may have only one gaming day, common to all its divisions. A separate slot gaming day would break aggregation of a patron's cash transactions across departments under 31 CFR 1021.313. The rule does not require a calendar day.",
    source: [
      { label: "31 CFR 1021.100(d) – definition of gaming day", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1021/subpart-A/section-1021.100" },
      { label: "31 CFR 1021.313 – aggregation per gaming day", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1021/subpart-C/section-1021.313" }
    ]
  },
  {
    id: "PROG-016", difficulty: "hard", domain: 3, topic: "Structuring: employee assistance and the right response", hy: true,
    q: "A customer tells a teller she needs to deposit $14,000 in cash from the sale of a car. The teller tells her that if she deposits $9,000 today and $5,000 tomorrow, 'no government form will be filed'. She does exactly that. A supervisor learns about it the next day. Which statement is correct?",
    options: [
      "There is no issue, because no CTR was ever required on either of the two days",
      "Only the customer may have broken the law, because bank employees cannot commit structuring offences",
      "The bank should file a late CTR for $14,000, because both deposits came from the same car sale",
      "The teller's advice is itself prohibited assistance in structuring; consider a SAR and address the teller"
    ],
    answer: [3],
    explanation: "31 CFR 1010.314 makes it unlawful to structure, or to assist in structuring, transactions to evade currency reporting, and 1010.100(xx) says structuring can involve sums at or below $10,000 on one or more days. The teller assisted, and the customer split the deposit to avoid a CTR. Each day's cash in was $10,000 or less, so no CTR (late or otherwise) is due, because aggregation runs per business day. The right path is a SAR, since the transactions total at least $5,000 and appear designed to evade reporting, plus action on the teller's conduct.",
    source: [
      { label: "31 CFR 1010.314 – structured transactions, including assisting in structuring", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-C/section-1010.314" },
      { label: "31 CFR 1020.320(a)(2)(ii) – SAR for transactions designed to evade BSA requirements", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.320" }
    ]
  },
  {
    id: "PROG-017", difficulty: "hard", domain: 3, topic: "Recordkeeping: cash purchases of monetary instruments", hy: false,
    q: "A walk-in customer with no account at a US bank pays $3,600 in cash, in one visit, for a $2,100 cashier's check and a $1,500 money order. What must the bank do?",
    options: [
      "Treat it as one $3,600 purchase, verify ID and record the full purchaser and instrument details",
      "Nothing beyond normal records, because each instrument on its own is below $3,000",
      "File a CTR, because a non-customer bought monetary instruments with cash",
      "Record only the purchaser's name and the serial numbers, which is enough for a non-customer"
    ],
    answer: [0],
    explanation: "Under 31 CFR 1010.415(b), contemporaneous purchases of the same or different instruments totalling $3,000 or more are treated as one purchase, so the $3,600 sale is covered. For a purchaser without a deposit account, 1010.415(a)(2) requires name and address, SSN (or alien ID number), date of birth, date of purchase, instrument types, serial numbers and amounts, after verifying name and address with an acceptable ID document. The records are kept for five years. No CTR is due, because the cash does not exceed $10,000.",
    source: [{ label: "31 CFR 1010.415 – purchases of bank checks, cashier's checks, money orders and traveler's checks", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-D/section-1010.415" }]
  },
  {
    id: "PROG-018", difficulty: "hard", domain: 3, topic: "Record retention periods (US)", hy: false,
    q: "A US bank is rewriting its records-retention schedule for BSA records. Which of these retention rules is correct?",
    options: [
      "CIP verification records (descriptions of documents and methods used): five years after the account is closed",
      "A SAR and its supporting documentation: five years after the customer relationship ends",
      "CIP identifying information (name, date of birth, address, ID number): five years after the account is closed",
      "Records of cash purchases of monetary instruments from $3,000 to $10,000: three years"
    ],
    answer: [2],
    explanation: "31 CFR 1020.220(a)(3)(ii) splits CIP retention. Identifying information is kept for five years after the account is closed, while descriptions of verification documents, methods, results and discrepancy resolution are kept for five years after the record is made. That is why the first option, the runner-up, is wrong. SARs and supporting documentation are kept for five years from the date of filing (1020.320(d)), not from the end of the relationship. Monetary instrument records are kept for five years (1010.415(c)).",
    source: [
      { label: "31 CFR 1020.220(a)(3)(ii) – CIP record retention", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-B/section-1020.220" },
      { label: "31 CFR 1020.320(d) – SAR retention five years from filing", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-C/section-1020.320" }
    ]
  },
  {
    id: "PROG-019", difficulty: "medium", domain: 3, topic: "MSB customers: unregistered MSB found at review", hy: false,
    q: "During a periodic review, a bank learns that a long-standing convenience store customer regularly cashes checks for the public, often for more than $1,000 per person per day, but has never registered with FinCEN as a money services business. The account's activity matches what the bank expected. Under the interagency guidance on banking MSBs, what is the bank's MOST appropriate response?",
    options: [
      "Close the account at once, since banks may not serve MSBs that are not registered",
      "File a SAR on the unregistered MSB activity and reassess the risk; closure is not automatic",
      "Take no action, because banks are not the de facto regulators of the MSB industry",
      "Register the store with FinCEN on its behalf and carry on with the relationship as before"
    ],
    answer: [1],
    explanation: "The 2005 interagency guidance says a bank should file a SAR if it becomes aware that a customer is operating in violation of the MSB registration or state licensing requirements. It also says banks are not expected to terminate an MSB account solely because the customer has not registered, although continuing non-compliance may indicate higher risk. The runner-up quotes the guidance correctly (banks are not de facto regulators), but that does not remove the SAR expectation. A bank cannot register on the MSB's behalf.",
    source: [
      { label: "FinCEN and federal banking agencies – Interagency Interpretive Guidance on Providing Banking Services to MSBs (April 2005)", url: "https://www.fincen.gov/sites/default/files/shared/guidance04262005.pdf" },
      { label: "31 CFR 1010.100(ff)(2) – check casher over $1,000 per person per day", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-A/section-1010.100" }
    ]
  },
  {
    id: "PROG-020", difficulty: "hard", domain: 3, topic: "Individual liability of compliance officers", hy: false,
    q: "A former chief compliance officer of a money transmitter is under investigation. For years he did not terminate agent outlets that he had strong information were complicit in consumer fraud, and the program he designed kept the fraud department's data on those outlets away from the SAR analysts. Which statements about his personal exposure under US law are correct? (Choose two.)",
    options: [
      "He cannot be penalised personally unless he received a share of the fraud proceeds",
      "Individual liability applies only to directors, not to compliance staff who are employees",
      "As an officer who willfully violated the BSA, he can be assessed a civil money penalty personally",
      "Any BSA violation, however minor, automatically bars him from board service for life",
      "If found to have committed an egregious BSA violation, he is barred from boards of US financial institutions for 10 years"
    ],
    answer: [2, 4],
    explanation: "31 U.S.C. 5321(a)(1) makes a partner, director, officer or employee who willfully violates the BSA liable for civil penalties. No personal profit is required. Section 5321(g), added by the AML Act of 2020, bars an individual who commits an egregious violation from serving on the board of a US financial institution for 10 years. An egregious violation is a criminal conviction carrying more than one year, or a willful civil violation that facilitated money laundering or terrorist financing. The facts mirror FinCEN's 2017 settlement with former MoneyGram CCO Thomas Haider, who paid $250,000 and accepted a three-year bar from compliance roles at money transmitters.",
    source: [
      { label: "31 U.S.C. 5321 – civil penalties (a)(1) and 10-year board bar (g)", url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title31/html/USCODE-2023-title31-subtitleIV-chap53-subchapII-sec5321.htm" },
      { label: "FinCEN press release (4 May 2017) – settlement with former MoneyGram CCO Thomas Haider", url: "https://www.fincen.gov/news/news-releases/fincen-and-manhattan-us-attorney-announce-settlement-former-moneygram-executive" }
    ]
  },
  {
    id: "PROG-021", difficulty: "hard", domain: 3, topic: "Supervision: the 2026 OCC/FDIC MRA rule", hy: true,
    q: "The OCC and FDIC published a final rule on unsafe or unsound practices and matters requiring attention (MRAs) on 1 September 2026; it takes effect on 2 November 2026. A national bank with $3 billion in assets has an OCC examination scheduled to start after that date. An internal review has found two issues. First, the bank failed to file CTRs on 140 reportable cash transactions over six months because of a coding error. Second, its BSA procedures manual has outdated formatting and broken cross-references, although staff follow the procedures and no harm has resulted. Once the final rule applies, how can examiners address these issues?",
    options: [
      "Neither can be an MRA, because neither has materially harmed the bank's capital, earnings or liquidity",
      "Both should be MRAs, because MRAs cover any weakness in policies or documentation",
      "The manual issue can be an MRA, but the missed CTRs must be referred to FinCEN and cannot be an MRA",
      "The missed CTRs can support an MRA as a legal violation; the manual issue is a supervisory observation"
    ],
    answer: [3],
    explanation: "The rule is final but not yet in force; it governs OCC and FDIC supervisory findings from 2 November 2026. Under it (12 CFR 4.92(c) for the OCC), an MRA may be issued only for a practice that is contrary to prudent operation and could reasonably be expected to materially harm the bank's financial condition or the Deposit Insurance Fund, or for an actual violation of a banking or banking-related law. The preamble lists AML, CFT and sanctions laws as banking-related, so the missed CTRs qualify under the violation prong without any financial harm. That is why the runner-up, which looks only at financial harm, is wrong. The manual weakness meets neither prong, so it can only be a supervisory observation, an informal finding that creates no expectation that it goes to the board or that the bank takes corrective action (4.92(g)). Referral to FinCEN is not a substitute: the rule lets the OCC issue an MRA for a BSA violation.",
    source: [{ label: "OCC and FDIC final rule: Unsafe or Unsound Practices, Matters Requiring Attention (91 FR 56004, 1 Sept 2026; effective 2 Nov 2026) – 12 CFR 4.92(c), (g) and preamble on banking-related laws", url: "https://www.govinfo.gov/content/pkg/FR-2026-09-01/pdf/2026-17823.pdf" }],
    changed: "OCC/FDIC MRA and unsafe-or-unsound rule (effective 2 Nov 2026)"
  },
  {
    id: "PROG-022", difficulty: "hard", domain: 3, topic: "Supervision: uncorrected BSA problems and cease-and-desist orders", hy: false,
    q: "At its 2024 examination, a bank's federal regulator reported in an MRA that the bank's suspicious activity monitoring did not cover its wire transfers. At the 2026 examination, examiners find the same gap still open; management says the fix kept slipping because of budget. The bank's CTR filing is accurate and timely. Under 12 U.S.C. 1818(s), what is the MOST likely consequence?",
    options: [
      "A cease-and-desist order, which is mandatory when a previously reported BSA problem is not corrected",
      "A second MRA with a new deadline, because MRAs are the only tool for program weaknesses",
      "Automatic termination of the bank's deposit insurance, because the problem has now been reported twice",
      "No action, because accurate CTR filing shows that the program is working overall"
    ],
    answer: [0],
    explanation: "12 U.S.C. 1818(s)(3) says that if the federal banking agency finds that an insured depository institution has failed to establish and maintain BSA compliance procedures, or has failed to correct any problem with them that the agency previously reported, the agency 'shall' issue a cease-and-desist order. A second MRA is the tempting answer, but the statute makes formal action mandatory for an uncorrected, previously reported problem. Deposit insurance termination is a separate process, and good CTR filing does not cure a monitoring gap.",
    source: [{ label: "12 U.S.C. 1818(s) – compliance with monetary transaction recordkeeping and report requirements", url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title12/html/USCODE-2023-title12-chap16-sec1818.htm" }]
  },
  {
    id: "PROG-023", difficulty: "hard", domain: 3, topic: "BaaS and third-party risk: fintech partner oversight", hy: true,
    q: "A community bank holds deposits for 300,000 end users of four fintech partners. A middleware provider keeps the ledger of each end user's balance, and under contract the fintechs perform CIP and transaction monitoring. A review finds that the bank cannot obtain end-user transaction data without the middleware provider's consent, and that one fintech has a backlog of 9,000 unreviewed alerts. The fintechs say SAR decisions are theirs to make. What is the BSA officer's BEST course of action?",
    options: [
      "Accept the fintechs' position, since they perform monitoring under contract and bear the SAR obligation",
      "Secure direct access to end-user records, use audit and remediation rights, and own the backlog and SAR decisions",
      "Terminate all four partnerships at once and close the 300,000 end-user accounts without delay",
      "Ask each fintech to certify every year that its AML program is effective and complies with the BSA"
    ],
    answer: [1],
    explanation: "The July 2024 joint statement of the Federal Reserve, FDIC and OCC says that when third parties perform compliance functions such as suspicious activity monitoring and reporting, CIP and CDD, the bank remains responsible for any failure. It names lack of access to records as a key risk. The 2023 interagency third-party guidance says contracts typically give the bank the right to audit and require remediation, and that termination should be planned for an orderly transition. An annual certification, the runner-up, gives no access to data and does not clear the backlog. Abrupt mass closure is not a planned exit. In September 2026 the agencies proposed replacing the 2023 guidance and its supplements, but as of October 2026 that is only a proposal and the existing guidance still applies.",
    source: [
      { label: "Joint Statement on Banks' Arrangements with Third Parties to Deliver Bank Deposit Products and Services (25 July 2024)", url: "https://www.federalreserve.gov/newsevents/pressreleases/files/bcreg20240725c1.pdf" },
      { label: "Interagency Guidance on Third-Party Relationships: Risk Management (88 FR 37920, June 2023)", url: "https://www.govinfo.gov/content/pkg/FR-2023-06-09/pdf/2023-12340.pdf" },
      { label: "OCC, Fed, FDIC and NCUA: Proposed Third-Party Risk Management Guidance (FR 2026-18859, 15 Sept 2026) – proposal only", url: "https://www.govinfo.gov/content/pkg/FR-2026-09-15/pdf/2026-18859.pdf" }
    ]
  },
  {
    id: "PROG-024", difficulty: "hard", domain: 3, topic: "CTRs: FinCEN southwest border GTO (2026)", hy: false,
    q: "In October 2026, a registered MSB that cashes checks and exchanges currency operates in a New Mexico ZIP code covered by FinCEN's southwest border Geographic Targeting Order published in September 2026, and was also covered by the previous order. A customer exchanges $4,500 in US currency for Mexican pesos. Later that day the MSB deposits $60,000 in cash from its daily receipts at its commercial bank. Which statement is correct?",
    options: [
      "Neither transaction is reportable by the MSB, because neither exceeds $10,000 per customer",
      "The MSB must report the $4,500 exchange on a CTR within 15 days, as for any CTR",
      "Report the $4,500 exchange on a CTR within 30 days after verifying ID; the bank deposit is outside the GTO",
      "The GTO replaces the $10,000 CTR rule, so the MSB now reports only cash transactions of $1,000 to $10,000"
    ],
    answer: [2],
    explanation: "The GTO (effective 3 September 2026, running to 1 March 2027) requires covered MSBs to report each transaction in currency of $1,000 or more but not more than $10,000, including currency exchanges, on a CTR within 30 days, and to meet the ID requirements of 31 CFR 1010.312 before completing the transaction. (Certain Texas MSBs protected by court injunctions are excluded, which is why the stem places the MSB in New Mexico.) Transactions between a covered business and a commercial bank are excluded. The GTO does not change existing duties: CTRs for cash over $10,000 and SARs are still required, which rules out the claim that it replaces the $10,000 rule. The 15-day deadline applies to ordinary CTRs under 31 CFR 1010.306, not to GTO reports.",
    source: [{ label: "FinCEN Geographic Targeting Order, southwest border MSBs (91 FR 56776, 4 Sept 2026) – paras 1-8", url: "https://www.govinfo.gov/content/pkg/FR-2026-09-04/pdf/2026-18194.pdf" }],
    changed: "FinCEN southwest border MSB GTO (Sept 2026)"
  },
  {
    id: "PROG-025", difficulty: "medium", domain: 3, topic: "US AML/CFT program rule reform: status in 2026", hy: false,
    q: "In October 2026, a vendor tells a US bank's BSA officer that FinCEN's new AML/CFT program rule is in force. It says the bank must now have an 'effective' program, must have its AML/CFT officer located in the United States, and will face enforcement only for 'significant or systemic' failures. What is the accurate position?",
    options: [
      "These come from FinCEN's April 2026 proposal, which is not final; 31 CFR 1020.210 still governs",
      "FinCEN finalised the rule in 2026, and banks must comply within 12 months of its publication",
      "The rule took effect on 9 June 2026, the day its public comment period closed",
      "The rule now applies to banks, but not yet to MSBs or broker-dealers"
    ],
    answer: [0],
    explanation: "FinCEN published a proposed rule on AML/CFT programs on 10 April 2026. It would require 'effective' programs, a US-located AML/CFT officer and a focus on significant or systemic failures, with an effective date 12 months after a final rule. The comment period closed on 9 June 2026, but as of early October 2026 FinCEN's Federal Register listings show no final rule. Until then, the current program rule at 31 CFR 1020.210 applies. A comment deadline is not an effective date.",
    source: [
      { label: "FinCEN proposed rule, AML/CFT Programs (Federal Register, 10 April 2026)", url: "https://www.federalregister.gov/documents/2026/04/10/2026-07033/anti-money-laundering-and-countering-the-financing-of-terrorism-programs" },
      { label: "31 CFR 1020.210 – current AML program requirements for banks", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-B/section-1020.210" }
    ]
  }
]);
