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
		console.log(i);
	}
	document.getElementById('4').innerHTML = i;

	// exercicios 5
	document.getElementById('5').innerHTML = '';

	// exercicios 6
	document.getElementById('6').innerHTML = '';

	// exercicios 7
	document.getElementById('7').innerHTML = '';

	// exercicios 8
	document.getElementById('8').innerHTML = '';

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

function menorNumero(x, y) {
	
}