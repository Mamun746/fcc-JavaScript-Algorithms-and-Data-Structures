function palindrome(str) {
    // Good luck!
    const reg=/[\W_]/g;
    str=str.toLowerCase().replace(reg,'')
    const reversed=str.split('').reverse().join('')
    if(reversed===str){
      return true
    }else{
      return false
    }
    
    
  }
  
  palindrome("eye");