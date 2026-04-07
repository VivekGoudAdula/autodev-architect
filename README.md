# AutoDev Architect

> **This agent does not generate suggestions. It produces engineering decisions backed by measurable repository data.**

AutoDev Architect is an **enterprise-grade AI system** for system-level repository analysis and decision-making. It evaluates software like a **Staff Engineer**—identifying risks, prioritizing improvements, and guiding execution.

---

## 🔴 What This Does (10 sec)
- **Empirical Analysis**: Scans repositories using a custom static analysis engine (`repo-analyzer.js`).
- **Risk Detection**: Identifies critical vulnerabilities, architectural hotspots, and performance bottlenecks.
- **Explainable Scoring**: Generates a 0–10 Code Maturity Score backed by raw data, not AI intuition.
- **Actionable Roadmaps**: Builds prioritized execution plans based on ROI (Impact vs. Effort).

## ⚙️ How It Works (20 sec)
1. **Extraction**: The `repo-analyzer.js` tool extracts metrics (complexity, dependencies, issues).
2. **Analysis**: Specialized agents (`architecture-agent`, `risk-agent`) evaluate the data against defined `knowledge/` frameworks.
3. **Synthesis**: The `planning-agent` sequences improvements into a 3-phase roadmap.
4. **Implementation**: The `refactor-agent` proposes code changes under strict human-in-the-loop governance.

## 📊 Sample Output (30 sec)
The agent produces high-fidelity reports with raw data evidence:
- **Baseline Metrics**: Lines of code, file counts, type distribution.
- **Architectural Hotspots**: Files with high dependency concentration and complexity.
- **Critical Risks**: Specific locations of security and logic flaws.
- **Score Breakdown**: Data-backed reasoning for Security, Architecture, and Maintainability scores.
- *Check the full [Example Output](examples/sample-analysis.md) for details.*

## 🧠 Why It Wins (10 sec)
- **Engineering-First**: Moves beyond "chat" into measurable, automated technical leadership.
- **Data-Driven**: Every recommendation is tied to a specific data point from the code.
- **Enterprise-Ready**: Built-in risk policies, multi-agent orchestration, and persistent context.

---

## 🏗 Architecture & Skills
- **Analyzer (`architecture-agent`)**: Design pattern and modularity evaluation.
- **Risk Detector (`risk-agent`)**: Vulnerability and operational risk scanning.
- **Planner (`planning-agent`)**: ROI-based roadmap sequencing.
- **Refactorer (`refactor-agent`)**: Controlled code implementation.

---

## 🧬 Why This Is Different
Traditional AI tools explain code and suggest snippets. **AutoDev Architect** evaluates systems, prioritizes engineering decisions, and simulates a professional senior technical review.

## ⚠️ System Limitations
- **Static Analysis Only**: Relies on code patterns; does not execute runtime behavior analysis.
- **Advisory Mode**: All changes require human approval via a defined risk policy.

## 🔄 Future Evolution
- **CI/CD Pipeline Integration**
- **Automated PR Generation**
- **Cross-Repo System Intelligence**

---
## ✅ Validation Status

This agent has been validated using the GitAgent CLI.

```bash
npx @open-gitagent/gitagent validate

✔ Validation passed with 0 warnings
✔ All skills and tools correctly registered
✔ Fully compliant with GitAgent specification
```

---
*Built for the Git Agent Hackathon.*

