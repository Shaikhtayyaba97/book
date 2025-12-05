---
id: 1
title: Create Project Constitution
stage: constitution
date: 2025-12-06
surface: agent
model: gemini
feature: none
branch: master
user: user
command: /sp.constitution
labels: [constitution, setup]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - .specify/templates/plan-template.md
tests:
 - none
---

## Prompt

/sp.constitution Project Title: Physical AI & Humanoid Robotics: AI Systems in the Physical World
پروجیکٹ کا عنوان: فزیکل اے آئی اور ہیومانوئڈ روبوٹکس: حقیقی دنیا میں اے آئی سسٹمز

Project Purpose:
- Create a comprehensive textbook to teach Physical AI and Humanoid Robotics.
- Bridge the gap between digital AI and embodied intelligence in physical robots.
- Provide practical guidance for students to apply AI concepts using ROS 2, Gazebo, Unity, and NVIDIA Isaac Sim.
- Enable integration of LLMs (GPT) for conversational robotics.
مقصد:
- فزیکل اے آئی اور ہیومانوئڈ روبوٹکس سکھانے کے لیے جامع نصاب تیار کرنا۔
- ڈیجیٹل اے آئی اور جسمانی روبوٹز میں موجود ذہانت کے درمیان پل قائم کرنا۔
- طلبہ کو عملی رہنمائی دینا تاکہ وہ ROS 2, Gazebo, Unity اور NVIDIA Isaac Sim کے ذریعے اے آئی کے تصورات لاگو کر سکیں۔
- گفتگو کرنے والے روبوٹکس کے لیے LLMs (GPT) کو مربوط کرنا۔

Audience:
- University-level students in AI, Robotics, and Engineering.
- Professionals seeking hands-on experience with Physical AI.
- Learners familiar with basic AI and programming concepts (Python recommended).
حاضری:
- یونیورسٹی سطح کے طلبہ جو اے آئی، روبوٹکس اور انجینئرنگ میں ہیں۔
- پروفیشنلز جو فزیکل اے آئی میں عملی تجربہ چاہتے ہیں۔
- وہ لوگ جو بنیادی اے آئی اور پروگرامنگ (Python) سے واقف ہیں۔

Content Scope:
- 4 modules, each with 4 chapters (total 16 chapters)
- Modules cover ROS 2, Digital Twin simulation, AI-Robot Brain, Vision-Language-Action.
- Each chapter includes: theory, practical exercises, examples, diagrams, and code snippets where applicable.
مواد کا دائرہ:
- 4 ماڈیولز، ہر ایک میں 4 ابواب (کل 16 ابواب)
- ماڈیولز میں ROS 2، Digital Twin simulation، AI-Robot Brain، Vision-Language-Action شامل ہیں۔
- ہر باب میں: نظریہ، عملی مشقیں، مثالیں، ڈایاگرام، اور جہاں ممکن ہو کوڈ نمونے شامل ہوں۔

Tone & Style:
- Clear, educational, and professional, with friendly and approachable explanations.
- Use step-by-step instructions for practical sections.
- Include real-world examples to connect theory with robotics applications.
- Visual aids and diagrams should complement textual content.
انداز اور سٹائل:
- واضح، تعلیمی اور پیشہ ورانہ، دوستانہ اور آسان فہم وضاحتوں کے ساتھ۔
- عملی حصوں کے لیے مرحلہ وار ہدایات استعمال کریں۔
- حقیقی دنیا کی مثالیں شامل کریں تاکہ نظریہ اور روبوٹکس کی ایپلیکیشنز جوڑ سکیں۔
- بصری امداد اور ڈایاگرام مواد کے ساتھ ہم آہنگ ہونے چاہئیں۔

Rules for Content Generation:
- Ensure consistency in terminology across all chapters.
- All technical explanations must be accurate and based on current AI and robotics standards.
- Use structured formatting suitable for Docusaurus (Markdown/MDX).
- Include code snippets in proper syntax highlighting.
- Make content modular: each chapter should be independently understandable but connected to module flow.
- Include checkpoints/summary at the end of each chapter.
- Use placeholders for images, diagrams, or tables which can later be added in Docusaurus.
مواد تیار کرنے کے قواعد:
- تمام ابواب میں اصطلاحات میں یکسانیت یقینی بنائیں۔
- تمام تکنیکی وضاحتیں درست اور موجودہ اے آئی اور روبوٹکس کے معیار پر مبنی ہونی چاہئیں۔
- Docusaurus (Markdown/MDX) کے لیے مناسب ساختی فارمیٹنگ استعمال کریں۔
- کوڈ نمونے صحیح syntax highlighting کے ساتھ شامل کریں۔
- مواد کو ماڈیولر بنائیں: ہر باب خود مختار سمجھنے کے قابل ہونا چاہیے لیکن ماڈیول کے بہاؤ سے منسلک ہو۔
- ہر باب کے آخر میں checkpoints/summary شامل کریں۔
- تصاویر، ڈایاگرام یا جدول کے لیے جگہ رکھیں، بعد میں Docusaurus میں شامل کی جا سکتی ہیں۔

Special Instructions:
- Chapters should prepare the learner for practical labs (simulated or real robot experiments).
- Incorporate AI-native learning methods where possible (interactive prompts, exercises, or agent-based guidance).
- Ensure chapters are future-proof, considering evolving robotics hardware and AI models.
خصوصی ہدایات:
- ابواب طلبہ کو عملی لیب کے لیے تیار کریں (simulated یا حقیقی روبوٹ کے تجربات)۔
- جہاں ممکن ہو AI-native سیکھنے کے طریقے شامل کریں (interactive prompts، exercises، یا agent-based guidance)۔
- ابواب مستقبل میں بھی موزوں ہوں، روبوٹکس ہارڈویئر اور AI ماڈلز کی ترقی کو مدنظر رکھتے ہوئے۔

## Response snapshot

I have successfully created the project constitution and updated the relevant templates.

- **New Constitution**: `.specify/memory/constitution.md` (Version 1.0.0)
- **Updated Template**: `.specify/templates/plan-template.md`

## Outcome

- ✅ Impact: Created the foundational governance document for the project.
- 🧪 Tests: n/a
- 📁 Files: 2 files modified
- 🔁 Next prompts: The user can now proceed with other commands.
- 🧠 Reflection: The process of creating the constitution and updating templates was smooth. The user provided clear instructions.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment: n/a
