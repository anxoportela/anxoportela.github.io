# Anxo Portela Personal Website

A multilingual personal website built with [Hugo](https://gohugo.io/) and the [Hugo Coder](https://github.com/luizdepra/hugo-coder) theme.

## 🚀 Features

- **Multilingual Support**: English, Spanish, and Portuguese
- **Responsive Design**: Mobile-friendly layout
- **Dark/Light Mode**: Automatic theme detection
- **SEO Optimized**: Sitemap, RSS feed, and social metadata
- **Contact Form**: Integrated with Formspree
- **Analytics Ready**: Support for multiple analytics providers

## 🐳 Quick Start with Docker

### Development

```bash
# Start development server with Docker
docker-compose up hugo

# Or just run hugo directly
docker run -v $(pwd):/src -p 1313:1313 klakegg/hugo:ext-alpine server -D --bind 0.0.0.0
```

### Production Build

```bash
# Build and run with nginx
docker-compose --profile production up --build

# Or build manually
docker build -t my-blog .
docker run -p 8080:80 my-blog
```

## 🛠️ Development

### Using the Makefile

This project includes a Makefile for easy content management:

```bash
# Show help
make help

# Create a new blog post in all languages
make post title="My New Post"

# Create a new project in all languages
make project title="My New Project"

# Create a new gig/service in all languages
make gig title="My New Gig"

# Advanced - with custom titles per language
make post title="Docker Guide" es_title="Guía de Docker" pt_title="Guia do Docker"

# Build the site
make build

# Start development server
make serve

# Clean build files
make clean
```

### Using Dev Container (VS Code)

1. Open the project in VS Code
2. Install the "Dev Containers" extension
3. Click "Reopen in Container" when prompted

The dev container will automatically set up Hugo and all dependencies.

### Local Development

```bash
# Install dependencies
git clone https://github.com/anxoportela/anxoportela.github.io.git
cd anxoportela.github.io
git submodule update --init --recursive

# Start local server
hugo server

# Or use Docker
docker-compose up hugo
```

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
# Edit .env with your settings
```

## 📝 Content Structure

```
content/
├── about/          # About page
├── contact/       # Contact page
├── gigs/          # Services/Gigs section
├── posts/         # Blog posts (English)
├── projects/      # Projects showcase
├── es/            # Spanish translations
│   ├── about/
│   ├── contact/
│   ├── gigs/
│   ├── posts/
│   └── projects/
└── pt-br/         # Portuguese translations
    ├── about/
    ├── contact/
    ├── gigs/
    ├── posts/
    └── projects/
```

## 📋 Content Frontmatter

### Posts

```yaml
+++
title = "Post Title"
description = "Post description"
date = 2026-01-01
lastmod = 2026-01-01
draft = false
slug = "post-slug"
author = "Anxo Portela"
tags = ["tag1", "tag2"]
categories = ["Category"]
# images = ["/images/og-image.jpg"]
+++
```

### Projects

```yaml
+++
title = "Project Title"
description = "Project description"
date = 2026-01-01
lastmod = 2026-01-01
draft = false
slug = "project-slug"
author = "Anxo Portela"
tags = ["tag1", "tag2"]
categories = ["Category"]
# images = ["/images/og-image.jpg"]
repo_url = "https://github.com/username/repo"
demo_url = "https://demo.example.com"
technologies = ["Tech1", "Tech2"]
+++
```

### Gigs/Services

```yaml
+++
title = "Service Title"
description = "Service description"
date = 2026-01-01
lastmod = 2026-01-01
draft = false
slug = "service-slug"
author = "Anxo Portela"
icon = "fa-code"  # Font Awesome icon
# images = ["/images/og-image.jpg"]
price = "From $100"
delivery_time = "3-7 days"
+++
```

## ⚙️ Configuration

Edit `hugo.toml` to customize:

- Site metadata (title, description, author)
- Social links
- Menu navigation
- Analytics providers
- Theme preferences

### Analytics

The site supports multiple analytics providers. To enable one, uncomment and configure in `hugo.toml`:

- [Umami](https://umami.is/) (recommended - privacy-friendly)
- [Plausible](https://plausible.io/)
- [Google Analytics](https://analytics.google.com/)
- [Fathom](https://usefathom.com/)

### Contact Form

1. Create a free account at [Formspree](https://formspree.io/)
2. Create a new form
3. Replace `YOUR_FORM_ID` in the contact page files with your form ID

## 🎨 Customization

### Custom CSS

Add custom styles to `assets/css/custom.css` (create if not exists) and reference in `hugo.toml`:

```toml
[params]
customCSS = ["css/custom.css"]
```

### Custom JavaScript

Add custom scripts to `assets/js/custom.js` (create if not exists) and reference in `hugo.toml`:

```toml
[params]
customJS = ["js/custom.js"]
```

### Favicon

Add your favicon to `static/favicon.svg` or `static/favicon.ico`.

### Avatar

Add your avatar image to `static/images/avatar.jpg` and update `hugo.toml`:

```toml
[params]
avatarURL = "images/avatar.jpg"
```

## 🌐 Deployment

### GitHub Pages (Automatic)

This site uses GitHub Actions for automatic deployment:

1. **Repository Settings**: Go to your repository Settings → Pages
2. Under "Build and deployment", select **Source: GitHub Actions**
3. Push changes to the `main` branch - the workflow will automatically build and deploy

The workflow file is located at `.github/workflows/hugo.yaml`

#### Manual Trigger

You can also trigger the workflow manually:
1. Go to the **Actions** tab in your repository
2. Select "Deploy Hugo Site to GitHub Pages"
3. Click **Run workflow**

### Manual Build

```bash
hugo --minify
# Output goes to public/ directory
```

## 📂 Additional Files

- `Dockerfile` - Multi-stage build for production
- `docker-compose.yml` - Development and production services
- `.devcontainer/` - VS Code dev container configuration
- `nginx.conf` - Production nginx configuration
- `robots.txt` - Search engine configuration

## 📄 License

This project is for personal use. The Hugo Coder theme is licensed under MIT.

## 🙏 Acknowledgments

- [Hugo](https://gohugo.io/) - Static site generator
- [Hugo Coder Theme](https://github.com/luizdepra/hugo-coder) - Beautiful theme
- [Font Awesome](https://fontawesome.com/) - Icons
