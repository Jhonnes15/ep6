
//*parte do fatorial */
function mp_kk() {
  let n = parseInt(mp.value);
  let fat = n;

  if (n<0) {
    alert("nao use numero negativo");
  }
  else if(n==0 || n==1){
    alert("1");
  }
  else{
    while (n>1) {
        fat = fat*(n-1);
        n = n - 1;
    }
    alert(fat);
  }

}
