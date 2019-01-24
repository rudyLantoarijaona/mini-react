const shouldUpdate = (newProps) => {
    console.log(newProps);
    if (newProps !== this.currProps) {
        this.currProps = Object.assign({}, newProps);

        return true;
    }

    return false;
}