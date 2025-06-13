let nam = "NAME : IMAMZADI" 
let roll = "<br> ROLL NO : JS5-OO4"
let teacher = "<br> TEACHER NAME : MISS SHAFAQ ANEES<center><br>" 
let mark = "<br> RESULT MARK SHEET "

document.write(nam + roll + teacher + mark )

// table

document.write("<table border = 8px>")
// veriable

let eng = 90
let urdu = 89
let maths = 81
let sci = 67
let islami = 66
let comp = 43
let econo =76

// Total

document.write("<tr><th><center>Subject</th><th><center>Obtained Mark<s/th><th><center>Total Marks</th></tr>")

document.write("<tr><td><center>ENGLISH</td><td><center>"+ eng +"</td><td><center>100</td></tr>")

document.write("<tr><td><center>URDU</td><td><center>"+ urdu +"</td><td><center>100</td></tr>")

document.write("<tr><td><center>MATHS</td><td><center>"+ maths +"</td><td><center>100</td></tr>")

document.write("<tr><td><center>SCIENCE</td><td><center>"+ sci +"</td><td><center>100</td></tr>")

document.write("<tr><td><center>ISLAMIAT</td><td><center>"+ islami +"</td><td><center>100</td></tr>")

document.write("<tr><td><center>COMPUTER</td><td><center>"+ comp +"</td><td><center>100</td></tr>")

document.write("<tr><td><center>ECONOMICS</td><td><center>"+ econo +"</td><td><center>100</td></tr>")

let total = eng + urdu + maths + sci + islami + comp + econo
document.write("<tr><td><center>OBTAINED MARK</td><td><center>"+ total +"</td><td><center>700</td></tr>")

// Percentage

let per= total /700 * 100
document.write("<tr><td><center>PERCENTAGE</td><td><center>"+ per +"</td><td rowspan=3><center>Out Of 100%</td></tr>")

// Grade

if (per>=80)
  {grade= "A+1"}  
               
else if (per>=70)
   {grade= "A"}  
              
else if (per>=60)
{grade= "B"}  
                
else if (per>=50)
    {grade= "c"} 

else if (per>= 40)
   {grade= "D"}

else if(per>= 33)
      {grade= "E"} 
      
else ("fail")

document.write("<tr><td><center>GRADE</td><td><center>"+ grade +"</td></tr>")

// if else with remarks

if(per>=80)
      {remarks = "Excellent"}  
                     
      else if(per>=70)
               {remarks = "very Good"}
                    
      else if(per>=60)
               {remarks = "Good"} 
                      
      else if(per>=50) 
           {remarks= "Fair"} 

      else if(per>= 40)
            {remarks= "Poor"} 

      else if(per>= 33)
            {remarks = "Need Improvement"} 

      else ("fail")
      
                         
document.write("<tr><td><center>REMARKS</td><td><center>"+ remarks +"</td></tr>")
