import puppeteer from "puppeteer";

// Launch the browser and open a new blank page
const browser = await puppeteer.launch({
    headless: false,
    userDataDir: "./tmp",
});
const page = await browser.newPage();

// Set the viewport of the page
await page.setViewport({ width: 1366, height: 768 });

// Navigate the page to a URL.
await page.goto(
    "https://www.amazon.fr/s?k=amazon+basics&__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=A349GJUSPT90&sprefix=amazon+basics%2Caps%2C125&ref=nb_sb_noss_2"
);

const productsHandles = await page.$$(".a-section .a-spacing-base");

for (const productHandle of productsHandles) {
    const product = await page.evaluate((el) => el.innerText, productHandle);
    console.log(product);
}

// await browser.close();
