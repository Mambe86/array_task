//13:26 - 15:20
function runIt() {
    const allValues = [1, 25, 18, 36, 4, 99, 23, 19, 18, 9, 12, 44, 61, 94,22,32,22];
    const badValues = [18, 36];
    const lowerBoundary = 5;
    const higherBoundary = 95;

    console.log("Showing statistics...");
    showStatistics(allValues, badValues, lowerBoundary, higherBoundary);
}

/**
 * allValues - логи это ВСЕХ измерений от прибора, ВКЛЮЧАЯ ошибочные значения.
 *
 * badValues - заранее известные ошибочные значения, все что встречается в этом массие должно быть исключено
 * 
 * lowerBoundary - нижняя граница погрешности, все что НИЖЕ этого значения должно быть исключено
 * higherBoundary - верхняя граница погрешности, все что ВЫШЕ этого значения должно быть исключено
 **/
function showStatistics(allValues, badValues, lowerBoundary, higherBoundary) {
    // your code here 
    // 1  
    const goodValues = allValues.filter((item) => {
        if (item > lowerBoundary && item < higherBoundary && !badValues.some(val => val === item))
            return item;
    });
    console.log(`удовлетворяют условию: ${goodValues}`);
    

    // 2
    const averageValue = goodValues.reduce((sum, current) => sum + current) / goodValues.length;
    console.log(`Среднеарифметическое: ${averageValue.toFixed(2)}`);

    // 3
    const sortValue = goodValues.sort((a, b) => a - b);
    console.log(`sortValue ${sortValue}`);

    if (goodValues.length % 2) {
        console.log(`Средний элемент ${sortValue[Math.floor(sortValue.length / 2)]}`);
    } else {
           const m = (((sortValue[sortValue.length / 2 - 1]) + (sortValue[sortValue.length / 2]))/2);
       console.log(`Средниe  значение  ${m}`);
    }

    // 4 
let oddValue = [],
    evenValue = [];

    goodValues.forEach(elem => {
        if (elem%2) {
            oddValue.push(elem);
        } else {
            evenValue.push(elem);
        }
    });

    if (oddValue.length > evenValue.length) console.log('Нечетных больше');
    if (oddValue.length < evenValue.length) console.log('Четных больше');
    if (oddValue.length === evenValue.length) console.log('Нечетных и Четных поровну');
    console.log(oddValue);
    console.log(evenValue);

}

runIt();