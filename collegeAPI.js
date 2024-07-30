let url="http://universities.hipolabs.com/search?name=";


// let country="Nepal";
let btn=document.querySelector('button');
btn.addEventListener("click",async()=>{
let country=document.querySelector("input").value;
let colArr= await getColleges(country);
showColleges(colArr);
});

async function showColleges(colArr){
    let list=document.querySelector("#lst1");
    list.innerText="";

    for(col of colArr){
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
        // console.log(col.name);
    }
document.querySelector("input").value="";
}

async function getColleges(country){
    // let country=document.querySelector("input").value;
    try{
        
    let res=await axios.get(url+country);
    console.log(res);
    return res.data;
    }
    catch(e){
        console.log("Error:-",e);

        return ["Wrong Country"];
    }
}