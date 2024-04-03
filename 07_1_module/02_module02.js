// es6
// 바로 export 시키기

export const animals = ['cat', 'dog', 'rabbit'];

export function showAnimal () {
    animals.forEach((ani) => console.log(ani));
}

export const addAnimal = (newAni) => {
    // animals 배열에 인자로 전달받은 newAni를 추가한 후
    // 해당 배열을 반환하는 함수 만들기

    // 1. 배열에 추가가 불가능
    // const newAnimalsArr = animals;
    // newAnimalsArr.push(newAni);

    // return newAnimalsArr;

    // 2. 배열 자체를 바꿔서 추가가 가능
    animals.push(newAni);

    return animals;
}