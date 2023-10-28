## Setting Up Prisma
```
npm i prisma
npx prisma init

prisma/schema.prisma

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```