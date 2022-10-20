# Retrospective

- name: Anthony Baird
- email: anthonybaird@u.boisestate.edu

## Instructions

For the **Experience** section you need to detail your experience with this lab. 

- Were there any things that you struggled with? 
- Were there any parts of this lab that were unclear or poorly specified? 
- Were you able to get the entire project done?

For the **Known issues or Bugs** section you need to detail any issues or bugs that you have in your
code. For example maybe your code crashes randomly and you couldn't figure out why. If your code
doesn't have any issues you can simply write NONE in this section.

For the **Sources used** section you must detail any sources you used outside of the textbook or
course website. If you write NONE in this section it is assumed that you didn't use google at all.
Be safe CITE!

## Experience

### Week 1
I dislike the idea of using strict mode as the tutorials suggest, because I think it takes all the fun out of (if not defeating the whole point of) using a language with dynamic typing. However, the static analysis and code suggestion that TypeScript enables are very nice things, and I'm not totally against TypeScript since it has a strictness dial that you can set. 

No issues learning about TypeScript; the tutorials are pretty straight-forward. I wish the zyBooks were as straight-forward and short with just the information you need to know, but I understand that they need some amount of making sure that people aren't just clicking through and not learning anything.

### Week 2
I spent 3 hours trying to make a Github Action to compile the TypeScript so it would work on the published 'Github Pages' page, but I couldn't figure it out... so I fell back on your example, just requiring it to be compiled locally instead. I also used your npm setup for compilation and testing.

Once I gave up on the Github Action, writing my own TypeScript function was easy. I made it so that if you click on the h1, the background color changes to a random color.

Then I mostly finished the CSS. I started with some old CSS I had laying around, and modified it to fit this project. 

### Week 3
I spent several hours trying to fix the display width. It "appears" fixed, but it's still not right. I detail this in the Issues section below.

Besides that I didn't leave much to do this week, as I mostly got it done in the previous two weeks.

I thought the project was easy-ish, if a little confusing about what exactly we're supposed to produce or what the expectations are.

## Known issues or Bugs

My HTML tag width does not match my Body tag width, and I couldn't figure out how to make them the same. I set body to width: 100%, but then I had a horizontal scroll bar and still have a vertical bar-shaped section on the right side of the page that is covered by the html tag, but not the body tag. I messed around with it for hours, googled a couple things, but nothing I found online worked either.

This vertical bar can be seen by clicking on the last 'Example' card's code section, which changes the body's background color.

I was able to get the h1 section to cover most of the page, but if I widen the body it just gives me that horizontal scroll bar again.

## Sources used

 - The tutorials linked in the assignment.
 - [Random Hex Value](https://www.tutorialspoint.com/random-color-generator-in-javascript)
