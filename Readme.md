# 🧪 Software Quality Assurance (SQA) Lifecycle Implementation

## 📌 Overview

This repository contains the complete implementation of the **Software Quality Assurance (SQA) Continuous Assessment Labs** for my Master's Degree Programme.

The project demonstrates a **full Software Quality Assurance lifecycle**, covering testing, version control, release management, and performance validation using industry-standard tools and workflows.

The labs simulate a **real-world banking software development environment**, applying professional engineering practices throughout the development lifecycle.

---

# 🎯 Purpose of the Repository

This repository was created to demonstrate practical implementation of **Software Quality Assurance principles** including:

✅ Unit Testing

✅ Integration Testing

✅ Version Control & Configuration Management

✅ Git Branching Strategy (GitFlow Simulation)

✅ Release Management & Version Tagging

✅ Performance & Load Testing

The project showcases how **testing, version control, and performance validation integrate within a real software development workflow**.

---

# 🧱 Repository Structure

```
.
├── Lab01/                     # Unit Testing – Banking Fee Calculator
├── Lab02/                     # Integration Testing – Customer Onboarding System
├── Lab03/                     # Git Fundamentals – Repository Management
├── Lab04/                     # GitFlow Branching – Release Simulation
├── Lab05/                     # JMeter Performance Testing
├── Lab06/                     # Capstone – Full SQA Workflow
│
├── README.md
│
├── main                       # Stable production branch
├── develop                    # Integration branch
├── lab01                      # Lab 01 implementation branch
├── lab02                      # Lab 02 implementation branch
├── lab03                      # Lab 03 implementation branch
```

Each lab progressively introduces **deeper SQA practices**, culminating in a **capstone project integrating all previous concepts**.

---

# 🧪 Lab Breakdown

## 🔹 Lab 01 – Unit Testing

Implementation of a **banking fee calculator module** validated through structured unit testing.

### Key Concepts

* Component-level testing
* Boundary value analysis
* Exception handling
* Defensive programming

### Tools

* Node.js
* Jest

📍 **Focus:** Functional correctness of isolated components.

---

## 🔹 Lab 02 – Integration Testing

Testing interactions between multiple modules within a **customer onboarding system**.

### Key Concepts

* Module interaction validation
* End-to-end behavior testing
* Error propagation analysis

📍 **Focus:** System behavior across integrated components.

---

## 🔹 Lab 03 – Git Fundamentals

Introduction to **professional version control practices**.

### Activities

* Repository initialization
* Commit management
* Branch creation
* Merge operations
* Git history visualization

📍 **Focus:** Source code management discipline.

---

## 🔹 Lab 04 – GitFlow Branching Strategy

Simulation of an **enterprise GitFlow workflow** used in banking software releases.

### Activities

* Feature branch development
* Integration into `develop`
* Release branch creation
* Production merge into `main`
* Version tagging

📍 **Focus:** Structured release management.

---

## 🔹 Lab 05 – Performance Testing (JMeter)

Load testing of a simulated service using **Apache JMeter**.

### Activities

* Load testing with concurrent users
* Ramp-up configuration
* Performance monitoring
* Result analysis

📍 **Focus:** System performance and scalability.

---

## 🔹 Lab 06 – Capstone: Full SQA Workflow

The capstone lab integrates **all previous labs** into a complete SQA pipeline.

### Implementation

A **Loan Calculator Banking Module** implementing:

* Monthly loan payment calculation
* Total interest computation
* Loan eligibility validation
* Amortization schedule generation

### Quality Assurance Process

1️⃣ Feature development
2️⃣ Unit testing
3️⃣ Integration testing
4️⃣ GitFlow release management
5️⃣ Performance testing using JMeter

📍 **Focus:** Complete SQA lifecycle simulation.

---

# 🔀 Branching Strategy

This repository follows a **structured GitFlow-inspired workflow**.

```
main
 └── develop
      ├── lab01
      ├── lab02
      ├── lab03
      ├── lab04
      ├── lab05
      └── lab06
```

### Branch Roles

| Branch    | Purpose                      |
| --------- | ---------------------------- |
| `main`    | Production-ready stable code |
| `develop` | Integration branch           |
| `labXX`   | Lab implementation branches  |

This approach reflects **professional source control practices used in enterprise development teams**.

---

# 🏷 Versioning Strategy

Semantic Versioning is used for releases.

```
vMAJOR.MINOR.PATCH
```

Example:

```
v1.0.0_[MATRICULE]
```

This tag represents the **final capstone release after completing the full SQA workflow**.

---

# 🛠 Technologies Used

| Category             | Tools                |
| -------------------- | -------------------- |
| Programming Language | Node.js (JavaScript) |
| Testing Framework    | Jest                 |
| Version Control      | Git                  |
| Repository Hosting   | GitHub               |
| Performance Testing  | Apache JMeter        |
| Local Server         | Node HTTP Server     |

All tools used are **open-source and free**, as required by the course guidelines.

---

# 🚀 Learning Outcomes

This project demonstrates the ability to:

* Implement structured **unit and integration testing**
* Apply **professional Git version control workflows**
* Manage **feature development using GitFlow**
* Simulate **enterprise software release cycles**
* Conduct **performance testing and analysis**
* Maintain **clean, documented, and testable code**

---

# 📚 Academic Context

This repository was developed as part of the **Software Quality Assurance (SQA) Continuous Assessment practical labs** for the Master's Degree Programme.

The assessment emphasizes **hands-on engineering practices** aligned with real-world software quality processes.

---

# 👨🏽‍💻 Author

## Kanjo Elkamira Ndi

Master of Technology (MTech)
Software Engineering

**Software Quality Assurance – Continuous Assessment Implementation**

---