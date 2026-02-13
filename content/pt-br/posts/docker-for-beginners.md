+++
title = "Docker para Iniciantes"
description = "Um guia para iniciantes sobre contêineres Docker"
date = 2026-02-05
lastmod = 2026-02-05
draft = false
slug = "docker-for-beginners"
author = "Anxo Portela"
tags = ["docker", "devops", "containers"]
categories = ["DevOps"]
# images = ["/images/og-image.jpg"]
+++

# Docker para Iniciantes

Docker revolucionou o desenvolvimento de software ao tornar a conteinerização acessível para todos. Vamos explorar os fundamentos.

## O que é Docker?

Docker é uma plataforma para desenvolver, enviar e executar aplicações em contêineres. Contêineres são leves e contêm tudo o que é necessário para executar o software.

## Conceitos-Chave

### Imagens
Imagens são modelos somente leitura usados para criar contêineres.

### Contêineres
Contêineres são instâncias em execução de imagens. Eles são isolados e leves.

### Dockerfiles
Dockerfiles definem como construir sua imagem:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]
```

## Comandos Básicos

```bash
# Construir uma imagem
docker build -t minha-app .

# Executar um contêiner
docker run -p 3000:3000 minha-app

# Listar contêineres em execução
docker ps

# Parar um contêiner
docker stop id_conteiner
```

## Conclusão

Docker simplifica a implantação e garante consistência entre ambientes. Comece a experimentar hoje!
