import { house, restaurant, shoppingBags, medical } from "assets/images";

const data = {
  id: 3,
  name: "Mieszkanie",
  description: "lorem ipsum dolor sit amet quebo na fide oraz taco hemingway",
  icon: house,
  currency: "PLN",
  users: [
    {
      nickname: "Marek",
      picture:
        "https://s.gravatar.com/avatar/e32bd13e2add097461cb96824b7a829c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
    },
    {
      nickname: "Moniak23",
      picture:
        "https://s.gravatar.com/avatar/e32bd13e2add097461cb96824b7a829c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
    },
  ],
  transactions: [
    {
      category: {
        name: "Restaurants",
        picture: restaurant,
      },
      name: "La Tavola",
      amount: 115.9,
      date: "18-01-2022",
      isPayed: false,
      addedBy: {
        nickname: "Moniak23",
        picture:
          "https://s.gravatar.com/avatar/e32bd13e2add097461cb96824b7a829c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
      },
      involvedUsers: [
        {
          nickname: "Marek",
          picture:
            "https://s.gravatar.com/avatar/e32bd13e2add097461cb96824b7a829c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
        },
        {
          nickname: "Moniak23",
          picture:
            "https://s.gravatar.com/avatar/e32bd13e2add097461cb96824b7a829c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
        },
      ],
    },
    {
      category: {
        name: "Shops",
        picture: shoppingBags,
      },
      name: "T-shirt",
      amount: 45.0,
      date: "11-01-2022",
      isPayed: true,
      addedBy: {
        nickname: "Moniak23",
        picture:
          "https://s.gravatar.com/avatar/e32bd13e2add097461cb96824b7a829c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
      },
      involvedUsers: [
        {
          nickname: "Marek",
          picture:
            "https://s.gravatar.com/avatar/e32bd13e2add097461cb96824b7a829c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
        },
        {
          nickname: "Moniak23",
          picture:
            "https://s.gravatar.com/avatar/e32bd13e2add097461cb96824b7a829c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
        },
      ],
    },
    {
      category: {
        name: "Medical",
        picture: medical,
      },
      name: "Dentist",
      amount: 250.0,
      date: "28-01-2022",
      isPayed: false,
      addedBy: {
        nickname: "Moniak23",
        picture:
          "https://s.gravatar.com/avatar/e32bd13e2add097461cb96824b7a829c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
      },
      involvedUsers: [
        {
          nickname: "Marek",
          picture:
            "https://s.gravatar.com/avatar/e32bd13e2add097461cb96824b7a829c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
        },
      ],
    },
  ],
};

export default data;
