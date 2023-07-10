function render_docs(links) {
  let docs = document.getElementById("docs");

  let html = "<ul>";
  for (let i = 0; i < links.length; i++) {
    const element = links[i];

    if (element.type == "folder") {
      html += `<li><h2>${element.name}</h2></li>`;
    } else if (element.type == "file") {
      html += `<li><a href='${element.href}'>${element.name}</a></li>`;
    }

    // level 2 loop
    if (element.child) {
      html += "<ol>";

      for (let i = 0; i < element.child.length; i++) {
        const c_element = element.child[i];

        if (c_element.type == "folder") {
          html += `<li><h2>${c_element.name}</h2></li>`;
        } else if (c_element.type == "file") {
          html += `<li><a href='${c_element.href}'>${c_element.name}</a></li>`;
        }

        if (c_element.child) {
          html += "<ol>";
          // level 3 loop
          for (let i = 0; i < c_element.child.length; i++) {
            const sc_element = c_element.child[i];

            if (sc_element.type == "folder") {
              html += `<li><h2>${sc_element.name}</h2></li>`;
            } else if (sc_element.type == "file") {
              html += `<li><a href='${sc_element.href}'>${sc_element.name}</a></li>`;
            }
          }
          html += "</ol>";
        }
      }
      html += "</ol>";

    }
  }

  html += "</ul>";

  docs.innerHTML = html;
}
