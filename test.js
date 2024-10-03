function postDate(dateTime){

   
    const hour = parseInt(dateTime/3600);
    const remainSecond = dateTime % 3600;
    const minute = parseInt(remainSecond /60);
    const sec =dateTime % 60
    
  
    return `${hour} hour ${minute} minute ${sec} seconds`
      
    
  }

  console.log(postDate("1672656000"))