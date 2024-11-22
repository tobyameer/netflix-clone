# Netflix Clone 
#### Netflix clone using MERN Stack (MongoDB, Express, React, Node).
I built a full-stack Netflix clone using the MERN stack (MongoDB, Express, React, Node.js) for the back-end, with Firebase for storing movie-related content and MongoDB for user authentication and for storing movie data. I used Tailwind CSS to build a responsive and sleek UI, and I tested and debugged the backend APIs using Postman. The project mimics the Netflix experience by allowing users to browse movies, view details, and watch trailers. I integrated Firebase for storing movie data and used JWT-based authentication for secure user login.
<br />

## Skills
1. React.js (Components, State Management, React Router)
2. Node.js & Express (API development, server-side logic)
3. MongoDB & Mongoose (Database design, data interaction)
4. JWT Authentication (User authentication, session management)
5. Postman (API testing, debugging)
6. Axios (API data fetching)
7. HTML/CSS (Responsive design, layout with Flexbox/Grid)
8. Deployment (Heroku, Netlify, MongoDB Atlas)

## Technologies
1. Frontend:
  * React.js: Used for building a dynamic, component-based UI. I utilized React Router to handle navigation between different sections (home page, movie details, login, etc.).
  * Tailwind CSS: Applied for styling the components. Tailwind’s utility classes allowed me to create responsive and customizable layouts quickly and maintain consistency throughout the app.
  * Axios: Used for making HTTP requests to the backend and interacting with APIs (e.g., fetching movie data, sending user credentials for authentication).
    
2. Backend:
  * Node.js & Express.js: Used to build the backend server and create RESTful APIs to handle user authentication and fetch movie data from the databases (Firebase and MongoDB).
  * JWT Authentication: Implemented JSON Web Tokens to secure the API and authenticate users. This ensured that only logged-in users could access certain features, such as saving movie preferences or viewing personalized data.
  * MongoDB: Used for storing user data, including authentication details (usernames, hashed passwords) and user preferences like liked movies.
    
3. Database:
  * Firebase Firestore: Used to store movie data (titles, descriptions, images, trailers) for fast, scalable access.
  * MongoDB: Used for user data storage, which includes authentication details, user preferences, and JWT tokens.
    
4. API Testing (Postman):
  * Postman: I created and tested various API routes for user login, sign-up, and fetching movie data to ensure they were working correctly before integrating them into the front-end. I also used Postman to simulate authentication and test the secure endpoints.
    
## Challenges Faced:
1. Managing Authentication: Implementing secure JWT authentication for user sessions was one challenge. Ensuring that the JWT tokens were securely stored and validated across different pages required careful integration between the front-end and back-end.

2. Fetching and Displaying Data Dynamically: Handling dynamic movie data from Firebase and MongoDB posed challenges when ensuring that data was displayed correctly in the React components. I had to manage state efficiently to ensure that data was loaded asynchronously and updated in real-time.

3. Responsive Design: "While using Tailwind CSS helped with styling, making the app fully responsive across different devices required fine-tuning the layout and ensuring that the interface worked on both small screens mobile and large screens desktop.








  



