const hamburgerMenu = document.querySelector(".hamburger__icon");
const mobileIcon = document.querySelector(".mobile__menu");

hamburgerMenu.addEventListener("click", () => {
  // alert('hello')
  hamburgerMenu.classList.toggle("active");
  mobileIcon.classList.toggle("active");
});

document.querySelectorAll(".navList").forEach((n) =>
  n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    mobileIcon.classList.remove("active");
  })
);

const pageComponent = [
  {
    title: "Header",
    img: "assets/header-snaShot.png",
    html: `    <section class="nav__section">
    <header>
      <nav class="nav__bar">
        <a href="/" class="logo">
          <img src="./assets/logo.svg" alt="" />
          Wivalilogo
        </a>

        <ul class="nav__menu">
          <li class="navList"><a href="./index.html">Home</a></li>
          <li class="navList"><a href="./service.html">Our Services</a></li>
          <li class="navList"><a href="./about.html">About Us</a></li>
          <li class="navList"><a href="./contact.html">Contact Us</a></li>
        </ul>
        <div class="nav__btn">
          <button>
            Sign up
            <span class="iconify" data-icon="feather:arrow-right"></span>
          </button>
        </div>
        <div class="hamburger__icon">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <div class="mobile__menu">
          <a href="/" class="mobile__logo">
            <img src="./assets/logo.svg" alt="" />
            Wivalilogo
          </a>
          <ul class="mobilNav__menu">
            <li class="navList"><a href="./index.html">Home</a></li>
            <li class="navList"><a href="#service">Our Services</a></li>
            <li class="navList"><a href="./about.html">About Us</a></li>
            <li class="navList"><a href="#about">Contact Us</a></li>
          </ul>
          <div class="mobileNv__btn">
            <button>Build Your Site</button>
          </div>
        </div>
      </nav>
    </header>
  </section>`,
  },
  {
    title: "Hero",
    img: "assets/hero-snapShot.png",
    html: `  <section id="about" class="hero__bg">
    <div class="hero__Section">
      <div class="hero__text">
        <h3 class="heroText">
          Get Cutting-Edge <span>Web Development</span> Features.
        </h3>
        <p class="pText hero__pText">
          Lorem ipsum dolor sit amet consectetur. Condimentum sed dui amet
          sollicitudin nullam et. Egestas proin vel quam ornare vel quam.
        </p>
        <button class="hero__btn">
          Build Your SIte
          <span class="iconify" data-icon="feather:arrow-right"></span>
        </button>
      </div>
      <div class="hero__img">
        <img src="./assets/heroImage.svg" alt="" />
      </div>
    </div>
  </section>`,
  },
  {
    title: "Service",
    img: "assets/service-snapShot.png",
    html: `  <section>
    <div class="service__section">
      <div class="service__text">
        <span>Our Services</span>
        <h3>Perfect and Fast Movement</h3>
        <p>
          We move with make a Creative Strategy for help your business goal,
          we help to improve your income by a services we have. make your
          content look interesting and make people look for your business
        </p>
        <button>
          Read more
          <span class="iconify" data-icon="feather:arrow-right"></span>
        </button>
      </div>
      <div class="service__imageGrid">
        <div class="service__gridContainer">
          <img src="./assets/service-1.svg" alt="" />
          <p>Search Engine Optimization</p>
        </div>
        <div class="service__gridContainer">
          <img src="./assets/service-2.svg" alt="" />
          <p>Social Media Management</p>
        </div>
        <div class="service__gridContainer">
          <img src="./assets/service-3.svg" alt="" />
          <p>Designs</p>
        </div>
        <div class="service__gridContainer">
          <img src="./assets/service-4.svg" alt="" />
          <p>Ads</p>
        </div>
      </div>
    </div>
  </section>
`,
  },
  {
    title: "About",
    img: "assets/aboutUs-snapShot.png",
    html: ` <section>
    <div class="teamMate__section">
      <div class="team__heading">
        <p>About us</p>
        <h3>Our Teammate</h3>
      </div>
      <div class="teamCon__flex">
        <div class="team__imageCon">
          <img src="./assets/aboutTeammate.svg" alt="" />
        </div>
        <div class="team__textCon">
          <p>
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business
          </p>
          <p>
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business
            About Us
          </p>
          <button>About Us</button>
        </div>
      </div>
    </div>
  </section>`,
  },
  {
    title: "Gallery",
    img: "assets/gallery-snapShot.png",
    html: `    <section>
    <div class="gallery__section">
      <h1>Gallery</h1>
      <div class="gallery__grid">
        <div class="gallery__imageCon">
          <img src="./assets/gallery-2.svg" alt="" />
        </div>
        <div class="gallery__imageCon">
          <img src="./assets/gallery-2 (2).svg" alt="" />
        </div>
        <div class="gallery__imageCon">
          <img src="./assets/gallery-3.svg" alt="" />
        </div>
      </div>
    </div>
  </section>`,
  },
  {
    title: "Portfolio",
    img: "assets/portfolio-snapShot.png",
    html: `   <section>
    <div class="portfolio__section">
      <div class="team__heading">
        <p>Our Portfolio</p>
        <h3>What do we do</h3>
        <span>
          all projects that we have already done , proven can help to use more
          comfortable, then can used by client from our business
        </span>
      </div>
    </div>

    <div class="portfolio__grid">
      <div class="portfolio__gridContainer">
        <img src="./assets/folio-1.svg" alt="" />
        <span>Tagline</span>
        <p>Design Web App</p>
      </div>
      <div class="portfolio__gridContainer">
        <img src="./assets/folio-2.svg" alt="" />
        <span>Tagline</span>
        <p>Cloud App</p>
      </div>
      <div class="portfolio__gridContainer">
        <img src="./assets/folio-3.svg" alt="" />
        <span>Tagline</span>
        <p>Design Furniture App</p>
      </div>
    </div>
  </section>`,
  },
  {
    title: "Testimonial",
    img: "assets/testimonial-snapShot.png",
    html: ` <section class="testimonial__section">
    <div class="team__heading">
      <p>Testimonial</p>
      <h3>People Talk about us</h3>
    </div>
    <div class="testimonial__grid">
      <div class="testimonial__gridContainer">
        <div class="profile__flex">
          <div class="profile__image">
            <img src="./assets/profile-1.svg" alt="" />
          </div>
          <div>
            <h3>Elizabeth Paul</h3>
            <span>Creative Manager</span>
          </div>
        </div>
        <div>
          <p>
            There are many variations passages of Lorem Ipsum majority some by
            words which don't look .
          </p>
        </div>
      </div>
      <div class="testimonial__gridContainer">
        <div class="profile__flex">
          <div class="profile__image">
            <img src="./assets/profile-2.svg" alt="" />
          </div>
          <div>
            <h3>Janet Branes</h3>
            <span>Creative Manager</span>
          </div>
        </div>
        <div>
          <p>
            There are many variations passages of Lorem Ipsum majority some by
            words which don't look .
          </p>
        </div>
      </div>
      <div class="testimonial__gridContainer">
        <div class="profile__flex">
          <div class="profile__image">
            <img src="./assets/profile-3.svg" alt="" />
          </div>
          <div>
            <h3>Willson Paul</h3>
            <span>Creative Manager</span>
          </div>
        </div>
        <div>
          <p>
            There are many variations passages of Lorem Ipsum majority some by
            words which don't look .
          </p>
        </div>
      </div>
    </div>
  </section>`,
  },
  {
    title: "Contact",
    img: "assets/contact-snapShot.png",
    html: `    <section>
    <div class="contact__section">
      <div class="contact__text">
        <span>Contact Us</span>
        <h1>Interesting Collaboration With Us?</h1>
        <p>Help you to reach your business goal</p>
      </div>
      <div class="contact__form">
        <form>
          <div class="contact__input">
            <input type="text" placeholder="Comapny name" />
          </div>
          <div class="contact__input">
            <input type="email" placeholder="Email" />
          </div>
          <div class="contact__input">
            <input type="tel" placeholder="Phine Number" />
          </div>
          <div class="c__check">
            <input type="checkbox" />
            <p>I accept the <span>Terms of service</span></p>
          </div>
          <div class="contact__btn">
            <button>Send Message</button>
          </div>
        </form>
      </div>
    </div>
    <div class="contact__info">
      <div>
        <h1>Request More Information</h1>
        <p>
          Lift Media, LLC is a clinical stage healthcare company which is
          developing a unique.
        </p>
      </div>
      <div class="info__btn">
        <button>Contact Us</button>
      </div>
    </div>
  </section>
`,
  },
  {
    title: "Footer",
    img: "assets/footer-snapShot.png",
    html: `   <section class="footer__section">
    <div class="foot__link">
      <a href="/" class="foot__logo">
        <img src="./assets/logo.svg" alt="" />
        WivaliLogo
      </a>
      <div class="foot__menu">
        <ul class="nav__menu">
          <li class="navList"><a href="#home">Home</a></li>
          <li class="navList"><a href="#service">Service</a></li>
          <li class="navList"><a href="#about">About Us</a></li>
          <li class="navList"><a href="#about">Contact Us</a></li>
          <li class="navList"><a href="#blog">Blog</a></li>
        </ul>
      </div>
      <div class="foot__Socials">
        <!-- LinkedIn icon -->
        <div class="icon__div">
          <span class="iconify" data-icon="brandico:linkedin-rect"></span>
        </div>

        <!-- Instagram icon -->
        <div class="icon__div">
          <span class="iconify" data-icon="entypo-social:instagram"></span>
        </div>

        <!-- Facebook icon -->
        <div class="icon__div">
          <span class="iconify" data-icon="feather:facebook"></span>
        </div>

        <!-- YouTube icon -->
        <div class="icon__div">
          <span class="iconify" data-icon="ant-design:youtube-filled"></span>
        </div>
      </div>
    </div>
  </section>`,
  },
  {
    title: "Team",
    img: "assets/team-snapShot.png",
    html: `    <section class="aboutPgae__meetSection">
    <div class="aboutPage__teamContainer">
      <h1>Meet Our Team</h1>
      <div class="aboutPage__teamContainerFlex">
        <div class="aboutPage__teamContent">
          <img src="./assets/member-1.svg" alt="" />
          <p>Team Member</p>
          <h4>Michelle Bronsk</h4>
        </div>
        <div class="aboutPage__teamContent">
          <img src="./assets/member-2.svg" alt="" />
          <p>Team Member</p>
          <h4>Emily Longford</h4>
        </div>
        <div class="aboutPage__teamContent">
          <img src="./assets/member-3.svg" alt="" />
          <p>Team Member</p>
          <h4>Brian Franklin</h4>
        </div>
        <div class="aboutPage__teamContent">
          <img src="./assets/member-4.svg" alt="" />
          <p>Team Member</p>
          <h4>James Wilson</h4>
        </div>
      </div>
    </div>
  </section>`,
  },
];
