# Doctor Appointment System

Doctor Appointment System is a web application developed using [Inertia.js](https://inertiajs.com/) and [React](https://reactjs.org/). It allows users to book appointments with doctors and manage their schedules.

## Features

-   User authentication and registration
-   Doctor and patient profiles
-   Appointment booking and scheduling
-   Calendar view for doctors
-   Doctor availability and waitlist management
-   Patient appointment history and feedback
-   Responsive design for optimal user experience on different devices

## Prerequisites

To run this application, you will need:

-   [Node.js](https://nodejs.org/)
-   [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
-   [Laravel](https://laravel.com/)

## Installation

1. Clone the repository: `git clone https://github.com/your-username/doctor-appointment-system.git`
2. Navigate to the project directory: `cd doctor-appointment-system`
3. Install dependencies: `npm install` or `yarn install`
4. Set up the Laravel backend:
    1. Navigate to the backend directory: `cd backend`
    2. Install dependencies: `composer install`
    3. Copy the environment file: `cp .env.example .env`
    4. Generate an application key: `php artisan key:generate`
    5. Configure the database connection in the `.env` file
    6. Run database migrations: `php artisan migrate`
    7. Start the Laravel development server: `php artisan serve`
5. Start the frontend development server: `npm run dev` or `yarn dev`
