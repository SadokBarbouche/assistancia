import "bootstrap/dist/css/bootstrap.min.css";

function addEducationContent() {
  return (document.getElementById("toadd").innerHTML += `
              <div class="form-group mb-3 border border-dark rounded" style="display:'flex';">
          
              <div class="container py-3 px-3">
                  <div class="row">
                          <div class="col mb-2">
                              <p>Education</p>
                              <input class="form-control" row="3" type="text" placeholder="" style="" />
                          </div>
                  </div>
                  <div class="row mt-2">
                       <div class="col">
                              <p>School</p>
                              <input class="form-control" type="text" placeholder="" style="" />
                       </div>
                       <div class="col">
                              <p>City</p>
                              <input class="form-control" row="3" type="text" placeholder="" style="" />
                       </div>
                  </div>
                  <div class="row mt-2">
                       <div class="col">
                              <p>Start date</p>
                              <input class="form-control" type="month" placeholder="" style="" />
                       </div>
                       <div class="col">
                              <p>End date</p>
                              <input class="form-control" row="3" type="month" placeholder="" style="" />
                       </div>
                  </div>
                  <br/>
                  <div class="row">
                      <div class="col">
                      <p>Description</p>
                      <textarea class="form-control" rows="5" id="comment"></textarea>
                      </div>
                  </div>
              </div>
              `);
}

function addEmploymentContent() {
  return (document.getElementById("employmenttoadd").innerHTML += `
              <div class="form-group mb-3 border border-dark rounded" style="display:'flex';">
          
              <div class="container py-3 px-3">
                  <div class="row">
                          <div class="col mb-2">
                              <p>Postion</p>
                              <input class="form-control" row="3" type="text" placeholder="" style="" />
                          </div>
                  </div>
                  <div class="row mt-2">
                       <div class="col">
                              <p>Employer</p>
                              <input class="form-control" type="text" placeholder="" style="" />
                       </div>
                       <div class="col">
                              <p>City</p>
                              <input class="form-control" row="3" type="text" placeholder="" style="" />
                       </div>
                  </div>
                  <div class="row mt-2">
                       <div class="col">
                              <p>Start date</p>
                              <input class="form-control" type="month" placeholder="" style="" />
                       </div>
                       <div class="col">
                              <p>End date</p>
                              <input class="form-control" row="3" type="month" placeholder="" style="" />
                       </div>
                  </div>
                  <br/>
                  <div class="row">
                      <div class="col">
                      <p>Description</p>
                      <textarea class="form-control" rows="5" id="comment"></textarea>
                      </div>
                  </div>
              </div>
              `);
}
export function addSkillElement() {
  return (document.getElementById("skillsToAdd").innerHTML += `
              <div class="form-group my-3 border border-dark rounded" style="display:flex;">
                     <div class="container py-3 px-3">
                            <div class="row">
                                   <div class="col mb-2">
                                          <p>Skill</p>
                                          <input class="form-control" row="3" type="text" placeholder="" style="" />
                                          </div>
                                          </div>
                            <div class="row">
                                          <div class="col mb-2">
                                                 <p>Level</p>
                                                 <input class="form-range" step='25'  type="range" id="skillLevelRange" />
                                                 <p id='levelSk' style=" display:inline;float:right ;">
                                                 </p>
                                          </div>
                            </div>
                     </div>
                     </div>
                     `);
}
export function deleteSkill() {
  document.getElementById("skillsToAdd").lastChild.remove();
}

export function skillLevel() {
  document.getElementById("skillLevelRange").addEventListener("click", () => {
    let v = document.getElementById("skillLevelRange").value;
    if (v === "0") {
      document.getElementById("levelSk").innerHTML = "Beginner";
    } else if (v === "25") {
      document.getElementById("levelSk").innerHTML = "Moderate";
    } else if (v === "50") {
      document.getElementById("levelSk").innerHTML = "Good";
    } else if (v === "75") {
      document.getElementById("levelSk").innerHTML = "Very Good";
    } else {
      document.getElementById("levelSk").innerHTML = "Excellent";
    }
  });
}
function addCertificateContent() {
  return (document.getElementById("certifToadd").innerHTML += `
              <div class="form-group mb-3 border border-dark rounded" style="display:flex;">
          
              <div class="container py-3 px-3">
                  <div class="row">
                          <div class="col mb-2">
                              <p>Certificate</p>
                              <input class="form-control" row="3" type="text" placeholder="" style="" />
                          </div>
                  </div>
                  
                  <div class="row mt-2">
                       <div class="col">
                              <p>Date of obtention:</p>
                              <input class="form-control" type="month" placeholder="" style="" />
                       </div>
                  </div>
                  <br/>
                  <div class="row">
                      <div class="col">
                      <p>Description</p>
                      <textarea class="form-control" rows="3" max-length="100" id="comment"></textarea>
                      </div>
                  </div>
              </div>`);
}

export function addAchievementsContent() {
  return (document.getElementById(
    "achievementstoadd"
  ).innerHTML += `<div class="form-group mb-3 border border-dark rounded" style="display:'flex;">
   
       <div class="container py-3 px-3">
           <div class="row mb-2">
                   <div class="col mb-2">
                       <p>Position</p>
                       <input class="form-control" row="3" type="text" placeholder="" style="" />
                   </div>
           </div>
           <div class="row mt-2">
                <div class="col-md-6 col-sm-7">
                       <p>Club or association:</p>
                       <input class="form-control" type="text" placeholder="" style="" />
                </div>
                <div class="col-md-6 col-sm-7">
                       <p>City</p>
                       <input class="form-control" row="3" type="text" placeholder="" style="" />
                </div>
           </div>
           <div class="row mt-2">
                <div class="col">
                       <p>Start date</p>
                       <input class="form-control" type="month" placeholder="" style="" />
                </div>
                <div class="col">
                       <p>End date</p>
                       <input class="form-control" row="3" type="month" placeholder="" style="" />
                </div>
           </div>
           <br/>
           <div class="row">
               <div class="col">
               <p>Description</p>
               <textarea class="form-control" rows="5" id="comment"></textarea>
               </div>
           </div>
       </div>`);
}

export function deleteAchievement() {
  document.getElementById("achievementstoadd").lastChild.remove();
}

export function addSkill() {
  document
    .getElementById("skillsToAdd")
    .addEventListener("click", () => addSkillElement());
}

export function addEducationElement() {
  document
    .getElementById("addEducation")
    .addEventListener("click", addEducationContent());
  document
    .getElementById("addEducation")
    .removeEventListener("click", addEducationContent());
}

export function deleteEducation(e) {
  document.getElementById("toadd").lastChild.remove();
}

export function addCertificateElement() {
  document
    .getElementById("addCertificate")
    .addEventListener("click", addCertificateContent());
  document
    .getElementById("addCertificate")
    .removeEventListener("click", addCertificateContent());
}

export function deleteCertificate(e) {
  document.getElementById("certifToadd").lastChild.remove();
}

export function addEmploymentElement() {
  document
    .getElementById("addEmployment")
    .addEventListener("click", addEmploymentContent());
  document
    .getElementById("addEmployment")
    .removeEventListener("click", addEmploymentContent());
}

export function deleteEmployment(e) {
  document.getElementById("employmenttoadd").lastChild.remove();
}

function addQualitiesContent() {
  return (document.getElementById("qualitiestoadd").innerHTML += `
              <div class="form-group mb-3 border border-dark rounded" style="display:'flex';">
          
              <div class="container py-3 px-3">
                  <div class="row">
                          <div class="col mb-2">
                              <p>Quality</p>
                              <input class="form-control" row="3" type="text" placeholder="" style="" />
                          </div>
                  </div>
                  
              </div>
              `);
}

export function addQualitiesElement() {
  document
    .getElementById("addQuality")
    .addEventListener("click", addQualitiesContent());
  document
    .getElementById("addQuality")
    .removeEventListener("click", addQualitiesContent());
}

function addLanguageContent() {
  return (document.getElementById("languagesToAdd").innerHTML += `
              <div class="form-group my-3 border border-dark rounded" style="display:'flex';">
          
              <div class="container py-3 px-3">
                  <div class="row">
                          <div class="col mb-2">
                              <p>Language</p>
                              <input class="form-control" type="text" />
                              <p>Level</p>
                              <input class="form-control" type="number" placeholder="Your level on a scale of 1 to 5" step="0.1"  style="" />
                          </div>
                  </div>
                  
              </div>
              `);
}

export function deleteQuality() {
  document.getElementById("qualitiestoadd").lastChild.remove();
}

export function deleteLanguage() {
  document.getElementById("languagesToAdd").lastChild.remove();
}

export function addLanguageElement() {
  document
    .getElementById("addLanguage")
    .addEventListener("click", addLanguageContent());
  document
    .getElementById("addLanguage")
    .removeEventListener("click", addLanguageContent());
}

function addHobbiesContent() {
  return (document.getElementById("hobbiestoadd").innerHTML += `
              <div class="form-group mb-3 border border-dark rounded" style="display:'flex';">
          
              <div class="container py-3 px-3">
                  <div class="row">
                          <div class="col mb-2">
                              <p>Hobby</p>
                              <input class="form-control" row="3" type="text" placeholder="" style="" />
                          </div>
                  </div>
                  
              </div>
              `);
}

export function deleteHobby() {
  document.getElementById("hobbiestoadd").lastChild.remove();
}

export function addHobbyElement() {
  document
    .getElementById("addHobby")
    .addEventListener("click", addHobbiesContent());
  document
    .getElementById("addHobby")
    .removeEventListener("click", addHobbiesContent());
}

