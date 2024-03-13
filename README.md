***README content inspired by https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes that group 70 reviewed on 03/11/24***

# Care for All
Care for All EHR (electronic health record) is a prototype database application designed for the comprehensive recording and management of healthcare-related data. 

THis includes patient profiles, provider profiles, and detailed records encompassing patient visits to healthcare providers, completed with credentials including insurance information and clinical notes.

## Table of Contents
* [Technologies used](#technologies-used)
* [Libraries/Modules Used](#librariesmodules-used)
* [Purpose Statement](#purpose-statement)
* [UI Screenshot](#ui-screenshot)
* [Project Maintenance](#project-maintenance)
* [Code Citations/Credit](#code-citationscredit)

## Technologies Used
This application created with:
1) MySQL for database
2) Node.JS and Express for backend
3) React for frontend

## Libraries/Modules Used
This application was made possible by the following libraries/modules:
1) Create React App
2) nodemon
3) forever
4) axios
5) cors
6) dotenv
7) jquery
8) react-router-dom
9) mysql
10) node
11) express
12) react

## Purpose Statement
This project is created to emulate a real-world usage of an electronic health record and the kind of healthcare data that may be collected during a visit between a patient and healthcare provider.

## UI Screenshot
A screenshot of the general layout of all pages, which consist of a navigation bar, description for available operations, search/filter boxes, form to add entry, and the database table.

<img src="https://github.com/anson-poon/care-for-all-ehr/assets/75619539/6b6be52f-d9c7-45f3-b9f5-763130a10d6f" width=85%>


## Project Maintenance
The project is currently being maintained by Anson and Tony, students in CS340 at Oregon State University.

## Code Citations/Credit
1) https://github.com/osu-cs340-ecampus/nodejs-starter-app/tree/main/Step%201%20-%20Connecting%20to%20a%20MySQL%20Database architecture inspired the development of the architecture for this project, along with the db-connector code was modified by this project's group to connect the application to a database.
2) https://github.com/safak/youtube2022/tree/react-mysql code was considered, reviewed, and learned by group 70 to learn to implement basic methods for CRUD. After learning how to implement CRUD methods by following this project, group 70 then adapted the CRUD implementation strategies to Care for All to implement CRUD methods with consideration of the project's constraints.
3) CS290 concept of Model-View-Controller was reviewed by group 70. This concept was then refined to help group 70 make this project's architecture more modular and maintainable, i.e., splitting code that handles route and code that handles SQL logic into separate directories in the backend.
4) https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b was reviewed by group 70 to learn technique to deploy React with Node.JS/Express/MySQL all on one server. Technique was adapted to the backend's architecture.
5) https://www.geeksforgeeks.org/how-to-disable-a-button-in-reactjs/ used to learn technique to create a submission button to add new data to certain entities that can be disabled in react with the ability to chage its color to indicate disabled
6) https://www.shecodes.io/athena/72444-how-to-do-conditional-rendering-of-html-elements-in-react was used to learn how to conditionally render HTML in react
