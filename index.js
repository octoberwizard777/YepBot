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
	if (message.content.substr(0,2)=='EZ')
	{
		message.channel.send('Clap');
	}
	if (message.content.substr(0,4)=='lmao')
	{
		message.channel.send('<@'+message.author.id+'> has litterally laughed their ass off and its gone now. send help');
	}
	//********************MEMES*************************************
	if (message.content.substr(0,3)=='pog' || message.content.substr(0,3)=='Pog')
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
	if (message.content.indexOf('Clap')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/55b6f480e66682f576dd94f5/3x');
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
	if (message.content.indexOf('EZ')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/5590b223b344e2c42a9e28e3/3x');
	}
	if (message.content.indexOf('Pepega')!=-1)
	{
		message.channel.send('https://cdn.betterttv.net/emote/5aca62163e290877a25481ad/3x');
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
