# Personal Blog

## Description

For this project I created a personal blog website. This site takes input in a form and then renders that data on the following page. This is accomplished by creating the needed respective elements in JavaScript, adding the respective data values into their proper fields under the elements, and then appending those elements to the HTML of the page. Another new feature of a site I tried was implementing the feature of a "Dark and Light mode" switch to customize the appearance of a page based on a user's preference.

The first thing I did was lay out the HTML of the landing page and creating form elements to take in a user's username, blog post title, and the content of the blog posted. The data was then stored into JSON array into the user's localStorage using Javascript for it to be called upon in the next page. Once the functions have ran the page automatically loads into the `blog.html` to view the rendered posts.

In the blog posts page the data entered in the landing page is retrieved from the localStorage using `JSON.parse` on localStorage. Then I ran functions to create the respective HTML elements, place appropriate form value, then append them one by one to the `<article>` element. Lastly, I appended each created `<article>` element to the main content of the page. One thing I wanted to do with this is make sure the most recent post appeared closest to the top of the page. So I researched ways to do this without writing out another function. I stumbled upon `reverse()` which is exactly the simple method needed for this task. Credit to where I found this information can be found below.

After setting the webpage's element now it was time to place a switch to change both pages' theme. Using what I learned in class and a bit of trial and error I came up with a way to implement the feature using HTML, CSS, and JavaScript. I made a very visible button for easy accessibility as often many pages do have the button well blended within the page.


All in all, I learned much more about how to traverse the DOM. In addition, this project helped me to continue practicing my HTML, CSS, and JavaScript skills.


[Link to deployed application.](https://excervantes.github.io/personal-blog/)

## Installation

N/A

## Usage

Click on the "Add Employees" blue button for a prompt to appear on the page. There it will ask for a "First Name", then "Last Name", then the salary of the person. If a user does not enter anything in the lines corresponding to the name then the application will insert a placeholder named, "Unknown" for the name field. In addition, the application will take a mistakenly inputted value in the salary that is not a number and display it as "$0" automatically. 

Once all necessary values are inputted click "Cancel" on the "Add Another Employee" prompt. A table will populate containing the names and salaries entered under the "Employee Roster" table.

If a user opens the console in the page additional information can be found logged there. For example an array of the inputted values will be indexed and shown in a table. The console will also log the average salaries between all values entered under "Salary". Lastly, a random winner will be chosen among the names entered on the page.

### Example of Webpage
![Website Screenshot](Assets/images/personalblogscreenshot.jpg)

## Credits

"_How can I reverse an array in JavaScript without using libraries?" - Stack Overflow_. (2012, April 16). Stack Overflow. Retrieved April 20, 2024, from https://stackoverflow.com/questions/10168034/how-can-i-reverse-an-array-in-javascript-without-using-libraries

## License

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

See LICENSE for more info
