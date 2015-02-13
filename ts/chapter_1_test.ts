/// <reference path="../vendor/dts/underscore/underscore.d.ts" />
/// <reference path="../vendor/dts/underscore.string/underscore.string.d.ts" />
/// <reference path="../vendor/dts/zepto/zepto.d.ts" />
/// <reference path="../vendor/dts/jasmine/jasmine.d.ts" />
/// <reference path="./chapter_1.ts" />
describe("numberToBaseString", () => {
	it("base 10, 9 get 9", () => {
		expect(numberToBaseString(9, 10)).toBe('9');
	});

	it("base 10, 10 get 10", () => {
		expect(numberToBaseString(10, 10)).toBe('10');
	});

	it("base 10, 123 get 123", () => {
		expect(numberToBaseString(123, 10)).toBe('123');
	});

	it("base 16, 15 get f", () => {
		expect(numberToBaseString(15, 16)).toBe('f');
	});

	it("base 16, 16 get 10", () => {
		expect(numberToBaseString(16, 16)).toBe('10');
	});

	it("base 16, 255 get ff", () => {
		expect(numberToBaseString(255, 16)).toBe('ff');
	});
});

describe("baseStringToValue", () => {
	it("base 10, 9 get 9", () => {
		expect(baseStringToValue('9', 10)).toBe(9);
	});

	it("base 10, 10 get 10", () => {
		expect(baseStringToValue('10', 10)).toBe(10);
	});

	it("base 10, 123 get 123", () => {
		expect(baseStringToValue('123', 10)).toBe(123);
	});

	it("base 16, f get 15", () => {
		expect(baseStringToValue('f', 16)).toBe(15);
	});

	it("base 16, 10 get 16", () => {
		expect(baseStringToValue('10', 16)).toBe(16);
	});

	it("base 16, ff get 255", () => {
		expect(baseStringToValue('ff', 16)).toBe(255);
	});
});

describe("addBinaryString", () => {
	it("0 + 1 = 1", () => {
		expect(addBinaryString('0', '1')).toBe('1');
	});

	it("1 + 1 = 10", () => {
		expect(addBinaryString('1', '1')).toBe('10');
	});

	it("10 + 1 = 11", () => {
		expect(addBinaryString('10', '1')).toBe('11');
	});

	it("1 + 11 = 100", () => {
		expect(addBinaryString('11', '1')).toBe('100');
	});

	it("10 + 10 = 100", () => {
		expect(addBinaryString('10', '10')).toBe('100');
	});
});

describe("addBinaryOne", () => {
	it("0 -> 1", () => {
		expect(addBinaryOne('0')).toBe('1');
	});

	it("1 -> 10", () => {
		expect(addBinaryOne('1')).toBe('10');
	});

	it("10 -> 11", () => {
		expect(addBinaryOne('10')).toBe('11');
	});

	it("11 -> 100", () => {
		expect(addBinaryOne('11')).toBe('100');
	});

	it("100 -> 101", () => {
		expect(addBinaryOne('100')).toBe('101');
	});
});
