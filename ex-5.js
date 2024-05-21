let crimeRecordNames = ["Theodora Milenko", "Tinashe Benigno", "Mahalia Priyanka", "Maisy Sudhir"];

// function searchCrimeRecord(name) {
//   // Start coding here
//   if (crimeRecordNames.includes(name)){
//     return (name + " has a crime record!!! ");
//   } else {
//     return (name + " has no crime record ")
//   }

// }

function searchCrimeRecord(name) {
  let checkName = crimeRecordNames.indexOf(name);
  if (checkName !== -1) {
    return (name + " has a crime record!!! ");
  } else {
    return (name + " has no crime record ")

  }
}

  

  //ผลลัพธ์ที่ควรได้จาก Example case
  //ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
  console.log(searchCrimeRecord("Dilan Sandra")); //"Dilan Sandra has no crime record"

  //ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
  console.log(searchCrimeRecord("Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"