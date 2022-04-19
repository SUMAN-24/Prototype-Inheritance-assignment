//custom array constructor
function myArray() {

    Object.defineProperty(this, "length",  {
        value: 0,
        writable: true,
        enumerable: false, //dont count this property
      });

    this.length = arguments.length;
      
    for(let i=0; i<this.length; i++)
    {
        //  console.log("i:",i);

        this[i] = arguments[i];
        
    }
}

let a3 = new myArray();

myArray.prototype.पुश = function (value) {

    let index = this.length;
    this[index] = value;
    this.length++;
};

myArray.prototype.पॉप = function () {

    let index = this.length - 1;

    if(index<0)
    {
        console.log("error: can't pop, accessing index that's not present");
    }
    else{
     this[index];

    this.length--;
    }
   
};

myArray.prototype.टॉप = function () {

    let index = this.length-1;
     this[index] ;
    
    console.log(this[index]);
};

myArray.prototype.प्रिंट = function () {

    ans=[];
    
    let index = this.length;

   for(let i=0; i<this.length; i++)
   {
       ans.push(this[i]);
   }
   console.log(ans.join(","));

   if(index<=0)
    {
        console.log("error: Can't print as no elements present in Array/Stack.");
    }
};

myArray.prototype.प्रिंटउल्टा = function () {

    ans=[];

    let index = this.length;

   for(let i=this.length-1; i>=0; i--)
   {
       ans.push(this[i]);
   }
   console.log(ans.join(","));

   if(index<=0)
    {
        console.log("error: Can't reverse as no elements present in Array/Stack.");
    }
};

myArray.prototype.आकार = function () {

    let index = this.length;

    // if(index<0)
    // {
    //     console.log("Size : undefined");
    // }
    //  else{
        console.log(index);
    //}
};

a3.पुश("a");
a3.पुश("b");
a3.पुश("c");
a3.पॉप();
a3.टॉप();

console.log("a3:",Object.values(a3));

a3.प्रिंट();
a3.प्रिंटउल्टा();
a3.आकार();

// if(index<0)
    // {
    //     console.log("error: can't pop, accessing index that's not present");
    // }
    // else{

