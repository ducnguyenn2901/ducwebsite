var i
var students = [
    [1, 'Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800'],
    [2, 'Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750'],
    [3, 'Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000'],
    [4, 'Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060'],
    [5, 'Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700'],
    [6, 'Brielle Williamson', 'Integration Specialist', 'New York', '4804', '2012/12/02', '$372,000'],
    [7, 'Herrod Chandler', 'Sales Assistant', 'San Francisco', '9608', '2012/08/06', '$137,500'],
    [8, 'Rhona Davidson', 'Integration Specialist', 'Tokyo', '6200', '2010/10/14', '$327,900'],
    [9, 'Colleen Hurst', 'Javascript Developer', 'San Francisco', '2360', '2009/09/15', '$205,500'],
    [10, 'Sonya Frost', 'Software Engineer', 'Edinburgh', '1667', '2008/12/13', '$103,600'],
    [11, 'Jena Gaines', 'Office Manager', 'London', '3814', '2008/12/19', '$90,560'],
    [12, 'Quinn Flynn', 'Support Lead', 'Edinburgh', '9497', '2013/03/03', '$342,000'],
    [13, 'Charde Marshall', 'Regional Director', 'San Francisco', '6741', '2008/10/16', '$470,600'],
    [14, 'Haley Kennedy', 'Senior Marketing Designer', 'London', '3597', '2012/12/18', '$313,500'],
    [15, 'Tatyana Fitzpatrick', 'Regional Director', 'London', '1965', '2010/03/17', '$385,750'],
    [16, 'Michael Silva', 'Marketing Designer', 'London', '1581', '2012/11/27', '$198,500'],
    [17, 'Paul Byrd', 'Chief Financial Officer (CFO)', 'New York', '3059', '2010/06/09', '$725,000'],
    [18, 'Gloria Little', 'Systems Administrator', 'New York', '1721', '2009/04/10', '$237,500'],
    [19, 'Bradley Greer', 'Software Engineer', 'London', '2558', '2012/10/13', '$132,000'],
    [20, 'Dai Rios', 'Personnel Lead', 'Edinburgh', '2290', '2012/09/26', '$217,500'],
    [21, 'Jenette Caldwell', 'Development Lead', 'New York', '1937', '2011/09/03', '$345,000'],
    [22, 'Yuri Berry', 'Chief Marketing Officer (CMO)', 'New York', '6154', '2009/06/25', '$675,000'],
    [23, 'Caesar Vance', 'Pre-Sales Support', 'New York', '8330', '2011/12/12', '$106,450'],
    [24, 'Doris Wilder', 'Sales Assistant', 'Sydney', '3023', '2010/09/20', '$85,600'],
    [25, 'Minh Duc', 'Chief Executive Officer (CEO)', 'London', '5797', '2009/10/09', '$1,200,000'],
    [26, 'Gavin Joyce', 'Developer', 'Edinburgh', '8822', '2010/12/22', '$92,575'],
    [27, 'Jennifer Chang', 'Regional Director', 'Singapore', '9239', '2010/11/14', '$357,650'],
    [28, 'Brenden Wagner', 'Software Engineer', 'San Francisco', '1314', '2011/06/07', '$206,850'],
    [29, 'Fiona Green', 'Chief Operating Officer (COO)', 'San Francisco', '2947', '2010/03/11', '$850,000'],
    [30, 'Shou Itou', 'Regional Marketing', 'Tokyo', '8899', '2011/08/14', '$163,000'],
    [31, 'Michelle House', 'Integration Specialist', 'Sydney', '2769', '2011/06/02', '$95,400'],
    [32, 'Suki Burks', 'Developer', 'London', '6832', '2009/10/22', '$114,500'],
    [33, 'Prescott Bartlett', 'Technical Author', 'London', '3606', '2011/05/07', '$145,000'],
    [34, 'Gavin Cortez', 'Team Leader', 'San Francisco', '2860', '2008/10/26', '$235,500'],
    [35, 'Martena Mccray', 'Post-Sales support', 'Edinburgh', '8240', '2011/03/09', '$324,050'],
    [36, 'Unity Butler', 'Marketing Designer', 'San Francisco', '5384', '2009/12/09', '$85,675'],
];
function showAll() {
    for (i = 0; i < students.length; i++) {
        var elementTr = document.createElement('tr');
        elementTr.setAttribute('id', students[i][0]);
        for (j = 0; j < students[i].length; j++) {
            var elementTd = document.createElement('td');
            elementTd.innerText = students[i][j];
            elementTr.appendChild(elementTd);
        }
        var elementDeleteTd = document.createElement('td');
        var buttonDelete = document.createElement('input');
        buttonDelete.setAttribute('type', 'button');
        buttonDelete.setAttribute('value', 'Delete');
        buttonDelete.setAttribute('onclick', "deleteTr(" + students[i][0] + ")");
        buttonDelete.style.borderRadius = "40px"
        buttonDelete.style.color = "white"
        buttonDelete.style.border = "none"
        buttonDelete.style.backgroundColor = " #0066cc"
        buttonDelete.style.width = "80px"
        buttonDelete.style.height = "30px"

        var elementEditTd = document.createElement('td');
        var buttonEdit = document.createElement('input');
        buttonEdit.setAttribute('type', 'button');
        buttonEdit.setAttribute('value', 'Edit');
        buttonEdit.setAttribute('onclick', "editTr(" + students[i][0] + ")");
        buttonEdit.style.borderRadius = "40px"
        buttonEdit.style.color = "white"
        buttonEdit.style.border = "none"
        buttonEdit.style.backgroundColor = " #0066cc"
        buttonEdit.style.width = "80px"
        buttonEdit.style.height = "30px"

        elementDeleteTd.appendChild(buttonDelete);
        elementEditTd.appendChild(buttonEdit);
        elementTr.appendChild(elementDeleteTd);
        elementTr.appendChild(elementEditTd);

        document.getElementById("myTable").appendChild(elementTr);
        document.getElementById("myTable").style.marginTop = "40px"
        document.getElementById("err_name").innerHTML = ""
    }
}
showAll();
function deleteAll() {
    for (i = 0; i < students.length; i++) {
        try {
            document.getElementById(students[i][0]).remove();
        }
        catch (err) {

        }
        document.getElementById("myTable").style.marginTop = "80px"
        document.getElementById("myFooter").style.marginTop = "109px"
        document.getElementById("err_name").innerHTML = "Name does not exist"
    }
}
function search() {
    var searchValue = document.getElementById("searchValue").value;
    deleteAll();
    if (searchValue != "") {
        for (k = 0; k < students.length; k++) {
            if (searchValue == students[k][1]) {
                var elementTr = document.createElement('tr');
                elementTr.setAttribute('id', students[k][0]);
                for (p = 0; p < students[k].length; p++) {
                    var resultTd = document.createElement('td');
                    resultTd.innerText = students[k][p];
                    elementTr.appendChild(resultTd);
                }
                var elementDeleteTd = document.createElement('td');
                var buttonDelete = document.createElement('input');
                buttonDelete.setAttribute('type', 'button');
                buttonDelete.setAttribute('value', 'Delete');
                buttonDelete.setAttribute('onclick', "deleteTr(" + students[k][0] + ")");
                buttonDelete.style.borderRadius = "40px"
                buttonDelete.style.color = "white"
                buttonDelete.style.border = "none"
                buttonDelete.style.backgroundColor = " #0066cc"
                buttonDelete.style.width = "80px"
                buttonDelete.style.height = "30px"

                var elementEditTd = document.createElement('td');
                var buttonEdit = document.createElement('input');
                buttonEdit.setAttribute('type', 'button');
                buttonEdit.setAttribute('value', 'Edit');
                buttonEdit.setAttribute('onclick', "editTr(" + students[k][0] + ")");
                buttonEdit.style.borderRadius = "40px"
                buttonEdit.style.color = "white"
                buttonEdit.style.border = "none"
                buttonEdit.style.backgroundColor = " #0066cc"
                buttonEdit.style.width = "80px"
                buttonEdit.style.height = "30px"

                elementDeleteTd.appendChild(buttonDelete);
                elementEditTd.appendChild(buttonEdit);
                elementTr.appendChild(elementDeleteTd);
                elementTr.appendChild(elementEditTd);

                document.getElementById("myTable").appendChild(elementTr);
                document.getElementById("myTable").style.marginTop = "80px"
                document.getElementById("myFooter").style.marginTop = "108px"
                document.getElementById("err_name").innerHTML = ""
            }

        }
    }
    else {
        showAll();
    }
}

function deleteTr(i) {
    document.getElementById(i).remove();
    for (o = 1; o <= students.length; o++) {
        if (document.getElementById(o) != null) {
            document.getElementById(o).remove();
        }
    }
    students.splice(i - 1, 1);
    var m = 1;
    for (v = 0; v < students.length; v++) {
        students[v][0] = m;
        m += 1;
    }
    showAll();
}