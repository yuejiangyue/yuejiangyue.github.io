//左侧链接
var links = document.getElementById("links").getElementsByTagName("li");
//首页五个盒子
var moreInfos = document.getElementById("contents").getElementsByTagName("a");
//内容
var contents = document.getElementById("contents").getElementsByClassName("content-row");
//内容标题及描述
var headerContent = document.getElementById("header-content");
var headerDescription = document.getElementById("header-description");
//查看简历按钮
var cvbtn = document.getElementById("view-cv-btn").getElementsByTagName("input");
for (var i = 0; i < cvbtn.length; i++) {
    cvbtn[i].onclick = function () {
        window.open("../image/cv.pdf")
    };
}
//面试评分表按钮
var scoreSheet = document.getElementById("score-sheet").getElementsByTagName("input");
for (var i = 0; i < scoreSheet.length; i++) {
    scoreSheet[i].onclick = function () {
        window.open("../pages/score-sheet.html");
    };
}

//链接跳转
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", showContent);
}

for (var i = 0; i < moreInfos.length; i++) {
    moreInfos[i].addEventListener("click", showContent);
}

function showContent() {
    contents[0].className = "row content-row";
    headerDescription.innerText = "";
    for (var i = 0; i < links.length; i++) {
        if (links[i] === this || moreInfos[i] === this) {
            headerContent.innerText = links[i].getElementsByTagName("span")[0].innerText;
            links[i].className = "active";
            contents[i + 1].className = "row content-row content-active";
        } else {
            links[i].className = "";
            contents[i + 1].className = "row content-row";
        }
    }
}

// The Calender
$('#calendar-my').datepicker();
$('#calendar-in').datepicker();