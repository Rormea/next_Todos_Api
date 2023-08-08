# Development
Pasos para levantar la app api en desarrollo

1. Levantar la DB
```
docker compose up -d
```
2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comendo de  ```npm install```
5. Ejecutar el comendo de  ```npm run dev```
6. Ejucutar estos comendos de prisma para habbilitar el seed
```npx prisma migrate dev
    npx prisma generate
```
7. Ejecutar el SEED para [crear la base de datos](http://localhost:3000/api/seed)

# Prima Comands
```
npx prisma init
npx prisma migrate dev
npx prisma generate

```