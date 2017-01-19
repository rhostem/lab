import expect from 'expect';

describe('mocha', function () {
  describe('with `expect` test library:', function () {
    it('toBe: strict equal(===) ', function () {
      function foo () {
        return 'foo';
      }
      expect(foo()).toBe('foo','error message');
    });

    it('toEqual: 값이 동일함', function () {
      function bar () {
        return { foo: 'bar'}
      }
      expect(1).toEqual(1);
      expect(bar())
        .toEqual({ foo: 'bar'})
        .toNotEqual({ foo: 'foo'});
    });

    it('toExist: asserts true', function () {
      expect(true).toExist();
      expect(null).toNotExist();
    });

    it('toBeA(constructor): instanceof 와 같음.', function () {
      expect(new Array())
        .toBeA(Array)
        .toNotBeA(String);
    });

    it('toBeA(string): typeof와 같음', function () {
      expect(1)
        .toBeA('number')
        .toNotBeA('object');
    });

    it('toThrow: 에러를 발생시키며 에러 메시지를 문자열, 정규표현식으로 확인', function () {
      expect(function () {
        throw new Error('boom!')
      }).toThrow(/boom/)
    });

    describe('toMatch:', function () {
      it('문자의 경우 정규표현식을 이용해 패턴 확인.', function () {
        expect('localhost:4000')
          .toMatch(/localhost/)
          .toNotMatch(/1/);
      });

      it('객체의 경우 일부 속성을 정규표현식(tmatch) 또는 값을 이용해 일치 여부 확인', function () {
        expect({
          jone: 'doe',
          foo: 'foo',
          bar: 1,
        })
          .toMatch({ foo: /foo/, bar: 1 })
          .toNotMatch({ foo: /n/ });
      });
    });

    describe('toInclude:', function () {
      it('배열, 객체, 문자열 내부에 지정한 값을 포함하는지 확인함', function () {
        expect([1, 2, 3])
          .toNotInclude(5)
          .toInclude(1);
        expect({ foo: 'bar', john: 'doe'}).toInclude({ foo: 'bar' });
        expect('sample').toInclude('sam');
      });
    });

    describe('toExclude:', function () {
      it('값을 포함하지 않을음 확인', function () {
        expect([1, 2, 3]).toExclude(5);
      });
    });

    describe('toIncludeKey, toIncludeKeys', function () {
      it('객체가 지정된 키를 포함하는지 확인. 하나의 키의 경우, 복수의 키의 경우 메소드가 다름', function () {
        expect({foo: 1, bar: 2})
          .toIncludeKey('foo')
          .toIncludeKeys(['foo', 'bar']);
      });
    });

    describe('async test in mocha:', function () {
      it("Using setTimeout to simulate asynchronous code!", function(done){
          setTimeout(function() {
            // async callback needs done()
            done();
          }, 200);
      });

      it("try ~ catch와 함께 Promise 테스트", function(done) {
        var testPromise = new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve("Hello World!");
          }, 200);
        });

        testPromise.then(function(result){
          try {
            expect(result).toEqual("Hello World!");
            done();
          }
          catch(err) {
            // reject message will be shown
            done(err);
          }
        }, done);

      });

    });

  });
});

