//Data
let data_1 = [594, 493, 169, 526, 184, 808, 329, 845, 995, 838];
let data_2 = [792, 228, 14, 453, 68, 710, 503, 745, 596, 668];
let biggest_numb = 0;
let data_biggest = [];

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

data_handler(data_1, data_2);

document.getElementById("array_1").innerHTML = "Datasæt 1: " + JSON.stringify(data_1, null, 4)

document.getElementById("array_2").innerHTML = "Datasæt 2: " + JSON.stringify(data_2, null, 4)


document.getElementById("array").innerHTML = "Alle mulige kombinationer, sorteret fra lav til høj: " + JSON.stringify(data_biggest, null, 4)
