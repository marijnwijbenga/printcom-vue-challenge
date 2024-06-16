# Vue Challenge Print.com
### Participant: Marijn Wijbenga

## THE ASSIGNMENT

Your task is simple, yet extensive: use Vue to create the most awesome selector ever. 
Make it pretty or make it functionally cool. Think about routing, state management, but most of all: WOW us!

Create a product selector that works for three different products from our catalogue (check out the JSON files). 
If something’s missing, feel free to surprise us! 😊

- Navigate via a menu to a product:  
    a. /product/posters  
    b. /products/flyers  
    c. /products/businesscards  
- Be able to view a product selector with available options.
- Be able to select different options within the product selector.
- Add products to the cart.
- Validate if the chosen options are possible with the excludes property 
  (properties within the excludes are not compatible with each other).


## TESTING & QUALITY
When you are working in our company, you will be working in a team which has to be able to read and test your code. 
Keep best practices in mind and make sure your code is clear to read. Bonus points if you have added (unit) tests!

### RULES
- Make the assignment with Vue3, Vite, and if possible, TypeScript.
- Don’t spend too much time on the assignment, 4 hours should be enough.
- Don’t worry if you cannot finish it all, quality > quantity.
- Share your code 24 hours prior to our meeting.
- During the meeting you’ll be asked to show your code. We are curious about any “shortcuts” 
  you had to take and about the choices you made.


## Plan
*nth = nice to have

- setup the project with 
  - [x] linters & prettier
  - [x] vue router
  - [x] vitest
  - [ ] code coverage
- (nth) design in figma [no time for this]
  - [ ] the navigation menu
  - [ ] (nth) product list page (cards of posters, business cards, flyers)
  - [ ] product detail page (the product selector)
  - [ ] cart content page
- [ ] create the navigation menu
  - [ ] unit tests
- [ ] create the product list card page
    - [ ] unit tests
- [ ] create the (reusable for the 3 product types) product selector component
  - [ ] (nth) autoselect if only option left
  - [ ] unit tests
- [ ] create the product detail pages (product selector)
    - [ ] posters 
    - [ ] visite kaartjes
    - [ ] flyers
- [ ] create the cart content page
    - [ ] unit tests
- [ ] code review