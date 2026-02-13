+++
title = "Playwright Saucedemo Pruebas E2E"
description = "Un proyecto completo de pruebas end-to-end usando Playwright para el sitio demo de e-commerce Saucedemo"
date = 2026-01-25
lastmod = 2026-01-25
draft = false
slug = "playwright-saucedemo"
author = "Anxo Portela"
tags = ["playwright", "testing", "automation", "e2e"]
categories = ["Documentación"]
# images = ["/images/og-image.jpg"]
repo_url = "https://github.com/anxoportela/playwright-saucedemo"
demo_url = "https://anxoportela.github.io/playwright-saucedemo/"
technologies = ["Playwright", "JavaScript", "Node.js", "Docker", "Allure", "Docusaurus"]
+++

# Playwright Saucedemo Pruebas E2E

Un proyecto completo de pruebas end-to-end usando Playwright para el sitio demo de e-commerce Saucedemo. Este proyecto demuestra las mejores prácticas de la industria para pruebas automatizadas con informes detallados e integración CI/CD.

## Características

| Característica | Descripción |
|---------|-------------|
| **Page Object Model** | Arquitectura de pruebas limpia y mantenible con objetos de página reutilizables |
| **Data-Driven Testing** | Datos de prueba separados para fácil gestión y mantenimiento |
| **Multi-Browser Testing** | Soporte para Chromium, Firefox, Webkit y navegadores móviles |
| **Docker Support** | Ejecuta pruebas en contenedores aislados con Docker Compose |
| **Allure Reports** | Informes de pruebas interactivos con capturas de pantalla en cada paso |
| **GitHub Actions CI/CD** | Pruebas automatizadas, informes y despliegue a GitHub Pages |
| **Docusaurus Documentation** | Documentación hermosa y buscable del proyecto |

## Inicio Rápido

```bash
# Clonar e instalar
git clone https://github.com/anxoportela/playwright-saucedemo.git
cd playwright-saucedemo

# Instalar dependencias
npm install

# Instalar navegadores de Playwright
npm run install:browsers

# Ejecutar pruebas
npm test
```

## Cobertura de Pruebas

| Módulo | Pruebas | Descripción |
|--------|-------|-------------|
| **Login** | 4 pruebas | Credenciales válidas/inválidas, campos vacíos |
| **Inventario** | 7 pruebas | Listado de productos, ordenación (A-Z, Z-A, precio) |
| **Carrito** | 5 pruebas | Añadir/eliminar artículos, actualizaciones de badge |
| **Checkout** | 6 pruebas | Flujo completo, validación, manejo de errores |
| **Logout** | 3 pruebas | Terminación de sesión, re-autenticación |
| **Total** | **25 pruebas** | Cobertura E2E completa |

## Pipeline CI/CD

El proyecto incluye un pipeline CI/CD completo con:
- Ejecución de pruebas en múltiples navegadores
- Generación de informes (Allure y HTML)
- Almacenamiento de artefactos
- Construcción de documentación con Docusaurus
- Despliegue a GitHub Pages

---

*Este proyecto muestra las mejores prácticas para pruebas E2E con Playwright con integración profesional de CI/CD.*
