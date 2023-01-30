# Shell scripts 
## ## Learn how to write a simple shell script that takes in variables and creates boilerplate directories and files

1. ***Script*** = a series of commands that execute something 
2. ***Shell*** = is simply a text file that is executable that executes those commands
3. How to run a basic shell script that takes in a variable value. First create a file shell (i.e touch hello.sh) it’s a simple text file, open it in vim (vi hello.sh) and make edits file ( this example we did it without variable first and ran the echo command to print a copy of hello)  and to run this file enter sh hello.sh , it’s going to execute the command sh and once you hit enter you see “hello”.
4. $1 (placeholder) = is what we call a variable and the variable holds a value which is what we pass in when we call the shell script 
5. The way we pass in a value to become that variable in VIM is open vim by typing  **sh hello.sh and insert mode we print echo “hello, $1” and escape and hit enter it = hello,  then sh hello sh Bobby to pass in value the name Bobby and  insert mode (i)we print echo “hello, $1 Bobby”and esc and vim and hit enter it will display Hello, Bobby**
6. It customizes the name/value you change name 
7. The actual value that we are passing in is called an  **ARGUMENT.** And the argument that we passed in was Bobby. The value of that argument which is Bobby is stored in the **variable which $1**. Also called a **parameter**. 
8. For example we would like to pass in two arguments into two variables in shell script. insert mode in vim write  **echo ‘Hello, $1 ( argument #1)**. We are preparing your starter files for your new project called **$2 ( argument #2)**.’ esc from vim and see if we can print we write **sh hello.sh Jane(argument #1) Etsy (argument #2) it will print the following Hello, Jane. We are preparing your starter files for your new project called Etsy**. 
9. How to make a new directory based off example above hit insert mode and write **mkdir $2 (argument #2)** the sentence. go back to desktop and fire the come **sh.hello.sh** Jane Etsy again and it creates a folder on your desktop
10. Once you make folder you can cd $2 , and create the following folders: mkdir html mkdir css mkdir js or you can save time and put on one line mkdir html css js 
11. We would like to create file inside one of those folders you use this trick cd html &&(operator) touch index.html and esc and use wq to save. Use the command line run script again sh hello.sh Etsy cd into Etsy use command line and use command ls to list items and proceed from there.