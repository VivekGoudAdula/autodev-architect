---
name: risk-detector
description: "Vulnerability and risk identification for the codebase."
allowed-tools: list_dir view_file grep_search
---

# Risk Detector Skill

## Objective
To identify security vulnerabilities, performance bottlenecks, and operational risks in the codebase. This ensures compliance with `risk-policy.md`.

## Input Requirements
- **Target Path**: The codebase to scan.
- **Specific Rules**: Any custom rules or keywords in `compliance/risk-policy.md`.
- **Primary Technical Stack**: Identified by `repo-summarizer`.

## Processing Steps
1.  **Vulnerability Scanning**: Use `grep_search` to find common security anti-patterns (e.g., hardcoded keys, SQL injection patterns).
2.  **Performance Analysis**: Identify potentially slow operations, such as nested loops or synchronous network requests.
3.  **Error Handling Review**: Check for generic try-except blocks and lack of detailed logging.
4.  **Operational Risk Check**: Identify missing monitoring, logging, and metrics hooks.
5.  **Compliance Verification**: Cross-reference identified risks with `risk-tier` definitions in `compliance/risk-policy.md`.

## Decision Logic
- **Severity**: Critical, High, Medium, or Low based on the impact on security and system performance.
- **Occurrence**: Frequency of each risk.
- **Recommendation**: Targeted fix or mitigation strategy.

## Output Schema
```json
{
  "risk_score": "number",
  "vulnerabilities": [
    {
      "severity": "critical | high | medium | low",
      "description": "string",
      "location": "string",
      "recommendation": "string"
    }
  ],
  "performance_bottlenecks": [
    {
      "severity": "medium | low",
      "description": "string",
      "location": "string",
      "recommendation": "string"
    }
  ],
  "overall_risk": {
    "status": "ready | caution | not_ready",
    "description": "string"
  }
}
```

## Edge Cases
- **False Positives**: Carefully review search results before reporting.
- **Encoded/Hashed Data**: Identify patterns that suggest sensitive data even if it's not cleartext.
- **Large Scan Surface**: Focus on entry points and data-handling modules.
