

![phonecase](https://github.com/user-attachments/assets/7cd110ef-3f4a-4314-94f2-e15dc9665034) A picture of how the app looks for phones

# RealEstateCare - Vue 3 with Ionic and Pinia
This is a mobile-friendly app built with Vue 3, Ionic, and Pinia for managing inspections and maintenance tasks in the RealEstateCare platform. Users can view houses, track inspections (completed or pending),
manage damages, maintenance, installation, and modifications, as well as update their profile settings. Use the information to login: Website: [https://nikolereal.netlify.app/login](https://protypeb.netlify.app/home)
email: codyvandijk@realestatecare.com
password: admin123
authentication code: 123456 
(Please note that these accounts are fictitious and intended for demonstration purposes)

# To get started, clone the repository and install the dependencies:
git clone <repository-url>

## Project setupp: 
npm install

## Compiles and hot-reloads for development: 
npm run dev


# Technologies Used

Vue 3 - JavaScript framework for building user interfaces

Ionic - Framework for building mobile-first web apps with Vue

Pinia - State management library for Vue 3

Vue Router - Router for navigation between pages

Webpack, API, JSON, Axios

# App Features

The RealEstateCare app includes the following main features as soon as you login to the dashboard page:


1. Inspections: Track completed inspections, view pending inspections that need to be done, add maintenance issues such as damages, installations, and modifications.

2. Profile Settings: Update your password and personal information, on/oof dark mode, on/off notifications.

3. Completed inpsections: you can see the status of the inspections is closed, you add a new damage.

4. Knowledge Base: in which you can find guides to follow in case of inspection, fire and and maintenance checklist.

5. Information Page: Learn how the app works, including an overview of its functionality and a information of contancting in case of an issue, question.

6. Search Page: in which you can search places.

7. Active tasks: which takes you back to the homepage.

# Routing

The app uses Vue Router to manage navigation between pages. 

# Accessibility

The apps has created side bars so people can use it for better scroll, go back buttons for better use and usage of the app, dark mode and light mode. Both of them have contrast on text so it can be accessible for all users. Notifications have also be activated to be updated, also alert messages when you fail to login or when you go back to the dashboard or when you change your password. Letting the user know what they are doing. Moreover to ensure that the application is accessible to all users, I have followed key accessibility guidelines:

1. Semantic HTML: Appropriate use of HTML elements like < button>, < header>, < footer>, and < nav> to provide context for assistive technologies.
2. Keyboard Navigation: All interactive elements, including buttons and links, are  navigable using a keyboard or mouse, and focus styles are provided to improve accessibility.
3. ARIA Roles and Properties: The application utilizes ARIA roles and properties to enhance accessibility for users with disabilities.
4. Color Contrast: A sufficient contrast ratio between text and background (black text on a white background) is ensured to meet accessibility standards, or when you click on an element the element becomes white
5. Text Alternatives: Alternative text is provided for the 4 elemens in the dashboard so when a user hovers can read the elements, so the user screen reader can have better access and read it. 
6. Form Labels: All form controls are properly labeled using the "for" or "v-for" attribute to ensure that they are clearly associated with their respective input fields.
7. it has been especially created to be responsive, so the users can access from any form or device.

# Security
The application adheres to security best practices to ensure that user data is protected:

1. Input Sanitization: User inputs are sanitized to prevent attacks such as SQL injection and XSS. For example, the login page implements input sanitization to ensure safe data handling.
2. Authentication: Secure authentication mechanisms have been implemented.
3. Testing: The application has undergone extensive testing to ensure that all security measures work as intended, providing a safe environment for users.
4. Netlify & Ionic Security: The app leverages the security features provided by Netlify and Ionic, ensuring secure deployment and application management.
5. DOMPurify has been used to help secure web applications by sanitizing HTML and preventing malicious code from being executed in the browser. It is  used to protect against Cross-Site Scripting (XSS) attacks

# Usability
The application is designed with usability in mind, providing an intuitive experience for users:

1. Login & Authentication: Upon login, users are required to complete a double authentication process to ensure that only authorized admins can access the system.
2. Main Components: The app features four prominent components—Inspections, Knowledge Base, Settings, and Inspections—designed to be easily visible and accessible for users.
3. Knowledge Base: When users click on the Knowledge Base section, they can access example documents, schedule inspections, and view necessary damages. A back button is available for users to navigate back to the previous page(to all 4 main components)
4. Confirmation Messages: After performing an action, a confirmation message in green appears, notifying users of the successful completion of their tasks.
5. Settings: In the Settings section, users can change their password and access helpful information about how the app works.
6. Missing Features: The missing features are more keyboard accessibility (until now it is possible in selecting how clean an inspection is), the documents in the knowledge base, a more descriptive button in the inspections add damage, maintenance, modifications, instalations, bigger elements. Limited access to advanced testing tools or external libraries slowed down feature development. As some features were new to me, I am still learning and implementing them slwoly. 

   
# Style Guides
The application follows a consistent design style based on the provided style guide:

1. Use of Bootstrap: The app utilizes Bootstrap for responsive layout and component styling.
2. CSS Variables: Custom CSS variables are used to maintain consistent styling and ensure flexibility for future design changes.
3. Typography: Legible fonts and appropriate font sizes are used to ensure readability.
4. Spacing & Padding: Consistent spacing and padding have been applied to ensure that the layout is clean and user-friendly.
5. Followed Jakob Nielsen's 10 Usability Heuristics for User Interface Design : 1) Visibility of system status: The application provides feedback to the user when saving reports. 2) Match between system and the real world: Use of terms and concepts familiar to users. 3) User control and freedom: Users can edit and delete reports. 4) Consistency and standards: Use of  UI elements and interactions. 5) Error prevention: Input validation to prevent errors. 6)Recognition rather than recall: Use of labels. 7) Flexibility and efficiency of use: Support for both desktop and mobile users. 8)Aesthetic and minimalist design: A simple and clean design that does not overwhelm users (following the guide). 8) Help users recognize, diagnose, and recover from errors: Informative error messages when actions fail. 10) Help and documentation: Simple language and a contanct email (in information section) in case they have questions, issues or any problem. 
   
# Technology Stack
1. Axios: Axios is used for making HTTP requests and handling data in JSON format.
2. Ionic: Ionic provides the foundation for building mobile-friendly applications.
3. Netlify: The app is deployed on Netlify, benefiting from its secure and reliable hosting services.

   

# Conclusion

The RealEstateCare app has been developed to provide a comprehensive solution for managing inspections, maintenance tasks, and user profiles in a mobile-friendly environment. By leveraging the power of Vue 3, Ionic, and Pinia, the app ensures a smooth and responsive experience across devices, with an intuitive interface that meets both user and business needs. 
## Key Takeaways:
1. User-Focused Design: The app incorporates accessibility and usability best practices, ensuring that all users can easily navigate and interact with its features. From semantic HTML to keyboard navigation and color contrast adjustments, every detail has been considered for a seamless experience.

2. Security and Authentication: The application follows  security guidelines to safeguard user data, including input sanitization, secure authentication, and comprehensive testing. It follows OWASP security guidelines, WCAG 2.1 accessibility guidelines.

3. Robust Functionality: The core features, such as house listings, inspections, maintenance tracking, and profile management, are complemented by a knowledge base and helpful informational resources, providing users with everything they need in one place.

4. Responsive Design: Built with Bootstrap for responsive layouts, the app adapts to different screen sizes, ensuring accessibility and usability on both desktop and mobile devices.

5. Continuous Improvement: While the app meets the primary project requirements, there are areas for future enhancement, such as improved keyboard accessibility and the addition of more detailed content in the knowledge base. These improvements will continue to enrich the user experience as the app evolves.

6. Moving Forward:
The application is functional, with core features implemented, but ongoing development will focus on adding more content and improving user interaction. As I continue to refine the app, I will also enhance accessibility and usability based on feedback and emerging best practices.

Overall, the RealEstateCare app combines modern front-end technologies with a focus on security, usability, and accessibility, making it a powerful tool for managing real estate inspections and maintenance tasks.
