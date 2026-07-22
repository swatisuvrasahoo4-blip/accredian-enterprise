# Accredian Enterprise Website

A responsive enterprise training website built using Next.js, React, Tailwind CSS, and MongoDB. This project was developed as part of the Accredian frontend development assignment.

The website provides information about Accredian's enterprise learning solutions and includes a functional enquiry system where users can submit their details.

## Features

- Responsive enterprise landing page
- Reusable React components
- Navigation bar and footer
- Hero and statistics sections
- Client showcase section
- Accredian Edge section
- Corporate Assessment Tool section
- How It Works section
- Testimonials section
- FAQ section
- Enquiry modal with form validation
- Dynamic country and calling-code selection using an API
- Lead capture functionality
- Next.js API route for handling enquiry submissions
- MongoDB Atlas integration for storing enquiry data
- Automatic form reset after successful submission

## Tech Stack

- Next.js
- React
- JavaScript
- Tailwind CSS
- Next.js API Routes
- MongoDB Atlas
- Mongoose
- Git
- GitHub

## Approach Taken

I built the website using a component-based approach with Next.js and React.

I divided the interface into reusable components such as the Navbar, Hero, Statistics, Clients, Accredian Edge, Corporate Assessment Tool, How It Works, Testimonials, FAQ, Enquiry Modal, and Footer. This approach keeps the project organized and makes individual sections easier to maintain and reuse.

Tailwind CSS was used to create the layouts, styling, and responsive behavior.

For the enquiry form, I implemented a country and calling-code API so users can dynamically select their country information instead of using only a fixed country code.

The enquiry form sends the submitted information to a Next.js API route. The server validates the received data and stores successful enquiries in MongoDB Atlas using Mongoose.

The enquiry flow is:

User fills the enquiry form → Selects country code → Submits the form → Next.js API validates the data → Data is stored in MongoDB Atlas → Success response is returned → Form fields are cleared.

## Setup Instructions

1. Clone the GitHub repository.

2. Open the project folder in VS Code.

3. Install the required dependencies:

```bash
npm install
```

4. Create a `.env.local` file in the root directory.

5. Add your MongoDB connection string inside `.env.local`:

```env
MONGODB_URI=your_mongodb_connection_string
```

The actual MongoDB URI is not included in this repository because it contains private database credentials.

6. Start the development server:

```bash
npm run dev
```

7. Open the application in the browser at:

```text
http://localhost:3000
```

## API and Database Integration

The enquiry form uses a country API to dynamically retrieve country and calling-code information.

Enquiry form submissions are handled through the following Next.js API endpoint:

```text
POST /api/enquiries
```

The API validates the submitted information and stores successful enquiries in MongoDB Atlas using Mongoose.

Sensitive database credentials are stored securely using environment variables and are not committed to the GitHub repository.

## AI Usage Explanation

I used AI as a development assistant during this project for guidance, debugging, code suggestions, and troubleshooting errors.

AI assistance was particularly useful while resolving implementation issues, understanding errors, integrating the country API, and setting up the enquiry submission and MongoDB storage flow.

I reviewed, adapted, implemented, and tested the suggested solutions within the project and manually worked on the UI structure, reusable components, responsive design, API functionality, form behavior, debugging, and database integration.

## Improvements I Would Make With More Time

With more time, I would improve the project by:

- Adding more advanced client-side and server-side form validation.
- Adding better loading, success, and error notifications for the enquiry form.
- Improving accessibility and keyboard navigation.
- Testing and optimizing the website across more devices and screen sizes.
- Adding automated tests for components and API routes.
- Creating a secure admin dashboard for viewing and managing submitted enquiries.
- Adding spam protection and rate limiting to the enquiry API.
- Further improving SEO and performance optimization.

## Environment Variables

The application requires the following environment variable:

```env
MONGODB_URI
```

The real MongoDB connection string is stored privately and is not included in the repository.

## Deployment

The application is deployed using Vercel.
