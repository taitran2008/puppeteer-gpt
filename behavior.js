async function naturalScroll(page, scrollCount = 10) {
    try {
        await page.evaluate(async (scrollCount) => {
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
        }, scrollCount);
    } catch (error) {
        console.error('Error during scrolling:', error.message);
        throw error; // Re-throw to be handled by the main try-catch
    }
}


async function checkSuspended(page) {
    const currentUrl = page.url();
    if (currentUrl.includes('suspended')) {
        console.log('⚠️ Account appears to be suspended!');
        return true;
    }
    return false;
}

module.exports =  { naturalScroll , checkSuspended}