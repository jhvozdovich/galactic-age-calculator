# **Super Galactic Age Calculator**

### _Test Driven Development - Week 5 Project at Epicodus_

#### Author: **_Jessica Hvozdovich_**
#### April 17, 2020

### Description

_The purpose of this project is to output a user's age on various planets by creating back-end logic through test driven development and the Red Green Refactor method. Functions are also available to determine their predicted life expectancy on each planet based on user input to various questions._

### Instructions for use:

1. Clone this repository from GitHub.
2. Open the downloaded directory in a text editor of your choice.
  (VSCode, Atom, etc.)
3. Run npm install in your terminal to download the necessary dependencies.
4. The command npm run start will build and open the compiled code in a browser of your choice using a local host.

### Known Bugs

No bugs have been identified at the time of this update.

### Support and Contact Information

Please contact me with any suggestions or questions at jhvozdovich@gmail.com. Thank you for your input!  
_Have a bug or an issue with this application? [Open a new issue](https://github.com/jhvozdovich/galactic-age-calculator/issues) here on GitHub._

### Technologies Used

* HTML
* CSS with Bootstrap Framework
* Git and GitHub
* JavaScript with jQuery Library
* Webpack with Babel, ESLint, and Node Package Manager
* Jest

### Specs
| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **Accepts and returns a user's birthday** | User Input:”February 25, 1995” | Output: “February 25, 1994” |
| **Calculates a user's age in Earth years** | User Input:”February 25, 1994” | Output: “25” |
| **Calculates a user's age in Mercury years** | User Input:”February 25, 1994” | Output: “104” |
| **Calculates a user's age in Venus years** | User Input:”February 25, 1994” | Output: “40” |
| **Calculates a user's age in Mars years** | User Input:”February 25, 1994” | Output: “13” |
| **Calculates a user's age in Jupiter years** | User Input:”February 25, 1994” | Output: “2” |
| **Accepts user input to determine remaining life expectancy on each planet** | User Input:”Female-Active Lifestyle-City Residence” | Output: “Mercury: 200 years, Venus: 80 years, Earth: 50 years, Mars: 26 years, Jupiter: 4 years” |
| **If a user is over the calculated life expectancy, the output is how much they have exceeded it** | User Input:”Female-Active Lifestyle-City Residence” | Output: “You're above average! Continue to live long and prosper. Mercury: 20 years, Venus: 8 years, Earth: 5 years, Mars: 3 years, Jupiter: 1 years”  |

#### License

This software is licensed under the MIT license.

Copyright (c) 2020 **_Jessica Hvozdovich_**