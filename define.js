const Discord = require('discord.js')
const client = new Discord.Client();



client.on('ready', () => {
  console.log('Ready!');
});

var prefix = "d!"
client.on('message', message => {
	let args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  
if (message.content.startsWith(prefix + 'ping')) {
   console.log('Pinging!');
   startTime = Date.now();
   message.channel.sendMessage("Pinging...").then((message) => {
     endTime = Date.now();
       message.edit(":stopwatch: | " + Math.round(endTime - startTime) + " ms");
    });
  }
  
 if (message.content.startsWith(prefix + 'setgame')) {
      if (message.author.id !== '215509157837537280') {
message.reply('Failure to set game to ' +argresult)
}
else{
      console.log('Setting Game: '+argresult);
      client.user.setGame(argresult);
	  message.reply('Success! Game changed to ' +argresult)
}
 }

  
  
  if (message.content.startsWith(prefix + 'setstatus')) {
	  if (message.author.id !== '215509157837537280') {
message.reply('Failure to set status to ' +argresult)
}
else{
	  console.log('Setting status to:' +argresult);
	  if(!argresult) argresult = 'online';
	  client.user.setStatus(argresult);
	  message.reply('Success: status changed to ' +argresult);
}
  }

if (message.content.startsWith(prefix + 'shutdown')) {
	 if (message.author.id !== '215509157837537280') {
message.reply('Failure to shutdown')
}
else{
	message.reply('Shutting down...');
	console.log('Shutting down...');
	Process.Exit(0);
}
}

if (message.content.startsWith(prefix + 'say')) {
    message.delete();
    console.log('Saying ' +argresult);
    message.channel.sendMessage(argresult);
}

	

if (message.content.startsWith(prefix + 'lenny')) {
	console.log('( ͡° ͜ʖ ͡°)')
	message.reply('( ͡° ͜ʖ ͡°)');
}

if (message.content.startsWith(prefix + 'info')) {
	console.log('giving info')
	message.reply("Bot made by ItzStriker \n message ItzStriker#7250 or join the official server if there are any problems!")
}


if (message.content.startsWith(prefix + 'kek')) {
	console.log('Kek')
	message.channel.sendMessage("Kek ( ͡° ͜ʖ ͡°)")
}

if (message.content.startsWith(prefix + 'definePneumonoultramicroscopicsilicovolcanoconiosis')) {
	console.log('Defining Pneumonoultramicroscopicsilicovolcanoconiosis')
	message.reply("Definition \n an obscure term ostensibly referring to a lung disease caused by silica dust, sometimes cited as one of the longest words in the English language")
}

if (message.content.startsWith(prefix + 'defineHippopotomonstrosesquippedaliophobia')) {
	console.log('Defining Hippopotomonstrosesquippedaliophobia')
	message.reply("Definition \n The fear of long words.")
}

if (message.content.startsWith(prefix + 'defineIdk')) {
	console.log('Defining idk')
	message.reply("Definition \n Shortened version of I don't know.")
}

if (message.content.startsWith(prefix + 'defineTrypophobia')) {
	console.log('Defining Trypophobia')
	message.reply("Definition \n The fear of irregular patterns or clusters of small holes or bumps.")
}

if (message.content.startsWith(prefix + 'defineScopophobia')) {
	console.log('Defining Scopophobia')
	message.reply("Definition \n A social fear of being looked at.")
}

if (message.content.startsWith(prefix + 'definePhobias')) {
	console.log('Defining Phobias')
	message.reply("Definition \n A  persistent, irrational fear of a specific object, activity, or situation that leads to a compelling desire to avoid it.")
}

if (message.content.startsWith(prefix + 'definitions')) {
	console.log('Sending Definitions...')
	message.reply("```Current definitions: [27] \n Pneumonoultramicroscopicsilicovolcanoconiosis \n Hippopotomonstrosesquippedaliophobia \n Idk \n Trypophobia \n Scopophobia \n  Phobias \n  Acrophobia \n Nyctophobia \n Example \n Lenny \n Wumpus \n  Selfie \n Ablutophobia \n Hope \n Cordial \n Banana \n Boi \n M8 \n Wot \n XD \n Sob \n DX \n Lewd \n Car \n Anima \n Hi \n Hello \n Lolz \n ```")
}

if (message.content.startsWith(prefix + 'defineAcrophobia')) {
	console.log('Defining Acrophobia')
	message.reply("Definition \n The fear of heights.")
}

if (message.content.startsWith(prefix + 'defineNyctophobia')) {
	console.log('Defining Nyctophobia')
	message.reply("Definition \n The fear of darnkness.")
}

if (message.content.startsWith(prefix + 'defineExample')) {
	console.log("Defining Example")
	message.reply("Definition \n A phrase or object used to describe something to someone")
}

if (message.content.startsWith(prefix + 'defineLenny')) {
	console.log('Defining Lenny')
	message.reply("Definition \n Sexy and perverted, do not anger the lenny ( ͡° ͜ʖ ͡°) ")
}

if (message.content.startsWith(prefix + 'commands')) {
	console.log('Sending commands...')
	message.reply("List of commands: \n d!defineWord \n d!lenny \n d!kek \n d!ping \n d!info \n d!definitions")
}
if (message.content.startsWith(prefix + 'defineWumpus')) {
	console.log('Defining Wumpus')
	message.reply("Definition \n A creature with a large head and a tail detached from its body.A Wumpus is a peaceful creature and likes to make friends.")
}

if (message.content.startsWith(prefix + 'defineSelfie')) {
	console.log('Defining Selfie')
	message.reply("Definition \n A picture of yourself.")
}

if (message.content.startsWith(prefix + 'defineAblutophobia')) {
	console.log('Defining Ablutophobia')
	message.reply("Definition \n The fear of bathing, washing, or cleaning. This tends to be more in children than adults.")
}

if (message.content.startsWith(prefix + 'definePower')) {
	console.log('Defining Power')
	message.reply("Definition \n 1) The ability or capacity to do something or act in a particular way. \n 2) The capacity or ability to direct or influence the behaviour of others or the course of events. \n 3) Physical strength and force exerted by something or someone. \n 4) Energy that is produced by mechanical, electrical, or other means and used to operate a device. \n 5) Physics \n 6) Mathematics \n 7) Dialect")
}
	
if (message.content.startsWith(prefix + 'defineHope')) {
	console.log('Defining Hope')
	message.reply("Definition \n 1) A feeling of expectation and desire for a particular thing to happen. \n 2) A feeling of trust.")
}

if (message.content.startsWith(prefix + 'defineCordial')) {
	console.log('Defining Cordial')
	message.reply("Definition \n 1) Warm and friendly. \n 2) Strongly felt. \n 3) **BRITISH** A sweet fruit-flavoured drink. \n 4) **AMERICAN** Another term for liqueur. \n 5) A pleasant tasting medicine.")
}

if (message.content.startsWith(prefix + 'help')) {
	console.log('Sending help!')
	message.reply("Help \n Do d!commands for a list of commands \n Before doing d!define there is a certain config. For example, d!defineWord. Use the list of words in d!definitions for reference. \n There isn't really much else to help with :v")
}

if (message.content.startsWith(prefix + 'defineBanana')) {
	consol  =e.log('Defining banana')
	message.reply('Defintition \n Why did you search up the defintition of banana what are you, stupid?')
}

if (message.content.startsWith(prefix + 'defineBoi')) {
	console.log('Defining Boi')
	message.reply('Definition \n An alternate way of spelling boy. Used as a meme online.')
}

if (message.content.startsWith(prefix + 'defineM8')) {
	console.log('Defining M8')
	message.reply('Definition \n An alternate way of spelling mate. Used by lazy bastards or people who want to look MLG')
}

if (message.content.startsWith(prefix + 'defineWot')) {
	console.log('Defining Wot')
    message.reply('Definition \n An alternate way of spelling what. Used by people with 42 chromosones.')
}

if (message.content.startsWith(prefix + 'defineXD')) {
	console.log('Defining XD')
	message.reply('Definition \n Laughter.')
}


if (message.content.startsWith(prefix + 'defineSob')) {
	console.log('Defining Sob...')
	message.reply('Definition \n What girls send to you when you reject them, this is usually the most common form of guilt tripping.')
}

if (message.content.startsWith(prefix + 'defineDX')) {
	console.log('Defining DX...')
	message.reply('Definition \n A "smiley" icon that means that means the person is either yelling or screaming, the reverse of "XD"')
	
}


if (message.content.startsWith(prefix + 'defineWord')) {
	console.log('Defining word')
	message.reply('Definition \n There is no such definition as Word. Please try agan')
}	

if (message.content.startsWith(prefix + 'defineAnima')) {
	console.log('Defining Anima')
	message.reply('Definition \n Female portion of the human psyche as proposed by Carl Jung. Also a powerful summon from Final Fantasy X who resembles a fish in a straitjacket.')
}

if (message.content.startsWith(prefix + 'defineCar')) {
	console.log('Defining Car')
	message.reply('Definition \n Mans best companion. Often referred as "My wife".')
}

if (message.content.startsWith(prefix + 'defineLewd')) {
	console.log('Defining Lewd')
	message.reply('Definition \n Not decent; obscene; lustful; unlearned; vile')
}

if (message.content.startsWith(prefix + 'defineHi')) {
	console.log('Defining Hi')
	message.reply('Definition \n A shorter way of saying hello.')
}

if (message.content.startsWith(prefix + 'defineHello')) {
	console.log('Defining Hello')
	message.reply('Definition \n A common greeting used in the English language.')
}

if (message.content.startsWith(prefix + 'defineLolz')) {
	console.log('Defining lolz')
	message.reply('Definition \n Lol with an unnecessary z at the end of it.')
}

});

client.login('MjkwMDgyMzk3Njc5MTI0NDgw.C6vLbQ.F0fxs7mzR6UE4VQYs2AmKVW3mXo');
