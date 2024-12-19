window.onload = function() {
    // Check if the alert has been shown before
    if (!localStorage.getItem('alertShown')) {
        alert("To better experience, use DESKTOP mode");
        localStorage.setItem('alertShown', 'true');
    }
};

let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');
let searchInput = document.querySelector('.searchBox input');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');

// Function to handle search button click
searchBtn.onclick = function () {
    let userInput = searchInput.value.trim(); // Get the input value and trim spaces
    if (userInput) {
        // If user has entered input, show alert
        alert('This feature is under maintenance');
    } 

    // Existing functionality for toggling UI
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
    menuToggle.classList.add('hide');
    header.classList.remove('open');
};

// Close button functionality
closeBtn.onclick = function () {
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
    menuToggle.classList.remove('hide');
};

// Menu toggle functionality
menuToggle.onclick = function () {
    header.classList.toggle('open');
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
};


let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

document.getElementById('search-button').addEventListener('click', function() {
        var query = document.getElementById('search-bar').value;
        if (query) {
            // Redirect to DuckDuckGo with the search query
            window.open('https://duckduckgo.com/?q=' + encodeURIComponent(query), '_blank');
        }
    });

    const football = document.getElementById('football');
const footballSize = 50; 
let posX = Math.random() * (window.innerWidth - footballSize);
let posY = Math.random() * (window.innerHeight - footballSize);
let speed = 8; // speed
let deltaX = (Math.random() - 0.5) * speed; // Random speed in X direction
let deltaY = (Math.random() - 0.5) * speed; // Random speed in Y direction

function setInitialPosition() {
    football.style.left = posX + 'px';
    football.style.top = posY + 'px';
}

function moveFootball() {
    // Update position
    posX += deltaX;
    posY += deltaY;

    // Check for collision with the left and right edges
    if (posX + footballSize > window.innerWidth) {
        deltaX *= -1; // Reverse direction
        posX = window.innerWidth - footballSize; // Keep within bounds
    } else if (posX < 0) {
        deltaX *= -1; // Reverse direction
        posX = 0; // Keep within bounds
    }

    // Check for collision with the top and bottom edges
    if (posY + footballSize > window.innerHeight) {
        deltaY *= -1; 
        posY = window.innerHeight - footballSize; // Keep within bounds
    } else if (posY < 0) {
        deltaY *= -1; // Reverse direction
        posY = 0; // Keep within bounds
    }

    // Set the new position
    football.style.left = posX + 'px';
    football.style.top = posY + 'px';

    requestAnimationFrame(moveFootball);
}

setInitialPosition();
moveFootball();
  

   // Movie data
const movies = [
    { id: 1, title: 'Fifty Shades of Gray', poster: 'https://images.moviesanywhere.com/e3c878e40af8261babf5111b2295a3de/743951f3-8533-4f38-90ce-a8f643be9241.jpg', description: '"Fifty Shades of Grey" is a romantic novel about Anastasia Steele complicated relationship with Christian Grey, a wealthy businessman with a taste for BDSM, exploring themes of love, power, and desire.', link: 'lixir.html' },
    { id: 2, title: 'My Fault', poster: 'https://image.tmdb.org/t/p/w500/w46Vw536HwNnEzOa7J24YH9DPRS.jpg/200x300', description: "Noah leaves her town with her mother Rafaella, leaving behind her boyfriend Dan and her friends, to move into the mansion of her mother's new husband William Leister. She meets her step brother Nick and they start hating each other.But after some days Noah starts having feelings for Nick and so she keeps Dan at bay. ", link: 'lixir.html' },
    { id: 3, title: 'The Next 365 Days', poster: 'https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/2a/9a7ce3665edf717fa02bcd81abb3a848_300x442.jpg?t=1659989205', description: "After a meeting between the Torricelli Sicilian Mafia crime family and black market dealers, Massimo Torricelli watches a beautiful woman named Laura Biel on a beach. what happen to be next ?? To know that see the movie.", link: 'lixir.html' },
    { id: 5, title: 'After We Fell ', poster: 'https://th.bing.com/th/id/OIP.l6S60FW5_rP-z0xgS1wtLwHaLH?w=1280&h=1920&rs=1&pid=ImgDetMain', description: "Just as Tessa makes the biggest decision of her life, everything changes. Revelations about her family, and then Hardin's, throw everything they knew before in doubt and makes their hard-won future together more difficult to claim.", link: 'lixir.html' },
    { id: 6, title: 'The In Between', poster: 'https://m.media-amazon.com/images/M/MV5BYTY1NGVjMDQtZjEyMS00NWQyLWIwZDEtYTJmMDlhOGNhOGNiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg', description: "After losing the love of her life in a tragic accident, a brokenhearted teen begins to believe that he's sending her signs from beyond the grave.", link: 'lixir.html' },
    { id: 7, title: 'Midnight Sun', poster: 'https://assets.nflxext.com/us/boxshots/hd1080/80168087.jpg', description: "Based on the Japanese film, Midnight Sun centers on Katie, a 17-year-old sheltered since childhood and confined to her house during the day by a rare disease that makes even the smallest amount of sunlight deadly. Fate intervenes when she meets Charlie and they embark on a summer romance.", link: 'lixir.html' },
    { id: 8, title: 'Ghosted', poster: 'https://m.media-amazon.com/images/M/MV5BNzU4YzBiOWItNmQ4MS00YmUzLWJjMzItMGYyNzY1NzA0MGZjXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_.jpg', description: "Cole falls head over heels for enigmatic Sadie, but then makes the shocking discovery that she's a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.", link: 'lixir.html' },
    { id: 9, title: 'Fifty Shades Darker', poster: 'https://th.bing.com/th/id/OIP.A-vr4yTbIfM2HtOyAXgCBgHaLH?w=500&h=750&rs=1&pid=ImgDetMain', description: "Christian and Ana decide to rekindle their relationship, except this time there are no more rules or punishments. As they begin to get used to their newfound relationship, Christian's past begins to haunt Ana as Christian struggles with his innermost thoughts.", link: 'lixir.html' },
    { id: 10, title: 'After', poster: 'https://i.pinimg.com/736x/8f/2b/bb/8f2bbbb6c3eb6e0cedf03c700487054c.jpg', description: 'A computer hacker learns from mysterious rebels about the true nature of his reality.', link: 'https://youtu.be/link-to-matrix' },
    { id: 11, title: 'The Matrix', poster: 'https://via.placeholder.com/200x300', description: 'A computer hacker learns from mysterious rebels about the true nature of his reality.', link: 'https://youtu.be/link-to-matrix' },
    { id: 12, title: 'The Matrix', poster: 'https://via.placeholder.com/200x300', description: 'A computer hacker learns from mysterious rebels about the true nature of his reality.', link: 'https://youtu.be/link-to-matrix' },
    { id: 13, title: 'The Matrix', poster: 'https://via.placeholder.com/200x300', description: 'A computer hacker learns from mysterious rebels about the true nature of his reality.', link: 'https://youtu.be/link-to-matrix' },
    { id: 14, title: 'The Matrix', poster: 'https://via.placeholder.com/200x300', description: 'A computer hacker learns from mysterious rebels about the true nature of his reality.', link: 'https://youtu.be/link-to-matrix' },
    { id: 15, title: 'The Matrix', poster: 'https://via.placeholder.com/200x300', description: 'A computer hacker learns from mysterious rebels about the true nature of his reality.', link: 'https://youtu.be/link-to-matrix' },
    { id: 16, title: 'The Matrix', poster: 'https://via.placeholder.com/200x300', description: 'A computer hacker learns from mysterious rebels about the true nature of his reality.', link: 'https://youtu.be/link-to-matrix' },
];

// Function to open movie link
// Function to redirect to the provided movie link
function redirectToMovie(url) {
    if (url) {
        window.location.href = url; // Redirects to the specified URL
    } else {
        alert('No link available for this movie.');
    }
}


// Function to display movies on the page
function displayMovies(movieList) {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = ''; // Clear current movies
    movieList.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.setAttribute('data-id', movie.id); // Add a data-id attribute for identification
        movieItem.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" onclick="toggleMovieBox(${movie.id})">
            <h3>${movie.title}</h3>
            <p class="movie-description">${movie.description}</p>
            <button onclick="redirectToMovie('${movie.link}')">Download</button>
        `;
        movieGrid.appendChild(movieItem);
    });
}
// Function to handle movie box clicks and toggle visibility of description and button
function toggleMovieBox(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        document.getElementById('movieTitle').textContent = movie.title;
        document.getElementById('moviePoster').src = movie.poster;
        document.getElementById('movieDescription').textContent = movie.description;

        const downloadBtn = document.getElementById('downloadBtn');
        downloadBtn.onclick = () => redirectToMovie(movie.link);

        document.getElementById('movieModal').style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('movieModal').style.display = 'none';
}


// Function to close the modal
function closeModal() {
    document.getElementById('movieModal').style.display = 'none';
}

// Function to search for movies by title
function searchMovie() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
    displayMovies(filteredMovies);
}

// Initial display of all movies
displayMovies(movies);


