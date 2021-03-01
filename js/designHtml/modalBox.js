  
// Tableau associatif de la structure HTML à injecter
// NB : Essayer à terme de faire sauter les clefs numériques 


let modalBox = 
   {
       [0]:{
        ['html']:{'tag':'dialog'} , 
        ['attr']:{'id' : 'formContact','class':'dialogBox', "open":"open"} ,         
            ['child']:{                             
                [0]:{
                    ['html']:{'tag':'form'} , 
                    ['attr']:{"method" : "dialog", "action" : "#"} , 
                    ['child'] : {   
                        [0]:{
                        ['html']:{'tag':'button'} , 
                        ['attr']:{'class':'dialogBox__close', 'data-js':'closeModal'} , 
                      


                        //<i class="fal fa-times"></i>
                         
                        },                        
                        [1]:{
                            
                            ['html']:{'tag':'fieldset'},
                            ['child']:{
                                [0]:{
                                    ['html']:{"tag": "legend"},
                                    ['textContent'] : {"text": "Contactez-moi"}

                                },//fin legend 

                                [1]:{
                                    ['html']:{'tag':'h1'},
                                    ['attr']:{'id':'titleContact','class':'titleContact'}
                                },

                                [2]:{
                                    ['html']:{'tag':'div'} , 
                                    ['attr']:{'class':'form__content',} ,
                                    ['child']:{
                                        [0]:{
                                            ['html']:{'tag':'div'} , 
                                            ['attr']:{'class':'brick'} ,
                                            ['child']:{
                                                [0]:{
                                                    ['html']:{'tag':'label'} , 
                                                    ['textContent'] : {'text' : 'Prénom'}
                                                },
                                                [1]:{
                                                    ['html']:{'tag':'input'} , 
                                                    ['attr']:{'class':'brickInput', "type":'text'} ,
                                                }
                                            }
                                        },
                                        [1]:{
                                            ['html']:{'tag':'div'} , 
                                            ['attr']:{'class':'brick'} ,
                                            ['child']:{
                                                [0]:{
                                                    ['html']:{'tag':'label'}, 
                                                    ['textContent'] : {'text' : 'Nom'}
                                                },
                                                [1]:{
                                                    ['html']:{'tag':'input'} , 
                                                    ['attr']:{'class':'brickInput', "type":'text'} ,
                                                }
                                            }
                                        },
                                        [2]:{
                                            ['html']:{'tag':'div'} , 
                                            ['attr']:{'class':'brick'} ,
                                            ['child']:{
                                                [0]:{
                                                    ['html']:{'tag':'label'},
                                                    ['textContent'] : {'text' : 'Email'}
                                                },
                                                [1]:{
                                                    ['html']:{'tag':'input'} , 
                                                    ['attr']:{'class':'brickInput', "type":'email'} ,
                                                }
                                            }
                                        },
                                        [3]:{
                                            ['html']:{'tag':'div'} , 
                                            ['attr']:{'class':'brick'} ,
                                            ['child']:{
                                                [0]:{
                                                    ['html']:{'tag':'label'} ,
                                                    ['textContent'] : {'text' : 'Votre message'}
                                                },
                                                [1]:{
                                                    ['html']:{'tag':'textarea'} , 
                                                    ['attr']:{'class':'brickInput brickInput--textarea'}
                                                }
                                            }
                                        },
                                        [4]:{
                                            ['html']:{'tag':'button'},
                                            ['attr']:{'type': 'submit', 'class' : 'btn btn--modal'},
                                            ['textContent'] : {'text' : "Envoyer"}
                                            
                                        }


                                    }//.form_content['child']       
                                }//.form_content

                                   
                            
                            }//fieldset['child']
                        }//Fieldset 


                    }//form['child']         
                }//form


            }////div.dalogBox['child']
        }//div.dalogBox
        
    }

