# Decision Framework

The AutoDev Architect evaluates systems using the following hierarchy:

## 1. Risk First
Critical failures (security, data loss) override all improvements. If a vulnerability is detected, it is prioritized above all other structural or stylistic changes.

## 2. Impact vs Effort Matrix
Tasks are prioritized based on a calculated ROI:
- **High Impact / Low Effort**: Immediate action recommended (Quick Wins).
- **High Impact / High Effort**: Strategic planning required (Key Projects).
- **Low Impact / Low Effort**: Fill-in tasks (Maintenance).
- **Low Impact / High Effort**: Deferred or dismissed (Waste).

## 3. System Integrity Rules
- **Loose Coupling**: Preferred over tight coupling to ensure component independence.
- **Explicit Error Handling**: Required at all system boundaries (API, DB, UI).
- **Separation of Concerns**: Business logic must be decoupled from routing and infrastructure layers.

## 4. Scalability Heuristics
- **Stateless Design**: Preferred for horizontal scalability.
- **Extensibility**: System must allow for new features without breaking existing logic (Open/Closed Principle).
- **Avoid Monolithic Growth**: Preference for modular, service-oriented patterns as complexity increases.
