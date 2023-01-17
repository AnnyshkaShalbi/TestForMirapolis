tree.onclick = e => {
    if (e.target.tagName != 'SPAN') return;

    let elContainer = e.target.parentNode.querySelector('ul');

    if (!elContainer) return;
    elContainer.hidden = !elContainer.hidden;
}