
function largestOfFour(arr) { 
     // You can do this!\n 
     let maximum=[]
      for(let i=0;i<arr.length;i++){
           let maxnum=arr[i][0]
             for(let j=0;j<arr[i].length;j++){
                 let currentNum=arr[i][j]
              if(currentNum>maxnum){
                       maxnum=currentNum     }  }   maximum.push(maxnum)
                  }  return maximum;}
                 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);