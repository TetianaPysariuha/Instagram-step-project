# Степ проект 'Instagram'

Step project "Instagram"
Course: React
DanIt group: FE online.

## Учасники проекту:
* Максим Галушка
* Тетяна Писарюга 

### Опис реалізації клієнтської частини:

Реалізація здійснена з використанням JavaScript-бібліотеки React. Додатково використані бібліотеки:
* husky (контроль якості коду)
* eslint, eslint-plugin-import, eslint-config-airbnb, eslint-plugin-jsx-a11y, eslint-plugin-react,          eslint-plugin-react-hooks (бібліотеки для контроля якості коду)
* sass (стилі)
* redux, react-redux (менеджер глобальних станів)
* redux-thunk (middleware, отримання даних з серверу)
* yup (валідація вхідних параметрів)
* formik (створення форми для створення коментаря)
* react-router-dom (маршрутизація між сторінками)
* @testing-library/jest-dom, @testing-library/react, @testing-library/user-event (тестування компонентів)

Додаток містить:
* інформацію користувачів
* інформацію про пости користувачів
* реакцію користувачів на пости: вподобання (likes), помітку "вибране" (favorites), коментарі (comments), підписників і перелік осіб, на яких підписаний користувач
* надає можливість ставити та змінювати вподобання (likes), помітку "вибране" (favorites), писати коментарі (comments), та підписуватись/відписуватись від інших користувачів (робити підписку на спостереження за постами).
* можливість переглядати дописи конкретного користувача.

Для збереження даних використано:
* MongoDB - для збереження даних про користувачів та пости
* cloudinary - для збереження медіа-файлів (картинки)

### Опис реалізації серверної частини:

Реалізація здійснена на NodeJs з використанням бібліотеки express. Додатково використані бібліотеки:
* cors (налаштування політики CORS)
* joi, express-joi-validation (валідація даних отриманих даних)
* mongoose (підключення до бази даних MongoDB)

Для запуску проекту локально необхідно:
 * для запуску локально клієнтської частини команда - npm start
 * серверна частина завантажена на сервіс heroku і знаходиться за адресою https://deploy-instagram-vercel.vercel.app
 * клієнтська частина завантажена на сервіс heroku і знаходиться за адресою https://instagram-step-project.vercel.app/
