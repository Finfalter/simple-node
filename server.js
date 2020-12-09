
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const constraint = process.env.TIME;

  while(true) {
    console.log(`Microservices rock! ${constraint}`);
    await sleep(5000);
  }
}

main();
