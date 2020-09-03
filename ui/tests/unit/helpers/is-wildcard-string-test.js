import { isWildcardString } from 'vault/helpers/is-wildcard-string';
import { module, test } from 'qunit';

module('Unit | Helpers | is-wildcard-string', function() {
  test('it returns true if regular string with wildcard', function(assert) {
    let string = 'foom#*eep';
    let result = isWildcardString([string]);
    assert.equal(result, true);
  });

  test('it returns false if no wildcard', function(assert) {
    let string = 'foo.bar';
    let result = isWildcardString([string]);
    assert.equal(result, false);
  });

  test('it returns true if string with id as in searchSelect selected has wildcard', function(assert) {
    let string = { id: 'foo.bar*baz' };
    let result = isWildcardString([string]);
    assert.equal(result, true);
  });

  test('it returns false if string object does not have id', function(assert) {
    let string = { name: 'foo.bar*baz' };
    let result = isWildcardString([string]);
    console.log(result, 'results');
    assert.equal(result, false);
  });
});
