const friends = () => {

    const names = ['asad', 'mujahid', 'abdullah', 'emon', 'towhid', 'ashik'];
    let evenFriends = [];

    for (const name of names) {
        console.log(name);

        if (name.length % 2 === 0) {
   
           evenFriends.push(name);
   
       }
    }
    console.log('Even Names Friend are ',evenFriends);
    return evenFriends;
}

friends();
