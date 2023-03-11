# О Проекте
Проект реализован на современном стэке React, Redux-Toolkit, TypeScript. В нем можно создать собственный калькулятор, перетаскивая элементы с одной части в другую. Имеет 2 режима такие как:
 
- Constructor - режим перетаскивания и создания собственного калькулятора;
- Режим Runtime - режим самого приложения калькулятора для вычислениий;

## Стэк: 
- TypeScript
- Css modules
- React 
- Redux-Toolkit

## Библиотеки
- React Dnd (drag n drop)

## Файловая структура
В проекте используются простая модульная архитектура состоящая из: 
 - pages - страниц
 - modules - модулей состоящая из компонентов
 - components - компоненты состоящие из ui
 - ui - элементы ui(кнопки и так далее)
 
 - services - лежит логика State Managementа "Redux-Toolkit". Файл store инициализирует configureStore
 - utils - лежать вспомогательные скрипты, стили, типы, интерфейсы;
 - assets - иконки, картинки
 
 ## Использовать
 ### Скачать все модули
 ```
 npm install
 ```
 ### запустить проект в режиме разработки
 ```
 npm start
 ```
 ### Продакшен
 ```
 npm run build
 ```
 
 
 
