axios.defaults.baseURL = "http:/localhost:8080"

buat .env 

```
REACT_APP_API_BASE_URL = http://localhost:8080
```

kemudian setting axios default url api. Untuk meanggil variable d env membutuhkan process.env.nama-variable
```
process.env.REACT_APP_API_BASE_URL
```

kemduain buat file Dockerfile
```
FROM node:alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN npm ci --loglevel verbose
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

setelah itu build images 
```
dokcer build -t com.enigma/invetory-web:1.0.0
```

kemudian build container 

