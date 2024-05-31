hosted on -https://sandeep14k.github.io/spo-task1
# Students' Placement Office (SPO) Portal - IIT Kanpur

This is a comprehensive preparation portal for the Students' Placement Office (SPO) at IIT Kanpur. The portal provides insights into placements and internships, roadmaps, resumes of seniors, preparation resources, FAQs, and mock tests. The application is built using React.

## Code Structure

spo-portal/
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Faq.js
├── css/
│   ├── home.css
│   ├── insights.css
│   ├── insightdata.css
├── data/
│   ├── placement_insights.json
│   ├── internship_insights.json
├── pages/
│   ├── Home.js
│   ├── Coding.js
│   ├── InsightData.js
│   ├── InsightResults.js
│   ├── TestList.js
├── App.js
├── index.js
├── package.json
└── README.md

components/: Contains reusable components such as Navbar, Footer, and Faq.

css/: Contains CSS files for styling the components and pages.

data/: Contains JSON files for placement and internship insights.

pages/: Contains React components for different pages of the application, such as Home, Coding, InsightData, InsightResults, and TestList.

App.js: Defines the main component of the application, routing logic, and layout.

index.js: Renders the root component (App) into the root DOM element.

package.json: Contains metadata about the project and its dependencies.

README.md: This file; contains instructions on how to run the project and describes its structure.


### Navigation

Navbar: Contains links to Insights, Roadmaps, Preparation Resources, Mock Test, and FAQs.
Insights: Displays placement and internship insights.
Roadmaps: Displays roadmaps for preparation.
Preparation Resources: Provides resources for preparation.
Mock Test: Provides mock tests for practice.
FAQs: Displays frequently asked questions.

#dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
### How to Run
To run this project locally, follow these steps:
1.Clone this repository to your local machine:
git clone https://github.com/your-username/spo-portal.git
2.Install dependencies using npm or yarn:
npm install or yarn install
3.Start the development server
npm start or yarn start
