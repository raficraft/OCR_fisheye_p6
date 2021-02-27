  
// Tableau associatif de la structure HTML à injecter
// NB : Essayer à terme de faire sauter les clefs numériques 

let slider = 
   {
       [0]:{
        ['html']:{'tag':'section'} , 
        ['attr']:{'class':'slider', } ,         
            ['child']:{
                 [0]:{
                    ['html']:{'tag':'button'} , 
                    ['attr']:{'class':'dialogBox__close',} , 
                    ['textContent']:{'text': 'X'} , 
                },// fin de Button
                
                [1]:{
                    ['html']:{'tag':'div'} , 
                    ['attr']:{'id': "carousel", "class":"carousel"},
                    ['child']:{
                        [0]:{
                            ['html']:{'tag':'div'} , 
                            ['attr']:{"class":"carousel__container"},

                        }
                    }
                },
                
                //Les figures seront injecté dynamiquement par une usine
              
                [2]:{
                    ['html']:{'tag':'button'} , 
                    ['attr']:{'class':'carousel__nav carousel__prev',} , 
                    ['textContent']:{'text': '<'} , 
                },// button next
                [3]:{
                    ['html']:{'tag':'button'} , 
                    ['attr']:{'class':'carousel__nav carousel__next',} , 
                    ['textContent']:{'text': '>'} , 
                },//button prev

            }////div.dalogBox['child']
        }//div.dalogBox
        
    }

