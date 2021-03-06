  
// Tableau associatif de la structure HTML à injecter
// NB : Essayer à terme de faire sauter les clefs numériques 

let slider = 
   {
       [0]:{
        ['html']:{'tag':'div'} , 
        ['attr']:{'class':'slider','data-js':'closeCarousel' } ,         
            ['child']:{
                [0]:{
                    ['html']:{'tag':'div'},
                    ['attr']:{'class':'marquise'},
                    ['child']:{
                        [0]:{
                            ['html']:{'tag':'button'} , 
                            ['attr']:{'class':'sliderBox__close','data-js':'closeCarousel'} 
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
                    ['attr']:{'class':'carousel__nav carousel__prev','data-js':'prevCarousel'} , 
                    ['child']:{
                        [0]:{
                            ['html']:{'tag':'i'} , 
                            ['attr']:{'class':'fas fa-chevron-left',} ,
                        } 
                        
                    }
                },// button next
                [3]:{
                    ['html']:{'tag':'button'} , 
                    ['attr']:{'class':'carousel__nav carousel__next','data-js':'nextCarousel'} ,                     
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

