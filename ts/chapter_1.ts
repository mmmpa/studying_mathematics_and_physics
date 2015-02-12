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
		var tail: number = convert(value.charAt(value.length - 1));
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

function addBinaryString(first: string, second: string): string {
	var compute: Function = (result, b1, b2): string => {
		if (b1.length === 0 && b2.length === 0) {
			console.log(result)
			return result;
		}

		var n1: string = b1.charAt(b1.length - 1);
		var n2: string = b2.charAt(b2.length - 1);
		var next_1: string = b1.slice(0, b1.length - 1);
		var next_2: string = b2.slice(0, b2.length - 1);
		if (next_1.length && !next_2.length) {
			next_2 = '0'
		} else if(!next_1.length && next_2.length) {
			next_1 = '0'
		}
		if (n1 === '1' && n2 === '1') {
			//繰り上げ
			next_1 = addBinaryOne(next_1);
			return compute('0' + result, next_1, next_2);
		} else if (n1 === '0' && n2 === '0') {
			return compute('0' + result, next_1, next_2);
		} else {
			return compute('1' + result, next_1, next_2);
		}
	}

	return compute('', first, second);
}

function addBinaryOne(src: string): string {
	var compute: Function = (pos: number, b: string): string => {
		switch (b.charAt(b.length - 1 - pos)) {
			case '0':
				return head(b, pos) + '1' + tail(b, pos);
				break;
			case '1':
				return compute(pos + 1, head(b, pos) + '0' + tail(b, pos));
				break;
			default:
				return '1' + b;
				break;
		}
	}

	var head: Function = (str: string, pos: number) => {
		return str.slice(0, str.length - (pos + 1));
	}

	var tail: Function = (str: string, pos: number) => {
		return str.slice(str.length - pos, str.length);
	}

	return compute(0, src);
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