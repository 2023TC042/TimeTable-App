(function(){
  const DAYS = ["月","火","水","木","金"];
  const PERIODS = 6;

  const table = document.getElementById("timetable");

  function buildTable(){
    table.innerHTML = "";

    // thead
    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    headRow.appendChild(document.createElement("th")); // 左上空白
    DAYS.forEach(d => {
      const th = document.createElement("th");
      th.textContent = d;
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);

    // tbody
    const tbody = document.createElement("tbody");
    for(let p=1;p<=PERIODS;p++){
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      th.textContent = `${p}限`;
      tr.appendChild(th);

      for(let c=1;c<=DAYS.length;c++){
        const td = document.createElement("td");
        const cellId = `r${p}-c${c}`;
        td.setAttribute("data-cellid", cellId);
        td.className = "tcell";
        const ph = document.createElement("div");
        ph.className = "placeholder";
        ph.textContent = "（空）クリックしてテスト";
        td.appendChild(ph);

        td.addEventListener("click", () => {
          console.log("clicked cell:", cellId);
          flashCell(td);
        });

        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
  }

  function flashCell(td){
    const orig = td.style.background;
    td.style.background = "#fffbdd";
    setTimeout(()=> td.style.background = orig, 220);
  }

  buildTable();
})();
