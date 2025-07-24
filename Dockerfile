FROM nginx:alpine

# Erstelle ein Verzeichnis für die statischen Dateien
RUN mkdir -p /var/www/static

# Kopiere die statischen Dateien in das persistente Verzeichnis
COPY ./public /var/www/static

# Kopiere die Nginx-Konfiguration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Erstelle einen symbolischen Link vom Nginx root zum persistenten Verzeichnis
RUN ln -sf /var/www/static /usr/share/nginx/html

# Stelle sicher, dass Nginx auf das Verzeichnis zugreifen kann
RUN chown -R nginx:nginx /var/www/static && \
    chmod -R 755 /var/www/static