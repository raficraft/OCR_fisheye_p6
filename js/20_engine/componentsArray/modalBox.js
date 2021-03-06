

let modalBox = 
   {
       [0]:{
        ['html']:{'tag':'dialog'} , 
        ['attr']:{'id' : 'formContact','class':'dialogBox', "open":"open", "data-js":"closeContact"} ,         
            ['child']:{                             
                [0]:{
                    ['html']:{'tag':'form'} , 
                    ['attr']:{"method" : "dialog", "action" : "#"} , 
                    ['child'] : {   
                        [0]:{
                        ['html']:{'tag':'button'} , 
                        ['attr']:{'class':'dialogBox__close', 'data-js':'closeContact'} , 
                      


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
                                                    ['attr']:{ 'for' : 'firstname','name':'firstname'},
                                                    ['textContent'] : {'text' : 'Prénom'}
                                                },
                                                [1]:{
                                                    ['html']:{'tag':'input'} , 
                                                    ['attr']:{'id':'firstname','class':'brickInput', "type":'text'} ,
                                                }
                                            }
                                        },
                                        [1]:{
                                            ['html']:{'tag':'div'} , 
                                            ['attr']:{'class':'brick'} ,
                                            ['child']:{
                                                [0]:{
                                                    ['html']:{'tag':'label'}, 
                                                    ['attr']:{ 'for' : 'lastname'},
                                                    ['textContent'] : {'text' : 'Nom'}
                                                },
                                                [1]:{
                                                    ['html']:{'tag':'input'} , 
                                                    ['attr']:{'id':'lastname','class':'brickInput', "type":'text'} ,
                                                }
                                            }
                                        },
                                        [2]:{
                                            ['html']:{'tag':'div'} , 
                                            ['attr']:{'class':'brick'} ,
                                            ['child']:{
                                                [0]:{
                                                    ['html']:{'tag':'label'},
                                                    ['attr']:{ 'for' : 'email'},
                                                    ['textContent'] : {'text' : 'Email'}
                                                },
                                                [1]:{
                                                    ['html']:{'tag':'input'} , 
                                                    ['attr']:{'id':'email','class':'brickInput', "type":'email'} ,
                                                }
                                            }
                                        },
                                        [3]:{
                                            ['html']:{'tag':'div'} , 
                                            ['attr']:{'class':'brick'} ,
                                            ['child']:{
                                                [0]:{
                                                    ['html']:{'tag':'label'} ,
                                                    ['attr']:{ 'for' : 'message'},
                                                    ['textContent'] : {'text' : 'Votre message'}
                                                },
                                                [1]:{
                                                    ['html']:{'tag':'textarea'} , 
                                                    ['attr']:{'id':'message','class':'brickInput brickInput--textarea'}
                                                }
                                            }
                                        },
                                        [4]:{
                                            ['html']:{'tag':'button'},
                                            ['attr']:{'type': 'submit', 'class' : 'btn btn--modal','data-js':'submitContact'},
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

