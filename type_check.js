function type_check_v2(valeur, args) {
    for (var arg in args) {
      if(arg === "type"){
          if(typeof(valeur) !== args[arg]){
            return false;
        }
      }
      
      if(arg === "value"){
          if(valeur !== args[arg]){
            return false;
        }
      }
      
      if(arg === "enum"){
          if(!args[arg].indexOf(valeur)){
            return false;
        }
      }
    }
    return true;
  }