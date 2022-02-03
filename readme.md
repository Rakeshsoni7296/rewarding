# 1) Requirements
  > NodeJS should be installed (version: ^16.13.1)
  > The application required mongodb installed locally (version: ^5.0.5)
  > Run the current application on the given versions to use the application smoothly

# 2) Start the website
  > Start Mongodb server (Locally)
  > Run: "npm install"
  > Run: "node helper/init.database.js --delete"
  > Run: "node helper/init.database.js --import"
  > Run: "npm start"

# 3) Use the Application
  > Go to http://localhost:4000/api/v1 to visit homepage
  > Enter user's mongodb id in the given input('Enter Userid')
  > If user exists then it will update "isPaymentMade" to "true" (if it was false) and increment the referredUser's totalEarnings by "10"
  > If any error or glitch exist then we will get the corresponding message