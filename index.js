
const pesquisar = document.querySelector("#btn")

pesquisar.addEventListener('click', ()=>{
  
  console.log("botao")
  
  sendApirequest()
})

async function sendApirequest(){
 
  const Api_Key = "HGWj3Vo3rBdzKNaRTIiRDvBJneLHzj6rcn8snYvo";
  const resposta= await fetch(`https://api.nasa.gov/planetary/apod?api_key=${Api_Key}`);
  console.log(resposta)
  const data = await resposta.json()
  console.log(data)
  usarApiData(data)
 
} 

function usarApiData(data){
  document.querySelector("#mostra").innerHTML += data.explanation
  document.querySelector("#mostra").innerHTML += `<img src="${data.url}">`
}



