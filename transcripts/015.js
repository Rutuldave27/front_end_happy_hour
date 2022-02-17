module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to the 15th episode of the front end, Happy Hour podcast. This episode topic was something that we've been asked quite a few times by our listeners to do. So we're going to do it this episode, and we'll be discussing our thoughts and opinions on JavaScript frameworks. Before we get started, let's go around the table and give brief introductions of this episode's panelists. Derek, do you want to start?

</p>
<p><strong>Derrick Showers</strong><br />
Sure. My name is Derek showers and I am a senior software engineer at LinkedIn.

</p>
<p><strong>Augustus Yuan</strong><br />
My name is Su and I'm a front end engineer at Evernote. And I'm Ryan Burgess. I'm

</p>
<p><strong>Ryan Burgess</strong><br />
a UI engineering manager at Netflix. In each of the episodes of our podcasts, we like to choose a keyword that if it's mentioned, we will all take a drink, what word do we decide today's episode would be? We're gonna

</p>
<p><strong>Derrick Showers</strong><br />
we're gonna mix things up a little bit and get a little crazy JavaScript, Java JavaScript. So

</p>
<p><strong>Ryan Burgess</strong><br />
each time we say the word JavaScript, we will all take a drink. All right, let's kick things off. And actually, before we get too deep into the frameworks, I'm interested to know when we talk about JavaScript frameworks. Cheers. What do you all think about? Like, what are the ones that come to mind? For me right away? I think of the big three Ember React and Angular. Yeah, I

</p>
<p><strong>Derrick Showers</strong><br />
think, you know, it's worth mentioning in this conversation, jQuery, and prototype and like, kind of all the ones that used to used to be a lot more popular than they are now and often criticize now with just the, you know, the patterns that they kind of force people into, but you know, they're they were definitely I think, super before these newer frameworks came along. They were definitely what everyone was using.

</p>
<p><strong>Ryan Burgess</strong><br />
No, I completely agree. like jQuery is actually been probably one of the most important ones just because it has really brought things to the forefront. And, you know, we use it for a long time.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, yeah. I also think of backbone. I think that's also a huge one, or like Marionette, which use with Backbone. I think that's pretty huge.

</p>
<p><strong>Ryan Burgess</strong><br />
I remember, like, one of the first like ones after jQuery I used was knockout, mainly because it did data binding, like so well. And I was like, blown away by that. It was like, Yes, this is so great. And then backbone came along. And we're like, Oh, my God, you can do so much more and switch to a new framework. Definitely.

</p>
<p><strong>Derrick Showers</strong><br />
It's also interesting to kind of go back and forth. I know where we plan on talking about some of this, but like, just, you know, because backbone, so opinionated in nature that like after working or work with Ember a lot at LinkedIn, and like, after working with Ember, and then going to backbone, sometimes it's a little refreshing, you know, is like, you have to I mean, you have to write a lot more code to get things done. But it's just kind of nice that you can fully understand everything that's going on. And there's no magic happening

</p>
<p><strong>Ryan Burgess</strong><br />
now. No, totally. I think actually, before we even get started, like you mentioned, LinkedIn is using Ember Augustus, what are you guys using Evernote?

</p>
<p><strong>Augustus Yuan</strong><br />
Well, we use Google Web Toolkit for Java. So it's like a transpiler, that takes Java and converts into JavaScript. Good. Quit. Yeah, good. Good. So yeah, we've been using that for a bit. But we have been looking into using React a lot more. And then actually there recently, there were like, some teams that were playing around with angular, just like Angular two, or I think it's Angular one. And really, they're just trying to take advantage of like the data binding and they're just making some like, self service like help helpful like applications internally, but yeah, primarily react for like, actual production stuff. We're definitely using like components in production, but like, using it, like as a whole framework full fledge. Yeah, it's like, so

</p>
<p><strong>Ryan Burgess</strong><br />
why kinda like that about React, though, is you don't have to just like, put it everywhere, you can just put it with other things, too. So like, if you are running squid, or jQuery is like you can run react, like alongside of it. Right? Exactly, exactly. And Netflix,

</p>
<p><strong>Augustus Yuan</strong><br />
we're actually very, very heavy react when I think of, like JavaScript frameworks, I always just go to to do MVC, and I just look at all the different ones. And some of these I've like, not even heard of like troupe J. S, and require you. I've never heard of that one. That's pretty interesting, how many frameworks there are in which kind of makes sense of like, why people kind of like, are like, Oh my god, like, every year gonna learn a new framework and stuff.

</p>
<p><strong>Derrick Showers</strong><br />
I remember learning or when I was like, first learning web development, I had didn't really I wasn't really familiar with anything other than jQuery. So like, I, the company I was working for was using prototype. And I was so confused, because I was like, What is this prototype thing? Like, I thought prototype was part of JavaScript. Why is this a library and why is it so confusing?

</p>
<p><strong>Ryan Burgess</strong><br />
Did they use it like quite a bit? Yeah, the code base? Yeah. And then

</p>
<p><strong>Derrick Showers</strong><br />
they were they were trying we were trying to switch everything over to jQuery. But it was uh, oh. And then why UI that's actually

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yeah. How can we forget

</p>
<p><strong>Derrick Showers</strong><br />
about Yahoo's why you we actually still have that likes to go to LinkedIn

</p>
<p><strong>Ryan Burgess</strong><br />
really, when they'd like? Deprecated did it like fairly recent? Like, what? Yeah, within this year, I believe, like I can't remember exactly, yeah, is that they're pretty much killing the project and no longer supporting it. I guess a good question for us is, should you use a framework?

</p>
<p><strong>Augustus Yuan</strong><br />
I think it depends. Yeah, I think like, it depends. In general, like, if you're trying to build a large scale application, it definitely will make sense. Like, eventually, like, I think like for very small scale stuff, it's really hard to see the benefits of a framework. But like, once you start trying to go large scale, and then like you like, it really makes sense to just like, split up your code. I also like when I started, I just did jQuery. And I, we just make all my applications like very Singleton, like everything's just shoved into one page, or like one JavaScript file or whatever. And then like, but then like, once I like started working at Evernote, or working on other large larger scale applications, or even looking at GitHub repos, It like makes a lot of sense to like, split that up that responsibility.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I agree. I think maybe the question to ask is, why would you not use a framework? Because and I think our reasons, but because I think, you know, if you ever want your application to scale to your point, like it's, it's good to do that from the beginning. But I don't know if you guys have any ideas for why not to use a framework? I think maybe one is just sighs of, you know, extra extra code that you're loading, if you're never going to use it?

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yeah. If you're not using a framework, and you're only doing something very small, like, why not vanilla JavaScript, if it's just like, change me creating a menu or something like that don't load an entire library or framework that you don't necessarily need just for something small, like a really small interaction. But to me, I think all in all, more often, like even on some small projects, they do scale, and they start to scale exact. So it's like, at what point do you choose to have a framework or just do some vanilla JavaScript? Like, I think that's it's tough, it's like, but it comes at a cost, too, is your loading extra for not necessarily needing it at that time? Yeah.

</p>
<p><strong>Derrick Showers</strong><br />
Speaking of small, like menu type things, though, is I guess, another good example of if you're building some sort of like, module or utility that other people are going to have to like, include as part of their project that you probably don't want to have a dependency on, like, you know, even jQuery, you know, like, I've already caught myself like writing, you know, like, just Yes, six module or something. And then it has a dependency on jQuery, it's really hard to package together to, you know, and then you're forcing that,

</p>
<p><strong>Ryan Burgess</strong><br />
why are you packaging jQuery? Six? Well, no,

</p>
<p><strong>Derrick Showers</strong><br />
no, it had to depend the code, I was ready how to deploy. Gotcha jQuery, and depending on like, what build tool you're using some, some are easier than others to, to like, if you're using Webpack, I guess it's somewhat easy, because you don't have to necessarily package it with your module. But if you're doing something like UMD, and you need to have that, you know, support older people that are using older, not basically not using frameworks that you need to package it with.

</p>
<p><strong>Ryan Burgess</strong><br />
Having a framework is really good, because a lot of that code has been tested, it's, you know, being used by fairly large companies. And actually, even a lot of them like React or Angular, having large companies behind it, like creating them. And I think a lot of those things, a lot of the problems have been solved a lot of performance issues, a lot of those types of things that you're getting for free for using it, I think that's great. There's also a lot of documentation to learn. It's not something that you just have to like create on the fly or recreate it's done for you. And you can actually learn it fairly easily.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, actually is a really good point. I remember listening to a talk about why to use jQuery. And the one of their main points was exactly that, you know, like, you can do pretty much everything you need to do, especially nowadays in regular JavaScript pretty easily. But everything in jQuery is unit tested. And you know, so you know that like, What, you don't have to necessarily check this working in every browser, even though that's not as much of an issue now. But even just little things, you know, you don't have to worry about that, you know that that's, or you have to write your own unit tests, and therefore, write a lot more code.

</p>
<p><strong>Ryan Burgess</strong><br />
Now, here, you're saving some of your time by using the framework because it's already a lot of that heavy lifting is already done for you. What about like for new new people, like someone who's wanting to learn JavaScript? Cheers. Cheers, cheers. But yeah, what What about someone who's wanting to start and learning is a framework a good idea to start with?

</p>
<p><strong>Augustus Yuan</strong><br />
So. So what I will say is, and granted, jQuery is not a framework or a library, but I will say like, I think it's extremely beneficial to learn the fundamentals of JavaScript, and just kind of speaking. Cheers. You caught me, they caught me

</p>
<p><strong>Derrick Showers</strong><br />
might have missed a couple of them.

</p>
<p><strong>Augustus Yuan</strong><br />
We doubted okay, we can do too. Yeah, or so. I think it's beneficial if people start off learning vanilla JavaScript, and I kind of speak from kind of how we were talking about jQuery, which is a library not framework. We can probably talk about that. Like I remember in school, like a lot of people would just kind of jump into jQuery and then not understand the fundamentals of JavaScript. So they would get like JavaScript errors. And it's because they weren't changing their JavaScript variables into jQuery objects, and they would just be like, Why isn't this happen? Like all the functions that I need and stuff, I feel like you just don't understand like how some things work. So it's really important that you do understand the fundamentals of vanilla JavaScript. But that being said, I don't think that should be a barrier for like starting projects, like with a framework and stuff, I think it's important to learn the fundamentals. But then like, I think it's totally okay to like, even for very, very small projects to use a framework designed to set the foundation.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I agree. I think it does. It's tough. Like when you learn framework to, like, I think there's a lot of developers out there that are framework dependent, and I think that's bad for two reasons. First, I think you can get by and create some, so if you if your job is just to prototype prototype stuff, you're probably fine, just knowing a framework, but like, once you get into scaling things, I think you really need to understand the, the, you know, the, what's going on behind the, you know, kind of framework. And so even just like going through debugging it and, and performance things, like you just need to understand, I think the the underlying JavaScript and was here. And the other thing is, I think it's also gonna benefit you as a, as a developer, right? Because like, if you just learn Angular, and you know, nothing but Angular, you have now have limited yourself at least 33% You know, how much probably much more but like, you've limited yourself to now jobs that you can, you can move to, right, but if

</p>
<p><strong>Ryan Burgess</strong><br />
you have the fundamentals, then you're you're able to jump in on any framework, it really doesn't matter at that point. No, that's that's actually a very good point. Yeah, I think it's just like, I've even seen it where even I've had it in interviews where people, you know, you ask a coding question, and you think, hey, whatever it may be, and then it's like, oh, well do that Angular, but when you start prying into that, more, it, they're very dependent on Angular. And that sucks. Because like, what happens if like a company switches frameworks like tomorrow, that that's gonna be a tough transition for that engineer,

</p>
<p><strong>Derrick Showers</strong><br />
not even just JavaScript, either. Like, I think frameworks depending on the framework, do they the you become used to writing markup in that way? And like, I've been in interviews where the interviewee will be like writing mg tags all over the, you know, like an HD, just a simple, like, HTML question is like, what? No, that's not

</p>
<p><strong>Augustus Yuan</strong><br />
actually, you guys bring up a really good point, like, because there is, I would say, a lot of magic that's happening. And so like, kind of going to your point, you do become a much stronger developer, if you really know what's going on. Like, and I think that is, I we, I definitely would encourage like you to understand what's going on what the framework is actually doing?

</p>
<p><strong>Ryan Burgess</strong><br />
Well, I think that's the tough one with even something like Angular, because it was, I feel like there's a low barrier to entry on that one. Like, it's, it's really powerful, like, you can get something up and running like, quickly, and you're like, wow, it enemy. It's, it's like click menu shows up data binding, everything is pretty impressive. And if you don't really understand how that's happening, I've seen problems in production, where people have even tried to scale it, but not really understand what's going on behind the scenes, and it actually has really, really impacted the overall performance of the application. So I think you do have to be a little aware of what's going on. And I don't know, I feel like Angular was one that always kind of stuck with me, as seen more of that, I guess, in the community of people learning is being stuck on something like Angular.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, maybe, maybe that's okay. Like, maybe it's okay to have junior people that are that are just, you know, not as familiar with the underlying JavaScript.

</p>
<p><strong>Ryan Burgess</strong><br />
You're like, just like, yeah, like, screw,

</p>
<p><strong>Derrick Showers</strong><br />
you know, and because maybe, maybe it's not even just a, like, maybe you have, for instance, somebody that's more on the side of design, you know, that's really good with with building interactions and building UI, prototyping, like, I think that's yeah, like, maybe Angular is probably pretty good for that. And then you have senior people that are that are potentially, you know, taking a look at the performance implications, or like one of the tough bugs come up that you can't solve. So

</p>
<p><strong>Ryan Burgess</strong><br />
I think there again, it just depends on what you're trying to achieve. Because like, maybe it is just like, you're like, I just want to create something. And then yeah, that's perfectly okay. Like, we don't need to go into this whole learning. It just depends what you want to learn and what you want to achieve at the end of the day,

</p>
<p><strong>Derrick Showers</strong><br />
which if I go back to that library versus I know, that's confusing. It's been confusing for me in the past, and I always forget it. So I always have to, like, look it up. Last time I looked it up on StackOverflow, I think they're like most popular answer is that a library is something that you call an end a framework is something that calls you so, you know, like an in Ember, for instance. And I think React is the same way in Angular, I'm sure you write methods that are called by the framework, whereas library, jQuery, you know, you're calling all those methods. But I've actually heard, I think in the same in the same StackOverflow question, I've heard react as being referred to as a library so I'm not sure

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, I've I've heard that one lots too. And I I feel like it I can see why it's called that too. But they're, again, even calling framework library. I feel like they're so closely. You're trying to achieve something similar. Yeah, at the end of the day,

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I guess it's like, now, you know, with a lot of frameworks, you're getting libraries bundled in with them, right? Like I know, for instance, so true Ember, you're getting a lot of utility methods. So, so you wouldn't need to necessarily also include underscore, because there's probably something in, you know, embers, library, embers framework code that will give you access to do you know what something that ember that underscore can do, but I guess it's not the case of everything, you know, I don't know, does react have, like utility methods and stuff that? Or would you also include lodash? Or underscore?

</p>
<p><strong>Ryan Burgess</strong><br />
You could add that as a separately, like, if you wanted to, it'd be more on your discretion. React doesn't need it, but you could actually add it in?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, no, you can I just like, I know, for instance, with Ember, there's, like debounce functionality, and like the stuff that you get with with underscores kind of already include, there's a lot of like, array methods and stuff that is a reason that you would include something like lodash or underscore didn't know if reacted,

</p>
<p><strong>Ryan Burgess</strong><br />
but like built in, not that I know, like, behind the scenes, I don't think so.

</p>
<p><strong>Augustus Yuan</strong><br />
React does seem more like a framework to me, because it is framing, framing your work.

</p>
<p><strong>Ryan Burgess</strong><br />
Have you are you?

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, but yeah, it's like a framework StackOverflow

</p>
<p><strong>Derrick Showers</strong><br />
answer bullshit. You need the guesses come in,

</p>
<p><strong>Augustus Yuan</strong><br />
though, but But yeah, it really is, like, kind of determining, like how you're framing your project application like and you have exactly to like, follow and it's not like you can just like do whatever you want, you kind of have to, almost conformed to like, how they want you to like make it which is a good thing. Like they like have like,

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I disagree a little bit in the sense that I find it. Yeah, you're kind of hinting that that too, is that it's like, it's a bit like you has a bit of an opinion on how you should structure. But I think React is actually one that's very, very free to do a lot of your own decision making.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, I was actually I just caught myself with that. I was like, oh, wait a second. So that's true.

</p>
<p><strong>Derrick Showers</strong><br />
To your point, they still enforced things like, you know, immutable, like, properties and stuff. Like there's certain core,

</p>
<p><strong>Ryan Burgess</strong><br />
you're managing props and state and like, yeah, there's a component,

</p>
<p><strong>Derrick Showers</strong><br />
but then how you piece that all together? I guess, is right, the flexibility that

</p>
<p><strong>Augustus Yuan</strong><br />
it gives you. Yeah, cuz like a library doesn't like you could you could use jQuery with with Angular, or react if you really wanted but it doesn't really change how you structure the application in any way.

</p>
<p><strong>Ryan Burgess</strong><br />
jQuery wasn't very opinionated at all. I think that was like one thing, it was very loosely defined, and you just got to use it. Whereas Amber, that's one that always sticks out in my mind is very opinionated, which has its benefits, it really does. One you can have, like, I'm sure Derek, if you left LinkedIn to a company that was doing Ember, you're pretty much ramped up already, like the code base stays very consistent across companies, which makes it really easy to move around, which is, I think, really cool, because even if I left Netflix tomorrow and went to a shop that did react as well, is they might do it completely different than we do at Netflix. And I think, yeah, some of the ramp up time might be a bit of a cost if you're using something like React or Angular, but Ember is pretty much the same across the board. How do you like? Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
actually, I think it's an interesting question, because it wasn't really involved in this, but just in hearing about the conversation on why we chose Ember, which happened probably about a year ago. And, you know, we considered react, we considered, like Backbone, jQuery, we considered, you know, I guess there's, I don't think we consider Angular but or Ember. And really, the reason we went with Ember is for that reason, like, first of all, we can have, we can hire people that are either Ember on the Ember core team, or they're like, you know, senior developers, somewhere else in another company, they can come in and, and that's happened so many times, especially now we're really trying to push the limits of scale Ember to two limits that hasn't been scaled up before. You know, like, we have these people that can come in and know immediately, what the issues are, how to fix them, and then jump right in, you know, which is super helpful. But also, internal mobility within an organization. Like, that's really nice, too, because you can now you know, move between teams that are and when even though they're completely different products, they're still using, they're still written the same way so you can more easily and before it was kind of like this product is, is written in a way that's completely different than this product over here. So like moving teams is almost like moving another job, you know, to other jobs. Sure. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
It's not just necessarily having to go to another company. It's like no, just even moving another team if they're using even similar framework, but written completely different, that can be

</p>
<p><strong>Derrick Showers</strong><br />
a struggle. And the other I'd say the other advantage, too, is that like, since you're writing core embers is we're writing core Ember, it's a lot easier to contribute back to the company or to the open source project, because you're not not necessarily solving solutions that are, we're not solving problems that are just unique to LinkedIn, are solving them in a way that we can contribute back to the project, which is really cool. I mean, you can do that with React to if you find something it's like.

</p>
<p><strong>Ryan Burgess</strong><br />
Any framework that you use, I think is a good idea. to actually submit back to view improve it, you should put a pull request back.

</p>
<p><strong>Derrick Showers</strong><br />
But I guess Yeah, the only difference when you have a framework doing everything is that you're not adding layers of abstraction on top of it. That is what you're fixing. I mean, we are to an extent on some circumstances, but just think that's really cool. But, you know, on the flip side of that, you also have to deal with all the performance and, and, you know, issues that come along with an open source project, right. And especially when you're when you're doing an open source project that hasn't been scaled to the way that it has, you know, before, before we adopted it. So

</p>
<p><strong>Ryan Burgess</strong><br />
do you think there's any limitations to being that opinionated with a framework? Um,

</p>
<p><strong>Derrick Showers</strong><br />
I don't know. I think I think it makes things

</p>
<p><strong>Ryan Burgess</strong><br />
also coming from the guy wearing an ember shirt.

</p>
<p><strong>Derrick Showers</strong><br />
I think it's mostly good. But I do think it does come with I think, you know, what kind of what we were talking about before is there is an environment that it promotes an environment where developers don't need to learn JavaScript, they need to learn Ember, because it's, you know, sometimes so different than the JavaScript. So sometimes it's tough to find people that are good at both. And when there's when there's issues that come up and you know, debugging and figuring that kind of stuff out. It's kind of tough, because there's so much magic that happens with that type of thing, that even if you're a good JavaScript developer, you know, like, you really have to understand these abstractions that are abstracted for a reason.

</p>
<p><strong>Ryan Burgess</strong><br />
I have always said JavaScript tears.

</p>
<p><strong>Derrick Showers</strong><br />
I don't know if it's a tough question. But no, it is.

</p>
<p><strong>Ryan Burgess</strong><br />
I think it's a really tough question that I go back and forth on as well. I think it comes down to some of the learning aspect, I think I completely agree. But there's so many benefits to is like even that you talked about being able to jump between teams, or whatever it is, is it stays consistent. But I always find myself and I've said this multiple times. And it's not because we write react at Netflix or anything like that. And I love writing react. I always tell people when they're first like wanting to learn, like I've had a few friends that have started to learn JavaScript. And they're like, well, and what framework should I look at? And right away, I typically suggest react because I find that you're able to really, really learn the fundamentals within even using something like React. That's just my opinion. Oh, no, I,

</p>
<p><strong>Derrick Showers</strong><br />
I totally agree. I mean, sometimes there's, there's, there's often I'll be thinking, man, it sucks writing Ember, because I'm, I'm learning the, the Ember way. Yeah, I'm learning of framework. I'm not necessarily learning like, you know, for instance, I know react does a lot with EF six classes and stuff, right. So like, you know, that's cool, like Ember, does it everything's a method and Ember, right. It's not, it's not, it doesn't give you that ability to write JSX. Although I think I think they're, I think the I have found that there are some performance concerns with writing everything the Ember way, you know, so like, if you have state in your component, why not just use, you know, that doesn't, that doesn't need binding, and it doesn't go in the template, you know, like, why not just use plain JavaScript for that kind of stuff. So I think that's changing somewhat, but, but then work towards react. You could

</p>
<p><strong>Ryan Burgess</strong><br />
do a mix of that though, too. Yeah. Like you could kind of make those decisions when to use the frame. Yeah. And when not to?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think it's just when you have an opinionated framework, it's kind of like, especially when you start out with a framework, I think you're like, Okay, do everything through like, here's the documentation, do everything the Ember way, like that's the that's the joke that everyone uses ember. Right. But you can go too far. And I think I think that the the, you know, the core team is realizing that I think that there are measures being taken to move more towards what React is doing. And, you know, just writing plain JavaScript and everything writing, writing everything with the Ember.

</p>
<p><strong>Ryan Burgess</strong><br />
Cheers, you call I have to call you again.

</p>
<p><strong>Derrick Showers</strong><br />
I mean, I'm bad slash good at this whole Java JavaScript.

</p>
<p><strong>Ryan Burgess</strong><br />
Okay, all right. Oh, we're having fun.

</p>
<p><strong>Augustus Yuan</strong><br />
You actually actually correct me if I'm wrong, but I know Netflix, I think I went to a talk and they talked about how like, when they were choosing to go react, they actually like, didn't just like save Pisco react, they like actually rebuilt Netflix and like a bunch of different frameworks. Is that right? Or

</p>
<p><strong>Ryan Burgess</strong><br />
yeah, I mean, we didn't rebuild the entire like site or anything like that. But yes, actually took pieces of site and built them in React jQuery and backbone and tried to understand Mormons, but also, how does this work in our team? Because I think we haven't even really touched on that. But like, how do you work within a team? Is this something that we want to write and can really get behind? I think that's important too, is having engineers feel like they can be productive and really get their job done, I think is really important too. And choosing that framework or library.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, is actually like when you were saying like, if someone came to me was like, Oh, if I'm learning JavaScript, like that's awesome. I actually didn't go to the door. But if I'm learning J S, haha. Wearing J S and I need your system. I needed to learn a framework. I would also probably tell them to learn react, but at the same time I feel like this is something the front end community gets a lot of crap for but it's like a I mean, there was a time when frameworks were just coming out not coming up nonstop. There's like a new one I knew I know. And like, just being able to learn a framework is extremely valuable. So I personally, I personally feel like it doesn't truly matter where you start, I would say, maybe start with React, because it's super hot right now. And like, a lot of jobs were and so

</p>
<p><strong>Derrick Showers</strong><br />
yeah, no, I, I totally agree. Actually, I think that, you know, Ember and angular are probably better to write when you already have a good knowledge of JavaScript. Ah,

</p>
<p><strong>Ryan Burgess</strong><br />
cheers. We could also be using the word Xmas script.

</p>
<p><strong>Derrick Showers</strong><br />
No, I'd rather use JavaScript years. There's only three of us that kind of make up for other people that Yeah, exactly.

</p>
<p><strong>Ryan Burgess</strong><br />
We're drinking for more people here. Brian. Brian holds not here. Just to say it to say, you know, yeah, sure. But yeah, I

</p>
<p><strong>Derrick Showers</strong><br />
mean, it's probably you know, better. I think you're just gonna be a better at writing Ember, and Angular and some of the more opinionated frameworks, if you understand the, so if you're just learning, I'm like, I know, Brian Holt does a really, I helped him with a class actually, that he does. It's like intro to ESX and react just because it works. So well together, you know, learning those two things,

</p>
<p><strong>Ryan Burgess</strong><br />
that one is a good course, how do you introduce a framework to your team?

</p>
<p><strong>Augustus Yuan</strong><br />
Well, first, I want to say that it's important that you do, and you don't just jump in and say, hey, look, everybody, we're doing

</p>
<p><strong>Ryan Burgess</strong><br />
this for anyone, you don't just like put in more requests. Just surprise, I

</p>
<p><strong>Augustus Yuan</strong><br />
realize we're, we're going all all in, I guess, depends on what are you trying to rebuild your entire application in this framework? Or are you just starting a fresh one, and you're just in the beginning of choosing, at least for us, like when we were choosing to rebuild our web client, like we're so like, in the process of like, rebuilding and react, like, we already had some insight into it, because we took some parts of web client. And this is like, one of the things I love about React, like you can take, like certain parts of your website, just take make it into a component, start integrating it. And then like, the team kind of has an idea of if they like it or not. And for us to like, it was like, Hey, this is awesome. Like, we can just like kind of componentize everything and like, stuff. So yeah, I

</p>
<p><strong>Derrick Showers</strong><br />
think like any architectural decision, or any decision, even like, getting some sort of buy in before you present it to the whole team is always a good thing. Like people just don't like surprises, right? So like, you know, I don't for me, it's like, just going around to the developers on the team, and just, you know, talking about it, and maybe yeah, like you said, like, have some sort of like prototype and like, like, a list of reasons why we should, you know, should be doing this and just kind of getting that individual buy in, because then you get also individual feedback, because maybe, maybe you're wrong. And you know, it's so you kind of realize that and I think you really realize that and a much better way, if somebody tells you that in a one on one versus like an entire room of people saying this is the stupidest idea ever, you're just gonna automatically fight back on that, right. Whereas if you get that individual feedback, you're gonna make changes, and then you're also gonna know how to like, present it to the next person to the next person, and then to the entire team at that point will go a lot easier. Well, I

</p>
<p><strong>Augustus Yuan</strong><br />
actually really like how Netflix and, and to be fair, like, if you have the resources to do this, if you can get like, engineers to, like, try out a bunch of different things. And like, this is something that like, I think every company should be encouraging of their engineers. So you know, to constantly innovate and try new things. Like, if like, you just give them the opportunity to just try stuff. And then like percent of the team like, Hey, this is my, these are my thoughts on like, how, like, I felt like working with this. And like, I think that's like a really good way to kind of evaluate a framework. Yeah, why not?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think there's also some level of just at the like, after you've done all of that stuff that we just talked about, I think there's also some level of just you'd have to make the jump and do it, you know, like, Oh, yes, you could, I've seen the opposite happen, where he just like, just no one makes wants to make a decision, because there's always going to be people that are against your idea, right. So like, you just, I guess, just have to go on to make sure that you have the majority. And then just at some point, just say, this is what we're gonna do. I think

</p>
<p><strong>Ryan Burgess</strong><br />
that's too is like some point is you actually need to just put it in production, you really need to test it and actually get it out there. I think, to me, that's not like the final decision isn't just talking about it. It's also putting out there and evaluating how it actually does for your users. I think that's important too, is like people actually using your website or application, what does that look like for them and also get a feel for that on your team was like getting those pieces out there. Don't convert your entire code base that is like the worst thing you can do is say, alright, we picked a new framework, we're gonna go away for six months or a year, recreate it and then put it out there like to me it's like it's got to be just get something out there quickly, and learn from it and tweak it and kind of move in that direction. Whereas I feel like you can take that approach we take your sweet ass time. Go away, go build it, you're not putting any new features out and then push it out and like you could really I'm not a fan of that one.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I guess you could also take the Brian approach and put it in production and go on a cruise.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm okay with actually putting in production but you should be there to be like, yeah, supporting it and making sure it's great. I believe actually Ryan anklam was one of the first ones to introduce react at Netflix. Yeah. That was one thing he did. It was just he's playing with it for a feature he was doing, put it into production. And there again, it was him like getting in this pull requests and having to own that, and taking the responsibility for it. But he was like, alright, well, I'm gonna try this and like, see how that works. And now we're writing a lot of React. So yeah, that's good. I think you should be able to explore and take chances in a responsible way, don't be stupid, and just push something out and like not really pay attention or really think about that decision. But I think it is good to get some stuff in production.

</p>
<p><strong>Augustus Yuan</strong><br />
No, I totally agree. And actually, actually, I think that does bring up a good point like, because it is extremely difficult to just and definitely not recommended to rebuild the entire thing, if you can find like an isolated part of your application that could be like kind of sectioned off, but like use a different sack than like, maybe it makes sense to like, try it out. Like if even if it's like a different, completely different page. Or if it's just like a modal that you can just like make a component. Like, I think that's like a really good way to like, start dipping your toes into the water. And then like people can kind of get a sense of like, hey, like, does this like make sense for us? And like, is this how we want to, like, start going moving forward?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And I think like, prototyping is a good idea, too, is like, you know, try build small little pieces and really get a feel for it, get people on your team trying it and really to have that discussion of is this something that we can use and leverage? Because I think that's important, too. It's how you actually code together? What's the best way to learn a framework?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I think this ties into something that I wanted to talk about. And so I will say that having great documentation, having a framework that has good documentation is pretty important, you know, there's that in a good community behind it, because then you are able to learn from others easier, you know, versus you're starting out on some framework that only five people are using, it's kind of tough, because you have to ask five people, those questions that you had, um, you know, you're going to get answers immediately on StackOverflow, you're probably not even gonna have to ask questions, because there's probably already the questions. And, you know, but like, I know, one thing that Ember has has done, which I really appreciate is they have, they split their core team out into three different sections. So they have Ember data, Ember CLI, and then have Ember, I don't know what they call it. But it's basically all about like, teaching new people and documentation. So they have core team members that are solely responsible for that. So whether that includes, I think it includes like, organizing meetups and definitely the guides that Ember J s.com. Site, stuff like that. They're, they're in charge of managing all of that. So I think it's cool that to see that they've put emphasis on documentation and, and, you know, getting new people, the right information to get up and running.

</p>
<p><strong>Ryan Burgess</strong><br />
I also feel like new people are the best people to write documentation to is they're going through it, and they're finding able to understand and learn as they're going and getting set up. And I think sometimes they're the best people to write documentation. So that's always good if you're ever trying something like submit a pull request to fix the documentation.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, that's an excellent point. Yeah. And then you can say that you're contributing to the project. And you know, you

</p>
<p><strong>Ryan Burgess</strong><br />
are absolutely because yeah, you're just helping others learn. Basically,

</p>
<p><strong>Derrick Showers</strong><br />
I think it's also just helps you build a better framework, right? Because you're writing documentation, you're forced to write documentation in a way that everybody can understand it. So you're forced, like, I think sometimes a lot of the things that are difficult about a framework are these nuances that you don't think about, because you just think that they're, everyone just knows that that's the, that's the thing to do. Like, for instance, side tangent, but I was I was adding a linter to Adam, and you need like a linter, for ES lint. But then you also need this, you also need like a linter package to install, right. And so like that, it's nowhere in the REIT they have these very, like detailed documentation on how to install this like thing and how to get everything set up and what like your ES lint rc file, and like all that stuff, but there's nowhere that mentions that you have to have a linter like a based linter and package install, just because they're assuming that you just know that you know that you already have that or that you knew that. But it's probably like thinking I'm an idiot, cuz I didn't do that. But

</p>
<p><strong>Ryan Burgess</strong><br />
that's fine. But those are the things that happen to somebody. Yeah.

</p>
<p><strong>Derrick Showers</strong><br />
But when you're writing that documentation, I think you in this case, that didn't happen, but you know, normally you, you would think, Oh, you know, like, this is something that we should probably either include the documentation or like rewrite in the framework to make it more intuitive.

</p>
<p><strong>Ryan Burgess</strong><br />
I also think the best way to learn in my mind is build something Yeah, really build something with it and test the features on it. To really understand is this like something that will be right for my project or my team? It's just like, that's, to me is always the best way to learn. I don't like reading documentation. It is helpful, but I hate it. I'd rather just get into it. Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
I guess for me, it's not about reading the documentation. Before getting started. I mean, sometimes I do I guess it just depends but like, it's for me, it's like if I do what you're saying Ryan and like, will you know sit sit down and just get right into it. I want to understand. I want to be able to understand like why something's working the way it is, you know. And so it's not necessarily like pre reading, it's, it's okay, I've run into this issue, but I can't find any documentation of why that is happening the way it is, you know,

</p>
<p><strong>Augustus Yuan</strong><br />
I think like, I guess people are different and how like, some people like to dive in some people like to like read up and really understand how everything works and stuff. I think, like I personally also like to dive in. And I think it's like important to try to build something from scratch. But actually like, also, like, kind of going with, like, even contributing to documentation, like contributing to open source projects is like a really awesome way to learn a framework. Like I haven't done a lot of ember, but there's this like, no GS blog framework that's trying to be like WordPress called Ghost, which is really cool. And they use Ember and like, I made a PR, was really simple, just added a little test, but it was like really cool to like, see how like it works. And like, it kind of gives you a sense of like how like, this app will, like the framework will scale. Like, it's really, really interesting

</p>
<p><strong>Derrick Showers</strong><br />
that and not even if you don't want to, to open pull requests, because sometimes that can be intimidating, especially on a huge framework, like, like Ember or react. But even opening issues, I think, is a great way to learn, because then it forces you to think about what you're asking to write, because you don't want to write something that's not really an issue. But also they will, you know, the project owners will want you to have some sort of like replication and you know, like, and pull it outside of the context of the app that you're working in. And you know, and so it's see if you can replay it that way. Like it's just a really good opportunity to learn. And you're not actually changing any code, but you're doing something that's maybe even more important. If you find a bug.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, no, I think that's good. And also, there's any of these popular frameworks, there's like, Great video tutorials on YouTube. There's amazing courses on things like front end masters, Egghead io, like little silent, sorry, missing the LinkedIn, what lynda.com, there's all these sites that are out there, or amazing blogs that explain and really go through those details, which I think is amazing. I think that's also another reason why I'm always like, Well, yeah, you should use a framework, because there's a ton of a ton of people out there doing the same thing. And you can learn from them. They're they're making the mistakes before you hopefully, yeah, but even if you are the one that makes a mistake, or finds something that can improve performance, share that share it with the community. And I think that's super important. Yeah, I agree. I think going back to it is community, how important it like, in my mind is super important. But we'd love to understand, like how important is a good community for a framework, and what makes a good community around a framework, this is

</p>
<p><strong>Augustus Yuan</strong><br />
actually one of the reasons like I like the part of like, contributing to open source, because there are a lot of good communities out there. Like I know, ghosts, they have like, actually, this is like a huge thing now like a lot of open source, like projects, or like making Slack channels, or getters, or like you can communicate with like the community of people who are actually working in building on the project. And they're like, super, like inviting and friendly.

</p>
<p><strong>Derrick Showers</strong><br />
Because what I think that's what I think makes a good community is people that are friendly, the you know, people will ask the wrong questions. And actually, you who talks about this in podcast, I was listening to another one, I think it was maybe on the Jabra one, but it's like, don't treat people like they're idiots, you know, like, they're, they want to do the right thing, you know, and sometimes I get frustrated people that don't do any research before asking the question. But you know, that aside, even if they're asking the wrong question, try to understand what as a community, like as a community leader, like, try to understand what question you're actually asking, instead of just saying, you're, you know, you're an idiot, and trolling them. And

</p>
<p><strong>Ryan Burgess</strong><br />
sometimes when you get asked a bunch of those questions, maybe something wasn't that clear. Yeah, you're too close to the project sometimes. So if you're working on one of those frameworks, and you get an issue, then it's like asking a question, you're kind of confused. Well, maybe it was confusing. Maybe you weren't clear on how that API works, or it wasn't clear whatever it may be. And so that's, you know, it's always good to be nice to that person, too. And not just treat them like an asshole. Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
the one thing one really cool story is so Ember has a Slack channel, if you're writing an ember, I suggest going in next, they're super helpful. And actually, one of the core contributors was like asking a question about testing, testing issues I was having and he like, he's, like, responding to me. I think he's like taking off on a flight or something. But he was like, on his phone responding, like, trying to help me out with my issue, which is really cool. And especially coming from somebody that knows a lot about the frameworks.

</p>
<p><strong>Ryan Burgess</strong><br />
And I also think a popular framework is good. I think the more the bigger the community is around it, the better it really is for the framework comes with some negativities there for sure. But I think there's also a lot of positives in the strength in numbers is actually makes it people are helping build that framework, whether it be giving talks at conferences, writing blog posts, making video tutorials, teaching people in community, submitting pull requests, fix things, all that kind of aspect is I think important. Having a popular framework is makes your choice a little bit easier. In a company using it Yeah,

</p>
<p><strong>Derrick Showers</strong><br />
and even just test even knowing it's going to work at scale, like that's another big piece that if you have a small framework has only been used for small things, non production things, then if you ever want to scale that you're going to have issues.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think it's important when you have large companies like LinkedIn, Evernote Netflix using these, it's important to like say, Oh, well, they're actually hopefully we're solving those problems before other people have to deal with them.

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I mean, I mean, look at React, you know, obviously, obviously, since Facebook is using React, you can be pretty assured that it's that you're not going to be building anything that's too much more so than Facebook.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think Facebook, people use that right? Yeah, there's people out there. Do you find too is like someone like Facebook? Or what's Facebook creating react? Are they just creating that for their own purposes? And do you think it fits everyone's purpose? If that's like building an application? Are you building it? If you're building another Facebook, then probably it does make sense. But does it make sense for a completely different application?

</p>
<p><strong>Derrick Showers</strong><br />
Yeah, I'm not sure. I think it's an interesting, interesting question. No, actually, I think is another reason that maybe LinkedIn went down the Ember path is just that. It's, it's interesting, having a framework that's managed by a company, right, just for I think, for a couple of reasons. One, like the primary reason being, all your core contributors are working for that company. So like, yeah, I just think it's an interesting distinction. And I don't know, at some point, and maybe it's obviously the advantage is that you're writing your framework, so that it works for your, your your circumstance, and then that's obviously a good thing. If, you know, in the example of Facebook, and they're writing a framework that's actually gonna work and not just something that people can use,

</p>
<p><strong>Ryan Burgess</strong><br />
they've created a solution for themselves. Yeah. And instead a set of hoarding that mean, like, this is just for us. And this works awesome. Yeah, she's Raleigh share this with the community,

</p>
<p><strong>Augustus Yuan</strong><br />
yet no. And I also want to say like, I totally love how companies, I don't know if it's like, maybe your more recent thing, but I think like, it's awesome when, like, companies do that they just, like open source, like their solution to like a problem that like, probably a lot of companies are facing, or, or will and I guess, react, I would say it's like, kind of redefining how we react to certain things like for like, for how we made web applications and stuff. I thought it was like, it's really awesome how they like kind of open source it because it gives them a lot of benefit to in the sense that like, the community now is like there can they can like kind of point out problems that they need, they want and then like they can, like, try to address them and stuff.

</p>
<p><strong>Ryan Burgess</strong><br />
Also, I think it encourages people to go work that yeah, they're like, Yeah, like that.

</p>
<p><strong>Derrick Showers</strong><br />
People that will only work on like frameworks, right? Like, there's just people out there that just that's, that's what they want to do is build like, contribute back to open source projects and build frameworks and some really good people. So like, if you're gonna pay people to do that,

</p>
<p><strong>Ryan Burgess</strong><br />
why not have them at your company? That's so true. Well, I think that pretty much wraps up today's episode. As we wrap up the episode, let's go around the table and share our picks for this episode. Eric, what do you have for us?

</p>
<p><strong>Derrick Showers</strong><br />
All right, I got three, but they're gonna be quick. And there's only three of us. So the first one is really stupid, but I kind of want to buy it. It's called fidget cube to Kickstarter. And it's basically just a cube that has a bunch of different buttons and dials and switches on it. And so just do they do anything. They don't do anything. So do you have to like program it to do sir? No, there's literally nothing to it. It's just a way it's just something you have in your hands. And you can just move dials. And this

</p>
<p><strong>Ryan Burgess</strong><br />
is interesting. I thought this is a whole now this do it yourself, like build some components. Oh, man, this is nothing more than a fidget cube.

</p>
<p><strong>Augustus Yuan</strong><br />
Interesting.

</p>
<p><strong>Ryan Burgess</strong><br />
You've blown my mind. The second

</p>
<p><strong>Derrick Showers</strong><br />
pic I have. I feel like I have to mention because I think it's really cool. And the team that put this together did a really good job is the art Lincoln's new publishing platform. So if you didn't know LinkedIn has a publishing platform similar to medium and allows you to publish articles on LinkedIn. So they have a brand new experience all written in ember. Very cool, and you work on it. I did not work on Ah, but another team that did and very talented group of people and it's really cool product. So check it out. And then the third one I just thought about as we were talking about it before we started recording is movie Sally. I want to see it on Friday night at Alamo Drafthouse, which is also could be another pick for another episode, but it doesn't matter what movie you're seeing, gonna drop everything else in there. But really good movie. Any Tom Hanks movie, in my opinion is a good movie. But this one also has airplanes in it, which I like airplanes. So airplanes and Tom Hanks equals winner.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. Yeah, it's definitely on my list to see. I got this.

</p>
<p><strong>Augustus Yuan</strong><br />
Yeah, sure. I have two. One is the amp project by Google. It's amp for Accelerated Mobile Pages. It's pretty interesting. Like this can write app HTML, and they'll be accelerated for mobile and stuff. So just looking at it, and it has like a GitHub and has a pretty, it's pretty well defined. So like, I think it's worth checking out if you want to that's fairly new, isn't new. I'm not sure I stumbled on it.

</p>
<p><strong>Derrick Showers</strong><br />
I was like, it's been like a year. I know. Like Paul Irish had a lot of input and stuff because it's a Google thing. Actually, we just noticed in LinkedIn mobile app. There's now a distinction at the bottom of the like the feed card that will say if it's an amp, oh, and so like it kind of like Facebook's Instant Articles they like pop up right away. But it's like we didn't build amp it was just put a

</p>
<p><strong>Ryan Burgess</strong><br />
designation. So LinkedIn is using amp then not using

</p>
<p><strong>Derrick Showers</strong><br />
amp, it just basically tells you if that article is using app. So that will hopefully encourage you or help users to differentiate that say, No, this is gonna be super fast my pull this off and it's not going to have because the other cool thing is they have a lot of requirements around how ads work like ads have to all be deferred in the app project, which is super nice. So you know, you're not gonna like click an article and get this like modal right in your face.

</p>
<p><strong>Augustus Yuan</strong><br />
Wow, I'm even more impressed with my pic. Now. The other one's more of if I want, it's called doodles TV. It's like I guess it's just a cute YouTube channel where you can submit your kids drawings. And I guess these animators who are kind of bored they like will take your drawing and animate it and just make it use cute stuff. And like I get it was like really cute. There's like this kid who's like watching his drawing come to life. So I think this one like for people who have kids and stuff. I think it's cute.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. I'm interested check it out. On the whole scheme of today's episode, I chose a CAD IO video. It is the react in seven minutes. I feel like honestly, I wrote react before ever watching this video, but I do feel it does a really good job explaining how to write react. It's a free video tutorial on Egghead io. And it's done by John Lydon Quist and he does a really great job honestly explaining react in seven minutes. So I would definitely check that out. My second pick is Machop it is a way to backup all your files to Dropbox. The reason I started using it while one I should always like it's such a great thing to use, but I started using them. And it took me so long to get all the like plugins and everything set up and I'm sure I'm going to add more. But my vim rc file I do not really want to leave lose and I want it to stay consistent because if I have to reformat or anything like that, I want it there. And yeah, Mac up is a good one to try.

</p>
<p><strong>Derrick Showers</strong><br />
That's also really good. If you have multiple machines probably too right?

</p>
<p><strong>Ryan Burgess</strong><br />
I feel like it would because it would all it should I have this problem

</p>
<p><strong>Derrick Showers</strong><br />
with having like multiple laptops. Why don't use multiple laptops to be honest. I work computer for everything because such a pain.

</p>
<p><strong>Ryan Burgess</strong><br />
You know, I used to do it. I used to do like where I'd have a personal MacBook and a work MacBook. And I would try and keep the things in sync but it was so difficult. I think this could help but I still think it's it's really difficult. I almost use one laptop. I rarely use my personal one. It's usually just I'm on my work one and that's what I use. So where can everyone get in touch with you? Derek?

</p>
<p><strong>Derrick Showers</strong><br />
You want my address or she address an address?

</p>
<p><strong>Ryan Burgess</strong><br />
come knock on Derek's door. Tell him how you want to hang out and talk Amber.

</p>
<p><strong>Derrick Showers</strong><br />
Man. Good thing we have security. Anyway. At Derek showers on Twitter.

</p>
<p><strong>Augustus Yuan</strong><br />
You can reach me at Gus this year at OG Berto, Aug. Bu RTO at Twitter,

</p>
<p><strong>Ryan Burgess</strong><br />
and I'm on Twitter at <a href="https://twitter.com/burgessdryan">@burgessdryan</a>. Thank you all for listening to today's episode. We appreciate all the great feedback we've received. It's helped motivate us to keep creating new episodes. Make sure to rate us on iTunes and Google Play and subscribe to front end Happy Hour on your favorite podcast catcher. And don't forget to follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a>

</p>
<p><strong>Augustus Yuan</strong><br />
JavaScript. Cheers Cheers

</p>
`;
        return transcript;
    };