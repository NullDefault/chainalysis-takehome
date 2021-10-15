# Chainalysis Take Home

Live Version is [deployed on heroku](https://take-home-testing.herokuapp.com/).

## Screenshot

![App Screenshot](https://github.com/NullDefault/chainalysis-takehome/blob/main/public/screenshot.png)

## Questionnaire:

1 - Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?

- The biggest design issue with my implementation is the backend. I am relying on the free public API's provided by the exchanges to fetch my data, meaning that (1) I am over-reliant on an external service and
  (2) there is a limit on the amount of calls to the API you can make in a provided time period. This that means my backend is not particularly scalable and would doubtfully
  be of much use in a production setting. However, the middleware logic and data structures implemented are readily reusable, meaning that the backend could be easily replaced with a fully realized solution. In other words,
  my backend is a good prototype, but not a foundation to build an actual backend on.
- I don't personally consider this sub-optimal, but it's still important to acknowledge. I did not write my components and styling from scratch,
  rather I made use of ChakraUI - a styling/component library that allows you to write css-in-js and provides basic components. In a production setting,
  it's wiser to build your components from scratch to maximize how much u can customize it and ease debugging. For this particular context, I thought ChakraUI was perfect for the job.

2 - Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)

- The biggest over-design is the inclusion of a dark mode/light mode switch. This is completely unnecessary and is included to showcase
  my design capacity and knowledge of what Chakra is capable of. The app is also fully configured for mobile layouts.
- I split up my code into components as much as possible. Although that is what is optimal in a production setting, in a smaller
  app like mine it's not as necessary and has a minor negative effect on readability. For example, the color mode switch
  doesn't have to be in its own file, it could have been declared above the Header component. I split things up to showcase
  my understanding of the component system, and my passion for sound architecture.

3 - If you have to scale your solution to 100 users/second traffic what changes would you make, if any?

- To make this possible, I'd have to create some kind of central storage which would be responsible for (1) fetching data from public api's at some time interval,
  (2) and making it accessible to user clients via an endpoint. This could be quickly implemented as a REST api in either django or node. This is conceptually simple,
  but somewhat time-consuming to implement, hence why I didn't do it for this take-home.

4 - What are some other enhancements you would have made, if you had more time to do this implementation

Big Picture Stuff

- Replace the backend with a fully pledged API. It would (1) scrape a public website for data from multiple exchanges,
  (2) save it to a database, (3) make it accessible via endpoints accessible to my user clients, (4) protect those endpoints
  with some kind of auth.
- Implement a collection of tests. My app is simple enough to be easily maintainable without them, but would certainly benefit
  from tests to verify its functionality.
- Expand to more than 2 exchanges and make the PriceTable allow you to scroll through all the different options. Include stuff
  like search and comparison functionality. Do the same for additional currencies.
- Implement a state management library like Redux to streamline state management in the component tree.

Small Things

- Add more animations. For example, make the price changes animated.
- Work more on the styling (the chainalysis website is **gorgeous**, and I would love to spend more time trying to emulate what you guys have achieved).
- Perhaps translate the project into TypeScript.