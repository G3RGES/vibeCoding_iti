const downloadImages = () => {
  const baseUrl =
    "https://raw.githubusercontent.com/G3RGES/react-personal-portfolio/master/src/assets/img/";
  const images = [
    "project-img1.png",
    "project-img2.png",
    "project-img3.png",
    "project-img4.png",
    "project-img5.png",
    "project-img6.png",
    "project-img7.png",
    "project-img8.png",
    "project-img9.png",
    "project-img10.png",
    "project-img11.png",
    "project-img12.png",
    "project-img13.png",
    "project-img14.jpg",
    "project-img15.jpg",
    "project-img16.jpg",
    "project-img17.jpg",
    "banner-bg.png",
    "color-sharp2.png",
    "footer-bg.png",
    "header-img.svg",
    "nav-icon1.svg",
    "nav-icon2.svg",
    "nav-icon3.svg",
  ];

  for (const img of images) {
    fetch(baseUrl + img)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = img;
        link.click();
        URL.revokeObjectURL(link.href);
      })
      .catch((err) => console.error(`Error downloading ${img}:`, err));
  }
};

downloadImages();
