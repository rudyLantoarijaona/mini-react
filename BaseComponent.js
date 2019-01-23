export default function BaseComponent() 
{
	this.currProps = {};

	this.display = function(newProps) => {
		if (shouldUpdate(newProps)) {
			let output = this.render();

			if (!typeChecker(output, {type: 'string'})) {
                throw new TypeError(`Output not a string`);
            }

            let finalDisplay = output.interpolate()
		}
	}

	this.render = () => '';

	const shouldUpdate = (newProps) => {
		if (newProps !== this.props) {
            this.props = Object.assign({}, newProps);

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