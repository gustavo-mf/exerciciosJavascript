"use strict";

function exercicios() {
	// exercicios 1
	document.getElementById('1_a').innerHTML = '' + 1 + 0;
	document.getElementById('1_b').innerHTML = '' - 1 + 0;
	document.getElementById('1_c').innerHTML = true + false;
	document.getElementById('1_d').innerHTML = 6 / '3';
	document.getElementById('1_e').innerHTML = '2' * '3';
	document.getElementById('1_f').innerHTML = 4 + 5 + 'px';
	document.getElementById('1_g').innerHTML = '$' + 4 + 5;
	document.getElementById('1_h').innerHTML = '4' - 2;
	document.getElementById('1_i').innerHTML = '4px' - 2;
	document.getElementById('1_j').innerHTML = 7 / 0;
	document.getElementById('1_k').innerHTML = '-9\n' + 5;
	document.getElementById('1_l').innerHTML = '-9\n' - 5;
	document.getElementById('1_m').innerHTML = null + 1;
	document.getElementById('1_n').innerHTML = undefined + 1;

	// exercicios 2
	document.getElementById('2_a').innerHTML = 5 > 4;
	document.getElementById('2_b').innerHTML = 'apple' + 'pinapple';
	document.getElementById('2_c').innerHTML = '2' > '12';
	document.getElementById('2_d').innerHTML = undefined == null;
	document.getElementById('2_e').innerHTML = undefined === null;
	document.getElementById('2_f').innerHTML = null == '\n0\n';
	document.getElementById('2_g').innerHTML = null === +'\n0\n';

	// exercicios 3
	document.getElementById('3').innerHTML = intervaloPares(1, 7);

	// exercicios 4
	let i = 0;
	while (i < 10) {
		i += 0.2;
		//console.log(i);
	}
	document.getElementById('4').innerHTML = i;

	// exercicios 5

	document.getElementById('5').innerHTML = menorNumero(78, 0);

	// exercicios 6
	document.getElementById('6').innerHTML = pow(2, 2);

	// exercicios 7
	document.getElementById('7').innerHTML = toMaiusculaPrimeira('casa');

	// exercicios 8
	document.getElementById('8').innerHTML = getMax([10,1,222,3,4]);

	// exercicios 9

	document.getElementById('9').innerHTML = '';

}

function intervaloPares(ini, fim) {
	let intervalo = '';
	for (let i = ini+1; i < fim; i++) {
		if (i % 2 == 0) 
			intervalo += i+',' 
	}
	return 'de: ' + ini + ' at&eacute;: ' + fim + '\n' + intervalo;
}

let menorNumero = function (x, y) {
	if (x < y) {
		return x;
	} else {
		return y;
	}
}

let pow = function (x, y) {
	let soma = 1;
	for (let i = 0; i < y; i++) {
		soma *= x;
	}
	return soma;
}

let toMaiusculaPrimeira = function (s) {
	if (s.length > 0) {
		return s[0].toUpperCase() + s.substring(1);
	}
}

let getMax = function (arr) {
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		if ( arr[i] > max)
			max = arr[i];
	}
	return max;
}

let frequencia = function () {};