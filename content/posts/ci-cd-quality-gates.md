+++
title = "Implementing Quality Gates in CI/CD Pipelines"
description = "A practical guide to building effective quality gates that prevent bugs from reaching production"
date = 2026-02-05
lastmod = 2026-02-05
draft = false
slug = "ci-cd-quality-gates"
author = "Anxo Portela"
tags = ["ci-cd", "devops", "quality-gates", "automation", "github-actions"]
categories = ["DevOps"]
+++

# Implementing Quality Gates in CI/CD Pipelines

Quality gates are automated checkpoints in your CI/CD pipeline that ensure code meets quality standards before progressing to the next stage. Here's how to implement effective quality gates.

## What Are Quality Gates?

Quality gates act as filters that:
- Prevent problematic code from advancing
- Provide feedback to developers quickly
- Enforce organizational standards
- Protect production environment

## A Practical Quality Gate Strategy

### Stage 1: Code Quality Gates

```yaml
# Linting and formatting
- name: Run linters
  run: |
    npm run lint
    npm run format:check
    
- name: SonarCloud Analysis
  uses: sonarsource/sonarcloud-github-action@master
  env:
    SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

### Stage 2: Unit Test Gates

```yaml
# Unit tests with coverage threshold
- name: Run Unit Tests
  run: npm run test:coverage
  
- name: Check Coverage
  run: |
    COVERAGE=$(cat coverage/coverage-summary.json | jq '.total.lines.pct')
    if (( $(echo "$COVERAGE < 80" | bc -l) )); then
      echo "Coverage $COVERAGE% is below threshold 80%"
      exit 1
    fi
```

### Stage 3: Security Gates

```yaml
# Dependency scanning
- name: Dependency Audit
  run: npm audit --audit-level=high
  
- name: Security Scan
  uses: snyk/actions/node@master
  env:
    SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
```

### Stage 4: Integration Test Gates

```yaml
# API tests
- name: Run API Tests
  run: npm run test:api
  
# Contract testing
- name: Contract Tests
  run: npm run test:contract
```

### Stage 5: E2E Test Gates

```yaml
# Smoke tests
- name: Run Smoke Tests
  run: npx playwright test --grep "@smoke"
  
# Critical path tests
- name: Critical Path Tests
  run: npx playwright test --grep "@critical"
```

## Quality Gate Metrics

Track these metrics to improve your gates:

| Metric | Target | Purpose |
|--------|--------|---------|
| Code Coverage | ≥ 80% | Ensure testability |
| Critical Bugs | 0 | Block production |
| Security Vulnerabilities | 0 High | Protect users |
| Code Complexity | < 15 | Maintainability |
| Test Execution Time | < 10 min | Developer feedback |

## GitHub Actions Example

Here's a complete pipeline with quality gates:

```yaml
name: CI Pipeline with Quality Gates

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  quality-gates:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Install dependencies
        run: npm ci
        
      # Gate 1: Linting
      - name: Lint Code
        run: npm run lint
        
      # Gate 2: Unit Tests
      - name: Unit Tests
        run: npm test
        
      # Gate 3: Coverage
      - name: Check Coverage
        run: |
          npm run test:coverage
          npx coverage-threshold --config .coveragerc
          
      # Gate 4: Security
      - name: Security Audit
        run: npm audit --audit-level=high
        
      # Gate 5: Build
      - name: Build Application
        run: npm run build
        
  integration-tests:
    needs: quality-gates
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - name: Run Integration Tests
        run: npm run test:integration
        
  e2e-tests:
    needs: integration-tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - name: Run E2E Tests
        run: npx playwright test
        
  deploy:
    needs: e2e-tests
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Production
        run: echo "Deploying..."
```

## Best Practices

1. **Fail Fast**: Run fastest gates first
2. **Clear Messages**: Tell developers exactly what failed
3. **Balanced Gates**: Don't make them too strict or too lenient
4. **Continuous Improvement**: Adjust thresholds based on team velocity
5. **Parallel Execution**: Run independent gates simultaneously

## Conclusion

Quality gates are essential for maintaining software quality at scale. Start with basic gates and progressively add more sophisticated checks as your team matures.

---

*Need help implementing quality gates in your organization? [Contact me](/contact/) for consulting services.*
