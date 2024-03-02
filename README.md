# Утилита для ввода текста с помощью микрофона

### Предустановлены:

- Структура папок и файлов под FSD
- Конфиги алиасов путей к файлам и папкам
- Eslint с конфигом
- Prettier с конфигом
- react-router-dom (/src/app/router/Router.tsx) тут еще `lazy` импорты чтобы чанки слишком жирными не были на страницы
- css modules

### Скрипты:

- Запуск дев режима: `npm/pnpm run dev`
- Сборка: `npm/pnpm run build`
- Сборка preview: `npm/pnpm run preview`
- Eslint: `npm/pnpm run lint`

### Entry-точка приложения:

`src/app/main.tsx`

### Как использовать:

1. Склонируйте репозиторий: `git clone <ссылка на репозиторий>`
2. Установите зависимости: `pnpm/npm install`
3. Запустите дев режим: `pnpm/npm run dev`
4. Откройте приложение в браузере: `http://localhost:3000`

### Структура проекта:

- src/
  - app/
    - main.tsx
  - pages/
  - widgets/
  - features/
  - entities/
  - shared/

`Ссылка на FSD` - https://feature-sliced.design/ru/docs/get-started/overview
