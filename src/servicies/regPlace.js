import axios from "axios";

const baseUrl = "https://api.reg.place/v1"; // events/reverse-side-of-the-road-2021
const getRaceId = (u) => {
  if (u.distance === "short") return 6307;
  if (u.distance === "long" && u.category === "multi") return 6308;
  if (u.distance === "long" && u.category === "single") return 6305;
  if (u.distance === "long" && u.category === "fix") return 6306;
};

const getUserdata = (user) => {
  const heat = {
    race_id: getRaceId(user),
    token: process.env.GATSBY_REG_PLACE_API_KEY,

    form_fields: {
      "personal.name_last": user.lastName,
      "personal.name_first": user.firstName,
      "personal.birthday": "1999-01-01",
      "personal.gender": user.gen,
      "porsonal.category": user.category,
      "contacts.phone": user.phone,
      "contacts.email": user.email,
    },
  };

  const options = {
    method: "POST",
    data: JSON.stringify(heat),
    headers: {
      "Content-Type": "application/json",
    },
    url: `${baseUrl}/heats`,
  };

  return options;
};

export const addHeat = async (user) => {
  let options = getUserdata(user);

  try {
    let res = await axios(options);

    if (res.data.status === "success") {
      return res.data.heat.payment_url;
    } else if (res.data.status === "error") {
      throw new Error(res.data.message);
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
