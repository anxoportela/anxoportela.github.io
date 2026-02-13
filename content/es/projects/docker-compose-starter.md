+++
title = "Docker Compose Starter Kit"
description = "Una plantilla para entornos de desarrollo con Docker Compose"
date = 2026-01-20
lastmod = 2026-01-20
draft = false
slug = "docker-compose-starter"
author = "Anxo Portela"
tags = ["docker", "devops", "containers"]
categories = ["DevOps"]
# images = ["/images/og-image.jpg"]
repo_url = "https://github.com/anxoportela/docker-compose-starter"
demo_url = ""
technologies = ["Docker", "Docker Compose", "Nginx", "PostgreSQL", "Redis"]
+++

# Docker Compose Starter Kit

Una plantilla completa para configurar entornos de desarrollo usando Docker Compose.

## Qué Incluye

- **Nginx** - Servidor proxy inverso y web
- **PostgreSQL** - Base de datos
- **Redis** - Capa de caché
- **Adminer** - Interfaz de gestión de base de datos

## Inicio Rápido

```bash
# Clonar el repositorio
git clone tu-url-del-repositorio

# Iniciar todos los servicios
docker-compose up -d

# Detener todos los servicios
docker-compose down
```

## Características

- Soporte de recarga caliente
- Volúmenes de datos persistentes
- Verificaciones de salud
- Configuración de red personalizada

---

*Perfecto para desarrolladores que quieren levantar rápidamente un entorno de desarrollo full-stack.*
