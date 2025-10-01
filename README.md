<h3>1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h3>
ans: getElementById is calling an element with it's id after assining an id to it while doing dom manipulation.
     getElementsByClassName is same as getElementById but the difference is here we call the element with its class.
     querySelector,here you can use any selector/id/class/tag it will work only with the first element.
     and in querySelectorAll works with the all elements so you can use loop here to work with each element one by one.<hr>
<h3>2.How do you create and insert a new element into the DOM?</h3>
ans: first we need to create an element with using .createElement() method then we need to append this into another element with using .appendChild() method. With this process we can create and insert a new element into the DOM.<hr>
<h3>3.What is Event Bubbling and how does it work?</h3>
Ans:When we click an event on child element then the event starts to go to the parent element one by one untill it founds the highest one this concept is called event bubbling in JS dom manipulation.<hr>
<h3>4.What is Event Delegation in JavaScript? Why is it useful?</h3>
Ans:Event Delegation is also a similar case like event bubble but here we delegate the event to the parent. In easy words we transfer the targated event to the parent.It is a very usefull concept---while working on different projects we might face some difficulities to work with multiple elements,For example: when we use getElementsByClassName() or querySelectorAll() at that time we have to deal with multiple elements or nodes, at a time we also have to add there events. so it might get confusing and messy sometime and bocome more frustrating specially for us who are the beginners. At that time we can use this concept of Event Delegation to reduce the pressure from our head instead of dealing with multiple elements we will be dealing with their parent element which is a single element, it will be more easier to deal with that. That's why it is very  useful in js.<hr> 
<h3>5.What is the difference between preventDefault() and stopPropagation() methods?</h3>
Ans: preventDefault method stops the refreshing glitch of browser/console where we see the output when we working with the input/textarea fields. stopPropagation method stops the event bubble of target it just stops to find the parent for the target for that event.We might not see the visual output for these methods but it works in backend.
