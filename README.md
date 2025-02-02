# Docker-Back

## Environnement de dev back :

- NodeJS
- Postgres

### Dépendances:

- Sequelize
- Express
- Express-sanitizer
- pg
- ejs
- dotenv cors

## Volumes bind

- src
- index.js
- package.json
- package-lock.json
- back_up_db

## Mise en place

- Compléter le `.env`
  - Port exposé par défaut 3000:3000
- Compléter le docker-db.env
- Lancer
  - `docker compose up -d --build`



## Structure du Container

```
.
├── README.md
├── data
├── docker
│   ├── Dockerfile.app
│   └── docker-db.env
├── docker-compose.yml
├── index.js
├── package-lock.json
├── package.json
└── src
```