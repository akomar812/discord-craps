# Description
Discord bot for playing multiplayer [craps](https://github.com/akomar812/craps)

# Usage
1. Setup application: https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot
2. Add bot to server: https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links
3. Add bot to channel that you would like to play on (currently only one channel is supported so a bot in multiple channels will manage the same game)
4. Start bot server

```
npm run start
```

5. Verify bot is running by sending `!help` in discord channel, you should see:

```
craps game
* Start game or join current game by running: !join
* There must be at least one bet on the table before the shooter can roll
* If a player or shooter is inactive for 1 minute they will be booted

!exit                     leave the table
!help                     show this
!dice                     show possible dice rolls with expected outputs
!join                     join as a new player starting with $100
!bet [name] [amount]      make a wager on the craps table
!roll                     roll the dice
!reset cash               for when the tables turn against you
```

6. (optional) Want your bot to have a little zazz? Add `.zazz.json` file to 
the root of the bot directory. An example zazz file looks like:

```
{
  "catch": {
    "cool": [
      ":sunglasses:"
    ],
    "[bB]ot": [
      ":robot_face:",
      "beep boop",
      "I am not a :computer:"
    ]
  }
}
```

This can be used to capture patterns and return a randomized response against
that pattern. The above example causes the bot to send a message with the
sunglasses emoji whenever a command contains "cool", and one of several
possible responses when the command contains "bot" or "Bot"

# Controls
See text interface: https://github.com/akomar812/craps#text-interface

# Issues
Currently the craps dependency isn't published as an installable node module so if you want to use this
make sure to [clone this repo](https://github.com/akomar812/craps) and manually reference the import in this
repo's `~/index.js` file
