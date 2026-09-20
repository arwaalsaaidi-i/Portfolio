(function () {
  "use strict";

  /* ============================================================
     TRANSLATIONS
     ============================================================ */
  var translations = {
    en: {
      "nav.name": "ARWA IBRAHIM ALSAIDI",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.resume": "Resume",
      "nav.contact": "Contact",

      "hero.name": "ARWA IBRAHIM ALSAIDI",
      "hero.title": "DATA ANALYST",
      "hero.tagline": "Data Analysis · Visualization · Interactive Dashboards",
      "hero.cta": "VIEW PROJECTS →",
      "hero.about": "ABOUT ME ↓",

      "proof.projects": "Selected projects",
      "proof.indicators": "Power BI indicators",
      "proof.tools": "Core analytics tools",
      "proof.language": "EN / AR",

      "about.number": "01 / ABOUT ME",
      "about.lede": "I am a Data Analyst with a strong interest in turning data into clear and useful insights.",
      "about.p2": "I have developed hands-on experience through projects involving data cleaning, analysis, visualization, and interactive dashboard development using Microsoft Excel and Power BI.",
      "about.p3": "My portfolio showcases practical projects where I worked with real-world datasets, explored patterns and trends, and presented findings through clear and interactive dashboards.",
      "about.p4": "I am continuously developing my analytical and technical skills and looking for opportunities to apply these skills in a professional environment.",

      "skills.number": "02 / SKILLS",
      "skills.card1.title": "Data Analysis",
      "skills.card1.li1": "Data Cleaning",
      "skills.card1.li2": "Data Transformation",
      "skills.card1.li3": "Data Analysis",
      "skills.card1.li4": "Trend Analysis",
      "skills.card1.li5": "Data Visualization",
      "skills.card2.title": "Tools",
      "skills.card2.li1": "Microsoft Excel",
      "skills.card2.li2": "Microsoft Power BI",
      "skills.card2.li3": "Power Query",
      "skills.card2.li4": "DAX",
      "skills.card2.li5": "PivotTables & PivotCharts",
      "skills.card3.title": "Dashboard & Reporting",
      "skills.card3.li1": "Interactive Dashboards",
      "skills.card3.li2": "KPI Development",
      "skills.card3.li3": "PivotTables & PivotCharts",
      "skills.card3.li4": "Slicers & Dynamic Filtering",
      "skills.card3.li5": "Analytical Reporting",

      "projects.number": "03 / PROJECTS",
      "projects.heading": "Selected analytical work",
      "projects.sub": "Two practical projects focused on cleaning, analysis, visualization, and interactive reporting — presented as case studies rather than template cards.",
      "project1.scopeLabel": "FOCUS",
      "project1.scope": "HR metrics · workforce · attrition",
      "project2.scopeLabel": "FOCUS",
      "project2.scope": "Economic indicators · trends · comparison",
      "project1.tool": "Microsoft Excel",
      "project1.title": "HR Analytics Dashboard",
      "project1.desc": "An interactive HR dashboard developed in Microsoft Excel to analyze workforce distribution, compensation, performance, satisfaction, absenteeism, recruitment, and employee attrition.",
      "project1.tools": "Microsoft Excel · PivotTables · PivotCharts · Slicers",
      "project1.imgalt": "HR Analytics Dashboard overview screenshot",
      "project2.tool": "Microsoft Power BI",
      "project2.title": "Saudi Arabia Macroeconomic Dashboard",
      "project2.desc": "An interactive Power BI dashboard analyzing 52 historical economic, demographic, social, financial, and development indicators for Saudi Arabia using World Bank data.",
      "project2.tools": "Microsoft Power BI · Power Query · DAX · Data Modeling",
      "project2.imgalt": "Saudi Arabia Macroeconomic Dashboard screenshot",

      "cta.viewcase": "VIEW CASE STUDY →",
      "cta.back": "← BACK TO PROJECTS",
      "cta.close": "CLOSE ✕",
      "fallback.image": "Dashboard preview image",

      "resume.number": "04 / RESUME",
      "resume.text": "Interested in learning more about my background and experience?",
      "resume.cta": "DOWNLOAD RESUME →",

      "contact.number": "05 / CONTACT",
      "contact.heading": "LET'S CONNECT",
      "contact.sub": "Interested in working together or discussing a data analytics opportunity?",
      "contact.email": "EMAIL ME →",
      "contact.linkedin": "LINKEDIN →",

      "footer.name": "ARWA IBRAHIM ALSAIDI",
      "footer.role": "DATA ANALYST",
      "footer.lang": "EN / AR",
      "footer.year": "© 2026",
      "footer.status": "Portfolio preview · links are demo placeholders",

      "case.label": "PROJECT",

      "bignum.xl.l1": "Employees · Production",
      "bignum.xl.l2": "Turnover Rate",
      "bignum.xl.l3": "Average Satisfaction",
      "bignum.pbi.l1": "Indicators Analyzed",
      "bignum.pbi.l2": "GDP · 2024",
      "bignum.pbi.l3": "GDP Growth · 2022",

      "flow.raw": "Raw Data",
      "flow.standardize": "Field Standardization",
      "flow.validate": "Data Type Validation",
      "flow.quality": "Data Quality Check",
      "flow.table": "Structured Excel Table",
      "flow.dashboard": "PivotTables + Dashboard",

      "xl.overview.title": "Project Overview",
      "xl.overview.body": "This project involved analyzing an HR dataset to understand workforce distribution, compensation, performance, satisfaction, absenteeism, and employee attrition. I prepared and structured the data in Microsoft Excel and used PivotTables, PivotCharts, and interactive filters to explore the data from different perspectives. The analysis was then presented through an interactive dashboard, highlighting key workforce and HR trends that can support data-driven decision-making.",
      "xl.objective.title": "Project Objective",
      "xl.objective.body": "The objective of this project was to turn raw HR data into a clear and useful view of the organization's workforce. The analysis focused on understanding workforce distribution, salary levels, performance, satisfaction, absenteeism, and attrition, while identifying patterns across departments. The final goal was to present these findings in an interactive dashboard that makes HR metrics easier to explore and use for decision-making.",
      "xl.prep.title": "Data Preparation",
      "xl.prep.body": "I started by reviewing the raw HR dataset and preparing it for analysis. I standardized inconsistent fields, separated grouped information within cells, and reviewed dates, text fields, and salary values to ensure consistent data types. I also checked for empty and inconsistent values that could affect the analysis. Once the data was cleaned and structured, I converted it into an Excel Table and used it as the foundation for the dashboard and PivotTable analysis.",
      "xl.analysis.title": "Analysis & Dashboard Development",
      "xl.analysis.body": "Once the data was prepared, I used Microsoft Excel to analyze the main HR metrics and compare results across departments. The analysis covered workforce distribution, salary and payroll levels, performance ratings, satisfaction and engagement, absenteeism, recruitment sources, and attrition. I used PivotTables and PivotCharts to organize the analysis and built an interactive dashboard with KPI cards, charts, and slicers, allowing the results to be explored from different perspectives.",

      "xl.insights.title": "Key Insights",
      "xl.insights.i1.h": "Workforce Concentration",
      "xl.insights.i1.p": "Production had the largest workforce, with 209 employees, making it an important department to monitor from a workforce stability perspective.",
      "xl.insights.i2.h": "Payroll & Compensation",
      "xl.insights.i2.p": "Production recorded the highest total payroll at $12,530,291, mainly due to its larger workforce. The Executive Office had the highest average salary at $250,000.",
      "xl.insights.i3.h": "Performance",
      "xl.insights.i3.p": "Most employees were rated Fully Meets Expectations (243 employees), while 37 employees were rated Exceeds Expectations. This suggests an opportunity to focus on employee development and progression.",
      "xl.insights.i4.h": "Employee Experience",
      "xl.insights.i4.p": "Average satisfaction was 3.89/5, while average engagement was 4.11/5.",
      "xl.insights.i5.h": "Attrition",
      "xl.insights.i5.p": "The dashboard showed a 33.44% turnover rate, with 104 terminated employees, making retention an area worth further investigation.",

      "xl.rec.title": "Recommendations",
      "xl.rec.r1.h": "Review Compensation",
      "xl.rec.r1.p": "Compare salary levels across departments and review compensation for roles where pay may not be competitive.",
      "xl.rec.r2.h": "Monitor Production Workforce",
      "xl.rec.r2.p": "Given the size of the Production workforce (209 employees), regularly monitor staffing levels, performance, and workforce changes within the department.",
      "xl.rec.r3.h": "Support Employee Development",
      "xl.rec.r3.p": "Use performance results to identify development opportunities, particularly for employees rated Fully Meets Expectations, to support career growth and progression.",
      "xl.rec.r4.h": "Analyze Attrition Drivers",
      "xl.rec.r4.p": "Examine employee attrition by department, time period, and reason to better understand where retention challenges are concentrated.",

      "xl.tools.title": "Tools & Skills",
      "tag.pivottables": "PivotTables",
      "tag.pivotcharts": "PivotCharts",
      "tag.slicers": "Slicers",
      "tag.datacleaning": "Data Cleaning",
      "tag.datatransformation": "Data Transformation",
      "tag.dataanalysis": "Data Analysis",
      "tag.interactivedash": "Interactive Dashboards",
      "tag.kpidev": "KPI Development",
      "tag.analyticalreporting": "Analytical Reporting",

      "preview.title": "DASHBOARD PREVIEW",
      "xl.preview.alt1": "HR Analytics Dashboard — Executive Overview",
      "xl.preview.alt2": "HR Analytics Dashboard — Workforce Demographics & Structure",
      "xl.preview.cap2": "Workforce Demographics & Structure",
      "xl.preview.alt3": "HR Analytics Dashboard — Compensation & Salary Analysis",
      "xl.preview.cap3": "Compensation & Salary Analysis",
      "xl.preview.alt4": "HR Analytics Dashboard — Performance & Training",
      "xl.preview.cap4": "Performance & Training",
      "xl.preview.alt5": "HR Analytics Dashboard — Attrition & Retention",
      "xl.preview.cap5": "Attrition & Retention",
      "xl.download": "DOWNLOAD PROJECT FILE →",
      "cta.viewreport": "VIEW PROJECT REPORT →",

      "pbi.overview.title": "Project Overview",
      "pbi.overview.p1": "This project involved analyzing historical macroeconomic data for Saudi Arabia using Microsoft Power BI. The analysis covered 52 economic, demographic, social, financial, and development indicators sourced from the World Bank.",
      "pbi.overview.p2": "I prepared and transformed the dataset using Power Query, structured the data for analysis, and developed an interactive dashboard that allows users to select individual indicators and explore their values and historical trends over time.",
      "pbi.overview.p3": "The final dashboard provides a clear and interactive view of Saudi Arabia's macroeconomic indicators and demonstrates the use of Power BI to transform raw data into meaningful analytical insights.",

      "pbi.objective.title": "Objective",
      "pbi.objective.p1": "The objective of this project was to transform historical World Bank data into an interactive Power BI dashboard that makes Saudi Arabia's macroeconomic indicators easier to explore and interpret.",
      "pbi.objective.p2": "The analysis focused on examining changes and trends across 52 indicators over time, while enabling users to dynamically select an indicator, view its value for a selected year, and explore its historical trend.",
      "pbi.objective.p3": "The project also aimed to demonstrate a structured data analysis workflow, from data preparation and transformation in Power Query to interactive visualization in Power BI.",

      "pbi.source.title": "Data Source & Dataset",
      "pbi.source.p1": "The dataset was sourced from the World Bank and contains historical data for Saudi Arabia across multiple years.",
      "pbi.source.p2": "The dataset includes 52 indicators covering a broad range of areas, including:",
      "pbi.source.li1": "Macroeconomic indicators",
      "pbi.source.li2": "Trade and investment",
      "pbi.source.li3": "Population and demographics",
      "pbi.source.li4": "Education and health",
      "pbi.source.li5": "Energy and natural resources",
      "pbi.source.li6": "Public finance and development",
      "pbi.source.p3": "The original dataset contained indicator names alongside multiple year columns. To make the data suitable for analysis and interactive filtering in Power BI, it was transformed into a structured format using Power Query, with each record representing an indicator, year, and corresponding value.",

      "pbi.prep.title": "Data Preparation & Power Query",
      "pbi.prep.p1": "I used Power Query to prepare and transform the World Bank dataset before building the dashboard. The preparation process focused on correcting the structure and data types, removing unnecessary records and errors, and converting the dataset into a format suitable for analysis.",
      "pbi.prep.li1": "Changed data types to ensure consistency across fields.",
      "pbi.prep.li2": "Removed unnecessary bottom rows from the source data.",
      "pbi.prep.li3": "Promoted the appropriate row to column headers.",
      "pbi.prep.li4": "Replaced values where required to improve consistency.",
      "pbi.prep.li5": "Unpivoted the year columns to convert the dataset from a wide format into a structured long format.",
      "pbi.prep.li6": "Removed errors that could affect the analysis.",
      "pbi.prep.li7": "Extracted relevant text from fields where required.",
      "pbi.prep.finalstructure": "Final structure:",

      "pbi.model.title": "Data Modeling, DAX & Dashboard Development",
      "pbi.model.p1": "After preparing the dataset, I structured the data for analysis in Power BI and created DAX measures to support the interactive dashboard.",
      "pbi.model.p2": "The measures used the AVERAGE aggregation to calculate indicator values based on the selected filters. This approach was used because the dataset contains annual observations, making an average aggregation more appropriate than summing indicator values.",
      "pbi.model.p3": "The dashboard includes an Indicator Slicer that allows users to select individual indicators and dynamically explore their values and historical trends. KPI cards display the selected year and indicator value, while the main trend visualization presents the selected indicator across the available years.",
      "pbi.model.p4": "The dashboard was designed to provide a simple and interactive way to explore multiple economic and development indicators within a single analytical view.",

      "pbi.insights.title": "Key Insights",
      "pbi.insights.i1.h": "Economic Growth",
      "pbi.insights.i1.p": "GDP showed a long-term upward trend, with fluctuations across individual years. The selected 2024 GDP value was approximately $1.24 trillion.",
      "pbi.insights.i2.h": "GDP Growth",
      "pbi.insights.i2.p": "The dashboard highlighted significant year-to-year changes in GDP growth, including a value of 12.00% in 2022.",
      "pbi.insights.i3.h": "Income Levels",
      "pbi.insights.i3.p": "GNI per capita showed a generally upward movement over the available historical period. The selected 2023 value for GNI per capita, Atlas method, was approximately $36.33K.",
      "pbi.insights.i4.h": "Trade & Economic Activity",
      "pbi.insights.i4.p": "Trade-related indicators, including exports, imports, and merchandise trade, provided different perspectives on Saudi Arabia's economic activity and its relationship with international markets.",
      "pbi.insights.i5.h": "Population & Demographics",
      "pbi.insights.i5.p": "Population-related indicators showed changes in population size, growth, density, and migration over time, providing insight into demographic development.",

      "pbi.rec.title": "Recommendations",
      "pbi.rec.r1.h": "Monitor Key Economic Indicators",
      "pbi.rec.r1.p": "Continue tracking major indicators such as GDP, GDP growth, GNI, trade, inflation, and investment to identify significant changes over time.",
      "pbi.rec.r2.h": "Investigate Major Changes",
      "pbi.rec.r2.p": "Examine periods with substantial changes in individual indicators, particularly around 2020, to better understand the factors associated with these movements.",
      "pbi.rec.r3.h": "Explore Indicator Relationships",
      "pbi.rec.r3.p": "Compare related indicators to investigate potential relationships between economic activity, trade, investment, population, and development outcomes.",
      "pbi.rec.r4.h": "Expand the Analysis",
      "pbi.rec.r4.p": "Incorporate additional economic datasets and more recent observations where available to provide a broader and more up-to-date view of Saudi Arabia's economic performance.",

      "pbi.tools.title": "Tools & Skills",
      "tag.datarestructuring": "Data Restructuring",
      "tag.unpivoting": "Unpivoting",
      "tag.datamodeling": "Data Modeling",
      "tag.daxmeasures": "DAX Measures",
      "tag.averageagg": "AVERAGE Aggregation",
      "tag.kpicards": "KPI Cards",
      "tag.slicersfilter": "Slicers & Dynamic Filtering",
      "tag.trendanalysis": "Trend Analysis",
      "tag.datavisualization": "Data Visualization",

      "pbi.preview.alt": "Saudi Arabia Macroeconomic Dashboard screenshot",
      "pbi.viewreport": "VIEW POWER BI REPORT →"
    },

    ar: {
      "nav.name": "ARWA IBRAHIM ALSAIDI",
      "nav.about": "نبذة عني",
      "nav.skills": "المهارات",
      "nav.projects": "المشاريع",
      "nav.resume": "السيرة الذاتية",
      "nav.contact": "تواصل",

      "hero.name": "ARWA IBRAHIM ALSAIDI",
      "hero.title": "محللة بيانات",
      "hero.tagline": "تحليل البيانات · التصور المرئي · لوحات معلومات تفاعلية",
      "hero.cta": "عرض المشاريع ←",
      "hero.about": "عني ↓",

      "proof.projects": "مشاريع مختارة",
      "proof.indicators": "مؤشرات Power BI",
      "proof.tools": "أدوات التحليل الأساسية",
      "proof.language": "عربي / إنجليزي",

      "about.number": "01 / نبذة عني",
      "about.lede": "أنا محللة بيانات لدي اهتمام قوي بتحويل البيانات إلى رؤى واضحة ومفيدة.",
      "about.p2": "طورت خبرة عملية من خلال مشاريع شملت تنظيف البيانات وتحليلها وتصورها وتطوير لوحات معلومات تفاعلية باستخدام Microsoft Excel وPower BI.",
      "about.p3": "يعرض هذا الـPortfolio مشاريع عملية تعاملت فيها مع مجموعات بيانات واقعية، واستكشفت الأنماط والاتجاهات، وقدمت النتائج من خلال لوحات معلومات واضحة وتفاعلية.",
      "about.p4": "أواصل تطوير مهاراتي التحليلية والتقنية، وأبحث عن فرص لتطبيق هذه المهارات في بيئة مهنية.",

      "skills.number": "02 / المهارات",
      "skills.card1.title": "تحليل البيانات",
      "skills.card1.li1": "تنظيف البيانات",
      "skills.card1.li2": "تحويل البيانات",
      "skills.card1.li3": "تحليل البيانات",
      "skills.card1.li4": "تحليل الاتجاهات",
      "skills.card1.li5": "تصور البيانات",
      "skills.card2.title": "الأدوات",
      "skills.card2.li1": "Microsoft Excel",
      "skills.card2.li2": "Microsoft Power BI",
      "skills.card2.li3": "Power Query",
      "skills.card2.li4": "DAX",
      "skills.card2.li5": "PivotTables & PivotCharts",
      "skills.card3.title": "لوحات المعلومات والتقارير",
      "skills.card3.li1": "لوحات معلومات تفاعلية",
      "skills.card3.li2": "تطوير مؤشرات الأداء KPI",
      "skills.card3.li3": "PivotTables & PivotCharts",
      "skills.card3.li4": "Slicers وتصفية ديناميكية",
      "skills.card3.li5": "تقارير تحليلية",

      "projects.number": "03 / المشاريع",
      "projects.heading": "نماذج من العمل التحليلي",
      "projects.sub": "مشروعان عمليان يركزان على تنظيف البيانات وتحليلها وتصويرها وبناء تقارير تفاعلية، مع عرض كل مشروع كدراسة حالة واضحة.",
      "project1.scopeLabel": "التركيز",
      "project1.scope": "مؤشرات الموارد البشرية · القوى العاملة · دوران الموظفين",
      "project2.scopeLabel": "التركيز",
      "project2.scope": "المؤشرات الاقتصادية · الاتجاهات · المقارنات",
      "project1.tool": "Microsoft Excel",
      "project1.title": "لوحة معلومات تحليلات الموارد البشرية",
      "project1.desc": "لوحة معلومات تفاعلية للموارد البشرية تم تطويرها في Microsoft Excel لتحليل توزيع القوى العاملة، والتعويضات، والأداء، والرضا الوظيفي، والغياب، والتوظيف، ودوران الموظفين.",
      "project1.tools": "Microsoft Excel · PivotTables · PivotCharts · Slicers",
      "project1.imgalt": "لقطة شاشة من لوحة معلومات تحليلات الموارد البشرية",
      "project2.tool": "Microsoft Power BI",
      "project2.title": "لوحة معلومات المؤشرات الاقتصادية الكلية للسعودية",
      "project2.desc": "لوحة معلومات تفاعلية في Power BI تحلل 52 مؤشرًا تاريخيًا اقتصاديًا وديموغرافيًا واجتماعيًا وماليًا وتنمويًا للمملكة العربية السعودية باستخدام بيانات البنك الدولي.",
      "project2.tools": "Microsoft Power BI · Power Query · DAX · Data Modeling",
      "project2.imgalt": "لقطة شاشة من لوحة معلومات المؤشرات الاقتصادية الكلية للسعودية",

      "cta.viewcase": "عرض دراسة الحالة ←",
      "cta.back": "→ العودة إلى المشاريع",
      "cta.close": "إغلاق ✕",
      "fallback.image": "صورة معاينة لوحة المعلومات",

      "resume.number": "04 / السيرة الذاتية",
      "resume.text": "لمعرفة المزيد عن خلفيتي وخبراتي.",
      "resume.cta": "تحميل السيرة الذاتية ←",

      "contact.number": "05 / تواصل",
      "contact.heading": "لنتواصل",
      "contact.sub": "مهتمة بالعمل معًا أو مناقشة فرصة في تحليل البيانات؟",
      "contact.email": "راسلني عبر البريد ←",
      "contact.linkedin": "لينكدإن ←",

      "footer.name": "ARWA IBRAHIM ALSAIDI",
      "footer.role": "محللة بيانات",
      "footer.lang": "EN / AR",
      "footer.year": "© 2026",

      "case.label": "المشروع",

      "bignum.xl.l1": "موظف · قسم الإنتاج",
      "bignum.xl.l2": "معدل الدوران",
      "bignum.xl.l3": "متوسط الرضا الوظيفي",
      "bignum.pbi.l1": "مؤشر تم تحليله",
      "bignum.pbi.l2": "الناتج المحلي الإجمالي · 2024",
      "bignum.pbi.l3": "نمو الناتج المحلي الإجمالي · 2022",

      "flow.raw": "البيانات الخام",
      "flow.standardize": "توحيد الحقول",
      "flow.validate": "التحقق من أنواع البيانات",
      "flow.quality": "فحص جودة البيانات",
      "flow.table": "جدول Excel منظم",
      "flow.dashboard": "PivotTables + لوحة المعلومات",

      "xl.overview.title": "نظرة عامة على المشروع",
      "xl.overview.body": "تضمن هذا المشروع تحليل بيانات الموارد البشرية لفهم توزيع القوى العاملة، والتعويضات، والأداء، والرضا الوظيفي، والغياب، ودوران الموظفين. قمت بإعداد وتنظيم البيانات في Microsoft Excel واستخدمت PivotTables وPivotCharts والفلاتر التفاعلية لاستكشاف البيانات من زوايا مختلفة. ثم تم عرض التحليل من خلال لوحة معلومات تفاعلية تسلط الضوء على أبرز اتجاهات القوى العاملة والموارد البشرية التي تدعم اتخاذ القرار المبني على البيانات.",
      "xl.objective.title": "هدف المشروع",
      "xl.objective.body": "كان هدف هذا المشروع تحويل بيانات الموارد البشرية الخام إلى رؤية واضحة ومفيدة عن القوى العاملة في المؤسسة. ركز التحليل على فهم توزيع القوى العاملة، ومستويات الرواتب، والأداء، والرضا الوظيفي، والغياب، ودوران الموظفين، مع تحديد الأنماط عبر الأقسام المختلفة. تمثل الهدف النهائي في عرض هذه النتائج من خلال لوحة معلومات تفاعلية تسهّل استكشاف مؤشرات الموارد البشرية واستخدامها في اتخاذ القرار.",
      "xl.prep.title": "إعداد البيانات",
      "xl.prep.body": "بدأت بمراجعة بيانات الموارد البشرية الخام وإعدادها للتحليل. قمت بتوحيد الحقول غير المتسقة، وفصل المعلومات المجمّعة داخل الخلايا، وراجعت التواريخ والحقول النصية وقيم الرواتب للتأكد من اتساق أنواع البيانات. كما تحققت من القيم الفارغة وغير المتسقة التي قد تؤثر على التحليل. وبعد تنظيف البيانات وتنظيمها، حوّلتها إلى جدول Excel Table واستخدمته كأساس للوحة المعلومات وتحليل PivotTable.",
      "xl.analysis.title": "التحليل وتطوير لوحة المعلومات",
      "xl.analysis.body": "بعد إعداد البيانات، استخدمت Microsoft Excel لتحليل أبرز مؤشرات الموارد البشرية ومقارنة النتائج بين الأقسام. شمل التحليل توزيع القوى العاملة، ومستويات الرواتب والأجور، وتقييمات الأداء، والرضا الوظيفي والانخراط، والغياب، ومصادر التوظيف، ودوران الموظفين. استخدمت PivotTables وPivotCharts لتنظيم التحليل، وبنيت لوحة معلومات تفاعلية تضم بطاقات KPI والرسوم البيانية والفلاتر التفاعلية، مما يتيح استكشاف النتائج من زوايا مختلفة.",

      "xl.insights.title": "أبرز النتائج",
      "xl.insights.i1.h": "تركّز القوى العاملة",
      "xl.insights.i1.p": "يمتلك قسم الإنتاج أكبر عدد من الموظفين بواقع 209 موظفًا، ما يجعله قسمًا مهمًا لمتابعة استقرار القوى العاملة فيه.",
      "xl.insights.i2.h": "الرواتب والتعويضات",
      "xl.insights.i2.p": "سجّل قسم الإنتاج أعلى إجمالي للرواتب بقيمة 12,530,291 دولارًا، ويعود ذلك أساسًا إلى حجم القوى العاملة الأكبر فيه. كما سجّل المكتب التنفيذي أعلى متوسط راتب بقيمة 250,000 دولار.",
      "xl.insights.i3.h": "الأداء",
      "xl.insights.i3.p": "حصل معظم الموظفين على تقييم \"يلبي التوقعات بالكامل\" (243 موظفًا)، بينما حصل 37 موظفًا على تقييم \"يتجاوز التوقعات\"، ما يشير إلى فرصة للتركيز على تطوير الموظفين وتقدمهم الوظيفي.",
      "xl.insights.i4.h": "تجربة الموظف",
      "xl.insights.i4.p": "بلغ متوسط الرضا الوظيفي 3.89 من 5، بينما بلغ متوسط الانخراط الوظيفي 4.11 من 5.",
      "xl.insights.i5.h": "دوران الموظفين",
      "xl.insights.i5.p": "أظهرت لوحة المعلومات معدل دوران بلغ 33.44%، بواقع 104 موظفين تم إنهاء خدماتهم، ما يجعل الاحتفاظ بالموظفين مجالًا يستحق مزيدًا من الدراسة.",

      "xl.rec.title": "التوصيات",
      "xl.rec.r1.h": "مراجعة التعويضات",
      "xl.rec.r1.p": "مقارنة مستويات الرواتب بين الأقسام ومراجعة التعويضات للأدوار التي قد لا تكون رواتبها تنافسية.",
      "xl.rec.r2.h": "متابعة قوى العمل في الإنتاج",
      "xl.rec.r2.p": "نظرًا لحجم القوى العاملة في قسم الإنتاج (209 موظفين)، يُنصح بمتابعة مستويات التوظيف والأداء والتغيرات في القوى العاملة داخل القسم بانتظام.",
      "xl.rec.r3.h": "دعم تطوير الموظفين",
      "xl.rec.r3.p": "استخدام نتائج الأداء لتحديد فرص التطوير، خاصة للموظفين الحاصلين على تقييم \"يلبي التوقعات بالكامل\"، لدعم نموهم وتقدمهم الوظيفي.",
      "xl.rec.r4.h": "تحليل أسباب دوران الموظفين",
      "xl.rec.r4.p": "دراسة دوران الموظفين حسب القسم والفترة الزمنية والسبب لفهم أفضل للمجالات التي تتركز فيها تحديات الاحتفاظ بالموظفين.",

      "xl.tools.title": "الأدوات والمهارات",
      "tag.pivottables": "PivotTables",
      "tag.pivotcharts": "PivotCharts",
      "tag.slicers": "Slicers",
      "tag.datacleaning": "تنظيف البيانات",
      "tag.datatransformation": "تحويل البيانات",
      "tag.dataanalysis": "تحليل البيانات",
      "tag.interactivedash": "لوحات معلومات تفاعلية",
      "tag.kpidev": "تطوير مؤشرات الأداء KPI",
      "tag.analyticalreporting": "تقارير تحليلية",

      "preview.title": "معاينة لوحة المعلومات",
      "xl.preview.alt1": "لوحة تحليلات الموارد البشرية — النظرة التنفيذية العامة",
      "xl.preview.alt2": "لوحة تحليلات الموارد البشرية — الخصائص الديموغرافية وهيكل القوى العاملة",
      "xl.preview.cap2": "الخصائص الديموغرافية وهيكل القوى العاملة",
      "xl.preview.alt3": "لوحة تحليلات الموارد البشرية — تحليل التعويضات والرواتب",
      "xl.preview.cap3": "تحليل التعويضات والرواتب",
      "xl.preview.alt4": "لوحة تحليلات الموارد البشرية — الأداء والتدريب",
      "xl.preview.cap4": "الأداء والتدريب",
      "xl.preview.alt5": "لوحة تحليلات الموارد البشرية — دوران الموظفين والاحتفاظ بهم",
      "xl.preview.cap5": "دوران الموظفين والاحتفاظ بهم",
      "xl.download": "تحميل ملف المشروع ←",
      "cta.viewreport": "عرض تقرير المشروع ←",

      "pbi.overview.title": "نظرة عامة على المشروع",
      "pbi.overview.p1": "تضمن هذا المشروع تحليل بيانات تاريخية للمؤشرات الاقتصادية الكلية للمملكة العربية السعودية باستخدام Microsoft Power BI. شمل التحليل 52 مؤشرًا اقتصاديًا وديموغرافيًا واجتماعيًا وماليًا وتنمويًا مستمدة من البنك الدولي.",
      "pbi.overview.p2": "قمت بإعداد وتحويل مجموعة البيانات باستخدام Power Query، ونظّمت البيانات للتحليل، وطوّرت لوحة معلومات تفاعلية تتيح للمستخدمين اختيار مؤشر معين واستكشاف قيمته واتجاهاته التاريخية عبر الزمن.",
      "pbi.overview.p3": "توفر لوحة المعلومات النهائية رؤية واضحة وتفاعلية للمؤشرات الاقتصادية الكلية للسعودية، وتُظهر كيفية استخدام Power BI لتحويل البيانات الخام إلى رؤى تحليلية ذات معنى.",

      "pbi.objective.title": "الهدف",
      "pbi.objective.p1": "كان هدف هذا المشروع تحويل بيانات البنك الدولي التاريخية إلى لوحة معلومات تفاعلية في Power BI تسهّل استكشاف وتفسير المؤشرات الاقتصادية الكلية للسعودية.",
      "pbi.objective.p2": "ركز التحليل على دراسة التغيرات والاتجاهات عبر 52 مؤشرًا مع مرور الزمن، مع تمكين المستخدمين من اختيار مؤشر معين بشكل ديناميكي، ومشاهدة قيمته لسنة محددة، واستكشاف اتجاهه التاريخي.",
      "pbi.objective.p3": "هدف المشروع أيضًا إلى توضيح منهجية عمل منظمة لتحليل البيانات، بدءًا من إعداد البيانات وتحويلها في Power Query وصولًا إلى التصور التفاعلي في Power BI.",

      "pbi.source.title": "مصدر البيانات ومجموعة البيانات",
      "pbi.source.p1": "تم الحصول على مجموعة البيانات من البنك الدولي، وتحتوي على بيانات تاريخية للمملكة العربية السعودية عبر سنوات متعددة.",
      "pbi.source.p2": "تضم مجموعة البيانات 52 مؤشرًا تغطي مجالات متنوعة، منها:",
      "pbi.source.li1": "المؤشرات الاقتصادية الكلية",
      "pbi.source.li2": "التجارة والاستثمار",
      "pbi.source.li3": "السكان والديموغرافيا",
      "pbi.source.li4": "التعليم والصحة",
      "pbi.source.li5": "الطاقة والموارد الطبيعية",
      "pbi.source.li6": "المالية العامة والتنمية",
      "pbi.source.p3": "كانت مجموعة البيانات الأصلية تحتوي على أسماء المؤشرات إلى جانب أعمدة متعددة للسنوات. ولجعل البيانات مناسبة للتحليل والتصفية التفاعلية في Power BI، تم تحويلها إلى صيغة منظمة باستخدام Power Query، بحيث يمثل كل سجل مؤشرًا وسنة وقيمة مقابلة له.",

      "pbi.prep.title": "إعداد البيانات وPower Query",
      "pbi.prep.p1": "استخدمت Power Query لإعداد وتحويل بيانات البنك الدولي قبل بناء لوحة المعلومات. ركزت عملية الإعداد على تصحيح البنية وأنواع البيانات، وإزالة السجلات والأخطاء غير الضرورية، وتحويل مجموعة البيانات إلى صيغة مناسبة للتحليل.",
      "pbi.prep.li1": "تغيير أنواع البيانات لضمان الاتساق عبر الحقول.",
      "pbi.prep.li2": "إزالة الصفوف السفلية غير الضرورية من البيانات المصدرية.",
      "pbi.prep.li3": "ترقية الصف المناسب ليصبح رؤوس أعمدة.",
      "pbi.prep.li4": "استبدال القيم عند الحاجة لتحسين الاتساق.",
      "pbi.prep.li5": "إلغاء تدوير أعمدة السنوات لتحويل البيانات من صيغة عريضة إلى صيغة طويلة منظمة.",
      "pbi.prep.li6": "إزالة الأخطاء التي قد تؤثر على التحليل.",
      "pbi.prep.li7": "استخراج النصوص ذات الصلة من الحقول عند الحاجة.",
      "pbi.prep.finalstructure": "البنية النهائية:",

      "pbi.model.title": "نمذجة البيانات وDAX وتطوير لوحة المعلومات",
      "pbi.model.p1": "بعد إعداد مجموعة البيانات، قمت بتنظيم البيانات للتحليل في Power BI وأنشأت مقاييس DAX لدعم لوحة المعلومات التفاعلية.",
      "pbi.model.p2": "استخدمت المقاييس دالة التجميع AVERAGE لحساب قيم المؤشرات بناءً على الفلاتر المحددة. تم اعتماد هذا الأسلوب لأن البيانات تمثل مشاهدات سنوية، ما يجعل استخدام المتوسط أكثر ملاءمة من جمع قيم المؤشرات.",
      "pbi.model.p3": "تضم لوحة المعلومات فلتر مؤشرات (Indicator Slicer) يتيح للمستخدمين اختيار مؤشر معين واستكشاف قيمته واتجاهاته التاريخية بشكل ديناميكي. تعرض بطاقات KPI السنة والقيمة المختارة للمؤشر، بينما يعرض الرسم البياني الرئيسي اتجاه المؤشر المختار عبر السنوات المتاحة.",
      "pbi.model.p4": "صُممت لوحة المعلومات لتوفير طريقة بسيطة وتفاعلية لاستكشاف عدة مؤشرات اقتصادية وتنموية ضمن عرض تحليلي واحد.",

      "pbi.insights.title": "أبرز النتائج",
      "pbi.insights.i1.h": "النمو الاقتصادي",
      "pbi.insights.i1.p": "أظهر الناتج المحلي الإجمالي اتجاهًا تصاعديًا على المدى الطويل، مع تذبذبات في سنوات فردية. بلغت القيمة المختارة للناتج المحلي الإجمالي لعام 2024 نحو 1.24 تريليون دولار.",
      "pbi.insights.i2.h": "نمو الناتج المحلي الإجمالي",
      "pbi.insights.i2.p": "أبرزت لوحة المعلومات تغيرات ملحوظة من سنة إلى أخرى في نمو الناتج المحلي الإجمالي، بما في ذلك قيمة بلغت 12.00% في عام 2022.",
      "pbi.insights.i3.h": "مستويات الدخل",
      "pbi.insights.i3.p": "أظهر نصيب الفرد من الدخل القومي الإجمالي اتجاهًا تصاعديًا بشكل عام خلال الفترة التاريخية المتاحة. بلغت القيمة المختارة لعام 2023 لنصيب الفرد من الدخل القومي الإجمالي (بطريقة أطلس) نحو 36.33 ألف دولار.",
      "pbi.insights.i4.h": "التجارة والنشاط الاقتصادي",
      "pbi.insights.i4.p": "وفّرت المؤشرات المرتبطة بالتجارة، بما في ذلك الصادرات والواردات والتجارة السلعية، زوايا مختلفة لفهم النشاط الاقتصادي للسعودية وعلاقتها بالأسواق الدولية.",
      "pbi.insights.i5.h": "السكان والديموغرافيا",
      "pbi.insights.i5.p": "أظهرت المؤشرات السكانية تغيرات في حجم السكان ومعدل النمو والكثافة والهجرة عبر الزمن، ما يوفر رؤية حول التطور الديموغرافي.",

      "pbi.rec.title": "التوصيات",
      "pbi.rec.r1.h": "متابعة المؤشرات الاقتصادية الرئيسية",
      "pbi.rec.r1.p": "الاستمرار في متابعة المؤشرات الرئيسية مثل الناتج المحلي الإجمالي ونموه والدخل القومي والتجارة والتضخم والاستثمار لتحديد التغيرات المهمة مع مرور الوقت.",
      "pbi.rec.r2.h": "دراسة التغيرات الكبرى",
      "pbi.rec.r2.p": "فحص الفترات التي شهدت تغيرات كبيرة في المؤشرات الفردية، وخاصة حول عام 2020، لفهم أفضل للعوامل المرتبطة بهذه التغيرات.",
      "pbi.rec.r3.h": "استكشاف العلاقات بين المؤشرات",
      "pbi.rec.r3.p": "مقارنة المؤشرات المترابطة لاستكشاف العلاقات المحتملة بين النشاط الاقتصادي والتجارة والاستثمار والسكان ونتائج التنمية.",
      "pbi.rec.r4.h": "توسيع نطاق التحليل",
      "pbi.rec.r4.p": "دمج مجموعات بيانات اقتصادية إضافية ومشاهدات أحدث عند توفرها لتقديم رؤية أوسع وأحدث لأداء الاقتصاد السعودي.",

      "pbi.tools.title": "الأدوات والمهارات",
      "tag.datarestructuring": "إعادة هيكلة البيانات",
      "tag.unpivoting": "إلغاء التدوير (Unpivoting)",
      "tag.datamodeling": "نمذجة البيانات",
      "tag.daxmeasures": "مقاييس DAX",
      "tag.averageagg": "تجميع AVERAGE",
      "tag.kpicards": "بطاقات KPI",
      "tag.slicersfilter": "Slicers وتصفية ديناميكية",
      "tag.trendanalysis": "تحليل الاتجاهات",
      "tag.datavisualization": "تصور البيانات",

      "pbi.preview.alt": "لقطة شاشة من لوحة معلومات المؤشرات الاقتصادية الكلية للسعودية",
      "pbi.viewreport": "عرض تقرير Power BI ←"
    }
  };

  var STORAGE_KEY = "arwa-portfolio-lang";
  var htmlEl = document.documentElement;

  function getStoredLang() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function storeLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function applyLang(lang) {
    lang = lang || htmlEl.getAttribute("lang") || "en";
    var dict = translations[lang] || translations.en;

    htmlEl.setAttribute("lang", lang);
    htmlEl.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll("[data-lang-opt]").forEach(function (el) {
      var opt = el.getAttribute("data-lang-opt");
      el.classList.toggle("is-active", opt === lang);
    });

    document.title = lang === "ar"
      ? "أروى إبراهيم السعيدي — محللة بيانات"
      : "Arwa Ibrahim Alsaidi — Data Analyst";
  }
  window.applyLang = applyLang;

  function toggleLang() {
    var current = htmlEl.getAttribute("lang") || "en";
    var next = current === "en" ? "ar" : "en";
    storeLang(next);
    applyLang(next);
  }

  document.addEventListener("DOMContentLoaded", function () {

    /* ---------- Init language ---------- */
    var savedLang = getStoredLang() || "en";
    applyLang(savedLang);

    var langBtnDesktop = document.getElementById("langToggleDesktop");
    var langBtnMobile = document.getElementById("langToggleMobile");
    if (langBtnDesktop) langBtnDesktop.addEventListener("click", toggleLang);
    if (langBtnMobile) langBtnMobile.addEventListener("click", toggleLang);

    /* ---------- Mobile menu ---------- */
    var navToggle = document.getElementById("navToggle");
    var mobileMenu = document.getElementById("mobileMenu");
    if (navToggle && mobileMenu) {
      navToggle.addEventListener("click", function () {
        var isOpen = mobileMenu.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
        document.body.style.overflow = isOpen ? "hidden" : "";
      });
      mobileMenu.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          mobileMenu.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        });
      });
    }

    /* ---------- Reveal on scroll ---------- */
    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }

    /* ---------- Case studies ---------- */
    var caseMap = {
      excel: document.getElementById("caseExcel"),
      powerbi: document.getElementById("casePowerbi")
    };
    var lastFocused = null;

    function openCase(key) {
      var panel = caseMap[key];
      if (!panel) return;
      lastFocused = document.activeElement;
      panel.classList.add("is-open");
      panel.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      panel.scrollTop = 0;
      var backBtn = panel.querySelector("[data-close-case]");
      if (backBtn) backBtn.focus();
    }

    function closeCase(panel) {
      panel.classList.remove("is-open");
      panel.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
      }
    }

    document.querySelectorAll("[data-open-case]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openCase(btn.getAttribute("data-open-case"));
      });
    });

    document.querySelectorAll("[data-close-case]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var panel = btn.closest(".case-study");
        closeCase(panel);
        var projectsSection = document.getElementById("projects");
        if (projectsSection) projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    /* ---------- Lightbox ---------- */
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightboxImg");
    var lightboxClose = document.getElementById("lightboxClose");

    function openLightbox(src, alt) {
      if (!lightbox || !src) return;
      lightboxImg.src = src;
      lightboxImg.alt = alt || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
    }
    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImg.src = "";
    }

    /* تحسين إدارة حدث الكيبورد للإغلاق عبر Escape بشكل منظم */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (lightbox && lightbox.classList.contains("is-open")) {
          closeLightbox();
        } else {
          Object.keys(caseMap).forEach(function (key) {
            var panel = caseMap[key];
            if (panel && panel.classList.contains("is-open")) closeCase(panel);
          });
        }
      }
    });

    document.querySelectorAll(".preview-hero-img img, .preview-grid img").forEach(function (img) {
      img.addEventListener("click", function () {
        openLightbox(img.currentSrc || img.src, img.alt);
      });
      img.setAttribute("tabindex", "0");
      img.setAttribute("role", "button");
      img.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(img.currentSrc || img.src, img.alt);
        }
      });
    });
    if (lightboxClose) {
      lightboxClose.setAttribute("tabindex", "0");
      lightboxClose.addEventListener("click", closeLightbox);
    }
    if (lightbox) {
      lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) closeLightbox();
      });
    }

    /* ---------- Navbar background on scroll ---------- */
    var navbar = document.querySelector(".navbar");
    function onScroll() {
      if (!navbar) return;
      navbar.style.boxShadow = window.scrollY > 8 ? "0 1px 0 rgba(0,0,0,0.02)" : "none";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  });
})();
