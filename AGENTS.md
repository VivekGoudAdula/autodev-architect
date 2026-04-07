# Agents

## architecture-agent
Responsible for system-level analysis, evaluating high-level design patterns, and identifying structural weaknesses. It ensures that the overall architecture is scalable and maintainable.

## risk-agent
Specialized in identifying security vulnerabilities, performance bottlenecks, and operational risks. It monitors compliance with `risk-policy.md`.

## planning-agent
Synthesizes inputs from `architecture-agent` and `risk-agent` to build an execution roadmap. It prioritizes work based on severity, impact, and effort.

## refactor-agent
The execution engine that implements code changes. It operates under strict supervision and requires approval for all modifications.
