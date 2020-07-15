const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	console.log(message.content);
	if (message.content === 'is katana 0 good?' || message.content === 'is katana zero good?') {
		message.channel.send('ye');
	}
	if (message.content === 'is stardew good?' || message.content === 'is stardew valley good?') {
		message.channel.send('YES');
	}
	if (message.content.toString().indexOf('Rohan')!=-1 || message.content.toString().indexOf('rohan')!=-1) {
		message.channel.send('under the water he needs help');
		message.channel.send('-play i am under the water');
	}
	if (message.content.toString().indexOf('shrek')!=-1 || message.content.toString().indexOf('shrek')!=-1  || message.content.toString().indexOf('shrek')!=-1) {
		message.channel.send('roll the dice fucker');
	}
	if (message.content.toString().indexOf('Harshith')!=-1 || message.content.toString().indexOf('harshith')!=-1) {
		message.channel.send('rich homie');
	}
	if (message.content.toString().indexOf('Rishi')!=-1 || message.content.toString().indexOf('rishi')!=-1) {
		message.channel.send('bruh');
	}
	if (message.content.substr(0,1)=='!' && message.content.toString().indexOf('cpls')!=-1)
	{
		let s = message.content.toString().substr(6,(message.content.toString()).length);
		var result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
		console.log(result);
		let theString = ""
		for (ch in result) {
			theString += ch + " count: " + result[ch]+", ";
	    console.log(theString);
	}
	message.channel.send(theString);
	}
	if (message.content.toString().indexOf('help')!=-1 && message.content.toString().indexOf('LMAO')==-1)
	{
		message.channel.send('imagine needing help LMAO');
	}
	if (message.content.substr(0,3)=='YEP')
	{
		message.channel.send('COCK');
	}

	if (message.content.substr(0,4)=='lmao')
	{
		message.channel.send('<@'+message.author.id+'> has litterally laughed their ass off and its gone now. send help');
	}
	//***********************************************************
	// 										MEMES
	//***********************************************************
	if ((message.content.substr(0,3)=='pog' || message.content.substr(0,3)=='Pog') && message.content.substr(0,4)!='PogU' && message.content.toString().length == 3)
	{
    message.channel.send('https://cdn.betterttv.net/emote/5db280906fc9dd12cbaf1d81/3x');
	}
	if (message.content.substr(0,6)=='squadW')
	{
    message.channel.send('https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F029%2F902%2Fsquad.jpg');
	}
	if ((message.content.indexOf('woman')!=-1 || message.content.indexOf('minor')!=-1 || message.content.indexOf('women')!=-1) && message.content.indexOf('?')==-1 )
	{
    message.channel.send('squadW');
	}
	if (message.content.indexOf('monkaS')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/56e9f494fff3cc5c35e5287e/3x');
	}
	if (message.content.indexOf('stardew')!=-1)
	{
		message.channel.send('Steam user Obama Gaming recomends this game and said "There is something about this game that is so addicting."');
	}
	if (message.content.indexOf('OMEGALUL')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/583089f4737a8e61abb0186b/3x');
	}
	if (message.content.indexOf('EZ')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/5590b223b344e2c42a9e28e3/3x');
	}
	if (message.content.indexOf('POGGERS')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/58ae8407ff7b7276f8e594f2/3x');
	}
	if (message.content.indexOf('PepeHands')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/59f27b3f4ebd8047f54dee29/3x');
	}
	if (message.content.indexOf('PepePls')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/55898e122612142e6aaa935b/3x');
	}
	if (message.content.indexOf('Pepega')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/5aca62163e290877a25481ad/3x');
	}
	if (message.content.indexOf('LULW')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/5dc79d1b27360247dd6516ec/3x');
	}
	if (message.content.substr(0,4)=='PogU')
	{
		message.channel.send('https://cdn.betterttv.net/emote/5e4e7a1f08b4447d56a92967/3x');
	}
	if (message.content.indexOf('PepeLaugh')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/5c548025009a2e73916b3a37/3x');
	}
	if (message.content.indexOf('5Head')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/5d6096974932b21d9c332904/3x');
	}
	if (message.content.indexOf('PogChamp')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/5db3d44afb4519723fb2a071/3x');
	}
	if (message.content.indexOf('WeirdChamp')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/5d9198fbd2458468c1f4adb7/3x');
	}
	if (message.content.indexOf('Sadge')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/5e0fa9d40550d42106b8a489/3x');
	}
	if (message.content.indexOf('FeelsStrongMan')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/58facc4aaffae60eac088397/3x');
	}
	if (message.content.indexOf('FeelsGoodMan')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/5e74e336d6581c3724c0d49d/3x');
	}
	if (message.content.indexOf('FeelsBadMan')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/566c9fc265dbbdab32ec053b/3x');
	}
	if (message.content.indexOf('FeelsDankMan')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/5d6209854932b21d9c333195/3x');
	}
	if (message.content.indexOf('BOGGED')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/5b390f0405e329206af6ebc2/3x');
	}
	if (message.content.indexOf('PepeScoots')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/5b9ece3bee018c1569cb8608/3x');
	}
	if (message.content.indexOf('Kappa')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/5d3e0e1236c0c02aeb6d2b30/3x');
	}
	if (message.content.indexOf('widepeepoHappy')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/5e1a76dd8af14b5f1b438c04/3x');
	}
	if (message.content.indexOf('Clap')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/55b6f480e66682f576dd94f5/3x');
	}
	//**************************************************************
	//				COPY PASTAS
	//**************************************************************
	if (message.content.indexOf('shungite')!=-1 && message.content.indexOf('Suge Knight')==-1)
	{
		message.channel.send("Anyways, um... I bought a whole bunch of shungite rocks, do you know what shungite is? Anybody know what shungite is? No, not Suge Knight, I think he's locked up in prison. I'm talkin' shungite. Anyways, it's a two billion year-old like, rock, stone that protects against frequencies and unwanted frequencies that may be traveling in the air. That's my story, I bought a whole bunch of stuff. Put 'em around the la casa. Little pyramids, stuff like that.", {tts:false});
	}
	if (message.content.indexOf('gamer girl')!=-1 && message.content.indexOf('bazooooooooing')==-1)
	{
		message.channel.send('A girl.... AND a gamer? Whoa mama! Hummina hummina hummina bazooooooooing! eyes pop out AROOOOOOOOGA! jaw drops tongue rolls out WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF tongue bursts out of the mouth uncontrollably leaking face and everything in reach WURBLWUBRLBWURblrwurblwurlbrwubrlwburlwbruwrlblwublr tiny cupid shoots an arrow through heart Ahhhhhhhhhhh me lady... heart in the shape of a heart starts beating so hard you can see it through shirt ba-bum ba-bum ba-bum ba-bum ba-bum milk truck crashes into a bakery store in the background spiling white liquid and dough on the streets BABY WANTS TO FUCK inhales from the gas tank honka honka honka honka' , {tts:false});
	}
	//**************************************************************
	if (message.content.indexOf('joe?')!=-1)
	{
    message.channel.send('JOE MAMA', {tts:false});
	}
	if (message.content.indexOf('joe')!=-1 && message.content.indexOf('MAMA')==-1)
	{
		message.channel.send('add the question mark you little shit' , {tts:false});
	}
	if (message.content.indexOf('ligma')!=-1 && message.content.indexOf('balls')==-1)
	{
		message.channel.send('ligma balls' , {tts:false});
	}
	if (message.content.indexOf('sprinkle please')!=-1 && message.content.indexOf('y')==-1)
	{
		message.channel.send('My sprinkler goes like thisstststststststststststststststststststststststst and comes back like ttttttttttttttttttttttttttttttttttttttte' , {tts:false});
	}
	if (message.content.indexOf('lawnmower please')!=-1 && message.content.indexOf('g')==-1)
	{
		message.channel.send('The lawnmower goes shersheeeeeeerrerererereeeerrr vavavoom sherererererere and Rice burners go wowowowowowowowowowowowowowowowowowowowowowow' , {tts:false});
	}

});
var auth = require('./auth.json');
client.login(auth.token);
