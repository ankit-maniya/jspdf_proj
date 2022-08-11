import './App.css';
import React, {useState } from "react";
import jsPDF from "jspdf";

import Pdf from "react-to-pdf";
const doc = new jsPDF();

// const handleSubmit = (event) => {
//   alert('An essay was submitted: ' + this.state.value);
//   event.preventDefault();
// }

function App() {

  const [details, setDetails] = useState('');

  const handleChange = (event) => {
    setDetails(event.target.value);
  }

  const createPDF = () => {
    doc.text(15, 20, details, { maxWidth: 180 });
    doc.save("a4.pdf");
  }

  console.log('details', details)

  return (
    <div className="App">
      <header className="App-header">
        <div>Demo For PDF</div>
        {/* <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf> */}
      <button onClick={createPDF}>Generate Pdf</button>
      <label>
          <textarea value={details} onChange={handleChange}/>
        </label>
      </header>
    </div>
  );
}

export default App;
