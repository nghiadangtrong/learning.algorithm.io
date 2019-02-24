// KHong dung de quy
function setValue(ob, name, value) {
    if(!Array.isArray(ob) && typeof ob !== "object") return value;
  
    try {
      let listName = name.split(/[\[|\.]/gi); 
  
      for(let i = 0; i < listName.length; i++) {
       
      }
      let isArray = name[0] === "["; // co phai array
      let newOb;
      let hasCName = Object.hasOwnProperty(cName);
      
      if(!hasCName) {
        if(isArray) {
          newOb[cName] = [];
        } else {
          newOb[cName] = {}
        }
        return setValue(newOb, newName, value);
      } else {
        return setValue(ob[cName], newName, value); 
      }
    } catch(e) {console.log(e);}
  }
  
   acc = {
    user : {
      name: "nghia dang trong",
      age: 14,
      phones : [111111,22222],
      address: [
        {town: "K11B"},
        {town: "Thanh hoa"}
      ]
    }
  }
  console.log(setValue(acc, "user.address[3].town", "noan"))
  
  