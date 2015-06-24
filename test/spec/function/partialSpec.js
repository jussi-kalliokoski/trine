import { partial, _, ___ } from "../../../src/function/partial";

function mock (...params) {
    return { this, params };
}

describe("partial()", function () {
    it("should pass `this` to the delegate", function () {
        "foo"::(mock::partial())().this.should.equal("foo");
    });

    describe("when given more than one rest placeholder", function () {
        it("should throw", function () {
            void function () {
                mock::partial(___, 1, ___);
            }.should.throw();
        });
    });

    describe("when given no parameters", function () {
        it("should pass no parameters to the delegate", function () {
            mock::partial()(1).params.should.deep.equal([]);
        });
    });

    describe("when given one parameter", function () {
        it("should only pass that to the delegate", function () {
            mock::partial(0)(1).params.should.deep.equal([0]);
        });
    });

    describe("when given one placeholder", function () {
        it("should only pass parameter at that index to the delegate", function () {
            mock::partial(_)(0, 1).params.should.deep.equal([0]);
        });
    });

    describe("when a placeholder is not filled", function () {
        it("should not pass a parameter at that place", function () {
            mock::partial(0, _)().params.should.deep.equal([0]);
        });
    });

    describe("when a rest placeholder is not filled", function () {
        it("should not pass a parameter at that place", function () {
            mock::partial(0, _, ___, _, 1)(2, 3).params.should.deep.equal([0, 2, 3, 1]);
        });
    });

    describe("when a rest placeholder and a placeholder are not filled", function () {
        it("should not pass parameters at either place", function () {
            mock::partial(___, 1, _)().params.should.deep.equal([1]);
        });
    });

    describe("when given one parameter followed by a placeholder", function () {
        it("should pass the parameter to the delegate, letting one parameter through", function () {
            mock::partial(0, _)(1).params.should.deep.equal([0, 1]);
        });
    });

    describe("when given one placeholder followed by a parameter", function () {
        it("should pass the parameter to the delegate, letting one parameter through", function () {
            mock::partial(_, 0)(1).params.should.deep.equal([1, 0]);
        });
    });

    describe("when given a parameter, followed by a rest placeholder", function () {
        it("should pass the parameter to the delegate, letting all parameters through", function () {
            mock::partial(0, ___)(1, 2, 3).params.should.deep.equal([0, 1, 2, 3]);
        });
    });

    describe("when given a rest placeholder, followed by a parameter", function () {
        it("should pass the parameter as last to the delegate, letting all parameters through", function () {
            mock::partial(___, 0)(1, 2, 3).params.should.deep.equal([1, 2, 3, 0]);
        });
    });

    describe("when given a rest placeholder in between", function () {
        it("should let the input parameters through in between the passed parameters", function () {
            mock::partial(0, ___, 1)(2, 3, 4).params.should.deep.equal([0, 2, 3, 4, 1]);
        });
    });

    describe("when given a mix of placeholders, rest placeholders and parameters", function () {
        it("should place the parameters in the correct slots", function () {
            mock::partial(_, 0, _, ___, 1, _, 2)(3, 4, 5, 6, 7).params.should.deep.equal([3, 0, 4, 5, 6, 1, 7, 2]);
        });
    });
});
