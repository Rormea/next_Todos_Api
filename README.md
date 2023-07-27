# Development
Pasos para levantar la app api en desarrollo

1. Levantar la DB
```
docker compose up -d
```
2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno

# Prima Comands
```
npx prisma init
npx prisma migrate dev
npx prisma generate

```