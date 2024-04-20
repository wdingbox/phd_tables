
function table_num() {
    var shref = window.location.href
    var idx = 1 + shref.lastIndexOf("#")
    console.log(idx)
    var num = shref.substring(idx)
    console.log(num)
    var etable = document.getElementsByTagName("table")[0];

    let b = document.createElement("b");
    b.innerHTML = `Table ${num}`
    etable.prepend(b)
    console.log("Table " + etable)

}
table_num()
