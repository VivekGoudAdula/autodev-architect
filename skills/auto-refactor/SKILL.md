---
name: auto-refactor
description: "Implementation of code transformations and improvements."
allowed-tools: list_dir view_file grep_search replace_file_content multi_replace_file_content write_to_file
---

# Auto Refactor Skill

## Objective
To implement code changes and improvements. This skill operates under strict supervision and requires approval for all modifications as per `compliance/risk-policy.md`.

## Input Requirements
- **Plan and sequence**: From `execution-planner`.
- **Reference Codebase**: The files to modify.
- **Specific Change**: A detailed description of the refactoring task.

## Processing Steps
1.  **Preparation**: Identify the files and code blocks that need modification.
2.  **Validation Check**: Verify that the proposed changes are consistent with `SOUL.md` and `DUTIES.md`.
3.  **Action Proposal**: Describe the exact changes to be made and their expected impact.
4.  **Implementation**: Execute the changes using `replace_file_content` or `multi_replace_file_content` tools.
5.  **Automated PR Generation (Simulation)**: Generate a professional Pull Request description including the "Before vs. After" analysis and risk assessment for human review.
6.  **Post-Action Check**: Verify the integrity of the modified file and ensure no other functionality is broken.

## Decision Logic
- **Safety Check**: If the change is classified as medium or high risk, pause for human approval.
- **Verification**: Cross-reference the modified code with the original intent.
- **Rollback**: Prepare for rollback if the post-action check fails.

## Output Schema
```json
{
  "refactoring_status": "applied | pending | failed",
  "files_modified": ["string"],
  "changes_made": [
    {
      "description": "string",
      "impact": "low | medium | high",
      "risk_status": "ready | caution | not_ready"
    }
  ],
  "verification_status": "success | failure"
}
```

## Edge Cases
- **Syntax Errors**: Use a linter or simple syntax check (if available) to verify changes.
- **Conflict with Concurrent Edits**: Ensure the target code blocks still match the file content.
- **Large Refactors**: Break down large changes into smaller, manageable chunks.
