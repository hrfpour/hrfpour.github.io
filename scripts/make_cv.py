#!/usr/bin/env python3
"""Generate a sample one-page CV PDF for the template preview."""
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
    return y - 6.4 * mm


def body(text, y, font="Helvetica", size=9.6, leading=4.6 * mm, color=GRAY, indent=0):
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
c.drawString(M + 8 * mm, y - 18.5 * mm, "Data Scientist  |  M.Sc. Student in Computer Science  |  ML Researcher")
c.setFont("Helvetica", 8.8)
c.drawString(M + 8 * mm, y - 23.6 * mm, "contact@farhadipour.com   .   farhadipour.com   .   github.com/hrfpour   .   Tehran, Iran")
y -= 36 * mm

# ---------------- Summary ----------------
y = heading("Summary", y)
y = body(
    "Data Scientist and M.Sc. student in Computer Science focused on network traffic analysis, "
    "time-series modeling, and anomaly detection. Experienced with Python, scikit-learn, PyTorch, "
    "and building interactive analytics dashboards. Passionate about interpretable machine learning "
    "and bridging the gap between raw data and actionable insight.",
    y,
)
y -= 3 * mm

# ---------------- Education ----------------
y = heading("Education", y)
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 10)
c.drawString(M, y, "M.Sc. in Computer Science - University of Tehran")
c.setFillColor(GRAY)
c.setFont("Helvetica", 8.8)
c.drawRightString(W - M, y, "2023 - Present")
y -= 4.6 * mm
y = bullet("Focus: Data Science & Machine Learning", y)
y = bullet("Thesis: Deep learning approaches for anomaly detection in high-volume network traffic", y)
y -= 1.6 * mm
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 10)
c.drawString(M, y, "B.Sc. in Computer Science - University of Isfahan")
c.setFillColor(GRAY)
c.setFont("Helvetica", 8.8)
c.drawRightString(W - M, y, "2019 - 2023")
y -= 4.6 * mm
y = bullet("Final project: real-time network traffic classification with ML", y)
y -= 3 * mm

# ---------------- Experience ----------------
y = heading("Experience", y)
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 10)
c.drawString(M, y, "Graduate Research Assistant - Data Science Lab, University of Tehran")
c.setFillColor(GRAY)
c.setFont("Helvetica", 8.8)
c.drawRightString(W - M, y, "2024 - Present")
y -= 4.6 * mm
y = bullet("Leading research on ML-based anomaly detection for network telemetry.", y)
y = bullet("Co-authoring journal & conference papers; maintaining benchmark suite.", y)
y -= 1.6 * mm
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 10)
c.drawString(M, y, "Data Science Intern - Tech Startup, Tehran")
c.setFillColor(GRAY)
c.setFont("Helvetica", 8.8)
c.drawRightString(W - M, y, "Summer 2023")
y -= 4.6 * mm
y = bullet("Built churn-prediction and reporting pipelines; automated KPI dashboards (-70% manual work).", y)
y -= 3 * mm

# ---------------- Publications (sample) ----------------
y = heading("Publications (sample)", y)
y = bullet("Statistical and Deep Learning Approaches for Anomaly Detection in High-Frequency Network Traffic - under review, 2025.", y)
y = bullet("LSTM-Based Sequential Modeling for Real-Time Intrusion Detection - CSICC, 2024.", y)
y = bullet("Interpretable Time-Series Anomaly Scoring with Attention - arXiv preprint, 2024.", y)
y -= 3 * mm

# ---------------- Skills ----------------
y = heading("Skills", y)
y = bullet("Languages & Core: Python, SQL, R, Bash, Git", y)
y = bullet("ML / DL: scikit-learn, XGBoost, PyTorch, TensorFlow, LSTM, Anomaly Detection", y)
y = bullet("Data & Viz: Pandas, NumPy, Plotly, Matplotlib, Streamlit, Jupyter", y)
y = bullet("Tools: Linux, Docker, PostgreSQL, FastAPI, LaTeX", y)

c.setFillColor(GRAY)
c.setFont("Helvetica-Oblique", 7.6)
c.drawCentredString(W / 2, 10 * mm, "Sample CV generated for template preview - replace content with real data.")

c.save()
print("CV saved:", OUT)
