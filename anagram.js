function anagram(string1,string2)                            // main function
    {

    if (string1.length != string2.length)                    // if length do not match return false                                                          
    {
      return false;
    }
    else (string1 === string2)                              // if string match return true                                                  
    {
        return true;
    }
  }

function splitFunction(string)                             // split function
  {
    var array=[] ,i;
      for(i=0;i<string.length;i++)                         // read each element and save  every element in a array
       {
         array[i]=string[i]
       }
      return array
  }


function sorted(string)                                    // sort function according to ASCII number
  {
    var array = []
    var temp
    var i 
    var j
      for(i=0;i<array.length;i++)                          
        {
         for(j=i+1;j<array.length;j++)
            {
              if(array[i]>array[j])
                {
                    temp =array[i]
                    array[i]=array[j]
                    array[j]=temp
                }
            }
        } 
      return array
    } 


function joiningFunction(string)                         // join function
  {
    var joined =''
      for(var i=0;i<string.length;i++)
        {
            joined =joined + string[i]                   // join all characters to a string
        }

        return joined
    } 

var word1= window.prompt('Enter a string')                // function call
var word2= window.prompt('Enter a string')
var splitword1= splitFunction(word1)
var splitword2= splitFunction(word2)
var sortword1=sorted(splitword1)
var sortword2=sorted(splitword2)
var joinword1=joiningFunction(sortword1)
var joinword2=joiningFunction(sortword2)
anagram(joinword1,joinword2)