module.exports = function() {
'use strict';
const transcript = `

<p><strong>Ryan Burgess</strong><br />
Welcome to a brand new episode of the front end Happy Hour podcast. In this episode, we will be talking about burnout, which I mean burnouts so relevant in so many times. But more so in in a pandemic, I feel like it we've just been dealing with interesting challenges one after the other. And so we're joined by some great guests today to really help us talk about burnout. So we are joined by Vita, he and Eli to talk with us about burnout it and Eli, can you give us a brief introduction of who you are, what you do, and what your favorite happier beverages?

</p>
<p><strong>Vaidehi Joshi</strong><br />
Okay, I guess I'll go first since I was first in that list. I never get to go first, by the way, so I'm jumping at the opportunity because everything's always alphabetical. And my name starts with a V. So I'm sorry, I'm taking taking this mic. Hi, I'm Vita he Vaidehi Joshi. I'm a software engineer, currently just a rogue free agent, not working for any company. What that really translates to is I'm just, I burnt out very badly earlier this year, and I am taking this lovely summer sabbatical. And it's been lovely. I've been in the field a few years, I have a background in writing. So a couple side projects that I've done have been technical writing projects, I did a writing project called BASS Cs that a lot of people might have heard about, I was kind of demystifying the fundamentals of computer science in an effort to teach myself that. And yeah, that's a little bit about me.

</p>
<p><strong>Eli Fitch</strong><br />
And I'm Eli Fitch. I'm an engineering manager at matte box, where I support engineers working on matte box studio, which is like our flagship cartographic design tool, like figma. But for designing maps, and yeah, maps are cool matte box is great. And I have extensive experience with burnout at a handful of jobs, including my first three in tech each got kind of burnt out. And yeah, well, I don't want to burn. Good, good content. But yep, Web GL stuff, 3d stuff, performance stuff. All of those can burn you out. All

</p>
<p><strong>Ryan Burgess</strong><br />
right, well, let's also give introductions of today's panelists. Surely you want to start it off.

</p>
<p><strong>Shirley Wu</strong><br />
Hello, my name is Shirley Liu, and I am now a grad student. And that

</p>
<p><strong>Ryan Burgess</strong><br />
won't cause any burnout.

</p>
<p><strong>Jem Young</strong><br />
Remind me Jem Young engineering manager

</p>
<p><strong>Ryan Burgess</strong><br />
at Netflix. And I'm Ryan Burgess. I'm a software engineering manager at Netflix. In each episode, the front end happier podcast, we'd love to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. And so what did we choose for a burnout keyword? Oh, very well, overwhelmed. All right. So if we say that we're overwhelmed, all take a drink as a good way to start. I mean, we've already started talking about burnout. But maybe we should level set on. What is burnout? I mean, it's a it's a term that is heavily used in our industry. But how would you describe what burnout means to each of you?

</p>
<p><strong>Vaidehi Joshi</strong><br />
I think it's really hard to define because it manifests so differently in different individuals. I did look it up at one point earlier this year. Actually, I didn't look it up some a coworker sent me like a long Mayo Clinic article being like, please read it. I was like, Oh, it'll sound great. I looked it up. No, I didn't even know I was burning out. Someone had to, like raise that flag. But I mean, I think that the definition that I read once was that it's like a special type of work related stress, which is like so vague, and it's like, I don't think it's like a medical condition. But it's related to a lot of different medical conditions, because it can cause it, it can lead to long term, chronic conditions. But workplace related stress just feels underwhelming to describe what it can feel like when you're going through it, you know?

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. And I also, I attribute it to maybe like more factors too, because like, even as I intro, the episode is like I talk about the pandemic, and that weighs on us. Yes, it shows up in work and all those things, but I feel like burnout shows up for me, in a lot of ways or a lot of things can be impacting it or leading to burnout. So I don't like just the word keyword there.

</p>
<p><strong>Eli Fitch</strong><br />
Yeah, I totally agree. And at least for me, burnout really presents as like heightened depression and anxiety, those feelings of being overwhelmed and the inability to find joy in things. And I think one of the reasons that it seems like the pandemic is leading to so much more burnout or like, getting burnt out on like, Zoom happy hour with your pals, getting burnt out on, like, just staring at the same four walls every day is that it's sucking joy out of our lives, which is kind of like, burnout is sucking joy out of work. So it kind of feels the same way.

</p>
<p><strong>Ryan Burgess</strong><br />
Here's Eli

</p>
<p><strong>Jem Young</strong><br />
is burnout, something unique to our generation? Oh, it has always existed and just nobody had a name for it. Because I don't recall my parents ever discussing burnout, or ever really learning about it.

</p>
<p><strong>Shirley Wu</strong><br />
I'm not sure if it just my parents being that they immigrated to this country. So I feel like immigrants just have this, like, we're just gonna keep pushing through, like, no matter what kind of, you know, mental health issues we're having. That's not a mental health issue. It just we got to push through it just another roadblock to our new life, and we got to push through. So I don't think I've ever heard my parents complaint ever.

</p>
<p><strong>Vaidehi Joshi</strong><br />
That resonates with me everything you just said, I've never heard it used in any generation beyond ours. I looked it up just now. Apparently, the term was coined in 1974, which is like a battle. Oh, but yeah, I mean, I bet it existed before but like similar to what you just said, Surely, like that whole concept of, I can just push through the site just need to push a little bit further, I just need to go a little bit harder. Like, it'll be better soon. I should get through these two weeks or whatever.

</p>
<p><strong>Shirley Wu</strong><br />
And actually speaking them. But I, I feel like every generation we're getting slighted better about articulating whether our about our well being or not well being I feel like for all that fun that Gen Z. I feel like they're doing so many amazing things. In terms of I just look at my little sister and the way that she talks about her mental health. And I think that I just I just think that every generation we're getting better.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yeah. Yeah. Mental health wasn't talked about, like, that wasn't really a thing. Like, especially in like, I think in our parents generations, like it was like, Yeah, you didn't talk about those things. And it's, and so I think it's becoming more common in that. I also feel like, I'm surprised that it was even made in like, what 1974 like that it was coined. I look at it as it's one of those terms that like, yes, that existed. But no one really had a term for it. It reminds me of something like imposter syndrome is like the first time you hear it, you're like, what is that? And then people describe it. You're like, oh, yeah, no, I totally know what you're talking about. I've experienced that many different times. And I feel like that, to me was always burnout was like, once I heard it, and was like, Yeah, that makes a ton of sense.

</p>
<p><strong>Eli Fitch</strong><br />
I think that it we did have words to describe it. It was just different words, like burnout is like rampant in among educators among doctors and like professions where your job is to serve others. And they call it like, jaded, or like they're like old and crotchety, but it's like, really, they're burnt out, because they've been an educator for 30 years. And it's like, that'll crush anybody. Like, that's like the hardest job in the world. And they've been doing it non stop for three decades. And it's like, that's burnout. But it's just called different things like, you know, talking about our parents generation, it's not like depression didn't exist, it was just like, Oh, I'm not depressed, I'm just, I'm just tired, or I'm blue, or, you know, that's like, they just didn't have as precise language to describe the emotions they were feeling. But it's not like, depression is like a new thing.

</p>
<p><strong>Shirley Wu</strong><br />
That's a really good point. And that actually really reminds me of the point about people in the workers in the service industry. It really reminds me of a book that I've been listening to recently called burnout. There's also like a longer subtitle, but essentially, it's literally called burnout. It's geared towards women. And it talks about kind of the sort of, mostly women might feel as being born into a society that expects them to be human givers and to serve others constantly. And so that kind of resonates a little bit with me, highly, highly recommend that book for any women or people that identify as women and also recommend it for any men to understand. We have to build

</p>
<p><strong>Ryan Burgess</strong><br />
empathy that's always a great way to learn empathy is reading about it. So yes, I love that Shirley.

</p>
<p><strong>Shirley Wu</strong><br />
And then I wanted to kind of add a little bit about if I think about burnout for me personally, there's like also a physical feeling to it for me where it feels like suffocating but not from the throat but from like a from it feels like a heavy weight on my chest like a burning heavy weight of suffocating on my chest. I think that's, that's when I'm like, oh, like I'm putting my body through a little too much. So I think that and then the mental side of it for me has been when I realized that the thing that I've been spending many years and have enjoyed for many years that I had too much of that. And then suddenly, I found kind of like what Ellie mentioned earlier that I found zero joy in it, I just didn't want to even look at it. I didn't for months, I didn't even want to have anything to do with it. Um, and then I had to slowly kind of come back to that

</p>
<p><strong>Ryan Burgess</strong><br />
thing we've covered a little bit even surely getting into that, but I'm curious for the rest of you all to is like, how does it show up for you? Maybe some things that are weighing on you that causes it, but even like, how does it impact your ability to work or get things done?

</p>
<p><strong>Jem Young</strong><br />
For me? I think burnout over the years shows up as just kind of being tired. I'm just like, you know, I'm a relatively physically fit person in my 30s. Like, I shouldn't be this tired. But the just I am. And I realized, like, what is the cause of that? And it's, it's usually, like an absence of joy and work. And like this thing? It I don't know, for me, I either get physically tired or it's I like having existential thoughts about like, what are we actually doing in tech? Like, what are we building? I am I optimizing some metric for this specific customer so that they can do X? Like, what what are we actually doing? And it to me, it just makes me question like everything we're we're doing in the tech industry. And I think I alleviate some of my burnout through the podcast where like, I'm critical of the industry where I can just like get it off my chest, and I feel a little bit better.

</p>
<p><strong>Vaidehi Joshi</strong><br />
I think, for me, it is a very physical manifestation, which I think I've had more acute versions of burnout. And it was more just like a little bit more psychological, emotional, but like, the worst burnout I had this year, was like, my body was sounding huge alarm bells. And like, that's when I first started paying attention. And I was still kind of like, Oh, it'll be fine. Like, like, surely and I were sort of alluding to as like, it'll be fine. And then it got to a point where I was like, Oh, this is not fucking fine. Get rid of the bad. But like, for me, the whole weight on your chest thing definitely was it definitely showed up. But also, like, I just like, had pain on my shoulders and back. And like, my body was clearly just like, resisting what I was putting it through at work, basically. And, you know, like, I would wake up in the middle of the night thinking about work, I would dream about work, I would dread going to work every day on Sunday night, Sunday morning, I just thought, Oh, God, tomorrow's Monday, like, which is, you know, not how you want to spend any day of your life really, to be honest. But, you know, like, I think I just had like very clear physical manifestations of stress. And like, I think at one point, my partner just said to me, no, you come up the stairs every day after work with your head in your hands. Have you ever thought like, maybe there's something going on? Like, I which I, you know, I think burnout, to sort of speak to what we were talking about earlier, a lot of other people will notice manifestations of burnout before you even will, because it sort of happens a little bit at a time. It's not just like a switch. It's not like, you know, on Tuesday, I was fine. When Sam Berto I think it's like little things that happen. And because you're in it, you don't necessarily know that it's happening. And so you know, maybe you just feel a little tired, or maybe you just feel like emotionally exhausted, or you're not sleeping well. And you're like, it's, it's okay, it's like a temporary thing. But when it continues for a long time, you don't realize that it's having that effect on you. And I think I'm not a doctor. But I suspect that's why you know, your body starts to give you those physical signs, because it's like, it's gotten to the point where, you know, the emotional and the mental part of it wasn't an alarm bell for you. Now, I'm going to really do something to make you pay attention, which at least in my case, worked.

</p>
<p><strong>Eli Fitch</strong><br />
And I don't know if it's like, I can't speak for all cultures, but I think I can feel okay, speaking about sort of American culture, tech culture, which is like the, the virtue of hard work, the virtue of a work ethic, and like toughness and mental toughness of like, you know, just push through it, and you'll catch a second wind when you're running a marathon, or just like, just put push through it and give me like two or three more reps in the gym. And it just doesn't work that way. Like, your body is warning you that something bad is coming. But we keep telling ourselves that well, we can just push through it and it'll be fine. Or like, I'm just tired today. Or like, it's just this project isn't super interesting to me. Or like, I'm just going through a rough patch. When like, really, it's these little cumulative cuts that build up and up and up.

</p>
<p><strong>Jem Young</strong><br />
There's a lot there. I want to pull on but I guess to start, why is it that burnout seems more common in software engineering and tech. Is it that culture you're just describing the lie that we push and we push and we push? Or is it something else?

</p>
<p><strong>Eli Fitch</strong><br />
I've kind of medium tech, lukewarm tech, I'm unsure of the spiciness of my take, I actually think that burnout is less common in the tech industry than in a lot of other industries, even a lot of other white collar industries. And maybe that's because many people in tech have only worked in tech. But like, to me, burnout is much more prevalent and satire among educators, lawyers, and doctors. And that's just my friend group as educators, lawyers and doctors. So like, that's just my experience. But like, I actually think that like, burnout is a problem in tech, tech workers are exploited as all workers are exploited. But I actually think that like, broadly, we have a relatively high amount of power, pretty high amount of agency to determine that we work on in order to make sure that we're solving problems that like, even if they're not net benefits to society, or at least intellectually stimulating to us. And like a lot of other people who are in sort of similarly, like, high pressure, or, you know, highly compensated positions, like doctors and lawyers, like they don't have that flexibility, or that freedom, they are just like, kind of automatons like they don't get to determine the work that they do. And they just kind of have to grind away at it. And at least in my own limited social circle and view, it seems much worse in those industries than it does in ours.

</p>
<p><strong>Ryan Burgess</strong><br />
It's interesting, I like that you said to is that, you know, we have this freedom, and we have like to choose what we work on. And I think that is no I mean, a little bit more than I exactly the doctor examples, like, how this dude is in pain, you know, like dying on my table?

</p>
<p><strong>Eli Fitch</strong><br />
I don't feel like part, it's just not interesting mean that I have to pull a bullet out of the sky.

</p>
<p><strong>Ryan Burgess</strong><br />
I'm not feeling it gross. Many times before. Yeah, it's

</p>
<p><strong>Shirley Wu</strong><br />
not a new challenge anymore.

</p>
<p><strong>Ryan Burgess</strong><br />
So and that makes a ton of sense. And, and I think there is some Yeah, we can like revitalize ourselves by trying to shift on like, the type of things that we're doing, which can be helpful. But another thing that I thought of, even as you're talking is those jobs, like, they also go to a place right, a lawyer goes to an office or I mean, they can do some work at home. And same with doctors a little bit. But your mace basically go into a place. And I think that our problem, I think, too, is the fact is we can work from anywhere. And so yes, there's offices. And you know, we've talked a lot about different remote to cultures and things like that. And that's a great positive. But I think even when you think of a vacation, it's easy to just be like, Yeah, fine, I'll just jump on that call or fine. I'll just like, edit this feature. And so I think that that sometimes plays into it. And another factor I was thinking about is the presence online of all the things that everyone is doing, whether it be on Twitter, or GitHub, I love the look how many there how productive I was, you know, that is, can be motivating to see what others are doing and excite you. But it can also be very exhausting and demotivating to because you see all the things that people are doing, and all the things that you're not doing, and that can be overwhelming just in itself. 

</p>
<p><strong>All</strong><br />
Cheers.

</p>
<p><strong>Shirley Wu</strong><br />
I've been wanting to talk about this. For the longest time, I've been wanting to have a separate episode on this but toxic productivity, I have so many thoughts and conductivity, and especially about how much we glorify it in tech. I don't I can't speak for other industries, but which people are in. And I think it might not be that we have any more burnout in tech, but we just talk about it much. Maybe it's that we talk about it, we express it much more in tech. And I wonder if that's how much we just glorify burnout, because burnout is just when you just take productivity to the extreme. And actually, isn't that a cool thing? Well got all the things that you did, because you just worked yourself to the ground, but look at all of the things that you were able to build. And I wonder if that's part of it, too, that we a lot of times maybe it's that we do have something even if it's intangible, but there is something to show for it at the end that we're like, oh, you know, I sacrifice my health, but look up this thing that, you know, I built or look at this thing that I built and then now it's got so much traction or now it's got so much attention or like without all of the other benefits that it's gotten me that has nothing to do with my health or my mental physical or mental health. But look, I just have gained so many Twitter followers or whatever it is that you know is important to me.

</p>
<p><strong>Ryan Burgess</strong><br />
All those followers are so important.

</p>
<p><strong>Eli Fitch</strong><br />
It's a literal number to which you can ascribe how important you are.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it is dangerous I feel like the whole like influencer or that culture that comes along with followers. It's stuff like, I feel like that's hurting our generation. And so that even going back to what you all said about the generational thing, it's like, yeah, I mean, come on, the internet has taken a big jump forward. And I think that that's causing a lot of this too. And, yeah, like, Instagram is a joke. I mean, it's like people are posting their real life, they're posting all the happy moments on there. And it's stressful if you if you're having a bad day, and you're like, oh, everyone's just so happy and great. You know, like, that can be stressful.

</p>
<p><strong>Eli Fitch</strong><br />
But that's kind of true of tech, Twitter, too. Like you're posting the successful output of your project that has traction or like your great talk, or your like, cool art thing, like code art thing that you made, you're not posting the 100 failures that led you to this point.

</p>
<p><strong>Ryan Burgess</strong><br />
I think sometimes those failures too, or things or frustrations, sometimes you can't even really publicly say, right, like, you could get in a lot of trouble for saying that. There's been times where I've noticed that where it's cool to talk about your own failure. Like I'm comfortable saying that. But if, if I'm being mistreated, and at work, I'm like, I can't really say that, which I'm not, I just want to call that out. But it's so cool

</p>
<p><strong>Eli Fitch</strong><br />
to talk about your own failure when you're a white dude, because you're just affable and self effacing. And we don't have anybody assuming that we're idiots. If we make a joke out, we don't know something, actually,

</p>
<p><strong>Shirley Wu</strong><br />
to the point about Twitter and seeing other people that are, I'm seeing a comparing yourselves to yourself to others, who just like, we just think that they're being so much more productive. I guess the flip side of that, for me is like, I have this weird thing. If I don't, I think I'm like getting over this. But for the last for a while, where if I didn't tweet every single day about something I was doing, I felt like I was failing, somehow, like failing my audience or something of like, or like being like, this is something that my friend told me, which I thought was interesting. And I kind of relate to which she was like, Oh, and you know, what, if people think that I'm not being productive, what if people think that I'm like, you know, that I'm not doing anything right now, just because I have these projects, you know, that I can't talk about, but like, what if they just think that, you know, I'm a husband. And I don't think she used that word. But it's essentially like this weird counter pressure of like, if you used to post a lot about your work, or just publicly speak a lot about your work. And then you stop that kind of that weird sort of pressure to I'm not sure if this is as much about burnout, or if we're now just going into a tangent of bashing Twitter, but also kind of, there's like good things about Twitter, but also, we're just bashing Twitter now.

</p>
<p><strong>Vaidehi Joshi</strong><br />
That that what you just said, totally resonates for me, because I stopped doing a bunch of side projects. I don't know, sometime, maybe 2019. Like sometime before the pandemic. And before I started this, really, and you're preparing,

</p>
<p><strong>Ryan Burgess</strong><br />
you're

</p>
<p><strong>Vaidehi Joshi</strong><br />
like some shits happening, I'm gonna just stop. But like, I definitely had that feeling of, you know, I'm not producing anything, are people bored of me are our people going to care, like that relevancy thing of mattering. And at some point, I just like, I detached a lot from tech, like early 2020, like 20, late 2019, just because I was like, this does not like being online all the time was not making me happy. And I like, realized how much time I was spending just scrolling. And it was like, it was it made me so sad thinking about how many hours I had done that. And I just kind of sort of backed away and like, I still have Twitter. I like the connections I have on it. And you know, I've gotten so many opportunities through it. But I had to, like teach myself how to undo some of the really terrible habits I had, where I felt like I had to be engaging all the time. And now I just sometimes don't engage or I come on and I say what I got to say, and then I leave for five days. And that's okay. I noticed those same habits and I had to like actively undo them as a as a choice because if I hadn't noticed it, I would have just kept on doing it. And I just didn't like the person I was becoming when I did those.

</p>
<p><strong>Eli Fitch</strong><br />
It sounds like we went through something like a similar kind of journey kind of at the same time. Like I got really you're also aware

</p>
<p><strong>Vaidehi Joshi</strong><br />
of some shit happening.

</p>
<p><strong>Ryan Burgess</strong><br />
Your first line readers, your Yes.

</p>
<p><strong>Eli Fitch</strong><br />
video cards just sitting on in 2018. I like did a bunch of conference talks and drank too much because I was writing decks all the time. And we're just like polish off a bottle of gin while I was writing a talk that weekend for the next week. And like that was just normal. And like, realized that the end of that year. That, like, I, like, wasn't any more famous, didn't get any pleasure from like, traveling all the time and never being home and never being able to relax that, like, my body felt like garbage that like I wasn't seeing my friends. And I like, like I, you know, the mission to sort of like, become a famous, like developer who speaks at conferences wasn't successful. And like, I got a really bad performance review at work. And I'm like, well, all of this basically meant nothing. And so I like cancelled everything, stopped a bunch of side projects, canceled work workshops. And like, didn't do any comp, I was like, I'm not going to do conference talks for a year. And I'm done a common stock sense. And like, I haven't, like, I've like made some games on my own, haven't really released them haven't really talked about them. They're just for me. And that's totally fine. And it feels really, it feels really good. But I also wouldn't wish the journey on anyone.

</p>
<p><strong>Vaidehi Joshi</strong><br />
I like what you said, though, it's just for me, because that's my metric. Now, I used to be like, Oh, I have to do this, or I gotta, I gotta submit to x conference this year or whatever. And now, I unless something is like, itching at me, like a blog post idea, or conference, or, you know, just something I want to learn, I let it itch, I let that happen for a while. And only when I'm like, No, I want to do this like not for X person, not for y outcome. I just want to do this. And I like want to read these three books and like, turn it into a talk, I think that'd be cool. And maybe it doesn't even turn into a talk. I'm just gonna read the books. That's when I know it's worth my time. And because I had to extricate myself from what other people thought. And that's like, going back to what you were saying to Eli. But I love that, that little snippet, just for me, because I think tech Twitter makes it very hard to figure out what is that. And I mean, this kind of also extends back to that conversation of burnout to where it's like the things that you sometimes do, are for your boss, or for the good of the company or for the product or for the team or your career. And it's up to you ultimately, to draw those boundaries. The just for me, really where you have to figure out like what you are and aren't willing to put up with where your line is. You don't need to give your soul to something whether it's an organization or a side project, or you know, your long term career. Because I think at a certain point, like when you give enough of yourself, you don't really get that back or you have to work really hard to undo it, at least is what my experience has been. So I commend the just for me, but I have to, like remind myself that often,

</p>
<p><strong>Ryan Burgess</strong><br />
it's really advice. Like it really is like even for us doing this podcast like we this is going on, like five years or something that we've been doing it. And I've always said when it's not fun anymore, and it feels like work. I mean, there's times when it feels like work, like editing and getting the episode out. But if I'm not enjoying it, then let's move on. And but I mean, and also people get value out of it. That also is also helpful for me as a measurement. But it's not like it's not about like how many people listen to it, or I think when you remove those types of metrics, because they're just vanity metrics, like, it's more, did I enjoy it? And did others get value out of it? That's useful. And I think that it's easy to get hung up on the like, you know, saying about Twitter's like the Twitter followers that Twitter likes, or I don't want to get started on Instagram. It's a whole nother thing. But you know what I mean? Like it's that. So I love what you both just said it's just it resonated so well. Thank you,

</p>
<p><strong>Jem Young</strong><br />
all of you. I think all of us have touched on 2020 the pandemic and how it is made things clear, or maybe less clear, or it's changed something I know, every single person on this episode here has either changed companies or changed roles are change teams or has changed something about their lives in a major way that they didn't do before. Which is really interesting. Because how often would you say in history that would happen? A random assembly of five people and we've all done something significant in the past year to To what extent did the events of 2020 kind of exacerbate burnout?

</p>
<p><strong>Ryan Burgess</strong><br />
I mean, I've heard some people say they've been more productive. I don't fit into that category. Yeah, like he I love the face. I don't I don't see how I've been more productive. I feel like there's just so much shit to deal with. Like it's I'm more stress. There's a lot to think about. It's different. Maybe there's some benefits to like everyone being remote there. Like there is like we've talked about remote culture and how you know, it's been better for certain people to be able to be heard in meetings and there is benefits but I think as a whole I don't see how people been more productive. I love that they I have heard people say that I'm like, great, good for you. That's awesome, but I feel like it's caused me a lot of Extra, like pain and just even things that are not work related. I think one, the thing I was thinking about through burnout is I haven't felt like I've been able to be creative. And that's something that like I've always tried to do throughout my entire life is whether it be like painting or drawing, or like, I've been big into photography for the last few years, I struggle, I can't get myself wrapped around like to do that. And that's something that I've enjoyed time and time again. And that kind of stuff. It bothers me and, and I feel like I'm missing a piece of me because of it. And it's a lot because of just dealing with so many other things, I don't have the energy,

</p>
<p><strong>Shirley Wu</strong><br />
I want to chime in and say that, for anyone that have kids, I have mad respect, because to your point, Ryan, about how you haven't felt productive. Like, I feel like I could be completely wrong. But I feel like the people that have felt productive in the past year and a half are probably people without kids or don't have to give a don't have caregiver responsibilities, even if they do have kids. So having said that, I guess I'll kind of offer the other the opposite side, where I did, at one point feel very productive. At the beginning of the pandemic, I think I'm at my core, a very introverted person. So when the pandemic started, I was like, Whoa, this is awesome. I don't have to make excuses about why I don't want to go out tonight. Like my I don't want to see my I don't even have to be to argue with myself between like seeing friends versus doing or working on something I really want to. And so for the first like two or three months of the pandemic, I was like, This is amazing. Like, I can't go outside. But also I'm just super heads down on this project. So I guess I'm not missing the outside world. And I can just keep working on this project. Because there's absolutely zero distraction. And then while doing the project, I was, like I hear people be like, you know, like I going through all the stress of the pandemic. And I'm like, I don't understand this is great. And then two or three months later, when I finished my project, and I kind of like came back up for air. And I was like, oh, oh, I see. Like, I see the kind of like grieving that people were having over not being able to go outside like kind of just not having, not being able to do our daily things and kind of having the things that were just what we took for granted previously taken away. I was like, Oh, I understand that. And that's when I felt the burnout. That's when I felt the burnout of essentially, if I was to kind of summarize what I've learned from this episode, I think the burnout, things are one a lack of choice, I think. And then I think too, I'm giving much more than we're able to. And I think at the beginning of the pandemic, for me, it was exacerbating the lack of choice. And part of the burnout,

</p>
<p><strong>Jem Young</strong><br />
I had a really good conversation with an engineering leader the other day, and one revelation that came came to me was one of the reasons why personally like why I get so tired. And it's just like, it's the same thing is because every day, we wake up, we go to our desks or our office or our closets, and we go to work, and we chat with friends, and we chat with family. And we, we talk on Twitter, and we play games, and we do all the same things from the same spot. And that's not natural. And there's, there's an absence of randomness to it. That like we need, you wouldn't think that but like humans need a bit of chaos. Like we're not factory workers. We're not robots, we need that, that randomness. And because we don't have there's no entropy in our day to day, we get what I would consider like cold burnout, which is you're tired of life. But that's because life isn't really doing anything for you. But there's not much you can do about it because we're in a pandemic. And not all people want to hang out with you and a pandemic and things like that. And it is a if you feel bad. And like you're feeling this, you're not alone. But it's it's, it's so common. I feel it all the time. And I I'm not sure there's a solution to it other than acknowledging like, that's the thing. And we just to be aware of it. But know that no other time in human history, have humans ever gone through this. So that's something very new. That's not something anybody else can say is that we collectively are going through this brand new experience of there's just no novelty. Which is it's silly because we have the entire world at our fingertips via the internet. Yet we're still bored and like I think we're still grappling with that.

</p>
<p><strong>Vaidehi Joshi</strong><br />
It's so interesting. You say that because that lack of entropy, the chaos, the randomness that made We think of what Ryan said earlier about the loss of creativity, like how many random moments or interactions or places where things you see in a day, make you think of something that you hadn't thought of before, or just like, made you think of something that happened like five years ago, like you connect those dots back to some life experience. I don't know about you all, but like, sitting at a desk, however much 10 hours a day like those, those moments are gone. And so like, I just, I'm like, Well, this is the days when together, nothing means anything like, you know, you miss those moments. And also, like, I don't think people are meant to be sitting in boxes, you know, kind of just stuck without social interaction, or without interaction with nature and the world. I've heard this phrase of like, starting in March of 2020. I live at work now. And it's like, well, it is that you live at work. But also, you've been deprived of all these other things that I think are so part of the human experience. And of course, like people are going to just lose their shit, because we're not meant to go through this. But you know, for various reasons, like, we have to. And I think, prior to this pandemic, people used to talk a lot about like having a separation of space, where you work and where you live. But I think, with this pandemic, things have sort of taken on a new definition, because the paradigm of just like home office, and where you live is that no longer works. Because when that's all you have, like, that's really actually not enough. It's not enough to just be like, I go to this room, and then I go to that room. And then I go back to this room. And I do that for 19 months. Like, that's not sustainable. But it's it's interesting, because that line has blurred, but I also think we have to rethink what that line is. We used to think it was just life and work. But what is life? And what is work, answering those questions and figuring out what are the core kernel experiences of those things, is actually probably more important than just drawing the line and then flipping between the two on a Monday versus the Friday.

</p>
<p><strong>Eli Fitch</strong><br />
Yeah, that's so true. And I love Gemma's term of cold burnout. Because, like, I was gonna say that I don't feel that the pandemic has burned me out, I feel like it's made, all of life has become burnout. It's like burnout is ever present and everywhere all around us. Because like, everything that we do, even things that used to bring us joy, like playing Animal Crossing, or like, bullshitting on Twitter, or whatever, had been compressed into the same ritual of survival that we go through every day, with like, no gaps or room for anything interesting to spring up from between them, you know, and I don't know what we can intentionally do to introduce more spontaneity into our lives, and so much of our behavior is restricted. And so much of what we can and can't do is governed by the spread of a disease that we can only we can only really control our individual behavior. But I don't know maybe being aware of it is really the first step.

</p>
<p><strong>Ryan Burgess</strong><br />
good segue for us. Before we get into pics, I am curious like, with all of you, like we've all dealt with this, like we've all admittedly dealt with burnout in some way, shape, or form. What's a piece of advice you would give to someone? That's, and that's come up a bit here. But as if you were to leave everyone with a piece of advice, dealing with burnout, what would you leave them before we jump into pics,

</p>
<p><strong>Eli Fitch</strong><br />
don't be too afraid to quit your fucking job with your job, just do it. Like, yeah, I quit the best job I ever had. And it was the best decision that I ever made. And I still miss it sometimes. And it still hurts sometimes. But like, the effects of burnout aren't just about ruining a job that you love. It's about ruining, like a whole career. It's about ruining, like, it's about that it takes away the joy for doing the work, regardless whose pockets you're lining by doing that work. And like, especially if you came to this career after doing something else where like, you work really hard to break in and transition, you have to be so defensive of your love for the work. Because at the end of the day, that's all we really have. And every time you encounter burnout, the joy comes back slower and a little less stronger than it was there before. And so my best advice would be like, don't be afraid to do something dumb and drastic

</p>
<p><strong>Shirley Wu</strong><br />
to Eli's points. But I think I want to add my mom's a nurse and she constantly constantly reminds me that, you know, we only have one body. And we can, you know, we can work as hard as we want. We can build the career we want. We can build all the riches that we want. But at the end of the day, we just have this one body and if our body isn't healthy, then none of the career and none of the money is worth it because we don't have the happen the body to enjoy it the health to enjoy it. So she's like The two things she always says me is, like, be happy and be healthy. And so to Eli's point about quitting that fucking job, like quit that fucking job, because the jobs will come, the career will come, like, trust that you're amazing and awesome and great at your job. So those jobs will come there the best jobs like you know, what, what was the best job, this time around, will probably be trumped by another Best job and like later down, but none of those are worth our own physical, mental, emotional, spiritual health. Because we only got one of it.

</p>
<p><strong>Vaidehi Joshi</strong><br />
Your mom is so on point.

</p>
<p><strong>Shirley Wu</strong><br />
I love I know, right? I'm her advice is just hilarious. I should recount those offs from the offline but the other half they're on point.

</p>
<p><strong>Ryan Burgess</strong><br />
Your mom needs a Twitter account.

</p>
<p><strong>Vaidehi Joshi</strong><br />
Twitter, no. No, I'm torn between two pieces of advice. So I'll just put them side by side. You can take it or leave it. But I think speaking to what Shirley said, already, listen to your body, it's telling you things. And if you don't listen to it, it might get to a point where it'll tell you things and you can't really recover from them. And it's really hard to do, I think, when you're in the thick of what you're doing, but really try to like, slow down, watch your breath, watch your physical being and watch it watch what's happening. Because I think psych like subconsciously, deep within the surface, I think we all know, like what is happening. But at the surface level, we don't necessarily want to accept it. And that kind of goes back to earlier parts of the conversation where we are like, Oh, I can just get through this, or it's just this one thing. But I think deep down, we all know when something's wrong, but we don't always take the time to listen to it. So listen to your body. I wish I had done that. And, you know, for context, like I burned out over four months, and I took four months off to recover. And I still don't feel fully like who I was before. So don't do what I did listen to your body. But then the other piece of advice, I think reflecting back on everything, that I had a lot of time to think of my time off to a lot of long hikes and just a lot of thinking just by myself. And in that whole process, like I thought a lot about how I got to where I was, and what could have been, you know, what could have happened differently and who was to blame and what I should have done differently. And I think the one piece of advice I have for myself and for all of you who are listening going forward is don't wait for somebody else to draw boundaries and to make decisions for you and to like create lines in the sand. I don't think there's any company out there, there's no manager out there that is perfect. And you might go into a certain situation who where you, you know, think this is the job where I won't get burnout, or this is the perfect manager, this team is the team that you know, I'll have a healthy work life balance, but things can change, and people are trying their best. So don't put it on other people to create that healthy situation, you have to take that onto your own hands, you know, you have to take control of that. And no one else can do that for you. So be sure to like set those boundaries. And, you know, life is a path full of thorns. You can't pick up each Thorn and walk on the path, you can just put on your shoes and go. So put on your shoes, draw those lines, and don't wait for somebody else to like, make it better for you. Which is you know, it goes back to what Eli said, quit your fucking job if you need to make that change, because no one's going to be able to tell you to do it, and no one's gonna be able to make that decision for you. So that's, that's what I'm going to do going forward.

</p>
<p><strong>Jem Young</strong><br />
I think we could do like a three hour episode, because you all have brought up such excellent points that we didn't even get a chance to touch on. I really like what you're just saying that a about boundaries, especially but I think part of is understanding and listening to yourself. And a lot of us switch roles or companies or something like that. Thinking that will cure our burnout, when that's not really the source. And yeah, sometimes it is your manager, sometimes it is the job sometimes. It just sucks and you got to change it. But sometimes it's something else. Maybe you're just not finding joy anymore in what you do. And yeah, you can switch jobs, but it's just gonna follow you like a year later. It's the same for I think bad relationships. You if you go through a series of bad relationships, you're like, man, it's just bad luck, or maybe it's something else and you gotta solve it. Maybe it is right. It's I don't really have good tips on burnout. It's I was really hoping to get some because I I'm not saying I'm burnt out right now but it's, it's I want to be aware of it and be there for my team. That's kind of the best I can do. My one burnout tip is stay up Social media. I really I question if it's a net negative or positive for society. For me, it's it's really neutral. I connect with a lot of people that I never would have had the opportunity to meet. But on the other hand, you have FOMO you have, I'm not good enough, everybody's better than me. You have like so many net negatives to so I don't know, if you're feeling burnt out, quit social media for a week or a month and see how you feel and see if it doesn't make your life a little better. That's my tip. Yeah, so

</p>
<p><strong>Vaidehi Joshi</strong><br />
true. It's funny, because I think, like a month into my sabbatical, I was like, the best thing I've done for burnout is I've stopped looking at screens, and I've been outside, fewer screens more green.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, I like that. Oh, yes. Drop the mic there. Yes. So good.

</p>
<p><strong>Vaidehi Joshi</strong><br />
Go outside. Yeah, beautiful place.

</p>
<p><strong>Ryan Burgess</strong><br />
One thing maybe to follow on though, like the no screens or staying off social media. I think personally, I see some benefit gem like the same as us or some like neutral, or I've met a lot of amazing people. I have some, I find joy sometimes in being on Twitter. But what I realized is the notifications for me, are what really is stressful or can add just too much. It's too much noise. And so I've actually gone through my phone and pretty much shut off all notifications. I believe, Jem, you don't even put Twitter on your phone. Correct? Yeah. So that that's great. I like Twitter on my phone. But I've turned off notifications for N slack too. By the way, I shut off slack notifications a couple weeks ago. And I feel great about it. Oh, get to those messages. But I don't need the interruption because it takes me away from that in the moment. Like right now we're all having a conversation. I don't need slack interrupting that. I want to be in this conversation. And so that's helped me a lot is just even cutting out some of the noise. So maybe that's a helpful tip to like, prevent some burnout, maybe. But yeah, let's jump into pics. We'll go to some positive notes. We'd love to show things that we like to find interesting and share with all of you, Jem, you want to kick us off with the pics? You have this episode

</p>
<p><strong>Jem Young</strong><br />
of somebody picks his time, and they're all literally based on the conversation we just had. I was like, Oh, that's a good one. Oh, that's a good one. Oh, that's another good one. My first pick is because I know that he won't won't do it herself. It's the base. Yes, podcast. It is 72 episodes. So it's 75. I missed the count, but 70 Something episodes on CS topics, which I've been on, I find it incredibly difficult to explain things like how does the link list work? Or how does? How do you parse? I don't know. Dykstra the algorithm, but doing an over over a podcast is just an incredible feat. I know it's done in retired, but it's worth worth a listen. My second pick is Brian, what you just said. And that's why it's a pick. You can set working hours in Slack where you don't get notifications about a certain time. I find incredibly helpful even in my non work related slacks I notifications just kind of have surfaced after certain time because I you know if I want to check slack or check slack, but I don't need it checking on me. Just set boundaries that it's really important. My third pick is 2020 In Memoriam. I'm just thinking of all the popular cultural memes and things that were such a big deal at the time and now we've completely forgotten about it. Someone mentioned I think Tiger King. Remember Tiger king like the drama that like micro drama that were also pandemic Joy

</p>
<p><strong>Ryan Burgess</strong><br />
right there. April like that. I think it was it was early into the pandemic. Wait, I

</p>
<p><strong>Eli Fitch</strong><br />
just reaction it felt like a fever dream. Ooh, that's interesting.

</p>
<p><strong>Jem Young</strong><br />
Yeah, where? Where is everybody? Where's Joe? Exotic? Still in jail? Does anybody know? No, I'm

</p>
<p><strong>Ryan Burgess</strong><br />
pretty sure he's still in jail.

</p>
<p><strong>Jem Young</strong><br />
I just enjoy the drama from that. And we all for one moment. We all cared about that intensely and have forgotten about it. Like a throwaway toy. Animal Crossing. Anyway. Still play an Animal Crossing. Remember that one? Oh, yes.

</p>
<p><strong>Eli Fitch</strong><br />
People are still playing Animal Crossing. Not

</p>
<p><strong>Vaidehi Joshi</strong><br />
many abandoned islands now. Which always sad.

</p>
<p><strong>Shirley Wu</strong><br />
Oh, no. Even sadder. Is all of the adopted dogs and cats. Okay, sorry for being a downer. Because there's a lot of people that have quote unquote, returned them, which is the worst. Yeah, but there's also Queens Gambit and chess. The whole chess thing happened.

</p>
<p><strong>Ryan Burgess</strong><br />
Oh, yeah, that was such a good show.

</p>
<p><strong>Jem Young</strong><br />
Yeah, thanks Netflix. Shout out to my employer

</p>
<p><strong>Eli Fitch</strong><br />
named Ted last Oh, we can't mention any Apple TV plus shows on this podcast.

</p>
<p><strong>Ryan Burgess</strong><br />
You know what? That was a pic of my last episode was we were talking about manager stuff and I was like, everyone needs to be more like Ted last. So that shows amazing. So it's okay you can pick things that are, it's allowed.

</p>
<p><strong>Jem Young</strong><br />
And my my final pick is speaking of pandemic and creativity in our absence of it. And I think it might have been picked before But Bo Burnham's inside, it is a special he shot entirely by himself edited by himself in his apartment, in this very small room. And while we're all struggling, and I'm like, Man, I can't get the motivation to, I don't know, paint my room or something like that. He made an entire special and they're all wildly different. And to me, whatever aside, I don't know much about Bo Burnham himself. But to me, I think it's a work of genius, because there was so much going on in the world. And he took that and he made something, which I think after 2020 and 2021, maybe 2022 It's so difficult to find that creative creativity. And to find that and then execute on it all by yourself with no other feedback is just incredible. It's not always happy, but it is it is worth watching. And those are my picks.

</p>
<p><strong>Ryan Burgess</strong><br />
Very cool. All right, surely what pics do you have for us?

</p>
<p><strong>Shirley Wu</strong><br />
Oh, okay. So the first one I have is the book I mentioned during the episode, and I went and googled it is called the full title is called burnout, the secret to unlocking the stress cycle by Amelia McCloskey and Emily Nagurski. And I'm maybe like two thirds of the way through. And it has been amazing in terms of kind of just how I think about who I am feeling okay with my place in the world, how I view myself and all of the stresses and burnouts I do have, whether it's related to work and career or whether it's just related to being a woman and I, there's so many things I didn't even realize I've done, it made me realize how much I feel guilt over not doing all of the housework, because that's something that I've grown up being told is 100% my job so when my husband steps in to do you know, the cooking or the dishes, or if you did the dishes after the cooking, I just feel immense guilt. And that's kind of like helped me realize and kind of give me the vocabulary to talk about that. So the second pic I have is from my former studio means Alice Lee and Amy we're below, aka Sailor Mercury. They just released this collaboration, actually, they released two collaborations that I've been so excited about. One is this beautiful jacket, which is no longer on preorder. It's called Making art breaking parts. And if you've please, please check it out. It's just so beautiful, um, in all, and the second one is they've kind of like released a whole series of Animal Crossing, speaking of Animal Crossing animal Animal Crossing inspired planters. And I'm just going to leave at that link is hopefully in the descriptions, because then I'll ramble on too much if I described them. And the third and final one is I just moved cross country and we're trying to furnish our new place and I just want to mention a Home Goods kind of brand called Yamazaki foam, beautiful clean, and mostly like you know steel and wood esthetics, like painted white or painted planks. You and what is that? It's chef's kits, so beautiful. Those are my

</p>
<p><strong>Ryan Burgess</strong><br />
awesome Eli, what do you have for us?

</p>
<p><strong>Eli Fitch</strong><br />
Alright, so pick number one is Netflix's own drive to survive. Which Great show it has completely transformed me into an f1 sicko, and has helped me actually move past some pretty severe baggage that I had around f1 and order to really like not only enjoy it as a motorsport, but kind of like, come to peace with my failure to become an f1 driver which if you asked me what my job was going to be up through college, I still would have told you that I was going to racing f1 someday and kind of you know after it became clear that I was never really going to be a professional racecar driver. At least not in a way that I could sustain the kind of life that I wanted for myself. I was like, man f1 sucks. Like it's not even good racing. Like, nobody passes together. This garbage, it's too much money. It's fake bullshit. And the show is really good. There's like, it really highlights that, that people have made it in the sport who come from, like not billionaire backgrounds, people like Lewis, Hamilton and Esteban Oh, calm, and it's just a fabulous show. And I'm really happy to sort of have rediscovered my love for open wheel racing again, which is pretty cool and has special meaning for me. And my second pick is going to fucking therapy. I don't know if that's like, a pic. But it's pretty transformative. Um, and do highly recommend putting in the effort and finding a therapist that works for you. And I won't lie, it sucked finding a therapist, like, surprise, surprise, but demand has outstripped supply for therapy right now. And it will you know, most people didn't even email me back or call me back. And I actually took two days off from work and did nothing but look at therapists pages on Psychology Today, and reach out to people and email people and talk to a couple and found one that I really liked. And I think that's the best way that I've spent PTO in a long, long time and highly recommend it now more than ever.

</p>
<p><strong>Ryan Burgess</strong><br />
Alright, Vida he, what do you have for us?

</p>
<p><strong>Vaidehi Joshi</strong><br />
Okay, they're all over the place. I hate you. I

</p>
<p><strong>Ryan Burgess</strong><br />
feel like everyone's got relevant. Take some like.

</p>
<p><strong>Vaidehi Joshi</strong><br />
Okay, well, I'm in the spirit of 2020, I got really into playing GeoGuessr I love traveling. And I was really sad when I couldn't travel. And then I discovered GeoGuessr. And I put all my traveling energy in GeoGuessr. And went back when I was working like we would play it virtually. But also like my husband and I play it. And it's like, now we have like scores that are out of control. And I'm just like trying to beat them all. So do guess which fun if you miss traveling, and you can't travel right now, tying back to our earlier conversation of disconnecting and boundaries. I also have been using this app called Opal, I think the site is like Opal. So I'm sure there's other like apps similar to it. But it basically is like pretty simple. You can just block your, whatever apps you want for a certain amount of time. And I have blocked apps like all social media and everything for like 23 hours at a time to just get that cleanse. And like you can turn it off if you want but like you it's a conscious choice. Like you have to say like, yes, I want to, you know, turn it off, or I want to take a 10 minute break. And here's why. And you set an intention, which is kind of nice. And the main thing that I got out of it is I realize how many times I go to like compulsively check Twitter, or Instagram or slack or email. And I was like, Oh, why am I checking this again? Oh, again, again. And I was like shit, maybe I'm a problem. So that's been really nice for me. Yeah, I'm sure there's other versions of it. But like, it's a good way to limit yourself if you can't do it without the help of an app, apparently. I've also been watching the show called 100 foot wave on HBO. It's not on Netflix, I'm sorry. It's so good. It's basically about big wave surfers who are trying to find like the 100 foot wave off the coast of Portugal. It's so fascinating. And then also like, I get a little terrified when I watch it, because these are huge waves. And I'm like I would die. Also like I don't surf. So that's probably why but if you like surfing, check it out. Or if you just love seeing amazing visuals, and I think the soundtrack is Philip Glass. So it's like this beautiful orchestral music and like this giant wave and you're like, I'm scared, but I'm in all, which is pretty fun. And another show I've been watching, which is on Apple TV. It's called watch the sound with Mark Ronson, which is really, really good. It's, I think it's like seven episodes like a mini series. And it's really interesting because like, having the coding background. It's sort of like the technical perspective of music, which totally made me see modern pop music in a very different way. So he goes into, like, synthesizers, and drum machines and auto tune and he kind of like, dissects the history of it. And it's, it's just really cool. And if you're like, if you like documentaries, like really well produced documentaries, I highly recommend checking it out. And my final pick is meditation because I've been doing a pick that back up during my time off and it's been really good. Sort of like it would be it would pair well with Eli suggestion of therapy, I think. Yeah, meditation.

</p>
<p><strong>Eli Fitch</strong><br />
I got to ask, as such as when we were talking about burnout and how it affects your body and how its increases little by little, and it's so hard to know when burnout is happening. Burning? Do you think a meditation practice would help you stay attuned to that?

</p>
<p><strong>Vaidehi Joshi</strong><br />
Yeah, because, I mean, there's all sorts of different types of meditation, but most of them have you focused on like one thing. And the meditation practice I do is called Vipassana. And it all is about the breath. And you start by just focusing on your breath. And it's pretty cool because you by focusing on your breath, you also start to focus on other things that are happening in your body. And so now now that I've kind of started to get back into it, it's interesting, because when I get stressed out or tense, like, in a job interview, or thinking about some deadline or whatever, I can feel it in my body. And I just kind of observed my breath. And I'm like, Hmm, maybe there's something going on. And I bet if I had been doing it, like, in January, when I was burning out, I would have noticed those physical things earlier, but I wasn't, I had fallen off the meditation wagon. So I think it's just really nice to get in tune with what's happening in your body. And, like, maybe make you think about why your body is reacting that way. It's like obviously not an answer. But I think if you focus on, you know, the physical signs, the psychological things come out to

</p>
<p><strong>Ryan Burgess</strong><br />
all right, I have two picks that are so unrelated, but I'm going to throw them out there. Anyways, I have a Netflix show, watch. Eli how to add Netflix show. Money. Hice part five, if you've been following money heist, it's been it's been a really good show. Part Five does not disappoint. It's super exciting. It just makes me want to see like they're, they're wrapping it up. They're like, so much closer. I'm excited. So yeah, it left me wanting more. So I'm excited for the part six. All right, and then my next pick is pick a internet series that awesome Maples tattoo artists who recently moved to LA he moved from San Francisco moved to LA use a tattoo at idle hand, I believe I've like five or six tattoos from him. He's just an amazing artist. And like an just amazing person, like I've always loved like getting tattooed by him. But he released his cool video series called nothing to lose. That is really just like him tattooing and talking with some of his clients. So it kind of goes into some of his process, but it's just a really cool little mini series that he's created. I love it. I just quickly caught that. I think he just started releasing them. And it's been really cool. I want to thank our awesome guests today or participating. Like this is a deep conversation. I really really loved it. Vida he and Eli, where can people get in touch with you?

</p>
<p><strong>Vaidehi Joshi</strong><br />
Where can people find me on the internet? My Twitter handle is at viteee Joshi. I think that's that's where I posts most you know, things I'm writing or things I'm working on or random thoughts I have and then I might disappear for five days

</p>
<p><strong>Ryan Burgess</strong><br />
and coffin wrong with that. We all know that that is healthy as well. Yeah. decided upon

</p>
<p><strong>Eli Fitch</strong><br />
UI and you can follow me on Twitter at Eli Fitch for pathological shitposting and car posting. And all the tech stuff is at Eli. WTF.

</p>
<p><strong>Ryan Burgess</strong><br />
That's awesome. All right. Well, thank you all for listening today's episode. You can find us on Twitter at Funen h h you can follow us front unhappier.com Subscribe to us on really whatever you like to listen to podcasts on any last words.

</p>
<p><strong>Jem Young</strong><br />
That is the third time drive to survive has been picked on the show. So watch it on Netflix. You probably should. That's three independent people picking the same show.

</p>
<p><strong>Ryan Burgess</strong><br />
I feel like gem the episode that you I think you're the first one to choose it. I was going to pick that as my pick to for that episode and I like didn't say it. So technically it's like four picks on that. So yeah, people need to go watch it.

</p>
<p><strong>Jem Young</strong><br />
I think the actual closing words should be from via e which is less screen more green. Do it

</p>
`;
return transcript;
};