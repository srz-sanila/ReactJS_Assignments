# For setting up the react app in local

- Clone the repo
- run `yarn install` [To get the dependencies for the app]
- run `yarn start` [To run the the app in local]
- Then the app will run on http://localhost:3000 in browser

# Folder structure to follow

- We had created 5 folders inside `src` for keeping all project related files

1. `assets` - To keep all assets file like image, docs etc
2. `components` - To keep component files. You need to create seperate folders for each individual components with two files in it. One is <compnent_name>.js and styles.js. styles.js will contain all the styles related with that component. This will keep component an individual entity and make it easy to handle an d reuse. Please check the sample code inside app folder for reference. Component Folder name should be camel case.
3. `constants` - To keep globly used stuffs. For example , here you can see a file colors.js which is having colors in that. You can import this and can use colors.<color_name>
4. `store` - To keep redux related stuff. Like components, you need to create seperate folders for each state type. Folder names should be on camel case. Each folder should contain 3 files: actions.js, operations.js and reducer.js. All api calls related with that state should keep on operations.js. All these three files related with state management. The store folder also nee one rootReducer.js file which acts as the store keeper
5. `utils` - To keep utility files like config,navigation, axios config etc

# Coding standards to folow

- All folders creating inside components and store folders should be on camel case names
- The component names should be in Pascal case
- Invalid code should not be kept as commented
- Code redundency should not happen. 
- Please try to create micro componets so that it will be more reusable logical things
- Varioble namings should be camelcase
- Use functional components
- Use react hooks. 
- Try to use useffect hook rather than using life cycle methods.
- Use default value and default props on all components
- For creating layout, create a folder `common` inside component folder and use it
- Use constant files more effectively which will help us to remove code redundancy
- Try to use `ES6` standards such as arrow functions, Rest / Spred operators, import/export etc.
- Always run `yarn lint` and fix linter errors before commiting
