window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "GOV-001", difficulty: "hard", domain: 3, topic: "Board MI: key risk indicators vs key performance indicators", hy: true,
    q: "A bank's chief compliance officer is redesigning the quarterly financial crime dashboard for the board risk committee. She wants one section for key risk indicators (KRIs), which track the drivers of the bank's exposure, and a separate section for key performance indicators (KPIs), which track how well its processes are running. Which of the following metrics belong in the KRI section? (Choose two.)",
    options: [
      "Percentage of transaction monitoring alerts closed within the 30-day service level",
      "Number of new correspondent relationships with respondents in high-risk jurisdictions",
      "Completion rate of mandatory annual financial crime training",
      "Share of cash-intensive business customers in the retail customer book",
      "Number of quality assurance defects per 100 investigation files reviewed"
    ],
    answer: [1, 3],
    explanation: "The Basel Committee describes risk indicators (KRIs) as metrics that monitor the main drivers of exposure to key risks, and performance indicators (KPIs) as metrics that give insight into the status of operational processes. New high-risk correspondent relationships and the share of cash-intensive customers measure how much risk the bank is taking on, so they are KRIs. Alert ageing, training completion and QA defect rates measure how well controls are executed, so they are KPIs. They matter to the board too, but a dashboard that mixes them up cannot show whether exposure is rising while controls weaken.",
    source: [{ label: "BCBS, Principles for the Sound Management of Operational Risk (2011), para 39(f) – KRIs and KPIs", url: "https://www.bis.org/publications/201106-guidelines-principles-sound-management-operational-risk.pdf" }]
  },
  {
    id: "GOV-002", difficulty: "hard", domain: 3, topic: "Demonstrating programme effectiveness: SAR volumes and quality", hy: true,
    q: "A small savings bank serves salaried local customers and offers no international wires, trade finance or private banking. It filed no suspicious transaction reports last year. Its risk assessment is current, its monitoring scenarios were tuned to its risk profile, and two escalated cases were investigated and closed with documented reasons. A new non-executive director says that filing zero reports proves the programme is failing, and asks for a target of at least ten reports a year so that the bank matches its peers. Which response from the chief compliance officer BEST reflects the Wolfsberg Group's view on demonstrating effectiveness?",
    options: [
      "Agree to the target, because peer comparison of report volumes is the most objective measure of effectiveness",
      "Explain that a lower-risk bank can be effective without filing reports if it understands its risks and has a reasonably designed programme",
      "Lower the alert thresholds until the monitoring system produces enough cases to meet a ten-report target",
      "Report that effectiveness cannot be measured, so the board should rely only on the annual independent audit opinion"
    ],
    answer: [1],
    explanation: "Wolfsberg's 2021 paper says that a smaller institution with a lower risk profile could have an effective programme even if it has filed no STRs or SARs, as long as it has shown that it understands its financial crime risk and has a programme designed for that risk. It also says that effectiveness metrics should focus on quality, not quantity, and should not be used to compare one institution with another, so a peer-matching target is the wrong measure. Lowering thresholds to manufacture reports would add noise, not useful information. Effectiveness can be measured, but through outcomes and quality indicators, not volume.",
    source: [{ label: "Wolfsberg Group, Demonstrating Effectiveness (2021), p.3 – quality not quantity; no peer comparison", url: "https://db.wolfsberg-group.org/assets/b76e0ef2-381b-443f-9901-62cdd7ff27a7/Wolfsberg%20Group%20Statement%20Demonstrating%20%20Effectiveness.pdf" }]
  },
  {
    id: "GOV-003", difficulty: "medium", domain: 3, topic: "AML/CFT compliance officer's annual activity report (EBA/GL/2022/05)", hy: false,
    q: "The AML/CFT compliance officer of an EU credit institution is preparing the annual activity report for the management body under the EBA Guidelines on the role of AML/CFT compliance officers (EBA/GL/2022/05). Which item should the report contain?",
    options: [
      "The number of customer files in each risk category for which CDD reviews and updates are outstanding",
      "The names of customers reported to the FIU during the year, so that directors can decide on exits",
      "A ranking of individual analysts by the number of alerts each closed during the year",
      "A copy of every suspicious transaction report filed, with the supporting case documentation"
    ],
    answer: [0],
    explanation: "Paragraph 50 of the EBA Guidelines lists the minimum content of the activity report. It includes the classification of customers by risk category, with the number of files in each category whose CDD reviews and updates are outstanding, together with statistics on unusual transactions, STRs, relationships ended over AML/CFT concerns, and requests from the FIU and law enforcement. The Guidelines expect information on FIU communications to be given without prejudice to STR confidentiality, so naming reported customers or attaching full STR files is wrong. Analyst league tables are not part of the required content.",
    source: [{ label: "EBA/GL/2022/05, para 50 – content of the activity report", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-05%20GLs%20on%20AML%20compliance%20officers/1035126/Guidelines%20on%20AMLCFT%20compliance%20officers.pdf" }]
  },
  {
    id: "GOV-004", difficulty: "hard", domain: 3, topic: "Board reporting: what MI the board needs", hy: false,
    q: "The board of a mid-sized bank meets quarterly and has two hours for all risk topics. The MLRO's last pack ran to 180 pages: full lists of alerts, every policy change in tracked changes, and a traffic-light table showing every control as green. Since then, the bank has started onboarding payment service providers. The national FIU has also published an alert on mule networks recruiting students, and internal audit has rated sanctions screening as needing improvement. The chair says directors cannot tell from the pack what has changed or what they must decide. What should the MLRO's next report focus on?",
    options: [
      "The full alert and case listings, so that directors can form their own view of individual customers",
      "A one-page traffic-light summary, with no narrative, so that directors can review it quickly",
      "Changes in the risk profile and emerging risks, how well controls are working, audit findings, and decisions needed",
      "Regulatory and legislative updates only, because operational detail is a matter for management"
    ],
    answer: [2],
    explanation: "Basel's AML/CFT guidelines say risk information should reach the board in a timely, complete, understandable and accurate form, so that it can make informed decisions. The FCA's Financial Crime Guide lists the MI senior management need: emerging risks and changes to the risk assessment, legal developments and their impact, the effectiveness of controls, and key relationship data. A traffic-light summary with no narrative is the runner-up. It is short, but it would not explain the new PSP exposure, the FIU alert or the audit finding, and an all-green table that conflicts with audit results is misleading. Raw alert lists bury the decisions the board must take.",
    source: [
      { label: "BCBS, Sound management of risks related to ML/FT (rev. 2020), para 17 – board information", url: "https://www.bis.org/publications/202007-guidelines-sound-management-risks-related-money-laundering-and-financing-terrorism-revisions-supervisory.pdf" },
      { label: "FCA Financial Crime Guide FCG 2.2.2 – management information", url: "https://www.handbook.fca.org.uk/handbook/FCG/2/2.html" }
    ]
  },
  {
    id: "GOV-005", difficulty: "hard", domain: 3, topic: "Incentives and KPIs: front-office remuneration", hy: false,
    q: "A bank's relationship managers (RMs) earn bonuses based only on new deposits and the number of accounts opened. Quality assurance finds that 22% of the files opened by the top-earning RM team had missing source-of-funds evidence or unapproved CDD exceptions, against 4% elsewhere. Two of these files later produced suspicious transaction reports. The head of sales says that compliance quality is the second line's job, and that adding it to sales targets would hurt growth. What is the BEST action for the chief compliance officer to recommend?",
    options: [
      "Ask the second line to re-perform CDD on every file opened by the RM team before each account is activated",
      "Move the RM team's onboarding to a central operations unit, leaving the bonus plan unchanged",
      "Issue a reminder to all RMs and repeat financial crime training for the team with the highest error rate",
      "Add financial crime quality measures, such as CDD defect rates and overdue remediation, to RM scorecards and bonuses"
    ],
    answer: [3],
    explanation: "The FCA's Financial Crime Guide says firms should manage the risk of staff being rewarded for taking unacceptable financial crime risks. It lists as poor practice a poor compliance record that is not reflected in staff appraisals and remuneration. The FSB principles also link the risk appetite statement to compensation programmes. Re-performing every file in the second line is the runner-up. It would catch defects, but it treats the symptom, weakens first-line ownership of the risk and leaves the incentive that caused the problem in place. Training alone does not change a pay structure that rewards volume over quality.",
    source: [
      { label: "FCA Financial Crime Guide FCG 2.2.6 – remuneration and financial crime risk", url: "https://www.handbook.fca.org.uk/handbook/FCG/2/2.html" },
      { label: "FSB, Principles for an Effective Risk Appetite Framework (2013), 2.1(b)", url: "https://www.fsb.org/wp-content/uploads/r_131118.pdf" }
    ]
  },
  {
    id: "GOV-006", difficulty: "hard", domain: 3, topic: "Writing a financial crime risk appetite statement", hy: true,
    q: "A bank's board asks the CCO to draft the financial crime section of its risk appetite statement. The bank wants to grow its business with money services businesses, and it serves some PEPs through private banking. Which draft wording BEST meets the FSB's principles for an effective risk appetite statement?",
    options: [
      "\"The bank has zero tolerance for financial crime risk in all business lines and will accept no relationship that carries any such risk.\"",
      "\"The bank has a low appetite for financial crime risk and expects all business lines to manage it carefully and in line with policy.\"",
      "\"No appetite for knowingly facilitating crime or sanctions breaches; limited appetite for high-risk clients, capped at 5% of the book.\"",
      "\"The bank's appetite for financial crime risk is set at the minimum standards in applicable regulations, which define what is acceptable.\""
    ],
    answer: [2],
    explanation: "The FSB says a risk appetite statement should combine qualitative statements, which explain why the firm takes on or avoids certain risks, with quantitative measures that can be turned into limits for business lines and monitored. Limits should not simply default to regulatory minimums. The 'low appetite' wording is the runner-up, because it sets a tone. But it has no measurable boundary, so nobody can tell when the bank is outside appetite. 'Zero tolerance' for all financial crime risk is unworkable for a bank that serves MSBs and PEPs and cannot be translated into limits.",
    source: [{ label: "FSB, Principles for an Effective Risk Appetite Framework (2013), s.2 and 3.1(d)", url: "https://www.fsb.org/wp-content/uploads/r_131118.pdf" }]
  },
  {
    id: "GOV-007", difficulty: "hard", domain: 3, topic: "Risk appetite breach: escalation and options", hy: true,
    q: "A bank's board-approved risk appetite caps money services business (MSB) customers at 6% of commercial deposits, with a KRI reported monthly. After a large acquisition of MSB accounts by the payments team, the KRI stands at 9%. The bank's EDD for MSBs is rated effective, and the new customers are profitable. The head of payments emails the CCO proposing that the CCO 'temporarily accept' a 10% limit so that the team does not have to report a breach. What should the CCO do FIRST?",
    options: [
      "Accept the temporary 10% limit, because the EDD controls are rated effective and the breach is only technical",
      "Escalate the breach to the body that owns the appetite, with options to reduce exposure, add controls or change the appetite",
      "Begin exiting MSB customers at once, newest first, until the KRI falls back below the 6% cap",
      "Note the breach in the file and revisit the cap at the next annual review of the risk assessment"
    ],
    answer: [1],
    explanation: "The FSB principles expect breaches of risk limits to be identified and escalated promptly to the board and senior management, and the board, not an individual officer, approves the risk appetite statement. The Wolfsberg risk assessment FAQs say that where residual risk exceeds appetite, the firm must agree measures to reduce inherent risk or strengthen controls, or discuss whether the appetite is correctly set, with senior management closely involved. Exiting MSBs at once is the runner-up, but it is a decision the governance body should take, and wholesale exits raise de-risking concerns. Waiting a year leaves an unapproved breach in place.",
    source: [
      { label: "FSB, Principles for an Effective Risk Appetite Framework (2013), s.4 – escalation of limit breaches", url: "https://www.fsb.org/wp-content/uploads/r_131118.pdf" },
      { label: "Wolfsberg FAQs on Risk Assessments (2015), Q8 – residual risk above appetite", url: "https://db.wolfsberg-group.org/assets/3deb66d7-6aca-490c-bcd9-c1a3d34a807b/17.%20Wolfsberg-Risk-Assessment-FAQs-2015.pdf" }
    ]
  },
  {
    id: "GOV-008", difficulty: "medium", domain: 3, topic: "Risk appetite framework: roles and responsibilities", hy: false,
    q: "Which allocation of roles for a bank's risk appetite framework is consistent with the FSB's Principles for an Effective Risk Appetite Framework?",
    options: [
      "The board approves the statement, senior management turns it into business-line limits, and internal audit assesses the framework",
      "The chief risk officer approves the statement, the board monitors limits, and compliance assesses the framework independently",
      "Business lines set their own limits, the board ratifies them each year, and the external auditor approves the statement",
      "Internal audit drafts the statement, the CEO approves it, and the board reviews breaches only after the annual audit"
    ],
    answer: [0],
    explanation: "Under the FSB principles, the board must establish the risk appetite framework and approve the risk appetite statement, which is developed with the CEO, CRO and CFO. These executives translate the board's expectations into targets and constraints for business lines and legal entities. Internal audit, an external auditor or another independent party then assesses the design and effectiveness of the framework. Letting the CRO approve the statement, or letting business lines set their own limits, removes board ownership. Internal audit cannot both draft the statement and independently assess it.",
    source: [{ label: "FSB, Principles for an Effective Risk Appetite Framework (2013), s.4", url: "https://www.fsb.org/wp-content/uploads/r_131118.pdf" }]
  },
  {
    id: "GOV-009", difficulty: "hard", domain: 3, topic: "Implementing the risk appetite statement in controls", hy: false,
    q: "A bank's board adds a new line to its risk appetite statement: \"No appetite for relationships with, or payments to, virtual asset service providers that are not licensed or registered where they operate.\" Six weeks later, a sample review finds that relationship managers have onboarded two crypto-trading firms whose licences could not be verified, and that payments to several offshore exchanges have continued. Which step would BEST put the new statement into effect?",
    options: [
      "Publish the updated statement on the intranet and ask all staff to confirm that they have read it",
      "Run a one-off training session for relationship managers on virtual asset typologies",
      "Ask internal audit to test compliance with the statement at its next scheduled audit",
      "Turn it into a licence check at onboarding, monitoring of payments to such exchanges, and MI with escalation"
    ],
    answer: [3],
    explanation: "The FSB principles say the aggregate appetite must be allocated to business lines through limits and controls that are specific, measurable and monitored regularly. A risk appetite statement only works when it is cascaded into operating controls. Here that means an onboarding hard stop on licence verification, monitoring of payments to unlicensed exchanges, and MI that shows breaches and escalates them. Communication and training support the statement but do not stop the breaches already occurring. A future audit is independent assurance, not implementation.",
    source: [{ label: "FSB, Principles for an Effective Risk Appetite Framework (2013), s.2 and 3", url: "https://www.fsb.org/wp-content/uploads/r_131118.pdf" }]
  },
  {
    id: "GOV-010", difficulty: "hard", domain: 3, topic: "EU business-wide risk assessment: drafting and approval (AMLR Art. 10, AMLA draft guidelines)", hy: false,
    changed: "AMLA draft BWRA guidelines (consultation Apr-Jul 2026)",
    q: "In October 2026 an EU payment institution is preparing for the Anti-Money Laundering Regulation (EU) 2024/1624, which applies from 10 July 2027. It hires a consultancy to rebuild its business-wide risk assessment (BWRA). The consultancy offers a fixed methodology, scoring, and a final sign-off letter certifying the BWRA as compliant, so that 'nobody internally needs to own the model'. AMLA consulted on draft BWRA guidelines from April to July 2026. Which approach is consistent with Article 10 of the AMLR and AMLA's draft guidelines?",
    options: [
      "Accept the consultancy's certificate as approval, because the firm may outsource the BWRA to a qualified third party",
      "Have the supervisory board approve the consultancy's draft directly, since it oversees the management body",
      "Use the consultancy for support, but the compliance officer draws up the BWRA and the management body approves it",
      "Submit the consultancy's draft to AMLA, which must approve each BWRA before it takes effect"
    ],
    answer: [2],
    explanation: "Article 10(2) AMLR says the BWRA is drawn up by the compliance officer, approved by the management body in its management function, and communicated to the management body in its supervisory function where one exists. AMLA's draft guidelines allow third parties to help, provided the proposal and approval stay within the firm and the firm can understand and explain the methodology and results. A consultant's certificate is not approval, and supervisory-board approval skips the management function. AMLA does not approve individual BWRAs; firms make them available to supervisors on request. The guidelines were still a draft in October 2026.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Art. 10", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" },
      { label: "AMLA consultation on draft Guidelines on business-wide risk assessment (16 Apr–15 Jul 2026)", url: "https://www.amla.europa.eu/policy/public-consultations/consultation-draft-guidelines-business-wide-risk-assessment_en" }
    ]
  },
  {
    id: "GOV-011", difficulty: "hard", domain: 3, topic: "Enterprise risk assessment: control design vs operating effectiveness", hy: true,
    q: "During a bank's enterprise-wide risk assessment, the team reviews the transaction monitoring control for trade finance. A documented scenario covers over- and under-invoicing, with thresholds approved by the model governance committee. Compliance testing finds that, for nine months, a data mapping error has kept documentary collections, about 40% of trade volume, out of the monitoring feed. The business says the scenario 'exists and is approved', so the control should be rated effective. How should the risk assessment rate this control?",
    options: [
      "Adequately designed but not operating effectively, so it gives limited mitigation until the feed is fixed",
      "Effective, because the scenario is documented and approved through the governance process",
      "Not designed adequately, because a scenario that misses transactions has a flawed design",
      "Not rated this cycle, because the data mapping fix is already planned for next quarter"
    ],
    answer: [0],
    explanation: "The Wolfsberg FAQs on risk assessments and AMLA's draft BWRA guidelines both require controls to be assessed for design (does a suitable control exist?) and for operation or implementation (does it actually work in practice?). Here the scenario logic is suitable, but it is not applied to 40% of the volume, so the design is adequate and operating effectiveness is deficient. Rating it effective ignores the test results. Calling it a design failure is the runner-up, but the gap is in data and execution, not in the scenario. A planned fix does not remove the need to rate the control now.",
    source: [
      { label: "Wolfsberg FAQs on Risk Assessments (2015), s.6.2 – design and operating effectiveness", url: "https://db.wolfsberg-group.org/assets/3deb66d7-6aca-490c-bcd9-c1a3d34a807b/17.%20Wolfsberg-Risk-Assessment-FAQs-2015.pdf" },
      { label: "AMLA draft BWRA guidelines (2026), Minimum Requirement 3, paras 25–28", url: "https://www.amla.europa.eu/policy/public-consultations/consultation-draft-guidelines-business-wide-risk-assessment_en" }
    ]
  },
  {
    id: "GOV-012", difficulty: "hard", domain: 3, topic: "Residual risk: limits of mitigation for high inherent risk", hy: true,
    q: "A bank's private banking unit serves non-resident clients, many of them foreign PEPs, who hold accounts through offshore holding companies. The enterprise-wide risk assessment rates its inherent risk as high. Its controls (EDD, senior management approval, enhanced monitoring and annual reviews) are all tested and rated strong. The business head wants the residual risk recorded as 'Low' so that the unit can apply for a larger growth budget. Under the methodology described in the Wolfsberg risk assessment FAQs, what is the BEST response?",
    options: [
      "Record 'Low', because strong, tested controls fully offset a high inherent risk",
      "Record 'High', because residual risk always equals inherent risk for PEP business",
      "Record 'Low', but only after internal audit has confirmed the control ratings",
      "Record no lower than 'Moderate', because high inherent risk cannot reach low residual"
    ],
    answer: [3],
    explanation: "The Wolfsberg FAQs describe rules for finalising ratings. A strong control environment can lower residual risk below inherent risk, but a business with a high inherent ML risk can never achieve a low residual rating. Their three-tier example defines high inherent risk with adequate controls as moderate residual risk. AMLA's 2026 draft BWRA guidelines say the same: inherently high-risk factors cannot be completely mitigated by controls. Saying residual always equals inherent is wrong, because it would make controls irrelevant. Audit confirmation does not change the ceiling.",
    source: [
      { label: "Wolfsberg FAQs on Risk Assessments (2015), s.6.3 – residual risk rules", url: "https://db.wolfsberg-group.org/assets/3deb66d7-6aca-490c-bcd9-c1a3d34a807b/17.%20Wolfsberg-Risk-Assessment-FAQs-2015.pdf" },
      { label: "AMLA draft BWRA guidelines (2026), Minimum Requirement 4, para 29", url: "https://www.amla.europa.eu/policy/public-consultations/consultation-draft-guidelines-business-wide-risk-assessment_en" }
    ]
  },
  {
    id: "GOV-013", difficulty: "hard", domain: 1, topic: "Bribery and corruption risk: factors beyond the ML risk assessment", hy: false,
    q: "A bank already runs a detailed money laundering risk assessment covering customers, products, channels and geographies. The board now asks for a bribery and corruption risk assessment. The project lead proposes to reuse the ML model unchanged, arguing that the factors are the same. Which factors does the Wolfsberg Group say are MORE relevant to a bribery and corruption risk assessment than to a pure ML assessment, and should therefore be added? (Choose two.)",
    options: [
      "Third parties, such as agents and introducers, who act on the bank's behalf",
      "The proportion of cash-intensive businesses in the retail customer base",
      "The share of accounts opened through non-face-to-face channels",
      "The volume of incoming wires from jurisdictions with weak AML regimes",
      "The bank's own gifts, entertainment and charitable-giving practices"
    ],
    answer: [0, 4],
    explanation: "The Wolfsberg FAQs on risk assessments note that factors such as jurisdiction and government-related clients matter for both ML and bribery risk. Other factors are much more relevant to a bribery and corruption assessment, including third parties acting on the institution's behalf, hiring practices, charitable giving and business gifts and entertainment. These are how the bank itself could give or receive an improper benefit. Cash intensity, non-face-to-face onboarding and wires from weak-regime jurisdictions are standard ML risk factors that the existing model already covers.",
    source: [{ label: "Wolfsberg FAQs on Risk Assessments for ML, Sanctions and Bribery & Corruption (2015), Q5", url: "https://db.wolfsberg-group.org/assets/3deb66d7-6aca-490c-bcd9-c1a3d34a807b/17.%20Wolfsberg-Risk-Assessment-FAQs-2015.pdf" }]
  },
  {
    id: "GOV-014", difficulty: "hard", domain: 3, topic: "Fraud risk assessment for the UK failure to prevent fraud offence", hy: false,
    changed: "UK failure to prevent fraud offence in force 1 Sep 2025",
    q: "A large UK bank's head of financial crime tells the board that no new work is needed for the failure to prevent fraud offence under the Economic Crime and Corporate Transparency Act 2023. The bank is FCA-regulated and has a mature AML risk assessment and an anti-fraud team focused on card fraud against the bank. Its insurance sales staff are paid partly on commission, and a recent audit found weak oversight of an outsourced sales agent. According to the Home Office guidance, what is the BEST approach?",
    options: [
      "Rely on the existing AML and card-fraud controls, because FCA-regulated firms are treated as having reasonable procedures",
      "Extend existing risk assessments to frauds by associated persons, using the fraud triangle, and test controls against each risk",
      "Commission a separate standalone fraud programme, discarding the existing assessments to avoid any overlap",
      "Wait until the first prosecutions under the offence show what the courts consider reasonable procedures"
    ],
    answer: [1],
    explanation: "The government guidance, for the offence in force since 1 September 2025, says the risk assessment should be dynamic, documented and reviewed. Firms may extend existing risk assessments to cover in-scope frauds by employees, agents and other associated persons, using the fraud triangle of opportunity, motive and rationalisation (commission pay and weak agent oversight are examples). It says being regulated does not automatically qualify existing compliance processes as reasonable procedures, so firms should test whether each identified risk is covered. Discarding existing work is unnecessary, because the guidance warns against duplication. Waiting would leave the bank without a defence.",
    source: [{ label: "Home Office, Guidance to organisations on the offence of failure to prevent fraud (2024), ch. 3.2–3.3", url: "https://www.gov.uk/government/publications/offence-of-failure-to-prevent-fraud-introduced-by-eccta/economic-crime-and-corporate-transparency-act-2023-guidance-to-organisations-on-the-offence-of-failure-to-prevent-fraud-accessible-version" }]
  },
  {
    id: "GOV-015", difficulty: "hard", domain: 2, topic: "Basel: what roles the chief AML/CFT officer may combine", hy: true,
    q: "A mid-sized bank is restructuring its control functions to cut costs and is weighing four proposals for its chief AML/CFT officer. According to the Basel Committee's guidelines on sound management of ML/FT risks, which proposal is acceptable?",
    options: [
      "The chief AML/CFT officer also becomes the bank's data protection officer and handles customer data-access requests",
      "The chief AML/CFT officer also heads internal audit, so that one person oversees AML testing end to end",
      "The chief AML/CFT officer also serves as chief compliance officer, with a direct reporting line to the board",
      "The chief AML/CFT officer reports to the head of retail banking, who supervises the largest customer book"
    ],
    answer: [2],
    explanation: "Basel's guidelines say the chief AML/CFT officer may also be the chief risk officer or chief compliance officer, with a direct reporting line to senior management or the board. To avoid conflicts of interest, the officer should not have business-line responsibilities and should not be given data protection or internal audit responsibilities. Data protection is the closest wrong answer: it may look like a natural fit, but the guidelines specifically exclude it. Reporting to a business head undermines independence, and running internal audit would mean auditing one's own work.",
    source: [{ label: "BCBS, Sound management of risks related to ML/FT (rev. 2020), paras 23–24", url: "https://www.bis.org/publications/202007-guidelines-sound-management-risks-related-money-laundering-and-financing-terrorism-revisions-supervisory.pdf" }]
  },
  {
    id: "GOV-016", difficulty: "hard", domain: 3, topic: "Front office vs AML/CFT compliance officer: high-risk onboarding decisions", hy: true,
    q: "At an EU bank, a senior relationship manager wants to onboard a high-net-worth client whose wealth comes from a family business in a high-risk third country. The client's brother is a deputy minister. The RM argues that the first line owns the risk and should decide. The AML/CFT compliance officer recommends declining because the source of wealth cannot be verified. The bank's policy requires senior management approval for this type of client. Under the EBA Guidelines on AML/CFT compliance officers, how should the decision be made?",
    options: [
      "The relationship manager decides, because the first line of defence owns the risk of its customers",
      "The AML/CFT compliance officer decides, because the Guidelines give the officer a veto over high-risk onboarding",
      "Senior management decides after consulting the officer, recording reasons and mitigation if it overrules",
      "The bank refers the case to its national supervisor for prior approval before deciding"
    ],
    answer: [2],
    explanation: "EBA/GL/2022/05 says the AML/CFT compliance officer should be consulted before senior management takes a final decision on onboarding or keeping high-risk customers. If senior management does not follow the officer's advice, it must record its decision and explain how it will mitigate the risks the officer raised. The RM's first-line argument is the runner-up: the first line does own its risks, but the decision here belongs to senior management, not the RM. The Guidelines give the officer an advisory role, not a veto, and do not require supervisory pre-approval of individual customers.",
    source: [{ label: "EBA/GL/2022/05, para 43 – high-risk customers", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-05%20GLs%20on%20AML%20compliance%20officers/1035126/Guidelines%20on%20AMLCFT%20compliance%20officers.pdf" }]
  },
  {
    id: "GOV-017", difficulty: "medium", domain: 3, topic: "Front office roles in ongoing monitoring", hy: false,
    q: "To cut costs, a UK bank proposes to move the ongoing monitoring of its commercial accounts, including the review and closure of monitoring alerts, from a central financial crime team to the relationship managers who run those accounts. RMs are paid partly on revenue retained. Which concern does the FCA's Financial Crime Guide raise about this kind of arrangement?",
    options: [
      "Monitoring done by customer-facing staff rewarded for bringing in or keeping business",
      "Letting relationship managers gather information from customers in response to alerts",
      "Relationship managers being too far from customers to judge their activity",
      "Recording relationship managers' knowledge of customers in the KYC file"
    ],
    answer: [0],
    explanation: "The FCA's Financial Crime Guide lists as poor practice allocating the ongoing monitoring of commercial accounts to customer-facing staff who are incentivised to bring in or retain business. It also flags giving one person too many accounts to monitor. RMs know their customers and can usefully gather information and context for investigators, so that is not the concern. The problem is letting people with a commercial conflict of interest decide on alerts. Disposition should stay with staff who are independent of revenue targets.",
    source: [{ label: "FCA Financial Crime Guide FCG 4.2.5 (investment fraud) – poor practice: monitoring by incentivised staff", url: "https://www.handbook.fca.org.uk/handbook/FCG/4/2.html" }]
  },
  {
    id: "GOV-018", difficulty: "hard", domain: 3, topic: "Outsourcing AML/CFT tasks: what cannot be delegated", hy: false,
    q: "A small EU payment institution plans to outsource most AML/CFT operations to a specialist provider in another member state. The provider offers a 'full-service' package. Under the EBA Guidelines on AML/CFT compliance officers, which of these decisions must stay with the institution and may NOT be outsourced? (Choose three.)",
    options: [
      "Approval of the business-wide ML/TF risk assessment",
      "First-level review of screening alerts against documented procedures",
      "Approval of the criteria used to detect suspicious or unusual transactions",
      "Approval of the methodology for assigning customer risk profiles",
      "Collection and verification of customer identity documents"
    ],
    answer: [0, 2, 3],
    explanation: "EBA/GL/2022/05 says outsourcing cannot delegate the management body's responsibilities, and that strategic AML/CFT decisions must not be outsourced. These include approving the business-wide risk assessment, adopting policies, deciding how the AML/CFT framework is organised, approving the customer risk methodology, and approving the criteria for detecting suspicious or unusual transactions. The institution also remains responsible for the decision to report to the FIU. Operational tasks such as first-level alert review or document collection may be outsourced, but under a written agreement with oversight of quality.",
    source: [{ label: "EBA/GL/2022/05, para 68 – outsourcing principles and non-delegable decisions", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-05%20GLs%20on%20AML%20compliance%20officers/1035126/Guidelines%20on%20AMLCFT%20compliance%20officers.pdf" }]
  },
  {
    id: "GOV-019", difficulty: "hard", domain: 3, topic: "Employee due diligence: risk-based vetting scope", hy: true,
    q: "A UK bank's vetting policy runs basic checks on permanent staff at hire and enhanced checks (credit, criminal record and directorships) only for board members and executives. The payments operations team, which can release high-value payments and amend beneficiary details, is staffed half by contractors from an agency. The bank has never checked the agency's vetting. No one is rescreened after joining. An internal fraud last year involved a contractor in that team. Which change would MOST improve the bank's employee due diligence?",
    options: [
      "Apply enhanced checks to every employee and contractor in the bank, regardless of role, at hire",
      "Require the agency to warrant in its contract that its contractors are honest and suitably qualified",
      "Add annual attestations in which all staff confirm that they have no criminal convictions",
      "Vet by role exposure, giving high-risk temps the same checks as staff, and rescreen and verify agencies"
    ],
    answer: [3],
    explanation: "Under UK MLR regulation 21, screening covers skills, knowledge and expertise as well as conduct and integrity, both before appointment and during it. The FCA's Financial Crime Guide lists as good practice more thorough vetting for higher-risk roles, the same vetting for temporary staff in such roles as for permanent staff, and periodic checks that agencies meet the agreed standard. It lists as poor practice one-off vetting and limiting enhanced vetting to senior management. Enhanced checks for everyone is the runner-up: it closes the gap, but it is not risk-based and still ignores rescreening. A contractual warranty or self-attestation is no substitute for checks.",
    source: [
      { label: "FCA Financial Crime Guide FCG 2.2.6 – staff vetting good and poor practice", url: "https://www.handbook.fca.org.uk/handbook/FCG/2/2.html" },
      { label: "UK MLRs 2017, reg. 21(1)(b) and (2) – screening of relevant employees", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/21" }
    ]
  },
  {
    id: "GOV-020", difficulty: "medium", domain: 2, topic: "EU AMLR: integrity of employees and conflicts of interest", hy: false,
    q: "Once the EU Anti-Money Laundering Regulation (EU) 2024/1624 applies, a KYC analyst at an EU bank is assigned the periodic review of a corporate customer. The customer's managing director is the analyst's brother-in-law. What does Article 13 of the AMLR require?",
    options: [
      "The analyst may carry out the review if a second analyst checks and signs off the conclusions",
      "The analyst must tell the compliance officer and be kept from compliance tasks on that customer",
      "The bank must end the relationship, because the conflict cannot be managed",
      "The analyst need only declare the relationship in the annual conflicts-of-interest attestation"
    ],
    answer: [1],
    explanation: "Article 13(2) AMLR requires employees with AML/CFT tasks, including agents and distributors, to inform the compliance officer of any close private or professional relationship with customers or prospective customers. They must then be prevented from undertaking compliance tasks for those customers. A second reviewer does not satisfy this, because the rule bars the conflicted person from the task altogether. Article 13 deals with the employee's conflict, not the customer, so there is no requirement to exit. A once-a-year attestation would come too late. Article 13(1) also requires a risk-based integrity assessment before an employee starts and at regular intervals.",
    source: [{ label: "Regulation (EU) 2024/1624 (AMLR), Art. 13 – integrity of employees", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }]
  },
  {
    id: "GOV-021", difficulty: "hard", domain: 1, topic: "Insider risk: red flags of a complicit employee", hy: false,
    q: "A broker-dealer's surveillance team reviews an account executive who has worked at the firm for twelve years and was a top producer last year. He has not taken more than two consecutive days of leave in three years, recently bought a holiday home, and handles one small client account with unusually heavy activity. That account receives third-party wires and moves funds out quickly. Several of its order tickets are missing supporting documents. He works in a satellite office, and his manager supervises him remotely from another country. Which conclusion is MOST supported by these facts?",
    options: [
      "The pattern mainly shows a supervision gap caused by remote management, and needs no further review of the account",
      "The pattern shows a sales-practice problem that should go to the conduct team rather than to financial crime",
      "Several recognised indicators suggest the employee may be helping a client launder funds, which needs investigation",
      "The pattern is expected for a high-performing executive and suggests the firm should review his bonus"
    ],
    answer: [2],
    explanation: "FATF's report on the securities sector lists indicators of employees who may be assisting launderers. They include a lifestyle that his pay cannot explain, reluctance to take leave, heavy activity in one relatively unimportant account, missing documents, autonomy without direct control, and supervision only from another country. Taken together with third-party wires moving rapidly through the account, these facts call for an investigation of possible complicity. The remote-supervision gap is real and is the runner-up, but it is only one of the indicators, not an explanation of them. Treating the facts as a sales-practice or bonus issue ignores the ML pattern.",
    source: [{ label: "FATF, Money Laundering and Terrorist Financing in the Securities Sector (2009), para 144 – employee indicators", url: "https://eurasiangroup.org/files/FATF_docs/ML_and_TF_in_the_Securities_Sector.pdf" }]
  },
  {
    id: "GOV-022", difficulty: "hard", domain: 3, topic: "Integrity concerns about the AML/CFT compliance officer: continuity", hy: false,
    q: "At an EU bank, internal audit finds that the AML/CFT compliance officer closed three internal suspicious-activity reports involving a client of a close friend without documented reasons. A formal investigation is opened, and the officer may have to step aside for several weeks. The bank's policies name a deputy with the required skills. Under the EBA Guidelines on AML/CFT compliance officers, what should the bank do?",
    options: [
      "Have the deputy take over the officer's functions while the investigation runs, and re-review the three reports",
      "Let the officer keep the role while the investigation runs, because removal before findings would breach independence",
      "Pass the officer's reporting decisions to the head of the business line that manages the friend's client",
      "Suspend all reporting to the FIU until the investigation ends, to avoid filing reports that may later be questioned"
    ],
    answer: [0],
    explanation: "EBA/GL/2022/05 requires the AML/CFT compliance function to operate continuously as part of business continuity management. A delegate with the right skills should be ready to take over when the officer is absent or when the officer's integrity is called into question. The three closed reports should be reviewed again to decide whether the FIU should be informed. The officer's independence protects against commercial pressure, not against an integrity investigation, so keeping the officer in post is wrong. Giving the decisions to a business head breaks independence, and suspending FIU reporting would breach the duty to report promptly. From July 2027, AMLR Art. 11(2) also requires prior notification to the management body, and notification to the supervisor, if the officer is removed.",
    source: [
      { label: "EBA/GL/2022/05, para 37 – continuity and delegate", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-05%20GLs%20on%20AML%20compliance%20officers/1035126/Guidelines%20on%20AMLCFT%20compliance%20officers.pdf" },
      { label: "Regulation (EU) 2024/1624 (AMLR), Art. 11(2) – removal of the compliance officer", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "GOV-023", difficulty: "hard", domain: 3, topic: "Training: adapting group programmes and measuring effectiveness", hy: false,
    q: "A non-EU banking group rolls out its global e-learning module on AML/CFT to its new EU subsidiary. The module covers the parent country's laws, its reporting forms and typologies drawn mainly from correspondent banking. The subsidiary is a retail lender whose main risks are mule accounts and loan-stacking fraud. Completion is tracked, and 98% of staff passed the final quiz. Under the EBA Guidelines on AML/CFT compliance officers, what should the subsidiary's AML/CFT compliance officer do?",
    options: [
      "Accept the module, because a group-wide programme ensures consistency across all entities",
      "Replace the module with a short summary of EU directives, since legal knowledge is the main requirement",
      "Accept the module, because the 98% pass rate shows that the training is effective",
      "Adapt it to national law, local typologies and the subsidiary's business, and set indicators of its effectiveness"
    ],
    answer: [3],
    explanation: "The EBA Guidelines say that where an institution adopts a training programme developed abroad, for example by its parent, the AML/CFT compliance officer must ensure it is adapted to national legal and regulatory rules, to ML/TF typologies and to the institution's specific activities. The officer must also set indicators to check whether training is effective. The pass rate is the runner-up, but it only shows that staff learned the parent's content, not that they can spot mule accounts or loan-stacking. A legal summary alone ignores the practical, role-based training the Guidelines call for.",
    source: [{ label: "EBA/GL/2022/05, paras 55–61 – training and awareness", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-05%20GLs%20on%20AML%20compliance%20officers/1035126/Guidelines%20on%20AMLCFT%20compliance%20officers.pdf" }]
  },
  {
    id: "GOV-024", difficulty: "medium", domain: 3, topic: "Training: role-based content and timing", hy: false,
    q: "A bank hires 40 new call-centre and branch staff to handle a seasonal surge. To meet the start date, the training team proposes that the new staff start serving customers immediately and complete financial crime e-learning within their first 90 days. The content is the same generic module that is given to back-office IT staff. Which approach BEST reflects the FCA's Financial Crime Guide and the Basel Committee's guidelines?",
    options: [
      "Allow the 90-day window, as long as completion is tracked and overdue staff are reported to managers",
      "Train new customer-facing staff, with role-tailored practical content, before they deal with customers",
      "Rely on supervisors to coach new staff on red flags during their first weeks on the job",
      "Defer the training to the next annual cycle, because temporary seasonal staff are out of scope"
    ],
    answer: [1],
    explanation: "The FCA's Financial Crime Guide lists as good practice that new customer-facing staff receive financial crime training tailored to their role before they can deal with customers, and that training has a practical side, such as case studies with testing. Basel's guidelines say new employees should be trained as soon as possible after being hired, with content tailored to their function and the risks they face. A 90-day window with generic IT content fails both tests, even if completion is tracked. Supervisor coaching alone is not a training programme. Temporary staff in customer-facing roles still need training.",
    source: [
      { label: "FCA Financial Crime Guide FCG 2.2.6 – training good practice", url: "https://www.handbook.fca.org.uk/handbook/FCG/2/2.html" },
      { label: "BCBS, Sound management of risks related to ML/FT (rev. 2020), para 21 – staff screening and training", url: "https://www.bis.org/publications/202007-guidelines-sound-management-risks-related-money-laundering-and-financing-terrorism-revisions-supervisory.pdf" }
    ]
  },
  {
    id: "GOV-025", difficulty: "hard", domain: 3, topic: "UK MLRs: training and awareness obligations (reg. 24)", hy: false,
    q: "A UK electronic money institution distributes its prepaid cards through a network of retail agents. It is reviewing its training policy against regulation 24 of the Money Laundering Regulations 2017. Which statements about its obligations are correct? (Choose two.)",
    options: [
      "Only staff in customer-facing roles are 'relevant employees' who must be trained",
      "Agents are outside regulation 24, because they are not employees of the institution",
      "Staff must be made aware of data protection requirements that are relevant to implementing the regulations",
      "Regulation 24 requires refresher training for every relevant employee at least every 12 months",
      "The institution must keep a written record of the training given to relevant employees and agents"
    ],
    answer: [2, 4],
    explanation: "Regulation 24 requires firms to make relevant employees, and agents doing relevant work, aware of the law on ML, TF and PF and of the data protection requirements relevant to implementing the regulations. They must also be regularly trained to recognise and deal with suspicious situations, and the firm must keep a written record of the measures and training. 'Relevant employee' covers anyone whose work is relevant to compliance or can help identify, mitigate, prevent or detect ML/TF/PF risk, not only customer-facing staff, and agents are expressly included. The regulation says 'regularly' and sets no fixed 12-month cycle.",
    source: [{ label: "UK MLRs 2017, reg. 24 – training", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/24" }]
  }
]);
