class Router {


    render() {
        var compToRender = this.props.routes.find((comp, url) => window.location.href === url);
        if (compToRender) return compToRender.render();
     }
    
    }