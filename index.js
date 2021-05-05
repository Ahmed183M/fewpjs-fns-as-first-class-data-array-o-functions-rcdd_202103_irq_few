function wake(dogName, dogBreed){
  console.log(`Wake ${dogName} the ${dogBreed}`);
}
function leash(dogName, dogBreed){
  console.log(`Leash  ${dogName} the ${dogBreed}`);
}
function walkPark(dogName, dogBreed){
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
}
function throws(dogName, dogBreed){
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}
function walkHome(dogName, dogBreed){
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
}

function unleash(dogName, dogBreed){
  console.log(`Unleash ${dogName} the ${dogBreed}`);
}

const routine = [wake(dogName, dogBreed), leash(dogName, dogBreed), walkPark(dogName, dogBreed), throws(dogName, dogBreed), walkHome(dogName, dogBreed), unleash(dogName, dogBreed)];

function exerciseDog(dogName, dogBreed){
  for(let i=0; i<routine.length){
    routine[i];
  }
}