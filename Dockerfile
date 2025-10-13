FROM nginx:alpine

# Erstelle das Verzeichnis für statische Dateien
RUN mkdir -p /usr/share/nginx/html

# Kopiere die statischen Dateien
COPY ./public/ /usr/share/nginx/html/

# Kopiere die nginx Konfiguration
COPY ./nginx.conf /etc/nginx/nginx.conf

# Setze die korrekten Berechtigungen
RUN chmod -R 755 /usr/share/nginx/html

# Port freigeben
EXPOSE 80

# Startbefehl
CMD ["nginx", "-g", "daemon off;"]