(function (state, module, define) {
  'use strict';

  function DataState () {
    var self = this;

    //////////////////////////////
    // Gets the current data-state
    //
    // Returns an array of states, or null
    //////////////////////////////
    this.get = function (el) {
      var current = el.getAttribute('data-state');
      if (current !== null) {
        current = current.split(' ');
      }
      return current;
    };

    //////////////////////////////
    // Has the given state
    //
    // Returns true if state is applied
    //////////////////////////////
    this.has = function (el, has) {
      var states = self.get(el);
      if (states === null) {
        return false;
      }
      else if (states.indexOf(has) !== -1) {
        return true;
      }
      else {
        return false;
      }
    };

    //////////////////////////////
    // Adds the given state
    //
    // Adds the current state to `data-state` attribute
    //////////////////////////////
    this.add = function (el, add) {
      var current = self.get(el);

      if (current === null) {
        el.setAttribute('data-state', add);
      }
      else {
        if (current.indexOf(add) === -1) {
          current.push(add);
          el.setAttribute('data-state', current.join(' '));
        }
      }
    };
    this.set = this.add;

    //////////////////////////////
    // Removes the given state
    //
    // Removes the current state from `data-state` attribute, if it exists
    //////////////////////////////
    this.remove = function (el, remove) {
      var current = self.get(el),
          index,
          length;

      if (current !== null) {
        index = current.indexOf(remove);
        length = current.length;
        if (index !== -1) {
          current = current.slice(0, index).concat(current.slice(index + 1, length));
          if (current.length === 0) {
            el.removeAttribute('data-state');
          }
          else {
            el.setAttribute('data-state', current.join(' '));
          }
        }
      }
    };

    this.toggle = function (el, toggle) {
      if (self.has(el, toggle)) {
        self.remove(el, toggle);
      }
      else {
        self.add(el, toggle);
      }
    };
  }

  //////////////////////////////
  // We only ever want one instance of state
  //////////////////////////////
  state = state || new DataState();

  //////////////////////////////
  // All of the various exports!
  //////////////////////////////
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = state;
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return state;
    });
  } else {
    window.state = state;
  }

})(window.state, window.module, window.define);