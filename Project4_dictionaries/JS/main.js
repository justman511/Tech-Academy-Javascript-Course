
function my_Dictionary() {
    let Animal = {
        Species: 'Dog',
        Color: 'Black',
        Breed: 'Labrador',
        Age: 5,
        Sound: 'Bark'
    };
    delete Animal.Sound;
    document.getElementById('Dictionary').innerHTML = Animal.Sound;

}