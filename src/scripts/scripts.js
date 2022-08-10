import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function addEducationContent (){
       return(
              document.getElementById("toadd").innerHTML += `
              <div class="form-group mb-3 border border-dark rounded" style="display='flex';">
          
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
              `
       );
}

export function addEducationElement() {
         document.getElementById("addEducation").addEventListener("click",addEducationContent())
         document.getElementById("addEducation").removeEventListener("click",addEducationContent())
}
export function deleteEducation(e){
       document.getElementById("toadd").lastChild.remove();
}