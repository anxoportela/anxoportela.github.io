+++
title = "Playwright Saucedemo E2E Testing"
description = "A comprehensive end-to-end testing project using Playwright for the Saucedemo demo e-commerce website"
date = 2026-01-25
lastmod = 2026-01-25
draft = false
slug = "playwright-saucedemo"
author = "Anxo Portela"
tags = ["playwright", "testing", "automation", "e2e"]
categories = ["Documentation"]
# images = ["/images/og-image.jpg"]
repo_url = "https://github.com/anxoportela/playwright-saucedemo"
demo_url = "https://anxoportela.github.io/playwright-saucedemo/"
technologies = ["Playwright", "JavaScript", "Node.js", "Docker", "Allure", "Docusaurus"]
+++

# Playwright Saucedemo E2E Testing

A comprehensive end-to-end testing project using Playwright for the Saucedemo demo e-commerce website. This project demonstrates industry best practices for automated testing with detailed reporting and CI/CD integration.

## Features

| Feature | Description |
|---------|-------------|
| **Page Object Model** | Clean, maintainable test architecture with reusable page objects |
| **Data-Driven Testing** | Separated test data for easy management and maintenance |
| **Multi-Browser Testing** | Chromium, Firefox, Webkit, and mobile browser support |
| **Docker Support** | Run tests in isolated containers with Docker Compose |
| **Allure Reports** | Rich, interactive test reports with screenshots at every step |
| **GitHub Actions CI/CD** | Automated testing, reporting, and GitHub Pages deployment |
| **Docusaurus Documentation** | Beautiful, searchable project documentation |

## Quick Start

```bash
# Clone and install
git clone https://github.com/anxoportela/playwright-saucedemo.git
cd playwright-saucedemo

# Install dependencies
npm install

# Install Playwright browsers
npm run install:browsers

# Run tests
npm test
```

## Test Coverage

| Module | Tests | Description |
|--------|-------|-------------|
| **Login** | 4 tests | Valid/invalid credentials, empty fields |
| **Inventory** | 7 tests | Product listing, sorting (A-Z, Z-A, price) |
| **Cart** | 5 tests | Add/remove items, badge updates |
| **Checkout** | 6 tests | Complete flow, validation, error handling |
| **Logout** | 3 tests | Session termination, re-authentication |
| **Total** | **25 tests** | Comprehensive E2E coverage |

## Browser Matrix

| Browser | Type | Status |
|---------|------|--------|
| Chromium | Desktop | ✅ Supported |
| Firefox | Desktop | ✅ Supported |
| Webkit | Desktop | ✅ Supported |
| Pixel 5 | Mobile | ✅ Supported |
| iPhone 12 | Mobile | ✅ Supported |

## Reports

### Allure Report

```bash
# Generate and open Allure report
npm run test:allure
```

Allure provides screenshots at every test step, charts and statistical analysis, test annotations, and flaky test identification.

## CI/CD Pipeline

The project includes a comprehensive CI/CD pipeline with:
- Test execution on multiple browsers
- Report generation (Allure and HTML)
- Artifact storage
- Documentation build with Docusaurus
- GitHub Pages deployment

---

*This project showcases best practices for Playwright E2E testing with professional CI/CD integration.*
