window.CAMS_COURSE = (window.CAMS_COURSE || []).concat([{
  id: "m00",
  order: 0,
  domain: 1,
  title: "How the CAMS exam works",
  icon: "🧭",
  minutes: 10,
  summary: "Know exactly what the CAMS exam looks like: format, passing score, domain weights and question styles, plus a pacing and elimination method that turns what you know into points.",
  mostTested: [
    "120 questions in 3.5 hours: about 1 min 45 s per question, no scheduled breaks",
    "Passing score 75 and no penalty for guessing, so never leave a question blank",
    "Weights 30 / 20 / 30 / 20: Risks and Methods plus Building a Program make up 60% of the exam",
    "The sector and jurisdiction electives are not part of the exam blueprint",
    "Multiple-choice and multiple-selection items: the qualifier (BEST, MOST, FIRST) decides the answer",
    "40 eligibility credits to sit the exam; 60 credits every 3 years (at least 12 from ACAMS) to recertify"
  ],
  sections: [
    {
      h: "The exam at a glance",
      p: [
        "The CAMS exam is a computer-based test of **120 questions** in **3.5 hours (210 minutes)**, delivered by **Pearson VUE**. The program relaunched on **15 July 2025** (the 7th edition) with four core courses that go beyond AML to the wider anti-financial crime (AFC) field: CFT, sanctions, fraud, anti-bribery and corruption (ABC) and tax evasion.",
        "The candidate handbook says the questions are **multiple choice and multiple selection**, the passing score is **75**, and there is **no penalty for guessing**. ACAMS does not publish how many correct answers equal a score of 75, so do not read it as 75 questions or 75 percent. A safe target is to score well above 80% on mixed practice sets."
      ],
      table: {
        head: ["Feature", "Official rule"],
        rows: [
          ["Questions", "120, multiple choice and multiple selection"],
          ["Time", "3.5 hours; no extra time, no scheduled breaks"],
          ["Passing score", "75 (conversion from raw answers not published)"],
          ["Guessing", "No penalty: answer every question"],
          ["Result", "Pass or fail shown at the end of the test"],
          ["Delivery", "Pearson VUE test centre, two valid IDs with matching names"],
          ["Window", "6 months from application approval"]
        ]
      },
      tip: "Exam tip: a blank answer can only score zero. With no penalty for guessing, every question must have an answer before time runs out, including the ones you flagged.",
      remember: "120 questions, 210 minutes, passing score 75, no penalty for guessing."
    },
    {
      h: "The four domains and their weights",
      p: [
        "The exam blueprint has four domains that mirror the four core courses. Domain 1 and Domain 3 carry **30%** each, so together they make up **60%** of the exam. Domains 2 and 4 carry **20%** each.",
        "The question counts below are derived from the weights and are only an estimate. Note that Domain 4 is a full fifth of the exam: screening, monitoring and AI are core content, not a side topic."
      ],
      table: {
        head: ["Domain", "Weight", "About", "Core content in the outline"],
        rows: [
          ["1. Understanding the Risks and Methods of Financial Crime", "30%", "36 Qs", "Definitions, predicate crimes, sector risks: banking, PEPs, MSBs and PSPs, insurance, VASPs, gaming, real estate, gatekeepers, TCSPs"],
          ["2. Global AFC Frameworks, Governance, and Regulations", "20%", "24 Qs", "FATF and FSRBs, UN sanctions, regulators and FIUs, national risk assessments, US and EU regimes, public-private partnerships"],
          ["3. Building an AFC Compliance Program", "30%", "36 Qs", "Program pillars, three lines of defense, BSA officer or MLRO, risk appetite, enterprise risk assessment, CDD, investigations, SARs, tipping-off, de-risking"],
          ["4. Tools and Technologies to Fight Financial Crime", "20%", "24 Qs", "e-KYC and digital ID, screening and fuzzy logic, transaction monitoring tuning (ATL/BTL), model risk, AI and machine learning, network analysis"]
        ]
      },
      tip: "Exam tip: split your study time roughly in proportion to the weights. A gap in Domain 1 or 3 costs more points than the same gap in Domain 2 or 4.",
      remember: "30 / 20 / 30 / 20: Risks, Frameworks, Program, Tools."
    },
    {
      h: "Electives: studied, not examined",
      p: [
        "The CAMS package includes two self-paced electives: one **Sector-Specific AML Case Studies** course and one **AML Regulatory Framework** course for a jurisdiction. Each takes about **90 minutes** plus a short assessment and earns **1 ACAMS credit**.",
        "The candidate handbook is explicit: the electives **are not part of the exam blueprint**. They add context, but the exam covers the four core domains."
      ],
      list: [
        "Sector options listed in 2026: Retail and Commercial Banking; MSB, PSP and VASP; Securities and Capital Markets; Investment and Corporate Banking; Gaming and Gambling; Private Banking and Wealth Management (list expanded since the July 2025 launch).",
        "Jurisdiction options listed in 2026: **US, UK, EU, Canada, UAE and Australia** (UAE and Australia added since the July 2025 launch).",
        "The program is now offered in 11 languages; at the July 2025 launch it was available in English only."
      ],
      tip: "Exam tip: choosing a UK or Canada elective does not remove US and EU rules from your syllabus. Domain 2 covers the main AFC regulations and regulators of the US and the EU.",
      remember: "Electives are not part of the exam blueprint; the four core domains are."
    },
    {
      h: "Question styles and qualifiers",
      p: [
        "A **multiple-choice** item has one correct option. A **multiple-selection** item has several correct options, so read the stem for how many to pick (this trainer says Choose two or Choose three). ACAMS does not publish partial-credit rules, so treat each multiple-selection item as all or nothing.",
        "ACAMS describes the exam as testing both theoretical knowledge and **practical scenario-based problems**. A typical scenario gives a role, a customer and some facts, then asks a question with a qualifier. The qualifier decides which of several true statements is the answer."
      ],
      table: {
        head: ["Qualifier", "What it asks", "How to answer"],
        rows: [
          ["BEST", "Several options may be acceptable; one is most complete", "Choose the risk-based option that deals with the root issue"],
          ["MOST likely", "The strongest match to the facts", "Name the typology, stage or red flag the facts fit best"],
          ["MOST important", "A priority", "Prefer the option that manages the highest risk"],
          ["FIRST", "Sequence", "Choose the step that must happen before the others, often gathering facts or escalating internally"],
          ["NOT", "The false statement", "Test each option as true or false"]
        ]
      },
      tip: "Exam tip: note the role in the stem. What an analyst should do FIRST (escalate to the BSA officer or MLRO) differs from what the MLRO should do (decide whether to file).",
      remember: "Read the last line first: the qualifier decides which true statement is the right answer."
    },
    {
      h: "Elimination and distractors",
      p: [
        "Wrong options are rarely absurd. They tend to be true statements in the wrong context, the right action at the wrong time, or a rule from another jurisdiction. Good elimination turns a four-way guess into a choice between two."
      ],
      list: [
        "**Absolutes** (always, never, all, immediately): AFC controls follow the **risk-based approach**, so absolute options are often wrong.",
        "**Too extreme**: closing the account at once, or asking the customer about the suspicion. Exits follow governance, and alerting the customer risks **tipping-off**.",
        "**True but irrelevant**: a correct fact that does not answer the question asked.",
        "**Right action, wrong order**: filing before investigating, or writing procedures before the risk assessment.",
        "**Wrong number or jurisdiction**: a threshold or deadline that belongs to another rule or another country.",
        "**Neighbour swaps**: the facts show **layering** and the option says **placement**; the facts need **EDD** and the option offers **SDD**."
      ],
      tip: "Exam tip: when one option contains another plus something more (EDD versus EDD with senior management approval for a PEP), the more complete option is usually the BEST answer.",
      remember: "Predict, eliminate, then compare the last two against the qualifier."
    },
    {
      h: "Time management",
      p: [
        "210 minutes for 120 questions gives about **1 minute 45 seconds** per question. Work slightly faster, about 1 minute 37 seconds, to keep a **15-minute** buffer for flagged items."
      ],
      table: {
        head: ["Checkpoint", "Target time elapsed"],
        rows: [
          ["Question 40", "1 h 05 min"],
          ["Question 80", "2 h 10 min"],
          ["Question 120", "3 h 15 min"],
          ["Review of flagged items", "Last 15 min"]
        ]
      },
      list: [
        "Stuck? Pick your best current answer, flag it and move on. Never leave it blank.",
        "Long scenario: read the question line first, then the facts, looking only for what the question needs.",
        "On review, change an answer only when you find a fact you missed, not on a vague feeling.",
        "There are no scheduled breaks, so plan water and rest before you start. Try the Pearson VUE demo beforehand to learn the interface."
      ],
      tip: "Exam tip: a 30-question mock at real exam pace takes about 52 minutes. Train at that pace until it feels normal.",
      remember: "About 1 min 45 s per question; checkpoints at questions 40, 80 and 120."
    },
    {
      h: "Eligibility, scheduling and retakes",
      p: [
        "To apply you need an active **ACAMS membership** and **40 eligibility credits**. Membership itself earns no credits, and a degree counts whatever its field. Once ACAMS approves the application (typically within 5 business days) you have **6 months** to sit the exam; an extension is available for a fee."
      ],
      table: {
        head: ["Source of credits", "Credits"],
        rows: [
          ["Associate degree", "10"],
          ["Bachelor's degree", "20"],
          ["Master's degree", "30"],
          ["JD or PhD", "40"],
          ["Each year of AFC work experience", "10"],
          ["Each hour of financial-crime training", "1"],
          ["The four CAMS core courses, together", "18"],
          ["CAMS Virtual Classroom", "12"]
        ]
      },
      list: [
        "Failed attempt: retake after **30 days** the first time, **60 days** after a second failure, **90 days** after a third or later failure.",
        "Each retake needs a new authorization to test (US$299 for private-sector candidates).",
        "Exam content is confidential: sharing questions can lead to revocation of the certification."
      ],
      tip: "Planning tip: book early in the 6-month window, so a retake still fits after the 30-day wait if you need one.",
      remember: "40 credits and active membership to sit; 6 months to test after approval."
    },
    {
      h: "Recertification",
      p: [
        "CAMS must be renewed every **3 years**. You need an active membership, **60 credits** in the three-year cycle with **at least 12** from ACAMS-provided training, an online application and a fee."
      ],
      list: [
        "Credits count only if earned after your certification or last recertification, and extra credits do not roll over.",
        "Non-ACAMS credits must be AFC-related, last at least one hour, be live (synchronous) and be documented.",
        "Standard deadline: **December 15** of the recertification year. Late submissions are accepted until **March 31**; after that the designation expires.",
        "ACAMS audits every recertifying class, so keep your certificates of attendance."
      ],
      remember: "60 credits every 3 years, at least 12 from ACAMS."
    }
  ],
  cards: [
    { front: "How many questions are on the CAMS exam?", back: "120, in multiple-choice and multiple-selection format." },
    { front: "How long is the CAMS exam?", back: "3.5 hours (210 minutes), with no extra time and no scheduled breaks." },
    { front: "What passing score does the CAMS candidate handbook state?", back: "75. ACAMS does not publish how raw answers convert to that score." },
    { front: "Is there a penalty for wrong answers?", back: "No. There is no penalty for guessing, so answer every question." },
    { front: "Which two domains weigh 30% each?", back: "Domain 1, Understanding the Risks and Methods of Financial Crime, and Domain 3, Building an AFC Compliance Program." },
    { front: "Weight of Global AFC Frameworks, Governance, and Regulations?", back: "20% (Domain 2)." },
    { front: "Weight of Tools and Technologies to Fight Financial Crime?", back: "20% (Domain 4)." },
    { front: "Are the sector and jurisdiction electives tested?", back: "No. The handbook says the electives are not part of the exam blueprint." },
    { front: "Which electives come in the CAMS package?", back: "One Sector-Specific AML Case Studies course and one AML Regulatory Framework course, about 90 minutes each, 1 ACAMS credit each." },
    { front: "Average time available per question?", back: "About 1 minute 45 seconds (210 minutes for 120 questions)." },
    { front: "What does FIRST signal in a scenario question?", back: "Sequence: choose the step that must come before the others, not the most important step overall." },
    { front: "Why are options with always or never often wrong?", back: "AFC controls follow a risk-based approach, so absolute rules rarely fit the facts." },
    { front: "What is a true-but-irrelevant distractor?", back: "A correct statement that does not answer the question asked. Check every option against the qualifier." },
    { front: "Eligibility credits needed to sit CAMS?", back: "40, from education, AFC work experience (10 per year) and training (1 per hour), plus active ACAMS membership." },
    { front: "How long after approval can you take the exam?", back: "6 months; an extension is available for a fee." },
    { front: "Retake waiting periods after a failed attempt?", back: "30 days after the first failure, 60 after the second, 90 after the third or later." },
    { front: "CAMS recertification requirement?", back: "Every 3 years: 60 credits (at least 12 from ACAMS), active membership, online application and fee." },
    { front: "When do you get your exam result?", back: "Immediately at the end of the test: pass or fail on screen." }
  ],
  numbers: [
    { q: "Number of questions on the CAMS exam", a: "120", wrong: ["100", "150", "200"] },
    { q: "CAMS exam duration", a: "3.5 hours (210 minutes)", wrong: ["2 hours (120 minutes)", "3 hours (180 minutes)", "4 hours (240 minutes)"] },
    { q: "Passing score stated in the CAMS candidate handbook", a: "75", wrong: ["65", "70", "80"] },
    { q: "Weight of Domain 1, Understanding the Risks and Methods of Financial Crime", a: "30%", wrong: ["20%", "25%", "40%"] },
    { q: "Weight of Domain 4, Tools and Technologies to Fight Financial Crime", a: "20%", wrong: ["10%", "25%", "30%"] },
    { q: "Average time available per question", a: "About 1 minute 45 seconds", wrong: ["About 1 minute", "About 1 minute 15 seconds", "About 2 minutes 30 seconds"] },
    { q: "Eligibility credits required to sit the CAMS exam", a: "40", wrong: ["30", "50", "60"] },
    { q: "Time allowed to sit the exam after application approval", a: "6 months", wrong: ["30 days", "3 months", "12 months"] },
    { q: "Waiting period before retaking after a first failed attempt", a: "30 days", wrong: ["7 days", "60 days", "90 days"] },
    { q: "CAMS recertification credits per 3-year cycle", a: "60 (at least 12 from ACAMS)", wrong: ["30 (at least 15 from ACAMS)", "40 (at least 10 from ACAMS)", "90 (at least 20 from ACAMS)"] }
  ],
  questionIds: [],
  sources: [
    { label: "ACAMS – CAMS Candidate Handbook (July 2025): exam blueprint and domain weights, 120 questions, passing score 75, no penalty for guessing, electives not in the blueprint, retake and recertification rules", url: "https://www.acams.org/en/media/document/6341" },
    { label: "ACAMS – CAMS Certification page and FAQs: 120 questions in 3.5 hours, Pearson VUE, 40 eligibility credits, 6-month window, retake fee, electives", url: "https://www.acams.org/en/certifications/cams-certification" },
    { label: "ACAMS – Recertification: CAMS every 3 years, 60 credits with at least 12 from ACAMS, December 15 and March 31 deadlines", url: "https://www.acams.org/en/certifications/recertification" },
    { label: "ACAMS – Sector-Specific AML Case Studies (elective): 90 minutes, 1 ACAMS credit, available sectors", url: "https://www.acams.org/en/training/certificates/sector-specific-aml-case-studies" },
    { label: "ACAMS – AML Regulatory Framework Courses (elective): US, UK, EU, Canada, UAE, Australia", url: "https://www.acams.org/en/training/certificates/aml-regulatory-framework-courses" },
    { label: "ACAMS press release, 15 July 2025: enhanced CAMS with four core courses and two electives", url: "https://www.globenewswire.com/news-release/2025/07/15/3115455/0/en/acams-launches-enhanced-cams-certification-to-combat-evolving-financial-crime.html" }
  ]
}]);
