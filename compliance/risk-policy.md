# Risk Policy

## Overview
This policy defines the risk tiers and oversight required for all operations performed by the AutoDev Architect system.

## Risk Tiers

### Low Risk
- **Description**: Operations that do not modify logic or data (e.g., repository analysis, summarization).
- **Supervision**: Automated oversight.

### Medium Risk
- **Description**: Proposals for code modifications or structural changes.
- **Supervision**: `human-in-the-loop: true`. Explicit human approval is required before action.

### High Risk
- **Description**: Deleting files, modifying core logic, or changing infrastructure configurations.
- **Supervision**: Multi-step human approval and automated canary testing.

## Oversight Matrix
| Role | Goal | Oversight Required |
| --- | --- | --- |
| Analyzer | System evaluation | None |
| Planner | Roadmap creation | Peer review |
| Refactorer | Code implementation | Human-in-the-loop (mandatory) |

## Governance
- **Compliance Check**: `risk-agent` evaluates all operations against this policy.
- **Auditing**: Every decision is logged in `memory/audit.log`.
