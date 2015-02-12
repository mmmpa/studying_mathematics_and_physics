/// <reference path="../vendor/dts/underscore/underscore.d.ts" />
/// <reference path="../vendor/dts/underscore.string/underscore.string.d.ts" />
/// <reference path="../vendor/dts/zepto/zepto.d.ts" />

function numberToBaseString(number: number, base: number): string {
	if (base <= 1) {
		throw 'out';
	}
	var compute: Function = (): string => {
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

function baseStringToValue(value: string, base: number): number {
	if (base <= 1) {
		throw 'out';
	}
	var compute = (value: string, this_base: number) => {
		if (value.length === 1) {
			return convert(value) * this_base;
		}
		var tail: number = convert(value.charAt(value.length-1));
		var computed: number = tail * this_base;
		return compute(value.slice(0, value.length - 1), this_base * base) + computed;
	}

	var convert: Function = (string: string): number => {
		if (!isNaN(+string)) {
			return +string;
		}
		return string.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
	}

	return compute(value, 1);
}

$(() => {
	// n 進法のやつ
	$('#S1_BASE_NUMBER').click((): void => {
		$('#S1_BASE_NUMBER_RESULT').val(numberToBaseString(+$('#S1_NUMBER').val(), +$('#S1_BASE').val()));
	});

	// n 進法から 10 進法に戻すやつ
	$('#S1_STRING_VALUE').click((): void => {
		$('#S1_STRING_VALUE_RESULT').val(baseStringToValue($('#S1_STRING').val(), +$('#S1_BASE2').val()));
	});
});