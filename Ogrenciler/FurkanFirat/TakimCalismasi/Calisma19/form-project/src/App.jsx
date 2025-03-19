import "./App.css";
import {PageFooter} from "./components/atoms/PageFooter";
import {PageHeader} from "./components/atoms/PageHeader";
import {ApplicationForm} from "./components/molecules/ApplicationForm";

function App() {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <PageHeader />
          <div className="bg-light p-4 rounded form-container">
            <ApplicationForm />
          </div>
          <PageFooter />
        </div>
      </div>
    </>
  );
}

export default App;
