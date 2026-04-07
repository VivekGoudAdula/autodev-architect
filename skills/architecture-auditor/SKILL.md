---
name: architecture-auditor
description: "Holistic architectural evaluation of the repository."
allowed-tools: list_dir view_file grep_search
---

# Architecture Auditor Skill

## Objective
To perform a high-level architectural evaluation of the repository to identify structural weaknesses, design anti-patterns, and scalability bottlenecks.

## Input Requirements
- **Repository Structure**: Analyzed by `repo-summarizer`.
- **Primary Technical Stack**: Identified during summarization.
- **System Documentation**: `README.md`, `ARCHITECTURE.md`, etc.

## Processing Steps
1.  **Modularity Check**: Analyze the separation of concerns and how components are organized (e.g., Domain-Driven Design, Clean Architecture).
2.  **Coupling Analysis**: Evaluate how tightly coupled the components are.
3.  **Scalability Assessment**: Identify potential bottlenecks in the data flow and system boundaries.
4.  **Consistency Check**: Check if naming conventions and structures are consistent across the codebase.
5.  **Pattern Recognition**: Identify use of common design patterns (e.g., Singleton, Factory, Circuit Breaker).

## Decision Logic
- **Architecture Quality**: Scaled from 0 to 10 based on modularity, coupling, and pattern usage.
- **Consistency**: Evaluated based on adherence to naming and structural standards.
- **Scalability**: Assessed by analyzing system boundaries and data throughput.

## Output Schema
```json
{
  "architecture_score": "number",
  "modularity": {
    "status": "string",
    "description": "string"
  },
  "coupling": {
    "status": "string",
    "description": "string"
  },
  "scalability": {
    "status": "string",
    "description": "string"
  },
  "recommendations": ["string"]
}
```

## Edge Cases
- **Monolithic vs. Microservices**: Adjust evaluation criteria based on the chosen architecture.
- **Inconsistent Documentation**: Prioritize code structure over documentation if they conflict.
- **Legacy Codebase**: Focus on identifying core bottlenecks rather than total refactor.
