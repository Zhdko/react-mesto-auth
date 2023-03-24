// export const BASE_URL = "https://auth.nomoreparties.co";

// export const register = (password, email) => {
//   return fetch(`https://auth.nomoreparties.com/signup`, {
//     method: "POST",
//     header: {
//       Accept: "application/json",
//       "Content-Type": "aplication/json",
//     },
//     body: JSON.stringify({ password, email }),
//   })
//     .then((res) => {
//       try {
//         if (res.status === 200) {
//           return res.json();
//         }
//       } catch (e) {
//         return e;
//       }
//     })
//     .then((res) => res)
//     .catch((err) => console.log(err));
// };

export const BASE_URL = "https://auth.nomoreparties.co";

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json();
        }
      } catch (e) {
        return e;
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    })
    .catch((err) => console.log(err));
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};
