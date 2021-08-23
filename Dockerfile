FROM node:14.7.0 as build
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:1.19.0-alpine
COPY --from=build /usr/src/app/dist/angular-poc /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]