let value: unknown = "TypeScript";

// Method 1: angle brackets
let strLength1 = (<string>value).length;

// Method 2: as keyword (recommended)
let strLength2 = (value as string).length;

console.log(strLength1, strLength2);
