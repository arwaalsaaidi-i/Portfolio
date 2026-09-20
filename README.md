# Arwa Ibrahim Alsaaidi — Data Analyst Portfolio

Static single-page site. No build step — works directly on GitHub Pages.

## Structure
```
index.html
style.css
script.js
images/
projects/
```

## Before going live, add:

**Images** (`images/`) — the site already renders a clean placeholder if a file is missing, so nothing breaks in the meantime:
- hr-dashboard-overview.png
- hr-dashboard-demographics.png
- hr-dashboard-compensation.png
- hr-dashboard-performance.png
- hr-dashboard-attrition.png
- powerbi-dashboard.png

**Excel file** (`projects/`):
- HR-Analytics-Dashboard.xlsx

**Links** — replace these placeholders in `index.html`:
- `RESUME_URL` — link to the downloadable CV
- `EMAIL_URL` — e.g. `mailto:name@example.com`
- `LINKEDIN_URL` — LinkedIn profile URL
- `POWER_BI_REPORT_URL` — published Power BI report link
- `EXCEL_PROJECT_REPORT_URL` — PDF project report for the HR Analytics Dashboard case study (opens in a new tab)
- `POWERBI_PROJECT_REPORT_URL` — PDF project report for the Saudi Arabia Macroeconomic Dashboard case study (opens in a new tab)

## Language
English/Arabic toggle in the navbar switches the whole page (including RTL layout) and remembers the choice via `localStorage`. Default language is English.
