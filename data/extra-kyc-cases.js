// Practical KYC/CDD/EDD decision cases (batch 6). Fictional names throughout. Sources verified October 2026.
window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "KYCC-001", domain: 3, difficulty: "hard", hy: true,
    topic: "Customer risk rating: weighting cannot override mandatory high-risk situations (EBA)",
    q: "Nordvik Bank, an EU credit institution, uses a vendor scoring model that averages 20 weighted factors into one customer risk score. In a file review, analyst Mia Kovac finds that Tidewater Shipping Ltd, a company established in a country on the European Commission's list of high-risk third countries, scored 'medium'. Its other factors (a long trading history, audited accounts and little cash use) pulled the average down. The vendor says the weights were calibrated on the bank's 2023 portfolio. The business line points out that Tidewater pays EUR 400,000 a year in fees. No suspicious activity has been found. What should the bank do FIRST?",
    options: [
      "Override Tidewater's score to high, apply the mandatory EDD, and fix the model so that legally high-risk situations cannot be averaged down",
      "Recalibrate all factor weights on a newer portfolio sample, then re-score Tidewater under the new model at its next periodic review",
      "Keep the medium rating, because an isolated risk factor does not by itself move a business relationship into a higher risk category",
      "Keep the medium rating and document that the fee income justifies accepting the residual risk of the relationship"
    ],
    answer: [0],
    explanation: "The EBA ML/TF Risk Factors Guidelines (3.6) say weighting must not make it impossible to rate a relationship high risk. Weighting must not override situations that the Directive or national law treat as always high risk, and firms must be able to override automatic scores and document why. A relationship involving a Commission-listed high-risk third country requires EDD under AMLD Article 18a, so the score must be overridden now. Recalibrating the weights is the runner-up, but it delays the mandatory EDD and does not stop averaging in future. The 'isolated factor' principle (3.3) applies only where the law does not say otherwise. Profit must never influence a risk rating.",
    source: [
      { label: "EBA – Guidelines on ML/TF risk factors (EBA/GL/2021/02), Guideline 3", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }
    ]
  },
  {
    id: "KYCC-002", domain: 3, difficulty: "hard", hy: false,
    topic: "UK MLRs reg. 33: 'established in' a call-for-action country (birth vs residence)",
    q: "In August 2026, Ravi Menon applies for a current account at a UK bank. He was born in Country X, which is on the FATF list of high-risk jurisdictions subject to a call for action. He has lived in Manchester for 14 years, is a British citizen and works as a salaried structural engineer for a UK-listed construction group. His expected activity is his salary in, household bills out, and a monthly £300 transfer to his mother, who still lives in Country X. Screening finds no PEP, sanctions or adverse media hits. The onboarding team says regulation 33(1)(b) of the UK MLRs 2017 makes EDD mandatory because of his birthplace. Which assessment is MOST accurate?",
    options: [
      "Mandatory EDD applies because he was born in a call-for-action country and still sends money there every month",
      "No mandatory EDD: an individual is 'established in' a country by residence, not birth, so the bank assesses the whole relationship",
      "Simplified due diligence is required, because he is a UK citizen employed by a company listed on a UK regulated market",
      "Since the 2026 amendments, country risk can no longer be taken into account when rating an individual customer"
    ],
    answer: [1],
    explanation: "Regulation 33(3)(c)(ii) says an individual is 'established in' a country by being resident there, 'but not merely having been born in that country'. Since 30 June 2026, mandatory EDD under regulation 33(1)(b) covers only FATF call-for-action countries, and Ravi is not established in one. The bank must still weigh all risk factors (regulation 33(6)), including the regular payments to a call-for-action country, and decide the right level of CDD. The first option is the runner-up: birthplace alone does not trigger mandatory EDD. SDD is optional under regulation 37, never required. Geographic risk remains a factor.",
    changed: "UK MLRs amended by SI 2026/621 (30 June 2026): mandatory country EDD narrowed to FATF call-for-action countries",
    source: [
      { label: "UK MLRs 2017, regulation 33 (as amended, legislation.gov.uk)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/33" },
      { label: "Explanatory Memorandum to SI 2026/621", url: "https://www.legislation.gov.uk/uksi/2026/621/memorandum/contents" }
    ]
  },
  {
    id: "KYCC-003", domain: 3, difficulty: "hard", hy: false,
    topic: "AMLR Art. 57: beneficial owners of a foundation",
    q: "In 2028, an EU private bank prepares to onboard the Aurelia Foundation, a private-benefit foundation set up under the law of an EU Member State. Its founder, Konrad Weiss, gave it EUR 30 million. A three-member board manages the foundation, and a two-member supervisory council oversees the board. The statutes name Weiss's two daughters as beneficiaries. A family friend, Dr. Hana Lutz, holds a contractual right to dismiss board members. The onboarding analyst proposes to record only Weiss and the daughters, arguing that board and council members are merely officers. Under the AMLR, who are the foundation's beneficial owners?",
    options: [
      "Weiss and the two daughters only, because board and council members have no economic interest in the foundation's assets",
      "Only the three board members, recorded as senior managing officials, because a foundation has no shareholders",
      "Weiss, the daughters, all board and supervisory council members, and Dr. Lutz",
      "Any person entitled to 25% or more of the foundation's assets, which here means only the two daughters"
    ],
    answer: [2],
    explanation: "Article 57(1) AMLR covers legal entities similar to express trusts, such as foundations. Their beneficial owners are all of the following: the founders, the members of the management body in both its management and supervisory functions, the beneficiaries, and any other natural person who controls the entity directly or indirectly. Dr. Lutz's power to dismiss the board makes her a controller. The runner-up leaves out the governing bodies, which Article 57 lists expressly. The senior managing official is a fallback for corporate entities, and the 25% ownership test does not apply to foundations.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Article 57 – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "KYCC-004", domain: 3, difficulty: "hard", hy: true,
    topic: "AMLR: control via other means is identified in parallel with ownership",
    q: "In 2028, an EU bank onboards Ventoro SRL, an Italian manufacturer. Its shareholders are Anna Ricci (40%), Marco Bellini (24%), Lucia Ferri (24%) and Pavel Novak (12%). A shareholders' agreement gives Novak the right to appoint three of the five directors. Bellini and Ferri are unrelated and have no voting agreement. The managing director, Sara Conti, owns no shares and runs day-to-day operations. Under the AMLR, whom must the bank identify as beneficial owners?",
    options: [
      "Ricci only, because control via other means is examined only when no one is identified through ownership",
      "Ricci, Bellini and Ferri, because each of them holds a significant shareholding of more than 20%",
      "Conti only, as the senior managing official, because no shareholder holds 50% plus one of the shares",
      "Ricci, for her ownership interest of 25% or more, and Novak, for control via other means"
    ],
    answer: [3],
    explanation: "Article 52 AMLR sets the ownership test at 25% or more, so Ricci qualifies and Bellini and Ferri (24% each) do not. Article 51 says control via other means must be identified 'independently of and in parallel to' ownership, and Article 53(3)(b) includes the right to appoint or remove a majority of the board. Novak is therefore also a beneficial owner. The runner-up applies the FATF cascade logic, where control through other means is checked mainly if there is doubt or no owner is found, but the AMLR requires both tests. The senior managing official is identified only when no beneficial owner can be found.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Articles 51-53 – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "KYCC-005", domain: 3, difficulty: "hard", hy: false,
    topic: "AMLR Art. 24: discrepancies with the central beneficial ownership register",
    q: "In March 2028, an EU bank carries out a scheduled review of Kestrel GmbH, a standard-risk customer. The central beneficial ownership register still lists Jonas Weber as a 30% beneficial owner. The bank holds a notarised share transfer deed, confirmed by the commercial register, showing that Weber sold his entire stake eight months ago to Eva Lind, the existing majority owner. Nothing suggests an intention to conceal anything, and Kestrel's directors are cooperative. What should the bank do under Article 24 of the AMLR?",
    options: [
      "Invite Kestrel to file the correct information with the central register within 14 calendar days, and report the discrepancy itself if Kestrel does not",
      "Report the discrepancy to the central register within 14 calendar days of detecting it, whatever its cause",
      "File a suspicious transaction report, because an inaccurate register entry shows that beneficial ownership is being concealed",
      "Take no action, because the bank already knows the real owners and keeping the register accurate is the company's job"
    ],
    answer: [0],
    explanation: "Article 24(1) generally requires discrepancies to be reported to the central register within 14 calendar days. Article 24(2)(b) allows an exception when the discrepancy comes from outdated data, the bank knows the beneficial owners from another reliable source, and there is no ground to suspect concealment. The bank then invites the customer to file the correct information within 14 calendar days and must report if the customer does not (Article 24(3)). Immediate reporting is the runner-up, but this case meets the exception, which is not available in higher-risk cases. Doing nothing is not an option, and outdated data alone does not show suspicion.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Article 24 – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "KYCC-006", domain: 3, difficulty: "hard", hy: true,
    topic: "UK domestic PEPs: reg. 35(3A) lower starting point",
    q: "In September 2026, Helen Ashworth, a newly elected Member of the UK Parliament, applies to a UK bank for a current account and a residential mortgage. Her income is her parliamentary salary plus rent from one inherited flat. Screening finds no adverse media, and she has no role in public procurement. The relationship manager wants to apply the bank's full foreign-PEP EDD package, including a 12-page source-of-wealth questionnaire. A colleague says that under the FATF Standards, domestic PEPs need PEP measures only if the relationship is higher risk. Under regulation 35 of the UK MLRs 2017, what is the BEST approach?",
    options: [
      "Apply standard CDD only, because UK law follows FATF R.12 and requires PEP measures for domestic PEPs only in higher-risk relationships",
      "Apply PEP measures, starting from a lower risk than a non-domestic PEP and with less extensive EDD, because no enhanced risk factors are present",
      "Apply the full foreign-PEP package, because UK law requires identical EDD for every PEP regardless of the entrusting country",
      "Decline the mortgage, because lending to a sitting legislator creates a conflict of interest the bank cannot manage"
    ],
    answer: [1],
    explanation: "UK PEP rules cover domestic PEPs, so regulation 35(5) still applies: senior management approval, adequate measures to establish source of wealth and funds, and enhanced ongoing monitoring. Regulation 35(3A), in force since 10 January 2024, says the starting point for a domestic PEP is a lower risk than for a non-domestic PEP. If no enhanced risk factors are present, the EDD must be less extensive than for a non-domestic PEP. The runner-up describes the FATF R.12 minimum, but the UK goes further and applies PEP measures to all PEPs. The full foreign-PEP package is disproportionate here, and declining her is unjustified.",
    source: [
      { label: "UK MLRs 2017, regulation 35 (as amended, legislation.gov.uk)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/35" }
    ]
  },
  {
    id: "KYCC-007", domain: 3, difficulty: "medium", hy: false,
    topic: "PEP close associates: type follows the PEP's entrusting country",
    q: "Viktor Raan, a national and resident of Country B, asks a bank in Country B to open a private banking account with EUR 2 million from dividends. Enhanced screening shows that he and the serving defence minister of Country C each own 50% of a freight company registered in Country C. Raan holds no public office himself, has no family link to the minister and has no adverse media. The relationship manager argues that, as a local resident with no public role, Raan should be treated at most like a domestic customer. How should the bank treat him?",
    options: [
      "As a close associate of a domestic PEP, since the PEP type follows the associate's own nationality and residence",
      "As a standard customer, since FATF R.12 extends PEP measures to family members but not to business partners",
      "As a close associate of a foreign PEP, with senior management approval, source of wealth and funds checks, and enhanced monitoring",
      "As a standard customer unless adverse media links the freight company to defence procurement contracts"
    ],
    answer: [2],
    explanation: "FATF R.12 applies the PEP requirements to family members and close associates. The FATF PEP Guidance lists business partners who share beneficial ownership of legal entities with the PEP as close associates. The type of PEP depends on the country that entrusted the function, not on nationality or residence. A close associate is treated in line with the PEP's status, so Raan is treated like a foreign PEP: senior management approval, source of wealth and funds, and enhanced ongoing monitoring. The runner-up wrongly bases the type on Raan's own residence. Adverse media is not a precondition for PEP measures.",
    source: [
      { label: "FATF Guidance – Politically Exposed Persons (R.12 and R.22), paras 12, 49 and 52", url: "https://www.fatf-gafi.org/content/dam/fatf-gafi/guidance/Guidance-PEP-Rec12-22.pdf" },
      { label: "FATF Recommendations (2026), R.12", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYCC-008", domain: 3, difficulty: "medium", hy: true,
    topic: "Existing customer becomes a foreign PEP",
    q: "Tomas Lindgren has held a current account and an investment portfolio with a bank in Country A for nine years, and he is rated low risk. Three weeks ago, overnight screening flagged that he has been appointed deputy finance minister of Country D, where he holds dual citizenship. His account activity has not changed, and there is no adverse media. The relationship manager proposes simply adding a 'PEP' tag and reviewing the account at the next five-yearly refresh. Under FATF Recommendation 12, what must the bank do?",
    options: [
      "Exit the relationship, because senior management did not approve it before he became a foreign PEP abroad",
      "File a suspicious transaction report, because a change in a customer's PEP status is reportable under R.20",
      "Keep the low-risk rating until the next refresh, because R.12 measures apply only when a relationship is established",
      "Get senior management approval to continue, establish his source of wealth and funds, and monitor more closely"
    ],
    answer: [3],
    explanation: "R.12(b) requires senior management approval for establishing relationships with foreign PEPs or, for existing customers, for continuing them. R.12(c) and (d) also require reasonable measures to establish source of wealth and funds, and enhanced ongoing monitoring. A new appointment is a trigger event, so the bank should act now and not wait for the five-year refresh. R.12 does not require an exit, and becoming a PEP is not in itself grounds for suspicion or an STR.",
    source: [
      { label: "FATF Recommendations (2026), R.12", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYCC-009", domain: 3, difficulty: "hard", hy: true,
    topic: "PEP source of wealth: what can be reasonably explained, not what is expected",
    q: "A private bank is onboarding Aleksei Morin, the serving governor of a province in Country K. He plans to deposit USD 4.2 million. His public asset declaration shows an annual salary of about USD 55,000, a flat in the provincial capital and no business interests, and he says the funds are 'savings and gifts from family'. The relationship manager notes that in Country K 'everyone knows governors are wealthy' and argues that USD 4.2 million is normal for someone in his position. The bank's PEP committee meets tomorrow. Which approach is MOST consistent with FATF guidance on PEPs?",
    options: [
      "Accept the funds, since the amount is typical for provincial governors in Country K and his PEP status is already recorded",
      "Assess only what his declared income and verifiable family wealth can reasonably explain, and treat the gap as a red flag to investigate",
      "Accept the funds once Morin signs a declaration confirming that the gifts came from members of his family",
      "Decline automatically, since FATF guidance forbids accepting family gifts as a source of wealth for any foreign PEP"
    ],
    answer: [1],
    explanation: "The FATF PEP Guidance (para 94) says institutions should focus on what can reasonably be explained, not on what might be expected. Assuming that officials in certain posts have extra (possibly illicit) wealth does not comply with R.12. Asset declarations are a key check, and discrepancies between the customer's account and other sources may indicate money laundering and should never be disregarded (para 93). The signed declaration is the runner-up, but an unverified declaration has limited value (para 91). FATF does not ban gifts as a source of wealth; they must be verified.",
    source: [
      { label: "FATF Guidance – Politically Exposed Persons (R.12 and R.22), paras 86-94", url: "https://www.fatf-gafi.org/content/dam/fatf-gafi/guidance/Guidance-PEP-Rec12-22.pdf" }
    ]
  },
  {
    id: "KYCC-010", domain: 3, difficulty: "hard", hy: true,
    topic: "Source of funds vs source of wealth: choosing the evidence",
    q: "Elena Marsh, a new private banking client of an EU bank, will transfer EUR 1.8 million into her account next week. She says the money comes from the sale of her 60% stake in a software company in March 2026, after a 20-year career in technology. The relationship manager has her CV, a press article about the sale, and the name of the bank the funds will come from. The file is rated higher risk because the buyer is a holding company in a low-tax jurisdiction. What is the BEST evidence of the source of funds for this transfer?",
    options: [
      "Her CV and professional profile, showing two decades of senior roles at technology companies",
      "The remitting bank's name and SWIFT code, confirmed from the incoming payment message and her declaration",
      "The signed share purchase agreement and a statement showing the sale proceeds arriving from the buyer",
      "The press article reporting the sale, together with an analyst's estimate of the company's value"
    ],
    answer: [2],
    explanation: "Under the EBA definitions, source of funds is the origin of the specific funds in the relationship, while source of wealth is the origin of the customer's total wealth. The EBA's EDD examples include a copy of the contract of sale of a company. FATF PEP guidance says source-of-funds information should establish provenance and not stop at knowing which institution sent the money. The sale agreement plus the statement tracing the proceeds does both. Her CV speaks to source of wealth, not to these funds. The remitting bank's name is the runner-up but does not show where the money came from. A press article is only supporting evidence.",
    source: [
      { label: "EBA – Guidelines on ML/TF risk factors (EBA/GL/2021/02), definitions and Guideline 12", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" },
      { label: "FATF Guidance – Politically Exposed Persons, paras 87-88", url: "https://www.fatf-gafi.org/content/dam/fatf-gafi/guidance/Guidance-PEP-Rec12-22.pdf" }
    ]
  },
  {
    id: "KYCC-011", domain: 3, difficulty: "medium", hy: false,
    topic: "AMLR Art. 33: what simplified due diligence may and may not change",
    q: "An EU e-money institution is preparing for the AMLR, which applies from 10 July 2027. It offers a prepaid card with low monthly limits for salaried domestic residents, which its risk assessment rates as low risk. The product team proposes several simplified due diligence measures. Which TWO are permitted under Article 33 of the AMLR? (Choose two.)",
    options: [
      "Switching off transaction monitoring for the product, since the card limits already cap the risk",
      "Verifying the customer's identity after the relationship starts, within 60 days, with limits on use until then",
      "Continuing simplified measures for a customer whose identity document shows inconsistencies, as long as the card limits stay low",
      "Reducing how often customer identification information is updated",
      "Treating the low-risk rating as permanent, so the conditions for simplified measures need not be re-checked"
    ],
    answer: [1, 3],
    explanation: "Article 33(1) AMLR allows verification after the relationship is established, but no later than 60 days and only where the lower risk justifies it, with risk-management conditions such as transaction limits (Article 33(3)). It also allows fewer identification updates. The same article requires enough monitoring to detect unusual or suspicious transactions, so monitoring cannot be switched off. Article 33(5) bars SDD where the information shows inconsistencies. Article 33(4) requires the institution to check regularly that the conditions for SDD still exist.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Article 33 – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "KYCC-012", domain: 3, difficulty: "hard", hy: true,
    topic: "UK reliance on third parties after the 2026 amendments (reg. 39)",
    q: "In September 2026, Calder Wealth, a UK investment manager, reviews two introducers it plans to rely on for CDD under regulation 39 of the UK MLRs 2017. Introducer 1 is a regulated bank in Country X, which is on the FATF list of high-risk jurisdictions subject to a call for action; it is not part of Calder's group. Introducer 2 is a regulated bank in Country Y, which is on the FATF increased-monitoring ('grey') list. Introducer 2 is subject to CDD and record-keeping requirements equivalent to the UK's and is supervised for compliance. Which conclusion is correct under the regulations as amended in 2026?",
    options: [
      "Calder may not rely on Introducer 1; it may rely on Introducer 2 if the regulation 39 conditions are met, and it remains liable for any CDD failure",
      "Calder may rely on neither introducer, because reliance is barred for third parties established in any FATF-listed jurisdiction",
      "Calder may rely on both, provided each introducer undertakes in writing to supply documents within two working days",
      "Calder may rely on both, because under reliance the liability for any CDD failure passes to the introducer"
    ],
    answer: [0],
    explanation: "Since 30 June 2026, regulation 39(4) bars reliance on a third party established in a FATF call-for-action country, with a narrow exception for group branches and majority-owned subsidiaries. A grey-list country is no longer covered by the bar. Introducer 2 may be relied on if it meets regulation 39(3), being subject to and supervised for equivalent CDD and record-keeping requirements. Calder must immediately obtain the CDD information and be able to obtain copies on request (39(2)). Under 39(1), Calder stays liable for any failure. The runner-up describes the pre-2026 position, when mandatory high-risk measures covered both FATF lists.",
    changed: "UK MLRs amended by SI 2026/621 (30 June 2026): reliance bar narrowed to FATF call-for-action countries",
    source: [
      { label: "UK MLRs 2017, regulation 39 (as amended, legislation.gov.uk)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/39" },
      { label: "Explanatory Memorandum to SI 2026/621", url: "https://www.legislation.gov.uk/uksi/2026/621/memorandum/contents" }
    ]
  },
  {
    id: "KYCC-013", domain: 3, difficulty: "hard", hy: true,
    topic: "Remote onboarding: evidence of insufficient quality (EBA/GL/2022/15)",
    q: "Lumo Bank, an EU digital bank, onboards customers through an unattended app flow: a photo of the ID document, a selfie video with liveness detection, and automated face matching. For applicant Daniel Reyes, glare covers the portrait on the document photo, and the face-match engine returns a confidence score below the bank's threshold. The liveness check passes and the document's data fields read correctly. Daniel has clean screening results and wants to open a standard current account today. The product owner suggests opening the account with a EUR 1,000 limit and completing verification later. Under the EBA Guidelines on remote customer onboarding, what should the bank do?",
    options: [
      "Open the account with the EUR 1,000 limit and complete the verification later, since the customer appears low risk",
      "Accept the application, because a passed liveness check and readable data fields outweigh the low match score",
      "Reject the application and file a suspicious transaction report, because a failed face match shows identity fraud",
      "Interrupt the remote process and restart it, or redirect Daniel to a face-to-face verification"
    ],
    answer: [3],
    explanation: "EBA/GL/2022/15 para 40 says that where the evidence is of insufficient quality, so that remote checks are ambiguous or uncertain, the remote onboarding should be interrupted and restarted or redirected to face-to-face verification. Para 39 requires extra controls where a biometric solution does not give the required confidence. Opening a limited account is the runner-up, but it lets an unverified person transact when the problem is the quality of the evidence. Liveness does not prove that the selfie matches the document. Poor image quality alone is not grounds for suspicion.",
    source: [
      { label: "EBA – Guidelines on the use of remote customer onboarding solutions (EBA/GL/2022/15), paras 38-43", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2022/EBA-GL-2022-15%20GL%20on%20remote%20customer%20onboarding/1043884/Guidelines%20on%20the%20use%20of%20Remote%20Customer%20Onboarding%20Solutions.pdf" }
    ]
  },
  {
    id: "KYCC-014", domain: 3, difficulty: "medium", hy: false,
    topic: "Completing verification after the relationship starts (INR.10)",
    q: "Harrow Securities, a broker in a country that follows the FATF Standards, receives an account application from Ingrid Holm, who wants to buy listed shares at tomorrow's market open. Her identity documents have been received, but the independent verification check will take two more days. National law allows verification to be completed after the relationship is established where this is essential not to interrupt normal business and the risks are managed. Which approach BEST meets FATF Recommendation 10?",
    options: [
      "Allow unrestricted trading and withdrawals, because national law allows verification to be completed after the account opens",
      "Allow the purchase but limit the account, with no transfers out and capped trade sizes, until verification is completed promptly",
      "Refuse any trade until verification is complete, because R.10 never allows verification after a relationship starts",
      "Allow the trade and accept her signed declaration of identity in place of any independent verification of her documents"
    ],
    answer: [1],
    explanation: "R.10 allows countries to let institutions complete verification as soon as reasonably practicable after the relationship is established, where the ML/TF risks are effectively managed and this is essential not to interrupt normal business. INR.10 para 11 gives securities transactions as an example. INR.10 para 12 requires risk-management procedures, such as limits on the number, types or amount of transactions. Unrestricted use ignores those conditions, and R.10 does not ban delayed verification outright. A self-declaration is not independent verification.",
    source: [
      { label: "FATF Recommendations (2026), R.10 and INR.10 paras 11-12", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYCC-015", domain: 3, difficulty: "medium", hy: false,
    topic: "Event-driven review: scope of the CDD update",
    q: "Lindqvist Marine Supplies AB is a medium-risk business customer of an EU bank, and its next periodic review is due in 2029. In October 2026, the companies register shows that a new shareholder has acquired 35% of the company. Account activity is unchanged, and the relationship manager says the change can be dealt with at the 2029 review. Which TWO statements reflect the EBA's guidance on keeping CDD up to date? (Choose two.)",
    options: [
      "The change in ownership structure is information the bank should capture and assess now, not at the 2029 review",
      "Every trigger event requires the customer to be fully re-onboarded with a complete set of new documents",
      "Because Lindqvist is medium risk, the change can wait until the 2029 periodic review",
      "A trigger review is needed only if the new shareholder turns out to be a PEP or a sanctioned person",
      "The bank need not re-apply every CDD measure, but should decide which measures to apply and to what extent"
    ],
    answer: [0, 4],
    explanation: "EBA Risk Factors Guidelines 4.77 say firms should stay alert to information showing that the risk of a relationship has changed, giving a change in the customer's ownership structure as an example. Guideline 4.78 says a change in circumstances is likely to trigger CDD measures. Firms may not need to re-apply all of them, but should decide which ones to apply and to what extent, and in lower-risk cases they may use information obtained during the relationship. Waiting for the periodic review, or acting only on PEP or sanctions hits, ignores the trigger. Full re-onboarding is not required.",
    source: [
      { label: "EBA – Guidelines on ML/TF risk factors (EBA/GL/2021/02), Guidelines 4.76-4.78", url: "https://www.eba.europa.eu/sites/default/files/document_library/Publications/Guidelines/2021/963637/Final%20Report%20on%20Guidelines%20on%20revised%20ML%20TF%20Risk%20Factors.pdf" }
    ]
  },
  {
    id: "KYCC-016", domain: 3, difficulty: "hard", hy: true,
    topic: "UK reg. 31: customer refuses CDD information; paying away the balance",
    q: "During a periodic review, a UK bank asks Orrin Trading Ltd, a customer since 2019, to identify the person behind a new corporate shareholder that now owns 60% of the company. After three requests over ten weeks, Orrin's director refuses, saying the investor 'values confidentiality'. Account activity looks normal, and the balance is £85,000. The director then tells the bank to transfer the whole balance to an unrelated company in another country and close the account. The MLRO concludes that a SAR is required. Under regulation 31 of the UK MLRs 2017, what should the bank do?",
    options: [
      "Make the transfer as instructed and then close the account, since closing the account meets the duty to terminate",
      "Keep the account open with enhanced monitoring, since activity looks normal and the customer is long-standing",
      "Stop transacting and terminate; repay funds only to the depositor, and only after appropriate consent once the SAR is made",
      "Freeze the balance indefinitely until the director names the investor, and tell him that a SAR has been filed"
    ],
    answer: [2],
    explanation: "Where CDD cannot be applied, regulation 31(1) says the bank must not carry out transactions through the account, must terminate the relationship, and must consider a disclosure under POCA or the Terrorism Act. Regulation 31(2) allows money to be repaid only to the person who deposited it. Where a disclosure is required, the bank first needs appropriate consent (a DAML) under POCA s.335. Making the requested transfer is the runner-up, but paying a third party is a transaction that regulation 31 prohibits. Keeping the account open breaches the duty to terminate. Telling the director about the SAR risks tipping him off.",
    source: [
      { label: "UK MLRs 2017, regulation 31 (legislation.gov.uk)", url: "https://www.legislation.gov.uk/uksi/2017/692/regulation/31" }
    ]
  },
  {
    id: "KYCC-017", domain: 3, difficulty: "hard", hy: false,
    topic: "AMLR: records of refused and terminated relationships",
    q: "In 2028, an EU bank declines to onboard Brava Imports SL after the company refuses to explain a complex ownership chain through three jurisdictions. In the same month, it terminates an existing customer whose identity it can no longer verify. The data protection officer asks what the AMLR requires for these records. Which TWO statements are correct? (Choose two.)",
    options: [
      "Because no relationship was ever established with Brava, its data must be deleted at once under the GDPR",
      "The bank must record its refusal and termination decisions, with the supporting documents and justifications",
      "The CDD records on Brava must be kept for 5 years from the date of the refusal, then deleted unless other law requires longer",
      "The terminated customer's records must be kept for 5 years from the date the account was opened",
      "The bank must tell both customers that it is considering a suspicious transaction report, so that they can respond"
    ],
    answer: [1, 2],
    explanation: "Article 21(3) AMLR requires records of CDD actions, including decisions and their supporting documents and justifications, and applies this expressly to refusals and terminations. Article 77(3) sets retention at 5 years from the end of the relationship, the occasional transaction, or the refusal, after which personal data must be deleted unless other law requires otherwise. The opening date is the wrong starting point. Immediate deletion would breach the AMLR. Telling customers about a possible STR is prohibited disclosure under Article 73.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Articles 21 and 77 – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "KYCC-018", domain: 3, difficulty: "hard", hy: false,
    topic: "AMLR Art. 34(5): EDD for very high-net-worth customers",
    q: "In 2028, an EU private bank rates its relationship with Ines Calloway as higher risk because part of her wealth comes from mining interests in a country with high corruption. Her total assets are about EUR 70 million, excluding her home. The bank will manage EUR 8 million for her through a dedicated team that offers bespoke structuring. It already applies its standard EDD package: senior management approval, source of wealth and funds information, and enhanced monitoring. Which additional requirement does Article 34(5) of the AMLR specifically impose for this relationship?",
    options: [
      "Approval of the relationship by the management body in its supervisory function, and notification to AMLA",
      "Annual on-site visits to her residence and individual verification of every transaction above EUR 50,000",
      "A requirement that her first payment be made through an account in her own name at another EU credit institution",
      "Measures for personalised-service risks, more source-of-funds information, and conflict-of-interest management"
    ],
    answer: [3],
    explanation: "Article 34(5) applies to higher-risk relationships that involve at least EUR 5 million in assets handled through personalised services, for a customer with total assets of at least EUR 50 million excluding the private residence. Credit and financial institutions and TCSPs must then add specific measures for the risks of personalised services, additional information on source of funds, and management of conflicts of interest between the customer and the staff and senior managers handling her compliance. The first-payment requirement is the runner-up, but it is an optional EDD measure under Article 34(4)(g). The other options are not required.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Article 34 – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "KYCC-019", domain: 3, difficulty: "hard", hy: false,
    topic: "Discretionary trusts: persons named in a letter of wishes (objects of a power)",
    q: "A bank in a country that follows the FATF Standards is onboarding the Larch Discretionary Trust. The trust deed names a professional trustee, a protector and, as beneficiaries, 'the settlor's relatives and any registered charity'. No distributions have been made. Among the documents, the analyst finds a letter of wishes in which the settlor asks the trustee to provide mainly for his nephew, Rafael Ortiz, after the settlor's death. The trustee says the letter is not binding and need not be considered. How should the bank treat Rafael for CDD purposes?",
    options: [
      "As an object of a power: hold enough information to identify him, and treat him as a beneficial owner once selected",
      "Disregard him, because a non-binding letter of wishes gives him no legal or equitable interest in the trust",
      "As a vested beneficiary: fully verify his identity now and record him as the trust's sole beneficial owner",
      "As a co-settlor, because the settlor's stated wishes about him show who really controls the trust assets"
    ],
    answer: [0],
    explanation: "The FATF guidance on legal arrangements (2024, paras 46-48) says that although a letter of wishes is not binding, trustees in practice give it significant weight, so persons named in it should in principle be treated as objects of a power. Enough information should be held to identify them if the discretion is exercised (paras 91-92). Article 60 of the EU AMLR takes the same approach: objects of a power become beneficial owners once selected. Disregarding Rafael is the runner-up, but it ignores the letter's practical weight. He has no vested right yet and is not a settlor.",
    source: [
      { label: "FATF – Guidance on Beneficial Ownership and Transparency of Legal Arrangements (2024)", url: "https://eurasiangroup.org/files/uploads/files/FATF_documents/FATF_Guidances/Guidance-Beneficial-Ownership-Transparency-Legal-Arrangements.pdf.coredownload.inline.pdf.pdf" },
      { label: "Regulation (EU) 2024/1624 (AMLR), Article 60 – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "KYCC-020", domain: 3, difficulty: "medium", hy: false,
    topic: "PEPs: who can give senior management approval",
    q: "Brightwater Bank's private banking desk wants to onboard the serving minister of agriculture of Country M. The relationship manager suggests that her line manager, the head of private banking sales, approve the relationship because he knows the client. His bonus depends on new assets under management, and he has no role in AML/CFT policy. Under FATF guidance on PEPs, which approver BEST meets the senior management approval requirement?",
    options: [
      "The head of private banking sales, because R.12 does not specify the level of seniority required",
      "A senior manager or PEP committee who knows the AML/CFT programme and the client's risk profile, recorded in writing",
      "The full board of directors, because R.12 requires board-level approval of every foreign PEP relationship",
      "The relationship manager herself, provided the compliance department is informed of the decision within 30 days"
    ],
    answer: [1],
    explanation: "The FATF PEP Guidance (paras 81-83) says R.12 does not fix a level of seniority. The approver must, however, have deep knowledge of the institution's AML/CFT programme and a strong understanding of the customer's risk profile. Committees that include the AML/CFT head and compliance are a suitable arrangement, and approvals should be documented in writing. The runner-up uses the lack of a fixed level to justify a conflicted sales head with no AML/CFT knowledge. Board approval is not required, and after-the-fact notice is not approval.",
    source: [
      { label: "FATF Guidance – Politically Exposed Persons (R.12 and R.22), paras 81-83", url: "https://www.fatf-gafi.org/content/dam/fatf-gafi/guidance/Guidance-PEP-Rec12-22.pdf" }
    ]
  },
  {
    id: "KYCC-021", domain: 3, difficulty: "medium", hy: false,
    topic: "Customer risk factors: unexplained geographic distance",
    q: "A small regional bank in the south of Country A receives an online application from Petra Novak, a 52-year-old self-employed architect who lives and works in the far north of the country, 1,400 km away. She has no family, property or business links to the bank's region and says only that 'a friend recommended it'. She verified her identity through the national eID scheme at a high assurance level, has no adverse media, and expects fee income from clients plus household payments. Which fact is the MOST relevant higher-risk indicator for the bank to explore?",
    options: [
      "Her application was made remotely through the bank's app rather than in person at a branch",
      "She is self-employed, so her income will be less predictable than a regular salary",
      "The large, unexplained distance between her and the bank, given that she has no links to its region",
      "She was referred to the bank by a friend rather than by a regulated introducer"
    ],
    answer: [2],
    explanation: "INR.10 lists, as an example of a higher-risk customer factor, a relationship conducted in unusual circumstances such as a significant unexplained geographic distance between the institution and the customer. Remote onboarding through a high-assurance national eID is a safeguard, which is why the online channel is the runner-up but not the main concern here. Self-employment and an informal referral are ordinary features that do not by themselves indicate higher risk. The bank should ask why she chose a distant bank with which she has no connection.",
    source: [
      { label: "FATF Recommendations (2026), INR.10 para 15(a)", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYCC-022", domain: 3, difficulty: "hard", hy: false,
    topic: "AMLR Art. 22(2): no beneficial owner identified and the risk of tipping off",
    q: "In 2028, an EU bank onboards Solenne SA. Its shares are spread among more than 200 holders, none above 5%, and the bank finds no shareholder agreement or other means of control. The analyst still has doubts: several shareholders share the same address, and the CEO deflects questions about who funds the company. The bank believes that asking to verify the identity of the senior managing officials would alert Solenne to its doubts about the ownership. Under the AMLR, what should the bank do?",
    options: [
      "Identify and verify all senior managing officials anyway, because that verification is mandatory whenever no beneficial owner is found",
      "Record the five largest shareholders as beneficial owners, because together they hold the largest stake",
      "Ask the CEO to sign a declaration naming the real beneficial owner, explaining the bank's doubts so that he can respond",
      "Record that no beneficial owner was identified, abstain from verifying the senior managing officials, and record the steps taken and difficulties met"
    ],
    answer: [3],
    explanation: "Article 22(2) AMLR says that where no beneficial owner is identified after all possible means, or there are doubts about those identified, the bank must record this and identify and verify all senior managing officials. If that verification could tip off the customer about the bank's doubts, the bank must abstain from verifying and instead record the steps taken and difficulties met. Verifying anyway is the runner-up, but the regulation provides this tipping-off exception. Explaining the doubts to the CEO creates the very risk the rule avoids. The bank should also consider whether the facts amount to a suspicion that requires an STR.",
    source: [
      { label: "Regulation (EU) 2024/1624 (AMLR), Article 22 – EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj" }
    ]
  },
  {
    id: "KYCC-023", domain: 1, difficulty: "hard", hy: true,
    topic: "Concealing beneficial ownership: informal nominees (straw men)",
    q: "Kaspian Freight Ltd, a newly formed import company, applies for a business account. Its sole director and 100% shareholder is Lin Zhao, a 21-year-old foreign student, and projected turnover is EUR 3 million in the first year. At the onboarding meeting, an older man introduced as an 'adviser' answers most questions about suppliers and customers. Lin cannot describe the products or name the main client. She says she agreed to 'help a friend of the family' and receives EUR 500 a month. Her passport and address check out, and there is no adverse media. Which method of concealing beneficial ownership does this MOST likely show?",
    options: [
      "An informal nominee, or 'straw man', fronting for the person who really controls the company",
      "A formal nominee arrangement supplied by a professional trust or company service provider",
      "Identity theft, in which Lin's details were used to register the company without her knowledge",
      "A shelf company, bought with a trading history so that it appears long established"
    ],
    answer: [0],
    explanation: "The FATF-Egmont report on concealment of beneficial ownership (2018) describes informal nominees as people with a personal, not professional, link to the real owner. They include family members, associates, and students or tourists persuaded to set up companies for small payments, who are rarely involved in running the company afterwards. A formal nominee arrangement is the runner-up, but it is usually a contract with a professional provider, which is not the case here. Lin knowingly agreed, so this is not identity theft. Kaspian is newly formed, not a shelf company.",
    source: [
      { label: "FATF-Egmont Group – Concealment of Beneficial Ownership (2018), paras 88-92", url: "https://eurasiangroup.org/files/uploads/files/FATF-Egmont-Concealment-beneficial-ownership_eng.pdf" }
    ]
  },
  {
    id: "KYCC-024", domain: 1, difficulty: "medium", hy: false,
    topic: "Misuse of trusts: settlor-reserved powers",
    q: "An analyst reviews an account application for the Corvane Trust, which holds a USD 15 million investment portfolio and a London flat. The settlor is a businessman under investigation abroad for procurement fraud. He is also named as the protector and as a discretionary beneficiary. The trust deed lets him revoke the trust at any time and have the assets returned, and lets him replace the trustee. The trustee is a small trust company in a secrecy jurisdiction, and the settlor's lawyer drafted all the documents. Which money laundering risk does this structure MOST clearly present?",
    options: [
      "Because the trust is discretionary, its beneficiaries cannot be identified at all, which makes CDD impossible",
      "The trustee company is effectively a shell bank, because it is based in a secrecy jurisdiction",
      "The settlor keeps effective control of the assets while legal title sits with the trustee, hiding who really owns and controls them",
      "The London flat indicates that the trust is being used for trade-based money laundering"
    ],
    answer: [2],
    explanation: "The FATF-Egmont report explains that trusts separate legal title from beneficial interest. Deeds that let the settlor keep powers, such as revoking the trust and taking back the assets, or that make the settlor also a beneficiary, allow a person to appear to have parted with assets while still controlling them. Its case study describes a corrupt official who used a revocable trust in this way. Discretionary beneficiaries can still be identified as a class, so CDD is not impossible. A trust company is not a bank, and nothing here involves trade.",
    source: [
      { label: "FATF-Egmont Group – Concealment of Beneficial Ownership (2018), paras 75-76", url: "https://eurasiangroup.org/files/uploads/files/FATF-Egmont-Concealment-beneficial-ownership_eng.pdf" }
    ]
  },
  {
    id: "KYCC-025", domain: 1, difficulty: "hard", hy: false,
    topic: "Source of wealth review: round-robin loan via sham consulting invoices",
    q: "During a source-of-wealth review, private bank client Dmitri Valen explains that the EUR 2.5 million he wants to invest is a loan from Arcton Ltd, a Cyprus company. In his corporate files, the analyst sees that Valen's domestic trading company paid Arcton EUR 2.7 million over two years for 'consulting services', with no evidence that any services were delivered. The loan agreement has no repayment schedule and no interest. Arcton's registered director is a nominee from a corporate services firm, and Valen's trading company reported sharply lower profits over the same period. Which scheme does this MOST likely represent?",
    options: [
      "Trade-based money laundering through over-invoicing of goods shipped between the two companies",
      "Cuckoo smurfing, in which criminal cash is deposited into a legitimate customer's bank account",
      "Mirror trading, in which matched securities trades move value across borders",
      "A loan-back scheme returning his own diverted company funds to him in the guise of a private loan"
    ],
    answer: [3],
    explanation: "The FATF-Egmont report describes a loan-back or round-robin scheme in two steps. First, a business pays invoices to a foreign company it secretly controls, which reduces its taxable income. Then the pooled funds return to the owner as a private loan, often with no real repayment obligation. This hides the fact that lender and borrower have the same beneficial owner. TBML is the runner-up because invoices are involved, but no goods were shipped and the payments were for services that were never delivered. Cuckoo smurfing and mirror trading do not fit these facts.",
    source: [
      { label: "FATF-Egmont Group – Concealment of Beneficial Ownership (2018), paras 97-99", url: "https://eurasiangroup.org/files/uploads/files/FATF-Egmont-Concealment-beneficial-ownership_eng.pdf" }
    ]
  }
]);
