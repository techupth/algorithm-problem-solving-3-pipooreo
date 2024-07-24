function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  const n = customers.length - 1;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n - i; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  return customers;
}
const customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));
// ตอบคำถามตรงนี้จ้า
// Big O = O(n**2) เพราะมีการวานlloopซ้อนกัน 2 loop
