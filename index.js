const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	console.log(message.content);
	if (message.content === 'is katana 0 good?' || message.content === 'is katana zero good?') {
		message.channel.send('nah dude, stardew valley is a lot better');
	}
	if (message.content === 'is stardew good?' || message.content === 'is stardew valley good?') {
		message.channel.send('YES');
	}
	if (message.content.toString().indexOf('Rohan')!=-1 || message.content.toString().indexOf('rohan')!=-1) {
		message.channel.send('under the water he needs help');
		message.channel.send('-play i am under the water');
	}
	if (message.content.toString().indexOf('shek')!=-1 || message.content.toString().indexOf('shek')!=-1  || message.content.toString().indexOf('shrek')!=-1) {
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
    message.channel.send('https://i.redd.it/7au96kl43rm01.png');
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
		message.channel.send('https://i.kym-cdn.com/entries/icons/facebook/000/022/713/MonkaSSS.jpg');
	}
	if (message.content.indexOf('OMEGALUL')!=-1)
	{
		message.channel.send('https://i.ytimg.com/vi/0o1__iNJ7Bo/hqdefault.jpg');
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
		message.channel.send('https://i.kym-cdn.com/entries/icons/facebook/000/025/382/Screen_Shot_2018-02-06_at_3.37.14_PM.jpg');
	}
	if (message.content.indexOf('PepePls')!=-1)
	{
		message.channel.send('https://i.kym-cdn.com/entries/icons/original/000/031/069/3x_(1).jpg');
	}
	if (message.content.indexOf('EZ')!=-1)
	{
		message.channel.send('https://ih1.redbubble.net/image.500694133.5027/flat,750x1000,075,f.u1.jpg');
	}
	if (message.content.indexOf('Pepega')!=-1)
	{
		message.channel.send('https://ih0.redbubble.net/image.1125116964.1228/ap,550x550,12x12,1,transparent,t.u3.png');
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
