/*eslint-env browser*/

// inventory: [sku, name, quantity, cost]
let inventory = [
  [4824, "Shirt", 10, 15.99],
  [6343, "Jeans", 22, 39.99],
  [3223, "Socks", 36, 9.99],
  [2233, "Hat", 12, 14.99],
  [9382, "Jacket", 5, 49.99]
];

function title() {
  console.log("INVENTORY MANAGEMENT SYSTEM");
  console.log("---------------------------");
}

function listInventory() {
  const bySku = [...inventory].sort((a, b) => a[0] - b[0]);
  bySku.forEach(([sku, name, qty, cost]) => {
    console.log(`${sku} ${name} (${qty}) $${cost.toFixed(2)}`);
  });
}

function updateQuantity(sku, newQty) {
  const idx = inventory.findIndex(item => item[0] === sku);
  if (idx === -1) return false;
  inventory[idx][2] = newQty;
  return true;
}

(function run() {
  title();
  let running = true;

  while (running) {
    const cmdRaw = typeof prompt === "function" ? prompt(
      "Inventory System\n\n" +
      "Enter a command:\n" +
      "view  - View all products\n" +
      "update- Update product quantity\n" +
      "exit  - Exit program"
    ) : null;

    if (cmdRaw === null) break;
    const cmd = cmdRaw.trim().toLowerCase();

    switch (cmd) {
      case "view":
        console.clear();
        title();
        listInventory();
        if (typeof alert === "function") alert("Inventory printed to console.");
        break;

      case "update": {
        const skuInput = prompt("Enter SKU to update:");
        if (skuInput === null) break;
        const sku = Number(skuInput);
        if (!Number.isInteger(sku)) { alert("Invalid SKU."); break; }

        const qtyInput = prompt("Enter new stock quantity (integer):");
        if (qtyInput === null) break;
        const qty = Number(qtyInput);
        if (!Number.isInteger(qty) || qty < 0) { alert("Invalid quantity."); break; }

        const ok = updateQuantity(sku, qty);
        alert(ok ? `Quantity updated for SKU ${sku}.` : `SKU ${sku} not found.`);
        if (ok) { console.clear(); title(); listInventory(); }
        break;
      }

      case "exit":
        running = false; break;

      default:
        alert('Unknown command. Please enter "view", "update", or "exit".');
    }
  }

  if (typeof alert === "function") alert("Program terminated.");
})();
