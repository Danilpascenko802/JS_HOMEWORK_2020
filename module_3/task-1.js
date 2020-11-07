console.log("TASK-1");

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

const changeUser = function(userName){
  userName.mood = "happy";
  userName.hobby = 'skydiving';
  userName.premium = false;

    const keys = Object.keys(userName);
    for(let key of keys ){
        console.log(`${key} : ${userName[key]}`);
    }
}
changeUser(user)

// DONE 