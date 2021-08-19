var element=document.createElement('p');
element.setAttribute('class','sSig');
function WarningSignal(){
    element.innerText="Enter Valid and Unique Title";
    console.log(document.getElementsByClassName('form')[0].appendChild(element));
    document.getElementById("Description").value = "";
    document.getElementById("todos-title").value = "";

        }
        let tit, desc, resp, newQuery, jobject, jarrayOfObjects = [];
        jarrayOfObjects = JSON.parse(localStorage.getItem('0'));
        console.log(jarrayOfObjects);
        function show() {
            if (jarrayOfObjects != null)
                for (let id = 0; id < jarrayOfObjects.length; id++) {
                    addRow(jarrayOfObjects[id][0], jarrayOfObjects[id][1], id + 1)
                }
        }
        function gettingValue() {
            tit = document.getElementById('todos-title').value;
            desc = document.getElementById('Description').value;
            jarrayOfObjects = jarrayOfObjects || [];
            jarrayOfObjects.push([tit, desc]);
            addRow(tit, desc, jarrayOfObjects.length);
    
            localStorage.clear();
            localStorage.setItem(0, JSON.stringify(jarrayOfObjects));
        }
        function addRow(title, descpt, idd) {
            newQuery = document.createElement('tr');
            newQuery.setAttribute('id', idd)
            newQuery.innerHTML = `
        <td class="slno-${idd}">${idd}</td>
        <td>${title}</td>
        <td>${descpt}</td>
        <td><button class="dele"onclick=del(${idd})>delete</button></td>`;
            let tbody = document.getElementsByTagName('tbody');
            tbody[0].appendChild(newQuery);
        }
        function del(id) {
                   jarrayOfObjects.splice(id - 1, 1);
            localStorage.clear();
            localStorage.setItem(0, JSON.stringify(jarrayOfObjects));
            location.reload();
        }
        function check(val) {
            if (jarrayOfObjects !== null)
                for (let id = 0; id < jarrayOfObjects.length; id++) {
                    if (jarrayOfObjects[id][0] == val)
                        return false;
                }
            return true;
        }
        submitted.addEventListener('click', function () {
            if (document.getElementById('todos-title').value !== '' && check(document.getElementById('todos-title').value)) {
                gettingValue();
                location.replace("list.html");
            }
            else
            WarningSignal();
        })
        show();