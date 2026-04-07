---
name: execution-planner
description: "Strategizing and sequencing repository improvements."
allowed-tools: list_dir view_file grep_search
---

# Execution Planner Skill

## Objective
To build a prioritized roadmap of improvements based on inputs from `architecture-auditor` and `risk-detector`. It sequences work based on severity, impact, and effort.

## Input Requirements
- **Architecture Evaluation**: From `architecture-auditor`.
- **Risk Assessment**: From `risk-detector`.
- **Available Resources**: Standard assumptions about development time.

## Processing Steps
1.  **Issue Categorization**: Group findings into architectural, security, and performance categories.
2.  **Severity Scoring**: Assign weights to issues based on their impact on system stability and security.
3.  **Effort Estimation**: Estimate the development effort for each proposed improvement.
4.  **Prioritization**: Calculate ROI (Impact / Effort) and sequence tasks.
5.  **Roadmap Generation**: Build a logical sequence of short-term, medium-term, and long-term goals.

## Decision Logic
- **Priority**: Based on urgency (severity) and ROI (Impact vs. Effort).
- **Sequencing**: Critical security fixes first, followed by architectural improvements.
- **Recommendations**: Targeted actions to address prioritized issues.

## Output Schema
```json
{
  "roadmap": {
    "short_term": [
      {
        "task": "string",
        "description": "string",
        "priority": "high | medium | low",
        "roi": "number"
      }
    ],
    "medium_term": [
      {
        "task": "string",
        "description": "string",
        "priority": "medium | low",
        "roi": "number"
      }
    ],
    "long_term": [
      {
        "task": "string",
        "description": "string",
        "priority": "low",
        "roi": "number"
      }
    ]
  },
  "overall_strategy": "string"
}
```

## Edge Cases
- **Resource Constraints**: Adjust roadmap based on limited time or developer availability.
- **Inter-dependent Tasks**: Group related fixes to improve efficiency.
- **Conflicting Priorities**: Focus on security and system stability above all else.
