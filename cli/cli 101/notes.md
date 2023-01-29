# CLI 101
## list of commands

1. ~ tilde command  = home directory 
2. **ls command** = list of current directories of files and folders in home directory. Ls does not show hidden directories by itself.  In order to show hidden directories you will need to add a flag or switch highlighted in yellow ( ***ls -a***) . a stands for attributes. Hidden files and directories are proceeded with a ***.(dot)**. **ls-al*** think of it as switches meaning that we are toggling something on when we use this switch and/or flag. ls-al means a is going to show the hidden files and l will print a list view so that everything listed is in columns. This list gives additional information other than the file name ( i.e permission configuration of a particular file or directory. ***D = directory, - = not a directory it has a dash, R = read, W = write*** 
3. Flags specifically, are Boolean arguments, set by the mere inclusion of the command line argument, with no additional data needed or allowed for the argument. If you include the argument/option/flag, it counts as “true” and if you exclude it, it counts as “false”.  
4. Example Flag-type argument:    command.exe =DeleteFiles    Example of non-flag argument: command.exe -ServerName [my.server.com](http://my.server.com) 
5. ***command(apple) K*** = clear terminal 
6. ***cd command*** = navigating with the command line is done with cd 
7. ***cd / command*** = got to root which is the computer hard drive 
8. ***cd ~ command*** = go back to home directory 
9. ***cd .. command*** = go up one working directory , takes you to the parent of whatever directory/folder you were in 
10. ***cd ../.. command***  = moves you up two directories 
11. "dot dot" is one of three aliases you'll regularly use:

1. ***cd foldername command***(put in any name of a folder)  = go to desktop folder 
2. **Shortcut you can use is to put in first few letters and then hit tab and computer will enter the rest/enter path (i.e cd des…. = cd desktop)**
3. ***mkdir command*** = create directory / folder (i.e mkdir blah)
4. ***touch command*** = create file (i.e touch index.html ) - when you use touch it is good practice to add extension  (i.e html, jpg, pdf, etc) 
5. ***cp command*** = lets you copy a file from one directory and move it to another directory ,  you have to put in the **current directory location / filename  and name of directory that it will be moved to**  , another benefit of this command is you can change file name while copying it over just by **adding / newfilename after the directory that it will be moved to** 
6. ***pwd command***  = print working directory ( tells you where currently) 
7. ***rm command*** = delete file (i.e rm index.html) must include file name 
8. ***mv command*** = move command 
9. ***rmdir command*** = remove dir can delete an empty directory only ( rmdir waz(file name) 
10. ***S*hortcut tip !$ is placeholder for whatever you typed above/prior** 
11.  ***rm -r command*** =  stands for remove recursive which means it repeats going down levels not just one level , keep going do not stop 
12. ***^ up arrow command*** = hit the up arrow to call the last command you used . Hit once = last command , hit it twice = second to last command, hit three times = third to last command 
13. **Note once you delete a file through the command line it is deleted permanently. It does no go to trash.** 
14. **rm -rf fiename  - force it to delete it will break your computer use it with caution** 
15. Shell is a computer program that presents a command line interface which allows you to control your computer using commands entered with a keyboard instead of controlling graphical user interfaces (GUIs) with a mouse/keyboard/touchscreen combination.
16. .zshrc = is a file that configures your shell
17. ***cat command*** = allows you to read the contents of a  file , if you want to get into a specific file to read you type in **cat .(filename)**
18. ***echo command*** = print copy (i.e echo ‘hello’ = hello) 
19. ***source command*** = reload the  configuration file 
