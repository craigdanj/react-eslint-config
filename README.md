# eslint-config
An Eslint configuration for a React project

To integrate into an existing project: 
1. Copy the dev dependencies into your project's package.json.
2. Copy the .eslintrc.js file into the root directory of your project.
3. Copy the 'lint' script from the package.json into your projects package.json. 
3. Run `npm i` to install the dev dependencies required for eslint.
4. You should be able to lint using the 'npm run lint' command now.


##Configuration:
In the `extends` section of the `.eslintrc.js` file select the rule set you prefer by commenting out the appropriate line.
There are a few rules specified at the bottom of the file that are optional and can be enabled if required.