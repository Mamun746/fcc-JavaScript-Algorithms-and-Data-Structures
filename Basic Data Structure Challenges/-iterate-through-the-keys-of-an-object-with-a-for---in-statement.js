let users = {
     Alan: {
            age: 27,
               online: false
              },
               Jeff: {
                     age: 32,
                         online: true
                        
                        },
                        
                        Sarah: {
                               age: 48,
                                 online: false
                                 },
                                 
                                 Ryan: {
                                       age: 19,
                                          online: true
                                          }
                                        };
                                          
                                          function countOnline(obj) {
                                                 // change code below this line
                                                     let counter=0;
                                                       for(let i in obj) {
                                                              if(obj[i].online===true){
                                                                       counter ++
                                                                              
                                                                    }
                                                                        }
                                                                          // change code above this line
                                                                              return counter
                                                                             }
                                                                             console.log(countOnline(users));