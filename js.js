/*Создаем переменную "url", которая будет равна "API" ссылке*/
let url = 'https://randomuser.me/api/?results=8';

/* Пишем функцию "getResponse" которая будет совершать запросы с сервера*/
async function getResponse() {
	/*Буду использовать "Fetch" самый удобный, который встроен в "JS"*/
	/*Далее "Fetch" будет возвращать "Promise", что бы обрабатывать "Promise" 
	я буду использовать "async/await"(что функция синхронная)*/
	let response = await fetch(url);
	let data = await response.json();
	
	/*Создал переменную "list" чтобы использовать в DOM-дереве тег ul*/
	let list = document.querySelector('.posts');
	let key = 0;
	let res = data.results;

	/* Цикл for...in проходит через перечисляемые свойства объекта. 
	Он пройдёт по каждому отдельному элементу, 
	чтобы далее вывести на Browser все элементы объекта*/
	for(key in res) {
		console.log(res); /*Консоль для проверки получаемых объектов*/
   /*создал переменные "first/last", которые будут равны к ключам объекта внутри объекта*/
		let first = res[key].name.first; 
		let last = res[key].name.last;
		let img = res[key].picture.large;
		
	/*C помощью цикла, а также с помощью "innerHTML" выводим все элементы объекта 
	в Browser*/
		list.innerHTML += `
		<li class="post">
			<h4>${first + last}</h4>
			<img src="${img}">
		</li>
		`
		console.log(res[key].name.title);
	}
}
/*И наконец вызываем фенкцию*/
getResponse();