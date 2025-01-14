"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  let d = discriminant;
  
  if (discriminant < 0) { //Если дискриминант меньше нуля, то корней нет (пустой массив)
      return arr;
  } else if (discriminant === 0) { //Если дискриминант равен нулю, возвращаем массив с одним элементом
      let root = -b / (2 * a);
      return [root];  
  } else {  //Если дискриминант больше нуля -возвращаем массив с двумя элементами
    return [
			(-b + Math.sqrt(d)) / (2 * a),  
			(-b - Math.sqrt(d)) / (2 * a)
		]  
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths){

  let P = percent/ 100 / 12; //Преобразование процентной ставки
  let S = amount - contribution; //Тело кредита — сумму, которую нужно вернуть банку
  let n = countMonths ;
 
  let monthlyPayment = (S * (P + (P / (Math.pow ((1 + P),n) - 1)))); //общая сумма, которую придётся заплатить клиенту
 
  let totalAmount = (monthlyPayment * n).toFixed(2); //Округлите результат до двух значений после запятой
 
 return Number(totalAmount);
 }