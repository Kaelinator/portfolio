
import rockwellIcon from '../images/rockwell-network/rockwell-icon.png'
import rockwellHomepage from '../images/rockwell-network/homepage.png'
import rockwellLevels from '../images/rockwell-network/levels.png'

export default {
  title: "Coding",
  color: "#5eaa4f",
  description: "I spend the greater portion of my freetime coding. I love to incorporate code wherever I can, whether into school, internships, and running.",
  icon: "code",
  cards: [
    {
      title: 'Rockwell server network',
      alt: 'server icon',
      description: 'This was a complete Minecraft server network that I created in the summer of 2016. Including two minigames, online leaderboards, and ranks. By utilizing PHP, MySQL, and PayPal\'s REST API, I was able to create an online shop from scratch.',
      previewImg: rockwellIcon,
      carousel: [
        {
          description: 'Lobby built by IanDragonMaster for UHC-In-A-Box, a minigame resembling today\'s popular UHC Meetup minigame',
          image: 'https://pbs.twimg.com/media/CxwZu_OUUAEDwFE.jpg:large'
        },
        {
          description: 'Debugging the player spawnpoints in UHC-In-A-Box',
          image: 'https://pbs.twimg.com/media/CqA_aQkUsAAlqwX.jpg:large'
        },
        {
          description: 'Map voting system for Levels minigame',
          image: 'https://pbs.twimg.com/media/C0V5UEeVIAA7k1W.jpg:large'
        },
        {
          description: 'Home page, created with PHP',
          image: rockwellHomepage
        },
        {
          description: 'Levels minigame lobby',
          image: rockwellLevels
        }
      ]
    }
  ]
}