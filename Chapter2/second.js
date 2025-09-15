const waitTime = 3000;
console.log(`setting a ${waitTime/1000 } second delay`);
const timerFinisher = () => {
    clearInterval(interval);
    console.log('done')
}
setTimeout(timerFinisher,waitTime);

const waitInterval = 500;
let currentTime = 0;

const incTime = () =>{
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime)*100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting ...${p} `)
    
    
}

const interval= setInterval(incTime,waitInterval);