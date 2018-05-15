module.exports = function createEmpty(element)
{
    Object.create(null);
    element.textContent = ' this= ' + this + '!';
};