import "./App.css";

function App() {
  return (
    <div id="main">
      <div className="App-header">
        <h1 id="title">Dr. Norman Borlaug</h1>
        <p>The man who saved a billion lives</p>

        <div id="img-div">
          <img
            id="image"
            src="https://c2.staticflickr.com/4/3689/10613180113_fdf7bcd316_b.jpg"
            alt="Dr. Norman Borlaug image"
          ></img>
          <div id="img-caption">
            Dr. Norman Borlaug, third from the left, trains biologists in Mexico
            on how to increase wheat yields - part of his life-long war on
            hunger.
          </div>
        </div>

        <section id="tribute-info">
          <h3 id="headline">Here's a time line of Dr. Borlaug's life:</h3>
          <ul id="list">
            <li>
              <b>1914</b> - Born in Cresco, Iowa
            </li>
            <li>
              <b>1914</b> - Leaves his family's farm to attend the University of
              Minnesota, thanks to a Depression era program known as the
              "National Youth Administration"
            </li>
            <li>
              <b>1914</b> - Has to stop school and save up more money. Works in
              the Civilian Conservation Corps, helping starving Americans. "I
              saw how food changed them", he said. "All of this left scars on
              me."
            </li>
            <li>
              <b>1914</b> - Finishes university and takes a job in the US
              Forestry Service
            </li>
            <li>
              <b>1914</b> - Born in Cresco, Iowa
            </li>
            <li>
              <b>1914</b> - Born in Cresco, Iowa
            </li>
            <li>
              <b>1914</b> - Born in Cresco, Iowa
            </li>
            <li>
              <b>1914</b> - Born in Cresco, Iowa
            </li>
          </ul>
          <div id="testimonial">
            <p className="prime-minister-testimonial">
              <i>
                "Borlaug's life and achievement are testimony to the
                far-reaching contribution that one man's towering intellect,
                persistence and scientific vision can make to human peace and
                progress."
              </i>
            </p>

            <p className="prime-minister">
              <i>-- Indian Prime Minister Manmohan Singh</i>
            </p>
          </div>
          <h3>
            If you have time, you should read more about this incredible human
            being on his{" "}
            <a
              id="tribute-link"
              href="https://en.wikipedia.org/wiki/Norman_Borlaug"
              target="_blank"
            >
              Wikipedia entry
            </a>
          </h3>
        </section>
      </div>
    </div>
  );
}

export default App;
