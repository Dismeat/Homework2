//Задание 4

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
    let html = '<table border="2" style = "border-collapse: collapse; width: 100%">';
    
    html += '<tr>';
    html += '<td>Артикул</td>';
    html += '<td>Автор</td>';
    html += '<td>Название книги</td>';
    html += '<td>Информация о произведении</td>';
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