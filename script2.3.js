tbl = "";
mT = 0;
function mkTbl(tdSz, n) { //Функция генерации поля n x n (задается в hmtl значение n)
    mT = n;
    z = 3;
    p = tdSz;
    z1=3;//чисто 3 картинки призов
    td = "<td style = 'background-color:#f0f0f0; text-indent: 0; text-align: center; font-weight: bold; font-size: 0px; color: black;width:" + tdSz + "; height:" + tdSz       + "'"; // размер каждой ячейки font-size 0 скрывает цифры в ячейке

    td += " onclick = 'sayRC(this,p)'></td>"; // ячейка будет принимать ЛевыйКлик и вызывать функцию sayRC

    tHdr = "<table id = 'tbl' style = 'background-color:#ccccaa;margin:  auto; cursor:pointer';  border = 5px";
// создание таблицы , все что касатеся style до ' после pointer(границу почему-то можно после)

    document.write(tHdr); // рисуем саму таблицу на экране(еще пустую)
    for (i = 0; i < mT; i++) {
       document.write("<tr>"); //новая строка
       for (j = 0; j < mT; j++) {
         document.write(td); // новая ячейка
       }     
       document.write("</tr>");
    }
    document.write("</table>"); // цикл выше заполнял ее 
     tbl = document.getElementById("tbl") // Получаем ссылку на таблицу со всеми элементами в ней
    elem = document.getElementById('elem');// сделать его фон красным
    elem.innerHTML = 'Осталось попыток ' + z;
}




function sayRC(cll,p) {
 //Номер столбца текущей ячейки
   c = cll.cellIndex;
   r = gtRw(cll, c); //для более сложной реализации наличия призов внутри с заранее заготовленными числами но это прям жесть
   if( z>0 ){//попытки  есть
    if (tbl.rows[r].cells[c].innerHTML % 2) { // 1 значит красный - 0 зеленый
      tbl.rows[r].cells[c].style.background = 'red';
        //alert("Ячейка " + r + ":" + c + " оказалась без приза");
      z=z-1;
    }
    else{
      tbl.rows[r].cells[c].style.background = 'green';
         //alert("Ячейка " + r + ":" + c + " призовая");
      k=z1+".jpg";

      z1=z1-1;
      if( z1==0){z1=3;}
      
      icon = "<img style=' width:"+p+"; height:"+p+";' src='"+k+"'>"; 
//Боже ЗНАЧЕНИЕ КОТОРОЕ передается в главную функцию тут НЕ передается само в ЭТУ , поэтому я сюда впихнул еще параметр P  tak kak TDCZ не передавалась сама
      tbl.rows[r].cells[c].innerHTML= icon;
    }
    elem.innerHTML = 'Осталось попыток ' + z;
   }
   else { alert("У вас не осталось попыток, Вы проиграли"); }
}



// Возвращает номер строки, которой расположена ячейка cll
function gtRw(cll, c) {
    for (i = 0; i < mT; i++) {
      rw = tbl.rows[i]; //  в таблице tbl.строки(номер строки) - получаем ссылку на строку со всеми элементами в ней
      if (rw.cells[c] == cll) return i; 
    }  
}





function nGmFftngs() {
 // mT - размер заполняемой таблицы
 fL = mT * mT;
 // Массив генерируемых целых чисел
 arrF = new Array(fL);
 // Массив флажков генерируемых целых чисел
 // Элемент arrF2[k] равен false, если число k уже имеется в массиве arrF
 arrF2 = new Array(fL);
 for (k = 0; k < fL; k ++) {
  arrF[k] = 0;
  arrF2[k] = true;
 }
 kL = kL2 = 0;
 // Цикл заполнения массива arrF
 // Число итераций не более 10000
 while (kL < fL && kL2++ < 10000) {
  // Получаем целое случайное число из диапазона [1, fL]
  k = Math.floor(Math.random() * (fL + 1));
  if (k > 0 && arrF2[k - 1]) {
   arrF2[k - 1] = false;
   arrF[kL] = k;
   kL++;
  }
 }
 kL = 0;
 // Цикл заполнения таблицы числами из массива arrF
 for (i = 0; i < mT; i++) {
  rw = tbl.rows[i];
  for (j = 0; j < mT; j++) {
   k = arrF[kL++];
   rw.cells[j].innerHTML = (k > fL - 1) ? "" : k;
  }
 }
}