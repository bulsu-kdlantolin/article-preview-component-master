const authorSection = document.getElementById('author-section');
const shareSection = document.getElementById('share-section');
const sharePopup = document.getElementById('share-popup');
const shareBtn = document.getElementById('share-button');
const activeShareBtn = document.getElementById('share-active-button');

const handleShare = () => {
    if(window.innerWidth >= 768) {
        sharePopup.classList.toggle("hidden");
    } else {
        shareSection.classList.toggle("hidden");
        authorSection.classList.toggle("hidden");
    }
};

shareBtn.addEventListener('click', handleShare);
activeShareBtn.addEventListener('click', handleShare);
