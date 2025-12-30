# Pomodoro Timer (Spring Boot Edition)

A modern, web-based Pomodoro Timer built with Spring Boot and Thymeleaf, featuring a glassmorphism UI design.

## Features

*   **⏱️ Standard 25-minute Timer**: Ready to go out of the box.
*   **⚙️ Custom Duration**: flexible timer settings (1-180 minutes).
*   **⏯️ Controls**: Start, Pause, and Reset functionality.
*   **🎨 Modern UI**: Beautiful Glassmorphism design with responsive layout.
*   **📝 Validation**: Input validation on both client and server side (prepared).

## Tech Stack

*   **Backend**: Spring Boot 3.2, Java 21
*   **Template Engine**: Thymeleaf
*   **Frontend**: HTML5, CSS3, Vanilla JavaScript
*   **Build Tool**: Maven

## Prerequisites

*   JDK 21 or later
*   Maven 3.6+

## How to Run

1.  Navigate to the project directory:
    ```bash
    cd pomodoroTimer
    ```

2.  Run the application using Maven:
    ```bash
    mvn spring-boot:run
    ```

3.  Open your browser and visit:
    [http://localhost:8080](http://localhost:8080)

## Project Structure

```text
src/main/java/com/pomodoro
├── PomodoroApplication.java    # Main entry point
├── controller
│   └── TimerController.java    # Page routing
└── service
    └── TimerService.java       # Business logic

src/main/resources
├── static
│   ├── css/style.css           # Glassmorphism styles
│   └── js/timer.js             # Timer logic
└── templates
    └── index.html              # Main view
```
