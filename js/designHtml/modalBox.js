  
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
                        ['textContent']:{'text': 'X'} , 
                        },                        
                        [1]:{
                            
                            ['html']:{'tag':'fieldset'},
                            ['child']:{
                                [0]:{
                                    ['html']:{"tag": "legend"},
                                    ['textContent'] : {"text": "Contacter-moi"}

                                },//fin legend 

                                [1]:{
                                    ['html']:{'tag':'h1'},
                                    ['attr']:{'id':'titleContact','class':'titleContact'}
                                },

                                [2]:{
                                    ['html']:{'tag':'div'} , 
                                    ['attr']:{'class':'form_content',} ,
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
                                                    ['attr']:{'class':'brickInput', "type":'text', "placeholder" : "Mon prénom"} ,
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
                                                    ['attr']:{'class':'brick__input', "type":'text', "placeholder" : "Mon Nom"} ,
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
                                                    ['attr']:{'class':'brick__input', "type":'emial', "placeholder" : "Email"} ,
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
                                                    ['attr']:{'class':'brick__input', "placeholder" : "Message", "rows" : "5", "cols" : "28"}
                                                }
                                            }
                                        },
                                        [4]:{
                                            ['html']:{'tag':'button'},
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

