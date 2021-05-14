'use strict';

const hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',  '4pm', '5pm', '6pm', '7pm'];

    

    //Seattle
    const seattle = {
    cityName:'Seattle',
    minCus: 23,
    maxCus: 65,
    avgCok: 6.3,
    cusEachHr: [],
    cokEachHr: [], 
    total: 0,

    // # of Customers per hour
    
     calcnumCusHr: function () {
        for (let i = 0; i < hours.length; i++) {
            // to push random values into the empty cokEachHr arrary
            this.cusEachHr.push(random(this.minCus, this.maxCus));      
        }
    },
     calcnumCokHr: function () {
     for (let i = 0; i < hours.length; i++) {
         this.cokEachHr.push(Math.floor(this.cusEachHr[i] * this.avgCok)); 
         this.total += this.cokEachHr[i]; //Total
      }

    },
    render : function() {

        let parent = document.getElementById("parent"); 
        console.log(parent);
        let header2 = document.createElement("h2"); 

         parent.appendChild(header2); 

         header2.textContent = this.cityName; 

     


     // create UL
     let unorderedList = document.createElement('ul');
     parent.appendChild(unorderedList);

     for (let i = 0; i < hours.length; i++) {
         let listItem = document.createElement('li');
         unorderedList.appendChild(listItem);
         listItem.textContent= `${hours[i]}: ${this.cokEachHr[i]} piece of cookies.`   

         
     }
     let totalItem = document.createElement('li');
     unorderedList.appendChild(totalItem);
     totalItem.textContent = `Total: ${this.total} cookies`

    }
}

console.log(seattle);
seattle.calcnumCusHr();
seattle.calcnumCokHr(); 
seattle.render();



/* ****************************************************************************************************************** */

// // Tokyo 
  const tokyo = {
    cityName:'Tokyo',
    minCus: 3,
    maxCus: 24,
    avgCok: 1.2,
    cusEachHr: [],
    cokEachHr: [], 
    total: 0,

    // # of Customers per hour
    
     calcnumCusHr: function () {
        for (let i = 0; i < hours.length; i++) {
            // to push random values into the empty cokEachHr arrary
            this.cusEachHr.push(random(this.minCus, this.maxCus));      
        }
    },
     calcnumCokHr: function () {
     for (let i = 0; i < hours.length; i++) {
         this.cokEachHr.push(Math.floor(this.cusEachHr[i] * this.avgCok)); 
         this.total += this.cokEachHr[i]; //Total
      }

    },
    render : function() {

        let parent = document.getElementById("parent"); 
        console.log(parent);
        let header2 = document.createElement("h2"); 

         parent.appendChild(header2); 

         header2.textContent = this.cityName; 

     


     // create UL
     let unorderedList = document.createElement('ul');
     parent.appendChild(unorderedList);

     for (let i = 0; i < hours.length; i++) {
         let listItem = document.createElement('li');
         unorderedList.appendChild(listItem);
         listItem.textContent= `${hours[i]}: ${this.cokEachHr[i]} piece of cookies.`   

         
     }
     let totalItem = document.createElement('li');
     unorderedList.appendChild(totalItem);
     totalItem.textContent = `Total: ${this.total} cookies`

    }
}

console.log(tokyo);
tokyo.calcnumCusHr();
tokyo.calcnumCokHr(); 
tokyo.render();

  
//    /* ************************************************************************************************************** */
   
//    // Dubai
const dubai = {
    cityName:'Dubai',
    minCus: 11,
    maxCus: 38,
    avgCok: 3.7,
    cusEachHr: [],
    cokEachHr: [], 
    total: 0,

    // # of Customers per hour
    
     calcnumCusHr: function () {
        for (let i = 0; i < hours.length; i++) {
            // to push random values into the empty cokEachHr arrary
            this.cusEachHr.push(random(this.minCus, this.maxCus));      
        }
    },
     calcnumCokHr: function () {
     for (let i = 0; i < hours.length; i++) {
         this.cokEachHr.push(Math.floor(this.cusEachHr[i] * this.avgCok)); 
         this.total += this.cokEachHr[i]; //Total
      }

    },
    render : function() {

        let parent = document.getElementById("parent"); 
        console.log(parent);
        let header2 = document.createElement("h2"); 

         parent.appendChild(header2); 

         header2.textContent = this.cityName; 

     


     // create UL
     let unorderedList = document.createElement('ul');
     parent.appendChild(unorderedList);

     for (let i = 0; i < hours.length; i++) {
         let listItem = document.createElement('li');
         unorderedList.appendChild(listItem);
         listItem.textContent= `${hours[i]}: ${this.cokEachHr[i]} piece of cookies.`   

         
     }
     let totalItem = document.createElement('li');
     unorderedList.appendChild(totalItem);
     totalItem.textContent = `Total: ${this.total} cookies`

    }
}

console.log(dubai);
dubai.calcnumCusHr();
dubai.calcnumCokHr(); 
dubai.render();




// /* ****************************************************************************************** */


// // Paris
const paris = {
    cityName:'Paris',
    minCus: 20,
    maxCus: 38,
    avgCok: 2.3,
    cusEachHr: [],
    cokEachHr: [], 
    total: 0,

    // # of Customers per hour
    
     calcnumCusHr: function () {
        for (let i = 0; i < hours.length; i++) {
            // to push random values into the empty cokEachHr arrary
            this.cusEachHr.push(random(this.minCus, this.maxCus));      
        }
    },
     calcnumCokHr: function () {
     for (let i = 0; i < hours.length; i++) {
         this.cokEachHr.push(Math.floor(this.cusEachHr[i] * this.avgCok)); 
         this.total += this.cokEachHr[i]; //Total
      }

    },
    render : function() {

        let parent = document.getElementById("parent"); 
        console.log(parent);
        let header2 = document.createElement("h2"); 

         parent.appendChild(header2); 

         header2.textContent = this.cityName; 

     


     // create UL
     let unorderedList = document.createElement('ul');
     parent.appendChild(unorderedList);

     for (let i = 0; i < hours.length; i++) {
         let listItem = document.createElement('li');
         unorderedList.appendChild(listItem);
         listItem.textContent= `${hours[i]}: ${this.cokEachHr[i]} piece of cookies.`   

         
     }
     let totalItem = document.createElement('li');
     unorderedList.appendChild(totalItem);
     totalItem.textContent = `Total: ${this.total} cookies`

    }
}

console.log(paris);
paris.calcnumCusHr();
paris.calcnumCokHr(); 
paris.render();

// /* ****************************************************************************************** */
// // Lima
const lima = {
    cityName:'Lima',
    minCus: 23,
    maxCus: 65,
    avgCok: 6.3,
    cusEachHr: [],
    cokEachHr: [], 
    total: 0,

    // # of Customers per hour
    
     calcnumCusHr: function () {
        for (let i = 0; i < hours.length; i++) {
            // to push random values into the empty cokEachHr arrary
            this.cusEachHr.push(random(this.minCus, this.maxCus));      
        }
    },
     calcnumCokHr: function () {
     for (let i = 0; i < hours.length; i++) {
         this.cokEachHr.push(Math.floor(this.cusEachHr[i] * this.avgCok)); 
         this.total += this.cokEachHr[i]; //Total
      }

    },
    render : function() {

        let parent = document.getElementById("parent"); 
        console.log(parent);
        let header2 = document.createElement("h2"); 

         parent.appendChild(header2); 

         header2.textContent = this.cityName; 

     


     // create UL
     let unorderedList = document.createElement('ul');
     parent.appendChild(unorderedList);

     for (let i = 0; i < hours.length; i++) {
         let listItem = document.createElement('li');
         unorderedList.appendChild(listItem);
         listItem.textContent= `${hours[i]}: ${this.cokEachHr[i]} piece of cookies.`   

         
     }
     let totalItem = document.createElement('li');
     unorderedList.appendChild(totalItem);
     totalItem.textContent = `Total: ${this.total} cookies`

    }
}

console.log(lima);
lima.calcnumCusHr();
lima.calcnumCokHr(); 
lima.render();



function random (min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
    }     