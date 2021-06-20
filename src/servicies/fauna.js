import { client, q } from "../config/db";

export const createNewUser = (formData) =>
  client
    .query(
      q.Create(q.Collection("users"), {
        data: {
          formData,
        },
      })
    )
    .then((ret) => ret)
    .catch((error) => console.error("Error: ", error.message));
