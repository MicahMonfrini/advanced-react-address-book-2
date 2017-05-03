### Setup
* From address book directory, run yarn install, yarn start

### Do
<!-- * Import the array of users into index.js -->
<!-- * Create a folder in src called components to hold all our components -->
<!-- * Create the UserDetail and ListOfUsers functional components -->
<!-- * Import and use components in App -->
* Send the user array into Apps and then into ListOfUsers
* Send the first user from the array down into the UserDetail component

### Favorites list
* Create another list of users with the headline "Selected users" next to the other list
* Initially, this list should show "No users selected"
* Add a button to the existing list of users with the label "Select user"
* When you click on that button, the user should be removed from the original user list and should be moved to the "Selected users" list
* In the "Selected users" list you should then see the users with a button "Deselect user"
* On click on "Deselect user" the user should be moved back
* Add a button that resets the whole application to its initial state (no page reload allowed)
