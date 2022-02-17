module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of Front End Happy Hour podcast. In this episode, we'll be talking about libraries, when to use them and when they might not be as helpful as you think. Let's give introduction of today's panelists. Stacy, you want to start it off.


<p><strong>Stacy London</strong><br />
I'm Stacy London. I'm a senior front end engineer at Atlassian,

</p>
<p><strong>Jem Young</strong><br />
Jem Young, Senior Software Engineer at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end, Happy Hour podcast, we like to choose a keyword that if it's mentioned at all, on the episode, we will all take a drink. What did we decide today's keyword is? trade off, trade off. So at any point in the episode, if we say the word trade off, we will all take a drink. All right, before we go deep into this, I have a good question. How do we define what a library is? I think that's a difficult thing to do. So I'm interested in both of your thoughts on this.

</p>
<p><strong>Stacy London</strong><br />
Yeah, like library versus framework, if there's like a third contender in that mix, but that's usually the two things you always hear talked about, like visible libraries, the framework, I'm not sure. In the past, I've used the like a library is something that just augments a few small things, but isn't necessarily maybe the thing that helps you build an entire application. It's like a piece of your application, but it doesn't it's not the the one thing that you can use to build an entire app. That's sort of generic, but that's kind of how I've always thought about it.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, and I think that's actually a fairly good way to explain it, I would always say like, a framework is not considered a library. I think that to me is fair, but then is react a library or a framework, library library. All right. This has happened many times. So that's why I'm like, I'm gonna ask the question. But yeah, I think libraries are things like helpers, or utilities, things that will really help do a certain thing, but it's not the entire application. I think that's a really good way to put it, Stacey.

</p>
<p><strong>Jem Young</strong><br />
Yeah, you're excellent. Your definition was like perfect.

</p>
<p><strong>Stacy London</strong><br />
I did, I did read something. It was just like, this whole, like, inversion of control thing was like, you call a method from a library, like you're calling that method. And but like with the framework, it's inverted, and like, the framework calls you which I don't know if that really makes sense. Yeah, I had to think about that more. I thought, like, definition works and how I think about front end frameworks, but I libraries.

</p>
<p><strong>Jem Young</strong><br />
It was for something. That's I think that's generally pretty good. I can think of instances where that wouldn't be the case. But I think generally, that's a good way of thinking about it. What are

</p>
<p><strong>Ryan Burgess</strong><br />
some of your favorite libraries that you tend to use? Whether it be at work, or even just in a new project? What are some things that like, must haves that you'll use? What do we consider Pavel? I call that a library? That was a library? Yeah, definitely a lot. Yeah.

</p>
<p><strong>Stacy London</strong><br />
I mean, that one just seems like such a must. Oh, yeah. That's on the

</p>
<p><strong>Ryan Burgess</strong><br />
top of my list.

</p>
<p><strong>Jem Young</strong><br />
The way I'm thinking about libraries, like, Could I swap it out for something else pretty easily. I mean, nothing's that easy. But relatively painlessly. Like lodash is one of my favorite libraries. I could swap that out for underscore. Oh, yeah. There'd be some a little bit of refactor depending on how many different pieces of the library use. But overall, it wouldn't change the structure of my code versus if I was using Angular. I cannot swap that out very easily. Because that's a framework.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yeah. You're pretty dependent on at that point? Yeah.

</p>
<p><strong>Jem Young</strong><br />
I think lodash my favorite mostly, what do we we use get, like lodash dot get? Yeah, it's one of the things I'm like, why can't we build this in the framework? People argue about smoosh or, you know, double colons for private access. I don't even know what they're arguing now. But I'm like, a getter on an object would be fantastic. Other Other languages have it?

</p>
<p><strong>Ryan Burgess</strong><br />
Yep. It would be very nice to have. But that's what lodash does. It just makes it really nice and easy. Babel definitely is really high up on there. But things like es lint. If I'm doing something node, typically I go to express right away if I need a server, I find expresses a really quick way to get up and running. So

</p>
<p><strong>Jem Young</strong><br />
yeah, I think people might be fine. Express is a framework. So it is like a web. Yeah. It gets tricky.

</p>
<p><strong>Ryan Burgess</strong><br />
No, actually, I think you're right. I think Express should be called a framework. It is a server framework. Yeah. All right. fair. That's fair, Jem.

</p>
<p><strong>Jem Young</strong><br />
Oh, yeah. I'm not calling Szenario. Like, I'm just like, What are you say Express? I think it defines itself as a framework.

</p>
<p><strong>Stacy London</strong><br />
But it totally doesn't fit what I was saying before. Like, you know, frameworks, like helps you build an entire application. But if that's like the back end or your API's, it's not the whole app. So that's that. That definition falls apart then.

</p>
<p><strong>Jem Young</strong><br />
But I liked your definition, because it's like a way of thinking about Yeah, how we start extra code and what frameworks and libraries? Alright Webpack or any sort of Bundler, would you use library or?

</p>
<p><strong>Ryan Burgess</strong><br />
It's a library? Yeah. Yeah. I mean, because yeah, even if you look at Express and saying that it is different compared to like something like a package or a package, or is more of a tool, very similar to something like Babel, I would call that a library, I would consider Webpack Browserify, whatever packager you're using. Now, do you use webpack? In lots of your projects?

</p>
<p><strong>Stacy London</strong><br />
Oh, yeah. I mean, yes. Like, all the major large, like react based applications, or have that I've worked with them all been using Webpack. I think parcel is starting to slip in a lot there, which we talked

</p>
<p><strong>Ryan Burgess</strong><br />
about, like, a couple episodes ago. And yeah, definitely. Parcels coming up more and more. Yeah. Which a library that definitely is to,

</p>
<p><strong>Jem Young</strong><br />
I don't really, we don't use webpack. Because we have no flavor, I guess I would,

</p>
<p><strong>Stacy London</strong><br />
did you write your own?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, Netflix does have their own. It has some certain things that we're using for AV testing and how we split up our code. I've also found one library I really like that I'll use on the server side speaking because I mentioned Express, well, let's go to a different route is sometimes when I'm doing some node scripts, if I'm having to scrape anything like from a site, or just like trying to build out your own API that has to scrape from another site, cheerio, such a great library. Yeah, it's like so handy for being able to just like, pull things from the DOM from just passing it a URL, it actually feels like you're writing jQuery, because that's what is really built to be like, but very helpful if you're just trying to scrape something from a site. And I've found in the past year, I've had to do that often. Just like trying to get some data really quickly. And it makes my life so much easier to be able to do that thoughts on my reach for often.

</p>
<p><strong>Stacy London</strong><br />
I can't look at that and not say it's a British accent.

</p>
<p><strong>Ryan Burgess</strong><br />
You know what, when you get the data back, it's kind of feels happy. So that's really good.

</p>
<p><strong>Jem Young</strong><br />
Like, mocha, is mocha a framework, or would you say it's a library

</p>
<p><strong>Stacy London</strong><br />
testing framework? Tests? I

</p>
<p><strong>Jem Young</strong><br />
think it defines framework. But however, I think I could refactor mocha for the most part to use jest or another framework.

</p>
<p><strong>Stacy London</strong><br />
We did that actually, it was, it was almost Yeah, it was pretty one to one, it wasn't too much work to swap.

</p>
<p><strong>Jem Young</strong><br />
So would you call it a fair?

</p>
<p><strong>Ryan Burgess</strong><br />
Is that close to that kind of feels like even something close to the Express side? Is that it is somewhat of a framework that's been built? Hmm. Because it's for your tests?

</p>
<p><strong>Jem Young</strong><br />
It depends how deep you go, like, yeah, swap out. Express for resta phi. Oh, absolutely. Penny on your complexity, like fairly easy. Yeah. But it depends on like, how deep you're going.

</p>
<p><strong>Ryan Burgess</strong><br />
But then does it change it? It's not, it's like a library, if you're only using a little bit, and then it's framework if you're deep, probably not. It's one or the other. This is hard. That's why it's so hard to find. I mean, if Moca calls itself a framework, we'll just call them,

</p>
<p><strong>Stacy London</strong><br />
you know, oh, I have the third option. This is it's a library framework or stack. And the reason I mentioned stack, yeah, like when you have all these different little like, so in a modern react app, you have like, possibly 12 libraries that you're using to do all the things you're going to do so like Redux, Redux sagas. normalizer, denormalize, or just like, library, your library, but like that set of things makes the application. But that in and of itself isn't a framework. So it's not like a single thing that you that comes bundled together that you're just able to be like, This is my new app, you have to pick and choose. So then it's your stack?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, if you have all the things together, it's a stack, and then they then you get the creative acronyms to that come along with that, right, like, now makes it even cooler.

</p>
<p><strong>Jem Young</strong><br />
Hmm, stack. So is the second collection of libraries

</p>
<p><strong>Ryan Burgess</strong><br />
collection of libraries and frameworks, because it could be it could be react and express. Yeah, yeah. There. And you could have a testing framework in there as well.

</p>
<p><strong>Jem Young</strong><br />
Yeah. Okay, okay. Yeah, I wouldn't you say stack I think old school like LAMP stack. Linux, Apache might be like,

</p>
<p><strong>Ryan Burgess</strong><br />
what was the MEAN stack? It was like Mongo, express angular

</p>
<p><strong>Jem Young</strong><br />
node.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Yeah.

</p>
<p><strong>Jem Young</strong><br />
I guess expressive? Why would you say that? I only know what's being said,

</p>
<p><strong>Ryan Burgess</strong><br />
because it's a badass.

</p>
<p><strong>Jem Young</strong><br />
That makes sense. But like, stacks makes sense, because you're like, I need a web server. So I'm sorry. Is it gonna be Python? It's gonna be Java. It's gonna be node. Yeah. You need some sort of UI library for describing like, that sort of stuff. Yeah. Suck make sense.

</p>
<p><strong>Ryan Burgess</strong><br />
but it's not testing stack, I guess either going back to testing.

</p>
<p><strong>Jem Young</strong><br />
So mocha calls itself a testing framework I just looked

</p>
<p><strong>Stacy London</strong><br />
at all right, which does just call itself a framework.

</p>
<p><strong>Jem Young</strong><br />
Just a mocha

</p>
<p><strong>Ryan Burgess</strong><br />
or like a Lyerly. Yeah, they're similar, but I'm gonna laugh one cause of the library and one calls it a framework.

</p>
<p><strong>Stacy London</strong><br />
Justice says delightful JavaScript testing, it doesn't have any

</p>
<p><strong>Jem Young</strong><br />
useless

</p>
<p><strong>Ryan Burgess</strong><br />
not helping the arguments. Are there differences between client side and server? We've kind of mentioned some client side JavaScript. We've also talked about server side node. Do you think of those differently when you're thinking about libraries to choose?

</p>
<p><strong>Stacy London</strong><br />
I mean, I haven't done a ton of stuff like server side with JavaScript, like with node i, I've, like, played around with Express and stuff just to have like a mocking server to like, play around with but for like, professional work and stuff, I've not done any like Node stuff. So I've never been one to like, like, select a library or framework for that side of things. So I don't know, I think,

</p>
<p><strong>Jem Young</strong><br />
I mean, you probably do with the trade offs you're making when you're talking about clients. Like we, what's a good example? Is lodash. A good example, you're like, Well, I want to use underscore, like, I'm sure some new hotness will come out soon. And you're like, Well, what sort of trade offs so we have to make trade offs with, like, convenience. Versus sighs, I guess is a good if we want to go down that path. Right. Definitely

</p>
<p><strong>Stacy London</strong><br />
made that. Yeah, I think definitely, like, that's something client side have had many of those discussions. I just, I can't think of like a server side one where I'm like, Oh,

</p>
<p><strong>Ryan Burgess</strong><br />
I have less concern, though. I think that's the thing. lodash being used on the server McCarrick, whatever. Yeah, like the size isn't as concerning as it is on the as on the client. So that to me, I'm like, Yeah, cool. There was lodash, used once or twice here, should have been used more times, if you're going to use it on the client. But on the server, I'm like, whatever. It's not as concerning. You might worry. Maybe there's some performance things, though, that I might be a little more concerned. But that might be splitting hairs, too, is like if you're using lodash. Versus like writing it yourself. I'm pretty sure lodash might actually be quicker, but maybe not. That could be a trade off between those two.

</p>
<p><strong>Jem Young</strong><br />
Cheers. Cheers.

</p>
<p><strong>Stacy London</strong><br />
Now it's becoming a terrible word.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, first, we weren't saying it now. You can do the opposite.

</p>
<p><strong>Jem Young</strong><br />
So I, I agree with you on the like, I think server side libraries are easier just like NPM install or yarn install or yarn add. However, I would say we don't consider the things, the balances. But I think a lot of newer people don't consider it because they they don't think about architecture down the road. I've been in many chat rooms where someone's like, how do you do this Webpack configuration because they're so lost, because they have so many. They're like, well, I got Redux. And I got this Redux sagas, I've got Babel running in like stage zero. And I've got these things. And now they're stuck because they've added all these tooling and all these libraries. And they didn't think about like the consequences of adding on that complexity. And now they're like, I don't know how to get TypeScript to work with Babel properly. And,

</p>
<p><strong>Ryan Burgess</strong><br />
well, it can even be versions, because I think you're even you kind of mentioned there, too. It could even be versions that don't work with each other, or you have to be aware of which version you're on for Babel, which version you're on or, you know, express or whatever you're using is sometimes those can conflict or something's missing for your Webpack config. And you're now going to figure that one out, too.

</p>
<p><strong>Jem Young</strong><br />
I yeah, I would almost argue that server side libraries are more important than client side libraries. Because there's a thing about every thing that's gone down on NPM or like hack package that has happened or just like general NPM wildness that has brought down parts the internet, because like, you didn't even know that this package you use like, it's like 1000 dependencies, and one of those has a dependency and one of those broke you wouldn't know that because we have so many. We're just like, oh, yarn add, there's no cost or they're perceived little costs,

</p>
<p><strong>Ryan Burgess</strong><br />
but you're saying is it's actually more concerning on the server because your server could actually go down?

</p>
<p><strong>Jem Young</strong><br />
Yeah, I anytime in an APR if someone adds like a library, like, why is this important enough to like add to our overall complexity of our overall like package ecosystem to use like one it's usually like one function in one library. And then going back to

</p>
<p><strong>Ryan Burgess</strong><br />
that point, like I was actually said that I wouldn't be as concerned if lodash was there, and you're only using it for one method. I'm like, Oh, well, whatever, it's on the server. But if he did that client side it like, why are we adding this entire library for that one function that you could have wrote yourself? Like, just Go write it yourself and not include it. But if you're using it multiple times, that might be a trade off, you're willing to make cheers,

</p>
<p><strong>Stacy London</strong><br />
cheers. I mean, I guess at least, you know, lodash did. Like you can work, I think, is there like, is it Babel or webpack configuration that you can just like import the one thing that you need from there. So that's nice.

</p>
<p><strong>Jem Young</strong><br />
I think we're sort of circling on this topic. But it's kind of the future of JavaScript. And it's just when there's a library for everything. How do you judge yourself a JavaScript developer? If you're like, oh, I don't I don't know how to do bundling myself, I don't know how to like, create notes for myself, which is, of course, fine. You don't have to know these things anymore. But how far removed? Will we be in the future from just like, oh, I don't know how to do basic things, which we run into in interviews, we run into people that don't know like, how to do a basic query selector on the on the DOM? Yes. They just never. Yeah, so I, yeah, what stage are we going to be like? To put a different analogy, your car mechanic, who doesn't know how compressed combustion engine works, like, you know, to diagnose and like these different things, and how to swap out parts, but you don't actually know how an engine works? Are you still a good mechanic? Or are this something else entirely at this point?

</p>
<p><strong>Stacy London</strong><br />
I mean, this is the ever present question in our field, like, Are you a real web developer like that? They hate this question. Like, it's like driving it. It's belittling to some people. Because when you come into the field, and maybe the pace at which things change, you're always learning something new. And you maybe you're spending all your time trying to learn like in brand new framework or a library to get a you know, keep up with your job. And then maybe there's like basic, some things that you haven't done in a very long time. What's the thing you're going to know really well, at that point, it's going to be the thing you're spending your time on? What is more valuable, it's like, it's, it's more valuable, I think, I personally believe it's more valuable to have like, the foundations there. So like JavaScript, and the basics of CSS and HTML, that stuff, and then you learn frameworks and libraries over time that are all built on top of that. But if you're spending like your entire day job, for years, just being in a framework of some sort, that's gonna be hard than to go into an interview and be like, That's cool. You spent all your time doing that, we're gonna ask you about something you spend all your time doing. And it's like, what this like, it's a conundrum in our industry, I think, Yeah, cuz you

</p>
<p><strong>Ryan Burgess</strong><br />
do get used to it. It's like you've had those fundamentals. But you may not be doing them all the time, right? Someone's like asking you something, you're like, wait, I can't just rely on lodash. I can't just do this, like, in Angular that did this. For me. It's like, oh, I have to write that from scratch. I don't do you want a daily basis?

</p>
<p><strong>Stacy London</strong><br />
And I don't think it's a it's not, it's not it's not good nor bad. It's kind of this like state of our industry, where people are in these different places, and we expect them everyone to be in the same place got like

</p>
<p><strong>Ryan Burgess</strong><br />
what you said, Stacy, of going, you know, to fundamentals of JavaScript. And we do say how important that is. But then even if you're interviewing with a shop that's doing react, and you've been doing Angular or Ember, like for this long, long time, yeah, that can No, you're like bias towards the framework you were just doing. And so now you almost have to, like relearn something. And it can be difficult. Hopefully, you're not getting a ton of questions in an interview that is based around a framework, because that can already put you apart, which we always say just fundamentals, the most important thing you can learn a framework.

</p>
<p><strong>Jem Young</strong><br />
I don't Yeah, but it totally with you. I don't think most people agree. I mean, I think this sounds arrogant, but like, I think we've thought about interviews and like what we look for, we hire people a bit more thoroughly than a lot of other people funny people go in and like, Well, how do you use and reacts? Like, I can do it? But is this really going to show like the depth of my skill here? Show you that?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Oh, it's like if I said, Hey, you can do it and whatever framework or vanilla JavaScript or whatever you would tend to lean on just doing in vanilla JavaScript, so that you can really demonstrate I do know the internals a bit.

</p>
<p><strong>Jem Young</strong><br />
Yeah. I mean, that's what I want. I want someone to Yeah, has like, explored that. And like, Vince, yeah,

</p>
<p><strong>Stacy London</strong><br />
we can't troubleshoot things, either. If you start to understand the lower levels,

</p>
<p><strong>Ryan Burgess</strong><br />
I think that's the important thing is, the more even how you're saying like HTML, CSS, JavaScript, knowing that is so important, because when shit goes wrong with whatever library you're using, yeah, you have to dig in. It doesn't just happen for free.

</p>
<p><strong>Stacy London</strong><br />
And the library makes it I think, really easy to do things poorly, too. So there's, I've seen quite a few react developers, well, quote, react developers write the like, use a div for an anchor, you know, make an Add an On Click to it. You're like, oh, no, that's not how the web works. But like, I don't really know how the web works because I'm a React developer. And I didn't ever like learned, you know what HTML really is. So that's the that's like the reverse side of that. or like, now you're just doing the wrong thing this library is

</p>
<p><strong>Ryan Burgess</strong><br />
allows you to do. Well. And I guess you could still do that in JavaScript. But you're right. It's not the fundamental of in HTML, you know, being accessible. Yeah, all the things that come along with it, or will work without JavaScript, which is the beauty too is like being able to graceful delegation there is like that super helpful. And that's where you should be building things. Just because you can put an on click on on that div. Probably not a good idea.

</p>
<p><strong>Stacy London</strong><br />
Yeah.

</p>
<p><strong>Jem Young</strong><br />
Have you this seems tangential, but promises related? Have you both ever read Snow Crash flick? Back? Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I have not, you should read so crap. All right.

</p>
<p><strong>Jem Young</strong><br />
It's like predates the internet, or the idea of like what we know as modern internet. But like, it actually does a pretty good job describing it. It's like classic and like hacker fiction, things like that. How but anyways, describes the future, the future, programmers are just like, it's a factory job. You're just like putting pieces together. And I was like, what a bleak, depressing future. But then I'd like as we're talking now, I realized, like, that's kind of what a lot of UI engineers do to now they just take a bunch of libraries, they put them together. And they like, write some code to tie it together, and they ship it out. And they're like, I'm an engineer, but like, not not totally most people, is that engineering anymore? Or is it just like you are putting stuff together? Because at some level, we're always putting libraries together and doing something it's just like, depends on the level because we're not writing assembly. Honestly, there's something helping you along,

</p>
<p><strong>Ryan Burgess</strong><br />
right? Well, I've

</p>
<p><strong>Stacy London</strong><br />
met a ton like, not that like front end devs now that have barely written any CSS at all, because they work at places that have like, like React UI component libraries, and they're gluing pieces together. But they almost never write CSS anymore, because that's provided to them. And they're mostly just like, it's like Plumbing, you're like wiring the things together, maybe hooking together the state stuff with Redux, but barely writing any CSS anymore. And then slowly, like not understanding how CSS works, because you don't really have to do it very often and also interesting. And that's delegated out to some other teams, like your React component library team is they're the ones that actually know how to write, you know, CSS and create create these like components. But like some of the other teams, maybe don't do it as much. This industry is like changing,

</p>
<p><strong>Ryan Burgess</strong><br />
rapidly changed. I'm trying to think of, I think it's a problem. In the sense to what your question gem is, like, are you still an engineer, I think you still are of, of taking libraries and putting them together. Or at least in in my thought right now, I don't know, maybe it will become so easy that it's just like plug and play. But right now, it's not that it's like, you still have to tie these things together. We even earlier in the episode mentioned how it gets very complicated. As you're adding, you know, Webpack, and Babel and a server and a framework. And you're putting all these things together, you kind of have to know how they speak to each other. And you do have to know how to tie them together, is they're doing some heavy lifting for you. But you're ultimately having to pull them together and know the right tools for the job. So I think there's still thoughtfulness and engineering that goes around even if you are using those tools. But if it was just like, a button, it's like build website. Yeah, then yeah, I don't that's not engineering. But right now, I think yes. Even though there are all these great libraries and tools that help us that is still engineering, you still have to know how to pull these pieces together and debug it when it doesn't work. Yeah.

</p>
<p><strong>Stacy London</strong><br />
Does your question change, just like engineers, like a recent change in title in the in the years I've been doing web development, it's always been development. He like your web developer, your front end developer. And all sudden, like in the last, I don't know how many years it was like, engineer, or software engineer, engineer, engineer, engineer, and like that was just not in the titles for a long time. Which signed up.

</p>
<p><strong>Ryan Burgess</strong><br />
I think you could, at least in my head, you could replace developer or engineer in GEMS question. And I think that would probably be the same question is like, are you still developer? Are you still an engineer?

</p>
<p><strong>Jem Young</strong><br />
Yeah. That's a great, that's a great point. No, I think engineers and developers are two different things. Like I think we use the titles interchangeably. But I am a software engineer. I don't need to use Java, JavaScript to be a good engineer, like I can switch languages. Yeah, I would still be just as effective. I think engineers think architecture and they think about long term use cases, they think about like performance and thinks about lots of other things. Whereas developer is probably where most or not most, a lot of UI engineers fit because you're putting together code. You need to understand sort of how those libraries work together. But for the most part, you're not thinking about all the considerations that a software engineer with me. Now I know there's plenty of people that probably disagree, but yeah, no, I think I think software developers probably a more accurate term for what most people do interest in green disagree. I O'Brien hold on here. Well,

</p>
<p><strong>Stacy London</strong><br />
actually, well, there's people that will argue about that like, and this is this is now starting to go tangential, but like that engineering is that it's silly that we actually use that as a term in our industry. Because there isn't rigor it there is rigor, but like not the kind of rigor that there is in like civil engineering or industrial engineering where there's like, code, like, I'm trying to think of like standards and things that have to meet certain standards. There's like, well known rules, but I don't

</p>
<p><strong>Ryan Burgess</strong><br />
know like, if you're getting electric work done in your house, electrical engineer, or someone has to approve that, yeah, you don't just can't just be like, Hey, I'm done. And now I'm an engineer. Yeah, it's like you actually have to go through these certifications. Thank you. Yeah, go through certifications.

</p>
<p><strong>Stacy London</strong><br />
And like, we kind of like self rigor. I think like, we have really good engine, like software engineers that have put together like good patterns and practices. And, and we say like, that is good. But we don't have like, there's no certification that says like, this is good, because

</p>
<p><strong>Ryan Burgess</strong><br />
and then we also argue about what is good and what is not. Right. Yeah,

</p>
<p><strong>Stacy London</strong><br />
yeah. So yeah, the title, the title engineer, like, from people that have that title outside of our industry, I think we'll get ours and be like, but what what do you mean, you're an engineer,

</p>
<p><strong>Ryan Burgess</strong><br />
but is that it's interesting, too, because this actually goes to our previous episode, when we were talking about the Internet of Things and like smart devices and jam, you actually said, you're like, there needs to be more, maybe not certifications. But there needs to be a little more rigor, rigor around these products, that anyone can just build them or there could be a bug that shipped and it can be a very detrimental bug. Now You're tiring hardware and software together. So that maybe that is that there, right?

</p>
<p><strong>Stacy London</strong><br />
Something, something I think about a lot like, the titles that we have, and like what role? Yeah, how we define what we do.

</p>
<p><strong>Jem Young</strong><br />
Alright, so but people, I'm sure there's plenty people out there that argue like, I'm a software engineer, yeah, I like I build a lot of UI and I put libraries scalar, things like that. But what I do is very complex. And I wouldn't disagree with that. However, how many steps removes will we be in the future until you can no longer say you're like, I'm a software engineer. Like if you're just like, create react app is a great example of, I can build a website with a button. And I'll put together like some basic things. I changed some text and like, bam, I have a website. Like, for not, as technology regresses, like we get closer and closer to being like, I can build things with one button or one command.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, well, it's not a button. So command. So maybe, maybe once it becomes a button. Yeah.

</p>
<p><strong>Stacy London</strong><br />
Exactly. It's create react App button,

</p>
<p><strong>Ryan Burgess</strong><br />
create react button. And then that might actually now

</p>
<p><strong>Jem Young</strong><br />
begin to Amazon like instant button remotely like a 10 websites while we're sitting in this button. You

</p>
<p><strong>Stacy London</strong><br />
the object also has to be a button because that's very epic. Eject?

</p>
<p><strong>Jem Young</strong><br />
Oh, yeah. Yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
that just deletes the site, or does that ship it?

</p>
<p><strong>Stacy London</strong><br />
No, that ejects you out of the normal configuration and objects even to being an engineer?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Ah, I see what you're saying. So there's two options. That's the easy and the hardest. Alright, I'm interested to know, bring it back to libraries of what do you think about when you're choosing libraries? Like what are some things that you look for think about when you're actually choosing a library in your application? Or at work or whatever you're doing? What do you think?

</p>
<p><strong>Stacy London</strong><br />
In pass in some of my past jobs, I've had to be really methodical about it. And actually, like write like little mini papers, just like with I have grids that say, like, number of stars on GitHub, not that that necessarily means it's good or bad, but like popularity, adoption, good documentation. Is there a good community? Is it has been recently updated, is it like actually continued to be developed and worked on or bugs being fixed? Those are, I think some of the big ones, there's probably more, but those those kind of stand out. And

</p>
<p><strong>Ryan Burgess</strong><br />
those are super important, too. I think even just your point of like, is it still being worked on? Because like, maybe it doesn't need to be maybe it's just bullet proof. And it works. Like sometimes I can think of some small utilities that I use them just does that thing, get a query parameter that something once you've written at once doesn't doesn't necessarily have to change too much. Maybe it does. There's things that may not need to be supported. But then there are the ones that you're like, nobody's touched this for like three years. Probably shouldn't invest a lot of my architecture in something that's come very dependent on and and no one's really actively working on it.

</p>
<p><strong>Jem Young</strong><br />
GitHub stars is interesting because like, it's not a real metric, in my opinion. However, I've seen it used in multiple companies. It's like, well, this, this one has 5000 stars and has like 200 stars. So we keep using it, even though like it's not a reliable metric of anything like I can hit star on any library, and it means literally using it. Yeah. It's like measuring that by hiring someone via followers on GitHub, which I've a couple of your followers on GitHub. I don't know why. I don't I don't even know how many of you probably have a lot, you probably have none.

</p>
<p><strong>Stacy London</strong><br />
I have nothing. I

</p>
<p><strong>Jem Young</strong><br />
get up real fast. Like, I don't know, I'm sure there's people out there that use as a metric for who's a good engineer who's not? Well, I

</p>
<p><strong>Stacy London</strong><br />
hope don't don't do that. I'm sure I'm a terrible engineer, apparently.

</p>
<p><strong>Jem Young</strong><br />
I don't know why anybody calls me on GitHub. I don't do that much in public, a lot of stuff in private repos. But what I look for is, do I need this library? Or is it going on client and server? Do you understand exactly what this library is doing? Am I using just one function, this library? Is it something that we can write ourselves and or this library handles like a lot of edge cases like lodash? is great for that? Yeah. And I was like, a lot of edge cases that people don't think about how well it's maintained, like you said, like, is there a lot of documentation on it's kind of a lot, because in the library, when casually trying to get my side project now NPM, install everything? Like, I don't know why it's not a command. It's like, give me all of NPM. And I'll just hold hold right now, I might, I might need this. But client side, I'm probably more rigorous as 16 hours guessing earlier about, like, package bloat and things like that. Like,

</p>
<p><strong>Stacy London</strong><br />
that's a that's one. Yep. footprint. Yeah. Yeah. This library that I'm bringing in, but that can be like, somewhat of a false thing to look at to say like, one time I was talking to someone, they're comparing, like React, and Ember and Angular and like, some of these big, big frameworks, slash libraries. And they're like, Oh, well, React is so tiny. Like, that's the winner, compared to like these other ones that were bigger. And you're like, well, that is tiny, because it's like a small piece of the thing like embers, all of it at Angular is probably all of it. But once you add in the other libraries you're gonna need with React, perhaps, to do the things you want to do, you might end up adding up to like the same footprint size as these other frameworks that you're comparing it against.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And the other way to you could remove some of those things that you're not using. Yeah. Angular Ember, yeah. And they don't need it. Exactly. I was actually going to say like, File Size does matter. But that's also an argument where you need to really think about what you need and what you don't. Because if you are comparing three different pieces, well, you have to add another does it have everything you need? Well, no, I've got to add in this library in this library. Well, now that library that you first were comparing against those other two are now big might actually be about the same. So that could be something that you have to really think through. Definitely a trade off this.

</p>
<p><strong>Jem Young</strong><br />
I'd also say if you're, if I was building something, and I knew it was gonna be big and complex, like its own framework, I would minimize my use of libraries. Because let's say you build this giant framework, and then one of your dependencies is broken completely. What do you do now? Because you've now broken the framework, and should you have to refactor. So? I wouldn't, I wouldn't think I don't know if that's true. But I would think like the the more popular react or any other massive libraries and frameworks get, the less dependencies they tend to have over time, because like, you just can't take that chance of dependency breaking, and then it breaks down the line. Yeah, far below the framework, I would do like as few dependencies as possible.

</p>
<p><strong>Ryan Burgess</strong><br />
You know, it's an also an interesting thing that we honestly didn't call out as a library, jQuery, which, honestly, is such a classic library. And like, I know, we rag on it nowadays, but it was so good. Like, it was so powerful. I feel like JavaScript is so important now, because of jQuery. I didn't like JavaScript before jQuery, because it was such a pain in the ass because you had to try and support all these different browsers. It wasn't easy to do jQuery really solve that where you're like, oh, no, I can write JavaScript and it will work across the board. And so that, to me, is a pretty powerful library, just calling it out there as much shade as we throw at it now. It's like it got us to where we are today.

</p>
<p><strong>Stacy London</strong><br />
Yeah, it was. It was a huge, like paradigm shift. And the web. I mean, that was brought so many people into the field that maybe weren't super hardcore parameters, but they could understand jQuery. I mean, it open brought more people into the field got people more interested in doing web development. All of that is it's the platform is popular because it was easy to get into.

</p>
<p><strong>Ryan Burgess</strong><br />
So before we like jump into picks, what advice would you give to someone the next time that they're looking to choose a library I know we've talked about various things We look for but what are some things advice that you would give someone who's thinking about using a library?

</p>
<p><strong>Stacy London</strong><br />
I suppose I go more abstract I like back away from that even question and just be like, well, what are you trying to do? And then figure that out first. And so, like, Oh, I'm trying to build my personal project. So I can learn react? Because I don't know it. Okay, cool, then you should use React, obviously, because that's the point of what you're trying to do. Or I am trying to build something for a small business that is an E commerce site that they need to build a shopping cart and whatever. Okay, don't build that from scratch, probably use a framework that's out there that is amazing for that. And maybe use one that lets has a nice interface so that they can maintain it after you leave, because you're not going to be around for a while or
 
don't want to be Yeah.

</p>
<p><strong>Stacy London</strong><br />
So it's it's super dependent, I think on it's not about just the frame, the library, the framework, it's like, what why, what are you trying to build and why and what you're trying to sell? Who's gonna be around to support it? And is there? Is it gonna be just you or a team? Like, all those questions?

</p>
<p><strong>Jem Young</strong><br />
I love that the what's the problem? Trying to solve like that? Spoken like a true senior? I don't think enough people do that. They're like, I'm gonna use this. I'm gonna use Mocha is popular. What problem are you trying to solve? I need to write more tests. Okay, this semester, like, but like, Yeah, and if you're like, that's a lot of work to think about. I just want to NPM saw library I'm like, Yes, that's what software engineering is, though. Like, we have to think about

</p>
<p><strong>Ryan Burgess</strong><br />
thinking about, yeah, the choices you make, how do they scale? How do they live within? Like, even Stacey mentioned a team? How, like, how do they scale in that way with the team? But how do they work for you for years to come? Because I'm sorry, we're not changing a framework or library every other day? Because some cool new one came out that that's very costly to do. And so you need to think about it as like, how does this scale, what support is around this library, all those things really, really matter? It's the time that you're having to put into it upfront, is worth it in the long run. So it is this very easy to npm install. But hopefully, you've taken some thoughtfulness around it before just hitting that command. Another thing I was going to mention being within a team and I think Stacy, you kind of said that is that you at other companies, you would you know write up this doc, basically of like, why you should use it. I think sometimes depending on how much rigor you need to do around choosing a library, I think a doc is super helpful, like outline the pros and cons, why you're choosing it, this is the problem I'm trying to solve. These are the reasons why it might not be the best choice, or, you know, outlining three other options and kind of seeing what the pros and cons are, and really coming to that conclusion. I think approaching the problem that way is very, very helpful. You can then share that doc with your team or other stakeholders, whoever needs to be involved in that. And you've already kind of outlined it for them, they can comment and question things as well. But then you're ultimately hopefully coming to a really, really strong conclusion to the right answer to use the library or not.

</p>
<p><strong>Stacy London</strong><br />
Mm hmm. Yeah, you have like a decent sized team, if you don't have the buy ins, not the right word. But like if people are not in it with you on that, like, you can't just unilaterally be like, we're gonna do this. I don't care if you if you like it or not, what do you

</p>
<p><strong>Ryan Burgess</strong><br />
really likes that

</p>
<p><strong>Jem Young</strong><br />
developer

</p>
<p><strong>Stacy London</strong><br />
is not a cool developer.

</p>
<p><strong>Jem Young</strong><br />
But you both think it sounds so easy, but I think this one, the more difficult things you do in software engineering is like getting rid of your bias. It's like I've used just before so if you say we're gonna use Mocha, or Eva, Eva, or, I mean, they're all different things. But like avoiding that bias towards things you've already used before, in favor of like, what's better for the team is really, really hard to do. It's, it's one of the more difficult things to do in software, because you're like, Well, I want to use the thing I'm good at. And I already know the ins and outs, but the team may be better to do this. And it may be better in the long term to do this.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm going to say it but it's a trade off. Is that your cheers? Cheers. Yeah, having to think about that as because that ramp up time for you or the rest of the team could be very costly, or it might not be so you may think this might be the better option long term, but it's going to cost us a lot up front. That might not work for you. It may it's those are the things you have to really figure out and discuss. So yeah, that's that's a tough one. Yeah, I think you're right. It's not that easy. I think also sometimes too, is the people that don't have teams and team members to bounce ideas off, get creative. Ask the internet, post something on Twitter, like, just ask people and you know, get their opinions on it. That can always be helpful too. At the end of each episode, we like to share pics of things that we found interesting and would like to share with our listeners. Let's go around the table and share today's picks. Stacey, you want to start it off?

</p>
<p><strong>Stacy London</strong><br />
Sure. Okay, so two picks. The first one and this one is It's like kind of been out there for a little bit. But I thought it was really clever. It's called itty bitty. It's a it's like they think of like URL shorteners or you know, like, yeah, Bitly, or whatever those it's itty bitty. But it's the The fascinating part about it. It's like a self contained microsite, and it exists only as a URL. So everything that you see on the site, when you load it up is actually been encoded into the URL. So there's only so much you can put in it and only so much your web page could have on it because of that. But basically, it's everything that's on the webpage. This is a URL compressed, it's compressed what's known as the LC Lempel Ziv Markov chain algorithm. I have no idea what that is. But that's the algorithm that's used to do this compression. It's just kind of like a trick, you know, and but I thought it was kind of clever and thing kind of cool that you could like, share a URL with someone and that's the entire thing. The the webpage is encrypt encoded in that.

</p>
<p><strong>Ryan Burgess</strong><br />
This is really cool. I could think of some good use cases for that. Yeah.

</p>
<p><strong>Stacy London</strong><br />
So that's the first pick. The second one is music pick, and it's a track called dust by Nicola. Forget that book. If I hope I mispronouncing I'm sure, but it's techno. He's a producer musician, as I was really good track. He's been producing music for a long time. Yeah, good. Good stuff. Check it out for good for coding.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome jam. Where do you have

</p>
<p><strong>Jem Young</strong><br />
three picks at CCU your music picks for like almost always like, they resonate with me very

</p>
<p><strong>Stacy London</strong><br />
well. Oh, nice, good.

</p>
<p><strong>Jem Young</strong><br />
My first pick is, well, it's like a, it's a mini book, almost. It's called the hallway guide to equity compensation. And this actually comes up quite a bit, especially in the world of startups, or any software engineering job or part of your conversation is likely in equity. It is very long it is. I'm still scrolling, I'm still scrolling. It is extremely long and complex and deep. But I wouldn't say I've read all of it. I'm like 10, like a half, but it's like a good go to the site's really well put together. It's worth checking out. But it's good to understand equity compensation a bit because like, that's part of what you do for a living and get paid. And understanding that and not getting ripped off is important that probably we don't spend enough time thinking about in our day to day. My second pick is a game I've been playing recently. It's called Warframe. It's kind of an older game, relatively, it's been around for a while up there with not as old as Warcraft, but it's pretty old as a free to play game. But it's not one of those like you have to pay to win. It's very, very, very complex. I've been described, I'll describe it. It's like it's it's been described as space ninjas with magic. That's probably the best way of it's a great way to describe describing it. If you've been on PC gaming for a while. You've probably heard of it. But I've been playing. It's pretty fun. It's kind of a grind. But it is it's a lot of fun so far. And my third pick for Valley silicon. That is the part where I say like these things shouldn't exist. It's my favorite. Because people out there have too much money, mostly us here in Silicon Valley. Please pick and this was sent to me by one of our listeners. It's chicken diapers. So you've heard of for real chickens. Yes. You've heard of urban chickens. Right? It's like yeah, thing you have chickens in your because they're pretty easy to maintain for understand. Yeah, yeah. So there are companies that sell diapers, luxury diapers for chickens, but apparently, these are just diapers. These are luxury, expensive diapers. People like take pictures of their chicken. Like, look how cool my chicken is on Instagram. And it's like a thing.

</p>
<p><strong>Ryan Burgess</strong><br />
Who sees these chickens? Other than Instagram? Apparently, people.

</p>
<p><strong>Jem Young</strong><br />
It's enough there. There are multiple companies that will sell you not just chicken diapers but luxury. High end handmade artisanal chicken diapers. What? Yeah, yes, people have too much money. People have too much money for the chickens. This high end about them. They're just fancy.

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I guess it's the same thing. It's like high end clothes or something. Maybe it's like some very

</p>
<p><strong>Stacy London</strong><br />
bye. Bye Gabbana like,

</p>
<p><strong>Jem Young</strong><br />
soon. But yeah, I know. I love doing it too, because these things are just ridiculous.

</p>
<p><strong>Ryan Burgess</strong><br />
Wow, that's amazing. I love that people are now sharing these things with you. That's great.

</p>
<p><strong>Stacy London</strong><br />
I can't wait.

</p>
<p><strong>Jem Young</strong><br />
I appreciate these these links. And it's just so ridiculous.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, well, I have two picks. One is a Mac app called clean shot. I don't know how many times you This probably happens to you enough. There's you'll have to take a screenshot of something. And you're nice, ugly background on your desktop is covered in a bunch of icons from all the mess that you have there. Well, this actually when you do screenshots with your background, or your desktop will actually clean itself. It hides all the icons, so it just keeps the beautiful picture on the background. I thought was genius. So I was like, What a smart little thing to have. So yeah, next time you have to take screenshot, and you want your desktop in the background, it doesn't have to have all the little icons. Then my second pick is a book I just read called. So you want to talk about race. It was an amazing read some very, very powerful stories in the book. The author shares a lot of interesting stories of her life growing up, and the things that she experienced. It was just really eye opening. She's just like so honest in the book, which is really, it's great. I highly recommend checking that book out before we end the episode. Where can people get in touch with you Stacy?

</p>
<p><strong>Stacy London</strong><br />
Stacy Londoner on Twitter?

</p>
<p><strong>Jem Young</strong><br />
I'm Jem Young on Twitter.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm Burgess D. Ryan on Twitter. Thank you all for listening today's episode, make sure to subscribe to us on wherever you listen to your podcasts on and follow us on Twitter at front end. Ah, any last words?

</p>
<p><strong>Jem Young</strong><br />
React is a library not a framework.

</p>
`;
        return transcript;
    };