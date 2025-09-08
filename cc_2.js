// Coding Challenge 00

// Code goes here

const itemName = "USB-C Cable";
let unitCost = 2.55;
let currentStock = 120;
let reorderLevel =  150;
let targetStock = 200;
let weeklyDemand = 32;
let supplierLeadTimeWeeks = 2;

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitCost;
let reoderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

console.log("Item Name:" , itemName);
console.log("Weeks of Cover:" , weeksOfCover);
console.log("Reorder Now?:" , reoderNow);
console.log("Recommended Reorder Quantity:" , reorderQuantity);
console.log("Estimated Reorder Cost: $" + estimatedReorderCost.toFixed(2));