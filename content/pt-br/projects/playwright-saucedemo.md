+++
title = "Playwright Saucedemo Testes E2E"
description = "Um projeto completo de testes end-to-end usando Playwright para o site demo de e-commerce Saucedemo"
date = 2026-01-25
lastmod = 2026-01-25
draft = false
slug = "playwright-saucedemo"
author = "Anxo Portela"
tags = ["playwright", "testing", "automation", "e2e"]
categories = ["Documentação"]
# images = ["/images/og-image.jpg"]
repo_url = "https://github.com/anxoportela/playwright-saucedemo"
demo_url = "https://anxoportela.github.io/playwright-saucedemo/"
technologies = ["Playwright", "JavaScript", "Node.js", "Docker", "Allure", "Docusaurus"]
+++

# Playwright Saucedemo Testes E2E

Um projeto completo de testes end-to-end usando Playwright para o site demo de e-commerce Saucedemo. Este projeto demonstra as melhores práticas da indústria para testes automatizados com relatórios detalhados e integração CI/CD.

## Características

| Característica | Descrição |
|---------|-------------|
| **Page Object Model** | Arquitetura de testes limpa e manutenível com objetos de página reutilizáveis |
| **Data-Driven Testing** | Dados de teste separados para fácil gestão e manutenção |
| **Multi-Browser Testing** | Suporte para Chromium, Firefox, Webkit e navegadores móveis |
| **Docker Support** | Execute testes em contêineres isolados com Docker Compose |
| **Allure Reports** | Relatórios interativos de testes com capturas de tela em cada etapa |
| **GitHub Actions CI/CD** | Testes automatizados, relatórios e deploy para GitHub Pages |
| **Docusaurus Documentation** | Documentação bonita e pesquisável do projeto |

## Início Rápido

```bash
# Clonar e instalar
git clone https://github.com/anxoportela/playwright-saucedemo.git
cd playwright-saucedemo

# Instalar dependências
npm install

# Instalar navegadores do Playwright
npm run install:browsers

# Executar testes
npm test
```

## Cobertura de Testes

| Módulo | Testes | Descrição |
|--------|-------|-------------|
| **Login** | 4 testes | Credenciais válidas/inválidas, campos vazios |
| **Inventário** | 7 testes | Listagem de produtos, ordenação (A-Z, Z-A, preço) |
| **Carrinho** | 5 testes | Adicionar/remover itens, atualizações de badge |
| **Checkout** | 6 testes | Fluxo completo, validação, tratamento de erros |
| **Logout** | 3 testes | Encerramento de sessão, re-autenticação |
| **Total** | **25 testes** | Cobertura E2E completa |

## Matriz de Navegadores

| Navegador | Tipo | Status |
|---------|------|--------|
| Chromium | Desktop | ✅ Suportado |
| Firefox | Desktop | ✅ Suportado |
| Webkit | Desktop | ✅ Suportado |
| Pixel 5 | Móvel | ✅ Suportado |
| iPhone 12 | Móvel | ✅ Suportado |

## Relatórios

### Allure Report

```bash
# Gerar e abrir relatório Allure
npm run test:allure
```

O Allure fornece capturas de tela em cada etapa do teste, gráficos e análise estatística, anotações de testes e identificação de testes instáveis.

## Pipeline CI/CD

O projeto inclui um pipeline CI/CD completo com:
- Execução de testes em múltiplos navegadores
- Geração de relatórios (Allure e HTML)
- Armazenamento de artefatos
- Construção de documentação com Docusaurus
- Deploy para GitHub Pages

---

*Este projeto mostra as melhores práticas para testes E2E com Playwright com integração profissional de CI/CD.*
