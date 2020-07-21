import axios from 'axios'

let orderUrl = 'https://qtickets.ru/api/rest/v1/orders'
let customersUrl = 'https://qtickets.ru/api/rest/v1/clients'

let body = {
    "data":{
    "client": {
      "email": "",
      "details": {
        "phone": "",
        "name": "",
        "middlename": "",
        "surname": ""
      }
    },

    "site": {
      "host": "reserse.ru"
    },

    "payment_id": 6170,
    "payment_type_id": "card",
    "event_id": 10445,
    "currency_id": "RUB",
    "utm": {
      "utm_source": "google",
      "utm_medium": "cpc",
      "utm_campaign": "utm_metki"
    },

    "custom": {
      "var1": "val1",
      "var2": "val2"
    },

    "fields": {
      "work_position": "Менеджер",
      "legal_name": "ПАО \"СИБУР ХОЛДИНГ\"",
      "inn": "7727547261",
      "kpp": "720601001"
    },

    "baskets": [
      {
        "show_id": 27637,
        "seat_id": "registraciya-na-gonku-1;1",
        "client_email": "",
        "client_phone": "",
        "client_name": "",
        "client_surname": "",
        "work_position": "Менеджер",
        "legal_name": "ПАО \"СИБУР ХОЛДИНГ\"",
        "inn": "7727547261",
        "kpp": "720601001"
      }
    ]
  }
}


export const addNewClient = (user) => {console.log('newYser', user)}