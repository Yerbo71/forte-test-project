FROM node:20
WORKDIR /app
RUN apt-get update && apt-get install -y netcat-openbsd
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5001
CMD ["npm", "run", "dev"]
