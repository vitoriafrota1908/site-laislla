function criarCoracao(){

    let coracao = document.createElement("div");

    coracao.className = "heart";

    coracao.innerHTML = "❤️";


    coracao.style.left = Math.random()*100 + "vw";


    coracao.style.fontSize =
    (20 + Math.random()*50) + "px";


    coracao.style.animationDuration =
    (4 + Math.random()*6) + "s";


    document.body.appendChild(coracao);



    setTimeout(()=>{

        coracao.remove();

    },10000);

}



setInterval(criarCoracao,200);