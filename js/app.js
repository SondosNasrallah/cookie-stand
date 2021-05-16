'use strict';

// const hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',  '4pm', '5pm', '6pm', '7pm'];

    

//     //Seattle
//     const seattle = {
//     cityName:'Seattle',
//     minCus: 23,
//     maxCus: 65,
//     avgCok: 6.3,
//     cusEachHr: [],
//     cokEachHr: [], 
//     total: 0,

//     // # of Customers per hour
    
//      calcnumCusHr: function () {
//         for (let i = 0; i < hours.length; i++) {
//             // to push random values into the empty cokEachHr arrary
//         }
//         this.cusEachHr.push(random(this.minCus, this.maxCus));      
//     },
//      calcnumCokHr: function () {
//      for (let i = 0; i < hours.length; i++) {
//          this.cokEachHr.push(Math.floor(this.cusEachHr[i] * this.avgCok)); 
//          this.total += this.cokEachHr[i]; //Total
//       }

//     },
//     render : function() {

//         let parent = document.getElementById("parent"); 
//         console.log(parent);
//         let header2 = document.createElement("h2"); 

//          parent.appendChild(header2); 

//          header2.textContent = this.cityName; 

     


//      // create UL
//      let unorderedList = document.createElement('ul');
//      parent.appendChild(unorderedList);

//      for (let i = 0; i < hours.length; i++) {
//          let listItem = document.createElement('li');
//          unorderedList.appendChild(listItem);
//          listItem.textContent= `${hours[i]}: ${this.cokEachHr[i]} piece of cookies.`   

         
//      }
//      let totalItem = document.createElement('li');
//      unorderedList.appendChild(totalItem);
//      totalItem.textContent = `Total: ${this.total} cookies`

//     }
// }

// console.log(seattle);
// seattle.calcnumCusHr();
// seattle.calcnumCokHr(); 
// seattle.render();



// /* ****************************************************************************************************************** */

// // // Tokyo 
//   const tokyo = {
//     cityName:'Tokyo',
//     minCus: 3,
//     maxCus: 24,
//     avgCok: 1.2,
//     cusEachHr: [],
//     cokEachHr: [], 
//     total: 0,

//     // # of Customers per hour
    
//      calcnumCusHr: function () {
//         for (let i = 0; i < hours.length; i++) {
//             // to push random values into the empty cokEachHr arrary
//             this.cusEachHr.push(random(this.minCus, this.maxCus));      
//         }
//     },
//      calcnumCokHr: function () {
//      for (let i = 0; i < hours.length; i++) {
//          this.cokEachHr.push(Math.floor(this.cusEachHr[i] * this.avgCok)); 
//          this.total += this.cokEachHr[i]; //Total
//       }

//     },
//     render : function() {

//         let parent = document.getElementById("parent"); 
//         console.log(parent);
//         let header2 = document.createElement("h2"); 

//          parent.appendChild(header2); 

//          header2.textContent = this.cityName; 

     


//      // create UL
//      let unorderedList = document.createElement('ul');
//      parent.appendChild(unorderedList);

//      for (let i = 0; i < hours.length; i++) {
//          let listItem = document.createElement('li');
//          unorderedList.appendChild(listItem);
//          listItem.textContent= `${hours[i]}: ${this.cokEachHr[i]} piece of cookies.`   

         
//      }
//      let totalItem = document.createElement('li');
//      unorderedList.appendChild(totalItem);
//      totalItem.textContent = `Total: ${this.total} cookies`

//     }
// }

// console.log(tokyo);
// tokyo.calcnumCusHr();
// tokyo.calcnumCokHr(); 
// tokyo.render();

  
// //    /* ************************************************************************************************************** */
   
// //    // Dubai
// const dubai = {
//     cityName:'Dubai',
//     minCus: 11,
//     maxCus: 38,
//     avgCok: 3.7,
//     cusEachHr: [],
//     cokEachHr: [], 
//     total: 0,

//     // # of Customers per hour
    
//      calcnumCusHr: function () {
//         for (let i = 0; i < hours.length; i++) {
//             // to push random values into the empty cokEachHr arrary
//             this.cusEachHr.push(random(this.minCus, this.maxCus));      
//         }
//     },
//      calcnumCokHr: function () {
//      for (let i = 0; i < hours.length; i++) {
//          this.cokEachHr.push(Math.floor(this.cusEachHr[i] * this.avgCok)); 
//          this.total += this.cokEachHr[i]; //Total
//       }

//     },
//     render : function() {

//         let parent = document.getElementById("parent"); 
//         console.log(parent);
//         let header2 = document.createElement("h2"); 

//          parent.appendChild(header2); 

//          header2.textContent = this.cityName; 

     


//      // create UL
//      let unorderedList = document.createElement('ul');
//      parent.appendChild(unorderedList);

//      for (let i = 0; i < hours.length; i++) {
//          let listItem = document.createElement('li');
//          unorderedList.appendChild(listItem);
//          listItem.textContent= `${hours[i]}: ${this.cokEachHr[i]} piece of cookies.`   

         
//      }
//      let totalItem = document.createElement('li');
//      unorderedList.appendChild(totalItem);
//      totalItem.textContent = `Total: ${this.total} cookies`

//     }
// }

// console.log(dubai);
// dubai.calcnumCusHr();
// dubai.calcnumCokHr(); 
// dubai.render();




// // /* ****************************************************************************************** */


// // // Paris
// const paris = {
//     cityName:'Paris',
//     minCus: 20,
//     maxCus: 38,
//     avgCok: 2.3,
//     cusEachHr: [],
//     cokEachHr: [], 
//     total: 0,

//     // # of Customers per hour
    
//      calcnumCusHr: function () {
//         for (let i = 0; i < hours.length; i++) {
//             // to push random values into the empty cokEachHr arrary
//             this.cusEachHr.push(random(this.minCus, this.maxCus));      
//         }
//     },
//      calcnumCokHr: function () {
//      for (let i = 0; i < hours.length; i++) {
//          this.cokEachHr.push(Math.floor(this.cusEachHr[i] * this.avgCok)); 
//          this.total += this.cokEachHr[i]; //Total
//       }

//     },
//     render : function() {

//         let parent = document.getElementById("parent"); 
//         console.log(parent);
//         let header2 = document.createElement("h2"); 

//          parent.appendChild(header2); 

//          header2.textContent = this.cityName; 

     


//      // create UL
//      let unorderedList = document.createElement('ul');
//      parent.appendChild(unorderedList);

//      for (let i = 0; i < hours.length; i++) {
//          let listItem = document.createElement('li');
//          unorderedList.appendChild(listItem);
//          listItem.textContent= `${hours[i]}: ${this.cokEachHr[i]} piece of cookies.`   

         
//      }
//      let totalItem = document.createElement('li');
//      unorderedList.appendChild(totalItem);
//      totalItem.textContent = `Total: ${this.total} cookies`

//     }
// }

// console.log(paris);
// paris.calcnumCusHr();
// paris.calcnumCokHr(); 
// paris.render();

// // /* ****************************************************************************************** */
// // // Lima
// const lima = {
//     cityName:'Lima',
//     minCus: 23,
//     maxCus: 65,
//     avgCok: 6.3,
//     cusEachHr: [],
//     cokEachHr: [], 
//     total: 0,

//     // # of Customers per hour
    
//      calcnumCusHr: function () {
//         for (let i = 0; i < hours.length; i++) {
//             // to push random values into the empty cokEachHr arrary
//             this.cusEachHr.push(random(this.minCus, this.maxCus));      
//         }
//     },
//      calcnumCokHr: function () {
//      for (let i = 0; i < hours.length; i++) {
//          this.cokEachHr.push(Math.floor(this.cusEachHr[i] * this.avgCok)); 
//          this.total += this.cokEachHr[i]; //Total
//       }

//     },
//     render : function() {

//         let parent = document.getElementById("parent"); 
//         console.log(parent);
//         let header2 = document.createElement("h2"); 

//          parent.appendChild(header2); 

//          header2.textContent = this.cityName; 

     


//      // create UL
//      let unorderedList = document.createElement('ul');
//      parent.appendChild(unorderedList);

//      for (let i = 0; i < hours.length; i++) {
//          let listItem = document.createElement('li');
//          unorderedList.appendChild(listItem);
//          listItem.textContent= `${hours[i]}: ${this.cokEachHr[i]} piece of cookies.`   

         
//      }
//      let totalItem = document.createElement('li');
//      unorderedList.appendChild(totalItem);
//      totalItem.textContent = `Total: ${this.total} cookies`

//     }
// }

// console.log(lima);
// lima.calcnumCusHr();
// lima.calcnumCokHr(); 
// lima.render();

/* ************************************************************************************************* */
const hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',  '4pm', '5pm', '6pm', '7pm'];

let shops=[]; //global array


//random funtion
function random (min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
    }     

// create constructor function
    function Shop(cityName, minCus ,maxCus, avgCok){
         this.cityName=cityName;
         this.minCus=minCus;
         this.maxCus=maxCus;
         this.avgCok=avgCok;

   this.cusEachHr=[];
   this.cokEachHr=[];
   this.total=0;

   shops.push(this); // to push all array in it
   console.log('this this', this);
}

//prototype funtion to calculate the number of customers per hour

Shop.prototype.calcnumCusHr=function() {

    for (let i = 0; i < hours.length; i++) {
        this.cusEachHr.push(random(this.minCus, this.maxCus));  
   
        
    }
    // console.log(this.cusEachHr);
}

Shop.prototype.calcnumCokHr=function(){
    for (let i = 0; i < hours.length; i++) {
        this.cokEachHr.push(Math.floor(this.avgCok * this.cusEachHr[i]));  
  }  
//   console.log(this.cokEachHr);
}


let seattle=new Shop ('Seattle', 23, 65, 6.3 );
let tokyo=new Shop ('Tokyo', 3, 24, 1.2);
let dubai=new Shop ('Dubai', 11, 38, 3.7);
let paris=new Shop ('Paris', 20, 38, 2.3);
let lima=new Shop ('Lima', 2, 16, 4.6);
seattle.calcnumCusHr();
seattle.calcnumCokHr();

tokyo.calcnumCusHr();
tokyo.calcnumCokHr();

dubai.calcnumCusHr();
dubai.calcnumCokHr();

paris.calcnumCusHr();
paris.calcnumCokHr();

lima.calcnumCusHr();
lima.calcnumCokHr();


// Create table

// parent
let parent = document.getElementById('parent');
console.log(parent);

let table = document.createElement('table');
parent.appendChild(table);


// th function

function makeHeader() {
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    
    let tH1=document.createElement('th');
    headerRow.appendChild(tH1);
    tH1.textContent = 'Name';
    
    
    
    // to insert hours 
    
    for (let i = 0; i < hours.length; i++) {
        let hrElement=document.createElement('th');
        headerRow.appendChild(hrElement);
        
        
        hrElement.textContent = hours[i];
        
    }
    let finalTh = document.createElement('th');
    headerRow.appendChild(finalTh);
    finalTh.textContent = 'Daily Total in shop';
    
    
}


makeHeader();


// insert data in table

Shop.prototype.render = function() {
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);


    // create td
    let nameData = document.createElement('td');
    dataRow.appendChild(nameData);
    nameData.textContent = this.cityName;

    // looping through hours 
    for (let i = 0; i < hours.length; i++) {
         let tdElement=document.createElement('td');
         dataRow.appendChild(tdElement);
        

         tdElement.textContent = this.cokEachHr[i];
    }

    let totalDailyTotal = document.createElement('td');
    dataRow.appendChild(totalDailyTotal);
    totalDailyTotal.textContent = this.total;
}

for (let i = 0; i < shops.length; i++) {
    shops[i].calcnumCokHr();
    shops[i].calcnumCusHr();
    shops[i].render();
}

console.log(shops);


// table footer
function tableFooter() {
let footerRow=document.createElement('tr');
table.appendChild(footerRow);

let footerTh=document.createElement('th');
footerRow.appendChild(footerTh);
footerTh.textContent = 'Total';

for (let i = 0; i < hours.length; i++) {
    let totalEachHour=0;
    for (let j=0; j < shops.length; j++) {
        totalEachHour+=shops[j].cokEachHr[i];
    }
    console.log(totalEachHour);
    let totalFooter=document.createElement('th');
    footerRow.appendChild(totalFooter);
    totalFooter.textContent=totalEachHour;
  }
}

tableFooter();







