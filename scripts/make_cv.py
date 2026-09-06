#!/usr/bin/env python3
"""Generate the one-page CV PDF for farhadipour.com (English version)."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.lib.utils import simpleSplit
import os

OUT = "/home/z/my-project/public/cv/hamidreza-farhadipour-cv.pdf"
os.makedirs(os.path.dirname(OUT), exist_ok=True)

EMERALD = HexColor("#0e8a6b")
DARK = HexColor("#17322b")
GRAY = HexColor("#4b5c58")

W, H = A4

c = canvas.Canvas(OUT, pagesize=A4)

M = 18 * mm
y = H - M


def wrap(text, font, size, width):
    return simpleSplit(text, font, size, width)


def heading(text, y):
    c.setFillColor(EMERALD)
    c.setFont("Helvetica-Bold", 11.5)
    c.drawString(M, y, text.upper())
    y -= 3.2 * mm
    c.setStrokeColor(EMERALD)
    c.setLineWidth(1.2)
    c.line(M, y, W - M, y)
    return y - 5.6 * mm


def body(text, y, font="Helvetica", size=9.6, leading=4.2 * mm, color=GRAY, indent=0):
    c.setFillColor(color)
    c.setFont(font, size)
    for line in wrap(text, font, size, W - 2 * M - indent):
        c.drawString(M + indent, y, line)
        y -= leading
    return y


def bullet(text, y, indent=4 * mm):
    c.setFillColor(EMERALD)
    c.circle(M + indent - 2.6 * mm, y + 1.2 * mm, 0.9 * mm, stroke=0, fill=1)
    return body(text, y, indent=indent + 1.2 * mm)


# ---------------- Header ----------------
c.setFillColor(EMERALD)
c.roundRect(M, y - 26 * mm, W - 2 * M, 30 * mm, 4 * mm, stroke=0, fill=1)
c.setFillColor(HexColor("#ffffff"))
c.setFont("Helvetica-Bold", 21)
c.drawString(M + 8 * mm, y - 11.5 * mm, "Hamidreza Farhadipour")
c.setFont("Helvetica", 10.5)
c.drawString(M + 8 * mm, y - 18.5 * mm, "Data Scientist  |  M.Sc. Student in Data Science  |  B.Sc. in Statistics")
c.setFont("Helvetica", 8.8)
c.drawString(M + 8 * mm, y - 23.6 * mm, "hrfpour@gmail.com   .   farhadipour.com   .   github.com/hrfpour   .   Tehran, Iran")
y -= 36 * mm

# ---------------- Summary ----------------
y = heading("Summary", y)
y = body(
    "M.Sc. Data Science student and B.Sc. Statistics graduate (Allameh Tabataba'i University, GPA 18.74/20), "
    "relying on statistical inference and predictive modeling to solve data-driven problems. Hands-on research "
    "experience in advanced statistical analysis, machine learning, and deep learning — running the full "
    "data-analysis cycle from missing-data handling to feature engineering, training, evaluation, and model "
    "interpretation. Thesis: enhancing reliability in traffic forecasting by integrating spatio-temporal graph "
    "neural networks with Bayesian approaches.",
    y,
)
y -= 2.4 * mm

# ---------------- Education ----------------
y = heading("Education", y)
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 10)
c.drawString(M, y, "M.Sc. in Data Science - Allameh Tabataba'i University (ATU), Tehran")
c.setFillColor(GRAY)
c.setFont("Helvetica", 8.8)
c.drawRightString(W - M, y, "Oct 2024 - Present")
y -= 4.6 * mm
y = bullet("GPA: 18.74 / 20", y)
y = bullet("Thesis: Enhancing reliability in traffic forecasting by integrating spatio-temporal graph neural networks with Bayesian approaches", y)
y -= 1.6 * mm
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 10)
c.drawString(M, y, "B.Sc. in Statistics - Allameh Tabataba'i University (ATU), Tehran")
c.setFillColor(GRAY)
c.setFont("Helvetica", 8.8)
c.drawRightString(W - M, y, "Sep 2019 - Jul 2024")
y -= 4.6 * mm
y = bullet("GPA: 15.98 / 20  |  Core coursework: statistical inference, regression analysis, data mining, machine learning", y)
y -= 2.4 * mm

# ---------------- Experience ----------------
y = heading("Experience", y)
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 10)
c.drawString(M, y, "Teaching Assistant - Allameh Tabataba'i University (ATU), Tehran")
c.setFillColor(GRAY)
c.setFont("Helvetica", 8.8)
c.drawRightString(W - M, y, "Graduate studies")
y -= 4.6 * mm
y = bullet("Programming with R - led hands-on R sessions, reviewed assignments, and supported students with data manipulation, visualization, and statistical computing.", y)
y = bullet("Sampling Methods - prepared exercises on sampling designs (simple random, stratified, cluster) and estimation, and graded coursework.", y)
y -= 2.4 * mm

# ---------------- Selected Projects ----------------
y = heading("Selected Projects", y)
y = bullet("Time-Series Modeling & Forecasting - ARIMA/SARIMA selection, diagnostics, accuracy benchmarking (Dr. Salehirad, Jan 2024).", y)
y = bullet("Hybrid SQL + NoSQL Database Architecture - workload-to-store mapping and cross-store query benchmarking (Dr. Shiri, Jan 2025).", y)
y = bullet("Comprehensive Data Analysis - clustering & classification pipeline with missing-data handling (Dr. Rezaie Tabar, Feb 2025).", y)
y = bullet("Bayesian Email Spam Detection - Multinomial Naive Bayes with TF-IDF features (Dr. Eskandari, Nov 2025).", y)
y = bullet("Pistachio Image Classification - transfer learning with modern CNN architectures (Dr. Moein, Dec 2025).", y)
y = bullet("Evolutionary vs. Swarm Algorithms - GA and PSO implemented from scratch and benchmarked (Dr. Shahbeik, Jan 2026).", y)
y -= 2.4 * mm

# ---------------- Skills ----------------
y = heading("Skills", y)
y = bullet("Programming & Databases: Python (Pandas, NumPy), R, SQL, SPSS, Git & GitHub, Jupyter, LaTeX", y)
y = bullet("ML / DL: Scikit-learn, PyTorch, PyTorch Geometric (GNNs), CNNs & transfer learning, ARIMA/SARIMA, Naive Bayes & ensembles", y)
y = bullet("Statistics & Data Mining: inference, hypothesis testing, clustering & classification, feature engineering", y)
y = bullet("Data Engineering & Viz: SQL/DBMS, MongoDB (NoSQL), missing-data handling, Matplotlib, Plotly, ggplot2", y)

# ---------------- Certificates ----------------
y = heading("Certificates", y)
y = bullet("International: Machine Learning Specialization (DeepLearning.AI & Stanford Online) | Data Analysis with Python (IBM) | SQL for Data Science (UC Davis) - Coursera; ML Track (Kaggle Learn)", y)
y = bullet("University: Machine Learning & Data Mining course certificates (ATU) | Advanced Python (Sharif University of Technology - Maktabkhooneh)", y)

# ---------------- Languages ----------------
y = heading("Languages", y)
y = bullet("Persian (native)  .  Azerbaijani Turkish (native)  .  English (professional working proficiency)", y)

c.setFillColor(GRAY)
c.setFont("Helvetica-Oblique", 7.6)
c.drawCentredString(W / 2, 10 * mm, "farhadipour.com  -  hrfpour@gmail.com")

c.save()
print("CV saved:", OUT)
print("Final y position (mm):", round(y / mm, 1), "(page bottom margin at", round(M / mm, 1), ")")
