function data(data){
    question.value+=data;
}
function allclear(){
    question.value=""

}
function displayquestion(){
    question.value=eval(question.value)
}
function backspace(){
    data=question.value
    question.value=data.slice(0,-1)
}