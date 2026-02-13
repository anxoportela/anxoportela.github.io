# Build stage
FROM klakegg/hugo:ext-alpine AS builder

WORKDIR /src

# Copy project files
COPY . .

# Build the site
RUN hugo --minify --gc --cleanDestinationDir

# Production stage
FROM nginx:alpine

# Copy built files from builder
COPY --from=builder /src/public /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
