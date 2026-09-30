window.CAMS_QUESTIONS = (window.CAMS_QUESTIONS || []).concat([
  {
    id: "KYC-001", domain: 3, topic: "US CDD Rule: indirect ownership and trusts (calculation)", hy: true, difficulty: "hard",
    q: "A US bank is opening the first account for Keystone LLC. Keystone is owned as follows: Mia owns 100% of HoldCo A, which owns 30% of Keystone. The Rivera Family Trust owns 40% of Keystone; its sole trustee is Lakeside Trust Company, a corporate trustee, and its beneficiaries are three adult children. Omar owns 20% of Keystone directly and also owns 50% of HoldCo B, which owns the remaining 10%. Keystone's CEO, Jan, owns no equity. Under 31 CFR 1010.230, who must be identified under the ownership (25%) prong?",
    options: [
      "Mia and Omar, and Lakeside Trust Company as trustee of the trust's 40%",
      "Mia and the three adult beneficiaries of the trust, but not Omar",
      "Mia only, because Omar's direct holding is below 25%",
      "Mia, Omar and each beneficiary of the trust, and then Jan"
    ],
    answer: [0],
    explanation: "Indirect ownership is found by multiplying along the chain and adding a person's holdings together. Mia holds 100% x 30% = 30%, and Omar holds 20% + (50% x 10%) = 25%, which meets the '25 percent or more' test in 1010.230(d)(1). Under 1010.230(d)(3), where a trust owns 25% or more, the beneficial owner for the ownership prong is the trustee, not the beneficiaries. FinCEN FAQ 20 (2018) confirms this applies even when the trustee is a legal entity, in which case CIP-type information is collected on the corporate trustee. The runner-up wrongly substitutes the beneficiaries for the trustee and ignores Omar's indirect 5%. Jan is still identified, but under the separate control prong, not the ownership prong.",
    source: [
      { label: "eCFR – 31 CFR 1010.230 (beneficial ownership requirements)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-B/section-1010.230" },
      { label: "FinCEN CDD FAQs (April 2018), Questions 19-20", url: "https://www.fincen.gov/sites/default/files/2018-04/FinCEN_Guidance_CDD_FAQ_FINAL_508_2.pdf" }
    ]
  },
  {
    id: "KYC-002", domain: 2, topic: "FATF INR.10 cascade: control through other means vs senior managing official", hy: false, difficulty: "hard",
    q: "A bank in a country that follows the FATF Standards onboards Zenit Ltd. Five unrelated shareholders each hold 20% of the shares, and none of them has any agreement with the others. Zenit's only registered director is a nominee director supplied by a corporate services firm. The firm confirms that the director acts on instructions from Mr. K, who holds no shares. Ms. L is Zenit's chief executive. The company has traded profitably for eight years and banks with two other institutions. Under INR.10, whom should the bank identify as the beneficial owner?",
    options: [
      "Ms. L, since no shareholder holds a controlling ownership interest",
      "The nominee director, since he is the registered director",
      "Mr. K, as the natural person exercising control through other means",
      "All five shareholders, since together they own 100% of Zenit"
    ],
    answer: [2],
    explanation: "INR.10 para 5(b)(i) sets out cascading steps (footnote 39): first natural persons with a controlling ownership interest; then, where no one controls through ownership, natural persons exercising control through other means; and only where no one is identified under either step, the senior managing official. Mr. K controls Zenit through the nominee, so he is the beneficial owner. The FATF Glossary adds that a nominee director is never the beneficial owner. Ms. L is the tempting runner-up, but the senior managing official is a fallback used only when the first two steps identify nobody. The 20% shareholders are below any controlling-interest threshold.",
    source: [
      { label: "FATF Recommendations (updated June 2026), INR.10 para 5 and Glossary – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-003", domain: 2, topic: "FATF R.24 (2022): maximum beneficial ownership threshold", hy: false, difficulty: "hard",
    q: "A finance ministry is drafting a law to set up a beneficial ownership register for companies, as required by FATF Recommendation 24 as revised in March 2022. A draft provision defines a beneficial owner by ownership as any natural person holding more than 30% of the shares, because business groups argued that 25% was 'only an example' in the FATF texts. How should the ministry assess this provision?",
    options: [
      "It is acceptable, because the FATF gives 25% only as an example and leaves the choice to each country",
      "It falls short, because the threshold should be set on the basis of risk with a maximum of 25%",
      "It falls short, because the FATF requires a fixed threshold of exactly 10% for all companies",
      "It is irrelevant, because registers under R.24 need only hold legal ownership information"
    ],
    answer: [1],
    explanation: "Footnote 64 of the revised INR.24 states that a controlling-shareholder threshold may be set, e.g. owning more than a certain percentage, 'determined based on the jurisdiction's assessment of risk, with a maximum of 25%'. A 30% threshold therefore exceeds the ceiling. The runner-up relies on the older 'e.g. 25%' example in INR.10 footnote 40, but the 2022 revision capped the threshold for R.24 purposes. The FATF sets no fixed 10% rule. R.24 requires adequate, accurate and up-to-date beneficial ownership information, not just legal ownership.",
    source: [
      { label: "FATF Recommendations (updated June 2026), INR.24 and footnote 64 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-004", domain: 3, topic: "Beneficial ownership: multi-layer chain calculation", hy: true, difficulty: "hard",
    q: "A US bank is opening the first account for Orion Inc. Its structure is: Liu owns 50% of H1; H1 owns 80% of H2; H2 owns 62.5% of Orion. Ana owns 100% of H3, which owns the other 37.5% of Orion. The relationship manager notes that Orion's CFO, Pat, runs daily operations. Which individuals meet the ownership prong of the FinCEN CDD Rule?",
    options: [
      "Ana only, because Liu's indirect interest does not exceed 25%",
      "Liu only, because H2 is the majority shareholder of Orion",
      "Neither, because both hold their interests through companies",
      "Liu and Ana, each owning 25% or more indirectly"
    ],
    answer: [3],
    explanation: "Multiplying through the chain, Liu owns 50% x 80% x 62.5% = 25% of Orion, and Ana owns 100% x 37.5% = 37.5%. The CDD Rule's ownership prong covers each individual who 'directly or indirectly' owns '25 percent or more' of the equity interests (31 CFR 1010.230(d)(1)), so exactly 25% qualifies. The runner-up applies a 'more than 25%' test, which the FATF uses as an example, not the US rule. Holding through intermediate companies does not avoid identification. FinCEN's FAQs say the customer must identify its ultimate owners, not intermediaries or nominees. Pat is a control-prong candidate, not an owner.",
    source: [
      { label: "eCFR – 31 CFR 1010.230(d)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-B/section-1010.230" },
      { label: "FinCEN CDD FAQs (July 2016), Questions 9 and 12", url: "https://www.fincen.gov/system/files/2016-09/FAQs_for_CDD_Final_Rule_(7_15_16).pdf" }
    ]
  },
  {
    id: "KYC-005", domain: 2, topic: "FATF R.24 (2022): bearer shares", hy: false, difficulty: "medium",
    q: "A country still has companies with bearer shares issued years ago. Under FATF Recommendation 24 and its Interpretive Note as revised in 2022, which measures are required? (Choose two.)",
    options: [
      "Prohibit companies from issuing any new bearer shares or bearer share warrants",
      "Allow new bearer shares if they are deposited with a custodian bank at issue",
      "Convert existing bearer shares to registered form or immobilise them with a regulated institution within a reasonable timeframe",
      "Let holders of existing bearer shares vote and receive dividends without notice until conversion",
      "Allow bearer shares where the company certifies to its bank that the holders are known"
    ],
    answer: [0, 2],
    explanation: "INR.24 para 12 requires countries to prohibit the issuance of new bearer shares and bearer share warrants. For existing ones, it requires conversion to registered form or immobilisation with a regulated financial institution or professional intermediary within a reasonable timeframe. Until then, holders must notify the company, and the company must record their identity, before any associated rights can be exercised. Immobilisation is a remedy for existing instruments, not a basis for new issuance. A company's self-certification is not an accepted mechanism.",
    source: [
      { label: "FATF Recommendations (updated June 2026), R.24 and INR.24 para 12 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-006", domain: 2, topic: "FATF R.24 (2022): nominee shareholders and directors", hy: false, difficulty: "medium",
    q: "A jurisdiction with many corporate service providers wants to prevent nominee shareholders and nominee directors from being misused, in line with the 2022 revision of FATF Recommendation 24. Which approach would satisfy the Standard?",
    options: [
      "Allow nominees to keep their nominator's identity confidential if the nominee is a licensed lawyer",
      "Treat the registered nominee shareholder as the beneficial owner of the shares it holds",
      "Rely only on banks' onboarding checks, with no disclosure to the company or any registry",
      "Require nominees to disclose their status and their nominator to the company and registry, with nominee status made public"
    ],
    answer: [3],
    explanation: "INR.24 para 13 requires one or more of three mechanisms: (a) disclosure of nominee status and the nominator's identity to the company and any relevant registry, with nominee status included in public information; (b) licensing of nominees, with their status and nominator recorded and their information on the nominator available to authorities; or (c) a prohibition on nominees. The FATF Glossary states that a nominee shareholder is never the beneficial owner based on shares held as a nominee. Confidentiality for the nominator, or relying only on bank CDD, meets none of the three mechanisms.",
    source: [
      { label: "FATF Recommendations (updated June 2026), INR.24 para 13 and Glossary – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-007", domain: 2, topic: "FATF R.25 (2023): trustee obligations", hy: false, difficulty: "hard",
    q: "Trustco, a professional trustee resident in Country R, administers a discretionary trust governed by the law of another country. The trust's protector is ProtectCo Ltd, a company, and its assets are managed by a regulated investment manager. Country R does not recognise trusts in its own law. The settlor died last year, and the trust owns shares in two private companies. Under FATF Recommendation 25 as revised in February 2023, which obligation should Country R impose on Trustco?",
    options: [
      "None, because the trust is governed by foreign law and Country R does not recognise trusts",
      "Hold only the names of the settlor and the beneficiaries, since the protector is not a natural person",
      "Hold beneficial ownership information on the trust, including ProtectCo's own beneficial owners, and basic information on the investment manager",
      "Register the trust in a public central register accessible to anyone, as the only permitted mechanism"
    ],
    answer: [2],
    explanation: "Revised INR.25 para 1 requires trustees that are resident in a country, or administer trusts there, to hold adequate, accurate and up-to-date beneficial ownership information on the settlor, trustees, protector, beneficiaries or class, and anyone with ultimate effective control. Where a party is a legal person, they must also hold its basic and beneficial ownership information, plus basic information on regulated agents and service providers such as investment managers. The runner-up is wrong because the duty follows the trustee's residence or place of administration, and para 11 states that countries need not give trusts legal recognition. A central registry is one source countries may consider, not the only permitted mechanism.",
    source: [
      { label: "FATF Recommendations (updated June 2026), INR.25 paras 1, 5 and 11 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-008", domain: 3, topic: "Trusts: beneficiaries designated by class", hy: false, difficulty: "medium",
    q: "A bank is onboarding a discretionary trust whose beneficiaries are defined as 'the grandchildren of the settlor, whether born before or after the date of this deed'. No distributions have been made. What does the FATF Standard require the bank to obtain on the beneficiaries at onboarding?",
    options: [
      "Full identification and verification of each grandchild now alive, including minors",
      "Sufficient information on the class to establish a beneficiary's identity at payout or when vested rights are exercised",
      "Nothing, because beneficiary information is needed only once a distribution is made",
      "A declaration from the settlor that he is the sole beneficial owner of the trust"
    ],
    answer: [1],
    explanation: "For trust beneficiaries designated by characteristics or by class, INR.10 footnote 41 requires financial institutions to obtain sufficient information on the beneficiary to be satisfied that they can establish the beneficiary's identity at the time of payout or when the beneficiary intends to exercise vested rights. Full verification of every potential grandchild at onboarding is not required, but collecting nothing until payout is also wrong, because information on the class is needed now. The settlor is only one of several beneficial owners of a trust (settlor, trustees, protector, beneficiaries or class, and anyone with ultimate effective control).",
    source: [
      { label: "FATF Recommendations (updated June 2026), INR.10 para 5(b)(ii) and footnote 41 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-009", domain: 3, topic: "PEPs of international organisations", hy: true, difficulty: "hard",
    q: "A bank opens salary accounts for two employees of an intergovernmental development bank headquartered in its city. One is the organisation's deputy director. The other is a mid-level economist. Both are paid only their monthly salaries, and there are no adverse media or other risk indicators. The bank applies the FATF Standards. How should it treat them?",
    options: [
      "Both are PEPs, and foreign-PEP measures apply automatically to both relationships",
      "The deputy director is a foreign PEP, so senior management approval is mandatory in every case",
      "Neither is a PEP, because international organisations are not governments",
      "The deputy director is an international organisation PEP, with enhanced measures only if the relationship is higher risk; the economist is not a PEP"
    ],
    answer: [3],
    explanation: "The FATF Glossary defines persons entrusted with a prominent function by an international organisation as members of senior management (directors, deputy directors, board members or equivalent), and excludes middle-ranking or more junior individuals. Under R.12, institutions must take reasonable measures to determine whether a customer is such a PEP, but must apply senior management approval, source of wealth/funds measures and enhanced monitoring only in higher-risk relationships. The runner-up applies the automatic foreign-PEP regime to what is an international organisation PEP, which R.12 treats like domestic PEPs. International organisation PEPs are explicitly within the definition.",
    source: [
      { label: "FATF Recommendations (updated June 2026), R.12 and Glossary 'Politically Exposed Persons' – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-010", domain: 3, topic: "Former PEPs: risk-based duration", hy: true, difficulty: "hard",
    q: "A bank follows the FATF Standards in a country that sets no fixed period for former PEPs. Its policy automatically removes PEP status 18 months after a person leaves office. A client who was a foreign central bank governor left office three years ago. He still advises the current president, and his former deputy now runs the central bank. His account is funded by consulting fees from state-linked companies. The client recently changed his mailing address. What should the bank do?",
    options: [
      "Keep treating him as a PEP, based on a risk assessment of his continuing influence rather than a fixed time limit",
      "Declassify him, because his 18-month period under the bank's policy ended long ago",
      "Apply full PEP measures to him for life, because FATF defines PEPs as those who are or have been in office",
      "Declassify him unless he asks to keep his PEP status for transparency reasons"
    ],
    answer: [0],
    explanation: "R.12 covers individuals who 'are or have been' entrusted with prominent public functions. The FATF's 2013 PEP Guidance states that handling a customer who is no longer in a prominent public function should be based on an assessment of risk, not on prescribed time limits. Relevant factors include the person's continuing informal influence and links between the former and current functions, which are strong here. Automatic declassification is the runner-up, but a fixed period ignores the evidence of continuing risk. A lifetime rule is not required, since risk can fall over time, and a customer's preference does not decide the matter.",
    source: [
      { label: "FATF Guidance: Politically Exposed Persons (R.12 and R.22), June 2013", url: "https://www.fatf-gafi.org/content/dam/fatf-gafi/guidance/Guidance-PEP-Rec12-22.pdf" },
      { label: "FATF Recommendations (updated June 2026), R.12 and Glossary – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-011", domain: 3, topic: "US approach to PEPs vs private banking for senior foreign political figures", hy: false, difficulty: "medium",
    q: "A US bank serves a sitting US state governor, who has an ordinary checking account, and a foreign deputy finance minister, who has a private banking account as defined in the BSA regulations. A consultant says the bank must apply FATF-style PEP measures to both. Which statement is correct under US requirements?",
    options: [
      "Both must receive senior management approval under the CDD Rule, because both hold prominent public offices",
      "The agencies do not treat US officials as PEPs, but the minister's private banking account requires enhanced scrutiny for proceeds of foreign corruption",
      "Neither needs any additional attention, because the BSA regulations do not use the term PEP",
      "Both relationships must be exited unless source of wealth is documented within 30 days"
    ],
    answer: [1],
    explanation: "The August 2020 interagency statement says the agencies do not interpret 'PEP' to include US public officials, and that the CDD Rule creates no requirement for unique, additional due diligence steps for PEPs; CDD should be commensurate with risk. Separately, 31 CFR 1010.620(c) requires enhanced scrutiny of any private banking account for a senior foreign political figure, reasonably designed to detect and report proceeds of foreign corruption. The CDD Rule contains no senior-management-approval requirement. Saying nothing is needed ignores section 1010.620, and there is no 30-day exit rule.",
    source: [
      { label: "Interagency Joint Statement on BSA due diligence for PEPs (Aug 2020)", url: "https://www.fincen.gov/system/files/shared/PEP%20Interagency%20Statement_FINAL%20508.pdf" },
      { label: "eCFR – 31 CFR 1010.620 (private banking due diligence)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-F/section-1010.620" }
    ]
  },
  {
    id: "KYC-012", domain: 3, topic: "Customer risk rating models", hy: false, difficulty: "hard",
    q: "A mid-size US bank's customer risk rating model automatically rates every charity and nonprofit 'high', whatever its size, geography or activity. As a result, 2,300 local nonprofits, most of them small food banks and sports clubs, sit in an EDD review backlog. The CFO wants to cut review costs, and the bank recently moved to a new core banking platform. A few nonprofits send funds to conflict zones. What is the BEST change to the model?",
    options: [
      "Exit every nonprofit that sends funds abroad, so that the remaining portfolio can be rated low",
      "Keep the automatic high rating but lengthen the EDD review cycle to clear the backlog",
      "Rate nonprofits on relationship-specific factors such as geographies served, funding sources and activity, keeping EDD where the factors show higher risk",
      "Remove nonprofits from the rating model, since the CDD Rule does not require risk ratings"
    ],
    answer: [2],
    explanation: "The July 2022 interagency joint statement stresses that no customer type presents a single, uniform level of risk. It says the risk depends on facts specific to each relationship, and it encourages banks to manage risk rather than decline whole categories. A factor-based rating targets EDD at the nonprofits sending funds to conflict zones. FinCEN FAQ 35 (2018) confirms that a customer risk profile may, but need not, include risk ratings. That makes removing ratings the tempting runner-up, but the bank must still understand and profile each relationship's risk. Category-wide exits are de-risking, and longer review cycles leave the miscalibration in place.",
    source: [
      { label: "Interagency Joint Statement on the risk-based approach to CDD (July 2022)", url: "https://www.fincen.gov/system/files/2022-07/Joint%20Statement%20on%20the%20Risk%20Based%20Approach%20to%20Assessing%20Customer%20Relationships%20and%20Conducting%20CDD%20FINAL.pdf" },
      { label: "FinCEN CDD FAQs (April 2018), Questions 35-36", url: "https://www.fincen.gov/sites/default/files/2018-04/FinCEN_Guidance_CDD_FAQ_FINAL_508_2.pdf" }
    ]
  },
  {
    id: "KYC-013", domain: 3, topic: "Periodic vs event-driven review of beneficial ownership", hy: true, difficulty: "hard",
    q: "A US bank is doing a scheduled three-year review of Maple LLC, a medium-risk customer; nothing in its activity or public records has changed. A reviewer wants a new beneficial ownership certification from every legal entity customer at each periodic review. The same week, monitoring picks up a press report that a new investor has bought 40% of Birch LLC, another customer. Which statements are correct? (Choose two.)",
    options: [
      "A periodic review is not by itself a trigger to collect or update beneficial ownership information",
      "The Birch LLC report is a trigger to update its beneficial ownership, identifying and verifying the new 40% owner",
      "Federal rules require full re-certification of beneficial owners at every periodic review",
      "The Birch LLC change can wait until Birch's next scheduled periodic review",
      "A change of address for an already-verified beneficial owner always requires full re-certification"
    ],
    answer: [0, 1],
    explanation: "FinCEN FAQ 14 (2018) states that banks need not solicit or update beneficial ownership information as a matter of course during periodic reviews, absent risk-based concerns. The obligation is triggered when normal monitoring reveals relevant information, such as a possible change in beneficial ownership. FAQ 16 adds that a change of beneficial owner requires the new owner to be identified, certified and verified, while a simple address change usually does not need full re-certification. FIN-2026-R001 (Feb 2026) likewise ties later beneficial ownership collection to doubts about the information and to risk-based ongoing CDD, not to routine events. Waiting for the next scheduled review ignores a known trigger.",
    changed: "FinCEN CDD exceptive relief order FIN-2026-R001, Feb 2026",
    source: [
      { label: "FinCEN CDD FAQs (April 2018), Questions 14 and 16", url: "https://www.fincen.gov/sites/default/files/2018-04/FinCEN_Guidance_CDD_FAQ_FINAL_508_2.pdf" },
      { label: "FinCEN Order FIN-2026-R001 – CDD exceptive relief (Feb 2026)", url: "https://www.fincen.gov/system/files/2026-02/FinCEN-Order-CCDExceptiveRelief.pdf" }
    ]
  },
  {
    id: "KYC-014", domain: 3, topic: "FATF R.17: reliance on third parties vs outsourcing", hy: true, difficulty: "hard",
    q: "Bank A plans two arrangements. First, it will accept customers introduced by Bank B, a regulated bank that already has its own relationships with those customers and has performed CDD under its own procedures. Second, it will hire a call-centre vendor to collect identity documents from new applicants, following Bank A's procedures under Bank A's control. How does FATF Recommendation 17 apply?",
    options: [
      "The first is third-party reliance under R.17; the second is outsourcing, which R.17 does not cover, and Bank A stays responsible for both",
      "Both are reliance under R.17, so responsibility for CDD passes to Bank B and to the vendor",
      "Both are outsourcing, so R.17's conditions apply to neither arrangement",
      "The first is outsourcing and the second is reliance, because the vendor gathers the documents"
    ],
    answer: [0],
    explanation: "INR.17 para 1 states that R.17 does not apply to outsourcing or agency relationships. In reliance, the third party is regulated, usually has its own relationship with the customer and applies its own CDD procedures. In outsourcing, the service provider applies the delegating institution's procedures under its control. R.17 states that where reliance is permitted, ultimate responsibility for CDD remains with the relying institution, and outsourcing never transfers accountability either. The runner-up wrongly says responsibility passes to the third party.",
    source: [
      { label: "FATF Recommendations (updated June 2026), R.17 and INR.17 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-015", domain: 3, topic: "FATF R.17: what the relying institution must obtain", hy: false, difficulty: "hard",
    q: "A private bank relies on a regulated securities firm in another FATF-compliant country to perform CDD on clients it introduces. The bank's procedure is to keep only a reference number for each introducer file and to request identity details if a monitoring alert arises. What must change for the reliance to meet FATF Recommendation 17?",
    options: [
      "The bank must immediately obtain full copies of every identity document for each introduced client",
      "Nothing, because relying on a regulated firm transfers CDD responsibility to that firm",
      "The bank must immediately obtain the CDD information and be satisfied that copies of documents are available from the introducer without delay",
      "The bank must repeat all CDD measures itself before accepting any introduced client"
    ],
    answer: [2],
    explanation: "R.17 criterion (a) requires the relying institution to immediately obtain the necessary information on CDD elements (a)-(c) of R.10: identity, beneficial ownership, and the purpose and intended nature of the relationship. Criterion (b) requires it to be satisfied that copies of identification data and other documents will be available from the third party on request without delay. The runner-up overstates the standard: copies must be available on request, not collected immediately. Responsibility never transfers, and repeating all CDD would mean the bank is not relying at all.",
    source: [
      { label: "FATF Recommendations (updated June 2026), R.17 criteria (a)-(d) – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-016", domain: 3, topic: "FATF R.18: group-wide programmes and host-country obstacles", hy: true, difficulty: "hard",
    q: "A banking group headquartered in Country H has a majority-owned subsidiary in Country S. Country S's data protection law prevents the subsidiary from sending customer-level information to group compliance, and its AML rules are weaker than Country H's. The subsidiary is profitable and has had no recent regulatory findings. Group compliance cannot therefore monitor the subsidiary's high-risk clients. Under FATF Recommendation 18, what should the group do?",
    options: [
      "Follow Country S's law and take no further action, since host-country law always prevails",
      "Send the data anyway, since home-country requirements override host-country law",
      "Close the subsidiary at once, since any restriction on information sharing breaches R.18",
      "Apply additional measures to manage the risk and inform its home supervisor, which may impose further controls"
    ],
    answer: [3],
    explanation: "INR.18 para 5 requires foreign branches and majority-owned subsidiaries to apply home-country requirements to the extent host-country law permits. If the host country does not permit proper implementation, the group should apply appropriate additional measures to manage the ML/TF risks and inform its home supervisor. If those measures are not enough, the home supervisor should consider further action, up to requiring the group to close its host-country operations. Simply complying with the host law is the runner-up but omits the required additional measures and notification. Breaking host law or closing immediately is not what the standard prescribes.",
    source: [
      { label: "FATF Recommendations (updated June 2026), R.18 and INR.18 paras 4-5 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-017", domain: 3, topic: "MVTS controlling both sides of a transfer (INR.16)", hy: false, difficulty: "hard",
    q: "An MVTS provider controls both its sending network in Country A and its payout network in Country B. Country A's compliance team sees many small transfers from unrelated senders, which do not look unusual on their own. Payout data in Country B shows that all the funds are collected by three individuals who share an address with a sanctions-evasion suspect. The provider's systems store both data sets. Under FATF standards, what should the provider do?",
    options: [
      "Consider the information from both sides and file an STR in every country affected, sharing the transaction data with the FIUs",
      "File an STR only in Country A, where the transfers were ordered, since the payout side is a separate business",
      "Have each country's team assess only its own data, because combining data sets is not required",
      "Report the pattern to the FATF Secretariat, which coordinates cross-border STRs"
    ],
    answer: [0],
    explanation: "INR.16 para 32 states that an MVTS provider controlling both the ordering and beneficiary sides of a transfer should take into account all the information from both sides to decide whether an STR is needed. It should then file an STR in any country affected by the suspicious transfers and make the relevant transaction information available to the FIU. Filing only in the ordering country is the tempting runner-up, but it leaves Country B's FIU without the report. The pattern is visible only when the two data sets are combined, and the FATF does not receive STRs.",
    source: [
      { label: "FATF Recommendations (updated June 2026), INR.16 para 32 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-018", domain: 3, topic: "FATF R.16 (2025): information on cross-border payments above the threshold", hy: true, difficulty: "hard",
    q: "A bank sends a USD 25,000 cross-border credit transfer from an individual customer to a supplier company abroad. Under FATF Recommendation 16 as revised in June 2025, which items must accompany the payment, in addition to the names and account numbers? (Choose two.)",
    options: [
      "The originator's date of birth, or year of birth if the full date is not available",
      "The beneficiary company's full street address, including building number and postcode",
      "The originator's national identity number, as the only acceptable identifier",
      "The beneficiary company's connected BIC, LEI or unique official identifier, where one exists",
      "The originator's occupation and the source of the funds"
    ],
    answer: [0, 3],
    explanation: "Revised INR.16 para 9 requires cross-border payments above the threshold to carry the names and account numbers (or unique transaction reference) of both parties, the originator's address and the beneficiary's country and town, the originator's date of birth where the originator is a natural person, and the connected BIC, LEI or unique official identifier where the originator or beneficiary is a legal person and one exists. Footnote 55 allows the year of birth where the full date is not available. Only the beneficiary's country and town are required, not a full street address. The pre-2025 standard offered a national identity number as one of several alternatives, and occupation and source of funds are not payment-message fields.",
    changed: "FATF R.16 revised June 2025",
    source: [
      { label: "FATF Recommendations (updated June 2026), INR.16 paras 8-9 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-019", domain: 3, topic: "R.16 domestic payments: three business days (date calculation)", hy: false, difficulty: "hard",
    q: "In a country that applies FATF R.16, an ordering bank sends a domestic payment carrying only the originator's account number, because full originator information can be made available by other means. On Thursday, 5 November 2026, the beneficiary bank asks the ordering bank for the full originator information. There are no public holidays that month. By when must the ordering bank provide it?",
    options: [
      "Friday, 6 November 2026",
      "Sunday, 8 November 2026",
      "Tuesday, 10 November 2026",
      "Thursday, 12 November 2026"
    ],
    answer: [2],
    explanation: "INR.16 para 12 requires the ordering financial institution to make the information available within three business days of receiving the request from the beneficiary or intermediary institution or from competent authorities. Counting business days from Thursday 5 November gives Friday 6, Monday 9 and Tuesday 10 November. Sunday 8 November counts calendar days, and Thursday 12 November is five business days. Separately, law enforcement authorities should be able to compel immediate production of such information.",
    source: [
      { label: "FATF Recommendations (updated June 2026), INR.16 paras 11-12 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-020", domain: 2, topic: "FATF follow-up: technical compliance re-rating timelines (date calculation)", hy: false, difficulty: "hard",
    q: "An APG member was placed in enhanced follow-up after its fifth-round mutual evaluation. Its follow-up report is due at the APG Plenary in September 2027, and it wants re-ratings for R.15 and R.24, which were rated PC. Under the APG's fifth-round procedures, by when must it name the Recommendations for re-rating and submit its update?",
    options: [
      "Name them by February 2027 and submit the update by March 2027",
      "Name them by December 2026 and submit the update by January 2027",
      "Name them by June 2027 and submit the update by July 2027",
      "Name them and submit the update together by September 2026"
    ],
    answer: [1],
    explanation: "For members in enhanced follow-up, the APG's March 2026 procedures (para 190) require the member to name the Recommendations for re-rating at least nine months before the relevant Plenary and to submit its update one month later, at least eight months before. Counting back from September 2027 gives December 2026 and January 2027. February and March 2027 is the runner-up: those are the seven- and six-month deadlines for members in regular follow-up (para 183). The other dates do not match either timeline.",
    source: [
      { label: "APG Global Fifth Round ME Procedures (March 2026), paras 183 and 190", url: "https://www.apgml.org/sites/default/files/2026-03/APG%20Global%205th%20Round%20ME%20Procedures%20(March%202026)_0.pdf" }
    ]
  },
  {
    id: "KYC-021", domain: 2, topic: "FATF follow-up: enhanced follow-up vs ICRG referral criteria", hy: true, difficulty: "hard",
    q: "A country's fifth-round MER shows: one NC rating (R.15); four PC ratings (R.8, R.10, R.24 and R.28); all other Recommendations C or LC; effectiveness rated Moderate on five Immediate Outcomes and Low on one (IO.5), with the rest Substantial. The country hosts a large offshore financial centre. Under the fifth-round procedures, where will the country be placed after its MER is adopted?",
    options: [
      "Enhanced follow-up, but it does not meet the criteria for ICRG referral",
      "Regular follow-up, because it has fewer than 15 NC/PC ratings",
      "Referral to the ICRG, because it has at least one Low effectiveness rating",
      "Referral to the ICRG, because it has more than five NC/PC ratings"
    ],
    answer: [0],
    explanation: "Enhanced follow-up applies if any one of these is met: 5 or more PC ratings, 1 or more NC, PC on any of R.3, 5, 6, 10, 11 or 20, Moderate on 6 or more IOs, or Low on 1 or more IO. This country meets several of them: an NC, PC on R.10, and a Low on IO.5. ICRG referral requires 15 or more NC/PC ratings (it has 5), NC/PC on 3 or more of R.3, 5, 6, 10, 11 and 20 (it has 1), Low or Moderate on 9 or more IOs with at least 2 Low (it has 6 and 1), or Low on 6 or more IOs. None of these is met. Regular follow-up is the runner-up, but it is only for countries that trigger no enhanced follow-up criterion.",
    source: [
      { label: "APG Global Fifth Round ME Procedures (March 2026), paras 187 and 193", url: "https://www.apgml.org/sites/default/files/2026-03/APG%20Global%205th%20Round%20ME%20Procedures%20(March%202026)_0.pdf" }
    ]
  },
  {
    id: "KYC-022", domain: 2, topic: "ICRG process: entry criteria and observation period", hy: true, difficulty: "hard",
    q: "A country that belongs to an FSRB (not the FATF) receives its fifth-round MER. Its only weak ratings are PC on R.5, R.10 and R.20; everything else is rated LC or C, or Substantial. It is a high-income country. Which statements are correct? (Choose two.)",
    options: [
      "It meets the ICRG entry criteria, because it is rated NC/PC on three or more of R.3, 5, 6, 10, 11 and 20",
      "It will be placed on the FATF 'call for action' list as soon as its MER is adopted",
      "It cannot be reviewed by the ICRG, because only FATF members are subject to ICRG review",
      "As a high-income country it meets the prioritisation threshold, so it enters an observation period of generally 12 months before a post-observation period report",
      "Countries in the ICRG Pool can never be moved into active review before their next MER"
    ],
    answer: [0, 3],
    explanation: "One ICRG entry criterion is an NC/PC rating on 3 or more of R.3, 5, 6, 10, 11 and 20. A country is prioritised for active review if it is an FATF member, a World Bank high-income country, or has broad money above USD 10 billion. Prioritised countries enter an observation period, generally 12 months, followed by a Post-Observation Period Report to the ICRG Joint Group. Listing is not automatic: public identification comes only later, if progress is insufficient. The ICRG covers the whole Global Network, and a country in the ICRG Pool can be referred for active review at any time.",
    source: [
      { label: "APG Global Fifth Round ME Procedures (March 2026), para 193 and Figure 1", url: "https://www.apgml.org/sites/default/files/2026-03/APG%20Global%205th%20Round%20ME%20Procedures%20(March%202026)_0.pdf" },
      { label: "FATF – 2022 Procedures for Mutual Evaluations, Follow-Up and ICRG (5th round)", url: "https://www.fatf-gafi.org/en/publications/Mutualevaluations/5th-Round-Procedures.html" }
    ]
  },
  {
    id: "KYC-023", domain: 2, topic: "FATF ratings: technical compliance and effectiveness scales", hy: false, difficulty: "medium",
    q: "An MER concludes that a country's framework for R.10 has 'moderate shortcomings'. It also concludes that IO.4 (DNFBPs) is 'achieved to some extent' and that 'major improvements are needed'. Which ratings do these findings correspond to?",
    options: [
      "Largely Compliant for R.10 and a Substantial level of effectiveness for IO.4",
      "Non-Compliant for R.10 and a Moderate level of effectiveness for IO.4",
      "Partially Compliant for R.10 and a Low level of effectiveness for IO.4",
      "Partially Compliant for R.10 and a Moderate level of effectiveness for IO.4"
    ],
    answer: [3],
    explanation: "Under the FATF Methodology, technical compliance is rated C (no shortcomings), LC (only minor shortcomings), PC (moderate shortcomings) or NC (major shortcomings), with N/A in exceptional cases. Effectiveness is rated High (achieved to a very large extent; minor improvements needed), Substantial (large extent; moderate improvements), Moderate (some extent; major improvements) or Low (not achieved or negligible; fundamental improvements). 'Moderate shortcomings' therefore means PC, and 'some extent / major improvements' means Moderate.",
    source: [
      { label: "FATF Methodology (updated June 2026), paras 42 and 72 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Methodology_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-024", domain: 2, topic: "FATF fifth round: restructured Immediate Outcomes", hy: true, difficulty: "hard",
    q: "An assessor who last worked on fourth-round evaluations joins a fifth-round assessment team. She plans to assess how well the country's banks and VASPs apply CDD and report suspicious transactions under IO.4, as she did before. The country also has a large casino sector. Under the 2022 Methodology, where are banks' and VASPs' preventive measures now assessed?",
    options: [
      "Under IO.4, which covers preventive measures by all FIs, DNFBPs and VASPs",
      "Under IO.1, which now covers all private-sector risk understanding and preventive measures",
      "Under IO.3, together with the supervision of financial institutions and VASPs",
      "Under IO.6, because the quality of STRs is part of the use of financial intelligence"
    ],
    answer: [2],
    explanation: "In the fourth-round (2013) Methodology, IO.3 covered supervision of FIs, DNFBPs and VASPs, and IO.4 covered preventive measures by all of them. The 2022 Methodology used for the fifth round splits them by sector instead. IO.3 now covers supervision of financial institutions and VASPs and their application of preventive measures and STR reporting, while IO.4 covers the same for DNFBPs, including casinos. The runner-up describes the fourth-round structure. IO.1 concerns national risk, policy and coordination, and IO.6 concerns competent authorities' use of financial intelligence.",
    source: [
      { label: "FATF Methodology 2022 (updated June 2026), Immediate Outcomes 3 and 4 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Methodology_2026_eng.pdf" },
      { label: "FATF Methodology 2013 (updated June 2023), IO.3 and IO.4 – APG copy", url: "https://apgml.org/sites/default/files/documents//FATF_Methodology_22_Feb_2013_updated_June_2023.pdf" }
    ]
  },
  {
    id: "KYC-025", domain: 2, topic: "National risk assessment (R.1): purposes and dissemination", hy: false, difficulty: "medium",
    q: "A country completed a thorough national ML/TF risk assessment in 2019 and classified the full report as secret. It has not been updated or shared with the private sector, so banks build their own risk assessments without it. Under FATF Recommendation 1 and its Interpretive Note, what is the MAIN deficiency?",
    options: [
      "The assessment must be published in full on a public website to be valid",
      "The assessment should be kept up to date, and appropriate information on its results should be provided to financial institutions and DNFBPs",
      "The assessment should have been approved by the FATF Plenary before being used",
      "The assessment should have been carried out by the private sector, not by government"
    ],
    answer: [1],
    explanation: "INR.1 para 5 requires countries to identify and assess their ML/TF risks on an ongoing basis. One purpose is to make information available for the risk assessments of financial institutions and DNFBPs. Countries must keep the assessments up to date and have mechanisms to give appropriate information on the results to competent authorities, SRBs, financial institutions and DNFBPs. The standard does not require full publication. It requires sharing appropriate information, which may be a summary. The FATF does not approve national risk assessments, and the obligation lies with the country.",
    source: [
      { label: "FATF Recommendations (updated June 2026), INR.1 para 5 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-026", domain: 2, topic: "R.1 exemptions from FATF requirements", hy: false, difficulty: "hard",
    q: "Following its national risk assessment, a ministry proposes four exemptions from AML/CFT obligations. Which proposal is INCONSISTENT with the conditions for exemptions in INR.1?",
    options: [
      "Exempting small hotels that exchange foreign currency for guests only occasionally and in small amounts",
      "Exempting a narrowly defined type of institution where a proven low risk has been assessed and the exemption is limited and justified",
      "Exempting a financial activity carried out on a very limited basis under set quantitative and absolute criteria",
      "Exempting individuals who transfer money for others only occasionally, on the grounds that the volumes are small"
    ],
    answer: [3],
    explanation: "INR.1 para 8 lets countries disapply some Recommendations in two cases. First, where there is an assessed low risk and the exemption is limited, justified and relates to a particular type of institution, activity or DNFBP. Second, where a financial activity other than the transferring of money or value is carried out occasionally or on a very limited basis, judged by quantitative and absolute criteria. Money transfer is expressly excluded from that second basis. The hotel currency-exchange proposal is the tempting runner-up, but currency exchange is not money transfer, so it can qualify if the criteria are met.",
    source: [
      { label: "FATF Recommendations (updated June 2026), INR.1 para 8 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-027", domain: 2, topic: "Risk-based supervision (R.26 / INR.26)", hy: false, difficulty: "medium",
    q: "A financial supervisor inspects every bank for AML/CFT on the same fixed three-year cycle, with identical scope, whatever the bank's size, business model or risk. Its last risk profile of a bank that has since bought a large cross-border payments firm is four years old. Under FATF Recommendation 26 and its Interpretive Note, what should change?",
    options: [
      "Frequency and intensity should follow each institution's assessed risk profile, updated periodically and after major events such as acquisitions",
      "Every bank should be inspected on site each year, so that no institution is treated differently",
      "Supervision should rely mainly on banks' self-assessments, and inspections should be carried out only after a scandal",
      "The supervisor should keep its cycle and ask the FIU to monitor the acquiring bank instead"
    ],
    answer: [0],
    explanation: "INR.26 paras 2-3 require the frequency and intensity of on-site and off-site AML/CFT supervision to be based on the ML/TF risks and the institution's policies, controls and procedures, as shown in the supervisor's assessment of its risk profile. That profile should be reviewed both periodically and when there are major events or developments in the institution's management or operations, such as an acquisition. Uniform annual inspections ignore risk. Self-assessment alone, or leaving the matter to the FIU, is not risk-based supervision.",
    source: [
      { label: "FATF Recommendations (updated June 2026), R.26 and INR.26 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-028", domain: 2, topic: "Sanctions for AML/CFT failures (R.35 and R.27)", hy: true, difficulty: "medium",
    q: "A country is redesigning its AML/CFT enforcement regime to comply with FATF Recommendations 27 and 35. Which features are required? (Choose two.)",
    options: [
      "Sanctions must also be available against the directors and senior management of the institutions, not only the institutions",
      "All sanctions must be criminal, because administrative fines are not dissuasive",
      "Supervisors must have powers that include withdrawing, restricting or suspending an institution's licence",
      "Sanctions need to cover financial institutions only, not DNFBPs or non-profit organisations",
      "Fines must be fixed amounts so that every breach is punished identically"
    ],
    answer: [0, 2],
    explanation: "R.35 requires a range of effective, proportionate and dissuasive sanctions, whether criminal, civil or administrative, for natural or legal persons covered by R.6 and R.8 to R.23 that fail to comply. The sanctions must apply not only to financial institutions and DNFBPs but also to their directors and senior management. R.27 requires supervisors to have powers to impose a range of disciplinary and financial sanctions, including withdrawing, restricting or suspending a licence. Requiring only criminal sanctions or fixed fines conflicts with the need for a proportionate range, and R.35 covers DNFBPs and, through R.8, NPOs.",
    source: [
      { label: "FATF Recommendations (updated June 2026), R.27 and R.35 – EAG copy", url: "https://eurasiangroup.org/files/uploads/files/FATF_Recommendations_2026_eng.pdf" }
    ]
  },
  {
    id: "KYC-029", domain: 3, topic: "Beneficial ownership record retention (date calculation)", hy: false, difficulty: "hard",
    q: "A US bank opened an account for Cedar LLC on 3 March 2021. That day it obtained the beneficial ownership certification and recorded how it verified each owner's identity; nothing was updated later. Cedar closed the account on 15 August 2024. No SAR, legal hold or other retention rule applies. It is now 30 September 2026. Under 31 CFR 1010.230(i), which statement is correct?",
    options: [
      "Both sets of records may now be destroyed, because five years have passed since account opening",
      "The verification records could be destroyed from March 2026, but the identification records must be kept until 15 August 2029",
      "Both sets of records must be kept until 15 August 2029, five years after the account closed",
      "Both sets of records must be kept for ten years, in line with the extended OFAC recordkeeping period"
    ],
    answer: [1],
    explanation: "Section 1010.230(i)(2) sets two different retention periods. Identifying information, including the certification, must be kept for five years after the account is closed, here until 15 August 2029. Records of verification (documents relied on, non-documentary methods and resolution of discrepancies) must be kept for five years after the record is made, here until 3 March 2026. The runner-up applies the account-closure clock to both, missing this split. The 10-year OFAC recordkeeping period applies to sanctions records, not CDD records.",
    source: [
      { label: "eCFR – 31 CFR 1010.230(i) (recordkeeping)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-B/section-1010.230" }
    ]
  },
  {
    id: "KYC-030", domain: 4, topic: "Investigating beneficial ownership discrepancies", hy: false, difficulty: "hard",
    q: "During onboarding, a US bank receives Delta LLC's beneficial ownership certification naming two 50% owners. A commercial registry database and a recent court filing both show that a third person acquired 40% of Delta six months ago. Delta's representative says the certification is 'accurate enough' and asks the bank to rely on it, noting that the CDD Rule allows reliance on customer-supplied information. What should the analyst do?",
    options: [
      "Rely on the certification, because the rule allows banks to rely on information supplied by the customer",
      "Reject the customer at once and file a SAR solely because the certification differs from the registry",
      "Accept the certification and record the registry data only as a note in the file",
      "Investigate and resolve the discrepancy with the customer, identify and verify any additional owner, and document the resolution"
    ],
    answer: [3],
    explanation: "Under 31 CFR 1010.230(b)(2), a bank may rely on the customer's beneficial ownership information only if it has no knowledge of facts that would reasonably call its reliability into question, and the registry and court filing are such facts. Section 1010.230(i)(1)(ii) requires the bank to record the resolution of each substantive discrepancy. Reliance is the tempting runner-up, but its condition is not met here. A discrepancy alone does not require immediate rejection or a SAR, although the bank should consider a SAR if the customer's explanation is suspicious. Merely noting the conflict leaves it unresolved.",
    source: [
      { label: "eCFR – 31 CFR 1010.230(b)(2) and (i)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-B/section-1010.230" }
    ]
  }
]);
