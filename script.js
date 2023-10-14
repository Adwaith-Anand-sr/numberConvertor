let binary_input=document.getElementById('binary');
let hexa_input= document.getElementById('hexa');
let octal_input= document.getElementById('octal');
let decimal_input= document.getElementById('decimal');

//=====binary to oth======
function binaryToDecimal() {
  let decimal=[];
  let binary = binary_input.value;
  let dec=0;
  for (let i = 0; i < 100; i++) {
    if (binary=="") {
      break;
    }
    else{
    let elem=binary%10;
    decimal[i]= elem* Math.pow(2,i);
    binary=Math.floor(binary/10)
    dec +=decimal[i];
    }
  }
  decimal_input.value=dec;
}
function binaryToOctal() {
  let binaryNumber = binary_input.value;
  let decimalNumber = parseInt(binaryNumber, 2);
  let octalNumber = decimalNumber.toString(8);
  octal_input.value= octalNumber;
}
function binaryToHexa() {
  let binaryNumber = binary_input.value;
  let decimalNumber = parseInt(binaryNumber, 2);
  let hexaNumber = decimalNumber.toString(16);
  hexa_input.value= hexaNumber;
}
binary_input.addEventListener("input",function () {
  binaryToDecimal()
  binaryToOctal()
  binaryToHexa()
  if (binary_input.value=="") {
    decimal_input.value ="";
    octal_input.value="";
    hexa_input.value="";
  }
} )

//======decimal to oth======
function decimalToBinary() {
  binary_input.value =""
  let dec= decimal_input.value;
  let rem;
  let binary=[];
  let revBinary;
  for (let i = 0; i < 100; i++) {
    rem=dec%2;
    if (rem==0) {
      binary[i]=0;
    }
    else{
      if (dec==1) {
        binary[i]=1;
        break;
      }
      binary[i]=1;
    }
    dec=Math.floor(dec/2)
  }
  binary.reverse()
  for (let i = 0; i < binary.length; i++) {
    binary_input.value += binary[i];
  }
}
function decimalToOctal() {
  octal_input.value =""
  let dec= decimal_input.value;
  let rem;
  let octal=[];
  for (let i = 0; i < 100; i++) {
    if (dec<8) {
      octal[i]=dec;
      break;
    }else{
    rem=dec%8;
    octal[i]=rem;
    dec = Math.floor(dec/8)
    }
  }
  octal.reverse()
  for (let i = 0; i < octal.length; i++) {
    octal_input.value += octal[i];
  }
}
function decimalToHexa() {
  hexa_input.value =""
  let dec= decimal_input.value;
  let rem;
  let hexa=[];
  for (let i = 0; i < 100; i++) {
    if (dec<16) {
      hexa[i]=dec;
      break;
    }else{
      rem=dec%16;
      if (rem>=10) {
        if (rem==10) {
          hexa[i]='a';
        }else
        if (rem==11) {
          hexa[i]='b';
        }
        else
        if (rem==12) {
          hexa[i]='c';
        }else
        if (rem==13) {
          hexa[i]='d';
        }else
        if (rem==14) {
          hexa[i]='e';
        }else
        if (rem==15) {
          hexa[i]='f';
        }
      }else{
        hexa[i]=rem;
      }
      
    }
    dec=Math.floor(dec/16);
  }
  hexa.reverse()
  for (let i = 0; i < hexa.length; i++) {
      hexa_input.value += hexa[i];
  }
}
decimal.addEventListener("input",function(argument) {
  decimalToBinary()
  decimalToOctal()
  decimalToHexa()
  if (decimal_input.value=="") {
    binary_input.value =""
    octal_input.value=""
    hexa_input.value=""
  }
} )

//=====octal to oth=====
function octalToBinary() {
  let octal = octal_input.value;
  if (/^[0-7]+$/.test(octal)) {
    let decimal = parseInt(octal, 8);
    let binary = decimal.toString(2);
    binary_input.value = binary;
  } else {
    octal_input.style.background="red"
    octal_input.value=""
    binary_input.value =""
    setTimeout(function() {
      octal_input.style.background="white"
    }, 10);
  }
}
function octalToDecimal() {
  let octal=octal_input.value;
  if (/^[0-7]+$/.test(octal)) {
    let decimal = parseInt(octal, 8);
    decimal_input.value = decimal;
  } else {
    octal_input.style.background="red"
    octal_input.value=""
    binary_input.value =""
    setTimeout(function() {
      octal_input.style.background="white"
    }, 10);
  }
}
function octalToHexa() {
  let octal=octal_input.value
  if (/^[0-7]+$/.test(octal)) {
    let decimal = parseInt(octal, 8);
    let hexa =decimal.toString(16);
    hexa_input.value = hexa;
  } else {
    octal_input.style.background="red"
    octal_input.value=""
    binary_input.value =""
    setTimeout(function() {
      octal_input.style.background="white"
    }, 10);
  }
}
octal_input.addEventListener("input", function() {
  octalToBinary()
  octalToDecimal()
  octalToHexa()
  if (octal_input.value=="") {
    binary_input.value="";
    decimal_input.value ="";
    hexa_input.value="";
  }
  
})

//====hexa to oth=====
function hexaToBinary() {
  let hexaInput = hexa_input.value;
  if (/^[0-9A-Fa-f]+$/.test(hexaInput)) {
    let decimalResult = parseInt(hexaInput, 16);
    let binaryResult = decimalResult.toString(2);
    binary_input.value = binaryResult;
  } else {
    hexa_input.style.background="red"
    hexa_input.value=''
    setTimeout(function() {
      hexa_input.style.background="white"
    }, 10);
  }
}
function hexaToDecimal() {
  let hexaInput = hexa_input.value;
  if (/^[0-9A-Fa-f]+$/.test(hexaInput)) {
    let decimalResult = parseInt(hexaInput, 16);
    decimal_input.value=decimalResult
  } else {
    hexa_input.style.background="red"
    hexa_input.value=''
    setTimeout(function() {
      hexa_input.style.background="white"
    }, 10);
  }
}
function hexaToOctal(argument) {
  let hexaInput = hexa_input.value;
  if (/^[0-9A-Fa-f]+$/.test(hexaInput)) {
    let decimalResult = parseInt(hexaInput, 16);
    let ocatal= decimalResult.toString(8)
    octal_input.value=ocatal
  } else {
    hexa_input.style.background="red"
    hexa_input.value=''
    setTimeout(function() {
      hexa_input.style.background="white"
    }, 10);
  }
}
hexa_input.addEventListener("input", function() {
  hexaToBinary()
  hexaToDecimal()
  hexaToOctal()
  if (hexa_input.value=="") {
    decimal_input.value ="";
    octal_input.value="";
    binary_input.value="";
  }
})
