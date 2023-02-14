### Css 201 

## Intro into Flexbox

Gist of how Flexbox works is you have a parent which is a flex container and then that parent had  children  which we call flex items . And that is the relationship. 

Now if those children have children they are not affected by what would be the grand parent and that is the flex container. You really going down just one level 

Flex children are also flex containers and their content are flex children. you can move content around using display flex and justify content and so forth 

When you use display flex it wants to put all of its children on one row. That is default behavior.  

Flex-direction: column it will put them back how they were as blocks stacked on top of each other. 

Flex wrap: wrap - means if we ran out of space I want you to wrap 

Flex basis - what do i want my min width to be ? In order for this work, you have included flex wrap 

Justify content: center - refers to x access and it aligns items to center left to right 

Justify content: center only refers to x access when your flex direction is row 

If your flex direction is column it refers to the y access and align items would refer to the x access

Align-items: center - refers to y access and it aligns items to top to bottom vertically 

Flex grow means I want you to grow if you can. when you make a container it knows how much width and height it has  and when you say flex grow to say i want this particular element to take up all the extra space if it can compared to all the other elements. You cannot use flex grow if you have items wrapping.