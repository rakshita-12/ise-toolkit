function customizeCard(){
    let newGreeting=prompt("Enter a new greeting:");
    let newMessage=prompt("Enter a new message:");
    if(newGreeting!=null&& newMessage!=null){
        document.getElementById('greeting')
        .textContent=newGreeting;
        document.getElementById('message')
        .textContent=newMessage;
    }
}