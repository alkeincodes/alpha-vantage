# alphavantage

## File Structure

1. Used SCSS to speedup my coding process in writing CSS and created global variables (`_variables.scss`). I practiced myself doing it this way in case the team decide to change the Project Theme.
2. Router and Store - I did an abstract approach in which I make routes/store files inside a specific module and put all the related routes/store there and then merge it to the parent router index.
3. Created `register-global.js` for dynamic import Icons and other stuff that might need dynamic import.

## Plugin Installed
1. MomentJS
2. BootstrapVue
3. Axios
4. Vuex
5. VueRouter
6. VueApexcharts

## Project Decisions
1. I made abstract routes for other navLinks in design so I can just easily loop through all the routes and display it on the frontend.
2. Installed Vuex to avoid duplicate codes in making functions in the future and also the date will be shareable to all components/page.
3. Categorized all scss files into its respective parts of the app to easily navigate in case we change anything.
4. Route and Store File Structure - In case the project is too large, we can easily maintain it or easily to understand if there's a new Developer working on the project. If the developer is working on specific module, he can just focused on the module folder and do necessary changes or fixes.