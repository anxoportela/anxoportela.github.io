# Makefile for managing multilingual Hugo content
# Usage: make post title="My New Post"
#        make project title="My New Project"
#        make gig title="My New Gig"

# Default values
TITLE ?= "New Content"
SLUG ?= $(shell echo $(TITLE) | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
ES_TITLE ?= $(TITLE)
PT_TITLE ?= $(TITLE)
ES_DESCRIPTION ?= ""
PT_DESCRIPTION ?= ""
DATE := $(shell date +%Y-%m-%d)

# Colors
GREEN := \033[0;32m
YELLOW := \033[0;33m
NC := \033[0m # No Color

.PHONY: help post project gig clean

help:
	@echo "Makefile for multilingual content management"
	@echo ""
	@echo "Usage:"
	@echo "  make post title=\"Post Title\"                    - Create a new blog post in all languages"
	@echo "  make project title=\"Project Title\"                - Create a new project in all languages"
	@echo "  make gig title=\"Gig Title\"                        - Create a new gig in all languages"
	@echo ""
	@echo "Advanced usage:"
	@echo "  make post title=\"Title\" es_title=\"Spanish Title\"  - Create with custom titles per language"
	@echo "  make clean                                      - Clean build files"
	@echo ""
	@echo "Examples:"
	@echo "  make post title=\"Getting Started with Docker\""
	@echo "  make project title=\"My Portfolio\" es_title=\"Mi Portafolio\" pt_title=\"Meu Portfólio\""
	@echo "  make gig title=\"Web Development\""

# Create a new blog post in all languages
post:
	@echo "$(GREEN)Creating blog post: $(TITLE)$(NC)"
	@echo "$(GREEN)Creating English version...$(NC)"
	hugo new posts/$(SLUG).md --kind post
	@echo "$(GREEN)Creating Spanish version...$(NC)"
	hugo new es/posts/$(SLUG).md --kind post
	@echo "$(GREEN)Creating Portuguese version...$(NC)"
	hugo new pt-br/posts/$(SLUG).md --kind post
	@echo ""
	@echo "$(YELLOW)Don't forget to translate the content and update the title/description!$(NC)"

# Create a new project in all languages
project:
	@echo "$(GREEN)Creating project: $(TITLE)$(NC)"
	@echo "$(GREEN)Creating English version...$(NC)"
	hugo new projects/$(SLUG).md --kind project
	@echo "$(GREEN)Creating Spanish version...$(NC)"
	hugo new es/projects/$(SLUG).md --kind project
	@echo "$(GREEN)Creating Portuguese version...$(NC)"
	hugo new pt-br/projects/$(SLUG).md --kind project
	@echo ""
	@echo "$(YELLOW)Don't forget to translate the content and update the title/description!$(NC)"

# Create a new gig/service in all languages
gig:
	@echo "$(GREEN)Creating gig: $(TITLE)$(NC)"
	@echo "$(GREEN)Creating English version...$(NC)"
	hugo new gigs/$(SLUG).md --kind gig
	@echo "$(GREEN)Creating Spanish version...$(NC)"
	hugo new es/gigs/$(SLUG).md --kind gig
	@echo "$(GREEN)Creating Portuguese version...$(NC)"
	hugo new pt-br/gigs/$(SLUG).md --kind gig
	@echo ""
	@echo "$(YELLOW)Don't forget to translate the content and update the title/description!$(NC)"

# Clean build files
clean:
	@echo "$(GREEN)Cleaning build files...$(NC)"
	rm -rf public/
	rm -rf resources/
	@echo "$(GREEN)Done!$(NC)"

# Build the site
build:
	@echo "$(GREEN)Building site...$(NC)"
	hugo --minify

# Start development server
serve:
	@echo "$(GREEN)Starting development server...$(NC)"
	hugo server -D

# Default target
.DEFAULT_GOAL := help
