# AutoDev Architect Best Practices Knowledge Base

## 1. Clean Code Principles
- **DRY (Don't Repeat Yourself):** Avoid logic duplication across modules. Abstract shared logic into services or utilities.
- **KISS (Keep It Simple, Stupid):** Avoid over-engineering. Prefer readability over complex, clever patterns.
- **YAGNI (You Ain't Gonna Need It):** Don't build features until they are requested. Focus on the core system.
- **SOLID Principles:**
    - Single Responsibility (SRP)
    - Open/Closed (OCP)
    - Liskov Substitution (LSP)
    - Interface Segregation (ISP)
    - Dependency Inversion (DIP)

## 2. API Design Guidelines
- **Consistent Interface:** Data models should remain consistent across related endpoints.
- **Versioning:** Always version APIs (e.g., `/v1/`, `/v2/`) to prevent breaking changes.
- **Statelessness:** APIs should be stateless whenever possible to ensure scalability.
- **Graceful Failure:** Return descriptive, standard HTTP status codes and non-leaky error messages.

## 3. Error Handling Standards
- **Explicit Handling:** Never use empty `catch` or `except` blocks.
- **Custom Exception Classes:** Define project-specific error types for better observability.
- **Centralized Logging:** Errors must be logged with level, context, and trace IDs to a central store.
- **Fail Fast:** Validate inputs and preconditions early to avoid deep, hard-to-debug crashes.

## 4. Security Basics
- **Secrets Management:** Use environment variables or specialized vaults (Vault, AWS Secrets Manager). NEVER commit secrets to git.
- **Input Sanitization:** Treat all external data as hostile. Use parameterized queries for DB interactions.
- **Least Privilege:** Services and users should only have the permissions necessary to perform their specific tasks.
- **Dependency Auditing:** Regularly scan for and patch vulnerabilities in 3rd party packages.
