import React from "react";
import ContactForm from "./ContactForm";

// Single-file React portfolio component with embedded CSS.
// Populated with all details from Dhanashree Chati's resume.

export default function Portfolio() {
  const css = `
  :root{
    --bg:#0f1724;
    --card:#0b1220;
    --accent:#06b6d4;
    --muted:#94a3b8;
    --glass: rgba(255,255,255,0.04);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  }
  *{box-sizing:border-box}
  body{margin:0;background:linear-gradient(180deg,var(--bg),#071029);color:#e6eef8}
  .site{max-width:1100px;margin:36px auto;padding:28px}
  .card{background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent);border-radius:12px;padding:22px;margin-bottom:18px;box-shadow:0 6px 20px rgba(2,6,23,0.6);}

  .hero{display:flex;gap:20px;align-items:center}
  .avatar{width:110px;height:110px;border-radius:16px;background:linear-gradient(135deg,var(--accent),#7c3aed);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:36px;color:#021124}
  .intro h1{margin:0;font-size:28px}
  .intro p{margin:6px 0;color:var(--muted)}
  .cta{margin-top:12px}
  .btn{display:inline-block;padding:10px 14px;border-radius:10px;background:var(--accent);color:#042132;text-decoration:none;font-weight:600}

  .grid{display:grid;grid-template-columns:2fr 1fr;gap:18px;margin-top:18px}
  .section-title{font-size:14px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px}

  .chips{display:flex;flex-wrap:wrap;gap:8px}
  .chip{background:var(--glass);padding:8px 10px;border-radius:999px;color:var(--muted);font-weight:600}

  .project{border-left:3px solid rgba(6,182,212,0.12);padding:12px 14px;border-radius:8px;background:rgba(255,255,255,0.01)}
  .project h3{margin:0 0 6px 0}
  .meta{color:var(--muted);font-size:13px}

  form{display:flex;flex-direction:column;gap:10px}
  input,textarea{background:transparent;border:1px solid rgba(255,255,255,0.06);padding:10px;border-radius:8px;color:inherit}
  textarea{min-height:120px}
  .muted-small{color:var(--muted);font-size:13px}

  @media (max-width:880px){
    .grid{grid-template-columns:1fr}
    .hero{flex-direction:row}
    .avatar{width:88px;height:88px}
  }
  `;

  React.useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.id = "portfolio-component-styles";
    styleEl.innerHTML = css;
    if (!document.getElementById(styleEl.id))
      document.head.appendChild(styleEl);
  }, []);

  return (
    <div className="site">
      <div className="card hero">
        <div className="avatar">TP</div>
        <div className="intro">
          <h1>Trupti Pawar</h1>
          <p className="muted-small">
            Ruby on Rails Developer at Propeye Technologies Pvt Ltd
          </p>
          <p className="muted-small">
            Building high-performance admin tools, data-driven dashboards, and
            real-time property platforms. Specializing in ActiveAdmin,
            Elasticsearch, and building scalable CRMs
          </p>
          <div className="cta">
            <a className="btn" href="#contact">
              Contact me
            </a>
          </div>
        </div>
      </div>

      <div className="grid">
        <div>
          <div className="card">
            <div className="section-title">About me</div>
            <p>
              Skilled Ruby on Rails Developer with a proven track record at
              Propeye Technologies Pvt Ltd, where I enhanced real-time property
              data platforms and improved search functionalities using
              ElasticSearch. Expert in collaborative development and
              problem-solving, I excel in creating data-driven solutions with a
              focus on user experience. Proficient in Ruby, JavaScript, and
              cross-functional teamwork. Skilled in implementing Agile
              methodologies, troubleshooting code issues, and collaborating with
              cross-functional teams to deliver high-quality software solutions.
              Demonstrated strengths include problem-solving abilities,
              adaptability to evolving technologies Previous work has provided
              significant improvements to system efficiency and user interface
              design.
            </p>
          </div>

          <div className="card">
            <div className="section-title">
              <h2>Experience</h2>
              <div
                className="project"
                style={{ marginBottom: 14, paddingLeft: 25 }}
              >
                <h3>Ruby on Rails Developer</h3>
                <p className="company">
                  Propeye Technologies Pvt Ltd, Pune | May 2024 – Present
                </p>
                <ul className="experience-points">
                  <li>
                    Leading development across{" "}
                    <strong>3 major real estate platforms</strong>:
                    <ul>
                      <li>
                        <strong>Propviewz.com</strong> – Designed and optimized
                        RESTful APIs, integrated ElasticSearch for property
                        search and analytics, and built a scalable{" "}
                        <strong>admin dashboard</strong> for property &
                        transaction management.
                      </li>
                      <li>
                        <strong>Internal CRM</strong> – Developed tools for{" "}
                        <strong>transaction verification workflows</strong>,
                        streamlining validation and reporting processes.
                      </li>
                      <li>
                        <strong>Sales Team CRM</strong> – Currently building a{" "}
                        <strong>sales & pre-sales management platform</strong>{" "}
                        to automate booking, lead tracking, demand letters, and
                        possession letters.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Built <strong>custom dashboards</strong> in ActiveAdmin to
                    manage large datasets efficiently.
                  </li>
                  <li>
                    Implemented <strong>Elasticsearch-powered search</strong>{" "}
                    for real-time property filtering and analytics.
                  </li>
                  <li>
                    Automated <strong>critical workflows</strong> (e.g.,
                    document generation & notifications) to improve operational
                    efficiency.
                  </li>
                  <li>
                    Collaborated with <strong>cross-functional teams</strong> to
                    deliver scalable, performance-focused features for
                    high-volume real estate data.
                  </li>
                </ul>
              </div>
              <div
                className="project"
                style={{ marginBottom: 14, paddingLeft: 25 }}
              >
                <h3>Software Developer</h3>
                <p className="company">
                  Define Labs Pvt Ltd | September 2022 – May 2024{" "}
                </p>
                <ul>
                  <li>
                    Implemented required functionality as part of a distributed
                    development team using Ruby on Rails, JavaScript, HTML, CSS,
                    Postgres, and Ajax.
                  </li>
                  <li>Developed scalable Web applications and services.</li>
                  <li>
                    Developed APIs to support dashboards and real-time insights.
                  </li>
                  <li>
                    Implemented new web application features and products
                    following best practices in writing maintainable code,
                    applying established patterns and algorithms.
                  </li>
                  <li>
                    Implemented API’s using ROR for web applications having best
                    practice for it.
                  </li>
                  <li>
                    {" "}
                    Investigate and resolve issues reported for large web
                    application and API’s. Worked on live projects in our
                    organization. Specialized in Backend and server-side web
                    applications development as a member of project team.{" "}
                  </li>
                </ul>
              </div>
              <div
                className="project"
                style={{ marginBottom: 14, paddingLeft: 25 }}
              >
                <h3> Technical Support Specialist</h3>
                <p className="company">
                  Malomatia India Pvt Ltd, Pune | December 2020 - July 2022
                </p>
                <ul>
                  <li>
                    Resolved technical issues of the clients using various
                    applications.
                  </li>
                  <li>
                    Manage error codes and errors issues of websites like
                    www.hukoomi.gov.qa , etc.{" "}
                  </li>
                  <li>
                    Communicate with management and other team members about
                    methods and strategies to ensure a positive rate of resolved
                    queries.
                  </li>
                  <li>
                    Managed team members to ensure better performance of team.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="section-title">Projects</div>

            <div className="project" style={{ marginBottom: 10 }}>
              <h3>Propeye — Real-time property data</h3>
              <div className="meta">
                Role: Rails Developer • Features: ActiveAdmin dashboards,
                ElasticSearch, transaction workflows
              </div>
              <p className="muted-small">
                Developed admin interfaces, integrated search functionality, and
                improved data reliability across ingestion and reporting
                pipelines.
              </p>
            </div>

            <div className="project">
              <h3>Propviewz.com — CRM for sales & pre-sales</h3>
              <div className="meta">
                Role: Full-stack Developer • Features: Lead-to-booking flows,
                automated communications, payment tracking
              </div>
              <p className="muted-small">
                Built CRM from scratch to manage leads, bookings, payments, and
                automated letters, improving efficiency of sales and pre-sales
                teams.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="section-title">Experience highlights</div>
            <ul>
              <li>
                Designed & shipped custom ActiveAdmin dashboards and actions.
              </li>
              <li>Integrated ElasticSearch for fast property searches.</li>
              <li>
                Built internal tools for transactions, verification, and
                reporting.
              </li>
            </ul>
          </div>
        </div>

        <aside>
          <div className="card">
            <div className="section-title">Skills</div>
            <div className="chips">
              <div className="chip">Ruby on Rails</div>
              <div className="chip">Python</div>
              <div className="chip">Django</div>
              <div className="chip">FastApi</div>
              <div className="chip">ActiveAdmin</div>
              <div className="chip">ElasticSearch</div>
              <div className="chip">Postgres</div>
              <div className="chip">SQL</div>
              <div className="chip">JavaScript</div>
              <div className="chip">React</div>
              <div className="chip">HTML & CSS</div>
              <div className="chip">Rspec</div>
            </div>
          </div>

          {/* <div className="card" id="contact">
            <div className="section-title">Contact</div>
            <p className="muted-small">
              Reach out for collaboration or to see my projects. I respond
              promptly.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thanks — form demo only. Replace with your backend endpoint."
                );
              }}
            >
              <input placeholder="Your name" required />
              <input placeholder="Your email" type="email" required />
              <textarea placeholder="Message" required></textarea>
              <button className="btn" type="submit">
                Send message
              </button>
            </form>
          </div> */}
          <ContactForm />

          <div className="card">
            <div className="section-title">Quick Links</div>
            <div className="muted-small">
              <a
                href="https://github.com/Trupti840"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                GitHub
              </a>{" "}
              •{" "}
              <a
                href="https://www.linkedin.com/in/trupti-pawar-11274a1b1/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                LinkedIn
              </a>{" "}
              •{" "}
              <a
                href="/resume.pdf"
                download="Trupti_Pawar_Resume.pdf"
                style={{ color: "white" }}
              >
                Resume
              </a>
            </div>
          </div>
        </aside>
      </div>

      <div
        style={{ textAlign: "center", marginTop: 18, color: "var(--muted)" }}
      >
        Built with React + plain CSS — fully populated with resume details.
      </div>
    </div>
  );
}
