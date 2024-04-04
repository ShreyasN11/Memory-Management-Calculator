function calculate_pages(event){
    event.preventDefault();
    let vms = Number(document.getElementById("vm-1").value);
    //console.log(vms);
    let ps = Number(document.getElementById("ps-1").value);
    //console.log(ps);
    if(check_param(vms,ps) === -1) return;
    let res = vms/ps;
    const VMisKB = document.getElementById("vmkb-1").checked;
    const PisB = document.getElementById("psb-1").checked;
    //console.log(res);
    if(VMisKB) res*= 1024;
    else res*=1048576;
    if(PisB) res*=1;
    else res/=1024;

    const res_btn = document.getElementById("res-1");
    res_btn.innerText = res.toString();
}

function page_size(event){
    event.preventDefault();
    let vms = Number(document.getElementById("vm-2").value);
    //console.log(vms);
    let nop = Number(document.getElementById("nop-2").value);
    if(check_param(vms,nop) === -1) return;
    //console.log(nop);
    let res = vms/nop;
    const VMisKB = document.getElementById("vmkb-2").checked;
    //console.log(res);
    if(VMisKB) res*= 1024;
    else res*=1048576;
    if(res >= 1048576){
        res/=1048576;
        res+= " MB";
    }
    else if(res>=1024){
        res/=1024;
        res+= " KB";
    }
    const res_btn = document.getElementById("res-2");
    res_btn.innerText = res.toString();
}

function virtual_memory(event){
    event.preventDefault();
    let ps = Number(document.getElementById("ps-3").value);
    //console.log(ps);
    let nop = Number(document.getElementById("nop-3").value);
    //console.log(nop);
    if(check_param(nop,ps) === -1) return;
    let res = ps*nop;
    const PSisB = document.getElementById("psb-3").checked;
    //console.log(res);
    if(PSisB) res*=1;
    else res*= 1024;
    if(res >= 1048576){
        res/=1048576;
        res+= " MB";
    }
    else if(res>=1024){
        res/=1024;
        res+= " KB";
    }
    const res_btn = document.getElementById("res-3");
    res_btn.innerText = res.toString();
}

function toggleMode(){
    const dark_btn = document.getElementById("dt");
    const body = document.body;
    if (body.getAttribute("data-bs-theme") === "dark") {
        body.setAttribute("data-bs-theme", "light");
        res= "LIGHT";
        dark_btn.innerText = res.toString();
    }
    else{
        body.setAttribute("data-bs-theme", "dark");
        res= "DARK";
        dark_btn.innerText = res.toString();
    }    
}

function check_param(n1, n2){
    if(n1<=0 || n2<=0){
        alert("Please Enter Positive Values");
        return -1;
    }
    return 1;
}