
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ .
RUN npm run build -- --configuration production

FROM maven:3.9.3-eclipse-temurin-23-focal AS backend-builder
WORKDIR /app/backend

COPY backend/pom.xml .
RUN mvn dependency:go-offline

COPY backend/ .
COPY --from=frontend-builder /app/frontend/dist/frontend/ src/main/resources/static/

RUN mvn package -DskipTests


FROM eclipse-temurin:23-jre-alpine
WORKDIR /app
COPY --from=backend-builder /app/backend/target/backend-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
