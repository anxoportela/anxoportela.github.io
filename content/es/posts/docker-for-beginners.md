+++
title = "Docker para Principiantes"
description = "Una guía para principiantes sobre contenedores Docker"
date = 2026-02-05
lastmod = 2026-02-05
draft = false
slug = "docker-for-beginners"
author = "Anxo Portela"
tags = ["docker", "devops", "containers"]
categories = ["DevOps"]
# images = ["/images/og-image.jpg"]
+++

# Docker para Principiantes

Docker ha revolucionado el desarrollo de software al hacer la containerización accesible para todos. Exploremos los fundamentos.

## ¿Qué es Docker?

Docker es una plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores. Los contenedores son ligeros y contienen todo lo necesario para ejecutar el software.

## Conceptos Clave

### Imágenes
Las imágenes son plantillas de solo lectura usadas para crear contenedores. Piensa en ellas como planos.

### Contenedores
Los contenedores son instancias en ejecución de imágenes. Están aislados y son ligeros.

### Dockerfiles
Los Dockerfiles definen cómo construir tu imagen:

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
# Construir una imagen
docker build -t mi-app .

# Ejecutar un contenedor
docker run -p 3000:3000 mi-app

# Listar contenedores en ejecución
docker ps

# Detener un contenedor
docker stop id_contenedor
```

## Conclusión

¡Docker simplifica el despliegue y garantiza consistencia entre entornos. ¡Empieza a experimentar hoy!
