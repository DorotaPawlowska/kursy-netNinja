// real-time litner
db.collection('recipes').onSnapshot((snapshot) => {
  // console.log(snapshot.docChanges());  
  snapshot.docChanges().forEach(change => {
    // console.log(change, change.doc.data(), change.doc.id);
    if(change.type === 'added'){
      // add doc data to web page 
      renderRecipe(change.doc.data(), change.doc.id);
    }
    if(change.type === 'removed'){
      // remove the doc data from web page
    }
  });
})