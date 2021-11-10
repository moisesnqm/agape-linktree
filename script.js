var alertList = document.querySelectorAll('.alert')
var alerts =  [].slice.call(alertList).map(function (element) {
  return new bootstrap.Alert(element)
})
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')
const type = 'danger'
const message = 'Em breve'

function alert() {
  var wrapper = document.getElementById('liveAlertPlaceholder')
  wrapper.innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Desculpe!</strong> Essa página ainda não está disponível.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  setTimeout(function() {document.getElementById('liveAlertPlaceholder').innerHTML='';},3000);
}

document.addEventListener("DOMContentLoaded", function() {
  var conteudo = 'Acesse os links fáceis do Ágape! - http://agape.org.br/links';
  document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
}, false);