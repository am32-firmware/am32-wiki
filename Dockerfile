FROM node:lts-alpine AS build

RUN apk update
RUN apk add --no-cache git
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/.vitepress/dist /usr/share/nginx/html