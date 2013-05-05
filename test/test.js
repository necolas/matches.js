var expect = chai.expect;

describe('matches(elem, selector)', function () {
    var one;

    before(function () {
        var fixture = document.createElement('div');
        fixture.innerHTML = '' +
            '<div id="one" class="foo"></div>' +
            '<div id="two" class="foo bar"></div>' +
            '<div id="three" class="foo baz"></div>';

        document.body.appendChild(fixture);
        one = document.getElementById('one');
    });

    describe('when the element is `#one`', function () {
        it('returns true for selector `#one`', function () {
            expect(matches(one, '#one')).to.equal(true);
        })
        it('returns true for selector `.foo`', function () {
            expect(matches(one, '.foo')).to.equal(true);
        })
        it('returns true for selector `div`', function () {
            expect(matches(one, 'div')).to.equal(true);
        })
        it('returns true for selector `div > div`', function () {
            expect(matches(one, 'div > div')).to.equal(true);
        })
        it('returns false for selector `#two`', function () {
            expect(matches(one, '#two')).to.equal(false);
        })
        it('returns false for selector `.bar`', function () {
            expect(matches(one, '.bar')).to.equal(false);
        })
    });

    describe('when the element `#orphan` is not yet attached to the document', function () {
        var orphan = document.createElement('div');
        orphan.id = 'orphan';
        orphan.className = 'foo';

        it('returns true for selector `#orphan`', function () {
            expect(matches(orphan, '#orphan'), 'testing').to.equal(true);
        })
        it('returns true for selector `.foo`', function () {
            expect(matches(orphan, '.foo')).to.equal(true);
        })
        it('returns true for selector `div`', function () {
            expect(matches(orphan, 'div')).to.equal(true);
        })
        it('returns false for selector `#one`', function () {
            expect(matches(orphan, '#two')).to.equal(false);
        })
        it('returns false for selector `.bar`', function () {
            expect(matches(orphan, '.bar')).to.equal(false);
        })
        it('returns false for selector `body #orphan`', function () {
            expect(matches(orphan, 'body #orphan')).to.equal(false);
        })
    });
});
