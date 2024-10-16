# Etapa de construcción
FROM node:18-alpine AS build

WORKDIR /usr/src/app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Ejecutar el proceso de compilación (esto generará la carpeta dist)
RUN npm run build

# Etapa de producción
FROM node:18-alpine

WORKDIR /usr/src/app

# Copiar solo los archivos necesarios para la producción desde la etapa de construcción
COPY --from=build /usr/src/app .

# Comando para ejecutar el backend en modo producción
CMD ["npm", "run", "start:prod"]

