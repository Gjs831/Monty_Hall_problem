const shuffle = function (array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};
const doors = document.querySelectorAll("input");
const simulate = document.querySelector("#simulate");
const result = document.getElementById("result");

let door = ['goat', 'car', 'goat'];
shuffle(door);  

let door1 = door[0]; //door1에 들어있는 값 
let door2 = door[1];
let door3 = door[2];

doors.forEach((door, idx) => {
  door.addEventListener('click', (event)=>{

      if(doors[idx].value == "door1"){ //문1 선택
        //door2,3중 goat인걸 알려줌
        if(door2 == "goat"){
          alert("door2는 goat입니다.") //door1 선택 후 door2가 goat일떄
          if(confirm("door3으로 당신의 선택을 바꾸시겠습니까?")){
            alert(`바꾼 door3의 값은 ${door3}였습니다.`);
          }else{
            alert(`바꾸지 않은 door1의 값은 ${door1}였습니다.`);
          }
        }else{
          alert("door3는 goat입니다.") //door3이 goat일떄
          if(confirm("door2로 당신의 선택을 바꾸시겠습니까?")){
            alert(`바꾼 door2의 값은 ${door2}였습니다.`);
          }else{
            alert(`바꾸지 않은 door1의 값은 ${door1}였습니다.`);
          }
        }

      }else if(doors[idx].value == "door2"){ //문2
        //door1,3중 goat인걸 알려줌
        if(door1 == "goat"){ //door2를 선택 후 door1이 goat일떄
          alert("door1는 goat입니다.")
          if(confirm("door3으로 당신의 선택을 바꾸시겠습니까?")){
            alert(`바꾼 door3의 값은 ${door3}였습니다.`);
          }else{
            alert(`바꾸지 않은 door2의 값은 ${door2}였습니다.`);
          }
        }else{
          alert("door3는 goat입니다.") //door3의 goat일떄
          if(confirm("door1로 당신의 선택을 바꾸시겠습니까?")){
            alert(`바꾼 door1의 값은 ${door1}였습니다.`);
          }else{
            alert(`바꾸지 않은 door2의 값은 ${door2}였습니다.`);
          }
        }

      }else if(doors[idx].value == "door3"){ //문3
        //door1,2중 goat인걸 알려줌
        if(door2 == "goat"){
          alert("door1는 goat입니다.")//door3를 선택 후 door1이 goat일떄
          if(confirm("door2으로 당신의 선택을 바꾸시겠습니까?")){
            alert(`바꾼 door2의 값은 ${door2}였습니다.`);
          }else{
            alert(`바꾸지 않은 door3의 값은 ${door3}였습니다.`);
          }
        }else{
          alert("door2는 goat입니다.")//door2가 goat일떄
          if(confirm("door1로 당신의 선택을 바꾸시겠습니까?")){
            alert(`바꾼 door1의 값은 ${door1}였습니다.`);
          }else{
            alert(`바꾸지 않은 door3의 값은 ${door3}였습니다.`);
          }
        }
      }
  });
});


//10000번 시뮬레이터
simulate.addEventListener("click", () => {
  let cnt = 0;
  let simulations = 10000;

  for (let i = 0; i < simulations; i++) {
      let doors = ['goat', 'car', 'goat'];
      shuffle(doors);

      let playerChoice = Math.floor(Math.random() * 3); //door 랜덤 선택 0, 1, 2

        if(playerChoice == 0){//door1을 선택했을때 
          if(doors[1] == "goat"){ //door2가 goat일때
            if(doors[2] == "car"){//door1에서 door3으로 바꾼 값이 car면
              cnt++;
            }
          }else if(doors[2] == "goat"){ //door3이 goat일때
            if(doors[1] == "car"){//door1에서 door2으로 바꾼 값이 car면
              cnt++;
            }
          }

        }else if(playerChoice == 1){//door2를 선택했을때
          if(doors[0] == "goat"){ //door1이 goat일때
            if(doors[2] == "car"){//door2에서 door3으로 바꾼 값이 car면
              cnt++;
            }
          }else if(doors[2] == "goat"){// door3이 goat일때
            if(doors[0] == "car"){//door2에서 door1으로 바꾼 값이 car면
              cnt++;
            }
          }

        }else if(playerChoice == 2){//door3을을 선택했을때
          if(doors[0] == "goat"){ //door3 선택 후 door1이 goat일때
            if(doors[1] == "car"){//door3에서 door2로 바꾼 값이 car면
              cnt++;
            }
          }else if(doors[1] == "goat"){ //door2가 goat일때
            if(doors[0] == "car"){//door3에서 door1로 바꾼 값이 car면
              cnt++;
            }
          }
        }
  }
  let probability = ((cnt / simulations) * 100).toFixed(2); //cnt 확률 계산
  document.getElementById("result").textContent = `선택을 바꿨을 때 자동차를 얻을 확률: ${probability}%`;
});


