function firecall(selection){

    let left=document.getElementById("left");
    let right=document.getElementById("right");
    const show =[];
    show[1]=document.getElementById("frame1");
    show[2]=document.getElementById("frame2");
    show[3]=document.getElementById("frame3");
    show[4]=document.getElementById("frame4");
    show[5]=document.getElementById("frame5");
    
    
    for(i=1;i<=5;i++){
        if(selection==i)
        {
           show[i].style.display="flex";
            continue;
        }
        else
        {
            show[i].style.display="none";
        }
    }
    
        
}
const show =[];
    show[1]=document.getElementById("frame1");
    show[2]=document.getElementById("frame2");
    show[3]=document.getElementById("frame3");
    show[4]=document.getElementById("frame4");
    show[5]=document.getElementById("frame5");
for(i=2;i<=5;i++)
    {
        show[i].style.display="none";
    }

show[1].style.display="flex";
