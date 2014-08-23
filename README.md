Data-State
==========

Small JavaScript helper for setting the `data-state` attribute of an element


## Installation

Data State can be installed via Bower

```bash
$ bower install data-state --save
```

It will either present itself as the global `state` variable or be available via `define`/`module.exports`, depending on what's available.

## Usage

* `state.get(el)` - Returns an array of states for the given element `el`, or `null` if it has no states
* `state.has(el, has)` - Returns `true` if the element `el` has the given state `has`
* `state.add(el, add)` - Adds the state `add` to the element `el`. If a state gets added that already exists, will not be added twice
* `state.set(el, add)` Same as `state.add`
* `state.remove(el, remove)` - Removes the state `state` from the element `el`. If multiple states present, will only remove the given state. If the last state gets removed, the `data-state` attribute will be removed
* `state.toggle(el, toggle)` - Removes the state `toggle` from the element `el` using `state.remove`, if it exists, otherwise adds it using `state.add`
