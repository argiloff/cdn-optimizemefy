FROM nginx:alpine

# Setze Umgebungsvariablen
ENV NGINX_USER=nginx \
    NGINX_GROUP=nginx \
    NGINX_WORKER_PROCESSES=auto \
    NGINX_WORKER_CONNECTIONS=1024 \
    NGINX_CLIENT_MAX_BODY_SIZE=20m

# Erstelle das Verzeichnis für statische Dateien
RUN mkdir -p /var/www/static

# Kopiere die statischen Dateien
COPY ./public/ /var/www/static/

# Kopiere die Nginx-Konfiguration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Setze die korrekten Berechtigungen
RUN chown -R ${NGINX_USER}:${NGINX_GROUP} /var/www/static && \
    chmod -R 755 /var/www/static && \
    chmod 644 /etc/nginx/conf.d/default.conf

# Gesundheitscheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Port freigeben
EXPOSE 3000

# Startbefehl
CMD ["nginx", "-g", "daemon off;"]