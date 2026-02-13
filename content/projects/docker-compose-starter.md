+++
title = "Docker Compose Starter Kit"
description = "A boilerplate for Docker Compose development environments"
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

A comprehensive starter kit for setting up development environments using Docker Compose.

## What's Included

- **Nginx** - Reverse proxy and web server
- **PostgreSQL** - Database
- **Redis** - Caching layer
- **Adminer** - Database management UI

## Quick Start

```bash
# Clone the repository
git clone your-repo-url

# Start all services
docker-compose up -d

# Stop all services
docker-compose down
```

## Project Structure

```
├── docker-compose.yml
├── nginx/
│   └── default.conf
└── README.md
```

## Features

- Hot reload support
- Persistent data volumes
- Health checks
- Custom network configuration

## Use Cases

- Local development environments
- Testing microservices architecture
- CI/CD pipeline testing

---

*Perfect for developers who want to quickly spin up a full-stack development environment.*
