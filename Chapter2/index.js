const fspromises = require('fs').promises;
const path = require('path')

const funct = async() => {
    try{
      const newdata = await  fspromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8')
      console.log(newdata)
       await fspromises.unlink(path.join(__dirname,'files','starter.txt'))
       await fspromises.writeFile(path.join(__dirname,'files','Promiseswrite.txt') , newdata)
       await fspromises.appendFile(path.join(__dirname,'files','Promiseswrite.txt'),'This is append file ')
       await fspromises.rename(path.join(__dirname,'files','Promiseswrite.txt'),path.join(__dirname,'files','Promise.txt'),'This is rename file ')
       
       const newdata1 = await fspromises.readFile(path.join(__dirname,'files','Promise.txt'),'utf8') 
       console.log(newdata1)

    
    }
    catch(err)
    {
        console.log(err);
    }
} 

funct();
// fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err,data) =>
//  {
//      if ( err) throw err ;
//      console.log(data.toString());
//  } )

//  console.log('HEllo.....')


// fs.writeFile(path.join(__dirname,'files','reply.txt'),'Nice to meet you ',(err) =>
//  {
//      if ( err) throw err ;
//     console.log('Write Complete ')

//     fs.appendFile(path.join(__dirname,'files','reply.txt'),'I create this filename as append',(err) =>
//  {
//      if ( err) throw err ;
//     console.log('append Complete ')
//  } )
//     fs.rename(path.join(__dirname,'files','reply.txt'),'I create this filename as append',(err) =>
//  {
//      if ( err) throw err ;
//     console.log('rename Complete ')
//  } )

//  } )








// //error handling
// process.on('uncaughtException',err =>{
//     console.error('There was Error while executing ',err)
//     process.exit(1);
// })