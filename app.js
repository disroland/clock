let clock = document.querySelector('h1');
let fon = document.querySelector('.container');
let backColor = 'green';
clock.style.color = 'white';
clock.style.textAlign = 'center';
fon.style.marginTop = '50px';
function getTime (){
	let time = new Date();
	let h = time.getHours();
	if (String(h).length <2 ) {h = '0' + h}
	let m = time.getMinutes();
	if (String(m).length <2 ) {m = '0' + m}
		console.log(m);
	let s = time.getSeconds();
	if (String(s).length <2 ) {s = String(0) + String(s)}
		console.log('seconds = '+ s);

	let timeNew = (`${h}:${m}:${s}`)
	backColor = `#${h}${m}${s}`;
	console.log(backColor);

	fon.style.backgroundColor = backColor;
	clock.innerText = timeNew;

}


setInterval(getTime, 1000);
getTime()