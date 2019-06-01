 function checkanswers()
 {var val ="독도";
 if(val == (document.getElementById("print1").value))
 
  {var val ="강치";
  if(val == (document.getElementById("print2").value))
 
   {var val ="1905";
   if(val == (document.getElementById("print3").value))
 
    {var val ="리앙쿠르 암초"
    if(val == (document.getElementById("print4").value))
        
        {var val ="메탄하이드레이트"
        if(val == (document.getElementById("print5").value))
 
            {alert("열심히 공부했군요? 모두 다 맞혔습니다! 대단합니다!");
            window.open('../wow/index.html');
            }
                else{alert("5번이 오답입니다.");}
                }
 
                    else{alert("4,5번이 오답입니다.");}
                    }
 
                        else{alert("3,4,5번이 오답입니다.");}
                            }
 
        	                    else{alert("2,3,4,5번 중 오답이 있습니다.");}
                                }
                                
                                    else{alert("1,2,3,4,5번 중 오답이 있습니다.");}
    	                            }