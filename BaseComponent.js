import "./interpolate.js";
import "./shouldUpdate.js";
import "./type_check.js";

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
	
}