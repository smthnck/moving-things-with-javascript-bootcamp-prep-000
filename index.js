const app = "I don't do much."

document.addEventListener('keydown',function(e){console.log(e.which);})

document.addEventListener('keydown',function(e){if(e.which===37){var leftNumbers = dodger.style.left.replace('px',''); var left = parseInt(leftNumbers,10); dodger.style.left=`${left-1}px`}})

function moveDodgerLeft(){
  var leftNumbers=dodger.style.left.replace('px','');
  var left = parseInt(leftNumbers,10);
  if(left>0){dodger.style.left = `${left-1}px`}
  
}


document.addEventListener('keydown',function(e){if(e.which===37){moveDodgerLeft();}})

function moveDodgerRight(){
  var rightNumbers = dodger.style.left.replace('px','');
  var right = parseInt(rightNumbers,10);
  if(right>360){
    dodger.style.left = `${right+1}px`}
}

document.addEventListener('keydown',function(e){
  if(e.which===37){
    moveDodgerLeft();}
    if(e.which===39){
      moveDodgerRight();}
})


