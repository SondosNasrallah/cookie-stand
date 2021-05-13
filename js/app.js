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
    allcookieshops: 0,

    // # of Customers per hour
    numCusHr: function () {
        for (let i = 0; i< hours.length; i++) {
            // to push random values into the empty cokEachHr arrary
            this.cusEachHr.push(random( this.minCus, this.maxCus));
            
            
        }
    },
    numCokHr: function () {
     for (let i = 0; i < hours.length; i++) {
         this.cokEachHr.push(Math.floor(this.cusEachHr[i] * this.avgCok)); 
         this.allcookieshops += this.cokEachHr[i];
      }

    },
    render : function() {
     let Parent= document.getElementById('firstitem');
     console.log(Parent);

     let aboutShop = document.createElement('h2');
     Parent.appendChild(aboutShop); 
     aboutShop.textcontent=this.cityName;

     // create UL
     let unorderedList = document.createElement('ul');
     Parent.appendChild(unorderedList);

     for (let i = 0; i < hours.length; i++) {
         let listItem = document.createElement('li');
         unorderedList.appendChild(listItem);
         
      listItem.textcontent= `Total: ${this.allcookieshops} piece of cookies.`   

         
     }

    }
}

console.log(seattle);
seattle.numCusHr();
seattle.numCokHr(); 
seattle.render();



/* ****************************************************************************************************************** */

// Tokyo 
    const tokyo = {
        cityName:'Tokyo',
        minCus: 3,
        maxCus: 24,
        avgCok: 1.2,
        cusEachHr: [],
        cokEachHr: [], 
        allcookieshops: 0,
    
        // # of Customers per hour
        numCusHr: function () {
            for (let i = 0; i< hours.length; i++) {
                // to push random values into the empty cokEachHr arrary
                this.cusEachHr.push(random( this.minCus, this.maxCus));
                
                
            }
        },
        numCokHr: function () {
         for (let i = 0; i < hours.length; i++) {
             this.cokEachHr.push(Math.floor(this.cusEachHr[i] * this.avgCok)); 
             this.allcookieshops += this.cokEachHr[i];
          }
    
        },
        render : function() {
         let Parent= document.getElementById('firstitem');
         console.log(Parent);
    
         let aboutShop = document.createElement('h2');
         Parent.appendChild(aboutShop); 
         aboutShop.textcontent=this.cityName;
    
         // create UL
         let unorderedList = document.createElement('ul');
         Parent.appendChild(unorderedList);
    
         for (let i = 0; i < hours.length; i++) {
             let listItem = document.createElement('li');
             unorderedList.appendChild(listItem);
             
          listItem.textcontent= `Total: ${this.allcookieshops} piece of cookies.`   
    
             
         }
    
        }
    }
    
    console.log(tokyo);
    tokyo.numCusHr();
    tokyo.numCokHr(); 
    tokyo.render();
  
   /* ************************************************************************************************************** */
   
   // Dubai
   const dubai = {
    cityName:'Dubai',
    minCus: 11,
    maxCus: 38,
    avgCok: 3.7,
    cusEachHr: [],
    cokEachHr: [], 
    allcookieshops: 0,

    // # of Customers per hour
    numCusHr: function () {
        for (let i = 0; i< hours.length; i++) {
            // to push random values into the empty cokEachHr arrary
            this.cusEachHr.push(random( this.minCus, this.maxCus));
            
            
        }
    },
    numCokHr: function () {
     for (let i = 0; i < hours.length; i++) {
         this.cokEachHr.push(Math.floor(this.cusEachHr[i] * this.avgCok)); 
         this.allcookieshops += this.cokEachHr[i];
      }

    },
    render : function() {
     let Parent= document.getElementById('firstitem');
     console.log(Parent);

     let aboutShop = document.createElement('h2');
     Parent.appendChild(aboutShop); 
     aboutShop.textcontent=this.cityName;

     // create UL
     let unorderedList = document.createElement('ul');
     Parent.appendChild(unorderedList);

     for (let i = 0; i < hours.length; i++) {
         let listItem = document.createElement('li');
         unorderedList.appendChild(listItem);
         
      listItem.textcontent= `Total: ${this.allcookieshops} piece of cookies.`   

         
     }

    }
}

console.log(dubai);
tokyo.numCusHr();
dubai.numCokHr(); 
dubai.render();


/* ****************************************************************************************** */

// Paris
const paris = {
    cityName:'Paris',
    minCus: 20,
    maxCus: 38,
    avgCok: 2.3,
    cusEachHr: [],
    cokEachHr: [], 
    allcookieshops: 0,

    // # of Customers per hour
    numCusHr: function () {
        for (let i = 0; i< hours.length; i++) {
            // to push random values into the empty cokEachHr arrary
            this.cusEachHr.push(random( this.minCus, this.maxCus));
            
            
        }
    },
    numCokHr: function () {
     for (let i = 0; i < hours.length; i++) {
         this.cokEachHr.push(Math.floor(this.cusEachHr[i] * this.avgCok)); 
         this.allcookieshops += this.cokEachHr[i];
      }

    },
    render : function() {
     let Parent= document.getElementById('firstitem');
     console.log(Parent);

     let aboutShop = document.createElement('h2');
     Parent.appendChild(aboutShop); 
     aboutShop.textcontent=this.cityName;

     // create UL
     let unorderedList = document.createElement('ul');
     Parent.appendChild(unorderedList);

     for (let i = 0; i < hours.length; i++) {
         let listItem = document.createElement('li');
         unorderedList.appendChild(listItem);
         
      listItem.textcontent= `Total: ${this.allcookieshops} piece of cookies.`   

         
     }

    }
}

console.log(paris);
paris.numCusHr();
paris.numCokHr(); 
paris.render();

/* ******************************************************************************************************************* */

// Lima
const lima = {
    cityName:'Lima',
    minCus: 3,
    maxCus: 24,
    avgCok: 1.2,
    cusEachHr: [],
    cokEachHr: [], 
    allcookieshops: 0,

    // # of Customers per hour
    numCusHr: function () {
        for (let i = 0; i< hours.length; i++) {
            // to push random values into the empty cokEachHr arrary
            this.cusEachHr.push(random( this.minCus, this.maxCus));
            
            
        }
    },
    numCokHr: function () {
     for (let i = 0; i < hours.length; i++) {
         this.cokEachHr.push(Math.floor(this.cusEachHr[i] * this.avgCok)); 
         this.allcookieshops += this.cokEachHr[i];
      }

    },
    render : function() {
     let Parent= document.getElementById('firstitem');
     console.log(Parent);

     let aboutShop = document.createElement('h2');
     Parent.appendChild(aboutShop); 
     aboutShop.textcontent=this.cityName;

     // create UL
     let unorderedList = document.createElement('ul');
     Parent.appendChild(unorderedList);

     for (let i = 0; i < hours.length; i++) {
         let listItem = document.createElement('li');
         unorderedList.appendChild(listItem);
         
      listItem.textcontent= `Total: ${this.allcookieshops} piece of cookies.`   

         
     }

    }
}

console.log(lima);
lima.numCusHr();
lima.numCokHr(); 
lima.render();


function random (min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
    }     