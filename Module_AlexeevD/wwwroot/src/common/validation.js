export const accountRules = [
    {
      required: true,
      message: 'Укажите номер зачисления',
    },
    {
      type: 'number',
      message: 'Номер не соответствуе формату',
    },
    () => ({
      validator(_, value) {
        if (value < 4000000000 || value > 4999999999) {
          return Promise.reject('Проверьте введенный номер');
        }
        return Promise.resolve();
      },
    }),
  ];

export const sumRules = [
    {
      required: true,
      message: 'Укажите сумму',
    },
    {
      type: 'number',
      message: 'Укажите число',
    },
    () => ({
      validator(_, value) {
        if (value >= 0) {
          return Promise.resolve();
        }
        return Promise.reject('Сумма не может быть отрицательной');
      },
    }),
  ];

  export const selectRules = [
    {
      required: true,
      message: 'Выберите номер зачисления',
    },
  ];

  export const emailRules = [
    {
      required: true,
      message: 'Укажите email адрес получателя',
    },
    {
      type: 'email',
      message: 'Не верный email адрес',
    },
  ];

  export const nameRules = [
    {
      required: true,
      message: 'Укажите имя',
    },
    {
      min: 3,
      message: 'Имя не должен быть менее 3-х символов',
    },
  ];

  export const loginRules = [
    {
      required: true,
      message: 'Укажите имя',
    },
    {
      type: 'email',
      message: 'Укажите логин в формате primer@primer.ru',
    },
  ]

  export const passwordRules = [
    {
      required: true,
      message: 'Укажите пароль!',
    },
    {
      min: 3,
      message: 'Пароль не должен быть менее 3-х символов',
    },
  ];

  export const confirmPasswordRules = [
    {
      required: true,
      message: 'Подтвердите ваш пароль',
    },
    ({ getFieldValue }) => ({
      validator(rule, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject('Введенные вами пароли не совпадают');
      },
    }),
  ];

  export const createRule = (rule) => {
      return [{
        required: true,
        message: rule,
      }]
  }