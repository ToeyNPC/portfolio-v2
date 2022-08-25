import './App.css'
import profilePicture from "./assets/38091.jpg"
import htmlPicture from "./assets/html_icon(1).png"
import cssPicture from "./assets/css_icon.png"
import javascriptPicture from "./assets/javascript_icon(1).png"
import githubPicture from "./assets/github_icon.png"
import mongodbPicture from "./assets/mongodb_icon.png"
import expressPicture from "./assets/express_icon.png"
import reactPicture from "./assets/react_icon.png"
import nodejsPicture from "./assets/node.js_icon(1).png"
import findhatPicture from "./assets/find your hat.png"
import jammingPicture from "./assets/Jamming.png"
import trackerPicture from "./assets/Infinity health.png"

function App() {

  return (
    <div className="home">
       <div className='navbar'>
         <div className='navbarName'><a class="active" href="#home">Nuttapong Charoenpru</a></div>
         <div className='navbarLink-Container'>
           <span className="navbar-Link"><a class="active" href="#me">About Me</a></span>
            <span className="navbar-Link"><a class="active" href="#edu">Education</a></span>
            <span className="navbar-Link"><a class="active" href="#exp">Experience</a></span>
            <span className="navbar-Link"><a class="active" href="#skill">Skillls&amp;Tools</a></span>
            <span className="navbar-Link"><a class="active" href="#project">Project</a></span>
            <span className="navbar-Link"><a class="active" href="#contract">Contact</a></span></div>
       </div>


      
       <div className='aboutMe'>
         <div className='aboutContainer' id="me">
           <div className='aboutText'>
             <div className='aboutHead' id="me"><h1 className='Darkblue'>Hello, My Name is Nuttapong Charoenpru</h1></div>
             <div className='aboutBody'>&quot;Mechanical Engineering experience in design thinking and
                problem solving looking to transition to a software developer.
                Have just completed the junior software developer program and
                I&apos;m eager to learn and put my coding skills to good
                use&quot;</div>
             <div className='aboutButton'><button><a href="https://www.canva.com/design/DAFHWjhBht0/3aO0M2BSix2AR_mdqQ2MKA/view?utm_content=DAFHWjhBht0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" >Resume</a></button></div>
           </div>
           <div className='ProfiletPic'><img alt="Profile picture" src={profilePicture}/></div>
         </div>
       </div>



       <div className='education'>
         <div className='TopicHead Darkblue' id="edu"><h1>Education</h1></div>
         <div className='educationList'>
           <div className='eductionDetail'>
            <h3 className="educationh3">
                  Junior software developer, Generation Thailand
            </h3>
            <ul className='educationDetailList'>
              <li>Junior software developer program cohort 2</li>
              <li>Well trained in BSM skills.For example Growth Mindset, Orientation to Details, Agile &amp; Scrum, etc.</li>
            </ul>
           </div>
           <div className='educationDate'>June-August 2022</div>
          </div>
         <div className='educationList'>
         <div className='eductionDetail'>
            <h3 className="educationh3">
              Mechanical Engineering B.Eng,KMUTNB
            </h3>
            <ul className='educationDetailList'>
              <li>Excelled in computer programming classes</li>
              <li>Created vending machine program using C++</li>
              <li>Excelled in Systematic design classes</li>
            </ul>
           </div>
           <div className='educationDate'>2012-2017</div>
          </div>
       </div>



       <div className='exp'>
       <div className='TopicHead Darkblue' id="exp"><h1>Experience</h1></div>

         <div className='expList'>
           <div className='expDate'><p>2018-2020</p><p>2021-2022</p></div>
           <div className='expDetail'>
            <h3 className="exph3">
              Engineer at Wa-u-pug Engineering Co., Ltd.
            </h3>
            <ul className='expDetailList'>
              <li>Identify the problem and problem-solving</li>
              <li>Participated in Daily Scrum and contribute to the team</li>
            </ul>
           </div>
          </div>

         <div className='expList'>
           <div className='expDate'>2020-2021</div>
           <div className='expDetail'>
             <h3 className="exph3">
               Technician at EGAT Lamtakong learning center
             </h3>
             <ul className='expDetailList'>
               <li>Planned and cooperated with 8 suppliers for device maintenance</li>
               <li>Created maintenance reports and presentations using Microsoft Word, Excel, and PowerPoint</li>
               <li>Designed and Implemented working rutine for techinician</li>
             </ul>
           </div>
          </div>

          <div className='expList'>
           <div className='expDate'>2017-218</div>
           <div className='expDetail'>
             <h3 className="exph3">
               Receptionist at Koh Chang Longstay Resort
             </h3>
             <ul className='expDetailList'>
               <li>Experienced communicating in English with more than 200 peoples</li>
             </ul>
           </div>
          </div>
       </div>



       <div className='skillTools'>
         <div className='TopicHead' id="skill"><h1>Skillls&amp;Tools</h1></div>

         <div className='skillLine'>
           <div className='skillCard'><div className='skill-card-logo'><img alt="HTML" src={htmlPicture}/></div><h2 className='skill-card-text'>HTML</h2></div>
           <div className='skillCard'><div className='skill-card-logo'><img alt="CSS" src={cssPicture}/></div><h2 className='skill-card-text'>CSS</h2></div>
           <div className='skillCard'><div className='skill-card-logo'><img alt="Javascript" src={javascriptPicture}/></div><h2 className='skill-card-text'>Javascript</h2></div>
           <div className='skillCard'><div className='skill-card-logo'><img alt="Github" src={githubPicture}/></div><h2 className='skill-card-text'>Github</h2></div>
         </div>

         <div className='skillLine'>
           <div className='skillCard'><div className='skill-card-logo'><img alt="MongoDB" src={mongodbPicture}/></div><h2 className='skill-card-text'>MongoDB</h2></div>
           <div className='skillCard'><div className='skill-card-logo'><img alt="Express" src={expressPicture}/></div><h2 className='skill-card-text'>Express</h2></div>
           <div className='skillCard'><div className='skill-card-logo'><img alt="React" src={reactPicture}/></div><h2 className='skill-card-text'>React</h2></div>
           <div className='skillCard'><div className='skill-card-logo'><img alt="Node.js" src={nodejsPicture}/></div><h2 className='skill-card-text'>Node.js</h2></div>
         </div>
       </div>



       <div className='project'>
         <div className='TopicHead' id="project"><h1>Projects</h1></div>
         <div className='project-card-container'>
           <div className='projectCard'>
              <div className='project-card-pic'><img alt="find my hat game" src={findhatPicture}/></div>
              <div className='project-card-head'><span>Find your Hat</span></div>
              <div className='project-card-text'>Created Simple yet responsive pacman like game using Javascript.</div>
              <div className='more-btn'><button><a href='https://replit.com/@NuttapongCharo1/find-your-hat#index.js' target="_blank">See More</a></button></div>
           </div>

           <div className='projectCard'>
              <div className='project-card-pic'><img alt="Jamming Created your own spotify playlist" src={jammingPicture}/></div>
              <div className='project-card-head'><span>Jamming</span></div>
              <div className='project-card-text'>Website use to create playlist for spotify by API.Created using Javascript and React.</div>
              <div className='more-btn'><button><a href='https://13nuttapong.surge.sh/' target="_blank">See More</a></button></div>
           </div>

           <div className='projectCard'>
              <div className='project-card-pic'><img alt="Activity Tracker" src={trackerPicture}/></div>
              <div className='project-card-head'><span>Infinity Health</span></div>
              <div className='project-card-text'>Designed and created an Interactive website for an &quot;Activity Tracker&quot; that help you keep up with your excercise plan.</div>
              <div className='more-btn'><button><a href='https://infinity-health.vercel.app/' target="_blank">See More</a></button></div>
           </div>
         </div>
         <div className='git-btn-container'>
           <button><a href='https://github.com/ToeyNPC' target="_blank">More On Github</a></button>
         </div>
       </div>  


      <div className="home-footer-container" id="contract">
        <div className="home-footer">
          <div className="home-social-links">

            <svg viewBox="0 0 1024 1024" className="footer-icon">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <span className="footer-text">
              <a>nuttapongcharoenpru@gmail.com</a>
            </span>

            <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon">
              <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
            </svg>
            <span className="footer-text"><a href='https://github.com/ToeyNPC' target="_blank">github.com/ToeyNPC</a></span>

            <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon">
              <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
            <span className="footer-text"><a href='https://www.linkedin.com/in/nuttapong-charoenpru-toey-npc/' target="_blank">
             linkedin.com/in/nuttapong-charoenpru-toey-npc</a>
            </span>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
