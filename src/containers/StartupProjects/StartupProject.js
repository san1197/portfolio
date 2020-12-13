import React, { useContext } from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// export default function StartupProject() {
//   return (
//     <div>
//       <div className="hob-main-div">
//         <ul className="hob-icons">
//           {bigProjects.hobbiesList.map(hobbies => {
//             return (
//               <li className="hobby-inline" name={hobbies.hobbyName}>
//                 <i className={hobbies.fontAwesomeClassname}></i>
//                 <p>{hobbies.hobbyName}</p>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

export default function StartupProject() {
const { isDark } = useContext(StyleContext);
return (
  <Fade bottom duration={1000} distance="20px">
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p
          className={
            isDark
              ? "dark-mode project-subtitle"
              : "subTitle project-subtitle"
          }
        >
          {bigProjects.subtitle}
        </p>
        <div className="startup-projects-main">
          <div className="hob-main-div">
          <ul className="hob-icons">
            {bigProjects.hobbiesList.map(hobbies => {
              return (
                <li className="hobby-inline" key={hobbies.hobbyName} name={hobbies.hobbyName}>
                  <i className={hobbies.fontAwesomeClassname}></i>
                  <p>{hobbies.hobbyName}</p>
                </li>
              );
            })}
          </ul>
        </div>
        </div>
      </div>
    </div>
  </Fade>
);
}