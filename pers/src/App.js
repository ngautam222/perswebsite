import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nikhil Gautam | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,300,700"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h1>Nikhil Gautam</h1>
          <p>Software Engineer &amp; CS Grad Student</p>
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="content">
          <section id="about" className="section">
            <h2>About</h2>
            <p>
              I am a dedicated software engineer and graduate student with hands-on
              experience at top tech companies and a strong academic background. I
              specialize in scalable systems, machine learning, and full-stack
              development. My work emphasizes efficiency, innovative design, and
              impactful data-driven solutions.
            </p>
          </section>

          <section id="education" className="section">
            <h2>Education</h2>
            <div>
              <strong>UC San Diego</strong>
              <br />
              MS in Computer Science, Expected May 2026
            </div>
            <br />
            <div>
              <strong>University of Massachusetts Amherst</strong>
              <br />
              BS in Computer Science, May 2024 | GPA: 4.0
            </div>
          </section>

          <section id="experience" className="section">
            <h2>Experience</h2>
            <div>
              <strong>Amazon - Software Engineering Intern</strong>
              <br />
              <em>June 2023 - Aug 2023</em>
              <ul>
                <li>
                  Developed scalable model designs for profit calculations supporting 150k TPS.
                </li>
                <li>
                  Built an auditing data pipeline with Kinesis Firehose, S3, and Glue ETL,
                  reducing latency by 20%.
                </li>
                <li>
                  Optimized data transformation pipelines for large-scale ingestion using native
                  AWS services.
                </li>
              </ul>
            </div>
            <br />
            <div>
              <strong>Astren Empower Co - Software Engineering Intern</strong>
              <br />
              <em>June 2022 - July 2022</em>
              <ul>
                <li>
                  Designed a website dashboard using React and CSS styled-components.
                </li>
                <li>
                  Implemented user login and signup features using Google Next-Auth.
                </li>
                <li>
                  Integrated MongoDB and DynamoDB for effective data management.
                </li>
              </ul>
            </div>
            <br />
            <div>
              <strong>UMASS Amherst - Head Teaching Assistant</strong>
              <br />
              <em>Feb 2022 - May 2024</em>
              <ul>
                <li>
                  Created exams and assignments for a class of over 200 students.
                </li>
                <li>
                  Developed autograders and provided extensive student support during office hours.
                </li>
              </ul>
            </div>
            <br />
            <div>
              <strong>UMASS Amherst - Undergraduate Research Assistant</strong>
              <br />
              <em>June 2021 - Aug 2021</em>
              <ul>
                <li>
                  Implemented Cuckoo Filters using Python and reduced false positives by 20%
                  with a Random Forest classifier.
                </li>
                <li>
                  Tested and fine-tuned filters on 15+ datasets, achieving a 30% accuracy improvement.
                </li>
              </ul>
            </div>
          </section>

          <section id="projects" className="section">
            <h2>Projects</h2>
            <div>
              <strong>LSTM Stock Price Predictor</strong>
              <br />
              <em>TensorFlow, PyTorch, yFinance, ta, pandas, numpy</em>
              <ul>
                <li>
                  Developed an LSTM model achieving 93% validation accuracy for stock price
                  predictions.
                </li>
                <li>
                  Integrated multiple technical indicators with custom preprocessing pipelines.
                </li>
              </ul>
            </div>
            <br />
            <div>
              <strong>Encoder-Decoder Transformer for Sequence Prediction</strong>
              <br />
              <em>TensorFlow, PyTorch, Python</em>
              <ul>
                <li>
                  Designed an encoder-decoder architecture enhancing context representation with
                  attention mechanisms.
                </li>
                <li>
                  Optimized model performance for complex sequence prediction tasks.
                </li>
              </ul>
            </div>
            <br />
            <div>
              <strong>Trading Bot</strong>
              <br />
              <em>Node.js, Svelte, Express, MongoDB, Docker</em>
              <ul>
                <li>
                  Developed a trading bot using the Kraken API for high-frequency trading.
                </li>
                <li>
                  Implemented moving average strategies, achieving a 10% increase in profitability.
                </li>
              </ul>
            </div>
          </section>

          <section id="skills" className="section">
            <h2>Skills</h2>
            <p>
              <strong>Languages:</strong> Java, Python, C/C++, JavaScript, SQL, HTML/CSS, MATLAB
              <br />
              <strong>Frameworks:</strong> React, Node.js, Next.js, Tailwind CSS, Google Guice
              <br />
              <strong>Developer Tools:</strong> Git, Github, Firebase, GCP, AWS, EC2, SQS,
              CloudFormation, Docker, Kubernetes, CI/CD
              <br />
              <strong>Libraries:</strong> Pandas, NumPy, Matplotlib, Pyspark, PyTorch, Keras,
              Django
              <br />
              <strong>Miscellaneous:</strong> TCP/IP, Sockets, ARP
            </p>
          </section>

          <section id="contact" className="section">
            <h2>Contact</h2>
            <p>
              Email:{' '}
              <a href="mailto:nikhilgautam883@gmail.com">
                nikhilgautam883@gmail.com
              </a>
              <br />
              Phone: 857-287-9429
              <br />
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/nikhil-gautam222" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/nikhil-gautam222
              </a>
              <br />
              GitHub:{' '}
              <a href="https://github.com/ngautam222" target="_blank" rel="noopener noreferrer">
                github.com/ngautam222
              </a>
            </p>
          </section>
        </main>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          min-height: 100vh;
        }
        .sidebar {
          width: 250px;
          background: #2c3e50;
          color: #ecf0f1;
          padding: 20px;
          flex-shrink: 0;
        }
        .sidebar h1 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .sidebar p {
          font-size: 14px;
          margin-bottom: 20px;
        }
        .sidebar nav ul {
          list-style: none;
          padding: 0;
        }
        .sidebar nav ul li {
          margin: 15px 0;
        }
        .sidebar nav ul li a {
          color: #ecf0f1;
          font-weight: 300;
          font-size: 16px;
          text-decoration: none;
        }
        .content {
          flex: 1;
          padding: 40px;
          overflow-y: auto;
        }
        .section {
          margin-bottom: 60px;
        }
        .section h2 {
          font-size: 22px;
          margin-bottom: 20px;
          border-bottom: 1px solid #ddd;
          padding-bottom: 8px;
        }
        .section p,
        .section li {
          font-size: 16px;
          line-height: 1.6;
        }
        ul {
          list-style: disc inside;
          margin: 10px 0 10px 20px;
        }
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
          .sidebar {
            width: 100%;
            text-align: center;
          }
          .content {
            padding: 20px;
          }
        }
      `}</style>
      <style jsx global>{`
        /* Global CSS Reset */
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Roboto', sans-serif;
          background: #fdfdfd;
          color: #333;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
