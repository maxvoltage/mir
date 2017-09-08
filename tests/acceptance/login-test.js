import { test } from 'qunit';
import {
  authenticateSession,
} from 'mir/tests/helpers/ember-simple-auth';
import moduleForAcceptance from 'mir/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('unauthenticated users can visit /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test(
  'unauthenticated users must supply a strong password',
  function(assert) {
    visit('/login');
    fillIn('[name=email]', `mike+${new Date().getTime()}@example.com`);
    fillIn('[name=password]', 'Password');
    triggerEvent('[name=password]', 'blur');

    andThen(function() {
      let msg = find('.mir-FormLogin .is-danger').text();
      assert.notEqual(msg.match(/too short/), null);
    });
  }
);

test(
  'unauthenticated users cannot create an account without confirming password',
  function(assert) {
    visit('/login');
    fillIn('[name=email]', `mike+${new Date().getTime()}@example.com`);
    fillIn('[name=password]', 'Password1234');
    fillIn('[name=password_confirmation]', '');
    triggerEvent('[name=password_confirmation]', 'blur');

    andThen(function() {
      let msg = find('.help.is-danger').text();
      assert.notEqual(msg.match(/password/), null);
      assert.equal(find('.mir-FormSignup button[disabled]').length, 1);
    });
  }
);


test(
  'unauthenticated users must supply a valid email address',
  function(assert) {
    visit('/login');
    fillIn('[name=email]', 'a@b.c');
    triggerEvent('[name=email]', 'blur');

    andThen(function() {
      let msg = find('.mir-FormLogin .is-danger').text();
      assert.notEqual(msg.match(/valid email/), null);
      assert.equal(find('.mir-FormLogin button[disabled]').length, 1);
    });
  }
);

test('authenticated users can visit /login and redirect to /', function(assert) {
  const app = this.application;

  authenticateSession(app, {
    userId: 1,
    otherData: 'some-data',
  });
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});