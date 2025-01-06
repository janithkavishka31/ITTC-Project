# ITTC Project

This project consists of a frontend built with Angular and a backend built with Node.js, Express, and MySQL.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- Angular CLI (latest version)

## Database Setup

1. Install MySQL if you haven't already
2. Make sure MySQL service is running
3. Open your terminal/command prompt
4. Log into MySQL with root privileges:
   ```bash
   mysql -u root -p
   ```
   When prompted, enter your password (default: 1234)

5. Execute the database script:
   ```bash
   mysql -u root -p1234 < database.sql
   ```
   This will:
   - Create the ITTC database
   - Create all necessary tables
   - Insert sample data

### Database Structure

The database consists of the following tables:
- **CourseDetails**: Stores information about courses
- **CourseModule**: Contains module information
- **CourseModuleLink**: Links courses with their modules
- **StudentDetails**: Stores student information
- **StudentExamResult**: Records exam results

## Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd ITTC Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   The backend will run on http://localhost:3000

## Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```
   The application will be available at http://localhost:4200

## API Endpoints

### Student Registration
- POST `/students` - Register a new student
- GET `/students` - Get all students
- PUT `/students/:id` - Update student information
- DELETE `/students/:id` - Delete a student

### Course Management
- POST `/courses` - Add a new course
- GET `/courses` - Get all courses
- PUT `/courses/:id` - Update course information
- DELETE `/courses/:id` - Delete a course

### Exam Results
- POST `/examResults` - Add new exam result
- GET `/examResults` - Get all exam results
- PUT `/examResults/:studentId/:moduleCode` - Update exam result
- DELETE `/examResults/:studentId/:moduleCode` - Delete exam result

## Database Configuration

The database connection settings can be found in:
```
ITTC Backend/config/db.js
```

## Troubleshooting

1. **Database Connection Issues**:
   - Ensure MySQL service is running
   - Verify database credentials in config/db.js
   - Check if database and tables exist

2. **Backend Issues**:
   - Check if port 3000 is available
   - Ensure all dependencies are installed
   - Check console for error messages

3. **Frontend Issues**:
   - Ensure Angular CLI is installed globally
   - Check if port 4200 is available
   - Verify backend URL in service files

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Frontend Status

The frontend of the project is still a work in progress. While the core functionality has been implemented, there are certain features and UI components that are not yet fully developed. The current state of the frontend includes:

- features completed-student registration

I am actively working on completing the remaining sections of the frontend, and I will continue to improve the user interface and experience. Please feel free to reach out if you have any questions or would like to see further development on specific features.
