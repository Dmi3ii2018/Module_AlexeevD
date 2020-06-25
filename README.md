#### Схема базы данных  

﻿![database schema](./Module_AlexeevD/DbSchema.png "Схема базы данных")  



***
### Маршруты
***
#### Аутентификация.

##### Создание нового пользователя. 

###### POST /Auth/SignUp


**Body:**  
 {  
 "Login": //Типа email (primer@primer.ru)   
 "Name": //Имя пользователя  не менее 3-х символов    
 "Password": //Пароль  
 "ConfirmPassword": // Повтор пароля пользователя  
}

**Response:**

- Status: 200 OK
- Редирект на страницу авторизации  
***
##### Авторизация. 

###### POST /Auth/SignIn


**Body:**  
 {  
 "Login": //Типа email (primer@primer.ru)   
 "Password": //Пароль  
}

**Response:**

- Status: 200 OK
- Body: Token
***  
***  
#### Счета
##### Создание нового счета
###### POST /Account/CreateAccount
**Body**  
{  
"Sum": // Начальная сумма  
"UserId": // id клиента  
}   

**Response:**

- Status: 200 OK
***


##### Пополнить счет
###### POST /Account/PutFund
**Body**  
{  
"Sum": // Сумма пополнения  
"ReceiverAccountNumber": // номер счета зачисления  
}   

**Response:**

- Status: 200 OK
***

##### Перевод на другой счет
###### POST /Account/CreateTransaction
**Body**  
{  
"Date": // Дата операции ("2020-05-08")  
"Sum": // Сумма перевода  
"ReceiverAccountNumber": // номер счта зачисления  
"SenderAccountNumber": // id счета отправителя
"TypeOfOperation": // id типа платежа
}   

**Response:**

- Status: 200 OK
***

#### Удалить счёт
###### GET /Account/DeleteAccount/{accountNumber}
Параметр: **"accountNumber** - Номер счёта  

**Response:**

- Status: 200 OK  
***

***
***
#### Информация о пользователе
###### GET /User/Get/{Login}
Параметр: **"Login** - логин пользователя

**Response:**

- Status: 200 OK
- Body: // Объект содержащий основную информацию о пользователе  
***

#### Информация о счетах пользователя
###### GET /User/GetAccount/{id}
Параметр: **"id"** - id счёта

**Response:**

- Status: 200 OK
- Body: // Объект содержащий список всех открытых счетов данного пользователя
***

#### Информация о доступных шаблонах платежей пользователя
###### GET /User/GetTemplates/{id}
Параметр: **"id"** - id пользователя

**Response:**

- Status: 200 OK
- Body: // Объект содержащий список всех доступных шаблонов платежей
***

##### Создать новый шаблон платежа
###### POST /User/CreateTemplate
**Body**  
{  
"userId": // id пользователя
"account": // Счёт зачисления 
"paymentName": // Наименование платежа 
"receiverName": // Имя получателя
"receiverEmail": // email получателя
"purpose": // Назначение платежа
}   

**Response:**

- Status: 200 OK


