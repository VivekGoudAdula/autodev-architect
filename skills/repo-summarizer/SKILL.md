---
name: repo-summarizer
description: "Holistic repository analysis and summarization system."
allowed-tools: list_dir view_file grep_search
---

# Repository Summarization Skill

## Objective
To perform a holistic analysis of the repository to understand its purpose, technical stack, core components, and scale. This serves as the foundation for all architectural and risk-related decisions.

## Input Requirements
- **Target Path**: The root directory of the repository to analyze.
- **Exclusion Filters**: Files or directories to ignore (e.g., `node_modules`, `.git`).
- **Analysis Depth**: Specification of how many levels of the directory structure to explore.

## Processing Steps
1.  **Metric Extraction**: Call `repo-analyzer.js` on the project root to extract empirical data (file counts, line counts, critical issues).
2.  **Hierarchy Exploration**: Traverse the directory structure starting from the root to identify major modules (e.g., `src/`, `lib/`, `tests/`) and configuration files.
3.  **Stack Identification**: Examine manifest files (e.g., `package.json`, `requirements.txt`, `go.mod`) to confirm the primary programming languages, frameworks, and critical dependencies.
4.  **Documentation Parsing**: Analyze `README.md` and other high-level docs to capture business logic and intended system behavior.
5.  **Entry Point Discovery**: Locate application entry points to understand initialization and execution flows.
6.  **Complexity Estimation**: Synthesize tool output with manual inspection to estimate system scale.

## Decision Logic
- **Primary Function**: Determined by analyzing documentation and source code entry points.
- **Technical Stack**: Identified based on manifest files and file extensions.
- **Core Components**: Extracted based on directory structure and import/package declarations.
- **Scale**: Calculated based on file system metadata.

## Output Schema
```json
{
  "summary": "string",
  "technical_stack": {
    "languages": ["string"],
    "frameworks": ["string"],
    "databases": ["string"]
  },
  "core_components": [
    {
      "name": "string",
      "description": "string"
    }
  ],
  "scale": {
    "file_count": "number",
    "directory_count": "number",
    "complexity": "low | medium | high"
  }
}
```

## Edge Cases
- **Missing Documentation**: If `README.md` is missing, rely on manifest files and source code structure.
- **Obfuscated Code**: If code is obfuscated, focus on manifest files and system boundaries.
- **Large Repositories**: Use chunked reading and specific inclusion filters to manage memory and performance.
