# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Tauqeer [user: tajjav](https://github.com/tajjav) as part of my learnings. 

## Usage

**Install it:**

`npm install @tajjav/lotide`

**Require it:**

`const _ = require('@tajjav/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1,array2)`: it prints message to console that whether two arrays are equal or not.
* `assertEqual(actual, expected)`: it prints to console, if `actual` is equal to `expected`. It works on primitive data types only.
* `assertObjectsEqual(actualObj, expectedObj)`: this function takes in 2 objects and returns true if they are equal and false otherwise.
* `countLetters(string)`: this function takes in a sentence and returns a count of each of the letters in the sentence.
* `countOnly(allItems, itemsToCount)`: this function takes in a collection of items and returns a specific subset of those items.
* `eqArrays(array1,array2)`: this function returns true if two arrays are exact match.
* `eqObjects(object1, object2)`: it takes two objects and returns true if both objects have identical keys with identical values otherwise false.
* `findKey(object, callback)`: it scans the object and returns the first key for which the callback returns a truthy value. if no key is found, it returns undefined.
* `findKeyByValue(object,value)`: this function takes in an object and a value. It returns the first key that corresponds to the value.
* `flatten(arrayOfNestedArrays)`: this function takes in an array that contains elements including nested array of elements and returns a flattened version of the array (one level deep only).
* `head(array)`: this function returns first element of the array.
* `index(string).letter`: this function takes in a string and returns all indices of letter positions in the string.
* `map(array, callback)`: this function takes in an array and a callback function. It returns a new array based on the results of the callback on each item in the array.
* `middle(array)`: it returns the middle most element of the array.
* `tail(array)`: it returns the last / tail element of an array.
* `takeUntil(array, callback)`: this function takes in an array and callback. It returns a slice of the array based on the criteria specified in the callback.
* `without(sourceArray, itemsToRemoveArray)`: it returns only the items from the source array that are not in the `itemsToRemove` array.