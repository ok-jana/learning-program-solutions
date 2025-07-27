import CohortDetails from './CohortDetails';

export default function App() {
  return (
    <div>
      <CohortDetails name="React Cohort" status="ongoing" />
      <CohortDetails name="Angular Cohort" status="completed" />
    </div>
  );
}