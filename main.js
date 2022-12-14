//                           menu Bar

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//                        menu bar ends

//                    on click event for education section start

function show1() {
  /// Show div :
  document.getElementById("progress").style.display = "flex";
  document.getElementById("skills-title").style.color = "deepskyblue";
  
  // Hide div :
  document.getElementById("education").style.display = "none";
  document.getElementById("education-title").style.color = "black";
  
}

function show2() {
  /// Show div :
  document.getElementById("education").style.display = "block";
  document.getElementById("education-title").style.color = "deepskyblue";
  
  // Hide div :
  document.getElementById("progress").style.display = "none"; 
  document.getElementById("skills-title").style.color = "black";
  
}
//                    on click event for education section end




