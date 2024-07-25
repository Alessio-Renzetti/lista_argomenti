
let bottone=$("#bottone")
$.get("http://localhost:8080/conteggio_ore/lista",function(data){
    for ( i=0;i<data.length;i++){
        $("tbody").append(
            $("<tr>").append($("<td>").attr("scope","row").text(`${data[i].nome_cognome}`),
            $("<td>").text(`${data[i].titolo}`),
            $("<td>").text(`${data[i].ore_presenza}`),
            $("<td>").text(`${data[i].ore_lezioni}`),
            $("<td>").text(`${data[i].percentuale}`)))
    }
    bottone.click(function(){
        let value= $("#filtro").val()        
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().indexOf(value) > -1)
          });
    })



})