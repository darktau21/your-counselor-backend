# Приложение «Твой Вожатый» Backend

## Запуск приложения

### Способ 1 ([Dev Container](https://code.visualstudio.com/docs/devcontainers/containers))

Для запуска проекта необходимо просто открыть проект в VS Code, редактор сам предложит открыть папку в контейнере (возможно предварительно нужно будет установить [это расширение](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)). После запуска контейнера для старта сервера прописать в терминале `npm run start:dev`.

> Предварительно на ПК должен быть установлен Docker и Docker Compose, для Windows можно просто скачать [Docker Desktop](https://www.docker.com/)

### Способ 2

Самостоятельно установить [Node.js](https://nodejs.org/) и [PostgreSQL](https://www.postgresql.org/), в папке с проектом изменить файл `.env.development`

```dotenv
# Юзер для БД
DB_USER=dev
# Пароль для БД
DB_PASSWORD=dev123
# Адрес БД
DB_HOST=localhost
# Название БД
DB_NAME=dev-ur-counselor
# Порт для подключения к БД
DB_PORT=5432
# Адрес сервера
HOST=localhost
# Порт сервера
PORT=3000
```

Для запуска - `npm run start:dev`

## Стек

Основные зависимости для запуска приложения: [Node.js](https://nodejs.org/) (версия >= 16.20.2), [PostgreSQL](https://www.postgresql.org/) (версия >= 14.0).

Фреймворк, с использованием которого написан сервер - [NestJS](https://docs.nestjs.com/) с [Fastify адаптером](https://docs.nestjs.com/techniques/performance). В качестве ORM - [TypeOrm](https://typeorm.io/).
