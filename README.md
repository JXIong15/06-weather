# 06-weather

# 06 Server-Side APIs: Weather Dashboard

## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that provides basic setup and usage instructions. You will use `localStorage` to store any persistent data.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./Assets/06-server-side-apis-homework-demo.png)

## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

    * Uses the OpenWeather API to retrieve weather data.

    * Uses `localStorage` to store persistent data.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

* Functioning Website link: https://jxiong15.github.io/06-weather/
    * Displays an interactive weather dashboard.
* GitHub Repository Link: https://github.com/JXIong15/06-weather


## Functionalitty

* Start screen displays how to work the quiz. User can view the high score. User can se ehow much time they have to do the quiz.
* When the start button is clicked, the user begins the quiz.
* The quiz page will show one question with 4 buttons, each button has different answer choices.
* Once the user clicks on a choice, the page will tell them if they were correct or wrong while also displaying the next question.
* Once the timer reaches 0 or the user completes the questions in time, then the results page will show the user their score, time, and a message.
    * User will also be allowed to input their name/initials to display on the high score page.
* Once the user clicks "Submit", they are brought to an updated high scores list.


## Tasks Completed

* Created IDs in the HTML file to reference via JQuery in the JS file.
* Used the "hide" CSS to hide and display certain pages on the window.
* Used a separate JS file to contain the array of quiz questions. In the array are objects for each question, their answer, and the choices.
* Created a timer from one of the activities we did in class.
* Created buttons for each choice and compared the user answer to the correct answer.
* Created an array to store objects for the user's information: userName, userScore, and userTime from the current session.
* Clicking the Submit button will allow the input to be set as a variable. The High Scores page is then displayed, showing the name, score, and time.


## Incomplete Tasks

* Could not figure out how to put multiple values in the array every time the user wants to play again. I couldn't get localStorage figured out.
* Could not make the high scores ranking display in order of best to worst, though that's mainly because I can't put more than the current values on the screen.
* If the user types more than just one word for their name, then the spacing is already preset, so it looks weird. I didn't have time to make this aesthetically pleasing.
    * If the user does not input a name, then the spacing is off because there are only 2 values.
    * I know how to solve these issues, which will take time to learn. However, for simplicity, I left it as is. If I have time, I will revisit it to make containers and/or a table for everything to align nicely.


## Known Bugs

* Timer is off. The timer on the screen is correct, but when grabbing the time for the high scores, that time is wrong.


## Website Images
* Start Page: 
![Start Page](./Assets/start.png)

* Quiz: 
![Quiz Page](./Assets/quiz.png)

* Incorrect Answer on Previous Question: 
![When previous question is incorrect](./Assets/incorrect.png)

* Results Page (Lose):
![Results Page when user loses](./Assets/results-lose.png)

* Results Page (Win):
![Results Page when user wins](./Assets/results-win.png)

* High Scores:
![High Score Page](./Assets/highscores.png)

- - -
© 2021 Jou Xiong, Northwestern Coding Bootcamp