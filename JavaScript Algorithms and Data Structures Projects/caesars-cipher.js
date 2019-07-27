function rot13(str) {
    // LBH QVQ VG!
    let cipher ='';
    for(let i=0;i<str.length;i++){
      var charNumber=str[i].charCodeAt()
      if(charNumber>=65&&charNumber<=77){
        cipher  +=String.fromCharCode(charNumber+13)
 
      }else if(charNumber>=78&&charNumber<=90){
       cipher  +=String.fromCharCode(charNumber-13)
 
      }else{
        cipher+=str[i]
      }
      
      
    }
   
   return cipher
 }
 
 // Change the inputs below to test
 
 // Change the inputs below to test
 rot13("SERR PBQR PNZC");