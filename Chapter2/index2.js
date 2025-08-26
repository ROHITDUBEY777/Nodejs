const fs = require('fs').promises;

const path = require('path')

const func =  async () => {
    try{
     const newdata = await fs.readFile(path.join(__dirname,'files','new-lorem.txt'),'utf8');
    console.log(newdata);
     await fs.writeFile(path.join(__dirname,'files','Reply2.txt'),'THis is a generated reply ');
     await fs.appendFile(path.join(__dirname,'files','NewRelpy.txt') ,'\n\nA new code is added here this one');
     await fs.rename(path.join(__dirname,'files','NewReply.txt'),path.join(__dirname,'files','Reply.txt'));
    }
    catch(err){
      console.error(err);
    }
   

}  

func()
// fs.readFile('./files/new-lorem.txt','utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
    
// // })

// fs.writeFile(path.join(__dirname,'files','reply.txt',) , 'This is reply ' ,(err)=>{
//     if(err) throw err;
//     console.log('Write complete')

//     fs.appendFile(path.join(__dirname,'files','reply.txt' ),'The append worked successfully',(err)=>{
//     if(err) throw err;
//     console.log('Append complete')

//     fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','NewReply.txt'),(err)=>{
//         if (err) throw err;
//         console.log("rename completed")
//     })
//  } )


// })

process.on('uncaughtException',err=>{
    console.error(`There was an error so please keep working :${err}`)
    process.exit(1);
    
})