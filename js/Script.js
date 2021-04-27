// api url

let weather = "http://webapi19sa-1.course.tamk.cloud/v1/weather";

//  Latest 500 measurements:

fetch(weather)
    .then(res => res.json())
    .then((out) => {
        console.table('Checkout this JSON! ', out);
        show(out);
    })
    .catch(err => { throw err });



function show(data) {
    let tab =
        `<tr>
          <th>Row_Number</th>
          <th>Date</th>
          <th>Time</th>
          <th>Measurement_Type</th>
          <th>Value</th>
         </tr>`;

    // Loop to access all rows 
    let count = 0;
    for (let r of data) {

        count = count + 1;
        if (count <= 50) {
            tab += `<tr> 
    <td>${count} </td>
    <td>${r.date_time.slice(0,10)}</td> 
    <td>${r.date_time.slice(11,19)}</td>
    <td>${Object.keys(r.data)}</td>
    <td>${Object.values(r.data)}</td>
              
</tr>`;
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}
