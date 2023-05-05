# Objectives for this Project

Create an Issue tracker with basic functionality as follows:
- [ ] Create an issue with input as title, description and initial state as New
- [ ] Issue can be updated from New to In Progress, In Progress to Done.
- [ ] Each state to have is own swim lane, i.e., issues with similar states to be displayed together. (Kanban view is good to have but not mandatory)
- [ ] Update(title, description) and delete operation

Stretch goals:
- [ ] Integrate with github issues API (https://docs.github.com/en/rest/issues/issues). For repo parameter, you can use the repo to which you will be pushing this project. For delete, you can use lock endpoint.

# Here's what's been done thusfar

- [x] Understand the basics of React
- [x] Setup all the necessary tools required
  - [x] Install `nvm`
  - [x] Install `Node.js` and `npm`
  - [x] Install `npx`
  - [x] Install `create-react-app` extension
- [x] Create a boilerplate app using `create-react-app` extension
- [x] Create a GitHub repository (bharath144/issue-tracker)
- [x] Modify the basic app and get it ready for building the `issue-tracker` app.
  - [x] Remove unwanted code
  - [x] Setup ESlint
  - [x] Create components for individual screens/views
    - [x] Research the web for css styling for views
    - [x] Creating issues
    - [x] Listing/viewing issues
    - [x] View individual issue
- [ ] Setup a database (MongoDB)
  - [x] Develop a backend server (Node.js+express)
  - [x] Expose routes that allow CRUD and READs from the collection
  - [x] Build the routes for the main app to consume
    - [x] Create
    - [x] Get ALL
    - [x] Get Individual
    - [x] Patch
    - [x] Delete
- [x] Build the create issue view
  - [x] Accept and validate input
  - [x] Save data to database
- [ ] Build the list all issues view
  - [ ] Read data from DB and list the issues
  - [ ] Enabling filtering based on state
- [ ] Build the individual issue view
  - [ ] Read data from the DB
  - [ ] Enable `Edit` and `Delete` issue functionality
  - [ ] Add shortcuts to change state
- [ ] Build the edit issue view
  - [ ] Base it on create issue view
  - [ ] Similar validations
- [ ] Setup GitHub Actions/CI-CD for the project