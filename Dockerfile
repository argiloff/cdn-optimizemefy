FROM nginx:alpine

# Erstelle das Verzeichnis für statische Dateien
RUN mkdir -p /var/www/static

# Kopiere die statischen Dateien
COPY ./public/ /var/www/static/

# Kopiere die Nginx-Konfiguration
COPY nginx.conf /etc/nginx/nginx.conf

# Erstelle Verzeichnisse für Logs
RUN mkdir -p /var/log/nginx && \
    chown -R nginx:nginx /var/log/nginx

# Setze die korrekten Berechtigungen
RUN chown -R nginx:nginx /var/www/static && \
    chmod -R 755 /var/www/static

# Gesundheitscheck mit angemessener Wartezeit
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Port freigeben
EXPOSE 3000

# Startbefehl
CMD ["nginx", "-g", "daemon off;"]