import axios from "axios";

let orderUrl = "https://qtickets.ru/api/rest/v1/orders";
let customersUrl = "https://qtickets.ru/api/rest/v1/clients";

let body = {
  site: {
    host: "https://happy-bardeen-5a364c.netlify.app/",
  },

  payment_id: 6170,
  payment_type_id: "card",
  event_id: 10445,
  currency_id: "RUB",
  utm: {
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: "utm_metki",
  },

  fields: {
    work_position: "Менеджер",
    legal_name: 'ПАО "СИБУР ХОЛДИНГ"',
    inn: "7727547261",
    kpp: "720601001",
  },
};

export const addNewClient = (user) => {
  const baskets = [
    {
      show_id: 27637,
      seat_id: "registraciya-na-gonku-1;1",
      client_email: user.email,
      client_phone: user.phone,
      client_name: user.firstName,
      client_surname: user.lastName,
      work_position: "Менеджер",
      legal_name: 'ПАО "СИБУР ХОЛДИНГ"',
      inn: "7727547261",
      kpp: "720601001",
    },
  ];

  const client = {
    email: user.email,
    details: {
      phone: user.phone,
      name: user.firstName,
      middlename: user.lastName,
      surname: "",
    },
  };

  const custom = {
    gen: user.gen,
    distance: user.distance,
    category: user.category,
  };

  const data = { data: { ...body, client, baskets, custom } };

  const options = {
    method: "POST",
    headers: {
      Accert: "application/json",
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.QTICKETS_API_KEY}`,
    },
    // data: JSON.stringify(data),
    url: orderUrl,
  };



  axios(options)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
