const container = document.querySelector(".container");
let updateData;

function clearData() {
  document.getElementById("inputNama").value = "";
  document.getElementById("inputNim").value = "";
  document.getElementById("inputDomisili").value = "";
  document.getElementById("inputFakultas").value = "";
}

document.querySelector(".clear").addEventListener("click", function (e) {
  e.preventDefault();

  clearData();
});

document.querySelector(".submit").addEventListener("click", function (e) {
  e.preventDefault();

  let nama = document.getElementById("inputNama").value;
  let nim = document.getElementById("inputNim").value;
  let domisili = document.getElementById("inputDomisili").value;
  let fakultas = document.getElementById("inputFakultas").value;

  if (e.target.classList.contains("up")) {
    console.log(updateData);

    if (nama == "" || nim == "" || domisili == "" || fakultas == "") {
      alert("Anda harus mengisi data dengan lengkap !");
    } else {
      updateData.childNodes[1].innerHTML = nama;
      updateData.childNodes[3].innerHTML = nim;
      updateData.childNodes[5].innerHTML = domisili;
      updateData.childNodes[7].innerHTML = fakultas;
      e.target.classList.remove("up");
      clearData();
    }
  } else {
    if (nama == "" || nim == "" || domisili == "" || fakultas == "") {
      alert("Anda harus mengisi data dengan lengkap !");
    } else {
      const row = document.createElement("div");
      row.className = "card";
      row.innerHTML = `
            <div class="field">
              <div class="nama">${nama}</div>
              <div class="nim">${nim}</div>
              <div class="domisili">${domisili}</div>
              <div class="fakultas">${fakultas}</div>
            </div>
            <nav>
              <button type="submit" class="update">Update</button>
              <button type="submit" class="delete">Delete</button>
            </nav>
    `;

      container.appendChild(row);

      clearData();
    }
  }
});

container.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    e.target.parentNode.parentNode.remove();
  }
  if (e.target.classList.contains("update")) {
    const target = e.target.parentNode.previousSibling.previousSibling;
    document.getElementById("inputNama").value = target.childNodes[1].innerHTML;
    document.getElementById("inputNim").value = target.childNodes[3].innerHTML;
    document.getElementById("inputDomisili").value = target.childNodes[5].innerHTML;
    document.getElementById("inputFakultas").value = target.childNodes[7].innerHTML;

    document.querySelector(".submit").classList.add("up");
    updateData = target;
  }
});
