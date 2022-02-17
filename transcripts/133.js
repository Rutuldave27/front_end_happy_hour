module.exports = function() {
'use strict';
const transcript = `

<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end Happy Hour podcast. COVID has impacted us in so many different ways. One way that it has impacted us and companies is their ability to adapt to being remote. That means there are more and more people that are joining companies remotely. In this episode, we are joined by Laurie and Lucero to talk with us about what it's like to join a company being fully remote. Laurie and Lazaro thanks for joining us. Can you give a brief introduction of who you are, what you do and what your favorite Happy Hour beverages?

</p>
<p><strong>Laurie Barth</strong><br />
I Laurie, I'm a senior software engineer at Netflix, I write code for a living is that enough of a description. And sometimes I make content on the internet. And my favorite Happy Hour drink is probably a mocktail. Ideally, one was citrus flavors

</p>
<p><strong>Lucero Carmona</strong><br />
like that. I'm Lucero Carmona. I'm a software engineering manager at Netflix and my favorite friends are happy hour drink is itsself. So very chocolatey, Imperial. So

</p>
<p><strong>Ryan Burgess</strong><br />
nice. Do you have a favorite? Oh, right now I'm

</p>
<p><strong>Lucero Carmona</strong><br />
drinking Anderson Valley's Arcor huge. Arcor which is a bourbon barrel aged one.

</p>
<p><strong>Ryan Burgess</strong><br />
That'd be good. Let's also give introductions of today's panelists. Jeremy, want to start it off? Jem Young,

</p>
<p><strong>Jem Young</strong><br />
software engineering manager at Netflix. 

</p>
<p><strong>Shirley Wu</strong><br />
Shirley Wu. What is my title? independent data visualization designer engineer, soon to be grad school student only person here that doesn't work at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome.

</p>
<p><strong>Shirley Wu</strong><br />
Thank you. Thank you for the vote of confidence.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a software engineering manager at you guessed it Netflix. In each episode of the front end, happier podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What did we decide today's keyword is? All right, if we say the word office from now on, we will all take a drink. I figured let's hop right in. Funny enough I was thinking about this is what is it like joining a remote team and even jam you and I kinda had a little bit of this today in during COVID is switching teams. So it wasn't joining a new company. But it was it was still joining new team and dealing with new people. But I'm really curious to Sarah and Laurie joining a new company, new team, fully remote, not being able to meet these people in person. What's that? Like?

</p>
<p><strong>Lucero Carmona</strong><br />
I think it's a lot to learn at the same time because you are learning the new company new technology, those internal systems that that's the challenge to huge amounts of get to know. But then I've really enjoyed it, I thought it was really great to get to know somebody virtually to it's just been really open. I feel like so so far I've enjoyed the experience,

</p>
<p><strong>Laurie Barth</strong><br />
I feel like it might have been a little bit easier for me because I had already on boarded at a remote company because Gatsby is distributed. So even before COVID Everyone was remote, I didn't meet my colleagues in person until like, well over six months or seven months into having worked there. I enjoy it. I I've always found I'm a very outgoing person, but I'm actually introverted. So when I come to an office for the first time, I like to talk high energy, higher energy and I just crash. And so having the ability to not be going from desk to desk to desk to desk, meeting people and having these breaks and these moments of just like soak it all in my brain is on fire and there's too much information when no one's watching you and you can literally just shut down for a second is really helpful and you don't feel like you're on and performing. You know for the first eight hours of your first day or the first 40 hours of your first week. You have these like quiet moments to yourself that aren't just going to get water or something.

</p>
<p><strong>Ryan Burgess</strong><br />
That's I like that a lot both answers like very positive on it. I feel like maybe because I was so used to being in the office cheers that it felt weird for me to join hadn't met my manager in person before I hadn't actually I don't think I met anyone on my direct team in person yet like even though we've all been working at the same company. We just didn't have a lot of overlap and so that was unique to is just like starting to build relationships with a new team remotely. It's possible totally is like it's just is a little bit more unique and you have to rely on like different ways to build trust and build that relationship which sometimes it may seem a little bit easier in person so I was one thing I noticed. I think it's still possible. I mean, hopefully that I've built some trust and relationships with my team. You want

</p>
<p><strong>Laurie Barth</strong><br />
to know the one thing that is impossible. Well, it it's the one thing that you lose when you onboard remotely and it's the one thing that blows everyone's mind if you don't like travel to the location for many, many months. You Do you get a sense in your brain of how tall everyone is? And you're always wrong? You are always always wrong. And it sort of blows your mind it like you are afraid that you have misunderstood everything about this person because to have something is like quintessential is their height. Be wrong in your brain. You're like, have I just completely not met this person at all? Like for the last six months?

</p>
<p><strong>Ryan Burgess</strong><br />
You all know Gemma's very short, right? Yeah,

</p>
<p><strong>Laurie Barth</strong><br />
yeah, five, two,

</p>
<p><strong>Shirley Wu</strong><br />
I think. Yeah. Yeah,

</p>
<p><strong>Jem Young</strong><br />
two and a half.

But that's literally what happened when I've been in office three times this year. One of the comments from one of my fellow managers was like, Holy crap, you are tall. And I'm like I say everywhere. I'd say like all the time. Yeah, people do not believe me. I gave a talk at a conference. I walked offstage. People are like, holy crap, you are tall, like you were just watching me for 10 minutes.

</p>
<p><strong>Laurie Barth</strong><br />
Okay, but stage perception is not the same as standing next to someone and how tall are you?

</p>
<p><strong>Jem Young</strong><br />
Six, four, probably closer to six, five, but it's just six, four, you know, this isn't Tinder, I don't need to lie about my

</p>
<p><strong>Laurie Barth</strong><br />
my husband is six, three. So I feel like you're gonna feel tall to me, but like no taller than the rest of the walking universe does. Because literally everyone is taller than me. It's just a matter of degrees.

</p>
<p><strong>Lucero Carmona</strong><br />
I think that's been the thing to be remote is like, I've gotten used to the heights of the people that are most closely around me. And I'm very short. So having anybody who's like towering over me is weird.

</p>
<p><strong>Laurie Barth</strong><br />
Are you How tall are you? Five foot? Okay, I'm five, three. And I feel the same way. But I'm using my husband bigger and so he's like really tall. But at the same time I meet my colleagues and I have in my brain that they're like, roughly my height and I'm just always

</p>
<p><strong>Ryan Burgess</strong><br />
love that. That's it's a great antidote, though. Because it's like, we're all shoulders like, you know, chest, shoulders up and head nuts. It like that's all we are as virtual heads.

</p>
<p><strong>Shirley Wu</strong><br />
The great equalizer is Yeah,

</p>
<p><strong>Laurie Barth</strong><br />
it is my colleague had a baby. And she was like, seven months pregnant. When she was onboarding and no one knew and she didn't, like you have no reason for anyone ask like she never could have hid out if she was in the office wasn't hiding it. Right. But like, it didn't matter until it was time for her to go on leave. So I think

</p>
<p><strong>Ryan Burgess</strong><br />
it's not that you're hiding it either. It's literally like there's this awkward stage to where you feel. I mean, I'm not a woman, but definitely hurt, hurt, hurt the feelings of like, you're kind of getting, you're getting a little bit bigger. And it's like, it's that point where they're like, is that person pregnant? Or are they not? And people aren't going to ask you that. And so that's kind of awkward. You're still being in the office. I say all this because my wife was pregnant during COVID. And like, same thing is like, she didn't have to share that immediately. It wasn't. And you know, it's like you still share it, you're not hiding anything, but you just have a little more freedom on that side. I think that is an equal balancer. That's really a great point. For the record, your

</p>
<p><strong>Laurie Barth</strong><br />
wife and I probably looked the same at that point, because she was building growing a baby and I was eating eating COVID junk foods. So it really just it all evens out.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, so we've we've mentioned some positives. I'm there is there is some challenges come on, there are some challenges. I'm curious of hearing your thoughts on what what the challenges are differences of being remote or being in an office? Cheers. Oh, cheers.

</p>
<p><strong>Laurie Barth</strong><br />
My first instinct is internet. Internet is not always the most trustworthy thing. It can be laggy. And what's really, really hard, even if you decide to turn on video for a conversation, lag can make it almost impossible to have a conversation, because you're trying not to talk over someone and then you are talking over someone and it's just really uncomfortable and awkward. And it feels frustrating. And so you cut the conversation short, and maybe don't get to the things you want to get to. And if that's your first few interactions with someone, and they're just having like, a bad internet week, or whatever it is, that can be really frustrating because you literally have no other options.

</p>
<p><strong>Shirley Wu</strong><br />
That's a really great point. And it reminds me so I haven't had to Well, I guess as a freelancer, I'm just constantly onboarding remotely, um, but but like, not to the same extent because I usually don't have to, like, get to know teammates, and I don't need to, like get to know the system usually. But I was going to say I have had, like my partner has had to onboard remotely during the pandemic. I've had a few friends that have had to, and I feel like this is another one of those like small things that I personally never would have thought of until I heard the stories which is like to the point of internet, there's also like, devices being shipped, like I remember, you know, like pre pandemic we would go into the office on our first day we'd be provided with a laptop, probably like in like a little office dusk and we can get started right away. And I know that my husband had to wait like three days because there was sunlight And this was also, you know, last summer where like, all of the shipping companies were just going crazy. And so there was like, they tried to deliver, but they delivered to the wrong address. So it had to be recalled back to the East Coast. And then they had to like, ship a new one over. So he like, couldn't onboard for like three days. And so there was like a crazy thing where like, and because it was a big enough company, they were having orientation that week. So his manager had to like, call screen share with him the orientation that was happening, because like he couldn't access it without having the device. I've also heard of other friends where like, their laptop was stolen on the way to them. And so they like couldn't, you know, start on the first day. So, yeah, things that we would have never thought of, I think first starting remotely.

</p>
<p><strong>Lucero Carmona</strong><br />
Yeah, it's delicate in terms of like, there's so many things that can go wrong, that any one of those things going wrong, completely ruins the flow of how how you're operating. I think also, I mean, time zones, and location wise, that's another one that I felt heavily because I like to just be able to just jump in, if there's like an event going on, I want to be have that option to be there. And sometimes that's not possible.

</p>
<p><strong>Jem Young</strong><br />
Was there on the on time zones? Can you speak a bit bit more on that and what the challenges are?

</p>
<p><strong>Lucero Carmona</strong><br />
Yeah, I mean, I love mornings, because mornings are so flexible, and you're able to really prepare, which is really good. And also like, do a lot of errands and running. And all that stuff has been really great. But sometimes it goes a little bit later in the day than you expect it to. And I feel like you know, as a manager, you want to be there. Like you want to make sure that people feel supported, and that you're available. But it's a little bit taxing if it's too consistent.

</p>
<p><strong>Laurie Barth</strong><br />
On the flip side of that, I mean, also on time zones and working late but as the like I see of the conversation, my manager has been super, super clear with me, he's like You are not to be at your desk past 630 year time period Hardline. So it's been we actually noticed like this is the other thing, it's fragile, like my colleagues kept scheduling meetings at from 630 to seven my time. And I was like, you know, my boss really wants me to hold a hard line for 630, I would like to hold all the hard line for 630, like, start by evening have dinner, all of those things. And they kept scheduling it. And I was like, like, we got to figure this out. And we realized that I have two tools in use, I have clock wise, and on Google Calendar, and clock wise had one set of working hours and Google Calendar had another set of working hours for me. And so it was showing me as available past the time that I had set in the other tool, and they weren't in sync. And so I had to go in and fix it. And we realized that all of a sudden, that's all the problem it moved by my end date half hour earlier, which is where it should have been and all of that. And on Fridays, it's my I work, East Coast hours, like nine to five and all of those things. But the time zone thing is really interesting for me, because I'm used to having colleagues in Europe. And I would start my day really early and end my day really early. But now I'm starting my day really late. And ending my day later. And my husband works with teams in Africa and Europe. So he starts really early and ends early. So it's all like, it's weird. And people have asked me about it. And they're like, why do you work remote? Why wouldn't you work in the office, I'm like, because I literally couldn't do my job or work with my team if I unless I was gonna pick up and move to California. So it is absolutely an overall benefits. But yeah, time zones are frickin hard, especially when they're heavily weighted in one direction.

</p>
<p><strong>Ryan Burgess</strong><br />
I worry about that even more. So once there's more hybrid work to where there is people in the building that the company exists at. And then people being remote, it's, it's just going to be even more difficult, I think because there people are just going to naturally feel like well, I'm here from that nine to five type

</p>
<p><strong>Laurie Barth</strong><br />
hybrid is harder than distributed without a question. And right now we're almost exclusively distributed. And it's going to be really interesting to see, I actually wonder if it's going to start becoming team centric, where you have entire teams that are remote and entire teams that are in person, depending on what people's interests are, which becomes another element of like, are you interested in this technology? Are you interested in this mission statement? Are you interested in living in California in you know, within community within commuting distance to the office, or are you going to live somewhere else? And does that affect which teams are open to you? It already sort of does but it might get cheers worse though. Oh, no.

</p>
<p><strong>Ryan Burgess</strong><br />
The I think it's it is interesting, like I think that when you bring the hybrid piece to it, it's I think it's teams almost need to have almost 5050 split like you don't want to be the only one. I mean, I want us to do great like the ones that are maybe within commuting distance to an office chairs. I want us to try and make sure We're thinking about people that who are remote, but it is going to be a challenge. Like we need to get good at that. I am curious, maybe even on those points like what are some of the challenges that for me, like I already foresee that the timezone points but also just even the watercooler conversation that everyone keeps referencing or lunches that those conversations happen, and you might be left out of them. And so how do you get that context and making sure that your team is providing that to you too. But are there other challenges that you foresee as people start going back to an actual location,

</p>
<p><strong>Jem Young</strong><br />
another challenge is having been at the office and talking to a lot of facility managers in the office right now, which is pretty funny. But one on ones are just more productive in person. Like it's not an audience virtual, it's just, you can see body language, you can tell when someone wants to speak and they aren't versus now I can only see the top half everybody, there is an entire lifetime of our human perceptions based on how people communicate, which is a lot more than what they're saying. It's how they're sitting. It's their, their tapping their fingers, all this stuff we can't see over virtual. So all of the one on ones I've had in person, I'm just like, Okay, this is a conversation now. Not saying virtual, it doesn't work. It's just, it's a different. It's a different tone, I would say versus the ones that find the officer more informal. And that's a challenge that as a manager, I need to overcome and work a lot harder to understand what people are saying. And like, understand, like the subtle nuances of body language or things like that. Yeah, that's a for me, that's a definite definite challenge to overcome.

</p>
<p><strong>Laurie Barth</strong><br />
Yeah, twice, by the way. You said it twice. But I didn't want to interrupt him

</p>
<p><strong>Shirley Wu</strong><br />
here. No, we all got to drink twice. That must be especially challenging if someone decides to mute themselves because then like, like, because maybe we don't want, you know, some distracting noise. But like, what if we were tapping our fingers, and then that gets muting, you don't get that signal. Like if someone chooses to turn off their camera, because maybe their Wi Fi is bad. And you can't actually see like, you lose that whole body language. And all of that is really challenging.

</p>
<p><strong>Ryan Burgess</strong><br />
Or you have people in the background that have kids showing up and interrupting your meetings and door.

</p>
<p><strong>Lucero Carmona</strong><br />
Getting more information that way.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, that is true. You get pets, I do like the pets and kids, you get to know people a little bit in a different level. And even just like seeing people's backgrounds of where they live, and what they choose to show off behind them is like you get these little things that you wouldn't necessarily do. And so I think that to Jem's point is I do agree with him a lot on the one to one in conversation being in person is like super powerful. And like you do get a lot of that body language and just energy off each other in in that meeting. But there are some things that you still have to like learn about a person on their personal level that you kind of get for free in this virtual world.

</p>
<p><strong>Shirley Wu</strong><br />
But counterpoint to that is like I think that really depends on the person, right? Like, I think some people are very much. I know people that are very much like, this is my work. And this is my personal life, and they really enjoy that separation. And some people it's like, you know, it's like a lot more fluid. And it's a lot more casual. But I can definitely foresee that for people where like they really like that strict separation. And it must be really hard to be then revealing more of their personal life than they feel comfortable with.

</p>
<p><strong>Laurie Barth</strong><br />
Absolutely. I mean, I think a lot of people have talked like, I think they're this is sort of not the question, but I think it's important to talk about, there are two specific things that I think are important to be successful as a remote employee. One of them is about the person you are and one of them about. One of them is about the situation you can set up for yourself, you are going to be an infinitely better remote employee, if you have a designated working space. Most people who ended up remote because of COVID had never planned for that designated working space. So you have people who have like their beds behind them. And that's it's not even like feeling like work is in your personal space. Like that's an uncomfortable thing. To be as an employee, you're like you're seeing my bed all the time. This is my space. Like there's no separation. I see my desk and my computer, even when I'm trying to fall asleep like that's a level of lack of separation. We lived in a different house when COVID started that we live in now. And my husband's office was the dining room table and he hated working remote. He now has a designated office in our new space. And he's not interested in going back to any office at any time. Like it just made all the difference. And I've been making the joke my how far you've come. But the other thing and this is about a person is I don't think you can have introverted is the wrong word. But I Don't think you can have successful super quiet remote employees. Because remote employees have to communicate twice as loud and twice as much, they have to tell you, Hey, I'm stepping away from the computer because you can't see that they're not at their desk, they have to say, Hey, I'm struggling with this because you can't see them sighing heavily and slamming, you know, their fist on the desk, or whatever it is, there are so many things that they have to communicate because no one can see them. And so if you're not a person who that either comes naturally to or you're interested in doing that, you probably prefer when people can pick up on those clues from you, instead of you having to verbalize them. So if though neither of those things are true for you, you may much prefer being in an office environment. And that like all goes to the challenges where we've had everyone forcibly in remote positions, whether or not that's what works for them. Versus like, I feel very lucky that there are infinitely more remote positions for me to choose from. Because I had already chosen to be a remote employee that was already a situation that worked

</p>
<p><strong>Lucero Carmona</strong><br />
for me, I have one counterpart to just from the idea of like an in person one on one and remote ones, I think that they have different information that you received from it. But from somebody who's more quiet or reserved within the office, I found that having that remote option just really allowed them to be a little bit more open, because they weren't able to do it in person. So it kind of took it away, because of the fact that we weren't sitting next to each other that they could express themselves a little better in at least the one on one setting, which I thought was really helpful.

</p>
<p><strong>Ryan Burgess</strong><br />
Also, like, let's go to the big meetings to I think that that has been so powerful. For the raising hand, virtually, it's allowing people to speak up that normally maybe just didn't because they were getting cut off. And you know, there was, there's always those people that have the powerful voice in the room. I think that the virtual setting where we're all in that world, it's a better level playing field. And I think that that's I've seen that be really great. Or you can message in the side, right? Like, if you're like, I don't really feel like sharing this like to the broad audience, but I can send a message in as a side text message into the meeting. That's really powerful. I think that I'm seeing people contribute to meetings that may not have in the past. And I think that's awesome, we're hearing more opinions from others that may not have felt as comfortable speaking up. So that's cool.

</p>
<p><strong>Shirley Wu</strong><br />
That reminds me actually of an experience I recently had where it was actually a book club. And it's called database book club. But it was such an interesting format, because instead of you know, virtually gathering in a video call, it's actually all in a document. Um, and it's not, it's not Google Docs, but it's very similar. And the way that it's structured is that the organizer has, like, you know, maybe three questions about the book. And instead of it being like, you know, we have all of these awkward stepping on each other as we're trying to, like, you know, speak in, and we kind of know, we accidentally speak over each other. And everybody just they, you know, they just type out their responses, like each person, they like, start a new bullet point. And they'll be like, Oh, this is what I thought about this book, or like, they might introduce themselves and then start a bullet point being like, Oh, my name is Shirley, I, this is what I do. And that was so cool. Because in the span of an hour and a half, there's just so much discussion that can happen. There's like so much information and sharing that can happen, because now the conversation is happening almost asynchronously. So it was a very interesting, like, there was a main document where everybody was typing their, their responses to the questions. And then actually, it was so funny, because then like people would chain like bullet points as responses, basically, I guess it was like live asynchronous Reddit. And then there was like a chat on the side that you can have like casual conversation. I'm so interesting. I don't know if that's like something that will work in a meeting. But like, if it's like a ideas gathering meeting, I would imagine that that'd be a really cool format to try.

</p>
<p><strong>Ryan Burgess</strong><br />
I've definitely seen tools like that being used really live meetings, but even sometimes, the asynchronous method of like allowing people to contribute into whether it is like a Google Doc or memo or some there are some great tools out there that are trying to enable this like collaboration for this virtual space. And I think it's really powerful because some people are so good at communicating in their written form versus a verbal communication. There's differences there and so you can be more effective sometimes just like communicating in written form. To be honest, like a lot of what we're saying right now is communication is going to be what makes or breaks this like, especially in a hybrid or being remote doesn't matter. Communication has always been important in our jobs. It's just now the bar is that much higher and I think it's like our jobs to make sure that we are communicating effectively and finding things It worked for us and our teams to be effective.

</p>
<p><strong>Shirley Wu</strong><br />
I have a follow up question about communication, which is that as one of my big roles, or one of the things I try to avoid with my client projects, is having one clear point of contact that like, you know, when I'm working with that client, it's usually that I'll go to that person for final say, or final decision on whatever I'm working on. And then, in the last client project I had, I had three points of contact. And that was something that like, was kind of a learning experience to learn to manage. So then my question is, is that is there something similar for you when you're onboarding to like a new team, where, presumably you probably have like your manager, that's your main point of contact? But then like, what if you had also a technical lead that you had to work with? Or like, just do you happen? Do you end up having multiple points of contact? And then is that I would imagine that that's harder remotely versus like an office because I would imagine if it was in office, and I have multiple points of contact, I might just like, talk to one person, then run to the other person and talk to that person and then like, just like, tried to catch them in the office? Versus I would imagine that'd be a lot harder remotely.

</p>
<p><strong>Ryan Burgess</strong><br />
I don't know how many times you said office, surely. But Cheers.

</p>
<p><strong>Laurie Barth</strong><br />
I don't think it's any harder. And the reason I don't think it's any harder is like, like you said, if you're running to the office, like people have meetings, they're not at their desk, like that's no different than pinging someone on Slack. And can we, you know, quickly chat about this either on Slack or through meats, or I mean, we have a we have discord voice channels for my team, like, there's no difference in trying to get those people in those mediums as there would be for for getting them in person. That being said, this all sort of circles back to like the water cooler pieces of the puzzle, which is, it is never going to be harder for me as a remote employee, to get in touch with one person versus the other person. It is harder for them, if they are in the office, have you set up the office to make impromptu quick calls at your desk possible. And I think there's a lot of conversation happening about that. Now I know amongst my team, where it's like, I don't really feel comfortable being on a call when the entire floor is quiet. And it's an open office plan. Right? So I can do that at any time. I'm set up for that. Are we setting up the people who are in the office to communicate with me through that medium? Like, that's a big open question, Can they communicate with the person who sits next to them just as well as they can communicate with me through their computer?

</p>
<p><strong>Lucero Carmona</strong><br />
And there's never usually enough offices. I mean, when everybody comes back, it's always a mad rush to see if anybody can even find that space.

</p>
<p><strong>Laurie Barth</strong><br />
Yeah. And so it's like, maybe you need to redo the open office plan and like, give people very sound proof sort of things where there's, there's some idea of like, I don't know what it's called, like a phone booth, or something where you can have these like, things where people can go in which feels better, I guess, but like, how many of them can you have? Can you fit more than one person in there at the same time, like swell?

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, there, we do have these they'd exist today. I know. You haven't seen the office yet. Cheers. We do have these are great. There's some that are very single. And like I saw Jem shaking his head, yes, you were single person, you're not gonna put anyone else in there with you. But then we have ones that are a little larger, where you could fit two people sitting comfortably, I think even a little bit bigger than that to where you could fit a couple more people. And so you can have it's like sitting at like a table across from each other in the sound booth. It's it is soundproof to like It's wild. It feels like you're just like, sucked all the arrow tenants like just silent in there. It's kind of it's weird. I don't mind it. But it's weird data theory.

</p>
<p><strong>Jem Young</strong><br />
You can feel one one gym. Yeah, true.

</p>
<p><strong>Ryan Burgess</strong><br />
I guess that's my jam shaking his head. He's like, No, even the big ones I can't fit.

</p>
<p><strong>Jem Young</strong><br />
You wouldn't want to be there. They're hot. And then I

</p>
<p><strong>Ryan Burgess</strong><br />
feel like jam. We've recorded a podcast just you and I in on before. So it's it is possible. I think we sat across from each other.

</p>
<p><strong>Jem Young</strong><br />
We did the overrated episode. Yes,

</p>
<p><strong>Ryan Burgess</strong><br />
exactly. I don't remember what number episode that was probably like, Episode 50. I don't even know.

</p>
<p><strong>Jem Young</strong><br />
I think one thing we haven't brought up is more you're kind of talking about it to a degree is you can't tell mood remotely like you can't feel the mood of an office the mood of a team. But that's a real thing. Like you ever walk into a business and you're like, This is weird. Oh, yeah. And walk through an office. You're like what happened? That's when you're like, oh, or is everybody jubilant? Because someone's having a baby or you miss that? And that's like managing your team remotely. That's something I've struggled with is like, How do I tell the mood of my team other than like when one on ones and team meetings like how do I tell things are going well, things aren't going well. I can ping them on Slack. But people are gonna be like, Hey, how you doing? What's the American answer? I'm doing fine. Yeah, it's part of our greeting. So I don't know, I don't know what the solution to that is. And I don't want to force people to be in like a social event when they don't want to be just so I can gauge their mood, because that's very selfish.

</p>
<p><strong>Laurie Barth</strong><br />
But your recommendation? Yes, please. So my old team did this. And it sounds weird at first, and it takes a little bit of getting used to. But if you have any sort of slack robot for like, status, or whatever, there was a question. At the beginning, I think it was like, How are you feeling or something like that? And at first, it was just like, fine, fine, fine, fine, fine. But over time, people get really comfortable with that question. And so they say, like, good, or this, or whatever. And there's actually a robot that's designed to gauge those words, and look at if the team is in like a green level, or a yellow level or a red level. And sometimes people will be really honestly, like, I'm having a really crummy day. Like, I had that once. I think something was stressful about buying a house, I'm sure. And my manager reached out to me, and he was like, why don't you take the afternoon and like, walk away from your desk and go for a walk and like, you have one call you have to be on. And you can take that while you're going for a walk or something. And it's not perfect. It's not a perfect substitution for like, you just feel like your team has a mood. But it gives you a lot more of that. And people do get comfortable with it over time. And it gives you some way of gauging this sort of like the things that you can't really say or write or explain. It's just sort of like a vibe

</p>
<p><strong>Ryan Burgess</strong><br />
like that. I mean, there's that's the thing, I think we have to get comfortable trying different things and trying different tools. It's never gonna be like we're trying to make up for something that was like in person versus being remote. I don't think we have to look at it that way. It's like, how do we figure this out and be effective. So it's like, to Jem's point of like measuring the room. It's like, I'm not gonna force everyone to just like go to social event, so that I can get that but it's like, are there ways in which still gives you those signals? And I think that's still something that we're learning. I think there are solutions, but it's like, it's still figuring that out what works for you and your team.

</p>
<p><strong>Shirley Wu</strong><br />
I've noticed like Laurie mentioning her manager a lot. And like, Laurie, your manager? Sounds awesome. Wait, who is your is it Ryan?

</p>
<p><strong>Ryan Burgess</strong><br />
It's not No, no, no. He's great, though. He is great.

</p>
<p><strong>Laurie Barth</strong><br />
Admittedly, the manager I was just mentioning as my last manager at my last company, but I have previously mentioned my manager at Netflix. And yes, he is awesome. I have a shout out, right.

</p>
<p><strong>Ryan Burgess</strong><br />
Absolutely. Give him a shout out. He's

</p>
<p><strong>Laurie Barth</strong><br />
great. My managers facade. And he's awesome. And he's never had a remote employee before. And he spent so much time trying to make my colleague who's also remote, our experiences really collaborative and wonderful. So shout out to the soft,

</p>
<p><strong>Lucero Carmona</strong><br />
he's great. Our manager was the same way for Shawn. He's been really great.

</p>
<p><strong>Ryan Burgess</strong><br />
Sean's great too. By the way, I'm just like, gonna say that as well.

</p>
<p><strong>Shirley Wu</strong><br />
Awesome. Because yeah, I kept on hearing you already talked about like, all of the things that your manager has done to make the onboarding kind of smoother. So then I guess the question is like, and I think we've dropped like hints here and there from like, kind of. But what are some tactics that you've been using as managers to the three managers in this virtual room? What are tactics that you've been using, that, you know, have been working well to like, onboard and make your new employees feel more comfortable and welcomed?

</p>
<p><strong>Ryan Burgess</strong><br />
A couple things that I've found, oddly useful, is maybe even similar to what Laurie was saying on the check in thing is, early in COVID. It was like we started doing this as a team where we, we have our private team chat in Slack, like just a channel. And it was just like little things of saying, like, Good morning, or like, how's it going? Or like, Oh, happy Friday, and everyone was chiming in with this. And it wasn't so much measuring the health, but it was replacing what we were usually doing in the office setting cheers, where you would walk by each other's desks, and you would just be like, Oh, good morning, and hi, how was the weekend. And so we're doing that as a bit of a replacement, just like kind of just got in the habit of is it wasn't like we call it out or just something we started doing. So I found that to be fairly useful. Another thing too, that I started doing is just even sometimes checking in with people a little more through something like Slack, not just waiting for one on one to say like, Oh, how's things going? It's like just remembering certain things that people on my team were maybe dealing with, like maybe like Laurie said, purchasing a house, you're like, how's that come in? I would do that in the office in person. But now I'm like, Oh, well, I'll just send them a direct message on Slack and just see how that's going. And so genic it's just like looking for ways in which I would operate in a in person setting and saying, like, Well, how do I do this a little bit differently. And so that's something I also want to try and remember in that hybrid world where if I'm in the office, how am I thinking about people that are remote? And cheers again for this? I'm saying it so many times.

</p>
<p><strong>Shirley Wu</strong><br />
Do you do that more for your new employees? Or like do you check in even more with your new employees? Or is it just about the same like just specifically more about

</p>
<p><strong>Ryan Burgess</strong><br />
that's a good point, you did mention the onboarding, I will say another onboarding thing, and I believe I've even shared it on an episode in the past. But one thing that early on, it was like end of March, I think, was had an engineer that was starting on my team. So he's super new, and didn't, we didn't even know how to onboard people like it was so early for us. Like it wasn't just Netflix was not really used to doing that. One thing that I can't even take credit for it was someone on our iOS team had done this was they set up a, it wasn't a private channel, but they set up set up a engineer onboarding just for this engineer. And it was great so that anyone could join or get added if there was a question that was relevant. And so it was even broader than just your direct team, like you'll have your direct team slack. But this is super helpful. Just like he felt very comfortable that he could go into this channel his channel, and ask people, and then they could even just pull in someone else as this person is great for this advice. So that to me, I've done that since like, I think that that one's like very powerful. And I've, I've shared that with other leaders at Netflix. And I just thought that was such a great idea. And I couldn't even take credit for it just another engineer did it. And I was like, This is amazing.

</p>
<p><strong>Lucero Carmona</strong><br />
For me, when I was onboarding some new teammates that were virtual, it was dedicating a lot of time. So anticipating that they were coming, I locked down my calendar and made sure that they had all the time because it's just so much information that they had to get on board with and start learning. But for people who are, I guess me coming in as a new manager, I haven't hired for Netflix yet so far. But one tactic I like to use is adding overflow time after the one on ones and it's only on my calendar, it's not for the individuals. But if they want to continue talking, I hate the idea of abruptly cutting them off, because I have to jump in next meeting. So making it more natural, the flow that you would get back if you were in the office,

</p>
<p><strong>Jem Young</strong><br />
stealing that idea was totally stealing that idea. Because that was me all the time. We're like good conversation, like, gotta go get my next one on one. I don't want to be rude to that person. Great, great tip, as always. And Lou, Sarah and I disclaimer, have very regular one on ones where we have great conversation. So I learned a lot from her. One thing that has helped so far is being explicit with our working hours in our support hours, just as a team like hey, what do we what do we think we should all be at our desk generally available, and just being explicit on that. So we're not scheduling four o'clock meetings, which should be seven o'clock on the East Coast time. i It's just really easier to plan your life about. And that way, if you're like, hey, I don't want to bother someone, I don't know what they're doing. It started working hours, we generally expect people to be at their desk unless they're not was really, really helpful, I think for the team. I don't know, hopefully. But I've learned a lot from managers, you you hope things are useful, and that the team also thinks they're useful. They may not be but so far that that has landed really well. Also, like you said, the you got to have regular one on ones. I assume every engineering manager now has one on ones, but you have to have them you even if it's painful, even if you're like I've got nothing to talk about. You fill up the time you always do. But you just don't know what's going on people's lives, especially with kids and childcare and how stuff we all have house stuff to deal with at some point. Just making that time and being thoughtful, really goes a long way. And I see the last one is this is a little bit more obscure, but making sure they have the right equipments. i The first thing I did was like, Hey, how's your laptop, and it turned out like one of my team members, there's like a keys key socked in, you know, it's really annoying to deal with this every day. So jiggle the power cord, like get a new laptop, and like just get a new one. I noticed the privilege of working in Netflix where you can do these sort of things. But it's such a minor thing in the grand scheme of the productivity of a team member just getting a better laptop, microphone webcam. It just makes her life easier. And a lot of times people don't realize that it was such a a point of like cognitive pain for them that they're like, oh yeah, this is so much easier to do your laptop. Thanks for pushing me to get that. It's such an easy thing we can do as managers

</p>
<p><strong>Laurie Barth</strong><br />
can I do a couple things that people helped me with when I on boarded. So there are three things that stood out. So one is obviously I knew I had my manager but they gave me a buddy on my team who was like designated to not necessarily answering the questions but hey, who do I ask about this? Because you have no idea what like the triage is like where you're supposed to go to get answers to certain questions. The second was they put all of my not I mean, not all all of my onboarding but like most of my onboarding into this giant like 10 page doc that was broken up into a bunch of different sections. And like First day, first couple days, first week, first month about, it sort of stopped there. But I could take that, in my own time. Like, I could digest that at a pace. And honestly, for most of those things, I like scanned them, and was totally overwhelmed, and then knew to come back to them when I had more context and sort of understood what the words all meant, and who the players were. And then the last thing, and this is just sort of, I think people forget that a lot of onboarding is fun, because it's a new job. But it's also like, work things. So my team made a choice, he made a point. And Jen did too. And Ryan did too, of like pinging me and being like, here are the fun things about working at Netflix, like, make sure you know about this cool thing or make sure you like go and get some swag, or all of these other things like the things that you would find out eventually. But it sort of balances out everything that feels overwhelming and daunting with like, their perks. Like it's not all work, there's, there's great people and we have fun. And we're building an entertainment systems like what's not awesome about that. So having that balance was really nice as

</p>
<p><strong>Lucero Carmona</strong><br />
well. I agree with that. Just the fun things that make the culture of the field of that company, you get to know it a little bit better. And I love it when people just message like, Hey, you don't know this, but this awesome thing also exists,

</p>
<p><strong>Laurie Barth</strong><br />
like a map of which building has Skittles or m&ms, peanut m&ms.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yeah, those are like shared secrets that people like, yeah, you gotta go, you gotta know about this one, because the candy is different in this building. And it's really funny is like, so I've hired and onboarded engineers for years at Netflix. And that's something that the buddy system has been round way before remote. And like, same thing with like that massive dock of like, for what to expect on your first day, week, month, six months. And I think it's so helpful just to have that clarity. And you're right, a lot of it's all overwhelming. Like, I'm always like, don't read the whole doc now. But you can still reference that for a while. And I think that that's so helpful. And then having that direct buddy is like, yeah, they may not have all the answers, but at least you have that connection with them to like they can help point you in the right direction. Well, I think this is a lot of great advice that we've shared here. Hopefully a lot of people found some good advice here. Let's jump into pics. In each episode of the front end happier podcast, we'd like to share things that we found interesting with all of you, and hopefully you'll find them interesting too. Surely you want to start us off,

</p>
<p><strong>Shirley Wu</strong><br />
I think a few episodes ago. Jem recommended drive to survive on Netflix the Formula One Docu series. And then I we finally watched it a few weeks ago. Oh my god, I 1,000% agree with the Holy Grail. And but I'm going and that's someone that like did not know anything about f1 Like never knew about you know, all of the high stakes drama. Um, and that got us hooked, we binged it. It was, yeah, I that's all I gotta say, because gem already did a really great job pitching it. But I'm just plus one in to drive to survive. And the second one is also on Netflix. Um, and it was something that we recently came across. It's called this this pop up and I think it's a is it a? Is it also a docu series? I'm not 100% Sure, but every episode they kind of like cover either like a genre I think genre music or like a an era in music. So we've only seen the first two episodes so far. But I think the first one was about like Boys to Men and like, kind of that rise of boy bands and how all of the boy groups that came after like really oh wait two boys, two men and then the second episode was about autotune AND T PAIN and all the shit that T pain got undeserved because he was awesome, but all of the shit that he got, and I'm really excited for the rest of the episodes but I just think he's like, as someone that's like, you know, not that well versed and hit music or music history. It's just been really fun to watch and learn and just very well produced and entertaining. So highly recommend this is pop. And I have one final one that is an anti pick. The first time I've ever done an antique is is the first time ever that someone's done an antique

</p>
<p><strong>Ryan Burgess</strong><br />
gem gem does them all the time. But those

</p>
<p><strong>Shirley Wu</strong><br />
are still like that's Valley silicon this is this is just this is just a straight anti pick, which is I think a few episodes ago again, I recommended this anime called so I'm a spider so what and I was like I you know I'm 10 episodes in. It's still entertaining. The main character is amazing. Voice acting is amazing. And I have since finished the first season and I am going to put in my first I'd retract my pick. Yeah,

</p>
<p><strong>Laurie Barth</strong><br />
it was bad.

</p>
<p><strong>Shirley Wu</strong><br />
The animation quality was bad. It just went downhill. I'm sorry to anybody that actually did listen to the pig. And I retract that pig So yeah, those are all of my

</p>
<p><strong>Ryan Burgess</strong><br />
surely that's the first time anyone's retracted a pic that I can think of. So there you got a first there. I also love that you came on the episode with a bunch of Netflix people and just shared Netflix episode or like series. So I don't know if that was purpose purpose to just like be like, Yeah, you guys are doing good workout. Yeah.

</p>
<p><strong>Shirley Wu</strong><br />
Well the third one the anti pick is not Netflix, even diet.

</p>
<p><strong>Ryan Burgess</strong><br />
But so then I know I was like it's kind of it works really well.

</p>
<p><strong>Laurie Barth</strong><br />
I feel like I have to go next just because I just work with a pick based on what Charlie just said, which is I haven't seen this pop. But if anyone has not go watch T pain's Tiny Desk concert on YouTube, one of the most incredible things you'll ever see in your life. It's so good. I had no idea. I watched this like a few years ago. I'm mind blown. He's an incredible singer, like the auto tune is just for a fact. Like, he's so fantastic. Go watch it. So I guess I have to do my actual picks now. But I just needed to add that because it's really important and people need to witness this. This is not Netflix. So I'm Netflix employee being, you know, a terrible employee right now. But we've gotten Addicted to Love Island, USA, we've watched some of the UK episodes of love Island, it's a ride my friends, there's always a twist. There's always something it's total trash television, I'm not gonna deny that it is, but it's fantastic. And you can like mock them relentlessly, not the people, but like the process of the show, and like the same conversations they have. And like, it's a whole thing. And then the second thing which has nothing to do with television, or software or anything is deep kitchen sinks that are not divided is my pick of the week, satisfying kitchen sinks, but you can actually fit your tall pots into that now exist in my household is just a very exciting satisfying pic of the week, month year forevermore.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, let's Sarah what pics you have for us,

</p>
<p><strong>Lucero Carmona</strong><br />
I have two picks. The first one is vacation races. So when I listened to podcasts, I listened to them long distance runs, because that's what I do for fun. And I've done a lot of braces before in the past. So this one is like highly recommended after somebody who's done a lot of them at this point. And the reason I like him specifically is because of the fact that they have a really great partnership with National Parks. So you get to go to someplace that's really beautiful to begin off with. And they do like somewhat plan a little bit. So even after the races, they have like, Hey, these are your challenges for hikes and picturesque things that you can kind of do in the area. They're super sustainable to like in terms of like not using a lot of waste, and like reducing the amount of waste that usually comes from races in general. And then the last thing I'll add for that one, too, is just that they're not just for national parks, they do wineries, international trips and bike rides. Like this is the one you guys this is the one but then my second pick is Radiolab because that's my second favorite podcast like obviously frinton happier is number one spot. But this one, for sure is a great one for storytelling. They do a lot of science history. I've learned a lot technology wise too. It's just really enjoyable to listen to.

</p>
<p><strong>Ryan Burgess</strong><br />
And we did not pay you to say that. So thank you. Jem, what do you have for us?

</p>
<p><strong>Jem Young</strong><br />
We started when you said your first pick. I thought you said vacation racist. And I was like, Oh, this should be spicy. Let's see what vacation racist means. But now, vacation races. That's that's a great idea. And you reminded me that as an older gentleman now I have still have no hobbies and I really need to get one running. Probably not gonna happen. But you know, anyways,

</p>
<p><strong>Laurie Barth</strong><br />
I didn't recommend Lego.

</p>
<p><strong>Jem Young</strong><br />
Don't get the Legos either. I feel like I'm the only one like I've done the shoes like a lot of people I know. And I'm not in the Legos. I guess I'm in the cars only have one only space for one. I don't know I have no hobbies. This is like an ongoing. This is like my midlife crisis is not having a hobby, which is really weird.

</p>
<p><strong>Lucero Carmona</strong><br />
That even during the pandemic, so which time? No,

</p>
<p><strong>Jem Young</strong><br />
I don't I think I occasionally video game but I wouldn't call it a hobby, or kind of house but I wouldn't call that a hobby either. It's more because I have to. Yeah, anyways, this is not anybody's problem. Any listeners problem. This is just the gym problem. We'll work through together. I have two picks today. The first one is one of my favorites. Real television shows on TV, which is alone. I've picked a previous season before there's a new season on Netflix, for those that don't know alone is they have 10 survival experts. They drop them off in the Arctic Arctic, like maybe in fall like right before winter is about to set in. So they only have a certain amount of time to get their shelter and all that and they're completely alone. There's no help. There's no backup, there's no water anything. And I really like it because it's it's authentic. It's as authentic as you can get. You can lie I think You can lie to yourself for a long time, but you're going on 60 days by yourself alone in the Arctic, you can't lie anymore. And you're just like as genuine as possible and seeing people's evolution over time and like they realize what's important. It mostly comes down to family and people they realize like, it's a lot more a lot more important than I thought. But like seeing these people have these revelations over time. It's just it's really great television. Big fan of the lone by second pick isn't a valley silicon pick, it's, I guess it's kind of an anti pick more of a. This is our tech dystopia that we're all building together. It is a smart motorcyclists. So it's a motorcycle vest that when you get into an accident or detects it, it automatically inflates and protects you. These are really amazing device. However, this one is on a subscription. So if you stop paying for it, it doesn't work anymore, which is I understand the business model there. But I just I don't know, it kind of runs counter to the idea of a safety device that doesn't work anymore, if you stopped paying for it, which is kind of what you agreed to with the subscription, etc. But I don't know, ah, this is just like a bad road to be on. And I am not a fan of it. I am not a fan of cars that you have to pay to unlock. Upgrades are something that's already built into the car but you still to pay for it. I don't know. This is just like a bad dystopia that we're heading into. And there's nothing we can do here like

</p>
<p><strong>Shirley Wu</strong><br />
anything that tries to capitalize off of human lives. It's just absolute shit and I agree with you. And I think their

</p>
<p><strong>Jem Young</strong><br />
their argument is you agreed to the subscription you could have bought outright and will work permanently but because there's no there's no standardization or standards body for being a software engineer, who's to say some insert and doesn't write a bug that trickles down and disables your safety vest as you're writing it you know you die because of a software mistake. That's something that's a reality that we all have to deal with. It happens with smart cars, self driving cars, etc. So like I don't know, I this goes on my I guess my not everything needs to be internet connected rants that I've been on many many times. But I would say safety equipment should never be internet connected. It shouldn't ever have to phone home anything it should just work.

</p>
<p><strong>Laurie Barth</strong><br />
Many plus ones for what it's like when we're picking all the things for the kitchen. They're like Do you want a smart this smart that I'm like nothing in my kitchen should connect to the internet? None of none of it? Like why would I want that? I build software. Do you know how buggy that crap is?

</p>
<p><strong>Jem Young</strong><br />
I'll tell Ryan though, we he and I Oh, head to head

</p>
<p><strong>Ryan Burgess</strong><br />
but but I'm actually agreeing with Laurie on that, too is like I don't have smart fridge or all those types of things. I don't need that. It's like usually my stuff is somewhat practical, like blinds that I can open and close. Like that is super helpful. Yeah, but some of the things where it's like could cause pain like a stove. I don't want that.

</p>
<p><strong>Jem Young</strong><br />
I've seen Mr. Robot where they lady's house and like make it do all sorts of crazy things. And it's not far fetched at all. Like these are real. No. Anyways, that's my soapbox. We haven't we haven't done an episode in a bit. I've had a lot of rants built up. And, you know, thank you all for listening. Now I'm good again. I don't need therapy. I have a podcast. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
All right. Well, on that note, I do have two picks. I know smart devices jam. So we're safe there. Hopefully, I have one Netflix series actually a docu series as well. It's called heist, it covers three real heist that happened. It's really well done. They do two parts for each heist, and they get the real people to that they're talking to that are involved not all the people obviously because some may investigation still may be ongoing. But it's just really well done and just they go in depth on some of the highest and how they were done and all the prep and everything that goes and I think I've picked ice things before like the ice podcast. So this this felt fell nicely where I was like, I'm totally gonna watch this and it was really good. I enjoyed it. And then my second pick is kind of a weird one, but it's, uh, I'm big into like, not getting burnt by the sun. I care a lot about all my tattoos and I finally was like, oh, I should just get some clothing especially when driving like when I'm doing longer drives that is protects you from the sun. And I found a cool company called Cool bar that does some pretty decent clothing. I found a couple hoodies that I've purchased that I've really liked their light but they're also protecting me from the sun. So I thought I would add that as a pic. So if anyone wants to stay out of the sun, they work great. And they they're comfy. All right, well that is everything for today's episode. I want to thank Lori and Laura Sarah for joining us. Thank you so much. It was awesome having you both on where can people get in touch with you Lori you may as well start on Twitter

</p>
<p><strong>Laurie Barth</strong><br />
at Lori on tech. I'm pretty much everywhere outlawry on text and all everything links from my website or my Twitter. So yeah, that's where I can be found. Sarah,

</p>
<p><strong>Lucero Carmona</strong><br />
I actually have a Twitter account which I completely forgot. Mona, but you probably I'm leaving find me there so LinkedIn you could definitely find me there.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on. Well thank you all for listening to today's episode. You can find us on front end Happy Hour comm you can find us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a> you can really listen to us on whatever you like to listen to podcasts on. Please subscribe. Any last words,

</p>
<p><strong>Jem Young</strong><br />
Ryan has picked high stuff so many times. I just want to say if there's a heist in the future I had nothing new is gonna go from man Heiser really cool to be like Jem, you want to play the highest? I'll be like, No, that's ridiculous. But I'll talk to you. You

</p>
<p><strong>Ryan Burgess</strong><br />
do know that you're like if there's a heist been done that if I'm doing it you were involved like we're just incriminating ourselves right now but yeah, Jem is my accomplice period.

</p>
<p><strong>Laurie Barth</strong><br />
Plan A Perfect Murder where you write the book and then actually do the murder.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, no like and Jem can deny that he's not part of it. But like he's part of it. Okay, like your

</p>
<p><strong>Jem Young</strong><br />
honor. Do you really think we're dumb enough to talk about

</p>
`;
return transcript;
};