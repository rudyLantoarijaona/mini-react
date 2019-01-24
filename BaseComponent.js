import "./interpolate.js";

export default function BaseComponent() 
{
	this.currProps = {};

	this.display = function(newProps) {
		if (shouldUpdate(newProps)) {
			let output = this.render();

			console.log(output);

			if (!type_check(output, {type: 'string'})) {
                throw new TypeError(`Output not a string`);
            }

            return output.interpolate(this.currProps);
		}
	}

	this.render = () => '';

	const shouldUpdate = (newProps) => {
		console.log(newProps);
		if (newProps !== this.currProps) {
            this.currProps = Object.assign({}, newProps);

            return true;
        }

        return false;
	}

	const type_check = (valeur, args) => {
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

}