const events = require("events");

let emitter = new events.EventEmitter();



emitter.on("CustomEvent",(message,user)=>{
    console.log(`${user}:${message}`)
    
})

emitter.emit("CustomEvent","Hii Form ROhit ","ROhit");
emitter.emit("CustomEvent","Hii Form ROhit ","ROhit");

process.stdin.on("data",(data)=>{
    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("CustomEvent","Goodbye","process");
        process.exit();
    }
    emitter.emit(
        "CustomEvent",
        data.toString().trim(),
        "terminal"
    )
})