+++
title = "Docker for Beginners"
description = "A beginner's guide to Docker containers"
date = 2026-02-05
lastmod = 2026-02-05
draft = false
slug = "docker-for-beginners"
author = "Anxo Portela"
tags = ["docker", "devops", "containers"]
categories = ["DevOps"]
# images = ["/images/og-image.jpg"]
+++

# Docker for Beginners

Docker has revolutionized software development by making containerization accessible to everyone. Let's explore the fundamentals.

## What is Docker?

Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight and contain everything needed to run the software.

## Key Concepts

### Images
Images are read-only templates used to create containers. Think of them as blueprints.

### Containers
Containers are running instances of images. They're isolated and lightweight.

### Dockerfiles
Dockerfiles define how to build your image:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]
```

## Basic Commands

```bash
# Build an image
docker build -t my-app .

# Run a container
docker run -p 3000:3000 my-app

# List running containers
docker ps

# Stop a container
docker stop container_id
```

## Conclusion

Docker simplifies deployment and ensures consistency across environments. Start experimenting today!
