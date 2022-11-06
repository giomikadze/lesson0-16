
// დვალება მგონი შევასრულე ))

function car (mName,mYear) {
  this.name = mName
  this.year = mYear
}

function User (pName,pAge){
this.name = pName
this.age  = pAge 
this.driveCare = function (car){
  document.write(this.name + 'mcxoli' + car.name + car.year)
   }
   this.displayInfo = function(){

   document.write('saxeli' + this.name + 'asaki' + this.age)
  }
 }

 var mamuka = new User ('mamuka', 26)
 mamuka.displayInfo();

  var mini = new car ('mini',1673)
  mamuka.driveCare(mini)






