//Задание 1
let books = [
    { 
        article: "62464", 
        autor: "Фрэй",
        name: "Война за мир",
        info: "Очень хорошая вымышелнная книга"
    },
    {
        article: "748932",
        autor: "Жуль Верн", 
        name: "Необитаемый остров",
        info: "Книга повествующая, о судьбе главного герой, попавшего на необитаемый остров"
    },
    {
        article: "23645",
        autor: "Ричард Матесон", 
        name: "Легенда",
        info: "Книга о вымирании человечества из-за появления вируса. Выживание главного героя в каменных джунглях с зомби"
    }
];

    function output(books){
    
    let newtable = document.createElement("table");
    let html = '<table border="1" cellpadding="3">';
    
    html += '<tr>';
    html += '<td><button type="button" data-action="sort1" onClick="sort1();">Артикул</button></td>';
    html += '<td><button type="button" data-action="sort2" onClick="sort2();">Автор</button></td>';
    html += '<td><button type="button" data-action="sort3" onClick="sort3();">Название книги</button></td>';
    html += '<td><button type="button" data-action="sort4" onClick="sort4();">Информация о произведении</button></td>';
    html += '</tr>';
    
    for(let i = 0; i < books.length; i++)
    {
        html += '<tr>';
        html += '<td>' + books[i].article + '</td>';
        html += '<td>' + books[i].autor + '</td>';
        html += '<td>' + books[i].name + '</td>';
        html += '<td>' + books[i].info + '</td>';
        html += '</tr>';
    }
    
    document.getElementById('container').innerHTML = html + '</table>';
}

output(books);
let flag1 = false, flag2 = false, flag3 = false, flag4 = false;

function sort1(){
    if(flag1 == false){
        for (let i = 0, endI = books.length - 1; i < endI; i++) {
            for (let j = 0, endJ = endI - i; j < endJ; j++) {
                if (books[j].article < books[j + 1].article) {
                    let swap = books[j];
                    books[j] = books[j + 1];
                    books[j + 1] = swap;
                }
            }
        }
        flag1 = true;
    }
    
    else{
        for (let i = 0, endI = books.length - 1; i < endI; i++) {
            for (let j = 0, endJ = endI - i; j < endJ; j++) {
                if (books[j].article > books[j + 1].article) {
                    let swap = books[j];
                    books[j] = books[j + 1];
                    books[j + 1] = swap;
                }
            }
        }
        flag1 = false;
    }

    output(books);
}

function sort2(){    
    if(flag2 == false){
        function SortAutorTop(x, y){
            if (x.autor < y.autor) {return -1;}
            if (x.autor > y.autor) {return 1;}
            return 0;
        }
        books = books.sort(SortAutorTop);
        output(books);
        flag2 = true;
    }
    
    else{
        function SortAutorBot(x, y){
            if (x.autor < y.autor) {return 1;}
            if (x.autor > y.autor) {return -1;}
            return 0;
        }
        books = books.sort(SortAutorBot);
        output(books);
        flag2 = false;
    }
}

function sort3(){
    if(flag3 == false){
        function SortNameTop(x, y){
            if (x.name < y.name) {return -1;}
            if (x.name > y.name) {return 1;}
            return 0;
        }
        books = books.sort(SortNameTop);
        output(books);
        flag3 = true;
    }
    
    else{
        function SortNameBot(x, y){
            if (x.name < y.name) {return 1;}
            if (x.name > y.name) {return -1;}
            return 0;
        }
        books = books.sort(SortNameBot);
        output(books);
        flag3 = false;
    }
}

function sort4(){
    if(flag4 == false){
        function SortInfoTop(x, y){
            if (x.info < y.info) {return -1;}
            if (x.info > y.info) {return 1;}
            return 0;
        }
        books = books.sort(SortInfoTop);
        output(books);
        flag4 = true;
    }
    
    else{
        function SortInfoBot(x, y){
            if (x.info < y.info) {return 1;}
            if (x.info > y.info) {return -1;}
            return 0;
        }
        books = books.sort(SortInfoBot);
        output(books);
        flag4 = false;
    }
}