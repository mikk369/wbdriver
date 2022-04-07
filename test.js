const { By, Key, Builder } = require("selenium-webdriver");
const by = require("selenium-webdriver/lib/by");
require("chromedriver");

async function example() {
  let searchString = "jope";
  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser("chrome").build();
  //makes browser fullscreen this size
  //   await driver.manage().window().setRect({ width: 1920, height: 1080 });
  //makes windows to max size
  await driver.manage().window().maximize();
  //To fetch http://google.com from the browser with our code.
  await driver.get("https://www.weekendshoes.ee/naistele/saapad.html");

  //To send a search query by passing the value in searchString.
  // await driver.findElement(By.id("search")).sendKeys(searchString, Key.RETURN);

  // Verify the page title and print it
  let title = await driver.getTitle();
  console.log("Title is:", title);

  //wait
  await driver.sleep(1000);

  //Open item page
  await driver
    .findElement(By.className("product photo product-item-photo"))
    .click();

  //wait
  await driver.sleep(1000);

  //add to wishlist
  await driver
    .findElement(By.xpath('//*[@id="maincontent"]/div[2]/div/div[3]/div[1]/a'))
    .click();

  // //wait
  await driver.sleep(1500);

  //open wishlist small window
  await driver.findElement(By.xpath('//*[@id="wishlist-link"]')).click();

  //wait
  await driver.sleep(2500);

  //open wishlist
  await driver
    .findElement(
      By.xpath('//*[@id="miniwishlist-content-wrapper"]/div/div/div/button')
    )
    .click();

  //wait
  await driver.sleep(1200);

  // //back to product page
  await driver
    .findElement(
      By.xpath("/html/body/div[2]/main/div[2]/div/form/div[1]/ol/li/div/a")
    )
    .click();

  // //wait
  await driver.sleep(1300);

  // //wait
  await driver.sleep(1300);

  //pick a size
  await driver.findElement(By.className("selectric")).click();

  // //wait
  await driver.sleep(1300);

  //select size from dropdown
  await driver
    .findElement(
      By.xpath(
        '//*[@id="product-options-wrapper"]/div/div/div/div/div[3]/div/ul/li[2]/div[2]'
      )
    )
    .click();

  // //wait
  await driver.sleep(1900);

  //add item to basket
  await driver.findElement(By.id("product-addtocart-button")).click();

  //wait
  await driver.sleep(3000);

  //go to cart
  await driver.get("https://www.weekendshoes.ee/checkout/cart/");
  console.log("6. Ok");

  //wait
  await driver.sleep(1300);

  //increase the quantity by 1
  await driver.findElement(By.className("increase-qty")).click();

  //wait
  await driver.sleep(2500);

  //when no more boots in shop
  await driver
    .findElement(By.className("action-primary action-accept"))
    .click();

  //wait
  await driver.sleep(1900);

  //empty cart
  await driver
    .findElement(By.xpath('//*[@id="shopping-cart-table"]/tbody/tr[1]/td[6]/a'))
    .click();

  //wait
  await driver.sleep(1900);

  //searching string in search box
  await driver.findElement(By.id("search")).sendKeys(searchString, Key.RETURN);

  //wait
  await driver.sleep(1900);

  //open dropdown
  await driver.findElement(By.id("sorter")).click();

  //wait
  await driver.sleep(1900);

  //select popularity
  await driver.findElement(By.xpath('//*[@id="sorter"]/option[1]')).click();

  //wait
  await driver.sleep(2500);

  //close browser after execution
  await driver.quit();
}

example();
