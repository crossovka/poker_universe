# Poker University
Poker University — это веб-приложение для игры в покер по сети, написанное с использованием React. В текущей версии приложение предоставляет базовый интерфейс для игры, включающий отображение стола, игроков, дилера и карт.

## Структура проекта

poker-university/
├── public/
│   ├── tables/
│   │   └── 1.png
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Card/
│   │   │   ├── index.js
│   │   │   └── card.module.scss
│   │   ├── Dealer/
│   │   │   ├── index.js
│   │   │   └── dealer.module.scss
│   │   ├── Header/
│   │   │   ├── index.js
│   │   │   └── header.module.scss
│   │   ├── Player/
│   │   │   ├── index.js
│   │   │   └── player.module.scss
│   │   └── Table/
│   │       ├── index.js
│   │       └── table.module.scss
│   ├── contexts/
│   │   ├── GameContext.js
│   ├── hooks/
│   │   ├── useGameLogic.js
│   │   └── usePlayerActions.js
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── index.js
│   │   │   └── home.module.scss
│   │   └── GameRoom/
│   │       ├── index.js
│   │       └── gameroom.module.scss
│   ├── App.js
│   ├── index.js
│   ├── context.js
│   └── index.scss
└── package.json

## Текущий функционал
Стол для покера:

Задний фон стола можно изменять.
<!-- Игроки расположены вокруг стола в зависимости от их количества. -->
Карты и банк отображаются в центре стола.
<!-- Дилер всегда отображается сверху стола. -->
Компоненты:

Card — компонент для отображения карты.
Dealer — компонент для отображения дилера.
Player — компонент для отображения игрока, его фишек и карт.
Table — компонент, объединяющий все элементы стола (игроков, карты, дилера и банк).
Страницы:

Home — главная страница с кнопкой "Играть".
GameRoom — страница с игровым столом.
Контекст:

GameContext — используется для управления состоянием игры.
useGameLogic — хук для логики игры.
usePlayerActions — хук для действий игрока (например, делать ставки).


## Будущий функционал
Подключение по сети:

Возможность игры по сети с другими игроками.
Чат для общения между игроками.
Дополнительные функции:

Система учета очков и рейтингов.
Поддержка различных типов покера.
Возможность настройки и изменения внешнего вида стола и карт.
Улучшенный интерфейс:

Анимации для распределения карт и фишек.
Звуковые эффекты для улучшения пользовательского опыта.

### Как запустить проект
Клонируйте репозиторий:

git clone https://github.com/your-username/poker-university.git
cd poker-university
Установите зависимости:

npm install
Запустите проект:

npm start
Откройте http://localhost:3000 для просмотра в браузере.

Как это работает
Компоненты
Card отображает отдельную карту с ее значением и мастью.
Dealer отображает дилера, который размещен в верхней части стола.
Player отображает игрока с его аватаром, фишками, картами и текущей комбинацией.
Table объединяет всех игроков, дилера, карты и банк, и задает фон стола.
Контекст и хуки
GameContext управляет состоянием игры (игроки, банк и т.д.).
useGameLogic отвечает за игровую логику, такую как раздача карт и определение победителя.
usePlayerActions предоставляет действия для игроков, такие как возможность делать ставки.

## Вклад
Мы приветствуем вклады в наш проект! Если у вас есть идеи по улучшению функциональности или вы нашли баг, пожалуйста, создайте issue или отправьте pull request.