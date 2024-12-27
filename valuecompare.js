const value = "5";

// Using double equals (==) for comparison
if (value == 5) {
    console.log("Equal"); // This will be logged because == performs type coercion
} else {
    console.log("Not Equal");
}

// Using triple equals (===) for comparison
if (value === 5) {
    console.log("Equal");
} else {
    console.log("Not Equal"); // This will be logged because === checks both value and type
}

// Using double equals (==) for comparison
if (value == "5") {
    console.log("Equal"); // This will be logged because == performs type coercion
} else {
    console.log("Not Equal");
}