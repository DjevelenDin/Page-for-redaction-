let header = document.getElementById('header');
let main = document.getElementById('main');
let section = document.getElementById('section');
let footer = document.getElementById('footer');
let code = document.getElementById('format');
let bold = document.getElementById('bold');
let italic = document.getElementById('italic');
let underline = document.getElementById('underline');
let through = document.getElementById('through');
let textarea = document.getElementById('textarea');
let text = document.getElementById('text');
let save = document.getElementById('save');
let left = document.getElementById('left');
let center = document.getElementById('center');
let right = document.getElementById('right');
let signIn = document.getElementById('signIn');
let password = document.getElementById('exampleInputPassword-first');
let email = document.getElementById('exampleInputEmail-first');
let lock = document.getElementById('lock');
let unlock = document.getElementById('unlock');
let emailHelp = document.getElementById('emailHelp-first');
let inputNull = document.getElementById('emailHelp-second');
let file = document.getElementById('file');
let countTR = document.getElementById('countTR');
let widthTD = document.getElementById('widthTD');
let widthBorder = document.getElementById('widthBorder');
let resetModalTable = document.getElementById('resetModalTable');
let countTD = document.getElementById('countTD');
let heightTD = document.getElementById('heightTD');
let styleBorder = document.getElementById('styleBorder');
let colorBorder = document.getElementById('colorBorder');
let createTable = document.getElementById("createTableFormat");
let reset = document.getElementById('createTable');
let invalidTable = document.getElementById('invalidTable');
let countLi = document.getElementById('countLi');
let typeMark = document.getElementById('typeMark');
let invalidOl = document.getElementById('invalidOl');
let countLi2 = document.getElementById('countLi2');
let typeMarks = document.getElementById('typeMarks');
let invalidUl = document.getElementById('invalidUl');
let blah = document.getElementById("blah");


let emailRegex = /\w+\@\w+\.\w+/gi;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
let numberRegex = /^\d+$/;

textarea.value = text.innerHTML;


function fontFamily(el) {
    text.style.fontFamily = el.getAttribute('data-family');
}

function fontSize(el) {
    text.style.fontSize = el.getAttribute('data-size') + 'px';
}

function textColor(el) {
    text.style.color = el.getAttribute('data-color-text');
}

function colorBackground(el) {
    text.style.background = el.getAttribute('data-color-background');
}

function imageBackground(el) {
    text.style.backgroundImage = "url(" + el.getAttribute('src') + ")";
}

function leftText() {
    text.classList.add('left');
    text.classList.remove('center');
    text.classList.remove('right');
}

function centerText() {
    text.classList.remove('left');
    text.classList.add('center');
    text.classList.remove('right');
}

function rightText() {
    text.classList.remove('left');
    text.classList.remove('center');
    text.classList.add('right');
}

function boldText() {
    text.classList.toggle('bold');
}

function italicText() {
    text.classList.toggle('italic');
}

function underlineText() {
    text.classList.toggle('underline');
}

function throughText() {
    text.classList.toggle('through');
}

function saveChanges() {
    header.classList.remove('display');
    main.classList.remove('display');
    section.classList.add('display');
    footer.classList.add('display');
    text.innerHTML = textarea.value;
}

function addFormat() {
    header.classList.add('display');
    main.classList.add('display');
    section.classList.remove('display');
    footer.classList.remove('display');
}

//this function turns off the button 
window.onload = function () {
    format.disabled = true;
}

// function checked input in regex and turns on the button
signIn.addEventListener('click', (e)=>{
    e.preventDefault();
        if (emailRegex.test(email.value) == true && passwordRegex.test(password.value) == true) {
            format.disabled = false;
            console.log(true);
            $('#exampleBackground-first').modal('hide');
            unlock.style.display = "block";
            lock.style.display = "none";
        } else if (emailRegex.test(email.value) == " " && passwordRegex.test(password.value) == " ") {
            inputNull.style.display = 'block';
        } else {
            console.log(false);
            emailHelp.innerText = "Please check your login or password";
            emailHelp.style.display = "block";
            inputNull.style.display = "none";
        }
})


function cancel() {
    $('#exampleBackground-third').modal('hide');
}

function signOut() {
    format.disabled = true;
    $('#exampleBackground-third').modal('hide');
    lock.style.display = "block";
    unlock.style.display = "none";
}

function buildTable() {
    let table = "";
    table += `<table style="border:1">`
    for (let i = 0; i < countTR.value; i++) {
        table += "<tr>"
        for (let j = 0; j < countTD.value; j++) {
            table += `<td style="width:${widthTD.value}px; height:${heightTD.value}px; border:${widthBorder.value}px ${styleBorder.value} ${colorBorder.value}">TR</td>`
        }
        table += "</tr>"
    }
    table += "</table>"

    textarea.value = table;
};

function resetTableBlock() {
    countTR.value = "";
    countTD.value = "";
    widthTD.value = "";
    heightTD.value = "";
    widthBorder.value = "";
}

function checkRegexTable() {

    if (numberRegex.test(countTR.value) == true &&
        numberRegex.test(widthTD.value) == true &&
        numberRegex.test(widthBorder.value) == true &&
        numberRegex.test(countTD.value) == true &&
        numberRegex.test(heightTD.value) == true
    ) {
        buildTable();
    } else {
        invalidTable.style.display = "block";
    }
}

function buildLi() {
    let li = "";
    li += "<ol>";
    for (let i = 0; i < countLi.value; i++) {
        li += `<li style="list-style-type:${typeMark.value}">item</li>`
    }
    li += "</ol>"
    textarea.value = li;
}

function checkRegexLi() {
    if (numberRegex.test(countLi.value) == true && typeMark.value !== "") {
        buildLi();
    } else {
        invalidOl.style.display = "block";
    }
}

function resetOlBlock() {
    countLi.value = "";
    typeMark.value = "";
}
// 

function buildLi2() {
    let li = "";
    li += "<ul>";
    for (let i = 0; i < countLi2.value; i++) {
        li += `<li style="list-style-type:${typeMarks.value}">item</li>`
    }
    li += "</ul>"
    textarea.value = li;
}

function checkRegexLi2() {
    if (numberRegex.test(countLi2.value) == true && typeMarks.value !== "") {
        buildLi2();
    } else {
        invalidUl.style.display = "block";
    }
}

function resetUlBlock() {
    countLi2.value = "";
    typeMarks.value = "";
}


function bgFiles() {
    text.style.backgroundImage = `url(${file.value}) no-repeat`;

}

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#blah')
          .attr('src', e.target.result)
          text.style.backgroundImage = `url(${blah.getAttribute('src')})`
      };
      reader.readAsDataURL(input.files[0]);
    }
  }