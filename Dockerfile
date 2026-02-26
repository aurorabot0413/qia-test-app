# Build stage - npm install and build in cloud
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm ci --silent --legacy-peer-deps

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
