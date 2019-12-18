$(() => {
    //添加拖拽事件
    var dz = document.getElementById('drag-frame');
    dz.ondragover = function(ev) {
        //阻止浏览器默认打开文件的操作
        ev.preventDefault();
        //拖入文件后边框颜色变红
        this.style.borderColor = 'red';
        $("#up-icon-grey").hide();
        $("#up-icon-red").show();        
        $("#up-icon-excel").hide();
        //$("#drag-remind-word").hide();
    }

    dz.ondragleave = function() {
        //恢复边框颜色
        this.style.borderColor = 'gray';
        $("#up-icon-grey").show();
        $("#up-icon-red").hide();
        $("#up-icon-excel").hide();
        $("#drag-remind-word").show();
        if (dragFiles.size == 1) {
            $("#up-icon-grey").hide();
            $("#up-icon-red").hide();
            $("#up-icon-excel").show();
            $("#drag-remind-word").hide();
        }
    }
    dz.ondrop = function(ev) {
        //阻止浏览器默认打开文件的操作
        ev.preventDefault();
        $("#up-icon-grey").show();
        $("#up-icon-red").hide();
        //恢复边框颜色
        this.style.borderColor = 'gray';       
        var file_f = ev.dataTransfer.files[0];//拿到第一个文件
        //控制一次仅支持上传一个文件
        if(ev.dataTransfer.files.length > 1){
            window.alert("一次仅支持上传一个文件");
            return false;
        }
        //检查文档类型
        const accept = ['.xls', '.xlsx'];
        const index = file_f.name.lastIndexOf('.');
        if (index < 0 || accept.indexOf(file_f.name.substr(index).toLowerCase()) < 0) { // 检查文件类型
            window.alert('仅支持上传excel表格，请重试');
            return false;
        }
        $("#up-icon-grey").hide();
        $("#drag-remind-word").hide();
        $("#up-icon-excel").show();
        //
        var drag_files = ev.dataTransfer.files;
        var frag = ocument.createDocumentFragment();d //为了减少js修改dom树的频度，先创建一个fragment，然后在fragment里操作
        var tr, time, size;
        for(var file of drag_files) {
            if(dragFiles.size == 1){
                window.alert("仅能够上传一个文件");
                return ;
            }       
            dragFiles.set(file.name,file);
            
            tr = document.createElement('tr');
            //获取文件大小
            size = Math.round(file.size * 100 / 1024) / 100 + 'KB';
            //获取格式化的修改时间
            time = file.lastModifiedDate.toLocaleDateString() + ' ' + file.lastModifiedDate.toTimeString().split(' ')[0];
            tr.innerHTML = '<td>' + file.name + '</td><td>' + time + '</td><td>' + size + '</td><td>删除</td>';
            console.log(size + ' ' + time);
            frag.appendChild(tr); //?
            
        }
        //把文件名写在上传按钮边上
        var file_name = file_f.name;
        document.getElementById("file_name").innerHTML ="<div>"+file_name+"</div>";
        console.log(file_name);
        //alert(dragFiles);
        this.childNodes[3].childNodes[1].childNodes[1].appendChild(frag);
        //注意DOM树的结构,为什么是‘1'？文档里几乎每一样东西都是一个节点，甚至连空格和换行符都会被解释成节点。而且都包含在childNodes属性所返回的数组中.不同于jade模板
    }
    // 用事件委托的方法为‘删除'添加点击事件，使用jquery中的on方法
    $(".tbody").on('click', 'tr td:last-child', function() {
        //删除拖拽框已有的文件
        var key = $(this).prev().prev().prev().text();
        console.log(key);
        dragFiles.delete(key);
        $(this).parent().remove();
        document.getElementById("file_name").innerHTML ="";//删除了文件名
        //
        $("#up-icon-grey").show();
        $("#up-icon-red").hide();
        $("#up-icon-excel").hide();
        $("#drag-remind-word").show();
    });

    //点击上传文件触发
    var key = "";
    var file_upbtn = $("#file_upbtn");
    $(file_upbtn).click(function(){
        $("#file_input"+key).click();
    });
    $("#file_input"+key).change(function(){
        //检查文档类型
        var file_f = $("#file_input"+key)[0].files[0];
        const accept = ['.xls', '.xlsx'];
        const index = file_f.name.lastIndexOf('.');
        if (index < 0 || accept.indexOf(file_f.name.substr(index).toLowerCase()) < 0) { // 检查文件类型
            window.alert('仅支持上传excel表格，请重试');
            return false;
        }
        //把文件名写在上传按钮边上
        var file_name = file_f.name;
        document.getElementById("file_name").innerHTML ="<div>"+file_name+"</div>";
        console.log(file_name);
        //改变上面框的样式
        $("#up-icon-grey").hide();
        $("#up-icon-red").hide();
        $("#drag-remind-word").hide();
        $("#up-icon-excel").show();
        var drag_files = $("#file_input"+key)[0].files;
        var frag = document.createDocumentFragment(); //为了减少js修改dom树的频度，先创建一个fragment，然后在fragment里操作
        var tr, time, size;
        for(var file of drag_files) {
            tr = document.createElement('tr');
            //获取文件大小
            size = Math.round(file.size * 100 / 1024) / 100 + 'KB';
            //获取格式化的修改时间
            time = file.lastModifiedDate.toLocaleDateString() + ' ' + file.lastModifiedDate.toTimeString().split(' ')[0];
            tr.innerHTML = '<td>' + file.name + '</td><td>' + time + '</td><td>' + size + '</td><td>删除</td>';
            console.log(size + ' ' + time);
            frag.appendChild(tr); //?
            dragFiles.set(file.name,file);
        }
        dz.childNodes[3].childNodes[1].childNodes[1].appendChild(frag);
    });

});
// 使用map的好处是可以去重
let dragFiles = new Map();

/**
 * 获取FormData对象
 */
function getFormData() {
    var formDate = new FormData();
    dragFiles.forEach(function(item) {
        formDate.append("files",item);
    })
    return formDate;
}

function upLoadFile(){
    $("#file_input").trigger('click');
    var file_b = document.getElementById("files").files;
    var file_f = file_b[0];
    //控制一次仅支持上传一个文件
    if(file_b.length > 1){
        window.alert("一次仅支持上传一个文件");
        return false;
    }
    //检查文档类型
    const accept = ['.xls', '.xlsx'];
    const index = file_f.name.lastIndexOf('.');
    if (index < 0 || accept.indexOf(file_f.name.substr(index).toLowerCase()) < 0) { // 检查文件类型
        window.alert('仅支持上传excel表格，请重试');
        return false;
    }
    window.alert("上传文件啦！");

}
function up(){
    window.alert("123");
}