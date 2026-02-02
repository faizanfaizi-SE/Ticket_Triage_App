# Ticket_Triage_App

Ticket_Triage_App is an intelligent ticket triage system that automatically classifies incoming tickets based on their **title** and **description** using a machine learning model. It helps support teams efficiently categorize tickets into:

- **Complaint**
- **Request**
- **Sales**
- **Other**

The frontend is built using **Next.js**, while the backend is powered by **FastAPI** with machine learning integration.

---

## Features

- Automatically classify tickets using ML
- Categorizes tickets into Complaint, Request, Sales, or Other
- Modern, responsive frontend using Next.js
- Backend API built with FastAPI
- Easy to extend and maintain

---

## Tech Stack

- **Frontend:** Next.js (React framework)  
- **Backend:** FastAPI (Python)  
- **Machine Learning:** Python (scikit-learn / any ML library used)  
- **Database:** [Specify e.g., SQLite, PostgreSQL, MongoDB]  
- **Version Control:** Git & GitHub  

---


---

## Getting Started

### Prerequisites

- Git  
- Python 3.9+  
- Node.js 18+  
- [Database if any]

### Installation

1. **Clone the repository**
```bash
git clone git@github.com:faizanfaizi-SE/Ticket_Triage_App.git
cd Ticket_Triage_App


Setup

cd backend
# Create virtual environment
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt

# Run FastAPI server
uvicorn main:app --reload

For Frontend
cd ../frontend
npm install
npm run dev

## Model Evaluation Metrics

The machine learning model (Logistic Regression with TF-IDF features) was evaluated on the training dataset.  

- **Model:** Logistic Regression  
- **Feature Extraction:** TF-IDF Vectorizer  
- **Labels:** Complaint, Request, Sales, Other  

### Metrics

The model achieved perfect performance on the training dataset:

| Metric    | Score |
|-----------|-------|
| F1-Score  | 1.0   |

### Confusion Matrix

The confusion matrix of the model predictions:

| Actual \ Predicted | Complaint | Request | Sales | Other |
|-------------------|-----------|--------|-------|-------|
| Complaint          | 10        | 0      | 0     | 0     |
| Request            | 0         | 8      | 0     | 0     |
| Sales              | 0         | 0      | 10    | 0     |
| Other              | 0         | 0      | 0     | 10    |

> ✅ Interpretation: All classes were correctly predicted on the training dataset.  
> ⚠️ Note: These metrics are based on the training dataset. Performance on real-world or unseen data may vary.

---

**Usage in Project:**  
- The trained model is saved as `ml/model.pkl`  
- The vectorizer is saved as `ml/vectroizer.pkl`  
- During ticket submission, the backend loads these files to classify new tickets into **Complaint, Request, Sales, or Other**

