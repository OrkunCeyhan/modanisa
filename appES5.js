//yazı Consttrucr
function Yazı(title) {
  this.title = title;
}

//uı constructor
function UI() {}

UI.prototype.addyazıToList = function (yazı) {
  const list = document.getElementById("yazı-list");

  var html = `
    <tr>
    
        <td>${yazı.title}</td>
     
        <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
    </tr>
    `;
  list.innerHTML += html;
};

UI.prototype.deleteyazı = function (element) {
  if (element.classList.contains("Sil")) {
    element.parentElement.parentElement.remove();
  }
};

UI.prototype.showAlert = function (message, className) {
  var alert = `<div class="alert alert-${className}">
  ${message}
  </div>`;

  const row = document.querySelector(".row");
  row.insertAdjacentHTML("afterBegin", alert);
};
document.getElementById("new-yazı").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value;

  //create yazı object
  const yazı = new Yazı(title);

  //create UI
  const ui = new UI();

  if (title === "") {
    ui.showAlert("please complete the form", "warning");
  } else {
    //add yazı to list
    ui.addyazıToList(yazı);

    //clear Controls
    ui.clearConstrols();

    ui.showAlert("the yazı has been added", "success");
  }

  e.preventDefault();
});

document.getElementById("yazı-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteyazı(e.target);
  ui.showAlert("the yazı has been deleted", "danger");
});
