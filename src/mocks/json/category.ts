import { house, restaurant, shoppingBags, medical } from "assets/images";

const data = {
  id: 3,
  title: "Mieszkanie",
  description: "lorem ipsum dolor sit amet quebo na fide oraz taco hemingway",
  category: {
    src: house,
    name: "home",
  },
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
      id: 1,
      category: {
        value: "restaurants",
        name: "Restaurants",
        picture: restaurant,
      },
      name: "La Tavola",
      amount: 115.9,
      date: "01-18-2022",
      isPayed: false,
      payedBy: {
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
      id: 2,
      category: {
        value: "shops",
        name: "Shops",
        picture: shoppingBags,
      },
      name: "T-shirt",
      amount: 45.0,
      date: "01-11-2022",
      isPayed: true,
      payedBy: {
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
      id: 3,
      category: {
        value: "medical",
        name: "Medical",
        picture: medical,
      },
      name: "Dentist",
      amount: 250.0,
      date: "01-28-2022",
      isPayed: false,
      payedBy: {
        nickname: "Marek",
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
    {
      id: 4,
      category: {
        value: "restaurants",
        name: "Restaurants",
        picture: restaurant,
      },
      name: "La Tavola",
      amount: 115.9,
      date: "01-18-2022",
      isPayed: false,
      payedBy: {
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
      id: 5,
      category: {
        value: "shops",
        name: "Shops",
        picture: shoppingBags,
      },
      name: "T-shirt",
      amount: 45.0,
      date: "01-11-2022",
      isPayed: true,
      payedBy: {
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
      id: 6,
      category: {
        value: "medical",
        name: "Medical",
        picture: medical,
      },
      name: "Dentist",
      amount: 250.0,
      date: "01-28-2022",
      isPayed: false,
      payedBy: {
        nickname: "Marek",
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
    {
      id: 7,
      category: {
        value: "restaurants",
        name: "Restaurants",
        picture: restaurant,
      },
      name: "La Tavola",
      amount: 115.9,
      date: "01-18-2022",
      isPayed: false,
      payedBy: {
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
      id: 8,
      category: {
        value: "shops",
        name: "Shops",
        picture: shoppingBags,
      },
      name: "T-shirt",
      amount: 45.0,
      date: "01-11-2022",
      isPayed: true,
      payedBy: {
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
      id: 9,
      category: {
        value: "medical",
        name: "Medical",
        picture: medical,
      },
      name: "Dentist",
      amount: 250.0,
      date: "01-28-2022",
      isPayed: false,
      payedBy: {
        nickname: "Marek",
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
