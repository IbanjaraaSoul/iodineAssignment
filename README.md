# iodineAssignment

This is a project developed in node.js using npm and cypress to automate an EndtoEnd flow in  "iodinesoftware.com" website. 
Please find below steps to setup the project in local and further to execute it

Step 1: Make sure node js is installed in your system. Any version above 10 should be fine but preffered would be latest one available here : https://nodejs.org/en/ 
Step 2: install the node js exe file and run to install it at default location.
Step 3: Verify if node and npm is installed by running 'node -v' & 'npm -v' in win cmd prompt.
step 4: To run this project clone the repo in your local using command git clone <repo path>
step 5: Open the project in visual studio code IDE and launch a terminal
Step 6: Run 'npm i' to install all dependencies in your local
Step 7: Run 'npx cypress open' to launch the cypress
Step 8: Run the feature file from test runner in any of the browser ( Chrome preffered)  
Step 9: Incase feature file is not running ( due to on going issue with cucumber preprocssor) , you can run the project from newSpec.js file also.  
  
  Note : Hardcoded waits have been added as cypress is trying to search elements within iframe even when iframe has not completely loaded. Hardcoded wait is giving ample time for iframe to load. This can further be improved. 
