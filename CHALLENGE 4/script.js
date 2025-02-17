// Step 1
const library = [
    {
      title: 'The Road Ahead',
      author: 'Vince de Guzman',
      status: { own: true, reading: false, read: false },
    },
    {
      title: 'Facebook',
      author: 'Steve Jobs',
      status: { own: true, reading: false, read: false },
    },
    {
      title: 'Mockingjay',
      author: 'Erika Faye',
      status: { own: true, reading: false, read: false },
    },
  ];
  
  //Step2
  library[0].status.read = true;
  library[1].status.read = true;
  library[2].status.read = true;
  
  //Step 3
  const { title: firstBook } = library[0];
  console.log(firstBook);
  
  const libraryJSON = JSON.stringify(library);
  console.log(libraryJSON);
  