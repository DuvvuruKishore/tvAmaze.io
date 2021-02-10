async function apiGet(str) {
    const b = await fetch(`https://api.tvmaze.com/search/shows?q=${str}`)
    const json = await b.json()
   // console.log(json)
   // console.log(json.length);
   // console.log(json[0].show.url);
for(var i=0;i<json.length;i++){
      //  document.querySelector('#placehere').innerHTML=json[0].show.image.medium;
      var imgPath=json[i].show.image.medium;
        var img=document.createElement("img");
        img.setAttribute("src",imgPath);
        // document.body.appendChild(img);
        var perminum=document.createElement('p');
       perminum.innerHTML=json[i].show.language;
      // document.body.appendChild(perminum);
       var perminumDate=document.createElement('p');
       perminumDate.innerHTML=json[i].show.premiered;
       //document.body.appendChild(perminumDate);
       var generic=document.createElement('p');
       generic.innerHTML=json[i].show.genres;
      // document.body.appendChild(generic);

       var link=document.createElement('div');
       link.innerHTML=json[i].show.url;
       //document.body.appendChild(link);
       document.body.appendChild(img);
       document.body.appendChild(perminum);
       document.body.appendChild(perminumDate);
       document.body.appendChild(generic);
       document.body.appendChild(link);
    
}
}

//hook up the search input field
const search = document.querySelector('#search')
search.addEventListener('change', (e) => {
    e.preventDefault();
    apiGet(e.target.value)
})

/*async function tv(query){
    var response= await fetch('http://api.tvmaze.com/search/shows?q=${query}');
     var data= await response.json();
     console.log(data[0].show.image.medium);
    var imgPath=data.show.image.medium;
    var img=document.createElement("img");
    img.setAttribute("src",imgPath);
    document.body.appendChild(img);
 
    // return data;
}

const search=document.querySelector('#search');
search.addEventListener('change', (e)=>{
     tv(e.target.value);
})*/