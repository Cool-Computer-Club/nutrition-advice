# Nutrition Advice
## Week 3 - API Project - An educational tool for food

## What?
- Build a website that utlises at least 2 APIs
- **Chosen subject matter:** food and nutrition education  
We are going to build a website that provides nutritional information for users.

## Core features (MVP)
- Use more than one API (Nutrition API, Google Vision, Recipe API)
- Responsive design
- TDD (Look into stubbing/mocking functions to help test API requests)
- Dynamic content
- A solid README

## Stretch Goals
- Mobile first
- Nice design (CSS)
- Use local storage or session storage

## Why?
We're creating this website to practice our API querying skills.

One in four British adults is obese. The UK has the highest level of obesity in Western Europe. The [subject matter](http://www.nhs.uk/Livewell/loseweight/Pages/statistics-and-causes-of-the-obesity-epidemic-in-the-UK.aspx) has been chosen to help educate people on food types and nutrition. Obesity levels in the UK have more than trebled in the last 30 years and, on current estimates, more than half the population could be obese by 2050.

## How?
- Using test driven development
- Everyone on the team must write at least one test
- Pair programming

## When?
- We have two days to create this project.

## Project plan - Idea 1

The user enters the name of a food item. Our site queries 2 APIs to print out:
- nutritional information about the food item
- recipe that can be made using this food item

If time:
- Add Google Vision API, so that user can upload a picture instead of searching by a word

### Initial layout ideas:

1. Separate search boxes depending on whether the user is searching for nutrition info or recipes
2. **One search box, two different search buttons**

![Homepage design](/images/20161102_124218.jpg)
 (Red design = dummy page for user to choose between pre-loaded pictures - to demonstrate a future feature, where the user can upload their own picture)

### Button layout:

Original design (in picture above):
- Nutrition button directly below search bar, Recipes button underneath

Alternatives:
1. Nutrition & Recipes inline, directly below the search bar
2. **Nutrition & Recipes inline, directly below the search bar**
3. Both buttons inline with the search bar

![Homepage design](/images/20161102_124956.jpg)

#### Layout of nutrition/recipes info from API

When either button is clicked, information appears below and the buttons themselves turn into tabs. Whichever button is clicked, becomes the active tabs
![Homepage design](/images/20161102_130719.jpg)

New idea:
- One serach button (inline with search bar)
- Before search button is clicked, explanatory information about our site is displayed below the search bar
- After search button is clicked, Nutrition and Recipes appear as tabs (they are no longer buttons)

**Chosen design:**
![Homepage design](/images/20161102_143726.jpg)


## Project plan - Idea 2

Recipe APIs won't play nicely without a backend server :cry:

This time, our target audience is children.  
As we are trying to educate about food items that a child may not have seen before, we can also query a spell checker API to make sure that the user has input the correct word.

Give two input options for the search: text or picture.

Also, rather than merely printing out the nutritional information that we receive from the API, we will add a recommendation feature.  
It compares the API output (e.g. amount of sugar in the food item), to the user's recommended daily intake, and display a green/amber/red circle based on whether the food item is considered healthy or not.
![Homepage design](/images/20161103_102753.jpg)
(Could put a traffic light next to each item in the list instead i.e. separate recommendation icon based on the amount of sugar, the amount of fat, etc.)
