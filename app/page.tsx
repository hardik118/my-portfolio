import { IntroChracterVector } from "./component/CharacterVector";
import { Navbar } from "./component/Navbar";
import { AboutMe } from "./component/AboutMe";
import { Skills } from "./component/Skills";
import { Projects } from "./component/projects";
import { Experiance } from "./component/Experiance";
import { SkillBar } from "./component/SkillBar";
import { Footer } from "./component/footer";
export default function Home() {
  return (
<div className="">
  <Navbar></Navbar>
 <IntroChracterVector></IntroChracterVector>
 <AboutMe></AboutMe>
 <Skills></Skills>
 <Projects></Projects>
 <Experiance></Experiance>
 <SkillBar></SkillBar>
 <Footer></Footer>
 <div className="flex justify-between p-3 text-sm ">
  <h1>HardikYadav@ 2025 Privacy Policy</h1>
  <h1>Up, India</h1>

 </div>
</div>
    
  );
}
