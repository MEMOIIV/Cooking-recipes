import React from "react";
import AboutCss from "./About.module.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section
        className={
          AboutCss.layer +
          " container-fluid p-0 d-flex justify-content-start align-items-center"
        }
      >
        <section className=" w-75 ms-5 ">
          <div className={AboutCss.information}>
            <h2>Hi My Name is<span className="text-success"> Amin </span></h2>
            <h4>
              Welcome to my cooking recipes website, a project developed to
              showcase my skills in <span>web development </span> and
              <span> user interface design</span>. This site was created as part
              of my portfolio to highlight my proficiency in building
              interactive and responsive web applications.
            </h4>
          </div>
        </section>
      </section>

      <section className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <div>
              <div className="rounded-2 p-3 my-2 shadow-sm bg-body">
                <h3> Project Goals : </h3>
                <p>
                  The main goal of this project was to create a functional
                  recipes platform, where users can explore a variety of dishes
                  and search for specific recipes. This project allowed me to
                  demonstrate my technical skills, particularly in creating
                  smooth navigation, designing an intuitive layout, and
                  implementing an effective search feature.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <div className="rounded-2 p-3 my-2 shadow-sm bg-body">
                <h3> Technologies Used : </h3>
                <p>
                  In developing this site, I used a range of technologies,
                  including :
                </p>
                <ul>
                <li>
                    <div className="">
                    <span>
                      <button className="btn btn-success p-1 me-2"> HTML </button>
                    </span>
                    <span>
                      <button className="btn btn-success p-1 me-2"> CSS </button>
                    </span>
                    <span>
                      <button className="btn btn-success p-1 "> JavaScript </button>
                    </span>
                    </div>
                      <p>
                      For the structure,
                      styling, and interactivity of the site.
                      </p>
                  </li>
                  <li>
                      <button className="btn btn-success px-3 py-1">React</button> 
                    <p>
                    As the primary library to build the frontend, enabling
                    component-based architecture and state management.
                    </p>
                  </li>
                  <li>
                  <button className="btn btn-success p-1">RouterProvider</button>
                    <p>
                    To manage routing and navigation, allowing
                    users to navigate seamlessly between pages while keeping the
                    application fast and responsive.
                    </p>
                  </li>
                  <li>
                    <span><button className="btn btn-success p-1 me-2">Bootstrap</button></span> and <span><button className="btn btn-success p-1 ms-2">FontAwesome</button></span> 
                    <p>
                    To enhance the styling and icons,
                    ensuring the site is visually appealing and responsive
                    across devices.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <div className="rounded-2 p-3 my-2 shadow-sm bg-body">
                <h3> Challenges Faced : </h3>
                <p>
                  One of the main challenges I encountered was implementing the
                  <span> search feature </span> and ensuring it integrated
                  seamlessly with all components. This involved passing data
                  across multiple components and ensuring accurate and efficient
                  filtering for users’ search queries. Overcoming this challenge
                  improved my understanding of <span> data flow in React </span>
                  and strengthened my problem-solving skills.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <div className="rounded-2 p-3 my-2 shadow-sm bg-body">
                <h3> What I Learned : </h3>
                <p>This project deepened my knowledge in several areas:</p>
                <ul>
                  <li>
                    Using <span> React </span> for dynamic user interfaces and
                    managing data across components.
                  </li>
                  <li>
                    Working with <span> RouterProvider </span> for managing
                    routes, which made it easier to structure pages and handle
                    navigation in a scalable way. Enhancing my responsive design
                    skills, ensuring a consistent user experience across
                    different screen sizes. Future Aspirations
                  </li>
                  <li>
                    Enhancing my <span> responsive design skills </span>, ensuring
                    a consistent user experience across different screen sizes.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div>
              <div className="rounded-2 p-3 my-2 shadow-sm bg-body">
                <h3>Future Aspirations : </h3>
                <p>
                  This project was a stepping stone in my journey as a
                  <span> web developer </span>. In the future, I plan to work on
                  more complex applications and explore additional libraries and
                  frameworks to broaden my expertise.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div>
              <div className="rounded-2 p-3 my-2 shadow-sm bg-body">
                <h3> A Personal Note : </h3>
                <p>
                  Thank you for taking the time to explore my project. I am
                  passionate about continuous learning and dedicated to growing
                  my skills as a developer. I hope you enjoy browsing through
                  the site as much as I enjoyed creating it!
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div>
              <div className="rounded-2 p-3 my-2 shadow-sm bg-body text-center">
                <h3> Contact Me</h3>
                <span className="me-3"> Phone Number : +00201063795563 </span>
                <span> Email: <Link to="mailto:your-email@example.com" target="_blank">ameensaid2000@gmail.com</Link> </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
