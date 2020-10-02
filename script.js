//Data
let data_1 = [];
let data_2 = [];
let biggest_numb = 0;
let data_biggest = [];
var data_length = window.prompt("How many integers?")




function array_create(arr1, arr2) {
  for (i = 0; i < data_length; i++) {
    let numb = Math.floor(Math.random() * 1001);
    arr1.push(numb);
  }
  for (k = 0; k < data_length; k++) {
    let numb = Math.floor(Math.random() * 1001);
    arr2.push(numb);
  }
}

//Funktion til at udregne på forudgivet datasæt
function data_handler(data1, data2) {
  for (i = 0; i < data1.length; i++) {
    for (j = 0; j < data2.length; j++) {
      if (data1[i] + data2[j] > biggest_numb) {
        biggest_numb = data1[i] + data2[j]
        data_biggest.push(biggest_numb)
      }
      else{
        let temp_data = data1[i] + data2[j];
          for (k = 0; k < data_biggest.length; k++) {
            if (temp_data < data_biggest[k]) {
                data_biggest.splice(k,0,temp_data);
                break
            }
        } 
      }
    }
  }
}



//Kører array generation
array_create(data_1, data_2);

//Kører lineær sorting
data_handler(data_1, data_2);


//Visualiser i DOM
document.getElementById("array_1").innerHTML = "Datasæt 1: " + JSON.stringify(data_1, null, 4)

document.getElementById("array_2").innerHTML = "Datasæt 2: " + JSON.stringify(data_2, null, 4)


document.getElementById("array").innerHTML = "Alle mulige kombinationer, sorteret fra lav til høj: " + JSON.stringify(data_biggest, null, 4)
