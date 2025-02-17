const puppeteer = require('puppeteer-extra')
require('dotenv').config()
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
console.log(process.env.CHROME_PROFILE_PATH)
puppeteer.launch({ 
    headless: process.env.HEADLESS === 'false' ? false : true,
    userDataDir: process.env.CHROME_PROFILE_PATH,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-infobars',
      '--window-position=0,0',
      '--ignore-certifcate-errors',
      '--ignore-certifcate-errors-spki-list',
      '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"'
    ],
    ignoreHTTPSErrors: true,
}).then(async browser => {
    console.log('Opening browser with profile...')
    const page = await browser.newPage()
    
    // Navigate to Instagram
    await page.goto('https://www.instagram.com')
    
    // Wait for the feed to load - indicates we're logged in
    await page.waitForSelector('article', { timeout: 60000 })
    
    console.log('Successfully loaded Instagram with logged in profile')
    
    // Your automation code here...
    await naturalScroll(page)
    await browser.close()
    console.log(`All done! ✨`)
}).catch(error => {
    if (error.message.includes('user data directory')) {
        console.error('Error: Chrome profile is in use. Please close Chrome completely.');
    } else {
        console.error('Error launching browser:', error);
    }
    process.exit(1);
});


async function naturalScroll(page, scrollCount = 10) {
    try {
        await page.evaluate(async () => {
            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            
            // Get random scroll amount between 400-800 pixels
            const getRandomScroll = () => Math.floor(Math.random() * (800 - 400 + 1)) + 400;
            
            // Scroll smoothly
            for (let i = 0; i < scrollCount; i++) { // Reduced from 50 to 10 scrolls
                const scrollAmount = getRandomScroll();
                const steps = 20;
                const stepSize = scrollAmount / steps;
                
                for (let j = 0; j < steps; j++) {
                    window.scrollBy(0, stepSize);
                    await delay(50 + Math.random() * 30);
                }
                
                // Check if we've reached the bottom
                const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
                if (isAtBottom) {
                    console.log('Reached bottom of page');
                    break;
                }
                
                await delay(1000 + Math.random() * 1000);
            }
        });
    } catch (error) {
        console.error('Error during scrolling:', error.message);
        throw error; // Re-throw to be handled by the main try-catch
    }
}