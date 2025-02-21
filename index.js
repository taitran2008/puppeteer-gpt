const puppeteer = require('puppeteer-extra')
require('dotenv').config()
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const { naturalScroll, checkSuspended } = require('./behavior');
const {get_tabbable_elements, get_page_content} = require('./utilities/gpt_utils')

// Add timeout configuration
const DEFAULT_TIMEOUT = 60000; // 60 seconds
const DEFAULT_NAVIGATION_OPTIONS = {
    waitUntil: 'networkidle0',
    timeout: DEFAULT_TIMEOUT
};
const task_data = {
    url: 'https://thanhnien.vn/'
}
puppeteer.use(StealthPlugin())
console.log(process.env.CHROME_PROFILE_PATH)

// Add retry logic for navigation
async function navigateWithRetry(page, url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            await page.goto(url, DEFAULT_NAVIGATION_OPTIONS);
            return true;
        } catch (error) {
            console.log(`Navigation attempt ${i + 1} failed:`, error.message);
            if (i === maxRetries - 1) throw error;
            await new Promise(r => setTimeout(r, 5000)); // Wait 5 seconds before retry
        }
    }
}

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
    defaultViewport: null,
    timeout: DEFAULT_TIMEOUT
}).then(async browser => {
    
        console.log('Opening browser with profile...')
        const page = await browser.newPage()
        await page.setDefaultNavigationTimeout(DEFAULT_TIMEOUT);
        
        // Use the retry logic for navigation
        await navigateWithRetry(page, task_data.url);
        
        // Rest of your code...
        const all_elements = await get_tabbable_elements(page)
        console.log(all_elements)
        const select_element = all_elements[114]
    
    // Extract URL from the tag using regex
        const urlMatch = select_element.tag.match(/href="([^"]+)"/);
        const extractedUrl = urlMatch ? urlMatch[1] : null;
        
        if (extractedUrl) {
            console.log('Navigating to:', extractedUrl);
            await navigateWithRetry(page, extractedUrl);
            const page_content = await get_page_content( page );
            console.log(page_content)
        } else {
            console.error('Could not extract URL from element');
        }
            
        await naturalScroll(page, 10)
        console.log(`All done! ✨`)
    
}).catch(error => {
    if (error.message.includes('user data directory')) {
        console.error('Error: Chrome profile is in use. Please close Chrome completely.');
    } else {
        console.error('Error launching browser:', error);
    }
    process.exit(1);
});