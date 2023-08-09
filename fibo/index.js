function Fibonachi(){
    let arr =[];
    let size = 10;
    arr[0] = 1;
    for(i = 1; i <= size ; i++) {
        arr[i] = 0;
    }
    for(j = 1; j <= size; j++)  {
        for(i = j; i >= 1 ; i--) {
            document.write (arr[i-1]);
            arr[i] = arr[i-1] + arr[i];
        }
    document.write('<br>');
    }
    for(i = 0; i <= size ; i++) {
        document.write (arr[i]);
    }
}