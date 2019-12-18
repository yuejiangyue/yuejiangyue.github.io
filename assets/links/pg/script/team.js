$(function(){
    //PAGE LIST OF INTERVIEWERS

    //Initialize Select2 Elements
    $('.select2').select2();

    $("#edit-s-list").click(function(){
        var delete_icon = document.getElementsByClassName('delete-icon-box-s-list');
        for (var i = 0; i < delete_icon.length; i++) {
            delete_icon[i].style.display = 'block';            
        }
        $("#confirm-s-list").show();
    });
    $("#edit-f-list").click(function(){
        var delete_icon = document.getElementsByClassName('delete-icon-box-f-list');
        for (var i = 0; i < delete_icon.length; i++) {
            delete_icon[i].style.display = 'block';            
        }
        $("#confirm-f-list").show();
    });
    $("#confirm-s-list").click(function(){
        var delete_icon = document.getElementsByClassName('delete-icon-box-s-list');
        for (var i = 0; i < delete_icon.length; i++) {
            delete_icon[i].style.display = 'none';            
        }
        $("#confirm-s-list").hide();
    });
    $("#confirm-f-list").click(function(){
        var delete_icon = document.getElementsByClassName('delete-icon-box-f-list');
        for (var i = 0; i < delete_icon.length; i++) {
            delete_icon[i].style.display = 'none';            
        }
        $("#confirm-f-list").hide();
    });

    //PAGE SCREEN INTERVIEW

    //Click edit of otc 11
    $("#modify-s-otc-11").click(function(){
        var delete_icon = document.getElementsByClassName('delete-icon-box-s-otc-11');
        for (var i = 0; i < delete_icon.length; i++) {
            delete_icon[i].style.display = 'block';            
        }
        $("#confirm-s-otc-11").show();
        $("#add-s-otc-11").show();
    });
    //click confirm of otc 11
    $("#confirm-s-otc-11").click(function(){
        var delete_icon = document.getElementsByClassName('delete-icon-box-s-otc-11');
        for (var i = 0; i < delete_icon.length; i++) {
            delete_icon[i].style.display = 'none';
        }
        $("#confirm-s-otc-11").hide();
        $("#add-s-otc-11").hide();
    });
    //click add of otc 11
    $("#add-s-otc-11").click(function(){
        //
        links[0].click();
    })

    //Click edit of otc 12
    $("#modify-s-otc-12").click(function(){
        var delete_icon = document.getElementsByClassName('delete-icon-box-s-otc-12');
        for (var i = 0; i < delete_icon.length; i++) {
            delete_icon[i].style.display = 'block';            
        }
        $("#confirm-s-otc-12").show();
        $("#add-s-otc-12").show();
    });
    //click confirm of otc 12
    $("#confirm-s-otc-12").click(function(){
        var delete_icon = document.getElementsByClassName('delete-icon-box-s-otc-12');
        for (var i = 0; i < delete_icon.length; i++) {
            delete_icon[i].style.display = 'none';
        }
        $("#confirm-s-otc-12").hide();
        $("#add-s-otc-12").hide();
    });
    //click add of otc 12
    $("#add-s-otc-12").click(function(){
        //
        links[0].click();
    })

    //PAGE FINAL INTERVIEW
    //Click edit of otc 21
    $("#modify-f-otc-21").click(function(){
        var delete_icon = document.getElementsByClassName('delete-icon-box-f-otc-21');
        for (var i = 0; i < delete_icon.length; i++) {
            delete_icon[i].style.display = 'block';            
        }
        $("#confirm-f-otc-21").show();
        $("#add-f-otc-21").show();
    });
    //click confirm of otc 11
    $("#confirm-f-otc-21").click(function(){
        var delete_icon = document.getElementsByClassName('delete-icon-box-f-otc-21');
        for (var i = 0; i < delete_icon.length; i++) {
            delete_icon[i].style.display = 'none';
        }
        $("#confirm-f-otc-21").hide();
        $("#add-f-otc-21").hide();
    });
    //click add of otc 11
    $("#add-f-otc-21").click(function(){
        //
        links[0].click();
    })

    //Click edit of otc 12
    $("#modify-f-otc-22").click(function(){
        var delete_icon = document.getElementsByClassName('delete-icon-box-f-otc-22');
        for (var i = 0; i < delete_icon.length; i++) {
            delete_icon[i].style.display = 'block';            
        }
        $("#confirm-f-otc-22").show();
        $("#add-f-otc-22").show();
    });
    //click confirm of otc 12
    $("#confirm-f-otc-22").click(function(){
        var delete_icon = document.getElementsByClassName('delete-icon-box-f-otc-22');
        for (var i = 0; i < delete_icon.length; i++) {
            delete_icon[i].style.display = 'none';
        }
        $("#confirm-f-otc-22").hide();
        $("#add-f-otc-22").hide();
    });
    //click add of otc 12
    $("#add-f-otc-22").click(function(){
        //
        links[0].click();
    })

    //PAGE OVERVIEW OF RECRIUMENT 
    /* jQueryKnob */
    $(".knob").knob({
      draw: function () {

        // "tron" case
        if (this.$.data('skin') == 'tron') {

          var a = this.angle(this.cv)  // Angle
              , sa = this.startAngle          // Previous start angle
              , sat = this.startAngle         // Start angle
              , ea                            // Previous end angle
              , eat = sat + a                 // End angle
              , r = true;

          this.g.lineWidth = this.lineWidth;

          this.o.cursor
          && (sat = eat - 0.3)
          && (eat = eat + 0.3);

          if (this.o.displayPrevious) {
            ea = this.startAngle + this.angle(this.value);
            this.o.cursor
            && (sa = ea - 0.3)
            && (ea = ea + 0.3);
            this.g.beginPath();
            this.g.strokeStyle = this.previousColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
            this.g.stroke();
          }

          this.g.beginPath();
          this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
          this.g.stroke();

          this.g.lineWidth = 2;
          this.g.beginPath();
          this.g.strokeStyle = this.o.fgColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
          this.g.stroke();

          return false;
        }
      }
    });
    /* END JQUERY KNOB */
})

//左侧链接
var links = document.getElementById("links").getElementsByTagName("li");
//首页八个盒子
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

var cvbtn1 = document.getElementById("view-cv-btn-1").getElementsByTagName("input");
for (var i = 0; i < cvbtn1.length; i++) {
    cvbtn1[i].onclick = function () {
        window.open("../image/cv.pdf")
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
//$('#calendar-my').datepicker();
//$('#calendar-in').datepicker();