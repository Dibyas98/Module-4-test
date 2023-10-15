let form = document.getElementById("form");
form.addEventListener("click", displayformpage);
let search = document.getElementById("search");
search.addEventListener("click", searchdata);
let sort = document.getElementById('sort');
sort.addEventListener("click", sorting);


function sorting(event) {
    event.preventDefault();
    window.onload = displayform();
    function displayform(event) {
        let parent = document.getElementById("container");
        parent.innerHTML = `
        <button id="sort">Sort</button>
        <table id="myTable">
        <tr>
          <th>Name</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Berglunds snabbkop</td>
          <td>Sweden</td>
        </tr>
        <tr>
          <td>North/South</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Koniglich Essen</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Italy</td>
        </tr>
        <tr>
          <td>Paris specialites</td>
          <td>France</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Canada</td>
        </tr>
      </table>
      <button class="btn-cancle" id="can">back</button>
        `
    }
    let sort = document.getElementById('sort');
    sort.addEventListener('click', sortTable);

    function sortTable() {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("myTable");
        switching = true;
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.rows;
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
                //start by saying there should be no switching:
                shouldSwitch = false;
                /*Get the two elements you want to compare,
                one from current row and one from the next:*/
                x = rows[i].getElementsByTagName("TD")[0];
                y = rows[i + 1].getElementsByTagName("TD")[0];
                //check if the two rows should switch place:
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                /*If a switch has been marked, make the switch
                and mark that a switch has been done:*/
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }
    let canc = document.getElementById("can");
    canc.addEventListener("click", close);
    function close() {
        location.reload();
    }
}

function searchdata(event) {
    event.preventDefault();
    window.onload = displayform();
    function displayform(event) {
        let parent = document.getElementById("container");
        parent.classList.add("search");
        parent.innerHTML = `
        
        <input type="text" id="filter" placeholder="Search by name" class="input-f">
            <table id="table">
        <thead>
            <tr>
                <td class="name">Name</td>
                <td class="age">Age</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>21</td>
            </tr>
            <tr>
                <td>Rahul</td>
                <td>24</td>
            </tr>
            <tr>
                <td>Vivek</td>
                <td>19</td>
            </tr>
            <tr>
                <td>Anjali</td>
                <td>23</td>
            </tr>
            <tr>
                <td>Subham</td>
                <td>28</td>
            </tr>
            <tr>
                <td>Akshat</td>
                <td>26</td>
            </tr>
        </tbody>
    </table>
    <button class="btn-cancle" id="can">back</button>
        `
            ;
    }

    let filter = document.getElementById("filter");
    filter.addEventListener("keyup", function (event) {
        let text = event.target.value.toUpperCase();
        let mytable = document.getElementById("table");

        let tr = mytable.getElementsByTagName("tr");
        for (let i = 1; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                let txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(text) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    });

    let canc = document.getElementById("can");
    canc.addEventListener("click", close);
    function close() {
        location.reload();
    }
}

function displayformpage(event) {
    event.preventDefault();
    window.onload = displayform();

    function displayform(event) {
        let parent = document.getElementById("container");
        parent.innerHTML = `
        <div class="cont" id="con">
        <img src="./man-avatar-profile-picture-vector-illustration_268834-538.avif" alt="">
        <form>
            <label for="">username</label>
            <br>
            <input type="text" placeholder="Nombre completo" id="user" class="bar"><br><br>
            <label for="">password</label>
            <br>
            <input type="password" class="bar" id="pass" value="">
            <br>
            <br>
            <button class="btn" id="sub" >Login</button>
            <br><br>
            <input type="checkbox">Remember Me
        </form>
        <button class="btn-cancle" id="can">Cancel</button>
        </div>
        `;
    }

    let submit = document.getElementById("sub");
    submit.addEventListener("click", login);
    function login(event) {
        event.preventDefault();
        let user = document.getElementById("user").value;
        let pass = document.getElementById("pass").value;

        if (user === "" || pass === "") {
            alert("Please enter username and password");
        } else {
            alert("Login successful!");
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
    }
    let canc = document.getElementById("can");
    canc.addEventListener("click", close);
    function close() {
        location.reload();
    }
}
