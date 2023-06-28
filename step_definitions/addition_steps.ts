import { Given, Then, When } from '@cucumber/cucumber'
import {Calculator} from "../lib_example/calculator";
import Logger from "../helpers/logger";
import * as assert from "assert";


let calculator;

Given('the numbers {int} and {int}', function (x, y) {
    Logger.info(`Numbers received ${x} and ${y}`)
    calculator = new Calculator(x, y);
});

When('they are added together', function () {
    Logger.info(`Adition started`)
    calculator.add();
});

Then('should the result be {int}',
    function (expected_value) {
        assert.equal(calculator.getResult(), expected_value)
        Logger.info(`Expected value: ${expected_value} / Value Calculated ${calculator.getResult()}`)
    });
