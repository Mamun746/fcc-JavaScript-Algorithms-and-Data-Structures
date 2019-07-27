function repeatStringNumTimes(str, num) {

  let repeting=""; if(num < 0) return ''

  for(let i=0;i<num;i++){ repeting += str; }
  
  return repeting 
}
console.log(  repeatStringNumTimes("abc", 3))
;