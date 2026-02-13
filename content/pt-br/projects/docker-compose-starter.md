+++
title = "Kit Inicial Docker Compose"
description = "Um modelo para ambientes de desenvolvimento com Docker Compose"
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

# Kit Inicial Docker Compose

Um modelo completo para configurar ambientes de desenvolvimento usando Docker Compose.

## O que está incluído

- **Nginx** - Proxy reverso e servidor web
- **PostgreSQL** - Banco de dados
- **Redis** - Camada de cache
- **Adminer** - Interface de gerenciamento de banco de dados

## Início Rápido

```bash
# Clone o repositório
git clone sua-url-do-repositório

# Inicie todos os serviços
docker-compose up -d

# Pare todos os serviços
docker-compose down
```

## Características

- Suporte a hot reload
- Volumes de dados persistentes
- Health checks
- Configuração de rede personalizada

---

*Perfeito para desenvolvedores que desejam rapidamente configurar um ambiente de desenvolvimento full-stack.*
