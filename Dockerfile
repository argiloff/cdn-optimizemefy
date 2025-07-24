FROM nginx:alpine

# Erstelle das Verzeichnis für statische Dateien
RUN mkdir -p /var/www/static

# Kopiere die statischen Dateien
COPY ./public/ /var/www/static/

# Kopiere die Nginx-Konfiguration
COPY nginx.conf /etc/nginx/nginx.conf

# Setze die korrekten Berechtigungen
RUN chmod -R 755 /var/www/static

# Gesundheitscheck mit angemessener Wartezeit und mehr Versuchen
HEALTHCHECK --interval=10s --timeout=5s --start-period=15s --retries=5 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

# Port freigeben
EXPOSE 3000

# Startbefehl
CMD ["nginx", "-g", "daemon off;"]