/// <reference path="../vendor/dts/underscore/underscore.d.ts" />
/// <reference path="../vendor/dts/underscore.string/underscore.string.d.ts" />
/// <reference path="../vendor/dts/zepto/zepto.d.ts" />
/// <reference path="../vendor/dts/jasmine/jasmine.d.ts" />
/// <reference path="./chapter_1.ts" />

describe("numberToBaseString", function () {
	it("base 10, 9 get 9", function () {
		expect(numberToBaseString(9, 10)).toBe('9');
	});

	it("base 10, 10 get 10", function () {
		expect(numberToBaseString(10, 10)).toBe('10');
	});

	it("base 10, 123 get 123", function () {
		expect(numberToBaseString(123, 10)).toBe('123');
	});

	it("base 16, 15 get f", function () {
		expect(numberToBaseString(15, 16)).toBe('f');
	});

	it("base 16, 16 get 10", function () {
		expect(numberToBaseString(16, 16)).toBe('10');
	});

	it("base 16, 255 get ff", function () {
		expect(numberToBaseString(255, 16)).toBe('ff');
	});
});

describe("baseStringToValue", function () {
	it("base 10, 9 get 9", function () {
		expect(baseStringToValue('9', 10)).toBe(9);
	});

	it("base 10, 10 get 10", function () {
		expect(baseStringToValue('10', 10)).toBe(10);
	});

	it("base 10, 123 get 123", function () {
		expect(baseStringToValue('123', 10)).toBe(123);
	});

	it("base 16, f get 15", function () {
		expect(baseStringToValue('f', 16)).toBe(15);
	});

	it("base 16, 10 get 16", function () {
		expect(baseStringToValue('10', 16)).toBe(16);
	});

	it("base 16, ff get 255", function () {
		expect(baseStringToValue('ff', 16)).toBe(255);
	});
});