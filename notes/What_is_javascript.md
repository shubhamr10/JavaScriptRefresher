### What is Javascript?
Javascript is a high-level object-oriented, multi-paradigm programming language.

1. Programming language : Instructs computer to do things.
2. High-level : We don't have to worry about the complex stuff like memory management.
3. Object-Oriented : Based on objects, for storing most kinds of data.
4. Multi-paradigm : We can use different styles of programming.

---
### The Role of Javascript in Web-development
A website is built upon following things:
1. HTML : CONTENT
2. CSS : Presentation
3. JS : Programming Language; Building web application.
---
### There is nothing you cannot do with Javascript (Well,almost...)
1. Dynamic effects and web applications in the browsers. JS, React, Angular, Vue.
2. 100% based on JavaScript, They might do away, but Javascript won't!.
3. Learn Javascript properly before jumping into frameworks as these framework changes, but the underlying content is Javascript.So, you should be well-knowledgeable in Javascript before jumping into any of the frameworks.
4. Web applications on Web servers -  JS and Nodejs.
5. Native mobile applications : React Native, Ionic, etc
6. Native desktop application : Electron JS.
---
### Javascript Releases...
1. ES5 (vanilla JS). ES --> ECMAScript
2. ES6 (ES2015). ** Major Update to the language
3. ES7 (ES2016).
4. ES8 (ES2017).
5. ES9 (ES2018).
6. ES10 (ES2019).
7. ES11 (ES2020).
--- 
### Values and Variables
1. "Shubham" > Value
2. 23 > Value
3. let firstName > variable
---
### Variable naming conventions
CamelCase --> firstName ** Standard
first_name
---
### Data types
 1. Objects
 2. Primitive

Objects = {  name : 'Jonas' };
let firstName = "Shubham"
----
### The 7 Primitive Data type
1. Number: Floating point numbers; Used for decimal and integers. Ex. let age = 23;
2. String: Sequence of characters; Used for text. let firstName = 'Jonas';
3. Boolean :  Logical type that can be only true or false; Used for taking decisions. let isValid = true;
4. Undefined: Value taken by a variable that is not yet defined.(`empty value`) let children;
5. Null : Also means `empty value`.
6. Symbol (ES2015): Value that is unique and cannot be changed.
7. BigInt(ES2020): Larger integer than the Number type can hold.
---
### Dynamic type
`JavaScript has a dynamic typing:` We do `not` have to manually define the data type of the values stored in a variable. Instead, data types are determined `automatically`.

---
### `const`, `var` and `let`
1. `const` : It is used to declare a non-mutable variable. It means it cannot be changed in future.
2. `let` : It is used to declare a mutable variable whose value needs to be changed. Also, `let` is a `block scoped`.
3. `var` : It is similar as `let` keyword. But, it is a `function scoped` declaration.

---

### Operator Precedence

Link ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

---
### Type coercion

`Type coercion` means change a value fron one data type to another.

---
### Type Conversion and Type coercion

1. Type Conversion : When we change the data type manually.
2. Type coercion : When JavaScript changes the datatype.

#### Some new operators
1. Number : `Number('23')` this will result in 23 of type number.
2. String : `String(23)` this will result in 23 as string.
3. Boolean : Converts to boolean `true or false`
---
### Truthy and Falsy value
1. Falsy value : `0, '', undefined, null, NaN`
2. Truthy Value : value which returns true and apart from above.

---
### `===` and `!==`
Always use strict comparisons instead of loose `==`

---
### Basic Boolean Logic
 Example
 A : Sarah has a driver's licence.
 B: Sarah has a good vision.

A `AND` B Boolean table.

| AND   | TRUE  | FALSE |
|-------|-------|-------|
| TRUE  | TRUE  | FALSE |
| FALSE | FALSE | FALSE |

A `OR` B Boolean table.

| OR    | TRUE | FALSE |
|-------|------|-------|
| TRUE  | TRUE | TRUE  |
| FALSE | TRUE | FALSE |

`NOT` A 
Inverts true/false value.

---

### Statements and Expression
Expression :  Expression is a line of code that produces a value.
For example:  
`3+4`  
`1991`  
`true && false && !false`   

Statement : Line of code that does something like we write program to do something's like full sentences.

`if(23 > 10){
 const str = '23 is bigger'
}`

----
### JavaScript Releases

| Year        | Statements                                                                                                                                                                              |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1995        | Brenden Eich creates the very first version of JavaScript in just 10 days. It was called `Mocha`, but already had many fundamental features of modern JavaScript!                       |
| 1996        | `Mocha` changes to LiveScript and then to **JavaScript**, in order to attract Java Developers. However, **JavaScript has nothing to do with Java**                                      |
|             | Microsoft launches IE, **copying JavaScript from Netscape and calling it JScript**                                                                                                      |
| 1997        | With a need to standardize the language, ECMA releases ECMAScript 1(ES1), the first official standard for JavaScript ( ECMASScript is the standard, JavaScript the language in practise |
| 2009        | ES5 (ECMAScript 5) is released with lots of great new features.                                                                                                                         |
| 2015        | ES6/ES2015 (ECMAScript 2015) was released: **the biggest update to the language ever!**                                                                                                 |
|             | ECMAScript changes to an annual release cycle in order to ship less features per update                                                                                                 |
| 2016 - till | Release of ES2016 / ES2017 / ES2018 / ES2019 / ES2020 / ES2021/ .....                                                                                                                   |

---

**Backwards Compatibility & No breaking changes**
1. Old features were never removed.
2. Not really new versions, just incremental updates( releases ).
3. Websites keep working forever!
4. JavaScript do not have **forward compatibility**

---
### How to use Modern JavaScript today

During Development :  Simply use the latest Google Chrome!
During Production  :  Use Babel to transpile and polyfill your code( converting back to ES to ensure browser compatibility for all users.)

**ES5** :  
Fully supported in all browser ( down to IE9 from 2011).  
Ready to be used today.

**ES6/ES -> ES2020** :  
ES6+ Well supported in all modern browsers.  
No support in older browsers.
Can use most features in production with transpiling and polyfill-ling.


**ES2021 - till**  
ESNext : Future versions of the language (new features proposals that reach Stage4).  
Can already use some feature in production with transpiling and polyfill-ling.

