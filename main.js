var inputArray = [], workArray = [];    //data manipulation containers
function mainFunct() {
    var Bi,Ei,Mi;                       //indices for array containers        
    
    //Indicate this make take some time
    var output="<h4>Please wait......</h4>";
    jQuery("#interact").html(output);
    
	setTimeout (function () {  //setTimeout delay needed because above html output did not display in proper time 
        inputArray = $('#textarea00').val().split('\n'); //read input from html form
	    
        //console.log("text area contents: \n", inputArray); //debug
    
        //check to see input from text area is valid (up to 100,000 numbers n such that -1,000,000<=n<=1,000,000)
        for (var i=0 ; i< inputArray.length ; i++) {
            if (!validateValuesFunct(parseInt(inputArray[i]))) 
            {
                //values not within range of allowed values
                console.log("ith element: ", i, "... ", inputArray[i]);
                alert("Invalid input: " + inputArray[i] + "! Please make sure you submit an array of whole numbers 'n' such that -1,000,000<=n<=1,000,000");
                return;
            }
            if (inputArray.length > 100000){
                alert("Please submit a list of 100,000 whole numbers or less. ");
                return;
            }
        }
   
    
        //-=-=-=-=--=-=-=-=-=-=--begin extract unique elements of inputArray
        //this uses top-down implementation of the merge-sort algorithm guaranteeing
        //worst case scenario time complexity of O(n log(n)) & worst case 
        //scenario space complexity of O(n)
        sortFunct(inputArray, workArray, inputArray.length);
        
        //eliminate duplicates from the sorted array
        //this is accomplished in a single pass on a sorted array
        eliminateDupsFunct(inputArray, workArray);
        //-=-=-=-=--=-=-=-=-=-=--end extract unique elements of inputArray
        
        
        //console.log("inputArray length: ", inputArray.length); //debug
        
        //Display the result in html
        var output="The number of elements in the input: "
        output+=inputArray.length;
        output+="<br>The number of unique elements in the input: ";
        output+=workArray.length;
        jQuery("#output").html(output);
        jQuery("#interact").html("<h1>Done.</h1>");
           
     }, 1000);
//end maintFunct
}

//validates submitted array is a list of numbers between -1000000 and 1000000
function validateValuesFunct(value) {
	if (Number.isInteger(value) && value<=1000000 && value>=-1000000) {
		console.log("Valid: ", value);
        return true;
	}
	else {
		console.log("Invalid input found: ", value);
        return false;
	}
}

//sortFunct is the function that initiates the sort
function sortFunct(A, B, n) {
    splitMergeFunct(A, 0, n, B);
}

// splitMergeFunct is a recursively called function that splits  
// the original array in half until both halves are of length <2 
// then it calls mergeFunct to put the elements back to gether in sorted order
function splitMergeFunct(A, Bi, Ei, B)
{
    if(Ei - Bi < 2)         //array of 1 or less elements is sorted                
    {
        console.log("split array is of size smaller than 2: Ei - Bi < 2 : " , Ei - Bi);
        return;             //exit recursive loop when split sides are of length 1 (sorted)                         
    }
    var Mi = Math.ceil((Ei + Bi) / 2);              // Mi = Mid-index = mid point
                                                    // Bi = Begin-index = start of the array
                                                    // Ei = End-index = end of the array
    
    splitMergeFunct(A, Bi,  Mi, B);                 // split / merge left  half
    splitMergeFunct(A, Mi, Ei, B);                  // split / merge right half
    
    mergeFunct(A, Bi, Mi, Ei, B);                   // merge the two half runs
    
    copyArrayFunct(B, Bi, Ei, A);                   // copy the merged runs back to A (original inputArray)
    
}

//mergeFunct serves to merge left and right runs in a sorted order
function mergeFunct(A, Bi, Mi, Ei, B)
{
    var i = Bi, j = Mi;
    
    // While there are elements in the left or right runs...
    for (var k = Bi; k < Ei; k++) {
        // If left run head exists and is <= existing right run head.
        if (i < Mi && (j >= Ei || A[i] <= A[j])) {
            B[k] = A[i];
            i = i + 1;
        } else {
            B[k] = A[j];
            j = j + 1;    
        }
    } 
}

//copyArrayFunct copies merged array to the original global
function copyArrayFunct(B, Bi, Ei, A)
{
    for(var k = Bi; k < Ei; k++)
        A[k] = B[k];
}


//eliminateDupsFunct eliminates duplicates from the sorted input array
function eliminateDupsFunct(A, B)
{
    B = [];
    var i=0, j=i+1, Bi=0;
    for (var i=0, j=i+1; i<A.length ; i++, j++)
    {
        if (A[i] == A[j])
        {
            
        }
        else 
        {
            B[Bi]=A[i];
            Bi++;
        }
        
    }
    console.log("result dups eliminated: ", B);
    workArray = B;
    
}
