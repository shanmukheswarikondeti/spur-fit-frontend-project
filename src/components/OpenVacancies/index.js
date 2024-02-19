import VacancyItem from "../VacancyItem";

import './index.css';

const vacanciesList = [
  {
    id: 1,
    role: "Senior Full-Stack Engineer",
    type: "Full-time position",
    location: "Berlin or remote",
    salary: "65-85k, 0.5-1.50% equity share options",
  },
  {
    id: 2,
    role: "Senior Designer",
    type: "Full-time position",
    location: "Berlin or remote",
    salary: "40-55k, 0.25-0.50% equity share options",
  },
  {
    id: 3,
    role: "Superstar Intern",
    type: "Full-time position",
    location: "Berlin or remote",
    salary: "20-24k, 0.5-1.50% equity share options",
  },
];

const OpenVacancies = () => (
  <div className="vacancies-container">
    <h1 className="vacancies-title">Open vacancies</h1>
    <ul className="vacancies-list">
      {vacanciesList.map((vacancy) => (
        <VacancyItem key={vacancy.id} vacancyDetails={vacancy} />
      ))}
    </ul>
  </div>
);

export default OpenVacancies;