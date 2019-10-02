# Deploying Another Code Body via a CI/CD Pipeline

We'll be using ghost.org as an example

# Steps

# Ghost Installation 
## Things we wished we knew
  - [We should have followed these directions](https://ghost.org/docs/install/ubuntu/)
## Beginning Steps

- make a directory to store this and go into that directory
- type `curl https://ghost.org > index.html`
  - this will copy the entire html code body onto your machine
  - type `live-server` to see it hosted locally on your machine at http://localhost:8080
    - if live-server is not running, install it via an npm package or through the marketplace on your IDE. this will spin up the app on your local machine and detects changes automatically
- move up a level from that directory and make another folder. something like `ghostProxy` and into that folder.
  - create a folder called `proxy`
  - create these files on the same level as proxy: .env, application.properties
  - go into the public folder and create a file called `index.js`
  - copy what we have from index.js into yours
- in terminal, type `npm install`
  - type in `npm install express superagent`
- go back to the proxy folder and create a new file called `index.html`
  - copy everything from our index.html into your index.html
  [Landing Page](/resources/LandingPage.png)
- navigate to localhost:8080 and type in the url for ghost.org. There will be a forbidden error with Ghost: ![Doesn't work with Ghost!](/resources/RequestOutput.png)
  - if you type in another site like cnn.com, it will work :D ![Works with CNN!](/resources/OutputSuccessWithCNN.png)
