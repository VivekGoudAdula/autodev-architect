# Bootstrap

## Execution Command
```bash
npx -y autodev-bootstrap --config=config/default.yaml
```

## Description
This hook initializes the environment by:
1.  Loading the default configuration from `config/default.yaml`.
2.  Checking for required tools and dependencies.
3.  Synchronizing `knowledge/` and `memory/` directories.
4.  Setting up the multi-agent orchestration layer.

## Failure Handling
In case of bootstrap failure:
- Logs are written to `logs/bootstrap.log`.
- `risk-agent` calculates the impact and severity.
- If severity is `critical`, the process is terminated and needs human review.
