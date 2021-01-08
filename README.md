# ID_S10205156J_TeoWeiShan_Assg02

This is a website that acts like a simple tool that allows user to be able to know their health status and also aids them in making decision to help their own health with a height and weight tracker along with a recipe suggstor.
 
## Design Process

This website is a simple and easy-to-use tool that can help users to have better control of their health.

One of the features such as BMI Tracker allows the user to keep track of their body information such as height and weight and know about their current health status based on the BMI calculated by the website. Another feature such as Recipe Suggestor allows the user to be recommended recipes with basic information that they can make and follow. 

The website is kept as simple as possible to minimise time trying to load and navigate through the website. It serves as an good alternative to downloading applications and can be easily accessed on different platforms as long as they have a browser.

- Wireframe in .pdf: https://github.com/TeoWeiShan/ID_S10205156J_TeoWeiShan_Assg02/blob/main/ID_S10205156J_TeoWeiShan_Assg2_wireframe/ID_S10205156J_TeoWeiShan_Assg2_wireframe.pdf
- Wireframe in .xd: https://github.com/TeoWeiShan/ID_S10205156J_TeoWeiShan_Assg02/blob/main/ID_S10205156J_TeoWeiShan_Assg2_wireframe/ID_S10205156J_TeoWeiShan_Assg2_wireframe.xd


## Features
 
### Existing Features
#### All Pages
- Navigation Bar - navigate through the website with ease.
- Responsive Media Query - allows details displayed on the webpage to be view adequately on different devices.
    - Collapsable Hamburger Menu - for navigation bar.
- Descriptive Content - all pages have a brief description of what it is able to do and how to use the functions available.
#### BMI Tracker
- Form - to fill in user's body information.
- Local Storage - to store user's entered information for future data uses.
- Chart - to display user's body information in a visual format.
- Table - to display user's body information in text format.
#### Recipe Suggestor
- Form - to search for recipe.
- API - to retrieve information searched not hosted on the website.
- Displayable Content - displays information searched not hosted on the website.

### Features Left to Implement
- Search for Recipes Based on Filters

## Technologies Used
- HTML
    - The project uses **HTML** to create the website.
- [JavaScript](https://www.javascript.com/)
    - The project uses **JavaScript** to allow interactivity on the website. 
- [JSON](https://www.json.org/json-en.html)
    - The project uses **JSON** to store and retrieve local data.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Bootstrap](https://getbootstrap.com/)
    - The project uses **Bootstrap** to design websites faster and easier.
- [Chart.js](https://www.chartjs.org/)
    - The project uses **JQuery** to display data visually.
- [Adobe XD](https://www.adobe.com/sea/products/xd.html)
    - The project uses **Adobe XD** to make wireframes for viewing.
- [Spoonacular API](https://spoonacular.com/)
    - The project uses **Spoonacular API** to obtain data that is provided rapidly.
- [W3C MarkUp Validation](https://validator.w3.org/)
    - The project uses **W3C MarkUp Validation** to validate HTML.
- [W3C Link Checking](https://validator.w3.org/)
    - The project uses **W3C Link Checking** to validate links included in the HTML.
- [JSHint](https://jshint.com/)
    - The project uses **JSHint** to validate JavaScript used on the website.
- [Color Contrast Accessibility Validator](https://color.a11y.com/Contrast/)
    - The project uses **Color Contrast Accessibility Validator** to validate color contrast on the website.
- [typosaurus](https://typosaur.us/)
    - The project uses **typosaurus** to check for spelling errors.

## Testing
1. Landing:
    - Go to website's link - should land on homepage.
2. Enter Site: 
    - Enter site using "BMI Tracker" from navigtion bar or homepage button - should land on "BMI Tracker" page.
    - Enter site using "Recipe Suggestor" from navigtion bar or homepage button - should land on "Recipe Suggestor" page.
3. BMI Tracker: 
    - Submit form without any inputs or missing inputs - Pop up error message in browser "Cannot be left blank" and data not submitted to local storage and not displayed.
    - Type in form with non-numerical values - Non-numerical values unable to pop-up in form.
    - Type in form with negative values - Error message in textbox "Value must be greater than or equal to 0" and data not submitted to local storage and not displayed.
    - Type in form with value exceeding 1000 in "Enter your weight (kg)" textbox - Error message in textbox "Value must be greater than or equal to 1000" and data not submitted to local storage and not displayed.
    - Type in form with value exceeding 3 in "Enter your height (m)" textbox - Error message in textbox "Value must be greater than or equal to 3" and data not submitted to local storage and not displayed.
    - Enter "BMI Tracker" page without previous data submission - Displays description, form, empty chart and table header only
    - Enter "BMI Tracker" page with previous data submission - Displays description, form, chart and table with previous data stored in local storage.
4. Recipe Suggestor: 
    - Enter "Recipe Suggestor" page - Displays description and form.
    - Submit empty form without any inputs - Displays random list of recipe containing pictures, link and recipe summary. 
    - Submit empty form with any inputs - Displays list of recipe containing pictures, link and recipe summary containing the form inputs.

The website looks similar throughout different browsers and screen except for the homepage where buttons "BMI Tracker" and "Recipe Suggestor" appear in rows in standard PC screen sizes and columns in standard phone screen sizes.

## Deployment
Website: https://teoweishan.github.io/ID_S10205156J_TeoWeiShan_Assg02

All files can be downloaded in ZIP file at: https://github.com/TeoWeiShan/ID_S10205156J_TeoWeiShan_Assg02

API Key can be changed in recipe.js to your own API Key.

## Credits

### Content
- The text for the entire website were all by me.
- BMI status provided by [Health Hub](https://www.healthhub.sg/live-healthy/410/Healthy%20Weight).
- Recipe suggestor results are provided by [Spoonacular API](https://spoonacular.com/).

### Media
- The photos used in this site were all by me.
- Recipe suggestor results are provided by [Spoonacular API](https://spoonacular.com/).

### Codes
- [Cukmekerb's Coding Class](https://cukmekerb.github.io)
- Tutorials by Ngee Ann Polytechnic School of ICT Interactive Development Department
- [Spoonacular API](https://spoonacular.com/)
- [JQuery](https://jquery.com)
- [Bootstrap](https://getbootstrap.com/)
- [Chart.js](https://www.chartjs.org/)

### Acknowledgements

- I received inspiration for this project from [Cukmekerb's Coding Class](https://cukmekerb.github.io) and Ngee Ann Polytechnic School of ICT Interactive Development Department.
