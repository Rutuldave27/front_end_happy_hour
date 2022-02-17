// Episode 77 transcript
module.exports = function() {
  'use strict';
  const transcript = `
  
<p><strong>Ryan Burgess</strong><br />
  Welcome to a brand new episode of the front end happier podcast. In this episode, we are joined by our stunning colleagues that are project managers Michael Spiegelman Cathy Conk, and Eddy Wu to talk with us about what it's like to be a product manager, and how engineers and product managers can work really well together, Michael and Cathy and Eddie, can you give us brief introductions of who you are, what you do and what your favorite happier beverage is? 
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  Sure, I can start so my name is Michael Spiegelman. I lead the global growth product team here at Netflix. But Netflix for almost nine years and my favorite happy hour beverage. Well, my favorite beverage in general is wine. So I'm gonna stick with that. Is there a favorite wine that could take the river of this this session. So, all you know, I'll just leave it as very good wines, preferably French in California, but also exploring Italian. Right. Oh, Kathy.
  
  </p>
<p><strong>Cathy Conk</strong><br />
  Hi, I'm Cathy Conk. I'm a product manager on the growth team working on Michael's team here at Netflix. And my favorite drink is a virgin mohito. Today I'm drinking water.
  
  </p>
<p><strong>Eddy Wu</strong><br />
  Right on, Eddy, I have to first say that I love your podcast voice Ryan. I'm really enjoying it right now. This wasn't I wasn't sold this as a reason to come to this. I would do it just for that reason to stay. So my name is Eddy, as you mentioned, I'm a growth Product Manager. I've been at Netflix for about seven and a half years. And I work on the growth team on things like onboarding, login and registration and language related behaviors and whatnot.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  And you get stuck working with us sometimes. 
  
  </p>
<p><strong>Eddy Wu</strong><br />
  Yes, I wouldn't, I wouldn't call it stuck especially if you just talk in this voice all the time. My favorite happy hour beverage when I'm drinking right now is a Hello Hi watermelon 21st amendment brewery, which I was just saying when we walked in is always like a good reminder that summer is coming. If you've seen the most recent episode of Game of Thrones, I guess that's also another good marker. So,
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  before all right, Jem, you want to give introduction,
  
  </p>
<p><strong>Jem Young</strong><br />
  Jem young senior software engineer at Netflix.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode of the front end, happy hour podcast. We'd like to choose a keyword that if it's mentioned at all, we will all take a drink. What did we decide today's keyword is ownership or ownership owned any anytime we say some sort of the ownership word, we will all take a drink. All right, let's jump right in. How would you describe the role of a product manager? Like what what do you guys do?
  
  </p>
<p><strong>Cathy Conk</strong><br />
  Do you mean other than go to meetings?
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Yeah, I mean, I see you in meetings. But yeah, what else? Is it as a product manager?
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  Cathy, you want to start us off?
  
  </p>
<p><strong>Cathy Conk</strong><br />
  Sure. I feel like I'm gonna end up with us taking a drink immediately.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  why he chose water?
  
  </p>
<p><strong>Cathy Conk</strong><br />
  Yeah, I think the role of a product manager is to be responsible for an area of the product, setting the strategy, the roadmap, and really ensuring that all the great ideas that the team has can filter into the prioritization and then supporting the team who does all the work to actually build things ensure that designers, the researchers, engineers have what they need to create all the amazing stuff that we come up with,
  
  </p>
<p><strong>Eddy Wu</strong><br />
  when I you know, talk to candidates about it, or when I think about, like, what I should be doing every day, I mostly Think of it as trying to figure out ways to make the customer experience better. in a particular area, you know, again, we've kind of split up ownership of a different areas, so we're not stepping in through his toes all the time. But when it comes down to it, that's kind of I think, what I think of is what we do, and then there's obviously a lot of how that goes into it.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  Now. That's right. And I think it's, you know, sitting between, as Edie was saying, you know, creating a great customer experience, and knowing enough about, you know, that experience to really be able to determine what are good ideas, being fluid enough in the business to figure out how to It overall impact Netflix's business and move us forward. And then you know, understanding at least a little bit about technology. So we can be conversant and talk to you all about the actual how of getting there, and then be able to make those trade off decisions between, you know, how can we improve the customer experience, but also get things out, you know, relatively quickly, because that's can be meaningful and knowing when to make different trade offs between how long you should invest in something, versus making it better versus a kind of a business battle have? No, I think that's really good to call it too. And I think each of you in a way touched on is like the relationship that you have with designers and engineers in order to help get your ideas out the door. One thing two, I think that you've all really done well, like worked with all three of you is also asking the right questions to better understand like to really form an opinion. It's not just like, this is the direction we're headed. You're also like really asking the right questions to better understand and get input from others from the teams and from the company to know what are the right things that we should be going after,
  
  </p>
<p><strong>Jem Young</strong><br />
  as an engineer my view of what a product meant Manager is his people that someone that takes the time and thinks like very, very strategically, like much further down the road. As an engineer, I care about getting a particular project out the door or like item or feature, whatever, versus the product manager, someone who's like, No, we've thought about two years out where we want to be. And it's like, much more strategic than everybody. So you have like the more 10,000 foot view. And sometimes you have to zoom in, and sometimes you have zoom out even further. That's my view. As an engineer.
  
  </p>
<p><strong>Cathy Conk</strong><br />
  I feel like when I tell people I'm already thinking about my 2020 priorities, I get like funny looks from them. But the reality is, I'm already thinking about what are we going to be working on next year, because I need to start planning that now.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  Right, which is good for us as engineers, cuz that means we will have work to do. By the way, what followed Jem's beginning of when I think about what a product manager does was much kinder than I think that I
  
  probably need to be so I'm glad you thought. Not just people who make my life very difficult.
  
  </p>
<p><strong>Jem Young</strong><br />
  We'll get to that.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  This is the first question real early.
  
  </p>
<p><strong>Eddy Wu</strong><br />
  Yeah. I mean, I mean, one thing that I think it's interesting about how, like a slightly different experience I've had Netflix versus at other companies I've worked with at the past in the past is that, you know, we certainly do want to do some of this roadmapping and trying to getting ahead of things and having a strategic view of where we want to be, but also being really flexible about, you know, because our, our culture of, you know, building the product, so experimentation, focus, so there's a lot of, you know, inherent uncertainty in that. And there's a lot of like, Okay, well, we think that this is a high priority, and we're gonna get a lot of leverage and, you know, investing in this particular direction and taking the product, but then if, after a few tests that that is not working out, we might shift, you know, pretty rapidly and it's not like someone's like, Oh, well, that wasn't on the roadmap. So now you can do it. Like I think we're all structured to be super, super flexible in terms of, you know, finding those biggest opportunities when they come up,
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  right. I mean, I think is that he's saying, you know, one of the sort of unique I think was That Product Manager works at Netflix is, you know, in some places, there's a much more top down down driven strategy. And you're seeking to enable that. And further that. And here we have a very experimentation driven strategy, where we can have, you know, three or four very different ideas about where our different areas where our products can go. And we're testing into each of those and seeing which one of those Do you know, through a B testing proves to be really viable or not. And so partway through maybe decide, hey, we had these three big ideas going into the year one of them's really not working out, one of them's really paying off. So let's shift our resource and focus to things that are paying off. And I think then we really, you know, is that he was mentioning a really optimized for that flexibility, and that ability to pivot very quickly and go after that things it's working out. And then we may rethink the thing that wasn't working out and try another stab at it. But we're not locked into. Let's try and make this work or here's what we set out for the year. Or here's we commit to do this in q3. So we're going to do it in q3. It's like it's we really kind of read the results of this experimentation and follow where that is telling us to go. Yeah, I think even on from the engineering perspective I've always really respected and enjoyed for and rest of our team like we're along for the ride. It's not just Hey, we had this roadmap, and now you're telling us to pivot. It's really like we're seeing these tests and really understanding how the metrics are playing out and saying, Yeah, this makes sense. We need to pivot or no, we need to double down on this area. And I think that's really useful too, is it's like, we feel more like a partner, instead of like, here's a spec, go build it, which has always been good. I'd be interested to know this is more of an actual question, not as the discussion is more, hearing more about what your path to becoming a manager or product manager was? Because there you kind of come at it from all different directions. So I'm interested to hear all three or perspectives.
  
  </p>
<p><strong>Eddy Wu</strong><br />
  Yeah, sure. So I would say I probably have, I'm trying to remember I probably have one of the more traditional paths out of the people who are here. So I went to college, I studied computer science, it was here in the Bay Area. And you know, when I graduated, it was 2004. And so I it seemed like Probably roughly 70% of my classmates, were going to Google which had, you know, been founded a couple of years before that at the time. And so, you know, I knew that I wanted to work in technology, I had a pretty good sense of, you know, what a software engineer does, like during the day. I mean, it's obviously very different, you know, studying, you know, writing code in school versus writing code at a company. But at the end of the day, you're building something like, you know, what you're responsible for, I had no idea what the hell like a marketing manager or product manager did like all day, all day. And I was like, well, these are people who have jobs too. So actually try to figure out, figure that out, you know, if you can remember, you know, late mid 2000s. in Silicon Valley, everyone wants to do a startup. And so part of my thought process was, you know, well, I should understand kind of more of these business things if I ever want to do anything like that. And so I ended up taking a position at a company code into it and make QuickBooks personal finance software admins TurboTax etc. And it was actually in a rotational program. So it was a two year program. And we did six month rotations through a bunch of different functions. So it included like engineering marketing pm corporate strategy. So it gave me kind of a really good like overview of kind of like living the life of you know, all these different roles, and then ended up out of those. I liked the product management the best, and I did it. I should mention that the first three months were in that program, we actually the first thing was support. So we actually, yeah, we also we all went down to the Tucson call center. And literally, you know, took training on QuickBooks small business software support and like, Man that the phones for you know, six weeks or so and really felt customer pain, I would say. So, so and then before we came back up to, you know, the Bay Area and then kind of had our corporate jobs there. So that was kind of how I got started,
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  right. And I feel like maybe we need to do this is onboarding is making all Netflix employees go to the customer service and spend time on the phone.
  
  </p>
<p><strong>Eddy Wu</strong><br />
  Yeah, yeah. We used to Do that I think like way back. But you know, now that we're bigger, it's not as common, but we do definitely encourage people to kind of cycle through. And I think we have definitely, we used to have mechanisms where you could literally just like listen to calls and stuff like from here. And I use theoretically I mean, we have like chat support and stuff like we could set up a program where employees could just, you know, take support contacts and see,
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  feel the pain. Yeah. Kathy, how about yourself.
  
  </p>
<p><strong>Cathy Conk</strong><br />
  So I came from a marketing background prior to coming to Netflix. My degree was in history. My first job I worked for Geico and I actually also spent time in a call center. Taking reports of claims from people who called in was my first job because they hired me, and I had no idea what I wanted to do with my life. And through several different job changes. I ended up working in email marketing, and it worked out nicely for me because it's the probably the part of marketing, digital marketing and then even email marketing in particular, that is the most experimentation driven Most data driven, most AV test driven. So I had a lot of that experience when I came to Netflix and I was actually hired at Netflix into marketing to be an email marketing manager. And then about a month and a half later, they did a huge reorganization. And I got moved into product. And so I then became a product manager and then kind of started to learn how product worked at Netflix, how it was different than some of the things that I had done and worked on at, you know, kind of from a marketing perspective, I think the data and experimentation piece of it was similar. I think the scalability, repeatability global bill global piece of it was a little bit different.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  Very cool, Michael. So I'm also more on the non traditional side. So I grew up when I graduated, my degree was in international relations, and I thought I'd be in like the Foreign Service or something like that. And then I ended up you know, but that wasn't like an immediate job option when I was a freshly graduated undergrad. And so I ended up getting a job in managing, consulting, but working with a lot of public sector organizations way of fulfilling my interest in, in government and how it worked, and I did that for a few years, and this is like in the late 90s. And you know, a lot of internet tech was getting going, but I had no background in technology, nothing whatsoever. I was not the kid who like built computers in the garage or anything like that. It was like, probably was like quite the opposite. But a colleague of mine from consulting had gone into this internet consulting company. And she hired me into that in 2000 at a time when, like, I didn't have any experience in it, but like nobody really did. So it wasn't that much of a barrier. And so I was, you know, doing internet strategy consulting, and then the.com bust that company fell apart. And then with some colleagues, we start our own kind of website design and development company, and did that for a couple years. And that's kind of when I started doing a sort of quasi pm role because someone needed to figure out like what we're building for clients. And also as a note of consistency. I did a pride didn't work in a call center. But I did a project that was about being our call center work. So I do have some call center time. And then after a couple years of doing that, you know, we sort of built up the business but then for a couple reasons start to fall apart. And so we decided to split up and I got hi through a friend, I got hired into Yahoo to be a product manager in the music group. And so that was my entree into into product management. And he essentially asked me, like, would you want to be a product manager? And I'm like, Well, I have no idea what that is. But it sounds like something I could probably figure it out. And so I spent six and a half years ago who was in the in the product world before getting hired into Netflix. So it sounds like there's like a requirement you have to be at some sort of call center or something in a call center at some point but it is a good way to ground yourself and what really those customer pain point issues and to realize that you know, a lot of the customer service representatives have some of the toughest and you know, jobs around each of you have worked on various products and I'm interested to know what's needed to create is a successful product? Like what? What do you think about as a product manager that needs to be created for a successful product?
  
  </p>
<p><strong>Eddy Wu</strong><br />
  I mean, I think one of the things, I mean, just, you know, we were joking about it. But, you know, I think maybe one of the themes around the call center is that, like, it does help you get a deep understanding of customers. And I think I always think of that as the, the foundation of everything that we do is trying to understand customers and customer needs as deeply as we can. So that we can then you know, leverage those to generate ideas about what's going to drive the business forward, and how can you you know, do something that's going to make customers happier and more likely to retain with Netflix and or you know, any other product that you would work on? So I would say that that's probably where I would start with. Yeah, I
  
  </p>
<p><strong>Cathy Conk</strong><br />
  agree. I think it's about the first thing is are you building something that is solving your customer need or a customer problem? And that that's where you've got to start? I mean, whether you're if you're creating a start up a new business, it's like is the business that you're creating, solving for a customer need or problem and then if you're optimizing an existing business, what are the pain points customers have Or the opportunities to fulfill a need. And it's also digging into not what customers say they need, but what they actually need, which can, you know,
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  kind of hard to figure out, it can
  
  </p>
<p><strong>Cathy Conk</strong><br />
  be very hard. So it's kind of how you can read between the lines work with a great research partner to really understand what they need, not what they say.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  Yeah. And I think it's similar to what Kathleen Eddie were saying, it's, you know, I think of it from the sort of Clayton Christensen perspective of, you know, what job is a customer hiring your product to do? And how can you do that really well? And what do they really, really, really need from you versus again, what do people say? What do people feel or how do they express it? And how do you get to like the bottom of the essence of what that problem is, and then figure out a way you can, you could solve that as best as possible. And I think for us, it's being able to balance you know, understanding that kind of having that customer empathy, but also being able to translate it to something that's like really workable, and sometimes what people how people are expressing something isn't exactly always how you need to solve the problem, but You need to like be able to kind of get into the people shoes and see it from their perspectives, and then translate it into maybe several different ways you could solve that problem and figure out which one is the best at actually doing it also sounds like there's a lot of ownership. 
  
  We had studiously somehow avoided that,
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  yeah, had to throw that one in there.
  
  </p>
<p><strong>Jem Young</strong><br />
  In my experience, what I've seen people create successful and unsuccessful products is about balancing priorities. Kathy said, you have to know and I think you all touched on it. It's like you have to know how to distill what people are saying from what they actually want. And Silicon Valley is littered with plenty of examples of great ideas that were just either executed poorly or executed too late, or feature creep, where it's like, oh, but if you have this one feature, we would definitely buy your product. And then the engineers all shift and I've seen that so many times. So what I think about building a successful product, just juggling juggling priorities and knowing like, well, engineering is like yeah, we're Sort of happy there's some bugs. You're like cool designs like yeah, it's not as beautiful as we'd like. You're like cool and then like it get out the door like ship it. That's the right state you want to be when everybody's happy then like, it's probably
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  right. I think to your point is like the prioritization is super important. It's like being ruthless on like, what are you focused on? Because I've definitely worked at companies where it was like this broad idea, or this massive feature that everyone just can continue down that path that like, we should just keep working on this because it was like the sunk cost, when really, there's probably other valuable priorities or something that was more impactful that we should be going after that sunk costs just continued to creep and creep and creep, someone probably should have said, we need to reprioritize and rethink along those lines as well. I mean, you know, those those kind of things are fairly endemic because it's easy, you know, to want to perfectly solve the problem and it's easy to keep layering things on to it. But I think, you know, one of the things that we try and have here and it's always attention and doing it is a lot of focus, and and try and do it You know something really well versus doing many things in a, in sort of more half assed way, it's a challenge, because there are always lots of opportunities. And we're always pulled in a lot of different directions. But you know that, that prioritization is crucial around, like, what's the one thing we really want people to be able to do right now? And how do we spend the right amount of time on getting a concept to be really right and getting the solution to be really, really, really right, you know, other before executing, or while we're going through it and be able to say, like, No, that doesn't feel quite right, this is a better way of solving it. And so getting to that point, and at the same time, as Jen mentioned, there's so there's always the you know, sometimes better as the enemy of good enough and if you're really trying to solve a customer problem, you know, having something that is like, you know, that is amazing and wonderful but is not getting out for a year doesn't really solve anybody's problem and have getting something out that starts to solve that problem. Even if it's not fully doing everything you want, can be a lot more valuable. Also because you can kind of learn as you go cuz I know like with our actually, you know, at Netflix A B testing is what we're doing is and you can iterate on Maybe you wouldn't you thought it was the best approach to go build this perfect feature. But it really wasn't. And and so if you incrementally get there, it's like, you might pivot a little bit. And so I think that's really important as well to really help build a better product.
  
  </p>
<p><strong>Eddy Wu</strong><br />
  Yeah. And I think it's also like better or best, I think, is also like, very context dependent, right. So I think that's important for everyone to understand is that, like, it's not always the same, right? And so, you know, the product that you want to build that's like, you know, like, the best product for software engineers who live in Silicon Valley is probably not the best product for, you know, people, you know, some mainstream audience that lives in, you know, Sacramento or Oklahoma or whatever. And so it's, it's helpful to kind of understand the, the, your customer base, right and where you think that growth is going to come from. So you make sure that you want to build for that base, right? Like, you know, Linux is a great operating system for lots of people, but not for not for everyone, right?
  
  </p>
<p><strong>Jem Young</strong><br />
  the noisiest group online to yeah Version coming in? Oh, yeah.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  I think that, you know, even talking about we talked about, like qualitative research, we're, you know, talking with customers and everything is kind of have to take that with a grain of salt to, you know, to that point is like if you went and read all the Linux comments and requests for features, and why aren't you doing this like that could really distract from the core reason or what you're trying to achieve in the business. So I think even as product managers, I am sure you often hear a lot of great ideas. And it's really about how do you focus and keep focus on the things that we should be going after. So I think that that's another area where I think that helps create a better product. So I'm interested, as you know, as an engineering podcast is, I want to know, like product managers, like from engineers and designers when you're working with what's that relationship look like? What do you want to see from us to be great engineers.
  
  I mean, considering we're sitting with two engineers on the engineering floor, we're gonna have
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  lots of people that are watching
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  We better be careful. But how we approach this? 
  
  </p>
<p><strong>Eddy Wu</strong><br />
  Yeah, well, you should pick up your drinks. And I'm about to say ownership, like about billion dollars. So, but in seriousness, I think that is, you know, probably the number one thing that like, I think helps differentiate kind of a good engineer from our great engineer that that we work with, unfortunately, at Netflix, we have a lot of great engineers, you know, you running a project is complicated, right? And I think, at Netflix, we don't really have too many project managers, right, like people whose jobs is mostly to keep a project on schedule, we consider that to be part of, you know, some of kind of everyone's jobs that's on the that's working on particular project. And so certainly the product manager, you know, we have some, you know, oversight over that. But then, you know, we it's really much less efficient for us to keep track of all the dependencies, you know, you know, we're obviously, as you guys know, a very service oriented team. So, there's a A lot of different, you know, about dev teams that are involved in any any given project, you know, ranging from, I mean, at at least probably two for anything. And then up to, you know, 20 right is probably a kind of like, sometimes some of these things are pretty deep effects. And, you know, tracking all these dependencies, figuring out like, when something will be done and things like that, like, there's just a big difference between an engineer that's like, Oh, well, I asked for something from this other team, or I need them to build an endpoint for me. I already asked for it. They said it'd be done next week. And then it hasn't really come come in. But you know, I'll just either wait for the project manager to go ask them about it or wait till the next team meeting, or someone who like goes to that team. It's like, Hey, I thought I was going to have this by Tuesday. It's now Thursday. You know, where is it? Or even better, it's like, Hey, are you still on track to have this on Tuesday? So I have because you think about it, it's like on 15 different if it's a 15 person team or across different teams, every one of those days, right? Even if things are one day delayed. Now. You're Two weeks behind what you thought you were going to be, and not in a productive way either, right Justin kind of coordination way. And so I think that mindset of like, Hey, I'm trying to get this done with as high quality and as fast as I can and everyone on the team having that, I think makes a big difference that you it's, you know, hard to match that even if you have the best project management in the world.
  
  </p>
<p><strong>Cathy Conk</strong><br />
  I think in addition to that, the thing that I really love from an engineer is their enthusiasm for the customer experience in particular, that, you know, it's going to be different for all different kinds of engineers, but we're primarily working with front end engineers, and working on a customer experience. And so engineers who are super excited about what is that customer problem, how they're helping to solve it, excited about the A B test and the experimentation that we're doing to make it an even better experience for our members and our prospective members. really helps the relationship because it makes them the engineer and the pm feel more like a team kind of moving towards the same objective that it's not just about kind of the code and the functionality, but it's about, you know, the end user at the end of the day.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  Yeah, one of the first, you know, meetings that I had, when I joined Netflix, I was, you know, coming up with an idea. And we were like, kind of pitching it to the, you know, presenting to the junior team that there was gonna be involved and like just the level of questions that people asked about, what's the rationale, you know, asked about the details is really the best way of getting to it. We're kind of like poking on things in a way that showed that they really cared about what the ultimate experience was, they weren't just going to take, you know, my word for it about like, here's what we should be doing, I think showed that kind of level of involvement and passionate about it. So like having any we're saying that sort of that involvement, that sense of responsibility.
  
  Like a, I'll just say it owner. Is, is I think, pretty huge. And I think we love it, not just when people are able to make our ideas better or be able to figure out how to make them be executed better, but also when they're coming up with it with ideas on their own. And like Jem and I have worked together over the past couple years. And you know, one point I remember checking in with Jem on a project, he was like, Oh, yeah, he's like that I got what I really interested in next to this idea. I have the next test that we could do. I was like, Okay,
  
  </p>
<p><strong>Jem Young</strong><br />
  that sounds like me. All right.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  My job here is done. I got it. Now I have the engineers coming up with the idea. I'm good. So but seeing that kind of, you know, just shows a level of enthusiasm, which is like, okay, yeah, like I'm excited about we're doing right now. But it's like the next step after that, that I'm even, you know, more excited about we can do it and how we build on that to do something. You know, even more interesting,
  
  </p>
<p><strong>Cathy Conk</strong><br />
  I think I would be pretty terrified. If my job was I was the only one that came up with any ideas ever. And then everyone just worked on what I came up with, because I'm just one person, and everyone has great ideas. And so I think it helps that we're a culture that the PMS are open to the ideas and then that encourages the engineers to come up with them, bring them to us and then kind of add that as part The test that we were planning or even pull something into a brand new test that was kind of just from an idea from an engineer or a designer or someone else on the team.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  That's right. And as we're saying, you know, our job is to really prioritize, but it's not to be the sole, you know, creator of the ideas. And so we're really curating and saying some of the ideas may be ours, some come for the design team, some from the engineering team, some from analysts, etc. And then, you know, having some sense of like, Okay, well, what do we think the probability of success of this idea times the possible impact would it have, and then be able to come up with some sense of what's the most important thing for us to be going after now or next? Right on so I think we should flip the table. What do engineers expect from product managers? Now, right? Yeah. Jem, what do you think?
  
  </p>
<p><strong>Jem Young</strong><br />
  The bars pretty low.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  I've learned to have low expectations. disappointed.
  
  </p>
<p><strong>Jem Young</strong><br />
  I would say the best way I could say engineers, me as an engineer, like work with Product Manager is an anecdote. It's one of my favorite stories. It's my interview from Netflix. Michael was actually the last person on my panel. And he said, Well, Jem, how do you balance? Perfect design and perfect engineering? And I'm like, Oh, it was the last one. I'm like, Oh, this is like one of these tricky Netflix. And, you know, in the end, you can't and he just kind of nodded, but I'm like, he gets it. And that's what I expect from product managers, like someone who understands design is everybody perfect engineering, some have never been perfect, but you understand like a little bit of each. And you know how to, like balance that out. And like, that's what I consider successful relationship, the product manager,
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  I mean, I completely agree with that. And then also just I think I've heard even from the product manager side of how you like to have engineers, helping with ideas or sharing or being passionate about that. But I think a lot of that comes from a good product manager is getting people bought into that, too, is not just saying okay, this is what we're doing and he like, don't ask questions. We're going for With this, I think a lot of it is really like coming to people and saying like, how do you feel about this idea and like, this is what we're thinking and really sharing the background, business cases that have like, why we're trying to achieve this, I feel like that ends up helping really spark people's ideas, but also help them to be more enthusiastic about what they're working on. And to me, as an engineer, I want to be working on something impactful, I don't want to work on something that a feature that 10 people use, like, that just kind of seems like a miss, like it doesn't really excite me, I want to solve a problem that our customers are happy with. And so I think it really goes both ways. I think both of what the product managers saying and even what Jem and I are saying is that like there there is this relationship between the two that it's very collaborative. I think it breaks down when it's, hey here, I'm the pm I'm gonna go give my design and engineers a spec, you go build it. Yeah. And just follow it to a tee. I think that's where it starts to break down. And I don't think we build as great of a product at the end of the day when That's just one person's idea. Yeah. And I think, you know, here we try and invest in a lot of context for it, you know, why are we doing what we're doing? And having people you know, I think be able to participate in, in knowing all that and having the same level of information that we do about, you know, the business, what's going on globally, what's going on across all the different customers that Netflix serves throughout the world. And so that, you know, you see why we're going there. But also, you can challenge us if you think it's not the best way to go in that direction, and ask us, well, why are we doing this? Or have we thought of something else? Because we all are, if we're all pointing the same direction, then we're at least all talking about the same things and talking about the same objectives and figuring out how to get there. And so we can have really productive conversations around like, okay, is this the best way to do it? Is this the best idea that that we're going after next, what else should we be considering? Etc. And I think, you know, it's when people are not open to critiques, you know, it often comes from a place of insecurity and you have to be, you know, secure that, that those challenges are about making the product better, making the experience better, making the concept better. They're not about you and so and that that is your everybody's overall objective. And so if you have confidence in that, then you don't have to worry about like, you know, trying to be defensive about the fact that it's your idea that that's better. But you know, you can have that productive discussion and get to what you think actually is best for the overall you know, customers that we're trying to serve a one lesson I took away is I should do more nod silently.
  
  </p>
<p><strong>Eddy Wu</strong><br />
  People think that I'm much wiser tactic to bust out.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  It also doesn't show up as well on a podcast. We just have to have Ryan narrated his best podcast, Eddy, nodds wisely.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  I like this
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  Jem nodds very wisely.
  
  </p>
<p><strong>Jem Young</strong><br />
  It's the beard, the beard. I also would Product Manager i i'd say my unsuccess relationships have been product managers who are thorough. So if I asked a question about like, I don't know, hey, Eddie, what are our growth prospects prospects in Africa given like the increased I don't know churn rate Because of something, and he's like, Oh, I don't, I don't really know that, like, does not instill that, like I'm working overtime on weekends about this feature that like, we don't actually know where we're going. Right. So those have been my most unsuccessful relationships, the one where they're like, I don't know, Jem, what do you think? And it's like that, that back and forth and not the defensive, like, because I said, so. It's like a recipe for disaster every single time. But yeah, I guess at the end of the day, it's just like respect against Yeah. For all. All all parties. Yeah. The respect and collaboration and ownership.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  So each of you worked at various companies as maybe in some form of a pm. And we've talked a lot about Netflix like what what varies between a pm role at some another company versus Netflix? I think there are a couple things. One, as we've been referencing throughout this conversation, is really the heavy focus on a B testing. You know, I think a lot of companies in the valley, do a B testing. We're I think at the at the high end of really embracing that as a discipline. And thinking about probably 95% of what we do, as a product organization is an A B test with the intent of improving the customer experience. And so it drives a lot of how you think about things. And I think we apply a lot of this scientific method towards product management, which is you're coming up with an idea, you're turning it into a hypothesis, whereas, you know, you're thinking, Okay, if I change this thing, it'll produce this change in consumer behavior that we can then view through this metric. And it becomes something very observable and objective as possible about whether you're solving that that customer problem. And so I think that's really a hallmark of how we think about things. And we're very rigorous about that hypothesis development process, about coming up, you know, and shaping that idea into something that's testable and something where we can actually measure the impact. And then very structured about how do we form an idea into different cells, you know, in each case, we're changing one variable at a time, you know, one part of the customer experience at a time and then seeing what To those things actually has an impact on the experience. And we want to get to the smallest possible change to the largest possible impact we can get. And so things that don't really have material effect or are fairly neutral, we don't want to roll those out just because we like it, you know, we wanted to actually be something that changes our customer behavior. So I think, you know, that kind of a b testing approach, and really an experimentation driven approach to product management is really key. And we're willing to, you know, take some short term hits in order for us to find what's the thing that actually benefits our customers. And you know, and and we sort of reward people who are interested in learning along the way and can embrace both successes and failures and learn from what those failures are as an opportunity towards iterating on that experience, and ultimately, because we only roll out the things that work, you know, any failure as long as you take it the right way is just an opportunity to learn because it's not like you're actually tanking the customer experience. We're just blowing out the good things. And so it evolves a lot of learning along the way. And I think also embracing that learning as a big part of Netflix. And I think in terms of team structure, you know, when I, when I talked to candidates for product management here, I think one of the things that's often quite surprising is that our total, you know, number of consumer focused product managers that we have at Netflix is only around 20 people. And so we tend to hire senior experienced people, we tend to give people a lot of autonomy, a lot of ability to go after the things, they want a wide area of responsibility. And then instead of having a lot of product managers who might be writing different specs, or might have it be owning small parts of it, you know, we have that broad ownership and then an ability to work with their design and engineering partners to make things happen. And I think we really believe in that virtue of like a cohesive team with a singular Captain to try and, you know, help get it there. And I think that's tends to be very different as like the ratio of PMS to the organization as a whole is a very small number of VMs relative to the number of designers and engineering engineers that work with
  
  </p>
<p><strong>Eddy Wu</strong><br />
  Yeah, I mean, our cost calls back, I think to the notion of, you know, not proliferating the number of features or whatever, because that really enforces discipline, right? Because you only have so many hours in the day to work on things. And so then, you know, if you have like 100 PM, you can work on like, pretty small things, because, you know, that's what you need to do.
  
  </p>
<p><strong>Jem Young</strong><br />
  But, you know, with kind of our limited bandwidth, it's really about picking the most important things. So can I ask, what is project manager or product management like, at, say, a 40? person company? So it's easier to say, you know, we do AV testing, but when you can't, and you're like, I'm a startup, I'm leading a team, we've got to deliver this product, or we're literally going to fail, and we'll be out of jobs like, what, what would that be like? or What is it like?
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  Yeah, I mean, I think a lot of the, you know, a lot of what happens in many companies is that often small companies is often, you know, first the founder is, you know, in sort of an essence the product leader if they know they've got this vision that they're trying to see if it works and you don't have the advantage of a be tested at scale like we do. So you have to say like, Alright, we're, it's gonna take us bet on building something and let's see where that goes and then test the market for it. And then, you know, normally as the company grows, they'll hire like the first head of product once like to see, you know, once it was, like more formal CEO or the founder is becoming the CEO, or it gets out of that very initial beta stage, we need someone who can actually build out the product feature set and then scale it. And so there is, you know, a lot of the same thought process around, you know, customer empathy and understanding and balancing business and customer and technology come up. But, you know, you you're not, you're not testing something, because you don't have a market for it. And so you to figure out other ways to get those signals. But I think even when, you know, when Netflix was really, you know, a much newer company, you know, our teams used to, like, take prototypes to like a mall and flag people down and get them to go through it just as a way of getting feedback. So I think even if you're not, don't have that level of scale or sophistication, you know, build it in the experimentation mindset, and they might To be wrong and figuring out okay, well, how do we put something out there? How do we get some level of feedback? How do we iterate based on that? and building those cycles? I think that's like a really important discipline to have from the get go. Yeah, I've actually made that joke of just like going to like Starbucks or something like, yeah, I'll buy your coffee, if you'll look at a good way to get some quick feedback, right. So, before we go into pics, I'm interested, what is one thing you wish people knew about product management? I wish
  
  </p>
<p><strong>Cathy Conk</strong><br />
  that they knew it existed.
  
  100% sure that my dad still thinks I'm a project manager.
  
  And I can I've just given up on convincing him otherwise you'll
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  If it makes you feel better? I don't think my parents know what I do.
  
  </p>
<p><strong>Jem Young</strong><br />
  Yeah, something with computers.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  with computers. I think I've been called the designer. I designed the interface, which they're probably not using that word so right 
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  Do any of our parents know what we do?
  
  </p>
<p><strong>Cathy Conk</strong><br />
  I think more seriously, I think the one thing and I kind of mentioned this a little bit earlier is kind of product managers are not gone. or people who have all the answers were people who are helping solve customer problems by bringing the entire team together and orienting us towards that goal. And so we're not people to be intimidated by and we're not people who are the, you know, lone genius driving something in the company, we're just all working towards the same goal, we just have a different role to play in that team.
  
  </p>
<p><strong>Eddy Wu</strong><br />
  Yeah, I guess one thing that, you know, comes up every so often is, you know, I'll have, you know, software engineers or other people kind of coming and be like, hey, like, what, what would it take for me to become a product manager? And I think a lot of times there's like, a perception of like, well, that's like a promotion or something like that. Right. And it's not necessarily right, it's a different role. And like, not to discourage it, like I think a lot of people would be great product managers, but I think you have to think explicitly about like what you want and don't want out of your career, right? Like if you want a job where it is very difficult to know whether you're right in a little bit better because Do a lot of testing, then, you know, product managers like that is you have to be pretty comfortable with uncertainty. Versus, you know, a software engineer at the end of the day, it's like you deliver it, or you didn't deliver it. And you can kind of know, like, you know, you wrote this, and you built this, or did it work or did not work? A lot of times, you know, we're making decisions where we're not really sure whether it's worked or not, or, you know, did we do a good job of helping the team, you know, find the most innovative idea and things like that. And so, you know, again, like, I love the job, but I think it's like, it's something that we should think that people should think of is like, this is a specific role. And not as like, Oh, this is like, you know, something I should aspire because it's like more prestigious in some way.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  Yeah, I do think it's often hard to exactly articulate what you do. And then we think other than being in meetings, right? Like, you go to meetings and everyone's head off or you go to an off site, which is sort of a medium. That's right, a lot of docks. There is right next to right. And sometimes we read things also, you know, so all that does not necessarily add up to a job in many people's minds. But Yeah, I mean, similar to what Eddie and Kathy said, I think you have to, it's that notion of dealing with ambiguity. And being comfortable with with ambiguity, you know, you're essentially choosing from an almost like infinite array of things you could possibly be doing to advance the experience forward. And there's lots of different combinations and possibilities. And where you have a lot of uncertainty, you know, as we're saying about what the right path forward is, and what's the effect of that going to be. And so I think just knowing that you have to live in that kind of world of of ambiguity and gray area a lot. And you do get these signals back, like we do a B testing or when you launch a product to the market, you kind of start to find the fit. But it can be a lot of time before you find out if you're if you're right or wrong. And so you have to be comfortable and confident in making those decisions and helping to move a team forward. And sometimes, like we were saying, making those trade offs not knowing if you did the right thing or not. And maybe, you know, you made that trade off where you decided to cut corners on the design to get the engineering out faster, but maybe it was the wrong thing because those things you'd cut from that as We're actually really crucial to solving the experience. Or vice versa, you decided to invest a lot more time in building a higher, you know, quality version of the product, because you thought that was important. But maybe you get to the end of it, you just spent six months building something that people don't care about. And so you, you have to be sort of comfortable with the fact that you're not always going to be right. And you're often going to be in that gray area that will sometimes be illuminated by results and signals back that allow you to refine your thinking, but you won't know until you get to, you know, a different stage in the journey about whether that was a good investment or a good decision or not. Well, that actually explains a lot about product managers. So at the end of each episode, we'd like to share pics of anything that we find interesting that we want to share with our listeners. Jem, you want to start it off? What kind of picks do you have for our listeners today?
  
  </p>
<p><strong>Jem Young</strong><br />
  Oh, yeah, I have three picks. My first one is one of my favorite algorithms. It's the fast for your transform. It's one of the most powerful algorithms we know we use it all the time but essentially it's it takes a waveform and breaks it down into its component waveforms, which sounds really dumb, but the equivalent is taking a can of paint, and then breaking it into its subsequent colors. And like the power of that it's like we use it for voice UI we use it for like, if you're trying to recognize a song by D, like, you know, you play a song and it like picks it up. It that's a fast Fourier transform. It's literally the algorithm that drives like so many things around us and it's really really powerful. It's it's great to learn about if you don't never heard of it. My second one going judge me away. That is that those judgment a lot of judgment is a vj Robin, it's a robin that is a it is 500 calorie ramen, so it's like well nutritionally balanced ramen. So theoretically, you're still able to eat for these a day and it's nutritionally complete and it's ramen. I bought some go ahead and judge me. It was okay, okay. I don't know if I'd want to get it four times a day, but I do eat a lot of ramen. And I'm like, Well, I probably should. If Tony Robbins should be healthier.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  I'm just gonna pretend that ramen is healthy.
  
  </p>
<p><strong>Jem Young</strong><br />
  Technically healthy 
  
  </p>
<p><strong>Cathy Conk</strong><br />
  Soup? Soup is healthy. Yes, yeah.
  
  </p>
<p><strong>Jem Young</strong><br />
  But it's Silicon Valley. So I will I will bring some in if everybody wants to
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  have us back. We can all have
  
  </p>
<p><strong>Eddy Wu</strong><br />
  Ramen happy hour. Yeah, my
  
  </p>
<p><strong>Jem Young</strong><br />
  last one is it's a funny one. So what do you think Silicon Valley? 
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  The previous one did not fall into that category?
  
  </p>
<p><strong>Jem Young</strong><br />
  It was mildly humorous. What's actually funny. So what do you think of you know, the.com boom and bust so the early 2000s Michael, you referenced? What do you think of what's, what's the thing you think of? Sort of like a website? Or domain
  
  </p>
<p><strong>Eddy Wu</strong><br />
  pets.com?
  
  </p>
<p><strong>Jem Young</strong><br />
  pets calm? Yeah. A website that sells Pet Supplies was like indicative of this is the the IPO boom and bust of Silicon Valley. So this company just filed for an IPO. It is chewy.com
  
  </p>
<p><strong>Cathy Conk</strong><br />
  Oh, I Papa big chewy huser. Yeah.
  
  </p>
<p><strong>Jem Young</strong><br />
  And what do they do they sell pet supply. So are we are we in the next bust of Silicon Valley? I don't know. I just think it's hilarious 
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  People love their pets. I think it's a big business. I don't see a problem there.
  
  </p>
<p><strong>Jem Young</strong><br />
  That's what they said about pets. Right before the
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  I do remember a friend of mine in the last calm, you know, bust in he was like, I think the writing was on the wall when my company announced a strategic partnership with ILoveCats.com.
  
  </p>
<p><strong>Eddy Wu</strong><br />
  So, when it comes back, it's like sometimes ideas. It's like the time is not there. Right? I mean, think about I mean, the other big one that people are talking about from the.com boom is web. Right, which is grocery delivery. Grocery do. We have now right?
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  All right, Michael, what do you have for us?
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  I want to hear Cathy's time for this? 
  
  </p>
<p><strong>Cathy Conk</strong><br />
  I was trying to narrow down to just two but then Jem did three is so now I'm gonna three
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  so my you're not limited.
  
  </p>
<p><strong>Cathy Conk</strong><br />
  My first is semi work related, which is a leadership book I read recently called everybody matters, the extraordinary power of caring for your people like family. So it's interesting because at Netflix, we talked about being a sports team, not a family, but I was quite surprised at how much of what Isn't this book aligns with the Netflix culture, I think largely in terms of the freedom and responsibility, kind of giving people ownership of their jobs and treating them with respect. So that was really enjoyable. And I highly recommend that if you're interested in a look at a unique leadership culture and how to treat people, kind of with respect and dignity. The other one is a fictional book called severance, which I read earlier this year. It is a apocalyptic novel, which I love. I can't get enough of those. So it's a mix of a millennial love story, an office satire and a zombie apocalypse. So hopefully that's. So that's severance. And then my last one is the Oh a, which is a Netflix TV series. We just launched Season Two recently. I haven't actually watched Season Two yet but I rewatched season one over this past week. week and a half and it reminded me how much I loved that show. So I'm looking forward to getting actually even better. That's what I've heard I keep hearing that that I got to it so
  
  </p>
<p><strong>Eddy Wu</strong><br />
  yeah, I love I just drive the streaming hours
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  to go back and listen to all of our times Gemini are literally picking the Netflix originals. Probably cuz we watch too much TV. disagree on the way though. Yeah, that's true. Oh,
  
  </p>
<p><strong>Cathy Conk</strong><br />
  controversial. Love it or you hate it.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  Yeah. Eddie.
  
  </p>
<p><strong>Eddy Wu</strong><br />
  Yeah. All right, I'll do I'll do three. When you first hear this pick things in me there. I was like, that was nervous because I typically have very, very mainstream tastes and so if like, you feel like you're not like that clever if you're like, Oh, you guys should all go watch the Avengers end game like the most popular movie in the history of the world. So I'm not gonna do that. But so I have three. One of them in the movie space is so recently for work. I was doing an immersion in Mumbai, India for two months. And so while we were living there, we brought a smile to UI engineering and other design other functions Jessie Mars regular panelists. Yeah, that's right. That's right. So if you haven't heard Mars recently, that's you know where she was. And while we're there, we watched a movie called gully boy, which is a indian movie. It's Hindi original language, but it is available now with subtitles, unfortunately, on a competitive streaming service in the US, but it's, you know, I thought it was great. It's a it's basically like, the plot of it is a little bit similar to Eight Mile. So it's about like a hip hop. A guy who's like really into hip hop and like comes from kind of the slums of Mumbai. And I thought it was I mean, it was interesting because like, obviously the music is great but also just the universality of that story of like, you know, the someone coming like out of you know, poverty and not having anything and then like, having like a creative dream and being able to live live by it. Yeah, and really well executed. So I'd recommend that. Let's see. I wanted to was one of my favorite beers, not the Hello Hi. Watermelon I'm drinking right now is is another beer which is also a summery beer called campfire stout. So if you guys have never tried campfire stout, it is a really good stout. It literally tastes like marshmallows. And so it's very drinkable, although somewhat heavy. I think it's high water maybe something water I think it's high water. right we have that outside land
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  member who makes
  
  </p>
<p><strong>Eddy Wu</strong><br />
  Yeah, anyway really good. Definitely check it out. And then my third recommendation is I'll do a book so it seems smarter. I mean, mostly, you know, sci fi fantasy books. But then I also have this one kind of niche where I like to read nonfiction books about stuff that seems that seems really uninteresting. So I remember my selling me a lot because I was like, yeah, it's like I'm reading this book. It's about Cod. It was a book that's only about like, caught it was called like Cod. The biography of the fish that changed the world is really about Cod. Michael is like rolling book about class, mildly recommend the card book it was kind of interesting but like the one recently that I'm reading is now a book it's about rust it's called it's called rust the longest war and it is about basically you know, the process of rust I guess, and how it's affected different things like there's a different chapter about you know, different aspects of rust and metallurgy and things like that. So it's it's kind of a cool interesting thing there's a there's a whole chapter about the Statue of Liberty and how it is affected by rust and the how like basically almost collapsed so so really, really interesting. Something to read
  
  </p>
<p><strong>Cathy Conk</strong><br />
  that definitely made you seem smarter. sparked my
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  interest there. Statue of Liberty. This sounds really interesting. Yeah.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  From Avengers to rust. Yes. Eddie's journey,
  
  are you gonna follow that Michael? Not very well, I should have gone first. I guess what my lesson learned there is I guess instead of picking Things that I'm reading exactly right now we do maybe a couple of book selections in the best of over the past couple years think amongst a product team, we actually spend, you know quite a bit of time doing reading in areas that we think are gonna be really relevant to what we're doing. And I think one of the things that's been, you know, not always the easiest reading, but very informative and enjoyable is, is really punted into the world of behavioral economics and behavioral psychology, and better understanding what our you know, how our minds really work as a way of figuring out how to better design for what people really need. And so I think we did Daniel Kahneman Thinking Fast and Slow, which is like really seminal work from someone who got rice in economics from this, maybe don't start with that.
  
  But you want to set aside some time here, they make it through.
  
  </p>
<p><strong>Eddy Wu</strong><br />
  Also, we did a time in which you don't want it like you'd like for a month afterwards. You don't need to make any decision.
  
  Every single little thing that you're doing.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  Yeah, that's exactly what happened to me is afterwards I'm like, why am I thinking that? I decided that I'm probably bias what's informed me that I can't believe nothing in the world is an illusion only created by my mind. And then if you want like a little bit more of an accessible version, I think predictably irrational by Dan Ariely is good, like practical set of tests and explanations before you get to the sort of rich theory of Thinking Fast and Slow. So I think those are really good. And then I think on either side, reading sapiens, and also Jared Diamond's the world until yesterday, you know, which are both probably cover like the most amount of like prehistory and how human beings actually evolved, has shaped a lot of my thinking, in terms of better understanding, like where our natural inclinations come from. And you think of if you think of humanity as being 200,000 years old, and then, you know, maybe civilization as being about 10,000 years old, and then modern society, maybe like one to 100 years old, you start to see exactly why we're driven the way we are and where are like the kind of stuff I'm Eli our brains are really reacting to. And so understanding where we've come from, and why and why we evolved the way we have under what pressure is and how human society has developed. That's really changed a lot of my thinking about you know how to view, like how to view all humanity. So if you want
  
  </p>
<p><strong>Eddy Wu</strong><br />
  to go really,
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  inside our minds and an understanding of all of humanity, those are the keys.
  
  So I feel like my picks I've got to have a book or else I'm like, really missing out here or go like really? counterbore Oh, yeah, counterculture, yeah. But I do actually have a pick for a book that I just finished reading, which is quiet the power of introverts in a world that can't stop talking, which is great. It really talks about how undervalued introverts are and kind of talks about how we can work better to foster better relationships for introverts and make sure that we're hearing their ideas and really speaks to like companies and teams to really think about how to interact with an introvert versus an actor. extrovert. So I thought it was a really interesting book and a lot of really good tips in there to really think about. And then my second pick is react day New York is a conference. I believe it's the first time they're doing it. I'm speaking at it. So it's a selfish plug. You know what, it's been a while since I've done a conference in New York. So I'm excited. That one's in September. It's actually Friday the 13th in September. So you know, it's got to be good at that. Yeah. And I will be talking about ABX testing.
  
  All right.
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  Before we end the episode, I want to thank Michael, Cathy, and Eddy, for joining us. It was a really pleasure having you on here.
  
  </p>
  <p><strong>Michael Spiegelman</strong><br />
  Thanks. Thanks for having us. 
  </p>
<p><strong>Ryan Burgess</strong><br />
  You're welcome.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  Where can people get in touch with you? Let's see. So my Twitter handle is at <a href="https://twitter.com/mSpiegelman">@mSpiegelman</a>, so you can reach me there or on LinkedIn, which many people seem to be able to find me on.
  
  </p>
<p><strong>Cathy Conk</strong><br />
  Yeah, I'm on Twitter at at <a href="https://twitter.com/CathyConk">@CathyConk</a>. That's Cathy with a C.
  
  </p>
<p><strong>Eddy Wu</strong><br />
  I live in a post Twitter world.
  
  I guess I'll be boring. You can just find me on LinkedIn. It's Eddy. Eddy Wu I don't think there's any others
  
  who work in Netflix at least. So,
  
  </p>
<p><strong>Ryan Burgess</strong><br />
  yeah. All right. Well thank you all for listening today's episode, make sure to subscribe to front end happy hour podcast on whatever you like to listen to podcasts on. And you can follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a>. Any last words? 
  
  </p>
<p><strong>Jem Young</strong><br />
  I feel really dumb that I picked Ramen and everybody else picked these super intelligent books and I'm like Robin is tasty.
  
  </p>
<p><strong>Michael Spiegelman</strong><br />
  I don't know it kind of made me want to try this Ramen. So yeah, it seems much more commitment than reading you know, Nobel Prize
  
  </p>
  
  `;
  return transcript;
};