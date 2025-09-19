# Stage 1: Build Angular frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend

# copy of package.json a package-lock.json
COPY frontend/package*.json ./
RUN npm install

# copy of frontend project
COPY frontend/ ./
RUN npm run build -- --configuration production

# Stage 2: Build Spring Boot backend
FROM maven:3.9.3-eclipse-temurin-17 AS backend-builder
WORKDIR /app/backend

# first just pom.xml (pre cache Maven dependency download)
COPY backend/pom.xml ./
RUN mvn dependency:go-offline

# then backend project
COPY backend/ ./

# copy Angular build do Spring Boot static resources
COPY --from=frontend-builder /app/frontend/dist/frontend/ src/main/resources/static/

# Build Spring Boot JAR
RUN mvn package -DskipTests

# Stage 3: Run the final app
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# copy final jar z backend builder
COPY --from=backend-builder /app/backend/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]