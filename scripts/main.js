// Funcao feita por um noob (eu) para tentar resolver o problema de ocultar 
// do texto do site:
function mostrarTexto(valor)
{
    //Oculta o Texto:
    var ocultarEn=document.getElementById("toEnsino");
    var ocultarPe=document.getElementById("toPesquisa");
    var ocultarEx=document.getElementById("toExtensao");
    //Mostra o Texto:
    var mostrarEn=document.getElementById("tcEnsino");
    var mostrarPe=document.getElementById("tcPesquisa");
    var mostrarEx=document.getElementById("tcExtensao")

    if(valor == 1)// Apertou em Ensino
    {
        if (ocultarEn.style.display === "none") 
        {
            ocultarEn.style.display="inline";
            ocultarPe.style.display="inline";
            ocultarEx.style.display="inline";
            mostrarEn.style.display="none";
            mostrarPe.style.display="none";
            mostrarEx.style.display="none";
        } 
        else 
        {
            ocultarEn.style.display="none";
            ocultarPe.style.display="inline";
            ocultarEx.style.display="inline";
            mostrarEn.style.display="inline";
            mostrarPe.style.display="none";
            mostrarEx.style.display="none";
        }
    }
    else if(valor == 2)//Apertou em Pesquisa
    {
        if (ocultarPe.style.display === "none") 
        {
            ocultarEn.style.display="inline";
            ocultarPe.style.display="inline";
            ocultarEx.style.display="inline";
            mostrarEn.style.display="none";
            mostrarPe.style.display="none";
            mostrarEx.style.display="none";
        } 
        else 
        {
            ocultarEn.style.display="inline";
            ocultarPe.style.display="none";
            ocultarEx.style.display="inline";
            mostrarEn.style.display="none";
            mostrarPe.style.display="inline";
            mostrarEx.style.display="none";
        }   
    }
    else if(valor == 3)// Apertou em Extensao
    {
        if (ocultarEx.style.display === "none") 
        {
            ocultarEn.style.display="inline";
            ocultarPe.style.display="inline";
            ocultarEx.style.display="inline";
            mostrarEn.style.display="none";
            mostrarPe.style.display="none";
            mostrarEx.style.display="none";
        } 
        else 
        {
            ocultarEn.style.display="inline";
            ocultarPe.style.display="inline";
            ocultarEx.style.display="none";
            mostrarEn.style.display="none";
            mostrarPe.style.display="none";
            mostrarEx.style.display="inline";
        } 
    }
    else
    {
        ocultarEn.style.display="inline";
        ocultarPe.style.display="inline";
        ocultarEx.style.display="inline";
        mostrarEn.style.display="none";
        mostrarPe.style.display="none";
        mostrarEx.style.display="none";
    }
    
}