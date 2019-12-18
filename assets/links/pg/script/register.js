var candidate = document.getElementById("candidate");
var recruitingTeam = document.getElementById("recruiting-team");
var candidateForm = document.getElementById("candidate-form");
var recruitingTeamForm = document.getElementById("recruiting-team-form");

candidate.onclick = function () {

    if (candidate.checked == true) {
        console.log("test1");
        candidate.className = "candidate-form active";
    } else {
        candidate.className = "candidate-form";
    }
}

recruitingTeam.onclick = function () {

    if (recruitingTeam.checked == true) {
        console.log("test2");
        recruitingTeamForm.className = "recruiting-team-form active";
    } else {
        recruitingTeamForm.className = "recruiting-team-form";
    }
}