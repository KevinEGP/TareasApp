const btn = document.getElementById('btn');
const c = document.getElementById('tasks');

btn.addEventListener("click", function(e) {
  e.preventDefault()
  createAlert();
});

function createAlert() {
  const input = document.getElementById("input").value.split(":");
  var type = input[0];
  var message = input[1];
  if (input.length == 1) {
    message = input[0];
    type = "secondary";
  }
  const a = document.createElement("box");
  a.classList.add('alert');
  a.innerHTML = '<div class="alert alert-'+type+' alert-dismissible fade show" role="alert">'+message+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
  c.appendChild(a);
}
