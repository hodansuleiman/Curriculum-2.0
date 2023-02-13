### Css 103

## Flow and position
# Key terms and phrases

Css has a number of ways to position elements on screen. In this video explains a few key terms. 

1. **element levels**
    
    block - block level lines up elements in rows. It means you can take content and put it on 1 line that takes up the whole block  meaning it goes as far right and far left as it can go. You cannot put anything beside it. And it is 1 item per line. block is the default for an li.
    
    li is an block line element. li has padding by default to make room for disks (.).block comes with a natural margin.
    
    inline - element level - just like an in line block element but it does not have any space at all. For example a span element would be an in line element. There is no space to the right or left of a span.
    
    inline block - elements line up one box after each another on the same line. We can put several of these next to each other, they’re in line and they’re blocks. The block part of in line block means it comes with a natural margin. Margin, which is part of the natural flow is in between boxes left and right &  top and bottom the white spaces.

    inline, inline block and block are all values that you would attach to the display property. So the key value pair is display and some value would be added (i.e block or in line block)


2. **flow**- The natural flow of html is to start at top left area and then you go right, and elements naturally line up. width changes due to flow of browser 

3. **positions:**
    - absolute - we want to absolute position something somewhere in the browser. When you use this position you are taking the position out of its natural flow. Use case for absolute is for example, there are times when you need to absolutely  position something/element against something else/another element. And that is when the position relative comes into play. If you’re scanning someones code and you see position relative you know immediately   there is position absolute somewhere else because absolute is absolute to what? or relative to what? When you use position absolute you have to include top and left properties because you took it out of the natural flow. You now need to say what the top and left are or right and bottom. If you think of a box you have top-right bottom-left If you think of X Y access , left and right are on X access and top and bottom are on the Y access.

    - fixed - When you use this position you are taking the position out of its natural flow. You can think of fixed as just like position absolute except it is not looking for  position relative it is simply going to the window. So it will always be relative to the widow itself or you can think of it as the top level element. A good use case for the fixed position would be a navigation bar at the top of a  website that is always visible. i.e. you always want the header visible so that when you scroll as you are reading it will always be there because the position is fixed. Always add and specify top and left.

    - static - The default position for all elements is static. That comes from position propriety. A browser doesn't need an explicit `position` property in order to know where to place thing in the UI. It does this implicitly by setting `position` to `static` but this happens without us having to do anything. Position static and position relative the only difference between them is that there is a child somewhere that needs to know I am relative. And that is when we add position relative.

    - relative - position relative and position static the only difference between them is that their is a child somewhere that needs to know I am relative. And that is when we add position relative.