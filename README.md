![telefoonapp](https://github.com/user-attachments/assets/ef455c64-b1a7-4072-96e7-afcc9049c0bd)
A picture of how the app looks for phones

# RealEstateCare - Vue 3 with Ionic

This is a mobile-friendly app built with Vue 3, Ionic, and Pinia for managing inspections and maintenance tasks in the RealEstateCare app. Users can view houses, track inspections (completed or pending),
manage damages, maintenance, installation, and modifications, as well as update their profile settings. Use the information to login: Website: https://realestatecareapponline.netlify.app/home
email: codyvandijk@realestatecare.com
password: admin1234
authentication code: 123456

# To get started, clone the repository and install the dependencies:

(First donwload node.js lts if you do not have it to work with npm run dev)

git clone <repository-url>

## Project setupp:

npm install

## Compiles and hot-reloads for development:

npm run dev

# Technologies Used

Vue 3 - JavaScript framework for building user interfaces

Ionic - Framework for building mobile-first web apps with Vue

Pinia - State management

Vue Router - Router for navigation between pages

Capacitor for better app usage 

API, JSON, Axios, Javascript, HTML, CSS, Bootstrap, promises, callbacks, JSON.

# App Features

The RealEstateCare app includes the following main features as soon as you login to the dashboard page:

1. Inspections: Track completed inspections, view pending inspections that need to be done, add maintenance issues such as damages, installations, and modifications.

2. Profile Settings: Update your password and personal information, on/oof dark mode, on/off notifications, (demonstration) on/off sounds for screen readers.

3. Completed inpsections: you can see the status of the inspections is closed, you add a new damage.

4. Knowledge Base: in which you can find guides to follow in case of inspection, fire and and maintenance checklist and there are example files that you can donwload.

5. Information Page: Learn how the app works, including an overview of its functionality and a information of contancting in case of an issue, question.

6. Search Page: in which you can search places.

7. Active tasks: which takes you back to the homepage.

# Routing

The app uses Vue Router to manage navigation between pages.

# Accessibility

It it possible to use the go back buttons for better use and navigation of the app, dark mode and light mode. Both of them have contrast on text so it can be accessible for all users. Notifications have also be activated to be updated, also alert messages when you fail to login or when you go back to the dashboard or when you change your password. Letting the user know what they are doing. Moreover to ensure that the application is accessible to all users, I have followed key accessibility guidelines:

1. Semantic HTML: Appropriate use of HTML elements like < button>, < header>, < footer>, and < nav> to provide context for assistive technologies.
2. Keyboard Navigation: All interactive elements, including buttons and links, are navigable using a mouse, and focus styles are provided to improve accessibility.
3. ARIA Roles and Properties: The application utilizes ARIA roles and properties to enhance accessibility for users with disabilities.
4. Color Contrast: A sufficient contrast ratio between text and background (black text on a white background) is ensured to meet accessibility standards, or when you click on an element the element becomes white
5. Text Alternatives: Alternative text is provided for the 4 big elements in the dashboard , so the user screen can have better access and read it.
6. Form Labels: All form controls are properly labeled using the "for" or "v-for" attribute to ensure that they are clearly associated with their respective input fields.
7. it has been especially created to be responsive, so the users can access from any device. It supports screen reader users like provided with <alt> description of icons. structured content in html like <h1> etc. Descriptive links in the section of informtion so they can easily find the email and contnact in case of any problem.
8. The website was tested from Lighthouse Google extension for usability, accessibility.
9. Vue router and stata management pinia has been used to navigate in pages and to make accessible for users.

# Security

The application adheres to security best practices to ensure that user data is protected:

1. Authentication: Secure authentication mechanisms have been implemented.
2. Testing: The application has undergone testing to ensure that all security measures work as intended, providing a safe environment for users.
3. Netlify & Ionic Security: The app leverages the security features provided by Netlify and Ionic, ensuring secure deployment and application management.
4. The password is using API key, indicating that the data is private and requires authentication, is hashed, tokens were used.
5. Aria was also used for extra security.

# Usability

The application is designed with usability in mind, providing an intuitive experience for users:

1. Login & Authentication: Upon login, users are required to complete a double authentication process to ensure that only authorized users can access the system.
2. Main Components: The app features four prominent components—Inspections, Knowledge Base, Settings, and Inspections—designed to be easily visible and accessible for users. There is also a text description when you hover to the gour elements to make it easier for users.
3. Knowledge Base: When users click on the Knowledge Base section, they can access example documents, schedule inspections, and view necessary damages. A back button is available for users to navigate back to the previous page(to all 4 main components)
4. Confirmation Messages: After performing an action, a confirmation message in green appears, notifying users of the successful completion of their tasks.
5. Settings: In the Settings section, users can change their password and access helpful information about how the app works.
6. It has been also tested from various browsers to give the best experience. Buttons have programatically names.
7. Missing Features: The missing features are: to make it more accessible to keyboard, add actual sound for the screen readers, being able to add more languages (I picked english (but you can also switch to dutch in settings) because a wide range of users have a understanding of english) As some features were new to me, I am still learning and implementing them slowly. And also some buttons that go backward and forward are not working properly, need to click 2 times or it takes you to a different page. And I would also have not been able to translate the whole page in different labguages, i have set as demonstration the switch from english to dutch language. 

# Style Guides

The application follows a consistent design style based on the provided style guide:

1. Use of Bootstrap and CSS: The app utilizes Bootstrap for responsive layout and component styling.
2. Typography: Legible and big fonts and appropriate font sizes are used to ensure readability.
3. Spacing & Padding: Consistent spacing and padding have been applied to ensure that the layout is clean and user-friendly.
4. Followed Jakob Nielsen's 10 Usability Heuristics for User Interface Design : 1) Visibility of system status: The application provides feedback to the user when saving information or when they try to login. 2) Match between system and the real world: Use of terms and concepts familiar to users and simple language. 3) User control and freedom: Users can edit and delete information. 4) Consistency and standards: Use of UI elements and interactions, possibility to click on the logo. 5) Error prevention: Input validation to prevent errors. 6)Recognition rather than recall: Use of labels and the example files that the user can pick. 7) Flexibility and efficiency of use: Support for both desktop and mobile users. 8)Aesthetic and minimalist design: A simple and clean design that does not overwhelm users (following the guide). 8) Help users recognize, diagnose, and recover from errors: Informative error messages when actions fail(for example login), also big buttons with colors and symbols to show them the use of the button. 10) Help and documentation: Simple language and a contanct email that redirects you to email form (in information section) in case they have questions, issues or any problem, addition of sound options for users that need sound to use the app.
   Still there is room for improvement to make it easier for user, the user to use keyboard to nagigate. Or add messages, or alerts in case the user has no internet, or a page that was not found, real sounds reading the texts so the reader screens can have an easier access.

In general I have followed WCAG 2.1 (level A) and OWASP .


# Assessment Summary:

Front-End Framework Selection
I selected Vue.js combined with Ionic for the project, ensuring a responsive design and mobile-first approach. This combination is ideal for the project's needs and provides efficient tools for building the user interface.

Development Tools
For the development environment, I set up Visual Studio Code with the necessary extensions, and I configured Node.js for managing dependencies like Axios. This setup supports smooth project development.

Design Patterns
I applied the MVC pattern in my project, using Pinia as the state management store and structuring the components in a way that separates logic from the user interface. Additionally, I utilized the Singleton pattern for managing authentication.

Custom Components and Libraries
I created custom Vue components for various parts of the application and integrated third-party libraries like Ionic to enhance the UI. The library provides responsive and interactive components such as buttons, spinners, and toolbars, which improve the user experience.

Asynchronous Programming
I implemented asynchronous programming using axios to make API requests. I used async/await for handling asynchronous data fetching in the created hook of the component, ensuring smooth data retrieval and error handling through try-catch blocks.

JSON Integration
I integrated JSON data from an external API and used it within the application. The data is properly structured and fetched dynamically to ensure smooth and efficient data exchange between the app and the API.

Routing and State Management
I used Vue Router to handle navigation between different components and Pinia for managing the application’s state. This allows for efficient state updates and seamless transitions between pages within the app.

Security, Accessibility, and Usability
I followed best practices for security by ensuring safe handling of user data. I also made the app accessible by including ARIA attributes and following WCAG guidelines, ensuring the app is usable for all users.



# Technology Stack

1. Axios: Axios is used for making HTTP requests and handling data in JSON format.
2. Ionic: Ionic provides the foundation for building mobile-friendly applications.
3. Netlify: The app is deployed on Netlify, benefiting from its secure and reliable hosting services.

# Conclusion

The RealEstateCare app has been developed to provide a comprehensive solution for managing inspections, maintenance tasks, and user profiles in a mobile-friendly environment. By leveraging the power of Vue 3, Ionic, and Pinia, the app ensures a smooth and responsive experience across devices, with an intuitive interface that meets both user and business needs.

## Key Takeaways:

1. User-Focused Design: The app incorporates accessibility and usability best practices, ensuring that all users can easily navigate and interact with its features. From semantic HTML to keyboard navigation and color contrast adjustments, every detail has been considered for a seamless experience.

2. Security and Authentication: The application follows security guidelines to safeguard user data, secure authentication, and comprehensive testing. It follows OWASP security guidelines, WCAG 2.1 accessibility guidelines (A).

3. Robust Functionality: The core features, such as house listings, inspections, maintenance tracking, and profile management, are complemented by a knowledge base and helpful informational resources, providing users with everything they need in one place.

4. Responsive Design: Built with Bootstrap for responsive layouts, the app adapts to different screen sizes, ensuring accessibility and usability on both desktop and mobile devices.

5. Continuous Improvement: While the app meets the primary project requirements, there are areas for future enhancement. These improvements will continue to enrich the user experience as the app evolves.

6. Moving Forward:
   The application is functional, with core features implemented, but ongoing development will focus on adding more content and improving user interaction. As I continue to refine the app, I will also enhance accessibility and usability based on feedback and emerging best practices.

Overall, the RealEstateCare app combines modern front-end technologies with a focus on security, usability, and accessibility, making it a powerful tool for managing real estate inspections and maintenance tasks.

Disclaimer: Please, take into account the name and email are fictional and they were used for the demonstrstion purpose of the project.
