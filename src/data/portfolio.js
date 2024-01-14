// data.js
import shiftImage from "../assets/img/projectImages/crShift.png";
import shakerImage from "../assets/img/projectImages/shaker.png";
import employeeImage from "../assets/img/projectImages/employeeManager.png";
import fetchImage from "../assets/img/projectImages/fetch.png";
import noteImage from "../assets/img/projectImages/noteTaker.png";
import passwordImage from "../assets/img/projectImages/passwordGenerator.png";
import weatherImage from "../assets/img/projectImages/weatherApp.png";
import pantryImage from "../assets/img/projectImages/mypantry.png";
import fitnessImage from "../assets/img/projectImages/fitnessTracker.png";
import employeeTrackerImage from "../assets/img/projectImages/employeeDirectory.png";

const projects = [
  {
    name: "Shift Scheduler",
    description:
      "Efficiently manage employee shifts and schedules with this intuitive scheduling tool.",
    image: shiftImage,
    repoLink: "https://github.com/Mohmedvaid/cr-shift",
  },
  {
    name: "Shaker",
    description:
      "Shaker is a web app for discovering new cocktails and drinks.",
    image: shakerImage,
    repoLink: "https://github.com/JSON-D3RULO/shaker",
  },
  {
    name: "Fetch",
    description:
      "Fetch connects and helps socialize pets across cities and towns.",
    image: fetchImage,
    repoLink: "https://github.com/raise-da-woof/fetch",
  },
  {
    name: "My Pantry",
    description:
      "MyPantry is a web application that help users to track groceries.",
    image: pantryImage,
    repoLink: "https://github.com/Hot-Fixers/mypantry",
  },
  {
    name: "Fitness Tracker",
    description:
      "The fitness tracker allows users to create, track and manage workouts/exercises.",
    image: fitnessImage,
    repoLink: "https://github.com/Mohmedvaid/fitness-tracker",
  },
  {
    name: "Note Taker",
    description:
      "An easy-to-use app for organizing notes, ideas, and reminders on the go.",
    image: noteImage,
    repoLink: "https://github.com/Mohmedvaid/note-taker",
  },
  {
    name: "Password Generator",
    description:
      "Generate secure, complex passwords instantly for enhanced digital security.",
    image: passwordImage,
    repoLink: "https://github.com/Mohmedvaid/password-generator",
  },
  {
    name: "Weather Dashboard",
    description:
      "Get real-time weather updates and forecasts with this interactive weather dashboard.",
    image: weatherImage,
    repoLink: "https://github.com/Mohmedvaid/weather-app",
  },
  {
    name: "Employee Manager",
    description:
      "Streamline employee management with features for scheduling, payroll, and performance tracking",
    image: employeeImage,
    repoLink: "https://github.com/Mohmedvaid/employee-tracker",
  },
  {
    name: "Employee Tracker",
    description:
      "A robust solution for tracking employee details, assignments, and productivity metrics.",
    image: employeeTrackerImage,
    repoLink: "https://github.com/Mohmedvaid/employer-directory",
  },
];

export default projects;
