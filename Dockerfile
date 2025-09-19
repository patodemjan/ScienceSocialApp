# Stage 1: Build Angular frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install --legacy-peer-deps
COPY frontend/ .
RUN npm run build -- --configuration production

# Stage 2: Build Spring Boot backend
FROM maven:3.9.3-eclipse-temurin-17 AS backend-builder
WORKDIR /app/backend
COPY backend/pom.xml ./
RUN mvn dependency:go-offline
COPY backend/ .
# Skopíruj Angular build do Spring Boot static
COPY --from=frontend-builder /app/frontend/dist/ ./src/main/resources/static/
RUN mvn package -DskipTests

# Stage 3: Run app
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=backend-builder /app/backend/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
