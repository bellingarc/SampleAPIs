module.exports = [
  {
    id: 1,
    title: "Futurama",
    longDesc:
      "If you are a Futurama fan, then this api is for you. Here you can find everything from Episodes to Characters to Trivia Questions, and even some of the Products featured on the show.",
    desc:
      "An API with characters, episode listing, species, planets, and trivia questions.",
    link: "futurama",
    graphLink: "futurama/graphql",
    endPoints: [
      "info",
      "characters",
      "cast",
      "episodes",
      "questions",
      "inventory",
    ]
  },
  {
    id: 2,
    title: "Avatar",
    longDesc:
      "If you are an Avatar fan, then this api is for you. Here you can find everything from Episodes to Characters to Trivia Questions and more.",
    desc: "An API with characters, episode listings, and trivia questions.",
    link: "avatar",
    graphLink: "avatar/graphql",
    endPoints: ["info", "characters", "episodes", "questions"],
  },
  {
    id: 3,
    title: "Baseball",
    longDesc:
      "Baseball fans? Computer nerds? Now, in one place, you have baseball data and an api to access it. Have fun!",
    desc: "An API with records and trivia questions.",
    link: "baseball",
    graphLink: "baseball/graphql",
    endPoints: [
      "hitsSingleSeason",
      "hitsCareer",
      "eraSingleSeason",
      "eraCareer",
      "stolenBasesSingleSeason",
      "stolenBasesCareer",
      "battingAvgsSingleSeason",
      "battingAvgsCareer",
      "rbiSingleSeason",
      "rbiCareer"
    ]
  },
  {
    id: 4,
    title: "Recipes",
    longDesc:
      "Because everyone is making a recipe app to learn to code. So, here is some data.",
    desc: "A recipe database",
    link: "recipes",
    graphLink: "recipes/graphql",
    endPoints: ["recipes"]
  },
  {
    id: 5,
    title: "FakeBank",
    longDesc:
      "Building an app that needs some bake transactions? Well, look no further. Here are what Fry's bank statements might look like from the future.",
    desc: "Just a random set of fake bank data.",
    link: "fakebank",
    graphLink: "fakebank/graphql",
    endPoints: ["Accounts"]
  },
  {
    id: 6,
    title: "Football",
    longDesc:
      "Football fans? Computer nerds? Now, in one place, you have football data and an api to access it. Have fun!",
    desc: "An API with records and trivia questions.",
    link: "football",
    graphLink: "football/graphql",
    endPoints: [
      "passingyards-singleseason",
      "passingyards-career",
      "passingtd-singleseason",
      "passingtd-career"
    ]
  },
  {
    id: 7,
    title: "Countries",
    longDesc:
      "Who doesn't need to get the dreaded long list of countries, codes, capitals, etc. every other week? You can get them all right here.",
    desc: "An API with information about countries.",
    link: "countries",
    graphLink: "countries/graphql",
    endPoints: ["countries"]
  },
  {
    id: 8,
    title: "Presidents",
    longDesc:
      "Millions of peaches! No...not those Presidents. You're practicing API calls, why not learn a little bit about United States history in the process? Here we have a collection of all the US Presidents. Updated every 4-8 years.",
    desc: "Millions of peaches! No...not those Presidents...",
    link: "presidents",
    graphLink: "presidents/graphql",
    endPoints: ["presidents"]
  },
  {
    id: 9,
    title: "Simpsons",
    longDesc:
      "Because who doesn't need easily accessible data about the simpsons?",
    desc: "Because who doesn't need easily accessible data about the simpsons?",
    link: "simpsons",
    graphLink: "simpsons/graphql",
    endPoints: ["characters", "products", "episodes"],
  },
  {
    id: 11,
    title: "Movies",
    longDesc: "Movies.",
    desc: "Movies.",
    link: "movies",
    graphLink: "movies/graphql",
    endPoints: [
      "action-adventure",
      "animation",
      "classic",
      "comedy",
      "drama",
      "horror",
      "family",
      "mystery",
      "scifi-fantasy",
      "western",
    ]
  },
  {
    id: 12,
    title: "Wines",
    longDesc: "Wines.",
    desc: "Wines",
    link: "wines",
    graphLink: "wines/graphql",
    endPoints: ["reds", "whites", "sparkling", "rose", "desert", "port"]
  },
  {
    id: 13,
    title: "Health",
    longDesc:
      "Sometimes health data is hard to come by. This endpoints make it easy for you to test your apps with examples of health data such as medical professions.",
    desc: "An API with health and medical information",
    link: "health",
    graphLink: "health/graphql",
    endPoints: ["professions"]
  },
  {
    id: 13,
    title: "Beers",
    longDesc: "Beers.",
    desc: "Beers",
    link: "beers",
    graphLink: "beers/graphql",
    endPoints: ["ale", "stout", "red-ale"]
  },
  {
    id: 14,
    title: "Switch Games",
    longDesc: "Figured it would be a cool db to have various video games on the Switch.",
    desc: "Figured it would be fun to have a Switch game list on here.",
    link: "switch",
    graphLink: "switch/graphql",
    endPoints: ["games"]
  },
  {
    id: 15,
    title: "PlayStation Games",
    longDesc: "Figured it would be a cool db to have various video games on the PlayStation 4.",
    desc: "Figured it would be fun to have a PlayStation game list on here.",
    link: "playstation",
    graphLink: "playstation/graphql",
    endPoints: ["games"]
  },
  {
    id: 16,
    title: "XBox Games",
    longDesc: "Figured it would be a cool db to have various video games on the XBox.",
    desc: "Figured it would be fun to have a Xbox game list on here.",
    link: "xbox",
    graphLink: "xbox/graphql",
    endPoints: ["games"]
  },
  {
    id: 17,
    title: "Typer",
    longDesc: "A place to hold lessons for Typer",
    desc: "A place to hold lessons for Typer",
    link: "typer",
    graphLink: "typer/graphql",
    endPoints: ["welcomeQuestions", "webLessons", "typingLessons"]
  },
  {
    id: 18,
    title: "CSS Color Names",
    longDesc: "Thought it would be cool to include different CSS Colors Names. I was inspired when I found this site, https://xkcd.com/color/rgb/.",
    desc: "A list of CSS Color Names",
    link: "css-color-names",
    graphLink: "css-color-names/graphql",
    endPoints: ["colors"]
  },
  {
    id: 19,
    title: "The United States",
    longDesc: "Info about the all the 50 states in the United States. The endpoint includes the name, abbreviation, capital, largest city, date admitted to union, population, and state flag.",
    desc: "Info about the all the 50 states in the United States.",
    link: "the-states",
    graphLink: "the-states/graphql",
    endPoints: ["the-states"],
  },
  {
    id: 20,
    title: "Cartoons",
    longDesc: "If cartoons is what you like then boy do we have a full list of all the cartoons from the past and present and all their details including a amazingly sourced image to showcase",
    desc: "A list of Cartoons from your past.",
    link: "cartoons",
    graphLink: "cartoons/graphql",
    endPoints: ["cartoons2D", "cartoons3D",],
  },
  {
    id: 21,
    title: "Coding Resources",
    longDesc: "Women Who Code.com is an amazing community and organization. They have an amazing resource in https://www.womenwhocode.com/resources. Here you'll find their 170 resources in an API for easy search, list and share. Please give a link BACK to WomenWhoCode.com if you use this information.",
    desc: "API for all coding resources from https://www.womenwhocode.com/resources",
    link: "codingResources",
    graphLink: "codingResources/graphql",
    endPoints: ["codingResources",],
  },
  {
    id: 22,
    title: "Rick And Morty",
    longDesc: "Get all the Rick-iest Episodes, Locations and Characters from a copy of the https://rickandmortyapi.com data. That's the way Rick would have done it!",
    desc: "API for all current Rick & Morty episodes, locations and characters",
    link: "rickandmorty",
    graphLink: "rickandmorty/graphql",
    endPoints: ["characters", "episodes", "locations"],
  },
  {
    id: 23,
    title: "Coffee",
    longDesc: "Basic list of descriptions and ingredients used for the most popular coffee drinks",
    desc: "API for popular coffee drinks",
    link: "coffee",
    graphLink: "coffee/graphql",
    endPoints: ["hot", "iced"],
  },
];
