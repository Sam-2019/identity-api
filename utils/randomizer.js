const gradientImages = {
 1: "https://images.pexels.com/photos/7130469/pexels-photo-7130469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
 2: "https://images.pexels.com/photos/6984992/pexels-photo-6984992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
 3: "https://images.pexels.com/photos/7130498/pexels-photo-7130498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
 4: "https://images.pexels.com/photos/7134994/pexels-photo-7134994.jpeg",
 5: "https://images.pexels.com/photos/7130535/pexels-photo-7130535.jpeg",
 6: "https://images.pexels.com/photos/7135057/pexels-photo-7135057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
 7: "https://images.pexels.com/photos/7130536/pexels-photo-7130536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
 8: "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2460.jpg?w=2000&t=st=1683285974~exp=1683286574~hmac=55ffe8a863d25f5bfc6e443ae0bb49195c96bc657963d82ca4008fdae753927e",
 9: "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2745.jpg?w=2000&t=st=1683286060~exp=1683286660~hmac=32e8368fb70a42dba2b979a07f5d48b1513daeb048189e4b12a7ddb390d56838",
 10: "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2566.jpg?w=2000&t=st=1683286101~exp=1683286701~hmac=bdf23a46756ce283c7f117e6146b031be6a05857f36bf9bcf827d37e5912d241",
 11: "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2458.jpg?w=2000&t=st=1683286104~exp=1683286704~hmac=751df45b4ebefa575b59558155e89d0b98ec30f787336400a5bc6b195e768c4a",
};

const getRandomItem = () => {
 const values = Object.values(gradientImages);

 return values[Math.floor(Math.random() * values.length)];
};

export { getRandomItem };
