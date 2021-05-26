export const getArrowSize = (numNodes) => {
    let width = 0.9 * document.documentElement.clientWidth;
    if (numNodes < 8) 
        return width / 20;
    return width / (2.5 * numNodes);
}

export const getRadius = (numNodes) => {
    return 4 / 5 * getArrowSize(numNodes);
}

export const getOffsetDistance = (numNodes) => {
    return 2 * getRadius(numNodes) + getArrowSize(numNodes);
}
