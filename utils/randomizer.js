const gradientImages = {
 1: "https://images.pexels.com/photos/7130469/pexels-photo-7130469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
 2: "https://images.pexels.com/photos/6984992/pexels-photo-6984992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
 3: "https://images.pexels.com/photos/7130498/pexels-photo-7130498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
 4: "https://images.pexels.com/photos/7134994/pexels-photo-7134994.jpeg",
 5: "https://images.pexels.com/photos/7130535/pexels-photo-7130535.jpeg",
 6: "https://images.pexels.com/photos/7135057/pexels-photo-7135057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
 7: "https://images.pexels.com/photos/7130536/pexels-photo-7130536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
 8: "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2460.jpg",
 9: "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2745.jpg",
 10: "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2566.jpg",
 11: "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2458.jpg"
};

const getRandomItem = () => {
 const values = Object.values(gradientImages);

 return values[Math.floor(Math.random() * values.length)];
};

export { getRandomItem };
