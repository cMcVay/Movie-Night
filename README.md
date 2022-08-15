# Movie Night
Movie Night is a movie picking app that was created to help myself and my partner choose which movie to watch on any given evening. The app consists of a survey that then calculates the result of which movies are best for us to watch.

Movie Night App[https://flourishing-youtiao-bd3842.netlify.app/]

## Table of Contents
* Objective
* Approach
* Design
* Updates
* Creator

## Objective
An app that provides the optimal movie for a couple to watch based on their current level of attention, openess, and interest in a set of movies chosen by each member of the couple.

## Approach
I will create a react app since I need the films to be updated with user scores and then produce a result. For the movie objects, I will use a constructor to build an object with a title, description, duration, score depicting the users base preference, and a place for an updated user score based on the survey. The movies will be grouped into a list.

Users will first input a score that represents their current level of attention and openess. This will filter the list of movies to just the movies that match the attention level or *openess level.

*_Openess will be how willing the user is to watch something that has a lower base preference score._

Users will then rate each film based on their current interest in watching it.

After running through the list for each user, the app will show the top results.

## Design
The main app component renders the page with three different options for content. The options are determined by a stage variable that was set as part of the state. When the user presses the submit button, the stage is set with the next stage until completed. The survey gives buttons for the user to rate each question or film on a 0-4 scale. These numbers were chosen to give the user the least amount of options that would still effectively divide up levels of interest, and allow for 0 to conicide with a complete lack of interest. 

The buttons update the state for the current film. Then pressing submit saves those score values to the film's score keys. Then the film updates and the score is reset to 0.

Pressing submit on the final film has the film list sort and display the top options.

The style is simple and high contrast. 

## Updates

* Results Styling
    * Show only the top 3 options (unless ties)
    * Center the list
    * Hide scores, allow to be seen by clicking button
    * Include movie posters
* Movie Card
    * Add streaming availability
    * Add back button
    * Add a page number at top _ex. Movie 2 of 7_
* React-Redux
    * Possibly breaking react rules with side effects
    * Implement redux toolkit js
* Back End
    * Long term, create a database for the movie list
    * Allow adding and deleting movie from list
    * Track movie scores across multiple survey results

## Creator

This app is created by Connor Ross McVay.

