/* $(document).ready(function () {
    $("#principales").hover(function () {

        $.ajax({
            url: "https://swapi.dev/api/people/1",
            method: "GET",
            dataType: "json",
            success: function(data){
                let lista = ""
                data.forEach(post => {
                    lista += `<div>${post.height}</div>`
                });
                $("#principales").html(lista)
            },
                error: function (error) {
                    console.log("Hubo un error", error.message)
                }
        })
    })

})
 */

/* $(document).ready(function(){
    $('.block').hover(function() {
      const block = $(this);
      const url = block.data('url');
      $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
          block.html(`<p>Nombre: ${data.name}</p><p>Estatura: ${data.height}</p><p>Peso: ${data.mass}</p>`);
          block.show();
        }
      });
    });
}); */

document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('mouseenter', function() {
      const url = this.getAttribute('data-url');
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.innerHTML = `<p>Nombre: ${data.name}</p><p>Estatura: ${data.height}</p><p>Peso: ${data.mass}</p>`;
          this.style.display = 'block';
        });
    });
});