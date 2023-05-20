let userEntry = prompt("Write something.")

for(i = 0; i< userEntry.length; i++){

    console.log(userEntry[i].charCodeAt().toString(2));
  
}
