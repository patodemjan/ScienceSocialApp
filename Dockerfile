# ---------- Krok 2: build Spring Boot backend ----------
FROM maven:3.9.3-eclipse-temurin-23-focal AS backend-builder
WORKDIR /app/backend

# Skopíruj pom.xml a stiahni dependencies
COPY backend/pom.xml .
RUN mvn dependency:go-offline

# Skopíruj backend zdrojáky
COPY backend/ .

# Skopíruj Angular build do Spring Boot static
COPY --from=frontend-builder /app/frontend/dist/frontend/ src/main/resources/static/

# Postav Spring Boot JAR
RUN mvn package -DskipTests
