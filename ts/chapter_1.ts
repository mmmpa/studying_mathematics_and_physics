/// <reference path="../vendor/dts/underscore/underscore.d.ts" />
/// <reference path="../vendor/dts/underscore.string/underscore.string.d.ts" />
/// <reference path="../vendor/dts/zepto/zepto.d.ts" />


function numberToBaseString(number:number, base:number): string {
	var compute: Function = (): string => {
		if (base <= 1) {
			throw 'out';
		}
		if (number < base) {
			return convert(number);
		}
		var rem = number % base;
		var reduced = number - rem;
		return numberToBaseString(reduced / base, base) + convert(rem);
	}

	var convert: Function = (number): string => {
		if (number < 10) {
			return '' + number;
		}
		return String.fromCharCode(('a'.charCodeAt(0)) + (number - 10));
	}

	return compute(number, base);
}

$(() => {
	// n i–@‚Ì‚â‚Â
	$('#S1_BASE_NUMBER').click(():void => {
		$('#S1_BASE_NUMBER_RESULT').val(numberToBaseString(+$('#S1_NUMBER').val(), +$('#S1_BASE').val()));
	});
})