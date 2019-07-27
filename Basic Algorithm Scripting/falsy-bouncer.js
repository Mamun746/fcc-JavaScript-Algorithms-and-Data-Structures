function bouncer(arr) {
     // Don't show a false ID to this bouncer.
      const newArr=[]
       for(let element of arr){
             if(element){
                 newArr.push(element)
                 } }
                 return newArr
                }





console.log(bouncer([7, "ate", " ", false, 9]));
