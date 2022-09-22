const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ]
  // o novo array só recebe os usuarios que são
  // premium: true
  const premiumUsersTrue = users.filter(user => user.premium);

  console.log(premiumUsersTrue);
  // resultado console.log()
  //[
  //  { name: 'Ada Lovelace', premium: true },
  //  { name: 'Alan Turing', premium: true },
  //  { name: 'Margaret Hamilton', premium: true }
  //]


  // o novo array só recebe os usuarios que são
  // premium: true
  const premiumUsersFalse = users.filter(user => !user.premium);

  console.log(premiumUsersFalse);
  // resultado console.log()
  //[
  //  { name: 'Grace Hopper', premium: false },
  //  { name: 'Linus Torvalds', premium: false }
  //]