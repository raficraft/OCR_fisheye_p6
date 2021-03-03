  
// Tableau associatif de la structure HTML à injecter
// NB : Essayer à terme de faire sauter les clefs numériques 

let slider = 
   {
       [0]:{
        ['html']:{'tag':'div'} , 
        ['attr']:{'class':'slider', } ,         
            ['child']:{
                [0]:{
                    ['html']:{'tag':'div'},
                    ['attr']:{'class':'marquise'},
                    ['child']:{
                        [0]:{
                            ['html']:{'tag':'button'} , 
                            ['attr']:{'class':'sliderBox__close',} 
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
                    ['child']:{
                        [0]:{
                            ['html']:{'tag':'i'} , 
                            ['attr']:{'class':'fas fa-chevron-left',} ,
                        } 
                        
                    }
                },// button next
                [3]:{
                    ['html']:{'tag':'button'} , 
                    ['attr']:{'class':'carousel__nav carousel__next',} ,                     
                    ['child']:{
                        [0]:{
                            ['html']:{'tag':'i'} , 
                            ['attr']:{'class':'fas fa-chevron-right',} ,
                        }  
                    }
                }//button prev
                    }

                },

              


            }////div.dalogBox['child']
        }//div.dalogBox
        
    }

