import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';

/* 
  - A section to add general information like name, email, phone number
  - A section to add your education experience (school name, title of study, date of study)
  - A section to add practical experience (company name, position title, main tasks of your job, date from and until when you worked for that company)
  - Include an edit and submit button for each section
    - The submit button should submit the form and display the value of the input fields in HTML
    - The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content
*/
class App extends Component {
  render() {
    return (
      <div>
        <h1>CV Application</h1>
        <GeneralInfo />
      </div>
    );
  }
}

export default App;
