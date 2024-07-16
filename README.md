# 👋 Welcome!

Thank you so much for applying to join Tray.io and congratulations for making it this far into the
hiring process 🥳

We hope you'll enjoy this exercise as it should give you some idea of the types of problems and bugs we can come across in our day to day lives at Tray.io.

*Please don't try and spend longer then 2 hours on the test*. We understand that lives and even your current job can be hectic and time consuming, so please don't go too outside the scope of the tasks we set.

# 🏗️ Setup

1. Clone this repository to your local machine or wherever else you'd like to clone it to.
2. Once the repositories directory, ensure you have node 20 installed. If you have
   [Node Version Manager](https://github.com/nvm-sh/nvm), you can simply run `nvm use` to be on the
   correct node version.
3. Install the dependencies by running `npm install` in your terminal
4. Once all the dependencies have installed, simply run `npm start` and the app will open up on
   `http://localhost:3000/`

# 🧑‍💻 Task

Our product team has reported that our Pokemon webpage isn't working and customers are struggling to
use the site with the content we currently provide! 😱

The sort functionality doesn't seem to work at all, customers can't see any important information
about each Pokemon, and there are some easy design quick wins we can do to make the experience
better! So we need to do the following updates...

1. Update the card numbers for each pokemon card to be 3 digits long. For example, a card with a
   number of `4` should be displayed as `004` and a card with a number of `98` should be displayed
   as `098`.
2. Fix the issue with sort `Select` field so that if you select `A-Z` the cards will be sorted
   alphabetically (_`Abra` should be the first card and `Zubat` should be the last card now_). Once
   sorted, the images and card numbers should match the new order of the cards.
3. Like before, fix the sort `Select` field so that if you select `Z-A` the cards will be sorted in
   reverse alphabetical order (_`Zubat` should now be the first card and `Abra` is now the last
   card_)
4. We want to show the element types (e.g `fire`, `water`, `mystic` etc...) underneath the card
   number for every pokemon. This currently isn't returned in the API call we have to get all the
   pokemon. Instead, its accessible on the `url` property for each pokemon which. When we make a new
   API call using this `url` property for every pokemon, we'll be able to get the data we need under
   `types` in the response.
5. To ensure these mistakes don't happen again, we should add some more unit tests in our
   `App.test.tsx` file that will cover our changes. You can run the tests locally by using the
   `npm test` command.

# 🧑‍🏫 What will I be assessed on?

You'll be assessed on the following criteria:

- *Completeness* - did you successfully complete all 5 tasks?
- *Code clarity* - is your answer readable and understandable?
- *Principles & Patterns* - has your answer followed engineering best practices and formats suggested by the React, Jest, and web communities?

# 🗳️ How do I send back my test?
You can send back your test back as a `.zip` folder and email this file to your hiring contact at Tray.io. Please make sure you don't bundle the `node_modules` folder into the `.zip` (you can just delete the folder before you zip it), as this might cause the file to be too large to send over.

# 🤔 What's the next steps after I've sent my test?
You'll be invited to a Code Review & Task Refinement interview with some of the engineers here at Tray.io. In this interview we'll go over your take home test together, see how you found it, and ask you questions related to your answer.

In the second half of the interview we'll do a Task Refinement exercise with you. Using this take home test for reference, we'll go over a new project proposal and ask ideas and ways that we could tackle the project, as well as how we might go about solving some issues that might arise when building it.

# 🛟 SOS! I'm stuck, the test is broken, or this test doesn't make sense!

If you're having trouble completing the test then please don't hesitate to reach out to your hiring contact at Tray.io. You will not be penalised or marked lower for asking for help or advise, that's not something we do at Tray.io, if anything we encourage it 🫶